# Paladin — Protection PvP (anti-melee bruiser and flag carrier)

New coverage. The forum-derived KB marked Protection PvP as **none**. Discord supplies a decoded 11/33/7 prot PvP tree, the Reckoning anti-melee role, the pre-1.18.1 7k-hp bruiser profile, T1 PvP as prot pre-bis and the post-1.18.1 leaderboard reports. Everything is cited; era and agreement are marked. Conventions: `synthesis/CONVENTIONS.md`.

## Overview

- **Role**: a stamina/plate **anti-melee bruiser** and possible WSG flag carrier [[d:paladin#1481357663798558852]]. The `#pvp-general` profile: "7k hp, ~60% physical DR, holy damage ignores armour, 12 s immunity + instant full heal, beats all melee and most casters, loses to Soul Link" [[d:pvp-general#1315720921260101725]] (pre-1.18.1, single source). It was rated S-tier by one pvp-general list, alongside Hpal [[d:pvp-general#1353324094954934314]].
- **Reckoning is the anti-melee engine**: "Fury wars and cat druids I encounter in PvP certainly still feel Reckoning's existence" [[d:paladin#1482102558729441460]] (post-1.18.1, consensus); "might even just do Prot for PvP to make Rogues and Warriors cry. Reckoning block triggers will be funny" [[d:paladin#1296316172165451890]]. The old (pre-rework) Reckoning was "iconic" and was taken away [[d:paladin#1449087673586286592]] [[d:paladin#1441078917015404699]]; the current one is the block-trigger version.
- **Post-1.18.1 standing is contested**: "Honestly I'm running as deep prot with TF and I'm top of the leaderboards 9/10 matches with 0 consumes and no dedicated PvP gear" [[d:paladin#1490469775988494518]] vs "currently just trolling as deep prot with TF in arathi, but doesnt seem really useful" [[d:paladin#1490466272973029558]].
- **In the mirror**, prot beats ret 1v1 [[d:pvp-general#1340006892612616274]].

## Talent build

**Deep Prot, 11/33/7** (Mithreon; decoded) [[d:paladin#1484476226256240721]] [[d:paladin#1485364474562220133]] - `AoAoB-AoYDZYCAZYAoB-AoQ`:

| Tree | Allocation |
|---|---|
| Holy 11 | Divine Intellect 5, Improved Seal of Righteousness 5, Sanctity Aura 1 |
| Protection 33 | Redoubt 5, Precision 3, Toughness 3, Improved Righteous Fury 3, Blessing of Sanctuary 1, Shield Specialization 3, Improved Hand of Reckoning 2, Righteous Defense 3, Holy Shield 1, Reckoning 3, Righteous Strikes 5, Bulwark of the Righteous 1 |
| Retribution 7 | Benediction 5, Improved Judgement 2 |

Prot threat/damage variants also circulate: **Prot 38 / Holy 13** (Reckoning 5, Righteous Strikes 5, Bulwark 1) `AoAoBQ-AoYFZZCAZoAoB-` [[d:paladin#1458084059795423304]] and **Prot 40 / Ret 11** `-AoYFZbCAZoAoB-AoIo` [[d:paladin#1485667467706765485]]. The 11/33/7 shape is the same as the PvE tank build (see `protection-tank.md`); every point carries a `spell_id` in `structured/classes/paladin/protection-pvp.yaml`.

## Stat priority

- **Stamina** first (the bruiser identity; 7k hp reported) [[d:pvp-general#1315720921260101725]].
- **Spell power** for threat/damage and because the epic PvP set carries SP [[d:paladin#1490382851429109760]].
- **Strength / AP is low**, as in PvE [[d:paladin#1487950600573554739]].
- **Resilience does not reduce druid melee crit** [[d:pvp-general#1330191318986657925]].

## Rotation / tactics

1. **Righteous Fury + Retribution/Sanctity Aura + Seal of Righteousness** up.
2. **Holy Shield on cooldown**; Reckoning block triggers punish melee trains.
3. **Hammer of Justice** (~30 s with Improved Hammer of Justice 3/3 + the old PvP set [[d:paladin#1484653064366325761]]) to set up a kill, then burst.
4. **Judgement / Holy Strike / Crusader Strike** for threat and Zealous Defence (the 1.18.1 CS change; see `protection-tank.md`).
5. **Support**: Hand of Freedom, BoP, Cleanse, Hand of Sacrifice - note Hand of Sacrifice damage **no longer breaks CC** (1.18.0) [[d:paladin#1489674002254528573]].
6. **Divine Shield** as a bruiser reset; **disabled in rated arena** [[d:paladin#1489382932161495110]].

## Gear and consumables

- **T1 PvP is "prob super prebis for prot pally"** [[d:paladin#1490253553183363175]]; the epic PvP set is "honestly ... great stats and sp" and near-BiS [[d:paladin#1490382851429109760]].
- Engineering (grenades, sappers), Frost Oil, pots/teas, Free Action Potion [[d:paladin#1483206266699386882]].
- Weapon: Thunderfury was named in the deep-prot leaderboard report [[d:paladin#1490469775988494518]].

## Arena (from 2026-03-31)

- **Bubble is disabled in rated arena** [[d:paladin#1489382932161495110]]; **Lay on Hands is disabled** [[d:paladin#1441426127284473877]]; strongest cooldowns/consumables are restricted (staff, `structured/patches/1.18.1-changes.yaml`).
- No prot arena comp/rating data exists in the archive - a gap.

## Common mistakes

- Expecting prot to close on kiters: it is an anti-melee / flag-carrier bruiser, not a chaser.
- Treating Crusader Strike as a threat button instead of Zealous Defence [[d:paladin#1484833025177944206]].
- Stacking Strength plate instead of stamina + spell power [[d:paladin#1487950600573554739]].

## Sources

| Source | Author (authority) | Date | Era | Agreement |
|---|---|---|---|---|
| [[d:paladin#1484476226256240721]], [[d:paladin#1485364474562220133]] | Mithreon (player, theory) | 2026-03-21 | post-1.18.1 | consensus (tree) |
| [[d:paladin#1482102558729441460]], [[d:paladin#1296316172165451890]] | players | 2026-03-13 / 2024-10-17 | post / pre | consensus (Reckoning) |
| [[d:paladin#1490469775988494518]], [[d:paladin#1490466272973029558]] | players | 2026-04-06 | post-1.18.1 | contested (standing) |
| [[d:paladin#1490253553183363175]], [[d:paladin#1490382851429109760]] | players | 2026-04-05 | post-1.18.1 | single source (gear) |
| [[d:pvp-general#1315720921260101725]], [[d:pvp-general#1353324094954934314]], [[d:pvp-general#1340006892612616274]] | pvp-general (players) | pre-1.18.1 | pre | single source (bruiser profile, S-tier, mirror) |
