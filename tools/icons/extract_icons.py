#!/usr/bin/env python3
"""Extract the class, talent-tree, talent and spell icons the guide site uses
from the Turtle WoW 1.18.1 client, as small WebP sprite sheets + a manifest.

    client Data/*.MPQ (later patches win, see tools/maps/mpq.py)
      DBFilesClient/Talent.dbc      talent id -> tab, rank-1 spell
      DBFilesClient/TalentTab.dbc   tab id -> class mask, order, SpellIconID
      DBFilesClient/Spell.dbc       spell id -> SpellIconID (field 117), name (120), attributes (6)
      DBFilesClient/SpellIcon.dbc   SpellIconID -> Interface\\Icons\\<name>
      DBFilesClient/SkillLine*.dbc  class skill lines -> the class's trainable spells
      Interface/Icons/<name>.blp    64 px icons (BLP2, decoded by Pillow)
      Interface/Glues/CharacterCreate/UI-CharacterCreate-Classes.blp   4x4 class atlas
        │  extract_icons.py
        ▼
    site/public/icons/common.webp     the 9 class icons and the 27 talent-tree icons
    site/public/icons/<class>.webp    that class's talent and spell icons
    site/public/icons/manifest.json   {sheets, classes, tabs, trees, talents, spells} -> sheet cell

Every icon is the client's 64 px texture with its 4 px baked frame cropped off:
exactly 56 x 56, not resampled. Sheets are 16 cells wide, WebP q=82.

Spells: a class's spell list is every non-passive spell its class skill lines
teach (SkillLineAbility x SkillRaceClassInfo; warlock and hunter pets too) plus
the talents themselves. A name whose ranks use different icons (Slam, Heal ...)
is ambiguous and left out; the site then shows no icon for it.

Usage:
    python3 -m venv /tmp/iconvenv && /tmp/iconvenv/bin/pip install Pillow
    /tmp/iconvenv/bin/python tools/icons/extract_icons.py [--data DIR] [--out DIR]
Paths default to this machine's layout; TW_CLIENT_DATA overrides the client Data/ dir.
"""
from __future__ import annotations

import argparse
import io
import json
import os
import sys
from pathlib import Path

from PIL import Image

REPO = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO / "tools" / "maps"))
from mpq import MPQChain  # noqa: E402
from wowdata import read_dbc  # noqa: E402

DEFAULT_DATA = os.environ.get("TW_CLIENT_DATA", "/home/agent/work/TurtleWoW/server/client/Data")
DEFAULT_OUT = REPO / "site" / "public" / "icons"
TREES_JSON = REPO / "structured" / "talents" / "talent-trees.json"

CELL = 56
CROP = 4
COLS = 16
QUALITY = 82

CLASS_MASK = {"warrior": 1, "paladin": 2, "hunter": 4, "rogue": 8, "priest": 16,
              "shaman": 64, "mage": 128, "warlock": 256, "druid": 1024}
# CLASS_ICON_TCOORDS of the 1.12 FrameXML: (col, row) in the 4x4 atlas of 64 px cells.
CLASS_ATLAS = {"warrior": (0, 0), "mage": (1, 0), "rogue": (2, 0), "druid": (3, 0),
               "hunter": (0, 1), "shaman": (1, 1), "priest": (2, 1), "warlock": (3, 1),
               "paladin": (0, 2)}
CLASS_ATLAS_PATH = "Interface\\Glues\\CharacterCreate\\UI-CharacterCreate-Classes.blp"
# Spells outside the class skill lines that rotations name, by id (no guessing by name).
EXTRA_SPELLS = {"mage": [5019], "priest": [5019], "warlock": [5019], "hunter": [75]}  # Shoot (wand), Auto Shot
SPELL_PASSIVE = 0x40  # Spell.dbc Attributes (field 6)
SKIP_LINES = ("Companions", "Mounts", "Glyphs", "Toys")


def dbc(chain, name):
    raw = chain.read("DBFilesClient\\" + name)
    if raw is None:
        sys.exit(f"missing DBFilesClient\\{name} in the client archives")
    return read_dbc(raw)


