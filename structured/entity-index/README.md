# Entity index

First pass built from the fandom wiki infoboxes by `scrape/build_entity_index.py`. Records are keyed by name; `quest_id`/`npc_id`/`zone_id` are filled only when a source states the ID (wiki quest IDs come from the Questbox `id` field). Cross-links: quests.start_npc/end_npc -> npcs; npcs.zones -> zones; zones.npcs/quests; npcs.gives_quests/ends_quests.

Second pass (`structured/content/*.yaml`, forum + wiki synthesis): instances.json (bosses linked to npcs by name) and items.json (drops_from, sold_by, drop_rates).

| file | records |
|---|---|
| quests.json | 274 (182 with quest_id, 208 Turtle content) |
| npcs.json | 1463 (1139 Turtle content) |
| zones.json | 213 (91 Turtle content) |
| factions.json | 95 |
| instances.json | 25 instances, 140 bosses (82 matched to an NPC page) |
| items.json | 377 items (62 with drop rates, 33 with vendors) |
| unresolved.json | 65 NPC names, 41 quest names referenced without a page |
