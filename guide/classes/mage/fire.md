# Fire Mage (ranged DPS)

**Recommendation:** Fire is the **second raid spec, from AQ40 onward**. Molten Core and BWL are largely fire-immune, so play Arcane there. Play **10/38/3** with **Improved Fire Blast 3/3**. Get **16% spell hit** (6% comes from Elemental Precision), then stack **crit**, worth about 25 SP per 1% in Kara40 gear. Weave **Fire Blast every 2 Fireballs**, fire **Pyroblast at 5 Hot Streak stacks**, and keep **Fire Vulnerability** at 5 stacks. Fire is strongest with **2 (sometimes 3) Fire mages** feeding one Ignite.

| | |
|---|---|
| Role | Single-target ranged caster built on Fireball crits feeding Ignite, Hot Streak Pyroblasts and Fire Blast |
| Viability (1.18.1) | **Alternative raid spec, highest ceiling.** "With perfect conditions fire does more damage" than Arcane [[d:mage#1465727467707957526]]; a solo Fire mage did 2k DPS on Patchwerk after 1.18.1 [[d:mage#1487093190426366004]]. But "fire never pulls ahead... pretty close in full kara 40 gear" [[d:mage#1487147562766172321]], and Arcane wins on most Naxx/Kara40 fights [[d:mage#1485940669942988930]]. About 10 of the top-50 Kara40 mage parses were Fire [[d:mage#1483200337451028752]] |
| Difficulty | Medium-high: Ignite management, Fire Blast weaving, coordination with other Fire mages |
| Strengths | Highest boss damage "in perfect/favorable conditions"; longest range; Fire Blast became the strongest button in 1.18.1 [[d:mage#1487204103632191600]] |
| Weaknesses | "The first two raids are completely inaccessible to fire" [[d:mage#1493927839274373200]]; crit- and gear-dependent, weak before AQ40/Naxx [[d:mage#1468879512749080669]]; Ignite relies on other Fire mages [[d:mage#1485659693857902663]]; weak AoE compared with Arcane [[d:mage#1319539463122059334]] |

## How to play

The level-60 decision loop. The details, with sources, are in the sections below.

1. **Opener:** `Fire Blast` → `Scorch` → `Scorch` → `Scorch` → `Fireball` → `Fire Blast` [[d:mage#1478881200079769690]]. With several Fire mages, stack Fire Vulnerability together before anyone builds Ignite ([Ignite](#ignite-how-it-works)).
2. **Single-target loop** ([Single-target rotation](#single-target-rotation)):
   1. `Pyroblast` at 5 Hot Streak stacks (at 4 only when the boss is about to die).
   2. `Fire Blast` whenever it is off cooldown: every 2 Fireballs with no haste, every 3 with a little haste [[d:mage#1487204103632191600]].
   3. `Scorch` to keep 5 Fire Vulnerability stacks, only if the target lives more than about a minute.
   4. `Fireball`.
3. **Cooldowns:** `Combustion` once Fire Vulnerability is up, into Fireball/Pyroblast [[d:mage#1478734312135331881]]. Save `Mind Quickening Gem` for fights where it matters ([Cooldowns and mana](#cooldowns-and-mana)).
4. **Ignite:** let a weak Ignite (built from partial resists) drop and rebuild it. Never stall on extra Scorches to protect a big one [[d:mage#1487206596852449382]], [[d:mage#1478881200079769690]].
5. **AoE switch** ([AoE rotation](#aoe-rotation)): on trash that stays grouped, rank-1 `Arcane Explosion` → `Flamestrike` R6 → `Flamestrike` R5 → `Blast Wave` → max-rank `Arcane Explosion` spam. If the raid melts trash fast, skip Flamestrike and use only Explosion + Blast Wave [[d:mage#1468725989961109605]].
6. **Mana:** Master of Elements and Arcane Concentration are your in-fight mana. Gems, tea and `Evocation` as for any mage.
7. **Movement:** `Fire Blast`, then `Scorch` (1.5 s cast) for short stops *(vanilla baseline)*.

## What 1.18.1 changed for Fire

- **Improved Fire Blast** now cuts Fire Blast's GCD by 0.3/0.6/1.0 s ([Jamey (staff), 2026-01-26 rev.](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). Before, a Fireball (~3 s) plus Fire Blast's 1 s GCD took 4 s, the whole Ignite window, so Fire Blast dropped Ignite [[d:mage#1464380190082732185]], [[d:mage#1464375886710182040]]. Now Fire Blast is "your highest dps spell by a good margin" [[d:mage#1487204103632191600]], and every spec's rotation changed [[d:mage#1486320286940004443]].
- Nothing else in the Fire tree changed. The 1.18.0 changes still apply: Ignite back to 4 s, Fire Blast also applies Fire Vulnerability, Blast Wave's cooldown cut, and cheaper Fireball/Flamestrike [[d:mage#1408703016089026683]], [[d:mage#1407768129475579927]], [[d:mage#1356338011217985616]].
- **Before 1.18.1** guides said to skip Fire Blast except with a ready Pyroblast, or to spam Fireball under MQG. Both are outdated.

## Talent build

### Raid 10/38/3 (recommended)

Supermongo posted this exact build [[d:mage#1417820555004088411]]. A month later he posted it again with the last 3 points left open: "Improved Fire blast (Single target) or Improved Flamestrike (AoE)" [[d:mage#1429800402307518584]]. After 1.18.1, Improved Fire Blast is the rotation-defining talent, so it is the default [[d:mage#1489284725381271743]].

| Tree | Talent | Points |
|---|---|---|
| Arcane | Arcane Subtlety | 2/2 |
| Arcane | Magic Absorption | 3/3 |
| Arcane | Arcane Concentration | 5/5 |
| Fire | Improved Fireball | 5/5 |
| Fire | Ignite | 5/5 |
| Fire | Flame Throwing | 2/2 |
| Fire | Improved Fire Blast | 3/3 |
| Fire | Incinerate | 2/2 |
| Fire | Pyroblast | 1/1 |
| Fire | Burning Soul | 2/2 |
| Fire | Fire Vulnerability | 3/3 |
| Fire | Master of Elements | 3/3 |
| Fire | Blast Wave | 1/1 |
| Fire | Critical Mass | 3/3 |
| Fire | Hot Streak | 2/2 |
| Fire | Fire Power | 5/5 |
| Fire | Combustion | 1/1 |
| Frost | Elemental Precision | 3/3 |

Split **10/38/3**, VALID. Codes: `talents.turtlecraft.gg/mage?points=TAAo-FAqYQKYDLQAoB-AY` · `talents.turtlecraft.gg/mage/F05-UWK1F39H6-0I`
[Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=mage&t=230005-50523201230313251-003)

Why:

- **Elemental Precision 3/3** is Fire's hit talent (6%). Fire needs about 7% more from gear after the ZG enchants and the druid buff [[d:mage#1484935527709806603]].
- **Arcane Concentration and Master of Elements** carry your mana. Without Arcane talents, Fire's mana is a known problem [[d:mage#1321259296654098523]].
- **Hot Streak 2/2:** Fireball and Fire Blast crits build stacks that cut Pyroblast's cast time. Fire it at 5 stacks (see Rotation) [[d:mage#1479141574372757517]]. Being flagged as Fire (a Hot Streak or Combustion buff) is also what qualifies you for split Ignite credit [[d:mage#1486342319245496382]].
- There is no separate solo build: "Nothing changes in the spec between solo and group fire" [[d:mage#1463915512403853424]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **AoE / trash** | Improved Flamestrike 3/3 instead of Improved Fire Blast. Flamestrike is "pretty decent now" with its 2.5 s cast | `TAAo-FAqATKYDLQAoB-AY` | [[d:mage#1429800402307518584]], [[d:mage#1463915748375265323]] |
| **No Hot Streak 13/35/3** | Skips Hot Streak and Improved Flamestrike; takes Arcane Impact 3 and Flame Throwing 1 | `TAAoD-FApYQKYDLAAoB-AY` | Screenshot build [[d:mage#1467615825954340866]] (single source). The screenshot's Arcane column read "Arcane Focus 3", which is illegal in the 1.18.1 tree, so this code uses Magic Absorption 3 in that slot |

## Stat priority and caps

1. **Spell hit to 16%:** 6% from Elemental Precision, 2% from the ZG head/leg enchants, 1% from a druid's Emerald Blessing, so about 7% from gear [[d:mage#1484935527709806603]]. Partial resists also weaken the Ignite you build [[d:mage#1487206596852449382]].
2. **Crit:** about 25 SP per 1% at Kara40 BiS, "slightly above 25" [[d:mage#1493652965158944868]], [[d:mage#1479598294987440392]]. Build toward about 40% crit [[d:mage#1428164655452262464]]. A solo Fire mage holds Ignite at about 50% Fireball crit [[d:mage#1487094005933019226]].
3. **Spell power.**
4. **Haste:** **contested.** In the 1.18.1 rotation, small amounts of haste (Potion of Quickness, Juju Flurry, Atiesh, Scythe procs) sim about 0.5-1% **lower**, because they break the 2-Fireball weave into 3 Fireballs per Fire Blast [[d:mage#1489266514749034536]], [[d:mage#1489282720386514984]]. At about 47-50% haste (MQG + Juju Flurry + Potion of Quickness + haste food) you get clean 3-Fireball weaves again [[d:mage#1489285264332296362]], [[d:mage#1489284725381271743]]. Before the patch, 3-4% haste let solo Fire chain Fireball → Fire Blast → Fireball inside Ignite [[d:mage#1464389538037235878]].
5. **Intellect:** mana and a little crit [[d:mage#1429246473077522452]].

## Ignite: how it works

- A crit applies **Ignite**, which deals 40% of that crit's damage again over **4 s**. Ignite stores up to 5 crits. Any later crit, even at 5 stacks, resets the 4 s timer; if no crit lands within 4 s, Ignite drops [[d:mage#1478705573376819295]]. It stores 40% of the first 5 crits until it drops, then restarts [[d:mage#1487205700340941033]].
- **Crit needed to keep it rolling:** about 50% for a Fireball → Fire Blast cadence, about 33% for Scorch → Scorch → Fire Blast [[d:mage#1478707474113757357]].
- **Ignite is shared.** There is one Ignite per target. Every contributing mage refreshes it, and damage and threat are split among the mages who crit into it [[d:mage#1486342319245496382]], [[d:mage#1408703016089026683]]. The sweet spot is **2 Fire mages**; 3 can work after the Fire Blast fix but may be overkill [[d:mage#1465754189761085440]], [[d:mage#1465754221864423620]].
- **Apply Fire Vulnerability before the crit that builds Ignite.** The debuff modifies the stored Ignite value when the crit lands, and Ignite ticks benefit again ("double dip") [[d:mage#1466214293728137430]], [[d:mage#1466213805527797860]], [[d:mage#1466210151127187660]].
- **Drop a weak Ignite.** If partial resists built a weak Ignite, let it drop and rebuild quickly [[d:mage#1487206596852449382]]. With several Fire mages, one player deliberately drops a weak opening Ignite so the group can build a stronger one [[d:mage#1466198674735497530]]. The BigWigs MageTools module has a shared alert for this: `/bw extra magetools ignitedroptrigger` [[d:mage#1478706351755759742]].
- The Ignite debuff has a visible stack cap (48), so addons may show "no gain" when there was one. Use Nampower + BigWigs MageTools V2 to track past it [[d:mage#1484285532308771007]], [[d:mage#1484297069148770464]].

## Single-target rotation

**Opener** (Patchwerk-tested, Pepopo): `Fire Blast` → `Scorch` → `Scorch` → `Scorch` → `Fireball` → `Fire Blast` [[d:mage#1478881200079769690]]. Firing Fire Blast while a Fireball is still in flight banks an extra Fire Vulnerability stack before the Fireball lands [[d:mage#1466186378617290815]].

**Priority** (bot-ready):

1. **`Pyroblast`** at **5 Hot Streak stacks**. Use it at 4 stacks only when the boss is about to die, so the Pyroblast DoT still gets close to its full duration [[d:mage#1479141574372757517]].
2. **`Fire Blast`** the moment it is off cooldown. With **no haste** that is after exactly **2 Fireballs**. With small haste it is not back yet, so cast a **3rd Fireball** first [[d:mage#1487204103632191600]], [[d:mage#1487203302314606722]]. "Fire blast all you can (should be every 2/3 fireballs)" [[d:mage#1485659693857902663]].
3. **`Scorch`** to (re)build 5 Fire Vulnerability stacks, but only if the target lives more than about 1 minute [[d:mage#1485659693857902663]]. Fire Blast also applies a stack [[d:mage#1436842451150176307]].
4. **`Fireball`**.

Do **not** stall on extra Scorches to protect a big Ignite; that is a DPS loss. Maximize Fireball, Fire Blast and Pyroblast casts instead [[d:mage#1478881200079769690]], [[d:mage#1478905379802058992]].

**Multi-Fire-mage openers** (a guild running 4 Fire mages in Kara40): on **Incantagos**, everyone Fire Blasts on the pull for 4 Fire Vulnerability stacks, focuses the adds, then goes Combustion into Fireball/Pyroblast. On **Anomalus**, everyone Fire Blasts, runs to the wall and builds Ignite together, accepting 4 stacks and no double dip for easier coordination [[d:mage#1478734312135331881]], [[d:mage#1478734426656477204]], [[d:mage#1478734950810517525]].

## AoE rotation

Fire's AoE lags behind Arcane's. Fire is "forced to choose between single-target and AoE DPS" [[d:mage#1319539463122059334]].

1. **Rank-1 `Arcane Explosion`** first, to pre-proc trinkets without pulling threat [[d:mage#1479603921264836630]].
2. **`Flamestrike` rank 6 → `Flamestrike` rank 5.** Two different ranks let both DoTs tick at once [[d:mage#1479770070598291608]].
3. **`Blast Wave`** [[d:mage#1479603921264836630]].
4. **`Arcane Explosion`** (max rank) spam [[d:mage#1479603921264836630]].

- **When to Flamestrike:** only if the mobs stay grouped and alive for a while (e.g. the mage/conjurer packs before Gnarlmoon and after Anomalus in Kara40). If the raid melts trash, just Arcane Explosion + Blast Wave [[d:mage#1465749962976657460]], [[d:mage#1468725989961109605]]. Chained Flamestrike ranks lose value in short fights [[d:mage#1479770070598291608]].
- Blast Wave reportedly rolls crit once, not per target (single source) [[d:mage#1465281368929075272]].
- **Flarecore (ZG) 6-piece** is a big-pull set. Skip it under 10 mobs; it is about 8% of damage at 10 mobs and up to ~50% at 40-60-mob duo pulls (e.g. Dragonmaw Retreat, Stormwrought Ruins) [[d:mage#1468412814086508635]], [[d:mage#1463993710915354696]]. It causes client lag; the Perfboost mod can hide the effects [[d:mage#1463994135064084564]], [[d:mage#1463994282372239537]]. The ZG 5-piece Flamestrike bonus is worth building around only for trash [[d:mage#1465749804515594340]].
- Wear 3 Frost/Fire T3.5 + 3 Arcane T3.5 on trash for the Mirror Magic rewind (+20% for Fire) [[d:mage#1481363007782129816]]. The rewind does not proc Ignite [[d:mage#1433242806238969877]].

## Cooldowns and mana

| Cooldown | Use |
|---|---|
| **Combustion** | After Fire Vulnerability is up, into Fireball/Pyroblast (see the Incantagos opener) [[d:mage#1478734312135331881]] |
| **Mind Quickening Gem** | Save it for fights where it matters (Medivh in Kara40, Faerlina/Heigan in Naxx) rather than every pull [[d:mage#1470890829055787194]]. Its ~5 min cooldown makes it best on short fights; pre-summon and swap to it right before the pull to still get value on a longer fight [[d:mage#1494477500871610509]], [[d:mage#1476594037602516993]] |
| **Blast Wave** | 30 s cooldown; AoE |
| **Evocation / gems / tea** | As for any mage. Master of Elements and Arcane Concentration are your in-fight mana |

## Gear

- **Pre-raid:** the wiki's Fire list includes Spellweaver's Turban, Diana's Pearl Necklace, Shroud of the Nathrezim, Heliotrope Cloak, Shadowguard Robe (Stormwind Vault), Brightspark Gloves, Ban'thok Sash, Skyshroud Leggings, Fire Striders, Blade of Necromancy, Pyric Caduceus, Blackfire Orb and Eye of the Beast ([Mage General FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ)). The crafted Spellwoven Nobility Drape is presumed to have much lower uptime for Fire than for Arcane [[d:mage#1474121912962650226]].
- **Weapons:** in AQ40, **Femur (Viscidus) + the Twin Emperors offhand**, "the most meaningful upgrade" [[d:mage#1492185014723416215]], [[d:mage#1492185259553329292]]. Endgame: **Kirel'narak** (Mephistroth, Kara40) is "the premium choice, way better than wraith" [[d:mage#1492183736278712450]], [[d:mage#1492183760475521194]]. Desecration is "super mid" for Fire, so put your soft reserve on Kirel'narak [[d:mage#1478092081095250073]], [[d:mage#1478092213069152358]]. Prestor's Rod of Command is "only slightly worse than nef staff" and better once in AQ40 [[d:mage#1487045746812387388]].
- **Belt:** C'Thun's belt is "the most worthwhile upgrade you can get in AQ40"; prioritize it, since it lasts until Kara40 [[d:mage#1492185699460583623]], [[d:mage#1492185838325596301]].
- **Head:** the T3/T3.5 Frost/Fire helm is worth a missing crit for +11 SP and the set bonus [[d:mage#1486067033975292197]]. Without Scythe of Elune, run the **Yshgolar** head instead of T3; it fills your missing hit [[d:mage#1486068559821017320]], [[d:mage#1486071882871603402]].
- **Trinkets:** MQG is still used in Kara40 whenever it is up [[d:mage#1484475627204513932]]. Sigil of Ancient Accord and Sphere of the Endless Gulch are "insane if the fight isn't super fast" [[d:mage#1487091042644660234]].
- **Sets:** Fire uses the regular (non-Arcane) T1-T3 pieces. The T2.5 5-piece is impractical [[d:mage#1451230302298046524]]. The Fire T3.5 5-piece bug report (18568) has no confirmation either way (gap).
- **Ring of Burning Talons** ("Conflagration") was meant as a Fire AoE ring but ends up better for Arcane [[d:mage#1494368773522854048]].

## Enchants

| Slot | Enchant | Source |
|---|---|---|
| Head / Legs | Presence of Sight (ZG): +18 SP / +1% hit | [[d:mage#1482099000252563546]] |
| Shoulders | Power of the Scourge (Naxx quest): +15 SP / +1% crit, recommended for Fire/Frost | [[d:mage#1482101083798245428]] |
| Gloves | +20 spell power (available from AQ) | [[d:mage#1450496482242199753]], [[d:mage#1450515315703414886]] |
| Chest / Boots | Enchanted Armor Kit (+9 SP) | [[d:mage#1491271778432192535]] |
| Weapon | +30 Spell Damage | [[d:mage#1443591709966729426]] |
| Belt | **Contested:** 9 Fire Power only if you play Fire, otherwise 10 Intellect [[d:mage#1425823633053585479]]; or 10 Fire Damage as the choice that stays useful [[d:mage#1465735123247960075]] | |

**Oil:** Brilliant Wizard Oil. Oil of Immolation does **not** scale with spell power [[d:mage#1494373493976993853]].

## Consumables

Flask of Supreme Power, Elixir of Greater Fire Power, Greater Arcane Elixir, Dreamshard Elixir, Dreamtonic, Mageblood Potion, Medivh's Merlot Blue Label, Spirit of Zanza, Tel'Abim food, Potion of Quickness, Cerebral Cortex Compound [[d:mage#1354993754649399397]]. All elixirs stack with each other [[d:mage#1452290109851570352]].

- **Food:** haste food is usually called better for Fire and Arcane, and some swap between SP food on trash and haste food on bosses [[d:mage#1464383668574224529]]. **Contested** by the small-haste weave problem above [[d:mage#1489266514749034536]].
- Greater Fire Protection Potion, pre-popped with Fire Ward, is useful for you on Faerlina [[d:mage#1438174915672150056]].

## Macros and addons

- **One-button Fire (Roid-Macros):** `#showtooltip` / `/cast [mybuff:"Hot Streak">=#5, noselfcasting:"Pyroblast"] Pyroblast; [nocooldown] Fire Blast; Fireball` [[d:mage#1479141051578056734]]. It was written before the Fire Blast fix, and players expected it to work better after 1.18.1 [[d:mage#1479141150907564164]].
- **BigWigs MageTools** tracks Ignite ticks, Ignite owner and Fire Vulnerability stacks, and provides the drop-ignite alert [[d:mage#1461758394238242907]], [[d:mage#1461761884368797788]].
- **aDF** tracks curses, Ignite and boss debuffs [[d:mage#1461120242817433701]]. **ProcDoc** shows Hot Streak stacks [[d:mage#1465683822631845959]].
- Nampower is needed as for any mage (see [Arcane](arcane.md#macros-and-addons)).

## Raid notes

- **[Molten Core](../../instances/molten-core.md) and [Blackwing Lair](../../instances/blackwing-lair.md):** do not bring Fire. In BWL "only 3/8 work for Fire" (Vaelastrasz and Nefarian are immune, and Firemaw, Ebonroc and Flamegor are effectively immune) [[d:mage#1493999508734873651]]. "Bringing fire into MC is straight up trolling" [[d:mage#1453078085619679375]]. Chromaggus has only ~15 fire resistance; his gimmick is rotating vulnerabilities [[d:mage#1493999774410608701]]. Everyone, Fire or not, should mix fire resistance into their gear for Firemaw [[d:mage#1493999900881453177]].
- **Fire-viable content before Naxx:** ZG, Kara10/Kara40 (selectively), AQ20/AQ40. AQ40 "isn't the most fire friendly raid" [[d:mage#1450520418581483572]], [[d:mage#1450478366330458194]]. Outside Broodlord and Chromaggus, most dragons are fire-immune [[d:mage#1453290864183869510]].
- **[Tower of Karazhan](../../instances/tower-of-karazhan.md):** Fire is the answer to arcane-immune **Anomalus**; Arcane mages swap to Fire there and often stay for **Medivh** [[d:mage#1433242094159527936]]. **Mephistroth** is the 2nd-best Kara40 fight for Fire [[d:mage#1440788776791183471]]. Incantagos/Anomalus openers are above.
- **Naxx:** **Loatheb** is the Fire showcase ("Fire is better on Loatheb for sure") [[d:mage#1444812675610710076]]. Apparent missing Ignite ticks there are usually the visible-cap quirk [[d:mage#1484285532308771007]]. **Patchwerk:** solo Fire reached 2k DPS [[d:mage#1487093190426366004]]. **Faerlina:** pre-pop Greater Fire Protection Potion and Fire Ward [[d:mage#1438174915672150056]].

## Common mistakes

1. Bringing Fire to MC/BWL [[d:mage#1493927839274373200]].
2. Holding Fire Blast. After 1.18.1 it is your highest-DPS spell, so press it on cooldown [[d:mage#1487204103632191600]].
3. Casting another Fireball at 5 Hot Streak stacks instead of Pyroblast [[d:mage#1479141574372757517]].
4. Building Ignite before Fire Vulnerability is stacked [[d:mage#1466214293728137430]].
5. Nursing a weak or partially resisted Ignite instead of dropping and rebuilding it [[d:mage#1487206596852449382]].
6. Adding extra Scorches to "extend" a big Ignite [[d:mage#1478881200079769690]].
7. Stacking small haste sources that break the 2-Fireball weave (contested) [[d:mage#1489266514749034536]].
8. Running 4+ Fire mages without coordination; Ignite is shared, so too many hurt individual DPS [[d:mage#1465729874361716944]].
