# Priest — Discipline ("Smite") ranged DPS / support (PvE)

Era markers as in `holy-healer.md`. Discipline became a Holy-damage support DPS spec in Class Changes 2 (patch 1.17.2, 2024-10): "reworking Discipline into a holy damage dealing support specialization" — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970). Turtle-only role; vanilla had no Smite raid spec.

## Overview

- **Role**: ranged Holy DPS with party buffs (Enlighten, Chastise haste), shields, dispels and emergency healing. "I am playing Disco Priest as a support dps, buffing allies with Enlighten, Chastise and Grace of the Sunwell racial on cd, dispelling nasty debuffs and supporting with PW:S or Inner Focus big heals in critical situations" — [Tscosomaz (player), 2025-10-29](https://forum.turtlecraft.gg/viewtopic.php?p=157662#p157662).
- **Strengths**: better solo/leveling than Holy (see `leveling.md`); "In 5men, as dps, numbers are close to top magic-dps" (Tscosomaz); DPS parity with Shadow in some tiers ("Smite priest is doing the sama DPS as shadow, even more in some fights where theres too much school resistance" — [Keds (player), 2025-10-07](https://forum.turtlecraft.gg/viewtopic.php?p=154706#p154706); "We had parses and data collected in Naxx post CC2 and the spec was just behind shadow in damage" — [Bigsmerf (player), 2025-06-19](https://forum.turtlecraft.gg/viewtopic.php?p=136250#p136250)); can swap to healing mid-fight ("a DPS/healer hybrid able to swap between the two" — [Silverhand2156 (player), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154131#p154131)); holy damage has no level-based resistance on Turtle ("Removed level based resist chance from Holy spells" — cited via [Balake (player), 2023-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=81538#p81538)).
- **Weaknesses** (consensus): mana in progression ("For Disc to be a viable pick in your raid roster you need to use Major Mana Pots, Teas in combination with items such as Robe of Sacrifice or Darkmoon Card: Blue Dragon" — [Tess322 (player), 2025-05-15](https://forum.turtlecraft.gg/viewtopic.php?p=131166#p131166)); needs **10% spell hit from gear** (Tscosomaz; Piercing Light gives 6%); no tier sets between T0.5 and T2.5 pre-1.18.1 (Tscosomaz, Caracole); weak capstone ("Our capstone [Chastise] is next to useless in PvE" — [Caracole (player), 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=111323#p111323)); ranked "19 out of all 22 dps specs" on Patchwerk logs in Dec 2024 (Caracole, same post, spreadsheet link).
- **Content**: leveling (best solo spec per Langorn), 5-mans, early raids ("I raided MC with a fresh badly geared smiter, keeping top 3 easily" — [Kerenis (player), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154132#p154132)); KZ40/Naxx viable but "painfully mediocre" (Bigsmerf); PvP (see `discipline-pvp.md`).
- **Community standing**: **alternative/niche**, strongly contested: "Smite is raid viable ... your raid won't wipe just because you're doing suboptimal damage" (Bigsmerf) vs "Smite is a pure meme spec forced by redditors ... smite does not do anything for the group or raid" — [Terrydavis (player), 2025-08-06](https://forum.turtlecraft.gg/viewtopic.php?p=143427#p143427). Enthusiasts: "the Chastising-Bishop-Cleric fantasy with the less xpensive instant smites and Support Buffet is incredibly rewarding" — [Zeryk (player), 2025-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=157296#p157296). Staff position (2024-12-20): "we're very happy with the flavor of our Discipline tree" — [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460).

## Turtle Discipline mechanics (staff, cumulative)

| Mechanic | Current value | Source |
|---|---|---|
| Inner Fire | spell damage 13/24/34/46/61/74 (R1-R6); Improved Inner Fire (2 pts) scales it | [Dragunovi 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970) |
| Smite | base +10% then −10% (net vanilla base), SP scaling +~5% (2025-04-01), R9 book at 60, 225 mana | [Jamey 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776), [Torta 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504), [Jamey 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) |
| Holy Fire | +10% base, 100% SP coefficient on the direct hit | Dragunovi 2024-10-12 |
| Piercing Light (row 1, 3) | −2/4/6% chance to resist Holy/Disc spells | same |
| Mental Agility (row 1, 5) | instants and offensive Holy/Disc spells −2..10% mana | same |
| Searing Light (row 4, 3) | Holy/Disc damaging crits: 33/66/100% chance next Smite instant; mana reduction 100% → 40% → 20% (+3 s ICD) → 50% (1.18.0 rev.) → **60% (1.18.1)** | Dragunovi 2024-11-01, Jamey 2024-11-20, [Jamey 2025-08 rev.](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159), [Jamey 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| Purifying Flames (row 4, 2) | Holy Fire 50/100% chance: +12% Holy damage for 10 s | Dragunovi 2024-10-12 / 2024-11-01 |
| Mental Strength (3) | +Intellect, +1/2/3% cast speed | Dragunovi 2024-10-12 |
| Enlighten (row 5 keystone) | tutelage on a party member (or self); damaging Disc/Holy spells 15% chance (heals 10%) to burn 4% HP and give +10% spell damage/healing to both for 8 s (15% if self); 30 min, 1 min CD | Dragunovi 2024-10-12, Jamey 2024-10-21, Torta 2025-03-30 |
| Resurgent Shield (row 5) | broken PW:S refunds 25% base mana and gives Holy damage +10% of the absorb for 8 s | Dragunovi 2024-10-12, Jamey 2024-12-20 |
| Force of Will (row 6, 5) | +damage/crit and PW:S absorb +4..20% (flat base only per Sharmaine) | Dragunovi 2024-11-01 |
| Chastise (row 7 capstone) | 278-322 Holy (R3), 65% SP, instant, 1 s GCD, 40 s CD; enemy: 2 s disorient, 25 yd; ally: +13/17/20% attack/cast speed 8 s (12 s on crit); not on allies < 50% HP | Dragunovi 2024-10-12, Jamey 2024-11-20, Jamey 2024-12-20, Torta 2025-03-30 |
| Power Infusion, Reflective Shields | removed | Dragunovi 2024-10-12 |
| Holy Nova | −20% mana, −5% base, 15% SP, normal threat −25% (1.18.0), further −15% mana (1.18.1 rev. 2026-01-26); no longer threat-free | Jamey 2025-07-25, Jamey 2026-01-26 |
| Blessed Concentration (Disc row 2, 2) | Martyrdom equivalent, swapped back into Disc 2025-04-01 | Torta 2025-03-30 |

## Talent build

### Endgame raid build (pre-1.18.1, reconstructed; Disc 31+/Holy 13-20/Shadow 5-7)

The only fully enumerated Discipline build in text is Langorn's leveling 31/13/7 (every point listed by level; see `leveling.md`), which he says "is very reliable for solo content farming and i still use it after dinging 60" — [Langorn (guide writer), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325). Raiders adjust it:

| Tree | Talent | Pts | Basis |
|---|---|---|---|
| Discipline | Wand Specialization | 2/2 | [cited] Langorn; mana on hit; "Wand Specialization more than enough" over Spirit Tap at 60 — [Darkest1024 (player), 2025-07-22](https://forum.turtlecraft.gg/viewtopic.php?p=140895#p140895) |
| Discipline | Piercing Light | 3/3 | [cited] Langorn ("6% Hit") |
| Discipline | Mental Agility | 3-5 | [cited] Langorn 3/5 |
| Discipline | Improved Power Word: Fortitude | 2/2 | [cited] Langorn (optional) |
| Discipline | Inner Focus | 1/1 | [cited] Langorn: "for holy fire when you open on a monster" |
| Discipline | Improved Inner Fire | 2/2 | [cited] Langorn |
| Discipline | Meditation | 3/3 | [cited] Langorn |
| Discipline | Purifying Flames | 2/2 | [cited] Langorn: "You ALWAYS open a fight with holy fire which means this talent is basically a 12% damage increase" |
| Discipline | Searing Light | 3/3 | [cited] Langorn: "instant big smites" |
| Discipline | Enlighten | 1/1 | [cited] Langorn; self-cast +15% is what most raiders do ("self-enlightened smite priests (i.e. providing NO raid support, basically a mage but with 3/4 of the dps)" — Caracole 2024-12-04) |
| Discipline | Mental Strength | 3/3 | [cited] Langorn |
| Discipline | Force of Will | 5/5 | [cited] Langorn "This talent is NUTS, 5% Damage, 5% Crit"; vs Spiritual Guidance debate below |
| Discipline | Chastise | 1/1 | [cited] Langorn; Quidoba's pull use |
| Discipline | Resurgent Shield | 0/1 | [contested] "Currently Resurgent Shield is never picked as the bonus provides around 140 spell power with uptime of 8 seconds requiring 1.5s GCD" — Tess322 2025-05-15; Tscosomaz calls it a PvP talent |
| Holy | Divinity | 5/5 | [cited] Langorn "discipline heavily scale on crits" |
| Holy | Divine Fury | 5/5 | [cited] Langorn "mandatory" |
| Holy | Holy Nova | 1/1 | [cited] Langorn (AoE) |
| Holy | Holy Focus | 2/2 | [cited] Langorn (pushback) |
| Holy | Holy Reach | 0-2 | [cited] ZG set's +5 yd range praised — [Zvyrhol (player), 2024-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=110973#p110973); Chastise range is affected by Holy Reach (staff) |
| Holy | Spiritual Guidance | 0/5 | [contested] "it all depends on what you choose gameplay. If you want to delve deeper into the Discipline and play through talent Searing Flames, then first of all you need to take talent Force of Will. If you are more of a healer than smiter, and equip items with spirit, then it's worth delving into the Holy to talents Spiritual Guidance" — Darkest1024 2025-07-22; "you could ditch Spirit Tap and get both for endgame" — [Thorfirhall (player), 2025-05-24](https://forum.turtlecraft.gg/viewtopic.php?p=132838#p132838); Tess322: Spiritual Guidance ≈ 80 SP with 100% uptime |
| Shadow | Spirit Tap | 0-5 | [contested] leveling staple; at 60 "I would refuse it, 5 points is a lot" (Darkest1024) vs procs on Mind Blast crits since 1.18.1 (staff) — untested |
| Shadow | Improved Shadow Word: Pain | 2/2 | [cited] Langorn; Tess322: "Discipline uses Shadow Word: Pain frequently" |

Sum of the Langorn 60 build = 51. Raid variant: move Spirit Tap 5 → Spiritual Guidance 5 (requires 15 Holy points below it: Divinity 5, Divine Fury 5, Holy Nova 1, Holy Focus 2, +2 in Holy Reach/Spell Warding) — that costs Improved SW:P/Improved Fortitude. No source posts a decoded 60 raid string; Langorn's images are the reference. Other links: Yavamar1's Smite/heal hybrid `talents.turtlecraft.gg/priest?points=DoACRYaAZI-AoFBAZAo-F` ("Divinity and Divine Fury are good for both Holy DPS and healing ... focus on the Disc tree picking up anything that makes Smite and Holy Fire more powerful") quoted by [Regreka (player), 2025-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=149417#p149417); Reomc1's leveling strings (see `leveling.md`).

Patch validity: talents unchanged in 1.18.1 except Searing Light 60% mana reduction; Disc tier sets added → build valid, itemization changed (`valid_for_1181: true`, sets new).

## Stat priority

- **Spell hit to 10% from gear** (16% total with Piercing Light 6%) — "+spellhit (weight19 if undercap, spec needs 10% from items ...)" vs "+crit (weight7)" — Tscosomaz 2025-10-29; Zvyrhol: up to +16% for bosses, always 1% miss — [Zvyrhol (player), 2023-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=81512#p81512).
- Then **spell power (general or Holy)** > **crit** (fuels Searing Light; Force of Will + Divinity = +10% crit) > Int > Spirit/Mp5 (Tess322 needs regen items; Quidoba: "Too many of the late high SP options have +crit and/or no spirit or Mp5. If Smite priests could itemize their way out of down-ranking, then they would be a top tier DPS option" — [Quidoba (player), 2024-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=95080#p95080)).
- Crit is contested: nerf of the crit design (Searing Light ICD) made SP > crit ("they have more SP over crit" — [Kobiq (player), 2024-12-01](https://forum.turtlecraft.gg/viewtopic.php?p=110850#p110850)); Mayson: "just stacking spell crit and spell dmg should be your smite set" — [Mayson (player), 2025-06-18](https://forum.turtlecraft.gg/viewtopic.php?p=136161#p136161).
- Holy resistance does not exist on bosses ("Every enemy in the game including bosses that I've checked has 0 holy resist" — [Blackduck (player), 2023-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=81522#p81522)); Chromaggus/drakonids resist by general spell resist; KT 100 SR matters only for SW:P.
- Leveling: Spirit > Int > Stam (see `leveling.md`).

## Single-target rotation

Opener: Inner Fire + Enlighten on self (or on the group's best caster) before pull; PW:S on self if Resurgent Shield taken → `Chastise` on the tank/top DPS on pull ("A crit chastise on pull to give your tank some rage and a haste buff to get ahead of the DPS is the biggest thing smite priest has going for it now" — [Quidoba (player), 2025-12-13](https://forum.turtlecraft.gg/viewtopic.php?p=162703#p162703)) → `Holy Fire` (Inner Focus for a free crit opener — Langorn) → `Smite`.

Priority:
1. `Holy Fire` whenever off cooldown (10 s) — keeps Purifying Flames (+12% Holy for 10 s) up and its DoT ticking (Langorn; staff).
2. `Smite` (instant, 60% cheaper) immediately when Searing Light procs (any Holy/Disc crit; 3 s ICD) — macro that uses Smite when the buff `Spell_Holy_SearingLightPriest` is up, else Mind Blast — [Ulukay (player), 2024-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=106433#p106433).
3. `Shadow Word: Pain` if missing and the target lives > 18 s (Tess322: used frequently; Langorn's opener includes it).
4. `Smite` filler.
5. `Chastise` on cooldown (40 s) on an ally (tank on pull, then the best DPS); as damage on the target only in PvP.
6. `Mind Blast` optional filler when mana allows ("the mana cost is usually not worth it" — Langorn); post-1.18.1 it can proc Spirit Tap on crit if talented (staff; untested).
7. `Pain Spike` (available to all priests since CC2, 30 s CD) as execute — no PvE source rates it for Disc.
8. `Power Word: Shield` on self only for Resurgent Shield procs; use a lower rank so it actually breaks ("Just use a lower rank if you want to proc it" — [Atreidon (player), 2025-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=160153#p160153)).
9. Low mana: downrank — "Holy Fire Rank 1 is your best spell to use because it costs about 80 mana and scales very well, 1:1 with spell damage" — [Zvyrhol (player), 2026-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=174655#p174655); dropping Holy Fire/Smite 2 ranks let a level-47 player "practically never run out of mana" — [Fizuzfil (player), 2026-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=174649#p174649) (post-1.18.1).
10. High Elf: `Sun's Embrace` (next 5 Smite/Holy Fire/Holy Nova cost 25 less at rank 1, 5 min CD) when low — macro by Ulukay; `Grace of the Sunwell`/Divine Sanction (10% haste, castable on others, 7 min CD) on cooldown — [Qixel (player), 2021-03-15](https://forum.turtlecraft.gg/viewtopic.php?p=9769#p9769), [Karrados (player), 2023-05-08](https://forum.turtlecraft.gg/viewtopic.php?p=45003#p45003).
11. Night Elf: `Searing Shot` on cooldown (10 s, no GCD, can proc Searing Light — [Glaive (player), 2025-08-09](https://forum.turtlecraft.gg/viewtopic.php?p=143992#p143992); bow shots do not trigger the GCD and Wand Specialization applies to bows since 2024-12-20 (staff)); `Starshards` (30 s CD) as filler.

Wand between casts when mana is low (Wand Specialization mana return).

## Multi-target / AoE

- 2-3 targets: Holy Fire + SW:P on secondary targets, Smite the skull; Chastise the tank.
- 4+ targets: `Holy Nova` spam (self-centred 10 yd) — "The spec has even an AOE-cleave option with Hoy Nova, but with actual mana pool ... it's nearly a manatrap in cost/damage ratio" (Tscosomaz); pre-1.18.0 it generated no threat, now it does: "even with a 'low threat level,' I often find myself reverting to tanks' secondary targets" — [Menelluin (player), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154203#p154203). Best-known use: Dire Maul lasher farm with Holy Nova — [Atreidon (player), 2025-08-07](https://forum.turtlecraft.gg/viewtopic.php?p=143502#p143502). AoE threshold **4**, only with mana to spare and tank aggro established.

## Cooldowns and resources

- `Inner Focus` 3 min: free Holy Fire opener or emergency heal (Langorn).
- `Chastise` 40 s: pull (tank) then DPS; never on allies below 50% HP (staff).
- `Enlighten` 1 min CD, 30 min buff; re-apply after death; self vs ally is a raid-composition call (Caracole vs Orgenlepzi: "You shouldnt be able to cast enlighten on yourself" — [Orgenlepzi (player), 2026-01-26](https://forum.turtlecraft.gg/viewtopic.php?p=166585#p166585)).
- Mana: Major Mana Potion + tea + runes on cooldown from the first minute (Zvyrhol 2026-04-10, Tess322); "Smite has no mana problems in raids. As long as you use tea with mana potions and your guild kills bosses quickly" (Zvyrhol, KZ40/Naxx geared). 1.18.1 T2.5 5-set: Chastise gives +40 SP and −15% Smite/Holy Fire mana for 12 s (doubled on crit) — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272).
- Racials: Troll Berserking; High Elf Sun's Embrace; Human Feedback (doubled 2024-11-01; Blackout procs "not reliable" — [Ataika (player), 2024-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=114535#p114535)).

## Role strategy

- Threat: Holy Nova now threats; Smite/Holy Fire have no special multiplier in sources; Fade (−15% total in 1.18.1); Silent Resolve not in typical builds.
- Emergency healing: keep Flash Heal/Greater Heal/PW:S bound; "There are times where the current amount of healers in a raid is a little bit on the short side ... This is when you bring the smite priest in to be mediocre at both roles at once" (Silverhand2156). Holy T2.5/T1/T2 healing set bonuses do nothing for Smite (Tscosomaz).
- Dispels: Dispel Magic / Abolish Disease during trash and mechanics (Tscosomaz).
- Pushback: Holy Focus 70% (all Holy spells since CC2); PW:S before AoE; Blessed Concentration 2/2 optional.
- Positioning: 30 yd (36 with Holy Reach) — Smite priests "can even outrange [hunters] with the right setup" (PvP remark, [FrankFankledank (player), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145225#p145225)).
- Bosses with school locks/heavy Holy resistance don't exist; C'thun/Viscidus were flagged as bad for the shield-break part of the kit — Svercalirin 2024-10-16.

## Gear, enchants and consumables

- Sets: original T2.5 (Oracle) converted to a full Discipline/Smite set (Holy spellpower 33/27/39/34/27, +1% hit on robe and trousers, +1% crit on tiara/mantle) — [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276); players call it weaker than BWL/AQ/Naxx off-pieces (Leggings of Polarity, Boots of Epiphany) and object to Holy-only damage ("no justifiable reason for T2.5 to only be Holy damage" — [Mcpewpew (player), 2024-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=113348#p113348)). 1.18.1: "Discipline Alternative Tier Sets" added across tiers plus T2.5 5-set rework (Chastise SP/mana) — Dragunovi 2026-02-15; per-piece stats not in extracted sources (gap).
- Pre-raid/early: Zvyrhol on Smite PvP weapon Soulseeker (−25 target resistance); Tscosomaz cites item 22267 (Kara Crypts) as pre-raid BiS head vs T0.5 head 22080 (3% hit) and notes T1/T2 lack hit. ZG set bonus +5 yd range is "more useful bonus for Smite than 2.5" (Zvyrhol 2024-12-02).
- Trinkets/mana: Robe of Sacrifice, Darkmoon Card: Blue Dragon (Tess322); Blade of Eternal Darkness for Holy Nova farming (Quidoba 2025-12-13).
- Consumables: Major Mana Potion, Nordanaar Herbal Tea / Tea with Sugar, Dark/Demonic Runes, Brilliant Wizard Oil, Flask of Supreme Power, Greater Arcane Elixir (same caster list as Shadow; Zvyrhol 2026-04-10 on tea+pots).

## Common mistakes (bots must avoid)

- Casting Smite without hit gear: 10% from items is the design requirement (Tscosomaz, Zvyrhol).
- Wasting Searing Light procs (letting the 10 s buff expire or clipping Holy Fire).
- Spamming Holy Nova on trash with an unestablished tank (threat since 1.18.0 — Menelluin).
- Chastising an ally under 50% HP (impossible) or Chastising enemies in PvE (2 s disorient breaks on damage).
- Forgetting to re-apply Enlighten after death / on new targets.
- Trusting Improved PW:Shield / Force of Will tooltips for shield size (flat base only — Sharmaine).
- Bringing Smite to "sweaty" guilds expecting top DPS: sources put it 19/22 (Dec 2024) — expect utility duty.

## Sources

| Source | Authority | Date | Era | Used for | Agreement |
|---|---|---|---|---|---|
| [Langorn t=21979](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325) | guide writer | 2025-09-19 | pre-1.18.1 | full Disc build (31/13/7), rotation, talent reasons | single (only enumerated build) |
| [Tess322 t=19309](https://forum.turtlecraft.gg/viewtopic.php?p=131166#p131166) | player (KZ40 progression) | 2025-05-15 | pre-1.18.1 | mana, Resurgent Shield, sets | single |
| [Tscosomaz t=22648](https://forum.turtlecraft.gg/viewtopic.php?p=157662#p157662) | player | 2025-10-29 | announced | support playstyle, hit weight, itemization | single |
| [Caracole t=16267](https://forum.turtlecraft.gg/viewtopic.php?p=111323#p111323) | player | 2024-12-04 | pre-1.18.1 | DPS rank, capstone critique | consensus (Quidoba, Kobiq agree) |
| [Zvyrhol](https://forum.turtlecraft.gg/viewtopic.php?p=174655#p174655) | player (Smite main) | 2026-04-10 | post-1.18.1 | mana, HF R1 | single |
| [Quidoba](https://forum.turtlecraft.gg/viewtopic.php?p=162703#p162703), [p=95080](https://forum.turtlecraft.gg/viewtopic.php?p=95080#p95080) | player | 2025-12-13 / 2024-05-17 | announced/pre | Chastise pull, itemization | single |
| [Dragunovi](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970) + updates | staff | 2024-10 .. 2025-08 | pre-1.18.1 | mechanics | authoritative |
| [Jamey](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | staff | 2026-01-23 | announced | Searing Light 60% | authoritative |
| [Dragunovi](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272) | staff | 2026-02-15 | announced | Disc sets | authoritative |
| Viability debate: [Bigsmerf](https://forum.turtlecraft.gg/viewtopic.php?p=136250#p136250), [Keds](https://forum.turtlecraft.gg/viewtopic.php?p=154706#p154706), [Terrydavis](https://forum.turtlecraft.gg/viewtopic.php?p=143427#p143427) | player | 2025 | pre/announced | standing | contested |

Pre-1.18.1 advice affected by 1.18.1: Searing Light mana values (now 60%), "no smite sets" complaints (sets added), Holy Nova mana (reduced again).
