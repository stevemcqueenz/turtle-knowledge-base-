# Priest — Holy healer (raid / dungeon)

Era markers: **pre-1.18.1** = before 2026-03-20; **1.18.1-announced-pre-release** = 2025-10-03 .. 2026-03-19; **post-1.18.1** = 2026-03-20 onward. Class Changes 2 ("CC2", patch 1.17.2, 2024-10) reshaped all three trees; almost every player source below is post-CC2 but pre-1.18.1.

## Overview

- **Role**: primary healer for 5-mans, raids and (as a variant) battlegrounds. Turtle's Holy tree was re-tuned in CC2 so that healing output "should be about the same as before if not higher when Holy is talented deeper" while baseline heals (ranks above 30) lost 15% base and coefficient — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970). One player measured the result as deep Holy having "about 35% more healing throughput than discipline, making the deep discipline build useless for healing" — [Sanwen (player), 2024-11-07](https://forum.turtlecraft.gg/viewtopic.php?p=106860#p106860) (single source).
- **Strengths** (from the guide most players point new priests to): "a very versatile healer who can apply Heal over Time, strong and slow direct heals, fast direct heals and some strong AoE healing ... as well as an instant shield. While it's not the best at anything the Holy priest is a great and reliable healer that fits any raid composition" — [Langorn (guide writer; author of the only Turtle Holy Priest Guide, t=21979), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325). Raid buffs: Fortitude, Divine Spirit (baseline at 30 since CC2), Shadow Protection, Fear Ward (baseline at 20 for every race since CC2 — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970)), dispels, Shackle.
- **Weaknesses**: "Healing spells are pretty expensive by and large, so until you start popping off with spirit and meditation, mana is a bit intense" and "You don't have an 'oh shit' button like most other heal classes do, power word shield is close" — [Thexdylldolan (player), 2024-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=88494#p88494). Priests are "the worst healer to gear in the game" per a vocal critic — [Terrydavis (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143235#p143235) (single, hostile source; contested by others in the same thread).
- **Content**: raids (any tier; "Priests are generally in high demand so no matter what race you are you'll get a spot in raids in any guild" — [Blackduck (player), 2023-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=77860#p77860)); dungeons ("priests can heal 5-man dungeons in all specs, there's no need to be holy while leveling" — [Ishilu (player), 2023-06-29](https://forum.turtlecraft.gg/viewtopic.php?p=51822#p51822)); not recommended for solo leveling (see `leveling.md`).
- **Community standing**: **favored/standard** healer spec, but with a loud minority saying priests were left behind by CC2/1.18.0 ("While every other healer gets buffed, priests are trapped in 1.12 talents" — [Solaire0726 (player), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142435#p142435)). A Naxx raider's log: "raid composition for healers is now 5+ shaman, 2-3 pallies, 1-2 priests, 1-2 druids ... Renews do not stack, so we don't stack like shaman stack" — [Hawkbutt (player), 2025-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=125153#p125153). Post-1.18.1 the mood improved: "healer will be a beast in next patch" — [Zvyrhol (player), 2026-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=166937#p166937); "giving priests both prayer of healing castable on any group and the new lightwell seems a bit of an overkill. Prayer of healing is already pretty strong" — [Ayesha (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172700#p172700).

## What 1.18.1 changed for healers (staff, all released 2026-03-20)

Source: [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) plus revision blocks in the same post.

| Change | Detail | Bot impact |
|---|---|---|
| Heal / Greater Heal / Flash Heal base values raised | Heal R4 605-684 → 702-793; Greater Heal R1 840-948, R2 1075-1207, R3 1344-1506, R4 1681-1877, R5 1881-2053; Flash Heal R3 297-358 ... R7 738-872 | Downranked heals are stronger than pre-1.18.1 tables; re-check rank thresholds in healing addons/macros |
| Prayer of Healing | "heals your target and their party members within 30 yards"; can target other parties; 40 yd range | PoH is now a raid tool: target a member of the damaged group |
| Lightwell | One rank, 5 min CD; passive: when you land Lesser Heal/Flash Heal/Heal/Greater Heal, the well heals an injured friendly within 30 yd of it for 20% of the heal (Splendor of Light), max once per 5 s per player, 10 charges / 1 min | Drop it where the raid stands before pulls; never rely on players clicking it |
| Reservoir of Light (Holy, 3 pts) | Splendor of Light +33/66/100% (26.6/33.3/40% of the heal) | Only worth points if you commit to Lightwell |
| Spirit of Redemption | +10% Spirit (was 5%) | Always take (1 pt) |
| Book of Prayer (new, Holy row 5, 2 pts) | "regain 15/30% of its mana cost if it is not a repeat of the previous healing spell" | Alternate spells (Renew → Heal → Flash Heal) instead of spamming one |
| Swift Recovery → Empowered Recovery | +3/6% healing on Renew targets **and** Renew +3/3 s (revised 2026-03-19; the base post said 3/6 s) | Renew uptime before direct heals |
| Proclaim Champion and all Champion spells | **Removed** | Any build/advice mentioning Proclaim Champion, Champion's Grace, Revive Champion is obsolete |
| New capstone **Ascendance** | 30 s: healing spells cost 33% less, cast 20% faster, targets get Apotheosis (+15% healing taken, 10 s); castable under CC and clears it; 280 mana, 5 min CD | Use as a burst-healing / anti-CC cooldown |
| Fade | Also reduces total threat by 15% | Fade is now meaningful late in long fights |
| Lightwell hotfix | "Fixed targeting of Lightwell's Splendor of Light being too precise" — [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139) | — |

Set bonuses reworked for the new Lightwell — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272): Holy T2.5 (3): "Critical effects of Heal and Greater Heal increase your Spirit by 80 for 10 seconds"; Holy T2.5 (5): "Increases the range of your Lightwell by 5 yards and the amount of charges by 5".

Player verdict on the new Lightwell is **contested**: healers-only design ("Now it's more like version lobbied specifically for healers in raiding environment" — [Zvyrhol (player), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166149#p166149)); "Now it's more like HPS meter booster" — [Fizuzfil (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172701#p172701); "The current iteration is just as useless as the clickable one was" — [Edem87 (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173666#p173666).

## Talent build

**No post-1.18.1 source publishes a full Holy healing allocation.** The last complete descriptions are pre-1.18.1 and reference Proclaim Champion (removed). Below: (a) the pre-1.18.1 consensus shape, (b) a reconstruction for 1.18.1 built only from talents the sources name, with the unassigned points flagged.

### (a) Pre-1.18.1 builds (Langorn, Hawkbutt, Sharmaine)

- "The first variant we will call the 'Deep Holy Build'. The goal here is to get at least 31 points in the Holy tree ... The base of this build would be (14/31/0) with several points free ... deeper in discipline (17/34/0) ... getting the 15% shield buff in discipline for the extra chance to save someone in danger, as well as holy Nova for some instant AoE healing and Holy Reach for 6 increased yards ... or ... raw heal output, with the deeper holy build (14/37/0) ... Usually i go for the (17/34/0) Build." Second variant "'Enlighten Build' (21/30/0) ... sacrificing Proclaim champion ... in most situations i wouldn't recommand it" — [Langorn (guide writer), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325). The exact per-talent splits are only in image links (noelshack), not in text.
- "17/34/0 is the most popular healer priest build that takes this talent [Improved Power Word: Shield]" — [Sharmaine (player), 2025-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=155346#p155346).
- Talent-by-talent value list (Disc: Mental Agility, Improved PW:Fortitude, Meditation, Improved Inner Fire, Inner Focus, "Enlighten, Mental Strength, Chastise - all good talents with utility"; Holy: Improved Renew, Holy Focus "I pick this over Divinity as you won't be stacking crit while leveling", Divine Fury, Improved Healing, Spiritual Healing, Proclaim Champion "may be useful on a squishy tank but it tries to do everything") — [Hawkbutt (player), 2025-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=124792#p124792).
- Reaching the Disc healing talents forces points into offensive row-1 talents: "to reach them, one need to invest in pure DPS talents like Piersing Light or Mental Agility or wand spec" — [Xudo (player), 2024-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=103566#p103566).

### (b) Reconstructed 1.18.1 raid build (17/34/0 shape), Turtle talent names

Marked **[cited]** when a source names the talent for a healer, **[fill]** when it is only a path/prerequisite choice. The Holy talents named by sources add up to 36, two more than the 34 of the 17/34/0 shape (Langorn's "6 free points"): drop Holy Reach (2) for the plain 17/34, or drop Improved Renew (Sharmaine's "trap talent") to fit Book of Prayer. Discipline 17 + Holy 34 = 51.

| Tree | Talent | Points | Basis |
|---|---|---|---|
| Discipline | Mental Agility | 5/5 | [cited] Hawkbutt (reduced mana cost); row 1 in Turtle |
| Discipline | Improved Power Word: Fortitude | 2/2 | [cited] Hawkbutt |
| Discipline | Improved Power Word: Shield | 3/3 | [cited] Langorn 17/34 "15% shield buff"; Sharmaine warns it adds only ~142 absorb at R10 (flat, no scaling) |
| Discipline | Inner Focus | 1/1 | [cited] Hawkbutt, Langorn |
| Discipline | Meditation | 3/3 | [cited] Hawkbutt |
| Discipline | Improved Inner Fire | 2/2 | [cited] Hawkbutt |
| Discipline | Silent Resolve or Blessed Concentration | 1 | [fill] one spare point to reach 17; Langorn: "spell warding can be strong in particular fights" (Spell Warding is Holy row 2 since 2025-04-01) |
| Holy | Holy Focus | 2/2 | [cited] Hawkbutt |
| Holy | Improved Renew | 3/3 | [cited] Hawkbutt, Ironhorse; **contested**: "trap talent ... only affects base healing" — [Sharmaine (player), 2025-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=155346#p155346) |
| Holy | Divinity | 5/5 | [cited] Langorn (5% Holy crit); crit also procs Inspiration |
| Holy | Divine Fury | 5/5 | [cited] Hawkbutt, Langorn |
| Holy | Holy Reach | 0-2 | [cited] Langorn 17/34 variant (optional; the 2 points that push the list to 36) |
| Holy | Holy Nova | 1/1 | [cited] Langorn 17/34 variant (optional) |
| Holy | Inspiration | 3/3 | [cited] Langorn: "a crit with any direct healing spell will buff our target for 25% more armor, which is huge on a tank" |
| Holy | Improved Healing | 3/3 | [cited] Hawkbutt |
| Holy | Spiritual Guidance | 5/5 | [cited] "In BiS gear you get about 350-400 spirit" → +87-100 healing — [Thexdylldolan (player), 2024-04-17](https://forum.turtlecraft.gg/viewtopic.php?p=92978#p92978) |
| Holy | Spirit of Redemption | 1/1 | [cited] "the talent now gives 5% spirit so I've kinda gotta take it" — [Matches (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114234#p114234); 10% in 1.18.1 |
| Holy | Spiritual Healing | 5/5 | [cited] Hawkbutt; staff: 6..30% |
| Holy | Ascendance | 1/1 | [fill] replaces Proclaim Champion (staff 1.18.1); no player evaluation found |
| Holy | Book of Prayer / Empowered Recovery / Reservoir of Light | 0-3 | [fill] new/changed in 1.18.1; no player allocation found. Use the Holy Reach / Holy Nova / Silent Resolve points here if you commit to Lightwell |

Build links: Langorn's images only; no talents.turtlecraft.gg export for a Holy raid build exists in the forum. **Patch validity**: the shape is pre-1.18.1; the capstone and row 4-5 changed in 1.18.1 → `valid_for_1181: unknown`.

Dungeon variant: not distinct; "Mostly it doesn't matter. You can be fully specced into the Shadow tree and still heal fine in dungeons" — [Hawkbutt (player), 2025-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=124792#p124792) (consensus with Ishilu 2023).

## Stat priority

- Priority (Langorn, consensus with Haregijoe/Blubbsy replies): **Healing Power > Spell Crit (Inspiration + 150% crit heals) > Intellect > Spirit > Mp5 > Stamina**. "Priests use spirit very well as they get Healing Power and mana regen from it ... you will have to care about the 5 seconds rule" — [Langorn (guide writer), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).
- Spirit vs healing power trade: swapping Rosewine Circle + Hollowbone Choker for two "of the Lost" 5%-meditation pieces "need to give you at least +8mp5 to be even comparable ... definitely viable, but ... more interesting in big raids" — [Langorn (guide writer), 2025-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=152953#p152953).
- Endgame spirit: 350-400 in BiS (Thexdylldolan, above); Matches reports 401 Spirit with Divine Spirit worth 40 — [Matches (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114234#p114234).
- Caps: none for healing. Hit only matters for dispels/offensive spells (3% vs level 60 players, 16% vs level 63 bosses — [Heroclastus (player), 2024-10-08](https://forum.turtlecraft.gg/viewtopic.php?p=102771#p102771)).
- Power Word: Shield scales with **healing power**, not spell power, per player testing ("it scales on Healing Power, not Spell Power" — [Fidothealmighty (player), 2026-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=166697#p166697); confirmed [Gottabe (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173313#p173313)); staff only said the coefficient rose 10% → 35% — unclear whether staff intended SP or HP.
- Flat-only talents: Improved Renew, Improved PW:Shield and Force of Will only multiply base values ("942 * (1 + 0.15 IPWS + 0.2 FW) + healing_power*0.35" for R10 shield) — Sharmaine 2025-10-13 above; Zvyrhol computed the difference as 122.5 absorb at 1000 healing — [Zvyrhol (player), 2025-11-16](https://forum.turtlecraft.gg/viewtopic.php?p=159816#p159816).
- While leveling: see `leveling.md` (Spirit > Intellect > Stamina).

## Single-target healing priority (Langorn; downrank rules from Sharmaine)

Target priority: "You ... The tank ... The other heals ... DPS" — [Langorn (guide writer), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325).

Spell selection, ordered:
1. **Target about to die (critical HP, no time for a 2.5 s cast)** → `Power Word: Shield` (max rank) first, then heal. "don't bother trying to hard cast a healing spell. Start with a shield to prevent him from dying and then you can heal safely" (Langorn). Exception: warrior/bear tanks (see Role strategy).
2. **Emergency single target** → `Flash Heal` (max rank): "your 'Oh shit' heal ... fast casting, mana expensive".
3. **Tank taking ~50% per hit** → `Greater Heal` (max rank); "you will get OOM very fast if you spam this spell".
4. **Steady damage, no emergency** → `Heal` (max rank): "bread and butter heal, it is very mana efficient".
5. **Always keep `Renew` (max rank) on tanks** ("100% of the time on my tanks"); `Renew` rank 5 on damaged non-tanks and while moving (Langorn). Downranked Renew for "DPS above half health", movement, warlocks life-tapping — [Akos1896 (player), 2025-04-19](https://forum.turtlecraft.gg/viewtopic.php?p=127580#p127580); pre-HoT the tank before pull but watch threat (same).
6. **Mana low** → downrank: "You get full scaling starting with Heal rank 2, Greater heal rank 1 and Renew rank 3. So you can use these ranks and above confidently" — [Sharmaine (player), 2025-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=161280#p161280). Rank 3 Renew with 1000 healing power "heals for 1025 over 15 sec for almost no mana" — [Sharmaine (player), 2025-10-13](https://forum.turtlecraft.gg/viewtopic.php?p=155346#p155346).
7. `Inner Focus` (3 min): pair with Greater Heal or Prayer of Healing; free spell also does not break the 5-second rule (Langorn).
8. Post-1.18.1: alternate spell types to trigger **Book of Prayer** refunds (staff wording: not a repeat of the previous healing spell) — no player rotation confirms this yet (gap).

Anti-pattern (community norm): "Spamming Flash Heal is indeed something that should be looked down upon because it disregards mana efficiency in favor of through-put" — [Elesion (player), 2025-04-02](https://forum.turtlecraft.gg/viewtopic.php?p=125082#p125082); contested by Maxitaxii who likes the T3.5 "flash heal set" as another tool — [Maxitaxii (player), 2025-04-24](https://forum.turtlecraft.gg/viewtopic.php?p=128268#p128268).

## Multi-target / AoE healing

- **Own party (pre-1.18.1) / any party (post-1.18.1)**: `Prayer of Healing` max rank "extremely costly and long to cast ... I would not recommand to use this spell without Inner focus"; rank 1 PoH "if you don't have much to do and want to heal your entire party for a small chunk" (Langorn). "A good holy dps priest should still be using poh on cd to keep their group alive" — [Schwarzschild (player), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105283#p105283). Raid tip pre-1.18.1: "put a priest into melee group. At that point POH gets great enough, especially in aoe fights like Firemaw or Guardian trashes in AQ40" — [Kobiq (player), 2023-09-08](https://forum.turtlecraft.gg/viewtopic.php?p=61499#p61499). Post-1.18.1 PoH targets other parties (staff) → target the most damaged group's member.
- `Holy Nova` (10 yd, own party, self-centered): "small burst of instant heal (with pre raid BIS gear you'll crit around 800) ... mana expensive and very situational" (Langorn); "as a heal ... always outclassed by prayer of healing because a rank 1 prayer of healing will cost roughly half the mana and heal for just as much" — [Itsbacon (player), 2025-08-06](https://forum.turtlecraft.gg/viewtopic.php?p=143410#p143410). Since 1.18.0 it generates threat (25% reduced) and lost its no-threat property — [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159); mana −20% in 1.18.0 and another ~−15% in 1.18.1 (revision 2026-01-26).
- 2-3 targets: Renew on each + Heal on the lowest; 4+ in one party: PoH (with Inner Focus if max rank). AoE threshold used by bots: **4** party members below ~70% → PoH (derived from Langorn's "entire group just took a large chunk of damage").
- Post-1.18.1 Lightwell: place it inside the melee/stacked group before pull; it converts 20% (40% with 3/3 Reservoir) of each direct heal into a bonus heal on an injured player within 30 yd (staff).

## Cooldowns and resources

- `Inner Focus` 3 min: emergency crit Greater Heal / free max-rank PoH (Langorn).
- `Ascendance` 5 min (1.18.1): 30 s of cheap, fast heals + Apotheosis; also a CC break (staff). No player usage notes yet.
- `Fade` when pulling aggro: "Please do not die stupidly when pulling agro from tanks by not using this spell" (Langorn); 1.18.1 adds −15% total threat.
- `Desperate Prayer` (Human/Dwarf): instant self-heal, 10 min CD — [Atreidon (player), 2024-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=114520#p114520).
- Mana: exploit the 5-second rule ("heal completely your team then wait for several seconds to regen"); Major Mana Potions "use the first one early in the fight so you can use an extra one"; teas / Dark or Demonic Runes share a cooldown (Langorn; Sharmaine). Lasting mana on Turtle: "As long as you use tea with mana potions and your guild kills bosses quickly, you will never run out of mana. At least this is my experience in Kara40/Naxx" — [Zvyrhol (player), 2026-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=174655#p174655) (about Smite, applies to the same consumables).
- Drink between pulls in dungeons whenever below ~50%; in raids use potions/tea rather than stopping.

## Role strategy

- **Power Word: Shield on rage tanks**: on Turtle's 1.12 core a shielded warrior/bear does not gain rage from absorbed hits — "if you're on a true 1.12 emulation server, like Turtle, the complaints are real" — [Azcron (player), 2025-09-25](https://forum.turtlecraft.gg/viewtopic.php?p=153172#p153172). Rule: "if the tank is bear or warrior, imagine pw shield as an emergency button ... If your tank is a pala or a shaman, use it as much as you can" — [Akos1896 (player), 2025-09-25](https://forum.turtlecraft.gg/viewtopic.php?p=153177#p153177). Consensus.
- **Dispel duty**: Dispel Magic rank 2 via Decursive (`/decursive`, Lexiebean fork) — [Ibux (player), 2024-06-09](https://forum.turtlecraft.gg/viewtopic.php?p=96629#p96629); Abolish Disease on disease-heavy pulls (Langorn).
- **Buff upkeep**: Fortitude, Divine Spirit, Shadow Protection (when shadow damage) always up (Langorn). Rank-by-target-level Fortitude macro exists — [Xerron (player), 2019-09-27](https://forum.turtlecraft.gg/viewtopic.php?p=4094#p4094).
- **Dwarf Avatar** on the tank (+25% armor, resistances 150% of level, 15 s, 5 min CD): "Turning the tank into a super-armored statue with +90 res on everything is strong" — [Akos1896 (player), 2024-10-17](https://forum.turtlecraft.gg/viewtopic.php?p=103497#p103497); stacking several dwarf priests could permabuff the tank — [Steakhouse (player), 2024-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=103653#p103653).
- **Spirit of Redemption**: cancel the ghost buff (right-click) if you want to release quickly — [Astrallizard (player), 2024-12-25](https://forum.turtlecraft.gg/viewtopic.php?p=114244#p114244).
- **Fear Ward** on the tank for fear bosses; "it stops being super useful after BWL anyway. There's only like one boss in AQ40 and one boss in Naxx that benefit from it" — [Blackduck (player), 2023-11-17](https://forum.turtlecraft.gg/viewtopic.php?p=77860#p77860).
- **Positioning**: max range, avoid pushback; Holy Focus 70% anti-interrupt on all Holy spells (staff CC2).
- **UI**: pfUI click-casting (Thol 2022), LunaUnitFrames (Sheed90 2023; Elisleris 2025), HealersMate ("Feels a lot like Wotlk's Healbot" — [SvenS2 (player), 2025-06-09](https://forum.turtlecraft.gg/viewtopic.php?p=134832#p134832)), LazySpell/QuickHeal for auto-downranking — [Evilko (player), 2025-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=125873#p125873), [Forthehorde (player), 2023-11-10](https://forum.turtlecraft.gg/viewtopic.php?p=76740#p76740). Rank-selecting heal macros (target HP/mana/level) by [Ulukay (player), 2024-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=87987#p87987).
- **Benediction/Anathema quest**: solo healing quest; consumables + buffs advised — [Zvyrhol (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148378#p148378); "this quest is very easy all you need is AOE. = holy nova low rank ... oil of immolation ... just respec into disci" — [Terrydavis (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148405#p148405); "Interfering with any player trying to complete The Balance of Light and Dark ... is explicitly forbidden by griefing rules" — [Xerilin (player), 2023-08-03](https://forum.turtlecraft.gg/viewtopic.php?p=55624#p55624).

## Gear, enchants and consumables

Pre-raid BiS (all [Langorn (guide writer), 2025-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325) unless noted; "when it comes to Holy priest, T1 raid set is pretty much garbage"):

| Slot | Items (database.turtlecraft.gg item ids) |
|---|---|
| Head | Cowl of Mivax (83451, Kara Crypts); Cassandra's Grace (13102); Crimson Felt Hat (18727) |
| Neck | Animated Chain Necklace (18723); Hollowbone Choker (61015, Black Morass) |
| Shoulders | Mantle of Lost Hope (22234, BRD) |
| Back | Hide of the Wild (18510, tailoring) "incredibly good"; Cloak of Atonement (60500, SW Vault) |
| Chest | Robes of the Exalted (13346); Robe of the Custodian (61002, Wardens of Time revered); Truefaith Vestments pattern farm (Blubbsy) |
| Wrist | Extremely Well Crafted Cuffs (50431, Black Morass) |
| Hands | Hands of the Exalted Herald (12554); Gloves of the Unknown (61040, BM), Hierophant Gloves (58229, Argent Dawn revered) — [Blubbsy (player), 2025-12-10](https://forum.turtlecraft.gg/viewtopic.php?p=162360#p162360) |
| Waist | Whipvine Cord (18327) |
| Legs | Padre's Trousers (18386); Senior Designer's Pantaloons (11841, BRD) "arguably better ... fat spirit" (Blubbsy) |
| Feet | Boots of the Holy Mentor (50190, Kara Crypts); Mooncloth 2-set as fallback (Blubbsy) |
| Rings | Fordring's Seal (16058); Rosewine Circle (13178); Deepearth Signet (83460); Band of Mending (22334, Strat) (Blubbsy) |
| Trinkets | Royal Seal of Eldre'Thalas (18469); Blessed Prayer Beads (19990); Second Wind (11819); Penchant of Humility (58231, Argent Dawn exalted) (Blubbsy) |
| Weapon | The Hammer of Grace (11923) + Thaurissan's Royal Scepter (11928) / Tome of Divine Right (22319); Guiding Staff of Wisdom (11932) |
| Wand | Wand of Eternal Light (22254) |

Also: "Remains of the Lost (60809), Loop of the Lost (60798)" 5%-meditation pieces from Kara Crypts — [Haregijoe (player), 2025-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=152714#p152714). Fresh-60 route: "Get yourself attuned for Blackwing lair and Onyxia ... run UBRS ... Black Morass, Stormwind Vaults and Kara Crypts" — [Augustfenix85 (player), 2026-04-09](https://forum.turtlecraft.gg/viewtopic.php?p=174625#p174625) (post-1.18.1).

Raid sets: T2 8/8 "for the Rank 5 Renew proc on Greater Heal and with the Hazzrah Charm from ZG Madness event our greatest throughput with trinket up is Greater Heal" — [Hawkbutt (player), 2025-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=125153#p125153). T3.5 healer set is **contested**: "3-Piece 'Regen' Bonus: Pay 300+ mana to get 48 mana back ... 5-Piece Flash Heal 'Buff' ... We're forced to wear T2 3-piece + junk Naxx rings/necks" — [Solaire0726 (player), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142435#p142435) vs Maxitaxii (above). Holy T2.5 pre-1.18.1 bonuses were called decoration ([Astrallizard (player), 2025-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=156737#p156737)); reworked in 1.18.1 (see above). Atiesh (Priest) now 150 spellpower — [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276).

Enchants (Langorn): head/legs Arcanum of Focus (+12 healing, 18330); feet Enchanted Armor Kit (+9 healing, 61183); chest +4 stats or armor kit; hands +30 healing; weapon +55 healing; bracers +23 healing; rings/neck Beautiful Diamond Gemstone (+12 healing, 56010). Minimum: weapon, hands, bracers.

Consumables (Langorn + Sharmaine): Major Mana Potion (13444) mandatory; Tea with Sugar (15723) / Nordanaar Herbal Tea (61675); Dark Rune (20520) / Demonic Rune (12662) share CD with tea; Brilliant Mana Oil (20748); Empowering Herbal Salad (83309, rare) or Nightfin/Sagefish; Flask of Distilled Wisdom (13511); Spirit of Zanza (20079, ZG revered); Mageblood Potion (20007).

## Common mistakes (bots must avoid)

- Shielding warrior/bear tanks on pull (rage denial) — Azcron/Akos above.
- Spamming Flash Heal instead of Heal/Greater Heal and downranks (Elesion); ignoring the 5-second rule.
- Not using Fade when pulling aggro (Langorn).
- Letting Fortitude/Spirit/Shadow Protection lapse (Langorn).
- Using Psychic Scream in raids ("you usually DONT want to use this in raid" — Langorn).
- Relying on Improved Renew / Improved PW:Shield tooltips as if they scaled with gear (Sharmaine).
- Taking Improved Prayer of Healing / Proclaim Champion / Champion's Grace from old guides (removed in CC2 / 1.18.1).
- Clicking-Lightwell habits post-1.18.1: the well is passive now; stop telling players to click it (staff).
- Casting max-rank PoH without Inner Focus when mana is tight (Langorn).

## Sources

| Source | Authority | Date | Era | Used for | Agreement |
|---|---|---|---|---|---|
| [Langorn, Holy Priest Guide t=21979](https://forum.turtlecraft.gg/viewtopic.php?p=152325#p152325) | guide writer (only Turtle-specific Holy guide; referenced by later posters) | 2025-09-19 | pre-1.18.1 | rotation, stats, gear, enchants, consumables, builds | consensus for rotation/gear; builds pre-1.18.1 (Proclaim Champion removed) |
| [Sharmaine](https://forum.turtlecraft.gg/viewtopic.php?p=161280#p161280), [p=155346](https://forum.turtlecraft.gg/viewtopic.php?p=155346#p155346) | player | 2025-12-02 / 2025-10-13 | announced | downrank thresholds, flat talents | single source (numbers), consensus on downranking |
| [Hawkbutt](https://forum.turtlecraft.gg/viewtopic.php?p=124792#p124792), [p=125153](https://forum.turtlecraft.gg/viewtopic.php?p=125153#p125153) | player (Naxx raider) | 2025-03-31 / 04-03 | pre-1.18.1 | talent values, raid comp, T2 8/8 | single |
| [Azcron](https://forum.turtlecraft.gg/viewtopic.php?p=153172#p153172), [Akos1896](https://forum.turtlecraft.gg/viewtopic.php?p=153177#p153177) | player | 2025-09-25 | pre-1.18.1 | PW:S vs rage | consensus |
| [Jamey](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | staff | 2026-01-23 (+2026-01-26, 2026-03-19 revisions) | announced | 1.18.1 changes | authoritative |
| [Dragunovi](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272) | staff | 2026-02-15 | announced | T2.5 set bonuses | authoritative |
| [Dragunovi](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970) | staff | 2024-10-12 | pre-1.18.1 | CC2 Holy/Disc redesign | authoritative |
| Lightwell critics: [Zvyrhol](https://forum.turtlecraft.gg/viewtopic.php?p=166149#p166149), [Fizuzfil](https://forum.turtlecraft.gg/viewtopic.php?p=172701#p172701), [Ayesha](https://forum.turtlecraft.gg/viewtopic.php?p=172700#p172700) | player | 2026-01..04 | announced/post | 1.18.1 reception | contested |
| Addons: [Evilko](https://forum.turtlecraft.gg/viewtopic.php?p=125873#p125873), [SvenS2](https://forum.turtlecraft.gg/viewtopic.php?p=134832#p134832), [Thol](https://forum.turtlecraft.gg/viewtopic.php?p=26033#p26033) | player | 2022-2025 | pre-1.18.1 | UI | consensus (several options) |

Advice predating 1.18.1 that 1.18.1 affects: everything about Proclaim Champion/Champion spells (removed), Lightwell clicking (reworked), PoH "only your party" (reworked), Swift Recovery naming, heal rank tables (base values raised).
