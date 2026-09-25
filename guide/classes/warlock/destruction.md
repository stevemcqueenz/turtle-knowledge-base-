# Destruction Warlock (Fire "Firelock" and Shadow SM/Ruin)

**Recommendation:** play **Fire 0/11/40** once you are past the fire-immune raids and have about 16% hit from gear. Open Soul Fire → Immolate → Conflagrate, keep Immolate up, press Soul Fire, Conflagrate and Shadowburn on cooldown, and spam **Searing Pain** in between. Sacrifice your Imp. For Molten Core, Blackwing Lair and Onyxia, play Affliction or Demonology instead. **SM/Ruin** (30/0/21, Shadow Bolt) still works, but it is behind Affliction at every gear level people have tested.

| | |
|---|---|
| Role | Ranged burst DPS (Fire) or Shadow Bolt DPS (SM/Ruin); raid curses; the class's AoE (Hellfire, Rain of Fire) |
| Viability (1.18.1) | **Fire: B (raid), A (dungeons and trash).** "Fire lock is fine post-bwl, but you'll never be able to compete with drain or demo locks" [[d:warlock#1493286788775805198]]. "Big bursty, really fun in dungeon, but not raid viable atm" [[d:warlock#1493290501674373180]]. One player ranks it second after Demonology post-patch [[d:warlock#1484828741267095563]]; it performs well on Mephistroth [[d:warlock#1494334535775682633]]. **SM/Ruin: C.** "Largely untouched" by the patch [[d:warlock#1484476187211333662]], and behind Affliction in matched-gear sims [[d:warlock#1464692479289983060]]. |
| Difficulty | Medium. The rotation is short; the hard part is threat and mana. |
| Strengths | Front-loaded burst (Soul Fire crits around 6k) [[d:warlock#1485580656120565841]]; the best spec for smashing through dungeons and killing elites fast [[d:warlock#1488950593304137951]]; good on trash [[d:warlock#1467233249444102226]] |
| Weaknesses | Needs **all 16% hit from gear** (no hit talent), and the burst on pull has no threat reduction, so you need a good tank [[d:warlock#1490499753312518144]]. Fire-immune bosses in MC, BWL and Onyxia [[d:warlock#1440494819095875726]], [[d:warlock#1488208031111188640]], [[d:warlock#1432406269402026124]]. Falls off in late raid tiers [[d:warlock#1486098247335416049]]. |

Before 1.18.1, Nezu summed it up as "fire and sm/ruin underperform in every branch of the pve content tree. There's nobody playing fire in raids" [[d:warlock#1465009558715105301]]. The patch reworked Searing Pain: 2.0 s base cast, 57% spell-power scaling, 1 s GCD, Bane cuts up to 0.5 s from its cast, and later +20% base damage [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [[d:warlock#1465390962552340582]], [[d:warlock#1484367370637017348]]. W called the spell-power change "basically a +14% spell power scaling buff" for Searing Pain [[d:warlock#1465492578404143298]].

**Contested:** how high Fire's ceiling is. Not Normal argues that too few people play it seriously for logs to show its ceiling [[d:warlock#1452780867859648715]]. Frolegacy concluded it is still the worst spec overall [[d:warlock#1483576857428361257]].

## Talent build

### Fire 0/11/40 (recommended)

Afraido pinned this on release day [[d:warlock#1484229282854342789]]. It takes **Intensity 2/2** (pushback protection) instead of the wiki's Destructive Reach (range), which Afraido called a mistake [[d:warlock#1484231145712517141]].

| Tree | Talent | Points |
|---|---|---|
| Demonology | Demonic Embrace | 5/5 |
| Demonology | Soul Entrapment | 3/3 |
| Demonology | Demonic Aegis | 2/3 |
| Demonology | Demonic Sacrifice | 1/1 |
| Destruction | Cataclysm | 5/5 |
| Destruction | Bane | 5/5 |
| Destruction | Aftermath | 3/3 |
| Destruction | Intensity | 2/2 |
| Destruction | Shadowburn | 1/1 |
| Destruction | Devastation | 5/5 |
| Destruction | Improved Searing Pain | 5/5 |
| Destruction | Improved Soul Fire | 2/2 |
| Destruction | Improved Immolate | 5/5 |
| Destruction | Ruin | 1/1 |
| Destruction | Emberstorm | 5/5 |
| Destruction | Conflagrate | 1/1 |

Split **0/11/40**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/warlock?points=-ArCAAB-AoFYRoAFVIAoB` · `talents.turtlecraft.gg/warlock/-5IC06-55KB0WVV`

Why these points:

- **The 11-point dip** is the cheapest way to Demonic Sacrifice: Imp sacrifice for +4% spell damage, plus Soul Entrapment's +6% with no demon out [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159). Demonic Aegis replaces the old Improved Healthstone points, which became Sinister Pursuit (pet speed) in 1.18.1 [[d:warlock#1484606428130967623]].
- **Bane 5/5** brings Searing Pain from 2.0 s to 1.5 s [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).
- **Improved Soul Fire 2/2:** Soul Fire's buff increases your fire damage and refunds the shard; it now applies on cast, so it cannot be lost to a miss [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460).
- **Conflagrate** consumes 3 s of Immolate for damage instead of removing it [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973).
- **Aftermath** (Immolate damage and a slow) and Pyroclasm (stun) are "nice but very unreliable" [[d:warlock#1487474862615433247]]. Pyroclasm rolls only once per Hellfire channel, not per tick [[d:warlock#1458587593389113659]], so it is skipped.

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Range (wiki / Summonjutsu)** | Destructive Reach 2/2 instead of Intensity 2/2. More range, less threat, and a bigger Hellfire radius; no pushback protection | `-ArCAAB-AoFYBoCFVIAoB` | Summonjutsu's Searing Pain build [[d:warlock#1465115051655434394]]; Afraido prefers Intensity [[d:warlock#1484231145712517141]] |
| **Fel Domination** | Drop Shadowburn for Fel Domination for faster re-sacrifices after wipes | swap in the calculator | Summonjutsu [[d:warlock#1465115051655434394]] |
| **Shadow Bolt Destro (17/3/31)** | Affliction to Nightfall (Suppression 5, Improved Corruption 5, Improved Life Tap 2, Improved Curse of Agony 3, Nightfall 2), Soul Entrapment 3, Shadow Vulnerability instead of Cataclysm, Emberstorm only 2/5 | `FoAQYAC-AD-FAFYAoCAVIAQB` | Summonjutsu: "this one runs shadow bolt" [[d:warlock#1465115051655434394]] |
| **Demo-Fire hybrid** | 0/34/17 Demonology with Cataclysm instead of Shadow Vulnerability, Searing Pain as filler | see [Demonology](demonology.md#variants) | [[d:warlock#1493328003537567986]], [[d:warlock#1494150250393370656]] |

### SM/Ruin 30/0/21 (Shadow Bolt)

TowelDruid's post-release link [[d:warlock#1486103119220838540]]. SM/Ruin keeps the Imp for Blood Pact; it has no Demonology points.

| Tree | Talent | Points |
|---|---|---|
| Affliction | Suppression | 5/5 |
| Affliction | Improved Corruption | 5/5 |
| Affliction | Improved Life Tap | 2/2 |
| Affliction | Improved Curse of Agony | 3/3 |
| Affliction | Grim Reach | 2/2 |
| Affliction | Nightfall | 2/2 |
| Affliction | Soul Siphon | 2/3 |
| Affliction | Rapid Deterioration | 2/2 |
| Affliction | Siphon Life | 1/1 |
| Affliction | Malediction | 1/1 |
| Affliction | Shadow Mastery | 5/5 |
| Destruction | Shadow Vulnerability | 5/5 |
| Destruction | Demonic Swiftness | 2/2 |
| Destruction | Bane | 5/5 |
| Destruction | Shadowburn | 1/1 |
| Destruction | Devastation | 5/5 |
| Destruction | Destructive Reach | 2/2 |
| Destruction | Ruin | 1/1 |

Split **30/0/21**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/warlock?points=FoAQYASCRBF--FAVABoCAAI` · `talents.turtlecraft.gg/warlock/Z0CI2ED1U--UH0B201`

You can take points out of Suppression if gear covers your hit, "though none of the talents you can put the points in instead are that good" [[d:warlock#1486103257641123952]]. Suppression covers only Affliction spells, not Shadow Bolt [[d:warlock#1491843936715542548]].

!!! note "Should you play SM/Ruin?"
    Biloen simmed L-star's real gear: Affliction about 1,060 DPS vs SM/Ruin about 957 [[d:warlock#1464692479289983060]]. L-star parsed *lower* on Sapphiron as 4-piece T3.5 SM/Ruin with the Scythe than as T2.5 Affliction [[d:warlock#1464689958249042021]]. **Contested:** Benched says SM/Ruin needs T3.5 and the Scythe [[d:warlock#1481287628308353165]]; TowelDruid says it is fine in T2.5/T3 [[d:warlock#1481345700125216860]]. An Atiesh holder is often SM/Ruin, because the staff's raid buff is worth more than personal DPS [[d:warlock#1431641229728419955]].

## Stat priority and caps

**Fire:**

1. **Hit to 16%, all from gear** [[d:warlock#1490499753312518144]]. One Destro planner reached cap on Ambershire with about 15% from gear [[d:warlock#1488934843235569815]].
2. **Crit and spell power.** Fire, SM/Ruin and Demonology gear the same way: spell power and crit [[d:warlock#1464550328367317067]], [[d:warlock#1464548870137577472]]. Afraido's values at ~1,000 SP: 1% hit ≈ 18 SP, 1% crit ≈ 13 SP [[d:warlock#1482828212525469856]].
3. **Haste:** helps Searing Pain now that it has a real cast time. Use haste potions and Juju Flurry as Destruction too [[d:warlock#1486559373244370974]].
4. **Stamina** for the shards and Life Taps.

**SM/Ruin:** hit to 16% (Suppression covers only your DoTs), then crit and spell power. **Contested:** rqo argues haste beats crit because Shadow Bolt is only ~65% of SM/Ruin damage [[d:warlock#1464549618611126272]]. Summonjutsu counters that crits are more mana-efficient, and haste makes you Life Tap more [[d:warlock#1464549874644156568]]. L-star puts Shadow Bolt at 55-60% of SM/Ruin damage [[d:warlock#1490901049777721516]].

## Single-target rotation

### Fire

**Opener:** Soul Fire (pre-cast before the pull) → Immolate → Conflagrate [[d:warlock#1496147940673196062]], [[d:warlock#1496031075112062996]].

**Priority list** (top wins):

1. **Improved Soul Fire buff missing and Soul Fire ready → Soul Fire.** It still hits harder per cast than Searing Pain, and its buff boosts Conflagrate, Immolate and Searing Pain [[d:warlock#1485580656120565841]].
2. **Immolate missing → Immolate.** If the target will die within 9 s, skip it and cast Searing Pain [[d:warlock#1465226534221512756]].
3. **Conflagrate ready and Immolate up → Conflagrate.**
4. **Shadowburn ready → Shadowburn**, unless you are short on mana (it is inefficient) [[d:warlock#1496147940673196062]].
5. **Assigned curse missing → curse** (1 s GCD).
6. **Searing Pain** as the filler. It costs only about 151 mana at 60 with 5/5 Cataclysm [[d:warlock#1465226771694616801]].
7. **Life Tap** when needed; use mana potions and tea [[d:warlock#1496147940673196062]].

**Contested — Corruption and Curse of Agony:** L-star keeps Corruption in, because "anything that isn't searing pain is huge dps increase" [[d:warlock#1467326093831704861]]. Twospooky's Naxx advice drops both [[d:warlock#1496147940673196062]]. Biloen notes it depends on how much of your spell power is fire-only [[d:warlock#1467312473039311110]].

Also: do not chain instant casts back to back [[d:warlock#1496147940673196062]]. On the first pull, burst carefully: Soul Fire → Immolate → Conflagrate is "extremely bursty on pull with no threat reduction" [[d:warlock#1490499753312518144]].

### SM/Ruin

1. **Curse** (Shadows, Recklessness or Elements; Malediction adds Curse of Agony) → **Corruption** [[d:warlock#1476505618654302291]].
2. **Shadow Bolt** spam.
3. **Shadowburn** on a low target when you cannot fit a Shadow Bolt [[d:warlock#1476505618654302291]].
4. **Siphon Life** on long fights (e.g. Patchwerk); **Drain Soul** as filler on long-lived targets while Shadowburn is on cooldown [[d:warlock#1476505618654302291]].
5. **Nightfall proc → instant Shadow Bolt.**

In dungeons, skip the DoTs and just Shadow Bolt [[d:warlock#1486106500270395473]].

## AoE

| Targets | What to do | Source |
|---|---|---|
| 1-3 | Immolate each target, then kill in mark order with Searing Pain | [[d:warlock#1381052743828897965]] |
| 3-5+, stacked on the tank | **Hellfire.** It ticks for about 300-350 fully specced; use it on 5+ packs such as Emerald Sanctum trash and the packs before Gnarlmoon | [[d:warlock#1465521145162895546]], [[d:warlock#1465519812745625819]] |
| Pack that cleaves or needs range | **Rain of Fire** (ticks every second; its coefficient roughly doubled in 1.18.0) | [[d:warlock#1452757128652525578]] |

Numbers:

- **Hellfire** in 1.18.1: 6.66% spell power per tick; 15 ticks add up to 99.9% [[d:warlock#1486076970017099837]]. Its mana is now paid across the channel instead of up front [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). Players still found the real gain small [[d:warlock#1486074541284266250]].
- Hellfire roots you in the pack, damages you and generates heavy threat. Wrathstone cuts the self-damage by 30% but adds 40% fire threat [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973). Warn the tank and healers.
- Before the Hellfire buff, Rain of Fire beat Hellfire above ~1,200 SP [[d:warlock#1425397735195938847]]. No post-buff comparison was posted.
- **Bug:** Rain of Fire misses targets in some ZG, AQ20, 5-man and Scholomance spots where Hellfire still hits [[d:warlock#1476320132774232074]], [[d:warlock#1476326861456801874]].

Warlock AoE is still called weak overall [[d:warlock#1470342211731329045]]. "If there is one thing Destro should be good at, it is AoE" [[d:warlock#1486025258933813329]].

## Cooldowns, resources and threat

- **Soul Fire** (30 s cooldown, costs a shard, refunded by Improved Soul Fire), **Conflagrate**, **Shadowburn** (costs a shard) — on cooldown.
- **Mana:** Fire burns more mana than the other specs. Sacrifice the Felhunter instead of the Imp to Life Tap less, and bring mana potions and tea [[d:warlock#1496147940673196062]].
- **Threat:** no reduction talent. Use Voidstone (15% with Improved Stones [[d:warlock#1491435318732132393]]), Salvation, and hold off the full opener until the tank has a lead.
- **Firestone:** +2% fire crit, doubled to 4% by Improved Stones [[d:warlock#1424167378262036572]]. Its fire proc scales only with your level (about 64 damage at 60) [[d:warlock#1445825910098886688]].

## Gear

- **No dedicated Destruction tier set.** Destro uses the Demonology T1/T2 sets by default [[d:warlock#1484147919224307813]]; Lightemgee calls them "atrocious for destro" [[d:warlock#1440504874939973672]].
- **AQ40 Implements of Unspoken Names** (ring, kris, shroud): the ring gives +1% crit, +1% hit and +14 spell damage; the 2-piece gives +5% pet damage; the **3-piece** cuts Immolate's cast by 0.5 s and makes Conflagrate deal 3 s of Immolate damage without consuming it [[d:warlock#1489351729274159245]].
- **T3.5 Destruction 5-piece** is close to worthless. It does about half its apparent intended value, and two bug reports were closed as "working as intended" [[d:warlock#1471875253280968900]]. Its Felfire Punishment was about 1% of total damage in real Kara40 logs [[d:warlock#1476890832744349848]].
- **Timbermaw Hold 3-piece** for Fire: legs and shoulders are the best slots to replace T3 [[d:warlock#1492154763943612556]]. The TMH hit trinket is best for Fire locks [[d:warlock#1494078222810349641]].
- **True Band of Sulfuras** becomes attractive for Fire, because its proc needs direct-damage casts [[d:warlock#1487030897843765328]].
- **Ornate Bloodstone Dagger:** about a 5% spell-power coefficient on its proc, poor value [[d:warlock#1458487445132935363]]. W's "Fire & Shadow" style uses it: alternate Shadow Bolt and Searing Pain so the fire-school proc lands while you cast Searing Pain and does not push you back [[d:warlock#1505173675656216728]].
- **Class weapon Thil'phoral** ([Timbermaw Hold](../../instances/timbermaw-hold.md)): on a heroic dummy, a Demo-Fire lock did slightly more with Thil'phoral plus the Onyxia offhand than with the Kirel Narak offhand [[d:warlock#1494150250393370656]].
- **SM/Ruin example** (L-star): full T2.5, Wraith Blade, the Naxx negative-resistance offhand, Bindings of Contained Magic, Affliction T3 ring, Kara10 Medivh ring, the Naxx resistance-shred pendant, Remains of Overwhelming Power, Neltharion's Tear, later the Scythe [[d:warlock#1464689850321207377]].

## Enchants, oils, consumables

- **Enchants:** the same slots as [Affliction](affliction.md#enchants), but take spell power and crit over haste. Community wiki: gloves Fire Power for Fire [community wiki](https://turtle-wow.fandom.com/wiki/Warlock).
- **Weapon:** Brilliant Wizard Oil.
- **Consumables:** mana potions and tea [[d:warlock#1496147940673196062]]; Potion of Quickness and Juju Flurry [[d:warlock#1486559373244370974]]; Greater Firepower for Fire; flasks and elixirs as for [Affliction](affliction.md#weapon-oil-stones-and-consumables). Goblin Sapper Charges on Naxx spider trash [[d:warlock#1459945548084674623]].

## Dungeon and raid notes

- **Fire-immune bosses:** MC Ragnaros and Baron Geddon (plus the fire elemental; use Shadow Bolt) [[d:warlock#1432406269402026124]], [[d:warlock#1440494819095875726]]; BWL Vaelastrasz, the three drakes and Nefarian — Broodlord, Chromaggus and most BWL trash are fine [[d:warlock#1488208031111188640]]; Onyxia [[d:warlock#1432406269402026124]]. See [Molten Core](../../instances/molten-core.md), [Blackwing Lair](../../instances/blackwing-lair.md), [Onyxia's Lair](../../instances/onyxias-lair.md).
- **Mephistroth** (Kara40): Destruction performs well on him [[d:warlock#1494334535775682633]]. Searing Pain is Demonology's main spell there too [[d:warlock#1485512658433343609]]. The hellfire imps are fire-immune and the crawlers shadow-immune [[d:warlock#1431191081051099246]].
- **Thaddius:** hold Conflagrate and Shadowburn until you have a Polarity Charge stack. **Loatheb:** take the first spore. **Four Horsemen:** do not Shadowburn Zeliek; watch threat [[d:warlock#1496149965825904764]].
- **Dungeons:** Fire is the spec for fast group leveling and elite burn-downs [[d:warlock#1488950593304137951]]. Tanking with Fire is covered in [Warlock tanking](warlock-tank.md).

## Common mistakes

- Bringing Fire to fire-immune bosses.
- Casting Shadow Bolt in a Fire spec [Spritzbube, 2026-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=169207#p169207).
- Opening with the full burst before the tank has threat.
- Hellfire without warning the healers, or into a cleaving pack.
- Chaining instants back to back and wasting Shadowburn shards while mana-starved.
- Expecting Pyroclasm stuns from Hellfire.
- Playing SM/Ruin below T2.5 hit levels and blaming the spec.
