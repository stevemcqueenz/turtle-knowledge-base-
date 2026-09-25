#!/usr/bin/env python3
"""Dungeon and raid maps for the Field Manual site, from the Turtle WoW client.

For every guide/instances/<slug>.md page (and each H2 of vanilla-dungeons.md) it
resolves the instance's map by name in the client's Map.dbc, then renders:

  * the instance's WMO minimap textures (textures/Minimap/<md5>.blp, resolved via
    md5translate.trs as World/wmo/.../<wmo>_<group>_<x>_<y>.blp), placed in world
    space by the WDT/ADT MODF placement, split into levels where rooms stack;
  * the map's ADT minimap blocks (<mapdir>/map<col>_<row>.blp) as an "outside"
    view when a real share of the instance's creatures stand outside the WMO;
  * under the textures, a faint walkable-area silhouette from the server navmesh
    (data/mmaps), which fills the gaps the client never textured (outdoor
    courtyards inside WMO dungeons). A map with no minimap texture at all gets a
    navmesh-only floor plan (kind "floorplan").

Outputs (see README.md):
  site/public/maps/<slug>/<floor>.webp, <slug>/thumb.webp
  site/scripts/maps-source.json   floors + transforms + candidate boss spawns
                                  (build-data.py turns these into markers)

usage: python extract_maps.py [--only slug,slug] [--debug DIR]
"""
import argparse
import copy
import json
import math
import os
import re
import sys

import numpy as np
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

from analyze import group_masks, relevant_placements, spawns_in_group, split_levels  # noqa: E402
from mpq import MPQChain  # noqa: E402
from navmesh import map_polys  # noqa: E402
from render import View, alpha_mask, draw_adt, draw_group, group_world_bounds  # noqa: E402
import spawns as SP  # noqa: E402
from wowdata import WMO, adt_tile_index, map_layout, maps_dbc, parse_trs, wmo_tile_index  # noqa: E402

KB = os.path.abspath(os.path.join(HERE, "..", ".."))
CLIENT = os.environ.get("TW_CLIENT_DATA", "/home/agent/work/TurtleWoW/server/client/Data")
SERVER = os.environ.get("TW_SERVER", "/home/agent/work/TurtleWoW/server")
SQL = os.environ.get("TW_SQL", os.path.join(SERVER, "source", "tortoise-wow", "sql"))
MMAPS = os.environ.get("TW_MMAPS", os.path.join(SERVER, "data", "mmaps"))
GUIDE = os.path.join(KB, "guide", "instances")
OUT = os.path.join(KB, "site", "public", "maps")
SOURCE_JSON = os.path.join(KB, "site", "scripts", "maps-source.json")

LONG_SIDE = 1600      # max px of a floor image
MIN_SIDE = 700        # upscale tiny maps up to this (keeps markers legible)
THUMB = (360, 220)
WEBP_Q = 80
MAX_BYTES = 250_000

# Page title -> Map.dbc name where they differ (resolution is still by name).
TITLE_ALIASES = {
    "temple of ahn'qiraj": "Ahn'Qiraj Temple",
    "lower blackrock spire": "Blackrock Spire",
    "upper blackrock spire": "Blackrock Spire",
    "black morass": "Caverns of Time",
    "the stockade": "Stormwind Stockade",
    "sunken temple": "Sunken Temple",
}
MULTI_MAP_PAGES = {"vanilla-dungeons"}   # one map per H2 section
SKIP_PAGES = {"index", "world-bosses"}

# Friendly names for the WMO placements that are an instance's own wings.
WMO_LABELS = {
    "monestary_cemetery": "Graveyard",
    "monestary_library": "Library",
    "monestary_war": "Armory",
    "monestary_cathedral": "Cathedral",
    "stratholme_raid": "Necropolis",
    "frostwyrm_final01": "Frostwyrm Lair",
}


def norm(s):
    s = s.replace("’", "'").lower()
    s = re.sub(r"\([^)]*\)", "", s)
    s = re.sub(r"^caverns of time:\s*", "", s.strip())
    return re.sub(r"\s+", " ", s).strip()


