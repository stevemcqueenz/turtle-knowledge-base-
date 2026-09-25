# Hunter — Ranged PvP (Marksmanship, BM/MM hybrid, deep BM)

Battlegrounds, world PvP and duels for the ranged hunter. The sources treat three ranged PvP builds as distinct: the classic **0/21/30 MM/Survival** trap-and-kite hunter (dead after CC2), the **30/21/0 BM/MM** "stun + Scatter Shot" hybrid (the recommended PvP build from Nov 2024), and **deep BM** after 1.18.1 (pets immune to CC under Bestial Wrath and unaffected by dampening). Survival melee PvP is a short section at the end. PvE playbooks: `marksmanship-ranged-dps.md`, `beast-mastery-ranged-dps.md`, `survival-melee-dps.md`; pets: `pets.md`.

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). PvP-relevant kit dates: 2024-09-04 Freezing Trap/Scatter Shot shared DR; 2024-11-01 CC2 (Wing Clip cooldown, Viper Sting nerf, Counterattack and Wyvern Sting removed, Trap Mastery moved deep); 2025-08-15 CC3 (Kill Command pet CC-break, no pet swap in combat); 2026-03-20 1.18.1 (Bestial Wrath back, Kill Command rework, Aimed Shot 2 s, Aspect of the Viper).

## Overview

