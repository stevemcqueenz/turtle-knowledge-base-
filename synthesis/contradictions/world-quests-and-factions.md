# Contradictions — World, quests and factions

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

6 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0091 — Durotar Labor Union rocket cars: race-locked or open at Exalted?

- **Side A.** A Troll at Exalted could not buy the rocket cars; players asked for them to be opened to all Horde races while keeping the shredder Goblin-only. — [Freshfunman (player), 2024-02-23](https://forum.turtlecraft.gg/viewtopic.php?p=88547#p88547), [Grizb37 (player), 2024-02-26](https://forum.turtlecraft.gg/viewtopic.php?p=88804#p88804)
- **Side B.** The wiki says "In return for exalted reputation, non-goblin players are able to ride rocket cars". — [Durotar Labor Union (community wiki), 2025-12-15](https://turtle-wow.fandom.com/wiki/Durotar_Labor_Union)
- **What would settle it.** Race requirement on the rocket-car mount items / vendor conditions in 1.18.1.
- **Assessment (`unresolved`).** Unresolved; the player report is 2024-02 and the wiki revision 2025-12, so the wiki may describe a later state.

## CON-0092 — Dalaran reputation: repeatable turn-ins exist?

- **Side A.** 2023 players: the Alterac grind quests "bugged and aren't repeatable yet"; "You can't get revered with dalaran yet, no repeatable quest exists". — [Aeliren (player), 2023-02-28](https://forum.turtlecraft.gg/viewtopic.php?p=36344#p36344), [Geojak (player), 2023-07-26](https://forum.turtlecraft.gg/viewtopic.php?p=54708#p54708)
- **Side B.** The wiki lists four repeatable enchanting-material turn-ins (Greater Mystic Essence 75, Small Radiant Shard 100, Large Brilliant Shard 200, Nexus Crystal 500). — [Dalaran (faction) (community wiki)](https://turtle-wow.fandom.com/wiki/Dalaran_(faction))
- **What would settle it.** Repeatable flags on the Dalaran turn-in quests in 1.18.1 quest data.
- **Assessment (`unresolved`).** Probably a time difference (2023 posts vs a later wiki state) rather than an error, but no dated staff statement resolves it.

## CON-0093 — Custom zone level ranges: official site vs wiki

- **Side A.** Official ranges: Blackstone Island 1-16, Thalassian Highlands 15-20 (1-10 High Elf start), Hyjal 56-60. — [turtlecraft.gg, New Locations & Maps (official website)](https://turtlecraft.gg/new-locations-and-maps)
- **Side B.** Wiki ranges for the same zones: 1-10, 1-10 and 58-60. — [Blackstone Island (community wiki)](https://turtle-wow.fandom.com/wiki/Blackstone_Island), [Thalassian Highlands (community wiki)](https://turtle-wow.fandom.com/wiki/Thalassian_Highlands)
- **What would settle it.** Zone level ranges in AreaTable.dbc plus the actual level spread of quests and creatures in each zone.
- **Assessment (`unresolved`).** Unresolved; both figures are reproduced in the zone document. The creature level spread on a local server settles it in minutes.

## CON-0094 — Almaudrak's Heart quest drop: bug or not reproducible?

- **Side A.** The elite drops no quest item, so the Desolace quest cannot be completed. — [Kanto123 (player), 2025-10-05](https://forum.turtlecraft.gg/viewtopic.php?p=154515#p154515)
- **Side B.** Staff could not reproduce it — "I was able to loot Almaudrak's Heart" — and suggested addon interference or a visual glitch. — [Sleeptime (staff), 2025-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=154544#p154544)
- **What would settle it.** Almaudrak's loot template and the quest-item condition in 1.18.1.
- **Assessment (`unresolved`).** Unresolved (ISS-0001); staff denial versus a single player report.

## CON-0095 — Ambershire: content reachable ahead of its phase, then rolled back

- **Side A.** Players report Field Duty and Tier 0.5 content reachable before its phase, and a subsequent rollback. — [Imme (player), 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160729#p160729), [Afokten (player), 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160801#p160801)
- **Side B.** No staff post announcing either the availability or the rollback appears in the extraction. — structured/issues.yaml ISS-0118 (community wiki) — `structured/issues.yaml`
- **What would settle it.** Phase gating on the quest givers involved, per realm, in the 1.18.1 data.
- **Assessment (`unresolved`).** Unresolved (ISS-0118); relevant to any fresh-realm setup because phase gating must match the realm's content phase.

## CON-0096 — Ronae'Thalas: shipped zone with an undocumented level range

- **Side A.** The zone shipped with patch 1.18.0 but its questline scope was "still in progress" in the announcement. — [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615)
- **Side B.** No wiki page and no later changelog entry state its level range; it was earlier announced for 1.17.0 and then "in one of the upcoming patches". — [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868)
- **What would settle it.** AreaTable entry and creature/quest level spread for Ronae'Thalas on the local server.
- **Assessment (`unresolved`).** Unresolved as documentation; trivially answerable from local data.

