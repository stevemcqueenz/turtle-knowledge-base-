# Discipline Priest ("Smite" DPS)

**Recommendation:** on Turtle, Discipline is a Holy-damage DPS spec built around Smite, not a shield healer. Play the **31/20/0** Smite build. Reach **10% haste** and **16% spell hit**, then stack spell power and crit. Loop **Holy Fire → 4 Smites**. Put **Chastise** on your top DPS and **Enlighten** on yourself.

| | |
|---|---|
| Role | Ranged Holy DPS with support tools: Enlighten, Chastise haste on an ally, shields, dispels, emergency heals |
| Viability (1.18.1) | **Viable, not top.** "competitive? no. viable? always" [[d:priest#1490693078640754830]]. At full BiS, Smite and Shadow do roughly the same DPS, but Shadow gets the raid slot for its debuff and mana return [[d:priest#1471920785001152666]]. Snackz's 1.18.1 sim puts Smite BiS at ~1,415 DPS before T3.5 and ~1,462 with T3.5 [[d:priest#1484657342954864671]]. Real parses: 1,500+ on Patchwerk [[d:priest#1491077363990265858]], and a first Naxx Smite clear on 4-piece T3 + 5-piece T3.5 [[d:priest#1494554009099567246]]. |
| Difficulty | Medium: the rotation is simple, but the haste breakpoint and a missed Holy Fire punish you. |
| Strengths | Turtle's unique take on the spec, praised as the only server that "got smiter priest right" [[d:priest#1495928254920654928]]; the best leveling and farming spec (see [Leveling](leveling.md)); off-heals and shields when needed |
| Weaknesses | Threat [[d:priest#1497082351803437148]]. Less raid utility than Shadow: some say Smite "brings nothing of value", others disagree (**contested**) [[d:priest#1486181386850275441]], [[d:priest#1490693078640754830]]. 1.18.1 made Disc gear holy-damage-only, which weakens off-healing [[d:priest#1484564440207855657]], [[d:priest#1488642307048739048]] |

## How to play

The level-60 Smite loop. For the details, see the linked sections.

1. **Pre-pull:** Inner Fire. `Enlighten` on yourself, or on one non-Smite DPS [[d:priest#1490641318630658178]].
2. **Opener:** `Chastise` on the tank on pull [[d:priest#1486224198475976724]] → `Inner Focus` → `Holy Fire` → `Smite` ×4 → `Holy Fire` [[d:priest#1465500759394353345]].
3. **Single-target loop:** `Holy Fire` (refreshes Purifying Flames) → `Smite` ×4, casting the instant Smite whenever Searing Light procs. If Holy Fire misses, hard-cast it again. If the boss dies before the cycle ends, skip Holy Fire and finish with Smite [[d:priest#1431112150679818281]], [[d:priest#1490797658879557723]]. Gear variants: [T3.5 5-piece](#t35-5-piece-adjustment), [T3 8-piece](#full-t3-8-piece-opener).
4. **Cooldowns:** `Chastise` every 40 s on a friendly arcane mage or affliction warlock, never on yourself in raids. `Inner Focus` goes on the Holy Fire opener [[d:priest#1465500759394353345]], [[d:priest#1490792756803797113]].
5. **AoE switch:** at **4+** targets with tank aggro established, spam `Holy Nova`. On long packs or when low on mana, alternate rank-1 Holy Nova with instant Smites. At 1–3 targets, keep the single-target loop ([AoE](#aoe)).
6. **Resources:** below 10% haste, the loop needs two Searing Light procs, so hit the haste breakpoint first ([Stats](#stat-priority-and-caps)). Use Major Mana Potion and tea on cooldown. When low, cast rank-1 Holy Fire ([Cooldowns, mana and threat](#cooldowns-mana-and-threat)).
7. **Threat:** Holy Nova makes threat. Let the tank establish first, and Fade near the top of the threat meter [[d:priest#1497082351803437148]].
8. **Movement:** `Shadow Word: Pain` only while moving. `Pain Spike` as a trash finisher when the mob has under about 2 s to live [[d:priest#1504912888022831298]].
9. **Emergencies:** `Power Word: Shield` and `Flash Heal` on yourself or others. Dedicated healing belongs to [Holy](holy.md) ([Discipline healing?](#discipline-healing)).

## Talent build

### Smite raid DPS 31/20/0 (recommended)

This is the "standard cookie-cutter Disc DPS build" (DemonBoyJr) [[d:priest#1354596333456986244]]. It is the most-posted Smite build in the channel (10 identical posts), and it passes the 1.18.1 tree rules. Post-1.18.1 advice is consistent with it: take Inner Focus and Improved Inner Fire [[d:priest#1490790778274975846]], and "piercing light (which again idk why you'd ever drop it)" [[d:priest#1476338769551560855]].

| Tree | Talent | Points |
|---|---|---|
| Discipline | Piercing Light | 3/3 |
| Discipline | Mental Agility | 5/5 |
| Discipline | Improved Power Word: Fortitude | 2/2 |
| Discipline | Improved Inner Fire | 2/2 |
| Discipline | Inner Focus | 1/1 |
| Discipline | Meditation | 3/3 |
| Discipline | Searing Light | 3/3 |
| Discipline | Purifying Flames | 2/2 |
| Discipline | Mental Strength | 3/3 |
| Discipline | Enlighten | 1/1 |
| Discipline | Force of Will | 5/5 |
| Discipline | Chastise | 1/1 |
| Holy | Holy Focus | 2/2 |
| Holy | Divinity | 5/5 |
| Holy | Divine Fury | 5/5 |
| Holy | Holy Reach | 2/2 |
| Holy | Holy Nova | 1/1 |
| Holy | Spiritual Guidance | 5/5 |

Split **31/20/0**, VALID. Codes: `talents.turtlecraft.gg/priest?points=DoACRDaAZAAoB-CoFCABAo-` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=035000221033231051-025502001005)) · `talents.turtlecraft.gg/priest/3U0E6LF6V-2Z2065`

Key talents:

- **Divine Fury** is the most important DPS talent, with 20% faster Smites [[d:priest#1492796559509819492]].
- **Mental Strength** supplies 3% of your 10% haste target. This haste does not show on the character sheet [[d:priest#1476778037130301645]].
- **Searing Light and Purifying Flames** drive the whole rotation. Searing Light makes a Smite instant after a crit; the mana cost of that instant Smite was buffed from 50% to 60% in 1.18.1 [[d:priest#1464658822667698273]]. Purifying Flames gives +12% Holy damage for 10 s after Holy Fire [Langorn, 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).
- **Piercing Light** gives 6% hit, so you need 10% from gear [[d:priest#1447424446972297398]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Threat** | Silent Resolve 5/5 instead of Improved Fortitude 2 + Meditation 3 | `DooARAaAZAAoB-CoFCABAo-` ([calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=035500021003231051-025502001005)) | Pinned video "Discipline" build [[d:priest#1389476140011491378]]. Snackz runs 3/5 threat reduction in Kara40 to give the tank time [[d:priest#1484603417325211890]], [[d:priest#1484604272925737120]]. With enough hit from T3.5 you can move Piercing Light points into Resolve [[d:priest#1476339013307731968]]. |
| **Full T3 (8-piece)** 32/19/0 | Adds Improved PW:Shield 3 + Resurgent Shield 1 and drops Meditation and one Spiritual Guidance point | `DoACRYaAZIAoB-CoFCABAg-` ([calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=035000221303231151-025502001004)) | HolyScheiss: "Ressurgent Shield really became a viable option with T3 6-set bonus" [[d:priest#1504764793372803122]] |
| **Farming / solo 31/15/5** | Spirit Tap 5, Wand Spec 2; no Spiritual Guidance | `RoACRDaAZAAoB-CoFCAB-F` ([calculator](https://xian55.github.io/tortoise-db-viewer/?talents=priest&t=215000221033231051-025502001-5)) | Lirya's 60 grinding spec (Chastise interrupt, Force of Will) [[d:priest#1492796559509819492]]; the pinned leveling build [[d:priest#1389476140011491378]] |

Without the T3 6-piece, skip the shield talents. After the latest patch "I don't think there's a world where anyone should take the shield talents" [[d:priest#1494640175521730744]].

## Stat priority and caps

1. **Haste to 10%** (10% haste > 16% hit > spell power/crit) [[d:priest#1476777966410272788]]. With 10% haste a single Searing Light proc fits 4 Smites into Holy Fire's 10 s Purifying Flames window. Below 10% you need two procs, which is unreliable even at BiS crit [[d:priest#1481690213138038855]]. Recipe: 3% from Mental Strength + 2% from food + 5% from gear and enchants [[d:priest#1464653767331938409]], or 7% from gear without the food [[d:priest#1494039767082340393]].
2. **Spell hit to 16%** (6% from Piercing Light + 10% from gear) [[d:priest#1461819164548403306]], [[d:priest#1474440884903870625]]. Holy spells are binary: a spell either fully lands or fully misses [[d:priest#1447459514969227435]].
3. **Crit after 10% haste.** Haste past 10% has little value; after that, crit scales with the Purifying Flames rotation [[d:priest#1491436651363434676]], [[d:priest#1488229451882823920]]. Roughly 1% crit ≈ 12 spell power, but this moves with your gear [[d:priest#1474554280303132742]], [[d:priest#1460092939824009236]].
4. **Holy spell power**, then Intellect and mana.

At high ping (~250 ms) 10% haste may not be enough. Test in-game and watch for "spell not ready" errors [[d:priest#1470968763804287141]], [[d:priest#1470972310453485631]].

## Single-target rotation

**Pre-pull:** Inner Fire, and Enlighten on yourself (+15%) or on one non-Smite DPS (+10% each). Two priests cannot stack Enlighten on each other [[d:priest#1490641318630658178]]. Chastise the tank on pull for haste and threat [[d:priest#1486224198475976724]].

**Opener:** `Inner Focus` → `Holy Fire` → 4× `Smite` → `Holy Fire` [[d:priest#1465500759394353345]].

Priority (bot-ready):

1. **`Holy Fire`** to start each cycle (it refreshes Purifying Flames). "1 HF 4 Smite is the rotation regardless how many searing light proc" [[d:priest#1431112150679818281]]. If the Holy Fire misses you get no buff, and must hard-cast it again ("ruins your parse") [[d:priest#1490797658879557723]].
2. **`Smite` ×4.** Cast it instantly when Searing Light procs.
3. **Boss dies before the next cycle ends:** skip Holy Fire and finish with Smite + Chastise [[d:priest#1431112150679818281]].
4. **`Chastise`** on cooldown (40 s) on a friendly arcane mage or affliction warlock. It costs you one Smite. Do not cast it on yourself: the GCD makes it a loss [[d:priest#1465500759394353345]], [[d:priest#1490794714440536194]].
5. **`Shadow Word: Pain`** only while moving [[d:priest#1465500759394353345]].
6. **`Pain Spike`** as a trash finisher when the mob has under ~2 s to live [[d:priest#1504912888022831298]].

Simple macro: `/castsequence reset=10 Holy Fire, Smite, Smite, Smite, Smite` [[d:priest#1430602666861396172]].

**Instant-Smite chains:** the instant Smite has an internal cooldown, and the order of crits matters. If Smite crits, Holy Fire does not, and the resulting instant Smite crits, you get another instant Smite. If Holy Fire also crits, you lose that chance, which some players find punishing [[d:priest#1504813044545618073]], [[d:priest#1504813192776515785]].

### T3.5 (5-piece) adjustment

The 5-piece adds the Burning Zeal DoT. Change the cycle to **4× Smite → Holy Fire → 2× Smite → Shadow Word: Pain** (18.01 s), so the DoT ticks out without being clipped [[d:priest#1484656770084241539]]. Snackz first estimated only about +27 DPS, then called the DoT "cracked" after parsing 1,500+ on Patchwerk [[d:priest#1491077363990265858]].

Watch for resists. If the set's DoT is resisted, it also removes your Shadow Word: Pain, and you must recast both SW:P and Holy Fire [[d:priest#1485744052828901547]], [[d:priest#1494697448340193431]]. Holy Fire on a target that already has SW:P rolls two resist checks [[d:priest#1494701319129141380]].

### Full T3 (8-piece) opener

`Chastise` → `Holy Fire` → `Power Word: Shield` → 2× `Smite` → `Holy Fire`. After that, build Chastise and shield stacks toward Blessed Wildfire. HolyScheiss calls it "more loose and fun" than a strict rotation, with 5-6k+ Holy Fire crits fully buffed [[d:priest#1504764793372803122]]. Early on, the T3 4-piece stacks capped at 4 in testing, and a bug report was filed [[d:priest#1484694932798312569]], [[d:priest#1486379322062274571]].

## AoE

| Targets | Action |
|---|---|
| 1-2 | Single-target rotation |
| 3-4 | Holy Nova starts to gain DPS at about 3 targets [[d:priest#1424965252948299866]], but it is only damage-efficient at 5+ and mana limits you [[d:priest#1463297546909909187]]. Bot threshold: **4+** with tank aggro established. |
| 5+ / long packs | Alternate rank-1 Holy Nova with instant Smites from Searing Light procs to save mana without losing much DPS [[d:priest#1431189123129151621]], [[d:priest#1338540728665505892]] |

- Holy Nova scales poorly, with about 15% spell power [[d:priest#1470850932731281480]]. It has generated threat since 1.18.0 [Jamey, 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159).
- For dedicated AoE farming, a separate set beats the tier set: Blade of Eternal Darkness, Sigil of the Ancient Accord and Magispark Leggings [[d:priest#1475610081788956755]]; the Sunken Temple epic chest, Bindings of Magic and Kara40 legs [[d:priest#1504764793372803122]]. "On spell hit" procs such as BoED fire once per target an AoE hits [[d:priest#1463593375658676314]].

## Cooldowns, mana and threat

- **Inner Focus** (3 min): a free Holy Fire opener [[d:priest#1465500759394353345]].
- **Chastise** (40 s): the tank on pull, then your top DPS [[d:priest#1490792756803797113]].
- **Enlighten**: a 30-minute buff. Re-apply it after deaths.
- **Racials:** High Elf is a strong Smite race (a rank-1 Holy Nova can fish Searing Light when low on mana). Night Elf gives about 1% haste. Human gives late-game Spirit. Undead Devouring Plague costs too much mana in a Smite rotation [[d:priest#1477060107987587184]], [[d:priest#1477060344105926677]].
- **Mana:** Major Mana Potion and tea on cooldown. "As long as you use tea with mana potions and your guild kills bosses quickly, you will never run out of mana" [Zvyrhol, 2026-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=174655#p174655). When low, rank-1 Holy Fire is cheap (about 80 mana) and scales well (same source).
- **Threat:** it is the spec's chronic issue [[d:priest#1497082351803437148]]. Use the threat variant, Fade, and the Chastise pull.

## Discipline healing?

A deep-shield Disc healer is not viable at 60. Mana runs out, and the heals are weak compared with deep Holy [[d:priest#1480925749274742794]], [[d:priest#1456362257096376363]]. A shield build loses about 24% healing against Spiritual Healing [[d:priest#1478094654460264570]]. Combat logs cannot attribute absorbs when two shields are on one target, so shield builds cannot even be measured properly [[d:priest#1494695885504909405]]. If you want to heal, play [Holy](holy.md). As Smite, keep Flash Heal and Power Word: Shield bound for emergencies.

## Gear

### Tier sets (new for Smite in 1.18.1)

Every tier (T1, T2, T2.5, T3, T3.5) got a Smite set in 1.18.1 [[d:priest#1486851994512523354]]. You convert the equivalent Holy or Shadow pieces at an NPC near the Ratchet bank (T2.5 and others) or at the ghosts by the tomb in Blackrock Mountain (T1/T2) [[d:priest#1485930350491467866]], [[d:priest#1485949852096663582]]. Smite gear carries Holy damage only, no general spell power [[d:priest#1484564440207855657]].

| Set | Notes |
|---|---|
| T1 | (3) 15% regen while casting; (5) 30% pushback avoidance on Discipline spells; (8) +10 Inner Fire stacks, per a tooltip screenshot [[d:priest#1484528181104082994]]. **Contested:** another player describes a 5-piece "+35 spell damage on Inner Fire" that did not apply [[d:priest#1484942233080827915]]. Snackz: T1 "seemed extremely good" on paper, untested [[d:priest#1494803028509720748]]. |
| T2 | The bonuses are weak (the 8-piece extends Enlighten, which barely matters) [[d:priest#1494803293988196502]], [[d:priest#1494808664681484449]]. Without Naxx/AQ40 gear, the pieces are close to BiS [[d:priest#1494830837613723758]] |
| T2.5 | (5) Chastise gives +40 spell power and −15% Smite/Holy Fire mana for 12 s (doubled on crit) [Dragunovi, 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272) |
| T3 | The 6-piece makes Resurgent Shield worth taking [[d:priest#1504764793372803122]]. The first Naxx Smite clear wore 4-piece T3 + 5-piece T3.5 [[d:priest#1494554009099567246]] |
| T3.5 | The 5-piece DoT is strong (see rotation). The 3-piece is weak and can be a DPS loss (it has a chance, not a guarantee, to buff the party) [[d:priest#1484667910885736599]] |

### Key items

- **Haste:** the MC trinket Snackz recommends to hit 10% at a fresh 60 can be worn into Naxx or Kara40 [[d:priest#1470956934852116614]], [[d:priest#1470957222119997575]]. Tailoring gloves give about 3% haste [[d:priest#1464654168663785725]].
- **Trinkets:** Talisman of Ephemeral Power + Eye of Dormant Corruption on fights under 1 minute [[d:priest#1471244934026756229]]. Zandalarian Hero Charm until Naxx [[d:priest#1467194483308494848]]. Ring of Holy Light (Kara40 trash) was BiS "till the very end" [[d:priest#1504764793372803122]].
- **Rings:** before BWL, double Cauterizing Band and the In Dreams questline ring; Pure Elementium Band once BWL is open [[d:priest#1453433162767011893]]. In Kara40, Kumisha's item and the Medivh rings are BiS [[d:priest#1464654071150412071]].
- **Pre-raid trinkets:** Fabric of Time ([Black Morass](../../instances/black-morass.md)), Ancient Domain rep trinkets, the ZG Madness trinkets [[d:priest#1471815327900893296]].
- **Engineering:** the BWL spell power goggles recipe needs Engineering 270 [[d:priest#1486384331227398216]].

## Enchants

| Slot | Enchant |
|---|---|
| Shoulders | 2% haste (Naxx) until you reach 10% haste from other sources, then ZG spell power [[d:priest#1485668479255318629]], [[d:priest#1476779388954742965]] |
| Wrist | +12 spell power (Gelkis Centaur reputation) [[d:priest#1482940784075477030]] |
| Weapon | +30 spell power (one-handers only) [[d:priest#1423698957384548384]] |
| Hands | No Holy-damage glove enchant exists (mages get 18 SP + 1% hit) [[d:priest#1459687027019874426]] |
| Other slots | No Smite-specific list was posted (gap). Use the spell-damage versions of the caster enchants. |

Oil: Brilliant or Blessed Wizard Oil [[d:priest#1404120758787117236]].

## Consumables

Full caster stack: Flask of Supreme Power, Greater Arcane Elixir, Dreamshard Elixir, Dreamtonic, Wizard Oil, Danonzo's Tel'Abim Delight, Mageblood, Spirit of Zanza [[d:priest#1404120758787117236]]. Add 2% haste food (part of the 10% recipe) [[d:priest#1464653767331938409]], plus Major Mana Potions and tea on cooldown [Zvyrhol, 2026-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=174655#p174655).

## Macros and addons

- Self-cast Chastise without losing your target: `/script CastSpellByName("Chastise", 1)` [[d:priest#1495029676945707050]].
- ProcDoc gives pulsing alerts for Searing Light and Enlightened procs [[d:priest#1329340170851582025]]. DoiteAuras tracks buffs [[d:priest#1482821674817683646]].
- Snackz's 1.18.1 Smite sim spreadsheet (DPS, BiS, rotation) is pinned in `#priest` [[d:priest#1484922576034594877]].

## Dungeon, raid and solo notes

- **Twin Emperors (AQ40):** a Smite priest can tank the caster twin with shadow-resistance gear. Skip the slow Holy Fire so you keep threat, and keep Flash Heal, Shield and a Shadow Protection potion as panic buttons. Shadow-resistance gear is harder to find than for Shadow priests [[d:priest#1461309845457342610]], [[d:priest#1461310065742188544]], [[d:priest#1476578557147877427]], [[d:priest#1476588281528455371]].
- **[Hateforge Quarry](../../instances/hateforge-quarry.md) final boss:** soloable by a well-geared priest. The adds are immune to Shadow, so Smite or Holy damage and high stamina are needed [[d:priest#1469081856380244089]], [[d:priest#1424296554872963163]].
- **Maraudon, Princess:** soloable by a geared Smite priest [[d:priest#1446229592120758332]].
- **Dire Maul East lashers:** the signature gold farm (Shield + Holy Nova spam; see [Leveling](leveling.md#gold-and-farming)).

## Common mistakes

- Playing below 10% haste and relying on double Searing Light procs [[d:priest#1481690213138038855]].
- Casting Holy Fire before the cycle ends, which wastes Purifying Flames uptime [[d:priest#1490796993784709222]].
- Chastising yourself in raids (a GCD loss) [[d:priest#1465500759394353345]].
- Casting SW:P while standing still in raids [[d:priest#1465500759394353345]].
- Taking the shield talents without the T3 6-piece [[d:priest#1494640175521730744]].
- Opening Holy Nova on an unestablished tank (it generates threat since 1.18.0) [Jamey, 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159).
