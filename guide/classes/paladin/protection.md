# Protection Paladin (tank)

**Recommendation:** play the **11/33/7** build with **Sanctity Aura** and **Righteous Fury** always on. Your threat is Holy damage scaled by spell power. Press **Holy Strike** on cooldown and never delay it. Use **Judgement of Righteousness** on cooldown and re-seal Righteousness. Add **Consecration** only when more than two mobs are on you, and **Holy Shield** when mana allows. Gear spell power first, then Stamina, then avoidance. Aim for about 7,500–8,000 HP for raid bosses and **102.4% combined avoidance with Holy Shield up** from AQ40 onward. Do not chase 440 Defense.

| | |
|---|---|
| Role | Main or off-tank in raids, dungeon tank, one of the best AoE and solo farmers |
| Viability (1.18.1) | **Strong.** The 1.18.1 Holy Strike and Consecration changes fixed the old high-end threat problem. Players report "threat is already not a problem for prot paladins" [[d:paladin#1492549184010715346]] and about 10% more threat at high-end gear [[d:paladin#1485350693312397362]]. Right after release one raider called paladin "best single target and best aoe tank" [[d:paladin#1485372752398385223]]. **Contested:** bears are still rated the top tank by some regulars [[d:paladin#1482765714761842728]], and paladin has no AoE taunt [[d:paladin#1492520773640917212]] |
| Difficulty | Easy to play (a short priority list), hard to gear: you juggle threat, HP and avoidance sets per boss [[d:paladin#1452714680547016936]] |
| Strengths | Huge opener threat (Holy Strike is about 60% of it) [[d:paladin#1485400460897685634]]; strong AoE threat from front-loaded Consecration [[d:paladin#1485368911712092332]]; near-infinite mana on bosses [[d:paladin#1469939857630695569]]; Blessing of Protection, bubble, Cleanse; a reliable taunt |
| Weaknesses | Low HP on paladin gear, and mitigation mostly from block [[d:paladin#1463362154903245030]]; threat comes almost only from Holy damage, so a missed Holy Strike leaves only Judgement of Righteousness as backup [[d:paladin#1482749421589368886]]; no AoE taunt; no ranged pull without items |

"High floor, low ceiling": a decent prot paladin can be the best tank in an average guild. Threat problems mostly show up in the top ~1% of speed-running guilds [[d:paladin#1479612800409145557]], [[d:paladin#1479604283954565150]].

!!! warning "Fake patch news"
    The 2026-04-01 "next patch" post was an April Fools joke, not a real change. It said Holy Strike becomes a next-swing attack, Crusader Strike loses its cooldown and spellstrikes stop proccing [[d:paladin#1488852869212798987]], [[d:paladin#1488794904246091876]]. Nothing in this guide assumes it.

## What 1.18.1 changed for Protection

| Change | Effect on you | Source |
|---|---|---|
| **Holy Strike** now deals 40% of normalized weapon damage + 129–146 Holy damage (rank 8). Spell power coefficient raised from 43% to 71%. All of it is Holy damage, so Righteous Fury and Sanctity Aura boost the whole hit | About 10–20% more Holy Strike damage normally and 40–50% at peak buffs for BiS tanks. Fresh-60 tanks with no gear lose a little; with any gear or buffs you roughly break even | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:paladin#1465385495558361280]], [[d:paladin#1484380776333316167]], [[d:paladin#1484390780394143784]] |
| **Righteous Strikes:** +5..25% Holy Strike damage and threat. Crusader Strike now grants **Zealous Defence**: the next *blocked* attack deals 6..30% less damage | Crusader Strike becomes a defensive button, not a threat button | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:paladin#1465833695175901347]] |
| **Holy Shield** threat modifier 30% → 50% | More sustained threat when you are being hit | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| **Consecration** front-loaded: ticks go 156% → 140% → … → 44% of the old base. The front-load starts when **each mob enters** the Consecration, not when you cast it | About 600 threat on the first tick and 475 on the second. You can pre-place it safely | [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:paladin#1484776924046692372]], [[d:paladin#1485368911712092332]] |
| Set bonuses: **T2.5 3-piece** → +15% Judgement of Righteousness. **T3.5**: the old 5-piece (+40% Holy Shield threat) moved to the 3-piece; the new 5-piece is damage reduction while Holy Shield is up (shipped as 3%, previewed as 4%) | Threat set = 3 T2.5 + 3 T3.5; mitigation set = 5 T3.5 + 4 T3 | [[d:paladin#1484146949824450641]], [[d:paladin#1484151525109534880]], [[d:paladin#1484695595196354677]], [[d:paladin#1484697450563506236]] |
| New librams: **Libram of the Hallowed Ground** (extra instant Consecration tick, about 4% spell power scaling). Libram swaps now cost a GCD | Use Hallowed Ground for AoE and Eternal Tower for single target | [[d:paladin#1489569357725044837]], [[d:paladin#1488793803056746558]] |

Launch bugs, all fixed or harmless now:

- **Improved Righteous Fury seemed to do nothing.** Righteous Fury snapshots your talents when you cast it. After any respec, toggle it off and on [[d:paladin#1485055210605772800]], [[d:paladin#1485066092085907519]].
- **Block value was inverted on auto-attacks for a few days** (you took your block value and blocked the rest). It was caused by Zealous Defence and is fixed [[d:paladin#1485390532489511123]], [[d:paladin#1485647701126152293]].
- **Threat meters under-reported Righteous Strikes** until TWThreat updated [[d:paladin#1484797114025513022]].

## Talent build

### Main tank 11/33/7 (recommended)

This is the "general raid prot" build Mithreon reposted after release [[d:paladin#1485253367369564231]], [[d:paladin#1491936698689388746]]. 11/33/7 is the long-standing cookie-cutter tank split [[d:paladin#1469842133048492085]], [[d:paladin#1460797887653875714]].

| Tree | Talent | Points |
|---|---|---|
| Holy | Divine Intellect | 5/5 |
| Holy | Improved Seal of Righteousness | 5/5 |
| Holy | Sanctity Aura | 1/1 |
| Protection | Redoubt | 5/5 |
| Protection | Precision | 3/3 |
| Protection | Toughness | 3/5 |
| Protection | Improved Righteous Fury | 3/3 |
| Protection | Blessing of Sanctuary | 1/1 |
| Protection | Shield Specialization | 3/3 |
| Protection | Improved Hand of Reckoning | 2/2 |
| Protection | Righteous Defense | 3/3 |
| Protection | Holy Shield | 1/1 |
| Protection | Reckoning | 3/5 |
| Protection | Righteous Strikes | 5/5 |
| Protection | Bulwark of the Righteous | 1/1 |
| Retribution | Benediction | 5/5 |
| Retribution | Improved Judgement | 2/2 |

Split **11/33/7**, validated with `talent_tool.py` (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=0500501-0530331302031351-052) · code `AoAoB-AoYDZYCAZYAoB-AoQ`

Why these points:

- **Sanctity Aura (11 Holy points) is effectively mandatory** unless another paladin in your group brings it. It is about 9% of your total threat ("Sanctity is king") [[d:paladin#1469734061621776477]], and prot is "balanced around the assumption of Sanctity Aura" [[d:paladin#1449059276218695700]]. The same 11 points buy Improved Seal of Righteousness [[d:paladin#1460797887653875714]].
- **Divine Intellect over Divine Strength:** your mana pool also works as mp5 through Shield Specialization. With about 6,000 mana, rank-3 Holy Shield slightly drains mana and rank-1 slightly gains [[d:paladin#1484482699644108901]].
- **Improved Righteous Fury 3/3:** Righteous Fury gives +60% threat on Holy damage, and the talent adds 45 points, for **+105%** total [[d:paladin#1465243555671838812]], [[d:paladin#1483627904834469928]].
- **Righteous Strikes 5/5 for a main tank:** "the fat opener threat is too hard to pass up" [[d:paladin#1487321785207754793]]. Grey's opener math: Righteous Strikes and Improved Seal of Righteousness raise your minimum opening threat by about 30% [[d:paladin#1469759391401250948]].
- **Reckoning 3/5:** "at least 1 point … most run 2~3"; 4–5 points only pay off when many mobs are hitting you [[d:paladin#1460800337760751882]].
- **Improved Hand of Reckoning 2/2:** with 3/3 Precision your taunt misses only 5% of the time [[d:paladin#1448985792675315752]]. It is never guaranteed against raid bosses [[d:paladin#1463559685050335424]].
- **Benediction vs Improved Blessings:** Grey prefers Improved Blessings when nobody else takes it. Benediction saves only about 5 mana per second, while Improved Blessings gives the raid about 20% more Wisdom/Might [[d:paladin#1460803899345600523]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Imp Blessings MT** | Improved Blessings 5/5 instead of Benediction | [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=0500501-0530331302031351-502) · `AoAoB-AoYDZYCAZYAoB-FAQ` | "Trade benediction for imp blessings if needed" [[d:paladin#1459442077220733080]], [[d:paladin#1460803899345600523]] |
| **Max Toughness** | Toughness 5/5, no Improved Hand of Reckoning. The extra armor is about 2% damage reduction; Improved Hand of Reckoning matters mostly for Four Horsemen and the BWL drakes | [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=0500501-0530531300031351-052) · `AoAoB-AoYFZYAAZYAoB-AoQ` | [[d:paladin#1488123732537901087]] |
| **Vengeprot (off-tank)** 0/26/25 | Righteous Strikes 1/5 and Reckoning 1/5 in Prot; Conviction, 2H Weapon Specialization and Vengeance 5/5 in Ret. More threat goes into Seal of Righteousness, autos and Consecration. An off-tank does not benefit from Reckoning or Holy Shield anyway | [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=-053043030203111-0520405103005) · `-AoYEYYCAZIAI-AoQgFIYAF` | angels1m ("to maximise threat") [[d:paladin#1485667467706765485]]; Grey: "If you're OT definitely vengeance" [[d:paladin#1487321785207754793]], [[d:paladin#1489834521783304262]] |

Points you can move without a new code (Grey's "wiggle room"): Blessing of Sanctuary, Toughness and 2 Reckoning points can go into Guardian's Favor, Anticipation, Improved Hand of Reckoning or Improved Lay on Hands [[d:paladin#1486685580652712007]]. **Contested: Anticipation (Defense).** Some players run 2/5 Toughness + 3/3 Anticipation [[d:paladin#1485468999541325916]]. Others call Defense "a noob trap", because by AQ40 your gear reaches the avoidance cap without it [[d:paladin#1492791303669547098]], [[d:paladin#1492791414046724116]].

Leveling into this build: see [Leveling](leveling.md). A validated tank-path order (Redoubt → Precision → Toughness 2 → Blessing of Sanctuary → Improved Righteous Fury → Shield Specialization → … → Holy Shield at 30 → Righteous Strikes → Bulwark at 42 → Holy → Ret) is stored in `structured/classes/paladin/protection-tank.yaml`.

!!! note "Pre-1.18.1 builds"
    Old builds that max Reckoning or skip Righteous Strikes were built around the pre-patch talent text. Builds from before March 2026 that value "Zeal block value" from Crusader Strike are out of date [[d:paladin#1465833695175901347]].

## Stat priority and caps

Threat stat order: **spell power > hit > crit > Agility > Strength** [[d:paladin#1482717762697564242]]. 1 SP ≈ 1 threat per second (about 1.2 after the Holy Strike buff) [[d:paladin#1490114115052769341]]. At about 1,000 SP, 1% crit ≈ 8 SP [[d:paladin#1480245364299927552]].

How to gear, in order [[d:paladin#1490383795298504806]], [[d:paladin#1491875120770449479]]:

1. **Getting one-shot?** More Stamina. Most bosses "global" a tank somewhere between 7,000 and 8,000 HP. Aim for 7,500–8,000 unbuffed (without Titans) as soon as you can [[d:paladin#1486300603683700891]], [[d:paladin#1479149805857931274]]. BWL: 7,500 is the minimum and 8,000 preferred [[d:paladin#1455534204690366578]].
2. **Healers struggling?** More avoidance.
3. **DPS pulling threat?** More spell power. Grey's first step is the other way round: equip spell power until you can hold the boss for the first 10 seconds against your top DPS, then Stamina/armor until you survive 4–5 s without heals, then avoidance [[d:paladin#1457743157151404226]].

| Stat | Verdict |
|---|---|
| Spell power | The threat stat. Still dominant after the Holy Strike weapon-damage change [[d:paladin#1485887132974190693]], [[d:paladin#1485860266041278584]] |
| Stamina | Survival. Paladin gear carries less of it than other tanks' gear [[d:paladin#1463362154903245030]] |
| Intellect | Good: more mana and more Shield Specialization return [[d:paladin#1484482699644108901]] |
| Agility | Cheap and fine: 6 Agility = 12 armor, 0.3% crit, 0.3% dodge [[d:paladin#1492667984320270528]] |
| Strength / attack power | No longer worthless (Holy Strike's weapon part), but weak. 12 Strength gives less than one point of block value plus a little Holy Strike damage. Raid AP buffs are a nice bonus [[d:paladin#1492667984320270528]], [[d:paladin#1487951069383495861]] |
| Defense | Only as a part of total avoidance: 1 Defense = 0.04% each to dodge, parry, block, miss and crit avoidance [[d:paladin#1460803234695479420]]. Do not chase 440 [[d:paladin#1491228491344121866]] |

**Caps**

| Cap | Value |
|---|---|
| Melee hit | **8% at 300 weapon skill, 7% at 305–308.** Precision gives 3%, so you need 4% from gear after the weapon-skill book quest [[d:paladin#1471632460998770943]]. A main tank should be hit-capped, because a miss is 0 threat from Holy Strike or Judgement [[d:paladin#1450132467347623956]]. Off-tanks and dungeon tanks can be 1–2% under, and many run 6–7% [[d:paladin#1450132383419338932]], [[d:paladin#1470239672809553970]]. Do not drop a big spell-power item to fix hit [[d:paladin#1490385793791955155]] |
| Spell hit | Not needed. Take what comes on spell-power gear. It only matters for taunt, Consecration, Exorcism and procs [[d:paladin#1488770847803052143]], [[d:paladin#1484203112762708129]] |
| **Avoidance (crush and crit cap)** | **102.4% combined dodge + parry + block + miss with Holy Shield up** against level-63 bosses [[d:paladin#1491228429847363704]], [[d:paladin#1490380415968608357]]. Being around 90% "is basically the same" for most purposes [[d:paladin#1488125629583851582]]. It only matters from AQ40 onward [[d:paladin#1477378940875047116]]. BWL does not need it [[d:paladin#1448971232912478208]] |
| AQ40 Twin Emperors | Unbalancing Strike removes 100 Defense, so you need **118.4%** to stay crush- and crit-immune against the melee twin [[d:paladin#1465416367967572164]], [[d:paladin#1448971232912478208]] |
| Kara40 | **Knight and Rupturan require crush immunity**; Rook and Mephistroth "very strongly encourage it" [[d:paladin#1465172802326761748]] |

**Contested: how much to chase crush immunity.** Grey's Mephistroth math: a crushable 8k-HP tank gets killed from full in half a second about once every 3 kills [[d:paladin#1482770093904629905]]. angels1m answers that you never have 100% Holy Shield uptime anyway, and that giving up a trinket slot for avoidance is not worth it in T3.5 [[d:paladin#1482770428094320841]].

## Single-target rotation (priority list)

Before the pull: **Righteous Fury** (re-apply it first after any death) [[d:paladin#1487898897144877108]], **Sanctity Aura** (Retribution Aura if another paladin brings Sanctity) [[d:paladin#1469723489400262698]], your blessing, Seal of Righteousness. Mark the skull.

**Opener:** pre-cast Holy Shield → run in → Judgement of Righteousness → Holy Strike → re-seal Righteousness [[d:paladin#1479624488675971323]], [[d:paladin#1436102447406780479]]. Pop your active spell-power trinket right before the first Judgement or Holy Strike [[d:paladin#1474054737547497583]], [[d:paladin#1450071115706794114]]. The first Holy Strike is the most important GCD of the fight [[d:paladin#1457409928510701750]].

1. **`Holy Strike` the moment it is off cooldown.** Never delay it [[d:paladin#1479624488675971323]].
2. **`Judgement` of Righteousness about 2 s after Holy Strike, on cooldown.** Judgement is off the GCD, so weave it into the GCD of another cast (usually Holy Shield) [[d:paladin#1479624488675971323]], [[d:paladin#1463240147930841219]].
3. **`Seal of Righteousness`** in the next GCD after you judge. Never leave Righteousness for another seal on a boss: you lose Seal of Righteousness, Judgement of Righteousness, and extra Wisdom and Windfury procs [[d:paladin#1475773657925161033]].
4. **`Holy Shield`** when mana permits [[d:paladin#1485641256586444910]]. Rank 1 saves mana on long fights [[d:paladin#1450898726074847345]].
5. **`Consecration`** with the remaining GCDs: rank 5 until your threat lead is established, then rank 1 [[d:paladin#1479624488675971323]]. Keep a rank-1 Consecration on your bar; at about 950 SP it hits for about 90 per tick [[d:paladin#1469935800379506953]]. Below about 30% mana, switch to rank 1 until you are back at 50% [[d:paladin#1470119581581312222]].
6. **`Exorcism`** on Undead and Demons when nothing else is ready. If both are available, Consecration does more threat [[d:paladin#1462761249325711431]].
7. **`Hand of Reckoning`** when a mob leaves you.
8. **`Crusader Strike` is never a threat button.** Holy Strike does "nearly 10x as much threat", and it would take about 5 minutes of auto-attacking for Zeal's haste to pay back the lost Holy Strikes [[d:paladin#1487459563707044021]], [[d:paladin#1487459725661573132]]. Lhian himself has "given up on even considering crusader strike to be part of normal prot rotation" [[d:paladin#1465262990554300527]]. The only use is **Zealous Defence** before a planned big hit or a tank swap: Holy Shield → taunt → Crusader Strike → hit → Bulwark → as Bulwark ends, Crusader Strike again [[d:paladin#1484833025177944206]]. That fits Patchwerk, Twins and Knight [[d:paladin#1484824175431520286]].

Threat sources on a real Patchwerk parse: Holy Strike 599, Seal of Righteousness 367, Judgement of Righteousness 354, auto-attack 212, Holy Shield 200, Consecration 194, others small, for **about 2,085 threat per second**. Holy Strike is 28.7% of the total [[d:paladin#1485399760964817139]]. At high gear the rotation has dead GCDs, which is expected [[d:paladin#1486738241859223706]].

**Libram:** Libram of the Eternal Tower (-0.5 s Holy Strike/Crusader Strike cooldown) for single target. It also stops Holy Strike from lining up with your other cooldowns [[d:paladin#1487468942699270224]], [[d:paladin#1488793803056746558]].

## AoE tanking

| Mobs | Action |
|---|---|
| 2 | No Consecration. Holy Strike the skull, Judgement on the second, tab between them [[d:paladin#1485641256586444910]] |
| 3+ | **Pre-cast Consecration** where the mobs will meet you. The front-load triggers when each mob enters it, so casting early is fine [[d:paladin#1484776924046692372]]. Then run the single-target priority on the skull, and tab Judgement / Holy Strike / taunt onto the others [[d:paladin#1461408170533589197]], [[d:paladin#1432718401230602291]] |
| Big trash pulls | Consecration gives only about 30–40% of AoE threat against 3–5 targets. Lock mobs down one at a time ("get 7–8k threat on a mob, move to the next"), and use taunt and stuns for the extras [[d:paladin#1469946685776990285]], [[d:paladin#1457081838437929141]]. Cast rank-5 Consecration at most 1–2 times per pack [[d:paladin#1469947262431133819]] |
| Mana-heavy multi-target | Seal of Wisdom + Consecration beats Seal of Righteousness on many targets [[d:paladin#1467497544488718404]] |
| Adds that must look at you instantly (Incantagos, Faerlina trash, Noth adds) | Spam Greater Blessings (not Wisdom). Each cast does 60 threat per buffed player, before Righteous Fury, split across all mobs [[d:paladin#1464060242735399034]], [[d:paladin#1449767594717610005]] |

- **Goblin Sapper Charges** double your opening AoE threat (about 500, the same as a Consecration tick). Sappers are "borderline required" for serious raiding [[d:paladin#1489946008426250290]], [[d:paladin#1489945890402865324]]. Tanks want Engineering for Sappers and the Force Reactive Disk [[d:paladin#1465025682735239312]].
- Libram of the Hallowed Ground on trash [[d:paladin#1488793803056746558]].
- In later raids the meta is one fury warrior per add, because Consecration alone will not out-threat geared AoE [[d:paladin#1489946008426250290]].

## Cooldowns

| Cooldown | Use |
|---|---|
| **Bulwark of the Righteous** | Big damage reduction plus threat. Save it for Maexxna and Gothik in Naxx [[d:paladin#1462761249325711431]]. On Anomalus in Kara40, save it with a Greater Arcane Protection Potion for 30+ stacks [[d:paladin#1446932033933934622]] |
| **Holy Shield** | Your crit/crush cap depends on it being up. Pre-cast it before pulls |
| **Divine Shield** | Drops your threat (it returns to max once it ends) and halves your damage. Use it for mechanics (Firemaw stacks, fear) or when you would otherwise die [[d:paladin#1009345760057376838]], [[d:paladin#1349796218406043689]], [[d:paladin#1473267567966814290]] |
| **Blessing of Protection** | On the other tank, to take the boss back from them when a mechanic needs it [[d:paladin#1448374029227528273]]. On a DPS who pulled aggro |
| **Greater Stoneshield Potion** | Patchwerk, Kel'Thuzad, Sapphiron, Loatheb, Faerlina [[d:paladin#1462761249325711431]] |
| **Active trinkets** | Draconic Infused Emblem / Talisman of Ephemeral Power / Essence of Sapphiron, used on pull before the first Holy Strike [[d:paladin#1450071115706794114]], [[d:paladin#1483017571107209247]] |

## Mana

- Boss tanking is close to **infinite mana** with Blessing of Wisdom, Judgement of Wisdom (from another paladin or when your threat is safe), Shield Specialization and free Holy Strikes. Just avoid wasteful max-rank Holy Shield and Consecration [[d:paladin#1469939857630695569]].
- Trash: Seal of Wisdom and Nordanaar Herbal Tea / Major Mana Potions [[d:paladin#1469940162711654472]]. Seal of Wisdom costs you about 30% of your threat [[d:paladin#1485641549508251782]].
- **Spellstrike items are not needed.** Some tanks run none at all [[d:paladin#1494728313246191766]]. **Contested:** a spellstrike ring is fine for comfort before you have Wrath of Cenarius [[d:paladin#1494728846308802612]].
- On Thaddius, judge Wisdom onto the other side's target before the polarity switch, or you will run out of mana [[d:paladin#1462761249325711431]].

## Gear

### Threat vs mitigation sets

Tanks keep several sets and swap per boss [[d:paladin#1451620232870498354]], [[d:paladin#1450143199757860875]].

| Set | Pieces | Use |
|---|---|---|
| **Threat** | 3 T2.5 + 3 T3.5 | Most bosses and trash. T2.5 is "squishy" with little HP [[d:paladin#1484146949824450641]], [[d:paladin#1481047236501569690]] |
| **Mitigation** | 5 T3.5 + 4 T3 | Hard hitters [[d:paladin#1484146949824450641]] |
| **Hybrid** | 3 T2.5 + 3 T3.5 + 4 T3 | Grey reached 8,400 HP, 58.4% avoidance (crush-immune with Holy Shield) and 767 SP with Thunderfury, 895 with Desecration, before trinkets. "Basically the same threat as now but with an extra 1400hp and crush immunity" [[d:paladin#1484192158121594982]] |

T3 is BiS for fights with frequent big hits compared with your max HP (BWL drakes, Chromaggus, Broodlord, Twins, Patchwerk, Sapphiron, Thaddius, Kel'Thuzad, Rupturan, Mephistroth). Its block value also wins on Maexxna, Loatheb and Four Horsemen [[d:paladin#1481047236501569690]]. For Naxx, add about 4 pieces of T3 on top of T2.5 [[d:paladin#1490298071089680425]]. Shoulders/legs mix: T2.5 shoulders + T3.5 legs gives more spell power than the reverse [[d:paladin#1492907380294287470]].

**Reference set (Grey's raid main tank):** T2.5 helm/shoulders/chest; T3 bracers/gloves/belt/ring; T3.5 neck/legs/boots; Chess cape or Rookguard; Wrath of Cenarius; Essence of Sapphiron; Remains of Overwhelming Power; Mark of the Champion; Desecration or Thunderfury (+30 SP); Bulwark of Enduring Earth (+2% block) [[d:paladin#1484202614123008081]].

**PvP gear:** the Veteran's 6-piece has much more HP than T3.5 but less threat. It is "probably BiS" for tanks who need mitigation [[d:paladin#1487367939819569314]]. The Partisan's gloves beat T2 [[d:paladin#1487360616111935629]].

### Pre-raid

- Pre-raid prot is "largely like gearing a spelladin". Get **4 pieces of T0.5** and mix in tank off-pieces [[d:paladin#1490383122943185106]]. Four T0.5 pieces beat T1, T2 or other raid off-pieces in those slots [[d:paladin#1484185230792196157]], [[d:paladin#1484185220281274448]]. The 4-piece T0.5 bonus gives about 95 SP; you want the specific pieces [[d:paladin#1491226716977496165]]. **Contested:** some players use full T1 8-piece for threat [[d:paladin#1493376679689715712]], [[d:paladin#1493382991173386392]].
- **Soulforge 4-piece** is the stepping stone for Black Morass and lasts until T2.5-level gear [[d:paladin#1483210457866047488]].
- R1/R2 PvP sets are good pre-raid Stamina [[d:paladin#1490253553183363175]].
- Black Morass, Stormwind Vault and Karazhan Crypt are the only level-60 dungeons that need gear preparation for a fresh tank [[d:paladin#1432137574889033888]]. See [Black Morass](../../instances/black-morass.md), [Stormwind Vault](../../instances/stormwind-vault.md), [Karazhan Crypt](../../instances/karazhan-crypt.md).

### Weapons (1H + shield)

| Weapon | Verdict | Source |
|---|---|---|
| **Desecration** | Best single-target threat | [[d:paladin#1485350319859826718]] |
| **Thunderfury** | Only about 0.5% behind Desecration. It also gives about 20% less damage taken from boss auto-attacks (its attack-speed slow), and its proc chains on AoE. No longer a prerequisite for high-end tanking | [[d:paladin#1485399707063685261]], [[d:paladin#1480850790955618345]], [[d:paladin#1485616578140569633]], [[d:paladin#1488993270338949282]] |
| **Comet Signaller** | Within 1.5% of both, and better than everything else | [[d:paladin#1485834438897045654]] |
| Lok'amir il Romathis, Wraith Blade | Lok'amir is the Ambershire pick (Desecration on the other realms) | [[d:paladin#1485296624510173217]], [[d:paladin#1485398902264959147]] |
| Pre-raid | Azuresong Mageblade over Blade of Infinite Mysteries or Nefarian's mace. Crimson Spellblade beats Mass of McGowan even on fire-immune bosses (25.8 vs 21.5 non-auto threat per second) | [[d:paladin#1486031686260228127]], [[d:paladin#1485802157461602374]] |

**2H tanking** is a real niche now. It is "outright bis" on Incantagos and Medivh, which do not melee or deal physical damage, and good on elemental-damage fights (Ragnaros, Geddon, BWL drakes, Vaelastrasz, Viscidus, Huhuran, Thaddius, Grobbulus) [[d:paladin#1489188911124320256]], [[d:paladin#1489189325987123381]]. Elsewhere, 1H + shield stays ahead: "it's really hard to beat 128sp with 40% weapon damage", and 2H loses Holy Shield, Reckoning and block [[d:paladin#1487330077824782336]], [[d:paladin#1491915857469640827]]. With a 2H, take Righteous Strikes as main tank and Vengeance as off-tank [[d:paladin#1487321785207754793]].

### Shields, trinkets, librams

- **Shields:** when choosing between two, take the one with more Stamina and armor [[d:paladin#1485883216572321872]]. Useful options:
    - The new Onyxia's Lair boss shield is about equal to BWL's Elementium shield and easier to get [[d:paladin#1485798984277692416]].
    - Bulwark of Enduring Earth [[d:paladin#1484202614123008081]].
    - Jadestone Shield until AQ40. Scaleshield for Nefarian and Solnius Hard Mode [[d:paladin#1478436514147991813]].
    - The Argent Dawn shield only for big dungeon pulls and farming [[d:paladin#1462388598509932786]].
    - Vault Defender is "basically a budget Drillborer" and the best shield until a raid shield drops [[d:paladin#1462388304124317796]].
    - Force Reactive Disk for AoE snap threat and farming, useful up to Kara40. It needs repairs about once per Naxx wing [[d:paladin#1461667214578028668]], [[d:paladin#1462089634526789732]].
    - Skip Skullflame Shield: it is too unreliable [[d:paladin#1461667214578028668]].
- **Trinkets:** always wear at least one active spell-power trinket. Slot 1 progression: Briarwood Reed / Mind's Key / Fabric of Time / Royal Seal → Shard of Nightmare / Corrupted Reed → Neltharion's Tear → Remains / Mark of the Champion. Slot 2: Draconic Infused Emblem → Talisman of Ephemeral Power → Essence of Sapphiron [[d:paladin#1483017571107209247]]. "If you get Nelth's Tear you will not unequip it until k40" [[d:paladin#1484203602917724201]]. Styleen's for raw mitigation [[d:paladin#1454504686295191756]]. Sigil of Ancient Accord is "okay for damage, awful for threat" [[d:paladin#1486669043673862204]].
- **Cloak:** Cloak of the Brood Lord becomes the highest spell-power cape in the game [[d:paladin#1484303715555872769]].
- **Neck:** Choker of the Firelord, then Choker of the Emerald Lord (Emerald Sanctum) until T3.5 [[d:paladin#1471900677700583757]], [[d:paladin#1480244013062947002]].
- **Set bonuses to skip:** Ret T2 3-piece "proc memes" do little for prot, because Righteous Fury only doubles Holy damage [[d:paladin#1486670081877348434]]. Ret T3 2-piece is not worth it below about 1,000 SP [[d:paladin#1486730927223738549]].

## Enchants

Grey's main-tank list [[d:paladin#1484202614123008081]]:

| Slot | Enchant |
|---|---|
| Head / Legs | Zul'Gurub enchant (dodge/defense) [[d:paladin#1448980354017923133]] |
| Shoulders | Sapphiron Stamina |
| Chest | +100 HP |
| Cloak | 1% dodge |
| Bracers | 9 Stamina |
| Gloves | 15 Agility |
| Belt | 5 Defense (Agility over Strength if you use the buckle for stats) [[d:paladin#1492667984320270528]] |
| Boots | 15 Stamina (movement speed on movement fights) [[d:paladin#1449025279602458676]] |
| Neck / Rings | 6 Stamina (5 SP for pure threat) [[d:paladin#1479149537040929063]] |
| Weapon | **+30 spell power**, "by a wide margin" over Crusader [[d:paladin#1487342522484396174]], [[d:paladin#1485640320665391275]] |
| Shield | +2% block over +7 Stamina [[d:paladin#1449034173724496004]] |

## Weapon oil, consumables and world buffs

| Item | Note |
|---|---|
| Wizard Oil (Brilliant) | Standard weapon oil. Switch to an Undead oil in Naxx after the Spider Wing [[d:paladin#1455382735588692038]], [[d:paladin#1462761249325711431]] |
| Flask | **Contested:** Flask of the Titans for HP vs Flask of Supreme Power (+150 SP). The Titans slot costs a paladin 150 SP, unlike a warrior [[d:paladin#1482746530099363966]]. Supreme Power was needed for threat in Kara40 before 1.18.1 [[d:paladin#1444239793155346442]], [[d:paladin#1444240301777748142]] |
| Elixirs | Elixir of Fortitude (it is the difference between 6.9k and 7k HP) [[d:paladin#1450477576383500401]], Greater Arcane Elixir, Dreamshard Elixir, Elixir of Superior Defense, Mongoose, Greater Arcane/Fire Protection Potions [[d:paladin#1424184540204765316]] |
| Stamina | Spirit of Zanza ("the single best tank … consume in the game"), Hardened Mushroom, Medivh's Merlot [[d:paladin#1462114622655168645]] |
| Food | Spell-power food on most bosses; Stamina food on bosses whose crits can kill [[d:paladin#1487116931306750082]] |
| Potions | Greater Stoneshield (see Cooldowns); magic-protection potions for resist fights; Nordanaar Herbal Tea (about 1,100 mana, separate cooldown) [[d:paladin#1485441517744029717]] |
| Explosives | Goblin Sapper Charge, Dynamite (better than Holy Water during progression) [[d:paladin#1462761591672934442]] |

## Macros and addons

- **Righteous Fury + Holy Shield + taunt in one button** (shift = rank-1 Holy Shield; careful, it can taunt): `#showtooltip Holy Shield` / `/cast [nomybuff:Righteous_Fury] Righteous Fury` / `/cast [mod:shift nocooldown:"Holy_Shield"]Holy Shield(Rank 1)` / `/cast [nocooldown:"Holy_Shield"]Holy Shield; [notargeting:player]Hand of Reckoning` [[d:paladin#1450872709037949048]]
- Put Judgement inside another ability's macro (preferably Holy Strike) instead of a separate button. Judging is free, re-sealing costs a GCD [[d:paladin#1456860722083659787]].
- **TWThreat** (it reads Improved Righteous Fury correctly; KTM did not) [[d:paladin#1408467978994843658]], **Tankalyze** for taunt-resist announcements [[d:paladin#1433875894669283390]].
- Ranged pull: paladins have no ranged pull. Item 51778 on the Turtle database is the usual answer (about 60 s cooldown) [[d:paladin#1475240862064578602]], [[d:paladin#1475240963252293813]].

## Raid and dungeon notes

- **[Molten Core](../../instances/molten-core.md):**
    - Ragnaros needs 250–315 fire resistance to reduce knockbacks, and he resets threat after a knockback [[d:paladin#1451158265353211914]].
    - Geddon: about 260+ fire resistance is recommended for pugs [[d:paladin#1483437712760639600]].
    - Garr's adds hit physical, so the off-tank needs avoidance and HP, not fire resistance [[d:paladin#1452199226019680256]].
- **[Blackwing Lair](../../instances/blackwing-lair.md):**
    - Broodlord's Mortal Strike hits for 5,500–6,000 plus an auto [[d:paladin#1482006928174481488]].
    - Firemaw: Shadowflame is about 5,000 armor-ignoring damage and does not reset the swing timer. Wear a fire-resist cloak and have enough Stamina [[d:paladin#1487101376021401810]]. You need strong snap threat [[d:paladin#1487103351844765806]]. Count the Wing Buffet timer [[d:paladin#1489191859149606942]].
    - Only Firemaw needs fire resistance [[d:paladin#1482006597499879537]].
- **AQ40 Twin Emperors:** the melee twin needs 118.4% avoidance (see Caps). Many paladins prefer to tank the caster twin [[d:paladin#1465424569975439565]]. For the caster twin, aim for about 180 arcane and 180 shadow resistance and about 8,000 HP. Use a weapon with magic-type white damage (Thunderfury etc.) and the Black Morass shield (SP + shadow resistance). Keep armor, because he weaves in melee [[d:paladin#1457840761834963151]], [[d:paladin#1457841485272842372]]. Alternatively, tank him at range with Judgement of Righteousness, Holy Shock and blessings [[d:paladin#1457842125969555673]].
- **Naxxramas:** see the Stoneshield and Bulwark list above.
    - Loatheb: a patch-day log shows 227k threat against 115.6k damage [[d:paladin#1484742645593931967]].
    - Do not pull Four Horsemen with Thunderfury (its chain proc) [[d:paladin#1459273068395630593]].
    - Web Wrap does not fully disable dodge [[d:paladin#1462105230819725444]].
- **[Tower of Karazhan (Kara40)](../../instances/tower-of-karazhan.md):**
    - Grey's gear per boss: T3 for Ravens, T2.5 for Gnarlmoon, an arcane-resist set for Incantagos and Anomalus, T2.5 for Medivh, T3 + full mitigation for Knight, T2.5 for Rook and Sanv, T3 + full mitigation for Rupturan, T3 + spell power for Mephistroth [[d:paladin#1483532816535912468]].
    - Ravens: drop a Consecration toward the left before they spawn [[d:paladin#1485541547729621206]].
    - Incantagos: spam Greater Blessings on the pull, because his damage-reduction stacks stop damage threat [[d:paladin#1449767594717610005]].
    - Anomalus: front-load threat in the first ~30 s while healers focus the main tank [[d:paladin#1446931087908405433]]. Stamina, arcane resistance and enough threat to hold until the first bomb matter most [[d:paladin#1453294569700724848]]. Grey runs 315 arcane resistance [[d:paladin#1487511039187619881]].
    - Rupturan: stand more than 20 yd from the boss to hold its aggro mechanic [[d:paladin#1453324999011078288]]. The fight is "hit holy strike, move 12 yards" [[d:paladin#1484464353506754630]].
- **[Lower Karazhan Halls (Kara10)](../../instances/lower-karazhan-halls.md):** pulling the whole basement needs at least 2 shamans (poison totems) [[d:paladin#1483522043856289876]].
- **[Emerald Sanctum](../../instances/emerald-sanctum.md):** an anti-kite mechanic teleports the tank onto certain mobs on pull [[d:paladin#1483521737101410417]].

### Necrodin, spellstrike and Shock-prot as they affect tanking

- **Necrodin is not a tank build.** You do not get your pets' threat [[d:paladin#1485123737551507476]]. Some tanks swap to a Vengeprot/Necrodin spec for trash and back to prot for bosses [[d:paladin#1465229551486505157]]. Speed-run guilds avoid mid-raid respecs [[d:paladin#1465230141583261866]].
- **Shock-prot** (Holy/Prot 30/21 or 21/30) works: Holy Shock costs less mana over time than Judgement of Righteousness (485 per 20 s vs 300 per 8 s). Threat per second is a bit lower, you get better burst and utility, and you lose Bulwark [[d:paladin#1489853410055557162]], [[d:paladin#1489854443481600001]], [[d:paladin#1489854065633661161]]. No calculator code was posted.

## Common mistakes

- Not re-applying Righteous Fury after dying, or not toggling it after a respec [[d:paladin#1487898897144877108]], [[d:paladin#1485066092085907519]].
- Pressing Crusader Strike for threat [[d:paladin#1487459563707044021]].
- Delaying Holy Strike, or opening without it [[d:paladin#1479624488675971323]].
- Consecrating single targets [[d:paladin#1485641256586444910]].
- Chasing 440 Defense or stacking Strength [[d:paladin#1491228491344121866]], [[d:paladin#1492667984320270528]].
- Running below about 7,000 HP on BWL and Naxx bosses [[d:paladin#1486300603683700891]].
- Wearing Ret T2 for spellstrike procs [[d:paladin#1483516161353056407]].
- Trusting a threat meter that does not read Improved Righteous Fury [[d:paladin#1408467978994843658]].
