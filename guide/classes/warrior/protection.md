# Protection Warrior (tank)

**Recommendation:** in 1.18.1, main-tank as **Defensive Tactics ("DefTac", 17/3/31 or 0/20/31)**. That means a shield and a fast one-hander, tanking in **Battle Stance** for most of the pull, with **Shield Slam and Heroic Strike** as your threat. Swap to Defensive Stance to taunt or to block-dance through dangerous hits. The January patch raised Defiance to 20% and buffed Shield Slam, and that closed most of DefTac's threat gap to FuryProt: "going dtac is better in 99.9% of cases instead of 95% it was before" [[d:warrior#1485222514119671829]], [[d:warrior#1484900996613279845]].

- **FuryProt (0/31/20)** stays the best **off-tank** spec and the answer when a raid "really need[s] that extra ~150 tps" [[d:warrior#1485222628016001024]], [[d:warrior#1466762952496644232]].
- **Death Wish Prot (0/21/30)** is a high-end MT variant [[d:warrior#1494358776797462558]].
- **Revenge/Reprisal deep prot** is for fresh 60s and dungeons.

Warrior is the single-target "cooldown tank". It trails bear and paladin overall, and it has almost no AoE threat of its own.

| | |
|---|---|
| Role | Main tank, off-tank; Sunder Armor, Demoralizing Shout, Disarm, Shield Wall |
| Viability (1.18.1) | **A (raid MT/OT).** "More than viable for all the content in the current patch" but "the worst MT" of the three tank classes [[d:warrior#1482694837080821865]]. Bear > Paladin ≈ Warrior as a complete package [[d:warrior#1491603680649150564]], [[d:warrior#1484745552615964902]] |
| Difficulty | DefTac: medium (stance and shield-buff management). FuryProt: high (healer trust, rage and threat juggling) |
| Strengths | "Warrior is the cooldown tank. Best defensive and offensive cds" [[d:warrior#1489291426532556983]]; best Vael tank [[d:warrior#1489291318084767774]]; best Incantagos tank thanks to flat threat [[d:warrior#1480289819648069712]], [[d:warrior#1471934174830137375]] |
| Weaknesses | AoE threat ("we are the single target tank class") [[d:warrior#1488666852841357532]]; openers depend on Shield Slam landing [[d:warrior#1485223080249917522]]; mitigation costs rage and therefore threat [[d:warrior#1454683570093428828]] |

## How to play

A decision loop for a level-60 warrior tank. The details are in [Single-target rotation](#single-target-rotation), [AoE threat](#aoe-threat) and [Cooldowns](#cooldowns).

1. **Pull setup:** Battle Shout and Bloodrage about a minute before the pull, and a Mighty Rage Potion on the pull [[d:warrior#1429243795848953866]], [[d:warrior#1447700245839478945]]. Ask DPS to hold 2–3 GCDs [[d:warrior#1441269697512472678]]. Stance and weapon by build:
   - **DefTac:** shield and a fast one-hander, in **Battle Stance** [[d:warrior#1488520429432864768]].
   - **FuryProt:** dual wield, in **Defensive Stance** with as much rage as possible. Use Death Wish just before running in [[d:warrior#1475249694681600101]].
   - **Revenge deep prot** (fresh 60, dungeons): shield, in Defensive Stance.
2. **First 3–5 GCDs:** threat skills only. Don't open a single target with Thunder Clap or Demoralizing Shout [[d:warrior#1475256639379734619]].
   - **DefTac:** Shield Slam (or Concussion Blow; within variance [[d:warrior#1483588317709598801]]) → Sunder Armor → Overpower or Sunder → Shield Slam again at 6 s. Queue Heroic Strike on every swing you can afford.
   - **FuryProt:** Bloodrage → Bloodthirst + Heroic Strike on the first GCD [[d:warrior#1475249627337986211]] → Revenge / Sunder → Bloodthirst.
3. **Steady threat loop:**
   - **DefTac:** Shield Slam on cooldown > Overpower on a dodge > Concussion Blow on cooldown > Sunder Armor filler. Heroic Strike is the rage dump and your main threat with Shield Slam ([DefTac](#deftac-bot-ready)).
   - **FuryProt:** Bloodthirst > Revenge > Sunder Armor when rage-capped. Heroic Strike keeps rage at about 50–60 ([FuryProt](#furyprot)).
   - **Revenge deep prot:** Shield Slam > Revenge > Sunder Armor > Heroic Strike dump ([Revenge/Reprisal](#revengereprisal-deep-prot-fresh-60-dungeons)).
4. **Multi-mob:**
   - Mark skull > cross > square [[d:warrior#1469884937959243838]].
   - Spam Demoralizing Shout [[d:warrior#1485307725683495074]]. Tab-Cleave on autos [[d:warrior#1484622368537186324]].
   - Thunder Clap hits at most 4 targets.
   - Make a short Berserker swap for "tclap whirlwind tclap" [[d:warrior#1473484685412794591]].
   - For hard pulls, use Thunderfury, Sappers or dynamite. Don't try to AoE-tank like a paladin.
5. **Taunt / threat recovery:**
   - **Taunt** needs Defensive Stance and 5 yd, has a 10 s cooldown, and can be resisted. It fails on a crowd-controlled mob [[d:warrior#1430903627610062879]].
   - **Mocking Blow** (Battle Stance, 120 s) is the backup; **Challenging Shout** (10 min) is the AoE emergency.
   - Where the threat value must transfer (Four Horsemen), only Taunt copies it [[d:warrior#1379003122881658973]].
6. **Defensive cooldown rules:**
   - Sequence Shield Slam's block buff and Shield Block for crit safety; they overwrite each other [[d:warrior#1476093703821983804]].
   - Once your threat lead is safe on a dangerous boss, block-dance in Defensive Stance [[d:warrior#1488520746740224050]].
   - When low: Last Stand, healthstone, tea.
   - **Shield Wall** needs a shield and shares a 30-minute cooldown with Recklessness and Retaliation [[d:warrior#1462506610068029502]].
   - Improved Berserker Rage breaks roots.
7. **Avoid:**
   - Revenge talents in a DefTac build.
   - DefTac in Defensive Stance all fight.
   - A slow weapon.
   - Taunting a crowd-controlled mob.
   - FuryProt with a shield or in fresh gear.

See also [Common mistakes](#common-mistakes).

## What changed in 1.18.1

- **Defiance:** +4/8/12/15/20% threat in Defensive Stance (the last rank went from 15% to 20%). **Shield Slam:** Attack Power scaling 15% → 20% and its extra threat modifier 50% → 75%. The developers called these "targeted improvements" and promised "a more comprehensive review of the Protection talent tree" later [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:warrior#1481378107037323354]].
- **The new DefTac math:** with 5/5 Defiance, Defensive Stance has a 156% threat modifier. Defensive Tactics carries 180% of that bonus into Battle and Berserker Stance, and the 0.8 stance penalty then gives **160.64%**, more than Defensive Stance's 156% [[d:warrior#1464421792730054788]]. Developer Lhian said it "should be the same math as current deftac" [[d:warrior#1464422567145115699]]. Battle Stance also avoids Defensive Stance's damage penalty, so DefTac out-threatens itself in Battle Stance [[d:warrior#1484538309416845352]], [[d:warrior#1484916553530085428]].
- **First reports after the patch:** "deftac threat is insane now" [[d:warrior#1484651876229320755]]; "on bwl as deep prot I was number 1 on threat at basically all times after the update" [[d:warrior#1485306450720063720]]; "tanked naxx tonight and everything felt good" [[d:warrior#1485145112974721147]].
- **Champion buffs were removed** from the game. Some tanks felt lower threat after the patch for that reason, not because of their spec [[d:warrior#1485300408393138258]], [[d:warrior#1464368423885869251]]. Bear Maul threat was cut 15% in the same pass [[d:warrior#1464423897574277325]].
- **Shield block fix** (March 25): block classes had been taking their full damage even after a block [[d:warrior#1486406992577822871]], [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139).
- **Older Turtle changes you need to know:**
  - Concussion Blow now *generates* rage [[d:warrior#1460410582208479334]].
  - Shield Slam grants one Shield Block-style buff that overwrites Shield Block, instead of Shield Block's old two charges [[d:warrior#1460410895854342196]], [[d:warrior#1476093980205777048]].
  - Thunder Clap works in Defensive Stance [[d:warrior#1451088832236748943]].
  - Shield Wall requires a shield; you can no longer use it while dual-wielding [[d:warrior#1474052002467152103]].

## Which build?

| Situation | Build | Why |
|---|---|---|
| Main tank, most raids | **DefTac Impale 17/3/31** | Pinned reference build; "impaleProt is the easiest to learn", and among FuryProt, DeathTactics and ImpaleProt "there isn't a clear winner" [[d:warrior#1485630915832057876]], [[d:warrior#1485630473261547552]] |
| MT without a reliable second warrior keeping shouts up | **DefTac Enrage ("shouts") 0/20/31** | "If you have a warrior you trust to keep BS and demo up impale is better. I don't trust anybody so I go shouts" [[d:warrior#1483134510714458183]] |
| High-end MT | **Death Wish Prot 0/21/30** | Tole's favored MT build after the buffs; "21/30 is definitely the path because you get dtac" [[d:warrior#1494358776797462558]], [[d:warrior#1494359251341279344]] |
| Off-tank; raids that need more threat | **FuryProt 0/31/20** | Ideal off-tank because its DPS stays acceptable when not tanking [[d:warrior#1475982910027862108]], [[d:warrior#1466762952496644232]] |
| Fresh 60, dungeons, low gear | **Revenge/Reprisal deep prot** | Low gear: Defensive Stance Revenge/Reprisal; mid/high gear: DefTac or FuryProt [[d:warrior#1461037234353471638]], [[d:warrior#1476618675212652594]] |

**Contested: should warriors play FuryProt at all now?** Weirdthing: "the only reason to go fprot now is if you _really_ need that extra 150 tps" [[d:warrior#1485222628016001024]]. Tole still runs FuryProt "for every warrior other than MT because it does much better dps" [[d:warrior#1494360183076556820]]. Lipibidy argues the three sub-specs "all compete with each other for relevancy" and that "at the high end, there's no reason to play the prot tree specs" [[d:warrior#1490402975577804933]]. The older, still-quoted rule: "for casual guild any form of deep prot is >>>> furyProt" [[d:warrior#1470041122100220055]]. For a new tank, "start out Dtac but try furyprot once you have some gear and if threat is an issue" [[d:warrior#1469010131336298600]].

## Talent builds

### DefTac Impale, 17/3/31 (recommended MT build)

This is Black Hat's pinned "Impale Deftac" [[d:warrior#1475989434426986568]]. Lipibidy re-linked it after the patch as his "Dtac" build [[d:warrior#1487886921005797666]].

| Tree | Talent | Points |
|---|---|---|
| Arms | Improved Heroic Strike | 3/3 |
| Arms | Tactical Mastery | 5/5 |
| Arms | Improved Rend | 2/2 |
| Arms | Improved Overpower | 2/2 |
| Arms | Deep Wounds | 3/3 |
| Arms | Impale | 2/2 |
| Fury | Cruelty | 3/5 |
| Protection | Improved Bloodrage | 2/2 |
| Protection | Shield Specialization | 5/5 |
| Protection | Toughness | 5/5 |
| Protection | Last Stand | 1/1 |
| Protection | Improved Taunt | 2/2 |
| Protection | Defiance | 5/5 |
| Protection | One-Handed Weapon Specialization | 4/5 |
| Protection | Shield Slam | 1/1 |
| Protection | Improved Shield Slam | 2/2 |
| Protection | Defensive Tactics | 3/3 |
| Protection | Concussion Blow | 1/1 |

Split **17/3/31**, validated (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35200002302-03-2500510200054120031) · code `dQAACYAQ-AY-VAAoIQAohQAYB`

- **Impale needs crit.** The breakeven is about 17% effective crit; above that it adds roughly 1% at 22%, 1.5% at 25%, 2% at 29% and 2.5% at 32% [[d:warrior#1436730382107021372]]. Black Hat: "Crit breakpoint is 15% but take it from 20+ _effective_ crit" [[d:warrior#1475989434426986568]]. Below that, run his **Cruelty DefTac** `dAEAC-Ao-VAAoIQAopQAYB` (14/5/32). [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35004002-05-2500510200055120031) · VALID.
- **Improved Overpower 2/2:** in Battle Stance, Overpower "is insane threat gen" [[d:warrior#1465951824824766630]], and more Overpowers mean more Impale procs [[d:warrior#1432275361726599219]]. Lipibidy's variant `dQCAAYAQ-AY-VAAoIQAohQAYB` puts those two points in Deflection instead [[d:warrior#1487143734452949093]]. [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35202000302-03-2500510200054120031) · VALID.
- **No Revenge talents with DefTac:** "If dtac, don't take revenge talents. If revenge talents, don't take dtac" [[d:warrior#1484903007748362241]], [[d:warrior#1478712046215364619]].
- **One-Handed Weapon Specialization** only boosts white hits (autos and Heroic Strike), not Shield Slam, Revenge or Concussion Blow. It was tested live, and the developers call it working as intended [[d:warrior#1478726498973388811]], [[d:warrior#1478800168240414883]].
- **Improved Taunt** earns its points on Anomalus, whose charge resets threat every few seconds [[d:warrior#1460398283284545727]], [[d:warrior#1460398411596697701]].

### DefTac Enrage ("shouts"), 0/20/31

Lipibidy's post-patch link [[d:warrior#1487143734452949093]]. It trades the Arms dip for Cruelty, Unbridled Wrath, Improved Shouts and Enrage. Take it when nobody else keeps Battle Shout and Demoralizing Shout up [[d:warrior#1483134510714458183]]. Cannondorf "mt'ed k40 perfectly fine without impale" [[d:warrior#1483135309393952839]].

[Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=-050550005-2500510200054120031) · code `-AoAooAAo-VAAoIQAohQAYB` · split **0/20/31**, VALID.

### Death Wish Prot ("DeathTactics"), 0/21/30

Drop Concussion Blow to reach Death Wish: "you just stop at imp shield slam and keep going fury" [[d:warrior#1492027113321271296]]. Tole takes the 21/30 path "because you get dtac" and says it "get[s] the most from the recent buffs and stay[s] uncrittable" [[d:warrior#1494358776797462558]], [[d:warrior#1494359251341279344]]. Before the patch, Velanir's sims gave DeathTactics a better opener and "a lower standard deviation than impaleProt" [[d:warrior#1483552117363838996]], [[d:warrior#1483550098976669789]]. Example allocation (Bassilthorne, posted a week before the patch):

[Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=-050550005001-203051013005412003) · code `-AoAooAAoB-QYAoILAohQAY` · split **0/21/30**, VALID [[d:warrior#1482221802792030251]]. Its 3 points in Improved Revenge and 3 in Anticipation are filler; spend them per the no-Revenge-with-DefTac rule above if you prefer.

### FuryProt, 0/31/20 (off-tank; high-threat MT)

Black Hat's pinned pair [[d:warrior#1475989434426986568]], [[d:warrior#1458142634798350512]]:

- **MT version:** Cruelty 5, Dual Wield Specialization 5, Unbridled Wrath 4, Improved Shouts 5, Enrage 5, Death Wish, Flurry 5, Bloodthirst / Improved Bloodrage 2, Shield Specialization 5, Toughness 5, Last Stand, Improved Taunt 2, Defiance 5. [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=-05545000500100501-250051020005) · `-AoFgoAAoBAFAB-VAAoIQAo` · VALID
- **OT version** (Unbridled Wrath → Ravager 2 + Improved Execute 2, for damage when not tanking). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=-05505000502120501-250051020005) · `-AoFAoAAoRCFAB-VAAoIQAo` · VALID

Notes:

- "BT/Defiance is the important stuff, some points are flexible." If you never swap to Berserker, move the Execute and Whirlwind points into Unbridled Wrath [[d:warrior#1466763891571687438]].
- The 5 points in Shield Specialization are filler you can move [[d:warrior#1433179304895971358]]. FuryProt "lives and dies by Defiance" [[d:warrior#1439317971116757092]].
- 5/5 Flurry beats Blood Drinker for threat [[d:warrior#1475146170543112288]], [[d:warrior#1475154800307077121]].
- FuryProt only makes sense dual-wielding with Death Wish: "if you don't deathwish dual wield you shouldn't play furyProt". With a shield on, it is "the worst tank" [[d:warrior#1478473227272454178]], [[d:warrior#1478473279219044557]].
- Don't go FuryProt before roughly T2.5/AQ40 gear; the extra incoming damage isn't worth it earlier [[d:warrior#1463067390098018540]]. It needs hit cap, around 15% crit and a fast main hand [[d:warrior#1476618675212652594]], and it is "less of a tank and more of a fury warrior being healed through a boss" [[d:warrior#1487889534120104038]].

### Revenge/Reprisal deep prot (fresh 60, dungeons)

Black Hat's pinned fresh-60 builds [[d:warrior#1475989434426986568]]:

- **Dungeon runs** (Improved Thunder Clap, Revenge, Reprisal, Concussion Blow): `FAFD-Ao-VAAoIDIopSAAB` (13/5/33). [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=050053-05-2500510031055122001) · VALID
- **Fresh raiding** (Impale dip + Revenge/Reprisal): `aQFAAYAQ-AY-UAAoIDAopSAAB` (17/3/31). [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=32205000302-03-2400510030055122001) · VALID

With fresh-60 gear Revenge is actually good [[d:warrior#1432320338007556146]]. Revenge's threat is flat, though (max rank = (damage + 355) × stance modifier) [[d:warrior#1462715369516175381]], so it falls behind as you gear [[d:warrior#1485318931710476419]]. Revenge Prot is "essentially a leveling/dungeon-only build" at endgame [[d:warrior#1490402975577804933]]. After reaching 60, one tank concluded that Reprisal's refund is not worth it even as MT [[d:warrior#1494538095046037525]]. A Death Wish Revenge build is one player's choice for dungeon-only tanking [[d:warrior#1485337755646165135]].

## Threat mechanics

| Item | Value | Source |
|---|---|---|
| Stance modifiers | Defensive 1.3 (×1.2 with 5/5 Defiance = 1.56); Battle/Berserker 0.8 | [[d:warrior#1464421792730054788]], [[d:warrior#1488518308587245610]] |
| DefTac in Battle/Berserker | 1.6064 with 5/5 Defiance (1.5128 before the Defiance buff) | [[d:warrior#1464421792730054788]], [[d:warrior#1464608419020275712]] |
| Shield Slam | damage = 303 + block value + 0.2 × AP; threat = damage × 1.75 × stance modifier (was 0.15 AP / ×1.5 before 1.18.1) | [[d:warrior#1479647366880563201]], [[d:warrior#1479649909555728447]] |
| Revenge | (damage + 355) × stance modifier; ≈528 flat with Defiance | [[d:warrior#1462715369516175381]], [[d:warrior#1475525307053379686]] |
| Sunder Armor | 260 base threat, 390 in Defensive Stance with Defiance; costs 10 rage | [[d:warrior#1476086545273454633]], [[d:warrior#1470495822188642435]] |
| Heroic Strike | (damage + flat threat) × stance modifier; the flat part is not multiplied by anything else | [[d:warrior#1474055840628604999]], [[d:warrior#1462172058510164033]] |
| Thunderfury proc | damage × modifier + 234 × modifier; unaffected by stance multipliers | [[d:warrior#1486451604449263779]], [[d:warrior#1486456801498239196]] |
| Buff/debuff application | ~25 threat per affected target, split across targets | [[d:warrior#1453422367866093569]], [[d:warrior#1457541216420888738]] |

What this means in play:

- **Shield Slam and Heroic Strike are your threat.** Heroic Strike is "your main threat in a raid environment (or roughly equal to shield slam)", which is why you need a fast weapon [[d:warrior#1484648702718251058]]. Shield Slam "overshadows any other active ability; even as revenge prot, you could press only shield slam and heroic strike and do the majority of your threat" [[d:warrior#1492031644574683297]].
- **Your opener hinges on Shield Slam landing.** Its combined miss + dodge + parry chance against a boss is about 19% at 315 weapon skill [[d:warrior#1487115607617962087]]. "If you miss 2 shield slams in a row on opener youre doomed" [[d:warrior#1485223080249917522]]. FuryProt is "so much better at chasing a bad opener than dtac" [[d:warrior#1453065132341989568]].
- **Ask DPS to hold 2-3 GCDs on the pull** to cover parry/dodge streaks [[d:warrior#1441269697512472678]]. The opener matters far more than average TPS [[d:warrior#1441278946753904641]].
- **Taunt** copies the target's aggro only when the debuff lands, and can fail on a crowd-controlled or target-less mob [[d:warrior#1430903507375882241]], [[d:warrior#1430903627610062879]]. **Contested:** spell data gives Taunt a 10 s cooldown, but players report 9 s [[d:warrior#1466112021677478022]]; it can be resisted (about 1 in 6), requires Defensive Stance [[d:warrior#1487489449251049632]], and has only 5 yards of range [[d:warrior#1459932834553794713]].

## Stats and caps

**DefTac:** "you ape out on threat stats and wear a shield with a fast weapon" [[d:warrior#1484717088315670750]].

1. **Hit to the yellow cap** (8% at 300 weapon skill, 5% at 315) [[d:warrior#1457402757693833248]]. Hit matters for Shield Slam: a parried or dodged Slam "causes eternal pain" [[d:warrior#1433199900555870260]]. Above the cap, "every point... does exactly nothing for 1h+shield" [[d:warrior#1483151759164833832]].
2. **Agility/crit > Strength > AP > block value > haste** for threat [[d:warrior#1433037675350200380]]. If you need threat, "Agi/crit >> Str/AP > SBV"; if you need mitigation, "Stam/armor do the heavy lifting" [[d:warrior#1440130599955468308]].
3. **Weapon skill barely matters for a shield tank:** Heroic Strike swings cannot glance [[d:warrior#1485315738053902458]], [[d:warrior#1485316487324504246]].
4. **Block value** is weak: a typical piece has about 20. **Glyph of Deflection** is "the only block value item worth using for damage" [[d:warrior#1482190391049719959]]; for DefTac it is "like a small deathwish in terms of threat" [[d:warrior#1453702393660182548]].
5. **Stamina** for survival. Stamina enchants are better for effective health [[d:warrior#1489426217940680807]]. Avoidance is not mitigation: "dodge>dodge>crush" gives healers heart attacks [[d:warrior#1474892000930300048]].

**FuryProt:** Stamina > Agility > Strength; hit cap and weapon skill preferred; crit always welcome [[d:warrior#1440374163897319454]]. "Stats are king, you double dip on stats like crazy as fprot" [[d:warrior#1487804466467180734]]. Hit matters a bit less because most of your main-hand swings are Heroic Strikes [[d:warrior#1487804139068194857]].

| Threshold | Value | Source |
|---|---|---|
| Defense for an MT | ~370-400; much higher tanks your TPS | [[d:warrior#1476092913783017605]] |
| Crit/crush immunity | Use Shield Slam's buff and Shield Block in sequence (they overwrite each other) rather than stacking Defense | [[d:warrior#1476093703821983804]], [[d:warrior#1476093980205777048]], [[d:warrior#1452840513941012594]] |
| Daze immunity | 400 Defense vs level 60, 415 vs level 63 (another poster: 420); matters mainly on Twin Emperors | [[d:warrior#1426208539575320656]], [[d:warrior#1426208364383436831]], [[d:warrior#1425674099702890588]] |
| Avoidance | 50-60% total block + dodge + parry is "a good place to be" | [[d:warrior#1466416470845296779]] |
| Trash crits | ~360-380 Defense from gear stops most trash crits; Chromaggus and Twins can still crit below ~400 | [[d:warrior#1433173779508494527]] |
| HP for Four Horsemen | ~6.5k buffed minimum | [[d:warrior#1440845928193069119]] |

Dodge and other avoidance also cost rage, because you gain rage from being hit [[d:warrior#1463291642588041217]]. A priest's Power Word: Shield on you does the same [[d:warrior#1492254327455088712]]. FuryProt takes the same +10% physical damage as DefTac and 10% less spell damage, but has no Shield Slam buff and no block, so its damage intake is spikier. The Shield Slam buff alone prevents about half of all crits [[d:warrior#1473523095468769491]], [[d:warrior#1473524008313028669]].

## Single-target rotation

### DefTac (bot-ready)

1. **Pre-pull:** Battle Shout and Bloodrage about a minute before the pull [[d:warrior#1429243795848953866]]. Mighty Rage Potion on the pull [[d:warrior#1447700245839478945]]. For a burst of pull threat, stack Recklessness + Enrage + Death Wish + Mighty Rage Potion [[d:warrior#1478456885467414592]].
2. **Stance:** tank in **Battle Stance** for every pull you safely can. Dodging does so "for every single pull in the game besides the drake in bwl that gets ranged pulled and thrashes" [[d:warrior#1488520429432864768]]. Swap to Defensive Stance to taunt, or to block-dance once threat is safe [[d:warrior#1488520746740224050]].
3. **Opener:** Shield Slam or Concussion Blow first; after the buffs the two are within variance, with Shield Slam about 2 TPS ahead [[d:warrior#1483588317709598801]].
4. **Shield Slam** on cooldown.
5. **Overpower** when it procs (dodge only; Overpower off parries was a bug and has been fixed) [[d:warrior#1478712046215364619]], [[d:warrior#1465472870539985081]].
6. **Concussion Blow** on cooldown (Impale/Enrage builds). It generates rage [[d:warrior#1460410582208479334]].
7. **Heroic Strike** as the rage dump on every swing you can afford.
8. **Sunder Armor** as filler. Its rage cost is now 10, down from 15 [[d:warrior#1470495822188642435]].
9. **Crit/crush safety:** sequence Shield Slam's buff and Shield Block. They overwrite each other, so press Shield Block after a hit has consumed the Shield Slam buff [[d:warrior#1476093703821983804]], [[d:warrior#1454146387263488083]].

### FuryProt

1. **Pull:** start in Defensive Stance with as much rage as possible. Bloodrage, then **Bloodthirst + Heroic Strike on the first GCD**. On bosses, run in with Death Wish used just before [[d:warrior#1475249627337986211]], [[d:warrior#1475249694681600101]]. Don't waste early GCDs on Thunder Clap or Demoralizing Shout [[d:warrior#1475256639379734619]].
2. **Bloodthirst** on cooldown; it sits above Revenge [[d:warrior#1487798975640764467]].
3. **Revenge** when it procs.
4. **Heroic Strike** is your rage-management tool: keep rage at roughly 50-60 [[d:warrior#1487799048063942657]], [[d:warrior#1487799099037061202]].
5. **Sunder Armor** once you are rage-capped [[d:warrior#1487799261621129268]].
6. In the **Execute phase** stance doesn't change threat, but tanking in Berserker Stance is risky. Stay in Defensive Stance; with a huge lead, focus on mitigation and save rage for the next pull [[d:warrior#1472681264820781318]], [[d:warrior#1472673302240563447]].

### Death Wish Prot

Pull with Death Wish and Bloodrage (Enrage), then Shield Slam, Heroic Strike and Sunder as for DefTac. Death Wish Prot has "the worst consistency" but the best average TPS in sims: "pump the shit out of it and hope nothing gets parried" [[d:warrior#1470043502502088975]], [[d:warrior#1470043842240843957]].

## AoE threat

Warrior has **no dedicated AoE threat tool**, and 1.18.1 did not add one ("we're complaining why all tanks get aoe but warrior... so wtf is twow doing") [[d:warrior#1484622046624354507]], [[d:warrior#1484622112340840649]]. "Warrior lacks tools for tanking anything but a boss" [[d:warrior#1484969394714185761]]. Plan your pulls around that.

1. **Mark** the kill order (skull, cross, square) and let DPS own their mistakes [[d:warrior#1469884937959243838]].
2. **Demoralizing Shout** is "warriors best real aoe threat ability if you don't have thunderfury". It is uncapped and cheap, and you can spam it [[d:warrior#1485307725683495074]], [[d:warrior#1485308036565176433]].
3. **Tab-Cleave**: spread auto-attack Cleaves across the pack. Hayden calls it "your best aoe threat ability thats not dynamite" [[d:warrior#1484622368537186324]]. Pool rage between pulls so you have some for the next pack [[d:warrior#1484623710597025883]].
4. **Thunder Clap** hits at most 4 targets. It is coded as a spell (spell crit, can be resisted, cannot proc Deep Wounds) and has no AP scaling [[d:warrior#1465413064990920898]], [[d:warrior#1473018664101089436]]. Kyrsie measured about 243 damage with the talent and the T2.5 set against a zero-armor dummy [[d:warrior#1470412400963489814]].
5. **Whirlwind** briefly from Berserker Stance: "tclap whirlwind tclap", and losing some mobs is expected [[d:warrior#1473484685412794591]]. DefTac with a Thunderfall Whirlwind is "very decent for aoe tanking" [[d:warrior#1484621022937481506]].
6. **External tools:** Thunderfury ("a cheatcode for small aoe threat"), Force Reactive Disk, Oil of Immolation, Goblin Sapper Charges and Dense Dynamite [[d:warrior#1486781276953251931]], [[d:warrior#1458859989341962240]], [[d:warrior#1460254127790755880]]. Sappers are the reliable answer for hard pulls such as Garr [[d:warrior#1484621943150739467]].
7. **Challenging Shout** is your emergency AoE taunt; AoE tanking gets noticeably harder while it is on cooldown [[d:warrior#1473015814440358053]].

"The 4 packs in the entire game that actually allow you to do real aoe tanking are warrior assignments" [[d:warrior#1485304556324782114]]. Otherwise, leave big AoE pulls to paladins and bears [[d:warrior#1489290168446746885]].

## Cooldowns

- **Shield Wall** needs a shield equipped [[d:warrior#1474052002467152103]]. It shares one 30-minute cooldown with Recklessness and Retaliation [[d:warrior#1462506610068029502]], [[d:warrior#1479169154996109373]]. FuryProt losing Shield Wall "is really annoying for a solid 4 fights in the game" [[d:warrior#1480289467846754446]].
- **Last Stand**, a healthstone and Nordanaar Herbal Tea are part of your job when low. Missing them is your fault, not the healer's [[d:warrior#1425928073638969394]].
- **Improved Berserker Rage** removes roots and slows (Kara40 curses, Noth, Gothik) [[d:warrior#1421142174874996736]]. Never use it during Sanv Tas'dal's add phase [[d:warrior#1468022689401929761]].
- **Death Wish** (FuryProt, Death Wish Prot) before the pull [[d:warrior#1475249694681600101]].

## Thunderfury

- For a warrior tank, Thunderfury is close to mandatory. It is the main AoE threat source, and in DefTac sims it adds about 100-150 TPS over THC [[d:warrior#1458918335252140327]], [[d:warrior#1458916342249029684]].
- Velanir's DefTac threat-BiS sim ranks **Thunderfury > THC > Rockslicer/Crul'shorukh**, and "Thunderfall is explicitly... bad for tanking" [[d:warrior#1473343368170836203]].
- Thunderfury in the main hand beat THC in the main hand in a dummy test [[d:warrior#1483875658093559889]]. FuryProt BiS is Thunderfury + Riftcarver; for consistency, "tf/riftcarver > tf/thc >> tf/thunderfall" [[d:warrior#1465473090828894380]], [[d:warrior#1462175511248769107]].
- The proc does not re-hit targets that already carry its debuff, so it is safe around crowd-controlled mobs, but take it off for Twins-style split fights [[d:warrior#1483878012880424980]]. Other things it won't pull include Kel'Thuzad's lightning adds and the Twins scarabs; for those, swap to a fast 60+ DPS weapon [[d:warrior#1463048796408905824]].
- It is weak in AQ40 because most trash resists Nature [[d:warrior#1469092264889290844]].
- **Contested:** Lipibidy calls Thunderfury being "the solution to warrior tanking... the next worst design in WoW" [[d:warrior#1490170869027180544]]; Velanir says "TF got massive competetion" [[d:warrior#1490332316680065196]].

## Gear

Keep **three sets**: full threat, beefy threat, full mitigation [[d:warrior#1430018559806935070]]. "There is no such thing as full BiS for FuryProt"; your gear changes by fight [[d:warrior#1441767138158448761]]. DPS gear is threat gear: gear "like a DPS warrior" minus leather and mail [[d:warrior#1456101071687651432]], [[d:warrior#1431018662185144463]].

- **Pre-raid:** the Stormwind Vault drop set is a good pre-BiS deep prot set [[d:warrior#1474795053149847654]]. Pair Corrosive Core with Breadth of the Earthmother for sure; Hand of Justice "isn't that good" for this set [[d:warrior#1474796365224870152]], [[d:warrior#1474796394379477092]]. Other picks: Anasterian's Legacy, Darkflame Helm, T1 Might pieces [[d:warrior#1484904940940951562]]. T1 tank set: "a ton of % chance to block which is all useless" [[d:warrior#1439701707775938561]].
- **Shields:** Aegis for DefTac, **Scaleshield** for FuryProt. Lipibidy prefers Scaleshield all around: "12 str/agi/stam > block stats, and the fear break active is also useful" [[d:warrior#1491239744091193494]], [[d:warrior#1491241309024026826]].
- **Weapons:** fast. "Slow weapon is not worth it due to massively reduced amount of heroics" [[d:warrior#1465472984121868298]]. Don't DefTac-tank with anything slower than Thunderfury [[d:warrior#1484648367270395994]]. Warblades are only about 8 DPS behind BWL-BiS weapons for FuryProt: "excellent choice if you don't have Thunderfury yet" [[d:warrior#1469573984961171539]]. Without Thunderfury, THC is BiS [[d:warrior#1465472914496159838]]. **Contested:** one player called Broodwarden "bis till thc" then walked it back, and another didn't see it show up in the sim [[d:warrior#1490916989856907348]], [[d:warrior#1490919419159777451]]; the same player later called it "undervalued by a lot of people" with an "incredibly strong" sword proc [[d:warrior#1494817005176492134]].
- **FuryProt BWL checklist** (a player's list the channel answered): Chromatic Boots; T2 DPS or Legguards of the Fallen Crusader legs; T2 DPS, Taut Dragonhide or Drake Talon shoulders; Tempest's Rage/Maladath or Thunderfury; Heart of Dreams + Drake Fang Talisman. Add the Kara10 Darkflame Helm [[d:warrior#1487748272444538993]], [[d:warrior#1487750362449575947]]. For rings, Circle of Applied Force (buffed to 15 Str / 12 Stam / 22 Agi), or Band of Accuria if you still need hit [[d:warrior#1487751869953605632]], [[d:warrior#1487752130650701855]].
- **Tier:** T2 tank is "mitigation BIS forever" [[d:warrior#1483125112822562818]]. The T3 tank set is "the most mit you can get going into k40" [[d:warrior#1469090702112850144]], and its 2-piece is a genuine TPS gain [[d:warrior#1483553512662241311]]. The T3 4-piece (taunt hit) is only really needed for Four Horsemen [[d:warrior#1457085926382502033]]. T3.5 is "better enough that it will replace your t3 pieces" [[d:warrior#1469087866935316622]]. The new T3 PvP chest + gloves 2-set is argued to beat raid tank gear [[d:warrior#1481251862488420562]], [[d:warrior#1492209564056289300]].
- **Mixing sets:** swap bracers first, then helm and legs toward threat. Keep a couple of thick-stamina pieces (T3 tank boots/helm); T3 tank pants carry enough block value for a threat set [[d:warrior#1463636360014463081]], [[d:warrior#1463636814287081604]]. "Err on the side of mitigation until you know your raid can farm a boss" [[d:warrior#1446837843392466996]].
- **Trinkets:** Kiss of the Spider is favored for the opener (hastened autos give more rolls against dodge/parry streaks); never Heart of Dreams over two actives [[d:warrior#1428808306146676958]], [[d:warrior#1428883973924323399]]. For DefTac, Glyph of Deflection + Kiss beats any Mark of the Champion combo [[d:warrior#1473343368170836203]]. Diamond Flask: use it "like a second Death Wish" (**contested**) [[d:warrior#1494799313849815050]], [[d:warrior#1494799161965412565]].
- **Fortune** is multiplicative (a 5% proc with 5% Fortune becomes 5.25%) and weak [[d:warrior#1484638990551355504]].

## Enchants

| Slot | Enchant | Notes |
|---|---|---|
| Gloves | +15 Agility, or +2% threat | **Contested.** Agility gives crit, dodge and armor all fight long [[d:warrior#1444770824891404338]]; Nost's sim found the threat enchant "much better than the agi one" [[d:warrior#1453563555365261435]] |
| Head / Legs | Agility (dodge), 32 AP, or Stamina | Agility when threat is fine; Strength/AP when threat is the struggle [[d:warrior#1467574349593841856]], [[d:warrior#1467582309422076038]]; Stamina for effective health [[d:warrior#1489426217940680807]] |
| Belt | Strength buckle on Girdle of the Mentor; block-value buckle on a T3 belt | [[d:warrior#1494793501882454216]] |
| Rings | +3 all stats | "Fury prot you definitely want +3 all stats" [[d:warrior#1475199259484619065]] |
| Weapon | Crusader; keep Weapon Chain on at least one weapon for dungeons | [[d:warrior#1435226925462458389]], [[d:warrior#1479514798164152331]] |
| Cloak | Arcane resistance enchant for Kara40 | [[d:warrior#1494753588306776226]] |

## Consumables

- **Pull:** Mighty Rage Potion [[d:warrior#1475256676981542923]]. Extra pre-pull rage: pop-and-swap the ZG trinket for 30 rage (swap a static trinket, not your on-use one), or beat Unconscious Dig Rats at a mailbox [[d:warrior#1447702089789870202]], [[d:warrior#1447768313072455921]]. On-use items share a 30 s cooldown [[d:warrior#1492230795526672654]]; the class-quest chest and belt rage items can only be used about once an hour [[d:warrior#1492232213927034961]], and behave the same way as the trinket [[d:warrior#1492231959814865087]].
- **Food:** Power Mushroom on non-mitigation fights; Hardened Mushroom + Gurubashi Gumbo (they stack) on mitigation fights [[d:warrior#1463293431962140714]], [[d:warrior#1463293826687963261]].
- **Naxx resist potions:** Shadow for Four Horsemen and Loatheb; Frost for Sapphiron and Kel'Thuzad [[d:warrior#1459717421219975312]]. Greater Fire and Greater Nature Protection stack for Faerlina [[d:warrior#1459700289719505184]].
- **Kara40:** Magic Resistance Potion on Anomalus (there is no Arcane Resistance aura) [[d:warrior#1458982047979671613]]. The MT needs a Frost or Arcane Reflector for the trash before Incantagos [[d:warrior#1465828169826439208]].

## Macros and addons

- **TwThreat** reads real server threat; KTM only estimates [[d:warrior#1491114833934811187]].
- **Mouseover taunt:** `/cast [@mouseover]Taunt;Taunt` [[d:warrior#1436136743966605323]].
- Don't stack "Revenge if available else Sunder" into one macro; use separate binds [[d:warrior#1466485691566260569]].
- **Tankalyze** tracks taunts and removes Salvation clutter [[d:warrior#1482225857857847348]]. **ShaguPlates** has threat nameplates (needs SuperWoW) [[d:warrior#1459547336375144470]]. **AdvancedLogger** counts wasted Sunders per player [[d:warrior#1460773366779613376]].
- **Weapon swaps** each cost a GCD and reset the swing timer [[d:warrior#1457332538035933209]], and they misbehave in combat on the Turtle client [[d:warrior#1481726614898213019]].

## Raid notes

- **[Molten Core](../../instances/molten-core.md):**
  - Ragnaros needs about 315 buffed fire resistance. Dark Iron Helm + Leggings with FR enchants do most of the work [[d:warrior#1468912422654967889]], [[d:warrior#1468919240948973715]].
  - Taunt Golemagg's dogs for rage, then dump it on Golemagg [[d:warrior#1437512696600727633]], [[d:warrior#1437503959152721971]].
  - Only Ragnaros, Domo and (if healers struggle) Golemagg need a shield from a DPS-spec tank [[d:warrior#1433472642513502210]].
- **[Blackwing Lair](../../instances/blackwing-lair.md):**
  - BWL is "literally built around warrior tanks": Recklessness on the Vael pull, backup taunts on the drakes, Shield Wall and anti-fear on Chromaggus and Nefarian [[d:warrior#1490529592883023903]].
  - Chromaggus enrages at 20%; alternate Improved Shield Slam and Shield Block [[d:warrior#1489427165937402028]].
  - Firemaw: an FR-geared tank takes over when the main tank has to shed stacks [[d:warrior#1431619923934842920]].
- **AQ40:**
  - Twin Emperors is the one fight where the daze cap matters [[d:warrior#1425674099702890588]].
  - Tanks don't need Nature Resistance gear beyond a Barov Peasant Caller [[d:warrior#1435139665039724554]].
  - Take Thunderfury off on Twins [[d:warrior#1483878012880424980]].
- **Naxxramas:**
  - Stack mitigation mainly for Sapphiron and Patchwerk (if not the MT) and Maexxna [[d:warrior#1478719837323661353]], [[d:warrior#1454921205864726621]].
  - Hateful Strike soaking wants a 1H hit cap plus maximum stamina [[d:warrior#1441252441004703905]]. One MT tanked Patchwerk as FuryProt with only 340 Defense [[d:warrior#1459502872315302094]].
  - Maexxna's Web Spray stuns you, so you cannot avoid attacks. Put the shield on before the spray, or rotate LGG, Last Stand and Shield Wall across sprays [[d:warrior#1439292534642966558]], [[d:warrior#1439293468408156221]], [[d:warrior#1439308936716091463]].
  - Sapphiron: no FR gear on this server because his aura is bugged [[d:warrior#1449484192105631824]]; just use Greater Frost Protection potions instead [[d:warrior#1458837741109379246]].
  - Thaddius resets threat about 0.5 s after engaging [[d:warrior#1428901608225505422]].
  - Heigan can resist Taunt [[d:warrior#1487489449251049632]].
  - Don't taunt Blaumeux during her ~1 s Void Zone cast [[d:warrior#1434755616588562462]].
  - Four Horsemen: use Taunt (not Mocking Blow or Challenging Shout) to take a horseman, because only Taunt copies the threat value [[d:warrior#1379003122881658973]].
  - On low-damage bosses (Anub'Rekhan) a rage-starved deep prot can lose threat to a couple of Shield Slam parries [[d:warrior#1433041880400265321]].
- **[Lower Karazhan Halls](../../instances/lower-karazhan-halls.md) (Kara10):** tankable in pre-raid BiS. Clawlord Howlfang is a mechanics check; bring a decurser [[d:warrior#1463944367894036656]], [[d:warrior#1463944675101774018]].
- **[Tower of Karazhan](../../instances/tower-of-karazhan.md) (Kara40):**
  - Needs about 7 tanks (5 with strong crowd control) [[d:warrior#1480315423885889678]], [[d:warrior#1480316162246971463]].
  - For a first-time Kara40 tank, DefTac is recommended over FuryProt (single source) [[d:warrior#1495385249302183986]].
  - **Anomalus:** dodge/parry prevents Manabound Strikes stacks; resistance and block do not, which makes a bear a good third tank [[d:warrior#1494787179401052161]], [[d:warrior#1494788788633735331]]. AR requirements are **contested** (110 to 200+) [[d:warrior#1487169980616282112]], [[d:warrior#1487170518976172183]]. The crafted AR set plus enchants gives about 170 [[d:warrior#1469310881891352688]].
  - **Chess:** the Knight tank goes maximum mitigation or ~70% avoidance, since threat doesn't matter there. Tank it in the bottom-right corner "so every healer can reach them", and keep the PvP trinket equipped [[d:warrior#1469112387746664560]], [[d:warrior#1469371922008506523]], [[d:warrior#1474204674000293989]], [[d:warrior#1489254299082162336]].
  - **Kruul:** melee penetrates armor and avoidance, so stack stamina; taunt chains are mandatory. Shield Wall cannot solo the enrage, so 2-3 warriors trade it [[d:warrior#1458586029215846451]], [[d:warrior#1446185074600185907]], [[d:warrior#1478472975467680108]].
  - **Mephistroth:** FuryProt needs about 440 Defense to dual-wield-tank him [[d:warrior#1470040212594757734]].
  - **Incantagos:** warrior is the best tank here, since its flat threat ignores his 100%-reduction window [[d:warrior#1480289819648069712]].
- **[Emerald Sanctum](../../instances/emerald-sanctum.md):**
  - Ursol: tank him away from the "poo zones" and pop cooldowns early to push him to 30% [[d:warrior#1489298988741169345]], [[d:warrior#1489299128964878518]].
  - Hard-mode second boss: tank avoidance is effectively 0 [[d:warrior#1488546224717168660]].

## Common mistakes

- Taking Revenge talents in a DefTac build, or DefTac in a Revenge build [[d:warrior#1484903007748362241]].
- Tanking DefTac in Defensive Stance the whole fight. Battle Stance is higher threat [[d:warrior#1484538309416845352]].
- A slow weapon on a tank [[d:warrior#1465472984121868298]].
- Stacking Defense or avoidance past what the fight needs. It costs rage and threat [[d:warrior#1476092913783017605]], [[d:warrior#1454683570093428828]].
- Wasting early GCDs on Thunder Clap or Demoralizing Shout during a single-target opener [[d:warrior#1475256639379734619]].
- FuryProt with a shield, or FuryProt before your healers and gear can carry it [[d:warrior#1478473227272454178]], [[d:warrior#1463067390098018540]].
- Taunting a stunned or crowd-controlled target [[d:warrior#1430903627610062879]].
- Expecting to AoE-tank like a paladin [[d:warrior#1488666852841357532]].
