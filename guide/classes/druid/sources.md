# Druid: sources

## What informed these pages

| Source | Era | Used for |
|---|---|---|
| Discord `#druid`, full read 2025-10-03 → 2026-05-30 | 1.18.1 announced, released (2026-03-20), final weeks | Builds, rotations, stats, gear, idols, bugs, encounter notes; the primary source |
| Discord `#druid` highlights 2024-11 → 2025-10 | Class Changes 2 → 1.18.0 | The bleed/powershift history, the Swift Travel Form questline, Reshift, pinned builds and FAQ, older gear lists |
| Discord `#pvp-general` notes (2025-10 → 2025-11) and the earlier PvP dossier | Pre-1.18.1 | Class tier lists, honor system, resilience bug, matchup context |
| Turtle forum (druid subforum and staff changelogs), via the KB research archive | 2022 → 2026-04 | Staff 1.18.1 changes ([Jamey, 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)), hotfixes ([Torta, 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608)), Class Changes 2 ([Dragunovi, 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102966#p102966)), PvP builds and the rogue-survival thread |
| Talent data (`structured/talents/druid.yaml`, decoded builds) | 1.18.1 trees | Every published build and leveling order was checked with `talent_tool.py`; most builds are the exact codes players posted |
| Talent screenshots in `#druid` | 2025-12, 2026-01 | Micro Jackson's cat and tank 11/35/5 builds, read from the images [[d:druid#1444972730033377300]], [[d:druid#1460992604417032421]] |

Post-release evidence was preferred over pre-release, and pre-release over older material. Where advice changed (Balance of All Things, bear threat, idol swapping, Omen as a cast buff, the Manual Crowd Pummeler, Wolfshead Helm, the Tree aura snapshot), the pages give the current rule and flag the old one.

## Experts relied on

| Person | Spec | Why they were trusted |
|---|---|---|
| **Micro Jackson** | All (resto main) | The channel's most prolific, most-agreed answerer: ~1,400 hours of resto [[d:druid#1480971311797895361]], stat and threat math [[d:druid#1472870879418646640]], the base tank and cat builds [[d:druid#1444972730033377300]], [[d:druid#1460992604417032421]]. Corrects his own and others' claims with tests. |
| **Hotverdomme-Nord** | Balance | Top boomkin in direct contact with the class designer; tracked the DPS gap with log data [[d:druid#1491219031611543693]], [[d:druid#1492151406159859824]] |
| **Krokat** | Balance, Feral | Maintains the pinned Boomkin and feral sims; idol and haste tables [[d:druid#1461294464055115799]], [[d:druid#1488415746592604160]] |
| **Tephus** | Feral, Bear | Careful threat and scaling analysis, unchallenged tank-role breakdown [[d:druid#1465654937018044467]], [[d:druid#1473623513289199667]] |
| **Shardphoenix** | Feral, general | Data-backed standing by raid tier, in-raid A/B tests [[d:druid#1483070411171172404]], [[d:druid#1491817394287411230]]; strongly pro-paladin in the tank debate, so used with the counter-view |
| **Holydruid, Valarya, Sagesse, Dziadmroz** | Bear | Active main tanks; post-patch threat tests and rotation [[d:druid#1484733781331021875]], [[d:druid#1491140379490390106]] |
| **Habu, Eepyman, Breaddy, Floccumate** | Balance | Hit caps, resistances, rotation details; Breaddy maintains the pinned boomkin guide [[d:druid#1453041794765033634]] |
| **Bapi, akitoe** | Restoration | The pinned resto guide [[d:druid#1475224646591971493]]; oil and Moonglow testing [[d:druid#1491497781368717581]] |
| **Medvedev, Angrycat / Powershift, Ash, Rustam** | Feral | The raid consumable list [[d:druid#1461753276017152021]], Kara40 priority lists [[d:druid#1362819920089317427]], the post-1.18.1 Claw verdict [[d:druid#1492276296808661174]], the stat conversions [[d:druid#1491356797762797638]] |
| **Hassle, TowelDruid, Midoko** | Feral | Posted the leveling, raid and tank builds used here [[d:druid#1491170592823709807]], [[d:druid#1472736983225995436]], [[d:druid#1411187673644929034]] |
| **Fat Pibble with Air Pods** | Dev / class designer | Pinned FAQ and leveling advice, design intent, bleed-immune boss list [[d:druid#1412860092692299806]], [[d:druid#1413144334336790652]], [[d:druid#1469613082983530559]] |

## Gaps

What the sources do not settle:

1. **Feral stat weights.** Nobody produced Turtle-correct numbers; haste and Strength-vs-Agility stay contested [[d:druid#1443940954225770580]], [[d:druid#1494727817563345027]].
2. **Bleed-immune bosses in MC and Naxx.** Counts disagree (3 of 12 vs "half" of MC; "all Naxx bleeds" vs KT/Sapphiron/Golems immune) [[d:druid#1487167793089478656]], [[d:druid#1461732289061978378]], [[d:druid#1465110727303106711]].
3. **Bear vs paladin/warrior after 1.18.1.** No log aggregation; field reports range from "barely noticed" to "the first 10 seconds are a nightmare" [[d:druid#1485296567123710134]], [[d:druid#1485730370954592399]].
4. **Balance post-patch rotation.** Pure Wrath spam vs Starfire-in-Arcane was not settled by logs [[d:druid#1484673452152721519]], [[d:druid#1489717763252425008]].
5. **Efflorescence.** Whether the HoT-overwrite heal still needs Tree Form [[d:druid#1490124547343515648]], [[d:druid#1467257280880971900]].
6. **Arcane resistance for Anomalus.** 100 to 225+ are all reported [[d:druid#1489295796863242362]], [[d:druid#1492106894800719942]].
7. **No full pre-raid BiS list** for Balance or Restoration in text form; the channel points to external sheets (Angrycat, Krokat, Bapi's guide) [[d:druid#1412860092692299806]].
8. **Resto enchants per slot** are only in Bapi's guide, which is not quoted in the sources.
9. **Endorsed PvP point lists** exist only for Balance (Midoko) and a hybrid (Modwolf); the feral PvP build here is assembled from advice. Per-spec PvP dampening values are unknown [[d:druid#1491538510492995816]].
10. **The Swift Travel Form solo challenge.** When the Moonglade dragon fight was added to the questline, and its exact place in the chain, is not stated [[d:druid#1486436692310360248]].
11. **Sylvan Blessing's current tooltip.** A late-2025 rework to a stacking proc was reported [[d:druid#1435723304249065493]], but a January 2026 screenshot shows the killing-blow version [[d:druid#1466032796601417749]].
12. **Late changes before the server's end.** Undocumented armor/threat shifts reported in May 2026 are unconfirmed [[d:druid#1509081770962845727]]; prototype talents shown in April were never implemented [[d:druid#1495108939891605767]].
