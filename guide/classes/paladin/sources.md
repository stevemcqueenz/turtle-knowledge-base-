# Paladin: sources

## What these pages are built from

| Source | Period | Used for |
|---|---|---|
| Turtle WoW Discord `#paladin`, full read | 2025-10-03 → 2026-05 (29 note chunks, `full-000`..`full-025`) | Everything: builds, rotation, gear, 1.18.1 changes and post-release results |
| `#paladin` highlights | 2024-11 → 2025-10 (`hl-*`, the Class Changes 2 era) | History, mechanics that did not change, older guides you will meet |
| Discord `#pvp-general` | 2025-10 → 2025-11 | Paladin matchups, PvP enchants, battleground roles |
| Official class notes (forum) | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071); itemization notes [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272); hotfixes [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139) | Exact 1.18.1 numbers |
| Forum guides | [Unchallenged, Paladin Guide (edited 2024-12-04)](https://forum.turtlecraft.gg/viewtopic.php?p=27457#p27457); [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102969#p102969) | Ability training levels; the older leveling talent order |
| Talent data | The 1.18.1 talent trees (`structured/talents/paladin.yaml`) | Every published build and leveling order was checked against the tree rules |

Current = 1.18.1 (live 2026-03-20). Post-release evidence is preferred over the January 2026 previews, which are preferred over older posts. The channel ends in May 2026; nothing after that is covered.

## Experts relied on, and why

- **Lhian** (developer): posted and explained the 1.18.1 paladin changes in-channel and confirms or denies rumours directly [[d:paladin#1486109344486653954]], [[d:paladin#1481428000867356684]]. His 2026-04-01 "next patch" post was an April Fools joke [[d:paladin#1488852869212798987]].
- **Mithreon**: the channel's build curator; posts the pinned talent codes (the SoR, SoC, Prot and Holy builds used here [[d:paladin#1491936698689388746]], [[d:paladin#1440085972103594096]]), the spell coefficient sheet [[d:paladin#1390647300568911932]] and the leveling checkpoints [[d:paladin#1440662105140236349]].
- **Jesse Potter (Lightbourne)**: one of the top Seal of Command Rets on the server; detailed openers, gear and consumable lists, PvP [[d:paladin#1455491776248025123]], [[d:paladin#1494325796440113223]]. Others note he is prolific and sometimes wrong [[d:paladin#1459965639593562155]]; his claims were cross-checked.
- **Istenneveben (Spelladin)**: long-time top SoR parser and author of the community spellret gear guide [[d:paladin#1427653402598441070]]; weapon skill and rotation summaries [[d:paladin#1488219693293633586]], [[d:paladin#1495906695132483664]].
- **Grey**: careful mechanics and math (SoR formulas, mana, Fortune, tank tier lists) [[d:paladin#1458520925292073124]], [[d:paladin#1489847158504165416]].
- **Destroses, Beldrin, gastro, dusty, Excinerus, Adamant, Silverhand, Proph, keungzhe**: repeated, mutually checked answers on Necrodin, spellstrikes, Windfury, weapons and stats.

Every build and number was checked against the message text in the raw archive; misattributed note citations were corrected.

## Gaps

What the sources do not settle:

1. **SoR vs SoC under full raid buffs.** The only controlled test was a self-buffed dummy (SoC ahead by ~30 DPS) [[d:paladin#1486723603952046090]]; raid logs still favour SoR at the very top [[d:paladin#1493184429906989217]]. No full-raid comparison was posted.
2. **No public Paladin DPS simulator** exists; people with private calculators refuse to share them [[d:paladin#1490736985399103649]], [[d:paladin#1492002869044580432]]. Stat weights are rules of thumb.
3. **Crusader Strike vs Holy Strike for spellret after 1.18.1**: the answer depends on armor, spell power and weapon, and players disagree [[d:paladin#1485777254620467230]], [[d:paladin#1486002061677039879]].
4. **Fortune and the Lost set**: whether Fortune raises the Lost set's ghost procs is unconfirmed; testing needs ~10,000 casts [[d:paladin#1490224351025299568]], [[d:paladin#1486691948017483906]].
5. **Libram of Ardour vs Libram of the Eternal Tower** by fight length: two views [[d:paladin#1488594571410804847]], [[d:paladin#1493046992148893806]].
6. **Pysan's New Greatsword for Necrodin**: one tester calls it BiS, others doubt a 3.5-speed weapon [[d:paladin#1487293142091825352]], [[d:paladin#1487293508166488205]]. Its proc rate changed after a hotfix.
7. **Necrodin Tier 2 slot split** (which pieces Ret vs Prot): several different splits, no consensus [[d:paladin#1470320626018418894]], [[d:paladin#1489546828167774249]].
8. **Tempered Runeblade's real proc rate**: database 1.2 PPM vs a measured 2.1 [[d:paladin#1434961259001806848]], [[d:paladin#1435032873374584893]].
9. **Consecration's spell power coefficient** (~0.66 claimed) was never confirmed [[d:paladin#1468302112587911199]].
10. **Flametongue Totem bug (April 2026)** inflated SoR and Necrodin parses; whether and when it was fully fixed is not in the sources [[d:paladin#1493259558431494244]].
11. **Divine Shield's healing penalty**: 50% or 60% [[d:paladin#1467173434726547698]], [[d:paladin#1454939206445957152]].
12. **PvP**: no posted, complete 51-point Ret or Holy PvP build; the self-heal Ret and Shockadin trees on the PvP page are reconstructed from descriptions and marked as such. Nobody answered requests for a PvP template [[d:paladin#1471710411983163514]]. No arena comp or rating data; no current data for the Priest, Druid and Paladin matchups.
13. **Leveling**: no full zone route; the Ret leveling order is Mithreon's checkpoints with the in-between order chosen for this guide; no post-1.18.1 leveling order was posted in full.
14. **After May 2026**: any later hotfix or balance patch is not covered.
