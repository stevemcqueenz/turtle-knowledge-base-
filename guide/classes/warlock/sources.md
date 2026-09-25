# Warlock: sources

## What informed these pages

| Source | Coverage | Use |
|---|---|---|
| Turtle WoW Europe Discord **#warlock**, full read | 2025-10-03 .. 2026-05-28 (1.18.0 live, 1.18.1 announcement and the live 1.18.1 patch) | Primary source for every page |
| #warlock highlights | 2024-11 .. 2025-10 (Class Changes 2 and 1.18.0 preview) | Background and trajectory; older advice is marked as such |
| #pvp-general | Per-class notes for this pass were not available; the earlier Discord pass's #pvp-general dossiers and the warlock PvP dossier and matchup file were used | [PvP](pvp.md) matchups |
| Turtle forum (warlock forum, staff class-change thread) | Staff patch notes for CC2 (2024-10-12), 2024-12-20, 2025-03-30, 1.18.0 (2025-07-25) and 1.18.1 ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)); player posts through 2026-04 | Official numbers, older player advice |
| Community wiki | [Warlock page](https://turtle-wow.fandom.com/wiki/Warlock) | Enchant list only; its builds were stale at release [[d:warlock#1484605293135663197]] |
| Talent data | `structured/talents/warlock.yaml` (1.18.1 tree) and `talent_tool.py` | Every build and leveling order was validated; the codes are printed on each page |

Era rules: **1.18.1 went live on 2026-03-20.** Posts from 2025-10 to 2026-03 are 1.18.0 (with the 1.18.1 announcement from 2026-01-24). Where a 1.18.0 claim was overturned by the live patch (Unleashed Potential, Searing Pain, Sinister Pursuit, the T3.5 3-piece), the pages give the post-release answer. Builds posted before 1.18.1 decode correctly on the 1.18.1 tree, except that the old Improved Healthstone slot is now Sinister Pursuit. The pages note this wherever it matters.

The server closed in May 2026 after a legal settlement, per unofficial reports in the channel [[d:warlock#1492941900838080683]]. Some late bugs (greater-demon pathing) were never fixed [[d:warlock#1495335572145836152]].

## Experts relied on

| Person | Why | Examples |
|---|---|---|
| **Summonjutsu** (GL, Tremor Totems) | The most detailed answers on demon mechanics, threat, tanking, hit/crit splits and builds; wrote a warlock-tanking forum guide | [[d:warlock#1427532174705295360]], [[d:warlock#1432774862216101999]], [[d:warlock#1489010489030606961]] |
| **Afraido** | Pinned the three release-day endgame builds; threat and stat tables | [[d:warlock#1484228321708478635]], [[d:warlock#1483641110197833728]], [[d:warlock#1482828212525469856]] |
| **biloen** | Runs the community warlock sim; dummy tests on Dark Harvest vs Drain Soul, haste and set bonuses | [[d:warlock#1473678492687270104]], [[d:warlock#1495057484266606745]], [[d:warlock#1495056389842931802]] |
| **Nezu / Papaverine / Mooncrazed** | Top Nordanaar raider (Affliction and Demonology); boss-by-boss spec choices; debunked the haste breakpoints | [[d:warlock#1435300266822996021]], [[d:warlock#1483947828341637150]] |
| **L-star** | Top-parse reports, bug lists sent to the devs, SM/Ruin vs Affliction comparisons | [[d:warlock#1465198561955418367]], [[d:warlock#1474519805234249999]] |
| **W** | Class designer; authoritative on intent and coefficients (pinned pet scaling table). His balance opinions were often disputed by players | [[d:warlock#1488156105111633930]], [[d:warlock#1484625922316308482]] |
| **Lightemgee, Ghost9626** (Warlock Shift Lead), **Not Normal, Taffy, Karen, Frolegacy, Buubah, Szalor, sailorVEVO** | Mechanics corrections, gear lists, haste math, leveling orders | [[d:warlock#1489759140824748163]], [[d:warlock#1480617902515425378]], [[d:warlock#1482503137041584229]] |

Forum voices kept from the existing KB: staff patch posts (Dragunovi, Jamey, Torta), and players Akarui, Grizb37, Spritzbube, Momohomo and Campy for older rotation context.

## Gaps (what the sources do not settle)

1. **No post-release, like-for-like comparison** of Affliction vs Demonology vs Fire at equal gear. The rankings rest on parses and opinion ([[d:warlock#1484828741267095563]] vs [[d:warlock#1484625922316308482]]).
2. **Unleashed Potential's attack-power school:** highest school or shadow only? [[d:warlock#1432720871461617757]], [[d:warlock#1491200463385792663]].
3. **Does Devastation raise your demon's crit?** W says yes, Summonjutsu says no [[d:warlock#1485601104212525188]], [[d:warlock#1465422989519487077]].
4. **Haste breakpoints:** tested as not real by Nezu and biloen, but some players still report a noticeable step (12% → 13%) after release [[d:warlock#1488492328862744596]].
5. **Late Affliction gearing:** full T3 vs a T2.5/T3 mix never got a clean test [[d:warlock#1476344494621327480]].
6. **PvP damping:** the per-spec values were never published; whether warlocks were hit hard is disputed.
7. **Dwarf warlock:** no PvE or PvP evaluation beyond one-line opinions.
8. **Leveling route:** there is no zone-by-zone route or full dungeon-by-bracket list, only named item pickups.
9. **Hellfire vs Rain of Fire after the 1.18.1 Hellfire buff:** no comparison posted.
10. **Resilient Shadows:** players doubt it works [[d:warlock#1461246464209453196]].
11. **Blood Fury's value:** sources quote 60 SP and 120 SP [[d:warlock#1428341886845714542]], [[d:warlock#1491110311535706296]].
12. **Doomguard vs Felguard/Infernal single-target:** unresolved. L-star calls Doomguard "on par with Infernal and Felguard on single target" [[d:warlock#1490694358482288681]], while W says Doomguard is single-target and Felguard is the AoE demon [[d:warlock#1485736529501491250]].
13. **Shadow Oil and Shadow Vulnerability:** whether the oil's Shadow Bolt applies the debuff was never answered [[d:warlock#1482797741393449052]].
14. **Demonology-specific enchants:** no source gives a per-slot list; the pages reuse Affliction's slots with spell power over haste.
15. **Dark Harvest's cooldown reset on kill** was reported as not working; no fix was confirmed [[d:warlock#1463553707974332500]].
