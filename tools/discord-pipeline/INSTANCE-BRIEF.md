# Instance brief: dungeon & raid tactics pages

Paths: BASE=/home/agent/work/turtle-discord, KB=$BASE/kb (do NOT commit).

## Goal
Write one page per instance under `$KB/guide/instances/<slug>.md`: what a player (or bot) must
know to run it on Turtle WoW 1.18.1: overview (level range, size, location, entry/attunement,
lockout if known), boss-by-boss tactics with **role duties** (tank / healer / melee / ranged /
class-specific jobs), resistances and consumables needed, immunities (fire-immune, bleed-immune,
freeze-immune, poison types…), trash notes, notable loot for classes, and common wipes.
Also write `$KB/guide/instances/index.md`: a table of all instances (type, level, size, patch
added, link) grouped Dungeons (vanilla + Turtle custom) and Raids.

## Inputs
1. `$BASE/topics/_instances/<channel>.md` — the "Dungeons & raids" sections gathered from all
   reader notes per class channel (cited `[[d:<channel>#<id>]]`). Paladin may be incomplete
   (more notes will be added later; a follow-up pass can extend pages).
2. Existing KB: `$KB/synthesis/content/instances/*.md`, `$KB/structured/content/instances.yaml`
   (forum/wiki-cited boss lists, abilities, mechanics), `$KB/synthesis/content/dungeons-and-raids.md`.
3. Class guide pages that mention instances: `grep -rl "<instance name>" $KB/guide/classes`.
4. Raw search when needed: `$BASE/norm/<channel>/messages.jsonl` (grep the boss name).

## Rules
- Same citation rules as the class guides: every non-obvious claim cited inline
  (`[[d:<channel>#<id>]]` for Discord — verify each with `python3 $BASE/pipeline2/show.py <channel> <id>`;
  forum/wiki links copied from the KB). Mark "(single source)" / "**Contested:**" as needed.
- Never invent tactics. Vanilla-era raids whose mechanics Turtle did not change may carry short
  `(vanilla baseline)` summaries of well-known mechanics when the sources are silent, clearly
  labelled; prefer the sources. Turtle-custom content (Karazhan Crypt, Lower Karazhan Halls,
  Tower of Karazhan (Kara40), Emerald Sanctum, Gilneas City, Stormwind Vault, Crescent Grove,
  Hateforge Quarry, Dragonmaw Retreat, Black Morass, Timbermaw Hold, Windhorn Canyon,
  Frostmane Hollow, Stormwrought Ruins, new 1.18.1 Onyxia/BWL bosses…) must come from sources only.
- Slugs: reuse the existing synthesis slugs (e.g. `tower-of-karazhan`, `lower-karazhan-halls`,
  `molten-core`, `blackwing-lair`, `onyxias-lair`); new ones lowercase-hyphenated
  (`zulgurub`, `ahnqiraj-temple`, `ruins-of-ahnqiraj`, `naxxramas`, `blackrock-depths`,
  `upper-blackrock-spire`, `stratholme`, `scholomance`, `dire-maul`, …). Class pages link to
  `../../instances/<slug>.md`, so use exactly these slugs.
- Readable first: short overview, then bosses in kill order with a compact table or bullets
  per boss: **Tank / Healers / DPS / Class jobs / Watch out**.
- Before finishing: `python3 $BASE/pipeline2/check_notes.py $KB/guide/instances/*.md` → bad=0.

## Final reply
Pages written (count, list), instances with thin coverage, top gaps.
