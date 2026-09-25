# Rogue — Subtlety — Support melee DPS (raid / dungeon, "sub support")

Turtle rebuilt Subtlety in CC2 (1.17.2) as "a specialization that focuses on supporting their allies" [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102971#p102971). This playbook covers that PvE support role. Subtlety's PvP use (Hemorrhage/Preparation) is in `subtlety-pvp.md`; the Ambush/Backstab leveling use of the early Subtlety talents is in `leveling.md`.

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Kit milestones: CC2 2024-10-12; 2024-12-20 (Tricks of the Trade 12 s); 2025-03-30 (Hemorrhage 110%); 1.18.0 2025-07-25 (Shadow of Death, Cloaked in Shadows, Blackjack, Mark for Death rework, Preparation 7 min). 1.18.1 made **no Subtlety changes** [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).

## Overview

- **Role**: melee DPS whose value is party/raid buffs (Hemorrhage +2% physical damage taken debuff up to 50 charges/15 s, Tricks of the Trade party crit, Mark for Death party AP/SP, Improved Expose Armor) plus defensive utility (Cloaked in Shadows shield, Blackjack/Blinding Haze damage/hit debuffs, Smoke Bomb, Improved Ghostly Strike party speed).
- **Strengths (sources)**: "the largest, most consistent benefit is the 4% physical damage increase that hemorrhage grants the raid. As long as you're spamming hemo, that should never really fall off. Additionally the improved access to Improved Expose Armor means you have the largest armor drop in the game" [Jinkarasu (player), 2025-08-27](https://forum.turtlecraft.gg/viewtopic.php?p=148542#p148542) (his "4%" is the CC2-era Bloody-Mess-boosted value; the current staff text is 2% base ×2 with Bloody Mess); "The defensive options make it crazy good for progression and any buff to a warr tank means better threat gen while maintaining high mitigation" [Cheruscan (player), 2025-08-27](https://forum.turtlecraft.gg/viewtopic.php?p=148648#p148648); "fire shaman and fire mage especially flipping love the support rogue buffing their dps" [Atreidon (player), 2025-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=160348#p160348).
- **Weaknesses (sources)**: personal damage "equal to fucking tanks" [Bigsmerf (player), 2025-05-11](https://forum.turtlecraft.gg/viewtopic.php?p=130645#p130645); "the dps loss for the benefits of sub comparing to other classes/speccs is definetly too high" [Asystol (player), 2025-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=152935#p152935); buffs are **party-wide only** ("locked into melee grps or he himself is loosing a lot of punch" [Atreidon, 2025-11-22]); Tricks of the Trade uptime is nearly impossible without high gear ("you're asking sub pve rogues to spend 160-170 energy with an energy income of 140" [Jinkarasu (player), 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146058#p146058); "It's impossible to get the stack permanently" [Rachdingue (player), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152399#p152399)); Cloaked in Shadows' absorb still breaks stealth [Tankmeister (player), 2025-09-27](https://forum.turtlecraft.gg/viewtopic.php?p=153426#p153426); Smoke Bomb "affects ALL within the area, not just allies ... FIVE MINUTE cooldown" [Tankmeister (player), 2025-10-01](https://forum.turtlecraft.gg/viewtopic.php?p=153929#p153929).
- **Content**: raid progression melee groups — niche/alternative; dungeons — playable but not needed; leveling — not recommended solo ("I do not recommend going full sub if you are solo leveling some big talents rely on your party" [Rachdingue (player), 2025-09-18](https://forum.turtlecraft.gg/viewtopic.php?p=152174#p152174)); PvP — a different build (see `subtlety-pvp.md`).
- **Community standing**: **niche and disliked by most rogues, occasionally demanded by raid leaders** (consensus on both halves). "I run a rogue only guild a no rogue I talked to in or out of it likes the sub tree" [Blindtongue (player), 2024-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=112978#p112978); "It's merely a humiliation spec now" [Gantulga (player), 2025-04-12](https://forum.turtlecraft.gg/viewtopic.php?p=126500#p126500); vs "guildmaster said sub specced rogs would have prior for raid spot over a Assa rog or survival hunter because they add buffs to the raid" [Boomcat (player), 2025-09-23](https://forum.turtlecraft.gg/viewtopic.php?p=152774#p152774); "I don't really agree in calling it a 'support' spec in a general sense. It's like calling feral druid a support spec because it has leader of the pack" [Crake (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148397#p148397). A raider's summary: "Sub should perform below combat but should way outdo tanks" (does not, in his view) [Akos1896 (player), 2025-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=120488#p120488).
- Contested claim: "some sub dude pushed higest dps on patchwerk" — dismissed as "either badly informed or manipulate you for buffs" [Akos1896 (player), 2025-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=152698#p152698); "Sub has the biggest damage increase of all the specs if you factor in utility" [Snadileoboy (player), 2025-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=152706#p152706). Sub rogues do appear on Patchwerk logs [Bigsmerf (player), 2025-05-28](https://forum.turtlecraft.gg/viewtopic.php?p=133341#p133341).

## Official kit (staff)

- CC2 [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102971#p102971): Master of Deception merged into **Camouflage** (row 1); Sleight of Hand removed; Improved Ambush row 2 (+5/10/15 energy refund on non-crit); Serrated Blades row 2 incl. Garrote; Initiative 33/66/100%; Ghostly Strike and Heightened Senses baseline; **Improved Ghostly Strike**; **Smoke Bomb** (8-yd cloud, −20% chance to be hit for everyone inside, 8 s, 5-min CD, 35 energy); **Hemorrhage** row 3, single rank, +2% physical damage taken, 50 charges, normalised; **Irritating Agent**, **Blinding Haze** (Distract −hit); **Dust of Disappearance** (removed 1.18.0); **Bloody Mess** (Hemo cost and bonus); Deadliness and Premeditation removed; **Honor Among Thieves** (party physical crits give 2/5 energy, 2-s ICD); **Tricks of the Trade** (openers/finishers 4..20%/CP chance to give party +2% crit 10 s, 2 stacks, does not stack across rogues); capstone **Exploit Vulnerability** (135% WD, party +15% damage 6 s, 2 CP, 3-min CD).
- 2024-12-20 [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): Tricks of the Trade 12 s.
- 2025-03-30 [Torta (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504): Hemorrhage 110% weapon damage ("improving Subtlety Rogue's personal damage output").
- 1.18.0 [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): **Improved Ghostly Strike** → self +5/10/15% and party +2/4/6% move speed 5 s, Ghostly Strike −3/6/10 energy; **Blackjack** (Improved Sap + Irritating Agent: Sap/Blind −5/10% damage dealt 8 s, 50/100% restealth after Sap, 2 points); **Hemorrhage 40 energy**, Bloody Mess −2/5; **Cloaked in Shadows** (row 4, 2 pts: Vanish shields party 6/12% max HP for 20 s); Blinding Haze also −5/10/15 Distract energy, 6 s; **Preparation 7 min**; **Shadow of Death** keystone (row 5 finisher: sigil stores 10..50% of damage taken up to 50..250% AP over 6 s, 30 energy, 1-min CD; Relentless Strikes stacks boost it); Honor Among Thieves triggers on own crits, 1.5-s ICD; **Mark for Death** (renamed capstone): 135% WD, party **+30% AP and +18% SP of the rogue's melee AP for 8 s**, undodgeable, 2 CP. Revision 2025-08-14: Improved Gouge and Improved Expose Armor moved to Subtlety row 1.
- Naming: the capstone is "Exploit Vulnerability" in the CC2 post and "Mark for Death" in the 1.18.0 post; the timeline flags this as unresolved (`../../turtle-vs-vanilla-timeline.md` §Unclear).
- Hotfix: Smoke Bomb "did not function as expected" fixed [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028).

## Talent build

No full 51-point list exists. Sourced allocations:

| Tree | Talent | Points | Source |
|---|---|---|---|
| Subtlety | Hemorrhage 1, Bloody Mess 2 | 3 | core: "just swaping his combo point generator from sinister to hemo and his spender from eviscerate to expose armor" [Atreidon (player), 2025-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=160348#p160348) |
| Subtlety | Improved Expose Armor | 2/2 (row 1 since Aug 2025) | Jinkarasu (above) |
| Subtlety | Tricks of the Trade | 5/5 | the raid buff; needs Ruthlessness + Relentless Strikes to function [Jinkarasu, 2025-08-16] |
| Subtlety | Honor Among Thieves | 2/2 | energy; only pays off "with a full 5 man melee party" [Jinkarasu, 2025-08-27] |
| Subtlety | Mark for Death | 1/1 | capstone |
| Subtlety | Shadow of Death | 1/1 | "does 'OK' numbers ... you have to use it, to get at least a small peak in overall dmg" [Asystol, 2025-09-24] |
| Subtlety | Cloaked in Shadows 2, Blackjack 2, Blinding Haze 0–3, Elusiveness 2, Serrated Blades 3, Opportunity (Combat) 5 | per taste | Shananagans' dungeon variant: "I chose Opportunity because it feeds into the Serrated Blades garrote damage, which is magnified by the lower Vanish cool down with Elusiveness which works with Cloaked in Shadows ... Questing: Dropping Improved Exposed Armor and pick up Blackjack and Blinding Haze" [Shananagans (guide writer), 2025-09-09](https://forum.turtlecraft.gg/viewtopic.php?p=150991#p150991) — self-described as untested ("I have never played a turtle sub rogue") |
| Assassination | Malice 5, Ruthlessness 3, Relentless Strikes 1 | 9 | "Precision and Malice (IMHO) are got to haves" (Shananagans); Ruthlessness/Relentless mandatory for Tricks (Jinkarasu) |
| Combat | Precision | 5/5 | "sub feels like ass to play until you have the requisite hit cap" [Jinkarasu, 2025-08-27] |

Links (opaque): dungeon support build `https://talents.turtlecraft.gg/rogue?points=Ao-FAAo-FTCYZJQAJKQoB` [Shananagans, 2025-09-09]; two deep-support links (support vs dagger sub) from a leveler asking which to keep [Aulisia (player), 2025-06-17](https://forum.turtlecraft.gg/viewtopic.php?p=136107#p136107) (unanswered). Non-dagger sub: "you definitely want to focus on hemo talents and ignore improved backstab and improved ambush" [Rachdingue (player), 2025-09-18](https://forum.turtlecraft.gg/viewtopic.php?p=152174#p152174).

Patch validity: all 1.18.0; 1.18.1 changed nothing in Subtlety.

## Stat priority

Only indirect statements: **hit cap first** ("If a single hemo fails for any reason (miss, block, dodge, parry), or the finisher does for any reason, you drop the stacks" [Jinkarasu, 2025-08-16]), then **crit** (feeds Honor Among Thieves) and **agility/AP** ("Deadlines (NEW): It increases attack power, which is the best stat for Subtlety rogues" in a rework proposal [Lomikare1 (player), 2026-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=165103#p165103) — proposal, not a measurement). Mark for Death scales with the rogue's AP (staff). Weapon: "With non-dagger sub" slow main hand is implied by hemo normalisation ("normalized hemo speed by the way which will kill it for both PvP and solo boss farming" [Gantulga (player), 2024-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=103938#p103938)); no source gives weights. Gap.

## Single-target rotation

Derived from Jinkarasu's energy accounting and Atreidon's description (both 2025):

1. Opener (if any): Garrote (Serrated Blades) — or nothing in raids.
2. **Hemorrhage** as the only builder; keep the debuff on the boss (50 charges/15 s; a melee-heavy raid eats charges fast).
3. **Improved Expose Armor** first (if the raid relies on it), then **Slice and Dice**, then **Tricks of the Trade** procs: use 4–5-point finishers every ≤12 s to keep the 2 stacks ("the timer requires you to spend 4 Hemos and 1 finisher (160-170 energy) every 12 seconds"). Finisher choice: Expose Armor when it needs refreshing, else Slice and Dice, else Rupture/Eviscerate.
4. **Mark for Death** on cooldown, aligned with the party's cooldowns (8 s); with Preparation (7 min) a second use.
5. **Shadow of Death** at 5 points when the party is bursting (it stores a percentage of damage taken by the target); costs 30 energy, "means dropping the tricks stacks" (Jinkarasu) — accept the trade in burst windows.
6. Distract (with Blinding Haze) and Blind (Blackjack) for the −hit / −damage debuffs only on hard-hitting adds; both cost Tricks uptime.
7. Cloaked in Shadows: Vanish when the party takes a predictable raid-wide hit (6/12% max-HP shield for 20 s) — do not expect to stay stealthed.

Alternative "bleed" rotation: "There is also a possibility for a good rotation with Garrote/Rupture/Slice and Dice, but even if you force full concentration on this - the dmg output itself is too low" [Asystol, 2025-09-24].

## Multi-target / AoE

Blade Flurry is baseline but costs energy the spec cannot spare (see `assassination-melee-dps.md`); Hemorrhage on each add helps the melee group; no other AoE. Tricks stacks drop during target swaps.

## Cooldowns and resources

- Energy is the binding constraint: baseline income ~140 per 12 s vs 160–170 spent; Honor Among Thieves "increases your energy income to 180" only "in a hyper optimized environment" (Jinkarasu); Relentless Strikes 20 per 5-point finisher; Shadowcraft/Darkmantle energy procs recommended (Jinkarasu); Thistle Tea.
- Preparation (7 min) resets Vanish (Cloaked in Shadows), Mark for Death, Blind, Sprint — "allowing you to re-apply all support effects instantly" (staff, 1.18.0).
- Vanish is a support cooldown here, not an aggro drop; Feint for threat as usual.

## Role strategy

- Be in the melee party that benefits most (warriors/rogues; or the fire caster group if the raid prefers Mark for Death's SP) — the buffs are party-only (Atreidon).
- Keep Hemorrhage on the raid's kill target at all times; re-apply immediately on target swaps.
- Improved Sap (Blackjack) makes some dungeon pulls easier (Jinkarasu); Distract for skips.
- Expect raid leaders to ask for this spec on progression and rogues to resent it (both sides sourced above); bots should not volunteer it as "top DPS".

## Gear, enchants and consumables

No Subtlety-specific gear source beyond "shadowcraft's energy proc bonus" being nearly required [Jinkarasu, 2025-08-27] and generic hit/crit gear. Consumables as for Combat (Thistle Tea, poisons: Instant/Instant; Blind needs Blinding Powder; Vanish needs Flash Powder). Gap.

## Common mistakes (bots must avoid)

- Playing it solo/leveling ("Sub is terrible right now. It has never been a PvE spec" is the PvP-side view [SvenS2 (player), 2025-10-31](https://forum.turtlecraft.gg/viewtopic.php?p=157944#p157944)); the tree's support talents "rely on your party" (Rachdingue).
- Letting Hemorrhage fall off; using Sinister Strike/Backstab instead of Hemorrhage.
- Trying to Vanish-stealth mid-fight with Cloaked in Shadows (absorb breaks stealth).
- Wasting Tricks stacks by spending energy on Distract/Smoke Bomb/Gouge without a reason.
- Smoke Bomb on top of the raid's melee: it reduces the hit chance of everyone inside, enemies and allies.
- Reapplying Mark for Death from a second rogue expecting stacking (it only refreshes; staff CC2 note on Exploit Vulnerability).

## Discord findings (2025–2026)

The `#rogue` Discord (2021-02 .. 2026-05) supplies decoded Subtlety builds and rotations the forum file names as gaps. Citations are `[[d:rogue#id]]` and resolve in `structured/discord/evidence-rogue.jsonl`. Eras: **pre-1.18.1** (< 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (≥ 2026-03-20).

### Corrections and supersessions

- **The forum's "only one player (self-declared as inexperienced) supplies a build" gap is closed.** Discord decodes **11/8/32** (Ionnatra; the cheapest support variant) [[d:rogue#1478313765450551338]], [[d:rogue#1485287876210982973]], [[d:rogue#1485341242630865048]], **11/5/35** (deeper Sub, posted as PvP talents but carrying WSG flag well) [[d:rogue#1484641315361915042]], [[d:rogue#1485017443687465140]], and **17/0/34** ("dps sub") [[d:rogue#1466401496483758235]], [[d:rogue#1493894882543013888]].
- **What the support rogue actually provides** (1.18.0/1.18.1): maintain **Improved Expose Armor** on the boss, **Tricks of the Trade** on your group and spam **Hemorrhage** for the physical-damage debuff, plus **Mark for Death** + **Shadow of Death** party buffs [[d:rogue#1421734520306270310]]. **Hemorrhage and Improved Expose Armor are whole-raid; Tricks of the Trade and Mark for Death are party-only** [[d:rogue#1389957217905672305]]. A guide writer estimated one hemo/IEA support rogue equals the raid benefit of ~3 Combat rogues [[d:rogue#1366086113277640734]] (single source).
- **1.18.1 changed no Subtlety talent**; the standstill is explicit in the channel.

### Concrete rotations

- **Standard sub flow**: Garrote opener → Hemo builder → IEA → SnD → Rupture/Shadow of Death/SnD/IEA before TotT drops; Mark + Shadow while TfB is active; Vanish to re-Garrote; Prep to reset party buffs [[d:rogue#1409664512944115793]].
- **Exact CP flow**: 1-CP SnD → 5-CP Expose → 1-CP SnD → 5-CP Rupture → 1-CP SnD → 5-CP Mark+Shadow (or Evis); never let SnD/Expose drop, Rupture may [[d:rogue#1431660105157443679]].
- **iEA-rogue**: Garrote opener, 1-CP SnD, Hemo to 5 for IEA, 1-CP SnD, Hemo to 3 → Mark → Shadow of Death; on Medivh/Sanv use double Mind-numbing Poison [[d:rogue#1483262942748086434]].
- **30-second burst**: Garrote/Ambush → Hemo → Ghostly Strike → 5-CP Rupture → SnD → Shadow of Death → Prep → Vanish → re-Garrote [[d:rogue#1458612868193714450]].
- **Weapon rule**: **The Ripper (SWV) is the BiS off-hand**; **Annihilator and Shart'ateth Axe share a debuff slot and overwrite each other** — do not run both [[d:rogue#1483262942748086434]].
- The forum's energy accounting (140 in vs 160–170 out) stands; a missed Hemo/finisher drops the TotT stack chain, so hit comes first [[d:rogue#1431660105157443679]].

### Mechanics the forum lacked

- **Shadow of Death does not crit** [[d:rogue#1406940418075004999]]; a post-1.18.1 player says it "makes the rotation clunky" and advises against taking it [[d:rogue#1490397927598854295]] (contested — the forum's one tester said it "does OK numbers").
- **Bloody Mess/Bloodsplatter was bugged in 1.18.0** at 2% instead of 4% [[d:rogue#1406364787566186527]] (single source).
- **Do not go deep Subtlety support without a melee party**: the buffs are party-wide and the personal dps loss is large [[d:rogue#1486006448520691852]] (consensus).

### Discord sources

| Topic | Citation | Era | Agreement |
|---|---|---|---|
| Decoded 11/8/32 support build | [[d:rogue#1478313765450551338]] | post-1.18.1 | consensus |
| Decoded 11/5/35 | [[d:rogue#1484641315361915042]] | post-1.18.1 | single source |
| Decoded 17/0/34 dps sub | [[d:rogue#1466401496483758235]] | post-1.18.1 | single source |
| Support job (IEA+Hemo whole-raid) | [[d:rogue#1421734520306270310]], [[d:rogue#1389957217905672305]] | pre-1.18.1 | consensus |
| Exact CP flow | [[d:rogue#1431660105157443679]] | 1.18.1-announced-pre-release | single source |
| iEA weapon rule | [[d:rogue#1483262942748086434]] | 1.18.1-announced-pre-release | single source |
| Shadow of Death (no crit) | [[d:rogue#1406940418075004999]] | pre-1.18.1 | single source |
| Bloody Mess/Bloodsplatter bug | [[d:rogue#1406364787566186527]] | pre-1.18.1 | single source |

## Sources

| Source | Authority | Date / era | Used for | Agreement |
|---|---|---|---|---|
| [Dragunovi (staff) CC2](https://forum.turtlecraft.gg/viewtopic.php?p=102971#p102971), [Jamey 1.18.0](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159), [Jamey 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460), [Torta 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504) | staff | pre-1.18.1 | kit | official |
| [Jinkarasu](https://forum.turtlecraft.gg/viewtopic.php?p=148542#p148542), [p146058](https://forum.turtlecraft.gg/viewtopic.php?p=146058#p146058) | player (plays the spec) | 2025-08 | what it brings, energy math | single source, agreed by Rachdingue/Asystol |
| [Atreidon](https://forum.turtlecraft.gg/viewtopic.php?p=160348#p160348), [Cheruscan](https://forum.turtlecraft.gg/viewtopic.php?p=148648#p148648), [Crake](https://forum.turtlecraft.gg/viewtopic.php?p=148397#p148397) | player | 2025 | standing | contested |
| [Tankmeister](https://forum.turtlecraft.gg/viewtopic.php?p=153929#p153929), [Edgarek](https://forum.turtlecraft.gg/viewtopic.php?p=103870#p103870), [Unsilentstorms](https://forum.turtlecraft.gg/viewtopic.php?p=124849#p124849) | player | 2024-10 .. 2025-10 | talent critique | consensus that deep sub is weak |
| [Shananagans sub build](https://forum.turtlecraft.gg/viewtopic.php?p=150991#p150991) | guide writer (self-declared no sub experience) | 2025-09 | dungeon variant | single |

Flags: nothing here is superseded by 1.18.1 (no Subtlety changes); Jinkarasu's "4%" Hemorrhage number is his own phrasing of the talented value.
