# Instance maps

Renders a map for every dungeon and raid page of the guide (`guide/instances/<slug>.md`) from the Turtle WoW 1.18.1 client, for the Field Manual site.

```
client Data/*.MPQ ──► textures/Minimap/md5translate.trs ──► <md5>.blp minimap tiles
   (patch MPQs win)     World/Maps/<dir>/<dir>.wdt + .adt  ──► WMO placements (MODF)
                        World/wmo/**/<name>.wmo            ──► group boxes (MOGI)
server data/mmaps/*.mmtile ──► walkable polygons (grey underlay, floor-plan fallback)
server sql/ (creature, creature_template, migrations) ──► unique named elites/bosses
        │  extract_maps.py
        ▼
site/public/maps/<slug>/f<N>.webp, thumb.webp     one image per floor + an index thumbnail
site/scripts/maps-source.json                     floors, world->pixel transforms, "pois"
        │  site/scripts/build-data.py (attach_maps)
        ▼
site/src/data/instances.json  pages[].map = {provenance, thumb, floors[{..., markers[]}]}
```

## Regenerate

```sh
python3 -m venv /tmp/mapvenv && /tmp/mapvenv/bin/pip install Pillow numpy
/tmp/mapvenv/bin/python tools/maps/extract_maps.py            # all pages, ~12 min
/tmp/mapvenv/bin/python tools/maps/extract_maps.py --only dire-maul,naxxramas --debug /tmp/mapdbg
python3 site/scripts/build-data.py                            # markers from the current page text
python3 site/scripts/test_data.py && (cd site && npm run check && npm run smoke)
```

Paths default to this machine's layout; override with `TW_CLIENT_DATA` (the client `Data/` directory), `TW_SERVER` (server checkout root), `TW_SQL` (its `sql/`), `TW_MMAPS` (its `data/mmaps`). `--debug DIR` also writes a JPEG per floor with every candidate creature plotted and named.

Only Pillow and numpy are needed: `mpq.py` is a small pure-Python MPQ reader (v0/v1 archives, encrypted tables, zlib/bzip2/PKWARE implode) and Pillow decodes BLP2. Archives are read in client load order (`mpq.CLIENT_ORDER`: base archives, then `patch.MPQ`, `patch-2` … `patch-9`), the last one holding a file wins.

Re-running `build-data.py` is enough after a guide page changes: markers are matched against the page text at build time, the images do not change.

## How a map is made

1. **Which map.** The page's H1 (or, for `vanilla-dungeons.md`, each H2) is resolved by name in the client's `Map.dbc` (`TITLE_ALIASES` covers the few differences, e.g. "Temple of Ahn'Qiraj" → "Ahn'Qiraj Temple"; LBRS and UBRS share Blackrock Spire). `index.md` and `world-bosses.md` have no map.
2. **WMO interiors.** Every WMO placed by the map's WDT (a global WMO) or its ADTs is considered; the ones whose minimap groups contain a real share of the map's creature spawns (or a boss) are the instance. Each group's tiles (`<wmo>_<group:03>_<x:02>_<y:02>.blp`, 256 px per 128 yd, x along the group's +X, content bottom-aligned) are stitched north-up and placed in world space: `world = Rz(rot.y + 180°) · local + T`, `T = (32·533.33 − pos.z, 32·533.33 − pos.x, pos.y)` for ADT placements and 0 for a global WMO. This transform was fitted against the server's spawns (every spawn of Dire Maul, BRD, RFK, SFK … falls inside a group box under it and not under the alternatives).
3. **Floors.** Groups stacked over each other (footprints overlapping more than 12 % and z centres 8 yd or more apart) go to separate levels, lowest first; a split is kept only when one composite would hide at least 8 % of the drawn area, and slivers fold into the level below. Scarlet Monastery's four wings are labelled (`WMO_LABELS`).
4. **Outside.** When the map also has ADT minimap blocks and at least 12 % of the spawns stand outside the WMO (Stratholme, Zul'Gurub, the Deadmines cove …), the terrain blocks become an "Outside" floor (first when most spawns are outdoors), cropped to the spawns. A building floor with no named creature on such a map is dropped.
5. **Navmesh underlay.** Walkable polygons of the server navmesh that lie inside the WMO's groups are drawn in flat grey under the textures: the client has no minimap art for outdoor WMO groups (Dire Maul's courtyards, Naxxramas' ledges). A map with no minimap texture at all would get a navmesh-only floor plan (`kind: "floorplan"`); none of the current pages needs it.
6. **Content newer than the server dump.** Dragonmaw Retreat, Stormwrought Ruins, Frostmane Hollow, Windhorn Canyon and Timbermaw Hold have no creature rows in the local SQL, so their WMO is chosen by the navmesh it holds, and they have no boss markers.
7. **Output.** Each floor is cropped to its content, scaled to at most 1600 px on the long side (at least 700), and saved as WebP (quality 80, lowered until the file is ≤ 250 KB).

## Boss markers

`maps-source.json` lists, per floor, the named elite/boss creatures (rank ≥ 1) with at most three spawns on the map, as positions in 0..1 image fractions. `build-data.py` walks the page in order — the H3 headings of its boss sections, the first cells of its "Boss" tables, its **bold** names — and gives a numbered marker to each one that names such a creature (whole-word, case-insensitive), linking to the boss card (`boss-<slug>`) or the section that names it. Bosses that the server only spawns from scripts, or that the page does not name, get no marker; nothing is placed by hand.