def load_icon(chain, path, cache):
    """Interface\\Icons\\X -> 56 px RGBA (frame cropped), or None."""
    key = path.lower()
    if key in cache:
        return cache[key]
    raw = chain.read(path + ".blp")
    im = None
    if raw:
        try:
            src = Image.open(io.BytesIO(raw)).convert("RGBA")
            if src.size != (64, 64):
                src = src.resize((64, 64), Image.LANCZOS)
            # Icons are opaque squares. Some palettised BLP2s carry an 8-bit alpha
            # plane that is all zero (Racial_Troll_Berserk); the game ignores it.
            src.putalpha(255)
            im = src.crop((CROP, CROP, 64 - CROP, 64 - CROP))
        except Exception as e:  # noqa: BLE001
            print(f"  cannot decode {path}: {e}", file=sys.stderr)
    cache[key] = im
    return im


def write_sheet(images, path):
    rows = max(1, -(-len(images) // COLS))
    cols = min(COLS, max(1, len(images)))
    sheet = Image.new("RGBA", (cols * CELL, rows * CELL), (0, 0, 0, 0))
    for i, im in enumerate(images):
        sheet.paste(im, ((i % cols) * CELL, (i // cols) * CELL))
    sheet.save(path, "WEBP", quality=QUALITY, method=6)
    return cols, rows


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--data", default=DEFAULT_DATA, help="client Data/ directory")
    ap.add_argument("--out", default=str(DEFAULT_OUT), help="output directory")
    args = ap.parse_args(argv)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    chain = MPQChain(args.data)
    spells, s_str = dbc(chain, "Spell.dbc")
    spell = {r[0]: r for r in spells}
    icons, i_str = dbc(chain, "SpellIcon.dbc")
    icon_path = {r[0]: i_str(r[1]) for r in icons}
    talents, _ = dbc(chain, "Talent.dbc")
    tabs, t_str = dbc(chain, "TalentTab.dbc")
    lines, l_str = dbc(chain, "SkillLine.dbc")
    class_lines = {r[0]: l_str(r[3]) for r in lines if r[1] == 7 and not l_str(r[3]).startswith(SKIP_LINES)}
    rci, _ = dbc(chain, "SkillRaceClassInfo.dbc")
    line_mask = {}
    for r in rci:
        if r[1] in class_lines:
            line_mask[r[1]] = line_mask.get(r[1], 0) | r[3]
    sla, _ = dbc(chain, "SkillLineAbility.dbc")

    def spell_icon(sid):
        r = spell.get(sid)
        return icon_path.get(r[117]) if r else None

    trees = json.loads(TREES_JSON.read_text(encoding="utf-8"))["classes"] if TREES_JSON.exists() else {}
    cache = {}
    manifest = {
        "version": 1,
        "size": CELL,
        "source": "Turtle WoW 1.18.1 client (Interface\\Icons, DBFilesClient); Blizzard Entertainment assets",
        "sheets": {},
        "classes": {},
        "tabs": {},
        "trees": {},
        "talents": {},
        "spells": {},
        "icons": {},
    }
    report = []

    # --- class icons: the character-create atlas --------------------------------
    atlas_raw = chain.read(CLASS_ATLAS_PATH)
    atlas = Image.open(io.BytesIO(atlas_raw)).convert("RGBA")
    scale = atlas.size[0] / 256
    common = []
    for slug, (c, r) in CLASS_ATLAS.items():
        x0, y0 = c * 64 * scale, r * 64 * scale
        cell = atlas.crop((int(x0), int(y0), int(x0 + 64 * scale), int(y0 + 64 * scale))).resize((64, 64), Image.LANCZOS)
        manifest["classes"][slug] = len(common)
        common.append(cell.crop((CROP, CROP, 64 - CROP, 64 - CROP)))
    common_names = [f"class:{s}" for s in CLASS_ATLAS]
    # talent-tree icons go on the common sheet too (home and class pages show them)
    for slug, bit in CLASS_MASK.items():
        manifest["tabs"][slug] = {}
        manifest["trees"][slug] = {}
        for tab in sorted((r for r in tabs if r[12] & bit), key=lambda r: r[13]):
            p = icon_path.get(tab[10])
            im = load_icon(chain, p, cache) if p else None
            if im is None:
                continue
            manifest["tabs"][slug][str(tab[0])] = len(common)
            manifest["trees"][slug][t_str(tab[1])] = len(common)
            common.append(im)
            common_names.append(p.split("\\")[-1].lower())
    cols, rows = write_sheet(common, out / "common.webp")
    manifest["sheets"]["common"] = {"file": "common.webp", "cols": cols, "rows": rows, "count": len(common)}
    manifest["icons"]["common"] = common_names

    for slug, bit in CLASS_MASK.items():
        order, idx = [], {}

        def add(path):
            if not path:
                return None
            key = path.split("\\")[-1].lower()
            if key in idx:
                return idx[key]
            im = load_icon(chain, path, cache)
            if im is None:
                return None
            idx[key] = len(order)
            order.append((key, im))
            return idx[key]

        # talent tabs + talents, in Talent.dbc
        ctabs = sorted((r for r in tabs if r[12] & bit), key=lambda r: r[13])
        manifest["talents"][slug] = {}
        missing = []
        for tab in ctabs:
            for t in (t for t in talents if t[1] == tab[0]):
                p = spell_icon(t[4])
                i = add(p)
                if i is None:
                    missing.append(t[0])
                else:
                    manifest["talents"][slug][str(t[0])] = i
        # cross-check against the talent data the site uses
        site_ids = {str(t["talent_id"]): (t["name"], (t.get("icon") or "").lower())
                    for tab in trees.get(slug, {}).get("tabs", []) for t in tab["talents"]}
        not_in_dbc = [k for k in site_ids if k not in manifest["talents"][slug]]
        differ = [f"{site_ids[k][0]}: site {site_ids[k][1]} / client {order[v][0]}"
                  for k, v in manifest["talents"][slug].items()
                  if k in site_ids and site_ids[k][1] and site_ids[k][1] != order[v][0]]

        # class spells by name
        by_name: dict[str, set] = {}
        pet_names: dict[str, set] = {}
        for r in sla:
            line = class_lines.get(r[1])
            if not line or not (line_mask.get(r[1], 0) & bit) or (r[4] and not r[4] & bit):
                continue
            sp = spell.get(r[2])
            if not sp or sp[6] & SPELL_PASSIVE:
                continue
            name = s_str(sp[120]).strip()
            p = icon_path.get(sp[117])
            if not name or not p:
                continue
            (pet_names if line.startswith("Pet") else by_name).setdefault(name, set()).add(p)
        for n, ps in pet_names.items():
            by_name.setdefault(n, ps)
        for sid in EXTRA_SPELLS.get(slug, []):
            sp = spell[sid]
            by_name.setdefault(s_str(sp[120]).strip(), set()).add(icon_path.get(sp[117]))
        for tab in ctabs:  # talents are spells too (Arcane Power, Presence of Mind ...)
            for t in (t for t in talents if t[1] == tab[0]):
                sp = spell.get(t[4])
                if sp:
                    by_name.setdefault(s_str(sp[120]).strip(), set()).add(icon_path.get(sp[117]))
        ambiguous = sorted(n for n, ps in by_name.items() if len({p.lower() for p in ps if p}) != 1)
        manifest["spells"][slug] = {}
        for n in sorted(by_name):
            if n in ambiguous or len(n) < 3:
                continue
            i = add(next(iter(by_name[n])))
            if i is not None:
                manifest["spells"][slug][n] = i

        cols, rows = write_sheet([im for _k, im in order], out / f"{slug}.webp")
        manifest["sheets"][slug] = {"file": f"{slug}.webp", "cols": cols, "rows": rows, "count": len(order)}
        manifest["icons"][slug] = [k for k, _im in order]
        report.append((slug, len(ctabs), len(manifest["talents"][slug]), len(site_ids), len(manifest["spells"][slug]),
                       len(order), missing, not_in_dbc, differ, ambiguous))

    (out / "manifest.json").write_text(json.dumps(manifest, indent=1, sort_keys=False) + "\n", encoding="utf-8")

    total = sum(f.stat().st_size for f in out.iterdir() if f.is_file())
    print(f"{'class':8} tabs talents/site spells cells  missing  not-in-dbc  ambiguous")
    for slug, nt, nta, ns, nsp, cells, miss, nid, diff, amb in report:
        print(f"{slug:8} {nt:4} {nta:3}/{ns:<4} {nsp:6} {cells:5}  {len(miss):7}  {len(nid):10}  {', '.join(amb) or '-'}")
        for d in diff:
            print(f"         icon differs: {d}")
    files = sorted(f for f in out.iterdir() if f.is_file())
    print(f"{len(files)} files, {total / 1024:.0f} KiB total in {out}")


if __name__ == "__main__":
    main()
