# Affliction Warlock (DoT / drain DPS)

**Recommendation:** play the pinned post-1.18.1 **35/11/5** build and sacrifice your demon. Keep your assigned curse, Curse of Agony, Corruption and Siphon Life on the boss. Fill every free GCD with **Drain Soul**, and break it for **Nightfall** procs. Cast **Dark Harvest** only when Shadow Vulnerability is up and every DoT has about 10 seconds left, or to finish a dying target. Gear for 6% hit, then spell power and haste. Ignore crit.

| | |
|---|---|
| Role | Ranged DoT/channel DPS; raid curses (Shadow, Elements, Recklessness) |
| Viability (1.18.1) | **A (raid); S (open world and PvP)** — the preferred solo-farming spec [[d:warlock#1479253067709943931]] and the top PvP spec [[d:warlock#1489224572174602251]], [[d:warlock#1491191968494256168]]. It was the default raid spec for most of 1.18.0 [[d:warlock#1459089158302863507]], [[d:warlock#1481757404067533113]]. After release, Demonology took the top boss parses [[d:warlock#1484828741267095563]]. Affliction stays "about as strong as Demo, #1 or close #2" on bosses per the class designer, since it is built for long fights [[d:warlock#1484625922316308482]], [[d:warlock#1484627935171444887]]. The easiest spec to gear and play well [[d:warlock#1433355089749348412]]. |
| Difficulty | Low to medium. The rotation is simple, but good play takes DoT tracking addons and clean channel cancelling. |
| Strengths | 10% free hit from Suppression [[d:warlock#1428561653750042717]]; no crit or pet RNG ("0 RNG so devs can tune it exactly") [[d:warlock#1464854390467854418]]; strong on long and multi-target boss fights (Gnarlmoon, Rupturan, Kruul, Thaddius) [[d:warlock#1435300266822996021]], [[d:warlock#1474517364098859120]] |
| Weaknesses | Weak on fast trash: DoTs barely tick before mobs die [[d:warlock#1334260677631541330]]; no real AoE [[d:warlock#1476324592841789571]]; high threat with no talent to reduce it [[d:warlock#1483588270486196435]]; channels get pushed back and lose ticks |

Players will meet older advice: "Dark Harvest on cooldown" (2025) and "haste breakpoint tables". Both are superseded; see the sections below.

## How to play

The decision loop for a level-60 raid boss with the 35/11/5 build. The reasons and sources are in [Single-target rotation](#single-target-rotation-raid-boss), [AoE and multi-target](#aoe-and-multi-target) and [Cooldowns, resources and threat](#cooldowns-resources-and-threat).

1. **Before the pull:** summon the Imp and **Demonic Sacrifice** it for +4% spell damage. Sacrifice the Succubus instead if you are threat-capped ([Pets](#pets)). Carry a Felstone, or a Voidstone for threat.
2. **Opener:** haste and spell-power cooldowns → assigned curse (Malediction adds Curse of Agony) → Corruption → Siphon Life → Drain Soul. If threat is tight, open Siphon Life → Corruption → curse → Drain Soul.
3. **Single-target loop (top wins):**
    1. Nightfall proc → Shadow Bolt. Break a Drain Soul for it, never a Dark Harvest.
    2. Assigned curse missing → curse.
    3. Curse of Agony missing → Curse of Agony. Malediction does not refresh it.
    4. Corruption missing → Corruption.
    5. Siphon Life missing, and the target will live its full 30 s → Siphon Life.
    6. Dark Harvest only when Shadow Vulnerability is up, every DoT has ≥~10 s left and nothing will interrupt the 8 s channel. Otherwise use it as a finisher ([why](#dark-harvest-why-top-players-barely-use-it)).
    7. Drain Soul as the filler. Cancel it right after a tick.
    8. Life Tap when mana will not cover the next cycle.
4. **Cooldowns:** pop trinkets and potions *before* you (re)apply DoTs, because DoTs keep the buffs they were cast with. Death Coil is your emergency heal. A Limited Invulnerability Potion is your emergency threat drop.
5. **AoE switch:**
    - 1 target: the loop above.
    - 2-3 targets that live longer than ~10 s: curse and Corruption on each, then drain the kill target.
    - Trash that dies in under ~10 s: one Corruption plus Drain Soul, or just your curse.
    - Never dot more than 3 targets.
    - 5+ stacked mobs: spread Siphon Life, then Hellfire or Rain of Fire (warn the tank).
6. **Resources and threat:** Life Tap is your mana; you rarely drink. At ~80-85% of the tank's threat, wand or hold.
7. **Movement:** refresh the instants (curses, Corruption, Siphon Life) and Nightfall Shadow Bolts while you move. Start a channel only once you can stand still (vanilla baseline). Never cast Immolate, and never hard-cast Shadow Bolt.

## Talent build

### Raid 35/11/5 (recommended)

Afraido pinned this build on release day [[d:warlock#1484228321708478635]]. The same shape is the community wiki's "Affliction Drain" link. The only change is **2/3 Demonic Aegis** instead of 2/2 Sinister Pursuit. In 1.18.1 Sinister Pursuit took the old Improved Healthstone slot and speeds up the demon you are going to sacrifice anyway [[d:warlock#1484606088291553392]], [[d:warlock#1484606428130967623]], [[d:warlock#1484607150868136087]].

| Tree | Talent | Points |
|---|---|---|
| Affliction | Suppression | 5/5 |
| Affliction | Improved Corruption | 5/5 |
| Affliction | Improved Life Tap | 1/2 |
| Affliction | Improved Drains | 2/2 |
| Affliction | Improved Curse of Agony | 3/3 |
| Affliction | Fel Concentration | 2/2 |
| Affliction | Grim Reach | 2/2 |
| Affliction | Nightfall | 2/2 |
| Affliction | Soul Siphon | 3/3 |
| Affliction | Rapid Deterioration | 2/2 |
| Affliction | Siphon Life | 1/1 |
| Affliction | Malediction | 1/1 |
| Affliction | Shadow Mastery | 5/5 |
| Affliction | Dark Harvest | 1/1 |
| Demonology | Demonic Embrace | 5/5 |
| Demonology | Soul Entrapment | 3/3 |
| Demonology | Demonic Aegis | 2/3 |
| Demonology | Demonic Sacrifice | 1/1 |
| Destruction | Shadow Vulnerability | 5/5 |

Split **35/11/5**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/warlock?points=FoAKaASDRBFAB-ArCAAB-F` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warlock&t=550012320223210151-053020001-5)) · `talents.turtlecraft.gg/warlock/Z08K2FD1V-5IC06-U`

Why these points:

- **Suppression 5/5** gives 10% hit to Affliction spells only, so you need just 6% from gear [[d:warlock#1432224779875778711]], [[d:warlock#1458088995580936354]].
- **Rapid Deterioration 2/2** is a flat 6% haste on Affliction spells. At rank 2, all of your haste also speeds up DoT ticks; rank 1 applies only half of it [[d:warlock#1442442344384299103]]. It does not affect Immolate, Hellfire or Rain of Fire [[d:warlock#1458924995320217798]].
- **Soul Siphon 3/3** makes Drain Soul hit harder for each Affliction effect on the target, which is why you keep four effects up [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973). Curse of Shadows also counts as an effect [[d:warlock#1473750338766110893]].
- **Malediction** makes Curse of Shadows, Elements or Recklessness also apply your highest-rank Curse of Agony [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504). It does not work with Curse of Tongues, Weakness or Doom [[d:warlock#1442719633319792802]].
- **Shadow Vulnerability 5/5** (the old Improved Shadow Bolt) is a 20% shadow damage debuff. Drain Soul ticks can apply it since 1.18.0 [[d:warlock#1405907548908949636]].
- **Soul Entrapment + Demonic Sacrifice** give extra damage while no demon is out. Sacrificing the Imp gives +4% spell damage; Soul Entrapment gives +6% with no demon [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159).
- Crit and Intellect talents are skipped. DoTs and channels cannot crit [[d:warlock#1492250052742217868]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Threat / Improved Stones (31/17/3)** | Adds Improved Stones 2/2 (Voidstone goes from 10% to 15% threat reduction [[d:warlock#1491435318732132393]]), Fel Domination and Curse of Exhaustion; drops instant Corruption and 2 points of Shadow Vulnerability. The 2 Sinister Pursuit points are only a row filler. | `FAISaICDRBFAB-CrDABBQ-D` ([calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warlock&t=501022321023210151-2530301012-3)) | Summonjutsu: take it when you pull threat; drop it for more Shadow Vulnerability and instant Corruption if you are the only warlock in the raid [[d:warlock#1427532174705295360]], [[d:warlock#1428239572709408909]] |
| **Hit-capped, no Nightfall** | Once gear covers hit, move points from Suppression and Nightfall into range (Grim Reach) or other talents | no full code posted | Lynathel [[d:warlock#1492563860291326090]] (single source) |
| **Keep the pet** | Skip Soul Entrapment/Demonic Sacrifice and run an unsacrificed Succubus for extra damage | none | **Contested:** Bigdots estimates about 10% extra DPS; Gilnean and Wells argue that uptime, positioning and the Succubus's fragility make it worse, and nobody posted test numbers [[d:warlock#1430128305222193213]], [[d:warlock#1430136134310301789]], [[d:warlock#1430162019314831380]] |

!!! warning "Old builds"
    Builds that show points in an Affliction row-4 "Sinister Pursuit" or in Master Conjuror are from 1.18.0 or earlier. 1.18.1 moved Sinister Pursuit to Demonology and removed Master Conjuror [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). Anything with Dark Pact, Amplify Curse or 5-point Fel Concentration predates the 2024 rework.

## Stat priority and caps

1. **Hit to 16% total.** Suppression gives 10%, so get **6% from gear**. With the Emerald Blessing buff you need only 5% [[d:warlock#1432224779875778711]], [[d:warlock#1436885169142370437]]. Players call hit cap the biggest priority for Affliction [[d:warlock#1479188460219928841]].
    - Suppression does not cover Shadow Bolt, Death Coil or other non-Affliction spells [[d:warlock#1491843936715542548]]. Nightfall Shadow Bolts cannot miss [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460).
    - Bug: Curse of Agony applied by Malediction does not get Suppression's hit, so it resists more often than it should [[d:warlock#1468756435428180183]], [[d:warlock#1435342993006788680]].
2. **Spell power (shadow or generic)** and **haste** next. Haste gets more valuable as your spell power rises:
    - About 13 SP per 1% haste at 500 SP and 0% haste; about 14.7 SP per 1% at 500 SP and 10% haste [[d:warlock#1489759140824748163]].
    - About 18 SP per 1% at 700 SP [[d:warlock#1456417176297934992]], and roughly 20 SP at 1,000 SP [[d:warlock#1492214613410844753]].
    - **Contested:** yugi says flat spell damage beats haste [[d:warlock#1492213319711588462]]. Use about 12 SP early and 16+ SP late as your conversion [[d:warlock#1446020637016719370]].
3. **Stamina.** Life Tap turns your health into mana, and the Affliction tier sets have little stamina [Akarui, 2025-07-02](https://forum.turtlecraft.gg/viewtopic.php?p=137847#p137847), [Kentorianx, 2025-01-01](https://forum.turtlecraft.gg/viewtopic.php?p=115165#p115165).
4. **Crit and Intellect: worthless.** DoTs and drains do not crit, so only stamina, shadow damage, hit and haste matter [[d:warlock#1492250052742217868]], [[d:warlock#1436284588421808159]].
5. **Spell penetration:** only against high-resist bosses such as Mephistroth. Resistance cannot go below zero, so extra penetration is wasted [[d:warlock#1483224035738390630]].

!!! note "Haste breakpoints"
    On Turtle, haste shortens a DoT's or channel's duration and tick interval instead of adding ticks [[d:warlock#1464362461795713262]]. The rounding creates apparent "breakpoints" (e.g. 13% and 22-23%) [[d:warlock#1483234390489432064]]. **Contested:** Nezu, Afraido and biloen tested this and found no real DPS cliffs; they call the breakpoint table "a scam many people fell for" [[d:warlock#1483947828341637150]], [[d:warlock#1483949171743391886]], [[d:warlock#1483237141013074162]]. One concrete threshold: Corruption needs 15% haste to fit a 7th tick into its 18 s [[d:warlock#1492252383856824461]]. Do not skip an upgrade to "stay on a breakpoint".

## Single-target rotation (raid boss)

**Opener** (you are the curse warlock):

1. Pop your haste and spell-power cooldowns first (Potion of Quickness, Juju Flurry, racial, on-use trinket). DoTs (and channels) keep the buffs you had when you cast them for their whole duration [[d:warlock#1450450192775123024]], [[d:warlock#1450474907686273055]].
2. **Assigned curse** (Shadows, Elements or Recklessness; 1 s GCD since 1.18.1 [[d:warlock#1465390962552340582]], [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). Malediction adds Curse of Agony.
3. **Corruption** (instant).
4. **Siphon Life.**
5. **Drain Soul.** Its ticks apply Shadow Vulnerability.

If threat is tight, ramp more gently: Siphon Life → Corruption → Curse → Drain Soul. The weakest, longest DoTs go first so the tank can build a lead [[d:warlock#1483664616130347188]].

**Priority list** (top wins):

1. **Nightfall proc up → Shadow Bolt.** It is instant and cannot miss. Break a Drain Soul channel for it, but never break Dark Harvest [[d:warlock#1443543987255251007]], [[d:warlock#1493408492525064273]]. It is worth casting at any haste now that Drain Soul costs mana per tick [[d:warlock#1489735044296736778]].
2. **Assigned curse missing → recast it.**
3. **Curse of Agony missing → Curse of Agony.** Malediction does not refresh a Curse of Agony that fell off on its own, so recast it yourself. A beta tester confirmed this is intended [[d:warlock#1465281355674947646]].
4. **Corruption missing → Corruption.**
5. **Siphon Life missing and the target will live its full duration → Siphon Life** [[d:warlock#1471139622703726806]].
6. **Dark Harvest** only when all three are true: Shadow Vulnerability is up, every DoT has about 10 s or more left, and nothing will interrupt the 8 s channel. Otherwise use it as a finisher on a dying target [[d:warlock#1480626773212397658]], [[d:warlock#1495058358875590898]].
7. **Drain Soul** as the filler. Cancel it right after a tick when you need the GCD, never mid-tick [[d:warlock#1433442818235564052]], [[d:warlock#1438426294005006356]]. It costs mana per tick, so cancelling wastes nothing [[d:warlock#1481381182863052983]].
8. **Life Tap** when mana will not cover the next cycle. Demonic Runes or Dark Runes save a GCD [[d:warlock#1437144597846425671]].

Rules:

- **Never clip a DoT early.** Reapply when it falls off. The one exception: if Siphon Life has under ~5 s left and you have a free GCD, let it finish and then reapply Curse of Agony and Corruption together [[d:warlock#1433432659555647498]].
- **Never cast Immolate** as Affliction [[d:warlock#1478873883200323767]].
- **Never hard-cast Shadow Bolt.** Only Nightfall procs [Grizb37, 2026-04-06](https://forum.turtlecraft.gg/viewtopic.php?p=174185#p174185).
- **Refresh after a cooldown.** When you pop an on-use spell-power trinket, reapply your DoTs so that two full cycles fit inside its window [[d:warlock#1433432574406955119]].

### Dark Harvest: why top players barely use it

- Drain Soul scales about 20% per tick over 6 ticks, roughly 120% spell power in total. Dark Harvest is about 100% [[d:warlock#1489675416837947492]].
- Dark Harvest's 30% faster ticks shorten your DoTs' remaining uptime, which hurts Soul Siphon. It also cannot apply Shadow Vulnerability the way Drain Soul does [[d:warlock#1495057484266606745]].
- A sim at 640 SP / 16% hit, over 180 s, gave about 857 DPS for Drain Soul only and 848 DPS with Dark Harvest [[d:warlock#1473678492687270104]].
- Top parsers run 3-4 DoTs plus Drain Soul and "don't bother" with Dark Harvest [[d:warlock#1495057373352693852]], [[d:warlock#1488508223748177991]].
- Exception: with the **T2.5 5-piece bonus**, Dark Harvest gains a large final tick (400%), which makes it worth casting [[d:warlock#1480617902515425378]], [[d:warlock#1480716025883262986]].
- Casting Dark Harvest when your DoTs have under ~5-6 s left is a loss: they expire mid-channel [[d:warlock#1432456413111914699]].
- Bug: Dark Harvest is supposed to reset its cooldown when the target dies mid-channel, but players report it does not [[d:warlock#1463553707974332500]].

Before 1.18.1 the standard advice was "Dark Harvest on cooldown after a Drain Soul". That changed once Drain Soul became the stronger spell.

## AoE and multi-target

| Situation | What to do |
|---|---|
| Trash that dies in under ~10 s | One Corruption plus Drain Soul, or just your raid curse. "DH without dots is useless" [[d:warlock#1426240600117739610]], [[d:warlock#1424142393946669197]]. In melee-heavy raids, cast Curse of Recklessness and "chill" [[d:warlock#1442597326177828874]]. |
| 2-3 targets that live longer | Curse (with Curse of Agony) on each target and Corruption on 2-3, then Drain Soul or Dark Harvest the kill target [[d:warlock#1434677140795949287]]. How deep to dot depends on raid speed: Curse of Agony on every mob, Corruption on the 2nd or 3rd mob in fast raids (the 1st in slow pugs), Dark Harvest the first corrupted mob [[d:warlock#1491879604653129878]]. |
| More than 3 dot targets | Stop multi-dotting. Beyond 3 targets you spend more time reapplying than draining [[d:warlock#1442927152696786994]]. |
| 5+ stacked mobs | Spread Siphon Life (it heals you a lot), then Hellfire or Rain of Fire for the rest [[d:warlock#1476324592841789571]]. Warn the tank and healers first. |

You need at least ~12% haste for useful trash damage. Raids with 3 warlocks and a shadow priest keep Shadow Vulnerability up on trash and do much better [[d:warlock#1442596122051870914]], [[d:warlock#1442596645924769883]].

Use Cursive's multicurse, e.g. `/cursive multicurse Corruption|HIGHEST_HP` [[d:warlock#1480543912207843470]]. It skips crowd-controlled and out-of-combat targets by default [[d:warlock#1481745133362876457]].

## Cooldowns, resources and threat

- **Mana:** Life Tap is your engine. The T3.5 3-piece returns 25% of Siphon Life's drain (it was 50% before 1.18.1) [[d:warlock#1484639895774298112]]. At 60 you rarely drink.
- **Threat:** warlocks have no threat-reduction talent [[d:warlock#1483588270486196435]]. Your tools:
    - **Voidstone:** -10% threat, 15% with Improved Stones [[d:warlock#1491435318732132393]]. Afraido's table: 90% threat with Demonic Sacrifice (Succubus) or Voidstone, 81% with both, 76.5% with Sacrifice plus Improved Stones [[d:warlock#1483641110197833728]].
    - **Blessing of Salvation** or **Tranquil Air Totem** [[d:warlock#1434332924811149403]].
    - **Limited Invulnerability Potion** as an emergency threat drop [[d:warlock#1437144597846425671]].
    - At ~80-85% of the tank's threat, wand or hold [[d:warlock#1388662907415564491]].
- **Healthstone:** now a single 1,200 HP stone [[d:warlock#1464359558309740597]]. **Spellstone** works like a second healthstone but strips all magic effects from you [[d:warlock#1431716900437496019]]. **Felstone** is the usual stone in groups [[d:warlock#1475274817841397923]], but its healing generates threat, which can pull mobs onto you [[d:warlock#1490122874357551236]].
- **Death Coil** is your only emergency self-heal. Save it.

## Pets

Affliction sacrifices its demon ([Demonic Sacrifice](demonology.md#pets-and-greater-demons)) [[d:warlock#1405348590494285984]]:

- **Imp:** +4% spell damage (default DPS choice).
- **Succubus:** -10% threat, costing about 4% damage vs the Imp [[d:warlock#1404709089526677505]]. With Improved Stones and the Voidstone that is 25% total threat reduction [[d:warlock#1490113578349367536]].
- **Felhunter:** mana regeneration.
- **Voidwalker:** health regeneration for soloing.

In 5-man dungeons, many players keep the Imp for Blood Pact [Campy-TWForum, 2025-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=121650#p121650). After you summon a greater demon or enslave something, you must summon and sacrifice a new demon [[d:warlock#1489967871290380401]].

## Gear

### Pre-raid

- Buy "of Shadow Wrath" greens and start raiding. A full pre-raid BiS list is not needed. Pick up standouts like the Kara10 quest trinket and the Sunken Temple offhand [[d:warlock#1490405673396080743]].
- **Black Morass** (Wardens of Time reputation) gives 6-8 important pre-raid pieces [[d:warlock#1432810852771303486]]: a sword, shoulders and a ring [[d:warlock#1454067454874751132]]. See [Black Morass](../../instances/black-morass.md).
- The **T0.5 questline** gives purple, T1-level pieces [[d:warlock#1435399064022810725]].
- Bigdots' crafted/rep/quest pre-raid set (hit and haste locally capped): Crown of Molten Ascension, Choker of Enlightenment, Grasp of Eternity, Fireproof Cloak, Robe of Sacrifice, Flarecore Wraps, Blade of Infinite Mysteries, Tome of Shadow Force, Felheart Handwraps/Sash/Leggings/Boots, Ring of the Academy, Whip of Encouragement, Orb of Kaladoon [[d:warlock#1440442071616852132]]. **Contested:** Lightemgee calls Robe of Sacrifice worse than crafted alternatives [[d:warlock#1435337510950535249]].
- Community pre-BiS planner (set the filter to dungeon-only): `tylerdelrosario.github.io/WarlockBisDemo/` [[d:warlock#1435397902490009700]].

### Raid (by tier)

| Phase | Key pieces | Sources |
|---|---|---|
| MC / Onyxia | **Gloves of Unwinding Mystery** (2% haste; still BiS into Kara40 despite a spell-power nerf) [[d:warlock#1427929051187773480]], [[d:warlock#1473871102181642300]]. Trinkets: **Whip of Encouragement** (3% haste) over Blackfire Orb [[d:warlock#1437962546748457073]]; Orb of Kaladoon, Talisman of Ephemeral Power [[d:warlock#1423645471037063240]]. Neck: Choker of the Fire Lord if you already have plenty of haste, else Pendant of Instability or Choker of Enlightenment [[d:warlock#1425907674511441973]]. | [Molten Core](../../instances/molten-core.md), [Onyxia's Lair](../../instances/onyxias-lair.md) |
| BWL / ZG / AQ | **T1 (Felheart) 8-piece**; get the Affliction "alternate" turned-in pieces, not the regular set (that one is for Demonology and Fire) [[d:warlock#1459336192393744527]], [[d:warlock#1462507254921170964]], [[d:warlock#1462512197514039316]]. The T1 3-piece (+5% Drain Soul) is worth about 48 SP [[d:warlock#1495056389842931802]]. Offhand from Nefarian's head quest; Cloak of Consumption (ZG) over Drape of Nordrassil [[d:warlock#1445052594333683824]], [[d:warlock#1461295218111287337]]. The T2 5-piece is only about 3% of your damage [[d:warlock#1492552675818999930]]. | [Blackwing Lair](../../instances/blackwing-lair.md) |
| AQ40 / Naxx / ES | **5/5 T2.5** is BiS until Kara40 or T3.5 [[d:warlock#1455490711674683425]], [[d:warlock#1480617902515425378]]. Add T3 off-pieces: belt, ring, and the 4-piece bonus if it fits (Curse of Agony +100% for its first 4 ticks since 1.18.1) [[d:warlock#1479284944386920509]], [[d:warlock#1480541806080037041]]. **Contested:** full T3 8-piece vs the T2.5/T3 mix; Tatica tested full T3 about 50 DPS worse [[d:warlock#1476344494621327480]], [[d:warlock#1476344744249524274]]. The T3 8-piece puts a +2% crit debuff on the target through Corruption, which helps the raid more than you [[d:warlock#1446965911511892090]]. | [Emerald Sanctum](../../instances/emerald-sanctum.md) |
| Kara40 | **T3.5** is the Kara40 target (see Karen's list below). Its 3-piece bonus (extra Siphon Life damage) was cut from 50% to 25% at release, beyond the announced mana-only change [[d:warlock#1484639895774298112]], [[d:warlock#1484604962251083816]]. | [Tower of Karazhan](../../instances/tower-of-karazhan.md) |

Pre-Kara40 BiS (Buubah): 5/5 T2.5, Choker of the Fire Lord, Cloak of the Devoured (or Corruption's cloak), Arcane Accuracy bracers for hit (else Burrower bracers), T3 belt, Ring of the Fallen God, T3 ring or True Band of Sulfuras, Tear trinket, Sapphiron trinket (Whip as the alternative), Wraith Blade, Master Dragonslayer's Orb [[d:warlock#1480617902515425378]].

Late gear (Karen, top Ambershire parser): T3.5 head/shoulders/chest, Choker of the Firelord, Burrower bracers, Gloves of Unwinding Mystery, T3 belt then the Mephistroth belt, Fel Infused Leggings, T3 boots, Noth ring, C'Thun ring, trinkets from Sapphiron / Remains of Overwhelming Power, Desecration or Atiesh [[d:warlock#1473664489575420106]].

**Weapons:** mainhand Kris of Unspoken Names → Silithid Femur / Midnight Haze → Wraith Blade → Desecration. Offhand Almanac of Savagery → Fire Runed Grimoire → Master Dragonslayer's Orb, which stays BiS [[d:warlock#1446556836453941350]]. The **warlock class weapon Thil'phoral** comes from a [Timbermaw Hold](../../instances/timbermaw-hold.md) questline that needs four green-dragon hearts plus ZG and MC clears [[d:warlock#1489308443872333986]], [[d:warlock#1489310499308048405]]. At release it procced only from direct damage; that was fixed so it now triggers from periodic damage too [[d:warlock#1491159244421075177]].

**Proc items to avoid or discount:**

- Most "on harmful spell" procs trigger only on a DoT's first application, never on ticks [[d:warlock#1429245704282308800]].
- **True Band of Sulfuras** procs only from Immolate's cast for Affliction [[d:warlock#1469254689702023331]]. The T3 ring is better [[d:warlock#1459816077600100598]].
- **Bindings of Contained Magic** do not proc from DoTs or channels [[d:warlock#1488921363598016685]].
- The Stormreaver 6-piece and ZG 3-piece procs need direct damage [[d:warlock#1450184439031398471]].
- The Timbermaw Hold hit trinket is bad for Affliction [[d:warlock#1494078222810349641]].

## Enchants

| Slot | Enchant | Source |
|---|---|---|
| Head, legs | ZG enchant (+18 spell power, +10 stamina). It beats the 1% haste enchant for most players | [[d:warlock#1471426216606306376]], [[d:warlock#1477971651240132709]] |
| Shoulders | 2% haste (Hyjal Fading Dream Fragment vendor). The one haste enchant clearly worth it | [[d:warlock#1443298433514606794]], [[d:warlock#1483210452153401545]] |
| Gloves | 1% haste (Hyjal vendor, or the libram enchant whose tooltip says "attack speed") or Shadow Power | [[d:warlock#1459344103803457729]], [[d:warlock#1483215553278640278]] |
| Belt | Stamina buckle (the only warlock option on Ambershire at the time) | [[d:warlock#1459659791050866701]] |
| Cloak | Subtlety (threat) | [community wiki](https://turtle-wow.fandom.com/wiki/Warlock) |
| Weapon, bracers | Spell Power | [community wiki](https://turtle-wow.fandom.com/wiki/Warlock) |
| Rings, neck | Jewelcrafting gems/enchants (spell power); vampirism gems for farming sets | [community wiki](https://turtle-wow.fandom.com/wiki/Warlock), [[d:warlock#1387105091474948126]] |
| Chest, boots | Enchanted Armor Kit (stamina) | [community wiki](https://turtle-wow.fandom.com/wiki/Warlock) |

Enchants that say "attack speed" count as haste and speed up your casts too [[d:warlock#1443298433514606794]].

## Weapon oil, stones and consumables

- **Weapon:** Brilliant Wizard Oil (Blessed Wizard Oil against undead) [[d:warlock#1427210967053373501]].
- **Stone:** Felstone by default; Voidstone if threat is the problem. The Firestone only helps fire spells.
- **Raid kit** (Summonjutsu): Potion of Quickness, Juju Flurry, haste food (Danzo's), Greater Arcane Elixir, Elixir of Greater Shadow Power, Dreamshard Elixir, Dreamtonic, wizard oil. Use runes instead of Life Tap, and keep a Limited Invulnerability Potion for threat emergencies [[d:warlock#1437144597846425671]].
- **Full list** (Karen): Elixir of Fortitude, Dreamshard Elixir, Elixir of Shadow Power, Dreamtonic, Cerebral Cortex Compound, Greater Arcane Elixir, Rumsey Rum Dark Label, wizard oil, Major Mana Potion, the protection potions, Goblin Sapper Charge, speed items [[d:warlock#1427210967053373501]].
- **Food:** eat haste food as Affliction. MP5 food is wasted [[d:warlock#1429951129843794083]].
- **Buffs:** the priest's Chastise haste buff is "OP" for Affliction [[d:warlock#1442869153278202018]]. Small haste buffs stack (2% food, 3% Juju, 5% Quickness) [[d:warlock#1424355105431359600]].

## Macros and addons

- **Required:** SuperWoW + **Cursive** + **Nampower**. Cursive is the most accurate DoT tracker [[d:warlock#1427254934054899753]]. Nampower gives spell queueing and "end channel after the next tick" [[d:warlock#1437083041679016018]], [[d:warlock#1450586465687044197]].
- **ProcDoc** or **DoiteAuras** for Nightfall procs [[d:warlock#1490617621887062047]]. **aDF** tracks Shadow Vulnerability [[d:warlock#1476321702828048415]].
- **ShardCapPlus** caps your soul shards (`github.com/akzkak/ShardCapPlus`) [[d:warlock#1439484446150627460]].
- Drain Soul without clipping a channel [[d:warlock#1443907556878716999]]:
  ```
  /run if not CastingBarFrame.channeling then CastSpellByName("Drain Soul") end
  ```
- A full Cursive priority chain (Siphon Life → Corruption → Curse of Agony) was shared by Frolegacy [[d:warlock#1481741196404723823]]. A simpler Curse of Agony → Corruption → Siphon Life → Drain Soul chain was shared by biloen [[d:warlock#1480624630120185978]].
- Avoid one-button castsequence macros. They cannot see resists or another warlock's DoTs and will clip your own [[d:warlock#1432928172717899902]], [[d:warlock#1425522140253519913]].

## Dungeon and raid notes

- **Curse duty:** talk with the other warlocks and split Shadows, Elements and Recklessness. Malediction gives each of you Curse of Agony anyway. On the Chess event, someone has to keep Curse of Tongues up and reapply it about every 20 s, because Malediction does not work with it [[d:warlock#1464583610047795323]].
- **Mephistroth** ([Tower of Karazhan](../../instances/tower-of-karazhan.md)): about 200 shadow resistance; the crawlers are immune to shadow and the hellfire imps to fire [[d:warlock#1431191081051099246]], [[d:warlock#1483594395763736697]]. Curse of Shadows gives 75 penetration and two penetration enchants 50, so you need about 75 more from gear [[d:warlock#1466803445838119124]]. Alternatively, Eye of Moam plus Curse of Shadows brings him to 5 resistance; Affliction warlocks take turns using the trinket [[d:warlock#1436159410593337435]]. DoTs lose less to resistance than fire spells, so Affliction still edges out Fire there [[d:warlock#1470882969374687373]].
- **Gnarlmoon:** multi-dot the owls. It is the "best use case for playing affliction" [[d:warlock#1483593205508341771]].
- **Kruul and Rupturan:** high armor and hard pet positioning favour Affliction over Demonology [[d:warlock#1435300266822996021]].
- **Thaddius:** Affliction out-damages Demonology (L-star: about 2,100 vs 1,600 DPS), partly because greater demons cannot follow across the gap [[d:warlock#1474519805234249999]].
- **Chess and Anomalus:** Fel Concentration matters on Chess, where a constant shadow aura pushes back channels [[d:warlock#1430506392711594026]]. For Anomalus, L-star wore crafted legs, hat, neck and cloak for about 200 arcane resistance [[d:warlock#1480332373769060568]].
- **Naxx trash:** on squishy trash such as Gothik trainees and the abomination-wing adds, Karen uses Drain Soul instead of Dark Harvest ("DH without dots is useless") [[d:warlock#1426240600117739610]], [[d:warlock#1426240565296631810]].
- **Twin Emperors room (AQ40):** Viscidus needs nature resistance as a gear check [[d:warlock#1428004777605857341]].
- **Channels and turning:** keyboard-turning breaks Drain Soul and Drain Life; mouse-turning does not [[d:warlock#1425565657717542933]].

## Common mistakes

- Hard-casting Shadow Bolt or Immolate.
- Casting Dark Harvest on cooldown, into a knockback, or with under 5 s left on your DoTs.
- Clipping DoTs early, or letting Siphon Life fall off (you lose a Soul Siphon stack).
- Assuming Malediction keeps Curse of Agony up. It does not refresh a Curse of Agony that fell off [[d:warlock#1465281355674947646]].
- Stacking crit or Intellect.
- Skipping the 6% gear hit because "Suppression covers it".
- Keeping the pet on aggressive near a boss. An Imp pulled Kruul early in one raid [Grizb37, 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165986#p165986).
- Letting soul shards overflow, or running out of them. Shards stack to 3 [[d:warlock#1439148601224859680]].
