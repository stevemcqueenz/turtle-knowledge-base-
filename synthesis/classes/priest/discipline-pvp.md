# Priest — Discipline PvP ("Smite" burst caster, and the Disc/Holy healer variant)

Era markers as in `holy-healer.md`. Since Class Changes 2 (2024-10) Discipline is the priest PvP spec most sources name; healer priests in BGs also base themselves in Discipline.

## Overview

- **Role A — Smite burst/support caster** (primary in sources): Holy Fire → instant Smite bursts, Chastise CC/haste, dispels, shields, off-heals. "Every priest is playing disc spec in pvp over shadow because the damage and survivability and team utility is unparalleled ... cast holy fire into insta cast smite into another insta cast smite if you crit which is enough to kill anyone" — [Forumdweller (player), 2025-04-25](https://forum.turtlecraft.gg/viewtopic.php?p=128453#p128453). "Smite Priests are no joke when they get the jump on you. 1.5K + 1.5K, before you can react puts targets on defensive play already. After that, you bait interrupts with another smite, then finish them with the lol-shards" — [Halfgeek9 (player), 2025-08-14](https://forum.turtlecraft.gg/viewtopic.php?p=145281#p145281). Staff nerfed it twice for PvP: "We overshot Discipline by quite some, both in PvE and PvP" (Smite −10% base, Searing Light 3 s ICD, Chastise 2 s/25 yd) — [Jamey (staff), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776); "the pvp boys complaining they got double critted in BGs" is how a PvE Smite player saw it — [Caracole (player), 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=111323#p111323); the PvP side: "priest would insta cc you from range, cast holy fire into an instant smite, and regardless of if the smite crit or not, you were dead" — [amanagor (player), 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=111327#p111327).
- **Role B — BG healer** (Disc/Holy): "all I do on BG is spamming flash heal, PW:S, dispel and Renew (and fear sometimes)" — [Tok (player), 2023-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=78962#p78962); "Playing a healer is rough in the current burst meta, pala and shaman can survive with healing in tank spec/gear while priest and druid are getting one shot" — [Elleshar (player), 2025-03-31](https://forum.turtlecraft.gg/viewtopic.php?t=18254) (PvP announcement thread); "if you play a holy priest for example you will lose against a lvl 59 shaman, almost guaranteed" — [Terrydavis (player), 2025-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=124710#p124710).
- **Standing**: Smite PvP is **favored among priest PvPers** since CC2 (Forumdweller, Ataika, Zvyrhol: "Discipline is standard build for PvP Smite Priests. And is also standard build for healers" — [Zvyrhol (player), 2024-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=94782#p94782)); overall priest PvP standing is contested ("DO NOT PLAY PRIEST ITS THE TOILET CLASS OF TURTLE WOW ... shaman is much better than priest on horde side and pala is much better than priest on alliance side" — [Terrydavis (player), 2025-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=156307#p156307) vs "Disc is still good" — [Zvyrhol (player), 2026-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=166937#p166937)).

## Talent build

- Ragetto's Disc/Holy PvP shape "~31/20/0" with a talent-builder link (haaxor1689 custom calculator string `0500023201020500000000000000-2350005013000000000000000000-0050023020000000000000000000`) — [Ragetto (player), 2024-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=102616#p102616); he asked whether to use Shadow Focus for fear resists (answer: hit ≠ resist; 3% hit is enough — Heroclastus).
- Zvyrhol's "+150 raw spell damage from talents" accounting for Smite PvP: Inner Fire + Improved Inner Fire + Spiritual Guidance — [Zvyrhol (player), 2024-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=103729#p103729) → this implies a Disc/Holy split reaching Spiritual Guidance (20 Holy points).
- Blackout for Smite priests: "it might be worth picking Blackout instead of Spiritual Guidance — it gives you a decent chance to escape from melees when it procs from Shadowguard or SW:Pain" — [Podgnil (player), 2025-08-14](https://forum.turtlecraft.gg/viewtopic.php?p=145377#p145377) (pre-1.18.1; Blackout is row 2 since 1.18.1, so it costs 5 extra Shadow points — Springboards 2026-01-30).
- Healer variant: Tok's build image only; Frantsel later preferred a Shadow hybrid for BGs (see `shadow-pvp.md`).

Reconstructed Smite PvP build (Disc 31 / Holy 20 / Shadow 0), same Disc core as `discipline-ranged-dps.md` (Wand 2, Piercing Light 3, Mental Agility 3, Blessed Concentration 2, Improved PW:Shield 3, Inner Focus 1, Improved Inner Fire 2, Purifying Flames 2, Searing Light 3, Enlighten 1, Mental Strength 3, Force of Will 5, Chastise 1 = 31) + Holy (Divinity 5, Divine Fury 5, Holy Reach 2, Holy Nova 1, Holy Focus 2, Spiritual Guidance 5 = 20). Marked reconstruction; no decoded source string. Patch validity: unchanged by 1.18.1 except Searing Light 60% mana; `valid_for_1181: true` (talent shape), PvP Dampening now per-spec (numbers unknown).

## Stat priority (PvP)

- Stamina first for survivability (Springboards 2024-07-07, quoted in `shadow-pvp.md`), then spell power ("damage and healing" over Holy-only — [Kobiq (player), 2024-12-01](https://forum.turtlecraft.gg/viewtopic.php?p=110850#p110850)), crit (Searing Light procs), 3% hit (Heroclastus), spell penetration only vs resist-stackers.
- PW:S scales with healing power not spell power per testing ("if you're playing disc priest in PVP, you're gimped to stack up healing power, to increase survivability and sacrifice damage from spell power" — [Gottabe (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173328#p173328)) — single source, post-1.18.1.
- Weapon: Soulseeker (−25 target resistance) — [Zvyrhol (player), 2024-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=102656#p102656). Night Elf: "Time Frozen Bow is bis. Adds a lot of damage to searing shot and 1% haste" — [Blackduck4 (player), 2025-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=159517#p159517); stamina bows for PvP — [Thaladar (player), 2025-08-07](https://forum.turtlecraft.gg/viewtopic.php?p=143500#p143500).
- T2 (healing + damage) preferred over Disc T2.5 for PvP versatility — [Kobiq (player), 2024-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=110892#p110892); r12+ PvP gear "about as good as t2.5/t3" (Springboards 2024-07-07).

## Single-target sequence (Smite)

Opener from stealth/range (NE: Shadowmeld → fear opener — Thaladar 2025-08-14): Inner Fire + Enlighten (self) + PW:S up → `Chastise` on the target (instant, 25 yd, 2 s disorient; breaks on damage) → `Holy Fire` (crit fishing; Purifying Flames +12%) → instant `Smite` on Searing Light proc → second `Smite` if it crit again (3 s ICD) — amanagor/Forumdweller descriptions. Kobiq's caveat: "Currently Holy fire is exclusive with Chantise in PVP due to longer cast time and the dot breaking CC" — [Kobiq (player), 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=111295#p111295): choose between Chastise-as-CC (then Smite, not Holy Fire) or Holy Fire first.

Priority:
1. Instant `Smite` whenever Searing Light is up (macro: [Ulukay (player), 2024-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=106433#p106433)).
2. `Holy Fire` on cooldown unless the target is Chastise-disoriented.
3. `Smite` hard-cast (bait interrupts with it — Halfgeek9); Starshards (NE) while the target LoS-hugs; Searing Shot (NE, no GCD) on cooldown — [Thaladar (player), 2025-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=141075#p141075); sitting targets are auto-crits.
4. `Shadow Word: Pain` for pressure; `Mind Blast` "on cd" in PvP even as Smite — [Schwarzschild (player), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105283#p105283).
5. `Pain Spike` finisher (30 s CD; "another instant cast spell on top of Chastise/Pain Spike that you can use as finishers" — Blackduck4 2025-11-13).
6. `Psychic Scream` to create casting windows; `Power Word: Shield` self every Weakened Soul.
7. Undead: Devouring Plague not worth the GCD in burst meta (Zvyrhol 2025-09-05). Troll: Shadowguard + Hex (Podgnil 2025-08-14; Halfgeek9).
8. Human: Feedback "is harbage if you want to be healer ... works only against spells" — [Ataika (player), 2024-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=114535#p114535).

Healer variant priority (Tok/Ataika): Renew/PW:S while moving, Flash Heal, Dispel Magic constantly, Fear when melee stack, "you cast hots/shields/grenades and straferun to the nearest party memeber for assist" — [Ataika (player), 2025-05-15](https://forum.turtlecraft.gg/viewtopic.php?p=131171#p131171).

## Multi-target

- `Holy Nova` rank 1 to break stealth and while moving ("In PvP Holy Nova is great because you can use it while moving" — [Zvyrhol (player), 2025-08-06](https://forum.turtlecraft.gg/viewtopic.php?p=143413#p143413)).
- `Chastise` on **allies** to break Sap/Blind: "You can also break sap and blind on friendly targets with chastise" — [Isvya (player), 2024-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=103744#p103744); "It is going to be the best spell in PvP" — Zvyrhol 2024-10-19; "abilities like Chastise are fantastic because they can be used on sapped or blinded allies" — [Thaladar (player), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141227#p141227). Self-Chastise macros: `/script if UnitIsEnemy("target") then TargetUnit("player") CastSpellByName("Chastise") TargetLastEnemy() else CastSpellByName("Chastise") end` — [Mosttrustworthy (player), 2025-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=121406#p121406); RoidMacros `/cast [@player] Chastise` — [Reomc1 (player), 2025-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=121387#p121387).
- Dispel paladin seals/blessings in BGs (the paladin forum complains a priest "applies DoTs, Mana Burn, SW:D pressure, so while he dispels my seal, I'm also rotting" — thread [t=23094](https://forum.turtlecraft.gg/viewtopic.php?t=23094)).

## Cooldowns and resources

- `Chastise` 40 s (PvP players wanted 15-20 s — [sharstards1 (player), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152384#p152384)); "the added 10 seconds to chastise is a terrible nerf for priest in PvP ... it's the only gapmaker we have" — [Jackbonus (player), 2025-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=125038#p125038).
- `Inner Focus` 3 min: free crit-boosted Holy Fire or Greater Heal; also for High Elf racial mana costs — [Aykhanchik (guide writer), 2022-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=15484#p15484).
- `Fear Ward` on self/ally pre-fight (baseline); `Desperate Prayer` (Human/Dwarf, 10 min); Dwarf `Avatar` (5 min) on a focused ally; NE `Shadowmeld` to deny openers and to drink mid-fight ("clutch drink + SMELD during a big fight" — Thaladar 2025-08-13; 1 min CD nerf complained about by Turboman/Ataika).
- Mana: tea; drink out of combat; Mental Agility; Searing Light −60% Smite mana (1.18.1).

## Role strategy

- Range game: keep 25-30+ yd; Chastise range 25 yd (staff 2024-11-20); Holy Reach +6 yd.
- Interrupt baiting with Smite, then Starshards/Holy Fire (Halfgeek9); vs kickers, Starshards is Arcane school (Steakhouse).
- Support first in team fights: shields, Chastise haste on the flag carrier/melee, dispels, Fear Ward; "Shielding is for emergencies" in PvE but a core PvP tool.
- Mana Burn needs Improved Mana Burn (now Shadow row 4) to be castable in time — Thaladar 2025-07-25.
- Faction notes: Alliance priests fight WotF undead and purge-heavy shamans ("fear ward has been stolen ... fighting against army of undeads that make your fear useless" — [Konstantin19 (player), 2024-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=114510#p114510)); Horde priests fight paladins ("On Turtle, Paladins are easily 2x other class in population" — Halfgeek9 2025-05-28).

## Common mistakes

- Chastising an enemy and then casting Holy Fire (DoT breaks the disorient) — Kobiq.
- Hard-casting into a kicker instead of baiting with Smite/Starshards (Halfgeek9, Steakhouse).
- Wearing damage tier sets instead of stamina pieces (Springboards).
- Forgetting ally-Chastise to break Sap/Blind (Isvya/Thaladar).
- Using Feedback as a Blackout engine (Ataika).
- Expecting Devouring Plague to survive a paladin/priest (cleansed) — Halfgeek9.

## Sources

| Source | Authority | Date | Era | Used for | Agreement |
|---|---|---|---|---|---|
| [Forumdweller](https://forum.turtlecraft.gg/viewtopic.php?p=128453#p128453) | player | 2025-04-25 | pre-1.18.1 | Disc dominance, combo | contested (Caracole/Quidoba defend PvE) |
| [Halfgeek9](https://forum.turtlecraft.gg/viewtopic.php?p=145281#p145281) | player | 2025-08-14 | pre-1.18.1 | opener, interrupt bait | single |
| [Zvyrhol](https://forum.turtlecraft.gg/viewtopic.php?p=103729#p103729), [p=102656](https://forum.turtlecraft.gg/viewtopic.php?p=102656#p102656), [p=150297](https://forum.turtlecraft.gg/viewtopic.php?p=150297#p150297) | player (Smite PvP main) | 2024-10 .. 2025-09 | pre-1.18.1 | modifiers, weapon, race | single |
| [Isvya](https://forum.turtlecraft.gg/viewtopic.php?p=103744#p103744), [Thaladar](https://forum.turtlecraft.gg/viewtopic.php?p=141227#p141227) | player | 2024-10 / 2025-07 | pre-1.18.1 | ally Chastise | consensus |
| [Kobiq](https://forum.turtlecraft.gg/viewtopic.php?p=111295#p111295) | player | 2024-12-04 | pre-1.18.1 | HF vs Chastise | single |
| [Ragetto t=15099](https://forum.turtlecraft.gg/viewtopic.php?p=102616#p102616) + Heroclastus | player | 2024-10 | pre-1.18.1 | build shape, hit | consensus on hit |
| [Tok](https://forum.turtlecraft.gg/viewtopic.php?p=78962#p78962), [Ataika](https://forum.turtlecraft.gg/viewtopic.php?p=131171#p131171) | player | 2023-11 / 2025-05 | pre-1.18.1 | healer variant | weak |
| [Jamey](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776), [Torta](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504) | staff | 2024-11-20 / 2025-03-30 | pre-1.18.1 | Chastise/Searing Light values | authoritative |

Pre-1.18.1 advice affected by 1.18.1: Blackout as a cheap row-1 pick (Podgnil), Searing Light mana (60%), PvP Dampening per spec (unknown numbers).