def resolve(title, maps):
    t = norm(title)
    t = TITLE_ALIASES.get(t, t)
    by = {norm(m["name"]): mid for mid, m in maps.items() if m["type"] in (1, 2)}
    for cand in (norm(t), norm(re.sub(r"^the\s+", "", t))):
        if cand in by:
            return by[cand]
    return None


def page_targets(maps):
    """[(slug, [(mapId, label or None)])] from the guide pages."""
    out = []
    for f in sorted(os.listdir(GUIDE)):
        if not f.endswith(".md"):
            continue
        slug = f[:-3]
        if slug in SKIP_PAGES:
            continue
        text = open(os.path.join(GUIDE, f), encoding="utf-8").read()
        if slug in MULTI_MAP_PAGES:
            tg = []
            for h in re.findall(r"^##\s+(.+)$", text, re.M):
                mid = resolve(h, maps)
                if mid is not None:
                    tg.append((mid, h.strip()))
            out.append((slug, tg))
            continue
        m = re.search(r"^#\s+(.+)$", text, re.M)
        mid = resolve(m.group(1), maps) if m else None
        out.append((slug, [(mid, None)] if mid is not None else []))
    return out


class Ctx:
    def __init__(self):
        self.mpq = MPQChain(CLIENT)
        self.trs = parse_trs(self.mpq.read("textures\\Minimap\\md5translate.trs"))
        self.wt = wmo_tile_index(self.trs)
        self.at = adt_tile_index(self.trs)
        self.maps = maps_dbc(self.mpq.read("DBFilesClient\\Map.dbc"))
        self.spawns, self.templates = SP.load(SQL)
        self.blp, self.gimg, self.wmos, self.nav = {}, {}, {}, {}

    def wmo(self, path):
        k = path.lower()
        if k not in self.wmos:
            self.wmos[k] = WMO(self.mpq, self.wt, path)
        return self.wmos[k]

    def navpolys(self, mid):
        if mid not in self.nav:
            self.nav[mid] = map_polys(MMAPS, mid)
        return self.nav[mid]


def draw_nav(canvas, view, polys, zlo, zhi, fill=(92, 84, 70, 150)):
    dr = ImageDraw.Draw(canvas)
    n = 0
    for pts, _a in polys:
        zs = [p[2] for p in pts]
        if max(zs) < zlo or min(zs) > zhi:
            continue
        xy = [view.px(p[0], p[1]) for p in pts]
        if all(c < 0 or c > view.W for c, _ in xy) or all(r < 0 or r > view.H for _, r in xy):
            continue
        dr.polygon(xy, fill=fill)
        n += 1
    return n


def nav_in_wmo(polys, cents, pl, w, pad=1.5, zpad=3.0):
    """The navmesh polygons whose centre lies inside one of the WMO's groups
    (indoor or outdoor) under placement pl."""
    if not len(polys):
        return []
    c, s = math.cos(pl.theta), math.sin(pl.theta)
    dx, dy, dz = cents[:, 0] - pl.T[0], cents[:, 1] - pl.T[1], cents[:, 2] - pl.T[2]
    lx, ly = c * dx + s * dy, -s * dx + c * dy
    keep = np.zeros(len(polys), bool)
    for g in w.groups:
        x0, y0, z0, x1, y1, z1 = g["bb"]
        keep |= (lx >= x0 - pad) & (lx <= x1 + pad) & (ly >= y0 - pad) & (ly <= y1 + pad) & (dz >= z0 - zpad) & (dz <= z1 + zpad)
    return [p for p, k in zip(polys, keep) if k]


