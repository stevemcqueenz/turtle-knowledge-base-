# Holy Paladin (healer)

**Recommendation:** play the **38/0/13** raid build. Make **Flash of Light** your main heal. Stand with the melee when the fight allows it, and press **Holy Strike** on cooldown: it heals up to five injured people near you for no net mana. Use **Holy Shock** when someone is about to die, and cast a 1.5-second **Holy Light** after each Judgement for big tank hits. Keep Seal of Wisdom up and judge Wisdom, and you will not run out of mana.

| | |
|---|---|
| Role | Raid and dungeon healer in plate. Tank healing (Flash of Light), free smart AoE healing (Holy Strike), Cleanse (magic, poison and disease), blessings, Lay on Hands, Blessing of Protection, Divine Intervention |
| Viability (1.18.1) | **Strong, and still a core raid healer.** It was the strongest paladin spec before the patch [[d:paladin#1463502421581103267]]. 1.18.1 cut its AoE healing (Daybreak nerf, T3.5 bonus change, a Holy Strike targeting bug). Players measured about 10% less healing in Kara40 [[d:paladin#1486468604290535595]]. The raid comp players recommend is still "2 hpal, 2 resto sham, and then 2-3 slots for sham/priest/dru" [[d:paladin#1491681710780452874]]. |
| Difficulty | Easy at range (Flash of Light spam). Medium in melee: you need to know which fights allow melee, track positioning, and know which boss abilities silence or stun you |
| Strengths | The best mana economy of any healer when you melee-weave [[d:paladin#1489691721964065038]], [[d:paladin#1487359832318148680]]. Almost no healing threat [[d:paladin#1461721382441320488]]. Free AoE healing, one of only two classes that remove magic from allies, blessings and bubbles [[d:paladin#1484938782292840551]] |
| Weaknesses | Weak AoE healing without Holy Strike. Holy Priests got stronger AoE healing in the same patch [[d:paladin#1464588771780464650]]. Melee healing is impossible or dangerous on some fights. Cleanse costs a GCD and hits a single target [[d:paladin#1433416402701783163]]. Healing meters under-report your value [[d:paladin#1484938782292840551]] |

!!! warning "Old guides and fake patch news"
    - Guides from before 1.18.1 over-rate Holy Strike healing. It used to hit up to 7 targets with the T3.5 set, and Daybreak was stronger [[d:paladin#1484924634599264276]].
    - On 2026-04-01 the paladin developer posted a "next patch" list: Holy Strike healing removed, Holy Strike turned into a next-swing attack, spellstrikes no longer proccing. **It was an April Fools joke, not a real change** [[d:paladin#1488852869212798987]], [[d:paladin#1488856415010291794]]. Ignore any guide that treats it as real.

## What 1.18.1 changed for Holy

| Change | Effect on you | Source |
|---|---|---|
| Daybreak base healing 289 → 248, and its scaling cut | The nerf costs about 16% of base healing and 26% of scaling. Crit is worth less than before, and parse-level Holy Strike and Holy Shock numbers dropped | [[d:paladin#1464530314217914463]], [[d:paladin#1484924634599264276]], [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| Holy T3.5 5-piece no longer adds Holy Strike targets or its +40% | The top-end AoE healing of T3.5 raiders was the main target of the nerf | [[d:paladin#1484924634599264276]], [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| Libram swaps now cost a GCD | Swapping librams mid-rotation to fish for crits is no longer worth it for a healer | [[d:paladin#1467165502320279734]], [[d:paladin#1467165593672355862]] |
| Launch bugs (see below) | For about three weeks Holy Strike healed less than intended | [[d:paladin#1484975172334387353]], [[d:paladin#1486878930584473811]] |

Developers gave the reason for the nerf: raids were skipping too much damage because of Daybreak and T3.5 healing. No compensation was planned [[d:paladin#1464883313524084769]].

### Launch bugs and their status

- **Mending Light (Holy Strike's heal) was missing its base 5% healing-power scaling** and did not heal when the strike missed, was dodged or was parried. Lhian confirmed it ("base scaling is missing") [[d:paladin#1485021368675336192]]. It was fixed around 2026-03-23/24 [[d:paladin#1485645164494983330]], [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139).
- **For about 3 hours at launch Holy Strike had no target cap**, so logs from that window overstate its healing [[d:paladin#1488084173661929613]].
- **Holy Strike healed full-health players** and ignored the wounded ones. Logs showed heal events per cast halving (49 casts → 166 heals before the patch, 36 casts → 72 after) [[d:paladin#1486480416746766368]]. Lhian said "this will be fixed" [[d:paladin#1487476203613851832]]. The intended behaviour is that Holy Strike heals **wounded** party members, not the **most** wounded [[d:paladin#1489073543751925951]]. Players reported it healing the right number of people again after the 2026-04-08 reset [[d:paladin#1491626372571988158]], and it was called fixed on 2026-04-12 [[d:paladin#1492956867545010276]]. Treat it as a semi-smart heal. It will not always pick the lowest player, so move to where the injured players are.
- **Holy Shock heals about 20% less since the 2026-04-07 reset.** Players reported healing 1k less per cast [[d:paladin#1491584860337475735]], [[d:paladin#1491841017123438716]]. It was still unfixed on 2026-04-19 [[d:paladin#1495373976568860823]].
- **Ironclad was never bugged.** A lower healing-power number on your character sheet comes from an outdated BetterCharacterStats addon [[d:paladin#1486480191315382303]], [[d:paladin#1485591086952091690]].

## Talent build

### Raid healer 38/0/13 (recommended)

This is Mithreon's build, posted before the patch ("I'm ready for you, 1.18.1") [[d:paladin#1475180097261797396]]. He reposted it unchanged after release, including in answer to "any pro hpal that can show me their build?" [[d:paladin#1489299128310693929]], [[d:paladin#1494438173819015238]].

| Tree | Talent | Points |
|---|---|---|
| Holy | Divine Intellect | 5/5 |
| Holy | Holy Judgement | 3/3 |
| Holy | Spiritual Focus | 2/2 |
| Holy | Healing Light | 3/3 |
| Holy | Sanctity Aura | 1/1 |
| Holy | Improved Lay on Hands | 2/2 |
| Holy | Illumination | 5/5 |
| Holy | Ironclad | 2/2 |
| Holy | Divine Favor | 5/5 |
| Holy | Holy Shock | 1/1 |
| Holy | Holy Power | 3/3 |
| Holy | Blessed Strikes | 5/5 |
| Holy | Daybreak | 1/1 |
| Retribution | Improved Blessings | 5/5 |
| Retribution | Improved Judgement | 2/2 |
| Retribution | Improved Seal of the Crusader | 3/3 |
| Retribution | Blessing of Kings | 1/1 |
| Retribution | Pursuit of Justice | 2/2 |

Split **38/0/13**, validated with `talent_tool.py` (VALID). [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=05320312005251351--502300012) · code `AoaAZQFQpAYoB--FATAAK`

Why these points:

- **Holy Judgement 3/3:** each Judgement makes your next Holy Light 1 second faster (2.5 s → 1.5 s). The buff lasts until you use it or die [[d:paladin#1456968228654944460]]. This is your "pocket" big heal.
- **Blessed Strikes 5/5:** Crusader Strike resets Holy Shock, and Holy Strike's heal gets +100% healing and +25% of healing power. Its coefficient goes from 0.05 to 0.30 [[d:paladin#1436301336927928320]], [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460). Without it, Holy Strike healing is weak [[d:paladin#1461520456732508306]].
- **Ironclad 2/2:** 2% of the armor on your items becomes healing power. It is the reason Holy wears plate and a shield [[d:paladin#1471283527336198185]], [[d:paladin#1456929883417612349]].
- **Illumination 5/5:** mana back on crit heals, the core of your mana economy [[d:paladin#1440253873276194857]]. 3/5 with about 30% crit already keeps you above 30% mana everywhere except Kara40 [[d:paladin#1451675254115274915]].
- **Divine Favor 5/5** is passive in this era: +10..50% Holy Shock crit chance [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460).
- **Spiritual Focus 2/2** gives 70% pushback protection. Concentration Aura covers the other 30% [[d:paladin#1481035898484424846]], [[d:paladin#1481036193402716170]].
- **Improved Seal of the Crusader** is "for seal duty". **Sanctity Aura** is "for an unfortunate event when you have a smiter in the party" [[d:paladin#1494438590489428079]]. Both are the flexible points.
- **Improved Blessings + Blessing of Kings:** raid blessings are a large part of why raids bring Holy paladins [[d:paladin#1484938782292840551]], [[d:paladin#1485374258082218037]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **Benediction 38/0/13** (most-posted build before the patch) | Benediction 5/5 and Unyielding Faith 1/2 instead of Sanctity Aura, Improved Seal of the Crusader and Pursuit of Justice. Take it if another paladin covers seals and Sanctity | [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=05320302105251351--55200001) · `AoaAYRFQpAYoB--FoQAAI` | Mithreon ("in the end it should look like this") [[d:paladin#1444611672630100039]], [[d:paladin#1437087518700077137]] |
| **37/0/14 run-speed** | Benediction 5/5 and Pursuit of Justice 1/2, no Unyielding Faith ("1 point in run speed is whatever") | [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=paladin&t=05320302005251351--552000011) · `AoaAYQFQpAYoB--FoQAAJ` | Mithreon [[d:paladin#1456969222470242470]] |
| **Your own mix** | Grey's rule: take 31 Holy points for Blessed Strikes and Holy Shock, plus Improved Blessings, Guardian's Favor and Kings. Choose the rest by personal preference. No calculator code posted | — | [[d:paladin#1485373897602896044]], [[d:paladin#1485374258082218037]] |

Optional swaps players argue about:

- **Improved Lay on Hands vs. the fear-resist talent (Unyielding Faith):** Faithroll skips Improved Lay on Hands, because a single fear-resist proc in a whole run is worth more than it [[d:paladin#1449705354761076820]]. Improved Lay on Hands does have a raid use on Maexxna (see Raid notes).
- **Sanctity Aura** is not worth taking in raids, where another paladin brings the aura. Take it for dungeons or a Smite priest [[d:paladin#1440275124552204319]], [[d:paladin#1494438590489428079]].

!!! note "Pre-1.18.1 builds"
    The talent tree layout did not change in 1.18.1. Builds from late 2025 are still valid, but their reasoning assumed the stronger Daybreak. The old ~31/7/13 forum guide build is from before Blessed Strikes became standard [Unchallenged, 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=27457#p27457).

## How the Holy kit works on Turtle

| Spell | What it does | Source |
|---|---|---|
| **Flash of Light** | 1.5 s cast, which matches the GCD. Your main heal and very mana-efficient. Rank 7 heals 428–493 for 180 mana | [[d:paladin#1456968228654944460]], [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102969#p102969) |
| **Holy Light** | 2.5 s cast, 1.5 s after a Judgement (Holy Judgement 3/3). Big but expensive: in BiS gear you get only about 20 casts before you are out of mana | [[d:paladin#1456968228654944460]], [[d:paladin#1430556664322588823]] |
| **Holy Shock** | Instant, 20 s cooldown. Crusader Strike resets it (Blessed Strikes). It can also reset itself on a crit (5% + 1% per 100 healing power). Divine Favor adds up to +50% crit chance | [[d:paladin#1440253873276194857]], [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460) |
| **Holy Strike / Mending Light** | A melee strike that heals you (half amount) and up to 4 wounded allies near you. It refunds its own mana and shares a 6 s cooldown with Crusader Strike. The heal lands even if the strike misses. It will not heal full-health players; if nobody is hurt, it only deals damage | [[d:paladin#1449766577917395067]], [[d:paladin#1479415903203491956]], [[d:paladin#1479418525092282468]] |
| Holy Strike range | The tooltip says 10 yd, but in testing the heal stops at about **7.6 yd** from you. Stand close | [[d:paladin#1478326501693853727]], [[d:paladin#1478361089740902608]] |
| Holy Strike crits | The damage uses melee crit. The heal rolls its own **spell** crit | [[d:paladin#1492019095888199791]] |
| **Daybreak** (capstone) | A crit heal leaves an "aftershock" on the target, a Flash of Light-sized heal that fires the next time they take damage | [[d:paladin#1440253873276194857]] |
| **Illumination** | Mana back on crit heals. It triggers on Holy Shock's heal, not on its damage | [[d:paladin#1440253873276194857]], [[d:paladin#1483557417471184896]] |
| **Ironclad** | 2% of **item** armor becomes healing power (Devotion Aura, Toughness and enchants do not count). Every 50 armor ≈ 1 healing power | [[d:paladin#1459771471294627891]], [[d:paladin#1471286458932527104]] |
| **Judgement of Light** | Heals whoever hits the judged target. The healing goes to the attacker's meter, not yours | [[d:paladin#1468257173862748283]] |

## Stat priority and caps

1. **Healing power** until about 1,000 [[d:paladin#1461533285275668622]].
2. **Spell crit.** It feeds Illumination and Daybreak. At about 1,200 healing power, 1% crit ≈ 30–40 healing power [[d:paladin#1429167222923984966]], [[d:paladin#1457971407039234274]]. After the Daybreak nerf, crit is worth somewhat less than before [[d:paladin#1486635309947949197]].
3. **Intellect.** Core stats are "INT, Spell Crit and Healing Power" [[d:paladin#1487359832318148680]].
4. **Item armor** (plate and a shield) through Ironclad. The effect is real but modest: about 110 healing power in one test with raw gear [[d:paladin#1485600768630329364]], about 180 in full BiS [[d:paladin#1440985549208031232]].
5. **Haste:** stop at about **3–4%**. Flash of Light's cast already matches the GCD, so more haste is wasted on it [[d:paladin#1493729928125087845]], [[d:paladin#1471284013133205617]].
6. **Mp5 and Spirit:** low value. A Major Mana Potion is worth more than several points of mp5 [[d:paladin#1454168475294629970]], [[d:paladin#1454169086941728808]]. Spirit is described as viable only for a Holy Light build [[d:paladin#1461069979565686815]].

Caps: none for healing. Hit does nothing for your heals, because Mending Light and the Holy Shock reset both happen on a miss [[d:paladin#1439760087060316180]], [Elisleris, 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170509#p170509).

## Single-target healing (priority list)

Setup before the pull: Seal of Wisdom on yourself, Blessing of Wisdom (or your raid assignment), Concentration Aura if you will melee [[d:paladin#1481036193402716170]].

1. **Target about to die, and no time for a cast:** `Holy Shock` [[d:paladin#1489753379583557704]].
2. **Tank took a big hit and you have the Holy Judgement buff:** `Holy Light` (1.5 s). Use it on a target that just took 1.5–2k or during haste windows. Some raiders cast one Holy Light per 7 Flash of Lights; others none at all [[d:paladin#1446996276322369546]], [[d:paladin#1446993999637254155]].
3. **In melee, Holy Strike off cooldown and 3+ people near you injured (but not about to die):** `Holy Strike` [[d:paladin#1399695295524110427]].
4. **Otherwise:** `Flash of Light` on the tank. This is most of your casting [[d:paladin#1489753323253923850]].
5. **After a 1.5 s Holy Light, or when the Judgement debuff is about to drop:** spend a GCD on Judgement + re-seal instead of another Flash of Light [[d:paladin#1446997676200820840]].
6. **Crusader Strike only when moving and you specifically need a Holy Shock reset.** "Much rather do 2 FoL and 1 shock than 2 shock and 1 CS" [[d:paladin#1488534279020482730]], [[d:paladin#1488530603669454990]]. In PvP and open world, Crusader Strike → Holy Shock is still the burst tool [[d:paladin#1446238404172845088]].
7. **Trash downtime:** a rank-1 Flash of Light on the tank is almost free and can crit to leave a Daybreak [[d:paladin#1425107644166701136]], [[d:paladin#1432923730018832555]].

Spell ranks: in raids you use max rank almost always [[d:paladin#1456698985829105930]]. Keep Holy Shock and the 1.5 s Holy Light at max rank as emergency heals. Holy Light can drop to about rank 6 if you spam it on long-autoattack bosses [[d:paladin#1426451644501065738]]. After the patch, reset the ranks in healing addons, because some of them broke auto-ranking [[d:paladin#1485237459456622644]].

**Contested: how often to judge for Holy Light.** Vindaven (QuickHeal developer) saves Holy Light for targets under about 40% when you already have the Judgement buff, and otherwise just casts Flash of Light [[d:paladin#1425074584926949426]], [[d:paladin#1425101563847770112]]. Raid melee healers judge Wisdom on every pack or boss anyway for mana, so the fast Holy Light comes "once per judgement" for free [[d:paladin#1492813841057448060]].

## AoE healing

Holy has no AoE heal other than Holy Strike. "Paladin aoe healing is non existent without holy strike/consecration adding to its value" [[d:paladin#1454173487584247935]].

| Situation | Action |
|---|---|
| 3+ injured players within about 7 yd of you, none about to die | `Holy Strike` on cooldown, then Flash of Light, at most 3 Flash of Lights per Holy Strike [[d:paladin#1399695295524110427]]. In practice, run in with the melee, judge and seal Wisdom, spam Flash of Light, and Holy Strike on cooldown. It is "at least 30% of your healing" depending on tier [[d:paladin#1492813841057448060]] |
| Heavy raid damage that keeps interrupting you (Vaelastrasz) | "3 FoL and 1 HS rotate" [[d:paladin#1489558047897686076]] |
| Easy raids | Also keep a Judgement up and use rank-1 Consecration with the Kara10 libram, if you know the fight [[d:paladin#1489557484732682260]] |
| Several Holy paladins in one raid | Your Holy Strikes stack into large party-wide coverage. This is the main reason raids bring two or more [[d:paladin#1449849405191749694]] |
| 1–2 injured | Single-target list |

Holy Strike is a damage dampener, not a save: do not count on it to rescue someone at 20% [[d:paladin#1446996862426026015]].

## Melee or range: choosing per fight

"Melee holy is the same as ordinary holy, you just become aware that pressing holy strike between flash of lights is better than only doing flash of lights" [[d:paladin#1492796874128887839]]. Stay at range, doing pure Flash of Light spam, whenever melee is unsafe. That is "only a few fights" [[d:paladin#1482310661760356354]].

- **Melee freely:** fights with predictable damage and a melee stack. Heigan ("100% do it"), Patchwerk, Loatheb [[d:paladin#1482319532700991570]]; Mephistroth [[d:paladin#1373985305526538301]]; Anomalus, where the raid stacks [[d:paladin#1413174582633955398]].
- **Stay at range:** Rupturan [[d:paladin#1382265813800714351]], Kruul (too fast for the small heals to matter) [[d:paladin#1422311244660080702]], and anything with melee stuns, silences, knockbacks or fear. **Contested:** some Holy paladins call Abyssal Lords, Ragnaros, Geddon and Onyxia phase 2 "unmeleeable", while others melee-heal all of them [[d:paladin#1454169105425895527]], [[d:paladin#1454169185675383018]]. A forum list of fights where melee is unsafe (Gehennas, Garr adds, Shazzrah, Sulfuron, Majordomo, Ragnaros, Razorgore, Broodlord, Chromaggus, Nefarian, Bug Trio, Sartura, Twins, C'Thun) is the safe default for a new player [Atreidon, 2025-08-11](https://forum.turtlecraft.gg/viewtopic.php?p=144592#p144592).
- **Rule of thumb:** mirror the melee DPS. If they run in, you run in; if they leave, you leave [[d:paladin#1439619289194823963]].

## Cooldowns and utility

| Cooldown | Use |
|---|---|
| **Lay on Hands** | Tank emergency. With Improved Lay on Hands it also gives the target +30% item armor; on Maexxna, cast it on the tank just before Web Wrap, for 30% armor through the Web/Enrage window [[d:paladin#1466097719415410709]] |
| **Divine Intervention** | Maexxna "DI strat": pre-DI a healer, who comes back to heal the MT during Web Wrap. Assign a paladin to DI the same healer before each wrap [[d:paladin#1466097683629342991]] |
| **Divine Shield** | Heals keep working inside the bubble. Use it against Nefarian's fear, or you get breathed and die [[d:paladin#1465429349154160784]]. It does not remove Vaelastrasz's Adrenaline [[d:paladin#1465429349154160784]]. It is better than Divine Protection for a healer, because Divine Protection disables melee but costs less mana [[d:paladin#1434634554920140982]] |
| **Blessing of Protection** | Save a DPS who pulled aggro, or bubble casters during AoE damage [[d:paladin#1484938782292840551]] |
| **Cleanse** | One GCD removes magic, poison and disease. Pre-cast it before the Naxx spider-wing poisons [[d:paladin#1461076668021211320]] |
| **Blessings** | With 4 paladins: Improved Might, Improved Wisdom, Kings, Salvation [[d:paladin#1468968922354286808]]. **Blessing of Light** helps only Holy paladins. Skip it unless you have spare paladins [[d:paladin#1490560751939620984]], [[d:paladin#1490561064562196530]]. If you are the only paladin: Wisdom on yourself, Salvation on everyone else [[d:paladin#1440296346706776165]] |

## Mana management

- **Seal of Wisdom → Judgement of Wisdom → Seal of Wisdom, Holy Strike, Illumination, Major Mana Potions and tea.** This is "plenty enough for Paladin to never run out of mana" [[d:paladin#1487359832318148680]].
- **Nordanaar Herbal Tea** (Hyjal, 5 for 1 small Dream Shard) restores about 600 health and 1,100 mana on a 2-minute cooldown, separate from potions [[d:paladin#1485441517744029717]].
- In raids with few long-lived targets (MC), keep Judgement of Wisdom on one big target. With lots of short trash (Kara10), just keep Seal of Wisdom up [[d:paladin#1452727170827943976]].
- Flash of Light is cheap: rank 1 is mana-positive with Dark Runes and Major Mana Potions [[d:paladin#1461052038766133402]].
- The classic mistake is spamming max-rank Holy Light [[d:paladin#1436013333919830126]]. Under-geared healers also struggle with max-rank Flash of Light spam in MC [[d:paladin#1430485796451909642]].

## Threat

Paladin healing threat is very low. Heals have a -50% modifier, and Holy Light a further -70% [[d:paladin#1461721382441320488]]. In practice Holy paladins almost never pull adds [[d:paladin#1446148082508107788]]. Holy Shock damage does normal damage threat.

## Gear

### Pre-raid

- **Holy is the easiest healer to gear:** about 80% of pre-raid BiS is on the auction house, and half of it is "more than ready for MC" [[d:paladin#1452769613103366375]], [[d:paladin#1452769875859603549]].
- **Red Dragonscale set** (Leatherworking): lots of healing power, no Intellect. A good starter set to buy, not mandatory [[d:paladin#1492191563324067942]]. Its 4-piece HoT proc can be triggered by Daybreak [[d:paladin#1433073573383114863]].
- **Dzonathan's budget list** (mostly from the auction house) [[d:paladin#1363105974654865590]]:

| Slot | Item |
|---|---|
| Weapon | Hammer of Grace (BRD), Crimson Spellblade (Stratholme), or Hand of Edward the Odd (world drop) |
| Shield | Defender of Nordrassil (Hyjal quest) or Spellguard's Shield (Dalaran rep) |
| Head | Whitesoul Helmet (crafted) |
| Shoulders | Dawnbringer Shoulders |
| Chest | Verdant Dreamer's Breastplate (Leatherworking) |
| Wrist | T1 bracers |
| Hands | Gauntlets of the Lost Crusader |

  Other slots: Corehound/Hide of the Wild pieces, Animated Choker, Fordring's Seal, Time-Shifted Wheel [[d:paladin#1456682370949447688]]. A full pre-raid set reaches about 900 healing [[d:paladin#1418327794508763137]].
- **Shields** are the best off-hand because of Ironclad. Healing power from armor + stats: Dark Iron Wardguard (Hateforge Quarry) 51, Defender of Nordrassil 61, Draconian Aegis of the Legion (UBRS) 63, Time-Shifting Wheel 82, Red Dragonscale Protector (Vaelastrasz) 92, Wormscale Blocker (Ouro) 90, Death's Bargain (Gluth) 91, Shield of Condemnation (Kel'Thuzad) 127 [[d:paladin#1302051425269842001]]. Keep Death's Bargain until you get a Kara40 shield [[d:paladin#1440368357353455709]].

### Raid progression

| Phase | Recommendation | Source |
|---|---|---|
| MC | T1 3-piece is good. T1 5-piece is OK. **8/8 T1 is not worth it** (the 8-piece proc was nerfed from 50% to about 10–15%) | [[d:paladin#1435007720355926186]], [[d:paladin#1485783919994601612]], [[d:paladin#1488449679912992789]] |
| BWL | **T2 3-piece** is a top bonus, about +19 healing power per piece. Recommended mix: 3 T1 + 3 T2 (T2 helm) + Wild Growth + Empowered Leggings. Mithreon's math has the T2-helm version at 507 healing / 11.8% crit, vs 458 / 13.8% with Mish'undare | [[d:paladin#1457993659122319473]], [[d:paladin#1486800195118432347]], [[d:paladin#1486800038100205580]] |
| AQ40 / Naxx | T3 2-piece is "great". Full 8/8 T3 is only for dispel-heavy fights (Viscidus). Otherwise run 5–6 T3 + 3 T2 | [[d:paladin#1435007720355926186]], [[d:paladin#1427315096648024064]] |
| Kara40 | **T3.5 is still the most stat-heavy set** and BiS. Its 5-piece Holy Strike bonus only matters if you Holy Strike on cooldown. The T3.5 neck and legs have no Stamina, so watch your HP. Three Kara40 items (database ids 33315, 33617 and 55130) are projected to beat T2 3-piece by about 70 healing power, and the PvP glove set is a direct upgrade over T2 3-piece | [[d:paladin#1485615039992959096]], [[d:paladin#1485615220012482590]], [[d:paladin#1492202289040064602]], [[d:paladin#1489359961371836446]], [[d:paladin#1489363816734265445]] |

- **Weapons:** Ivonor is usually better than Scepter of the False Prophet, and other healers compete for the Scepter [[d:paladin#1449227969129353388]]. 1H + shield always beats 2H for Holy, because of Ironclad and the choice of healing 1H weapons [[d:paladin#1456929883417612349]], [[d:paladin#1492967066523926709]].
- **Trinkets:** the Argent Dawn exalted trinket is pre-raid BiS. The DME seal (item 18472, 33 healing) is good early [[d:paladin#1429806242167128167]]. Eye of Diminution + Jewel of Wild Magics give 6% crit, "nuts for Daybreak" [[d:paladin#1429343798692937738]]. Draconic Infused Emblem out-heals the Talisman of Ephemeral Power [[d:paladin#1455891778346418458]]. Kiss of the Spider is BiS-tier in Kara40 because its 2-minute cooldown fits long fights [[d:paladin#1444984696432758846]]. Mithreon calls the four-element proc trinket (item 55087) "BiS for hpal", with Eye of the Dead second [[d:paladin#1440358529163853954]]. Fabric of Time's -20 Intellect makes it a poor Holy trinket (single source) [[d:paladin#1491856291826503922]].
- **Librams:** Mithreon's progression is item 23201 → item 23006 (the Naxx Flash of Light libram), with item 55470 before that or as a Holy Strike swap [[d:paladin#1462053438534713449]]. Item 58093 is for dungeons only: in raids it lags other players and takes 2 of their buff slots [[d:paladin#1462053855398461450]]. Destroses lists the Scholomance Flash of Light libram, then the Naxx one. The Scarlet Monastery Holy Strike crit libram also affects the heal, and the Kara10 Consecration libram gives a little damage reduction [[d:paladin#1491335501784027317]]. The Argent Dawn rep Holy Shock libram (Light's Hope armorer) adds hit and damage to Holy Shock and is aimed at Shockadins [[d:paladin#1484655760842555495]], [[d:paladin#1484655722074607756]]. The Loop of Infused Renewal only procs from Holy Light, so skip it [[d:paladin#1491436509331722281]].

## Enchants

No post-1.18.1 Holy enchant list was posted. The standard list from the forum guide (vanilla baseline plus Turtle options) [Unchallenged, 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=27457#p27457):

| Slot | Enchant |
|---|---|
| Head / Legs | Lesser Arcanum of Rumination (+150 mana), Arcanum of Focus, or the Zul'Gurub Syncretist's Sigil (+24 healing) |
| Shoulders | Zandalar Signet of Serenity (+33 healing) |
| Cloak | Subtlety |
| Chest | Major Mana |
| Bracers | Healing Power, Mana Regeneration or Greater Intellect |
| Gloves | Healing Power (+30) |
| Boots | Greater Stamina |
| Weapon | Healing Power |

Haste enchants are weak (normal ones about 1%), so do not chase them [[d:paladin#1448584355109929122]].

## Oils, consumables and world buffs

| Slot | Choice |
|---|---|
| Weapon oil | **Wizard Oil**. It raises healing power (tested +10–15 on Flash of Light). Dream Tonic does not add healing [[d:paladin#1449816904784150528]], [[d:paladin#1449822242786771117]] |
| Mana | Major Mana Potion + Nordanaar Herbal Tea (separate cooldowns) [[d:paladin#1432035429934436393]], [[d:paladin#1485441517744029717]] |
| Elixirs | Dreamshard Elixir, Mageblood Potion, Cerebral Cortex Compound, Elixir of Fortitude [[d:paladin#1470529934270136330]] |
| Flask | Distilled Wisdom, but top Kara40 Holy players often take **Flask of the Titans** because mana is not the limit [[d:paladin#1432435765123616890]] |

## Macros and addons

- **Mouse-over Holy Shock** (works on unit frames): `/run i=(GetMouseFocus().unit) if i then ClearTarget() CastSpellByName("Holy Shock") SpellTargetUnit(i) TargetLastTarget() else CastSpellByName("Holy Shock") end` [[d:paladin#1477771144802078720]]
- **Self-Holy Shock on a modifier:** `/script if IsAltKeyDown() or IsControlKeyDown() or IsShiftKeyDown() then TargetUnit("player"); CastSpellByName("Holy Shock"); TargetLastTarget(); else CastSpellByName("Holy Shock"); end` [[d:paladin#1420471575097905162]]
- **PallyPower** to assign blessings per class [[d:paladin#1468248560763015438]]. **A raid-frame addon** (for example Puppeteer) is a big help for melee healing [[d:paladin#1461722536919175269]]. **Update BetterCharacterStats** so it shows Ironclad [[d:paladin#1485591086952091690]].
- **QuickHeal** (heal automation) is allowed, but some players find it distasteful and uninstall it [[d:paladin#1491875187006771283]]. Combined with Nampower it can mis-cast a self Holy Light after Holy Shock or Holy Strike [[d:paladin#1446401521322426459]].

## Dungeon and raid notes

- **Dungeons:** melee-weaving matters "arguably more for 5-mans than raids" [[d:paladin#1489754231773593762]]. Watch for mobs that silence in melee [[d:paladin#1492813841057448060]].
- **[Molten Core](../../instances/molten-core.md):** Magmadar: stay on the dog and use Fire Protection Potions before and during the fight (you will get feared into fire). Shazzrah: an Arcane Protection Potion, and do not cast into his Counterspell. Geddon: Fire Protection Potion, run from Inferno (you can bubble through it). Ragnaros: move out and back in on the knockback [[d:paladin#1439619289194823963]].
- **[Blackwing Lair](../../instances/blackwing-lair.md)** (Mithreon's walkthrough) [[d:paladin#1465429349154160784]]:
    - Razorgore can stun in melee: use a Free Action Potion or bubble.
    - Vaelastrasz: 3 Flash of Light + 1 Holy Strike. With Adrenaline, hide behind the left column (bubble does not help).
    - The suppression room is a mana gauntlet.
    - Firemaw: Holy Shock the active tank on the breath.
    - Chromaggus: dispel everything and bring about 3 Hourglass Sand. You can bubble off the bronze debuff yourself to save a Sand [[d:paladin#1465430385386193027]].
    - Nefarian: bubble the fear.
- **Naxxramas:**
    - Loatheb: Holy Strike heals through the healing lockout, but Daybreak does not fire while you are silenced [[d:paladin#1462816619020554404]]. With a full-mitigation tank, melee healing "trivializes the healer mechanic" [[d:paladin#1382265813800714351]].
    - Maexxna: use Divine Intervention and Lay on Hands (see Cooldowns).
    - Spider wing: pre-cast Cleanse [[d:paladin#1461076668021211320]].
    - Heigan: melee-heal [[d:paladin#1482319532700991570]].
- **[Tower of Karazhan (Kara40)](../../instances/tower-of-karazhan.md):**
    - Flash of Light spam alone can heal through Kara40 [[d:paladin#1427752206077263912]].
    - Anomalus: you need an arcane-resist set, and mail resist pieces keep more healing power than plate ones [[d:paladin#1393979859998343178]].
    - Kruul and Rupturan: heal from range (see above).
    - Mephistroth: safe to melee-heal.
- **[Onyxia's Lair](../../instances/onyxias-lair.md):** some Holy paladins stand in the melee group and alternate Holy Shock on the main tank with Crusader Strike [[d:paladin#1485793979571241012]].

## Common mistakes

- Spamming max-rank Holy Light and running out of mana [[d:paladin#1436013333919830126]].
- Pressing Crusader Strike for Holy Shock resets while raid damage is going out. It is a GCD with no healing [[d:paladin#1488530603669454990]].
- Holy Striking from too far away. The heal reaches only about 7.6 yd [[d:paladin#1478361089740902608]].
- Meleeing fights with melee stuns, silences or knockbacks. Use the ranged list above [Atreidon, 2025-08-11](https://forum.turtlecraft.gg/viewtopic.php?p=144592#p144592).
- Stacking haste past 3–4%, or stacking mp5 and Spirit over Intellect and crit [[d:paladin#1493729928125087845]], [[d:paladin#1487359832318148680]].
- Counting Devotion Aura, Toughness or enchants toward Ironclad. Only armor on items counts [[d:paladin#1459771471294627891]].
- Trusting an outdated stats addon, or logs from the launch-bug weeks, to judge your healing [[d:paladin#1485591086952091690]], [[d:paladin#1488084173661929613]].
- Wearing caster spell-damage cloth instead of healing plate [[d:paladin#1302015572036550677]].
- Putting Blessing of Light on the raid when there are only one or two Holy paladins [[d:paladin#1490560751939620984]].
