# Demonology Warlock (pet / greater-demon DPS)

**Recommendation:** in a raid that pulls on time and heals your pet, play the **0/34/17** build. Summon a greater demon before every pull: Felguard for burst and AoE, Infernal for fire-immune bosses and whenever it is off cooldown, Doomguard for single-target. Open with pet attack → curse (Recklessness if you are free to choose) → Shadow Bolt. Once Unleashed Potential reaches 3 stacks, press trinkets, Power Overwhelming and Felstorm. Keep your demon alive yourself with Health Funnel. Gear for about 6% hit, then crit and spell power. Haste does nothing for your demon.

| | |
|---|---|
| Role | Ranged DPS where the demon deals most of the damage; raid curses |
| Viability (1.18.1) | **S (raid bosses) in organised raids, B-C in pugs.** After release, Demonology "took over the throne" [[d:warlock#1484828741267095563]]; players call it "the meta" [[d:warlock#1488319810801631242]]. L-star placed 2nd overall and 4th on trash in a 1:45 Kara40, above the mages [[d:warlock#1485510944653180939]]. It collapses when pulls are late, healers ignore the pet or the raid wipes and burns your greater demon [[d:warlock#1452693343459999847]]. The class designer calls it the highest ceiling but "pretty sweaty" [[d:warlock#1485799496737882152]]. |
| Difficulty | High. You manage cooldowns, pet health, pet positioning and a 3-minute greater-demon timer. |
| Strengths | Highest boss damage; Felguard's Felstorm is "potentially the strongest AoE in the game" [[d:warlock#1474540725000470660]]; hit and crit feed both you and the demon; least gear-dependent spec for a fresh 60 [[d:warlock#1464610780526673920]] |
| Weaknesses | "The cooldown spec" [[d:warlock#1464559519077241029]]: at best about 24 minutes of greater-demon uptime per hour [[d:warlock#1464562452476723223]]. No way to reduce pet threat [[d:warlock#1485689509197774958]]. Greater demons died on most Kara40 bosses before the cleave fix [[d:warlock#1464983131282083900]]. Greater-demon pathing stayed broken from January 2026 to the server's end [[d:warlock#1495335572145836152]]. |

Before 1.18.1, Unleashed Potential only procced from crits, and Demonology was a niche short-fight spec [[d:warlock#1432717115730694276]]. The release made Unleashed Potential proc from any direct damage [[d:warlock#1465390962552340582]], and Demonology rose to the top.

## Talent build

### Raid 0/34/17 (recommended)

"The standard" per Summonjutsu [[d:warlock#1458909437807956143]], posted again after release by Fauxnetic [[d:warlock#1493328003537567986]]. Afraido's pinned release-day screenshot has the same Demonology tree [[d:warlock#1484228436888391690]].

| Tree | Talent | Points |
|---|---|---|
| Demonology | Demonic Embrace | 5/5 |
| Demonology | Soul Funnel | 2/2 |
| Demonology | Fel Intellect | 3/3 |
| Demonology | Fel Domination | 1/1 |
| Demonology | Fel Stamina | 5/5 |
| Demonology | Master Summoner | 2/2 |
| Demonology | Unholy Power | 3/3 |
| Demonology | Power Overwhelming | 1/1 |
| Demonology | Demonic Precision | 3/3 |
| Demonology | Master Demonologist | 5/5 |
| Demonology | Unleashed Potential | 3/3 |
| Demonology | Soul Link | 1/1 |
| Destruction | Shadow Vulnerability | 5/5 |
| Destruction | Demonic Swiftness | 2/2 |
| Destruction | Bane | 5/5 |
| Destruction | Shadowburn | 1/1 |
| Destruction | Devastation | 4/5 |

Split **0/34/17**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/warlock?points=-AoQYBoCDBYFYB-FAVABg` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=warlock&t=-050203150020313531-50250014)) · `talents.turtlecraft.gg/warlock/-523B0CJNJ-UH0A`

Why these points:

- **34 points of Demonology are the entry price.** "You need at least 34 points just to play demo" [[d:warlock#1447698010317262878]]. L-star calls the tree "34 points of straight up tax" with no real choices [[d:warlock#1477986652227113111]].
- **Master Summoner 2/2** is essential. It halves the Inferno and Doomguard cooldowns [[d:warlock#1435426129765990520]] and lets you use your greater-demon cooldowns about twice as often [[d:warlock#1475587639188000959]].
- **Soul Funnel 2/2** keeps demons alive when healers ignore them [[d:warlock#1493328003537567986]]. Health Funnel out-heals raid healers on your pet "by a country mile" and costs no mana [[d:warlock#1448706339974025398]].
- **Soul Link** makes greater demons stay under control for their full duration. Without it they get a growing chance to break free early [[d:warlock#1490963345967419542]]. It also moves 20% of the demon's damage taken to you ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). Take Soul Link **or** Demonic Sacrifice, never both [[d:warlock#1443683130627330332]].
- **Master Demonologist 5/5:** greater demons get +10% crit ("massive") [[d:warlock#1424110154642624546]]; the Imp gets -15% spell costs and never runs out of mana [[d:warlock#1423963068815249548]].
- **Demonic Precision 3/3** passes about 90% of your hit and crit to the demon, plus a flat 3% [[d:warlock#1494313197874970705]].
- **Bane** for faster Shadow Bolt, Searing Pain and Immolate; **Shadowburn** is "too good for only one point to pass up" [[d:warlock#1493328003537567986]].
- **Demonic Swiftness 2/2** if you stay Demonology all raid: it boosts Imp and Succubus damage [[d:warlock#1464612182359670785]], [[d:warlock#1466915530299412655]].
- **Devastation** is crit for you. **Contested:** whether it also raises your demon's crit. W says it does [[d:warlock#1485601104212525188]]; Summonjutsu says it only affects Destruction spells, which demons do not cast [[d:warlock#1465422989519487077]].
- Skipped: Improved Stones (no build takes it) [[d:warlock#1477986652227113111]]; Sinister Pursuit (pet speed; Fauxnetic saw no difference) [[d:warlock#1493328003537567986]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Afraido's pin** | Demonic Swiftness 1/2, Devastation 5/5 | `-AoQYBoCDBYFYB-FANABo` | [[d:warlock#1484228436888391690]] |
| **Fire demo** | Shadow Vulnerability 5 → Cataclysm 5 if you use Searing Pain as your filler | swap in the calculator | Fauxnetic [[d:warlock#1493328003537567986]] |
| **Minimum hit (5/34/12)** | Drop Devastation and Shadowburn for Suppression 5/5 so your Corruption and curse stop being resisted at 6% hit | `F-AoQYBoCDBYFYB-FAV` | Summonjutsu [[d:warlock#1466915530299412655]] |
| **Brainwash-only demo** | If you only swap to Demonology for single bosses, drop Demonic Swiftness | — | Summonjutsu [[d:warlock#1466915530299412655]] |

Top raiders in 1.18.0 swapped between Affliction and Demonology per boss with a Brainwasher and kept two gear sets: haste for Affliction, hit and crit for Demonology [[d:warlock#1433667518836244550]]. See [Which spec for which boss](#which-demon-and-which-spec-per-boss).

## Stat priority and caps

1. **Hit to about 6%, aim for 11-12%.** Your demon inherits about 90% of your hit plus a flat 3% [[d:warlock#1494313197874970705]].
    - Its melee ("orange hits") only needs 8% on a boss, so 6% on you stops those misses [[d:warlock#1486868497693937906]], [[d:warlock#1494350275799023756]].
    - Demon *spells* (Firebolt, Lash of Pain, Torment) and your own spells need the full 16% [[d:warlock#1428816200212680816]].
    - Summonjutsu targets 11-12% [[d:warlock#1486868596096241805]]; Lightemgee says 8-10% "is just fine" [[d:warlock#1494849835294134284]].
2. **Crit.** Past 6% hit, each 1% crit is worth more than 1% hit [[d:warlock#1447742557114077307]]. All your crit goes to the demon as well, and demon melee crits for 200% [[d:warlock#1488619415791734956]], [[d:warlock#1432796175735455885]]. Summonjutsu values crit at about 1.6-1.8× its normal worth for Demonology [[d:warlock#1428821206009643039]]. Above ~30% crit your demon starts to lag slightly behind 1:1 [[d:warlock#1432796175735455885]].
3. **Spell power.** Unleashed Potential gives your demon a share of your spell power as spell power and attack power [[d:warlock#1464540604250722397]]. Generic spell power helps every school. School-specific spell power only helps pet abilities of that school [[d:warlock#1432589769380204655]]. **Contested:** whether the attack-power part uses your highest school or only shadow [[d:warlock#1432720871461617757]], [[d:warlock#1491200463385792663]].
4. **Intellect** (Fel Intellect gives your demon 30% of your Intellect as its spell power [[d:warlock#1484214562004930621]]) and **Stamina** (Fel Stamina, Power Overwhelming's health cost, Soul Link).
5. **Haste: none for the demon.** It only makes Unleashed Potential stack a bit faster [[d:warlock#1488467880667381891]].

Afraido's values at ~1,000 SP: 1% hit ≈ 18 SP, 1% crit ≈ 13 SP for your own damage [[d:warlock#1482828212525469856]].

## Single-target rotation

**Before the pull:**

1. Summon the greater demon for this boss (see [Greater demons](#greater-demons)). Give it time to come in: the Felguard appears 4 s after Demon Gate [[d:warlock#1465390962552340582]]; Ritual of Doom is now a 3 s cast with one helper clicking [[d:warlock#1491589394480627833]].
2. Set the demon's autocasts: Felguard **Cleave on**, **Felstorm manual**; Doomguard **Infernal Blade on** [[d:warlock#1491048996846698547]], [[d:warlock#1442920863576883351]]. Greater demons forget their pet-bar layout every summon [[d:warlock#1423835529673445436]].
3. On short fights, pre-stack Unleashed Potential on the last trash pack. Snapshot it with a trinket, then carry it into the boss [[d:warlock#1465499997721071891]], [[d:warlock#1465503280460333178]].

**Opener:** pet attack (no GCD) → curse → Shadow Bolt until Unleashed Potential has 3 stacks [[d:warlock#1491048996846698547]]. Any direct-damage hit adds a stack, so 3 stacks take about 3 s [[d:warlock#1485512658433343609]]. On the 3rd stack: on-use trinket (The Black Book), Power Overwhelming, Felstorm [[d:warlock#1473595062918185033]].

**Priority list** (top wins):

1. **Pet not attacking → pet attack.** `/script PetAttack();` works when `/petattack` fails [[d:warlock#1483149237691748616]]. After a Take Position, re-issue the attack or the pet stops [[d:warlock#1465463647894765712]].
2. **Power Overwhelming off cooldown and the demon can afford 40% of its base health → Power Overwhelming** (no GCD) [[d:warlock#1491048996846698547]]. Tell your healers, because it slowly kills the pet [[d:warlock#1442919256663789711]]. It also removes CC from the demon [[d:warlock#1440858777116086273]].
3. **Unleashed Potential about to expire (lost to movement) → any direct-damage spell, or one tick of rank-1 Health Funnel or Mana Funnel** [[d:warlock#1458913059501506673]].
4. **Curse missing → curse.** When you are free to choose, use **Curse of Recklessness**: greater demons deal physical damage, and it also helps the tank's threat [[d:warlock#1487040479907287240]].
5. **Corruption, only if it will run its full duration** [[d:warlock#1491048996846698547]]. On trash, add Immolate/Corruption only if mobs live longer than ~18 s [[d:warlock#1483907298123448390]].
6. **Shadow Bolt** as the filler. On short fights, use 2 Searing Pain + Shadowburn, or 3 Searing Pain, to rebuild stacks faster [[d:warlock#1491048996846698547]]. Shadowburn while moving [[d:warlock#1442919256663789711]].
7. **Demon below ~50% and no AoE coming → Health Funnel.** Life Tap when low on mana.

**Unleashed Potential snapshot rules:** the spell power it transfers is captured on the **first** stack, and the attack-power conversion on the **last** stack [[d:warlock#1485403135118807141]], [[d:warlock#1490120774319603772]]. Pop spell-power trinkets so they are active on the 3rd stack [[d:warlock#1473595062918185033]].

## AoE and trash

- **Felguard is your AoE.** Felstorm plus Hellfire topped a dev's AoE parse: Hellfire 32%, pet melee 15%, Felstorm 12% of the damage [[d:warlock#1464960947918733333]]. Felstorm has no threat reduction; let the tank AoE-taunt first or the Felguard dies [[d:warlock#1474540725000470660]].
- On trash: deploy the demon, keep a greater demon alive, Curse of Recklessness, then Shadow Bolt. Add Immolate/Corruption only on mobs that live over ~18 s [[d:warlock#1483907298123448390]].
- Infernal plus Power Overwhelming plus 3-stack Unleashed Potential plus Hellfire does top AoE on stacked trash [Momohomo, 2026-04-06](https://forum.turtlecraft.gg/viewtopic.php?p=174180#p174180).
- **Thresholds:** 1-2 targets: single-target rotation. 3+ stacked targets that live more than a few seconds: Felstorm, then Hellfire if the tank holds threat. Fast trash: curse and Shadow Bolt only.
- Anub'Rekhan is the "absolute demo boss" for Felstorm [[d:warlock#1436396975485354085]].

## Greater demons

| Demon | Get it | Cooldown (with Master Summoner) | Best for | Sources |
|---|---|---|---|---|
| **Infernal** (Inferno) | Warlock quest, level 50+, or the book from LBRS warlocks (~5% drop) [[d:warlock#1493689857091047464]] | 5 min | Lowest cooldown, good single-target and AoE, fire immune. Its punches are physical and go through dragon resistances [[d:warlock#1424158415739027640]] | [[d:warlock#1464562452476723223]], [[d:warlock#1485736529501491250]] |
| **Felguard** (Demon Gate) | Grimoire of Demon Gate, a BWL drop, also sold on the Auction House | 15 min | Hardest AoE (Felstorm), strong single-target | [[d:warlock#1458616931610525756]], [[d:warlock#1492711038184067205]], [[d:warlock#1485736529501491250]] |
| **Doomguard** (Ritual of Doom) | Warlock quest, level 60 (a Free Action Potion beats the War Stomp stuns [[d:warlock#1485500197906809004]]) | 30 min | Single-target plus utility (Cripple, War Stomp); one helper clicks | [[d:warlock#1485736529501491250]], [[d:warlock#1491589394480627833]] |

Rules:

- **They last 3 minutes under your control**, then break free [[d:warlock#1475274817841397923]], [[d:warlock#1473055953212670163]]. Once free, they attack only you [[d:warlock#1412415297054445610]]. They cannot be re-enslaved [[d:warlock#1440630522350145596]].
- **Anti-grief:** a greater demon dies the moment it aggroes another player (a tank taunt, a healer's healing threat) [[d:warlock#1442922075617493094]]. A demon that broke loose is deleted if the raid heals more than ~600 HP nearby [[d:warlock#1489971548717580419]]. Finish yours with Power Overwhelming before the timer ends [[d:warlock#1475217712006434837]].
- **Healing:** enslaved and greater demons take 50% less healing since 1.18.1 [[d:warlock#1464645266173858024]], [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). Healers should not bother; use Health Funnel [[d:warlock#1464989010383605901]].
- **No raid buffs** on greater demons [[d:warlock#1438226555762507876]], and no Salvation, totem or Voidstone threat reduction [[d:warlock#1485689509197774958]]. Pet-damage set items from dungeon sets do not work on them either [[d:warlock#1432493570711097346]].
- **Cooldown loop** for a fast clear: Felguard, Infernal, Doomguard, Infernal, Felguard, Infernal [[d:warlock#1445296157445328958]].
- Carry Infernal Stones and Demonic Figurines; soul bags hold them and can refund them [[d:warlock#1434554125634502677]].
- Before summoning the Doomguard, pre-pop a Fire Protection Potion and Frozen Runes so you survive the channel [[d:warlock#1466194002767249498]].

### Which demon and which spec per boss

| Boss / raid | Choice | Source |
|---|---|---|
| Kara40 Gnarlmoon | Infernal (Soul Link, moons, owl aura and ravens kill greater demons); many swap to Affliction here | [[d:warlock#1482836194642362511]], [[d:warlock#1483593205508341771]] |
| Kara40 Incantagos | Felguard | [[d:warlock#1482836194642362511]] |
| Kara40 Anomalus | Doomguard (swap to Infernal if it dies); pre-stack Unleashed Potential because the fight is short | [[d:warlock#1482836194642362511]], [[d:warlock#1465499997721071891]] |
| Kara40 Chess | Felguard does well. The Knight cleaves hard: park demons far behind it with Take Position, then re-issue attack | [[d:warlock#1465463647894765712]], [[d:warlock#1464960947918733333]] |
| Kara40 Medivh | Ideally Felguard | [[d:warlock#1482836194642362511]] |
| Kara40 Kruul, Rupturan | High armor and pet positioning favour Affliction | [[d:warlock#1435300266822996021]] |
| MC / BWL / Onyxia fire-immune bosses | Doomguard is not better than a Succubus on most of them [[d:warlock#1479532127539302613]]. The fire-immune Infernal is the exception: it can tank Firemaw's aura for full uptime [[d:warlock#1479597163641307216]], [[d:warlock#1424158274630058054]] |
| MC Shazzrah | **Contested:** one player skips the Infernal (arcane melts it); others say it has 80% AoE reduction, and a Doomguard works (arcane immune) | [[d:warlock#1442914859284173051]], [[d:warlock#1442924839840252057]], [[d:warlock#1442926108491120834]], [[d:warlock#1442926190464860362]] |
| Naxx Anub'Rekhan | Felguard (Felstorm on the adds) | [[d:warlock#1436396975485354085]] |
| Naxx Thaddius | Greater demons cannot follow across the gap. Summon the Infernal after the adds and park the pet in the middle stack spot; Affliction is often better | [[d:warlock#1474519805234249999]], [[d:warlock#1474517364098859120]] |

See also [Tower of Karazhan](../../instances/tower-of-karazhan.md), [Molten Core](../../instances/molten-core.md), [Blackwing Lair](../../instances/blackwing-lair.md).

## Pets and greater demons

All warlocks use this section; Demonology keeps its pet, while Affliction and Destruction sacrifice theirs [[d:warlock#1405348590494285984]].

| Demon | Role | Notes |
|---|---|---|
| **Imp** | Ranged damage, Blood Pact (stamina), Fire Shield, Phase Shift | Best in dungeons, where it stays out of trouble [[d:warlock#1455572117692354725]]. With Unleashed Potential at 45% of your spell power, the Imp out-damaged the Succubus in solo dummy tests [[d:warlock#1492066975055347782]]. Imp spell power comes from its Intellect, so Fel Intellect matters most for it [[d:warlock#1491197283134341284]]. |
| **Voidwalker** | Tank; Torment (threat), Sacrifice (shield), Consume Shadows | The leveling pet [[d:warlock#1427685348158345257]]. Torment is a fixed threat amount, not a true taunt. New ranks come every 10 levels, so it struggles at levels X7-X9 [[d:warlock#1433032936160100373]]. |
| **Succubus** | Melee damage, Lash of Pain, Seduction, Lesser Invisibility, Soothing Kiss | Strongest leveling damage from level 20 once you can support her [[d:warlock#1429055507032965211]]. In raids she needs melee buffs (Windfury, Strength totem, Might) and dies to cleave [[d:warlock#1492092028589314048]]. Turn off Lash of Pain autocast, because it cancels Seduction [[d:warlock#1465198561955418367]]. |
| **Felhunter** | Devour Magic, Spell Lock, Paranoia, Tainted Blood | Utility and PvP pet [[d:warlock#1480688101943808205]]. Manual Devour Magic can eat mechanics such as Chronar's reflect in Kara40 and the Kara10 Smoke Bomb [[d:warlock#1443502653916315648]], [[d:warlock#1443664601941016678]]. |

**Which lesser demon in raids (Demonology):** Succubus when no greater demon is up and your group has melee buffs; Imp if the raid has Kings and no melee support [[d:warlock#1464612558785876153]], [[d:warlock#1464613525845442571]]. Caveat: while a warrior's Battle Shout is on a lesser demon, it cannot gain Unleashed Potential stacks (bug, reported Jan 2026) [[d:warlock#1464813724891091156]], [[d:warlock#1465022340378267709]].

**Pet scaling** (W's pinned table) [[d:warlock#1488156105111633930]]:

| | Attack power → weapon damage | Spell-power scaling of max-rank spells |
|---|---|---|
| Voidwalker | 20% | Torment 60%, Sacrifice 120%, Suffering 40% |
| Succubus | 40% | Lash of Pain 60% |
| Felhunter | 30% | — |
| Imp | — | Firebolt 40% |
| Infernal | 60% | Immolation 25% per tick |
| Felguard | 60% | Legion Strike 60%, Felstorm 25% per tick |
| Doomguard | 60% | Infernal Blade 5% per tick, Rain of Fire 8.3% per tick |

Demons get spell power equal to their own Intellect [[d:warlock#1484210226877173851]]. Their only attack power source is Unleashed Potential [[d:warlock#1491196645344280667]].

**Pet management:**

- Keep pets on passive or defensive before pulls. A pet on aggressive pulled Kruul early in one raid [Grizb37, 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165986#p165986).
- Pets can sit idle after a Fear ends. Setting them to Follow fixes it [[d:warlock#1484680647015661578]].
- Lesser demons take raid-wide *aura* buffs (Prayer of Fortitude, Arcane Brilliance, Gift of the Wild, totems, paladin auras, Battle Shout) if they are summoned when the buff goes out, but not single-target buffs [[d:warlock#1438226555762507876]]. World buffs also stick to lesser demons [[d:warlock#1448821157762695212]], [[d:warlock#1448771130109198398]].
- The walking-only Onyxia buff gives pets a lot of crit through Demonic Precision; walk instead of flying to keep it [[d:warlock#1448447465601630229]].
- Pets vanish on loading screens (boats, zeppelins) and must be resummoned [[d:warlock#1488017534639800370]].
- After a server crash a pet can lose its abilities and name; rebuy the grimoires [[d:warlock#1428133618324209836]].
- **Demonic Sacrifice** (Affliction/Destruction): Imp +4% spell damage, Succubus -10% threat, Voidwalker 3% health per 4 s, Felhunter 3% mana per 4 s [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159).

## Cooldowns, resources and threat

- **Power Overwhelming:** 40% of the demon's *base* health (changed from total health) [[d:warlock#1464796045426036829]]; no GCD.
- **Fel Domination:** instant re-summon for when the pet dies mid-fight or you need a Voidwalker shield [[d:warlock#1475587639188000959]].
- **Mana:** Demonology has the worst mana economy of the specs [[d:warlock#1440503674555334688]]. Life Tap, the Imp's cost reduction, mana potions. L-star skips Potion of Quickness because mana runs out ("quickness is a luxury only affli can afford") [[d:warlock#1465503280460333178]].
- **Threat:** Demonology is often threat-capped [[d:warlock#1464845857131069511]]. Greater demons can out-threat tanks "straight up" a minute into a fight [[d:warlock#1439153407679139882]], and they cannot receive Salvation [[d:warlock#1439154466782969958]]. Your only options are pulling the demon back or letting it die [[d:warlock#1485689509197774958]].

## Gear

- **No tier set is built for Demonology.** "Get some hit, some crit" [[d:warlock#1483624063388618843]]. Demonology and Destruction default to the T1/T2 sets; T2.5 and T3 default to the Affliction versions and must be exchanged at the token vendor [[d:warlock#1484147919224307813]].
- **T2 3-piece** is flat spell power [[d:warlock#1440503674555334688]]. **T3 8-piece** beats T2.5/T3.5 mixes for Demonology, except standout pieces such as the Leggings of Polarity [[d:warlock#1476858402679558224]]. T3 boots, chest and shoulders are pre-Kara40 BiS; add the head or belt for the 4-piece [[d:warlock#1460408263341379685]].
- **The Black Book** (BWL) is "the best thing for demonology warlocks hands down" [[d:warlock#1446169503003185325]]; it is as mandatory as Mind Quickening Gem is for mages [[d:warlock#1464549191551553745]]. Hit gear plus The Black Book is the point where Demonology passes Affliction [[d:warlock#1489707890246680646]].
- **Pet trinkets:** the Ancient Cornerstone Grimoire (Onyxia) gives +5% pet and enslaved-demon damage and health since 1.18.1 [[d:warlock#1479499241583018158]]. A rare in Moonwhisper Coast drops a trinket with +3% demon damage [[d:warlock#1485510693149999174]]. The AQ20 Unspoken Names ring set 2-piece gives +5% pet damage [[d:warlock#1489351729274159245]]; whether it works on greater demons is unconfirmed [[d:warlock#1487525502825660566]].
- **Weapons:** Bag of Whammies is near-best until the Sapphiron eye or the AQ scepter [[d:warlock#1446182452870516899]]. Later: Black Morass sword or Lucid Nightmare plus an offhand, or Shadow Wing Focus Staff [[d:warlock#1487941642945167370]]. The Onyxia staff from Broodcommander Axelus (80 SP, 1% crit, summons whelplings) works for early BWL [[d:warlock#1488194472461336576]]. Between two pieces, take the one with more hit [[d:warlock#1492270349268815912]].
- **MC phase targets:** stay above 500 SP and 25% crit while adding hit; BWL belt and bracers are the next hit pieces [[d:warlock#1432788355820552305]]. For hit, Angelista's Grasp (BWL belt) [[d:warlock#1485403461787979828]].
- **Naxx-level example** (Summonjutsu's log): T2 helm with the ZG enchant, Dianna's Pearl Necklace, T3 shoulders, Cloak of Consumption, Bracers of Arcane Accuracy, T2 gloves/pants/boots, T3 belt, AQ20 set ring, Band of Concentration, The Black Book, Wraith Blade, Bag of Whammies, Wand of Fates [[d:warlock#1452170616206790758]].
- Cloak: Sapphiron's cloak over Drape of Nordrassil [[d:warlock#1457332041967341752]].

## Enchants, oils and consumables

- **Enchants:** the same slots as [Affliction](affliction.md#enchants), but take spell power, crit and hit over haste, since haste does not help your demon [[d:warlock#1488467880667381891]]. Head/legs: ZG enchant [[d:warlock#1452170616206790758]].
- **Weapon:** Wizard Oil or Blessed Wizard Oil [[d:warlock#1452170616206790758]].
- **Stones:** Felstone for groups; Firestone for dungeons and solo play [[d:warlock#1475274817841397923]]. Firestone crit does **not** carry over to your demon [[d:warlock#1424158818945732658]].
- **Raid kit:** Flask of Supreme Power, Greater Arcane Elixir, Elixir of Shadow Power or Greater Firepower, Dreamshard Elixir, Dreamtonic, wizard oil, spell-damage food [[d:warlock#1452170616206790758]], [[d:warlock#1464517853670539376]]. Elixir of Shadow Power boosts both the Succubus's melee and Lash of Pain; Firepower only Lash of Pain [[d:warlock#1423994093650055292]].

## Macros and addons

- **Cursive + SuperWoW + Nampower** as for every warlock (see [Affliction](affliction.md#macros-and-addons)).
- **Greater-demon timers:** KevinTracker [[d:warlock#1479627645816803356]] or Necrosis (the `pylebecq/necrosis-twow` fork works after 1.18.1) [[d:warlock#1485287910810063008]]. Unleashed Potential shows as a buff since 1.18.1 ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)); DoiteAuras can track it too [[d:warlock#1464375454076240055]].
- **Pet bars reset** on every summon. Use a macro that fires the pet abilities by name with `CastSpellByName()` [[d:warlock#1489264224944525402]]. Calamitos shared a Felguard auto-cast macro [[d:warlock#1442920863576883351]].

## Common mistakes

- Summoning a greater demon mid-fight or with under 3 minutes of boss left; letting it time out and turn on you.
- Popping trinkets before the 3rd Unleashed Potential stack.
- Power Overwhelming on a low-health pet during AoE; not telling healers.
- Forgetting to re-set Felstorm to manual and Cleave to autocast after each summon.
- Leaving the pet in unavoidable damage: Four Horsemen marks, Thaddius, Sapphiron's blizzard, Heigan's dance [[d:warlock#1400326250769289267]], [[d:warlock#1418726573242323167]].
- Letting Felstorm run before the tank has AoE threat.
- Taking Demonic Sacrifice together with Soul Link.
- Stacking haste as Demonology.
