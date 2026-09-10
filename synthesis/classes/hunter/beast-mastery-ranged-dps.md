# Hunter — Beast Mastery — Ranged DPS (raid / dungeon / solo)

The pet spec. Covers deep-BM raid DPS on three different kits (CC2 Nov 2024, CC3/1.18.0 Aug 2025, 1.18.1 Mar 2026) and the BM/MM "29/22" hybrid. Pet choice, pet talents, feeding and positioning are in `pets.md`; leveling in `leveling.md`; PvP in `marksmanship-pvp.md` (BM PvP is a large part of that file).

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). BM was reworked three times: CC2 (pet scaling via Spirit Bond, Bestial Wrath kept at 30%), CC3 (Bestial Wrath removed; Coordinated Assault, Kill Command, Baited Shot added), 1.18.1 (Baited Shot removed, **Bestial Wrath returned**, Scent of Blood, Kill Command reworked to a TBC-style capstone). Each section says which kit it is for.

## Overview

- **Role**: ranged DPS whose pet is a major damage source ("Around 60% of the damage belongs to the hunter going deep BM" [Skurridizo (player, four 60 hunters, two hunter YouTube channels), 2026-03-13](https://forum.turtlecraft.gg/viewtopic.php?p=170748#p170748); "the pet ... is still about 1/4th or 1/3rd of the BM hunter's output" [Toxo (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148472#p148472)).
- **Strengths (sources)**: best leveling/solo spec in the game ("BM is the best spec (across all classes) for leveling" [Ragetto (player), 2024-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=106305#p106305); "BM has the highest performance independant of gear" [Steakhouse (player), 2025-02-01](https://forum.turtlecraft.gg/viewtopic.php?p=118591#p118591)); the pet off-tanks dungeons ("the pet can serve as a clutch off-tank ... where the main tank died and the pet took over" [SvenS2 (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173875#p173875)); post-1.18.1 pets are CC-immune under Bestial Wrath and ignore PvP dampening.
- **Weaknesses (sources)**: raid scaling — "Only Spirit Bond actually scales with gear. And that scaling is simply not enough for late-game content" [Skurridizo, 2026-03-09](https://forum.turtlecraft.gg/viewtopic.php?p=170469#p170469); pet survival in raids ("almost no healers keep pet frames visible ... Mend Pet ... is extremely inefficient", same post; Kara40 "punishes it heavily"); mana-hungry rotation on the CC3 kit ("very mana hungry and damage is average" [SvenS2, 2025-08-22](https://forum.turtlecraft.gg/viewtopic.php?p=147656#p147656)); no AoE ("The only AoE pet ability is Gorilla Thunderstomp. It is not viable" — Skurridizo); brings "no utility to the raid, only raw damage" [Calli (player), 2025-07-28](https://forum.turtlecraft.gg/viewtopic.php?p=141850#p141850); a bloated tree — "there's not a single point to spare on any utility talent, not even Intimidation" and the 1.18.1 row 6 has "a total of 9 talent points" [Lane13 (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170490#p170490).
- **Content**: leveling and solo — **favored** (consensus); dungeons — favored ("BM hunter is usually top DPS throughout leveling dungeons" — SvenS2); raids — **niche/contested** on every kit; PvP — favored post-1.18.1 (see PvP file); hardcore — the BM defensive talents are "safer in HC" [Steakhouse, 2024-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=106303#p106303).
- **Community standing in raids**, time-ordered:
  - CC2 (Dec 2024): "none of the top 25 hunters on patchwerk are BM, and the difference between n1 and n 25 is over 500dps" [amanagor (player), 2024-12-03](https://forum.turtlecraft.gg/viewtopic.php?p=111060#p111060); "Beast mastery is really underperforming unfortunately, but it always has been" [Bigsmerf (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114199#p114199). Counter: "I top dps on Nefarian as BM in prebis blues + few epics" [Steelx (player), 2024-12-03](https://forum.turtlecraft.gg/viewtopic.php?p=111078#p111078) (pug context).
  - CC3 (Aug–Dec 2025): "BM doesn't feel very fun to play this patch. Awkward gameplay, very mana hungry and damage is average" [SvenS2, 2025-08-22](https://forum.turtlecraft.gg/viewtopic.php?p=147656#p147656); "I dont even think the spec can match MM numbers ... with the current spirit bond scaling" [Jiav (player), 2025-08-18](https://forum.turtlecraft.gg/viewtopic.php?p=146762#p146762); vs "it is the best Hunter talent tree by far nowadays but tough to start playing decent" [Skurridizo, 2025-09-18](https://forum.turtlecraft.gg/viewtopic.php?p=152203#p152203) and "i juiced up that spell very well in my last raids ... a lot of BM hunters perform very badly due of them rarely using baited shot" [Nalos (player), 2025-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=160458#p160458). **Contested.**
  - 1.18.1 (Mar–Apr 2026): "I like the updated BM. It's much, much better now" [SvenS2, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171498#p171498); "BM hunters are very strong in PvP" [Halfgeek9 (player), 2026-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=175410#p175410); but "The new BM tree wont fix the issue ... Spirit bond needs to be adjusted" [Jiav, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171364#p171364) and Skurridizo (Mar 2026) says he now raids Kara40/Naxx as Survival because BM "is overshadowed by Survival". No post-1.18.1 raid log for BM exists in the sources.

## Official kit timeline (staff)

| Date | BM changes | Source |
|---|---|---|
| 2024-10-12 (CC2) | Swift Aspects (10% proc, 3–15% attack speed); Endurance Training also +6–30% of your Stamina to pets; Thick Hide +12/24/36% of your armor; **Elusiveness** (20/40% of your resistances, +2/4% dodge); Pathfinding merged into Bestial Swiftness (+6% Cheetah/Pack, +3% pet attack speed); Improved Mend Pet +20/40%; **Bestial Precision** (+4/8% pet hit, +6/12% spell hit); Intimidation = +50% pet threat for 8 s even if stun resisted; **Spirit Bond** 12/25% RAP → pet AP, 7/15% → pet SP, heal every 5 s, moved to row 6; Bestial Wrath 50% → 30% | [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102967#p102967) |
| 2024-12-20 | Bestial Precision +5/10 pet weapon skill ("pets' glancing blows are way less punishing") | [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460) |
| 2025-07-25 (CC3, live 2025-08-15) | Endurance Training 1–5% and Thick Hide 4/7/10% (nerf: "amplify the stats they inherit"); Bestial Swiftness removed → **Coordinated Assault** (row 3 keystone: Arcane/Steady/Raptor Strike hit makes the pet's next attack within 6 s add 30% of its AP, once per 3 s); **Pathfinding** back (row 3, 3/6% Cheetah, 15/30% pet speed); Bestial Discipline also −10/20% pet special-ability cooldown; Bestial Precision spell hit 9/18%; Intimidation no longer a prerequisite; **Kill Command** (row 5: removes CC from the pet, next 2 pet abilities within 10 s guaranteed crit +50% crit damage, 1 s GCD, 5% mana, 12 s cd); **Bestial Wrath removed** → **Baited Shot** capstone (instant 125% weapon damage, target takes +15% from pet, pet attacks give 5 focus for 8 s; usable only after a pet crit) | [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) |
| 2026-01-23 (1.18.1, live 2026-03-20) | "the changes did not hit the mark"; Endurance Training 2–10%, Thick Hide 7/14/20% ("Pets have been too fragile in open world content"); **Scent of Blood** (row 5, 3 ranks: 5/10/15% chance on your attacks to enrage the pet +40% for 8 s); **Bestial Wrath returns** (row 5: Scent of Blood effect for 18 s, "cannot be stopped unless killed", 1.5 min cd, 12% base mana, no GCD); **Kill Command** capstone: "pet to instantly attack for 50% of its attack power. Can only be used after the Hunter lands a critical strike on the target" (8 s cd, 5% mana, 45 yd, no GCD); **Baited Shot removed** ("The barbeque is over") | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| 2026-03-19 revision | Coordinated Assault "Tooltip fixed to match the actual effect. Lowered from 30 to 20%"; Kill Command 50% → **80%** of pet AP | same post, revision block |
| 2026-03-24 hotfix | Scorpid Poison stacking damage calculation fixed (a BM says −300–400 DPS) | [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139); [Topmoo (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172191#p172191) |

Player-verified mechanics: Coordinated Assault "is calculated with the hunter's melee attack power" [Skurridizo, 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170517#p170517) (single source, on the CC3 kit); Baited Shot gains nothing from Mortal Shots/Hawk Eye/Efficiency and shared a cooldown with Aimed/Arcane despite changelogs saying otherwise [Jiav, 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146171#p146171), [Thule (player), 2025-09-05](https://forum.turtlecraft.gg/viewtopic.php?p=150349#p150349); Kill Command (CC3) "sometimes doesnt trigger at all" [Jiav, 2025-08-15](https://forum.turtlecraft.gg/viewtopic.php?p=145937#p145937) and did not fire from autocast Bite [Plagues2 (player), 2026-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=170980#p170980); scorpid poison did not scale with Spirit Bond in Nov 2024 (bug 9369) [Juzam (player), 2024-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=107692#p107692).

## Talent build

### CC2 kit (Nov 2024 – Aug 2025): deep BM + 11–22 MM

- SvenS2's endgame link (opaque): `https://talents.turtlecraft.gg/hunter?points=FQAYBoAoQCQQAAAoCoQBAoACAAAAAAAAAAAAAAAAAAA=` — "the build I'm rocking and I've seen other BM hunters use ... even with Broken Tooth, that 40% ain't enough to keep Frenzy constantly up" [SvenS2, 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130862#p130862); last 2 points: Improved Steady Shot (DPS) or Frenzy to 4 (tank pet) or Intimidation→Bestial Wrath (utility) [SvenS2, 2025-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=131377#p131377).
- Named picks: Unleashed Fury 5, Ferocity 5, Frenzy 2–4 ("That last point has somewhat diminished returns, especially for people using pets with high attack speeds" [Bob022 (player), 2024-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=108662#p108662)), Bestial Precision 2 ("hit and weapon skill" — the only non-DPS BM talent worth it per Skurridizo), Spirit Bond 2, Bestial Wrath 1 (skipped by most raiders: "for PvE people mostly skip it in favor of Improved Steady shot" [SvenS2, 2025-08-04](https://forum.turtlecraft.gg/viewtopic.php?p=143123#p143123)); MM: Lethal Shots 5, Efficiency, Steady Shot 1, Mortal Shots 5 ("You need steady and mortal shots 5/5" [Jiav, 2025-08-29](https://forum.turtlecraft.gg/viewtopic.php?p=149066#p149066)).
- Alternative for pet damage: **29/22 BM/MM** reaching Spirit Bond and Improved Steady Shot [Skurridizo, 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170517#p170517).

### CC3 / 1.18.0 kit (Aug 2025 – Mar 2026)

- Links: `https://talents.turtlecraft.gg/hunter?points=FAAaRoQoBBQQB-AoEoABAg-` [Illyria (player), 2025-08-22](https://forum.turtlecraft.gg/viewtopic.php?p=147624#p147624); `https://talents.turtlecraft.gg/hunter?points=FQAYBoQoBCQQB-AoCoQBAo-` [SvenS2, 2025-08-22](https://forum.turtlecraft.gg/viewtopic.php?p=147656#p147656) and `...?points=FYAQBoQoBCQQB-AoCoQBAo-` [SvenS2, 2025-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=149392#p149392). Image-only builds in [Dezhan (player), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145015#p145015) ("you're forced into building it like this") and [SvenS2, 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145025#p145025). Contents of the links are not decodable from the forum text — treat as opaque.
- Frenzy: "With Kill Command you can also safely stay at 2 value points in Frenzy" [SvenS2, 2025-08-04](https://forum.turtlecraft.gg/viewtopic.php?p=143123#p143123).

### 1.18.1 kit (Mar 2026 onward) — thin

- Post-patch leveling/raid draft links: BM/MM (Mortal Shots) `https://talents.turtlecraft.gg/hunter?points=FQAYAoAoZBCYB-AoAoJDAo-`, BM/MM (Endless Quiver) `...?points=FQAYAoBoZBCoB-AoAoJDQ-`, pure BM `...?points=FoAYBoCoZBSoB-AoAo-` [Sylvestro1 (player), 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171462#p171462) (asked, not validated). Replies: drop Lethal Shots for Pathfinding + Bestial Discipline for leveling, then "Lethal Shots may not be that bad actually, since the new Kill Command requires you to land a crit" [SvenS2, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171480#p171480); "Bestial Discipline is pretty much mandatory especially for early tier gearing as BM (scorpid 5 stack poison is best pet damage you'll ever get)"; "5 Frenzy is overkill" [Gorlocktheglock (player), 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171478#p171478); "2-3 points into Frenzy is generally enough ... so long as you have a fast attacking pet" [SvenS2, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171464#p171464).
- Hybrids lose Kill Command (capstone) — [Tomogwarrior (player), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171530#p171530).
- Bot default (**derived**, not a sourced 51-point list): BM 31+: Endurance Training / Swift Aspects (row 1), Thick Hide + Improved Revive Pet or Improved Mend Pet (row 2), Coordinated Assault 1 + Unleashed Fury 5 + Pathfinding 2 (row 3), Ferocity 5 + Bestial Discipline 2 (row 4), Bestial Precision 2 + Scent of Blood 3 + Bestial Wrath 1 + Frenzy 2–3 (rows 5–6 as reachable), Spirit Bond 2, Kill Command 1; MM: Lethal Shots 5, Efficiency 5, Mortal Shots 5 or Improved Stings filler. Validity for 1.18.1: **unknown**.

## Stat priority

- Same ranged stats as MM (hit to cap, then agility/AP/crit/haste — see `marksmanship-ranged-dps.md`), with the note that **RAP is what feeds the pet** through Spirit Bond: "Beast Mastery benefits most from Ranged Attack Power. However many items in [Naxx/Kara40] trade attack power for critical strike. This improves the hunter's personal DPS but does almost nothing for the pet" [Skurridizo, 2026-03-09](https://forum.turtlecraft.gg/viewtopic.php?p=170469#p170469). Post-1.18.1 hunter crit also matters because Kill Command needs a hunter crit (SvenS2, above) and Scent of Blood procs "on your attacks".
- Pet-damage items (pre-1.18.1 list): Beastmaster's (T0.5) chest/head/shoulder/hands/feet/belt/bracers/pants (item IDs 22060, 22013, 22016, 22015, 22061, 22010, 22011, 22017), AQ20 Hunter's set (main hand 21401, ring 21402, cloak 21403), Breastplate of Beast Mastery (+3% pet damage, 5% health, 2% crit), Ferra's Collar (trinket) and neck 83233 — total "13% damage, 4% additional crit and 50 attack power" for the pet [Arcanex Ota (player), 2024-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=102664#p102664), [Radiantogryn (player), 2024-10-07](https://forum.turtlecraft.gg/viewtopic.php?p=102698#p102698); T1/T2/T3 set bonuses also buff pets [Atreidon (player), 2024-10-07](https://forum.turtlecraft.gg/viewtopic.php?p=102678#p102678); Orc +5% pet damage. But "an item giving +9 agility is already better than that pet-damage bonus" once past BWL (Skurridizo, Spanish post). Breastplate/Unseen Path bonuses need line of sight to the pet [Lane13, 2025-12-14](https://forum.turtlecraft.gg/viewtopic.php?p=162795#p162795).
- Enchants/consumables as MM; plus Juju Might/Power on the pet; Blessing of Kings and Agility totem raise pet crit (Skurridizo, Sep 2025).

## Single-target rotation

### CC2 kit (Nov 2024 – Aug 2025)
Identical to MM (AA→Steady→AA, Multi on cd) with the pet doing more: "BM is still Auto Shot > Steady Shot enjoyer mostly" [Calli, 2025-09-09](https://forum.turtlecraft.gg/viewtopic.php?p=150974#p150974). Bestial Wrath on cooldown if taken; Intimidation as a pet taunt.

### CC3 / 1.18.0 kit (Aug 2025 – Mar 2026) — sourced
1. Pet attack; Hunter's Mark.
2. **Kill Command** on cooldown (12 s) to guarantee the pet's next two ability crits — then **Baited Shot** the moment it lights up ("It feels super awkward to Kill Command (for known crit) > Baited Shot" [kalevala206 (player), 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146300#p146300); "Kill Command>Sausage Shot" [Kerenis (player), 2025-09-10](https://forum.turtlecraft.gg/viewtopic.php?p=151184#p151184)). Uptime achieved: "81% of the battles while using an unbuffed 1.5 attack speed scorpid ... 95% ... with Blessing of Kings and Agility totem" [Skurridizo, 2025-09-18](https://forum.turtlecraft.gg/viewtopic.php?p=152203#p152203).
3. Do **not** Arcane Shot while waiting for Baited Shot — they shared a cooldown and Arcane "can block Baited Shot procs" [Cnas (player), 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146206#p146206).
4. Steady Shot after each Auto Shot (procs Coordinated Assault); Multi-Shot on cd.
5. Serpent Sting only if you "want to speedrun deleting that mana bar" [Toxo (player), 2025-08-16](https://forum.turtlecraft.gg/viewtopic.php?p=146166#p146166).
6. Wind serpent burst: Kill Command → two Lightning Breaths → Baited Shot ≈ 2k even on plate (Skurridizo, PvP context).

### 1.18.1 kit (from 2026-03-20) — derived from staff + early player notes
1. Pet attack (scorpid/wind serpent), Hunter's Mark; **Bestial Wrath** at the pull (18 s enrage, no GCD, 1.5 min cd) and on cooldown [staff].
2. **Kill Command** whenever it is usable (after any hunter crit; 8 s cd; no GCD) — "Steady has the benefit of fishing for crits so you can activate Kill Command" [SvenS2, 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171593#p171593). Note 45 yd range and line of sight to the pet [Lane13, 2025-12-14](https://forum.turtlecraft.gg/viewtopic.php?p=162795#p162795).
3. Auto Shot never clipped; **Steady Shot** after each auto (crit fishing + Coordinated Assault) [SvenS2, Lane13].
4. **Arcane Shot** on cooldown with mana ("pretty good now ... damage will be similar or higher than steady", Lane13) — it also procs Coordinated Assault ("Arcane's cd is 6sec", SvenS2).
5. Multi-Shot on cd; Serpent Sting dropped if mana is short ("drop Serpent Sting all together, it costs almost as much as 2 Steady Shots", SvenS2).
6. Scent of Blood procs need nothing from you (passive).
7. Aspect of the Viper (56+) during long fights when mana < ~20% — "So far for PvE I always have it on, even vs elites" while leveling [SvenS2, 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171593#p171593); in raids Hawk is required for damage (see MM playbook).

## Multi-target / AoE

- None worth a rotation change: gorilla Thunderstomp "200–320 damage, 40 s cooldown ... unviable" (Skurridizo, Spanish post); Multi-Shot only. 2–3 targets: Multi-Shot on cd, keep Kill Command on the main target. 4+: MM's Volley (3 s cast post-1.18.1) if talented; otherwise stay single-target. **Gap** for post-1.18.1 numbers.

## Cooldowns and resources

- Bestial Wrath (1.18.1): offensive **and** defensive — pet "cannot be stopped unless killed"; PvP players save it for CC-breaks ("Regardless, BM is still good in BG's as well, because you can escape CC and roots/slows with bestial wrath" [Tortusenjoyer (player), 2026-02-28](https://forum.turtlecraft.gg/viewtopic.php?p=169581#p169581)); killing the pet ends it [Mdzielak (player), 2026-02-28](https://forum.turtlecraft.gg/viewtopic.php?p=169590#p169590).
- Kill Command (CC3) doubled as the pet CC-break every 12 s — "you have pet cc removal on a 15 sec cd as a mm pvp hunter too" [Atreidon (player), 2025-08-04](https://forum.turtlecraft.gg/viewtopic.php?p=143068#p143068); removed in 1.18.1 (Lane13: "won't be able to do that next patch").
- Intimidation: 1-minute pet stun/threat buff; in dungeons use it to make the pet re-take a mob [Steakhouse, 2024-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=106303#p106303).
- Mana: the CC3 rotation "burns through mana much faster" (Toxo); Tallstrider aura, Blessing of Wisdom, mana potions/tea; Aspect of the Viper post-1.18.1. Kill Command 5% base mana, Bestial Wrath 12%.
- Revive Pet: Improved Revive Pet lets you "res your pet in combat with as little as a conc shot if you're far away, or with scare beast / freeze trap" (Steakhouse); "Why revive pet? ... I rather put on hp" [Cabum (player), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145034#p145034) — contested for raids.

## Role strategy

- Pet threat in raids: Scorpid poison bonus threat + Kill Command "puts the threat onto your pet" — get Blessing of Salvation on the pet, use a wind serpent with a weak tank, or Tranquil Air group [Atreidon, 2026-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=174014#p174014); dismiss + recall resets pet threat [Lane13, 2026-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=174020#p174020). Solo: Growl on autocast; Intimidation; Improved Mend Pet.
- Position the pet with Take Position behind the boss; on Nefarian use the CC-break immediately after fears (CC3) [Lane13, 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170522#p170522). Scorpid is useless on "6 out of 9 bosses" of Kara40; bring a wind serpent as the second stable pet (Skurridizo).
- Dungeon off-tank: put the pet on a runaway mob or the healer's add; Druids of the Fang in WC sleep the closest non-threat target — back off and let the pet eat it [SvenS2, 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173875#p173875).
- Never swap pets mid-fight (impossible since CC3) and never swap at Brambleclaw right before a fight (1-minute lock).

## Gear, enchants and consumables

As MM plus: T2 5-piece pet bonus needs no line of sight [Lane13, 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169839#p169839); T3 4-set +50 AP to hunter and pet (1.18.1, Skurridizo); the pet-damage item set above; Juju Might/Power and Scrolls for the pet; feed before every boss. Orc Command (+5% pet damage) is the PvE racial pick for BM "if you're an Orc, it gets even better" (Arcanex Ota) — but "the current n1 hunter on patchwerk is undead ... It's most likely a skill issue" [amanagor, 2024-12-03](https://forum.turtlecraft.gg/viewtopic.php?p=111060#p111060).

## Common mistakes

1. Letting the pet die (Shadowflame, cleaves) and losing all buffs — reviving costs cast time and mana, and the pet returns unhappy ("The pet dying ... losing happiness is a DPS loss but this is way more punishing for BM" [Lane13, 2025-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=160526#p160526)).
2. Not using the capstone: "a lot of BM hunters perform very badly due of them rarely using baited shot, and not even try to manually activate it with KC" (Nalos, CC3 kit); post-1.18.1 equivalent: sitting on Kill Command/Bestial Wrath.
3. Putting Claw on a scorpid/wind serpent and focus-starving the poison/breath (Daoc2001, see `pets.md`).
4. Using the wrong pet for the boss (scorpid on poison-immune Kara40 bosses).
5. Ripping threat with Kill Command + scorpid on a weak tank without Salvation.
6. Bringing a pet into fights the raid leader banned pets from; forgetting the pet is out.
7. Spending points in 5/5 Frenzy or Improved Eyes of the Beast instead of damage/hit talents (Bob022, Gorlocktheglock).
8. Running Serpent Sting every pull as BM (mana).

## Sources and validity

| Recommendation | Agreement | Validity |
|---|---|---|
| Scorpid = best BM raid pet (poison scales with Spirit Bond SP), wind serpent second | consensus (Skurridizo, Elfje, Gorlocktheglock, Kerenis) | all kits; poison calc hotfix 2026-03-24 lowered it (Topmoo) |
| Kill Command → Baited Shot loop; don't Arcane while waiting | consensus (Skurridizo, Nalos, kalevala206, Cnas, Kerenis) | **CC3 kit only — obsolete after 2026-03-20** |
| Bestial Wrath on cd + Kill Command after hunter crits + Steady/Arcane filler | derived from staff; fragments (SvenS2, Lane13) | post-1.18.1, **unknown** |
| Frenzy 2–3 points; Lethal Shots useful post-1.18.1 | consensus (Bob022, SvenS2, Gorlocktheglock) | CC2–1.18.1 |
| BM raid viability | contested on every kit (amanagor/Bigsmerf/Jiav vs Steelx/Skurridizo/Nalos) | — |
| Pet threat fixes (Salvation, wind serpent, dismiss/recall) | single thread, two authors agree | post-1.18.1 |

Threads used: t18724, t21282, t20870, t15105, t5763, t19167, t24302, t23291, t22787, t24360, t24369, t21259, t20981, t21702, t24427, t21831, t20667, t24239, t16284, t17698, t22842, t24713, t24349, t24389, t23657 (`extracted/forum/f45-hunter/`); staff posts in `extracted/forum/f63-patch-notes-changelog/t15157-*.md`.
