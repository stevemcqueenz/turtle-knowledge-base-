# Retribution Paladin (melee DPS)

**Recommendation:** play the **11/8/32** Retribution build and pick your seal by your gear. With spell power gear and a proc weapon, run **Seal of Righteousness ("spellret", SoR)**. With Strength gear and a slow, hard-hitting two-hander, run **Seal of Command (SoC)**. The talents differ by only a few points. "Seal of crusader is exclusively judged for the 130sp bonus. If you stack spellpower gear, you run seal of righteousness; if you stack strength, you run seal of command" [[d:paladin#1486727985540104303]]. After 1.18.1 both are real raid specs: "all 3 specs of pally are fully raid viable, ret is an actual dps spec now" [[d:paladin#1486906522863927467]]. SoR is still slightly ahead at the top: "Top 4/5 in K40 is SoR, 3rd being SoC since patch" [[d:paladin#1493184429906989217]]. **Necrodin** (double Tier 2 3-piece plus the Lost set) is a third, niche build for long single-target fights.

| | |
|---|---|
| Role | Melee DPS; Blessings, Judgement debuffs, Hand of Freedom/Protection, Cleanse, Repentance |
| Viability (1.18.1) | **B (raid)**: about 1.8k DPS on Patchwerk-type fights, best log 2.3k [[d:paladin#1487136530983293162]], [[d:paladin#1487136588252184679]]; in Kara40 on par with druids and shamans, behind the top specs [[d:paladin#1489508110749139024]], [[d:paladin#1489512682787704926]] |
| Difficulty | Medium: few buttons, but seal uptime on every swing and buff upkeep separate a good Ret from a bad one [[d:paladin#1431381602033733664]] |
| Strengths | Garbage-disposal gearing: almost any Strength, spell power, crit or hit item works [[d:paladin#1479274925867929791]]; fun and very powerful while leveling [[d:paladin#1445893651409403924]]; SoR adds real AoE through Consecration [[d:paladin#1465407836824797339]] |
| Weaknesses | Slow ramp (Zeal, Holy Might, Vengeance) that hurts on short fights [[d:paladin#1489508110749139024]]; heavy Windfury Totem dependence [[d:paladin#1445184143351877854]]; expensive consumables [[d:paladin#1445184716788732005]]; low health (about 3.2k for a near-BiS Ret) [[d:paladin#1452756099026653298]] |

## How to play

The level-60 loop to keep in your head. The details are in [Single-target rotation](#single-target-rotation), [AoE rotation](#aoe-rotation), [Mana and resources](#mana-and-resources) and [Cooldowns](#cooldowns).

1. **Before the pull:** blessings, Sanctity Aura (Retribution Aura without the talent), your seal (SoR or SoC), `/startattack`. Use a swing timer.
2. **Opener:** Exorcism at 30 yd (Undead/Demon) → Repentance at 20 yd → Judgement at 10 yd. Judge Crusader only if you are the Crusader judge, then re-seal. Holy Strike is your first strike [[d:paladin#1431384317849894992]], [[d:paladin#1483567863577968650]]. See [Opener](#opener-boss).
3. **Single-target loop:** every auto-attack must land with a seal on [[d:paladin#1428143137552994406]].
    1. Re-seal if the seal is missing and a swing is coming.
    2. Strike on the shared 6 s cooldown: **Crusader Strike** while Zeal is below 3 stacks or about to expire, **Holy Strike** when Holy Might has ≤ 6 s left, otherwise whichever hits harder on this target [[d:paladin#1483566674870534344]], [[d:paladin#1495912090865504497]].
    3. **Judgement** right after an auto lands and not just before a strike comes off cooldown, then re-seal.
    4. Exorcism on Undead and Demons. Hammer of Wrath below 20% is optional.
    5. Repentance on cooldown on bosses immune to its stun.
    6. Consecration only with spare mana.
    
    Never let a strike sit off cooldown for long [[d:paladin#1483022433265913865]].
4. **Cooldowns:** trinkets, Juju Flurry and haste potions two or three GCDs in, once Zeal and Vengeance are up [[d:paladin#1455493072661250152]].
5. **AoE switch:** at **4+ targets**, Consecration on cooldown (rank 1 when mana is short), then the single-target loop on the longest-lived mob. With 2–3 targets, add Consecration only if mana allows.
6. **Mana:** Judgement of Wisdom is the engine. When you run short, fix it in this order and stop at the step that works: teas and potions → rank-1 Consecration → Holy Strike instead of Crusader Strike → no Judgement of Righteousness → no Consecration [[d:paladin#1489847158504165416]]. On the last trash mob, a few swings with Seal of Wisdom refill you.
7. **Situational:** swap your seal only between swings. Divine Shield is for threat or death only. Hand of Freedom or Protection goes on raid members when it does not cost a strike.

## What changed for Retribution in 1.18.1

1.18.1 went live on 2026-03-20. The class notes were announced on 2026-01-23 ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) and quoted in-channel [[d:paladin#1465008595815891047]].

| Change | Effect in play |
|---|---|
| **Seal of Command 7 → 9 procs per minute** ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:paladin#1464406668065636494]]) | About 50-57% proc chance per swing on a 3.8-speed weapon [[d:paladin#1464473044432191733]], [[d:paladin#1489585274165006507]]. Together with Libram of Ardour, SoC is "so back" [[d:paladin#1485468559441137884]] |
| **Crusader Strike rank 5: 90% → 100% weapon damage** ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Developer comment: attack-power Ret "underperforming for several patches" |
| **Holy Strike reworked**: now X% weapon damage plus Holy damage (rank 8: 40% weapon damage + 129-146), spell power scaling 43% → 71% ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Unbuffed damage is about the same; everything from Strength, attack power and weapon damage is new bonus [[d:paladin#1471496079882190962]]. Holy Strike now beats an un-Sundered Crusader Strike, so it opens fights [[d:paladin#1482251821417365697]], [[d:paladin#1483567863577968650]] |
| **Repentance** on immune targets now ticks for 8% of attack power ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Small AP-build buff |
| **Consecration** base damage +8% and front-loaded: ticks go 156% → 44% of the old per-tick value ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Better on trash that dies fast |
| **Tier 2.5 3-piece (Ret/Prot)** now +15% Judgement of Righteousness/Command damage; **Tier 3.5 5-piece (Ret)** Crusade is 4% attack speed for 20 s and no longer stacks ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | The old +6% Crusader Strike bonus is gone, which is why Crusader Strike itself was buffed [[d:paladin#1464352546469576887]] |
| **Swapping librams in combat costs a GCD** ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | No more libram twisting; equip one libram for the fight [[d:paladin#1475911623125368875]] |
| **Libram of Final Judgement** now scales with 8% of spell power ([Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)) | |
| **New Libram of Ardour** (+1 SoC proc per minute) [[d:paladin#1488558737147957258]], [[d:paladin#1490136296369164309]] | The item that made SoC competitive with SoR [[d:paladin#1486723603952046090]] |
| **New stat: Fortune** (necks, cloaks, trinkets) [[d:paladin#1473599626522136707]] | Weak; see [Fortune](#fortune-the-new-proc-stat) |

Things that did **not** change: strikes still do not trigger seals [[d:paladin#1432111266134097940]], Crusader Strike and Holy Strike still share a cooldown, and the Tier 2 3-piece spellstrike was kept: "i really dont want to [change it], it enables so much stuff" (Lhian) [[d:paladin#1486109344486653954]].

**Beware the April Fools post.** On 2026-04-01 Lhian posted a "next patch" announcement (spellstrikes stop proccing, Holy Strike becomes a Heroic Strike clone, Crusader Strike loses its cooldown). It was a joke [[d:paladin#1488852869212798987]], [[d:paladin#1488856415010291794]]. Two other widely shared "leaks" were also fake: a Chinese fan-made talent tree [[d:paladin#1445618286166544415]] and a bumped old changelog thread [[d:paladin#1458287685750882425]], [[d:paladin#1458287837496606842]].

## Which Ret? SoR vs SoC vs Necrodin

There is no separate "pure spell" Ret any more: "all rets are some shade of hybrid now" [[d:paladin#1459273623494721727]], and "hybrid SoR" and "spellret" mean the same thing [[d:paladin#1484130623416438886]]. Both main builds share about 11 gear pieces (the tier sets) and differ in accessories, weapon and enchants [[d:paladin#1470538287960821965]], [[d:paladin#1451710819862577194]].

| | **SoR "spellret"** | **SoC "AP Ret"** | **Necrodin** |
|---|---|---|---|
| Seal | Seal of Righteousness | Seal of Command | Seal of Righteousness |
| Scales with | Spell power, haste (more swings = more SoR hits) | Strength, crit, weapon damage | Attacks per second; "all the spell power is placebo" [[d:paladin#1459996172151296274]] |
| Weapon | Proc weapon (Untamed Blade, Corrupted Ashbringer) | Slow two-hander with big weapon damage; "SoC likes heavy hitters with big weapon damage, not dps" [[d:paladin#1488647303521763498]] | Fast weapon with a strong proc (see [Gear](#necrodin-gear)) |
| Pros | Higher and steadier DPS, real AoE through Consecration, better mana [[d:paladin#1452020679821099078]], [[d:paladin#1465407836824797339]] | Simple, easy gearing, burst; strong from the first second [[d:paladin#1488578018640134224]] | Strong on long stationary bosses [[d:paladin#1470324329031143476]] |
| Cons | Counter-intuitive itemization, few weapons [[d:paladin#1452020679821099078]] | Swingy on short fights: "feast or famine" [[d:paladin#1486548663042838548]]; little AoE; needs Windfury | Needs every slot including both trinkets [[d:paladin#1485748395241898215]]; "the weakest build between all ret builds" and needs to charge up [[d:paladin#1488578018640134224]]; weak on trash [[d:paladin#1472800680434598134]] |
| Standing after 1.18.1 | Still on top of Kara40 logs [[d:paladin#1493184429906989217]] | "Better than last patch but is beaten by SoR still" [[d:paladin#1492067525352099920]]; on a dummy with Libram of Ardour, ~30 DPS **ahead** of SoR in the same gear [[d:paladin#1486723603952046090]] | "The best thing that happened to ret in a while" [[d:paladin#1485126252288409610]] |

**Contested: is SoC now equal to SoR?** A controlled dummy test (same pre-Kara40 BiS spell gear, only seal and libram changed) put SoC about 30 DPS ahead [[d:paladin#1486723603952046090]], and a top SoR Ret switched to SoC [[d:paladin#1486547634943557735]]. Others want proof in raid logs: "until i see a SoC ret beating lonsell i'll just assume SoR is still better" [[d:paladin#1488609452222316585]]. In Nordanaar Kara40 logs a SoC Ret sat 3 DPS behind a SoR Ret [[d:paladin#1490461574010372107]]. The practical answer: "play what you want ... the difference between them is prolly like 100 dps more or less" [[d:paladin#1488506685990506506]].

**How to choose:**

1. **Fresh 60 or leveling:** SoC. SP cannot be stacked high enough early for SoR to pull ahead [[d:paladin#1448260053181136937]]; with an Untamed Blade and only ~139 spell power "you should be using seal of command" [[d:paladin#1468466625534755112]].
2. **Tier 2.5 5-piece and a proc weapon:** SoR generally overtakes SoC once you have the T2.5 set [[d:paladin#1468467181770510450]].
3. **No Windfury Totem (Tel'Abim, or no Alliance-side shaman):** SoR. "SoR still kinda works on TA without WF, SoC doesn't" [[d:paladin#1431945536927436872]]; "On TA, spelladin wins because SoC really suffers from not having WF" [[d:paladin#1464116936093859983]].
4. **You own both Tier 2 3-pieces (Ret and Prot) and the Lost set:** Necrodin for long bosses, a normal set for trash [[d:paladin#1472800680434598134]].

## Talent builds

### Seal of Righteousness "spellret", 11/8/32 (recommended)

Mithreon's current SoR build, reposted after 1.18.1 [[d:paladin#1491936698689388746]] and pinned in the same form before it [[d:paladin#1440085972103594096]]. "11/8/32 should be the standard on MC/BWL gear regardless of spec" (Beldrin) [[d:paladin#1458178443630874675]].

| Tree | Talent | Points |
|---|---|---|
| Holy | Divine Strength | 5/5 |
| Holy | Improved Seal of Righteousness | 5/5 |
| Holy | Sanctity Aura | 1/1 |
| Protection | Improved Devotion Aura | 5/5 |
| Protection | Precision | 3/3 |
| Retribution | Benediction | 5/5 |
| Retribution | Improved Judgement | 2/2 |
| Retribution | Improved Seal of the Crusader | 3/3 |
| Retribution | Conviction | 5/5 |
| Retribution | Blessing of Kings | 1/1 |
| Retribution | Pursuit of Justice | 2/2 |
| Retribution | Two-Handed Weapon Specialization | 3/3 |
| Retribution | Vengeance | 5/5 |
| Retribution | Vengeful Strikes | 5/5 |
| Retribution | Repentance | 1/1 |

Split **11/8/32**, validated (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=5000501-503-0523005123005051) · code `FAAoB-FAY-AoTAFKYAFAFAB`

### Seal of Command "AP Ret", 11/8/32

The same tree with **Divine Intellect** instead of Improved Seal of Righteousness, **Seal of Command** 1/1, and Pursuit of Justice 1/2 [[d:paladin#1491936698689388746]]. "Talent build for SoC is the same as SoR build but remove points from Improved SoR" [[d:paladin#1428245774298513408]].

| Tree | Talent | Points |
|---|---|---|
| Holy | Divine Strength | 5/5 |
| Holy | Divine Intellect | 5/5 |
| Holy | Sanctity Aura | 1/1 |
| Protection | Improved Devotion Aura | 5/5 |
| Protection | Precision | 3/3 |
| Retribution | Benediction | 5/5 |
| Retribution | Improved Judgement | 2/2 |
| Retribution | Improved Seal of the Crusader | 3/3 |
| Retribution | Conviction | 5/5 |
| Retribution | Blessing of Kings | 1/1 |
| Retribution | Pursuit of Justice | 1/2 |
| Retribution | Two-Handed Weapon Specialization | 3/3 |
| Retribution | Vengeance | 5/5 |
| Retribution | Seal of Command | 1/1 |
| Retribution | Vengeful Strikes | 5/5 |
| Retribution | Repentance | 1/1 |

Split **11/8/32**, validated (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=5500001-503-0523005113005151) · code `FoAAB-FAY-AoTAFJYAFIFAB`

### Why these points, and what you may change

- **Sanctity Aura (Holy, 11-point sink)** is in every Ret build: +10% Holy damage for you and your group [[d:paladin#1426699161788485723]], [[d:paladin#1435211386056872049]]. If another paladin in your group already brings it, you may skip it [[d:paladin#1440297381882105918]].
- **Improved Devotion Aura is only a path to Precision.** Row 1 of Protection needs 5 points first. Redoubt works just as well; "Does not really matter. you dont use ether" [[d:paladin#1494304371553599634]], [[d:paladin#1494306809194872862]], [[d:paladin#1485415655368032338]].
- **Precision (3% hit)** is a crutch for the hit cap. SoC builds cannot drop it until Tier 3 gear; SoR builds move those points into Improved Seal of Righteousness once gear covers hit (Tier 3.5 alone gives 3%) [[d:paladin#1458178660438773955]], [[d:paladin#1458178883974074631]], [[d:paladin#1458179204163309638]]. If you cannot reach the hit cap even with Precision, Lightbourne's advice is to drop the Protection tree entirely [[d:paladin#1485478074979188846]].
- **Improved Blessings: never on SoR, only on SoC with enough gear hit.** "Ret should never take Improved Blessings (leave that to healers) unless running SoC with enough hit already on gear" [[d:paladin#1458179706682736732]], [[d:paladin#1458179822873215130]]. Jesse Potter's 13/0/38 SoC build takes 5/5 Improved Blessings and 2/2 Unyielding Faith instead of the Protection points [[d:paladin#1455494544207380624]], [[d:paladin#1455494659508932730]].
- **Benediction** is weak in raids ("like 5 wasted talents") but it is a prerequisite path and helps while duoing or leveling [[d:paladin#1449707000861687959]], [[d:paladin#1449708516829823128]].
- **Improved Seal of the Crusader** only matters if you are the paladin who judges Crusader; the talent improves the debuff only when you apply it [[d:paladin#1452605420173787146]]. It is for "seal duty"; skip it if someone else reliably judges Crusader [[d:paladin#1494438590489428079]], [[d:paladin#1494259433918828585]].
- **Vindication is a trap:** it does not work on bosses [[d:paladin#1431510211994058812]], [[d:paladin#1491893767031226488]]. Prefer Pursuit of Justice or Parry [[d:paladin#1459045429772554372]].
- **Improved Retribution Aura** is great while leveling and useless in a raid DPS spot [[d:paladin#1470135414701428939]]. If a Protection paladin runs with you, ask them to take it: "Basically every sor ret that runs with a prot paladin should have imp ret aura" [[d:paladin#1486681067686461552]].
- **Two-Handed Weapon Specialization** does not boost polearms by design (Lhian) [[d:paladin#1449962207952638175]].
- **Necrodin** uses the same 11/8/32 split: "typical 11/8/32 split, didn't bother resetting talents from my standard ret setup" [[d:paladin#1482388807482605599]], [[d:paladin#1491160087232778311]].
- **AoE farming** uses 0/26/25 (Reckoning and Holy Shield in Protection, Improved Retribution Aura and Vengeance in Retribution) [[d:paladin#1491414001979228363]]; see [Leveling](leveling.md#gold-farming-and-aoe).

## Stat priority and caps

| Build | Priority |
|---|---|
| **SoR** | Hit to 8% > spell power > haste ≈ Strength > crit to about 30% buffed. SP enchants beat 1% haste enchants on helm, legs and gloves, unless you carry Nightfall [[d:paladin#1492380383113777264]]; "spell power > attack speed > physical stats, but don't stack pure SP" [[d:paladin#1459081396164235478]]. You "dont really care about spell hit or crit" [[d:paladin#1484407246979989635]] |
| **SoC** | Hit to 8% > crit to ~33% unbuffed > haste > Strength > spell power > attack power > Agility (Mithreon) [[d:paladin#1487011772266184774]]. Beldrin's short form: "8% hit > crit = ap > haste" [[d:paladin#1487251547690631323]]. "If not 30% crit unbuffed go agi. Else str everywhere" [[d:paladin#1490760393474179112]] |
| **Necrodin** | Attack speed and proc count; spell power matters little [[d:paladin#1459996172151296274]] |

**Caps and numbers:**

- **Melee hit cap: 8%** against raid bosses, for one- and two-handers alike [[d:paladin#1436561953936904222]]. Missing an auto also loses that swing's seal [[d:paladin#1426586815544168458]].
- **Weapon skill:** every point above 300 is 0.2% hit and reduces glancing damage, up to 315 [[d:paladin#1455656068913958912]]; "5 weapon skill = 1% hit" [[d:paladin#1488982232482840768]]. 310 is plenty for SoR; 315 is good for SoC; above 315 is wasted [[d:paladin#1488219693293633586]]. The +5 weapon-skill book is a 250g quest on Fray Island, per weapon type [[d:paladin#1455627892825391345]], [[d:paladin#1481676735404572833]].
- **Glancing blows** stay at ~40% of your autos; weapon skill only reduces their penalty (95% damage at 315) [[d:paladin#1468298257485529184]].
- **SoC crit targets:** 33% unbuffed, or ~51% if your raid has Rogue and feral Druid crit buffs; values in between are the weak spot [[d:paladin#1463424900730720481]], [[d:paladin#1491996354736685057]]. **Contested:** whether these "breakpoints" matter over a whole raid rather than one short fight [[d:paladin#1468068189547139164]], [[d:paladin#1468074643964432495]].
- **SoR crit:** 20-30% fully buffed is enough; above that, 25 Strength beats more crit [[d:paladin#1430031868757147749]], [[d:paladin#1445986573526110218]].
- **Haste** stacks multiplicatively across sources [[d:paladin#1469423761663987895]] and scales SoC damage almost 1:1 because SoC procs off autos [[d:paladin#1459215039964778649]]. A haste point only counts if it adds a whole swing over the fight [[d:paladin#1482266634373824594]].
- **Strength** is multiplied by Kings, Divine Strength and Holy Might [[d:paladin#1436321352041627648]]; 300 Strength is roughly 1200 attack power for Ret [[d:paladin#1493595800100671668]].
- **Spell hit, spell crit and spell penetration** barely matter. Everything except Exorcism, Holy Wrath and Consecration uses the melee hit table [[d:paladin#1469407077146300591]]; spell crit only affects Ashbringer's proc, Exorcism and Holy Wrath [[d:paladin#1482263530567635096]]; nothing resists Holy [[d:paladin#1432754074058756218]].

## How the Ret kit works on Turtle

These mechanics decide every gear and rotation choice.

- **Seals proc only from auto-attacks.** Crusader Strike, Holy Strike and Judgement do not trigger Seal of Righteousness or Seal of Command [[d:paladin#1432111266134097940]], [[d:paladin#1428548817380180090]].
- **Seal of Righteousness counts as a second melee hit.** Every on-hit effect (weapon procs, spellstrike items, Judgement of Wisdom, Windfury) gets a second roll per swing [[d:paladin#1445474473422749728]], [[d:paladin#1436080975141408818]]. SoR procs on extra attacks too; SoC does not [[d:paladin#1468487677170159617]]. SoR does nothing if the auto misses [[d:paladin#1463077254266355829]].
- **SoR damage scales with weapon speed:** 0.092 × speed × SP per hit with a one-hander, 0.125 × speed × SP with a two-hander; Judgement of Righteousness has a 0.71 SP coefficient [[d:paladin#1458520925292073124]], [[d:paladin#1468296561082499196]].
- **Seal of Command** is a flat 9 procs per minute, calculated from base weapon speed (haste adds swings, not chance per swing) [[d:paladin#1482537964130013314]], [[d:paladin#1434390991317500028]]. It can be dodged and it can miss [[d:paladin#1469563712145723458]]. Judgement of Command has a 0.43 SP coefficient plus 15% of attack power; SoC's own SP coefficient is about 20-24% [[d:paladin#1463417849065508875]], [[d:paladin#1446645457123151987]].
- **Judgements are melee attacks**: melee hit and crit, not reflectable, can proc Hand of Justice [[d:paladin#1433868913984143391]], [[d:paladin#1440955522965573716]]. Judgement is off the global cooldown; re-sealing is not [[d:paladin#1431384631768518818]].
- **Windfury Totem** procs off any melee hit, including SoR, SoC, strikes and Judgement, about 20% of the time with a ~1.5 s internal cooldown [[d:paladin#1469785873049583668]]. A Judgement can eat a Windfury proc without a seal on it [[d:paladin#1458463230132486338]].
- **"Spellstrike"** means "Equip: Adds X damage to your melee attacks" items. Each copy procs independently [[d:paladin#1433521371945893949]]. Spellstrikes trigger Judgement of Wisdom mana, Vengeance and Wrath of Cenarius, not Seal of Command or other weapon procs [[d:paladin#1469407919685767399]], [[d:paladin#1434215105754566787]]. Their job is Judgement of Wisdom mana regen and Wrath of Cenarius spell power uptime, not raw weapon damage [[d:paladin#1460666085207576768]].
- **Tier 2 3-piece is the exception.** Its Holy "spellstrike" counts as both casting and damaging with a spell [[d:paladin#1460924106487759004]], so it can proc on-cast items (Sigil of Ancient Accord, the Sunken Temple chest, Insomnius) that ordinary spellstrikes cannot [[d:paladin#1456009237892169800]]. "The set bonuses strength isnt its dmg but the fact it can interact with and proc numerous other effects" [[d:paladin#1486524218253377767]]. With both the Ret and Prot Tier 2 3-pieces and SoR up you get 4 spellstrike rolls per swing [[d:paladin#1490218179593764997]], [[d:paladin#1465241031581634581]]. This is the Necrodin engine.
- **Sanctity Aura and Judgement of the Crusader** only boost Holy damage; Crusader Strike is physical and gets nothing from them [[d:paladin#1475164546237988984]], [[d:paladin#1475164635001917542]].
- **Zeal** (from Crusader Strike) is three separate 5% haste stacks for 30 s [[d:paladin#1436340559315734589]]; **Holy Might** (from Holy Strike) is +20% Strength [[d:paladin#1436321352041627648]]; **Vengeance** stacks from any crit, melee or spell [[d:paladin#1462451166993453119]].

### Windfury Totem dependence

Ret's damage leans on a shaman's Windfury Totem more than any other class does. SoR procs Windfury, and each Windfury attack procs SoR again, in a loop broken only by the totem's internal cooldown; that raises the effective Windfury chance from ~25% to 40% or more and drives every other on-hit proc up with it [[d:paladin#1426854001051435189]]. "Ret suffers when you don't have WF, but so does everybody else" [[d:paladin#1445184143351877854]]. Consequences:

- **Tel'Abim** (no cross-faction Windfury) is the worst realm for Ret; AP Ret "is disabled on TA" [[d:paladin#1464971997896511571]], and SoR is the only build that still works there [[d:paladin#1431945536927436872]].
- **Group placement:** a Ret wants the Windfury (melee) group. A Holy paladin in that group takes a slot meant for a DPS buffer such as a shaman, so Holy usually sits elsewhere [[d:paladin#1453858574978650248]].
- Wait ~2 s after a Windfury proc before your next strike or Judgement so the next proc lands on an auto [[d:paladin#1483022433265913865]].

### Fortune (the new proc stat)

Fortune ("Increases your chance to trigger chance-based item effects by X%") appears only on necks, cloaks and trinkets, and multiplies the base chance (5% Fortune turns a 20% proc into 21%) [[d:paladin#1473599626522136707]], [[d:paladin#1489243794325901342]]. It raises item procs (Thunderfury, Flurry Axe, Ironfoe, Pysan's sword) but not the trigger rate of set bonuses such as Tier 1 8-piece or Tier 2 3-piece [[d:paladin#1489221331936612474]], [[d:paladin#1490072654059667497]], and not weapon enchants, oils or Windfury [[d:paladin#1474297738043592715]]. **Contested:** whether it boosts the Lost set's ghost procs [[d:paladin#1490078096198729851]], [[d:paladin#1490224351025299568]]; a dev called the set-bonus behaviour a bug to be fixed carefully [[d:paladin#1488108402520359013]]. Verdict: a weak stat; 5% Fortune moves Hand of Justice from ~2% to ~2.1% [[d:paladin#1483896631094022194]], [[d:paladin#1483896373240926438]]. Take it only when the item is good anyway.

## Single-target rotation

### The one rule

**Every auto-attack must land with a seal active.** Judge right after an auto lands, then re-seal before the next one; if a Judgement would leave the next swing seal-less, delay it [[d:paladin#1428143137552994406]], [[d:paladin#1471558463229526216]]. A log review found one raider with no Seal of Righteousness on half of his swings [[d:paladin#1431381602033733664]]. A swing timer addon is close to mandatory: "playing ret properly without a swing timer is borderline insanity" [[d:paladin#1485694688919818341]].

### Opener (boss)

1. Pre-pull: Blessings, **Sanctity Aura** (Retribution Aura until you have it [[d:paladin#1485640207486419077]]), your seal, `/startattack`.
2. While running in: Exorcism at 30 yards (Undead/Demon), **Repentance** at 20 yards, Judgement at 10 yards [[d:paladin#1431384317849894992]].
3. **Judge Seal of the Crusader** (only if you are the Crusader judge), re-seal SoR or SoC. Do not judge Crusader on trash that dies in two GCDs [[d:paladin#1484613138564387026]], [[d:paladin#1484613629444624405]].
4. **Holy Strike first**: Holy damage ignores the armor that Sunder Armor has not yet removed, and its Holy Might Strength buff makes the next Holy Strike stronger [[d:paladin#1483567863577968650]], [[d:paladin#1482252114809061530]].
5. Crusader Strike to stack Zeal; pop trinkets, Juju and haste potions a few GCDs in, once Vengeance, Zeal and armor debuffs are up [[d:paladin#1455493072661250152]].

### Priority (SoR; bot-ready)

Adapted from the community APL [[d:paladin#1483566674870534344]] and the coaching rules of Beldrin and Grey [[d:paladin#1485694401534496800]], [[d:paladin#1485694441124659462]], [[d:paladin#1483022433265913865]]:

1. **Seal of Righteousness** if it is missing and an auto will land within the GCD.
2. **Holy Strike** if Zeal is at 3 stacks and Holy Might has ≤ 6 s left (or is missing).
3. **Crusader Strike** if Zeal has < 3 stacks or expires within 4 s.
4. **Judgement** (Righteousness, or your assigned Judgement) only if (a) an auto just landed, so the seal is back before the next one, and (b) Crusader/Holy Strike is not about to come off cooldown. Re-seal immediately.
5. **Exorcism** on Undead and Demons.
6. **Hammer of Wrath** below 20% health, if it will not delay a strike. Many top players skip it; it is low damage for its mana [[d:paladin#1441422778774454365]].
7. **Crusader Strike or Holy Strike**, whichever hits harder on this target (see below), to keep both buffs rolling.
8. **Repentance** on cooldown on bosses that are immune to its stun; "free damage is free damage" [[d:paladin#1438268353134465074]]. It resets your swing timer, which swing addons do not show [[d:paladin#1485700339473715260]].
9. **Consecration** only with spare mana: on 2+ targets, or on a single target in high-tier gear [[d:paladin#1492066318159970314]], [[d:paladin#1443969857745063956]].

Never let a strike sit off cooldown for long: "Extending your 6sec CD into a 9sec CD is rarely worth it" [[d:paladin#1483022433265913865]].

**Crusader Strike or Holy Strike? (contested after 1.18.1).** The damage of each strike matters less than the buffs: "once you have max zeal and holy might, you just keep both buffs up" [[d:paladin#1494198526383751270]]. On top of that:

- Against a fully Sundered raid boss, Crusader Strike usually hits harder: "Even with demonbane, CS>HS, unless noone sunders" [[d:paladin#1485777254620467230]].
- Some spellrets find Holy Strike stronger after the patch: "for Spell Ret HS is out damaging CS against raid bosses now" [[d:paladin#1486002061677039879]], and some top SoR players drop Crusader Strike entirely [[d:paladin#1494189514070163477]]. Istenneveben's summary: keep both buffs, then "spam whichever ability hits harder", which depends on armor, your spell power and weapon damage [[d:paladin#1495912090865504497]], [[d:paladin#1495906695132483664]].
- On trash, Holy Strike first (no Sunders yet); skip Holy Might entirely on packs that die before it pays off [[d:paladin#1483022982992363601]].
- Nazeth's tie-breaker: with **SoC** keep Holy Might ahead of Zeal (weapon-damage scaling); with **SoR** keep Zeal ahead of Holy Might (haste = more SoR hits) [[d:paladin#1482302289338433606]].

A one-button macro picks the strike for you (it fails if you are at the buff cap and Holy Might is hidden) [[d:paladin#1485697744135000244]], [[d:paladin#1485697973294731374]]:

```
#showtooltip
/cast [nomybuff:"Holy Might"] Holy Strike
/cast [mybuff:"Holy Might"] Crusader Strike
```

### SoC differences

- Same priority with Seal of Command and Judgement of Command. Judge right after an auto so the next swing still gets its SoC roll [[d:paladin#1480913696963166301]].
- Jesse Potter's SoC boss opener (pre-1.18.1): Repentance → Seal of the Crusader → Judge Crusader → Seal of Command → Crusader Strike → Consecration → Crusader Strike → Perception, Juju and trinket → Holy Strike, then Judgement, Consecration and Exorcism on cooldown, Crusader Strike on cooldown with a Holy Strike every third strike [[d:paladin#1455491776248025123]].
- SoC Ret is mana-tight on long fights and trash; on trash only, a few swings with Seal of Wisdom refill mana [[d:paladin#1449761431237955654]].

### Necrodin differences

- Crusader Strike until 3 Zeal, then spam Holy Strike, refresh Zeal as needed: "CS until 3 zeal stacks > spam HS > refresh zeal" [[d:paladin#1471135299928199250]]; for one-handed Necrodin "HS is stronger" [[d:paladin#1482395480133468251]].
- Swap to your normal SoR/SoC set on trash; Necrodin is weak on trash, and its summons break crowd control [[d:paladin#1472800680434598134]], [[d:paladin#1485748395241898215]].

## AoE rotation

Consecration is the Ret's only AoE, it scales only with spell power, and that is why SoR wins on multi-target fights [[d:paladin#1428535994558185594]], [[d:paladin#1442129859186000034]].

| Targets | Play |
|---|---|
| 1 | Single-target priority; no Consecration unless you have excess mana |
| 2-3 | Single-target priority on the Judgement of Wisdom target; add Consecration if mana allows [[d:paladin#1462893175369764917]] |
| 4+ | Consecration on cooldown (downrank to rank 1 when mana is short [[d:paladin#1489847158504165416]]), then the single-target loop on the target that lives longest |

- Stay on the target you judged with Wisdom; switching targets costs mana [[d:paladin#1485702321647124602]].
- Zeal falls off between packs; keep pulls fast and use Crusader Strike on fresh adds (a warlock pet is fine) to keep the stacks [[d:paladin#1446134870332936234]].
- Goblin Sapper Charges add a flat 500-600 damage on AoE pulls [[d:paladin#1428687306520395776]].
- Holy Wrath is only worth pressing against Undead packs such as Nefarian's skeletons [[d:paladin#1483203053690814634]], [[d:paladin#1483203140277768292]].

## Mana and resources

- **Judgement of Wisdom** is the mana engine. SoR builds need 1-2 spellstrike items with a one-hander, 2-3 with a two-hander, when no Windfury/Flametongue Totem is present; the Fiery and Lifestealing enchants count as spellstrikes [[d:paladin#1489845996233031700]]. Example: Ring of Electrical Binding + JoW + SoR = 4 chances at +59 mana per swing [[d:paladin#1491928884722274324]].
- If another paladin keeps Judgement of Wisdom up, you can judge Crusader or Righteousness instead [[d:paladin#1485694548406440087]], [[d:paladin#1492067023998554164]].
- **When you run out of mana** (Grey's order, stop at the step that fixes it): 1) more teas and mana potions, 2) Consecration rank 1, 3) Holy Strike instead of Crusader Strike as filler, 4) stop casting Judgement of Righteousness, 5) stop casting Consecration. "Going past step 3 means something is up" [[d:paladin#1489847158504165416]].
- On the last 1-2 mobs of a trash pack, swap to Seal of Wisdom for a swing or two [[d:paladin#1485702321647124602]].
- **Buff cap:** Zeal and Vengeance take several buff slots; at the cap, extra buffs still work but go invisible, which breaks buff-checking macros [[d:paladin#1468351368078037247]], [[d:paladin#1469534733242339359]]. Cancel low-value buffs (Blessing of Light, Blessing of Sanctuary, Thorns, Healing Way, Inspiration) with an auto-cancel addon [[d:paladin#1469539640288608298]].

## Cooldowns

| Cooldown | Use |
|---|---|
| Trinkets, Juju Flurry, Potion of Quickness | Two or three GCDs into the fight, lined up with Zeal and Vengeance [[d:paladin#1455493072661250152]]; haste consumables are especially good for SoR [[d:paladin#1484608557075660910]] |
| Perception (Human) | With the other cooldowns [[d:paladin#1455491776248025123]] |
| Repentance | On cooldown (60 s) on immune bosses; CC on non-immune targets |
| Divine Shield | Threat or death prevention only; it also halves healing done and taken [[d:paladin#1467173434726547698]] |
| Hand of Protection / Freedom | On raid members who need it, when it does not cost a strike |

## Gear

Both main builds wear the same tier pieces and differ in weapon, rings, trinkets, neck and enchants: SoR takes caster off-pieces, SoC takes warrior off-pieces [[d:paladin#1470538287960821965]], [[d:paladin#1456527061962199165]]. Ret's pre-raid gear is scattered across many sources [[d:paladin#1456682370949447688]].

### Weapons

| Stage | SoR (spellret) | SoC (AP) |
|---|---|---|
| Starter / pre-raid | **Demonsbane** (Argent Dawn exalted) [[d:paladin#1491996140655087726]], [[d:paladin#1494007306545791147]]; **Tempered Runeblade** (Blacksmithing craft) or Shadowstrike [[d:paladin#1459138798926565451]] | **Demonsbane** [[d:paladin#1424506843811807324]]; the Argent Dawn two-hander if you skip Blacksmithing [[d:paladin#1491464591585185942]]; Obsidian Edged Blade (weapon skill) [[d:paladin#1427586215435309056]] |
| BWL | **Untamed Blade (UTB)**, "the clear winner for SoR" [[d:paladin#1489550904184143953]]; its Strength proc is "the best buff in the game" [[d:paladin#1468240255244304406]] | **UTB** [[d:paladin#1427586215435309056]], [[d:paladin#1489620966634950767]] |
| Timbermaw Hold (TMH20) | **Pysan's New Greatsword**, from the hydra boss [[d:paladin#1489516749022953614]]: 3.5 speed; chance on hit deals 350-400 Holy damage and triggers your seal (more and a stun vs Undead/Demons) [[d:paladin#1483466984091025579]]. No spell power scaling, but Sanctity and Vengeance apply and both hits can crit [[d:paladin#1487320931046133781]]. Roughly on par with UTB [[d:paladin#1489048422626365582]]; on Nordanaar it "lasts until MoM" [[d:paladin#1494007446107193404]] | Same sword; for parses on fights under ~45 s it can beat Shar'tateth through lucky procs [[d:paladin#1494853658720866395]] |
| Naxx / Kara40 | **Corrupted Ashbringer** (its Drain Life proc scales 1:1 with spell power) [[d:paladin#1456492817076584643]]; "UTB = MoM for SoR, but CA beats them" [[d:paladin#1466910887225852207]] | **Might of Menethil** or **Shar'tateth**; Corrupted Ashbringer is close but not BiS [[d:paladin#1464120221412626466]]. Its edge over MoM is mostly its +1% hit [[d:paladin#1469489336985587897]] |

Older SoR ranking (pre-1.18.1, Mithreon): Jeklik's/Fist < Demonbane < Scythe < Shadowstrike < Neretzek < Tempered Runeblade < Hand of Ragnaros < UTB < Corrupted Ashbringer [[d:paladin#1437049959294828740]]. Scythe of the Harvest was cut from 3 to 2 PPM (Ashbringer: 1.6) [[d:paladin#1489851836478525510]], [[d:paladin#1492996758752592104]]. Hand of Ragnaros does nothing to fire-immune bosses (Ragnaros, Nefarian, Onyxia, the drakes) [[d:paladin#1427586416363307130]]. Elementium Champion (drop plus Swordsmithing) looks weaker than UTB and Pysan's for similar effort (single source) [[d:paladin#1489792168817066136]]. SoC wants big raw weapon damage, not weapon DPS [[d:paladin#1488647303521763498]].

### Armor by phase

**SoR (spellret)**

| Phase | Core |
|---|---|
| Pre-raid | Tempered Runeblade, Helm of the Executioner, Soulforge (Tier 0.5) set, Fabric of Time, Briarwood Reed, Argent Dawn neck (Istenneveben) [[d:paladin#1428853591225012235]]. **Soulforge 4-piece** (a 95 spell power proc) is near-mandatory until BWL [[d:paladin#1441901013807272118]] |
| MC | 4-piece Soulforge, 3-piece Tier 1, Choker of the Fire Lord, two spell power rings, Talisman of Ephemeral Power + another SP trinket [[d:paladin#1447174361944686734]] |
| BWL | UTB, 4-piece Tier 0.5, **3-piece Tier 2**, 3% hit (4% for High Elf and Dwarf), Sigil of Ancient Accord [[d:paladin#1489550354915000371]] |
| AQ40 / Naxx | **Tier 2.5 5-piece** + Tier 2 3-piece + Sigil, then Corrupted Ashbringer [[d:paladin#1487403761277206558]], [[d:paladin#1464113164659589288]] |
| Kara40 | **Tier 3.5 5-piece** with Tier 2 helm, belt and gloves, Bindings of Contained Magic, Sigil of Ancient Accord and Wrath of Cenarius [[d:paladin#1469230019279589396]] |

Jesse Potter's post-patch summary of the three SoR setups: "basic" (Tier 2.5 + Tier 2 3-piece until Tier 3.5, Anomalus bracers, Turalyon's Hope), "The Lost" (two Tier 2 3-pieces) and "AoE proc" (two Tier 2 3-pieces) [[d:paladin#1492068761250041876]]. The slots that the double-3-piece setups keep free usually hold the Sunken Temple chest or Insomnius, and the Kara40 belt or BWL goggles [[d:paladin#1492152660571328622]].

**SoC (AP Ret)**

| Phase | Core |
|---|---|
| Pre-raid / MC | Tier 1 helm, boots and gloves (3-piece: Judgement damage + 3% hit), Soulforge chest, shoulders, bracers and belt (4-piece), Tier 2 legs; Hand of Justice + Blackhand's Breadth; Onyxia pendant; Libram of Fervor [[d:paladin#1427280937619820596]], [[d:paladin#1427281127017545849]] |
| Kara40 top end | Tier 3.5 5-piece + Tier 3 4-piece, Shar'tateth, Slayer's Crest, Kiss of the Spider, Wardens of Time cloak, Band of Unspoken Fealty, Turalyon's belt; next upgrades Worldbreaker Girdle and Libram of Ardour (Jesse Potter) [[d:paladin#1491247031371698347]] |

SoC gearing in one line: "Pick a slow wep, get hit capped, get 30% crit unbuffed, stack as much str as possible" [[d:paladin#1491995450771771392]]. Trinkets: Slayer's Crest and Kiss of the Spider, swapped only for specific fights [[d:paladin#1494945956561424424]], [[d:paladin#1494949836972232764]].

### Necrodin gear

Necrodin wears **three Ret Tier 2 pieces + three Protection Tier 2 pieces**, **three pieces of the Lost set** (neck, ring and off-hand book, from Karazhan Crypt and UBRS) and a fast weapon [[d:paladin#1458887772537491599]], [[d:paladin#1488414541313212446]]. The Lost 3-piece reads "4% chance when your harmful spells land to reawaken the Lost for 20 sec"; both Tier 2 3-pieces trigger it [[d:paladin#1473599314499731466]]. Add the Sunken Temple chest (Embrace of the Wind Serpent) or Insomnius and the Kara40 wolf belt [[d:paladin#1465238562109919346]]; the Sunken Temple chest is worth 6-10% DPS [[d:paladin#1459211514761449796]] and its armor debuff helps the raid [[d:paladin#1470314718085251158]]. Details:

- **Tier 2 split** (to cover hit, since no slot is free): keungzhe puts Ret on gloves, boots and bracers and Protection on shoulders, legs and helm [[d:paladin#1470320626018418894]]; Mithreon runs bracers, hands and boots Ret, head, shoulders and legs Protection [[d:paladin#1489546828167774249]]. Other splits exist [[d:paladin#1486770290343022663]].
- **Weapon:** as fast as possible. Flurry Axe (1.5 speed) is second-best, Anasterian's Legacy (Kara10) is the budget pick [[d:paladin#1493296247409217707]]; Thunderfury is top again once Fortune is counted [[d:paladin#1487708056279056545]]. Ironfoe and Thunderfury procs do not themselves proc the Lost [[d:paladin#1470313582452408394]]. **Contested:** Pysan's New Greatsword. One tester parsed 770 DPS on a dummy and called it the new BiS [[d:paladin#1487293142091825352]], [[d:paladin#1487360839538311298]]; "3.5s sword can't be bis for necrodin" [[d:paladin#1487293508166488205]].
- **Rings, trinkets:** ordinary spellstrike items are useless here; take Wrath of Cenarius or the Ring of Burning Talons (new Onyxia boss), Mar'kali's Midnight Star (Draenei exalted) and the Spellwoven Drape of Nobility (Tailoring BoE) [[d:paladin#1493314491340034048]].
- Only Holy spellstrikes trigger the Lost; fire ones do not [[d:paladin#1493296247409217707]]. The Lost also works with the Protection Tier 1 8-piece [[d:paladin#1486792331674783835]].
- The ghosts do not scale with your spell power; only Curse of Shadows, Shadow Weaving and similar help them [[d:paladin#1493894471149158560]]. They can reach about 10 at once [[d:paladin#1458888639584014515]] and do 15-25% of your damage [[d:paladin#1470164059117846570]].

### Set bonuses

| Set | Bonus that matters | Verdict |
|---|---|---|
| Soulforge (T0.5) 4-piece | 95 spell power proc [[d:paladin#1441901013807272118]]; about 3 PPM [[d:paladin#1480009562646904852]]; SoR does not proc it (SoC does), apparently on purpose [[d:paladin#1480024928777539595]], [[d:paladin#1480484007035670640]] | Core until BWL |
| Tier 1 (Ret) 3-piece | +3% hit and Judgement damage [[d:paladin#1423456526793965779]] | SoC takes it for the hit [[d:paladin#1434496108138201108]] |
| **Tier 2 (Ret) 3-piece** | Holy spellstrike on autos that counts as a spell cast; procs Sigil, Wrath of Cenarius, the Lost, the Sunken Temple chest, Insomnius [[d:paladin#1460924106487759004]], [[d:paladin#1456009237892169800]] | Required for SoR [[d:paladin#1434497262985154671]]; doubled (with the Protection 3-piece) for Necrodin. Kept in 1.18.1 by the designer's choice [[d:paladin#1486109344486653954]] |
| Tier 2 5-piece / 8-piece | The 5-piece "was beaten down" [[d:paladin#1434740783063371837]] | Skip |
| **Tier 2.5 (Ret/Prot) 3-piece** | +15% Judgement of Righteousness/Command damage (1.18.1) ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Tier 2.5 is BiS for both builds through Naxx [[d:paladin#1464113164659589288]]; nobody goes past 4 pieces since the 6-piece was cut [[d:paladin#1491154254562459788]], [[d:paladin#1491154330437288090]] |
| Tier 3 (Ret) | AP instead of Strength, weak bonuses; 4 pieces is the practical maximum [[d:paladin#1456666424260038656]], [[d:paladin#1347336504543805462]] | SoC off-pieces |
| **Tier 3.5 (Ret) 5-piece** | Crusade: 4% attack speed for 20 s, non-stacking (1.18.1) ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Kara40 core |
| The Lost (3-piece) | Summons ghosts from spell hits [[d:paladin#1473599314499731466]] | Necrodin only |

### Librams

Since 1.18.1 every libram swap in combat costs a GCD, so you equip one libram per fight ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). "Fervor at pull, then Final Judgement for the rest of the fight" was the simplified pre-raid plan [[d:paladin#1475911623125368875]].

| Libram | Effect | Use |
|---|---|---|
| **Libram of Ardour** (new, Onyxia's Lair) | +1 Seal of Command proc per minute [[d:paladin#1488558737147957258]], [[d:paladin#1494761473275068506]] | **SoC default**: it always gives a chance at an extra proc, even on short fights [[d:paladin#1493046992148893806]]; Jesse Potter uses it "all the time" [[d:paladin#1493055347043074118]] |
| Libram of the Eternal Tower | Shortens the strike cooldown; about one extra strike per minute [[d:paladin#1454102304113295508]] | Pays off only on fights longer than ~60 s [[d:paladin#1493046992148893806]]; "Eternal Tower for boss" (SoR) [[d:paladin#1485886655469457459]] |
| Libram of Fervor | Improves Judgement of the Crusader | "The best DPS libram pre-raid" [[d:paladin#1470305106711805994]] |
| Libram of Final Judgement (MC) | Bonus damage below 35% health; 8% spell power scaling since 1.18.1 ([Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272)) | Execute; the only other pre-Kara40 DPS option [[d:paladin#1470305106711805994]] |
| Libram of the Hallowed Ground (new Consecration libram) | Extra Consecration damage (see [Protection](protection.md)). **Contested** scaling: flat ~96 in early screenshots [[d:paladin#1486949741869793353]], about 4% spell power in later testing [[d:paladin#1489569357725044837]] | "The lib from Alche for aoe" [[d:paladin#1485886655469457459]] |

**Libram of Ardour vs Eternal Tower (contested):** Gilfrey reports the "normal consensus" as Eternal Tower for fights over 60 s and Ardour under 60 s [[d:paladin#1488594571410804847]]; Destroses and Jesse Potter prefer Ardour in general [[d:paladin#1493046992148893806]], [[d:paladin#1493055347043074118]]. A faction bug made Ardour drop for the wrong faction; it was hotfixed ([Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139)).

### Notable Turtle items

- **Wrath of Cenarius** (Cenarion Hold quest ring): about +100 spell power over the next ring [[d:paladin#1442409091166376016]]; a 132 spell power proc from spellstrikes, doubled by SoR, "almost 100% uptime with the right setup" [[d:paladin#1450304223454691438]]. "BIS forever" [[d:paladin#1452294970961559674]].
- **Sigil of Ancient Accord** (MC trinket): procs only from true spells and the Tier 2 3-piece, not from seals, Judgements or strikes [[d:paladin#1473775932207530025]], [[d:paladin#1475109939650363394]]. Worth ~1.3-5% of damage depending on the raid [[d:paladin#1486488254709633126]], [[d:paladin#1486496592138862725]].
- **Ring of Burning Talons** (new Onyxia boss): no internal cooldown [[d:paladin#1489145039056670720]]; with the Tier 2 3-piece about 5% of single-target DPS [[d:paladin#1492194694179066080]]; replaces Wrath of Cenarius when you run the Lost set [[d:paladin#1492069500852375672]].
- **BWL spell power goggles**: proc only from the Tier 2 3-piece [[d:paladin#1486416315928416367]]; trade ~30 SP and 1% crit for a 200 SP proc [[d:paladin#1491891283591958630]].
- **Kiss of the Spider**: BiS trinket for spellret [[d:paladin#1430248290200457346]].
- **Spellstrike items** (for SoR mana): Ring of Electrical Binding, Fiery Plate Gauntlets, Storm Gauntlets, Embergem Cuffs (Jewelcrafting), the Gilneas City ring [[d:paladin#1491928884722274324]], [[d:paladin#1459767465843097794]].

## Enchants

| Slot | SoR | SoC |
|---|---|---|
| Head / legs | +12 spell power beats 1% haste; haste if you carry Nightfall [[d:paladin#1492380383113777264]] | Agility until ~30-33% unbuffed crit, then Strength (+8 Str) [[d:paladin#1490760393474179112]], [[d:paladin#1491997552328048721]] |
| Shoulders | Naxx shoulder enchant [[d:paladin#1490760393474179112]] | Naxx shoulder enchant |
| Cloak | Agility (crit) [[d:paladin#1483973204140888074]] | Agility while under the crit target [[d:paladin#1483973204140888074]] |
| Chest | Greater Stats [[d:paladin#1483973204140888074]] | Greater Stats |
| Bracers / gloves / boots | Spell power; +9 SP on gloves [[d:paladin#1492380383113777264]] | Agility until the crit target, then Strength [[d:paladin#1455415306041299036]] |
| Rings | +3 stats or +5 spell power [[d:paladin#1460637356473454633]] | +3 stats |
| Weapon | **Crusader**, "way ahead even for overall dps" [[d:paladin#1444192866480951437]]; +30 SP only on a fast, low-proc weapon [[d:paladin#1446469126242566216]]. **Contested** after 1.18.1 [[d:paladin#1466782219799629946]]. Rift Tear only for AoE farming (~4%, noisy) [[d:paladin#1492387256437182555]], [[d:paladin#1492983706791710943]] | **Crusader** [[d:paladin#1490760393474179112]] |

## Weapon oils, stones and Windfury

- **SoR: Wizard Oil. SoC: sharpening stones** [[d:paladin#1483869100772950066]]. Brilliant Wizard Oil does more total damage through Consecration on trash; stones can win on bosses [[d:paladin#1480005708756811809]].
- Windfury Totem on Turtle is an aura, not a weapon imbue, so an oil or stone goes on top of it [[d:paladin#1466355155216633919]].
- Consecrated Sharpening Stone or Oil against Undead [[d:paladin#1494325796440113223]].
- Leveling: Fiery or Lifestealing weapon enchant (both count as spellstrikes for mana) [[d:paladin#1452620427837968476]], [[d:paladin#1489845996233031700]].

## Consumables and world buffs

Jesse Potter's damage list (post-1.18.1) [[d:paladin#1494325796440113223]]:

- Flask of Supreme Power
- Concoction of the Emerald Mongoose, Concoction of the Arcane Giant, Concoction of Dreamwater
- R.O.I.D.S. or Scorpok (crit, if you are under ~33% crit unbuffed [[d:paladin#1464971997896511571]])
- Food: 20 Strength, haste or spell power food, 32 AP, or Dragonbreath Chili
- Elemental Sharpening Stone or Oil; Consecrated versions against Undead
- Haste: Juju Flurry and Potion of Quickness are "goated for SoR" [[d:paladin#1484608557075660910]]
- Goblin Sapper Charges on AoE pulls [[d:paladin#1428687306520395776]]; mana potions and teas on cooldown [[d:paladin#1489847158504165416]]

Ret is one of the most consumable-hungry specs, about 15 potions per raid [[d:paladin#1445184716788732005]]. Watch the buff cap (see [Mana and resources](#mana-and-resources)).

## Macros and addons

- **Swing timer**: mandatory [[d:paladin#1485694688919818341]].
- **Seal + Judgement on one key** without double-sealing [[d:paladin#1445860830838259865]]:
  ```
  #showtooltip
  /cast [nomybuff:"Seal of Righteousness"] Seal of Righteousness; Judgement
  ```
- **Strike selector** (see [Single-target rotation](#priority-sor-bot-ready)).
- **ExAutoCSHS** (github.com/Excinerus/ExAutoCSHS) picks Crusader or Holy Strike from your Zeal and Holy Might state and weapon type [[d:paladin#1431383481547493517]].
- **Buff management**: an auto-cancel list (ABR or VCB) for low-value buffs [[d:paladin#1469539640288608298]].


## Dungeon and raid notes

- **Fire-immune bosses** (Ragnaros, Firemaw, Ebonroc, Flamegor, Nefarian, Onyxia, and others) take nothing from fire procs, so fire-proc weapons and the Ring of Burning Talons are weaker in [Molten Core](../../instances/molten-core.md) and [Blackwing Lair](../../instances/blackwing-lair.md) [[d:paladin#1467471277177704519]]. Swap Dragonbreath Chili for other food there [[d:paladin#1490048032719372551]].
- **Fire-vulnerable Chromaggus and Firemaw**: Rets rip threat; one died at 1.6k DPS, another capped at 1.7k because of threat [[d:paladin#1493214523694256268]], [[d:paladin#1493491932410679426]]. Watch the threat meter when damage-taken debuffs are up.
- **Nefarian's paladin class call**: any paladin's Blessing of Protection or Divine Shield clears it [[d:paladin#1471659438925549761]].
- **Naxx, Feugen and Stalagg**: Ret goes to the left miniboss [[d:paladin#1493287104892112977]], [[d:paladin#1493293616855257250]].
- **AQ40 Twin Emperors**: automate the Crusader/Holy Strike upkeep and use the switch window: leave with ~4 s to spare after a fresh Consecration and a Repentance [[d:paladin#1431390436940972043]].
- **[Tower of Karazhan](../../instances/tower-of-karazhan.md)**: Anomalus and Kruul punish mana-using melee [[d:paladin#1429176144347005101]], [[d:paladin#1445222573431328768]]. On Kruul a paladin's job can be to wear fire resistance and drag each new Infernal out of the melee stack with Exorcism and Judgement [[d:paladin#1457970802442899541]].
- **[Lower Karazhan Halls](../../instances/lower-karazhan-halls.md), Moroes**: a Ret in plate with Righteous Fury can off-tank the repeated stuns and threat drops (not in a zero-Stamina set) [[d:paladin#1453195049016758433]].
- **[Onyxia's Lair](../../instances/onyxias-lair.md)** new boss: its trash puts a fire debuff on melee that paladins and priests must dispel [[d:paladin#1484605320193114394]]. It drops the Libram of Ardour.
- **Nightfall**: rets are common carriers. One Kara40 log showed 86k-140k extra raid damage per boss from its procs [[d:paladin#1434656825957154826]]. Rotate the job; it costs the carrier personal DPS and loot priority [[d:paladin#1441243566465613885]].
- **Windfury is not everything**: Grey, a paladin without Windfury, out-damaged a rogue who demanded a Windfury group [[d:paladin#1486759814230052915]]. Consumables and uptime are the bigger levers: "you need to be fully consumed to do competitive damage in the raid" [[d:paladin#1486753231953465495]].
- **Flametongue Totem bug (April 2026)**: Flametongue briefly scaled with spell power again and inflated SoR and Necrodin parses [[d:paladin#1490888484725067949]], [[d:paladin#1493259558431494244]]. Do not compare your logs against parses from that window.

## Common mistakes

1. **Auto-attacking without a seal**, usually from judging right before a swing [[d:paladin#1431380231587102822]], [[d:paladin#1431381602033733664]].
2. **Over-prioritizing the Judge-reseal** and clipping Crusader/Holy Strike cooldowns [[d:paladin#1485691856963506186]], [[d:paladin#1485692071619723385]].
3. **Mixing gear types**: Strength gear with SoR, or a spell weapon with SoC. A raider whose SoR "hit like a noodle" in Strength gear was told: "different gear for different seals" [[d:paladin#1445836863092031731]], [[d:paladin#1445836991899111456]].
4. **Letting Zeal or Holy Might drop**; many Rets waste the first 30 s of a pull rebuilding them [[d:paladin#1481935203877388298]].
5. **Binding several seals and Judgement into one macro**: it cost some raiders over 20% ability downtime [[d:paladin#1431384577359745167]].
6. **Raiding under the 8% hit cap**, or pushing weapon skill past 315 [[d:paladin#1488219693293633586]].
7. **Consecration spam on single targets in low gear** [[d:paladin#1492066318159970314]].
8. **Taking Improved Blessings on SoR, or Vindication in any PvE build** [[d:paladin#1458179706682736732]], [[d:paladin#1431510211994058812]].
9. **Swapping librams mid-fight**: since 1.18.1 every swap costs a GCD ([Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)).
10. **Playing Necrodin on trash** or with only one Tier 2 3-piece: "You half your spell effects with only 1 set of t2" [[d:paladin#1470319054094073979]].
11. **Seal twisting**: it no longer gives the old extra procs [[d:paladin#1455597115454787625]], and the developers do not want it back [[d:paladin#1470312282868416573]].
