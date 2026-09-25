# Druid

Druids on Turtle WoW 1.18.1 fill every role from four specs that share three talent trees:

- **Feral Bear** is a real main tank: the best sustained single-target threat and the biggest health pool, weaker since 1.18.1 in the first seconds of a pull.
- **Feral Cat** is a strong single-target melee DPS on bleedable bosses, with no AoE at all.
- **Restoration** is a strong HoT raid healer, but a raid wants only one or two.
- **Balance** (Moonkin) is the lowest DPS spec in the game, brought for its utility.

**New player recommendation:** level as **Feral** (Feral Swiftness first, respec into Omen of Clarity at 30) and tank or heal your dungeons on the way; see [Leveling](leveling.md). At 60 pick Bear to tank, Cat to melee, or Restoration to heal. "All 4 specs are viable at endgame and brought to raids. Feral leveling is fastest, balance is viable. Leveling as resto sucks" [[d:druid#1412860092692299806]].

## Pages

| Page | What it covers |
|---|---|
| [Leveling](leveling.md) | Validated Feral and Balance talent orders 10-60, the kill loops, weapons by level, dungeons, the Swift Travel Form questline, professions |
| [Feral Cat](feral-cat.md) | The 11/35/5 bleed/Claw build, bleedable vs bleed-immune rotations, Reshift rules, the bleed-immunity map, gear, idols, enchants |
| [Feral Bear](feral-bear.md) | The 11/35/5 tank build, threat vs mitigation sets, the pull, the 1.18.1 threat nerf, AoE threat, resistances |
| [Balance](balance.md) | The 37/0/14 raid build, Eclipse and Balance of All Things after 1.18.1, hit cap, Hurricane, idols |
| [Restoration](restoration.md) | The 18/0/33 Tree build, HoT priorities and ranks, raid slots, tier sets, Tranquility |
| [PvP](pvp.md) | Feral, Balance and hybrid PvP builds, sequences, matchups, flag carrying |
| [Sources](sources.md) | Where this comes from, the experts relied on, gaps |

## Roles and viability

| Spec | Raid | Dungeon | PvP | Leveling | Open world / farming |
|---|---|---|---|---|---|
| **Feral Bear** | **A** (contested): "Bears are actually BiS tanks at top-end raiding" [[d:druid#1492451220055527514]], but paladins now win pull threat [[d:druid#1486521085968257054]] | **S**: "the best all-around dungeon tank" [[d:druid#1491518238188638258]] | **B**: the best flag carrier (see Feral Cat) | **S**: tank every dungeon while leveling [[d:druid#1413144334336790652]] | **B**: solos Hateforge Quarry and Crescent Grove bosses [[d:druid#1478392073538506842]], [[d:druid#1478392342237941780]] |
| **Feral Cat** | **B**: A- on bleedable bosses, B on immune ones [[d:druid#1479171231205822576]]; falls off in Kara40 [[d:druid#1491817394287411230]] | **B**: good single target, zero AoE [[d:druid#1472862240754372713]] | **B**: whole-kit objective play; C for Alliance against shamans [[d:druid#1487165021715697816]] | **S**: the fastest leveling spec [[d:druid#1460978795996647568]] | **B**: "not a good DME farmer" [[d:druid#1446164034079690783]] |
| **Balance** | **C**: ~40% behind the top DPS; 1-2 per raid for utility [[d:druid#1491219031611543693]], [[d:druid#1467488518191448271]] | **B**: DPS or heal; AoE only with the T3.5 set | **B-**: good in team fights, weak 1v1 [[d:druid#1484894770546348143]] | **B**: about half Feral's speed [[d:druid#1487860224646840442]] | **A**: furbolg farm without drinking, Princess solo [[d:druid#1487355446288449566]], [[d:druid#1493729456622141710]] |
| **Restoration** | **A**, slot-capped: good all endgame, priests now ahead [[d:druid#1487184318668345544]] | **A**: both resto builds heal every 5-man [[d:druid#1455277051883028721]] | **C**: the worst PvP healer [[d:druid#1421054886526849065]] | **C**: do not level as resto [[d:druid#1412860092692299806]] | **C** |

Micro Jackson's post-patch PvE ratings out of 10: Bear 9.5, Cat 8, Resto 7, Boomkin 4 [[d:druid#1485199599760314529]]. Tephus's summary: "end game boomkin is kind of a gambling sim, end game cat is schizo, end game bear is great but simple, end game resto has lots of variety" [[d:druid#1473680065425576088]].

The class carries a "hybrid tax"; whether that is fair is the channel's longest argument. The class designer's view: "any class that can fulfill more than one role will have some sort of tax" [[d:druid#1484802546043453501]]; players reply that paladins and shamans are hybrids too [[d:druid#1487028901883547668]].

## What changed for druids in 1.18.1

1.18.1 ("Nightmares of Ursol") released 2026-03-20 ([Jamey, 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). The community summary: "Bear = threat nerf, Cat = no change, Boomies = look like buff but it is a nerf" [[d:druid#1484692349174022437]].

| Area | Change | What it means in play |
|---|---|---|
| Bear | Maul threat modifier 175% → 160%, Savage Bite 225% → 213% [[d:druid#1470128951165718528]], [[d:druid#1472870879418646640]] | About 10-20% less threat in practice, mostly in the first 10 s [[d:druid#1484585026158067752]]; still top sustained threat. Feral Instinct becomes a must [[d:druid#1464363900014170358]] |
| Balance | Balance of All Things 5 → 3 points, now needs your DoT on the target (Wrath refunds mana vs Insect Swarm; Starfire +3/6/9% crit vs Moonfire); Eclipse procs 40%/60%; Moonfury 4/8/12% ([Jamey](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)) | Longer Starfire casts; less RNG; roughly the same ~40% DPS gap [[d:druid#1492151406159859824]] |
| Balance | Two new idols (Equilibrium, Acidity) [[d:druid#1484609254613848137]] | Both weaker than Ebb and Flow [[d:druid#1488415746592604160]] |
| Cat | No changes: "no time to look at Cats" [[d:druid#1465407973789663324]]; the Kara40 Shieldrender Talisman was nerfed [[d:druid#1472658472666661025]] | Same rotation as 1.18.0 |
| Resto | T3.5 5-piece Blooming Bud cut to a 20 s timer [[d:druid#1473498333854044355]]; Tree of Life aura now updates from current Spirit [[d:druid#1476011073952940083]] | The set bonus is near worthless; no more aura snapshot trick |
| All | Swapping idols in combat costs a GCD [[d:druid#1477688732374138960]] | Idol-dancing rotations are dead |
| All | Iron Counterweight can go on staves [[d:druid#1484615359334973663]] | Atiesh bears get 3% haste |
| All | New **Fortune** stat (raises item proc chances) [[d:druid#1472758768050770075]] | Useless in Cat/Bear Form, where chance-on-hit never procs [[d:druid#1474308205592051722]] |
| Other classes | Holy Paladin T3.5 set cut ~83% [[d:druid#1465682266171768934]]; priest Renew buffed [[d:druid#1486046284728238142]]; paladin snap threat buffed [[d:druid#1486521085968257054]] | Resto lost its top-healer spot to priests; bear lost pull threat to paladins |

Earlier Turtle changes you will meet in older guides:

- **Reshift** (1.18.0): drops and re-enters your form in one click; the modern powershift and snare-break button [[d:druid#1378737675791503360]], [[d:druid#1459797275575587023]].
- **Omen of Clarity** is a passive, not a buff you cast, and procs far more often than in vanilla [[d:druid#1425437731009597611]], [[d:druid#1441278912335450282]].
- **Wolfshead Helm** became a head enchant from a repeatable Moonglade quest [[d:druid#1426547464323993703]], [[d:druid#1493535288524275722]].
- **Manual Crowd Pummeler** no longer works in form [[d:druid#1462513205434650823]].
- The **hit cap** is 8% melee (no +3-level suppression) [[d:druid#1491668912226435324]].
- **Moonkin Form** at level 30 [[d:druid#1444986843350433802]]; Mark and Gift of the Wild castable in Moonkin Form, but not Rebirth [[d:druid#1350057620215431168]], [[d:druid#1473443440191864896]].
- **Armor has no hard cap**; bear armor is useful to ~23k [[d:druid#1470162624392986675]].
- Most **consumables and bandages work in Cat/Bear Form**, but sappers and grenades cancel it [[d:druid#1476736618466381834]], [[d:druid#1473126693303615643]].
- In Cat and Bear Form your weapon is a **stat stick**: its damage, speed and "chance on hit" do nothing; "Equip:" effects work [[d:druid#1444040448451678338]].
- **Swift Travel Form** (100% speed) comes from a level-60 questline that needs the Emerald Sanctum; see [Leveling](leveling.md#swift-travel-form-level-60).

## Races and racials

| Race | Racials that matter | Best for |
|---|---|---|
| **Night Elf** (Alliance) | +1% haste, +1% dodge, +1% movement speed [[d:druid#1473355471065710714]], [[d:druid#1473414027135684793]]; Shadowmeld, which also passively lowers enemy stealth detection while you Prowl [[d:druid#1430669659405025362]] | The PvE min-max pick [[d:druid#1482116247696183336]]; faster travel to Karazhan and the Stormwind Vault [[d:druid#1433157395466686568]] |
| **Tauren** (Horde) | +5% Stamina ("no items in the game give you that") [[d:druid#1433157395466686568]]; War Stomp (not usable in forms) [[d:druid#1473364798971314256]]; Plainsrunning [[d:druid#1478423976576548995]] | PvP and Hardcore [[d:druid#1482116247696183336]], [[d:druid#1469077605557997689]]; slightly more bear HP, "technically better ... but it may as well be irrelevant" [[d:druid#1466179284690403505]] |

Only Night Elves and Tauren can be druids; High Elf druids exist only as a player request [[d:druid#1161955507628687370]]. Faction also decides access to one 1% spell-hit ring for casters [[d:druid#1445869015393239235]].

## Professions

- **Engineering** is the one profession with unique raid tools [[d:druid#1435986342378213439]], but most gadgets and all sappers do not work in Cat or Bear Form, so it is a poor fit for ferals [[d:druid#1485983739757592748]], [[d:druid#1472200959798022301]].
- **Herbalism + Alchemy:** raid consumables and mana potions for healers [[d:druid#1461063036465840300]]; you can herb from Swift Travel Form [[d:druid#1493356486368170186]].
- **Leatherworking:** Elemental Leatherworking crafts the Convergence of the Elements leggings, a feral BiS piece [[d:druid#1491826525689872485]]; useful while leveling, low value later [[d:druid#1472200959798022301]].
- **Gathering first** when you start: crafting is a money sink early [[d:druid#1482785431626977433]].
- Turtle adds ring and neck enchants (Jewelcrafting) and belt buckles (Blacksmithing) [[d:druid#1491824430819573891]], [[d:druid#1491824487942062091]].

## Raid order

Community difficulty order: Kara10 = ZG = AQ20 > Onyxia > MC > BWL > Emerald Sanctum > AQ40 > Timbermaw Hold > Naxx > Kara40 [[d:druid#1491822859398418473]]. Run [Lower Karazhan Halls](../../instances/lower-karazhan-halls.md) alongside [Molten Core](../../instances/molten-core.md); some Kara10 gear beats early MC gear [[d:druid#1490927470176632862]]. The [Emerald Sanctum](../../instances/emerald-sanctum.md) unlocks the Emerald Blessing raid buff and the Swift Travel Form quest [[d:druid#1491495730790142162]].
