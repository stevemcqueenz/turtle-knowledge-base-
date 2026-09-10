# Content documents

Turtle WoW's custom world content: zones, quests, factions, NPCs and vendors, drop rates, and professions. Read `../CONVENTIONS.md` first — it defines the citation format, the authority levels (staff / guide writer / player / community wiki) and the era markers used throughout.

| Document | Covers | Structured data |
|---|---|---|
| [zones.md](zones.md) | every custom zone and reworked vanilla zone: level range, location, patch, access, hubs and flight paths, factions, questlines, rares, and the Hardcore danger list | [`structured/content/zones.yaml`](../../structured/content/zones.yaml) |
| [quests-and-questlines.md](quests-and-questlines.md) | custom questlines by zone and faction: chain order, quest IDs, givers, levels, rewards, reputation, reported bugs | [`quests.yaml`](../../structured/content/quests.yaml) |
| [factions.md](factions.md) | custom reputation factions: how reputation is gained, rewards per rank, quartermasters, what the grind costs | [`factions.yaml`](../../structured/content/factions.yaml) |
| [npcs-and-vendors.md](npcs-and-vendors.md) | 220 custom vendors, trainers, flight masters and innkeepers by hub; notable NPCs; outdoor rares | [`vendors.yaml`](../../structured/content/vendors.yaml) |
| [drop-rates.md](drop-rates.md) | staff-stated drop chances and player-reported farming samples, kept strictly apart | [`drop-rates.yaml`](../../structured/content/drop-rates.yaml) |
| [professions-and-recipes.md](professions-and-recipes.md) | Survival (incl. the 1.18.1 overhaul), Gardening, Jewelcrafting, Forgotten Knowledge, custom recipes in the vanilla professions, crafted-item upgrades | [`recipes.yaml`](../../structured/content/recipes.yaml) |
| `dungeons-and-raids.md` and `instances/` | instances — written separately; this set of documents only names them where they sit inside a zone | `instances.yaml` |

## What is well sourced and what is not

**Strong:** patch attribution and design intent (staff patch threads); questline structure and quest IDs (the community wiki's 274 quest pages); reputation reward tables (wiki); staff-stated drop-rate changes; the Survival and Jewelcrafting leveling routes (two maintained, peer-corrected player guides).

**Weak or absent, in every document's gaps section:** vendor inventories (the wiki's Sells sections are empty placeholders); in-game coordinates (exactly one pair exists in the whole corpus); reward lists for six custom factions; the complete recipe lists for the two custom professions; and any player-run drop-rate measurement with a real sample.

The item database at `database.turtlecraft.gg`, which the community treats as the reference for item sources, IDs and drop rates, is **not part of this extraction**. Facts traceable only to it are labelled as such.
