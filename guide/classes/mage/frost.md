# Frost Mage (ranged DPS)

**Recommendation:** Frost is the **weakest raid spec** in 1.18.1. It is the best spec for **leveling, soloing and control**, and fine in early raids (MC/Onyxia/BWL). If you raid Frost, play **12/0/39**. Get **16% spell hit** (6% from Elemental Precision). Spam **Frostbolt**, cast **Icicles only when Flash Freeze procs**, **Frost Nova** freeze-immune bosses on cooldown from melee range to force procs, and recast **Ice Barrier** on cooldown for its damage buff. For raid DPS in later tiers, switch to [Arcane](arcane.md).

| | |
|---|---|
| Role | Ranged caster: Frostbolt filler, Icicles bursts on Flash Freeze procs, strongest defensive kit (Ice Barrier, Ice Block, Cold Snap) |
| Viability (1.18.1) | **Niche in raids.** In one week's top-100 Kara mage parses there were about 2 Frost vs 90 Arcane [[d:mage#1468709653184643163]]. "Frost is the spec that needs changes the most" [[d:mage#1487896972244422951]]. It still "competes with arcane in the earlier raids" but does not scale [[d:mage#1464997486350569646]], and "frost is ok in slow raids" but degrades on fights under ~1:20, where you cannot drink [[d:mage#1429249488408805417]]. **Contested:** "Frost performs just fine, and in fact does competitive DPS with arcane" [[d:mage#1477405415108251649]] |
| Difficulty | Medium: few buttons, but proc hunting and positioning for Frost Nova |
| Strengths | Survival; big burst windows when Flash Freeze procs; extra damage on frost-weak MC trash [[d:mage#1448401911437988012]]; best leveling and open-world spec |
| Weaknesses | Flash Freeze is binary: "It either procs 100% with nova, or 0%" depending on whether the target is freeze-immune [[d:mage#1491938710412071152]]. Also: close range for Nova, no pushback protection, no movement filler, no mana-return talent in the tree [[d:mage#1484630072374726736]]; poor mana on fast fights [[d:mage#1429249488408805417]] |

## How to play

The level-60 decision loop. On freezable mobs (open world, dungeons, some raid trash) play the [leveling loop](leveling.md#the-pull-and-kill-loop) instead: Nova and Cone of Cold root freezable mobs away from the tank.

1. **Pre-pull:** `Ice Barrier`. Its +10% Frost damage for 60 s starts on the cast [[d:mage#1466881324055920836]].
2. **Opener:** `Frostbolt` → `Icicles` (if Flash Freeze procs) → `Frost Nova` (if you are in melee range) → `Icicles` [[d:mage#1466891208532955228]], [[d:mage#1448401911437988012]].
3. **Single-target loop** (details in [Single-target rotation](#single-target-rotation-freeze-immune-raid-bosses)):
   1. `Icicles` only while Flash Freeze is active. Never cast it without the proc.
   2. `Ice Barrier` when it is off cooldown.
   3. `Frost Nova` when it is off cooldown and you are in melee range of a freeze-immune boss.
   4. `Cone of Cold` when you are in range.
   5. `Cold Snap` to reset Nova for another Nova → Icicles pair.
   6. `Frostbolt`.
4. **Cooldowns:** Ice Barrier on cooldown; Cold Snap for a second Nova, Barrier or Ice Block; on-use trinkets as in [Cooldowns and mana](#cooldowns-and-mana). Ice Block does not drop threat [[d:mage#1475235315546591466]].
5. **AoE switch** (freeze-immune packs, see [AoE rotation](#aoe-rotation-raid-trash)): up to 5 mobs, `Cone of Cold` → `Icicles` → `Frost Nova` → `Icicles` → `Arcane Explosion`. More than 5 mobs, `Cone of Cold` → `Arcane Explosion` spam. Never Blizzard for damage.
6. **Mana:** Frost runs dry on fast fights [[d:mage#1429249488408805417]]. Use mana gems and tea first and `Evocation` when low (see [Arcane: Mana](arcane.md#mana)). Drink between pulls.
7. **Movement:** Icicles roots you for its whole channel, and only Blink frees you, so never start it in raid AoE [[d:mage#1428745165132140588]]. While moving, use the instants: `Cone of Cold`, `Frost Nova`, `Fire Blast` *(vanilla baseline)*.

## What 1.18.1 changed for Frost

- **Ice Barrier:** +5% Frost damage while the shield holds and +10% Frost damage for 1 minute after you cast it ([Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). That is 15% total while the barrier holds, the same as before, but you now keep 10% after it breaks [[d:mage#1466881324055920836]]. Players called it a minor QoL change [[d:mage#1466941066073870347]]. The buff can look like it vanished when the shield breaks; that was a pfUI display issue [[d:mage#1484696403149193316]], [[d:mage#1484866761202602075]].
- Nothing else. "Frost is getting better damage, that's all" [[d:mage#1484356989961240717]]. Its mana problems were not addressed [[d:mage#1464428023045427210]].
- **Earlier (still relevant):** Flash Freeze no longer procs from Free Action Potion or Blessing of Freedom, because "you could just delete people" [[d:mage#1486095084108779655]]. Ragnaros was made freeze-immune, so Flash Freeze works on him [[d:mage#1384620010525425845]]. Improved Blizzard's slow was cut hard (see [Leveling](leveling.md#aoe-farming)).

## Talent build

### Raid 12/0/39 (recommended)

Luden TA's raid build for single target with AoE flex [[d:mage#1425935263019958373]]:

| Tree | Talent | Points |
|---|---|---|
| Arcane | Arcane Subtlety | 2/2 |
| Arcane | Magic Absorption | 3/3 |
| Arcane | Arcane Concentration | 5/5 |
| Arcane | Arcane Impact | 2/3 |
| Frost | Improved Frostbolt | 5/5 |
| Frost | Elemental Precision | 3/3 |
| Frost | Piercing Ice | 3/3 |
| Frost | Frostbite | 3/3 |
| Frost | Improved Frost Nova | 2/2 |
| Frost | Ice Shards | 5/5 |
| Frost | Cold Snap | 1/1 |
| Frost | Improved Blizzard | 1/3 |
| Frost | Arctic Reach | 2/2 |
| Frost | Frost Channeling | 3/3 |
| Frost | Ice Block | 1/1 |
| Frost | Icicles | 1/1 |
| Frost | Improved Cone of Cold | 3/3 |
| Frost | Winter's Chill | 3/5 |
| Frost | Flash Freeze | 2/2 |
| Frost | Ice Barrier | 1/1 |

Split **12/0/39**, VALID. Codes: `talents.turtlecraft.gg/mage?points=TAAoC--FYbQpBTABLYQB` · `talents.turtlecraft.gg/mage/F052--5LK57F19K6`
[Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=mage&t=23000502--0533320511230113321)

Why:

- **Frostbite 3/3** is mandatory in raids. Flash Freeze procs only when a freeze hits a freeze-immune target. Without Frostbite, only Frost Nova can proc it; with Frostbite, Frostbolt and Cone of Cold can too [[d:mage#1430637056815796386]].
- **Improved Blizzard 1/3** lets you fish for Flash Freeze with rank-1 Blizzard on trash packs [[d:mage#1430636501141553164]].
- **Winter's Chill:** 2-3 points give most of the uptime. The wiki sim: 5/5 gives 96.7% uptime, 3/5 90.5%, 2/5 80.4%, with almost no DPS difference ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)). Luden runs 3 even solo and adds one if the raid has several Frost mages [[d:mage#1425935263019958373]].
- **Improved Frostbolt** cuts Frostbolt from 3.0 to 2.5 s [[d:mage#1466904371899142441]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **No Blizzard fishing 13/0/38** | Arcane Impact 3/3, Winter's Chill 2/5 (Pepopo). "If you never fish for Icicles procs off Blizzard", move the Improved Blizzard point into Winter's Chill | `TAAoD--FYbQpBTABLQQB` | [[d:mage#1432792185249464370]], [[d:mage#1432792263854915685]] |
| **13/0/38 (no Improved Blizzard)** | Arcane Impact 3/3, Winter's Chill 3/5, no Improved Blizzard: "This is what I run for frost" | `TAAoD--FYbQpATABLYQB` | [[d:mage#1466905175942893822]] (author: may be dated) |
| **Open world / solo 10/0/41** | No Frostbite, Flash Freeze or Icicles focus. Shatter 5, Permafrost 3, Winter's Chill 5. This is also where the [Frost leveling order](leveling.md#talent-order-frost-10-60) ends (with Frostbite instead of Winter's Chill) | `TAAo--FYYTpADoBLoAB` | Posted for advice as a solo-farming tree [[d:mage#1484590514455056566]] (single source) |

For leveling and PvP, Luden TA recommends deep Frost with "arctic reach, frostbite, improved frostbolt, cold snap. Basically most of frost tree except for maybe imp blizz, flash freeze, icicles, winters chill" [[d:mage#1492227456306909355]], [[d:mage#1492227534656372848]].

## Stat priority and caps

1. **Spell hit to 16%:** 6% from Elemental Precision, 2% from the ZG head/leg enchants, 1% from Emerald Blessing, so about 7% from gear [[d:mage#1484935527709806603]], [[d:mage#1425934816251220068]]. The wiki sim values hit highest for Frost (~18-19 SP per 1% at endgame) ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)).
2. **Spell power.**
3. **Haste ≈ crit:** about 12-13 SP and 11-12 SP per 1% in the same sim. Haste food is not recommended for Frost [[d:mage#1464383668574224529]].
4. **Spell penetration** only for Kel'Thuzad (200 frost resistance); everything else needs no penetration once Curse of Shadows or Elements is up [[d:mage#1450392648216088629]], [[d:mage#1450392717476630539]]. Sapphiron is flatly frost-immune [[d:mage#1494089881943543971]].

## Single-target rotation (freeze-immune raid bosses)

This rotation applies only to targets that **cannot be frozen**, which is most raid bosses. On freezable mobs (dungeons, open world, some raid trash) Nova and Cone of Cold root the mobs away from the tank, so use the leveling loop instead ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)).

**Pre-pull:** `Ice Barrier`. Its 10%-for-60-s buff now comes from the cast [[d:mage#1466881324055920836]].

**Opener:** `Frostbolt` → `Icicles` → `Frost Nova` → `Icicles` (ZeroRanger) [[d:mage#1466891208532955228]]. Luden TA's burst: precast `Frostbolt` → `Cone of Cold` → `Icicles` (if Flash Freeze procs) → `Frost Nova` → `Icicles`, "insanely big burst in a 6 second window" [[d:mage#1448401911437988012]].

**Priority** (bot-ready):

1. **`Icicles`** if Flash Freeze is active. Cast it immediately; the proc makes the channel much faster and resets Icicles' cooldown [[d:mage#1430291530333028524]]. **Never cast Icicles without the proc.** It roots you, you take extra damage if hit, and it is worse than Frostbolt [[d:mage#1491959578827559113]], [[d:mage#1491935288551932055]].
2. **`Ice Barrier`** if it is off cooldown (the damage buff is on cast).
3. **`Frost Nova`** if it is off cooldown and you are in melee range of the boss, to force a proc [[d:mage#1430637056815796386]].
4. **`Cone of Cold`** if you are in range. With Frostbite it can proc Flash Freeze [[d:mage#1430637056815796386]].
5. **`Cold Snap`** to reset Nova for another Nova → Icicles pair. oh's sequence: Icicles > Nova > Icicles > Cold Snap > Icicles > Nova > Icicles > Frostbolt until Nova is back [[d:mage#1466899456141299763]].
6. **`Frostbolt`**.

Icicles notes:

- Icicles roots you for the full channel, even if you cancel it early; only Blink frees you [[d:mage#1428745165132140588]], [[d:mage#1430673305886658611]]. Do not start it standing in raid AoE.
- Macro: `/cast [mybuff:Flash_Freeze] Icicles; Frostbolt`. It must be `mybuff`, not `buff`, or the queue replacement silently fails [[d:mage#1454246436718776330]].
- Known bugs: Icicles sometimes shows "invalid target" on the boss that procced it [[d:mage#1436827284777730079]]. A Flash Freeze Icicles cast can be denied outright if you take damage at the exact moment you cast [[d:mage#1474564050959597790]].

## AoE rotation (raid trash)

Wiki raid-trash rules ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)), freeze-immune packs only:

- **Up to 5 mobs:** `Cone of Cold` → `Icicles` (if it procs) → `Frost Nova` → `Icicles` → `Arcane Explosion`.
- **More than 5 mobs:** `Cone of Cold` → `Arcane Explosion` spam, then Icicles on a survivor at the end.
- **Medium packs:** alternate rank-1 `Blizzard` (to fish procs) with `Icicles` on the skull target [[d:mage#1443219267058139311]]. Fishing with 1 point of Improved Blizzard is "insanely good" on some fights (Garr: fish procs off his adds into Icicles on the boss) and roughly break-even on a generic 5-mob pack [[d:mage#1467928297353773188]], [[d:mage#1467928499997245481]].
- Blizzard for damage is dead: "blizzard is dead, coc is alive" [[d:mage#1436705656941056132]].

## Cooldowns and mana

- **Ice Barrier** on cooldown for the damage buff. **Ice Block + Cold Snap** give you a second Block, Nova and Barrier. Ice Block does not drop threat [[d:mage#1475235315546591466]].
- **Mana** is Frost's weak point on fast fights [[d:mage#1429249488408805417]]. Use Evocation, gems and tea as for any mage (see [Arcane](arcane.md#mana)).
- **Trinkets** (wiki sim, 2-min fight): Tear > Mark of the Champion > MQG > REoS > Shard of the Nightmare > Gulch > Eye of Diminution > ToEP > Zandalarian Hero Charm ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)).

## Gear

- **Pre-raid** (wiki Frost list): Spellweaver's Turban, Diana's Pearl Necklace, Boreal Mantle, Shroud of Arcane Mastery, Freezing Lich Robes, Sublime Wristguards, Hands of Power, Ban'thok Sash, Skyshroud Leggings, Kayser's Boots of Precision, Ring of the Academy / Rune Band of Wizardry / Don Mauricio's Band, Witchblade, Tome of Shivering Secrets ([Karazhan Crypt](../../instances/karazhan-crypt.md)), Bonecreeper Stylus, Blackfire Orb, Fabric of Time ([Black Morass](../../instances/black-morass.md)) ([Mage General FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ)).
- **Rings:** Dragonslayer's Signet for Frost [[d:mage#1452870741476507689]].
- **Weapons:** Desecration is "pretty decent for frost" [[d:mage#1478092338025992336]].
- **Wand:** bring a Frost wand to Viscidus [[d:mage#1483585133893128293]].
- **Sets:** Frost uses the regular tier pieces. On trash, wear 3 Frost/Fire T3.5 + 3 Arcane T3.5 for Mirror Magic (+20% for Frost on rewind) [[d:mage#1481363007782129816]].
- **Loop of Unceasing Frost** does not freeze anything (it applies a +fire-damage Frostbite debuff) and does not interact with Flash Freeze [[d:mage#1493363125746143313]].

## Enchants and consumables

- Enchants as for Fire: Presence of Sight on head/legs [[d:mage#1482099000252563546]], Power of the Scourge (+15 SP / 1% crit) on shoulders for Fire/Frost [[d:mage#1482101083798245428]], Enchanted Armor Kit on boots [[d:mage#1491271778432192535]], +30 Spell Damage on the weapon [[d:mage#1443591709966729426]].
- Consumables: Flask of Supreme Power, Elixir of Greater Frost Power, Greater Arcane Elixir, Dreamshard Elixir, Dreamtonic, Mageblood Potion, Spirit of Zanza, Tel'Abim food (SP), Brilliant Wizard Oil [[d:mage#1354993754649399397]], [[d:mage#1452290109851570352]].

## Raid notes

- **[Molten Core](../../instances/molten-core.md):** Frost is at its best here. Many trash mobs are weak to frost, and between packs Nova forces procs [[d:mage#1448401911437988012]]. On Garr, fish procs off the adds [[d:mage#1467928499997245481]].
- **AQ40, Viscidus:** Icicles "completely destroy" Viscidus [[d:mage#1474089800805122089]].
- **[Tower of Karazhan](../../instances/tower-of-karazhan.md), Anomalus** (arcane-immune): as Frost "you'll die less... due to ice barrier but do less damage than fire" [[d:mage#1454850922089021500]].
- **Naxx:** Sapphiron is immune to frost [[d:mage#1494089881943543971]]. On Kel'Thuzad (200 frost resistance) Frost needs spell penetration [[d:mage#1450392648216088629]], [[d:mage#1450392717476630539]]. Constant raid damage (Thaddius) breaks Ice Barrier and hurts Frost [[d:mage#1357116456890011739]].

## Common mistakes

1. Casting Icicles without a Flash Freeze proc [[d:mage#1491959578827559113]].
2. Frost Nova / Cone of Cold on raid mobs that **can** be frozen; you root them off the tank ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)).
3. Icicling while standing in AoE, or trying to cancel the root without Blink [[d:mage#1430673305886658611]].
4. Skipping Frostbite in a raid build. Without it only Nova can proc Flash Freeze [[d:mage#1430637056815796386]].
5. Letting Ice Barrier sit on cooldown; since 1.18.1 the cast itself is the damage buff [[d:mage#1466881324055920836]].
6. Using `buff` instead of `mybuff` in the Icicles macro [[d:mage#1454246436718776330]].
7. Expecting Flash Freeze from Free Action Potion or Freedom targets (removed) [[d:mage#1486095084108779655]].
8. Taking 5/5 Winter's Chill as the only Frost mage (2-3 is enough) ([Mage Frost FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_Frost_FAQ)).