def crop_box(img, pad):
    """Bounding box of the drawn content: opaque and not the black filler the
    client paints around terrain minimaps."""
    a = np.asarray(img)
    m = (a[:, :, 3] > 24) & (a[:, :, :3].max(axis=2) > 14)
    rows, cols = np.where(m.any(axis=1))[0], np.where(m.any(axis=0))[0]
    if not len(rows):
        return None
    return (max(0, int(cols[0]) - pad), max(0, int(rows[0]) - pad),
            min(img.width, int(cols[-1]) + 1 + pad), min(img.height, int(rows[-1]) + 1 + pad))


def finish(img, view):
    """Crop to content, fit to LONG_SIDE, return (image, transform dict)."""
    box = crop_box(img, int(6 * view.S)) or (0, 0, img.width, img.height)
    img = img.crop(box)
    k = min(1.0, LONG_SIDE / max(img.size))
    if max(img.size) * k < MIN_SIDE:
        k = MIN_SIDE / max(img.size)
    if k != 1.0:
        img = img.resize((max(1, round(img.width * k)), max(1, round(img.height * k))), Image.LANCZOS)
    s = view.S * k
    tr = {"xmax": round(view.xmax - box[1] / view.S, 3), "ymax": round(view.ymax - box[0] / view.S, 3), "s": round(s, 6)}
    return img, tr


