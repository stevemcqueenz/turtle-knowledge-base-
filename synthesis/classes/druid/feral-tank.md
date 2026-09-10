# Druid — Feral — Tank (bear)

Feral Combat bear tanking at 60 (dungeons, 20-man and 40-man raids). Cat DPS is `feral-melee-dps.md`; bear flag-carrying/PvP is `pvp.md`; dungeon tanking while leveling is `leveling.md`.

Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Bear was reworked in class-changes batch 2 (1.17.2, Oct–Dec 2024), revised 2025-03-30 and in 1.18.0 (2025-07-25), and **nerfed in 1.18.1** (Maul −15% threat, Savage Bite −12% threat).

## Overview

- **Role**: main tank / off tank. Highest armor and HP pool, no block/parry, crit- and crush-susceptible, best multi-target snap aggro via Swipe + Maul queue.
- **Strengths (sources)**: threat — "Bear has a niche as a highest threat comparably squishy tank. Very good for sweaty guilds with super high DPS" [Noephix (player, endgame raider), 2025-06-13](https://forum.turtlecraft.gg/viewtopic.php?p=135578#p135578) (pre-1.18.1); staff: "both Bear and Cat are performing well, Bear even more than we imagined" [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460); group aggro — "bear tanks are ideal for multi-enemy fights over warriors since they're simply better at group aggro than a warrior while having more raw durability than a paladin ... Anub'Rekhan and Grand Widow Faerlina ... gather the trash up in fights like Noth" [Bayanni (player), 2023-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=43114#p43114); immunities — "For some fights druids are actually the ideal tank (can't be polymophed/hexed, can't be disarmed)" [Elesion (player, BWL off-tank), 2023-08-23](https://forum.turtlecraft.gg/viewtopic.php?p=58705#p58705); "With pre-BWL tanking gear I have more HP (and naturally way more armor) than our BWL-geared tanks" (same post).
- **Weaknesses (sources)**: "I don't have the -10% damage reduction against magical damage from defensive stance. I don't have a good spell interrupt like shield bash (many boss mobs are stun immune). I cannot stance-dance to avoid fears" (Elesion 2023-08-23); "Bears take over 2x the damage while having only around ~20% more HP than warriors ... bear can't parry or block and is a subject to crits and crushing blows ... Bear snap threat is way worse than paladin's" [Noephix (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) (post-1.18.1); no in-form Barkskin until batch 2 (Barkskin (Feral) added 2024-10-12); the camera — "I was seeing a giant bear rectum 90% of the time" [Akos1896 (player), 2024-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=101361#p101361).
- **Content it excels at**: 5-man dungeons ("super viable and completely normal", Elesion 2023-08-23); 20-man raids ("Druids main tanking for 20-people raids is still completely viable and somewhat common"); AoE/trash pulls; fear-immune positioning not required. Fights to avoid or needing support: "the only fights we shy away from druids are the fearbosses (magmadar, nefarian, onyxia, princess yauj, gluth) but that can easily be fixed with a priests fearward. As well as Maexxna & Loatheb because both those fights, while possible on a druid, are just much easier with a warrior" [Atreidon (player, raid tank), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102946#p102946) (f40 thread); "I've tanked every boss currently in the game with a druid. Some of them you need more support from the raid" [Reploidrocsa (player), 2024-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=103003#p103003); hard hitters need a defensive set: "Some bosses in bwl can hit you very hard ... so does twins in aq40 and bosses with limited healing like Erennius, maexxna or loatheb" [Reploidrocsa, 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115706#p115706).
- **Community standing**: **favored/alternative pre-1.18.1, contested post-1.18.1.** Pre: "It's completely viable and sometimes optimal in basically all content from dungeons to raids. A warrior will be better than you if played with an equal level of skill in most situations" [Bigsmerf (player), 2023-08-23](https://forum.turtlecraft.gg/viewtopic.php?p=58715#p58715); "druid can tank most bosses in raids ... you need to already be somewhat geared, where as warriors are the go-to tank for progression raids" [Zulnam (player), 2024-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=103027#p103027); "It's common knowledge by now that warrior tank is severely lacking compared to other tanks in threat department" (warrior forum, Feb 2026, see `../warrior/protection-tank.md`). Post-1.18.1: "bear sucks because threat was the only thing going for them and now it's gone ... Now there's literally no reason to bring a bear tank over warrior or paladin" (Noephix 2026-03-30) **versus** "out of the fastest 10 Kara guilds only 8 of them are using a bear as maintank" [Velanyr (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173162#p173162) and a 39-minute K40 video with a bear tanking [Hung (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168466#p168466). "we lost 15% threat from maul, 12% from Savage Bite, and they even silently removed a talent to give 15% dmg to Savage bite" [Wosator (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172003#p172003) — the "removed talent" claim is not in the staff notes (unverified).

## Official kit (staff)

- Batch 2 [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102966#p102966): Savage Bite threat 350%; Swipe 8% AP; Frenzied Regeneration 10 rage/s → 6/7/8% stamina per point, 6-min CD (was stronger; PvP nerf); Barkskin (Feral) ranks 44/52/60: next 5/10/15 melee hits −50% damage, −20% speed, 12 s, 10-min CD; consumables in forms; new talents Feral Swiftness, Ancient Brutality (rage on dodge), Open Wounds.
- [Dragunovi (staff), 2024-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=105804#p105804): Swipe 6% AP, threat 140%; Savage Bite threat 225%. [Dragunovi (staff), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776): Barkskin (Feral) physical-only.
- [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): Ancient Brutality 1/2/3 rage per second after a dodge (9 s ICD); Swipe 4% AP; Frenzied Regen 5-min; Savage Bite 80% weapon damage + 30; Grizzled Hide (T3 8-set) 15 s / 4 stacks / 2%.
- [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504): form-to-form shifting; Ancient Brutality 2 points (2/4 rage); Predatory Strikes 3/6/10% of total AP.
- 1.18.0 [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): Predatory Strikes now +7/14/20% to Claw/Rake/**Maul/Savage Bite/Swipe** (Savage Fury merged); Primal Fury row 3; Carnage; jujus/bandages in forms; Reshift; 2025-08-14 revision: "Enrage armor debuff fix".
- **1.18.1** [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071): **Maul threat −15%, Savage Bite threat −12%.** Idol swap triggers GCD. Post-release: Fang of Alichos usable in forms, Yoxtez +224 FAP [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608).

## Talent build

- **Current "meta tank build" link** (1.18.0 tree, 1.18.1-announced era): `https://talents.turtlecraft.gg/druid?points=BSAaAI-FAYYRaDQQIFQB-Ao` — "This is the meta tank build for the current patch of class changes. A lot of people ignore [Sylvan Blessing] because it is worded weirdly. But it's a really important talent" [Captain4k (player, "tank main (Bear, paladin, warrior) since 2008"), 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165907#p165907). The link is opaque; the post names Sylvan Blessing, Omen of Clarity, Furor. **Single source.**
- **Pre-CC2 cookie-cutter (obsolete tree)**: `https://talents.turtlecraft.gg/druid/1O3I6-UIK8FEDV-5` and the hybrid bear/cat variant `1O3I6-UIC8FEDV-53` — "Feral Aggression and Blood Frenzy are not skilled for a bear spec since they only benefit the cat playstyle ... put 3 into feral instincts, as it helps immensely with aggro and one into feral charge ... Extra armor is nice but 3% arent really needed" [Kairion (player), 2022-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=28953#p28953) (pre-1.18.1, pre-batch-2).
- Talents named by sources (no full 51-point list exists in text; unattributed rows are *inferred*):

| Tree | Talent | Points | Source |
|---|---|---|---|
| Feral | Feral Instinct | 3–5 | "helps immensely with aggro" (Kairion); "One point should be enough in the beginning" [Chev03, 2026-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=165791#p165791) |
| Feral | Thick Hide | 0–5 | "don't forget to spec into for the extra Armor" (Chev03) vs "3% arent really needed" (Kairion) — contested |
| Feral | Feral Swiftness | 2/2 (variant) | dodge; dropped in cat DPS spec (Snkx) |
| Feral | Feral Charge | 1/1 | "massively useful to quickly get into tauntrange and kick caster" (Kairion) |
| Feral | Sharpened Claws | 3/3 | crit = "double threat on that attack" [Elesion, 2023-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=60018#p60018) |
| Feral | Predatory Strikes | 3/3 | +20% Maul/SB/Swipe and 10% AP (staff 1.18.0) |
| Feral | Primal Fury | 2/2 | rage on crit — "synergy with Primal Fury ... 3 chances for some rage refunds" on Swipe (Elesion) |
| Feral | Savage Bite / Improved Enrage-type talents | as available | "enrage having a little attack speed buff when you use it (with a talent ofc)" [Bigsmerf, 2024-09-16](https://forum.turtlecraft.gg/viewtopic.php?p=101359#p101359) |
| Feral | Heart of the Wild | 5/5 | stamina in bear (inferred) |
| Feral | Ancient Brutality | 2/2 | rage on dodge — "You actually want a fair amount of dodge because of ancient brutality" [Drubarrymooer, 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115691#p115691) |
| Feral | Leader of the Pack | 1/1 | aura (inferred) |
| Feral | Berserk | 1/1 | "Berserk is 20% HP for 20s on 6min cd" [Elesion, 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83475#p83475) |
| Balance | Natural Weapons | 3/3 | 3% hit ("Hit (till 6% with natural weapons)" [Drubarrymooer, 2023-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=64887#p64887)) |
| Balance | Omen of Clarity | 1/1 | "gives you tons of threat when tanking from all the free swipes" (Captain4k) |
| Balance | Improved Thorns | 0–3 | "Reflective damage is good source of threat" [Xudo (player), 2023-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=77136#p77136) |
| Balance | Sylvan Blessing | 1–2 | Captain4k (above); leveling/self-heal mana |
| Restoration | Furor | 5/5 | 10 rage on entering bear (Captain4k) |

**Patch validity**: Captain4k's link is on the 1.18.0 tree (2026-01-22, before 1.18.1 went live); 1.18.1 changed no bear talent, only Maul/Savage Bite threat coefficients, so the build stands. Kairion's 2022 build predates Ancient Brutality/Feral Swiftness/Predatory Strikes rework — **pre-1.18.1, obsolete**.

## Stat priority

**Contested** — three orderings exist; all agree on hit cap, stamina, and that Defense is low value.

| Author (date) | Order | Notes |
|---|---|---|
| [Elesion, 2023-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=60018#p60018) | stamina always; then balance mitigation (armor/dodge/agi/def) vs threat (hit/crit/AP/haste) per fight | "Hitting the armor cap is quite easy to do on Turtle, even in pre-raid gear"; "Defense ... does very little for Druids (we don't block and we don't parry)"; "Haste ... one of the best threat-generation stats. Our main threat skill is Maul which is on the auto-attack timer (which is at a crawlingly slow 2.5s). Item budget wise 2% melee haste is equivalent to 1% melee crit"; "a crit actually means double threat on that attack for us" |
| [Drubarrymooer, 2023-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=64887#p64887) | Hit (till 6% with Natural Weapons) > Agi > armor > Stam; "Also mcp's" | MCP obsolete since batch 2 |
| [Drubarrymooer, 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115691#p115691) | armor till cap > stam > hit > agi+str; dodge valued for Ancient Brutality; "Outside of naxx, you generally don't worry about defense" | |
| [Reploidrocsa, 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115706#p115706) | normal bosses: "cat set and tank jewerly ... hit until cap, agi and stam"; hard hitters: "hit until cap, defense, stamina, armor" | fight-dependent two-set approach |
| [Inovatu, 2025-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=117477#p117477) | Stamina > Armor (to ~11–12k) > Hit > Attack speed/Crit > Agi/Str > Defense/Dodge | "Dont go for Dodge ... Attackspeed is really, really good for Bears because more Attackspeed the faster you hit with Maul" |
| [Atreidon, 2025-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=121720#p121720) | never prioritize vampirism: "You need to be as beefy as you can ... 50-80 healing per second is a drop in the bucket" | tanks deal "500-800 dps range. While often taking 800 or more DPS yourself" |

- Hit cap: 6% gear with Natural Weapons (Drubarrymooer 2023) or 5% (Eyeburn 2025, cat thread: "8% for hitcap, 3% for Natural Weapons"). Armor "cap" reached easily; Inovatu's target 11–12k armor. Defense cap not stated by any druid source (gap). Dodge: Drubarrymooer runs ~25% ("Fully raid buffed I can hit over 32% dodge, however I only run around 25% so I get hit enough to get more rage") [Drubarrymooer, 2023-05-01](https://forum.turtlecraft.gg/viewtopic.php?p=43979#p43979).
- Race: Tauren for 5% stamina + War Stomp (Drubarrymooer 2023-05-01; Captain4k 2026-01-22); "The 1% dodge from ne isn't great ... You don't generate rage from dodging" (Drubarrymooer 2023-05-01; pre-Ancient-Brutality).
- Weights: VanillaRatingBuster / Taladril's list / AngryCat sheet (see `feral-melee-dps.md`); numeric bear weights are not on the forum (gap). External guide recommended for fundamentals: warcrafttavern feral tank guide, "turtle is modified a bit, but most is still valid" [Dr Thrax, 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115719#p115719).

## Single-target rotation (threat)

No source posts a numbered rotation; the following is assembled from the t6870 Maul/Savage Bite discussion, macro pages and staff numbers.

1. Pre-pull: Barkskin (caster) then charge — "it's something to use on pull, then charge in. i wouldn't take the chance of shifting out of bear to use it" [Gentlebenrawr (player), 2023-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=41543#p41543); since batch 2 Barkskin (Feral) exists in form (staff 2024-10-12), so this is the pre-batch-2 workaround. Enter bear with Furor (10 rage), Enrage if safe, Feral Charge or Feral Faerie Fire (rank 1 is enough to pull [Terrydavis, 2026-01-19](https://forum.turtlecraft.gg/viewtopic.php?p=165608#p165608)).
2. Keep **Maul** queued on every swing — "Maul is more efficient per rage spent" [Rat2156 (player), 2023-04-27](https://forum.turtlecraft.gg/viewtopic.php?p=43438#p43438); "Maul does 2.5 times the threat per point of rage at my gear levels" [Kokumuo (player), 2023-05-02](https://forum.turtlecraft.gg/viewtopic.php?p=44136#p44136). Macro (`Druid_Bear_Macros.md`, community wiki): startattack + Maul.
3. **Savage Bite** as the rage dump and on every Omen proc: "Savage Bite is more efficient per GCD ... if you have so much excess rage that you can afford to spam Savage Bite, do so" (Rat2156); "SB is always better on an Omen proc" [Kokumuo, 2023-04-27](https://forum.turtlecraft.gg/viewtopic.php?p=43434#p43434); "Bear in endgame usually has excess rage ... Savage bite does exactly that" [Kairion, 2023-04-27](https://forum.turtlecraft.gg/viewtopic.php?p=43424#p43424). Wiki macro gates Savage Bite at ≥35 rage. Savage Bite = 80% weapon damage + 30, threat 225% (staff) then −12% in 1.18.1.
4. **Omen of Clarity procs**: a queued Maul eats the proc. "press escape, then press savage bite ... Pressing escape clears the maul queue" [Drubarrymooer, 2024-01-04](https://forum.turtlecraft.gg/viewtopic.php?p=83639#p83639).
5. Faerie Fire (Feral) on cooldown, Demoralizing Roar once (Idol of the Apex Predator −2 rage).
6. **Swipe** even single-target when rage is spare for Primal Fury procs (Elesion 2023-08-30).
7. Threat after a taunt loss: "an enrage/maul/savage bite will generally pull them back if your taunt is on CD" [Drubarrymooer, 2023-05-01](https://forum.turtlecraft.gg/viewtopic.php?p=43976#p43976) — Savage Bite as "a 2nd taunt".

## Multi-target / AoE

- 2–3 targets: Swipe (hits 3; +1 with AQ20 3-set [Dragunovi (staff), 2025-06-30](https://forum.turtlecraft.gg/viewtopic.php?p=137624#p137624)) on cooldown with Maul queued on the kill target; Swipe = 4% AP, threat 140% (staff). Feral Charge to the caster (Kairion).
- 4+ targets: Swipe on every GCD; Demoralizing Roar; tab Maul. Improved Thorns adds reflect threat (Xudo 2023-11-13; Bigsmerf's reflect build with an AQ20 trinket [Bigsmerf, 2023-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=77177#p77177)). Bears are "simply better at group aggro than a warrior" (Bayanni 2023-04-26).
- Leveling variant: "range pull 2-3 mobs with a DoT like Moonfire or Insect Swarm, switch to Bear and Swipe to cleave em down" (Chev03 2026-01-21).

## Cooldowns and resources

| Cooldown | Use when | Source |
|---|---|---|
| Barkskin (Feral) | 15 melee hits −50% for 12 s, 10-min CD, physical only | staff 2024-10-12 / 2024-11-20 |
| Frenzied Regeneration | rage → HP, 5-min CD (batch 2 nerf); "Now after the patch with full rage it is healing around 25% health" [Xfraz (player), 2024-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=107713#p107713); "Frenzied Regenration is cool but mostly usable in PvP" [Kangaraxxus, 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83450#p83450) | pre-1.18.1 |
| Berserk (bear) | "20% HP for 20s on 6min cd" | Elesion 2024-01-02 |
| Enrage | rage on demand; armor penalty (fix 2025-08-14) | staff |
| Feral Charge | gap-close/interrupt, half the CD of Intercept (PvP thread) | Kairion; Jstansberry |
| Tranquility | called by raid lead; a bear with 0 healing power still uses it — "we run 4-5 druids though and each use it 2-3 times" | [Ghen (bear tank), 2025-08-29](https://forum.turtlecraft.gg/viewtopic.php?p=149160#p149160) |
| Trinkets | Hatereaver-type armor trinkets, KISS for bear ("Dont have Kiss, wouldnt use it as Cat anyway, only for Bear") | [Inovatu, 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84879#p84879) |

Resource rules: rage from damage taken, Furor (10 on shift), Enrage, Primal Fury crits, Ancient Brutality dodges (2/4 rage/s, 9 s ICD), Blood Frenzy (10 rage on Tiger's Fury? — cat-only; not a bear tool); "you don't generate rage from dodging" pre-batch-2 (Drubarrymooer 2023) is superseded by Ancient Brutality. Leaving bear "makes you lose all your rage" [Turboman, 2023-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=80543#p80543).

## Role strategy

- Two gear sets: a threat/cat-stat set for most bosses and a defensive set (defense/stamina/armor) for hard hitters (Reploidrocsa 2025-01-07; Elesion 2023-08-30 "swap them out for something else if physical mitigation is not a huge priority").
- Fear bosses need Fear Ward (Atreidon 2024-10-12); Maexxna is the classic warrior-preferred fight (Atreidon; Drubarrymooer concedes Maexxna, disputes Loatheb [Drubarrymooer, 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102953#p102953)).
- Progression: gear first as OT/DPS (Zulnam 2024-10-13); "AQ20 has a lot of druid tank gear, many BiS blues" (Zulnam, same thread per summary).
- Dungeons: Omen + Furor early, Sylvan Blessing for between-pull self-heals (Captain4k); stamina gear ("equip all the stuff with the most stamina it makes healing you a lot easier", Terrydavis 2026-01-19).
- Camera: shrink the model (Night Elf) or zoom out (Akos1896).

## Gear / enchants / consumables

- **Weapon**: Feral AP maces/polearms (14 FAP per ilvl above 60 — staff 2023-07-10); Might of Menethil 406 FAP (staff 2024-10-30); Atiesh (Druid) 600 FAP + 2% haste aura — "For druid tanks will be BiS. 2% melee haste is huge + 600 Attack Power" (player reply in t13797, pre-1.18.1); Herald of Woe 224 FAP + 1% haste (staff 2026-02-15); Mace of Unending Life (AQ20) 196 FAP + 50 armor + 1% dodge (staff 2023-10-17). MCP: obsolete (no forms since batch 2).
- **Tier**: bear sets are T2 and T3 [Dragunovi (staff), 2023-10-15](https://forum.turtlecraft.gg/viewtopic.php?p=71030#p71030); "the cat pieces are still great for threat tanking" [Bayanni, 2025-04-25](https://forum.turtlecraft.gg/viewtopic.php?p=128502#p128502); T3 8-set Grizzled Hide (staff 2024-12-20). Post-1.18.1 complaint: "bear t3 choke-full of useless and low-value stats like intellect or defense ... So the best current bear set in game by far is.... PvP t3" (Noephix 2026-03-30) — **single source**. Tier staggering (T1 cat, T2 bear, T3 bear, Kara40 cat) criticized [Lunadrix, 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128355#p128355).
- **Trinkets**: Hatereaver Cog (120 armor/12 stam/1% AS per t4254 summary), Smoking Heart of the Mountain question (t4254), Hatereaver/ES-type; KISS (Inovatu). Ghoul Skin Tunic named BiS tank chest by Elesion (t8230 reply, 2023).
- **Enchants**: "haste to head/legs, haste to shoulders, and either stam or stats to rings/neck. The 3% vamp trinket isn't bad, but you'll eventually replace it" [Bullsonparade20 (player), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121653#p121653); Wolfsheart helm enchant is a cat tool. Leveling: +9 stamina bracers, +70 armor cloak, leatherworking armor kits (Terrydavis 2026-01-19).
- **Pre-raid**: Devilsaur set for hit (Dr Thrax 2025-01-07); Elesion's 2023 dungeon item list (see cat playbook); Bigsmerf's reflect trinket from AQ20 (item 21488).
- **Consumables**: Mighty Rage Potion usable in form (staff 2024-10-21); jujus, Gift of Arthas, bandages in forms (staff 1.18.0); standard tank consumes `(vanilla baseline, not from turtlecraft.gg)`.

## Common mistakes

1. Stacking Defense: "an incredibly expensive way to boost dodge and add a little crit mitigation" (Elesion 2023-08-30; Elesion 2024-01-02 [p83475](https://forum.turtlecraft.gg/viewtopic.php?p=83475#p83475)).
2. Following the Icy Veins order Armor>Stam>Def>Agi>Hit (quoted as what "fresh 60s" do, [Greenaniline, 2025-01-06](https://forum.turtlecraft.gg/viewtopic.php?p=115628#p115628)); missing hit cap.
3. Letting a queued Maul consume Omen procs (Drubarrymooer 2024-01-04; Wafflecrusher p83637).
4. Shifting out of bear mid-fight (rage loss, no armor — Turboman 2023-12-10).
5. Prioritizing vampirism (Atreidon 2025-03-05).
6. Using 2022–2023 MCP/threat advice after batch 2.

## Sources

| Source | Authority | Date | Era | Agreement |
|---|---|---|---|---|
| t9223 stat priority (Elesion p60018, Fengxi p61830, Drubarrymooer p64887) | players; Elesion raid OT | 2023-08/09 | pre-1.18.1 | contested |
| t16939 stat priority (Drubarrymooer p115691, Reploidrocsa p115706, Inovatu p117477, Dr Thrax p115719, krylorandrax p116362) | players | 2025-01 | pre-1.18.1 | contested |
| t6870 Savage Bite vs Maul (Kairion, Kokumuo, Rat2156, Drubarrymooer) | players | 2023-04/05 | pre-1.18.1 (pre-batch-2 numbers) | consensus: Maul per rage, SB per GCD/Omen |
| [Captain4k p165907](https://forum.turtlecraft.gg/viewtopic.php?p=165907#p165907) build | player (tank main) | 2026-01-22 | 1.18.1-announced | single |
| [Kairion p28953](https://forum.turtlecraft.gg/viewtopic.php?p=28953#p28953) | player | 2022-11-11 | pre-1.18.1, obsolete | single |
| f40 t15154 (Atreidon p102946, Drubarrymooer p102953, Reploidrocsa p103003, Zulnam p103027) | players | 2024-10 | pre-1.18.1 | consensus (viable, fear bosses) |
| [Noephix p173102](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) vs [Velanyr p173162](https://forum.turtlecraft.gg/viewtopic.php?p=173162#p173162) | players | 2026-03-30 | post-1.18.1 | contested |
| Staff: Dragunovi p102966/p105804/p108776, Jamey p113460/p141159/p166071, Torta p124504/p171608 | staff | 2024–2026 | all | authoritative |
| t9053 (Elesion p58705, Bigsmerf p58715), t6587 Barkskin, t15801 Frenzied Regen, t17851 enchants, t5733 race | players | 2023–2025 | pre-1.18.1 | mostly consensus |
| Wiki `Druid_Bear_Macros.md` | community wiki | undated | — | vanilla baseline |
