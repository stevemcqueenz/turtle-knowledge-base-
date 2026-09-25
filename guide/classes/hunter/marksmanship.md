# Marksmanship Hunter (ranged DPS)

**Recommendation:** play the raid-tested **12/37/2** build. Keep Auto Shot running and never clip it. Cast **Aimed Shot** on cooldown and at once on every **Lock and Load** proc. Fill with **Steady Shot**, and weave **Arcane Shot** after Steady to fish for crits. Skip Multi-Shot and Serpent Sting on a single target. Open trash packs with **Volley**. Get ranged hit to 8% (7% with a +5 ranged weapon skill item or book), then stack Agility and crit. Crit is worth about 50 AP since 1.18.1.

| | |
|---|---|
| Role | Ranged physical DPS; baseline Trueshot Aura; Tranquilizing Shot; safe pulls from 41 yards |
| Viability (1.18.1) | **A (raid).** Rotation is now proc-driven, and a good MM sims about equal to Survival on single target [[d:hunter#1491704423427342497]]. Overall raid consensus puts it slightly behind Survival and close to BM, mainly because Lock and Load and the ammunition procs are clunky [[d:hunter#1489032257317507102]]. Parses swing on Lock and Load luck: "MM is just a slot machine" [[d:hunter#1486124588764237894]], [[d:hunter#1491122275997585498]]. |
| Difficulty | High. Two RNG systems (Lock and Load and the Experimental Ammunition cycle) plus auto-shot weaving [[d:hunter#1484603658191638698]], [[d:hunter#1485091689566568621]] |
| Strengths | Ranged safety on mechanics-heavy fights; pierce-line Aimed Shot and Volley on packs [[d:hunter#1491704423427342497]], [[d:hunter#1486284331247996989]]; real burst in PvP [[d:hunter#1485349629468999740]] |
| Weaknesses | Weak for a fresh 60 with low crit, because Lock and Load only triggers on crits [[d:hunter#1485396418599587942]]; tighter mana than before the patch [[d:hunter#1484987332020142081]]; the dead zone |

Before 1.18.1, MM was "auto → Steady → Multi → auto" with Aimed Shot unused. Guides that tell you to skip Aimed Shot, or that talent Steady Shot or Trueshot Aura, are out of date. Both are baseline now [[d:hunter#1488874340295643166]], [[d:hunter#1487446185630371870]].

## How to play

The level-60 decision loop for the 12/37/2 build. Details are in the sections linked below.

1. **Opener:**
    1. Send the pet as the tank hits.
    2. Hunter's Mark, then Auto Shot.
    3. Start Steady Shot as the Auto Shot fires, and queue Arcane Shot behind it [[d:hunter#1489708299913003218]].
    4. Rapid Fire and trinkets on the pull ([cooldowns](#cooldowns)).
2. **Single-target loop:** Aimed → Auto → Steady → Arcane → Auto ([rotation](#single-target-rotation)).
    1. Never clip Auto Shot.
    2. Aimed Shot on a **Lock and Load** proc.
    3. Aimed Shot on cooldown.
    4. Arcane Shot on Enchanted Ammunition, only after the Aimed Shot has landed.
    5. Steady Shot as the filler.
    6. Arcane Shot after Steady when it fits.
    7. No Multi-Shot on one target. Serpent Sting only if the raid wants the Nature Ammunition debuff.
3. **Cooldowns:**
    - Rapid Fire on pull, or with Bloodlust.
    - On-use trinkets on the opener.
    - Feign Death whenever threat gets close. Improved Feign Death is mandatory.
4. **AoE switch rule:**
    - **2 targets:** Multi-Shot when it fits.
    - **3+ targets:** Volley opener, then Multi-Shot, then a Lock and Load Aimed Shot down a line of mobs ([AoE](#aoe-rotation)).
5. **Resource rule:** Aspect of the Hawk until you are low on mana, then Aspect of the Viper until the fight ends [[d:hunter#1478128745838674021]]. Mana oils and Mageblood let you skip Viper ([resources](#resource-and-threat-management)).
6. **Movement and situational:**
    - Arcane Shot while moving [[d:hunter#1494752221303279848]].
    - Stay out of the dead zone.
    - Volley needs you standing still.

## Talent build

### Raid 12/37/2 (recommended)

Dresche raided Kara40 with this build and posted it with his gear on release day [[d:hunter#1484611330236354791]], [[d:hunter#1484693106921312508]]. The same week he noted that most raiders ran "13/36/2" (the variant below) [[d:hunter#1484695034027835592]].

| Tree | Talent | Points |
|---|---|---|
| Beast Mastery | Swift Aspects | 5/5 |
| Beast Mastery | Endurance Training | 3/5 |
| Beast Mastery | Improved Revive Pet | 2/2 |
| Beast Mastery | Coordinated Assault | 1/1 |
| Beast Mastery | Unleashed Fury | 1/5 |
| Marksmanship | Efficiency | 5/5 |
| Marksmanship | Lethal Shots | 5/5 |
| Marksmanship | Hawk Eye | 2/2 |
| Marksmanship | Aimed Shot | 1/1 |
| Marksmanship | Swiftshot | 3/3 |
| Marksmanship | Endless Quiver | 2/2 |
| Marksmanship | Mortal Shots | 5/5 |
| Marksmanship | Experimental Ammunition | 1/1 |
| Marksmanship | Piercing Shots | 2/2 |
| Marksmanship | Barrage | 3/3 |
| Marksmanship | Improved Marksmanship | 2/2 |
| Marksmanship | Ranged Weapon Specialization | 5/5 |
| Marksmanship | Lock and Load | 1/1 |
| Survival | Swift Reflexes | 2/2 |

Split **12/37/2**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/hunter?points=FYACBI-AoAoRDQoBTQoB-AQ` · `talents.turtlecraft.gg/hunter/X0216-55DKU8KV-0C`. [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=530002011-0505213250123251-002)

Why these points:

- **Aimed Shot, Experimental Ammunition and Lock and Load** are the new MM core. Aimed Shot has a 2 s cast and a 26 s cooldown. Lock and Load resets it on a Steady, Aimed or Arcane Shot crit [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). Only a crit resets it; a non-crit never does [[d:hunter#1487440846071533629]].
- **Swiftshot 3/3** lowers the Arcane Shot and Aimed Shot cooldowns [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). Take 3/3, not 2/3 [[d:hunter#1490833352620511253]].
- **Barrage 3/3** cuts Volley from a 3 s cast to 1 s [[d:hunter#1486055681734869063]].
- **Coordinated Assault** (1 point) is still worth it with a pet out. It dropped from ~8% to ~3% of MM damage after the 1.18.1 nerf [[d:hunter#1484609979657752868]].
- Sofie sums up the only real MM talent choice: **Improved Stings + Improved Slaying, or Coordinated Assault** [[d:hunter#1484685097708818716]]. Everything else is fixed.
- **Improved Hunter's Mark no longer exists.** It was removed in 1.18.1 [[d:hunter#1484366835540299878]], [[d:hunter#1484399000571347146]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **13/36/2** | Thick Hide 3 and Unleashed Fury 2 replace Endurance Training 3 and 1 Swiftshot; adds Improved Stings 2 | `FAAaBQ-AoCoRAQoBTQoB-AQ` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=500032012-0525210250123251-002)) | maaadcheddar, "tweakable for less pet dmg/more personal dmg" [[d:hunter#1485489793508053022]]; the common raid shape [[d:hunter#1484695034027835592]] |
| **Petless 5/39/7** (Alone Against the World) | Only Swift Aspects in BM; adds Improved Stings 2 and Improved Slaying 3; **Alone Against the World 2/2** (+6% damage with no pet) | `F-AoCoRDQoBTQoB-YQAC` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=5-0525213250123251-3020002)) | The most-posted post-patch MM code [[d:hunter#1484212683426365450]], [[d:hunter#1484306420932411423]]. Worth it on fights where your pet does little: many Naxx bosses had pet damage "well under 6%" [[d:hunter#1486310800736911400]]. Otherwise it is a small DPS loss taken for ease of play [[d:hunter#1486777738852306976]]. Devs describe it as a QoL option, weaker than good pet play [[d:hunter#1493000939848728740]] |
| Petless 5/39/7, Improved Stings 5 | Improved Stings 5/5 instead of Swiftshot 3/3 | `F-AoFoRAQoBTQoB-YQAC` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=5-0555210250123251-3020002)) | Valkory/Itron [[d:hunter#1484642443860119682]] |

!!! warning "Old builds"
    Builds with Improved Hunter's Mark, Improved Steady Shot, a Steady Shot talent point, or Trueshot Aura as a capstone are from 1.18.0 or earlier. Codes posted before 2026-03-20 decode to different talents on the 1.18.1 tree.

## Stat priority and caps

1. **Ranged hit to 8%** ("8% never miss") [[d:hunter#1489060054354366524]]. You need 9% without weapon skill, or 8% with a +5 ranged weapon skill item [[d:hunter#1486358400244777121]]. Every 5 points of weapon skill is 1% hit [[d:hunter#1485763124253425858]]. A +3 racial is only 0.6% hit, so get a +5 source [[d:hunter#1491594913136115732]]. Ranged attacks never glance, so weapon skill does nothing else for them [[d:hunter#1468349640616444056]]. Do not overcap: a common cause of low Naxx parses was 12% ranged hit [[d:hunter#1478175832966041633]].
2. **Agility.** 1 Agility ≈ 3.1 AP [[d:hunter#1494819577165516931]]; about 52–53 Agility = 1% crit [[d:hunter#1491741421059833897]], [[d:hunter#1488074387918688336]].
3. **Crit.** It is now "hunter's highest value stat", with no "too much crit" point [[d:hunter#1489269339789201459]], [[d:hunter#1485067966650519572]]. Lock and Load raised crit's value to "50 territory" in effective AP [[d:hunter#1486705272167858227]], [[d:hunter#1486658244486365204]]. Before 1.18.1 it was 30–40.
4. **Ranged AP**, then **haste**. **Contested:** most players call haste weak or even harmful for MM, because it does not shorten the GCD and makes you clip more [[d:hunter#1491111488214007951]], [[d:hunter#1490408532057526615]]. Focus argues haste is worth ~1% DPS per 10% [[d:hunter#1490408079089471508]].
5. **Armor penetration, Strength and Spell Power: near zero.** Full spell-power consumables add only ~1–2% because Arcane Shot is ~9% of MM boss damage [[d:hunter#1490854183237324840]], [[d:hunter#1491912659304583369]].

Sim-derived weights in Naxx gear (Sofie, using Vellasta's simulator; your gear changes them): Agility 3.35, Crit 47.88, Haste 15.88, Ranged AP 1.00, ranged weapon DPS 13.59, Spell Power 0.43, Armor Pen 0.59, Hit 0 (already capped) [[d:hunter#1494829518886801519]].

Ranged weapon speed: about **3.3** is optimal. It leaves room to weave Arcane Shot without clipping under full haste [[d:hunter#1492170200219652260]]. Steady Shot is normalized to a 2.8 speed, so weapon speed changes timing rather than Steady damage [[d:hunter#1489558856739586161]].

## Single-target rotation

The current loop is **Aimed → Auto → Steady → Arcane → Auto**, hunting for Lock and Load procs [[d:hunter#1488874340295643166]]. Hidden timings you need to know:

- Every shot has a hidden 0.5 s "shooting" portion that haste cannot shorten. Steady Shot is 1 s + 0.5 s, and only the 1 s part is hasted [[d:hunter#1469029669813878804]], [[d:hunter#1477994125315018977]].
- Measured Aimed Shot cast times are 2.15 s with no procs, 1.94 s with Improved Aspects, 1.22 s with Improved Aspects + Lock and Load, and 0.81 s adding Rapid Fire [[d:hunter#1489733155719217306]]. Gear haste does not shorten Aimed Shot [[d:hunter#1489744714294100178]].
- Aimed Shot has a 1 s GCD; Steady Shot has 1.5 s (reported as a bug) [[d:hunter#1485222792323403939]].

Opener: send the pet "exactly at the same time as the tank hits it", and keep it attacking [[d:hunter#1484689822005067816]], [[d:hunter#1484690257113780445]]. Then Hunter's Mark and Auto Shot. Pre-cast Steady Shot and queue Arcane Shot behind it [[d:hunter#1489708299913003218]].

Priority (bot-ready):

1. **Auto Shot must never be clipped.** Start each cast in the reload window, not in the last 0.5 s before an auto fires [[d:hunter#1471459155179995167]].
2. **Aimed Shot** when **Lock and Load** is up (up to 10 s, cast time −1 s).
3. **Aimed Shot** when off cooldown.
4. **Arcane Shot** when **Enchanted (Arcane) Ammunition** is up. It must be cast *after* the Aimed Shot has landed, or it loses the +100% [[d:hunter#1484610058904928467]], [[d:hunter#1485024955962753145]]. Play it as "Steady Shot after Aimed, then Arcane right after Steady" [[d:hunter#1485089214046539917]].
5. **Steady Shot** as the filler after each Auto Shot.
6. **Arcane Shot** after a Steady when it fits without clipping. It is a cheap crit roll for Lock and Load [[d:hunter#1488527231008641095]]. It is also your shot while moving [[d:hunter#1494752221303279848]].
7. **Serpent Sting** only if the raid wants the Nature Ammunition armor debuff: −240 armor that stacks with all other armor debuffs [[d:hunter#1488876111252160624]]. It is a personal DPS loss ("100 SP = 100 more damage over 15 seconds") [[d:hunter#1485050636293902387]], [[d:hunter#1485051121843044404]], but Sofie still uses it in raids for the debuff [[d:hunter#1485389859009859644]].
8. **Multi-Shot: skip on one target.** It cannot trigger Lock and Load [[d:hunter#1486698734736642089]]. The Fire Ammunition explosion is bugged at a flat ~50–60 damage [[d:hunter#1484664003497300118]], [[d:hunter#1486228875125067826]].

Experienced players say that chasing every ammunition proc is "pretty trash". Using only Steady and Arcane to fish for Lock and Load does about the same damage [[d:hunter#1488488059505741957]], [[d:hunter#1488527231008641095]]. Dresche forced every ammo type in Kara40 and measured a DPS loss [[d:hunter#1485384949455392868]].

**Contested:** is Aimed Shot or Steady Shot the "main" button? Sofie first argued Steady, since Aimed depends on procs [[d:hunter#1484607125425487872]]. By the end of release week most testers ran Aimed on cooldown first [[d:hunter#1485050636293902387]], [[d:hunter#1485387819189932214]].

During Rapid Fire + Quick Shots, the window between autos shrinks to about 1 s [[d:hunter#1412710924237799475]]. Keep Aimed and Steady as the priority, since Rapid Fire cuts both cast times by 40% [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).

## AoE rotation

| Targets | Do |
|---|---|
| 1 | Single-target priority above |
| 2 | Multi-Shot when it fits (2+ targets) [[d:hunter#1494752221303279848]]; spend Fire Ammunition on it |
| 3+ | **Volley opener** (3 s cast, 1 s with Barrage 3/3; "free ±2k damage") [[d:hunter#1484723679286923335]], [[d:hunter#1486055681734869063]] → Multi-Shot → Aimed Shot aimed down a line of mobs → Steady/Arcane |
| big packs | Volley + Multi-Shot put one hunter "right below mages" at ~2,500 DPS [[d:hunter#1486284331247996989]] |

- **Pierce line:** a Lock and Load Aimed Shot hits every enemy between you and your target for full damage. Every extra target can proc Lock and Load again [[d:hunter#1484960517842796614]]. The line is very narrow: anything even 1 yd behind the primary target is missed [[d:hunter#1484829044494172222]], [[d:hunter#1489194239022727331]]. Sofie found it "way too chaotic" to line up in her first raids [[d:hunter#1485134563712831658]]. On pure single-target fights, skip it.
- On AoE packs, prioritize Explosive (Fire) Ammunition on Multi-Shot for the extra crits that chain into Aimed Shot [[d:hunter#1486257843756728320]].
- Volley can only be placed while standing still [[d:hunter#1486055681734869063]].
- The ZG hunter trinket from Renataki resets Volley's cooldown, so it is strong on trash [[d:hunter#1484688430268022955]], [[d:hunter#1489296152112271432]].

## Cooldowns

| Cooldown | Use |
|---|---|
| Rapid Fire | On pull, or with Bloodlust. It also cuts Aimed/Steady cast time by 40%, and was buffed to double its effect on Aimed Shot [[d:hunter#1489692709550817407]]. Juju Flurry shares its cooldown category [[d:hunter#1489794704836137140]] |
| On-use trinkets | Badge of the Swarmguard + Jom Gabbar on the opener, then swap to Heart of Hakkar + Slayer's Crest; use an undead trinket on undead bosses [[d:hunter#1482615147359895697]]. Badge is useless if your raid strips boss armor to 0 at once [[d:hunter#1484989129153314989]] |
| Feign Death | **Improved Feign Death is mandatory for MM** [[d:hunter#1484218976014831677]]. New MM pulls threat even without cooldowns, so you can no longer save FD for trinket swaps [[d:hunter#1486215019384541225]] |
| Racials | Blood Fury does not stack with Molten Emberstone (only the larger applies) [[d:hunter#1456621926540644466]] |

## Resource and threat management

- **Mana is tight until 6 pieces of T3.** Flask of Wisdom is your best friend until then [[d:hunter#1485585355523624971]]. Fully raid-buffed MM does not go OOM with a paladin seal, Mageblood and Mana Oil [[d:hunter#1485957589316669572]].
- **Aspect of the Viper** (level 56, 5% max mana per 5 s) [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). The standard is "start with Hawk until low mana and pop Viper until the end of the fight" [[d:hunter#1478128745838674021]]. Viper's mana ticks generate threat, like all mana gain [[d:hunter#1491714117369724928]], [[d:hunter#1491728542373773362]].
- Double **Brilliant Mana Oil** on two one-handers, plus Mageblood and Blessing of Wisdom, lets you skip Viper and keep Hawk up [[d:hunter#1494657155985444864]], [[d:hunter#1494658499815149579]].
- On a target dummy you go OOM in about 1 minute, versus 1.5–2 minutes before the patch [[d:hunter#1484987246099566732]].

## Gear

Your melee weapons are **stat sticks**. MM prefers two one-handers, which give two slots of stats [[d:hunter#1493253877460369448]], [[d:hunter#1494658499815149579]].

### Ranged weapon progression

| Phase | Weapon | Source |
|---|---|---|
| Fresh 60 | Stormwind Vault quest crossbow ("a good starter crossbow") [[d:hunter#1480999389571977379]]; Black Morass (Wardens of Time) exalted gun, rep is soloable [[d:hunter#1483911885194526730]] | [Stormwind Vault](../../instances/stormwind-vault.md), [Black Morass](../../instances/black-morass.md) |
| MC | Rhok'delar (quest), MC Leaf bow | Rhok'delar demon tactics: see [Leveling](leveling.md#rhokdelar-quest) |
| BWL / ES | **Ashjre'thul, Crossbow of Smiting (BWL), Nature's Call (ES)** — sims put all three equal [[d:hunter#1491595841323008050]], [[d:hunter#1491596024500846692]]. The BWL crossbow was slowed from 2.6 to 3.1 speed this patch and now sims well [[d:hunter#1492648292826218506]] | [Blackwing Lair](../../instances/blackwing-lair.md), [Emerald Sanctum](../../instances/emerald-sanctum.md) |
| AQ40 | Larvae of the Great Worm (slightly better) [[d:hunter#1491596024500846692]] | |
| Naxx | Twilight's Hammer gun (proc-dependent), then Soulstring / Slavemaker [[d:hunter#1491596197268557924]] | |
| Kara40 | Rain of Spiders [[d:hunter#1491596197268557924]], [[d:hunter#1464144100914888830]] | [Tower of Karazhan](../../instances/tower-of-karazhan.md) |

Each ranged weapon upgrade was worth roughly +50 DPS on a dummy, and Slavemaker about +100 [[d:hunter#1464178357276115069]] (tested before 1.18.1).

### Melee stat sticks

| Phase | Pick | Source |
|---|---|---|
| BWL (Ambershire) | Hakkar main-hand sword + Hakkar dagger (BiS); Nefarian's new axe is close [[d:hunter#1488100443870466058]]; Noble's Letter Opener (Shen'dralar) + Brutality Blade or Fang of the Faceless; Core Hound Tooth [[d:hunter#1488076683507536002]] | |
| Endgame | **Kingsfall + Scythe of the Unseen Path**, "the premier BM/MM combo even in full Kara40 BiS" [[d:hunter#1489311954748178682]] | |

### Armor

- **Tier:** full **8/8 T2** beats 6/8 T2.5; take T2.5 only if you lack 8/8 T2 [[d:hunter#1485527618387447910]]. T3.5 pieces are only ~3 Agility better than T3, so keep 6–8 T3 for its mana bonus [[d:hunter#1486198005571915929]]. The T3.5 set bonus is considered "trash now" [[d:hunter#1486360018423906466]] (single source).
- **Timbermaw Hold set** (new 1.18.1 mail set, 5-piece bonus): called "so busted" [[d:hunter#1484588117561315550]], [[d:hunter#1484588808786935982]]; its Agility + AP structure is especially good for BM [[d:hunter#1485095123892310026]]. See [Timbermaw Hold](../../instances/timbermaw-hold.md).
- **Cloak:** Shroud of Dominion "BiS unchallenged" [[d:hunter#1484522836751286392]]; the Sapphiron cloak (~1 crit + 50 AP) [[d:hunter#1484532049271591014]].
- **Gloves:** Emerald Sanctum gloves are BiS outside tier [[d:hunter#1484986696087900160]]. PvP gloves (Multi-Shot bonus) are no longer worth it [[d:hunter#1484986775905501354]].
- **Neck:** Prestor's Talisman has more effective AP than Onyxia's neck [[d:hunter#1488162535181123715]] and is BiS until the Kel'Thuzad neck [[d:hunter#1488165094641635400]].
- **Rings:** Quick Strike Ring (1% crit + 30 AP) beats Circle of Applied Force for MM [[d:hunter#1491764225528565771]]. The two new crit/hit rings "brick each other"; the pure-crit ring alone is BiS [[d:hunter#1489422719861784748]].

### Pre-raid

There is no maintained post-1.18.1 pre-raid list [[d:hunter#1489540608925237259]]. The best "reasonable" list (quest and dungeon only, built around the 8% hit cap; written June 2025) is: Backwood Helm, Mark of Fordring, Truestrike Shoulders, Cape of the Black Baron, Time-Blackened Chestpiece, Warpwood Bindings, Frostchain Gauntlets, Plaguehound Leggings, Windreaver Greaves, 2× Tarnished Elven Ring, Blackhand's Breadth + Royal Seal of Eldre'Thalas, Barbarous Blade, Bloodseeker [[d:hunter#1380772995018264639]]. Also consider:

- The Dire Maul hunter book trinket ("a really strong trinket") [[d:hunter#1461584148463489085]].
- Devilsaur Eye as an opener trinket [[d:hunter#1424397159415156787]].
- Three Black Morass pieces [[d:hunter#1438594573474463814]].
- New Turtle leather pieces from Karazhan Crypt trash [[d:hunter#1490111388067168298]].

Contested: Devilsaur Eye loses to other trinkets once you raid, since about 30 s of downtime per 20 s of +150 AP averages only ~60 AP [[d:hunter#1482866757780635789]].

## Enchants per slot

| Slot | Enchant | Source |
|---|---|---|
| Ranged weapon | **Facetted Crystal Scope** (+2% ranged crit; Engineering schematic from the Draenei Exiles quartermaster at Revered, Moonwhisper Coast; ~150g in mats). It tested +1.9–2.5% crit over 1,000 shots [[d:hunter#1485556365173850123]], [[d:hunter#1485775614395813978]], even though its tooltip did not show at first [[d:hunter#1486823166675386589]]. The old +7 damage scope is obsolete [[d:hunter#1484567181239783515]] | [[d:hunter#1484564082014289983]] |
| Head / Legs | ZG Falcon's Call (ranged AP) > 8 Agility > 1% haste [[d:hunter#1438250114631077970]] | pre-1.18.1 |
| Shoulders | Naxx Might of the Scourge long-term [[d:hunter#1428724072581173340]]; otherwise 2% haste (Hyjal) [[d:hunter#1428907764486508595]] over the ArP enchant: "arp is the worst stat, go for haste" [[d:hunter#1485260531487998083]] | |
| Cloak | +3 Agility [[d:hunter#1467696283010732295]] | |
| Chest | +3 stats (+4 only once BiS) [[d:hunter#1467703640436248779]] | |
| Bracers | +7 Agility (Magram) — the best Agility bracer enchant [[d:hunter#1461748119606792446]] | |
| Gloves | +15 Agility (not the 1% haste enchant, unless you deliberately stack haste) [[d:hunter#1480805447006162955]] | |
| Boots | Agility [[d:hunter#1467696283010732295]] | |
| Melee weapons | +15 Agility on each stat stick | [[d:hunter#1489313388919128154]] |

Weapon imbues: **Consecrated Sharpening Stone** is the only stone that works on ranged attacks (undead targets) [[d:hunter#1430224126307598486]], [[d:hunter#1494644137402564749]]. Elemental Sharpening Stones do not add ranged crit [[d:hunter#1490506896967471245]]. Put **Brilliant Mana Oil** on melee weapons for mana [[d:hunter#1486033434416513034]]. Brilliant Wizard Oil adds only a little to Arcane Shot [[d:hunter#1485770711787372657]].

Ammo: **Doomshot** remains BiS [[d:hunter#1484724163993145427]]. Craftable Survival-profession arrows and Enchanted Thorium Shells (17–19 DPS) sit between Thorium and Doomshot [[d:hunter#1485738412853170369]]. An enchanter can add +3 DPS to any stack for 1 Large Brilliant Shard + 5 Arcane Dust [[d:hunter#1485358374832046221]]. Use cheap ammo on trash [[d:hunter#1430833179912175616]].

## Consumables (raid kit)

No world buffs work in Turtle raids [[d:hunter#1484988762441252997]].

| Tier | Consumables |
|---|---|
| Base | Spirit of Zanza, Elixir of the Mongoose, Ground Scorpok Assay, Juju Might, Danonzo's Tel'Abim Surprise (+45 RAP) or Squid Eel Skewer, Consecrated Sharpening Stone vs undead [[d:hunter#1486496184280420533]] |
| Min-max | Flask of Supreme Power, Mageblood Potion, Greater Arcane Elixir, Elixir of Greater Arcane Power, Elixir of Greater Nature Power, Dreamshard Elixir, Dreamtonic, Brilliant Wizard Oil; on the pet: Juju Power, Juju Might, Agility scroll [[d:hunter#1486496184280420533]] |
| Flask | Flask of Wisdom until 6-piece T3, then nothing until Kara40, where Titans is used [[d:hunter#1485563443246530660]]. There is no AP flask [[d:hunter#1485565063770411109]] |
| Burst | Potion of Quickness or Juju Flurry on pull or after Rapid Fire [[d:hunter#1454142527866142942]] |

Stacking traps:

- **Firewater gives melee AP only**; Danonzo's is the ranged AP food [[d:hunter#1494293768617332827]].
- Juju Power does not stack with Elixir of the Giants [[d:hunter#1486561195228926154]].
- Concoction of the Emerald Mongoose's AP part is melee-only [[d:hunter#1486557461317030018]].
- Agility scrolls do not stack with Mongoose. Use them on the pet [[d:hunter#1471637818047729799]], [[d:hunter#1471647575697395732]].
- Squid Eel Skewer and Chimera Chops were changed to stack with other buffs [[d:hunter#1494296665740283934]].
- Sour Mountain Berry (+10 Agility) stacks [[d:hunter#1488735368239910924]].

## Pet for MM

A Raptor is the standard MM raid pet (Savage Rend, high family modifier) [[d:hunter#1485384949455392868]]. In Molten Core many mobs are immune to bleed and poison, so use a Cat or a Wind Serpent there [[d:hunter#1486441211446431937]], [[d:hunter#1486443090188173382]]. Without Coordinated Assault, pets are ~11% of MM damage [[d:hunter#1484549579847499990]]. Full details: [Pets](pets.md).

## Macros and addons

- **ProcDoc** (MM fork, shows Lock and Load and the current ammunition): `github.com/thezephyrsong/ProcDoc` [[d:hunter#1484799468959436950]], [[d:hunter#1486681226126430328]].
- **MetaHunt**: tracks ammunition and Lock and Load; v1.5 can drive a one-button MM rotation with Nampower [[d:hunter#1487104316568375326]], [[d:hunter#1488624322686746945]].
- **Quiver** is unreliable for the new Aimed Shot cast bar ("don't trust Quiver") [[d:hunter#1484601174505295974]]. Alternatives: Quartz [[d:hunter#1480545887297081497]], ShotTimer [[d:hunter#1483011551744233534]].
- **Nampower** silently drops an Arcane Shot queued during Aimed Shot. Raise `NP_MinBufferTimeMs` from 55 to 200 [[d:hunter#1486295222232285184]], [[d:hunter#1486313046669262909]].
- One-press priority macro (SuperCleveRoidMacros; Alysia) [[d:hunter#1486774833995055286]]:

```
/cast [mydebuff:"Enchanted Ammunition"]Arcane Shot;[mydebuff:"Poisonous Ammunition"& noimmune:nature]Serpent Sting;[mydebuff:"Explosive Ammunition"]Multi-Shot;[nocooldown]Aimed Shot;[norangedclip]Steady Shot;
```

- SuperMacro version (Littlechurch; one spell per press, use it like a Steady button) [[d:hunter#1484967791722496192]]:

```
#showtooltip
/firstaction
/cast [mybuff:"Lock and Load"] Aimed Shot; [mydebuff:"Explosive Ammunition"] Multi-Shot; [mydebuff:"Enchanted Ammunition"] Arcane Shot; Steady Shot; [mydebuff:"Poisonous Ammunition"] Serpent Sting
```

  Given the rotation above, drop the Multi-Shot and Serpent Sting branches for single-target fights.

## Raid notes

- **Kara40 Rupturan, phase 2:** stand exactly at the dead-zone edge. Boulders miss you and you still shoot. Side-step 10 yards with the group on Flamestrike [[d:hunter#1491057592150134956]], [[d:hunter#1491057909038059752]]. The same trick works on AQ40 Anubisaths [[d:hunter#1491059182638727278]].
- **Kara40 Mephistroth:** hunters are the designated eye-baiters [[d:hunter#1446047436425400394]].
- **Immunities:** Anomalus (Kara40) and Lava Annihilator (MC) are immune to Arcane Shot and Serpent Sting. The Golem pair and Garr are immune to Serpent Sting [[d:hunter#1485194944426676285]], [[d:hunter#1485212796282081353]].
- **Chromaggus:** Arcane Vulnerability plus Arcane Ammunition produced a 9,300 Arcane Shot crit [[d:hunter#1485060756004147466]].
- **Onyxia:** a piercing Aimed Shot crit can make a whelp "stick" to you [[d:hunter#1484990820791877804]].
- **C'Thun:** Feign Death does not work (a Turtle anti-exploit change) [[d:hunter#1483578888251637981]].
- **Nefarian:** the hunter class call now breaks **all** equipped weapons, melee and ranged. Bring a repair bot or swap weapons with ItemRack [[d:hunter#1485015413837398179]], [[d:hunter#1487930456031625327]].
- Instance pages: [Molten Core](../../instances/molten-core.md), [Blackwing Lair](../../instances/blackwing-lair.md), [Onyxia's Lair](../../instances/onyxias-lair.md), [Tower of Karazhan](../../instances/tower-of-karazhan.md).

## Common mistakes

- Chasing every ammunition proc: it costs DPS [[d:hunter#1485384949455392868]], [[d:hunter#1488488059505741957]].
- Casting Arcane Shot while the Aimed Shot is still in flight: you lose the ammo buff [[d:hunter#1485024955962753145]].
- Using Multi-Shot on one target [[d:hunter#1486698734736642089]].
- Stacking haste, or overcapping hit [[d:hunter#1490408532057526615]], [[d:hunter#1478175832966041633]].
- Playing MM as a fresh 60 with very low crit: Lock and Load rarely procs. Level and gear as BM first [[d:hunter#1485396418599587942]].
- Trusting BetterCharacterStats right after a patch. It misreads ranged crit and hit bonuses, so test on a dummy [[d:hunter#1485077323584765992]], [[d:hunter#1484711307897737388]].
