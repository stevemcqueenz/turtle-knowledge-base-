# Priest: sources

## What informed these pages

| Source | Era | Used for |
|---|---|---|
| Discord `#priest`, full read 2025-10-03 → 2026-05-29 | 1.18.1 announced, released (2026-03-20), final weeks | Builds, rotations, stats, gear, bugs; the primary source |
| Discord `#priest` highlights 2024-11 → 2025-10 | Class Changes 2 → 1.18.0 | Leveling consensus, pinned build sets, older healer and Shadow mechanics, gear lists |
| Discord `#pvp-general` dossiers (2021-05 → 2025-11) | Pre-1.18.1 only | Matchups, tier lists, trinket change, racials in PvP |
| Turtle forum (priest subforum and staff changelogs), via the KB research archive | 2019 → 2026-04 | Staff 1.18.1 changes ([Jamey, 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)), set bonuses ([Dragunovi, 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)), Langorn's Holy guide ([Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325)), enchant and pre-raid tables, PvP forum posts |
| Talent data (`structured/talents/priest.yaml`, decoded builds) | 1.18.1 trees | Every published build and leveling order was checked with `talent_tool.py` |

Post-release evidence was preferred over pre-release, and pre-release over older material. Where advice changed (Proclaim Champion, the clickable Lightwell, Shadow Weaving as a target debuff, pre-1.18.1 healing ranks), the pages give the current advice and flag the old one.

## Experts relied on

| Person | Spec | Why they were trusted |
|---|---|---|
| **Zitronenhaze** | Shadow | Top Shadow raider (per-boss Naxx parses [[d:priest#1460389926838468770]]). Maintains the pinned Shadow guide and BiS sheet [[d:priest#1450143884167483413]]. Published threat math and retracted his own claims after testing [[d:priest#1444088076384338121]]. |
| **Snackz** | Smite | Maintains the pinned Smite sim spreadsheet for 1.18.1 [[d:priest#1484922576034594877]]. Worked out the 10% haste breakpoint [[d:priest#1481690213138038855]]. |
| **Greendam** | All | The most frequent and consistently accurate answerer. Author of the pinned leveling image [[d:priest#1345481802198024263]]. |
| **irotos** | Shadow | Posted the post-1.18.1 Shadow raid and PvP builds [[d:priest#1487798526288334898]], [[d:priest#1487814720428834826]]. |
| **Bluefear, Istrefi, Lirya, t0uchm3** | Holy | The post-1.18.1 Holy build, Book of Prayer testing and rotation guides [[d:priest#1488039697971281981]], [[d:priest#1484561705487958016]], [[d:priest#1493870884375629836]], [[d:priest#1487035175626997761]] |
| **HolyScheiss** | Smite | Co-author of the pinned video builds [[d:priest#1389476140011491378]]; the full-T3 Smite build [[d:priest#1504764793372803122]] |
| **L-star** | Holy | In-game coefficient and shield-formula tests [[d:priest#1427126126756630529]] |
| **Fat Pibble with Air Pods, Dragunovi** | Dev / staff | Confirmed mechanics and bugs in the channel [[d:priest#1473373046105444475]], [[d:priest#1504883802894372896]] |

## Gaps

What the sources do not settle:

1. **Tauren racial numbers.** The exact damage, mana costs and durations of Light of An'she and Spiritwalker, and when the second racial unlocks, are unknown [[d:priest#1495082420171706479]].
2. **Smite T1 5-piece bonus.** A tooltip screenshot says 30% pushback avoidance; another player describes +35 spell power with Inner Fire [[d:priest#1484528181104082994]], [[d:priest#1484942233080827915]].
3. **Lightwell after the hotfix.** Whether the Splendor of Light targeting fix (2026-03-24) cured the "heals full-HP players" bug reported in April [[d:priest#1489176818719391795]].
4. **Shadow Weaving.** Whether the 9 s debuff duration is intended, and how several Shadow priests' stacks interact [[d:priest#1484726495568986112]], [[d:priest#1479949815843524668]].
5. **Full per-slot enchant lists for Smite, Shadow and PvP.** Only healer lists and a few DPS slots (shoulders, wrist, weapon, gloves) are sourced. The stats of the Naxx shoulder enchant are not stated.
6. **Renew rank 5.** Whether this rank, inefficient before 1.18.1, was fixed; 1.18.1 only names Heal rank 4 and Flash Heal ranks 3-7.
7. **Sigil of the Ancient Accord for Shadow** stays disputed [[d:priest#1486310112246108211]], and so does Mark of the Champion vs Eye of Dormant Corruption against Undead [[d:priest#1494537258592632925]].
8. **PvP after 1.18.1.** `#pvp-general` ends in 2025-11, so the matchups are pre-release apart from a handful of post-release `#priest` posts. Per-spec dampening values are unknown.
9. **Holy vs 21/30 hybrid throughput** in 1.18.1: no parse comparison was posted.
10. **Leveling zone route.** No priest-specific route exists. The dungeon table is limited to instances named for priest loot.
11. **Book of Prayer and T2 8-piece.** Whether the 8-piece's extra "Renew" counts as a separate spell for Book of Prayer.