- **Standing**: **niche and contested**, trending down until 1.18.1, then BM up. "hunters are complete bottom F tier in Turtle pvp" [Angelafarehart (player), 2025-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=118488#p118488) vs "you took Half my Life with T W O instant shots while kiting from long range. What more you want" (an opponent addressing Baek) [Staywhimsy (player), 2025-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=118367#p118367); "The diminishing returns change alone sent hunters from one of the worst classes in PvP to the absolute worst class in PvP ... I remain competitive as marksman hunter because im BIS" [Insanefool (player), 2025-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=160362#p160362); "geared hunter 3 shot warlocks outside of sl spec" [Ataika (player), 2025-08-31](https://forum.turtlecraft.gg/viewtopic.php?p=149647#p149647); "Shaman, Pala, Rogues are good classes for PVP. Hunters and Warriors are probably the worst" [Tomogwarrior (player), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171638#p171638); post-1.18.1: "Hunters are strong now, BM pets aren't affected by dampening so BM + Survival are doing pretty well" [Froghijab420 (player), 2026-04-13](https://forum.turtlecraft.gg/viewtopic.php?p=175013#p175013), "BM Pets wrecking havoc on full auto left and right" [Bazbee (player), 2026-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=175482#p175482), "my advice is to not touch the PvP scene here" [Insanefool, 2026-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=173823#p173823). Bots: expect to be a kiter/support in BGs, not a duelist, unless deep BM post-1.18.1.
- **Strengths**: "frost trap is the strongest slow in the entire game and you get that as a range class" [Terrydavis (player), 2026-01-19](https://forum.turtlecraft.gg/viewtopic.php?p=165609#p165609); Viper Sting pressure on healers; ranged shots have no pushback and cannot be kicked [Xudo (player), 2026-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=170036#p170036); counters ferals (Flare, Freezing Trap, Scare Beast) [Elesion (player), 2023-08-24](https://forum.turtlecraft.gg/viewtopic.php?p=58909#p58909).
- **Weaknesses**: the dead zone — "Anyone can literally just walk up to the hunter and their dps drops by 90%" [Tortusenjoyer (player), 2026-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=170027#p170027); "The trap combo is hunters only way to reliably get back to range" [Atreidon (player), 2024-09-05](https://forum.turtlecraft.gg/viewtopic.php?p=100718#p100718); no burst/instant damage ("hunter has too little instant casts and is forced to stand still" [Springboards (player), 2025-11-12](https://forum.turtlecraft.gg/viewtopic.php?p=159342#p159342)); Deterrence is "Terrible in PvP" against stuns/blind [Bigsmerf (player), 2025-07-30](https://forum.turtlecraft.gg/viewtopic.php?p=142264#p142264); Rapid Fire useless while moving (Springboards); Freezing Trap is dispelled by the PvP trinket on Turtle ("it is overwhelmingly common to get freezing trap dispelled by pvp trinket" [Tortusenjoyer, 2026-02-28](https://forum.turtlecraft.gg/viewtopic.php?p=169569#p169569)); rogues ignore freezes with Sweet n Crunchy Fruit Bread and slows with Sprint [Vrag (player), 2026-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=164294#p164294).

## Official PvP-relevant changes (staff)

| Date | Change | Source |
|---|---|---|
| 2024-09-04 | "Freezing Trap and Scatter Shot now share diminishing returns" — "a bugfix to behave blizzlike"; staff invited suggestions and warned about toxicity | [Akalix (staff), 2024-09-04](https://forum.turtlecraft.gg/viewtopic.php?p=100665#p100665) |
| 2024-10-12 (CC2) | Viper Sting −15% drain, 6 s cd; Wing Clip cooldown (3 s from 2024-10-21) and % weapon damage; Scorpid Sting −2% damage/−10% attack speed 20 s; Counterattack removed; Wyvern Sting removed; Trap Mastery to row 5 (3 pts); Improved Wing Clip 14/28/40% | [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102967#p102967) |
| 2024-11-01 | Hawk Eye back to row 3 (so 21-point MM builds keep Hawk Eye + 5/5 Mortal Shots) | [Dragunovi (staff), 2024-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=105804#p105804) |
| 2025-07-25 (CC3) | Kill Command removes CC from the pet (12 s cd); no pet swapping in combat or while feigning; Bestial Wrath removed | [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) |
| 2026-01-23 (1.18.1) | Bestial Wrath back (pet "cannot be stopped unless killed", 18 s, 1.5 min); Kill Command capstone (needs a hunter crit); Aimed Shot 2 s cast / 26 s cd; Improved Stings includes Scorpid slow; Aspect of the Viper | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| 1.18.1 | Pets do not receive the PvP dampening debuff (player reports; players ask for it) | [Bugranger (player), 2026-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=169733#p169733), [Bazbee (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175237#p175237) |

## Talent builds

### 30/21/0 BM/MM ("stun + Scatter") — recommended PvP build Nov 2024 – Mar 2026

- Author: Rank-13 PvP hunter Ragetto. Post-CC2 link: `https://talents.turtlecraft.gg/hunter?points=FYACBoAoJCQYAAFACoQBAoIAAAAAAAAAAAAAAAAAAAA%3D` — "The 30/21/0 build I use ... The pet hits a bit harder now, even though I had to drop 2 points from Frenzy. And what's also interesting is Swift Aspect - it procs a lot ... And Spirit Bond gives you 2% HP regen every 5 seconds now" [Ragetto (player), 2024-11-16](https://forum.turtlecraft.gg/viewtopic.php?p=108124#p108124); earlier variant `...?points=CoAaBoAoJAQYAAFACoQBAoIAAAAAAAAAAAAAAAAAAAA%3D` [Ragetto, 2024-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=104995#p104995). Explicit talents: Intimidation (pet stun), Scatter Shot, Hawk Eye 2, Mortal Shots 5, Swift Aspects, Spirit Bond, Frenzy 3 (not 5), Improved Stings for Viper drain. "before you reroll or give up on twow, I'd recommend trying the 30/21/0 spec. It's strong and fun" [Ragetto, 2024-11-16](https://forum.turtlecraft.gg/viewtopic.php?p=108124#p108124). Confirmed as the PvP meta by a BM specialist: "Who in this world wouldn't expect that Intimidation + Scatter Shot, with the right pet in PvP, is the best build?" [Skurridizo (player), 2025-11-27](https://forum.turtlecraft.gg/viewtopic.php?p=160904#p160904). **Consensus** among the PvP posters (Ragetto, Skurridizo, Sbingo: "for pvp a full 31 point MM tree isnt as good as a BM/MM mix" [Sbingo (player), 2026-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=173793#p173793)). Post-1.18.1 caveat: the hybrid loses Kill Command (BM capstone) and Bestial Wrath is row 5 (30 BM points reach it).
- Generic MM PvP advice: "if you pvp you must let down ps [Piercing Shots] and get imp slay [Improved Slaying]" [Foteinos (player), 2025-05-28](https://forum.turtlecraft.gg/viewtopic.php?p=133252#p133252) (single source); grab Improved Concussive Shot for leveling/PvP [Steakhouse (player), 2025-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=124134#p124134).

### 0/21/30 MM/Survival — obsolete after CC2

- The pre-CC2 trapper: 21 MM for Scatter, 30 SV for Deterrence/Counterattack/Trap Mastery/Improved Wing Clip. CC2 removed Counterattack and Wyvern Sting and moved Trap Mastery deep, so "in 1.17.2, [it] will become a stationary DPS turret in deep MM" [Ragetto, 2024-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=103825#p103825); a post-CC2 approximation `...?points=AAAAAAAAAAAAAAFACoQBAoIAAAAAYQYYVBBAbAAgAAA%3D` "though we're still missing Counterattack" [Ragetto, 2024-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=104995#p104995); Xudo's alternative PvP link `...?points=AAAAAAAAAAAAAAFoAoAAAoIAAAAAdAYYVAAADAAAAAA%3D` [Xudo (player), 2024-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=103588#p103588). "Taking Trap Mastery away from PvP spec is unfathomably bad design. Why do we need more trap resists?" [Dokkababecallme (player), 2024-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=103549#p103549).

### Post-1.18.1 MM 0/35/16 (decoded by Discord)

The forum KB said no post-1.18.1 MM PvP talent link existed. Discord decoded one: `-FAAoRDQoJDQgB-YQYYF` = **0/35/16** — MM 35 (Improved Concussive Shot 5, Lethal Shots 5, Hawk Eye 2, Aimed Shot 1, Swiftshot 3, Endless Quiver 2, Mortal Shots 5, Scatter Shot 1, Experimental Ammunition 1, Barrage 3, Improved Marksmanship 2, RWS 4, Lock and Load 1); SV 16 (Improved Slaying 3, Swift Reflexes 2, Entrapment 3, Improved Wing Clip 3, Survivalist 5) [single source, [[d:hunter#1492279311280115932]]]. The author (yaboikeenser) describes it as "MM pvp with survival entrapment talents + carve + deterrence": the decoded code has neither Carve nor Deterrence, so quote and code disagree on the SV points — flagged, code retained [single source, [[d:hunter#1484432155768524800]]].

### Post-1.18.1 Survival 8/5/38 (decoded by Discord)

The forum KB's gap #3 (no Survival PvP build) is closed. Discord has `FAD-F-YQaYDJTAbIQoB` = **8/5/38**: BM 8 (Swift Aspects 5, Improved Primal Aspects 3); MM 5 (Improved Concussive Shot 5); SV 38 (Improved Slaying 3, Swift Reflexes 2, Entrapment 3, Savage Strikes 2, Improved Wing Clip 3, Survivalist 3, Carve 1, Deterrence 1, Stinging Nettle 2, Surefooted 3, Killer Instinct 3, Trap Mastery 3, Lacerate 1, Vicious Strikes 2, Lightning Reflexes 5, Untamed Trapper 1) [single source, [[d:hunter#1489610500349231196]]]. The author was undecided between Improved Concussive 5 vs 5 BM points and between Entrapment / Improved Wing Clip weights [single source, [[d:hunter#1489645781106294905]]].

### Deep-Marksmanship PvP (pre-1.18.1)

Discord adds **0/31/20 (BG) and 0/24/27 (duels)** deep-MM PvP builds the forum KB lacked (only 0/21/30 and 30/21/0 were discussed): "In battle grounds I would go 0/31/20. for dueling 0/24/27 or 0/21/30. The only thing non-negotiable is having scatter shot." [single source, [[d:hunter#1171102722871799931]]]; a #pvp-general plan runs **0/31/20 or 5/31/15** [[d:pvp-general#1120255181372796948]].

### Deep BM (post-1.18.1)

- "Let's start with the fact that MM has become more difficult in the pvp game. So my advice to you is to go to BM" [Baek (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173363#p173363); "BM hunters are very strong in PvP. Pet scaling, enrage mechanic, they hit really hard and cannot be CC ... especially if u got the set bonuses for T1 & T2" [Halfgeek9 (player), 2026-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=175410#p175410). No link posted; use the BM raid build with Intimidation. Pre-1.18.1 counter-view: "You wouldnt go bestial wrath as a serious pvp player, as it locks you out of scatter and your pet didnt scale" [Atreidon, 2025-08-04](https://forum.turtlecraft.gg/viewtopic.php?p=143068#p143068) — superseded by the 1.18.1 pet-scaling/dampening situation. **Contested** (Insanefool: "PvP is also not about waiting for your BM pet to kill stuff").

## Stat priority (PvP)

- Stamina and hit matter more than in PvE; weapon skill "has no impact for pvp" [amanagor (player), 2025-06-25](https://forum.turtlecraft.gg/viewtopic.php?p=137000#p137000); no armor penetration means plate/leather-druid targets are "nearly hopeless" [Angelafarehart, 2025-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=118488#p118488).
- Ranged weapon: Nerubian Slavemaker "still generally superior" for PvP because "you don't get nearly as many chances to Steady in PvP" [FrankFankledank (player), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126982#p126982).
- Race (see table): PvP racials outweigh DPS racials.

| Faction | Best PvP race (sources) | Reason |
|---|---|---|
| Alliance | **Gnome** — "Only 1 min CD, infinite times i escaped from dead zone" [Anadrol (player), 2024-02-02](https://forum.turtlecraft.gg/viewtopic.php?p=86718#p86718); "Gnome is probably your best bet in regards to PvP" [Bigsmerf, 2025-03-25](https://forum.turtlecraft.gg/viewtopic.php?p=123657#p123657) | Escape Artist; Dwarf second (Stoneform vs Blind/poison — amanagor); Night Elf "by far is 1 of the worst hunter races for pvp" [Springboards, 2026-03-03](https://forum.turtlecraft.gg/viewtopic.php?p=169859#p169859), Shadowmeld "does not negate traveling spells" [Ataika, 2024-01-09](https://forum.turtlecraft.gg/viewtopic.php?p=84096#p84096) |
| Horde | contested: Tauren/Undead ("Orc is bad since they lost their 25% stun resist" [Springboards, 2025-04-05](https://forum.turtlecraft.gg/viewtopic.php?p=125497#p125497)); Orc ("Even 15% looks small, but it's the milliseconds you can spend to press potion" [Vargthar (player), 2025-04-13](https://forum.turtlecraft.gg/viewtopic.php?p=126604#p126604)); Troll for flag-carrier damage and Berserking stacking with Rapid Fire; "WOTF is useless for hunters, if you eat fears you are doing everything wrong" [Ataika, 2025-04-05](https://forum.turtlecraft.gg/viewtopic.php?p=125507#p125507) vs "best race for pvp as hunter is undead for will of the forsaken" (amanagor) | — |

## Core combos ("rotation")

1. **Opener / range control**: Hunter's Mark, pet attack (bat/spider/boar), Concussive Shot, Serpent Sting (rank 1 Viper Sting first on healers/dispellers: "using rank 1 viper sting ... to trap people into using more mana by dispelling than you would use to apply" [Nurincarinun (player), 2024-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=91290#p91290)), then Auto Shot + Multi-Shot + Steady/Arcane while standing still for "0,5 sec at 40 yd distance" between kites [Staywhimsy (player), 2025-03-11](https://forum.turtlecraft.gg/viewtopic.php?p=122276#p122276). Aimed Shot only from a Freezing Trap/Scatter or an unnoticed angle — casting on a target puts you on their target list [Atreidon, 2023-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=83232#p83232); post-1.18.1 Aimed is 2 s and "you can theoretically ... pull a couple of big aimed shots" (Insanefool).
2. **Melee on you — the trap combo**: Scatter Shot → Feign Death (pet on follow/passive first) → Freezing Trap → walk out to range → Viper/Aimed. "a popular pvp manuoveur for hunters is scatter shotting the target, feign death to drop combat, then place a trap and the scatter shotted target wanders into the trap" [Grizb37 (player), 2024-09-05](https://forum.turtlecraft.gg/viewtopic.php?p=100702#p100702). Since the DR fix the trap after a Scatter lasts "from 10 down to 5 seconds. For hunter with skilled trap duration from 13 to 6.5s" [Atreidon, 2024-09-05](https://forum.turtlecraft.gg/viewtopic.php?p=100699#p100699), so **place the trap first when possible** (Planning Ahead) and use Scatter to walk them into it, or Scatter → run rather than Scatter → trap. "I use the combination of the 3 steps of my trap dancing manually ... I probably do it quicker manually than using a macro" [Skurridizo, 2026-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=169225#p169225). Working macro (press twice): `/run PetPassiveMode()PetFollow()if UnitAffectingCombat"player"then CastSpellByName"Feign Death"end CastSpellByName("Immolation Trap")` [Spitfire33 (player), 2026-03-12](https://forum.turtlecraft.gg/viewtopic.php?p=170657#p170657); older: `/cast Freezing Trap` + `/script if UnitAffectingCombat("player") then CastSpellByName("Feign Death") end` + pet-passive line [Vliqta (player), 2022-10-05](https://forum.turtlecraft.gg/viewtopic.php?p=26783#p26783). Macros broke repeatedly (Jan 2026) — bots should sequence the three actions themselves.
3. **In melee without cooldowns**: Wing Clip (3 s cd; Improved Wing Clip 40% root at 3/3), Raptor Strike + Mongoose Bite ("With good 2h weapon it is decent damage" — Xudo, 2026-03-01), Intimidation (pet stun, 30/21/0), Deterrence vs warriors/rogues without cooldowns, Escape Artist (gnome) after Scatter. "Scatter shot > EA > break distance without wasting trinket or trap" [Ataika, 2024-02-01](https://forum.turtlecraft.gg/viewtopic.php?p=86678#p86678).
4. **Frost Trap** kiting after Feign Death; "Viper sting till you were oom" combos were nerfed (6 s cd, −15%) — apply Viper to several targets in big fights, do not spam it on one [Ragetto, 2024-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=103865#p103865).
5. **Deep BM post-1.18.1**: pet on the target, **Bestial Wrath** when the pet is CC'd or for the kill window, Kill Command after every crit, Steady/Arcane from range; "let the pet do the work while you stay out of harms way ... if it dies, resummon in 5s, mend, send it back in" [Springboards, 2026-03-03](https://forum.turtlecraft.gg/viewtopic.php?p=169860#p169860) (contested: "if you want your team to lose in a BG, this is how you should play" — Tortusenjoyer). Killing the pet ends Bestial Wrath (Mdzielak).
6. **Pet choice**: spider (Web) for non-BM; ZG bat (1.0 speed, vision block, −100 AP screech) or boar (Charge) for interrupts/burst; wind serpent vs paladins/druids [Springboards, 2024-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=91286#p91286); scorpid to block dispels is "pointless on twow" [Ataika, 2024-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=91287#p91287); "stop using True Shot Aura or Cats, specially if you are doing PVP" (Skurridizo, 2025-11-22).
7. **AB flag play**: Scatter+trap on a defender standing next to the flag, then cap — defenders should stand away from the flag [Atreidon, 2024-09-06](https://forum.turtlecraft.gg/viewtopic.php?p=100783#p100783); "Blizzard, rain of fire and Hurricane do not stop captures" but Holy Nova/Arcane Explosion/sapper do [Shockoladetwo (player), 2024-09-06](https://forum.turtlecraft.gg/viewtopic.php?p=100806#p100806).

## Cooldowns and resources

- Feign Death 30 s: pet on follow+passive first or you stay in combat [Annoying (player), 2023-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=42584#p42584); do not rotate the camera during the FD animation (Achaelys, 2022 bug list [p=25543](https://forum.turtlecraft.gg/viewtopic.php?p=25543#p25543)).
- Rapid Fire: only when the target is stationary/CC'd (Springboards); it stacks with Troll Berserking (Ataika).
- Mana: "hunters can also oom each other (and much faster than a priest or mage, as we have 40-50% less mana)" (Ragetto); Feign Death + Aspect of the Viper between fights post-1.18.1 [Tomogwarrior, 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171553#p171553); drink after FD.
- Trinket: keep the PvP trinket for stuns/blind; Deterrence + Aspect of the Monkey ≈ "43.75%" dodge, not 50% [Jiav (player), 2025-07-31](https://forum.turtlecraft.gg/viewtopic.php?p=142285#p142285).
- Cheetah: dazes on damage ("The cheetah receives a stun from direct damage, and then the shaman's shield hangs the stun for 3 seconds" [Baek, 2026-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=169052#p169052)); does not stack with boot speed enchants [Flexdraw (player), 2026-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=169046#p169046) (contested by Solveit).

## Match-ups (player claims)

- Warlock/Shadow Priest: "nearly impossible. You can't escape DoTs" [Dimastasc (player), 2025-08-31](https://forum.turtlecraft.gg/viewtopic.php?p=149628#p149628) vs "geared hunter 3 shot warlocks outside of sl spec" (Ataika) — contested; "hunters need to be able to counter warlocks and mages and they just cant" [Terrydavis, 2026-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=169033#p169033).
- Paladin: "we dont" (win) [Tacticalnelf (player), 2023-10-29](https://forum.turtlecraft.gg/viewtopic.php?p=74705#p74705); dispels Viper instantly.
- Rogue: opener from stealth is "basically over"; Flare and traps are the counter; Sprint bypasses Frost Trap (Vrag); Dwarf Stoneform vs Blind.
- Feral: hunter is "one of the better counters" (Elesion); shapeshift removes slows (Dimastasc).
- Warrior: Wing Clip parries/dodges are lethal since the cooldown (Diablowjob, 2024-10-18); Deterrence vs charge; Scatter → range.
- Mage: Arcane Missiles pushback shuts casts down (Angelafarehart); "Shooting don't receive pushbacks" (Xudo) — contested detail.

## Common mistakes

1. Scatter → trap without Planning Ahead/pre-placed trap (half duration since DR).
2. Feigning with the pet attacking (stays in combat) or trying to Aimed Shot on a moving target.
3. Using Bestial Wrath/Kill Command for damage when it is needed as the pet's CC-break ("hold on to Kill Command for the CC break" [SvenS2 (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143229#p143229)).
4. Standing in the dead zone; swapping to Wolf "to hit a mob twice" (mana) [Atreidon, 2026-01-24](https://forum.turtlecraft.gg/viewtopic.php?p=166262#p166262).
5. Spamming Viper Sting on one dispelling target.
6. Night Elf/Shadowmeld ambush builds — "Turtle gimped that" (Bigsmerf).
7. Trueshot Aura/cat pets in PvP (Skurridizo).

## Survival melee PvP (short)

"melee fights right now is who smoke the other first, but harder for you without a stun ... Ranged: you are as crap as a warrior without charge / intercept" (Laysson, 2025-05-14); "On turtle wow when you play survival hunter the whole play style appears to be suicide dive-bombing into everything" (Insanefool); in-combat Freezing/Frost traps are the main asset ("at least i can spam traps in combat to survive bit longer" [Soulforged23 (player), 2026-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=164296#p164296)); post-1.18.1 "BM + Survival are doing pretty well" (Froghijab420).

The forum KB's "no Survival PvP build link" gap is **closed by Discord**: the post-1.18.1 **8/5/38** build (`FAD-F-YQaYDJTAbIQoB`) is decoded above [single source, [[d:hunter#1489610500349231196]]]. Viability stays contested — "Survival is king pvp i think" (Leo) vs "just switched to BM for pvp. Its just...better" (Vaienna) vs "survival doesn't have much going for it in pvp" (Krulltak) [contested, [[d:hunter#1424115627353833502]]].

## Discord additions (post-1.18.1)

Folded from the archived `#hunter` Discord cross-read with `#pvp-general` (`staging/hunter-pvp/`). Era tags: **pre-1.18.1** (<2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 → 2026-03-19), **post-1.18.1** (≥2026-03-20). Every claim carries `[[d:hunter#<id>]]` / `[[d:pvp-general#<id>]]`, an era and an agreement tag.

### The ~2025-04 trinket change — the era's biggest hunter PvP nerf

The universal PvP trinket was redesigned (~2025-04) to remove **all** CC on a 3-min CD, **including Freezing Trap** — "this trinket change that all cc are dispellable really sucks for hunters"; "there is a reason why you couldnt trinket out of freezing trap in vanilla"; "Means it's not just the simple FD>trap>aimed shot rota anymore" [consensus, [[d:pvp-general#1370452815889174538]], [[d:pvp-general#1370726144814616629]], [[d:pvp-general#1370764527867658281]], [[d:pvp-general#1361238363776090212]], [[d:hunter#1476452767802593330]]]. The forum KB noted the trinket dispels Freezing Trap but did not isolate the change as a discrete ~2025-04 all-CC redesign; it should be promoted as **the single biggest hunter PvP nerf of the era**. Counterplay: pre-place the trap and use Scatter to walk them in; expect the trap to be dispelled; save your own trinket for the rogue's Kidney/Blind or a mage's Nova [consensus, [[d:hunter#1470106241157169264]], [[d:hunter#1470112309476200723]]].

### PvP dampening and the deep-BM question

Dampening applies to **all PvP including duels** [single source, [[d:hunter#1485349738449469510]]]. Post-1.18.1 players report **pets receive no dampened damage**, which is the mechanism behind deep BM [single source, [[d:hunter#1490803074963476650]]]; a later undated "stealth dampening change" was felt by MM [single source, [[d:hunter#1487217168977498152]]]. **No staff post confirms the pet exemption**, and smart teams kill the pet (it takes no resilience and "die[s] pretty quickly"), making a pet-rez trinket "mandatory" for arena [contested, [[d:hunter#1492801526450884838]], [[d:hunter#1494186537129218099]]].

### Builds and rotation the forum lacked

- **Survival PvP 8/5/38** and **MM PvP 0/35/16** are decoded above (the forum's gap #3 is closed; single-source player codes).
- **Pre-1.18.1 deep-MM 0/31/20 / 0/24/27** added above.
- **Bestial Wrath is a PvP cooldown** — the pet's CC-break/immunity window, not a damage button; "BW is basically pvp, or if you want the dmg buff on pull" [consensus, [[d:hunter#1484198066343907419]], [[d:hunter#1466053583039496212]]]. Killing the pet ends it.
- **Pet training-point priority for PvP**: BiS DPS skill > needed resist > rank 8/9 Greater Stamina > leftovers into other resists/armor/dash/bite/claw [single source (guide writer), [[d:hunter#1438241842159423529]]]; older advice max stamina + a resist [single source, [[d:hunter#1059889358540386366]], [[d:hunter#1336163259002130442]]].
- **Post-1.18.1 BM PvP pet must have a sprint** [single source, [[d:hunter#1492651231305273414]]]; the **spider** is the most annoying PvP pet [single source, [[d:hunter#1491084492012654592]]]; for SV the spider is "a must" [consensus, [[d:hunter#1454765734562496595]]].
- **Engineering is mandatory** for serious hunter PvP: Iron Grenade as a universal CC, thorium grenade to break melee range, sapper charges; "Engineer is a must for any serious PvP" [consensus, [[d:hunter#1045527107918372884]], [[d:hunter#1359785441813069986]], [[d:hunter#1011330049057767544]], [[d:hunter#1362480243134304408]]].
- **Mana/consumables**: PvP trinket + Limited Invulnerability Potion + Feign Death to reset; Free Action Potion vs rogue/warrior openers; flasks are rare in PvP [single source, [[d:hunter#1491813464706912308]], [[d:hunter#1301973930600435826]]].
- **Ranged hit cap is 8.0%** at 300 weapon skill (corrected); +3 weapon skill is ~0.6% hit and +5 is the useful threshold [single source, [[d:hunter#1491594913136115732]]] — refining (not contradicting) the forum's "weapon skill has no impact for pvp" if "no glancing/parry effect" is the intended meaning.

### Standing, race and match-ups

- **Standing is gear- and date-dependent**: "hunter kind of loses every 1v1 in pvp" (2025-10, low gear) [single source, [[d:hunter#1425287154505875497]]] vs "the first time in twows history that bm is really viable in pvp" [contested, [[d:hunter#1453645768895234148]]]; post-1.18.1 "mm and bm hunters are good in pvp now" [consensus, [[d:hunter#1489572362868359298]]] but "if u dont have the BW CD you are a bit of a deadweight" [single source, [[d:hunter#1494186537129218099]]].
- **Racial**: keeps Gnome best Alliance but adds a Night Elf camp ("meld is bis for pvp") and a strong Tauren camp ("warstomp is best hunter racial, being able to stun someone in your deadzone/melee range, and then cheetah away"); undead for fear/Seduce vs locks [contested, [[d:hunter#1453792390098714936]], [[d:hunter#1166672654351212566]], [[d:hunter#1456421765013049395]]].
- **Match-ups** (Discord, cross-read `#pvp-general`): warrior favourable with cooldowns; rogue the worst melee matchup (the 0/35/16 MM build is the answer, FAP the counter); mage hunter-favoured; warlock/S-priest mostly losing; paladin the "how do I kill it" matchup (Survival is the anti-paladin answer); shaman contested; druid form-dependent and mostly unfavourable; the hunter mirror the one confident pick. Full table in `structured/classes/hunter/marksmanship-pvp.yaml` (`matchups:`).
- **BG role**: defensive/utility — traps hold positions, Entrapment locks chokepoints, don't try to solo nodes; BM pet tanks AV warmasters with the new Kill Command threat [single source, [[d:pvp-general#1427354322395463682]], [[d:hunter#1489619404449779883]]].

### Discord sources used

| Source | What it adds | Era | Agreement |
|---|---|---|---|
| [[d:hunter#1489610500349231196]] | Survival PvP 8/5/38 decoded (forum gap #3) | post-1.18.1 | single source |
| [[d:hunter#1492279311280115932]] | MM PvP 0/35/16 decoded | post-1.18.1 | single source |
| [[d:pvp-general#1370452815889174538]] | ~2025-04 all-CC trinket change (isolated) | 1.18.1-announced-pre-release | consensus |
| [[d:hunter#1490803074963476650]] | pets receive no PvP dampening (player report) | post-1.18.1 | single source |
| [[d:hunter#1494186537129218099]] | deep-BM counter-argument (BW-CD deadweight) | post-1.18.1 | single source |
| [[d:hunter#1045527107918372884]] | Engineering mandatory for serious PvP | pre-1.18.1 | consensus |
| [[d:hunter#1438241842159423529]] | PvP pet training-point priority | 1.18.1-announced-pre-release | single source |
| [[d:hunter#1453792390098714936]] | Tauren warstomp PvP racial camp | post-1.18.1 | contested |
| [[d:hunter#1171102722871799931]] | pre-1.18.1 deep-MM 0/31/20 & 0/24/27 | pre-1.18.1 | single source |

## Sources and validity

| Recommendation | Agreement | Validity |
|---|---|---|
| 30/21/0 BM/MM with Intimidation + Scatter | consensus among PvP posters (Ragetto, Skurridizo, Sbingo) | CC2–1.18.1; post-1.18.1 loses Kill Command capstone and is a fallback |
| Survival PvP 8/5/38 / MM PvP 0/35/16 | single source each (decoded codes) | post-1.18.1 |
| ~2025-04 PvP trinket removes all CC incl. Freezing Trap | consensus | 1.18.1-announced-pre-release |
| Pets bypass PvP dampening | player observation, no staff confirmation | post-1.18.1 |
| Scatter → FD → trap; trap first when possible | consensus (Grizb37, Atreidon, Skurridizo, Vliqta) | shared DR since 2024-09-04 (staff) |
| Gnome best Alliance PvP race; Horde contested | consensus for Gnome; Horde contested (Springboards, Vargthar, Ataika, amanagor) | racial changes (Orc stun resist) dated Apr 2025 |
| Deep BM strong post-1.18.1 | contested (Halfgeek9, Bazbee, Froghijab420 vs Insanefool; pet-dampening exemption unconfirmed) | post-1.18.1 |
| Hunter bottom-tier PvP | contested by gear/skill (Angelafarehart, Insanefool, Tomogwarrior vs Ataika, Skurridizo) | pre-1.18.1 |

Threads used: t24620, t24389, t21595, t11287, t5711, t14775, t15253, t15234, t16046, t4287, t6758, t9073, t13336, t22515, t13505, t12616, t18116, t18381, t10257, t3159, t20025, t23657, t16713, t23737, t24040, t20522, t20667 (`extracted/forum/f45-hunter/`); staff post [Akalix, 2024-09-04](https://forum.turtlecraft.gg/viewtopic.php?p=100665#p100665) in t14775; class-change posts in `extracted/forum/f63-patch-notes-changelog/t15157-*.md`.
