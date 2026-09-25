"""Per-map analysis: which ADT/WMO minimap data belongs to an instance, and how
its WMO groups split into levels. Used by extract_maps.py.
"""
import numpy as np
from PIL import Image

from render import View, alpha_mask, draw_group, group_world_bounds

INDOOR = 0x2000


def spawns_in_group(pl, g, pts, pad=3.0, zpad=6.0):
    x0, y0, z0, x1, y1, z1 = g["bb"]
    n = 0
    for (x, y, z) in pts:
        lx, ly, lz = pl.to_local(x, y, z)
        if x0 - pad <= lx <= x1 + pad and y0 - pad <= ly <= y1 + pad and z0 - zpad <= lz <= z1 + zpad:
            n += 1
    return n


def relevant_placements(places, wmos, pts):
    """Placements whose minimap groups contain spawns: [(pl, wmo, groups, hits)]."""
    out = []
    for pl in places:
        w = wmos.get(pl.wmo.lower())
        if not w:
            continue
        gs = w.minimap_groups()
        if not gs:
            continue
        hits = sum(spawns_in_group(pl, g, pts) for g in gs)
        if hits >= max(3, 0.02 * len(pts)) or (not pts and pl.is_global):
            out.append((pl, w, gs, hits))
    return out


def group_masks(items, mpq, img_cache, blp_cache, S=0.5):
    """items [(pl, g)] -> (View, [bool mask per item]) at a coarse scale."""
    xs0, xs1, ys0, ys1 = [], [], [], []
    for pl, g in items:
        a, b, c, d = group_world_bounds(pl, g)
        xs0.append(a); xs1.append(b); ys0.append(c); ys1.append(d)
    view = View(min(xs0) - 4, max(xs1) + 4, min(ys0) - 4, max(ys1) + 4, S)
    masks = []
    for pl, g in items:
        can = Image.new("RGBA", (view.W, view.H))
        draw_group(can, view, pl, g, img_cache, mpq, blp_cache)
        masks.append(alpha_mask(can, 40))
    return view, masks


def split_levels(items, masks, overlap=0.12, zsep=8.0, min_share=0.15, min_hidden=0.08):
    """Greedy layering in z order: a group joins the lowest level where it does
    not stack over (or under) another group -- stacking = footprints overlapping
    by more than `overlap` of the smaller one AND z centres `zsep` yd apart.
    Levels under `min_share` of the drawn area fold into the level below (drawn
    on top). If one composite (lowest first) would hide less than `min_hidden`
    of the area, everything stays on one level. -> [[item index...]], lowest first."""
    zmid = [(it[1]["bb"][2] + it[1]["bb"][5]) / 2 for it in items]
    order = sorted(range(len(items)), key=lambda i: zmid[i])
    area = [int(m.sum()) for m in masks]
    levels = []  # [idx list, union mask]
    for i in order:
        if area[i] == 0:
            continue
        for lv in levels:
            clash = False
            for j in lv[0]:
                if abs(zmid[i] - zmid[j]) < zsep:
                    continue
                inter = np.logical_and(masks[i], masks[j]).sum()
                if inter > overlap * min(area[i], area[j]):
                    clash = True
                    break
            if not clash:
                lv[0].append(i)
                lv[1] |= masks[i]
                break
        else:
            levels.append([[i], masks[i].copy()])
    if len(levels) <= 1:
        return [lv[0] for lv in levels]
    union = np.zeros_like(masks[0])
    for lv in levels:
        union |= lv[1]
    total = union.sum() or 1
    hidden = 0
    below = levels[0][1].copy()
    for lv in levels[1:]:
        hidden += np.logical_and(below, lv[1]).sum()
        below |= lv[1]
    if hidden < min_hidden * total:
        return [sorted(i for lv in levels for i in lv[0])]
    out = []
    for lv in levels:
        if out and lv[1].sum() < min_share * total:
            out[-1][0].extend(lv[0])
            out[-1][1] = out[-1][1] | lv[1]
        else:
            out.append([list(lv[0]), lv[1].copy()])
    # a sliver at the bottom folds upward instead
    if len(out) > 1 and out[0][1].sum() < min_share * total:
        out[1][0][:0] = out[0][0]
        out.pop(0)
    return [lv[0] for lv in out]
