# Rogue leveling

**Recommendation:** level **Assassination**. It is still the standard 1-60 spec after 1.18.1 [[d:rogue#1490094810277613608]], and the patch "didnt affect leveling too much" [[d:rogue#1490095328584794182]]. You get power spikes at **30 (Envenom)** and **40 (Noxious Assault)** [[d:rogue#1479248496262647858]]. Until Envenom, use a slow sword, axe or mace with Sinister Strike and 1-point Slice and Dice / Eviscerate. From 40, switch to the **two fastest daggers or fist weapons** you can find (1.3-1.4 speed; quality barely matters) [[d:rogue#1483097293434654720]]. The common alternative is Combat with parry and Riposte to 40, then a respec. "You cannot mess up a rogue leveling" build [[d:rogue#1478495114144911590]]; respecs cost at most 5 g [[d:rogue#1473626828609687573]].

Expect the class to feel weak until the mid-20s [[d:rogue#1424766664993542154]] and not change much until about 30 [[d:rogue#1464220405416857673]]. Then at 40: "everything absolutely fucking melts" [[d:rogue#1437552964347625512]]. At level 40 with identical gear, one test measured Combat at 95 average DPS and Assassination at 166 [[d:rogue#1408409761396822088]].

## Which route?

| Route | Pick it if | Sources |
|---|---|---|
| **A: Assassination 10 → 60** (below) | You want no respec and the biggest spikes; slow weapon + Sinister Strike until 40 is fine | "you can go ass talents just use slow swords or whatever until lvl 40 with noxx" [[d:rogue#1481630936326996130]]; GumGuzz: 1-point Eviscerate spam, "keep pumping assasination until 60" [[d:rogue#1452302730873016551]] |
| **B: Combat to 39, respec at 40** | Hardcore, or you want Riposte/parry survivability early | Combat "will give you a bit more survivability and riposte is an awesome skill when going solo" [[d:rogue#1487708730261770362]]; Farban's route [[d:rogue#1468677302392193241]]; "Combat till 40 respec to deep assasination" [[d:rogue#1486118643258495016]] |

**Contested:** Lightemgee warns that early Combat has "almost no offensive talents until like 30" [[d:rogue#1486780845422542908]]; Nuian finds Combat easier to start and Assassination slow to come together before 40 [[d:rogue#1486676972867162173]]. Subtlety is a poor solo leveler [[d:rogue#1474408939960668322]].

## Talent order, route A (Assassination, no respec)

Built from andre's rush order (Ruthlessness, Improved Poisons, Vigor, Envenom, Efficient Poisons → Noxious Assault; Precision after 40; Seal Fate by 55) [[d:rogue#1438923786316546239]]. Ruthlessness by 17 unlocks 1-point Eviscerate spam [[d:rogue#1447473413311565887]]. It ends in the [Assassination raid build](assassination.md). Validated with `talent_tool.py` (VALID, one point per level from 10).

| Level | Talent | Rank |
|---|---|---|
| 10-14 | Malice | 1-5/5 |
| 15-17 | Ruthlessness | 1-3/3 |
| 18-19 | Improved Blade Tactics | 1-2/3 |
| 20 | Relentless Strikes | 1/1 |
| 21 | Improved Blade Tactics | 3/3 |
| 22-24 | Lethality | 1-3/5 |
| 25-27 | Improved Poisons | 1-3/3 |
| 28-29 | Vile Poisons | 1-2/3 |
| **30** | **Envenom** | 1/1 |
| 31-33 | Efficient Poisons | 1-3/3 |
| 34 | Vile Poisons | 3/3 |
| 35-36 | Vigor | 1-2/2 |
| 37-38 | Lethality | 4-5/5 |
| 39 | Murder | 1/2 |
| **40** | **Noxious Assault** | 1/1 |
| 41-45 | Precision (Combat) | 1-5/5 |
| 46-50 | Seal Fate | 1-5/5 |
| 51 | Cold Blood | 1/1 |
| 52 | Murder | 2/2 |
| 53-55 | Improved Eviscerate | 1-3/3 |
| 56-60 | Lightning Reflexes (Combat) | 1-5/5 |

Level 40 checkpoint (31/0/0): [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=rogue&t=005313105033310201) · `AoZDIoDYZAQAB--`. Level 60 (41/10/0): [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=rogue&t=305323105033311251-05005) · `YoaDIoDYZIQoB-AoAo-`

Swaps: Taste for Blood (2 points) is handy while leveling against poison-immune mobs (Rupture for the buff, then Eviscerate) [[d:rogue#1461858045247225907]]; take it instead of Murder or Improved Eviscerate if you like. After Noxious Assault you can also dip into Subtlety for quality-of-life talents (Camouflage, Improved Gouge, Blackjack) [[d:rogue#1472125844351619122]].

## Talent order, route B (Combat to 39, respec at 40)

Avoidance first: "Dodge, parry, riposte, then hit" [[d:rogue#1490392299891462275]]; Riposte early [[d:rogue#1468677302392193241]]. Validated (VALID) including the respec.

| Level | Talent | Rank |
|---|---|---|
| 10-14 | Lightning Reflexes | 1-5/5 |
| 15-19 | Deflection | 1-5/5 |
| 20 | Riposte | 1/1 |
| 21-25 | Precision | 1-5/5 |
| 26-30 | Dual Wield Specialization | 1-5/5 |
| 31-32 | Hack and Slash (swords/axes) | 1-2/2 |
| 33-34 | Weapon Expertise | 1-2/2 |
| 35 | Surprise Attack | 1/1 |
| 36-37 | Improved Sprint | 1-2/2 |
| 38-39 | Setup | 1-2/3 |
| **40** | **Respec** to the route A level-40 checkpoint (31/0/0 above) | — |
| 41-60 | as route A | — |

Level 39 checkpoint (0/30/0): [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=rogue&t=-055051220050122) · `-AoooKCAoBS-`. With daggers instead of swords, take Close Quarters Combat instead of Hack and Slash; it checks only the main-hand weapon type [[d:rogue#1470287318219886715]].

## Abilities and when they matter

| Level | What | Notes |
|---|---|---|
| 10 | Dual wield (trainer) | no quest needed [[d:rogue#1455207036533997640]] |
| 20 | **Poisons** (class quest from the rogue trainer in Orgrimmar/Stormwind) | quest from the trainer [[d:rogue#1474197835162587198]], [[d:rogue#1453172522127200276]]; Instant main hand, Crippling off hand until better poisons [[d:rogue#1330009940076527649]] |
| 30 | **Blade Flurry** (baseline toggle) | "Once you get blade flurry, leveling becomes a breeze" [[d:rogue#1474400046857584650]] |
| 30 | **Envenom** (talent; first reachable at 30) | treat it "like an extra slice and dice" [[d:rogue#1470309775123415110]] |
| 40 | **Noxious Assault** (talent) | replaces Sinister Strike completely |
| 52 | **Dissolvent Poison I** (rank II at 60) | a Rhaena post says 53 [[d:rogue#1454171985125965834]], [[d:rogue#1484532460053069955]] |
| 56 | Corrosive Poison | [[d:rogue#1436637991303905401]] |

Which ranks of Sinister Strike, Eviscerate and so on to skip is not discussed in the sources; train everything **(vanilla baseline)**.

Other leveling notes:

- **Camouflage** is great for leveling and can be dropped later [[d:rogue#1431479248517857354]].
- **Precision** matters against red and orange mobs, less against green ones [[d:rogue#1432029642621190216]]. Hit is "the most important stat until you get like 9% in pve" [[d:rogue#1444368536825761852]].
- Stealth attacks have no hidden crit bonus; that is what Ambush and Cheap Shot are for [[d:rogue#1468488816460435607]].
- Hemorrhage is weak for leveling: 45 energy for barely more than Sinister Strike [[d:rogue#1474410353059430402]].

## Pull and kill loop

### Levels 10-39 (slow weapon)

1. Open with **Cheap Shot** once you have it, to reduce the damage you take [[d:rogue#1478390323825610794]].
2. **Sinister Strike** to build points. As a new player, "forget about backstab, forget about eviscerate" for now [[d:rogue#1478390151750357075]].
3. **Slice and Dice** at any combo points; keep it up [[d:rogue#1478390151750357075]].
4. From 17 (Ruthlessness): 1-point Slice and Dice → 1-point Envenom (from 30) → **1-point Eviscerate spam** until the mob dies [[d:rogue#1434530443642015945]], [[d:rogue#1447473413311565887]].
5. Most low-level damage is auto-attacks; running low on energy early is normal ("that's the neat part, you don't") [[d:rogue#1470280229107925074]], [[d:rogue#1470278842949046403]].

### Levels 40-60 (Noxious Assault, fast weapons)

1. **Cheap Shot** (or Noxious Assault) to open.
2. **1-point Envenom → 1-point Slice and Dice** [[d:rogue#1468115101352722661]].
3. **Noxious Assault** to build.
4. Finish with **Eviscerate**. On elites and long fights you can add a 4-5 point Rupture, which is only worth it with Taste for Blood [[d:rogue#1434530633606107248]], [[d:rogue#1474363294687957103]].
5. **Kidney Shot** to stop damage on dangerous mobs [[d:rogue#1474363294687957103]].

### Poison-immune mobs

Some mobs are immune to your poisons until you get the physical poisons in the low 50s, and your damage drops sharply against them [[d:rogue#1437553193998618725]]. Swap to a different weapon and Sinister Strike (or Backstab), use sharpening stones, or Rupture for Taste for Blood and then Eviscerate [[d:rogue#1461858045247225907]]. Dissolvent (52) helps, but it only applies to Elementals, Mechanicals, Giants and Undead [[d:rogue#1484513053876949133]].

### Multiple mobs

With Evasion, Blade Flurry and Slice and Dice up, a rogue can fight three mobs at once. Use Sap and Distract to avoid adds [[d:rogue#1386261551807336469]]. On 3+ targets, Blade Flurry out-damages a single hard target [[d:rogue#1468685312724172872]].

### Poisons while leveling

Double **Instant** from 20. On long fights (Felwood bears, Stranglethorn gorillas) a stacking poison can do more [[d:rogue#1459069865053786154]]. Dissolvent from 52 on the four types it hits. Poison charges run out in about 20 minutes of fighting ("part of the class fantasy") [[d:rogue#1471162658550972653]], [[d:rogue#1471163599992127558]].

## Resource management and downtime

- Energy is 20 every 2 s [[d:rogue#1489263649020182698]]. Eat and bandage between pulls. Improved Gouge buys time to bandage mid-fight [[d:rogue#1310433604328751185]].
- **Thistle Tea** (Cooking, requires skill 60) restores 100 energy; it is the rogue's "mana pot" [[d:rogue#1446691803414794260]], [[d:rogue#1464645356926271601]], [[d:rogue#1446691918615674973]].
- The **Fiery Weapon** enchant "makes leveling much more bearable" [[d:rogue#1480480688187768956]]. Permanent enchants coexist with poisons; stones and oils do not [[d:rogue#1462882845654777987]].

## Weapons and gear by bracket

| Levels | Weapons | Sources |
|---|---|---|
| 10-20 | Swords, or any slow, high-damage main hand (2.6+ speed ideal) | [[d:rogue#1452317526255075451]], [[d:rogue#1478391183498543146]] |
| 18-40 | Dagger path if you want it: Tail Spike (Wailing Caverns) → Meteor Shard (Shadowfang Keep) → Toxic Revenger (Gnomeregan) → The Betrayer ([Crescent Grove](../../instances/crescent-grove.md), ~33) → Cold Rage Dagger ([Razorfen Downs](../../instances/razorfen-downs.md), ~40) | [[d:rogue#1324107314747408587]] (2025-01 list) |
| 26+ | Dual Cruel Barb with Fiery Weapon (Combat) is a comfortable solo setup | [[d:rogue#1486367289782571109]] |
| pre-40 fast dagger | Slip's Dagger (quest chain; gives Bloodsail rep) | [[d:rogue#1472630840902025408]], [[d:rogue#1472631923921784943]] |
| 40-60 | **2× Sacrificial Kris** (AH) "can easily last you to 60"; Julie's Dagger (1.3, 55); Magram daggers (~48); an RFK random 1.3 BoE | [[d:rogue#1453334104870490202]], [[d:rogue#1484295119937999113]], [[d:rogue#1472265768535064782]], [[d:rogue#1434118036490817629]], [[d:rogue#1455236913337340026]] |
| 45+ swords (route B) | "Trash" (quest, as low as 45) and "Hanzo" | [[d:rogue#1488321557083197642]] |

- **Speed over damage from 40:** a 25-DPS 1.4-speed dagger beats a 34-DPS 1.8-speed one [[d:rogue#1491620541923332257]], [[d:rogue#1491622065210523829]]. With swords at 1.8 or slower you might as well use grey 1.3 daggers [[d:rogue#1457769410730262632]]. Gut Ripper is bad for Assassination [[d:rogue#1472127122071093311]]. The loss per 0.1 s is smaller at low AP (~3 DPS at level 37) [[d:rogue#1461866998521921710]].
- **Armor:** early dungeon pieces worth watching: Blackened Defias set, Triprunner Dungarees, the Grifter's crafted set, Mason's Fraternity Ring, Cruel Barb, The Butcher, the ZF mace, Smoldering Brooch, Shimmering Gold Necklace. The Rallying Cry of the Dragonslayer buff is the one thing worth planning for [[d:rogue#1482487784085389444]]. A hit neck drops in Balor [[d:rogue#1444368193903919227]].
- **52-60:** Stormshroud (level 52) "will literally last you untill bwl" [[d:rogue#1463614657188204789]]. You can buy 4 Stormshroud pieces on the AH instead of farming 58-60 dungeons for Shadowcraft [[d:rogue#1488313065043661020]], [[d:rogue#1488313447199281365]]. Pick up the Distracting Dagger (Dire Maul West, Prince) and Tarnished Elven rings [[d:rogue#1488314766056489122]].
- **Weapon-skill quest:** bring an Ancient Warfare Text + 250 g to Fray Island (off Ratchet) for +5 skill in one weapon type, once per type [[d:rogue#1488300400711958528]], [[d:rogue#1465712103187943603]]. Sell a temporary sword upgrade to pay for it; "+5 is forever" [[d:rogue#1486869224336003112]].

## Dungeons by bracket

| Level | Dungeon | Source |
|---|---|---|
| 12-13 | Ragefire Chasm | [[d:rogue#1481656932015145232]] |
| ~17-20 | [Deadmines](../../instances/deadmines.md) (Blackened Defias set, mostly BoP, from Van Cleef) | [[d:rogue#1447330131533107362]]; level range (vanilla baseline) |
| ~18 | [Wailing Caverns](../../instances/wailing-caverns.md) (Tail Spike) | [[d:rogue#1324107314747408587]] |
| ~20-25 | [Shadowfang Keep](../../instances/shadowfang-keep.md) (Meteor Shard) | [[d:rogue#1324107314747408587]] |
| 26 / 29 / 32 / 35 | [Scarlet Monastery](../../instances/scarlet-monastery.md): Graveyard / Library / Armory / Cathedral | [[d:rogue#1482489440302661712]] |
| ~33 | [Crescent Grove](../../instances/crescent-grove.md) (The Betrayer) | [[d:rogue#1324107314747408587]] |
| ~40-43 | [Razorfen Downs](../../instances/razorfen-downs.md), [Zul'Farrak](../../instances/zulfarrak.md) (Ghaz'rilla Fang) | [[d:rogue#1324107314747408587]] |
| 58-60 | LBRS, UBRS, Scholomance, Stratholme (Shadowcraft); Dire Maul West (Distracting Dagger) | [[d:rogue#1488313065043661020]], [[d:rogue#1488314766056489122]] |

## Group role while leveling

You are melee DPS; use Kick, Sap and Blind on dangerous casters. Frontstabbing (standing inside the mob and strafing so Backstab lands from the front) works but gets old fast [[d:rogue#1461513495349563457]], [[d:rogue#1489739622392008836]]. With a friend tanking, a Backstab build is fine [[d:rogue#1478408282933559377]], [[d:rogue#1478408865740619817]]. Rogue tanking in dungeons is possible (see [Tank](tank.md)).

## Lockpicking

Horde: repeat the poison-quest lockbox on top of a Barrens tower to about 155. The ZF-area +5 lockpicking gloves then take you to 200, and dungeon boxes and BRD doors to 300 [[d:rogue#1436923703177777192]]. For 275-300 use BRD or Tyr's Hand in EPL (10 footlockers); Stratholme needs 300 [[d:rogue#1457300884785463306]]. You must *cast* Pick Lock on lockboxes [[d:rogue#1457775846264803464]].

## Common mistakes

- Using daggers and Backstab/Sinister Strike as a brand-new player before 40 [[d:rogue#1478390671332081664]].
- Keeping slow, high-DPS weapons after Noxious Assault [[d:rogue#1457769410730262632]].
- Hemorrhage as a leveling builder [[d:rogue#1474410353059430402]].
- Forgetting the level-20 poison quest.
- Buying a temporary weapon instead of the permanent +5 weapon-skill quest [[d:rogue#1486869224336003112]].
