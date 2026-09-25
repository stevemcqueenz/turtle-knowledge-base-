# Paladin — Retribution PvP (burst-assist and support)

New coverage. The forum-derived KB folded Retribution PvP into `retribution-melee-dps.md` as "weak (contested nerf/OP)" and posted no build. Discord supplies two decoded 51-point trees (AP/SoC and spell/SoR), the Judgement-of-Justice ranged-stun tech, the support-kit verdict and the post-1.18.1 standings. Everything is cited to `[[d:...]]`; era and agreement are marked. Conventions: `synthesis/CONVENTIONS.md`.

## Overview

- **Standing is contested but leaning good post-1.18.1.** "yea ret pal feels HELLA good in pvp right now" [[d:paladin#1484792824296771716]] (post-1.18.1) and "I played a few hours of PvP last night as ret and it felt incredibly healthy and good" [[d:paladin#1485066982024937552]]; the counter-view is "Ret isn't amazing in pvp" [[d:paladin#1483194113871446199]] and "Rets are ass, hpally is where paladin pvp is at" [[d:paladin#1443973737056698448]]. Server-relative: "as much as people complain here of pala in pvp, out of most the servers it's the 'weakest' you can say" [[d:paladin#1495456535042592848]] (post-1.18.1).
- **The identity is burst inside a stun window plus the support kit**, not sustained damage. "Can chain cc with repentance and clean some people up 100-0 with HoJ into Rep" [[d:paladin#1324918396680273981]]; "In PvP burst is more important than anything" [[d:paladin#1485064552906358784]]. But "It's true most of the Rets I have seen completely ignore the support kit of the Paladin ... (cleanse, bop, bos)" [[d:pvp-general#1109073351412027432]], repeated in-channel as "Half of alliance in PvP is rets and 5% of them ever threw a heal or freedom/protection on another player" [[d:paladin#1483197309121462443]].
- **Matchups** (player reports, not win rates; see `staging/paladin-pvp/matchups.yaml`): wins vs warrior [[d:pvp-general#1118210717846339636]] and rogue [[d:pvp-general#1153844681717854249]]; hard loss vs shaman (Purge) [[d:pvp-general#1371851334738907257]]; loss vs mage [[d:pvp-general#1376543969743474790]], Soul Link warlock [[d:pvp-general#1126789007439822858]] and shadow priest [[d:pvp-general#1306963676057833532]]; hardest vs druid [[d:pvp-general#1161684586296782848]]; hunter contested [[d:pvp-general#1161014215235092520]].
- **PvP 2-piece set bonus** (Judgement of the Crusader damage) is widely considered dead weight; the healer/ret **gloves** (30 Sta / 20 Int / 2% spell crit / +40 healing) are the standout piece [[d:paladin#1487233454788837477]] [[d:paladin#1487339526719406091]].

## Talent build

Two decoded 51-point trees, both 11/8/32 (Mithreon's "SoC Ret" and "SoR Ret") [[d:paladin#1440085972103594096]] [[d:paladin#1484638917067145449]]:

| Split | Seal / gear | Allocation |
|---|---|---|
| **11/8/32 AP/SoC** | `FoAAB-FAY-AoTAFJYAFIFAB` | Holy: Divine Strength 5, Divine Intellect 5, Sanctity Aura 1 · Prot: Improved Devotion Aura 5, Precision 3 · Ret: Benediction 5, Improved Judgement 2, Improved Seal of the Crusader 3, Conviction 5, Blessing of Kings 1, Pursuit of Justice 1, Two-Handed Weapon Specialization 3, Vengeance 5, **Seal of Command 1**, Vengeful Strikes 5, Repentance 1 |
| **11/8/32 spell/SoR** | `FAAoB-FAY-AoTAFKYAFAFAB` | The same tree with **Improved Seal of Righteousness 5** instead of Seal of Command and Pursuit of Justice 2 |

- **AP/SoC is the consensus PvP seal**: "In PvP you always soc, (because sor can't burst) and always mix ap sp, for all the purpose" [[d:paladin#1484646921850192184]]; "for PVP tho I would always run SOC" [[d:paladin#1488868459726245898]]. Seal of Righteousness points are wasted in PvP [[d:paladin#1380445706090844222]].
- **The spell/SoR tree is the contested alternative**: "can do a lot of damage as spellret in pvp too" [[d:paladin#1441145875756875876]] vs "Burst is king in pvp. And spellret has NO FUCKING STAMINA" [[d:paladin#1485052206989185095]]. Gear is explicitly "subjective, to your personal desires and gameplay" [[d:paladin#1463425553074753640]].
- **Deep-Prot damage variant, Prot 30 / Ret 21** (decoded): Reckoning + Righteous Strikes + Improved Hammer of Justice + Seal of Command/Vindication, posted for 1.18.1 PvP [[d:paladin#1465252005432787102]]. All three trees are enumerated with `spell_id`s in `structured/classes/paladin/retribution-pvp.yaml`.

## Stat priority

- **Stamina** is the PvP stat ("People sneeze at stamina but that's vanilla pvp stat") [[d:paladin#1487529855430955068]]; spell-ret is criticised for having none [[d:paladin#1485052206989185095]].
- **Attack power / strength** for the AP/SoC burst build; **spell power** for the SoR alternative (contested).
- Weapon enchant: **Crusader** is the default, +30 Spellpower the spell-ret choice - no consensus [[d:paladin#1481012056034508960]] [[d:paladin#1482087143743557733]].
- **Run-speed boots** are treated as the anti-kite requirement [[d:paladin#1443943020658429973]].
- Against druids, **resilience does not reduce the druid's melee crit** [[d:pvp-general#1330191318986657925]].

## Rotation / tactics

1. **Seal of Command up; Judgement of Command for burst** (1.18.1 raised SoC to 9 PPM, "more consistent, in pvp too") [[d:paladin#1490479546053693462]].
2. **Repentance + Hammer of Justice chain CC** to set up a kill [[d:paladin#1324918396680273981]]; Repentance is "excellent now" because its immune-target tick scales 8% AP [[d:paladin#1485101394544427152]].
3. **Spear/Zeal + Holy Might maintenance** between windows; Judgement on cooldown.
4. **Judgement of Justice ranged-stun tech**: "if you judge justice it has a chance to proc the seal on the judgement hit AKA a ranged stun ... you just have to reseal justice as judge it" [[d:paladin#1491170906700251276]] (post-1.18.1, single source).
5. **Support**: Cleanse, Hand of Freedom, Hand of Protection, Blessing of Sacrifice, off-heals - the real value of a Ret in a BG [[d:paladin#1483197309121462443]].
6. **Divine Shield** to survive a burst window; -60% damage dealt, and disabled in rated arena.

## Gear and consumables

- PvP healer/ret gloves (30 Sta / 20 Int / 2% spell crit / +40 healing) and blue PvP gear as pre-raid healing/BiS [[d:paladin#1487339526719406091]] [[d:paladin#1491923339583950989]]. AV mace named as a ret PvP weapon [[d:paladin#1488814369620889743]].
- Consumable kit: sappers, thorium grenades (stun), teas, pots, Frost Oils, Free Action Potion, Living Action Potion [[d:paladin#1483206266699386882]] [[d:paladin#1455759403100803173]] [[d:paladin#1434479918317703300]]. Engineering is the PvP profession [[d:paladin#1491337490085445834]].

## Arena (from 2026-03-31)

- **Bubble is disabled in rated arena** [[d:paladin#1489382932161495110]]; **Lay on Hands is disabled** [[d:paladin#1441426127284473877]]; strongest cooldowns/consumables are restricted (staff, `structured/patches/1.18.1-changes.yaml`).
- **Hand of Sacrifice damage no longer breaks CC** (1.18.0 change "in anticipation for arenas") [[d:paladin#1489674002254528573]].
- **The Divine Shield penalty is contested**: -60% (staff/KB 1.18.0) vs "another 10%" (-70%) [[d:paladin#1490581333637070860]] vs "reduces healing taken and done by 50%" [[d:paladin#1467173434726547698]]. Unresolved.
- Speculated comps only ("deep ret", "2 shockadin 1 ret") [[d:paladin#1484421140607930369]] [[d:paladin#1483194113871446199]]; no arena meta formed before the archive ends.

## Common mistakes

- Using Seal of Righteousness in PvP - SoC is the PvP seal and SoR points are wasted [[d:paladin#1380445706090844222]].
- Ignoring the support kit (Cleanse / BoP / Sacrifice / Freedom) [[d:pvp-general#1109073351412027432]].
- Chasing kiters instead of bursting inside a HoJ/Repentance window (the classic "3 rets chase a mage for 3 minutes" complaint [[d:paladin#1437416181391818835]]).
- Mixing AP gear with an SP weapon or vice versa.

## Sources

| Source | Author (authority) | Date | Era | Agreement |
|---|---|---|---|---|
| [[d:paladin#1440085972103594096]], [[d:paladin#1484638917067145449]] | Mithreon (player, theory) | 2025-11-18 / 2026-03-21 | 1.18.1-announced-pre-release → post | consensus (both trees) |
| [[d:paladin#1484646921850192184]], [[d:paladin#1488868459726245898]] | players | 2026-03-21 / 04-01 | post-1.18.1 | single source each (AP/SoC) |
| [[d:paladin#1441145875756875876]], [[d:paladin#1485052206989185095]] | players | 2025-11-20 / 2026-03-22 | 1.18.1-announced-pre-release → post | contested (spell/SoR) |
| [[d:paladin#1484792824296771716]], [[d:paladin#1483194113871446199]] | players | 2026-03-21 | post-1.18.1 | contested (standing) |
| [[d:paladin#1491170906700251276]] | player | 2026-04-08 | post-1.18.1 | single source (JotJ stun) |
| [[d:pvp-general#1109073351412027432]], [[d:pvp-general#1315720921260101725]] | pvp-general (players) | 2024/2025 | pre-1.18.1 | consensus / single |
| `staging/paladin-pvp/matchups.yaml` | consolidated | 2026-04 | mixed | per-opponent agreements listed there |
