# Hunter sources

## What these pages are built on

| Source | Era | Used for |
|---|---|---|
| `#hunter` Discord, full read 2025-10-03 → 2026-05-30 | 1.18.0 live with the 1.18.1 preview (to 2026-03-19), then **1.18.1 live** (from 2026-03-20) | Everything current. Post-release messages (March–April 2026) were preferred for builds, rotations and bugs |
| `#hunter` Discord highlights 2024-11 → 2025-10 | CC2 (1.17.2) and 1.18.0 | Mechanics that did not change (weapon skill, traps, pet training, hit caps), gear lists, and history |
| `#pvp-general` Discord, 2025-10 → 2025-11 | 1.18.0 | Class matchups and battleground roles (marked "pre" on the PvP page) |
| Official class-change notes: [Jamey (staff), 2026-01-23, revised 2026-01-26 and 2026-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071); hotfixes [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139); earlier kits [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102967#p102967), [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) | all | Talent and ability numbers |
| The earlier KB pass (`synthesis/classes/hunter/`, forum f=45) | all | Forum leveling, pet and hardcore advice |
| Talent trees and codes (`structured/talents/hunter.yaml`, `builds-hunter.yaml`) | 1.18.1 | Every build and leveling order was validated with `talent_tool.py` |

**Era check.** One note called the 2025-08-16 patch "1.18.1". The patch timeline shows **1.18.0 "Scars of the Past" on 2025-08-15**, and **1.18.1 "Nightmares of Ursol" announced 2025-10-03 and live 2026-03-20**. Kill Command v1, Baited Shot, Coordinated Assault 30%, Lacerate and the pet family abilities are 1.18.0. Experimental Ammunition, Lock and Load, baseline Steady Shot and Trueshot Aura, Bestial Wrath, Scent of Blood and the new Kill Command are 1.18.1. The pages present only the latter as current.

**Server context.** Around 2026-04-18 the channel discussed Turtle WoW shutting down [[d:hunter#1495072674626404422]], [[d:hunter#1495111253553713275]]. So the post-release evidence covers roughly four weeks of raiding, and later messages are sparse.

## Experts relied on and why

| Player | Area | Why trusted |
|---|---|---|
| **Sofie** | MM and Survival, stats, consumables | Posts controlled dummy tests: crit scope over 1,000 shots [[d:hunter#1485556365173850123]]; DW vs 2H with matched gear [[d:hunter#1465688438832369887]]; Multi-after-Steady blind test [[d:hunter#1463875219025297458]]. Checks her claims against logs [[d:hunter#1491912659304583369]] |
| **Dresche** | Survival DW, MM raid play | Authored the community Hunter FAQ / "Nightmares of Ursol" guide sheet [[d:hunter#1487437538531610674]]; raid-tested the MM build in Kara40 [[d:hunter#1485384949455392868]] |
| **Vellasta** | Theorycraft, simulator | Built the community hunter simulator (`vellasta.github.io/classic/hunter/`) [[d:hunter#1490682120815775965]]; careful mechanic tests [[d:hunter#1484829044494172222]] |
| **limbless** | BM and pet mechanics | Dummy-tested Kill Command uptime, Claw vs Bite and Savage Rend scaling [[d:hunter#1491473274444714116]], [[d:hunter#1491772642255048804]] |
| **Darkaco** | BM mechanics, pet items | Documented pet-damage item stacking [[d:hunter#1492494095661138141]]; filed the Kill Command range bug [[d:hunter#1484783149413171350]] |
| **Boomsky** | MM timing, stat math | Measured Aimed Shot cast times [[d:hunter#1489733155719217306]] and the hidden 0.5 s casts [[d:hunter#1469029669813878804]] |
| **Kaslux** | BM raiding, pet swaps | Per-boss pet plans and resistances [[d:hunter#1485818622780637266]], [[d:hunter#1485902382322683904]] |
| **Meta** | Addons | Author of MetaHunt, with a staff-provided beast database [[d:hunter#1485322803430297753]] |
| **Valaen, Sisco the Kid** | Pets | Consistent, confirmed answers on taming, training points and loyalty [[d:hunter#1424076440609226985]], [[d:hunter#1437649559420407933]] |

Also used: Santa Bear and Itron (BM raid builds and results), Kalamity, Zwift, Focus, Thalenar, yaboikeenser, Hakuna and Raggen.

## Community resources

- Dresche's Hunter FAQ / guide sheet (pinned, updated for 1.18.1): `docs.google.com/spreadsheets/d/1T2GW5OxWjNVTeBasZw6yJkUxG_6fufh8XWrLEXKlxpA` [[d:hunter#1412681801339764817]], [[d:hunter#1487437538531610674]].
- Vellasta's simulator: `vellasta.github.io/classic/hunter/` [[d:hunter#1490682120815775965]]. It defaults to an undead target and does not model Scorpid snapshotting [[d:hunter#1494641427387252816]], [[d:hunter#1494802758513983560]].
- Destroses' "All Beasts" pet sheet [[d:hunter#1485990912461897870]]; MetaHunt (`github.com/DuvelCorp/MetaHunt`) [[d:hunter#1488624322686746945]].
- Talent calculator: `talents.turtlecraft.gg/hunter` (the old `turtle-wow.org` links are dead) [[d:hunter#1476574120727674978]].

## Gaps

1. **No full-tier parse ranking after 1.18.1.** The MM vs BM vs Survival order rests on a few logs and dummy tests (Barwat's summary [[d:hunter#1489032257317507102]], Santa Bear's Naxx test [[d:hunter#1486419920332787763]]). It is **contested** and changed week to week.
2. **Lock and Load details.** The proc is 100% on a qualifying crit, but whether one piercing Aimed Shot that crits several targets gives several resets is unconfirmed. So is the exact Aimed Shot base cast (the patch says 2 s; Boomsky measured 2.15 s with no procs and "2.5 s" unhasted) [[d:hunter#1489733155719217306]].
3. **Experimental Ammunition bugs.** Fire Ammunition's Multi-Shot explosion does a flat ~50–60 damage instead of 20% weapon damage [[d:hunter#1484664003497300118]]; no staff fix was seen. Reports on Nature Ammunition are inconsistent [[d:hunter#1484677211729694771]].
4. **Coordinated Assault's scaling.** It uses your melee AP, and a bug-report reply suggests devs will keep that [[d:hunter#1484441717590593556]]. It is not confirmed final.
5. **Pet PvP dampening** is missing; whether that is intended is unknown [[d:hunter#1491028211960643695]].
6. **Survival stat weights**: no sim-backed Survival weights were posted (the sim presets were called imperfect [[d:hunter#1494680933369118820]]). The haste value for Survival after the Strike Together nerf is unsettled.
7. **Scorpid vs Raptor for BM** after the poison hotfix is contested [[d:hunter#1489042673892327477]], [[d:hunter#1489044130851061784]].
8. **Loyalty**: whether loyalty needs XP or only time is contested [[d:hunter#1460629863223525600]], [[d:hunter#1462276890864910502]].
9. **Deep-BM PvP code**: no complete BM PvP build was posted after 1.18.1, only the raid build and a sketch [[d:hunter#1485053120982814993]].
10. **Pre-raid BiS**: no post-1.18.1 list exists [[d:hunter#1489540608925237259]]. The lists used are from mid-2025.
11. **Class matchups** in PvP come mostly from before 1.18.1.
12. **Goblin hunters**: no source discusses them.
