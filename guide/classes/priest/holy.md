# Holy Priest (healer)

**Recommendation:** play the post-1.18.1 **14/37/0** raid build, keep **Renew** rolling on tanks, use **Flash Heal** (rank 7 for big damage, rank 1 to top up) as your main single-target heal, and put **Prayer of Healing** on whichever party is hurt. Weave a rank-1 Renew between other heals so **Book of Prayer** refunds mana. Save **Ascendance** for enrage and burst windows.

| | |
|---|---|
| Role | Raid and dungeon healer; raid buffs (Fortitude, Divine Spirit, Shadow Protection, Fear Ward), magic and disease dispels |
| Viability (1.18.1) | **Top tier.** Players called the final-patch Holy "amazing" and "lovable" [[d:priest#1504669467290894356]], [[d:priest#1497082446393643141]], [[d:priest#1495396372092813322]]. With the targetable Prayer of Healing, Holy is seen as the second-best AoE healer after Chain Heal shamans [[d:priest#1484218086587629648]]. |
| Difficulty | Medium: you pick ranks and spells by hand, and you plan around the 5-second rule and Book of Prayer. |
| Strengths | Renew + Flash Heal core, a targetable Prayer of Healing, Ascendance (a 30 s burst cooldown that also breaks CC), Power Word: Shield, the widest healer toolkit |
| Weaknesses | Slow casts that faster paladin and shaman heals "snipe" [[d:priest#1473372391663992844]]; logs do not count shield absorbs, so meters under-report you [[d:priest#1464390988888801549]]; mana is tight while undergeared |

Before 1.18.1, Holy was rated the weakest of the healers ("pala > druid/sham > priest") [[d:priest#1440957032432795709]]. Old guides that call it weak, or that build around Proclaim Champion, are out of date. Proclaim Champion and its connected spells were removed in 1.18.1 [[d:priest#1464351944230436874]], [Jamey, 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).

## How to play

The level-60 loop for raids. For the reasons, see the linked sections. For dungeons while leveling, see [Leveling: Gameplay by level](leveling.md#gameplay-by-level).

**Default heal by damage pattern:**

| Damage pattern | Default | Notes |
|---|---|---|
| Tank, steady damage | Max-rank `Renew` always up, then `Flash Heal` R7 when damage is heavy | "Always Be cRenewing" [[d:priest#1471865143410430062]] |
| Tank, known spike (tank buster, enrage) | Pre-cast `Greater Heal` R1, and cancel it at about two-thirds if not needed | [Single-target](#single-target-healing-priority-list) |
| Anyone near half health | `Flash Heal` R7 | [[d:priest#1493870884375629836]] |
| Small damage on one player | `Flash Heal` R1 | [[d:priest#1492115676935229451]] |
| 3+ damaged in one party | `Prayer of Healing` R2 on that party. Use R4, or `Inner Focus` + max rank, to fill them fast | [AoE healing](#aoe-healing) |
| Constant raid damage with 8/8 T2 | `Greater Heal` R1 spam | **Contested**, see [Single-target](#single-target-healing-priority-list) |
| About to die, no time to cast | `Power Word: Shield`, then heal. Not on warrior or bear tanks except before the pull or in a real emergency | [[d:priest#1426238485303394435]] |

**Between heals:** cast `Renew` R1 on someone who needs it (or on yourself), so your next heal is a different spell and Book of Prayer refunds mana. Do not bend your healing to chase refunds [[d:priest#1492115676935229451]], [[d:priest#1486824507040862208]].

**Triage order:** you → tanks → other healers → DPS [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325). Heal raiders to 80–90%, not 100% [[d:priest#1428691896514908271]].

**Keep up:** Renew on the tanks. Fortitude, Divine Spirit, and Shadow Protection on shadow fights. Inner Fire. Fear Ward on the tank before fears. `Lightwell` before the pull, as a bonus only ([Cooldowns](#cooldowns)).

**Mana plan:**

1. Heal in bursts, then stop casting so the 5-second-rule regen ticks [[d:priest#1378653877729099889]].
2. Pre-cast and cancel on tanks instead of spamming small heals [[d:priest#1490473551717728317]].
3. Take a Major Mana Potion early in long fights. Tea and runes share a cooldown ([Mana management](#mana-management)).
4. Cast max ranks at endgame. Downrank only when you are short on mana (fresh 60, long fights) [[d:priest#1494888479052533902]].

**Cooldowns:**

- `Ascendance` just before a boss enrages or a burst phase. It also breaks CC on you [[d:priest#1492116211587088486]].
- `Inner Focus` for a free max-rank Prayer of Healing or Greater Heal.
- `Fade` if you pull aggro. `Desperate Prayer` (Human/Dwarf) for a self emergency.

**Dispels and utility:** dispel magic and diseases with Rinse (or a similar addon), and do not blind-spam dispels on Nefarian [[d:priest#1429146212774187250]]. During Nefarian's priest call, use only Renew and Power Word: Shield [[d:priest#1484524057155211406]]. More in [Role duties](#role-duties).

## Talent build

### Raid healer 14/37/0 (recommended)

This is Bluefear's build ("what im running") [[d:priest#1488039697971281981]]. It is one of several posted 14/37/0 builds that share the same core [[d:priest#1484569837060489267]], [[d:priest#1484588714758770728]], [[d:priest#1486689216615419986]].

| Tree | Talent | Points |
|---|---|---|
| Discipline | Mental Agility | 5/5 |
| Discipline | Unbreakable Will | 3/5 |
| Discipline | Improved Power Word: Fortitude | 2/2 |
| Discipline | Inner Focus | 1/1 |
| Discipline | Meditation | 3/3 |
| Holy | Improved Renew | 3/3 |
| Holy | Holy Focus | 2/2 |
| Holy | Divine Fury | 5/5 |
| Holy | Holy Reach | 2/2 |
| Holy | Inspiration | 3/3 |
| Holy | Holy Nova | 1/1 |
| Holy | Empowered Recovery | 1/2 |
| Holy | Improved Healing | 3/3 |
| Holy | Spiritual Guidance | 5/5 |
| Holy | Book of Prayer | 2/2 |
| Holy | Spirit of Redemption | 1/1 |
| Holy | Reservoir of Light | 3/3 |
| Holy | Spiritual Healing | 5/5 |
| Holy | Ascendance | 1/1 |

Split **14/37/0**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/priest?points=AoDCBD-aAFCAZLoRYAoB-` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=00503020103-32050203113521351)) · `talents.turtlecraft.gg/priest/0UIC6I-K5237NDN6`

Why these points:

- **Spiritual Healing 5/5 is mandatory.** Healing spells lost 15% of base value (ranks above 30) and 15% of their scaling, and 5/5 Spiritual Healing brings you back to the old numbers [[d:priest#1425815068720758784]], [[d:priest#1425818939153322024]].
- **Empowered Recovery: one point is enough.** Only the first point adds the extra Renew tick [[d:priest#1490554883042967562]]. Its 3% bonus does not affect Renew itself [[d:priest#1484570397427892455]]. Improved Renew 3/3 is taken only because Empowered Recovery requires it. On its own, Improved Renew raises Renew's base value only [[d:priest#1432849290006499498]].
- **Book of Prayer 2/2** refunds mana when a heal is a different *spell* from your previous heal. A different rank of the same spell does not count [[d:priest#1484561705487958016]], [[d:priest#1484887536890417222]]. Power Word: Shield and Holy Nova do not count as healing spells for it [[d:priest#1484259678643945764]], [[d:priest#1485623406207434894]].
- **Reservoir of Light 3/3** makes Lightwell worth about 4,000 extra smart healing per boss fight, which Bluefear prefers over 3% crit [[d:priest#1489274146826227752]]. The consensus leans towards Reservoir of Light and Holy Reach over flat crit [[d:priest#1484570386963103745]], [[d:priest#1484302627947679805]].
- **Holy Reach 2/2** widens Prayer of Healing's radius, which Snackz calls "pretty huge" compared with 2% crit [[d:priest#1484302627947679805]]. It also helps on fights with strict positioning such as Firemaw [[d:priest#1484207147133964420]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **More crit** | Move Holy Reach 2 + Holy Nova 1 into Divinity 3 | `AoDCBD-aYFAAYLoRYAoB-` ([calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=00503020103-32350003013521351)) | Bluefear: "if you like more crit you can probably move points from holy reach/holy nova" [[d:priest#1488039697971281981]] |
| **Low Spiritual Guidance** (Kabooble) | Spiritual Guidance 2/5 and Holy Reach 1/2; Divinity 5/5 and Empowered Recovery 1/2 instead of Holy Nova | `AoDCBD-aoFBAYLQRYAoB-` ([calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=00503020103-32550103013221351)) | Saw only ~30 healing difference between ranks 2 and 4 in full Kara40 gear (single source) [[d:priest#1484588714758770728]] |
| **21/30 hybrid** | Disc Enlighten points in exchange for some Holy throughput | no post-1.18.1 code posted | Lirya: "will make you lose out on some healing numbers but my guess is it will become quite popular" [[d:priest#1487035175626997761]] |

!!! warning "Pre-1.18.1 builds"
    Any build with Proclaim Champion, Champion's Grace, Revive Champion, "Swift Recovery", or a clickable Lightwell is from before 1.18.1. Old deep-Holy builds ran about 17/34/0 [[d:priest#1359455178167816325]], and the Enlighten shape was 21/30/0 [[d:priest#1365291378191630416]]. Some Enlighten-healer builds were already dead before Champion's removal, because an earlier nerf cut Enlighten's proc rate from heals [[d:priest#1478095132254277843]].

## Stat priority and caps

1. **Healing power** until you reach roughly 1,000. With just under 1k healing power, Flash Heal, Renew and Prayer of Healing are "more then enough" [[d:priest#1493919533281312859]].
2. **Spell crit.** Inspiration and 150% crit heals favour it [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).
3. **Intellect**, then **Spirit**, then **mp5**, then **Stamina** (same source). Spirit converts to healing through Spiritual Guidance and to regen. Lirya's comparison: +30 Spirit food beats +8 mp5 food [[d:priest#1486700633032626417]].
4. **Haste**: take cheap sources such as haste food and Juju. They matter for landing heals before other healers snipe them ("the difference between 1.1s and 1.2s flash is very real") [[d:priest#1471624985767444500]]. Haste sources multiply with each other, and anything that pushes a cast below the 1.5 s GCD is wasted [[d:priest#1476373295271116850]], [[d:priest#1476377172339064873]].

Caps: healing has none. Spell hit only matters for dispels and offensive spells.

Useful numbers (tested in-game):

- **Coefficients** after the 15% nerf: Renew 0.857, Heal 0.857, Greater Heal 1.0, Flash Heal 0.433, Prayer of Healing 0.433, Lesser Heal 0.433, Power Word: Shield 0.35 [[d:priest#1465272044705939650]]. With 5/5 Spiritual Healing, Renew scales at about 1.12× healing power [[d:priest#1476694995363823717]].
- **Power Word: Shield** = `942 × (1 + 0.15 Improved PW:S + 0.2 Force of Will) + healing power × 0.35`. The shield talents raise only the base value [[d:priest#1427126126756630529]], [[d:priest#1427129205245739041]].
- A reference Kara40-tier healer reaches about 920 healing and 100-105 mp5 unbuffed [[d:priest#1468208925961883851]].

## Single-target healing (priority list)

Target priority: you, then the tank, then the other healers, then DPS [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).

1. **Target about to die, and no time for a cast:** cast `Power Word: Shield`, then heal [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325). Exception: on warrior and bear tanks, shield only before the pull or in a real emergency. An absorbed hit gives them no rage, roughly 12 rage lost per 1,000 absorbed [[d:priest#1426238485303394435]], [Akos1896, 2025-09-25](https://forum.turtlecraft.gg/viewtopic.php?p=153177#p153177).
2. **Tank taking heavy damage, or anyone near half health:** `Flash Heal` rank 7 [[d:priest#1493870884375629836]], [[d:priest#1492115676935229451]].
3. **Big damage you know is coming (tank buster, enrage):** precast `Greater Heal` rank 1 [[d:priest#1492115676935229451]]. With 8/8 T2, Greater Heal spam is also the tool for steady raid damage (see Gear).
4. **Tanks:** keep `Renew` (max rank) up at all times [[d:priest#1492115676935229451]]. "Always Be cRenewing" [[d:priest#1471865143410430062]].
5. **Anyone with a small amount of missing health:** `Flash Heal` rank 1 [[d:priest#1493870884375629836]].
6. **Between every heal:** cast `Renew` rank 1 on a raid member, or on yourself when nobody needs it, so the next heal is a different spell and Book of Prayer refunds mana [[d:priest#1492115676935229451]], [[d:priest#1484561705487958016]]. Do not warp your healing to chase refunds. Heal normally and let them happen [[d:priest#1486824507040862208]].
7. **Mana conservation:** keep raiders at 80-90% instead of 100%. The missing 10-20% almost never causes a death [[d:priest#1428691896514908271]]. On a tank you are pre-healing, start the big heal and cancel it at about two-thirds of the cast bar if it is not needed. This keeps you inside long 5-second-rule regen windows [[d:priest#1490473551717728317]].

**Contested: Greater Heal's place.** Lirya calls Greater Heal "niche" in 1.18.1, with Prayer of Healing stronger where Greater Heal used to shine [[d:priest#1487035175626997761]]. Others keep 8/8 T2 Greater Heal spam for constant-damage fights such as Sapphiron and the first Kara40 boss [[d:priest#1485274206110220298]], [[d:priest#1454629825896644825]]. t0uchm3 sees Flash Heal + Renew staying the foundation, with Prayer of Healing strong but not replacing it [[d:priest#1484993455808708691]].

## AoE healing

| Situation | Action |
|---|---|
| 3+ members of one party damaged | `Prayer of Healing` targeted on a member of that party. Since 1.18.1 you can target any group [[d:priest#1484217772614615302]], even players outside your raid [[d:priest#1484568899641933895]]. Rank 2 is the efficient default; use rank 4 to get everyone full fast [[d:priest#1492115676935229451]]. |
| Party-wide burst, mana to spare | `Inner Focus` + max-rank Prayer of Healing (a free cast) [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325) |
| Repeated raid damage | `Lightwell` placed where the raid stacks: 10 charges or 1 minute, 20% of each direct heal (40% with 3/3 Reservoir of Light) echoed to another wounded player, at most once per 5 s per target [[d:priest#1464386661973622835]], [[d:priest#1473373046105444475]]. Prayer of Healing does not trigger it [[d:priest#1464513512071233628]]. |
| 2 targets | Renew each, Flash Heal the lower one |

In dungeons while leveling, Prayer of Healing is worth its mana only if 3 or more people fully benefit [[d:priest#1471253529334382634]]. As a heal, `Holy Nova` is outclassed by Prayer of Healing: rank-1 Prayer of Healing costs about half the mana for the same healing [Itsbacon, 2025-08-06](https://forum.turtlecraft.gg/viewtopic.php?p=143410#p143410).

!!! bug "Lightwell targeting"
    After release, the new Lightwell ("Splendor of Light") healed full-health players and ignored wounded ones [[d:priest#1489176818719391795]], [[d:priest#1489379966117216477]]. Staff shipped a hotfix for its targeting on 2026-03-24 [Torta, 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139), but the player bug reports came later (April). Treat Lightwell as a bonus, not a planned heal.

## Cooldowns

| Cooldown | Use |
|---|---|
| **Ascendance** (5 min) | For 30 s your heals cost 33% less and cast 20% faster, and targets gain +15% healing taken (Apotheosis). It works while you are CC'd and removes the CC [[d:priest#1464351944230436874]]. It does not shorten the GCD, by design [[d:priest#1464513806959902842]]. Press it just before a boss enrages so the buff is on your tanks during the enrage [[d:priest#1492116211587088486]]. Lirya calls it "by far the best trinket" [[d:priest#1487035175626997761]]. |
| **Inner Focus** (3 min) | A free max-rank Prayer of Healing or Greater Heal |
| **Lightwell** (5 min) | Before the pull or a burst phase. Place it at the cursor with `/cast Lightwell` + `/run CameraOrSelectOrMoveStart()` + `/run CameraOrSelectOrMoveStop()` [[d:priest#1487150323654197319]] |
| **Fade** | When you pull aggro. 1.18.1 adds a 15% total threat reduction, but the threat comes back when Fade ends [[d:priest#1484604133200891944]] |
| **Fear Ward** | Baseline for every race. Put it on the tank before fear mechanics [[d:priest#1447464110588428309]] |
| **Desperate Prayer** (Human/Dwarf) | Self emergency. It needs a GCD and cannot be cast while silenced [[d:priest#1425357263790407743]] |

## Mana management

- Heal in bursts, then stop casting so the 5-second rule regen can tick [[d:priest#1378653877729099889]].
- Take a Major Mana Potion early in long fights so the next one is ready in time. Tea and Dark or Demonic Runes share a cooldown [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).
- **Contested: 3-piece T2 (15% regen while casting).** It is dead weight once your raid is fast and you finish fights with mana left [[d:priest#1488498645782237245]]. It remains worth it on long, constant-damage fights [[d:priest#1485261459729547394]].
- If you run out on long Kara40 fights, swap in Pendant of Forgotten Names and Ring of Spiritual Fervor (+20% regen while casting each) [[d:priest#1488477999262339093]].
- **Downranking:** at endgame you mostly cast max ranks. Downranking belongs to late leveling and a fresh 60 [[d:priest#1494888479052533902]]. When you do downrank, Heal rank 2+, Greater Heal rank 1+ and Renew rank 3+ keep full scaling [Sharmaine, 2025-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=161280#p161280).

## Role duties

- **Dispels:** use Rinse or a similar addon. Nefarian's Mind Control showed up as a dispellable "buff", so blind dispel spam can strip allies' buffs [[d:priest#1429146212774187250]].
- **Buffs:** keep Fortitude, Divine Spirit and Shadow Protection (on shadow fights) up. Avoid buffing tanks, ret paladins and enhancement shamans with extras they do not need. They hit the 32-slot visible buff cap, and a toggled buff pushed into the hidden slots can get stuck on until relog [[d:priest#1435581154953662527]].
- **Proactive healing:** pre-HoT and pre-cast on predicted damage instead of reacting. Paladins can spam and druids HoT, so a priest who only reacts gets sniped [[d:priest#1483066575006204057]].

## Gear

### Pre-raid

- Start from Langorn's Turtle-specific list [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325) (the forum pre-raid thread [[d:priest#1424715910295326784]]):

| Slot | Items |
|---|---|
| Head | Cowl of Mivax ([Karazhan Crypt](../../instances/karazhan-crypt.md)), Cassandra's Grace, Crimson Felt Hat |
| Neck | Animated Chain Necklace; Hollowbone Choker ([Black Morass](../../instances/black-morass.md)) |
| Shoulders | Mantle of Lost Hope |
| Back | Hide of the Wild (tailoring); Cloak of Atonement ([Stormwind Vault](../../instances/stormwind-vault.md)) |
| Chest | Robes of the Exalted; Robe of the Custodian (Wardens of Time revered); Truefaith Vestments |
| Wrist | Extremely Well Crafted Cuffs (Black Morass) |
| Hands | Hands of the Exalted Herald |
| Waist | Whipvine Cord |
| Legs | Padre's Trousers |
| Feet | Boots of the Holy Mentor (Karazhan Crypt) |
| Rings | Fordring's Seal, Rosewine Circle, Deepearth Signet |
| Trinkets | Royal Seal of Eldre'Thalas, Blessed Prayer Beads, Second Wind; Sliver of Hope ([Kara10](../../instances/lower-karazhan-halls.md), "a rejuv gem lite") [[d:priest#1430577061092786196]] |
| Weapon | The Hammer of Grace + Thaurissan's Royal Scepter / Tome of Divine Right, or Guiding Staff of Wisdom; later Redemption [[d:priest#1388961040250703903]] |
| Wand | Wand of Eternal Light |

- Do not farm T0.5 for this. Running ZG, Kara10 and AQ20 gives equal or better gear for the time spent [[d:priest#1425148199504580668]].

### Tier sets by phase (Lirya, 2026-03-27 [[d:priest#1487035175626997761]])

| Set | Verdict |
|---|---|
| T1 8-piece | Worth it in MC/BWL gear; falls off once you have Naxx/Kara40 gear |
| T2 | 3-piece (regen while casting) is strong. The 8-piece makes Greater Heal roll an extra Renew [[d:priest#1465305522357145721]], which is best on constant-damage fights [[d:priest#1454629825896644825]] |
| T2.5 | Catch-up gear only. 1.18.1 bonuses: (3) Heal/Greater Heal crits give +80 Spirit for 10 s; (5) Lightwell +5 yd range and +5 charges [Dragunovi, 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272) |
| T3 | Only the 2-piece is good |
| T3.5 | The 3-piece is good, the 5-piece is "ok"; go further only for stats |

Healing sets can be swapped per fight. Pre-patch, one Kara40 healer ran T2 on Gnarlmoon, Anomalus (full-AR T2), Medivh, Chess and Kruul, and a max-heal T3.5 set elsewhere [[d:priest#1476348159809687562]].

### Key raid items

- **Weapon:** the KT mace is BiS and the C'Thun mace is second. Kara40 has no healing weapon upgrade [[d:priest#1435612488430391398]]. Staff of the Dreamer ranks above Benediction, Rod of Resuscitation and the AQ20 exalted staff [[d:priest#1380839856040837210]].
- **Trinkets:** Hazza'rah's Charm of Healing ("extremely good to use on CD") and Breath of Solnius ([Emerald Sanctum](../../instances/emerald-sanctum.md) hard mode; healing power plus a haste proc) [[d:priest#1430577061092786196]]. Breath's "Fever Dream" proc is about 20% haste and is BiS for Greater Heal spam [[d:priest#1471563880747761764]]. The **Scarab Brooch** procs an absorb shield off any heal, including Prayer of Healing ("insanely good") [[d:priest#1486557121268154540]]. It is great on Loatheb and mostly overheal elsewhere [[d:priest#1486790188570120244]].
- **Loop of Infused Renewal** (Greater Heal can proc a free Renew): **Contested.** One tester measured it about 20% better than a T3 ring on Greater Heal spam fights [[d:priest#1476209340376547358]]. L-star disputes its value [[d:priest#1476248084550778973]].
- **Mana items:** Loatheb ring, Rapid Evolution gloves, Maexxna neck, Gnarlmoon cloak, the Emerald Sanctum staff and neck, and Sandals of Inner Peace (BoE) [[d:priest#1449672362759950477]].

## Enchants

| Slot | Enchant |
|---|---|
| Head / Legs | +12 healing (ZG idol / Arcanum of Focus) [[d:priest#1436572060737601658]], [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325) |
| Neck / Rings | +12 healing gemstone (Beautiful Diamond) [[d:priest#1436572060737601658]] |
| Shoulders | Resilience of the Scourge, then ZG +33 healing, then 2% haste [[d:priest#1436572060737601658]] |
| Cloak | Subtlety or +5 all resistances [[d:priest#1436572060737601658]] |
| Chest | **Contested:** +9 healing ("+4 stats is overpriced") [[d:priest#1468405467863711825]] vs +4 stats [[d:priest#1436572060737601658]] |
| Wrist | +24 healing [[d:priest#1436572060737601658]] |
| Hands | +30 healing [[d:priest#1436572060737601658]] |
| Waist | +10 Intellect buckle [[d:priest#1436572060737601658]] |
| Feet | +9 healing armor kit. Minor Speed is pointless with a druid's Emerald Blessing (10% speed; the two do not stack) [[d:priest#1487354359955325078]] |
| Weapon | +55 healing [[d:priest#1436572060737601658]]. The +30 spell power enchant (damage and healing) only goes on one-handers [[d:priest#1423698957384548384]] |

Oil: Brilliant Mana Oil [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).

## Consumables and world buffs

- **Mana:** Major Mana Potion; Tea (shares a cooldown with runes); Dark or Demonic Rune; Mageblood Potion [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).
- **Food:** +30 Spirit food beats Nightfin Soup (mp5) for most priests [[d:priest#1486698026301915317]], [[d:priest#1486700633032626417]]. Empowering Herbal Salad gives +24 healing [[d:priest#1486701507825897482]]. Haste food and Juju help heals land [[d:priest#1471624985767444500]].
- **Spirit:** Spirit of Zanza. The Blasted Lands buff does not stack with Zanza's Spirit [[d:priest#1468409465446469803]].
- **Flask:** Flask of Distilled Wisdom, recommended for Kara40 healing or when undergeared [[d:priest#1441772459757142017]].

## Macros and addons

- **Healing frames:** Puppeteer (click-casting, heal prediction; the usual beginner pick) [[d:priest#1430301336456396943]], pfUI raid frames, or Luna Unit Frames [[d:priest#1494954650951094394]]. For Prayer of Healing prediction across groups, use t0uchm3's HealComm fix or MarcelineVQ's updated Luna [[d:priest#1486349826315653224]].
- **Mouseover:** SuperWoW + SuperCleveRoidMacros for `[@mouseover]` [[d:priest#1423944465361535087]]. Example: `/cast [@mouseover help] Flash Heal;[@target help] Flash Heal;[@player] Flash Heal` [[d:priest#1456997265557291049]].
- **QuickHeal** (auto-target and rank): needs SuperWoW + UnitXP and does not work alongside Nampower's queue [[d:priest#1471653438252122295]]. Its fork adds Prayer of Healing group targeting (`/qh poh`) [[d:priest#1487196238209224814]].
- **Rinse** for dispels [[d:priest#1494976451882258603]]; **LazyRes** for mass resurrection [[d:priest#1441854469217193985]]. Do not trust the TheoryCraft addon's priest coefficients on Turtle [[d:priest#1428434743111848048]].

## Dungeon and raid notes

- **Nefarian ([BWL](../../instances/blackwing-lair.md)), priest class call:** only Renew and Power Word: Shield are safe [[d:priest#1484524057155211406]]. Holy Nova counts as direct healing and can kill people, including you [[d:priest#1493278987101671544]].
- **Firemaw (BWL):** healers stand at max range. Holy Reach and positioning matter [[d:priest#1484207147133964420]].
- **Anomalus ([Kara40](../../instances/tower-of-karazhan.md)):** 8/8 T2 Greater Heal works well, but T2 alone cannot reach the Arcane Resistance floor. One recipe reaches 183 AR with enchanted head, legs, rings, cloak and neck plus a druid buff [[d:priest#1459262973766795264]].
- **Sapphiron (Naxxramas):** a constant-damage fight where 3-piece T2 shines [[d:priest#1485261459729547394]]. Renew does not trigger the fight's heal debuff [[d:priest#1485261459729547394]].
- **Loatheb (Naxxramas):** Scarab Brooch [[d:priest#1486790188570120244]].

## Common mistakes

- Shielding warrior or bear tanks on pull (you deny their rage) [[d:priest#1426238485303394435]].
- Taking 2/2 Empowered Recovery (the second point adds nothing) [[d:priest#1490554883042967562]].
- Alternating ranks of the same spell for Book of Prayer (only different spells count) [[d:priest#1484561705487958016]].
- Counting on Power Word: Shield or Holy Nova to trigger Book of Prayer [[d:priest#1484259678643945764]], [[d:priest#1485623406207434894]].
- Following Proclaim Champion or clickable-Lightwell advice (removed or reworked in 1.18.1) [[d:priest#1464351944230436874]].
- Casting Holy Nova during Nefarian's priest class call [[d:priest#1493278987101671544]].
- Topping everyone to 100%: overhealing burns the mana you need later [[d:priest#1428691896514908271]].

## Bugs and quirks

- After a respec, especially through the dual-spec device, Spiritual Healing can silently stop applying to Renew (and possibly other heals), making them noticeably weaker than expected. Deleting the WDB cache folder fixes it [[d:priest#1476685485064585367]], [[d:priest#1476694041679757517]].
- Buff tooltips do not update for talents or set bonuses. The spellbook numbers are the accurate ones [[d:priest#1484815312867168378]].
