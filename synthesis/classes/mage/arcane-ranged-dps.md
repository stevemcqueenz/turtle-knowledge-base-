# Mage — Arcane — Ranged DPS (raids and dungeons)

Era coverage: the Arcane rework shipped with patch 1.17.2 (2024-11-01; staff notes 2024-10-12), was retuned on 2024-12-20, 2025-04-01 and in 1.18.0 (2025-08-15). **Patch 1.18.1 (2026-03-20) changed nothing in the Arcane tree**; the only 1.18.1 items touching an Arcane mage are the T3.5 "Mirror Magic" 3-set fix and the wand school-modifier fix (see §Gear). Everything below that predates 2025-08-15 is flagged where a later change affects it.

## Overview

- **Role.** Single-target and AoE ranged caster built around Arcane Missiles, the talented Arcane Rupture keystone and the baseline Arcane Surge. Staff design intent: "a major rework on Arcane, making it a specialization fitting the nature of Arcane as a spell school that's wild and uncontrollable" — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968).
- **Community standing: favored / meta raid spec** (consensus, post-1.17.2, still true post-1.18.1):
  - "Funnily enough arcane is like literally the meta right now." [Bigsmerf (player), 2025-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=122736#p122736)
  - "During raiding you best go arcane (almost no arcane immune enemies, highest hit chance from talents, high dmg, easy to grasp rotation …)" [Cheruscan (player), 2025-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=158193#p158193)
  - "Arcane is, by a large Margin, the strongest spec … You want Cast Speed for this spec more than Crit or Pure Spell Power" [Eluaria (player, self-described mage main on Nordanaar), 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160732#p160732); "As it stands, Arcane is the best spec due to that aforementioned consistent gameplay loop" [Eluaria, 2026-02-11](https://forum.turtlecraft.gg/viewtopic.php?p=167923#p167923); post-release: "Arcane is simply miles above it [Frost]" [Eluaria, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171409#p171409).
  - "arcane is the one that brings the most damage to your raid" [Darkhann (player), 2026-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=170344#p170344).
  - Wiki (community): "Arcane - strong single target, best aoe for large trash packs, best mana sustain by a large margin, easy to play but has a rotation with slight nuance when trying to maximise DPS." [Mage General FAQ (wiki, rev. 2026-09-09)](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ). The same page says all three specs are "competitive with each having advantages on certain fights" and that Naxx boss parses are led by Fire when several Fire mages feed one Ignite — so "Arcane is strongest" is **consensus on the forum, nuanced by the wiki**.
  - Staff view of the balance state: "Mages of all specializations are currently performing quite well" [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460); "Mage is currently in quite a good state" [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504).
- **Strengths (sources):** hit from talents so gear hit matters less early (Cheruscan above; [Hoo (player), 2024-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=93714#p93714)); "best aoe for large trash packs" and "best mana sustain by a large margin" (wiki); consistency versus Fire's crit dependence (Eluaria 2026-02-11); Improved Arcane Missiles removes pushback (wiki Levelling FAQ). Kara40 being caster-focused helps ([Cheruscan, 2026-02-05](https://forum.turtlecraft.gg/viewtopic.php?p=167503#p167503)).
- **Weaknesses (sources):** 30-yard range on Arcane spells ("30 yards where a lot of your casts will break due to target dying or out of range, wasting mana" [Bahamutxd (player), 2024-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=107097#p107097); "are arcane spells 30 yards max?" [Konstantin19, 2025-05-14](https://forum.turtlecraft.gg/viewtopic.php?p=131113#p131113)); channel wasted when a mob dies mid-channel (Bahamutxd above; older: [Imonobor (player), 2023-12-21](https://forum.turtlecraft.gg/viewtopic.php?p=82194#p82194)); huge RNG variance from three multiplicative crit effects ("you can sometimes hit 4.375 times harder than a normal cast" [Schoop123 (player, leveled 1-60 Arcane in 1.17.2), 2024-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=107572#p107572)); Arcane Power kills you below 10% mana (staff, below); weaker than Frost/Fire for open-world leveling ("Arcane I can only recommend for Dungeons" [Eluaria, 2026-04-12](https://forum.turtlecraft.gg/viewtopic.php?p=174948#p174948)).
- **Superseded history (do not use):** before 1.17.2 Arcane was the "Mana" / support spec with Brilliance Aura and Clearcasting-fishing ([Massie2 (player), 2023-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=34165#p34165); [Trismegistos (player, self-described raiding arcanist), 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87218#p87218); [Akos1896, 2024-06-18](https://forum.turtlecraft.gg/viewtopic.php?p=97235#p97235)). Brilliance Aura was **removed** in 1.17.2 — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968). A player reported it still existing on 2024-11-02 (rumoured unintentional) — [Krautsurfer, 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=106011#p106011), [Kibuum, 2024-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=106073#p106073); no later source mentions it.

## Talent build

### What the talents do (official numbers)

All from [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968) unless noted. Later changes in brackets.

| Talent | Position / points | Effect (current) |
|---|---|---|
| Arcane Rupture | Row 3 keystone, 1 pt; ranks trained at 20/28/36/44/52/60 | 2.5 s cast, 15 s cooldown, 390 mana at R6, 703–766 damage; **90% SP scaling** (was 100%, [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460)); ranks 1–4 base damage −10%, rank 5 −5%, rank 6 unchanged ([Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504)); buffs Arcane Missiles damage **and mana cost by 20%** for 8 s (was 25%; [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159)). "Arcane Rupture's secondary effect no longer triggers other effects" (changelog 2025-05-14). |
| Temporal Convergence | Row 4, 3 pts | Missiles have 5/10/15% chance to reset Rupture's cooldown and refund its base mana on next cast; 15 s internal cooldown; refund buff lasts 12 s. |
| Arcane Meditation | 3 pts | 7/14/20% regen while casting, tripled below 35% mana. |
| Arcane Instability | Row 5, 3 pts | 8/16/25% chance an Arcane hit consumes 2% base mana to deal 25% more damage; no visual on the mage (changelog 2025-01-01). |
| Accelerated Arcana | Row 5 keystone, 1 pt | +6% Arcane casting speed; casting-speed effects also speed up Arcane cooldowns (PoM, Evocation, Arcane Power, Arcane Surge, Arcane Rupture) and Missiles tick speed. Wiki measurement: it is a 5% cast-time reduction, not a 6% haste multiplier ([Mage Arcane FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Arcane_FAQ)) — **contested tooltip vs. measured**. |
| Arcane Potency | Row 5, 2 pts | +50/100% crit damage bonus. |
| Resonance Cascade | Row 6, 5 pts | 4/8/12/16/20% chance a damaging Arcane spell duplicates for 50%; can self-trigger up to 4 times; for Arcane Explosion only one target rolls; duplicates don't trigger on-hit effects. Fixed to work from Arcane Surge (changelog 2025-01-01). |
| Arcane Power | Row 7, 1 pt | +30% casting speed, drains 1% max mana/s, mana gain −50%, **instant death below 10% max mana**, 20 s, cannot be cancelled (values after [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504); originally 35%/2%/75%). The Arcane T3 6-set no longer removes the regen penalty (same post). |
| Arcane Concentration | 5 pts | Clearcasting, now with an 8 s cooldown. |
| Magic Absorption | 3 pts (swapped position with Arcane Focus in 1.18.0) | 1/2/3% of total mana when one of *your* spells is partially/fully resisted, 2 s cooldown. |
| Arcane Impact | 3 pts | +crit for all Arcane spells. |
| Wand Specialization | 2 pts | also +5/10% wand hit and mana on wand hit equal to 150% of level. |
| Magic Attunement | 1 pt | Amplify/Dampen Magic castable on targets below level 63; effect +100%. Dampen: −3% spell damage taken / −2% healing; Amplify: +3% healing / +2% spell damage taken (Torta 2025-03-30). |
| Improved Mana Shield | 2 pts | −13/25% mana lost per damage. |
| Presence of Mind | 1 pt | next spell instant; players say its only real use is Arcane Rupture ([Krautsurfer, 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=106011#p106011)). |

Baseline Arcane Surge (level 32/40/48/56): instant, 8 s cooldown, 65% SP, usable only after one of your spells is partially or fully resisted, cannot be resisted; R4 170 mana, 517–612 damage (Dragunovi 2024-10-12). Arcane Missiles coefficient 32.8% per missile above level 20 (same post; the tooltip coefficient was corrected 2022-12-07 changelog).

### Endgame allocation (wiki level-by-level, 50 points at 59)

The only complete point list in the sources is the wiki leveling table ([Mage Levelling FAQ (wiki), rev. 2025-10-01](https://turtle-wow.fandom.com/wiki/Mage_Levelling_FAQ)). Written after 1.18.0, before 1.18.1; nothing in 1.18.1 changed it. **Single source (wiki).**

| Tree | Talent | Points |
|---|---|---|
| Arcane | Improved Arcane Missiles | 5 |
| Arcane | Arcane Concentration | 5 |
| Arcane | Arcane Rupture | 1 |
| Arcane | Arcane Impact | 3 |
| Arcane | Arcane Focus | 5 |
| Arcane | Arcane Meditation | 3 |
| Arcane | Temporal Convergence | 3 |
| Arcane | Accelerated Arcana | 1 |
| Arcane | Arcane Instability | 3 |
| Arcane | Arcane Potency | 2 |
| Arcane | Resonance Cascade | 5 |
| Arcane | Presence of Mind | 1 |
| Arcane | Arcane Subtlety | 2 |
| Arcane | Magic Absorption | 3 |
| Fire | Improved Fireball | 5 |
| Fire | Improved Fire Blast | 3 |
| **Total** | | **50** |

51st point: the wiki says "It's probably not even worth putting a point in Arcane power until you get more geared / get 6PC Tier3" ([Mage Arcane FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Arcane_FAQ)) — note the 6-set bonus that motivated this was removed on 2025-04-01 (staff), so at 60 with raid gear the last point goes to Arcane Power (every rotation in the wiki assumes Arcane Power is available).

Wiki raid guidance: "Just make sure you get all of the good arcane talents … All of the extra talent points matter a lot less and can instead be used on flame throwing/elemental precision/more arcane talents." Priorities: Improved Arcane Missiles > Arcane Focus > Arcane Concentration > Temporal Convergence > Arcane Meditation > Arcane Potency > Accelerated Arcana > Resonance Cascade > then Frost/Fire (Mage Arcane FAQ).

Build links posted by players (talents.turtlecraft.gg exports are opaque strings; the point spread is not recoverable from the text): [Kibuum, 2024-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=106073#p106073) `https://talents.turtlecraft.gg/mage?points=VoAoLIAbBKAoBAAAAAAAAAAAAAAAQYCTBAAAAAAAAAA%3D` (Arcane + Fire, after dropping "unnecessary points in Frost"); Kibuum's first draft `…VAAoLIAaBKAoBAAAAAAAAAAAAAAAQYDTBDQAAAAAAAA%3D` ([2024-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=105841#p105841)). Pre-1.18.0 talent tree, so Arcane Focus/Magic Absorption positions differ.

Contested talent points:
- **Arcane Meditation** for leveling: "3 talent points that can be put to better use if you're leveling" [Hctwowfan, 2024-07-14](https://forum.turtlecraft.gg/viewtopic.php?p=99457#p99457) (pre-rework, when it was 5/10/15%) vs. wiki including it at 25–27.
- **Magic Absorption**: "the more you get stuff the less resist you will have, so the more useless this talent will be" [Mokkori, 2024-12-14](https://forum.turtlecraft.gg/viewtopic.php?p=112682#p112682) — the wiki still takes 3/3.
- Talent-tree gating: the planner lets you remove low points after reaching the top; in game "the only way to put points into each of the top tier arcane talents requires a minimum of 34 talent points being spent" [Gladeshadow, 2024-07-21](https://forum.turtlecraft.gg/viewtopic.php?p=100044#p100044) (pre-rework tree; treat as caution about planner exports).

## Stat priority (level 60)

Wiki sims (pepopo978/wowsim), [Mage Arcane FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Arcane_FAQ), "Take with a grain of salt". Weights in spell power per 1% of the stat:

| Profile (sim controls) | 1% Hit | 1% Haste | 1% Crit |
|---|---|---|---|
| Fresh 60 (300 SP, 18 crit, 13 hit, 2 haste) | 10.5 | 11.5 | 9.0 |
| Endgame low haste (1100 SP, 40 crit, 15 hit, 5 haste) | 16.7 | 17.8 | 12.9 |
| Endgame 15% haste | 17.5 | 20.0 | 12.0 |
| High haste, T3.5 stack (1050 SP, 35 crit, 15 hit, 25 haste, no Surge) | 22.0 | 18.2 | 13.2 |
| Trash AoE (Arcane Explosion spam, 3 mobs) | ~0 | ~0 | ~20 (16 for fresh 60) |

Haste has breakpoints where an extra missile lands inside the Rupture window; haste stacks multiplicatively (wiki table "Weights at different starting haste values"). Forum player weights: "Hit 16% (talent10%+6% from gear. This is my 1st prio … 20SP = 14 DPS, 1 Haste = 9,1 DPS, 1 Crit = 9,1 DPS … I never go over 16% hit total" [Ashafares (player), 2025-12-09](https://forum.turtlecraft.gg/viewtopic.php?p=162161#p162161). Priority stated by Eluaria: cast speed > crit > raw SP, with haste pieces mostly from Molten Core, some dungeon quests and Stormwind Vault ([2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160732#p160732)). **Consensus:** hit to 16% first, then haste ≈ spell power (≈17–20 SP per 1% haste), then crit. Spell penetration: "You can pretty much ignore magic penetration, useful for PvP" [Mackylol, 2024-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=88341#p88341) (single source).

Haste mechanics (wiki General FAQ): gear haste uses cast_time = base/(1+h), multiple sources multiply; Accelerated Arcana / PoM are cast-time reductions applied first. Missiles channel = 5/(1+h) (or 6/(1+h) with a belt that adds a missile). There is "a haste cap for arcane missiles when stacking multiple haste effects" (wiki General FAQ, Troll racial paragraph; number not given).

Leveling stats: see `leveling.md` (Int > Stam > Spirit per [Bigsmerf, 2025-06-25](https://forum.turtlecraft.gg/viewtopic.php?p=137036#p137036); contested by Schoop123 who found Spirit the main stat under the Arcane Power drain).

## Single-target rotation

Source: [Mage Arcane FAQ (wiki, rev. 2026-03-24)](https://turtle-wow.fandom.com/wiki/Mage_Arcane_FAQ) unless cited. Sim priority used for the weights: "surge when available -> rupture when available -> missiles".

Opener with cooldowns, short fight, < 17% haste from gear/consumables:
1. Arcane Rupture → Mind Quickening Gem → Arcane Power → Arcane Missiles → Arcane Rupture if the Rupture buff is about to fall off → Arcane Missiles.
2. With more than ~17% haste use MQG and Arcane Power separately; "You can use Arcane Power right before MQG ends to still benefit from the cooldown reduction" (Accelerated Arcana speeds Arcane cooldowns).

Steady priority (low haste):
1. **Arcane Surge** if available (needs a partial/full resist in the last ~4 s — window per [Avalok, 2025-06-29](https://forum.turtlecraft.gg/viewtopic.php?p=137409#p137409)). "If you have little to no haste, Surge is always worth it even to the point of canceling missiles early so long as you aren't clipping missile casts and you have extra mana. If your rupture buff is active you should still try to maximize using it by waiting as long as possible to interrupt for surge."
2. **Arcane Rupture** if off cooldown and the Rupture buff is not active. "Rupture is only worth canceling missiles for if you don't already have rupture buff."
3. **Arcane Missiles** otherwise.

During Arcane Power or MQG (≥ ~30% haste): **Rupture → Missiles, no Surge** — "surge has 1.5s gcd that doesn't benefit from haste at all" (wiki); "the threshold lies at about 30% which you reach with Mind Quickening Gem or Arcane Power or the Sphere of endless Gulch" [Guldred (player), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145255#p145255).

Movement: "When moving, you can use fire blast to fish for resists to then be able to fire off an arcane surge" (wiki). Rethon macros Surge into a Fire Blast macro when playing Frost ([2024-11-28](https://forum.turtlecraft.gg/viewtopic.php?p=110292#p110292)); wiki gives a Roid-Macros version: `/cast [reactive:Arcane_Surge]Arcane Surge;Fire Blast`.

Rupture-window rule: the +20% damage applies only to missiles that land while the 8 s buff is up, but the +20% mana is paid at channel start — "A second cast of Missiles having increased mana cost while only the first missiles have increased dmg feels bad" [Kibuum, 2024-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=107661#p107661); [Schoop123, 2024-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=107572#p107572); [Trukken, 2024-12-22](https://forum.turtlecraft.gg/viewtopic.php?p=113847#p113847). Schoop123's fix: enough cast speed that a full channel takes ≤ 4 s so two channels fit in the window. Same mechanic was documented for the old Arcane Power by [Trismegistos, 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87212#p87212).

Clearcasting: Arcane Surge consumes a Clearcasting charge ([Avalok, 2025-06-29](https://forum.turtlecraft.gg/viewtopic.php?p=137409#p137409)); "Casting Surge or Missles to consume Clearcasting is a choice you make" [Eluaria, 2026-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=165084#p165084). Temporal Convergence and Clearcasting are both consumed by one Rupture (Avalok). Clearcasting can proc from each missile of a channel ([Jc473, 2024-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=94533#p94533), pre-8 s-cooldown; the cooldown now limits it to one proc per 8 s). Blizzard ticks do **not** proc it ([Koseku thread, 2024-02-02](https://forum.turtlecraft.gg/viewtopic.php?p=86785#p86785)).

Sim reference (no haste, 1000 SP/40 crit/16 hit): Rupture 2961 avg / 1233 DPS; Surge 2359 / 1573 DPS; Missiles with Rupture 1223 / 1297 DPS; Missiles without 1020 / 1081 DPS (wiki). Missiles are ~66–68% of damage, Surge ~16–17%, Rupture ~16% (wiki per-spell data).

Channel-queueing: repeated Missiles casts clip; use nampower (wiki, by the sim author) or a channel-check macro (`/run _ = pfUI.env.UnitChannelInfo("player") or CastSpellByName("Arcane Missiles")` for pfUI — [Ibux, 2023-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=57048#p57048)). A "cannot cast Arcane Missiles / ability not ready" bug was reported mid-2025 and traced to addons ([Fitz77 thread, 2025-07-26](https://forum.turtlecraft.gg/viewtopic.php?p=141551#p141551); [Edwardbateman, 2025-09-26](https://forum.turtlecraft.gg/viewtopic.php?p=153370#p153370)).

## Multi-target / AoE rotation

- **Spam Arcane Explosion.** "spamming Arcane Explossion is the best in evey scenario no matter the spec" [Bahamutxd, 2025-06-08](https://forum.turtlecraft.gg/viewtopic.php?p=134745#p134745); Arcane's "capacity to deal area damage is almost uncontested" [Trismegistos, 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87218#p87218). The wiki AoE sim uses AE spam at 3 mobs; crit is the only stat that matters (~20 SP per 1% crit).
- Resonance Cascade rolls once per Explosion, not per target (staff). Arcane Impact adds crit to Explosion.
- 2–3 targets: no source gives a threshold between single-target and AE; the wiki sim treats 3 level-60 mobs as an AE situation. **Gap:** no source states when to stay on Missiles at 2 targets.
- Threat: "on AOE fights it has to be accounted for" (Trismegistos above). Arcane Subtlety −40% arcane threat is in the wiki build.
- Trash gear: "you should wear 3PC Frost/Fire and 3PC Arcane as of the Nightmares of Ursol Patch. Otherwise use 5PC [T3.5]" (wiki) — the Mirror Magic 3-set (Arcane +10% on rewind) triggers from Arcane Explosion after the 1.18.1 fix ([Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168)).
- Rank 1 Arcane Explosion out of combat / rank 1 to fish Clearcasting (wiki macro; [Rethon, 2024-11-28](https://forum.turtlecraft.gg/viewtopic.php?p=110292#p110292): "spamming 5x arcane explosion(rank1) to proc a clearcast and cast a high rank Blizzard"). Whether rank 1 spells proc Clearcasting was disputed in 2024: one player got none ([Fince, 2024-03-29](https://forum.turtlecraft.gg/viewtopic.php?p=91626#p91626)), another got procs even hitting nothing ([Jc473, 2024-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=91762#p91762)) — **contested, pre-rework**.

## Cooldowns and resources

- **Arcane Power** (3 min): use with MQG on the pull when haste < ~17%, otherwise stagger (wiki). Never activate below ~30% mana: it cannot be cancelled and kills you at 10% ("Even at 25-30% mana while using AP, theres a chance to die when casting Arcane Missiles if bad RNG hits you" [Bahamutxd, 2024-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=107097#p107097); "Maybe don't use Arcane Power at low mana" [Kibuum, 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107183#p107183)). Arcane Instability's 2% base-mana burn keeps ticking under AP. It is on a toggle-style icon shared with Innervate for macro purposes; SuperMacro `/run if not buffed("Arcane Power") then CastSpellByName("Arcane Power") end` and `/unbuff Arcane Power` ([Trismegistos, 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87212#p87212)) — the unbuff part no longer applies since 1.17.2 (cannot be cancelled). Reported bug: AP gave 25% instead of 35% cast speed in Nov 2024 (Schoop123); mana-gain reduction fixed to apply to all sources 2024-11-27 (changelog).
- **Presence of Mind** (3 min): instant Arcane Rupture (Krautsurfer); wiki macro cycles Arcane Power / PoM / trinket.
- **Evocation**: an Arcane cooldown sped up by haste under Accelerated Arcana (staff). Pre-rework raid trick: "If your guild druid innervates you and you evocate at the exact same time, you basically refill the mana of the whole party" [Akos1896, 2024-06-18](https://forum.turtlecraft.gg/viewtopic.php?p=97235#p97235) — depended on Brilliance Aura, **superseded**.
- **Mana gems / teas / potions**: "Teas don't share cooldown with normal potions and are practically free" [Gantulga, 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87224#p87224) (mana tea from Hyjal; small dream shards ~1g). Alchemist's Stone + Greater Mana Potion as a cheap healer setup (Trismegistos). "1000 mana every 2 minutes isn't enough to sustain a fire mage who doesn't have arcane talents" [Forbearance, 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107208#p107208) — i.e. tea alone is not a mana plan.
- **Mana behaviour**: with the full tree "it is almost impossible to run out of mana" in T3 ([Jombo, 2023-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=43821#p43821), pre-rework); "In Raids, as soon as a single Retribution Paladin puts the Mana on Spell Hit debuff on a target, your Mana Bar essentially just goes to full" [Eluaria, 2026-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=165084#p165084). Leveling is the opposite: "your mana still gets down pretty fast (the nerf of Arcane Concentration is playing it's part here) and you have to fish for AC procs via AM rank 1 spells if you are low" [Krautsurfer, 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=106011#p106011).
- **Wand**: Wand Specialization mana-on-hit is a reason to wand between pulls (Krautsurfer); Kibuum planned to avoid needing it.
- **Blade of Eternal Darkness** returns mana on spell landing ([Trismegistos, 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87218#p87218)); a 2024-10-30 itemization thread poster says it was nerfed and "you have to cast for 40 seconds non stop to beat a 10 int weapon" ([player, 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276) thread) — **contested/superseded**.

## Role strategy

- Stand at ≤30 yd and channel; move only during Rupture cooldown gaps or use Fire Blast → Surge while moving (wiki).
- Threat: Ignite-style threat problems don't exist, but Rupture and Icicles "produce a massive amount of aggr[o]" per a Frost raider in the Karazhan balance thread ([player, 2024-11-06, t15610](https://forum.turtlecraft.gg/viewtopic.php?t=15610)); keep Arcane Subtlety.
- Interrupts: Counterspell; wiki macro skips it if the target has Ice Block. Improved Counterspell is "insane" for PvP and PvE utility per [Redmagejoe, 2023-07-19](https://forum.turtlecraft.gg/viewtopic.php?p=54081#p54081) (pre-rework recommendation for the last 2 points).
- Decurse and Polymorph macros: wiki "Sheep controlled teammates (BWL Nefarian, ZG Hakkar)" macro; whisper-warning macro.
- Buffs: Arcane Brilliance costs 1200 mana (was 3400); Arcane Intellect R5 445 (staff 2024-10-12). Conjured Mana Oranges via the AQ20 quest chain (wiki General FAQ; [Balake, 2023-01-24](https://forum.turtlecraft.gg/viewtopic.php?p=33103#p33103)). Dampen Magic on the tank is now usable on mobs < 63 only, never on raid bosses ([Avalok, 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160751#p160751) asked for it; Atreidon opposed).
- Amplify/Dampen: 1 rank, 6% base mana (staff).

## Gear, enchants and consumables

- **Pre-raid** (wiki General FAQ, list "Arcane Mage"): Spellweaver's Turban (UBRS), Diana's Pearl Necklace (Strat), Burial Shawl (Scholo), Shroud of Arcane Mastery (BRD Theldren), Figgle's Coveralls (Hateforge Quarry), Sublime Wristguards (DM North), Hands of Power (LBRS), Ban'thok Sash (LBRS), Skyshroud Leggings (LBRS), Omnicast Boots (BRD), Ring of the Academy (Alliance dungeon quest) / Rune Band of Wizardry (UBRS) / Don Mauricio's Band of Domination (Scholo), Magus Blade (Stormwind Vault trash, ~40g AH) or Witchblade, Almanac of Savagery (SW Vault) or Lord Valthalak's Staff of Command, Wand of Arcane Potency (DM West) or Wand of the Eclipse (Black Morass), Orb of Kaladoon / Blackfire Orb (dungeon quest), Whip of Encouragement (SW Vault). Also Sorcerer's Regalia (T0.5, buffed on Turtle), cheap BoE Arcanist Belt/Bindings, The Lost Kriss of Zedd, Gloves of Unwinding Mystery, Kara10 pieces "for basically every slot" (item IDs 61285 legs, 61288 belt, 61283 gloves, 61268 off-hand, 61251 ring, 61252 head, 61450 trinket, 61281 boots, 61282 bracers, 61286 wand, 61284 chest). The wiki's stance: no up-to-date pre-raid BiS, "you can just jump right into raids".
- **Tier sets**: Arcane has its own T1/T2/T3 versions (Arcanist/Netherwind/Frostfire … with Arcane spell power and haste after the 2025-01-28 retune, e.g. Frostfire Vestments 41 Arcane SP, 2% haste; Netherwind Epaulets 1% haste — [Torta (staff), 2025-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=118168#p118168)). How to get them: T3 pieces from Archmage Angela Dosantos at Light's Hope (choose regular or arcane); T1/T2 from an NPC on the chains in Blackrock Mountain; convert existing pieces at Feid Rota in Ratchet — "SWAPPING WILL REMOVE ANY ENCHANTS YOU HAD" (wiki General FAQ). Arcane T1 8-set interacts with the Rupture missile bonus (staff 2025-07-25). Arcane T3 6-set no longer removes the AP regen penalty (staff 2025-04-01; players had reported it broken in Jan 2025). T2 8-set triggers on cast (itemization 2024-10-30). T3.5 "of the Guardian": 3-set Mirror Magic fixed in 1.18.1 (+10% Arcane on rewind); high-haste T3.5 stacking lets some players fit extra missiles or a second Arcane Power (wiki).
- **BWL-tier BiS (post-1.18.1)**: "BWL's BiS is a combination of 5-Set and whatever else you can find. Ring of Sulfuras, Sigil of Ancient Accord, Ornate Bloodstone Dagger for non fire immune bosses." [Eluaria, 2026-04-12](https://forum.turtlecraft.gg/viewtopic.php?p=174946#p174946) (single source). Ornate Bloodstone Dagger "Can no longer trigger from effects that deal non-Physical damage without a cast" ([Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)).
- **Trinkets** (wiki sims, 1000 SP/35 crit/16 hit/9 haste, AP + trinket 5 s in): 1-min fight MQG 1522 > REoS 1440 > Mark of the Champion 1436 > Charm of Magic 1432 > Sigil 1426; 2-min MQG > Mark > Sigil > Gulch; 3–4 min Mark of the Champion ≈ Sphere of Endless Gulch > Sigil > REoS > MQG. Fresh 60: Mark of the Champion > REoS ≈ Tear > MQG. AoE trash: Hazza'rah's Charm of Magic best, MQG worthless. Chromie's Broken Pocket Watch "places a debuff on you making your spell casting longer" [Zvyrhol, 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=106034#p106034) (single source, Nov 2024).
- **Enchants**: shoulder — "2 haste shoulder enchant or the Saph enchant. 2 haste is better on single target but Saph enchant does give you more versatility if there any AOE cleave" (wiki; Saph = ZG "Sapphiron"-type enchant name as written). Brilliant Wizard Oil (wiki macro).
- **Consumables**: mana tea (Hyjal), Greater/Major Mana Potion, Alchemist's Stone (Trismegistos); no Elixir of Arcane Power exists — it was only a suggestion ([Bigsmerf thread, 2023-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=58196#p58196)); Concoction of the Arcane Giant is a buff item that no longer stacks with Juju Power (1.18.1 notes) — its use for mages is not documented. Engineering "Only engineering really matters for raids because of goblin sapper charges" (wiki General FAQ).
- **Professions**: Tailoring/Enchanting standard; Alchemy/Herbalism for pots ([Chev03, 2026-04-06](https://forum.turtlecraft.gg/viewtopic.php?p=174149#p174149)); a question whether BiS needs Tailoring went unanswered ([Spartan57, 2025-04-15](https://forum.turtlecraft.gg/viewtopic.php?p=126878#p126878)).

## Common mistakes (bots must avoid)

1. Starting a max-rank Missiles channel on a mob about to die — "hardcast max-rank Missiles on a mob with 10% hp and then complain about having no mana" [Massie2, 2023-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=34165#p34165); "If your target is close to dying don't cast AM, use Blast or Scorch" [Kibuum, 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107183#p107183).
2. Using Arcane Power under ~30% mana (death) — Bahamutxd, Kibuum above; Guldred: "at level 40 … you simple run into the 10% area if you just spam your casts" ([2025-10-23](https://forum.turtlecraft.gg/viewtopic.php?p=156714#p156714)).
3. Casting a second Missiles into the last second of the Rupture buff (pays +20% mana for no bonus) — Kibuum, Trukken.
4. Using Arcane Surge during Arcane Power/MQG (its 1.5 s GCD doesn't scale) — wiki, Guldred.
5. Letting Surge expire because you are mid-channel — its window is ~4 s; cancel Missiles for it only when not clipping and mana allows (wiki, Avalok).
6. Re-pressing Missiles during the channel without a channel-check (clips the last missile) — wiki Mage Macros: "Using Arcane Missiles repeatedly is a DPS loss".
7. Standing beyond 30 yd (Bahamutxd, Konstantin19).
8. Ignoring AoE threat on trash (Trismegistos).
9. Wearing the 5-piece T3.5 on trash when a 3/3 split is better (wiki, post-1.18.1).
10. Converting tier pieces at Feid Rota with enchants on them (wiki).

## Sources

| Source | Authority | Date | Era | Used for |
|---|---|---|---|---|
| [Dragunovi p102968](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968) | staff | 2024-10-12 | pre-1.18.1 | all talent/spell numbers |
| [Jamey p113460](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460) | staff | 2024-12-20 | pre-1.18.1 | Rupture 90% SP |
| [Torta p124504](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504) | staff | 2025-03-30 | pre-1.18.1 | AP 30/1/50, T3 6-set, Rupture rank damage, Dampen/Amplify |
| [Jamey p141159](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) | staff | 2025-07-25 (rev. 2025-08-14) | pre-1.18.1 | Rupture 20%, Arcane Focus swap |
| [Jamey p166071](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | staff | 2026-01-23 (rev. 01-26, 03-19) | 1.18.1-announced | no Arcane changes in 1.18.1 |
| [Torta p154168](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168), 1.18.1 notes | staff | 2025-10-03 | 1.18.1-announced | Mirror Magic, wands |
| [Torta p118168](https://forum.turtlecraft.gg/viewtopic.php?p=118168#p118168) | staff | 2025-01-28 | pre-1.18.1 | tier retune |
| [Mage Arcane FAQ](https://turtle-wow.fandom.com/wiki/Mage_Arcane_FAQ) | wiki (community, rev. 2026-03-24) | — | 1.18.1-announced | rotation, sims, gear, macros |
| [Mage General FAQ](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ) | wiki (rev. 2026-09-09) | — | post-1.18.1 | spec comparison, pre-raid, sets, haste formula |
| [Mage Levelling FAQ](https://turtle-wow.fandom.com/wiki/Mage_Levelling_FAQ) | wiki (rev. 2025-10-01) | — | 1.18.1-announced | point allocation |
| Eluaria (p160732, p165084, p167923, p171409, p174946, p174948) | player (self-described mage main; Nordanaar raid data) | 2025-11 → 2026-04 | both | standing, stats, BiS |
| Schoop123 p107572 | player (leveled 1-60 Arcane) | 2024-11-11 | pre-1.18.1 | AP, burst maths, Rupture window |
| Kibuum p105841/p106073/p107661/p107183 | player | 2024-11 | pre-1.18.1 | builds, Rupture window, AP use |
| Trismegistos p87212/p87218/p87222/p87228, p98962 | player (self-described raid arcanist) | 2024-02, 2024-07 | pre-1.18.1 (pre-rework) | AP macro, mana, AoE standing — partly superseded |
| Guldred p145255 | player | 2025-08-13 | pre-1.18.1 | Surge/haste threshold |
| Ashafares p162161 | player | 2025-12-09 | 1.18.1-announced | stat formula |
| Bahamutxd p107097, p134745 | player | 2024-11, 2025-06 | pre-1.18.1 | range, AP risk, AE |
| Cheruscan p158193, p167503 | player | 2025-11, 2026-02 | 1.18.1-announced | standing |
| Bigsmerf p122736, p137036 | player | 2025-03, 2025-06 | pre-1.18.1 | standing, leveling stats |
| Krautsurfer p106011; Avalok p137409; Massie2 p34165; Gantulga p87219/p87224; Mokkori p112682; Zvyrhol p106034; Mackylol p88341; Ibux p57048; Jc473 p94533/p91762; Fince p91626; Koseku p86785; Gladeshadow p100044; Redmagejoe p54081; Akos1896 p97235; Hoo p93714; Jombo p43821; Forbearance p107208; Darkhann p170344; Chev03 p174149; Spartan57 p126878 | players | 2023–2026 | as dated | details cited inline |

Agreement summary: spec standing — consensus; rotation — single source (wiki) corroborated by Guldred/Avalok details; stat weights — single source (wiki sims) with independent player formula (Ashafares) agreeing on hit-first and haste ≈ crit; talent allocation — single source (wiki); gear — single source per item. No staff post exists in the Mage forum (0 of 683 posts).
