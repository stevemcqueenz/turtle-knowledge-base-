# Survival Hunter (melee DPS)

**Recommendation:** play the melee **16/0/35** build (through Untamed Trapper, plus Coordinated Assault in BM). Dual-wield two good weapons for single-target bosses and switch to a slow two-hander for trash and cleave. Put your abilities on one spam macro: **Raptor Strike, Immolation Trap, Mongoose Bite, Lacerate, Carve**, with Wing Clip as the last filler. On packs, **Explosive Trap and Carve** come first. Stack Agility. Get melee hit to 8%, or more when dual-wielding, and weapon skill toward 315.

| | |
|---|---|
| Role | Melee physical DPS with in-combat fire traps; Trueshot Aura (baseline) |
| Viability (1.18.1) | **S (raid overall), S (farming), A (PvP), B (leveling before 40, A after).** "For overall dps in raid survival is still best" [[d:hunter#1489032257317507102]]; "surv still mogs MM" [[d:hunter#1486510805460582470]]; the best AoE of the three specs [[d:hunter#1492997613157617848]]. On single target MM and Survival sim about equal [[d:hunter#1491704423427342497]]. |
| Difficulty | Low: "surv can just do their one-button rotation and do more dps" [[d:hunter#1485679555783164149]] |
| Strengths | AoE and cleave; benefits from melee buffs (Windfury, Battle Shout) that ranged hunters miss [[d:hunter#1437768822114226196]]; facetanks trash adds with dodge and leech [[d:hunter#1462598609374543882]] |
| Weaknesses | Fire traps are dead weight on fire-immune bosses (much of MC and almost all of BWL) [[d:hunter#1489292976243867808]], [[d:hunter#1480208996706156644]]; melee mechanics; mana hungry; Feign Death is less reliable in melee range [[d:hunter#1494689825419165921]] |

!!! note "What changed in 1.18.1"
    - **Lacerate:** 40% of AP (was 35%) and +15% damage from the side; it no longer ticks faster from the side [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).
    - **Vicious Strikes** again raises Raptor Strike and Mongoose Bite damage.
    - **Surefooted** gives +3% extra hit while dual-wielding.
    - **Alone Against the World** is new (+3/6% damage with no pet out).
    - **Coordinated Assault** dropped from 30% to 20% (all [Jamey (staff), 2026-01-23 / 2026-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)).

    Players summed it up as "lacerate side damage, raptor strike and mongoose bite got buffed; only Coordinated Assault went down" [[d:hunter#1488832787128647792]]. Survival's Coordinated Assault damage fell to roughly a third or a quarter of what it was [[d:hunter#1484615674688176158]]. Survival is otherwise the 1.18.0 melee kit: Carve, Mongoose Bite on both weapons, and traps in combat through Untamed Trapper.

## How to play

The level-60 decision loop for the 16/0/35 build. Details are in the sections linked below.

1. **Opener:**
    1. Send the pet as the tank hits [[d:hunter#1484689822005067816]].
    2. Rapid Fire, on-use trinkets and Blood Fury on the pull ([cooldowns](#cooldowns-and-defensives)).
    3. Start auto-attack.
2. **Single-target loop:** one spam macro ([rotation](#single-target-rotation)).
    1. Raptor Strike.
    2. Immolation Trap. Skip it on fire-immune targets and on dying ones.
    3. Mongoose Bite.
    4. Lacerate, from the flank.
    5. Carve.
    6. Wing Clip only when nothing else is ready.
3. **Cooldowns:**
    - Rapid Fire and trinkets on pull.
    - Deterrence as the "just in case" defensive.
    - Feign Death early: in melee you pull aggro at 110% of the tank's threat.
4. **AoE switch rule** ([AoE](#aoe-rotation)):
    - **2 targets:** add Explosive Trap.
    - **3+ targets:** Explosive Trap → Carve → Raptor Strike → Mongoose Bite → Lacerate → Wing Clip.
    - Use the two-hander for packs and dual-wield for bosses ([DW vs 2H](#dual-wield-vs-two-hander)).
5. **Resource rule:** Aspect of the Viper is for trash and farming, not boss fights [[d:hunter#1464367550312874156]]. Otherwise watch trap mana ([resources](#resource-and-threat-management)).
6. **Movement and situational:**
    - At range, use baseline Steady Shot [[d:hunter#1466006006126477313]].
    - On fire-immune bosses, drop fire traps from the macro ([raid notes](#raid-notes)).
    - Do not Carve into crowd control.

## Talent build

### Raid 16/0/35 (recommended)

This is the most-posted Survival code across the 1.18.0 and 1.18.1 trees. It was confirmed as still good right after release ("Looks ok") [[d:hunter#1485417701500260444]], [[d:hunter#1485417975870914580]].

| Tree | Talent | Points |
|---|---|---|
| Beast Mastery | Swift Aspects | 5/5 |
| Beast Mastery | Improved Primal Aspects | 3/3 |
| Beast Mastery | Improved Revive Pet | 2/2 |
| Beast Mastery | Coordinated Assault | 1/1 |
| Beast Mastery | Unleashed Fury | 5/5 |
| Survival | Improved Slaying | 3/3 |
| Survival | Resourcefulness | 5/5 |
| Survival | Swift Reflexes | 2/2 |
| Survival | Savage Strikes | 2/2 |
| Survival | Survivalist | 1/5 |
| Survival | Carve | 1/1 |
| Survival | Deterrence | 1/1 |
| Survival | Stinging Nettle | 2/2 |
| Survival | Surefooted | 3/3 |
| Survival | Killer Instinct | 3/3 |
| Survival | Trap Mastery | 3/3 |
| Survival | Lacerate | 1/1 |
| Survival | Vicious Strikes | 2/2 |
| Survival | Lightning Reflexes | 5/5 |
| Survival | Untamed Trapper | 1/1 |

Split **16/0/35**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/hunter?points=FADCBo--dQCABJTAbIQoB` · `talents.turtlecraft.gg/hunter/U321U--NCC078IL8V`. [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=500302015--35202000111230331251)

Why these points:

- **Untamed Trapper** (the 31-point capstone) lets you drop traps in combat. It is also the only source of trap scaling: traps scale with AP "from the 31-point talent" and never with spell power [[d:hunter#1486589864207057069]], [[d:hunter#1486579356875886692]].
- **Lightning Reflexes 5/5** doubles Agility's conversion to melee AP. Without it, 1 Agility = 1 melee AP; with it, about 2.2. Losing it costs over 700 AP in Naxx gear [[d:hunter#1473303832703406234]], [[d:hunter#1473305949220634645]].
- **Swift Reflexes** (the haste talent) is "great" for Survival and "meh" for MM [[d:hunter#1486306222624870501]].
- **Coordinated Assault** stays even after the nerf: "Think CA is mandatory. If you dont go CA I assume it's not worth rocking a pet" [[d:hunter#1484446154602057778]]. It is a hunter melee attack. It uses your melee AP and main-hand weapon and can proc Windfury, but only while you are in melee range [[d:hunter#1489330996787544365]], [[d:hunter#1490149747766591648]].
- **Vicious Strikes:** with a slow two-hander, the 2nd point adds nothing, and 1/2 "feels more fluent" [[d:hunter#1447201318476316763]] (1.18.0 math, single source).
- **Surefooted** can be swapped for Survivalist or Improved Feign Death once you are hit-capped [[d:hunter#1461555138748481628]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Petless 8/0/43** | Drops Coordinated Assault, Unleashed Fury and Improved Revive Pet; adds **Alone Against the World 2/2**, Planning Ahead, Improved Feign Death, Survivalist 4 | `FAD--cQCCUJTCbIQoB` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=5003--34202022411232331251)) | Powercore [[d:hunter#1484559818193637628]]. Pet plus Coordinated Assault is normally 10–15% of Survival damage [[d:hunter#1477437644941164667]], [[d:hunter#1483846991493595227]], more than the +6%. The rule of thumb: go petless if pet + CA is under ~6% [[d:hunter#1469017796771057798]] |
| No-trap Survival (BWL) | Move trap points to pet damage on fire-immune raids. The Goblin Brainwashing Device has a 10-minute cooldown [[d:hunter#1437150169748607006]] | — | "so im going no trap surv for bwl" [[d:hunter#1480208996706156644]] |

## Stat priority and caps

1. **Agility.** It gives melee AP (×2.2 with Lightning Reflexes), crit and dodge. 1 Agility ≈ 2.6+ effective AP [[d:hunter#1485975870316216472]]. Strength is always worse [[d:hunter#1475843185803788288]].
2. **Hit:** the soft cap is **8%** for both 2H and DW special attacks [[d:hunter#1486732672683347988]].
    - **Dual-wield:** white hits need far more. The hard cap is 28% [[d:hunter#1489021201153134692]], but players run about **11–13%**, because the dual-wield talents give "6% for free" [[d:hunter#1494465610652975275]], [[d:hunter#1494459349131857981]].
    - Each 5 weapon skill above 300 is 1% hit and less glancing damage, up to 315 [[d:hunter#1485763124253425858]]. Get weapon skill "as high as you can, to 315": about 40% of DW Survival damage is white hits [[d:hunter#1487845942529888279]]. Weapon skill shown on the character sheet does not include this hit [[d:hunter#1494466030301352057]].
3. **Crit.** It is worth less than for MM: traps, the Lacerate bleed and Serpent Sting do not crit [[d:hunter#1428685173079277679]], [[d:hunter#1428692514109522002]]. From T3 onward, take crit over haste [[d:hunter#1483031941178593281]], [[d:hunter#1483034612103118999]].
4. **Haste.** It only speeds white swings. It was valued at 20–40 eAP before the Strike Together nerf [[d:hunter#1488442215729594449]], and is less favored since [[d:hunter#1494831344424063198]].
5. Spell power only boosts the Serpent Sting that Mongoose Bite, Wing Clip and Stinging Nettle traps apply. It is not worth buying for Survival [[d:hunter#1486579356875886692]].

Consensus stat line: **Agility > crit > haste > hit (8% 2H, ~13% DW)** [[d:hunter#1475246044374896640]].

## Single-target rotation

The whole rotation fits in one spam macro. "No reason to not just do that like 90% of the time" [[d:hunter#1485146611129651291]]. Sofie's macro (needs `/startattack` from an addon, or auto-attack started manually) [[d:hunter#1485147064102031453]]:

```
/cast Raptor Strike
/cast Immolation Trap
/cast Mongoose Bite
/cast Lacerate
/cast Carve
/cast Wing Clip
```

Priority (bot-ready):

1. **Raptor Strike** on cooldown.
2. **Immolation Trap** on cooldown, but not on fire-immune targets or on a target about to die. Carve beats a trap on a dying mob [[d:hunter#1448582581980499978]], [[d:hunter#1451997607705444677]].
3. **Mongoose Bite** on cooldown. **Contested:** some put Mongoose first and Raptor second [[d:hunter#1488178738528124948]]; Sofie puts Raptor first [[d:hunter#1488177971733991627]].
4. **Lacerate.** Its direct hit scales from AP, not weapon damage [[d:hunter#1469009847549821202]]. It gets +15% from the side, so stand at the flank.
5. **Carve.** It is worth pressing even on one target [[d:hunter#1448546351657914440]].
6. **Wing Clip** only if nothing else is ready or about to be ready [[d:hunter#1488178991918485585]].

Setup: send the pet as the tank hits [[d:hunter#1484689822005067816]]. For a Raptor: Bite + Savage Rend, Growl off in raids; Claw on bleed-immune bosses [[d:hunter#1428016626455937097]], [[d:hunter#1462729876296695900]]. At range (movement phases), use baseline Steady Shot, e.g. on Heigan's dance [[d:hunter#1466006006126477313]].

## AoE rotation

| Targets | Do |
|---|---|
| 1 | Single-target macro |
| 2 | Add Explosive Trap to the single-target macro [[d:hunter#1448541614208192602]] |
| 3+ | **Explosive Trap → Carve → Raptor Strike → Mongoose Bite → Lacerate → Wing Clip** [[d:hunter#1485147064102031453]] |

- Most of Survival's AoE damage comes from Explosive Trap, not Carve [[d:hunter#1466765084671082496]]. Carve hits up to 5 targets [[d:hunter#1308700408952131634]].
- Carve uses only your main-hand weapon, so a two-hander hits harder in AoE [[d:hunter#1426288674412167249]], [[d:hunter#1460280510730469490]].
- Do not trap packs that are already almost dead, or that are fire-immune [[d:hunter#1451997607705444677]].
- Do not macro Carve into careless pulls: it breaks crowd control [[d:hunter#1430199806076129431]].

## Dual-wield vs two-hander

**Recommendation: dual-wield for single-target bosses, a two-hander for cleave and trash.** "I use dw for single target bosses and 2h for aoe. both are good" [[d:hunter#1486020316697464993]].

- **DW wins on single target.** You get two weapons' worth of stats and more Swift Aspects procs [[d:hunter#1493259706570117261]]. Mongoose Bite hits with both weapons [[d:hunter#1428305905749065850]]. With good weapons "DW always beats 2H" [[d:hunter#1494446524417966200]]. One tester (Sofie) ran matched gear on a dummy and found DW clearly ahead of 2H [[d:hunter#1465688438832369887]].
- **2H wins on packs.** A two-hander's higher damage ceiling makes Carve spikes bigger [[d:hunter#1493259706570117261]].
- **Your weapons decide.** "If you have a Naxx 2H and only dual wield from BWL, I would definitely take the 2H" [[d:hunter#1493259706570117261]]. Dresche runs DW for Anomalus, Medivh and maybe Kruul in Kara40, and a two-hander (Rak'ishi spear) elsewhere [[d:hunter#1486704971306237963]].
- **Weapon speed:** slow weapons are better, because Raptor Strike, Mongoose Bite and Carve use the weapon damage roll [[d:hunter#1440666315416404058]], [[d:hunter#1440669671085838466]]. Put the slowest weapon in the main hand for Raptor Strike [[d:hunter#1476054305961279580]]. Daggers are too fast [[d:hunter#1465653967290630290]]. Gressil (slow) + Kingsfall (fast) is a top-parser pairing [[d:hunter#1472418682331336714]].
- Dresche's DW-vs-2H math sheet: `docs.google.com/spreadsheets/d/1b5wfBLYoopE7_4r2lhrJHx395K1AlZKx8qMeu821nW4` [[d:hunter#1486732029663117362]].
- Mongoose Bite registers as a single main-hand hit, so off-hand on-hit procs never trigger from it [[d:hunter#1485244528091725907]], [[d:hunter#1485281275613941821]].

## Cooldowns and defensives

| Tool | Use |
|---|---|
| Rapid Fire, on-use trinkets, Blood Fury | On pull; Blood Fury does not stack with Molten Emberstone [[d:hunter#1456621926540644466]] |
| Deterrence | "Just in case" defensive; with Improved Aspect of the Monkey it reaches ~90% avoidance [[d:hunter#1408483316390428682]]; it gates the lower tree [[d:hunter#1484556782461386762]] |
| Feign Death | Resist chance depends on proximity to the target, which hurts melee [[d:hunter#1494689825419165921]]. FD cannot be resisted if you break line of sight [[d:hunter#1445841760583680000]]. It dodges Onyxia's fear but not Nefarian's [[d:hunter#1486905964799066203]], [[d:hunter#1486924058879852695]] |
| Trinket swaps | `/script PetPassiveMode();` `/cast Feign Death` `/equip <trinket>` (press twice), or TrinketMenu with a delay [[d:hunter#1460871398762348638]], [[d:hunter#1482834856533819493]] |

## Resource and threat management

- Survival is mana hungry. You tank most packs while leveling, and in raids traps are expensive. The T2.5 3-piece bonus, or the T3 6/8-piece bonuses, return mana on trap and Serpent Sting hits [[d:hunter#1472876279106637835]], [[d:hunter#1456836699777798339]].
- Aspect of the Viper (level 56) is for trash and farming, not boss fights [[d:hunter#1464367550312874156]].
- As melee you pull aggro at 110% of the tank's threat, versus 130% at range, and you have no threat-reduction talent [[d:hunter#1318265159327682571]]. Use FD early.
- Geared Survival can facetank Majordomo's and Razorgore's adds with dodge and leech [[d:hunter#1462598609374543882]].
- Leech from Improved Aspect of the Wolf only applies to melee hits, not traps [[d:hunter#1477736889611063418]], [[d:hunter#1489361184116445315]].

## Gear

### Two-handers by phase

| Phase | Weapon | Source |
|---|---|---|
| Pre-raid | Black Morass quest polearm (Halberd of the Bronze Defender), "pre-BiS for Survival" [[d:hunter#1425877927790121060]], [[d:hunter#1448456940958257193]] | [Black Morass](../../instances/black-morass.md) |
| MC | Spinal Reaper, Bonereaver's Edge; Obsidian Edged Blade is okay [[d:hunter#1425660645986271393]], [[d:hunter#1421937910466347068]]; Zin'rokh is an easier alternative [[d:hunter#1457027950200356936]] | [Molten Core](../../instances/molten-core.md) |
| BWL | Ashkandi [[d:hunter#1421937910466347068]]; **Untamed Blade** is underrated because its proc rate is much higher than on classic [[d:hunter#1487378843365806101]] | [Blackwing Lair](../../instances/blackwing-lair.md) |
| ES / AQ40 / Ony | ES easy-mode quest polearm, Barb of the Sand Reaver and the new Onyxia polearm are near-equal top 2H on Ambershire [[d:hunter#1487376085195817091]] | [Emerald Sanctum](../../instances/emerald-sanctum.md), [Onyxia's Lair](../../instances/onyxias-lair.md) |
| Naxx | Eye of Nerub, "BIS until K40" [[d:hunter#1464788031629426909]] | |
| Kara40 | Rak'ishi spear (Sanv) or the Kruul axe, interchangeable sidegrades [[d:hunter#1421937910466347068]], [[d:hunter#1445913510679941121]] | [Tower of Karazhan](../../instances/tower-of-karazhan.md) |

### Dual-wield pairs by phase

| Phase | Pair | Source |
|---|---|---|
| MC / Ony | Double Deathbringer, or Brutality Blade/Vis'kag + Tempest's Rage/Anasterian's Legacy [[d:hunter#1460813637785751646]] | |
| BWL | Deathbringer + Crul'shorukh (simmed BiS) [[d:hunter#1491222440750350426]]; Crul'shorukh + Crystal Sword of the Blossom [[d:hunter#1478462367787384999]] | |
| AQ40 | 2× Blessed Qiraji Pugio with the MC dagger-skill gloves [[d:hunter#1461668210939003033]]; Bile-Covered Gauntlets (Bug Trio) are the DW gloves, with Blood-Drenched Grips (Mandokir) as the budget pick [[d:hunter#1479926388567052342]] | |
| Naxx | Gressil + Hungering Cold [[d:hunter#1461476514590625917]]; Hatchet of the Sundered Bone + Crul'shorukh with Ouro gloves (+6 skill) [[d:hunter#1463559439222050837]] | |
| Kara40 | Gressil + Bloodmoon, Sickle of the Murderous Flight / Riftcarver's Implement [[d:hunter#1421933433663524975]] | |

Weapon-skill items by type: ZG gloves (axe), AQ20 gloves (sword), MC boots (2H sword), MC gloves (2H axe), Edgemaster's Handguards [[d:hunter#1430134609634398229]]. The +5 weapon skill quest (island south of Ratchet, 250g plus an ancient text) covers both one- and two-handers of a type [[d:hunter#1461492019221368894]], [[d:hunter#1461492808459223082]].

### Armor

- **Tier:** use full T2 until you have 4 pieces of T3 [[d:hunter#1476138962983714898]]. T3 is far better than T2: 300–350+ AP more in raw stats alone [[d:hunter#1469940735078830225]].
- **Neck:** Nefarian's (30 Agility) beats Onyxia's [[d:hunter#1481968493883559936]]. Prestor's Talisman is also strong [[d:hunter#1486209562263556156]].
- **Cloak:** Ragnaros's cloak (Turtle-buffed, 26 Agility, 1% haste) [[d:hunter#1441209567777390602]].
- **Rings:** Band of Accuria is "#1 ring till naxx"; its hit also helps DW [[d:hunter#1470163715868332093]], [[d:hunter#1448205998883082402]].
- **Pre-raid** (June 2025, still mostly valid): Sightless Leather Hood, Mark of Fordring, Bloodsoul Shoulders, Earthweave Cloak, Ogre Forged Hauberk, Bracers of the Eclipse, Gauntlets of Deftness, Marksman's Girdle, Plaguehound Leggings, Miasma Walkers, 2× Tarnished Elven Ring, Blackhand's Breadth + Royal Seal of Eldre'Thalas, Spear of the Endless Hunt [[d:hunter#1380797500428124273]]. Add the Shen'dralar cape and dagger [[d:hunter#1425877055329009695]].
- **Trinkets:** Blackhand's Breadth + Hand of Justice as passives; swap to Devilsaur Eye or Molten Emberstone for bosses [[d:hunter#1429526897720692870]], [[d:hunter#1463846948200124426]]. Earthstrike and Molten Emberstone share a cooldown [[d:hunter#1432143189694873731]].

## Enchants per slot

| Slot | Enchant | Source |
|---|---|---|
| Two-hander | **+25 Agility** beats Crusader: it is permanent, while Crusader can go long stretches without a proc [[d:hunter#1485975870316216472]], [[d:hunter#1485978606118375564]] | |
| Dual-wield | +15 Agility on both, the community favorite [[d:hunter#1427404145412931731]]. Crusader wins on a very fast weapon such as Thunderfury [[d:hunter#1480833707010166814]] | |
| Head / Legs | +8 Agility. **Not** the ZG Falcon's Call enchant: it gives only ranged AP, "a relic of vanilla" [[d:hunter#1441326520831316051]], [[d:hunter#1476147765078790174]] | |
| Shoulders | Naxx Might of the Scourge long-term [[d:hunter#1428724072581173340]]; early on, 8 Agility beat 1% haste [[d:hunter#1425925508322951181]]; ZG exalted 30 AP [[d:hunter#1476147765078790174]] | |
| Bracers / Gloves / Boots / Cloak / Chest | Agility everywhere; +7 Agility bracers; chest +3 stats [[d:hunter#1467696283010732295]], [[d:hunter#1461748119606792446]] | |
| Weapon imbue | Elemental Sharpening Stone (melee crit), or Consecrated Sharpening Stone vs undead [[d:hunter#1476059796166676633]], [[d:hunter#1461412239335489640]] | |

## Consumables (raid kit)

No world buffs work in raids [[d:hunter#1484988762441252997]].

- **Sofie's Naxx kit:** Consecrated Sharpening Stone, Danonzo's Tel'Abim Surprise, Elixir of the Mongoose, Flask of the Titans, Juju Might, Potion of Quickness, Spirit of Zanza, Ground Scorpok Assay [[d:hunter#1476059796166676633]].
- **Elmgren's checklist adds:** Elixir of the Giants, Firewater (melee AP is what you want here), Sour Mountain Berry, Agility/Strength scrolls, and Demonic Runes for long fights [[d:hunter#1463846948200124426]].
- **Stacking traps:**
    - Juju Power does not stack with Elixir of the Giants [[d:hunter#1486561195228926154]].
    - Elixir of Greater Firepower does **not** boost fire traps [[d:hunter#1486571963035025510]].
    - Squid Eel Skewer now stacks [[d:hunter#1494296665740283934]].
    - Sour Mountain Berry stacks [[d:hunter#1488735368239910924]].
- **Food:** Agility food over haste food [[d:hunter#1471383928152653928]].
- **Ammo** barely matters for Survival ("Non-Survival Hunter Problems") [[d:hunter#1461325421550502031]].

## Raid notes

- **Fire immunity.**
    - MC: Ragnaros, Baron Geddon, Firelords, Firewalkers, Flameguards and Lava Spawns are immune. Garr and Golemagg are **not** [[d:hunter#1452953866319691816]], [[d:hunter#1452954051615395861]]. Many MC bosses are bleed-immune [[d:hunter#1466150205702279343]].
    - BWL: only Razorgore, Broodlord, Chromaggus and Nefarian's first phase take fire [[d:hunter#1480211021858603150]]. Play "no trap surv" there [[d:hunter#1480208996706156644]].
- **Sapphiron:** place Immolation Trap directly under his belly where he spawns [[d:hunter#1446435489006747739]].
- **Big hitboxes** (Ouro, Sapphiron, Thaddius) may not trigger traps [[d:hunter#1315383703429578752]] (reported 2024).
- **Spec swaps:** many Survival raiders switch to MM for Ragnaros or for Kara40 Rupturan and Mephistroth [[d:hunter#1447672710829310054]], [[d:hunter#1446047436425400394]].
- **Kara40:** Rupturan cannot be hit in melee until phase 2, and then only its adds. Kruul's mechanic punishes melee [[d:hunter#1409557442777448499]]. See [Tower of Karazhan](../../instances/tower-of-karazhan.md).
- **Nefarian:** the hunter class call breaks all equipped weapons [[d:hunter#1487930456031625327]].

## Macros and addons

- The spam macros above. Traps are situational, so some players keep them off the main button [[d:hunter#1447674320733343764]].
- `/startattack` needs CleveRoidMacros (or RoidMacros); it can cause screen stutter [[d:hunter#1435580561031692309]], [[d:hunter#1435581117615968306]]. Minimal melee macro: `/startattack` `/cast Raptor Strike` `/cast Mongoose Bite` [[d:hunter#1435300925005893742]].
- SP_SwingTimer for the melee swing timer [[d:hunter#1393547088884662443]]. DoiteAuras 1.8.7 tracks the Lacerate proc [[d:hunter#1495027341800509510]].
- Nampower can skip the trap in a multi-cast macro [[d:hunter#1476926654306844682]]. It only queues the last `/cast` line [[d:hunter#1459030784806748311]].

## Common mistakes

- Dropping fire traps on fire-immune bosses, or on nearly dead packs [[d:hunter#1451997607705444677]].
- Casting Wing Clip while anything else is ready [[d:hunter#1488178991918485585]].
- Buying spell power for traps [[d:hunter#1486579356875886692]], or using Greater Firepower [[d:hunter#1486571963035025510]].
- Using a two-hander's ZG head/leg enchant: it is ranged AP only [[d:hunter#1441326520831316051]].
- Stopping at +5 or +8 weapon skill with dual-wield [[d:hunter#1487845942529888279]].
- Leveling as melee Survival before level 40, when in-combat traps arrive (see [Leveling](leveling.md)).
