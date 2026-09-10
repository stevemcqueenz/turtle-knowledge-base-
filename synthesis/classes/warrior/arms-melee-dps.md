# Warrior — Arms — Melee DPS (raid / dungeon, two-handed)

Two-handed Arms (Mortal Strike + Slam) as a PvE damage spec. Turtle's Class Changes 2 deliberately made Arms "the true home of twohanded Slam builds" so that "Arms builds function into raiding" [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102974#p102974). Dual-wield Fury and 2H Fury are in `fury-melee-dps.md`; Arms PvP is in `arms-pvp.md`; Arms as the leveling / dungeon-tank spec is in `leveling.md`.

Eras and kit revisions as defined in `fury-melee-dps.md` (CC2 2024-11-01, Dec-2024 revision, CC3 2025-08-15, 1.18.1 2026-03-20).

## Overview

- **Role**: melee DPS with a two-hander; brings Mortal Strike (healing debuff — noted as not affecting monster healing pre-CC2: "The very first thing we need is to make Mortal strike debuff work on monster healing. Because currently it doesn't" [Noephix (player), 2023-12-13](https://forum.turtlecraft.gg/viewtopic.php?p=80961#p80961) — no later source says it was changed) and Sweeping Strikes cleave.
- **Strengths (sources)**: strong on add-heavy fights — "definitely better than fury in AQ40 and especially Kara40 where every boss has bazillion adds" [Ellifta (player), 2025-07-14](https://forum.turtlecraft.gg/viewtopic.php?p=139087#p139087); less gear-dependent than Fury ("fury in general is more gear dependant than arms" [Cheruscan (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156442#p156442)); Mortal Strike "scales with weapon damage which is easier to keep up with good weapon progression" [Khagrim (player), 2024-11-10](https://forum.turtlecraft.gg/viewtopic.php?p=107379#p107379); big early 2H weapons (Untamed Blade, Bonereaver's Edge) "let you hit closer to your ceiling of dps much sooner than a dw warrior" [Econrel (player), 2024-09-08](https://forum.turtlecraft.gg/viewtopic.php?p=100900#p100900); best dungeon/leveling tank-DPS hybrid via Sweeping Strikes + Whirlwind (see `leveling.md`).
- **Weaknesses (sources)**: rage-starved execute phase and a talent tree with a "floating 1" point problem: "Arms ... generates rage once every 3+ seconds so, barring Windfury, it can't Execute more often than that ... after you Execute you have 0 rage" [Licata (player), 2026-01-27](https://forum.turtlecraft.gg/viewtopic.php?p=166667#p166667); "buying 5 points in Tactical Mastery (a must/tax), 2 points in Imp. Rend (definitely a tax) and 2 points in Imp. Charge ... then needing to spend one more point to get to Tier 3 Talents. That one point has no good options" [Berettadin (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171710#p171710); Deep Wounds reported ticking at ~35% instead of 60% weapon damage [Cromius (player), 2025-09-02](https://forum.turtlecraft.gg/viewtopic.php?p=149915#p149915); Master Strike's weapon-swap mechanic is clunky (Licata, above); 1.18.1 moved Precision Cut behind Boundless Anger, which players call a nerf ("Have fun dropping Master of Arms so you can still grab Enrage. Have fun when 30/21 to grab deathwish turns out to be the superior build" [Eyeburn (player), 2026-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=170636#p170636)).
- **Content**: raids — **alternative** (2023–early 2025: "just for fun" / "Arms just doesnt work compared to fury" [Likaleo (player), 2024-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=95025#p95025); mid-2025 onward: "up there with fury" (Ellifta) / "already the best DPS spec in game. Check out turtlogs" [Noephix (player), 2025-06-11](https://forum.turtlecraft.gg/viewtopic.php?p=135319#p135319) / "The spec already underperforms in pve" [Bettargh (player), 2026-03-13](https://forum.turtlecraft.gg/viewtopic.php?p=170733#p170733) — **contested**). Dungeons — favored (Sweeping Strikes). Leveling — favored (see `leveling.md`). PvP — the class's PvP spec (Mortal Strike).
- **Community standing**: pre-CC2 "the least good DPS spec of warrior" [Bigsmerf (player), 2024-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=94981#p94981) with social friction ("problems would start even at pugs, asking why you're not fury ... Retris ... might accuse you of ninjaing their 2h weapon upgrade for a meme" [Akos1896 (player), 2024-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=95042#p95042)); post-CC2 accepted, with the AQ40/Kara40 niche.

## Official kit (staff)

- CC2 [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102974#p102974): Tactical Mastery to row 1; Improved Rend 2 pts (10/20%); Deflection to row 2; Improved Charge 5/10 rage; **Deep Wounds ticks every 1.5 s for 6 s**; Improved Hamstring removed; new keystone Counterattack (later replaced); **Improved Slam moved to Arms** (2 pts, also reduces Slam's GCD); **Two-Handed Weapon Specialization 3 pts, 2/4/6% damage and +1/2/3 skill in all two-handed weapons**; Poleaxe/Sword spec replaced by **Master of Arms** (5 pts; Axe +1–5% crit, Mace ignore armor per level, Sword 1–5% extra attack, Polearm +0.4–2.0 yd range); **Sweeping Strikes 20 rage, not spent by off-hand hits**; new Precision Cut and Boundless Anger; Improved Disciplines −4/8/12 min; Slam taught at 14; Pummel in Battle Stance; Rend scales with AP.
- 2024-11-01 [Dragunovi (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=105804#p105804): Rend 5% AP per tick; Mortal Strike 105/110/115/120% weapon damage (instead of +flat); Slam 2 s; Decisive Strike 2.5 s.
- 2024-12-20 [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): Decisive Strike removed; **Slam 2.5 s cast, continues swing timer, castable while moving, ranks 50–90% weapon damage**; "those with 3.8s weapons should see about a -18% damage nerf"; Master of Arms mace penetration 1.2–6 per level (360 at 60); Precision Cut → 10/20/30% rage refund; Execute back to vanilla values, 4.5 s cooldown; Mortal Strike buff reverted; "Arms is mostly in a good spot right now. We've tried to push Arms into the more precise and calculated gameplay design".
- CC3 [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): Execute cooldown removed ("forced most Arms players to spec into the Fury tree simply to avoid the restriction"); Counterattack removed; new **Master Strike** keystone (35% weapon damage; Mace disorient 3 s, Sword disarm 3 s, Axe immobilize 4 s, Polearm +100% vs mounted and dismount, Fist knockdown 2 s, Staff +25% parry 10 s, Dagger silence 3 s; 20 rage, 30 s cooldown); **Mortal Strike 115/120/125/130%**; **Slam 65/80/90/100%**; Precision Cut → +15/30/45% Execute base damage; Improved Disciplines and Improved Slam swapped positions.
- 1.18.1 [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071): Hamstring cooldown removed; **Boundless Anger and Precision Cut swapped**; **Precision Cut → "Increases the damage done per extra rage point spent on Execute by 25/50/75%"**; Flurry's Slam reduction corrected (1.92 s at 5/5 — affects Arms builds that dip Fury for Flurry).
- Player-tested coefficients (Dec-2024 kit): Rend 0.15 AP, Concussion Blow 0.15 AP [Ivgas (player), 2025-01-08](https://forum.turtlecraft.gg/viewtopic.php?p=115927#p115927).

## Talent build

No post lists a full 51-point Arms raid build. Sourced components:

| Talent | Points | Source / note |
|---|---|---|
| Tactical Mastery | 2–5 | tax to reach row 2/3; "Tactical Mastery is the single beat talent you have as a warrior" [Goman7 (player), 2024-12-26](https://forum.turtlecraft.gg/viewtopic.php?p=114428#p114428); 2/5 is enough for Intercept/Mocking Blow (10 rage) [Isvya (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114243#p114243) |
| Improved Rend | 2/2 | tax; Rend "obnoxiously weak" [Berettadin (player), 2025-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=130489#p130489) |
| Improved Charge | 2/2 | "actually beneficial" [Berettadin (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171710#p171710); leveling: at least 1 point so Charge gives enough rage for Hamstring/Pummel [Xudo (player), 2024-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=105917#p105917) |
| Deflection | 0–5 | filler; parry haste helps 2H [Hctwowfan (player), 2024-12-29](https://forum.turtlecraft.gg/viewtopic.php?p=114737#p114737) |
| Improved Overpower | 2/2 | +50% crit on Overpower confirmed working by a 50-swing test ("60% or 65% crit chance out of 50 hits ... 50% crit from talent and about 17% crit from my gear" [Uni123 (player), 2023-06-11](https://forum.turtlecraft.gg/viewtopic.php?p=49651#p49651)) |
| Master Strike | 1/1 | keystone; the axe root is what players actually use ("What you've ended up with is ... axes being the 'correct' option ... Keep the root and scrap the rest" [Snoof (player), 2025-09-23](https://forum.turtlecraft.gg/viewtopic.php?p=152740#p152740)) |
| Deep Wounds 3/3, Impale 2/2 | 5 | "At endgame though, it and impale are pretty good!" [Syrathegreat (player), 2023-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=42850#p42850); Deep Wounds bug (35%) unresolved |
| Two-Handed Weapon Specialization | 3/3 | "directly buffs your damage output" [Xudo (player), 2025-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=116686#p116686) |
| Improved Slam | 2/2 | "learn to use slam between your auto timer" [marvian (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156445#p156445); one high-end player runs *without* it and fishes with Hamstring instead [Wolf of Rage (player), 2025-03-15](https://forum.turtlecraft.gg/viewtopic.php?p=122609#p122609) — contested |
| Master of Arms | 5/5 | Axe = crit (leveling consensus: "Axe Mastery talent (5% crit) is superior" [Hctwowfan (player), 2024-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=101830#p101830)); Sword for proc fishing; only affects two-handers ("Master of Arms only cares about two-handed weapons" [Turbosaxophonic (player), 2025-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=115257#p115257) — single source); polearm range "should be" 2 yd but a Tauren player reports no visible dead zone [Kagarin (player), 2025-07-27](https://forum.turtlecraft.gg/viewtopic.php?p=141686#p141686) |
| Sweeping Strikes | 1/1 | mandatory for cleave |
| Precision Cut | 3/3 (execute build) | pre-1.18.1 "I can take 3/3 Precision Cut, 2/2 Battlefield Mobility and Piercing Howl, that's perfect" (Licata, above); 1.18.1 makes Boundless Anger a prerequisite, so 6 points |
| Boundless Anger | 0 / 3 (1.18.1 prerequisite) | "I don't know a single warrior that invests points in boundless anger" [Huzzybearr (player), 2026-03-11](https://forum.turtlecraft.gg/viewtopic.php?p=170580#p170580) |
| Mortal Strike | 1/1 | spec definition |
| Fury dip: Cruelty 5, Unbridled Wrath 5 (2H doubled), Improved Shouts / Piercing Howl / Enrage / Death Wish | rest | Xudo's 2H build (above) takes Cruelty + UW + Improved Shouts + Death Wish; Berettadin: Cruelty first. Post-1.18.1 Eyeburn expects "30/21 to grab deathwish" to win (above) |

Build links (opaque; talents.turtlecraft.gg): execute-Arms 60 build `https://talents.turtlecraft.gg/warrior?points=NQQAQYDQpaAQBAAoAooACAAAAAAAAAAAAAAAAAAAAAA=` [Wolfmanpaulx (player), 2025-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=116973#p116973); Slam+Sweeping Strikes/Execute build `...?points=dQQAAYDQpaAYAAAoAooACAAAAAAAAAAAAAAAAAAAAAA%3D` and Death Wish variant `...?points=dQQAAYDQpCAAAAAoAogYAoBAAAAAAAAAAAAAAAAAAAA%3D` [Xudo (player), 2024-10-17](https://forum.turtlecraft.gg/viewtopic.php?p=103287#p103287) (CC2 tree); armsgirl's "trash king" `...?points=FQADCYDQB-FoAAoAAoRCF-` and "parse chad" `...?points=FQADCYDQ-FoAAoAAoRCFAB-` [armsgirl (player), 2025-10-31](https://forum.turtlecraft.gg/viewtopic.php?p=157920#p157920). External: `https://rentry.co/e3i565dk` ("the go-to for warriors afaik" [Muck5955 (player), 2025-10-20](https://forum.turtlecraft.gg/viewtopic.php?p=156287#p156287)) — not fetched.

**Patch validity**: builds written 2024-10 to 2025-07 assume Counterattack (replaced by Master Strike) and the Execute cooldown / Precision Cut refund. Builds written 2025-08 to 2026-03 assume Precision Cut = base damage and no Boundless Anger prerequisite. 1.18.1 (2026-03-20) changed both; no post after 2026-03-20 gives a settled Arms build — gap.

## Stat priority

- Hit: 2H needs less than DW — "you need 8% max" [Cheruscan (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156442#p156442) (single source); weapon skill lowers the yellow cap (see Fury playbook). "Warriors and rogues dont go for the insane 27% hitcap for dualwielding" [Atreidon (player), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108914#p108914) (vanilla-baseline remark).
- Weapon: the slowest, highest top-end two-hander; "Make sure your weapons are as slow as possible" [Yasara (player), 2024-11-16](https://forum.turtlecraft.gg/viewtopic.php?p=108095#p108095); but Slam is normalized since Dec 2024, so slow weapons lost ~18% Slam damage (staff, above). Whirlwind/Sweeping Strikes/Cleave use one auto-attack's worth of damage per target, so top-end matters [Atreidon (player), 2024-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=101831#p101831). Mortal Strike "will be bigger with slow weapon than with fast weapon" [Czasku (player), 2024-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=101834#p101834).
- Strength/AP over agility; crit matters for Impale/Deep Wounds/Overpower (Czasku, above). Exact weights: gap (no sim supports 2H Slam — Ugoboom, Fury playbook).
- Stamina for PvP variant (see `arms-pvp.md`).

## Single-target rotation (raid)

From [Wolf of Rage (player), 2025-03-15](https://forum.turtlecraft.gg/viewtopic.php?p=122609#p122609) and follow-ups; kit = Dec-2024 (Slam continues swing timer, Hamstring on 6 s CD, Precision Cut refund). Marked where later patches change it.

**Opener**: Charge → (Bloodrage) → Sunder Armor once on raid bosses (see Fury playbook, Atreidon) → Berserker Stance.

**Stance**: "You should be in Berserker Stance all the time to benefit from the extra Crit ... Battle Stance offers nothing" (Wolf of Rage). Caveat: Overpower needs Battle Stance; the thread treats stance-dancing for Overpower as optional.

**Priority** (target > 20%):
1. **Mortal Strike** on cooldown.
2. **Whirlwind** on cooldown ("cycling MS/WW" — Wolf of Rage).
3. **Overpower** whenever the target dodged (Battle Stance only; "Overpower is also only available if ever your opponent performs a Dodge").
4. **Slam** as the filler when MS and WW are down, cast immediately after a white swing: "the increased Cast Time of 2.5s (untalented) or 2s (Improved Slam 2/2) means that you will almost always have to use it just about immediately upon swinging. You may have enough time for one Ability (1 GCD, 1.5s wait time), but that may vary a lot" (Wolf of Rage). Swing-timer addon strongly implied; a `st_timer`-based macro exists [Tacticalnelf (player), 2024-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=100433#p100433).
5. **Sunder Armor** as the instant filler until 5 stacks / when the tank isn't a warrior [Atreidon (player), 2025-03-17](https://forum.turtlecraft.gg/viewtopic.php?p=122809#p122809); on trash only to 50% HP [Wolf of Rage (player), 2025-03-17](https://forum.turtlecraft.gg/viewtopic.php?p=122819#p122819).
6. **Hamstring** as the instant proc-fishing filler (Sword spec / Hand of Justice / Windfury) — 6 s CD pre-1.18.1, **no cooldown after 1.18.1**. "Hamstring is also the only one that can proc Sword Specialization from Master of Arms. Sunder cannot." [Wolf of Rage (player), 2025-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=125218#p125218) — contested by armsgirl (Fury playbook).
7. **Heroic Strike** only at ≥ 70 rage with nothing else available (Wolf of Rage); "Arms doesn't want to use Heroic Strike" [Berettadin (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171710#p171710).

**Execute phase (< 20%)**:
- Dec-2024 kit (refund): "time the Executes ... swing and then use Execute ... then Precision Cut will give back tons, and then either do it again ... or wait for another swing and then Execute again" [Wolf of Rage (player), 2025-03-18](https://forum.turtlecraft.gg/viewtopic.php?p=122923#p122923). Use Recklessness / racial here.
- CC3 kit (base-damage Precision Cut) per staff: "shift ideal play to incentivize spending a swing's generated rage with other abilities, before spending the remaining on Execute" [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159). Licata's measured damage-per-rage: Execute surplus ~26 dmg/rage vs Mortal Strike ~45 and Slam ~70 in his gear — "Unless you're about to start overcapping your rage or the target is dying right NOW it's better to use Slam, even during the only time Execute is available" [Licata (player), 2026-01-27](https://forum.turtlecraft.gg/viewtopic.php?p=166667#p166667). Practical rule he gives: at high rage from a white hit, cast Slam first, then Execute, so the next swing refunds you.
- 1.18.1 kit (25/50/75% per extra rage): dev intent is a "high-impact finisher"; Licata computes the 1.18.1 version still below Slam per rage. **Contested / untested post-release**: no post after 2026-03-20 reports Arms execute-phase results. Bots: Execute only at high rage (≥ ~60–100), Slam/MS otherwise.

## Multi-target / AoE

- **2–3 targets**: Sweeping Strikes (20 rage) then Whirlwind and Cleave: "a good opening move in the dungeons is to charge into sweeping strikes into berserker stance into whirlwind. on 3 mobs whirlwind under sweeping strikes will give you 6 white swings worth of damage. be mindful of threat though" [Shaman111 (player), 2023-09-15](https://forum.turtlecraft.gg/viewtopic.php?p=64562#p64562); "Sweeping Strikes + Cleave, and later level Sweeping Strikes + Whirlwind. You pull 2 mobs for that and watch them die" [Unangwata (player), 2020-10-31](https://forum.turtlecraft.gg/viewtopic.php?p=8309#p8309). Sweeping Strikes copies only damage, not ability effects/threat modifiers, and its 5 hits burn fast on weak hits [Atreidon (player), 2026-02-09](https://forum.turtlecraft.gg/viewtopic.php?p=167790#p167790).
- **4+ targets**: same; Whirlwind hit detection is sometimes flaky ("Sometimes when I Whirlwind it doesn't register that the mobs are close together" [Pauly (player), 2022-09-23](https://forum.turtlecraft.gg/viewtopic.php?p=25872#p25872)). No 4+ specific priority in the sources.
- Do not Sweeping-Strike/Whirlwind near CC; Deep Wounds bleeds break Intimidating Shout (Syrathegreat, above).

## Cooldowns and resources

- Sweeping Strikes at the start of every AoE pull (Wolf of Rage); Recklessness in execute phase; Death Wish if taken; Retaliation only if the build dips Improved Disciplines (rarely: "useless Improved Disciplines there, which no one takes" [Bloodline1x9 (player), 2023-06-23](https://forum.turtlecraft.gg/viewtopic.php?p=51132#p51132)).
- Rage: Arms generates rage once per white swing; after an Execute you may sit at 0 with nothing to do "like a level 14 warrior" (Licata). Bloodrage (10 rage) is not enough for Slam/Execute. Conserve rage between dungeon pulls: "try to conserve rage between pulls" (Shaman111, above).
- Master Strike: 20 rage, 30 s; needs the right weapon type, and swapping weapons "retriggering the gcd and resetting the swing timer" (Licata). Bots: only use the effect of the currently equipped weapon (axe root by default); do not swap mid-combat.

## Role strategy

- Behind the boss; Sunder for the raid; Battle Shout; Pummel interrupts in Berserker Stance.
- Off-tank duty with Sweeping Strikes when adds come (Kara40 add fights — Ellifta).
- Dungeon tanking as Arms: see `leveling.md` (Tactical Mastery + Improved Thunder Clap; 2H tank with a shield in bags for hard bosses).
- Threat awareness: Arms has bursty cleave; the classic complaint is cleave pulling adds off tanks.

## Gear, enchants and consumables

Same sources as the Fury playbook. 2H-specific: "There is also the added benefit of UTB/BRE being near bis and available right away from mc and the first boss in bwl" [Econrel (player), 2024-09-08](https://forum.turtlecraft.gg/viewtopic.php?p=100900#p100900); BRE PPM 3→2 [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276); Untamed Blade damage raised in 1.18.1 [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272); Might of Menethil is the feared PvP 2H ("a t3 arms warrior with might of menethil means anyone else may as well not even play" [Ninetyone (player), 2024-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=114483#p114483)); Runeblade of Baron Rivendare vs Dal'Rend swords question got only trinket answers (Hand of Justice, Rune of the Guard Captain, Blackhand's Breadth) [Steakhouse (player), 2025-02-10](https://forum.turtlecraft.gg/viewtopic.php?p=119537#p119537); Towerforge Demolisher considered as a buyable 2H [Boblin (player), 2025-05-23](https://forum.turtlecraft.gg/viewtopic.php?p=132704#p132704); +2H mace weapon-skill item coming in 1.17.2 and Ashkin Belt [Syrathegreat (player), 2023-06-12](https://forum.turtlecraft.gg/viewtopic.php?p=49836#p49836). Kara40: Dreadslayer mini-set + 3p T3.5 (Noephix, Fury playbook). Consumables/enchants: gap.

## Common mistakes

- Playing 2H with deep Fury talents and no Improved Slam / 2H spec ("2h fury isnt a spec anymore. If you use twohanders go arms" — Atreidon; contested but the underlying advice — take the Arms 2H talents — is consensus).
- Not casting Slam right after the swing / casting it just before a swing (loses white damage) — Wolf of Rage, marvian.
- Executing yourself to 0 rage mid-rotation (Licata) — do Slam/MS first, Execute last.
- Heroic Strike as filler.
- Weapon-swapping for Master Strike in raids.
- Using Rend at 60 in raids — Rend is "obnoxiously weak and not worth buffing" [Berettadin (player), 2025-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=130489#p130489); it is a leveling/PvP tool (it does scale with 0.15 AP per Ivgas, above).
- Cleaving/Whirlwinding CC'd mobs; Sweeping Strikes on the wrong pack.

## Sources

| Thread / post | Author (authority) | Date | Era | Agreement |
|---|---|---|---|---|
| [p=102974](https://forum.turtlecraft.gg/viewtopic.php?p=102974#p102974), [p=105804](https://forum.turtlecraft.gg/viewtopic.php?p=105804#p105804), [p=113460](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460), [p=141159](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159), [p=166071](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | Dragunovi / Jamey (staff) | 2024-10 → 2026-01 | pre-1.18.1, announced | official |
| t=18005 (Arms warrior DPS rotation) | Wolf of Rage, Atreidon (players) | 2025-03 | pre-1.18.1 (Dec-2024 kit) | rotation: consensus in thread; execute detail obsolete |
| t=23766 [p=166667](https://forum.turtlecraft.gg/viewtopic.php?p=166667#p166667) | Licata (player) | 2026-01-27 | announced | execute-phase math: single source |
| t=24254 | Huzzybearr, Eyeburn, Hordeonex, Noephix, Magicknight (players) | 2026-03 | announced / post-1.18.1 | BA/PC swap criticism: consensus among posters |
| t=20288, t=13927, t=19569 | Ellifta, Akos1896, Likaleo, Bigsmerf, Noephix (players) | 2024–2025 | pre-1.18.1 | Arms vs Fury: contested |
| t=15643 | Turbosaxophonic, Khagrim, Xudo, Wolfmanpaulx (players) | 2024-11 → 2025-01 | pre-1.18.1 | 2H builds: contested |
| t=13636 | Xudo, Econrel, Likaleo, Geojak (players) | 2024 | pre-1.18.1 | Slam viability |
| t=14968 | Hctwowfan, Atreidon, Czasku (players) | 2024-09 | pre-CC2 | weapon type / Master of Arms |
| t=7743 | Uni123 (player) | 2023-06 | pre-CC2 | Improved Overpower test |
| t=16861, t=20511 | Turbosaxophonic, Kagarin (players) | 2025 | pre-1.18.1 | Master of Arms scope |
| t=23896 | Atreidon (player) | 2026-02 | announced | Sweeping Strikes mechanics |
| t=9871 [p=64562](https://forum.turtlecraft.gg/viewtopic.php?p=64562#p64562) | Shaman111 (player) | 2023-09 | pre-CC2 | dungeon cleave opener |
| 1.18.1 thread [p=171710](https://forum.turtlecraft.gg/viewtopic.php?p=171710#p171710) | Berettadin (player) | 2026-03-22 | post-1.18.1 | "floating 1" tree criticism: single source |

Advice predating changes that affect it: Counterattack-era talent advice (2024-10 → 2025-07); Execute-cooldown-era advice (2024-11 → 2025-08); the "Slam pauses the swing timer" note (2024-11 → 2024-12 only); pre-1.18.1 Hamstring-cooldown filler advice.
