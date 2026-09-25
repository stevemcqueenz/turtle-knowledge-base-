# Arcane Mage (ranged DPS)

**Recommendation:** Arcane is the mage raid spec in 1.18.1. Play **43/8/0**. Get **16% spell hit** (10% comes from Arcane Focus, so you only need about 6% from gear and buffs), then stack **spell power and haste** roughly equally, with crit behind them. Keep the **Arcane Rupture** debuff up, fill with **Arcane Missiles**, press **Arcane Surge** only while your total haste is low, and burn **Mind Quickening Gem → Arcane Power** together at full mana. On trash, spam **Arcane Explosion** with the same build.

| | |
|---|---|
| Role | Single-target and AoE ranged caster (Arcane Missiles channel, Arcane Rupture keystone, baseline Arcane Surge) |
| Viability (1.18.1) | **The mage meta.** Around 80-90% of raiding mages play it [[d:mage#1488090240580190382]]. The top-50 Kara40 mage parses were about 40 Arcane to 10 Fire [[d:mage#1483200337451028752]]. Called "30-40% stronger than frost for PvE" and the most consistent spec, because its many small RNG rolls even out [[d:mage#1464614790407127153]], [[d:mage#1465737132768231517]]. Arcane is also the easiest spec to gear into raids [[d:mage#1471836459270017075]]. Fire can beat it on long single-target fights such as Patchwerk, but there are few such fights in Naxx and Kara40 [[d:mage#1485940669942988930]]. |
| Difficulty | Medium. The basic loop is simple; the ceiling is haste snapshotting, clean Missile cancels and cooldown timing |
| Strengths | 10% hit from talents; best AoE of any mage spec; almost nothing in PvE resists arcane; least gear-dependent spec [[d:mage#1425934816251220068]], [[d:mage#1426190199460987002]] |
| Weaknesses | 30-yd range; Arcane Power can kill you if you run out of mana [[d:mage#1479235845629153411]]; Kara40's Anomalus and the trash around it are arcane-immune [[d:mage#1454543299540025457]]; "bursty but super squishy" [[d:mage#1439706644022824960]] |

## How to play

The level-60 decision loop. The details, with sources, are in the sections below.

1. **Opener:** on-use SP trinket → `Arcane Rupture` → `Arcane Missiles` → `Arcane Rupture` → `Mind Quickening Gem` + `Arcane Power` → Missiles spam ([Single-target rotation](#single-target-rotation)) [[d:mage#1468008389048008928]]. Many players hold `Presence of Mind` at the pull for threat reasons (see the opener notes).
2. **Single-target loop, outside Arcane Power:**
   1. `Arcane Missiles` on Clearcasting.
   2. `Arcane Rupture` whenever the debuff is missing. Cancel Missiles for it right after a missile lands.
   3. `Arcane Surge` when it lights up (after a resist) and your total haste is under the [Surge cutoff](#haste-caps-measured).
   4. `Arcane Missiles`.
3. **During Arcane Power (or any big haste window):** `Arcane Rupture` if the debuff is missing, otherwise `Arcane Missiles`. No Surge and no Presence of Mind in this window [[d:mage#1486059691699343402]].
4. **Cooldowns:** `Arcane Power` only at full mana, since it kills you if you run out [[d:mage#1439011377133129900]]. Pop `Mind Quickening Gem` first and Arcane Power near the end of MQG [[d:mage#1484204264791216199]]. Juju Flurry and Potion of Quickness go inside Arcane Power. Full table in [Cooldowns](#cooldowns).
5. **AoE switch: 3+ targets,** spam max-rank `Arcane Explosion`. Pre-stack Sigil of Ancient Accord with rank-1 Explosion before the pull. Drop an Explosion rank if you pull threat off the tank ([AoE rotation](#aoe-rotation)).
6. **Mana:** Mage Armor always. Gems, tea and runes between Arcane Power windows. `Evocation` just before a server tick, cancelled after the 4th tick ([Mana](#mana), [[d:mage#1452736983209083033]]).
7. **Movement:** `Fire Blast`. It can also fish a resist that enables Surge [[d:mage#1454567964413264118]].

## What 1.18.1 changed for Arcane

- **No Arcane talent changed.** The community summary was "Nothing for mage is changing... Frost is getting better damage, that's all" [[d:mage#1484356989961240717]].
- **Improved Fire Blast** now cuts Fire Blast's GCD. This is why the raid build puts 3 points there [[d:mage#1486320286940004443]].
- **Scythe of Elune:** the internal cooldown on its Elune's Wrath proc (about 15 s) is now enforced. Before, Arcane could keep the debuff up almost permanently, so this was "a considerable power loss for arcane" [[d:mage#1487149928877789285]], [[d:mage#1488090233068322956]].
- **T3.5 "Mirror Magic" 3-piece:** Arcane Explosion, Flamestrike, Cone of Cold, Frost Nova and Blast Wave hits can now "rewind". The bonus is +10% for Arcane spells and +20% for Frost/Fire; Arcane's share was cut from 20% to 10% [[d:mage#1481363007782129816]], [[d:mage#1481380073650262237]].
- **Weapon swaps cost a GCD** now, which kills the old swap-to-proc-weapon trick [[d:mage#1489371212650909758]].
- **Contested:** on patch day some players reported Rupture and Surge hitting for much less than before, with no explanation [[d:mage#1484629998882128057]], [[d:mage#1486855899971719238]].

## Talent build

### Raid 43/8/0 (recommended)

This is the standard post-1.18.1 raid build. It was posted as a screenshot the day after the patch [[d:mage#1484816855662071930]], and Luden TA linked the same build when a player asked for a level-60 Arcane spec [[d:mage#1486115820668190761]]. There is no separate AoE build: "take the arcane tree... and mash Arcane Explosion" [[d:mage#1429280359190761542]], [[d:mage#1436700346822037625]].

| Tree | Talent | Points |
|---|---|---|
| Arcane | Arcane Subtlety | 2/2 |
| Arcane | Magic Absorption | 3/3 |
| Arcane | Improved Arcane Missiles | 5/5 |
| Arcane | Arcane Focus | 5/5 |
| Arcane | Arcane Concentration | 5/5 |
| Arcane | Arcane Impact | 3/3 |
| Arcane | Arcane Rupture | 1/1 |
| Arcane | Temporal Convergence | 3/3 |
| Arcane | Arcane Meditation | 3/3 |
| Arcane | Arcane Instability | 3/3 |
| Arcane | Presence of Mind | 1/1 |
| Arcane | Accelerated Arcana | 1/1 |
| Arcane | Arcane Potency | 2/2 |
| Arcane | Resonance Cascade | 5/5 |
| Arcane | Arcane Power | 1/1 |
| Fire | Improved Fireball | 5/5 |
| Fire | Improved Fire Blast | 3/3 |

Split **43/8/0**, VALID. Codes: `talents.turtlecraft.gg/mage?points=ToFoDIAbZKAoB-FAAY-` · `talents.turtlecraft.gg/mage/FUZ363L7H6-U0I`
[Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=mage&t=2350550310033311251-50003)

Why:

- **Arcane Focus 5/5** gives +10% spell hit, so Arcane needs only about 6% from gear to reach the 16% raid cap. Fire and Frost get 6% from talents and need about 10% from gear [[d:mage#1469210115834904714]], [[d:mage#1425934816251220068]].
- **Arcane Potency** raises your crit bonus from 150% to 200%. Take it before you invest in crit talents, since crit is weak without it [[d:mage#1425888416821809223]].
- **Accelerated Arcana** is a cast-time reduction, not haste. That is why the Missiles channel floors look odd (2.82 s and 2.35 s, see Caps) [[d:mage#1484613633404305640]]. It also shortens Rupture and Evocation cooldowns [[d:mage#1462477308878393611]].
- **Resonance Cascade** is capped at 4 duplications. It rolls only once per Arcane Explosion cast, however many targets you hit, and duplicates do not trigger on-hit item effects (dev comment relayed by Pepopo) [[d:mage#1431347127828873318]].
- **Improved Fire Blast 3/3:** the 1.18.1 GCD cut makes Fire Blast your movement and filler button (see Rotation). One raider notes "imp fire blast doesn't change much for arcane raiding", so these 8 points are the flex slot [[d:mage#1492228459403939871]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Frost flex (trash kiting)** | Put the 8 flex points in Frost to reach Permafrost for Cone of Cold on trash. The sources name only Permafrost as the goal, not the 5 row-1 points before it | — | "the last 8 points are kinda whatever... I have my extra points in permafrost cuz I like to CoC on trash in case I pull threat" [[d:mage#1492228459403939871]]; 8 in Fire (Fire Blast) or Frost (Permafrost) [[d:mage#1486325537646575778]] |
| **Dungeon / AoE farm 38/0/13** | Drops Arcane Subtlety, Magic Absorption and the Fire points. Takes Frost Warding 2, Elemental Precision 3, Improved Frost Nova 2, Permafrost 3, Improved Blizzard 3 | `AoFoDIAbZKAoB--QYATAD` | Posted as an experiment ("Not sure how crucial missing those top 2 arcane talents is") [[d:mage#1486165133188403240]] (single source) |
| **Mage tank** | Remove the threat-reduction talent (Arcane Subtlety) and skip Arcane Power | — | "basically arcane just without the threat reduce (and no AP)" [[d:mage#1480932674142077039]]. See [Mage tanking](#mage-tanking-twin-emperors-and-dungeons) |

**Before 1.18.1:** Arcane Focus and Magic Absorption swapped places in the tree (Focus is now in row 2). Older calculator links and wiki screenshots may show the old positions [[d:mage#1461437025373917368]], [[d:mage#1463553701565432041]].

## Stat priority and caps

1. **Spell hit to 16%** against level-63 bosses. The miss table is 3% / 4% / 5% / 16% for targets at your level / +1 / +2 / +3 [[d:mage#1425882367599443998]]. With 5/5 Arcane Focus you need 6% more. A druid's Emerald Blessing (+1%) and the two ZG head and leg enchants (+1% each) bring that down to only 3% from gear [[d:mage#1484992783017312256]]. Even at the cap, spells top out at 99% hit [[d:mage#1475293772999954594]]. Trash below boss level needs far less hit, so hit is worth about 0 for AoE [[d:mage#1426251077547855962]], [[d:mage#1463263470022823976]].
2. **Haste and spell power**, roughly equal. 1% haste is worth about 10 SP in pre-raid gear and about 15-20 SP near BiS, because haste gains value the more you have [[d:mage#1466052950182072431]], [[d:mage#1469497305261539368]], [[d:mage#1432714419451854858]]. Ocra's Kara40/Naxx-geared sim: 1% haste ≈ 16.8 SP, 1% crit ≈ 13.6 SP [[d:mage#1455643319211135210]]. Fresh-60 sim on Ambershire: hit ≈ crit ≈ haste ≈ 12 SP [[d:mage#1450435312131117117]]. **6% haste is the single biggest breakpoint**; past it, 1% crit or 1% haste ≈ 14 SP [[d:mage#1491470885104910406]]. Haste's value rises with fight length (Ocra: 13 SP at 30 s, 16.3 SP at 3 min) [[d:mage#1459917390610694440]].
3. **Crit:** about 10 SP per 1% [[d:mage#1479596305633513554]], [[d:mage#1445970866776178871]]. For AoE, crit is the best stat [[d:mage#1465056521728823319]].
4. **Intellect:** mana plus a little crit. It does not give spell power [[d:mage#1429246473077522452]]. Aim for a 4,500-5,000 unbuffed mana pool; below that, Arcane Power is hard to use safely [[d:mage#1491890195384242276]].
5. **Spirit and MP5:** not chased. Arcane tier sets already carry Spirit, and your mana comes from talents and Mage Armor [[d:mage#1471775725827653735]].
6. **Spell penetration:** mostly a dump stat. Your passive talent gives 10 penetration, and Curse of Shadows/Elements covers nearly every boss; the exceptions are AQ20 bosses and Kel'Thuzad's frost resistance [[d:mage#1445195491494334567]], [[d:mage#1450392717476630539]], [[d:mage#1450488624125837452]].

**Haste is multiplicative.** Every source (each gear piece, TBoS, Whip, Arcane Power, set bonus) multiplies separately. For example, 1.05 × 1.03 × 1.05 × ~1.01⁸ × 1.30 × 1.05 ≈ 167% cast speed [[d:mage#1489407016483946638]], [[d:mage#1472017047591325747]].

### Haste caps (measured)

| Cap | Value | Source |
|---|---|---|
| Arcane Missiles tick floor | 0.475 s per missile with Accelerated Arcana (0.5 s without), which is the 100% haste cap. One player measured 0.470 s (read as rounding) | [[d:mage#1434891188720373840]], [[d:mage#1455648566583234765]], [[d:mage#1435069155135983779]] |
| Missiles channel softcap | 2.82 s with a T2/T3 (+1 s) belt, 2.35 s with any other belt; past it, extra haste adds no ticks | [[d:mage#1484613204335264025]] |
| Arcane Rupture GCD floor | Rupture stops improving at **58.3%** haste (in-game test). An earlier sim estimate was ~66.6% | [[d:mage#1470553379427188847]], [[d:mage#1470570972758409454]]; earlier: [[d:mage#1436147009815052299]] |
| Arcane Surge cutoff | Stop weaving Surge above ~20-30% total haste, because its lockout does not scale with haste. **Contested:** 22% (sim default), 25%, or 30% (older figure) | [[d:mage#1490368335962050703]], [[d:mage#1486024900563959981]], [[d:mage#1486021253289476206]], [[d:mage#1432921455678459954]] |
| GCD | Haste (MQG etc.) does **not** shorten the GCD on this server | [[d:mage#1470104251031093320]] |

The cast bar rounds. Nampower's debug log shows the true server channel time (e.g. `Channel start: Arcane Missiles duration 5640`) [[d:mage#1427648060527218769]], [[d:mage#1435064340419055696]].

## Single-target rotation

**Snapshot rules you must know:**

- Arcane Rupture's +20% Missiles bonus and any active haste apply to each missile **when it is cast**, not when it lands. Distance to the target does not matter [[d:mage#1432868307014389871]], [[d:mage#1433092512242991247]].
- Haste is locked in when the Missiles channel starts. A channel started in the last moment of Arcane Power or MQG keeps that haste for the whole channel [[d:mage#1423688683667587102]].
- Rupture is a debuff on the target, but it snapshots like a buff and does not re-check your stats [[d:mage#1466215944908181731]].

**Opener** (Oaks, with logs): on-use SP trinket → `Arcane Rupture` → `Arcane Missiles` → (on a Surge proc: `Arcane Surge`, and pop `Presence of Mind` during Surge's GCD) → `Arcane Missiles` → `Arcane Rupture` → pop `Mind Quickening Gem` + `Arcane Power` during the GCD → Missiles spam [[d:mage#1468008389048008928]]. Popping PoM right at the pull risks pulling threat, so many players hold it [[d:mage#1460643726241042527]].

**Priority** (bot-ready; verbatim structure from Jûun Amelie [[d:mage#1486059691699343402]]):

*During Arcane Power (or any big haste window):*

1. **`Arcane Rupture`** if the Rupture debuff is not on the target.
2. **`Arcane Missiles`**. Do **not** press Surge or Presence of Mind in this window [[d:mage#1432389709166018630]], [[d:mage#1445445751722213489]].

*Outside Arcane Power:*

1. **`Arcane Missiles`** if Clearcasting is active.
2. **`Arcane Rupture`** if the debuff is not active. Cancel a Missiles channel for it the moment the debuff drops [[d:mage#1450105782422212681]], [[d:mage#1448804571337199667]].
3. **`Arcane Surge`** if it is available (it becomes usable for a few seconds after one of your spells is partially or fully resisted) **and** your total haste is below the Surge cutoff (see Caps). Cast it in the last second of the Rupture debuff, or when no debuff is up [[d:mage#1486059691699343402]]. If you are above ~50% mana, cancel Missiles right away for Surge. Below that, wait until the last moment [[d:mage#1467199924109312040]], [[d:mage#1467200863721357393]].
4. **`Arcane Missiles`**.
5. **Moving:** `Fire Blast`. It can fish a resist that enables Surge; a Roid-Macros macro combines the two (see Macros) [[d:mage#1454567964413264118]].

**Cancel Missiles cleanly.** Cut the channel right after a missile lands, never mid-tick: use Nampower's double-tap setting or `/script ChannelStopCastingNextTick(); /cast Arcane Rupture` [[d:mage#1486008678262771782]], [[d:mage#1486010713355849778]]. Never re-press Missiles during a channel without Nampower queueing; it clips the last missile [[d:mage#1425224352827314196]].

**End of a haste window:** with Arcane Power or MQG about to expire, most players fire one more Missiles volley rather than refresh Rupture early. Temporal Convergence (free Rupture reset) has its own 15 s internal cooldown. The sim difference between the two approaches is "pretty minimal" [[d:mage#1440019823751991417]], [[d:mage#1440036230807945298]].

**In full BiS**, Surge procs are rare enough that the rotation becomes Rupture plus Missiles [[d:mage#1479134208789057648]].

## AoE rotation

- **3+ targets: spam `Arcane Explosion` (max rank).** "Uptime and trinket usage" are the two pillars of Arcane AoE [[d:mage#1459931392916848844]]. The same raid build does it [[d:mage#1429280359190761542]]. The sources give no clean 2-target threshold (gap); the community sims treat 3 mobs as AoE.
- **Pre-stack Sigil of Ancient Accord** with rank-1 Arcane Explosion before the pull, then Explosion on the pack. Sigil procs at most once per 2 s internal cooldown, however many mobs you hit [[d:mage#1481285443809968250]], [[d:mage#1481332376515772436]].
- **Threat:** Arcane Explosion threat can rip off weak tanks. Drop to a lower rank of Explosion, or use BoP, Limited Invulnerability Potion or Eye of Diminution [[d:mage#1488097566582378546]], [[d:mage#1488102164122439780]]. Fetish of the Sand Reaver does not share the active-trinket cooldown, so it pairs with Sigil for big pulls [[d:mage#1466064206678724791]], [[d:mage#1483829710646542336]]. One extra Explosion from threat headroom is worth 3-8k damage per pull [[d:mage#1459930333259501846]].
- **Burst packs:** Goblin Sapper Charge + the Arcane Jewel of Wild Magics + Arcane Explosion can do about 50k damage in one GCD [[d:mage#1438566091365552378]].
- **Trash gear:** wear 3 Frost/Fire T3.5 plus 3 Arcane T3.5 for two 3-piece bonuses (Mirror Magic rewinds on Arcane Explosion hits) [[d:mage#1481363007782129816]]. Keep a separate AoE set; players run up to 8 saved outfits [[d:mage#1465838748833939622]].

## Cooldowns

| Cooldown | Use |
|---|---|
| **Arcane Power** (+30% cast speed, drains 1% max mana per second, 20 s, cannot be cancelled, kills you below 10% mana — [Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504)) | Pop only at full mana ("Pop it at full mana only and you got no problems") [[d:mage#1439011377133129900]]. In weak gear "you will die everytime you press the button"; a +1 s Missiles belt helps [[d:mage#1424365209660686447]], [[d:mage#1424365348836212796]]. Players still die with seconds left when they recast aggressively [[d:mage#1479235845629153411]] |
| **Mind Quickening Gem → Arcane Power** | Pop MQG first and Arcane Power near the end of MQG. AP snapshots MQG's haste, and haste shortens AP's cooldown, so you may get a second AP later [[d:mage#1484204264791216199]], [[d:mage#1484207112706986094]]. With low gear haste (~7%), popping both together is fine [[d:mage#1484233383541477518]]. Stack every cooldown together only on fights under ~30 s [[d:mage#1457546495405326430]] |
| **Juju Flurry / Potion of Quickness** | Use them during Arcane Power: haste multiplies, so it is always more DPS unless you are already at a hard cap [[d:mage#1472006152014270646]], [[d:mage#1472016248442196123]]. Rough limits: Juju up to ~12% gear haste, Quickness up to ~10%, both together up to ~7% [[d:mage#1457504190761930835]] |
| **Presence of Mind** | Instant Arcane Rupture [[d:mage#1460643726241042527]]. Cast it on its own; macroed together with another spell it often fails to grant the free cast [[d:mage#1479120357645619211]] |
| **Evocation** | Mana arrives on server ticks every ~2 s. Start it just before a tick and cancel after the 4th tick, since the last ~2 s give nothing [[d:mage#1452736983209083033]], [[d:mage#1452733084590936156]] |
| **Troll Berserking** | Another haste cooldown to spread or stack by the same rules [[d:mage#1436113705480884345]] |

## Mana

- Arcane gets mana regen while casting from talents (Arcane Meditation) and Mage Armor. Measured: 14% regen while casting without Mage Armor, 30% with it, 37-38% with the T2 3-piece Mage Armor bonus [[d:mage#1438912530411163748]]. The server caps regen while casting at 100% [[d:mage#1438238977558577287]].
- The 5-second rule applies: Spirit regen stops for 5 s after you spend mana [[d:mage#1427390424439586907]].
- **+1 s Missiles belts** (Overcharged Belt, T2/T3 belts) scale with haste and noticeably improve mana economy and Arcane Power survival [[d:mage#1475835751114739865]], [[d:mage#1479236252019593349]].
- **T3 6-piece** (mana back on crits during Arcane Power) can leave you above 90% mana 20 s after the pull and allows two Arcane Powers in some Kara40 fights [[d:mage#1450222590395416707]], [[d:mage#1457729590523985951]].
- With a Paladin in group, Blessing of Wisdom and judged Wisdom can keep a geared Arcane mage near full mana [[d:mage#1488889683953057833]], [[d:mage#1486104445153710101]].
- "Mages do damage with mana... chug all the Nordanaar Tea" [[d:mage#1482060973924679771]]. Night Dragon's Breath shares a cooldown with mana gems and runes [[d:mage#1470460393116799188]].
- **Threat:** threat-reduction sources multiply, they do not add: 40% talent × 25% Salvation × 3% cloak ≈ 57% total, not 68% [[d:mage#1427356537147363509]]. Ice Block does not drop threat [[d:mage#1475235315546591466]].

## Gear

### Pre-raid / fresh 60

Shared's fresh-60 path [[d:mage#1490969006855688223]]:

- Crafted **Spellwoven Nobility Drape** (Tailoring). Its on-crit proc (~50% uptime, +1.25% crit and 11 SP while up) makes it Arcane's cloak until Naxx [[d:mage#1490791627307090022]]. Once you have the Sapphiron cloak it loses on bosses, but it stays AoE BiS forever [[d:mage#1466813574784483431]], [[d:mage#1470023660973592617]]. Wearing it during Arcane Power is a small death risk, because the Intellect proc raises your max mana [[d:mage#1430718345619046401]].
- **Gloves of Spell Mastery** (Tailoring: 10 Mooncloth + 6 Golden Pearl) replace Gloves of Unwinding Mystery. The latter's 22 → 9 SP nerf eventually applied [[d:mage#1484608704958431252]], [[d:mage#1431234432450433135]].
- Stormwind Vault quest ring (1% hit + SP, Alliance) [[d:mage#1430916081140109383]]. The LBRS/UBRS attunement trinket (2% crit). The Karazhan Crypt key-quest trinket. The **Black Morass** reputation grind for early gear and a 20-slot bag [[d:mage#1490969006855688223]].
- **Belt is the most important slot:** **Overcharged Belt** (Black Morass drop, BoE, +1 s Arcane Missiles) until the Tier 2/3 Arcane belt [[d:mage#1425439884348493937]], [[d:mage#1439017488699363379]].
- Offhand from the Hyjal questline (also a teleport item) [[d:mage#1425428764132638780]]. **Ring of Blackrock** now has 1% haste instead of 9 MP5 [[d:mage#1472664725212102891]].
- **Robe of the Archmage** (Tailoring) is BiS until BWL [[d:mage#1434898636461969418]].
- A fresh-60 list posted (quickly made, single source): Netherwind Crown, Diana's Pearl Necklace, Grass of Eternity, Spellwoven Nobility Drape, Robe of the Archmage, Dreamthread Bracers, Azuresong Mageblade + Scepter of Interminable Focus, Crimson Shocker, Gloves of Unwinding Mystery, Nightwoven Belt, Netherwind Pants, Arcanist Boots, True Band of Sulfuras + Sandswept Ring of Arcanum, Blackfire Orb + Talisman of Ephemeral Power [[d:mage#1475305738401353858]]. The ZG wand beats Crimson Shocker [[d:mage#1475391313674244169]].
- Skip Dreamthread as "pre-raid BiS": its materials need raid access [[d:mage#1433108399591002163]]. Skip T0.5 except the bracers [[d:mage#1423605508065071214]], [[d:mage#1457046920114737246]].

### Raid progression

| Tier | Core pieces | Source |
|---|---|---|
| MC/BWL | **True Band of Sulfuras** (BRD + Sulfuron Ingot) and **Wrath of Cenarius** (Cenarion badge ring): "most highest parsers run both" [[d:mage#1441065422639202365]], [[d:mage#1458931700431061044]]. TBoS's haste snapshots like any other haste [[d:mage#1427050036793049161]]. **Sigil of Ancient Accord** (MC) is the best passive trinket through Kara40 [[d:mage#1454118562821046314]], [[d:mage#1442108135228706847]]. **Ornate Bloodstone Dagger** is BiS on fights that are not fire-immune, until Naxx/Atiesh weapons [[d:mage#1459213683602231609]], [[d:mage#1469091663237349398]] | |
| BWL (example) | Spellpower Goggles Xtreme Plus, Choker of the Emerald Lord, Netherwind Epaulets, Cloak of the Brood Lord, Robe of the Dreamways, Netherwind Wristbands, Strategist's Mageblade + Fire Runed Grimoire, Dragon's Touch, Netherwind Handwraps, Mana Igniting Cord, Netherwind Trousers, Netherwind Slippers, TBoS, Band of Forced Concentration, Sigil of Ancient Accord, Sphere of the Endless Gulch | [[d:mage#1494299295656968334]] (screenshot, single source) |
| T2 set | **T2 Arcane 5-piece** (haste on crit, +1 s Missiles, regen) beats the raw stats it replaces [[d:mage#1484514817438908476]]. Keep it until you have at least 4% permanent haste from Arcane T3 [[d:mage#1488775375545700484]]. It stacks with TBoS [[d:mage#1487104077044125877]] | |
| Naxx (preliminary) | Frostfire Crown, Gem of Trapped Innocents, Rime Covered Mantle, Cloak of the Necropolis, Frostfire Vestments, Frostfire Bracers, Wraith Blade, Frostfire Handwraps, Eyestalk Waist Cord, Leggings of Polarity, Frostfire Slippers, Frostfire Signet + Wrath of Cenarius, Sapphiron's Left Eye + Doomfinger | [[d:mage#1465426769279713514]] (single source) |
| Kara40 ST (haste build) | Guardian circlet/amulet/mantle/vestments/trousers (T3.5), Kum'isha's Tattered Drape, Bindings of Contained Magic, Kirel'narak the Death Sentence, Khadgar's Guidance, Frostfire Cord, Frostfire Slippers, Wrath of Cenarius + TBoS, MQG + Remains of Overwhelming Power, Hellflame offhand | [[d:mage#1428763902237474880]] |

Set notes:

- **T3 8-piece** ("direct damaging Arcane spells") affects only Rupture and Surge, not Missiles [[d:mage#1484609770936729720]].
- **T3.5 Arcane 3-piece** (Improved Presence of Mind) sims at about +3% DPS (~60 SP single target, ~180 SP multi-target) [[d:mage#1479126581791293564]]. The 5-piece is weak and buggy, with a ~500 ms delay [[d:mage#1478838265179148512]], [[d:mage#1474801846119043146]].
- **T2.5 5-piece** (+10% damage after a full Evocation) is not worth breaking T2 5-piece [[d:mage#1451230302298046524]].
- **Ring of Burning Talons** (new Onyxia ring) is in practice an Arcane single-target ring. It scales 0.22 × SP, and its AoE is tiny [[d:mage#1486492893605789746]], [[d:mage#1488765322541666364]].
- **Scythe of Elune** (legendary trinket; drops in Kara10 at ~2%, the quest needs Kara40 and ~4-6k gold of materials): regarded as the single best mage item [[d:mage#1433553311067537408]], [[d:mage#1441577016276156518]], [[d:mage#1433532453019979897]]. It gives +2% hit, +2% crit, +40 SP, an arcane proc and a 10-min party haste summon; before the 1.18.1 ICD fix it was estimated at 10-20% DPS [[d:mage#1459265057140510781]], [[d:mage#1445772450162933955]]. **Bug:** procced via Icicles, its debuff lands on the mage [[d:mage#1427274279510343823]].
- The ambiguous "decreases casting speed" trinket (2% hit / 10 int / **−10% haste**) is a trap item [[d:mage#1437718071656714391]].

### Trinkets

| Priority | Source |
|---|---|
| MQG > ToEP > Sigil > Sphere of the Endless Gulch > Shard/Tear > Karazhan Crypt quest orb > Whip > ZHC | biloen [[d:mage#1487067808771735693]] |
| MQG > Gulch/Sigil > Whip > ToEP | Aest [[d:mage#1487079223058239690]] |

- **By fight length** (sim): at 2 min, MQG/Tear (1215 DPS); at 3 min+, Sigil/Gulch (1221 DPS). "For BWL, all fights except Raz and Nef would benefit from MQG/Tear" [[d:mage#1487093045777268797]].
- **MQG** is BiS until Kara40 and still used there whenever it is up [[d:mage#1484475554769141811]]. Its value falls on long fights because of its ~5 min cooldown [[d:mage#1430768339420184646]].
- **Gulch** needs about a minute to stack. Avoid it on Thaddius, where forced downtime wastes it [[d:mage#1487110868994097222]], [[d:mage#1483954011119026228]].
- **On-use trinkets share a cooldown pool.** Passive trinkets (Fetish of the Sand Reaver, Eye of Diminution) do not [[d:mage#1483841497789894828]], [[d:mage#1483829710646542336]].
- **Remains of Overwhelming Power** gives +55, not the +45 its tooltip shows [[d:mage#1437448728985469029]]. **Mar'kali, the Midnight Star** (rep trinket) is weak: about a third of Sigil's damage [[d:mage#1488713827934539847]].

## Enchants

| Slot | Enchant | Source |
|---|---|---|
| Head | Presence of Sight (ZG idol quest): +18 SP / +1% hit | [[d:mage#1482099000252563546]] |
| Legs | Presence of Sight. The 1% hit "never" gets replaced by the 1% haste enchant | [[d:mage#1442503244319424684]] |
| Shoulders | Sigil of Quickness (Hyjal rep, +2% haste) for single target [[d:mage#1482101083798245428]]. For AoE a spell-power shoulder enchant is better, since instant Arcane Explosion gains nothing from haste. Keep two sets and swap | [[d:mage#1474194118656790601]], [[d:mage#1474194232133812234]] |
| Cloak | Minor 2% threat reduction until AQ, then Subtlety | [[d:mage#1450496482242199753]], [[d:mage#1450515315703414886]] |
| Chest / Boots | Enchanted Armor Kit (+9 SP, Leatherworking via Hyjal dreamshards). Better than the +5 Dragonmaw kit | [[d:mage#1491271778432192535]], [[d:mage#1450175980818927616]] |
| Bracers | Spell power. **Contested:** Lightemgee puts +2% haste there, since bracers are "a means to an end" for the set bonus | [[d:mage#1450174257798709330]], [[d:mage#1486862405207330929]] |
| Gloves | Arcane Power glove enchant (+20 arcane SP). Beats the 1% haste glove enchant at all realistic SP | [[d:mage#1442497826968834208]] |
| Weapon | +30 Spell Damage | [[d:mage#1443591709966729426]] |
| Ring / neck | +6 Arcane SP (Jewelcrafting; ~15 Rough Stone + 15 Silk Cloth). A +9 Arcane "Crystallized Topaz" recipe exists, but its source is unknown | [[d:mage#1466718604044144652]], [[d:mage#1466727423239524463]], [[d:mage#1484573170458558534]], [[d:mage#1490456423170183369]] |

Skip spell-penetration head/leg enchants in PvE [[d:mage#1445153386206068898]].

## Consumables

**Raid stack:** Flask of Supreme Power, Elixir of Greater Arcane Power, Greater Arcane Elixir, Dreamshard Elixir, Dreamtonic, Cerebral Cortex Compound, Medivh's Merlot Blue, Brilliant Wizard Oil, Danonzo's Tel'Abim Delight or Medley [[d:mage#1481694558218616953]], [[d:mage#1438508962843463692]]. Add Spirit of Zanza, Mageblood Potion and Nordanaar Tea [[d:mage#1450233916266119258]], and for burst Juju Flurry and Potion of Quickness [[d:mage#1470332328806060042]].

- **Stacking rule:** one flask + one food + one drink + all elixirs + one oil + one Zanza [[d:mage#1452290109851570352]]. A dummy test confirmed that Dreamshard Elixir, Elixir of Greater Arcane Power and Greater Arcane Elixir all stack [[d:mage#1438587467136761897]]. Elixir of the Sages does **not** stack with Arcane Intellect; the Blasted Lands Intellect buff does [[d:mage#1482399206202277909]].
- **Food:** Tel'Abim Delight (SP) is cheaper and better at low SP. Medley (haste) wins at roughly 300-500+ buffed SP with hit capped, so use Delight on trash and Medley on bosses [[d:mage#1438496524815568987]]. **Contested:** Luden TA's math says 22 SP beats ~2% haste except at breakpoints [[d:mage#1464385661678391366]], [[d:mage#1464385892960567430]]. Haste food is 2%, not the 3% old databases show; Potion of Quickness is 5% [[d:mage#1457742414260469862]], [[d:mage#1457731688846331925]].
- Brilliant Wizard Oil and Greater Arcane Elixir now drop from weekly reward boxes and are cheaper [[d:mage#1446180078286536804]], [[d:mage#1446180494420087026]]. Dreamtonic now persists through death [[d:mage#1435777760722288804]].
- Classic-style world-buff stacking is largely absent from Turtle raids [[d:mage#1433636228544331796]].
- Engineering is optional, but Sappers add real AoE damage [[d:mage#1438550709686501427]].

## Macros and addons

- **Nampower** (client mod) + **Nampower Settings** (addon): "mandatory if u wanna compete" [[d:mage#1489602997368393769]]. It queues spells to hide latency and stops Missiles clipping. Its double-tap setting (`DoubleCastToEndChannelEarly`) cleanly ends Missiles into Surge or Rupture. Reported gains are 10-25% [[d:mage#1425228792883974224]], [[d:mage#1448786950369841286]]. Align the queue window to the average server tick (~55 ms), not your ping [[d:mage#1464346484177768653]]. A third-party "nampower" download was flagged as a trojan, so use the official source [[d:mage#1427700145075650692]].
- **PoM + Rupture (Nampower):** `/run QueueSpellByName("Presence of Mind");QueueSpellByName("Arcane Rupture");` [[d:mage#1438466319153365032]]. PoM can fail when macroed, so test it [[d:mage#1479120357645619211]].
- **Cancel into Rupture:** `/script ChannelStopCastingNextTick(); /cast Arcane Rupture` [[d:mage#1486008678262771782]]. Without SuperWoW, `/run SpellStopCasting()` works as a stopcast [[d:mage#1432536084197146817]].
- **Moving Surge (Roid-Macros):** `#showtooltip Fire Blast` / `/cast [reactive:Arcane_Surge]Arcane Surge;Fire Blast` [[d:mage#1454567964413264118]].
- **T3.5 5-piece trick:** pop PoM, then `/cancelaura Presence of Mind` to get the 6 s free-mana effect without spending the charge [[d:mage#1479226041414320284]].
- **Full-rotation macros** (SuperCleveRoidMacros + Nampower) exist and reach about 90% of a perfect rotation; purists prefer manual play for edge cases [[d:mage#1479124878761394206]], [[d:mage#1479132664635064383]].
- **Proc tracking:** ArcaneSurgeWarning (`github.com/AllinGaming/ArcaneSurgeWarning`), ProcDoc and MPowa. ProcDoc and MPowa need the max-rank Surge on an action bar, not only inside a macro [[d:mage#1442806736888008847]], [[d:mage#1449982327651438603]]. DoiteAuras is the Turtle "WeakAuras light" [[d:mage#1460665429709029376]].
- **HasteDisplay** (`github.com/Timanaku/HasteDisplay`) shows whether a haste consumable would overshoot the caps [[d:mage#1457729034229256347]]. A patched **Quartz** (`github.com/Timanaku/Quartz`) shows haste-correct cast times [[d:mage#1468740058482868436]].
- **Decurse:** Decursive, or Rinse (`github.com/Otari98/Rinse`) [[d:mage#1492137212597370910]], [[d:mage#1492146425570525365]].
- **Known issues:** addons that inspect players (e.g. HonorSpy) silently change your server-side target, which causes "target not in front / ability not ready" Missiles failures [[d:mage#1441884263044747445]], [[d:mage#1488286070360641546]]. pfUI 8.3.0 broke the Missiles castbar; roll back to an earlier fork [[d:mage#1487505813604929698]].
- **Sims and planners:** pepopo978/wowsim and pbrigade.gitlab.io/gear-planner. The planner does not value on-use trinkets [[d:mage#1463962237361324136]], [[d:mage#1459908471028842668]].

## Raid notes

- **Kara40 ([Tower of Karazhan](../../instances/tower-of-karazhan.md)):** Anomalus and the trash between the 2nd and 3rd bosses are arcane-immune, so raids swap Arcane mages to Fire (or Frost) for that stretch and often stay Fire for Medivh [[d:mage#1454543299540025457]], [[d:mage#1433242094159527936]]. Many guilds want 200 unbuffed arcane resistance for Kara40 [[d:mage#1482669809807396974]]. On **Gnarlmoon**, mages take the blue side for the raven AoE (for example 2 boomkins red, 5-6 mages blue) [[d:mage#1428812263862698145]]. Sigil is best for padding there; one raider runs REoS + the Anomalus trinket on the blue side and Sigil + REoS on the raven side, and Eye of Diminution or Jewel of Wild Magics can replace Mark of the Champion [[d:mage#1445609429209972909]], [[d:mage#1445602953036693667]]. On **Chess**, pre-proc Sigil before the event [[d:mage#1484175858213326868]]. On **Kruul**, casters carry the damage past 25% [[d:mage#1459267767692820635]].
- **Naxx:** Razuvious's shout is physical; a Limited Invulnerability Potion or BoP skips it [[d:mage#1438184920962043904]], [[d:mage#1438207808469209088]]. On **Faerlina**, pre-pop Greater Fire Protection Potion and Fire Ward. On **Maexxna** and **Gluth**, AoE the adds for parse [[d:mage#1438174915672150056]]. On **Four Horsemen** (long fight), REoS can be used twice [[d:mage#1457492358173167616]]. In speed clears, a mage combo of LIP + ZG gem + Arcane Explosion + Sapper can do about 100k in one global [[d:mage#1475630831304445984]]. Pre-Anomalus-style bomb debuffs: dispel Unstabilized Mana and Mana Buildup, but **not** Unstable Mana [[d:mage#1475612903473414368]], [[d:mage#1475624746149482586]].
- **AQ20:** bosses resist a lot (115-155 resistance), so Moam partially resists nearly everything [[d:mage#1450488624125837452]].
- **[Molten Core](../../instances/molten-core.md):** Shazzrah's Counterspell hits you even when he faces away [[d:mage#1461719788773572820]].
- **[Blackwing Lair](../../instances/blackwing-lair.md):** Firemaw wants some fire resistance mixed with spell damage [[d:mage#1461470297008898151]]. On Nefarian, Ice Block while he casts the class call, not after; Blink does not break the shackle [[d:mage#1494656562172526847]]. Detect Magic shows dragon vulnerabilities [[d:mage#1488164422840221836]]. Blink was reported broken in the new BWL boss room [[d:mage#1490038152881115247]].
- **[Lower Karazhan Halls](../../instances/lower-karazhan-halls.md):** Scythe of Elune source (~2% drop). A trash mob drops the Theramore portal tome [[d:mage#1433553311067537408]], [[d:mage#1430206372452241549]].

## Mage tanking (Twin Emperors and dungeons)

Mage "tanking" is a Turtle niche, never a raid-boss role except for one case: **Twin Emperors (AQ40), where a mage tanks the caster emperor**. Several raiders do it regularly ("I've tanked twins a lot on mage") [[d:mage#1442602461239181374]], [[d:mage#1447835317854929037]].

- **Spec:** you must be Arcane, because Improved Arcane Missiles removes pushback. Respec out of Arcane's threat reduction; with it you cannot out-threat the raid, even without Salvation [[d:mage#1442604213749416036]]. Tank spec = "basically arcane just without the threat reduce (and no AP)" [[d:mage#1480932674142077039]].
- **Shadow resistance:** stack shadow resistance gear. A Priest's Shadow Protection and Mark of the Wild are needed to break the 335 breakpoint. Fully buffed you have almost 6k HP [[d:mage#1447836216199483434]], [[d:mage#1447836475604467813]]. Anima's gear set: Netherwind Crown, Eidolon Talisman, Arcanist Mantle, Cloak of Untold Secrets, Runed Stygian Belt/Leggings/Boots, 2× Ring of the Elder Warden, Grimoire of Grells + Neltharion's Tear, Brimstone Staff (6,180 unbuffed HP) [[d:mage#1456832657047687359]].
- **Dampen Magic** on yourself is the one PvE use of Dampen [[d:mage#1379135561188638841]].
- **Dungeon tanking** (novelty): aim for ~4,600 HP, know the pulls, and skip Vampirism gear if you have a healer [[d:mage#1469445816132305144]], [[d:mage#1434374123764580603]]. ZeroRanger's kit: stamina first, Ice Barrier + Burrower's Shell (~1,800 effective HP), Lesser Invisibility and Fire/Frost Protection potions [[d:mage#1443294606681833472]], [[d:mage#1436832251165020293]]. Boss pull: `Fireball` → `Fire Blast` → `Counterspell` → `Frost Nova` → Flash-Freeze `Icicles` [[d:mage#1436829216975884409]].
- **Gap:** no full mage-tank guide was ever published (one was promised) [[d:mage#1481493568978944070]].

## Common mistakes

1. Using Arcane Power below full mana or while Mana Shield drains you. You die at 10% mana [[d:mage#1439011377133129900]].
2. Pressing Arcane Surge or PoM during Arcane Power/MQG, or at all above the haste cutoff [[d:mage#1432389709166018630]], [[d:mage#1486024900563959981]].
3. Re-pressing Missiles mid-channel, or cancelling mid-tick. Use Nampower or the stop-next-tick macro [[d:mage#1486010713355849778]].
4. Recasting Rupture while its debuff is still up. Refresh it only when it drops [[d:mage#1448429040108044340]].
5. Stacking haste past the caps (Missiles 0.475 s floor, Rupture 58.3%) with consumables you should have saved [[d:mage#1435069155135983779]], [[d:mage#1470553379427188847]].
6. Gearing hit for trash. Talents already cover sub-boss mobs [[d:mage#1426251077547855962]].
7. Going Arcane into Anomalus instead of swapping spec [[d:mage#1454543299540025457]].
8. Buying the "decreases casting speed" trinket or Dreamthread as pre-raid BiS [[d:mage#1437718071656714391]], [[d:mage#1433108399591002163]].
9. Using the Gloves of Unwinding Mystery after the nerf when Gloves of Spell Mastery are available [[d:mage#1484608704958431252]].
