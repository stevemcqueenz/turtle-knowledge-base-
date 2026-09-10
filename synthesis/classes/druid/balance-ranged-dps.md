# Druid — Balance — Ranged DPS (moonkin)

Balance/Moonkin caster DPS at 60. PvP balance (30/0/21) is in `pvp.md`; balance leveling and the "Moonglow" balance/resto solo hybrid are in `leveling.md`.

Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Kit revisions: class-changes batch 2 (1.17.2, Oct 2024: Eclipse, Balance of All Things, Moonkin Form at 30, Owlkin Frenzy, Gale Winds, Sylvan Blessing), 2025-03-30 revision, 1.18.0 (Aug 2025: Eclipse crit-scaling, BoAT 0.5 s), **1.18.1** (BoAT rework to 3 points, Moonfury 4/8/12%, Eclipse 40%/60%).

## Overview

- **Role**: ranged caster DPS with Moonkin Aura (3% spell crit to the party; Idol of the Moonfang originally +1%), Faerie Fire, Insect Swarm, Innervate, Rebirth, Tranquility, decurse.
- **Strengths (sources)**: scaling — "as one of the top Boomkins on the server, the class scales incredibly well. Really coming online around AQ40 gear and then really starts to ascend when you start hitting set bonuses in T3 and T3.5 ... if you do it well and have good uptime you can do just as much damage as any caster" with a Kara40 log link [Noobikscube (player, top boomkin per own claim, Kara40 logs), 2025-06-08](https://forum.turtlecraft.gg/viewtopic.php?p=134706#p134706) (pre-1.18.1); "Boomkin is good. Could probably use some DPS buffs, but is generally in a good spot" [Noephix (player), 2025-06-13](https://forum.turtlecraft.gg/viewtopic.php?p=135578#p135578); raid utility "Their value as an FF spammer on trash should not be understated" [Bayanni (player), 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83509#p83509); PvP: "Boomkin is also extremly strong in ab premades, and is also one of the best specs in the game for bloodring" [amanagor (player), 2026-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=165799#p165799).
- **Weaknesses (sources)**: spell hit requirement — "your 1st prio is spell hit until cap, which is 16% for bosses and lv 63 mobs. remember that natural weapons talent gives you up to 3% so with 13% you're all set" [Reploidrocsa (player), 2023-04-12](https://forum.turtlecraft.gg/viewtopic.php?p=41236#p41236); "The sheer amount of spellhit we require compared to other casters is equally atrocious" [Jizzus (player, BiS Ambershire boomkin), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172261#p172261); mana — "we still have way more mana issues than any other caster" (Jizzus); "I'm consuming several times more teas and major mana pots then anyone else every week in Kara 40. Innervate ... It's a get 3000 mana button once per fight" [Avereth (player), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141188#p141188); RNG rotation — "A full-BIS Boomkin, playing a perfect rotation with perfect 100%-chance Eclipse procs ... will do LESS DPS than an equally geared Fire Shaman" [Scattyau (player, 9/9 K40 boomkin main), 2025-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=159149#p159149) (1.18.1-announced era); "Threat generation also becomes very inconsistent" [Auralys (player, K40 with Scythe of Elune), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172020#p172020); no cleave/AoE spec — "there kinda isn't an 'aoe' spec for balance" [Bigsmerf (player), 2024-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=109551#p109551); DoT ticks and Hurricane do not proc item effects — "our core abilities don't reliably proc item effects. (dot ticks & hurricane procs nothing..)" [Auralys, 2026-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=172523#p172523).
- **Content**: long static single-target boss fights once hit-capped (Kangaraxxus calculator "what you should get on average during long static fights like Patchwerk"); trash FF/Insect Swarm utility; AB premades / Blood Ring in PvP.
- **Community standing**: **contested; trending down after 1.18.1.**
  - 2023–2024: "Boomkin is still behind on damage but honestly is desirable to at least have on in raids currently since they can now realistically get max hit% without going deep into Naxx" (Bayanni 2024-01-03); "Moonkins got very good Itemization and talents changes recently. But they still falling back on long statick fights compared to mages and warlocks" [Kangaraxxus (player, calculator author), 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83450#p83450).
  - 2025 (CC2 Eclipse kit): "anyone saying Boomkin is bottom of the barrel is misinformed" (Noobikscube 2025-06-08) vs. "Eclipse is the definition of 'ADDING COMPLEXITY FOR COMPLEXITY SAKE'" (Tarsis, quoted and rebutted point-by-point by [kierova (player), 2025-06-09](https://forum.turtlecraft.gg/viewtopic.php?p=134911#p134911)); 1.18.0 pre-release: "Are they doing too much dps? Nope. Mediocre currently ... WTF why nerf Balance Druids?" [Halfgeek9 (player), 2025-08-14](https://forum.turtlecraft.gg/viewtopic.php?p=145279#p145279).
  - 2025-11: "Its cool. Its viable. When you factor in raid comp, its great. But it doesn't feel rewarding" (Scattyau 2025-11-11).
  - post-1.18.1: "1.18.1 moonkin rework was supposed to be a slight buff - but ended up being ~15% dps nerf to already low-tier spec, resulting in moonkin becoming the worst 'proper' dps spec in the game. Below even cat" [Noephix, 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173102#p173102); "My T3 boomkin is parked on Orgrimmar since the day 2 of this new last patch ... the spell rotation is not fluid anymore" [Trevor89 (player), 2026-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=173305#p173305); "giving 15% crit spread across 5 players is a dps loss for the raid compared to bringing another mage or a warlock" (Jizzus 2026-03-24). No post-1.18.1 source calls boomkin competitive. → **niche/alternative** post-1.18.1.

## Official kit (staff)

- Batch 2 [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102966#p102966): Moonfire/Insect Swarm 18 s; Wrath +5%; Hurricane 30 s CD, 9.6% SP; Tranquility raid-wide 30-min; Balance tree: Sylvan Blessing, Improved Moonfire 2 pts, Guidance of the Dream 23/46/70%, Moonfury row 3 (3 ranks), Moonglow row 4, Moonkin Form row 5 at 30 (180% armor; Improved Moonkin 360% at 40), Owlkin Frenzy, Balance of All Things 5 ranks, Gale Winds, Eclipse capstone, Omen of Clarity passive-ish (must still be cast). [Jamey (staff), 2024-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=104207#p104207): Insect Swarm stacks between druids.
- [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): BoAT Starfire −0.75 s; Eclipse cooldown debuff. [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504): Mark/Gift of the Wild castable in Moonkin; Balance T3 6-set unresistable; Owlkin Frenzy 30% pushback resistance, CD 30/25/20 s; Hurricane CD 10 s; Eclipse 30%.
- 1.18.0 [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): BoAT Starfire 0.8 → 0.5 s per charge; Gale Winds −10/20% Hurricane mana; **Eclipse**: Wrath crit 30% / Starfire crit 50% chance, bonus = 10% + 60% of crit chance, 15 s duration, each Eclipse own 30 s CD; revision 2025-08-14: Improved BoAT (Balance T3.5 5-set) 33 → 50%.
- **1.18.1** [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) + revisions 2026-01-26 / 2026-03-19: **Balance of All Things** now 3 points: Wrath on an Insect Swarm target returns 10/20/30% mana; Starfire vs a Moonfire target +3/6/9% crit (was 2/4/6%; the cast-time reduction is gone); **Moonfury 4/8/12%** (was 2/4/6% per synthesis changelog); **Eclipse proc chance Wrath 40% / Starfire 60%** (2026-03-19). Post-release hotfixes: Elune Infusion fix [staff, 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139); Glyph of the Moon visual [staff, 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490). Player reading of the change: "we lost 20% spell haste on Starfire for 9% crit that doesn't scale eclipse" [Froghijab420 (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172180#p172180) — note: 1.18.0 Eclipse bonus scales with crit chance per the staff formula; Froghijab's "doesn't scale eclipse" is a player claim.
- Itemization: T2.5 Genesis re-itemized for Balance (Boots +17 Int/16 Sta/14 Spi/1% hit/23 SP; Helm +20 Int/16 Sta/14 Spi/2% crit/32 SP/5 MP5; Shoulders +19 Int/13 Sta/10 Spi/10 pen/27 SP; Trousers +22 Int/19 Sta/16 Spi/1% crit/1% hit/36 SP; Vest +24 Int/22 Sta/19 Spi/1% crit/1% hit/30 SP/20 pen) [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52800#p52800); Feralheart (pre-raid) set re-itemized to spell power/hit/crit [Dragunovi (staff), 2023-10-17](https://forum.turtlecraft.gg/viewtopic.php?p=71699#p71699); Atiesh (Druid) 150 SP + 2% haste aura [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276); Idol of Ebb and Flow (Cla'ckora) −0.2 s Starfire; Idol of the Moonfang +1% aura crit → reworked 1.18.0 to "Moonfire, Savage Bite and Shred restore 50 Mana and 125 Health ... doubled on a critical strike" [Dragunovi (staff), 2025-06-30](https://forum.turtlecraft.gg/viewtopic.php?p=137624#p137624).

## Talent build

Point counts from the most detailed source (Scattyau 2025-11-11, 1.18.0 tree): "Genesis in Resto is too strong to pass up, so you have 13 points in Resto ... we're still bloated with 38 points in Balance. Firstly, you need the Core Talents. Everthing that increases damage, hit, range, crit, cast times, Moonkin Form, BoAT, Eclipse. That is 35 points. So, we have 3 points to flex, between interruption avoidance, improved moonkin form, gale winds, or any utility cross-tree. Improved Moonkin Form is a one-point wonder, since the only scaling is the cooldown going 30/25/20 seconds ... Gale Winds is amazing raid utility, but it adds no damage, so most go with interrupt avoidance, but it still brings you to 76% during an enraged owlkin proc".

| Tree | Talent | Points | Source |
|---|---|---|---|
| Balance | Improved Wrath | 5/5 | "damage ... cast times" core (Scattyau); Wrath scaling (Kangaraxxus) |
| Balance | Nature's Grasp / Improved Nature's Grasp | 1 / 0 | "Nature's Grasp: in Balance is worth one point" [Chev03, 2026-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=165791#p165791); "just the 1 in initial point is enough" [Fornow (player), 2024-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=109616#p109616) |
| Balance | Improved Moonfire | 2/2 | "they only get +10% to Moonfire" crit (Halfgeek9); Moonfire is ~22% of damage (Scattyau) |
| Balance | Natural Weapons | 3/3 | 3% spell hit (Reploidrocsa 2023) |
| Balance | Natural Shapeshifter | 2–3 | "only 2/3 into natural shape shifter" (Fornow, leveling) |
| Balance | Moonfury | 3/3 | "Your build is missing moonfury which is big for dot damage" [Froghijab420, 2026-03-25](https://forum.turtlecraft.gg/viewtopic.php?p=172460#p172460); Scattyau argued for its removal as bloat |
| Balance | Omen of Clarity | 1/1 | mana; ~10% proc (Kangaraxxus) |
| Balance | Nature's Grace | 1/1 | −0.5 s and −0.5 s GCD after crit; "in patch 17 they just changed GCD of Wrath specificly" [Kangaraxxus, 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83543#p83543) |
| Balance | Moonglow | 3/3 | mana (core per Scattyau's "everything that increases ... " — inferred) |
| Balance | Nature's Reach | 2/2 | range (core) |
| Balance | Vengeance | 5/5 | crit damage (core) |
| Balance | Guidance of the Dream | 3/3 | (inferred core) |
| Balance | Moonkin Form | 1/1 | |
| Balance | Improved Moonkin Form | 1/3 | "one-point wonder" (Scattyau) |
| Balance | Owlkin Frenzy | 1–3 | "Instead 3/3 Owlkin Frenzy put 1" [Templar85, 2025-01-11](https://forum.turtlecraft.gg/viewtopic.php?p=116254#p116254) (leveling); pushback |
| Balance | Balance of All Things | 3/3 (1.18.1; was 5) | "changing balance of all things to 3 talent points... It's...nice? But the extra 2 points aren't going into anything particularly meaningful" (Jizzus 2026-03-24) |
| Balance | Gale Winds | 0–2 | raid utility only (Scattyau); "gale winds (hurricane slows attack speed)" skip for leveling (Fornow) |
| Balance | Eclipse | 1/1 | capstone |
| Restoration | Improved Mark / Furor / Nature's Focus / Sylvan Blessing → Genesis | 13 total | "13 points in resto then the rest in balance" [Studbucket, 2025-01-11](https://forum.turtlecraft.gg/viewtopic.php?p=116230#p116230) (image); Genesis "works with both DOTs & HOTs" [Daoc2001, 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108779#p108779); "Sylvan blessing is amazing" (Fornow) |

Build links (opaque, 1.17.2/1.18.0 tree): solo-grind full balance `https://talents.turtlecraft.gg/druid?points=piaZYKFYZLFQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%3D` and raid/solo hybrid with Improved Mark `...?points=oCaYYKFYRLFQBAAAAAAAAAAAAAAAFAAQAAAAAAAAAAA%3D` [Bigsmerf, 2024-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=109551#p109551); Imonobor's solo `...?points=pCaaYKFYZLFABAAAAAAAAAAAAAAAFAAAAAAAAAAAAAA%3D` and group `...?points=oACYYJFYBKFABAAAAAAAAAAAAAAAFAAoDJDAAAAAAAA%3D` [Imonobor, 2024-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=109622#p109622). **No post-1.18.1 raid build link exists** (Trevor89 posted a proposed tree redesign, not a build).

**Patch validity**: 1.18.1 reduced BoAT from 5 to 3 points and rebalanced Moonfury/Eclipse. The 38/13 split (Scattyau) therefore has 2 freed points; sources do not say where they go (gap). Everything else is unchanged.

## Stat priority

- **Spell hit to cap first**: 16% vs bosses, 13% from gear with Natural Weapons (Reploidrocsa 2023-04-12; "You gear like a warlock and maximize spell hit, so bloodvine will be your friend for years" Bayanni, 2023-04-12, quoted in [Reploidrocsa p41236](https://forum.turtlecraft.gg/viewtopic.php?p=41236#p41236)). **Consensus.** Later dissent: "sacrifice hit for crit" per kierova-era posts (t18468, mid-2025) — **contested minority**.
- **Crit > Haste**: "apart from spell power the Boomkin stat prio is Crit>Hit>Haste" [Noobikscube, 2025-02-02](https://forum.turtlecraft.gg/viewtopic.php?p=118694#p118694); "Crit triple-dips by increasing damage per cast, proccing Nature's Grace ... and also increasing the Eclipse multiplier. My calculations put 1% crit equal to around 4-5% Haste ... EDIT: Moriena pointed out, Haste's GCD is 1.0s base, 0.5s with talent. So it still benefits from Haste" (Scattyau 2025-11-11); "Haste is fine on a boomie" [Kangaraxxus, 2024-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=111507#p111507). Post-1.18.1: Jizzus argues crit is "the opposite of what we need" (consistency) — opinion, not a weight.
- **Exchange rates** (Kangaraxxus calculator, pre-CC2): "1% hit ~= 1.13% crit ~= 12.2 SP" [Kangaraxxus, 2023-09-30](https://forum.turtlecraft.gg/viewtopic.php?p=67792#p67792), later "1% hit ~= 15 SP" fully buffed [Kangaraxxus, 2023-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=76012#p76012); calculator `https://docs.google.com/spreadsheets/d/1IACK4CltzOMmULWtprWE9lV86zl2La3fUZufOw6we9g` (also linked from the wiki Druid page). Crit math dispute by Icedcream (p75070). **Pre-1.18.1 (pre-Eclipse) numbers.**
- **Spell penetration**: "most bosses have 15 spell res to all types ... I recommend having 20 spel pen, T2.5 set provides 40 ... some bosses have more than 15 spell res, like Ouro, and i think KT too. I have set with 70 spell pen compromising 2% hit and some SP, but it very much worth it" [Kangaraxxus, 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83572#p83572).
- Reference BiS stats: "I believe I'm BiS at 1028sp and 24% crit fully raid buffed" [Bayanni, 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83512#p83512); crit by tier "T1 geared Balance Druids have around 20% spell crit. T2 geared around 25% spell crit. T3 geared around 30% ... To reach 30% Eclipse dmg bonus, a Balance Druid must have 34% spell crit" (Halfgeek9 2025-08-14).
- Leveling/solo: Spirit for no downtime (Daoc2001 2024-11-20) — see `leveling.md`.

## Single-target rotation

### Pre-CC2 (before 2024-10-12) — obsolete, for reading old logs
"keeping up moonfire (1st button) and pressing starfire (2nd button)" (kierova); Wrath+Moonfire theoretically better per Kangaraxxus ("Best DPS will always be keep MF on as many targets as possible without clipping and use rest of available gcd's on Wrath", 2023-09-30) but "Wrath isn't better based on extensive testing ... my best patchwork using wrath and full consumes was 502.8dps ... I got 761.7dps using starfire without full consumes" [Bayanni, 2024-01-03](https://forum.turtlecraft.gg/viewtopic.php?p=83522#p83522) — **contested**, unresolved (Kangaraxxus blamed arcane-only SP, ping, spell pen).

### CC2 → 1.18.1 Eclipse rotation (current)
Spells: "moonfire (1st), insect swarm (2nd), wrath (3rd), starfire (4th)" (kierova 2025-06-09). Mechanics per staff: Eclipse procs on crits — Wrath (Nature) crit → Lunar/Arcane Eclipse (buffs Starfire); Starfire crit → Solar/Nature Eclipse (buffs Wrath); 15 s; each Eclipse has its own 30 s CD; proc chance 40%/60% after 2026-03-19 (was 30/50). Sources' conditions:

1. Pre-pull: Moonkin Form, Omen of Clarity buff, Faerie Fire, Insect Swarm then Moonfire on the target (order not specified; both DoTs 18 s). Before 1.18.1 you could "stack 0.5 sec reductions before a boss fight" with BoAT charges — gone in 1.18.1 (Jizzus 2026-03-24).
2. **Fishing phase** (no Eclipse up): chain-cast the spell whose Eclipse you want next. "Arcane Eclipse is where Druid dps is good, because of Curse of Shadows in raids. Wrath being nature doesn't benefit, and get higher partial resists" (Halfgeek9) → fish with Wrath for Lunar Eclipse when Curse of Shadows is up; "A lot of the times it takes you 3 maybe 4 or maybe more wraths to get a lunar eclipse" (Jizzus).
3. **On Eclipse proc: stop-cast and switch immediately.** "if you are hard-casting a 3s Starfire, and your last cast procced your Nature Eclipse, it is better to CANCEL the cast, write off the whole 1.5s GCD, and instead begin chain casting Wrath" (Scattyau); "when an Eclipse procs, you're often forced to stopcast the spell you just started because letting it go through is a DPS loss" (Auralys 2026-03-23). Track with an MPOWA aura (kierova). Note the Wrath proc is on *hit* (travel time) so 1–3 s of the 15 s are lost (Scattyau).
4. **Inside Lunar Eclipse**: spam Starfire; keep Moonfire on the target for the BoAT +9% Starfire crit (1.18.1); "you'd rather spend the entirety of your lunar casting as many starfires as possible except for the last few seconds where you might want to indeed reapply moonfire if there's not enough time left for your starfire to hit" (Jizzus). Idol of Ebb and Flow −0.2 s Starfire.
5. **Inside Solar Eclipse**: spam Wrath; keep Insect Swarm up for the BoAT 30% mana return on Wrath (1.18.1). Wrath is GCD-bound ("Wrath is GCD capped with 0 haste", Scattyau; Nature's Grace lowers Wrath GCD to 1.0 s per Kangaraxxus 2024-01-03).
6. **DoT refresh**: "it is mathematically worth clipping your DOTs at a certain point to refresh them with the Eclipse bonus. However, we have two DOTs with practically identical durations ... you really want to refresh them together. Optimal play means refreshing one with Eclipse out of sync" (Scattyau) — refresh DoTs inside the matching Eclipse when possible; otherwise never let them drop. Moonfire ≈ 22% of damage (Scattyau); Idol "17% Moonfire damage that scales with Spellpower ... close to a 4% total DPS gain" (Scattyau; BoE, ~20 g).
7. **Balance of All Things** (1.18.0 form): charges recharge "30% on each DOT tick", 3 charges, −0.5 s Starfire each (Scattyau) — spend by casting Starfire. In 1.18.1 the charge mechanic is replaced by the passive crit/mana effects above, so no decision is needed.
8. Omen of Clarity procs: use on the most expensive spell in the current phase (Starfire) — inferred; no source states it.
9. Trinkets on Lunar Eclipse (Scythe of Elune, Clackora, Sigil — named by Auralys as not proccing from DoTs/Hurricane).

## Multi-target / AoE

- 2–3 targets: multi-DoT — "keep MF on as many targets as possible without clipping and use rest of available gcd's on Wrath" (Kangaraxxus 2023-09-30, pre-CC2 but still the only multi-target advice); Insect Swarm stacks between druids (staff 2024-10-21).
- 4+ targets: Hurricane (10 s CD after 2025-03-30; Gale Winds −10/20% mana and attack-speed slow) — "there kinda isn't an 'aoe' spec for balance ... gale winds ... pretty much just gives hurricane the attack speed reduction it used to" (Bigsmerf 2024-11-23); "I don't see balance druid being good at AOE like mage or paladin" (Fornow 2024-11-24). AoE threshold: sources don't give one; Hurricane on 4+ is the only option. Hurricane ticks do not proc item effects (Auralys 2026-03-26).
- Trash utility: Faerie Fire spam (Bayanni 2024-01-03).

## Cooldowns and resources

| Cooldown / resource | Rule | Source |
|---|---|---|
| Innervate | self-innervate is fine "if you're absolutely sure no one else needs it" | [Bigsmerf, 2025-07-17](https://forum.turtlecraft.gg/viewtopic.php?p=140128#p140128) |
| Mana consumables | "Major Mana Potion, Nordanaar Herbal Tea, Dark Rune, Innervate, Nightfin Soup, Mageblood Potion. Use them" | kierova 2025-06-09; Jizzus: "mana isn't an issue if you have innervate, mana potions, tea/demonic rune/dark rune" (Ambershire BWL) |
| Omen of Clarity | ~10% proc ≈ 10% mana cost reduction; must be cast (30 min) | Kangaraxxus 2023-10-15 |
| Owlkin Frenzy | pushback resistance 30% (CD 20 s at 3/3) — take 1 point | staff; Scattyau |
| Tranquility / Rebirth | as raid lead calls; both drain mana — Jizzus lists a fight where "you were forced to both tranquility and combat ress" as the mana-problem case | |
| Eclipse | not a button; 30 s CD per type; plan trinkets for Lunar | staff 1.18.0 |
| Nature's Grace | on crit, −0.5 s cast and GCD (Turtle custom, Wrath GCD 1.0 s) | Kangaraxxus 2024-01-03 |

## Role strategy

- Group with casters for Moonkin Aura; Curse of Shadows matters for Starfire (Halfgeek9). Bring 20 spell pen; a 70-pen set for Ouro/KT (Kangaraxxus 2024-01-03).
- Expect one boomkin slot; "15% crit spread across 5 players is a dps loss for the raid compared to bringing another mage or a warlock" (Jizzus) is the post-1.18.1 raid-lead argument you will meet.
- Use nampower.dll for the GCD/latency issue with 1.0 s Wraths ("consider using nampower.dll", Kangaraxxus 2024-01-03; Jc473 traced a Nature's Grace stutter to Nampower [Jc473, 2024-01-05](https://forum.turtlecraft.gg/viewtopic.php?p=83710#p83710)).
- Off-role: decurse, Innervate, Rebirth, emergency heals from Moonkin (must shift out).

## Gear / enchants / consumables

- **Tier**: Balance = legacy T2.5 Genesis (re-itemized 2023, stats above), T3 (6-set: "Six pieces of T3 considered to give static 1% dps increase" via unresistable debuff, Kangaraxxus 2024-12-05; 8-set haste per Scattyau), T3.5 (5-set Improved BoAT 50%; "our 5p T3.5 bonus, the best set in game right now"). T2 = PvP set: "Tier 2 in my eyes as a boomy player is indeed PVP, because if you combine Idol of the moonfang + 5 t2 pvp set you basically just need to spam MF and everytime that crits you get a lot of healing + shield" [Fusketa (player), 2026-02-23](https://forum.turtlecraft.gg/viewtopic.php?p=169246#p169246); "The tier 2 bonuses are all inconsequential in pve" (Jizzus). T1 3-set gives crit [Deefe, 2026-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=169126#p169126). Haste on T3/T3.5 criticized (Noobikscube 2025-02-02; Bigsmerf 2025-04-25 [p128416](https://forum.turtlecraft.gg/viewtopic.php?p=128416#p128416)).
- **Idols**: the 17% Moonfire BoE idol (name not given in the post; ~20 g) is BiS; Idol of Ebb and Flow second (Scattyau); Idol of the Moonfang (1.18.0 rework) for PvP/T2.
- **Weapon**: Atiesh (Druid) 150 SP + 2% haste; Scythe of Elune (K40, named by Scattyau/Auralys; stats not given).
- **Pre-raid**: Feralheart set (SP/hit/crit, staff 2023-10-17); Bloodvine set for hit (Bayanni 2023); "gear like a warlock".
- **Consumables** (Kangaraxxus full-buff SP list): "Flask(150) + Greater Arcane Elixir(35) + Oil(35) + Food(22) + Dreamshard Elixir(15) + Dream tonic(35) = 292" (2023-11-05); mana: Major Mana Potion, Nordanaar Herbal Tea, Dark/Demonic Rune, Nightfin Soup, Mageblood (kierova; Jizzus).

## Common mistakes

1. Not hit-capped (13% gear) — misses also cannot proc Omen (Icedcream p75052).
2. Finishing a cast after an Eclipse proc instead of stop-casting (Scattyau; Auralys).
3. Fishing for Solar when Curse of Shadows favors Lunar (Halfgeek9).
4. Letting DoTs drop / refreshing both outside Eclipse (Scattyau).
5. Stacking arcane-only spell power (Kangaraxxus 2024-01-03) or skipping spell pen for Ouro/KT.
6. Taking 3/3 Improved Moonkin Form or 2/2 Gale Winds in a raid DPS build (Scattyau).
7. Playing moonkin as a turret in PvP ("Never try to play moonkin as a pure caster" [Turboman, 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143254#p143254)) — see `pvp.md`.

## Sources

| Source | Authority | Date | Era | Agreement |
|---|---|---|---|---|
| [Scattyau p159149](https://forum.turtlecraft.gg/viewtopic.php?p=159149#p159149) "Current State of Boomkin" | player (9/9 K40 main; detailed numbers) | 2025-11-11 | 1.18.1-announced (1.18.0 kit) | single, widely agreed in thread |
| [Jizzus p172261](https://forum.turtlecraft.gg/viewtopic.php?p=172261#p172261), [Auralys p172020](https://forum.turtlecraft.gg/viewtopic.php?p=172020#p172020)/[p172523](https://forum.turtlecraft.gg/viewtopic.php?p=172523#p172523), [Froghijab420 p172180](https://forum.turtlecraft.gg/viewtopic.php?p=172180#p172180) | players (BiS Ambershire / K40) | 2026-03-23..26 | post-1.18.1 | consensus (negative) |
| [Noobikscube p134706](https://forum.turtlecraft.gg/viewtopic.php?p=134706#p134706), [p118694](https://forum.turtlecraft.gg/viewtopic.php?p=118694#p118694) | player (top boomkin claim, Kara40 log) | 2025-06-08, 2025-02-02 | pre-1.18.1 | contested with Halfgeek9/Tarsis |
| [kierova p134911](https://forum.turtlecraft.gg/viewtopic.php?p=134911#p134911) | player | 2025-06-09 | pre-1.18.1 | rebuttal post |
| [Halfgeek9 p145279](https://forum.turtlecraft.gg/viewtopic.php?p=145279#p145279) | player | 2025-08-14 | pre-1.18.1 (1.18.0 PTR) | single (math) |
| Kangaraxxus calculator thread t10384/t16343 (p67792, p70906, p76012, p83572, p111507) | player (theorycrafter; calculator linked from wiki) | 2023-09 .. 2024-12 | pre-1.18.1, pre-Eclipse | contested (Bayanni, Icedcream) |
| [Bayanni p83522](https://forum.turtlecraft.gg/viewtopic.php?p=83522#p83522), [p83512](https://forum.turtlecraft.gg/viewtopic.php?p=83512#p83512), [p83509](https://forum.turtlecraft.gg/viewtopic.php?p=83509#p83509) | player (BiS Naxx boomkin 2024) | 2024-01-03 | pre-1.18.1 | contested |
| [Reploidrocsa p41236](https://forum.turtlecraft.gg/viewtopic.php?p=41236#p41236) hit cap | player | 2023-04-12 | pre-1.18.1 | consensus |
| Staff: Dragunovi p102966/p52800/p71699/p105276/p137624, Jamey p104207/p113460/p141159/p166071, Torta p124504 | staff | 2023–2026 | all | authoritative |
| t15918 solo builds (Bigsmerf p109551, Fornow p109616, Imonobor p109622, Daoc2001 p108779), t24058 T2 (Deefe, Fusketa), t20345 mana (Avereth, Bigsmerf) | players | 2024–2026 | pre/announced | single each |
