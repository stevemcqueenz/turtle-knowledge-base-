# Entity index

First pass built from the fandom wiki infoboxes by `scrape/build_entity_index.py`. Records are keyed by name; `quest_id`/`npc_id`/`zone_id` are filled only when a source states the ID (wiki quest IDs come from the Questbox `id` field). Cross-links: quests.start_npc/end_npc -> npcs; npcs.zones -> zones; zones.npcs/quests; npcs.gives_quests/ends_quests.

| file | records |
|---|---|
| quests.json | 274 (182 with quest_id, 208 Turtle content) |
| npcs.json | 1463 (1139 Turtle content) |
| zones.json | 213 (91 Turtle content) |
| factions.json | 95 |
| unresolved.json | 65 NPC names, 41 quest names referenced without a page |
