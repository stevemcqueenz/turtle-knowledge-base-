# Fury Warrior (melee DPS)

**Recommendation:** Fury is the warrior raid DPS tree in 1.18.1, and it comes in three shapes. **2H Fury (20/31/0)** is the top overall-damage build once you have raid gear and roughly 30% crit: Bloodthirst and Whirlwind on cooldown, **Slam** woven between swings whenever Flurry is up. **Lawnmower (21/30/0)** is the same build with Sweeping Strikes instead of Bloodthirst, for trash- and cleave-heavy raids such as Kara40. **Dual Wield Fury (17/34/0)** has no cast bar, forgives mistakes, has the best Execute phase and holds server records. Its weakness is gear: it needs two good one-handers and weapon skill for both. None of the three is a fresh-60 spec. If you have under about 23% unbuffed crit, play [Arms](arms.md) first.

| | |
|---|---|
| Role | Melee DPS; Sunder Armor, Battle/Demoralizing Shout, Disarm, off-tanking on demand |
| Viability (1.18.1) | **S (raid).** 2H Fury "still leads DW Fury and Arms on most fights" [[d:warrior#1489363464605663365]]; "2h fury, 2h fury with sweeping strikes instead of Bloodthirst and dual wield fury are the meta dps specs" [[d:warrior#1482754932187598888]] |
| Difficulty | 2H: high (swing-timer management for Slam). DW: medium (no cast, three buttons plus fillers) |
| Strengths | Three big damage steroids (Enrage, Death Wish, Flurry) [[d:warrior#1478083363293364345]]; strong cleave; DW can off-tank or tank in DPS gear [[d:warrior#1469840783568928788]] |
| Weaknesses | Flurry needs crit, so both builds feel bad in fresh-60 gear [[d:warrior#1493290685703651450]]; 2H is rage-starved on trash without Windfury [[d:warrior#1425533563415171233]]; DW is bottlenecked on weapons and weapon skill |

**2H or DW? (contested).** At equal gear and skill 2H Fury comes out ahead, but skill decides it at the margin: "dual wield is close behind or better in single target" [[d:warrior#1460671179114156244]], [[d:warrior#1460671218670633249]], [[d:warrior#1457773247989813418]]. After the patch 2H is "ahead of dw fury" [[d:warrior#1486580928548438066]], and the trash gap between the two "isn't a massive gap" [[d:warrior#1488742645944553652]]. Against that, a DW warrior (Lashara) set consecutive Grobbulus DPS records with no Champion buff in April 2026, and the channel reposted it as proof that DW is "batshit broken" [[d:warrior#1494847565156454461]]. Before Bonereaver's Edge drops, DW often wins because it has far more usable weapons [[d:warrior#1468735994437177540]]. Pick by the weapons you own.

## How to play

A decision loop for a level-60 Fury warrior. The details are in [Single-target rotation](#single-target-rotation), [AoE rotation](#aoe-rotation), [Cooldowns](#cooldowns) and [Rage management](#rage-management).

1. **Opener:** Charge → Sunder Armor on the first GCD → Bloodrage for Enrage [[d:warrior#1459198336731975701]]. DW: press Bloodrage right before Bloodthirst so two Bloodthirsts fit in Enrage [[d:warrior#1430101399722659933]].
2. **Single-target loop:**
   - **2H (Bloodthirst):** Bloodthirst > Whirlwind on cooldown > Slam only with Flurry up and the cast landing before your next auto > Heroic Strike queued at about 70+ rage [[d:warrior#1485723095900618782]], [[d:warrior#1489434203748696215]]. See [2H priority](#2h-fury-bloodthirst-build-priority) and [How Slam works](#how-slam-works-on-turtle).
   - **DW:** Execute under 20% > Bloodthirst > Whirlwind > Heroic Strike only when capping > filler Master Strike > Pummel > Hamstring > Sunder Armor [[d:warrior#1429836696479989844]]. See [DW priority](#dual-wield-fury-priority).
   - **Lawnmower:** Whirlwind > Slam, with Heroic Strike or Cleave as the dump. See [Lawnmower priority](#lawnmower-priority).
3. **Cooldowns:**
   - **Death Wish** in the last ~30 s or the Execute phase [[d:warrior#1482492282388091114]].
   - **Recklessness** on the pull in DPS races. It shares a 30-minute cooldown with Shield Wall and Retaliation.
   - **Bloodrage** on the pull, and again into Execute on long fights.
   - Mighty Rage Potion, Juju Flurry and Bloodrage are off the GCD.
4. **AoE switch (2+ targets):**
   - **Lawnmower:** Sweeping Strikes + Whirlwind on the first GCD [[d:warrior#1490378739639517226]].
   - **2H:** Whirlwind > Cleave > Bloodthirst / Slam.
   - **DW:** Bloodthirst / Whirlwind on cooldown, with Cleave instead of Heroic Strike.
   - Whirlwind hits up to 4 targets (vanilla baseline).
5. **Resource rule:**
   - Bank rage before 20% so one Execute can take the target from 20% to 0 [[d:warrior#1494705955731013692]].
   - Heroic Strike is a dump, never a choice over a skill [[d:warrior#1477507950644957367]]. Skip it during the DW Execute phase.
   - A queued Heroic Strike unqueues below its cost.
   - Stance swaps keep at most 25 rage.
6. **Movement / situational:**
   - Slam can be cast while moving.
   - Whirlwind cannot clip your swing, so press it instead of Slam when the next auto is under about 1 s away.
   - Improved Berserker Rage breaks roots, but not in Sanv Tas'dal's add phase.
   - DW does not stance-dance for Overpower [[d:warrior#1470401675914117132]].

## What changed in 1.18.1

- **Flurry and Slam:** 5/5 Flurry now cuts Slam's cast to **1.92 s** (2.5 / 1.3) instead of the bugged 1.75 s [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:warrior#1485731806379639005]], [[d:warrior#1488572106357604544]]. On patch day Flurry stopped being consumed; that was hotfixed at the next restart [[d:warrior#1484635426726609007]], [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608). 2H Fury lost some Slam speed but kept its damage: "its still the same thing you just benefit way less" [[d:warrior#1464355611406762224]], [[d:warrior#1464396328221020387]].
- **Improved Whirlwind is now Ravager:** it lowers Whirlwind's cooldown by 1/1.5/2 s and Cleave's rage cost by 1/2/3 [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). For DW this was "nothing really changed" [[d:warrior#1484898632233783356]], [[d:warrior#1484569034300198952]].
- **Hamstring has no cooldown again**, so it works as spammable filler [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:warrior#1492529722628771850]].
- **Set bonuses:** T1 3-piece is now "Whenever you hit with an ability, 10% chance to gain 15 rage"; T3 4-piece is now "+4% critical strike damage bonus of your abilities" [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). The T3 change is worth roughly 40-50k damage per Naxx run [[d:warrior#1464422501651185787]].
- **Mid-cycle (January 2026):** Sweeping Strikes no longer double-dips damage modifiers. It now hits the second target for 20% of the damage and cannot crit [[d:warrior#1463776864144199833]], [[d:warrior#1485394033395105993]]. Stance swapping no longer procs Windfury Totem [[d:warrior#1463316562495799450]].
- **Enrage is a baseline cooldown for everyone:** Bloodrage's self-damage counts as a crit, so it procs Enrage, and warriors share a 1-minute Enrage cycle [[d:warrior#1487841821928198335]], [[d:warrior#1490461908397195464]].

## Talent builds

### 2H Fury, Bloodthirst, 20/31/0 (recommended once geared)

Posted by topgod on 2026-03-21 as a pair with the Lawnmower build below [[d:warrior#1484972395130519612]]. It matches the channel's standard description, "20/31/0 with 2h specialization and bloodthirst" [[d:warrior#1445109772775985304]].

| Tree | Talent | Points |
|---|---|---|
| Arms | Improved Heroic Strike | 3/3 |
| Arms | Tactical Mastery | 5/5 |
| Arms | Improved Rend | 2/2 |
| Arms | Improved Charge | 2/2 |
| Arms | Deep Wounds | 3/3 |
| Arms | Two-Handed Weapon Specialization | 3/3 |
| Arms | Impale | 2/2 |
| Fury | Cruelty | 5/5 |
| Fury | Unbridled Wrath | 5/5 |
| Fury | Improved Shouts | 5/5 |
| Fury | Enrage | 5/5 |
| Fury | Ravager | 3/3 |
| Fury | Death Wish | 1/1 |
| Fury | Improved Execute | 1/2 |
| Fury | Flurry | 5/5 |
| Fury | Bloodthirst | 1/1 |

Split **20/31/0**, validated (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35220000332-05055000503110501) · code `dQQAAYDQ-AoAooAAoZBFAB-`

Why these points:

- **Two-Handed Weapon Specialization** also gives +3 two-hand weapon skill, which is easy to miss on the character sheet [[d:warrior#1493323470170488984]].
- **Unbridled Wrath over Booming Voice**, unless you are the raid's designated shouter [[d:warrior#1445537602957742080]], [[d:warrior#1445543767426732202]].
- **No Improved Overpower** in raid gear. Put spare points into Improved Berserker Rage or Improved Charge instead [[d:warrior#1425966998830977204]]. A common swap is Improved Charge → Improved Overpower 2/2 (Bassilthorne's otherwise identical `dQAACYDQ-AoAooAAoZBFAB-`, [[d:warrior#1482569812818399407]]). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35200002332-05055000503110501) · VALID
- **Master of Arms 5/5 and Flurry 5/5 cannot both be maxed**: that would take 55 points [[d:warrior#1476171199745753180]].

### Lawnmower, 2H Fury with Sweeping Strikes, 21/30/0

The same build with **Sweeping Strikes in place of Bloodthirst** [[d:warrior#1484972646109020250]]. "Skip BT in 2h fury to get sweeping strikes" [[d:warrior#1487834407795691582]]. It is the go-to trash and cleave spec and beats execute-focused Arms builds in those scenarios [[d:warrior#1486335184155578400]], [[d:warrior#1486336808806649927]].

[Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=3522000033201-050550005031105) · code `dQQAAYDQB-AoAooAAoZBF-` · split **21/30/0**, VALID.

**20/31 or 21/30?** "21/30 really shines in K40, whereas 20/31 is better in Naxx", and in an average guild "21/30 is always the better pick when it comes to overall damage" [[d:warrior#1464641503035920505]], [[d:warrior#1464641816505749515]]. axelfrog finds 20/31 "a much better feeling rotation" [[d:warrior#1468835065361600633]]. Some raiders respec between trash-heavy and single-target bosses inside Kara40 [[d:warrior#1447524170836611122]]. Shardphoenix runs 20/30 with a free last point for either Bloodthirst or Sweeping Strikes, and notes that "certain people" disagree with his Bloodthirst pick [[d:warrior#1493291445808005356]].

### Dual Wield Fury, 17/34/0

The build 30 (the channel's sim and tank-sim author) has used since the 1.18 talent pass and reposted on 2026-04-15 [[d:warrior#1441921379682357381]], [[d:warrior#1494057933342769315]]. Dodging and Squid posted the same code after the patch [[d:warrior#1485950719340052634]], [[d:warrior#1493004708074229821]]. VeganCourage says the DW build "barely changes from Onyxia through Kara40 gear" [[d:warrior#1467627833269682339]].

| Tree | Talent | Points |
|---|---|---|
| Arms | Improved Heroic Strike | 3/3 |
| Arms | Tactical Mastery | 5/5 |
| Arms | Improved Rend | 2/2 |
| Arms | Improved Charge | 1/2 |
| Arms | Master Strike | 1/1 |
| Arms | Deep Wounds | 3/3 |
| Arms | Impale | 2/2 |
| Fury | Cruelty | 5/5 |
| Fury | Dual Wield Specialization | 5/5 |
| Fury | Improved Shouts | 5/5 |
| Fury | Enrage | 5/5 |
| Fury | Ravager | 3/3 |
| Fury | Death Wish | 1/1 |
| Fury | Improved Execute | 2/2 |
| Fury | Improved Berserker Rage | 2/2 |
| Fury | Flurry | 5/5 |
| Fury | Bloodthirst | 1/1 |

Split **17/34/0**, validated (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35210010302-05505000503122501) · code `dQIAIYAQ-AoFAoAAoZCVAB-`

- **Master Strike over Overpower:** Windfury Totem has an internal cooldown on Turtle, and an Overpower or auto proc in Battle Stance can leave you stuck at 50+ rage [[d:warrior#1441923328947257344]], [[d:warrior#1441925058791739394]]. The Improved Overpower variant `dQAACYAQ-AoFAoAAoZCVAB-` (Improved Overpower 2/2, no Improved Charge or Master Strike) was posted right after the patch [[d:warrior#1484983926802874478]]. [calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warrior&t=35200002302-05505000503122501)
- **Dual Wield Specialization** gives the off-hand +10% hit. It replaces the old Heroic-Strike-queue off-hand hit, which Turtle removed [[d:warrior#1451433242908426392]], [[d:warrior#1463445651688783883]].
- **Skip Overpower-dancing:** the sim gain is minor, and "in real scenario you just grief yourself" [[d:warrior#1457446820790931672]], [[d:warrior#1457442998555250818]].

!!! warning "Old builds"
    Codes from before 1.18 (for example with Anger Management, Sword/Axe Specialization or 5-point Two-Handed Weapon Specialization) come from a different tree. `talents.turtle-wow.org` and `talents.turtlecraft.gg` links still encode points, and swapping the domain in an old link preserves the build [[d:warrior#1455041708021645486]], but both calculators are now offline [[d:warrior#1487937492446613695]]. Paste the `points=` part into the calculator above to check a build.

## Stat priority and caps

1. **Hit to the yellow cap.** Yellow attacks (abilities) need **8% hit against a boss at 300 weapon skill**. Turtle removed vanilla's extra +1% boss miss [[d:warrior#1451430729769680999]]. Each weapon-skill point above 300 lowers that by 0.2%: 7% at 305, 6% at 310, 5% at 315. This is the same for DW, 2H and sword-and-board [[d:warrior#1457400704606929118]], [[d:warrior#1457402842074714285]].
2. **Weapon skill to 310-315** for your weapon type [[d:warrior#1458890331666911403]]. Each point above 300 gives "+0.2% hit chance, +2% dmg on glancing blows, +0.1% crit chance and -0.1% dodge chance" (30 quoting the formula) [[d:warrior#1468345044703645923]]. White hits against a boss glance 40% of the time no matter what; weapon skill only raises glancing damage from 65% at 300 to 95% at 315 [[d:warrior#1443319985345921047]]. **Do not go past 315.** A bug removes about 0.6% crit at 316 [[d:warrior#1479840926296838307]], [[d:warrior#1468346768025452728]]. Weapon skill does nothing to parry chance (tested over 100k autos) [[d:warrior#1486148825486852276]].
3. **Strength / AP and crit.** Crit is worth roughly 30-40 AP. In practice "~92 ap + 2 crit is worth more than 33ap + ~3.7 crit most of the time" [[d:warrior#1467046048987090944]], [[d:warrior#1467046773691383980]]. 1 Strength = 2 AP (2.2 with Kings); 20 Agility = 1% crit [[d:warrior#1492014533726703677]]. Crit still matters for Flurry, Impale and Deep Wounds [[d:warrior#1488167716261990542]].
4. **Haste.** It stacks multiplicatively and gets stronger the more crit and AP you already have [[d:warrior#1447411553728200797]], [[d:warrior#1447412406081945752]]. For 2H, Strength vs haste is **contested**: "Str is better, don't let hastechuds fool you" [[d:warrior#1482884212791971952]] versus "haste has a double benefit for 2h" [[d:warrior#1483102293048955073]].
5. **Armor penetration** is weak. It is a flat stat, and raid bosses sit near 0 armor once Sunder, Faerie Fire and Curse of Recklessness are up. It matters mostly against trash or bosses with armor left [[d:warrior#1488197833382170635]], [[d:warrior#1484881788668088430]].

| Cap / threshold | Value | Source |
|---|---|---|
| Yellow hit vs boss | 8% at 300 skill → 5% at 315 | [[d:warrior#1457402757693833248]] |
| Weapon skill | 315 hard stop (316 costs ~0.6% crit) | [[d:warrior#1483240311093330031]], [[d:warrior#1479860943105036409]] |
| DW white-hit cap | 27% (26.4% at 303 skill); chasing it is sub-optimal, but DW still gets some value from hit above the yellow cap | [[d:warrior#1480482079492804608]], [[d:warrior#1457400938598760528]] |
| Crit for 2H Fury | ~23% unbuffed before 2H/Fury beats Arms; Flurry crit value drops after ~34% | [[d:warrior#1469009070210941099]], [[d:warrior#1467622383731867730]] |
| 2H crit cap | above 52% (Better Character Stats shows ~55% at 315 skill); "not worth thinking about" | [[d:warrior#1492227782426628268]], [[d:warrior#1467043715989114940]] |

Once you are hit-capped, do not trade crit for hit [[d:warrior#1466151329427886171]]. Sim your own gear with a high iteration count; the sim needs 100k+ iterations before single-stat differences mean anything [[d:warrior#1482428703718772958]].

## Single-target rotation

### How Slam works on Turtle

- Slam **does not reset** the swing timer. The auto-attack keeps counting while Slam casts, and the swing only waits if its timer runs out before Slam finishes. You can cast Slam while moving [[d:warrior#1459683959792206076]]. Since mid-April 2026, a Slam that lands before the next auto no longer delays that auto at all [[d:warrior#1494432213700313169]].
- Slam **resets your off-hand swing**, which keeps it out of DW rotations [[d:warrior#1438884319153360991]].
- Slam damage is not normalized, so **use the slowest two-hander you can** [[d:warrior#1493292716031742164]], [[d:warrior#1494053824065704156]].
- Whirlwind cannot clip your swing. If your next auto is under about 1 second away, press Whirlwind instead of Slam [[d:warrior#1491955711876399265]], [[d:warrior#1491954378041589870]].

### 2H Fury (Bloodthirst build) priority

1. **Opener:** Charge (if allowed) → Sunder Armor on the first GCD → Bloodrage for Enrage. On a fight longer than about 1 minute, Bloodrage on the pull and again going into Execute [[d:warrior#1459198336731975701]], [[d:warrior#1433265496458789045]].
2. **Bloodthirst** on cooldown. Do not delay it to fit a Slam [[d:warrior#1485723095900618782]].
3. **Whirlwind** on cooldown. Top parsers use it even on a single target [[d:warrior#1478767553613529244]].
4. **Slam** when Flurry is up and the cast will land before your next auto. Otherwise press another instant [[d:warrior#1485723095900618782]], [[d:warrior#1493900774072258581]]. The working pattern is "Slam bt auto slam ww auto" [[d:warrior#1493965821293101086]].
5. **Heroic Strike** queued at about 70 rage or more, so you are never rage-starved [[d:warrior#1489434203748696215]], [[d:warrior#1442845647295217745]]. If a Slam cannot land before the next auto, a Heroic Strike beats clipping the auto [[d:warrior#1493900774072258581]].
6. **Execute phase (target under 20%):** bank rage before 20% so a single Execute can take the target from 20% to 0 [[d:warrior#1494705955731013692]]. Execute scales with AP, armor penetration and rage spent, not weapon damage [[d:warrior#1484660616991080541]], [[d:warrior#1485080360978092143]]. **Contested:** spell data still lists 15 rage on every rank, but players report the cost dropped to 10, with the freed rage becoming damage [[d:warrior#1467491606910472306]]. With enough crit, weaving Slam between Executes adds damage [[d:warrior#1488972211250397265]].

**Training-wheels version** (Guts): "ignore swingtimer, ignore autos and always cast 1 slam and then use bt, slam ww, slam bt, slam 3x repeat". He says that alone, plus good cooldown timing, puts you in the top 10% [[d:warrior#1486668639200608256]], [[d:warrior#1486668804619763712]]. VeganCourage's 5-minute dummy test with a 3.8-speed weapon ranked "Slam > Auto > Slam > Auto > Slam > Auto > WW > BT" at 176k damage, ahead of Slam-only at 153k [[d:warrior#1465391439323201680]].

**Slam macros (contested).** A no-clip macro needs SuperWoW, SP_SwingTimer and SuperCleveRoidMacros: `#showtooltip Slam` / `/startattack` / `/cast [noslamclip] Slam` [[d:warrior#1489011734017736704]]. Others say "don't macro Slam into your swing — just spam it manually" [[d:warrior#1471332098681082002]]. Swing-timer addons drift around Slam and Flurry procs [[d:warrior#1485772497948246117]].

### Lawnmower priority

Without Bloodthirst: **Whirlwind > Slam**, with Heroic Strike or Cleave as the rage dump [[d:warrior#1472301913780257053]]. On packs, open with **Sweeping Strikes + Whirlwind** on the first GCD [[d:warrior#1490378739639517226]]. Trigger Sweeping Strikes off the Charge auto (or fund it with Bloodrage) while still in Battle Stance — the spell data allows it only there — then swap to Berserker Stance for Whirlwind, swapping back to Battle Stance to press it again if the trash is still alive about 30 s later [[d:warrior#1473966467384086528]], [[d:warrior#1473997570970882068]].

### Dual Wield Fury priority

1. **Opener:** Charge → Sunder Armor → Bloodrage just before Bloodthirst, so you fit two Bloodthirsts into the Enrage window [[d:warrior#1430101399722659933]], [[d:warrior#1445462507266244680]].
2. **Execute** when the target is under 20%. DW is "the best way to execute" because two autos refill rage [[d:warrior#1464451477706899528]]. Skip Heroic Strike during the Execute phase [[d:warrior#1431724717789679626]].
3. **Bloodthirst** on cooldown.
4. **Whirlwind** on cooldown, even on one target [[d:warrior#1491954418986385518]].
5. **Heroic Strike** as the rage dump when capping. It is queued alongside other GCDs, never pressed "instead of" them [[d:warrior#1477507950644957367]], [[d:warrior#1470390733490880593]].
6. **Filler** when Bloodthirst and Whirlwind are down: **Master Strike > Pummel > Hamstring > Sunder Armor**. These fish for Windfury and Crusader procs; spamming only BT/WW/HS "gimps" DW DPS [[d:warrior#1429836696479989844]]. Hamstring does not reset your own swing; it only fishes for Windfury [[d:warrior#1492956763689844756]].
7. **Do not stance-dance for Overpower** as DW: "No, that's a waste" [[d:warrior#1470401675914117132]]. A single-source exception is fully buffed Kara40-level play with Windfury, where rage is no issue [[d:warrior#1477322746936688723]].

## AoE rotation

| Targets | Build | Priority |
|---|---|---|
| 2+ | 2H Fury / Lawnmower | Sweeping Strikes (Lawnmower) → **Whirlwind > Cleave > Bloodthirst/Slam** [[d:warrior#1426297528571265036]], [[d:warrior#1490378739639517226]] |
| 2+ | DW Fury | Bloodthirst/Whirlwind on cooldown, **Cleave** as the rage dump instead of Heroic Strike (Ravager makes Cleave cheaper: "3 rage off cleave with improved whi...i mean ravager") [[d:warrior#1484033434824216647]], [[d:warrior#1484505459254624276]] |
| 2+ | any | A slow main hand hits harder with Whirlwind; a fast one rage-starves you [[d:warrior#1494053998099955822]] |
| slow trash pace | Lawnmower | Sweeping Strikes gains value the longer the gap between pulls [[d:warrior#1436702449925750824]], [[d:warrior#1447522520969511016]] |

- Whirlwind hits up to 4 targets (vanilla baseline).
- Sweeping Strikes copies an Execute's damage only onto a second target that is also below 20% [[d:warrior#1428909002011447358]]. It does not proc off fully absorbed swings (open bug 17867) [[d:warrior#1489606466443677837]] and cannot crit under Recklessness [[d:warrior#1460673594224021655]].
- With the new T1 3-piece, Sweeping Strikes becomes "rage positive most of the time" [[d:warrior#1483861393542479952]].
- **Execute on trash:** executing low mobs is worth it when pulls are slow, because rage decays anyway. Save rage when the next pack is coming right away [[d:warrior#1441906156040622121]], [[d:warrior#1441906226874290207]].

## Cooldowns

- **Death Wish** (30 s): the only real damage cooldown for every warrior spec ("5 warriors enter a bar... they all use deathwish") [[d:warrior#1484914497058504795]]. For consistency, pop it in the last ~30 s of the fight or in the Execute phase [[d:warrior#1482492282388091114]]. It can be used twice on long fights such as Chromaggus, Gothik, Four Horsemen, Loatheb and Kel'Thuzad [[d:warrior#1431726255010480278]], [[d:warrior#1424111495624528033]]. It is a toggle and can get cancelled by accident [[d:warrior#1433262001190211664]].
- **Recklessness**: there is "almost no wrong time"; use it on pull in DPS races [[d:warrior#1431726048051069100]]. It shares a **30-minute** cooldown with Shield Wall and Retaliation [[d:warrior#1462506610068029502]].
- **Bloodrage**: pull, and again into Execute on fights of 1:15 or longer. Enrage (+20% damage) stacks with Death Wish [[d:warrior#1433266387962560572]]. Bloodrage also self-dazes you ("sometimes you even daze yourself!!") and applies Gift of Arthas to you [[d:warrior#1487112916929876028]], [[d:warrior#1487113788061782229]].
- **Juju Flurry, Mighty Rage Potion and Bloodrage** are all off the GCD and fit in one macro; Death Wish is on the GCD [[d:warrior#1494010684982296686]]. Mighty Rage Potion and Potion of Quickness share the 2-minute potion cooldown; Juju Flurry does not [[d:warrior#1494014083542945833]].
- **Perception** (Human racial) belongs before the pull, not in the Execute phase, because it costs a GCD for about 2% crit [[d:warrior#1493965706062987575]].
- **Time-to-kill macro** (TTK addon + SuperCleveRoidMacros): `/cast [type:boss ttk:<32&>27]Death Wish` [[d:warrior#1471694309236408476]].
- **Improved Berserker Rage** breaks roots and most slows, including Kara40 curses, Noth's Cripple and Gothik's horse stomp [[d:warrior#1421142174874996736]], [[d:warrior#1434860202125168763]]. Do **not** use Berserker Rage in Sanv Tas'dal's add phase: it strips the debuff that protects you from Rift Feedback, and you get one-shot [[d:warrior#1468022689401929761]].

## Rage management

- Rage comes from damage dealt plus a term for the weapon's **base** swing time: per hit `(dmg*7.5/230.6)/1.075 + (base_swing_timer*3.5)/2.25`, with 7.5 in place of 3.5 on a crit [[d:warrior#1494491071366037607]].
- Heroic Strike replaces your auto, and that swing generates no rage. Slam is a separate attack, so the next auto still gives rage [[d:warrior#1474975775479562512]], [[d:warrior#1473745241159762074]].
- A queued Heroic Strike now **unqueues** the moment your rage drops below its cost. Bind it to the mouse wheel so you can re-queue it constantly [[d:warrior#1443033417167016138]], [[d:warrior#1443366954655154322]].
- Heroic Strike still guarantees the main hand cannot miss or glance, but no longer the off hand [[d:warrior#1494454222442463332]].
- Stance swaps keep at most 25 rage (with Tactical Mastery) [[d:warrior#1472637583208222984]], [[d:warrior#1471914865512943708]].

## Gear

There is no endorsed static BiS list. The item pool is large and custom, so sim your own gear [[d:warrior#1446883304770109523]], [[d:warrior#1432054420249641103]]. The **current 1.18.1 sim is jrc13245's** (`jrc13245.github.io/WarriorSim-TurtleWoW`); thrunk112's is the outdated 1.18 version [[d:warrior#1494019044943331468]], [[d:warrior#1488000791729143909]]. Classic pre-BiS lists do not carry over: "classic prebis is really not even close to prebis on Turtle" [[d:warrior#1449533952380375080]].

### Fresh 60 / pre-raid

- **Priorities:** hit cap, then crit, Strength and AP [[d:warrior#1448776258497544313]]. The only pre-raid item "worth stressing over" is **Blackhand's Breadth**. Otherwise run Kara10, ZG and AQ20 (and MC) and take drops [[d:warrior#1473450370129989887]], [[d:warrior#1473451659421159456]].
- **Example pre-raid list** (Sickle): Baron Rivendare's helm, Fordring's neck, the Black Morass 2%-hit shoulders, Savage Gladiator Chain, Battleborn wrists, Devilsaur gloves and legs, Heroism belt and boots, Painweaver Band, Blackstone Ring, Blackhand's Breadth, Hand of Justice. Weapons: the Black Morass mace and dagger, or Dal'Rend's [[d:warrior#1446906865094230048]], [[d:warrior#1446908542165582036]]. Devilsaur is still the standard hit and AP pick [[d:warrior#1447683897788993666]], [[d:warrior#1447687244755370014]].
- **T0.5** is "much better on Turtle than in Classic". Farm the first 6 pieces and skip the final chest-upgrade step [[d:warrior#1493577797183082536]], [[d:warrior#1494031529998028912]].
- **Helm:** Lionheart Helm lost its Strength. **Darkflame Helm** from Kara10 is "the new LHH" [[d:warrior#1481286310902632518]], [[d:warrior#1443005407374213251]].
- **Pre-raid dungeons:** Stormwind Vault, Black Morass, Karazhan Crypt, SM/Scholomance/Dire Maul, BRD [[d:warrior#1453613945188253869]].

### Two-handers

| Stage | Weapon | Notes |
|---|---|---|
| MC | **Bonereaver's Edge** (BRE) | BiS until Untamed Blade; very rare (one guild saw none in 21 MC clears) [[d:warrior#1486769090621083710]], [[d:warrior#1468736485930045572]]; its armor proc makes it strong on trash, and its Whirlwind proc works again [[d:warrior#1458817145235443712]] |
| MC stopgap | Obsidian Edged Blade, Unstoppable Force | [[d:warrior#1463999738230738965]], [[d:warrior#1468764524831051866]] |
| BWL | **Untamed Blade** | +300 Strength proc, ~53% observed uptime; pulls ahead of BRE once boss armor is already low [[d:warrior#1457168353427849288]], [[d:warrior#1491812754808635512]] |
| BWL (crafted) | Elementium Reaper (axe) / Elementium Champion (sword) | "Untamed Blade, BRE, Elementium Reaper are top 3 IMO" per one tester; others call them underwhelming. Their haste procs do not shorten Slam. Needs Axesmith (Reaper) or Swordsmith (Champion), and consumes a BoP, single-use Elementium Sharpening Stone [[d:warrior#1487899783925334148]], [[d:warrior#1489013086848291028]], [[d:warrior#1486574899953799360]], [[d:warrior#1490124384684478474]] |
| Naxx | Might of Menethil; Severance on bosses, BRE on trash | [[d:warrior#1461803737277534489]], [[d:warrior#1459618355102220340]] |
| Kara40 | Checkmate ("basically MoM") | [[d:warrior#1461813377008664859]] |

### Dual-wield weapons

| Stage | Main hand / off hand | Notes |
|---|---|---|
| Fresh 60 | Dreadforge Retaliator, Karazhan Crypt mace, **Dream's Herald** (crafted, ~300 g in mats), Chainsaw + Mirah's Song | [[d:warrior#1490757708180095166]], [[d:warrior#1490761090382954666]] |
| Raid entry | Blackthorn's Blackjack + Mirah's Song | [[d:warrior#1463208588125143050]] |
| MC-BWL | **Ironfoe + Modrag'zan** ("mace set"): top tier through Naxx and 315 skill on any race, but roughly a 1% drop (plan on hundreds of MC runs) | [[d:warrior#1483075345904304158]], [[d:warrior#1483856629832220834]], [[d:warrior#1483024861398827049]] |
| MC-BWL (no mace set) | MH: Deathbringer > Viskag > Modrag'zan > Brutality Blade > Blackjack; OH: Tempest's Rage, Anasterian's Legacy, Ironfoe | [[d:warrior#1477691231667621980]], [[d:warrior#1477691596052103361]] |
| Sword track | Chromatically Tempered Sword/Ripper + Maladath/Crystal Sword of the Blossom → Gressil + Thunderfury/Iblis | [[d:warrior#1449870132628422746]], [[d:warrior#1449866244571402395]] |
| Fist track | Remnants of an Old God + Silithid Claw → + Frostwyrm Claw (315 fist skill on any race) | [[d:warrior#1449870132628422746]], [[d:warrior#1449866868633374870]] |

**Contested:** mace set vs Gressil + THC. Some sims put the mace set ahead, others have Gressil + THC ahead "by a decent margin" on cleave. The mace set lives on procs, and sims may not model proc-fishing well [[d:warrior#1475948954914127933]], [[d:warrior#1484516336490250270]].

Weapon speed for DW: default to a slow main hand and a fast off hand. A much higher-DPS weapon still wins, so check the sim [[d:warrior#1451573901451595789]], [[d:warrior#1434675361773256826]]. Deathbringer is not unique-equip [[d:warrior#1434684588881350788]].

### Raid armor

- **T2** DPS set is "really good" [[d:warrior#1481135908681023669]]. Its 3-piece Overpower haste proc is worth about nothing, so don't chase it [[d:warrior#1486506520828055552]].
- **T2.5 shoulders** are BiS until Naxx/Kara40 alternatives appear. The T2.5 *tank* legs are "the only item that's truly bad for dps" [[d:warrior#1434336667065385121]], [[d:warrior#1434337227911200860]].
- **T3 (Naxx):** worth wearing 4 pieces for the new 4-piece. The ring is the best piece; head and ring are Naxx BiS; shoulders and boots are BiS for all DPS specs [[d:warrior#1464420797539160070]], [[d:warrior#1440540155906887762]]. Off-pieces such as **Plated Abomination Ribcage** and **Carnage Legs** beat the equivalent T3 pieces [[d:warrior#1454281915476480120]]. For 2H, the T3 wrist and ring enable a Sweeping Strikes right off a Bloodrage [[d:warrior#1469088311955030017]].
- **T3.5 / Kara40:** there is no Kara40 DPS plate set. Warriors wear the leather **Dreadslayer** 3-piece plus off-pieces, and much of Kara40 2H BiS is leather [[d:warrior#1473382494668722289]], [[d:warrior#1487340057613434890]], [[d:warrior#1456119679742509168]].
- **Belt:** default to Worldbreaker Girdle rather than contesting the rarer Sash [[d:warrior#1472667858994725165]].
- **Loot priority** (30's framework): Badge of the Swarmguard → DPS warrior first; Kiss of the Spider → non-paladin tanks, then DPS warriors [[d:warrior#1490513251983818916]].

### Trinkets

- **Fresh 60 to BWL:** Diamond Flask + Blackhand's Breadth until Heart of Dreams or better [[d:warrior#1494800298584309821]]. Diamond Flask no longer heals (Turtle removed the flask set and cut its healing coefficient) but is "BiS until naxx" as an on-use [[d:warrior#1494797444234477678]], [[d:warrior#1494798556903505990]]. It shares a 30-second cooldown with Earthstrike and Molten Emberstone [[d:warrior#1489336452205645954]].
- **Raid combos** (30): Kiss/Slayer's, Kiss/Shieldrender (high-armor fights), Kiss/Mark of the Champion, Slayer's/MotC, Kiss/Badge (trash or Anub'Rekhan). Never Heart of Dreams once you have the Naxx trinkets [[d:warrior#1432067711575261305]], [[d:warrior#1432067777690079282]].
- **Picking per fight** (Guts): Badge is best if it gets value, Kiss if the Execute phase matters most, Slayer's on scattered-add fights. Slayer's + HoJ/Mark is "rarely the best combo, but decent everywhere" [[d:warrior#1468275155242586275]], [[d:warrior#1468276118967685120]]. Slayer's frontloads (Medivh); Kiss wins in the Execute phase [[d:warrior#1492246963108708543]].
- **On trash:** Badge > Slayer's > Kiss [[d:warrior#1458159635843518495]].
- **Per-boss tables:** 30 posted full per-boss trinket lists for Naxx [[d:warrior#1459739308478038192]] and Kara40 [[d:warrior#1481575301585571900]]. Examples: Gnarlmoon Kiss/MotC (red side) or Kiss/Slayer's (blue side); Echo and Sanv Kiss/MotC (0-armor targets); Rupturan Kiss/Badge when the three fragments are cleaved.

## Enchants

| Slot | Enchant | Notes |
|---|---|---|
| Head / Legs | +8 Strength (Libram) | 1% haste becomes comparable in late Naxx/Kara40 gear; **contested** [[d:warrior#1460079929789120544]], [[d:warrior#1479849262740148395]], [[d:warrior#1482884212791971952]] |
| Shoulders | Sapphiron (Naxx) enchant | Best. Before it: ZG 30 AP in MC gear, Hyjal 2% haste from T3/Naxx gear [[d:warrior#1454575185054404730]], [[d:warrior#1458012422253051956]]; since the Flurry fix the Sapphiron enchant is clearly ahead of haste [[d:warrior#1464391776650399951]]; ZG's enchant needs only Friendly [[d:warrior#1485707713295155310]] |
| Cloak | small Agility; new Timbermaw recipe gives +7 Agility | [[d:warrior#1477362406211584243]], [[d:warrior#1487664520762757220]] |
| Chest / Bracers | stats / +9 Strength | from a pre-1.18 DW list [[d:warrior#1390683751956091013]] |
| Gloves | +15 Agility (DW); 2H/Arms often +9 Strength once past ~34% crit | [[d:warrior#1424896868311367800]], [[d:warrior#1467622383731867730]] |
| Belt | Obsidian Belt Buckle (+10 Strength) | [[d:warrior#1463102882458107978]] |
| Boots | +15 Stamina over +7 Agility; Minor Speed does not stack with Emerald Blessing | [[d:warrior#1483604132718706718]], [[d:warrior#1450784642172190752]] |
| Rings | +3 all stats (Jewelcrafting) [[d:warrior#1440985379653161041]] | +6 Strength is possible for DW near the crit cap [[d:warrior#1460205381564367013]] (**contested**: "crit cap isnt real" [[d:warrior#1460206930504061013]]) |
| Weapon | **Crusader** ("best through all phases"); new Grand Crusader is a 2H version with more Strength | [[d:warrior#1435226925462458389]], [[d:warrior#1487636606071345314]] |

## Weapon stones and oils

- **Elemental Sharpening Stone** = 2% crit per stone (4% total when dual wielding) [[d:warrior#1435504470548152452]]. Use them on add-heavy segments (Spider Wing).
- **Consecrated Sharpening Stone** gives 108 AP against Undead (an engine quirk). It is better than an Elemental stone once crit is high, and lasts 1 hour [[d:warrior#1452024739521499259]], [[d:warrior#1452026248120238222]], [[d:warrior#1424126800665252001]].
- Undead-Slaying stones beat crit stones while you are below the crit cap [[d:warrior#1463289306201194537]].
- Windfury is an aura on Turtle, so you can sharpen your main hand as well [[d:warrior#1444956037647175884]].
- **Oil of Immolation** resets the swing timer but is "always worth"; macro it onto Berserker Rage for the engage [[d:warrior#1428910850806382612]], [[d:warrior#1430915696845656094]], [[d:warrior#1428910738147250278]].
- **Viscidus:** only real Frost damage counts. Use Frost Oil or Coldrage Daggers; the Icy weapon enchant does not count [[d:warrior#1451617406672961547]], [[d:warrior#1442342150854410291]].

## Consumables and buffs

Turtle raids use **no world buffs** [[d:warrior#1419751583184457878]].

- **Core kit:** Juju Power, Juju Flurry, Elixir of the Mongoose, R.O.I.D.S. (or Scorpok), Mighty Rage Potion, Spirit of Zanza; Goblin Sapper Charges if you have Engineering [[d:warrior#1450216814180307005]], [[d:warrior#1450217099585913005]]. A flask is mandatory in Naxx [[d:warrior#1466476942969540660]].
- **Stacking:** Winterfall Firewater, Juju Power and R.O.I.D.S. stack (1202 → 1347 AP) [[d:warrior#1431713868559814667]]. Juju Power and Elixir of the Giants do not [[d:warrior#1433923153813573694]], [[d:warrior#1433919661363298435]]. Mongoose does not stack with the Emerald Mongoose concoction [[d:warrior#1486113106873679943]]. A Zanza HP or Speed buff stacks with a Blasted Lands Strength or Agility buff [[d:warrior#1468590768569716860]]. Only one food buff applies at a time; Power Mushroom equals Smoked Desert Dumpling and costs less [[d:warrior#1457011759146864703]], [[d:warrior#1457451144509919446]].
- **Casual vs sweaty:** Firewater and Giants survive death and last an hour; optimized players use Juju Power for slightly more AP [[d:warrior#1452787178127097876]].
- **Kara40 additions:** Elixir of Demonslaying (most bosses and trash are demons), resistance potions per boss, Restorative Potions for Echo, Arcane Bombs, target dummies and LIPs for Kruul [[d:warrior#1465807734892138659]], [[d:warrior#1465828169826439208]]. Consumables run about 50-100 g per hour in Naxx and Kara40 [[d:warrior#1440449771524329614]].
- **Community consumables database:** `tinyurl.com/twowconsumes` [[d:warrior#1491113665477218490]].

## Macros and addons

- **Client mods:** SuperWoW (a client DLL, not an addon), Nampower and UnitXP [[d:warrior#1456366788072964210]], [[d:warrior#1378002463109681244]].
- **Macro addon:** use **SuperCleveRoidMacros** ("delete roids and use supercleveroidmacros") [[d:warrior#1481742948914958579]]. A `#showtooltip` line makes the addon overwrite your macro's chosen icon with the showtooltip target's icon; there is a setting to disable this in the addon's support options [[d:warrior#1481769843844714658]].
- **Rage-dump Heroic Strike:** `/cast [mypower:>80]Heroic Strike` [[d:warrior#1481247907062611998]]. Keep Heroic Strike/Cleave on the mouse wheel rather than inside every ability macro [[d:warrior#1446259180825739456]].
- **DW filler:** `/cast Master Strike` / `/cast [nozone:...] Pummel` / `/cast Hamstring` / `/cast Sunder Armor` [[d:warrior#1486117681081090100]]. Use `nozone` to stop Pummel on Medivh, where interrupts add enrage stacks [[d:warrior#1453090956743147632]].
- **Charge/Intercept:** `/cast [nocombat] Charge` + `/cast [combat] Intercept` [[d:warrior#1481988133418434797]].
- **Addons:** SP_SwingTimer (jrc13245 fork, needs SuperWoW) [[d:warrior#1475192862269505749]]; DoiteAuras (WeakAuras-like; ships a warrior profile) [[d:warrior#1470133784522264670]]; the jrc13245 BetterCharacterStats fork with a melee-vs-boss table [[d:warrior#1472015164667723796]]; TrinketMenu [[d:warrior#1437181094754652273]].

## Raid notes

- **MC:** cleave Sulfuron's pack [[d:warrior#1446257693374550119]]. Keep the two "double golems" apart [[d:warrior#1424775608055107654]].
- **BWL:** Sunder on the first GCD even when a paladin tanks Vael; one reviewed log had only 4 stacks after 44 s [[d:warrior#1431722872363024435]]. Melee wear the Onyxia Scale Cloak on Firemaw and Nefarian [[d:warrior#1432580991200919656]], [[d:warrior#1432582059502604378]].
- **AQ40:** Viscidus needs Frost Oil or Coldrage Daggers, and Sappers are "BiS" there [[d:warrior#1430634477323026604]]. Thunderfury's proc mostly loses value against the final bosses, which resist all damage types highly; AQ40 doesn't otherwise have widespread nature-resistant trash [[d:warrior#1469092547405021418]], [[d:warrior#1469092584612823254]].
- **Naxx:** Death Wish twice on long fights [[d:warrior#1424111495624528033]]. On Anub'Rekhan, stand between the flanking guards so Sweeping Strikes + Whirlwind hits the boss three times [[d:warrior#1480309441235648705]]. On Kel'Thuzad phase 1, don't pop Death Wish and then die to the Abomination combo [[d:warrior#1424111737132810465]].
- **Kara40:** see [Tower of Karazhan](../../instances/tower-of-karazhan.md). Kara40 needs 35+ raiders [[d:warrior#1486676103052525569]]. On Kruul, full-DPS Fury off-tanks were "disastrous", but "Rupturan, Sanv, and Mediv, you could easily do as Fury" [[d:warrior#1494362473690697748]], [[d:warrior#1494362782508908555]].

## Common mistakes

- Going 2H Fury in fresh-60 gear with too little crit for Flurry. Play Arms until about 23% unbuffed crit [[d:warrior#1469009070210941099]], [[d:warrior#1493290685703651450]].
- Delaying Bloodthirst or Whirlwind to fit a Slam [[d:warrior#1485723095900618782]].
- Using a fast main hand as DPS [[d:warrior#1494053824065704156]].
- Pushing weapon skill to 316 or more [[d:warrior#1479840926296838307]].
- Heroic Strike spam at low rage, or Heroic Strike during the Execute phase [[d:warrior#1431724717789679626]].
- Stance-dancing for Overpower as DW [[d:warrior#1470401675914117132]].
- Running Heart of Dreams once you have the Naxx trinkets [[d:warrior#1432067777690079282]].
- Trusting sim output for 2H blindly. The sims still disagree by 100-200 DPS on identical setups [[d:warrior#1480951454888890368]].
- Treating the 2026-01-15 "Developer Statement" about Fury being replaced by a "Bard" spec as real. It was an in-channel joke [[d:warrior#1461118596322431241]].
