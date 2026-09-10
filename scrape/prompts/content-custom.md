You are writing the **custom content docs and data** for a Turtle WoW knowledge base: custom zones, quests and questlines, factions, NPCs/vendors with inventories and spawn locations, player-reported drop rates, recipes and custom professions with their progression. Repo root: /home/user/turtle-knowledge-base-. Another agent writes dungeons/raids (`synthesis/content/dungeons-and-raids.md`, `synthesis/content/instances/`, `structured/content/instances.yaml`); do not write those files.

Sources:
- Official: `synthesis/1.18.1-master-changelog.md` (Zones, Quests/factions, Professions, Items sections), `synthesis/turtle-vs-vanilla-timeline.md` (B3 Zones, B5 Quests & factions, B6 Items, B7 Professions, B11 Economy), `structured/patches/*.yaml`, staff patch threads in `extracted/forum/f63-patch-notes-changelog/`, official site pages in `extracted/site/` (new-locations-and-maps, new-factions-and-quests, jewelcrafting, survival-and-gardening, new-races, high-elves, goblins, additional-transport-routes, seasonal-events, pets-and-mounts).
- Professions forum: `extracted/forum/f33-professions/*.md` (77 topics; posts `structured/forum/posts/f33.jsonl`). Itemization forum `extracted/forum/f70-itemization/` (staff item changelogs, custom items, relics, sets). Grep all of `extracted/forum/` for zone names, quest names, "drop rate", "drop chance", "farm", "vendor", "recipe", "pattern", "plans", "schematic".
- Wiki (community): `structured/wiki/pages.jsonl` (is_turtle_content, patch), `structured/wiki/quests.jsonl` (274 quests, 182 with quest_id), `structured/wiki/npcs.jsonl` (1463; location/level/faction; `vendor`/`sells`, `loot`, quest sections), `structured/wiki/zones.jsonl`, `structured/wiki/factions.jsonl`, `structured/entity-index/*.json`, Markdown in `extracted/wiki/articles/`.

Deliverables (Markdown in `synthesis/content/`, data in `structured/content/`), each Markdown file ending with a gaps/unclear section:
1. `synthesis/content/zones.md`: every custom zone and reworked vanilla zone: level range, continent/location, patch, how to get there, hubs and flight paths, factions, questlines, notable NPCs/vendors, rares/world bosses, player notes (leveling value, dangers, hardcore warnings), sources.
2. `synthesis/content/quests-and-questlines.md`: custom questlines by zone/faction: chain order, quest names with IDs when given, givers/turn-ins, level, rewards, prerequisites, player notes (bugs, tips), sources.
3. `synthesis/content/factions.md`: custom factions: how reputation is gained, rewards per rank, vendor and location, sources.
4. `synthesis/content/npcs-and-vendors.md`: vendors with inventories (item, price, requirements), spawn locations (zone + coordinates when given), notable custom NPCs, sources.
5. `synthesis/content/drop-rates.md`: player-reported drop rates for custom (and notable vanilla-changed) items with sample sizes when given, date, era, contradictions.
6. `synthesis/content/professions-and-recipes.md`: custom professions (Survival incl. the 1.18.1 overhaul, Gardening, Jewelcrafting) with progression (skill ranges, trainers, recipes and materials), Forgotten Knowledge recipes, custom recipes added to vanilla professions, crafted-item upgrades, sources.
7. Data: `structured/content/zones.yaml`, `quests.yaml` (id when given), `factions.yaml`, `vendors.yaml` (npc, location, coords, inventory with prices), `drop-rates.yaml` (item, source, rate, sample size, reporter authority, date, url), `recipes.yaml` (profession, recipe, skill level, materials, source/trainer, item_ids when given). Every record carries `sources: [urls]`.

Report back with: file list, record counts per data file, richest-sourced areas, main gaps, and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
