# Sources

## What informed these pages

| Source | Era | Used for |
|---|---|---|
| Turtle WoW Discord `#shaman`, full read 2025-10-03 → 2026-05 (11 note files) | 1.18.1 announced, released 2026-03-20, and six weeks of live play | Builds, rotations, stats, gear, the post-release bug state (Earthen Bulwark, Flurry, Earthquake, Flametongue coefficients) |
| `#shaman` highlights 2024-11 → 2025-10 | Class Changes 2 (1.17.x) and 1.18.0 | Background: the CC2 kit (Lightning Strike, tank talents), the 1.18 totem and Molten Blast changes, pre-1.18.1 builds |
| `#pvp-general` notes 2025-10 → 2025-11 | pre-1.18.1 | Class tier lists, matchups, Weapon Chain, Grounding and Sap details |
| Staff patch notes on the forum: Jamey's 1.18.1 class changes and Torta's hotfixes; Dragunovi's CC2 notes | 2024-10 → 2026-03 | Official wording of the 1.18.1 changes ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071); [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608), [2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139), [2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490)) |
| Earlier KB research archive (`synthesis/classes/shaman/`, forum + wiki + first Discord pass) | 2019 → 2026-04 | Cross-checks, forum-sourced mechanics (Bloodlust, Windfury Totem aura rules) |
| `structured/talents/builds-shaman.yaml` | all | Popularity of decoded builds; every published build was re-validated against the 1.18.1 trees with `pipeline2/talent_tool.py` |

Post-release evidence was preferred over pre-release, and pre-release over older. Where a claim predates 1.18.1 and 1.18.1 touched the mechanic, the pages say so.

## Experts relied on

| Person | Why | Topics |
|---|---|---|
| **Not Normal** | Runs the community stat-weight spreadsheet and co-built the sim; most-cited, rarely corrected; derived the real 1.18.1 Flametongue/Frostbrand coefficients by testing [[d:shaman#1491208166766284860]] | Enhancement, spellhance, Elemental, Restoration stats, tank stats |
| **Ordinary Joe** | Built the public gear planner / sim site [[d:shaman#1491099460963401820]]; practicing MT; launch-day Earthen Bulwark testing | Tank, Enhancement, Elemental sim priority |
| **peter_hammer** | Long-form tank design summary, Resto 101, high-end raider | Tank, Restoration, race advice |
| **Squid** | Log and test-based answers (Hand of Justice/Windfury, consumables lists) | Enhancement, consumables, Resto |
| **Zeruel**, **poto** | EHP and attack-table math, tank gearing | Tank stats and gear |
| **Frost**, **Zamka**, **Boorenka** | Practicing MTs (Kara40, BWL); Boorenka maintains the Ambershire tank/Enhancement BiS sheet [[d:shaman#1470550299520274678]] | Tank builds, weapons, boss notes |
| **Ciftar (Edward the Odd)** | Spellhance player with parses | Spellhance, trinkets, Hand of Edward |
| **Diving Instructor Knife** | Resto PvP specialist (13/17/21), spell-rank details | PvP, Restoration ranks |
| **Dwi**, **Nandieb**, **Spicyahi** | Elemental BiS sheet [[d:shaman#1415847279855665204]], tested MC Elemental gearing, PvP | Elemental, PvP |
| **Holidae**, **billienomates**, **trallnar**, **DemonBoyJr** | Detailed, consistent leveling reports | Leveling, tank leveling, weapons by bracket |
| **Haaxor1689** (developer) | Stated intent of the Rockbiter and relic-swap changes [[d:shaman#1464414658818736291]], [[d:shaman#1464413026479505530]] | 1.18.1 design intent |

## Gaps

1. **Earthen Bulwark's final state.** Tanks reported it building only from auto-attacks through at least 2026-04-14 despite a 2026-03-24 hotfix note; no source confirms a fix before the archive ends.
2. **Earthquake's final state.** After the 2026-03-31 hotfix (Aftershock with Elemental Fury) players still reported crit bugs on 04-06; its real single-target value is unsettled, so the Elemental rotation treats it as AoE-only.
3. **Elemental Weapons' Windfury haste stacking** (should give 2 stacks per proc) was still bugged on 2026-04-11; no fix confirmed.
4. **No post-1.18.1 Enhancement or Elemental PvP build** was posted; the PvP damage builds are pre-patch shapes. Shaman-specific dampening and resilience values were never published.
5. **Restoration BiS by phase:** no maintained resto list exists; the page gives per-slot tips only.
6. **Tank build choice** (physical 15/36 or 13/38 vs spell 22/29) has no controlled comparison after 1.18.1 removed spell power from tank sets.
7. **Spellhance** numbers (5-8% behind classic after the fixes) are one theorycrafter's estimate; no post-fix parse set.
8. **Fire resistance gear lists** for tanks are partial; the channel never compiled one.
9. **Nature resistance in AQ40** is contested (see Elemental raid notes).
10. **Hex while moving** is contested between players.
11. **Hardcore-specific play** and a zone-by-zone leveling route are thin (one route suggestion only).
