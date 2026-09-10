# Druid — Feral — Melee DPS (cat)

Feral Combat cat DPS at 60. Bear tanking is `feral-tank.md`; feral PvP (cat/bear flag carrier, 1v1) is `pvp.md`; leveling in cat/bear is `leveling.md`.

Eras used below: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Feral cat had three kit revisions on Turtle before 1.18.1: class-changes batch 2 (1.17.2, 2024-10-12 .. 2024-12-20), the 2025-03-30 revision, and 1.18.0 (2025-07-25, live 2025-08-15). 1.18.1 itself changed nothing in the cat kit — only bear threat and a few items (see "Official kit").

## Overview

- **Role**: single-target melee DPS with Leader of the Pack (3% melee crit aura) and off-role utility (Innervate, Rebirth, Tranquility, emergency bear). Cat is "100% stuck on single-target damage" [Elesion (player), 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83440#p83440) (pre-1.18.1).
- **Strengths (sources)**: high gear-independent early-raid damage — "Cat is great dps spec at low gear levels" and "cat becoming OP DPS during AQ40 (cause that's where al the good cat gear comes from)" [Noephix (player, endgame raider, Kara40), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) (post-1.18.1). Historic Naxx parses: 1386.9 DPS Patchwerk and top-5 Kel'Thuzad on a cat [Bayanni (player), 2023-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=43114#p43114) (pre-1.18.1, pre-CC2 powershift era); "Cat druids still hold top 10 dps on several Naxx bosses according to legacystats" [Bayanni (player), 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83509#p83509); "1200-1300 DPS [on Vael/Patchwerk] which is up there with mages and warriors" (quoted by Templar85, below).
- **Weaknesses (sources)**: glancing blows cannot be mitigated ("Since the cat 'paw weapon' is treated as its own weapon class ... cats are stuck dealing with the full 35% damage reduction on glances, which constitute 40% of their total melee attacks") and "No benefit from Windfury or any Chance On Hit weapon enchant effect" [Templar85 (player, druid main since 2022, Naxx heal/AQ40 tank), 2024-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=89439#p89439) (pre-1.18.1); Berserk is a 6-minute cooldown ("I can't use Berserk on every boss") and "Berserk only increases energy regeneration" [Rmoruser (player), 2025-05-23](https://forum.turtlecraft.gg/viewtopic.php?p=132703#p132703); no cleave (Rmoruser, same post); bleed immunities force two different rotations (see Rotation); end-game itemization falls off — "Cat doesn't get a big full-slot item upgrade in Naxx, unlike literally every other DPS spec ... Kara40 cat gear having tons of dump stats (roughly over 50% of stat budget)" (Noephix 2026-03-30, above); tier sets carry intellect — "please change the damn intellect off our tier set ... 126 stat points are wasted" [Snkx (player, Kara40 raider), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128296#p128296).
- **Content it excels at**: MC → AQ40 raids (AQ40 gear is the cat BiS plateau), single-target bosses without bleed immunity (Naxx: "almost nothing is immune to bleeds" [Noephix (player), 2025-05-25](https://forum.turtlecraft.gg/viewtopic.php?p=132929#p132929)). Weak in Kara40 due to gear and bleed immunities.
- **Community standing**: **contested and period-dependent.**
  - 2023–early 2024 (powershift era): "Feral bear/cat does very well in their respective rolls and many players have outperformed the vast majority of other players competing in the same rolls across every raid and almost every boss fight" [Bayanni (player), 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83509#p83509); "Feral DPS IS a thing on Turtle ... I would rate A or S tier" [Drubarrymooer (player, feral main, full BiS Naxx), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73783#p73783). Counter: "Rip and Rake doesn't scale. They do laughable damage ... Only optimal playstyle is Powershifting, Shred, and for finisher Ferocious bite" (Templar85 2024-03-04, above).
  - mid-2025 (1.17.2 bleed kit): "Cat is a hot mess. Too many mobs are immune to bleeds ... Oldschool powershifting is just too weak compared to all the new toys other damage dealers have" [Noephix (player), 2025-06-13](https://forum.turtlecraft.gg/viewtopic.php?p=135578#p135578); "Hell, even in bleed spec we're only doing kinda sorta okay-ish" [Noephix, 2025-06-06](https://forum.turtlecraft.gg/viewtopic.php?p=134515#p134515); "My best cat tip is to go boomkin instead if you plan to raid high-end content" [Noephix, 2025-05-30](https://forum.turtlecraft.gg/viewtopic.php?p=133609#p133609).
  - 1.18.0 (Aug 2025): "The new changes have been mostly positive for Feral" [Snkx (player), 2025-08-21](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482).
  - post-1.18.1: "Cat is great dps spec at low gear levels - but in current endgame raid it's one of the worst" (Noephix 2026-03-30, above); "Feral druids suck in TWoW and it becomes worse and worse on every patch" [Wosator (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172003#p172003). No post-1.18.1 source defends cat as top-tier. Overall: **niche/alternative** at the 2026 endgame, **favored** for AQ40-level content.
- Staff view (design intent): "While both Bear and Cat are performing well ... we wish to explore and expand their identity more beyond the 20-year-old Powershifting and add power to non-Powershifters" [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460).

## Official kit (staff posts, in order)

- Batch 2 / 1.17.2 [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102966#p102966): Ferocious Bite R1 at level 24; combo points persist through shapeshift; consumables usable in forms; Tiger's Fury R3 35 / R4 50; Rake 12% + 3% AP; Swipe 8% AP; MCP 20% swing speed, no longer works in forms (20-min CD); new/changed talents Open Wounds, Feral Swiftness, Blood Frenzy (30% AS / 10 rage), Feral Adrenaline, Ancient Brutality.
- [Dragunovi (staff), 2024-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=105804#p105804): Blood Frenzy 20% / 18 s; Improved Shred +5/10% for 5 s after entering Cat; Open Wounds 2/4/6% per combo point. [Dragunovi (staff), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776): Improved Shred buff 10 s.
- [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): Open Wounds = "Increases the damage of Claw by 10/20/30% and Ferocious Bite by 3/4/5% for each of your active Bleed effects on the target"; Ancient Brutality = 2/3/4 energy per bleed tick (and 1/2/3 rage/s on dodge, 9 s ICD); Feral Adrenaline 20/40/60%; Swipe 4% AP; Feral Aggression and Open Wounds now scale FB total damage.
- [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504): form-to-form shifting; Ancient Brutality 2 points 5/10 energy, 2/4 rage; Claw R5 / Shred R6 / Rake R4 +5%; Predatory Strikes 3/6/10% of total AP; Feral T2.5 3-set −3 Shred energy.
- 1.18.0 [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): Tiger's Fury also grants +10 energy every 3 s; Ferocious Bite +0.5% damage per extra energy; Rip duration 10/12/14/16/18 s by combo points; jujus/Gift of Arthas/Lucidity/bandages usable in forms; Reshift (level 60, 35% base mana); Open Wounds Rip +5/10/15% and Claw +10/20/30% per bleed; Improved Shred unconditional; Primal Fury row 3; Savage Fury merged into Predatory Strikes (+7/14/20% Claw/Rake/Maul/Savage Bite/Swipe); Ancient Brutality row 5 3/5 energy; Feral Adrenaline removed; Carnage row 6 (2 pts); revision 2025-08-14: Open Wounds back to row 2.
- 1.18.1 [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071): Maul threat −15%, Savage Bite threat −12% (bear only; no cat changes). Idol swapping now triggers a GCD (same post). Post-release hotfixes: Fang of Alichos usable in forms; Yoxtez weapon +224 Feral AP [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608). 1.18.1 itemization: Herald of Woe FAP 210 → 224, +1% haste [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272).

## Talent build

**No source posts a full 51-point list in text for the 1.18.0/1.18.1 tree; builds are given as talent-calculator links.** The build below is assembled from talents the sources name as mandatory, so it is reconstruction — points not attributed to a source are marked *(inferred)*.

Two builds are needed at the same time: "You have to spec both" [Grizb37 (player), 2025-06-05](https://forum.turtlecraft.gg/viewtopic.php?p=134389#p134389); "ive got FOUR Feral specs just in my Brain Wash device, one for Tanking, one for PVP, one for DPS, and one for DPS outside (with feral swiftness and feral charge)" [Snkx (player), 2025-08-21](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482); "Cat needs to be lvl 62 to take all the mandatory DPS talents without a single flex point" [Noephix (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) (post-1.18.1).

### Build A — bleed/claw cat (main raid build since spring 2025)

| Tree | Talent | Points | Source |
|---|---|---|---|
| Feral | Ferocity | 5/5 | prerequisite depth (inferred) |
| Feral | Feral Instinct / Thick Hide | 0–5 | fillers; "Thick Hide: don't forget to spec into for the extra Armor ... Many cat druids are squishy for missing out on it" [Chev03 (player), 2026-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=165791#p165791) (leveling context) |
| Feral | Open Wounds (row 2 since 2025-08-14) | 3/3 | core of the build: "Claw open wounds bleed build pulls slightly ahead" [Snkx, 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128296#p128296) |
| Feral | Sharpened Claws | 3/3 | crit (inferred) |
| Feral | Improved Shred | 2/2 | "you always need improved shred and powershift as a back up, even as full bleed" (Snkx 2025-04-24) |
| Feral | Predatory Strikes | 3/3 | +20% Claw/Rake damage and 10% AP (staff 1.18.0) (inferred mandatory) |
| Feral | Primal Fury | 2/2 | combo points on crit (inferred) |
| Feral | Blood Frenzy | 2/2 | 20% AS after Tiger's Fury; "Blood Frenzy stays up when shifting" [Portholes (player), 2023-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=38764#p38764) |
| Feral | Feral Charge | 0/1 | dropped in raid DPS build: "I cant take Charge, Feral Instinct (Threat Talent), Thick hide (minor) or Feral Swiftness (dodge)" (Snkx 2025-08-21) |
| Feral | Heart of the Wild | 5/5 | (inferred) |
| Feral | Ancient Brutality | 2/2 | energy per bleed tick — "Energy restoration from bleeds got buffed so much that you don't need to pshift anymore" [Noephix (player), 2025-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=131669#p131669) |
| Feral | Leader of the Pack | 1/1 | raid aura (inferred) |
| Feral | Carnage | 2/2 | "they added a new 2 pointer which took these points up anyway" (Snkx 2025-08-21) |
| Feral | Berserk | 1/1 | capstone cooldown (inferred) |
| Balance | Natural Weapons | 3/3 | 3% hit — "3% of that is taken care of with the balance talent" [Bigsmerf (player), 2024-02-08](https://forum.turtlecraft.gg/viewtopic.php?p=87311#p87311) |
| Balance | Omen of Clarity | 1/1 | "Auto and melee attacks can proc Clearcast, but the only optimal use for it is Shred" (Templar85 2024-03-04) |
| Balance | Natural Shapeshifter | 3/3 | needed for powershift backup (inferred from Furor requirement) |
| Restoration | Furor | 5/5 | "you don't have Improved Shred and Furor (+Wolfsheart) Helm enchant. You won't be doing anything" on bleed-immune (Snkx 2025-04-24) |

Point totals are not stated by any source; the 51-point allocation above cannot be closed without dropping something — which is exactly the "starved for talent points" complaint. **Gap: no canonical link for a post-1.18.0 bleed build.**

### Build B — powershift Shred cat (pre-2025 meta; still the bleed-immune fallback)

Old-format link (pre-CC2 tree, obsolete talent layout): 12/34/5 elemental-cat variant `https://talents.turtlecraft.gg/druid/1O3I6-Z029FEDV-5` [Portholes (player), 2023-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=38764#p38764) — "Things can be changed around, doesn't really matter as long as it's a basic Cat DPS build". Core: Furor 5/5, Natural Shapeshifter 3/3, Omen of Clarity, Natural Weapons 3/3, Improved Shred 2/2, Blood Frenzy, Feral Aggression, Sharpened Claws, Predatory Strikes, Heart of the Wild, Leader of the Pack, Berserk (inferred from posts above; no full list).

**Patch validity**: Build A depends on 1.18.0 Open Wounds/Ancient Brutality/Carnage rows (staff 2025-07-25, 2025-08-14). 1.18.1 changed no cat talent, so both builds are **valid for 1.18.1** in structure; post-1.18.1 posts (Noephix 2026-03-30) confirm the two-spec situation persists.

## Stat priority

- **Hit**: hit cap on Turtle is 8% for a cat with no weapon-skill mitigation, 5% from gear after Natural Weapons: "8% for hitcap, 3% for Natural Weapons brings you to the fabled 5% for hitcap" [Eyeburn (player), 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121689#p121689) (pre-1.18.1). Older posts say 9% total / 6% gear [Bigsmerf (player), 2024-02-08](https://forum.turtlecraft.gg/viewtopic.php?p=87311#p87311); [Drubarrymooer, 2023-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=64887#p64887) — **contested (8% vs 9%)**; the 2025 figure is the later one. "Hitrating above hitcap does absolutely nothing. Additionally you can not counteract dodge, parry or dodge with hitrating" [Atreidon (player), 2025-03-02](https://forum.turtlecraft.gg/viewtopic.php?p=121385#p121385).
- **Crit / Agility / Strength**: "getting 9% hit as soon as possible ... You'll also want crit chance, so % crit and agi gear are important. Agi ... increases your crit chance ... dodge chance and even armor by 2 points for each point of agility. Strength is useful since it grants attack power, but it won't be as important as agility" [Bigsmerf (player), 2023-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=71953#p71953). "stack Crit, keep your Attackspeed Buff up and powershift" [Inovatu (player, Naxx cat), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84858#p84858).
- **Attack speed / haste**: "cats dont gain much from +% attack speed, thats more a Bear stat for threat" [Snkx (player), 2025-08-21](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482) — versus MCP-era play where 20% swing speed was BiS (Drubarrymooer 2024-01-16, Gear section). **Contested by era.**
- **Intellect / Spirit**: dump stats — "cats dont gain much ... some intellect removed, and restatted into either strength or agility" (Snkx 2025-08-21); tier intellect complaint (Snkx 2025-04-24).
- **Weights**: community sheets — Taladril's list `https://docs.google.com/spreadsheets/d/1wGBasFY8fFGpBtiD1TAUBB99wxboCSVh5MW_6b_z0oU` and VanillaRatingBuster addon `https://github.com/kxseven/VanillaRatingBuster` "based on the stat weights the community gathered", plus an "AngryCat" updated sheet in the Discord druid channel [krylorandrax (player), 2025-01-12](https://forum.turtlecraft.gg/viewtopic.php?p=116362#p116362); Drubarrymooer's feral DPS gear sheet `https://docs.google.com/spreadsheets/d/1EXmDujdlPD_s7xrLKjcFykBJIW_hmMhwRhSXZWUkKBQ` ("not entirely up to date but it's very close") [Drubarrymooer (player), 2025-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=124910#p124910). Numeric weights are not reproduced in any forum post — **gap**.
- Resulting order (synthesis of the above, **consensus** on the top three): hit to 5% (gear) > crit/agility > strength/AP > haste > stamina; intellect/spirit worthless. Leveling: "feral druids dont scale with gear, much at all" [Biggamehuntard (player), 2026-03-15](https://forum.turtlecraft.gg/viewtopic.php?p=170843#p170843) — see `leveling.md`.

## Single-target rotation

### Which rotation: bleed or powershift?

- **Not bleed-immune → bleed/claw, no shifting**: "Meta is non-shifting bleeds+claw spam. You use the old rotation only on bleed-immune targets (those are plentiful in molten core and then go extinct until kara40)" [Noephix (player), 2025-05-30](https://forum.turtlecraft.gg/viewtopic.php?p=133609#p133609); "Right now Bleed is ALOT more DPS, around 200+ extra than powershifting shred. You only powershift on bleed immune or you gimp your DPS potential" [Grizb37 (player), 2025-06-05](https://forum.turtlecraft.gg/viewtopic.php?p=134389#p134389); "Current top-5 druid DPS on Patchwerk is all claw cats. Claw is clearly ahead of powershred" [Noephix, 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128297#p128297); after 1.18.0: "Even on non bleed immunes, the Bleeds Regen + TF vastly outperform powershifting" [Snkx, 2025-08-21](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482).
- **Contested minority**: powershifting inside the bleed build is still a gain — "Power shift gives you 60 energy. Maximum amount of energy gain ticks from bleed you could lose during power shift is 2, that's 20 energy ... So you still have 40 energy gain" [Mundane (player), 2025-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=131427#p131427). Rebuttal: "you lose a couple cat autos and Tiger's Fury buff, which is 50 autoattack damage, costs a gcd and 30 energy. So pshift ends up being at least neutral DPSwise, if not an outright loss" [Noephix, 2025-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=131669#p131669). Since 1.18.0 Tiger's Fury also grants 10 energy/3 s (staff), which strengthens the no-shift side; still-earlier advice "shred+pshifting is still the meta. You can weave a bleed or 2 in for extra FB DMG" [Drubarrymooer, 2025-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=124910#p124910) is superseded by the posts above.
- **Bleed-immune → powershift Shred** (Snkx, Grizb37, Noephix above). After 1.18.0 the immune-target loss is "around a 20% dps loss compared to powershifting" if you stay in the no-shift style (Snkx 2025-08-21), so switch.

### Bleed-immunity map (raid by raid)

- MC: many immune mobs (Noephix 2025-05-30). Naxx: "almost nothing is immune to bleeds (even things that should be, like skeletons)". Kara40: "Most things before Anomalus (3rd boss) are not immune, Anomalus is immune and so is everything after him until chess (5th boss). Thrash after chess is still immune until the portal orb, where it isn't immune again and it keeps being not immune until the end... Except for Rupturan" [Noephix (player), 2025-05-25](https://forum.turtlecraft.gg/viewtopic.php?p=132929#p132929) (pre-1.18.1; single source).

### Rotation 1 — bleed/claw (bleedable target)

Opener and priority as the sources describe them (no source gives a numbered list; this ordering is a synthesis of Rmoruser's "Rake + Shred + Rip" line, the Open Wounds/Ancient Brutality tooltips from staff, and the Tiger's Fury notes):

1. Pre-pull: Cat Form, Tiger's Fury before engaging so Blood Frenzy (20% AS, 18 s) and the +10 energy/3 s regen are up (staff 1.18.0; Portholes 2023-03-23 for Blood Frenzy persisting).
2. Opener (from stealth if possible): Ravage/Pounce is not mentioned as optimal; sources treat the opener as Rake first (bleed up) then builders.
3. **Rake** whenever it is not on the target — every bleed active adds +10/20/30% Claw damage and +5/10/15% Rip (staff 2025-07-25) and each tick returns energy (Ancient Brutality).
4. **Rip** at 5 combo points, keep it up (duration 10–18 s by CP, staff 1.18.0); Idol of Laceration: "Rip has a 20% chance per combo point to make your next Shred refund 15 Energy" [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52799#p52799) → "a rotation of Rake + Shred + Rip to deliver a fairly good and consistent DPS" [Rmoruser (player), 2025-05-23](https://forum.turtlecraft.gg/viewtopic.php?p=132703#p132703).
5. **Claw** as the builder when both bleeds are up ("bleeds+claw spam", Noephix); **Shred** on Omen of Clarity procs and when Idol of Laceration refund is active (Rmoruser). Whether Shred (from behind) or Claw is the default builder in the bleed build is **not settled in text** — Noephix says claw, Rmoruser says Shred; treat as **contested**.
6. **Ferocious Bite** only when both bleeds have time left and combo points/energy are spare; FB gains +0.5% damage per extra energy (staff 1.18.0) and +3/4/5% per bleed (staff 2024-12-20).
7. **Tiger's Fury** on cooldown/whenever the buff drops (stays in form; do not shift, it is lost on shift — Noephix 2025-05-17).
8. Never Ferocious Bite on a Clearcasting proc: "Can cast free Shred but can not cast free Ferocious Bite" [Templar85, 2024-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=89439#p89439).

Caveat: "with so many debuffs on the target it's simply impossible to track ... warriors' Wounds effects constantly overwrite and remove your bleeds" (Rmoruser 2025-05-23) — a debuff-slot problem in 40-man raids; Noephix's guild data (top-5 Patchwerk claw cats) contradicts it in practice.

### Rotation 2 — powershift Shred (bleed-immune target or pre-2025 kit)

1. Furor 5/5 gives 40 energy on entering Cat; Wolfshead Helm/Wolfsheart helm enchant gives +20 (Wolfshead effect moved to the Wolfsheart enchant from Hyjal [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52800#p52800)).
2. Shred (from behind) whenever energy ≥ 60 (energy cost lowered by Improved Shred; Feral T2.5 3-set −3 energy).
3. Powershift (leave and re-enter Cat) when energy is too low for Shred and the next energy tick is not imminent — the wiki macro shifts at ≤30 energy: `/run u=UnitMana('Player'); ... if (u<=30) and (f==3) then c"Cat Form"; ... c"Shred"` (`extracted/wiki/articles/Druid_Cat_Macros.md`, community wiki, `(vanilla baseline, not from turtlecraft.gg)` for the technique itself). Portholes' macro logic: at 4 CP with 72–82 energy it is "better to waste the energy on a claw > 5 point ferocious bite > power shift" than to Shred to 5 CP and be unable to Bite [Portholes (player), 2023-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=60588#p60588).
4. Ferocious Bite at 5 combo points ("Shred, and for finisher Ferocious bite", Templar85 2024-03-04). Rip was not used in the classic Turtle powershift macro ("This macro is purely backstab, and does not use Rip" [Portholes, 2023-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=39230#p39230)).
5. Tiger's Fury only to (re)apply Blood Frenzy before shifting: "When shifting out of Cat form, Tiger's Fury will fall off but Blood Frenzy will stay up" (Portholes 2023-03-23).
6. Use Reshift (level 60, 35% base mana) or Cat Form for the shift; mana is the limiter — Blade of Eternal Darkness (100 mana per proc) made the elemental-cat variant "100% Mana Efficiency" (Portholes 2023-03-23).
7. Powershift macro requires SuperMacro or CleveRoid; do not use the 1-button macro as "an 'end all' dps macro" (Portholes 2023-03-27); it misreads buffs beyond 16 [Reploidrocsa (player), 2023-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=73321#p73321).

## Multi-target / AoE

- Cat has no cleave; sources are **consensus** that cat AoE is weak: "AoE damage is weak for ferals. You can always use Swipe in bear form, but if you're not a tank, it's pretty useless because you can't generate enough rage ... ferals don't have the spell power needed to be effective with Hurricane" [Rmoruser, 2025-05-23](https://forum.turtlecraft.gg/viewtopic.php?p=132703#p132703).
- 2–3 targets: stay in cat, single-target the kill target; Rake/Rip on a second target is not discussed by any source (gap).
- 4+ targets: bear Swipe (hits 3, AQ20 3-set adds 1 target: "Swipe hits 1 additional target" [Dragunovi (staff), 2025-06-30](https://forum.turtlecraft.gg/viewtopic.php?p=137624#p137624)) or Hurricane from caster form (30 s CD, 9.6% SP per tick per staff 2024-10-12; 10 s CD per Torta 2025-03-30) — neither competitive.
- Trash: the elemental-cat build (Blade of Eternal Darkness + Incendosaur set + Repaired Electro-Lantern + Thunder Lizard's Hide) was "really good for trash parse though" [Drubarrymooer, 2023-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=47674#p47674), 545 DPS sustained in 2023 (Portholes 2023-03-23) — a 2023 pre-1.18.1 niche, not the current meta.

## Cooldowns and resources

| Cooldown | Use when | Source |
|---|---|---|
| Berserk (cat) | 6-min CD, "increased attack speed/energy regen in cat form"; **do not shift while it is up**: "When using Berserk can not switch out cat form or will lose the buff" | [Drubarrymooer, 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73795#p73795); [Templar85, 2024-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=89439#p89439) |
| Tiger's Fury | keep Blood Frenzy (20% AS/18 s) and 10 energy/3 s up; costs 30 energy + GCD; lost on shift | staff 1.18.0; Noephix 2025-05-17 |
| Omen of Clarity | free Shred (never FB); must be cast (30-min buff, "its not passiv like in wotlk") | Templar85 2024-03-04; [Inovatu, 2023-07-28](https://forum.turtlecraft.gg/viewtopic.php?p=54938#p54938) |
| Trinkets | "I play longer Fights with ES-Trinket and Slayers ... ES-Trinket and BhB for short fights. In Naxx I go with ES-Trinket + Kel Trinket" | [Inovatu, 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84879#p84879) |
| Innervate | usually for a healer; own mana matters only when powershifting | (vanilla baseline, not from turtlecraft.gg) |
| Tranquility | raid-wide 30-min CD; feral cats are expected to use it on raid-lead call — "we run 4-5 druids though and each use it 2-3 times" | [Ghen (player, bear tank), 2025-08-29](https://forum.turtlecraft.gg/viewtopic.php?p=149160#p149160) |

Resource rules: energy from Ancient Brutality bleed ticks (3/5 per tick), Tiger's Fury, Idol of Laceration refunds, AQ20 3-set ("finishing moves have an 8% chance per combo point to restore 35 Energy", staff 2025-06-30); mana only for powershifting (Reshift 35% base mana; Idol of the Wildshifter −75 mana per shift, staff 2023-07-10). Combo points persist through shapeshifting (staff 2024-10-12).

## Role strategy

- Raid slots: "in Naxx, there's usually just 2. AQ40 and below we'll have 3 or 4 on a melee heavy night" [Drubarrymooer, 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73795#p73795) (pre-1.18.1). Top parses relied on group support: "top cat DPS only was there because he had a hyper-optimized group (including even a sub rogue) and had a couple enh shamans bloodlusting him on CD" [Noephix, 2024-11-28](https://forum.turtlecraft.gg/viewtopic.php?p=110285#p110285).
- Know the bleed-immunity map and carry both specs (Brainwashing Device) — switch spec per wing, not per pull (Snkx, Grizb37, Noephix above).
- Off-role: emergency bear tank (Barkskin Feral, Frenzied Regeneration), Innervate for healers, Rebirth, Tranquility on call; Faerie Fire (Feral) on the boss.
- Position behind the target for Shred; Claw has no positional requirement (vanilla baseline, not from turtlecraft.gg).

## Gear / enchants / consumables

- **Weapon**: 2H maces/polearms carry Feral AP "14 per item level above 60" — Bonecrusher 42, Boneshatter Maul 70, Nat Pagle's Fish Terminator 70 [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52800#p52800). Endgame: Eye of Nerub (Loatheb; "322 FAP + 45 agi" per t8700 posts), Might of Menethil 406 FAP [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276), Atiesh (Druid) 600 FAP + 150 SP + 2% haste aura (same post), Herald of Woe 224 FAP + 1% haste (staff 2026-02-15), Yoxtez +224 FAP (staff 2026-03-21). **MCP (Manual Crowd Pummeler)** was BiS through 2024 — "MCP is as good as The Eye of Nerub Polearm from Loatheb. Heavy reliance on MCP up until very late game" (Templar85 2024-03-04); "Patchwerk with MCP instead of Eye of Nerub puts me in the top 5" [Drubarrymooer, 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84853#p84853); counter "you dont need MCP for Cat in the Lategame, if you can get Eye of Nerub use it" (Inovatu 2024-01-16) — moot since batch 2: MCP "no longer works in forms" and has a 20-min CD (staff 2024-10-12). **Mark all MCP advice as pre-1.18.1 and obsolete.**
- **Helm enchant**: Wolfsheart (Hyjal rep) carries the old Wolfshead +20 energy on shift (staff 2023-07-10); mandatory for the powershift fallback (Snkx 2025-04-24).
- **Idols**: Idol of Laceration (Keeper Gnarlmoon, Upper Kara) for bleed/Shred; Idol of Savagery (Rotmaw, CoT Black Morass: "Reduces the time between periodic ticks and duration of Rake and Rip by 10%"); Idol of the Emerald Rot (Solnius, ES: finishing moves 20%/CP for 150–191 nature damage); Idol of the Moonfang reworked in 1.18.0 to "Moonfire, Savage Bite and Shred restore 50 Mana and 125 Health ... doubled on a critical strike" (staff 2025-06-30) — players called the rework "VENDOR TRASH" for feral/balance (t20103 replies); Idol of Brutality (vanilla) referenced as the default. Idol swaps now trigger a GCD (staff 2026-01-23).
- **Tier**: Feral cat sets = T1, T2.5, T3.5; bear = T2, T3 [Dragunovi (staff), 2023-10-15](https://forum.turtlecraft.gg/viewtopic.php?p=71030#p71030). Set bonuses quoted by players: Feral T2.5 5-set "Rake 6% / Rip 10% chance to empower next Shred/Rip/Claw +15% crit and damage"; T1 8-set "FB 20%/CP chance to frenzy +15% AS next 5 attacks" (Rmoruser-era posts in t18824; exact wording not verified — **medium**). T2.5 3-set −3 Shred energy (staff 2025-03-30). AQ20 3-set energy refund (staff 2025-06-30). Complaint: T3.5 "too much intellect" (Snkx 2025-08-21).
- **BiS lists**: Bayanni's Kara40/Naxx cat list (Forgotten Hide Helm, Shieldrender Talisman, Felforged Nathrezan Veil, Tunic of Demonic Deception, Leggings of the Apocalypse, Might of Menethil, Atiesh) [Bayanni, 2025-04-25](https://forum.turtlecraft.gg/viewtopic.php?p=128749#p128749) vs. Noephix's rebuttal that only ~3 pieces replace AQ40 items [Noephix, 2025-05-14](https://forum.turtlecraft.gg/viewtopic.php?p=131289#p131289) — **contested**; the shared consensus is "we still use the same old AQ40 gear" (Noephix 2025-05-30). Shieldrender was changed in 1.18.1 ("a huge nerf for feral Druid. Currently I can get 3 autos and maybe 1-2 abilities during the three second window", player reply in t23973, post-announcement).
- **Pre-raid / dungeon items** (Elesion's 2023 list, t7410, pre-1.18.1): Thornroot Maul (83221), Thornclad Warhammer (80751), Almanac of Savagery (60431), Hatereaver Cog (60559), Ring of Authority (50189), Taskmaster's Tag (60569), Amulet of Warding (60420), Damien's Sorrow (60421), Convergence of the Elements (65024), Venom Covered Cloak (51731), Failsafe Activation Key (83481); Lost Dark Iron Chain (81263), Ashkin Belt (81265) (Drubarrymooer, same thread). Mace of Unending Life (AQ20 druid mace) 196 FAP + 50 armor + 1% dodge [Dragunovi (staff), 2023-10-17](https://forum.turtlecraft.gg/viewtopic.php?p=71699#p71699); Jadestone Skewer 196 FAP (t12014). Devilsaur set for hit [Dr Thrax (player), 2025-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=115719#p115719) (bear thread).
- **Consumables** (usable in form since batch 2 / 1.18.0): Mighty Rage Potion (staff 2024-10-21), jujus, Gift of Arthas, bandages (staff 1.18.0); Elemental Sharpening Stone works on paws (crit) while weightstones do not (t16939/t13017 player posts, **medium**); Dragonbreath Chili, Battle Chicken, Tel'Abim haste food, Elixir of the Mongoose (Taladril list) — standard vanilla melee consumes `(vanilla baseline, not from turtlecraft.gg)` except the in-form rule. Enchants: haste on head/legs/shoulders mentioned for bear (t17851); for cat use the community sheets.

## Common mistakes

1. Playing one spec: "as soon as bleed immune came, he just fel off a cliff" (Snkx 2025-04-24). Carry both.
2. Powershifting inside the bleed build (loses autos, Tiger's Fury, GCD — Noephix 2025-05-17); or refusing to powershift on immunes (~20% loss, Snkx 2025-08-21).
3. Shifting with Berserk up (Templar85 2024-03-04).
4. Spending a Clearcasting proc on Ferocious Bite (Templar85 2024-03-04).
5. Stacking hit past 5%/8% ("does absolutely nothing", Atreidon 2025-03-02) or rolling on intellect tier for stats.
6. Expecting weapon-skill items (Edgemaster's, Aged Core Leather Gloves) to work — they do not for paws (Templar85 2024-03-04).
7. Expecting Windfury/proc weapons to work in forms — they do not (Templar85; Grizb37 2024-01-02). Raka'shishi's proc does not work for druids (Rmoruser 2025-05-23).
8. Using MCP-era advice after batch 2 (MCP no longer works in forms).

## Sources

| Source | Authority | Date | Era | Agreement |
|---|---|---|---|---|
| [Noephix p173102](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102) "The state of druid in 1.18.1" | player (self-described endgame raider; consistent Kara40 detail) | 2026-03-30 | post-1.18.1 | single, partially disputed by Velanyr p173162 (bear) |
| [Snkx p147482](https://forum.turtlecraft.gg/viewtopic.php?p=147482#p147482) 1.18 feral feedback | player (Kara40 raider) | 2025-08-21 | pre-1.18.1 (1.18.0 live) | consensus with Noephix/Grizb37 |
| t18295 "Is powershifting still meta?" (Drubarrymooer p124910, Noephix p133609/p134515, Grizb37 p134389) | players | 2025-04..06 | pre-1.18.1 | contested → consensus on bleed |
| t18824 "Cat bleed build and bleed immunities" (Snkx p128296, Noephix p128297/p131669/p132929, Mundane p131427, Rmoruser p132703) | players | 2025-04..05 | pre-1.18.1 | contested on pshift-in-bleed |
| [Templar85 p89439](https://forum.turtlecraft.gg/viewtopic.php?p=89439#p89439) | player (2-yr druid main) | 2024-03-04 | pre-1.18.1 (pre-CC2) | single |
| [Bayanni p43114](https://forum.turtlecraft.gg/viewtopic.php?p=43114#p43114), [p83509](https://forum.turtlecraft.gg/viewtopic.php?p=83509#p83509) | player | 2023-04-26, 2024-01-03 | pre-1.18.1 | single (parses) |
| Hit cap: Eyeburn p121689, Atreidon p121385, Bigsmerf p87311, Drubarrymooer p64887 | players | 2024–2025 | pre-1.18.1 | contested 8 vs 9% |
| Staff kit posts: Dragunovi p102966/p105804/p108776, Jamey p113460/p141159/p166071, Torta p124504, Dragunovi p52800/p52799/p71030/p105276/p137624/p168272 | staff | 2023–2026 | all eras | authoritative |
| Portholes t6169 elemental cat (p38764, p39230, p60588) | player (HC 60) | 2023 | pre-1.18.1 | single, niche |
| Inovatu p84858/p84879, Drubarrymooer p84853 (MCP vs Eye of Nerub) | players (Naxx cats) | 2024-01 | pre-1.18.1, obsolete after batch 2 | contested |
| Wiki `Druid_Cat_Macros.md` | community wiki (is_turtle_content false) | undated | — | vanilla baseline |