def save_webp(img, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    q = WEBP_Q
    while True:
        img.save(path, "WEBP", quality=q, alpha_quality=70, method=6)
        if os.path.getsize(path) <= MAX_BYTES or q <= 40:
            return
        q -= 8


def wmo_name(path):
    return path.lower().replace("/", "\\").rsplit("\\", 1)[-1][:-4]


def in_level(ctx, level_items, x, y, z):
    for pl, g in level_items:
        if spawns_in_group(pl, g, [(x, y, z)], pad=2.0, zpad=4.0):
            return True
    return False


def build_map(ctx, mid, debug=None):
    """-> list of floor dicts (with 'image' PIL objects) for one map."""
    mdir = ctx.maps[mid]["dir"]
    blocks, places = map_layout(ctx.mpq, mdir)
    sp = ctx.spawns.get(mid, [])
    pts = [(x, y, z) for _g, _e, x, y, z in sp]
    bosses = [(x, y, z) for _g, e, x, y, z in sp if ctx.templates.get(e, {}).get("rank") == 3]
    wm = {pl.wmo.lower(): ctx.wmo(pl.wmo) for pl in places}
    tiles = {k: v for k, v in ctx.at.get(mdir.lower(), {}).items() if k in blocks}
    polys = ctx.navpolys(mid)
    cents = np.array([[sum(p[k] for p in pts_) / len(pts_) for k in range(3)] for pts_, _a in polys]) if polys else np.zeros((0, 3))
    rel = relevant_placements(places, wm, pts)
    # keep small wings that hold a boss (e.g. Naxxramas' Frostwyrm Lair)
    for pl in places:
        w = wm.get(pl.wmo.lower())
        if not w or any(r[0] is pl for r in rel) or not w.minimap_groups():
            continue
        if bosses and sum(spawns_in_group(pl, g, bosses) for g in w.minimap_groups()):
            rel.append((pl, w, w.minimap_groups(), 0))
    if tiles and pts:
        # on a terrain map, a building is only worth its own floor if a real share
        # of the instance stands in it, or a boss does
        rel = [r for r in rel if r[3] >= 0.08 * len(pts)
               or (bosses and sum(spawns_in_group(r[0], g, bosses) for g in r[2]))]
    if not pts:
        # no spawns in the server dump (content newer than it): the instance's own
        # WMO is the one holding most of the walkable navmesh
        scored = []
        for pl in places:
            w = wm.get(pl.wmo.lower())
            if not w or len(w.minimap_groups()) < 5:
                continue
            ind = copy.copy(w)
            ind.groups = w.minimap_groups()
            scored.append((len(nav_in_wmo(polys, cents, pl, ind)), pl, w))
        best = max((s_ for s_, _p, _w in scored), default=0)
        rel = [(pl, w, w.minimap_groups(), 0) for s_, pl, w in scored if best and s_ >= 0.4 * best]
    order = list(WMO_LABELS)
    rel.sort(key=lambda r: order.index(wmo_name(r[0].wmo)) if wmo_name(r[0].wmo) in order else -1)
    floors = []
    all_level_items = []
    multi = len(rel) > 1
    for pl, w, gs, hits in rel:
        items = [(pl, g) for g in gs]
        if tiles:
            # the terrain view shows the outdoors; shade only the WMO's indoor floors
            ind = copy.copy(w)
            ind.groups = [g for g in w.groups if g["flags"] & 0x2000]
            wnav = nav_in_wmo(polys, cents, pl, ind)
        else:
            wnav = nav_in_wmo(polys, cents, pl, w)
        _v, masks = group_masks(items, ctx.mpq, ctx.gimg, ctx.blp)
        levels = split_levels(items, masks)
        wname = wmo_name(pl.wmo)
        wlabel = WMO_LABELS.get(wname)
        for li, lv in enumerate(levels):
            sub = [items[i] for i in lv]
            all_level_items.append(sub)
            b = [group_world_bounds(p, g) for p, g in sub]
            xs0, xs1, ys0, ys1 = zip(*b)
            zlo = min(g["bb"][2] for _p, g in sub) + pl.T[2] - 4
            zhi = max(g["bb"][5] for _p, g in sub) + pl.T[2] + 4
            span = max(max(xs1) - min(xs0), max(ys1) - min(ys0))
            S = min(2.0, 5000.0 / span)
            view = View(min(xs0) - 20, max(xs1) + 20, min(ys0) - 20, max(ys1) + 20, S)
            can = Image.new("RGBA", (view.W, view.H))
            draw_nav(can, view, wnav, zlo, zhi)
            for p, g in sorted(sub, key=lambda t: t[1]["bb"][2]):
                draw_group(can, view, p, g, ctx.gimg, ctx.mpq, ctx.blp)
            if len(levels) == 1:
                label = wlabel or ("Interior" if multi or ctx.at.get(mdir.lower()) else "Map")
            else:
                names = ["Lower level", "Upper level"] if len(levels) == 2 else ["Level %d" % (k + 1) for k in range(len(levels))]
                label = ((wlabel + ": ") if wlabel else "") + names[li]
            floors.append({"label": label, "kind": "minimap", "canvas": can, "view": view,
                           "items": sub, "zlo": zlo, "zhi": zhi, "wmo": wname,
                           "all": [(pl, g) for g in w.groups]})
    # outdoor / ADT view
    inside = [p for p in pts if any(in_level(ctx, it, *p) for it in all_level_items)] if all_level_items else []
    outside = [p for p in pts if p not in set(inside)] if inside else pts
    if tiles and pts and (not floors or len(outside) >= 0.12 * len(pts)):
        src = outside if len(outside) >= 10 else pts
        xs = sorted(p[0] for p in src)
        ys = sorted(p[1] for p in src)
        lo = max(0, int(len(xs) * 0.005))
        x0, x1, y0, y1 = xs[lo], xs[-1 - lo], ys[lo], ys[-1 - lo]
        span = max(x1 - x0, y1 - y0) + 160
        S = min(2.0, 4000.0 / span)
        view = View(x0 - 80, x1 + 80, y0 - 80, y1 + 80, S)
        can = Image.new("RGBA", (view.W, view.H))
        draw_adt(can, view, tiles, ctx.mpq, ctx.blp)
        fl = {"label": "Outside" if floors else "Map", "kind": "minimap", "canvas": can, "view": view,
              "items": None, "zlo": -1e9, "zhi": 1e9, "wmo": None}
        if len(outside) >= 0.5 * len(pts):
            floors.insert(0, fl)
        else:
            floors.append(fl)
    if tiles and not pts:
        # no spawns: frame the terrain by the navmesh inside the textured blocks
        inb = [c for c in cents if (int(32 - c[1] / 533.3333), int(32 - c[0] / 533.3333)) in tiles]
        if inb:
            arr = np.array(inb)
            x0, x1 = np.percentile(arr[:, 0], [0.5, 99.5])
            y0, y1 = np.percentile(arr[:, 1], [0.5, 99.5])
            span = max(x1 - x0, y1 - y0) + 80
            S = min(2.0, 4000.0 / span)
            view = View(x0 - 40, x1 + 40, y0 - 40, y1 + 40, S)
            can = Image.new("RGBA", (view.W, view.H))
            draw_adt(can, view, tiles, ctx.mpq, ctx.blp)
            wshare = sum(len(nav_in_wmo(polys, cents, r[0], r[1])) for r in rel) / max(1, len(inb))
            fl = {"label": "Outside" if floors else "Map", "kind": "minimap", "canvas": can, "view": view,
                  "items": None, "zlo": -1e9, "zhi": 1e9, "wmo": None}
            if wshare < 0.5:
                floors.insert(0, fl)
            else:
                floors.append(fl)
    if not floors and polys and pts:
        xs = [p[0] for p in pts]
        ys = [p[1] for p in pts]
        span = max(max(xs) - min(xs), max(ys) - min(ys)) + 120
        S = min(2.0, 4000.0 / span)
        view = View(min(xs) - 60, max(xs) + 60, min(ys) - 60, max(ys) + 60, S)
        can = Image.new("RGBA", (view.W, view.H))
        draw_nav(can, view, polys, -1e9, 1e9, fill=(150, 132, 100, 255))
        floors.append({"label": "Floor plan", "kind": "floorplan", "canvas": can, "view": view,
                       "items": None, "zlo": -1e9, "zhi": 1e9, "wmo": None})
    for f in floors:
        f["image"], f["transform"] = finish(f.pop("canvas"), f["view"])
    return floors


def locate(floors, x, y, z):
    """Index of the floor a world point belongs to, or None."""
    best, score = None, -1
    for i, f in enumerate(floors):
        t = f["transform"]
        c, r = (t["ymax"] - y) * t["s"], (t["xmax"] - x) * t["s"]
        W, H = f["image"].size
        if not (0 <= c < W and 0 <= r < H):
            continue
        sc = 1
        if f["items"] is not None:
            if any(spawns_in_group(p, g, [(x, y, z)], pad=2.0, zpad=4.0) for p, g in f["items"]):
                sc = 3
            elif f["zlo"] <= z <= f["zhi"] and any(spawns_in_group(p, g, [(x, y, z)], pad=2.0, zpad=4.0) for p, g in f["all"]):
                sc = 2
            else:
                sc = 0.25
        a = f["image"].getpixel((int(c), int(r)))[3] if f["image"].mode == "RGBA" else 255
        if a > 24:
            sc += 0.5
        if sc > score:
            best, score = i, sc
    return best


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", default="")
    ap.add_argument("--debug", default="")
    args = ap.parse_args()
    only = set(filter(None, args.only.split(",")))
    ctx = Ctx()
    source = {"generated": "tools/maps/extract_maps.py",
              "provenance": {"minimap": "Turtle WoW 1.18.1 client minimap textures",
                             "floorplan": "server navmesh (walkable area)"},
              "pages": {}}
    if only and os.path.exists(SOURCE_JSON):
        source["pages"] = json.load(open(SOURCE_JSON))["pages"]
    for slug, targets in page_targets(ctx.maps):
        if only and slug not in only:
            continue
        print(slug, [(m, ctx.maps[m]["name"]) for m, _ in targets])
        pdir = os.path.join(OUT, slug)
        if os.path.isdir(pdir):
            for f in os.listdir(pdir):
                os.remove(os.path.join(pdir, f))
        entries = []
        for mid, prefix in targets:
            floors = build_map(ctx, mid)
            # candidate boss spawns: named elites/bosses with at most 3 spawns on the map
            counts = {}
            for _g, e, *_ in ctx.spawns.get(mid, []):
                counts[e] = counts.get(e, 0) + 1
            cands = {}
            for _g, e, x, y, z in ctx.spawns.get(mid, []):
                t = ctx.templates.get(e)
                if not t or t["rank"] < 1 or counts[e] > 3 or len(t["name"]) < 4:
                    continue
                fi = locate(floors, x, y, z)
                if fi is None:
                    continue
                cands.setdefault(fi, []).append((t["name"], t["rank"], e, x, y, z))
            if any(f["wmo"] is None and f["kind"] == "minimap" for f in floors) and ctx.spawns.get(mid):
                # beside a terrain view, a building floor with no named boss adds nothing
                keep = [i for i, f in enumerate(floors) if f["wmo"] is None or cands.get(i)]
                floors = [floors[i] for i in keep]
                cands = {keep.index(i): v for i, v in cands.items() if i in keep}
            for i, f in enumerate(floors):
                n = len(entries) + 1
                fid = "f%d" % n
                label = f["label"] if not prefix else (prefix if len(floors) == 1 else "%s: %s" % (prefix, f["label"]))
                path = os.path.join(pdir, fid + ".webp")
                save_webp(f["image"], path)
                tr = f["transform"]
                pois = []
                seen = set()
                for name, rank, e, x, y, z in cands.get(i, []):
                    if name in seen:
                        continue
                    seen.add(name)
                    pois.append({"name": name, "entry": e, "rank": rank,
                                 "x": round((tr["ymax"] - y) * tr["s"] / f["image"].width, 4),
                                 "y": round((tr["xmax"] - x) * tr["s"] / f["image"].height, 4)})
                entries.append({"floor": fid, "label": label, "file": "maps/%s/%s.webp" % (slug, fid),
                                "width": f["image"].width, "height": f["image"].height, "kind": f["kind"],
                                "mapId": mid, "map": ctx.maps[mid]["name"], "transform": tr,
                                "bytes": os.path.getsize(path), "pois": pois})
                print("   ", fid, label, f["image"].size, os.path.getsize(path), "bytes,", len(pois), "pois")
                if args.debug:
                    os.makedirs(args.debug, exist_ok=True)
                    dbg = f["image"].copy()
                    dr = ImageDraw.Draw(dbg)
                    for p in pois:
                        cx, cy = p["x"] * dbg.width, p["y"] * dbg.height
                        dr.ellipse((cx - 5, cy - 5, cx + 5, cy + 5), fill=(255, 40, 40, 255))
                        dr.text((cx + 6, cy - 6), p["name"], fill=(255, 255, 0, 255))
                    bg = Image.new("RGBA", dbg.size, (30, 30, 30, 255))
                    bg.alpha_composite(dbg)
                    bg.convert("RGB").save(os.path.join(args.debug, "%s_%s.jpg" % (slug, fid)), quality=75)
        if entries:
            # index-card thumbnail from the first floor
            first = Image.open(os.path.join(OUT, entries[0]["file"][5:])).convert("RGBA")
            th = first.copy()
            th.thumbnail((THUMB[0] * 2, THUMB[1] * 2))
            bg = Image.new("RGBA", th.size, (0, 0, 0, 0))
            bg.alpha_composite(th)
            bg.thumbnail(THUMB)
            tp = os.path.join(pdir, "thumb.webp")
            bg.save(tp, "WEBP", quality=70, method=6)
            source["pages"][slug] = {"floors": entries, "thumb": "maps/%s/thumb.webp" % slug,
                                     "thumbWidth": bg.width, "thumbHeight": bg.height}
        else:
            source["pages"].pop(slug, None)
    os.makedirs(os.path.dirname(SOURCE_JSON), exist_ok=True)
    with open(SOURCE_JSON, "w", encoding="utf-8") as fh:
        json.dump(source, fh, indent=1, ensure_ascii=False)
        fh.write("\n")
    tot = sum(os.path.getsize(os.path.join(r, f)) for r, _d, fs in os.walk(OUT) for f in fs)
    print("wrote", SOURCE_JSON, "; assets", tot, "bytes")


if __name__ == "__main__":
    main()
