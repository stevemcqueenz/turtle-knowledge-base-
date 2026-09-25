# Feral Cat (melee DPS)

**Recommendation:** play the **11/35/5 bleed/Claw build**. On any target that can bleed, keep **Rake** and **Rip** up, keep **Tiger's Fury** up, spam **Claw**, and spend 5 combo points on **Ferocious Bite** (Carnage refreshes both bleeds). On bleed-immune targets, drop the bleeds and switch to **Shred + Ferocious Bite + Reshift** (powershifting). Get **8% hit** (5% from gear), then stack Strength, Agility and Attack Power. Your weapon is a stat stick: only its stats and "Equip:" effects count in Cat Form.

| | |
|---|---|
| Role | Single-target melee DPS; Leader of the Pack crit aura, Innervate, battle rez, emergency off-tank |
| Viability (1.18.1) | **Good single-target, no AoE.** Rated A/A- on bleedable single-target bosses and B on bleed-immune ones [[d:druid#1479171231205822576]]. "Fine/strong until AQ40 and early Naxx", then it falls behind in Kara40, where cat gets only sidegrades [[d:druid#1491228727374516265]], [[d:druid#1491817394287411230]]. Best feral parse across 1.18.1 logs was about 185th overall [[d:druid#1492183360817332274]]. |
| Difficulty | High: two rotations (bleed and powershift), bleed tracking, energy-tick timing ("end game cat is schizo" [[d:druid#1473680065425576088]]) |
| Strengths | Strong on long, stationary, bleedable bosses (Patchwerk, Kruul) [[d:druid#1486707989984317590]], [[d:druid#1465491737572147242]]; can off-tank trash in cat gear; Atiesh stays BiS [[d:druid#1486729477026349248]] |
| Weaknesses | Zero cleave/AoE, by design [[d:druid#1472862240754372713]]; bleed-immune bosses; no weapon skill (fixed, more glancing blows than any melee) [[d:druid#1470809454944714928]]; 6-minute Berserk [[d:druid#1469512077864337469]]; 1.18.1 changed nothing for cats ("no time to look at Cats") [[d:druid#1465407973789663324]] |

## How to play

The level-60 loop; details and sources in the sections linked. For leveling, see [Gameplay by level](leveling.md#gameplay-by-level).

1. **Opener:** Prowl → **Tiger's Fury** just before an energy tick → **Pounce** → **Rake** → **Rip** → Claw to 5 → **Ferocious Bite**. Without stealth, open with **Faerie Fire (Feral)** ([opener](#bleedable-target-claw-build)).
2. **Single-target loop (target can bleed):** Tiger's Fury if missing → Rip if missing at 5 combo points (1-3 on fights under ~30 s) → Ferocious Bite at 5 with Rip up (Carnage refreshes both bleeds) → Rake if missing → Shred on Clearcasting from behind → **Claw** ([priority](#bleedable-target-claw-build)).
3. **Bleed-immune target:** Tiger's Fury → Ferocious Bite at 5 → Shred from behind → Reshift below 28 energy ([powershift](#bleed-immune-target-powershift-build), [immune bosses](#bleed-immune-bosses)).
4. **Cooldowns:** Tiger's Fury at 100% uptime (off the GCD). **Berserk** (6-minute cooldown) on long bleedable bosses. On-use trinkets at the pull and in the last 20% ([cooldowns](#cooldowns-and-utility)).
5. **AoE switch:** there is none. Keep hitting the kill target at any target count. At 3+ mobs, shift to Bear and Swipe only if the tank needs help ([AoE](#aoe)).
6. **Resource rule:** **Reshift** when energy is under ~28-30, no tick is due and Tiger's Fury has under 3 s left, then recast Tiger's Fury. At 28 energy you are one tick from a Shred ([priority](#bleedable-target-claw-build)).
7. **Situational:** keep 8% melee hit. If you pull threat, shift to Bear until the tank taunts; Cower is weak. Innervate a healer; Rebirth only out of form ([cooldowns](#cooldowns-and-utility)).

## Talent build

### Raid 11/35/5 (recommended)

Micro Jackson's "normal is 11/35/5" screenshot [[d:druid#1460992604417032421]] and the top-parsing cat's build ("energy gain from bleeds and spam claw") [[d:druid#1469085187966111776]] are this exact allocation.

| Tree | Talent | Points |
|---|---|---|
| Balance | Nature's Grasp | 1/1 |
| Balance | Improved Nature's Grasp | 2/4 |
| Balance | Sylvan Blessing | 2/2 |
| Balance | Natural Weapons | 3/3 |
| Balance | Natural Shapeshifter | 2/3 |
| Balance | Omen of Clarity | 1/1 |
| Feral Combat | Ferocity | 5/5 |
| Feral Combat | Feral Aggression | 4/5 |
| Feral Combat | Open Wounds | 3/3 |
| Feral Combat | Sharpened Claws | 3/3 |
| Feral Combat | Primal Fury | 2/2 |
| Feral Combat | Predatory Strikes | 3/3 |
| Feral Combat | Blood Frenzy | 2/2 |
| Feral Combat | Improved Shred | 2/2 |
| Feral Combat | Ancient Brutality | 2/2 |
| Feral Combat | Berserk | 1/1 |
| Feral Combat | Heart of the Wild | 5/5 |
| Feral Combat | Carnage | 2/2 |
| Feral Combat | Leader of the Pack | 1/1 |
| Restoration | Furor | 5/5 |

Split **11/35/5**, VALID. Codes: `talents.turtlecraft.gg/druid?points=BSAaAI-FgADAaDSQIFQB-Ao` · `talents.turtlecraft.gg/druid/1E0K1-Y030KKEBD-5`. [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=druid&t=0122003201-540003003232221521-05)

Why:

- **Omen of Clarity** is passive on Turtle (no buff to cast) and procs on a flat ~10% of hits with no internal cooldown [[d:druid#1470390148909764641]], [[d:druid#1428648263128453141]], [[d:druid#1430493573836443668]]. Faerie Fire (Feral) can proc it too [[d:druid#1439913144163106906]]. Natural Weapons 3/3 is its prerequisite and gives 3% hit.
- **Open Wounds** makes Claw hit harder for each of your bleeds on the target. It counts only your own bleeds, not another druid's or class's [[d:druid#1462699844505436203]], [[d:druid#1462763871126163458]]. It buffs Claw, not Rake [[d:druid#1453687273186001008]].
- **Ancient Brutality** returns energy on your bleed ticks, which is why the bleed rotation needs little powershifting [[d:druid#1483241636598386778]], [[d:druid#1486578769077473405]].
- **Carnage 2/2**: a 5-combo-point Ferocious Bite refreshes Rip and Rake [[d:druid#1425289376962838642]], [[d:druid#1476991316775931974]]. The refresh does not show on training dummies, but it happens [[d:druid#1479856112659333153]].
- **Blood Frenzy** makes Tiger's Fury a permanent haste/energy buff; one player calls it "the enabler for feral not to suck" [[d:druid#1446514695883460640]].
- **Furor + Improved Shred** keep the powershift/Shred rotation available for bleed-immune bosses [[d:druid#1434171768851009708]].
- The 4 filler points in row 1 of Balance can be Improved Nature's Grasp 4/4 instead of 2 + Sylvan Blessing 2 (next table).

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Improved Nature's Grasp 4/4** | Balance filler 4 into Improved Nature's Grasp, no Sylvan Blessing; the same Feral and Resto points | `BgAaAI-FgADAaDSQIFQB-Ao` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=druid&t=0140003201-540003003232221521-05)) | TowelDruid's raid answer, "You don't need the threat talent if you're not tanking and Feral Swiftness doesn't work inside (most) raids" [[d:druid#1472736983225995436]], [[d:druid#1472737161504751761]] |
| **Shred-heavy (Ferocity 4 / Feral Aggression 5)** | Ferocity 4/5, Feral Aggression 5/5: more Ferocious Bite damage, dearer Claw. For raids where you Shred most of the time | `BSAaAI-EoADAaDSQIFQB-Ao` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=druid&t=0122003201-450003003232221521-05)) | "Ferocious Bite has a very high usage rate, so ... Feral Aggression increasing Ferocious Bite damage is more valuable" [[d:druid#1458706720804307136]] |
| **Cat who off-tanks** | Use the [Feral Bear](feral-bear.md) build (Feral Instinct 3, Thick Hide 3, Feral Charge 1, no Open Wounds/Feral Aggression) | `BSAaAI-FAYYBaDSQIFQB-Ao` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=druid&t=0122003201-503030013232221521-05)) | Micro Jackson: tanks "can still shred as cat when your target dies" [[d:druid#1444972918290383024]] |

**Contested:** Open Wounds as a raid talent. Some call it "mostly a leveling talent" because raids Shred more [[d:druid#1460028294341722304]]; the post-1.18.1 top parses use Claw, so Open Wounds stays [[d:druid#1492276296808661174]]. Points are tight: "points are very tight for feral (especially cat)", so keep two builds in your Brainwashing Device [[d:druid#1493279951695384626]]. Since 1.18.1 you can no longer run cat and bear talents in one build, so swapping roles needs a respec [[d:druid#1492164894408052736]].

## Stat priority and caps

1. **Hit to 8%** against raid bosses. Natural Weapons gives 3%, so you need **5% from gear**. Every point is equally valuable up to 5% and worthless after [[d:druid#1474083543985684691]], [[d:druid#1472208440901374072]]. Turtle removed the 1% hit suppression against +3-level targets, so the cap is 8%, not 9% [[d:druid#1491668912226435324]]. Most trash (level 61-62) needs only about 5% total [[d:druid#1447726944626938069]].
2. **Strength and Agility, roughly equal.** With Heart of the Wild, 1 Strength = 2.4 feral AP; 1 Agility = 1 AP plus 0.05% crit (20 Agility = 1% crit) [[d:druid#1491356797762797638]], [[d:druid#1463132050713477163]]. Bleeds scale with AP, so Strength is at least as good as Agility on bleedable targets [[d:druid#1430924910527512618]]. **Contested:** which is slightly better; the sheets show "only very slightly better" either way [[d:druid#1474744918055587900]].
3. **Attack Power** (1 AP = 1). The "Attack Power in forms" line on staves and polearms is what makes a weapon good [[d:druid#1488021351418695681]].
4. **Crit** until the crit cap. With hit capped, the white-hit crit soft cap is 53.5% (hard cap 93.5%) [[d:druid#1472205479097794595]]. The T2.5 5-piece bonus is the main thing that overshoots it [[d:druid#1470123686903156847]]. One weight: 1% crit ≈ 31 AP [[d:druid#1379019592516636734]].
5. **Haste: contested.** The vanilla sims call it cat's worst stat, because only white hits benefit and cats have no weapon skill [[d:druid#1427245844725370981]]. Several experienced players value 1% at about 26 AP on Turtle, since Tiger's Fury is always up and more swings mean more Omen procs [[d:druid#1443944690142412931]]. Haste multiplies (10% and 20% give 1/(1.1×1.2)) [[d:druid#1483140434137190520]]. It becomes good with the T3.5 set [[d:druid#1432681941672656966]].

Not useful: Intellect on tier gear, since energy no longer comes from mana [[d:druid#1356892169587392522]]; weapon skill ("does not affect ferals at all") [[d:druid#1470810086275420367]]; weapon damage and speed [[d:druid#1442954612528255146]]; **Fortune** (1.18.1), since chance-on-hit never procs in form [[d:druid#1474308205592051722]]; Armor Penetration, since most raid bosses are brought to 0 armor by the raid anyway [[d:druid#1492273897922367509]].

Existing stat-weight sheets use vanilla assumptions and "no one has done the correct calculations for TWOW yet" [[d:druid#1443940954225770580]]. For gear choices use Krokat's feral sim (`krokats.github.io/feral-sim`) or Angrycat's Feral DPS sheet [[d:druid#1461294464055115799]], [[d:druid#1459962659456684135]].

## Single-target rotation

### Bleedable target (Claw build)

**Opener:** Prowl → **Tiger's Fury** just before an energy tick → **Pounce** (counts as a third bleed) → **Rake** → **Rip** → Claw to 5 → **Ferocious Bite** [[d:druid#1426703699757105283]], [[d:druid#1466749628677492837]], [[d:druid#1381546501913972766]]. Without stealth, open with **Faerie Fire (Feral)** (it can proc Omen) [[d:druid#1476991316775931974]].

Priority (bot-ready):

1. **`Tiger's Fury`** if its buff is missing. It is off the GCD and your strongest button: 18 s of attack speed plus 10 energy every 3 s when talented [[d:druid#1463118416008183876]], [[d:druid#1468957031791591573]].
2. **`Rip`** if Rip is missing, the target can bleed and you have **5 combo points**. On a fight shorter than about 30 s, Rip at 1-3 combo points instead [[d:druid#1437413011580256336]], [[d:druid#1482762940250718291]].
3. **`Ferocious Bite`** at **5 combo points** while Rip is up; Carnage refreshes Rip and Rake. On bosses, never Bite below 5 combo points [[d:druid#1450153022339547290]]. On trash that dies fast, Bite at 4 [[d:druid#1450167466859958433]].
4. **`Rake`** if missing [[d:druid#1462552241461268501]].
5. **`Shred`** if you have **Clearcasting** and are behind the target. Clearcasting always goes into Shred, even at 5 combo points, unless Rip is about to expire [[d:druid#1427967004635037858]].
6. **`Claw`** as the filler. "If the boss is not bleed immune Claw will always out dps Shred if played well"; all top 1.18.1 parses use Claw [[d:druid#1492276296808661174]].
7. **`Reshift`** when energy is below about 28-32, Tiger's Fury has under 3 s left and no energy tick is about to land. It refunds up to 60 energy with Furor and the Wolfshead enchant [[d:druid#1480881704733511861]], [[d:druid#1459798058324725914]]. At 28 energy you are one tick from another Shred, so use it; at 27 you are two ticks away [[d:druid#1482840263985725440]].

Notes:

- **Contested: Claw vs Shred with bleeds up.** Claw with 2-3 bleeds beats Shred per energy [[d:druid#1466750120862158889]]. Shred with the Idol of Laceration is close at high gear, and some EU players still Shred on Patchwerk [[d:druid#1451312455350227044]], [[d:druid#1492244796209631485]]. The 1.18.1 top parses settle it for Claw [[d:druid#1492276296808661174]].
- **Reshift drops the Tiger's Fury buff**, but Blood Frenzy's attack speed persists, so recast TF after every Reshift [[d:druid#1482843960857722960]]. That is why you Reshift only when TF is about to expire anyway: "don't PS every GCD, only every ~16-18 s" [[d:druid#1431630116252942337]].
- An in-raid test on Kruul found powershifting and not powershifting "within error margin" for two similarly geared cats [[d:druid#1483070411171172404]]. Staff hold that "powershifting will always perform better" as a tool [[d:druid#1483068920368857218]].
- Bleed AP scaling is weak (Rake ticks 2% AP, Rip 4% AP), so snapshotting bleeds with potions is pointless [[d:druid#1442527798425292871]].

### Bleed-immune target (powershift build)

Rake and Rip do nothing; Pounce still stuns, but its bleed icon is only visual [[d:druid#1460212598237696153]].

1. **`Tiger's Fury`** if missing.
2. **`Ferocious Bite`** at 5 combo points [[d:druid#1476991316775931974]].
3. **`Shred`** from behind. Claw is bad without bleeds [[d:druid#1445714923911909477]].
4. **`Reshift`** below 28 energy, timed so the next energy tick lands right after you return to form [[d:druid#1381553222216450098]].

Wear the **Wolfshead head enchant** for this; without it the 1% haste head enchant is the alternative [[d:druid#1434217422692421763]]. The Idol of Laceration helps here ("good bleed-immune option") [[d:druid#1453678172548759619]].

### Bleed-immune bosses

| Raid | Immune | Source |
|---|---|---|
| [Molten Core](../../instances/molten-core.md) | **Contested:** "only 3 of 12" (Geddon, Ragnaros, Thaurissan) vs "about half" of MC. Baron Geddon can still be raked but not ripped | [[d:druid#1487167793089478656]], [[d:druid#1434682035460636862]], [[d:druid#1483241636598386778]], [[d:druid#1379632585579302923]] |
| [Blackwing Lair](../../instances/blackwing-lair.md) | All bosses bleed | [[d:druid#1425593089988235317]] |
| Naxxramas | All bosses bleed, including Kel'Thuzad and Sapphiron (tested). The small Garr-copy adds do not. **Contested:** older posts name KT, Sapphiron and Twin Golems as immune | [[d:druid#1461690562099806260]], [[d:druid#1461732289061978378]], [[d:druid#1465289016697159817]], [[d:druid#1357888923397001407]] |
| [Tower of Karazhan](../../instances/tower-of-karazhan.md) | Anomalus, Medivh, the Chess event and Rupturan (confirmed by the class designer); Kruul phase 2; Echo's adds. About two thirds of the raid is immune | [[d:druid#1469613082983530559]], [[d:druid#1479176569997099079]], [[d:druid#1472990160646963375]], [[d:druid#1465402093685706825]] |
| [Timbermaw Hold](../../instances/timbermaw-hold.md) | Two bosses | [[d:druid#1487450682494816437]] |

The class designer is open to "remedies" for bleed-immune targets, but none shipped [[d:druid#1472960261269881004]].

## AoE

Cat has **no AoE and no cleave**, which the class designer confirmed as intent: "the envisioned design for Feral Cat is to be focused on single target damage" [[d:druid#1472862240754372713]].

| Targets | Action |
|---|---|
| 1-2 | Normal rotation on the kill target |
| 3+ | Keep single-targeting. If the tank needs help, shift to **Bear** and **Swipe** (3-target cap) [[d:druid#1460831352915103879]]. Leaving form to **Hurricane** is only worth it with a spell-power set or Atiesh [[d:druid#1470733797904617472]] |

## Cooldowns and utility

- **Tiger's Fury:** keep it up 100% of the time; it is off the GCD [[d:druid#1463118416008183876]].
- **Berserk:** 6-minute cooldown, too long to use on every boss; save it for the long bleedable bosses [[d:druid#1465511791173042258]].
- **Trinkets** with on-use effects: use at the pull and in the last 20% of the fight (ZHC, ToEP) [[d:druid#1426991920953036942]].
- **Idol swapping** costs a GCD since 1.18.1 [[d:druid#1477688732374138960]], and a macro swap triggers a ~30 s internal cooldown; cats are energy-capped, so this matters less than for Balance [[d:druid#1488420223047696424]]. The one swap still discussed is Idol of Savagery for the opening Rip, then Idol of Ferocity [[d:druid#1449865381530566807]]. Non-Claw idols are "not worth using now that idol-swapping is disabled", but keep them in the bank [[d:druid#1491291677975908453]].
- **Utility:** Leader of the Pack (3% crit aura), Innervate, Rebirth (only out of form) [[d:druid#1472320012265066739]], [[d:druid#1460640945753165854]]. Innervate a healer; one player jokes that it buys a feral's survival [[d:druid#1491219737940721724]].
- **Threat:** Cower costs 50 energy for little effect [[d:druid#1460820628012793957]]. If you pull aggro, a shift to Bear gives roughly a 50/50 chance to survive until the tank taunts [[d:druid#1488141460816527401]].

## Gear

Tier sets: **T1, T2.5 and T3.5 are itemized for cat; T2 and T3 for bear** [[d:druid#1491178938620317698]]. Look for "Feral Attack Power" on items [[d:druid#1470467322710982656]].

### Leveling to fresh 60

Weapon progression (stat sticks): Smite's Mighty Hammer (18) → Manual Crowd Pummeler (28, stats only now) → Thornroot Maul (32) → Grimlock's Charge (42) → Ice Barbed Spear (51) → the sheet at 60 [[d:druid#1484464772115206204]], [[d:druid#1462513205434650823]]. See [Leveling](leveling.md).

### Pre-raid

| Slot | Item | Source |
|---|---|---|
| Weapon | **Rod of the Churning Hourglass** (Black Morass reputation); beats Finkle's Lava Dredger for cat once Heart of the Wild and Kings are counted | [[d:druid#1436885520323182736]], [[d:druid#1458647421436432487]] |
| Head | Thornweave Mask ([Black Morass](../../instances/black-morass.md)) | [[d:druid#1439574149898043456]] |
| Neck | Mark of Fordring (Eastern Plaguelands quest); Onyxia's neck is better if you have it | [[d:druid#1425557167288746177]] |
| Cloak | Quel'dorei Hero's Cloak (Silvermoon honored, Alliance) | [[d:druid#1418651437164007614]] |
| Chest | Time-Blackened Chestpiece (Black Morass) | [[d:druid#1439574149898043456]] |
| Hands / feet | Rotworn Grips, Miasma Walkers ([Karazhan Crypt](../../instances/karazhan-crypt.md)) | [[d:druid#1418651437164007614]] |
| Waist | Shadowruned Girdle ([Hateforge Quarry](../../instances/hateforge-quarry.md) last boss); later the ZG quest belt from "A Collection of Heads", best until C'Thun | [[d:druid#1418651437164007614]], [[d:druid#1491828012495278231]] |
| Legs | Flamewrath Leggings (crafted) are worth crafting; Devilsaur Leggings are the only Devilsaur piece worth it | [[d:druid#1430925528172462080]], [[d:druid#1397899404039426151]] |
| Rings | Tarnished Elven Ring ×2 (Dire Maul Tribute), Blackstone Ring (Princess), Don Julio's Band (AV reputation) | [[d:druid#1418651437164007614]] |
| Trinkets | Blackhand's Breadth (LBRS/Ony attunement); Corrosive Core (HFQ) if you need hit | [[d:druid#1418651437164007614]] |

Skip the Devilsaur set; better pieces replace it quickly [[d:druid#1418651437164007614]]. Feet are feral's weakest slot [[d:druid#1430931886187741347]].

### Raid progression

- **MC / Onyxia:** Rod of the Churning Hourglass over Finkle's; MC gauntlets are BiS gloves for a long time [[d:druid#1433399158621999105]], [[d:druid#1486388526135115947]]. The **T1 8-piece** bonus tested well on shred bosses in a split MC run [[d:druid#1483435023595208744]].
- **BWL / [Kara10](../../instances/lower-karazhan-halls.md):** Herald of Woe (BiS weapon until AQ40), Prestor's Talisman, Circle of Applied Force ("forever BiS"), Leggings of the Inferno and the Kara10 venom trinket [[d:druid#1441039821538725899]], [[d:druid#1486931301901664377]]. Never-Ending Agony is BiS only if you still need hit; give it to the cat before the bear [[d:druid#1444179695011762187]].
- **AQ40:** C'Thun belt [[d:druid#1486388526135115947]]. Keep the **T2.5** set bonus until you can complete 5 pieces of T3.5 [[d:druid#1442674279408865362]]. The T2.5 3-piece favours Claw, the 5-piece Shred [[d:druid#1451314956363632730]].
- **Naxx:** cat gear "almost disappears"; your AQ40 pieces carry you [[d:druid#1491228727374516265]], [[d:druid#1491817394287411230]].
- **Kara40:** Tunic of Demonic Deception and Choker of the Talon are the big upgrades; Talon helm, boots and shoulders, Felforged Nathrezim Veil, Mephistroth's Cunning come next [[d:druid#1362819920089317427]]. Only the T3.5 boots, pauldrons and neck are good [[d:druid#1486782537551581216]]. Kara40 gloves are worse than T1 gloves [[d:druid#1487117780435206395]]. At full Kara BiS, the Mephistroth belt beats the C'Thun belt because you no longer need hit [[d:druid#1492175341261815930]]. The Mephistroth ring (32 Agility, 1% haste) is worth prioritising [[d:druid#1474084071444451600]].
- **Contested:** the T3.5 5-piece. Shardphoenix swaps it out on movement-heavy fights; others say full boss uptime makes it mandatory [[d:druid#1492176857980731494]].
- **Timbermaw Hold set:** probably better than T2.5 (similar stats, much better bonus); best as 5 pieces with non-set boots [[d:druid#1492897923938123786]]. Its 5-piece may not stack with Tiger's Fury (bug report 21747; possibly visual) [[d:druid#1491800617629258019]].
- **Weapons:** Atiesh is BiS for feral, the only DPS spec that keeps it in Kara40 [[d:druid#1486729477026349248]]. Order: Atiesh > MoM > Spear > Eye of Nerub [[d:druid#1487247462719684689]]. Raka'shishi gives +448 AP in forms, but its extra-attack proc is disabled while shapeshifted [[d:druid#1482118717872672940]]. 1.18.1 hotfix: Yoxtez gained 224 Feral Attack Power ([Torta, 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608)).
- **Crafted:** Convergence of the Elements leggings (Elemental Leatherworking) are "extra good" [[d:druid#1491826525689872485]].

### Trinkets

- Early: Zandalarian Hero Charm and Talisman of Ephemeral Power [[d:druid#1426983485024763966]]; Blackhand's Breadth [[d:druid#1418651437164007614]].
- Progression: Earthstrike / Heart of Dreams → **Kiss of the Spider + Heart of Dreams** → Slayer's Crest or the KT trinket in Naxx [[d:druid#1440469937737957488]], [[d:druid#1440478360064102473]]. Molten Emberstone is about 20 free DPS on use [[d:druid#1465266580555432101]]. Vial of Potent Venoms and Blackhand's Breadth beat Draenei Exile's Trinket, whose real proc rate is below its tooltip [[d:druid#1490450923103981648]].
- **Shieldrender Talisman** (Kara40) was nerfed in 1.18.1: its 4 armor-ignoring attacks get burned by low-value autos [[d:druid#1472699412005523538]], [[d:druid#1474303149903970336]].
- Low value for cat: DFT and Accuria (you are hit-capped by AQ40; give them to a rogue or warrior) [[d:druid#1444178527732891678]]; Hand of Justice (it resets the swing timer, worth about half a real extra attack) [[d:druid#1447922912051855370]]; Chromie's quest trinket (a near-permanent −10% haste debuff) [[d:druid#1439701828936929481]].

### Idols

**Idol of Ferocity** (BRD) is BiS [[d:druid#1492276296808661174]], [[d:druid#1477866100493647995]]. **Idol of Laceration** (Shred refund after finishers) is the bleed-immune option [[d:druid#1453678172548759619]]. Idol of Savagery (Black Morass) simmed about 23 DPS above the Claw-cost idol but can make bleeds drop; it is gear-dependent [[d:druid#1488887858931437709]], [[d:druid#1486383430978633819]].

## Enchants

| Slot | Enchant | Source |
|---|---|---|
| Head | **Wolfshead** enchant (the old helm effect, now a repeatable Moonglade quest; energy/rage on shift) if you ever powershift; otherwise the 1% haste enchant | [[d:druid#1426547464323993703]], [[d:druid#1493535288524275722]], [[d:druid#1434217422692421763]] |
| Shoulders | 2% haste (Hyjal quest reward, NPC in a house in Nordanaar) | [[d:druid#1486295829471035472]], [[d:druid#1490199987756470394]] |
| Cloak | +3 Agility (over Subtlety) | [[d:druid#1448449452317741086]] |
| Chest | +3 all stats | [[d:druid#1490199987756470394]] |
| Wrists | Strength | [[d:druid#1490199987756470394]] |
| Hands | Agility | [[d:druid#1490199987756470394]] |
| Waist | +10 Strength buckle (new; replaces the old +6 Agility advice) | [[d:druid#1443537204717551616]] |
| Legs | **Contested:** Agility per the pinned sheet vs haste for the Kara40 set; budget: Rugged Armor Kit | [[d:druid#1427245844725370981]], [[d:druid#1490201212497428523]] |
| Feet | Stamina | [[d:druid#1490199987756470394]] |
| Weapon | **+25 Agility** (beats 3% attack speed for cat) | [[d:druid#1469280847407349878]], [[d:druid#1488003016345784381]] |
| Rings / neck | 6 Agility, 6 Strength or +3 stats: "doesn't matter much" | [[d:druid#1491330668775477259]] |

Idol enchants (Hyjal, Bright Dream Shards + Timbermaw materials) add 1% crit, hit, haste, spell crit or spell hit [[d:druid#1461409266320670812]]. Chance-on-hit enchants (Crusader, Fiery, lifesteal) do not work in form [[d:druid#1428828946916577391]].

**Weapon stones:** Consecrated Sharpening Stone (Undead) > Elemental Sharpening Stone [[d:druid#1461753276017152021]]. The "+damage" sharpening stones do nothing in form; the crit stones work [[d:druid#1464013524178309190]], [[d:druid#1478268941716422788]].

## Consumables

Medvedev's raid list [[d:druid#1461753276017152021]]:

| Buff | Take |
|---|---|
| Strength | Juju Power > Elixir of Giants |
| Agility | Elixir of the Mongoose |
| Attack Power | Juju Might > Winterfall Firewater |
| Blasted Lands | Ground Scorpok Assay > R.O.I.D.S. |
| Food | Power Mushroom = Smoked Desert Dumplings |
| Weapon | Consecrated (Undead) > Elemental Sharpening Stone |
| Potion | Mighty Rage Potion > Quickness Potion |
| Haste | Juju Flurry (+3% attack speed on Turtle) [[d:druid#1473368572381102200]] |
| Demons | Elixir of Demonslaying |
| Movement | Swiftness of Zanza |

- Only one item per bucket applies: Juju Might and Firewater share one; Juju Power and Giants share another [[d:druid#1475814371534835852]].
- Scrolls of Agility and Strength do not stack with the elixirs, even though both show on the buff bar [[d:druid#1433887910083428544]].
- Jujus drop on death [[d:druid#1475832792372740218]].
- Defensive kit: Greater Protection Potions, Free Action Potion, Limited Invulnerability Potion, Magic Resistance Potion, Juju Chill/Ember [[d:druid#1461753276017152021]].
- If you hit the buff cap (32 visible, 48 total), Elixir of Fortitude is the one to drop [[d:druid#1471781046063206541]], [[d:druid#1461764766174413013]].

## Macros and addons

Required stack for conditional macros: **SuperWoW + Nampower + UnitXP_SP3 + SuperCleveRoidMacros**, installed from the launcher's Mods tab. The older CleverRoidMacros does not work with these [[d:druid#1462552203171729469]], [[d:druid#1468289665202262137]].

One-button bleed macro (poisonouscabbage) [[d:druid#1462552241461268501]]:

```
#showtooltip
/cast [nomybuff:"Blood Frenzy"] Tiger's Fury; [nodebuff:"Rip", noimmune:bleed, combo:=5] Rip; [combo:=5] Ferocious Bite; [nodebuff:"Rake", noimmune:bleed] Rake; [behind, mybuff:"Clearcasting"] Shred; Claw
/cast [mypower:<32] Reshift
```

- With two cats on a target, `nodebuff` breaks; use Cursive conditionals (`nocursive:Rip>1`) instead [[d:druid#1451206423689297962]], [[d:druid#1471124027706835065]].
- Buff-name checks fail once Tiger's Fury is pushed past the visible buff cap [[d:druid#1471248120854614016]].
- **Cursive** (needs SuperWoW and Nampower) is the only tracker that handles the Carnage refresh [[d:druid#1440573427277631562]], [[d:druid#1483886827432579072]]. pfUI shows a fixed 12 s Rip [[d:druid#1462229775648297050]].
- Also useful: ProcDoc (Omen/TF alerts) [[d:druid#1440451604900745296]], DoiteAuras [[d:druid#1466390812161081592]], HolyShiftMiio (one-button cat) [[d:druid#1472246978137035022]], TrinketMenu/ItemRack.
- Faerie Fire (Feral) in a macro needs an explicit rank: `/cast Faerie Fire (Feral)()` [[d:druid#1488478588436090941]].

## Raid notes

- **Kruul** (Kara40) is cat's best fight, and cat still rarely tops it [[d:druid#1465491737572147242]], [[d:druid#1484857708950851677]]. **Patchwerk** favours the T3.5 5-piece [[d:druid#1486707989984317590]].
- **BWL Chromaggus**, undergeared: Shred / Ferocious Bite / Rip priority [[d:druid#1460035124119863308]].
- **Nefarian's druid call** forces Cat Form even if you never trained it [[d:druid#1486034233624367295]].
- **Naxx:** a cat can briefly tank hard-hitting trash with the right trinkets; the abomination before Kel'Thuzad is the exception [[d:druid#1441940988712063016]].
- **Resistances:** see the [Feral Bear](feral-bear.md#resistances) table; off-tanking cats on Huhuran/Viscidus want 150+ nature resistance [[d:druid#1492107030792503326]].

## Common mistakes

1. Running the bleed rotation on a bleed-immune boss [[d:druid#1476991316775931974]].
2. Biting below 5 combo points on a boss, which loses the Carnage refresh [[d:druid#1450153022339547290]].
3. Reshifting every time you run low: it drops Tiger's Fury; wait until TF is about to expire [[d:druid#1431630116252942337]].
4. Spending Clearcasting on Claw instead of Shred [[d:druid#1427967004635037858]].
5. Over-capping hit. Above 8% total it is worthless [[d:druid#1474083543985684691]].
6. Farming the Manual Crowd Pummeler for its effect: it no longer works in form [[d:druid#1462513205434650823]].
7. Gearing by weapon DPS or chance-on-hit procs; only stats and "Equip:" count [[d:druid#1444040448451678338]].
8. Taking DFT or Accuria from a rogue or warrior once you are hit-capped [[d:druid#1444178527732891678]].
