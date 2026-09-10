# Warlock — Destruction (Shadow: SM/Ruin, DS/Ruin) — Ranged DPS (raid)

The classic Shadow Bolt build: Affliction to Shadow Mastery (30/0/21, "SM/Ruin") or Demonology to Demonic Sacrifice (the old 21/9/21 "DS/Ruin"), plus Ruin and Shadow Vulnerability in Destruction. Fire Destruction is a separate playbook (`destruction-fire-ranged-dps.md`) because rotation, stats and community standing differ.

All dates UTC. Eras: **pre-1.18.1** (before 2025-10-03), **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** (from 2026-03-20). Kit revisions within pre-1.18.1: CC2 (live 2024-11-01), 2024-11-20, 2024-12-20, 2025-03-30, CC3 (live 2025-08-15).

## Overview

- **Role**: single-target ranged DPS; curse and Banish provider; the "Shadow Bolt turret" the staff explicitly set out to de-emphasise ("they all were just a Shadow Bolt turret with barely any differences in gameplay" [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973)).
- **Strengths (sources)**: simple, mobile enough with Corruption/Curse of Agony fillers, the best long-fight consistency of the three specs in Nov 2024 ("the longer the fight, the better Shadow Destruction performs, possibly because Fire Destruction requires too much Life Tap" [LastyK (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107842#p107842)); can keep the Imp out for Blood Pact and 5–7% of its damage ("SM/ruin spec (30/0/21) uses imp to dps and imp is usually 5-7% of total damage" [Sharmaine (player), 2026-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=166893#p166893)).
- **Weaknesses (sources)**: no talent hit for Shadow Bolt ("No hit talent for destruction spells which includes shadowbolt is a pain" [Eversongwoods (player), 2025-02-28](https://forum.turtlecraft.gg/viewtopic.php?p=121178#p121178)); the CC2 rework of Improved Shadow Bolt reduced Shadow Bolt output — "Based on ... a sample of 15,000 Shadow Bolt casts, the damage of Shadow Bolt is approximately 12% lower than in the previous version" (LastyK, above); dependent on Shadow Priests who moved to Smite builds ("Shadow Priests are moving toward Smite builds, which means we've lost Shadow Weaving" [Islandboii (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107891#p107891)).
- **Content**: raids — the historical default (2023–2024: "In my eyes, lock currently has 3 raiding builds: SMDS SMRuin DSRuin ... you will do the exact same thing in raids" [Akos1896 (player), 2024-01-31](https://forum.turtlecraft.gg/viewtopic.php?p=86608#p86608)); still the wiki's first raid entry. Dungeons — fine. PvP — "SM/Ruin is completely PVE since 2005" [Sharders (player), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108822#p108822), though "sm ruin works pretty fine for alliance warlock, throw corruption at everyone and enjoy constant nightfall procs" [Ataika (player), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108889#p108889).
- **Community standing**: **favored (2023–mid 2025) → alternative (2026)**. "All are SM/Ruin" among the top parsers who "could previously crack the top 5 in their raid's meters. Now they cannot crack the top 10" [Delalama (player), 2024-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=107592#p107592) (contested by Xudo: "Warlock changelog doesn't have much nerfs ... Only difference that matter for SM/Ruin is rework of Improved Shadowbolt" [Xudo (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107785#p107785)); by 2026: "SM/Ruin ... is just in a terrible spot right now. It doesn't perform at all" [Spritzbube (player), 2026-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=169207#p169207); "Other day i specced SM/RUIN just to try it out and i was hiting 250 DPS" vs 450 as Affliction [Guiltyhaomarush (player), 2026-02-14](https://forum.turtlecraft.gg/viewtopic.php?p=168196#p168196). Bots: acceptable in any raid, but expect to parse below Affliction from 2026.

## Official kit (staff) — what changed for this build

- CC2 (2024-10-12), [Dragunovi (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=102973#p102973): **Improved Shadow Bolt** → flat 5/10/15/20/25% proc chance, +15% Shadow (was 20%), 10 s, no charges; **Cataclysm** 2/4/6/8/10% mana; **Demonic Sacrifice** moved up the Demonology tree with **Soul Entrapment** as prerequisite (Succubus +6% Shadow at the time); demons no longer receive player buffs; **Soul Fire** two new ranks, 125% SP, 30 s CD; Curse of Weakness rework; Corruption 1.5 s.
- 2024-11-01 update (same post): Improved Shadow Bolt bonus 15% → 20%.
- 2024-12-20, [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460): Improved Shadow Bolt "Now has a 20/40/60/80/100% chance to be applied on critical hit. Chance on hit application chance reduced ... to 2/4/6/8/10%"; Nightfall bolts always land.
- CC3 (2025-07-25), [Jamey (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159): Improved Shadow Bolt renamed **Shadow Vulnerability**, also applied by Drain Soul ticks; **Soul Entrapment 2/4/6%**; **Demonic Sacrifice: Imp +4% spell damage, Succubus −10% threat, Felhunter 3% mana/4 s**; Soul Fire 114% SP; Destructive Reach also Hellfire radius.
- 1.18.1, [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071): Curse of Shadow / Elements / Recklessness 1-s GCD (revision 2026-01-26); Curse of Exhaustion and Tongues costs up; Master Conjuror removed; Sinister Pursuit to Demonology. Nothing else in this build's tree changed. Hotfix 2026-03-31: "Soul Entrapment no longer increases damage when controlling a Greater Demon" [Torta (staff)](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490).
- Staff read-out on debuffs: the 16-debuff limit "was fixed at an earlier version of Turtle" (CC2 post) — the 2023 worry that Warlocks "are destined to spam shadowbolt" because of the debuff limit ([Kosmion (player), 2023-01-18](https://forum.turtlecraft.gg/viewtopic.php?p=32726#p32726) thread) is obsolete; an old UI bug hid your DoTs above 40 debuffs on a boss [Grubi450 (player), 2023-07-09](https://forum.turtlecraft.gg/viewtopic.php?p=52732#p52732).

## Talent build

### SM/Ruin 30/0/21 (CC2 tree; unchanged by CC3 and 1.18.1 except renames)

Explicit list from [LastyK (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107778#p107778) ("while ensuring a 100% critical strike bonus in Destruction, the optimal talent build for shadow Destruction in the current version is 30/0/21"; talents visible in his screenshot and text) and the community wiki SM/Ruin entry (`https://talents.turtlecraft.gg/warlock?points=FoQQYASARBF--FAVABoCAAI`, "2 Points in Improved Curse of weakness can go anywhere in Affliction tree"):

| Tree | Talent | Points | Source |
|---|---|---|---|
| Affliction | Improved Corruption | 5/5 | all guides (instant filler on movement) |
| Affliction | Suppression / Improved Life Tap / Improved Drains / Improved Curse of Weakness | filler to row 3 | wiki: 2 points in Improved Curse of Weakness "can go anywhere"; Akos1896: "instant corruption or better lifetap" [Akos1896 (player), 2024-10-09](https://forum.turtlecraft.gg/viewtopic.php?p=102812#p102812) |
| Affliction | Fel Concentration | 0–2 | not needed for bolts |
| Affliction | Grim Reach | 2/2 | LastyK: "GRIM REACH and DESTRUCTIVE REACH may peace of mind" |
| Affliction | Nightfall | 2/2 | LastyK ("occasional Nightfall procs with double crits"); Ataika |
| Affliction | Improved Curse of Agony 3/3 → Malediction 1/1 | 4 | LastyK ("dual curses"); "Did they pick Malediction and use Curse of Agony alongside of CoS/Coe? You can pick that talent point out of Siphon Life or even out of Shadow mastery. Whole curse will surely do more than 2% of damage of other spells" [Xudo (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107805#p107805) |
| Affliction | Siphon Life | 1/1 (prerequisite) | required for Shadow Mastery |
| Affliction | Shadow Mastery | 5/5 | spec definition |
| Destruction | Shadow Vulnerability (Improved Shadow Bolt) | 5/5 | spec definition; "If you spec into ruin then you want crit" [Eversongwoods (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107802#p107802) |
| Destruction | Cataclysm / Bane | 5 + 5 | Bane for Shadow Bolt cast time (vanilla baseline; not stated by a Turtle source) |
| Destruction | Devastation | 5/5 | wiki link; LastyK ("100% critical strike bonus" = Ruin) |
| Destruction | Destructive Reach | 2/2 | LastyK |
| Destruction | Ruin | 1/1 | spec definition |
| Destruction | remaining points | Shadowburn / Improved Searing Pain / Intensity | not specified by sources — gap |

### DS/Ruin (Demonic Sacrifice) variant

Pre-CC2 the raid meta was "21/9/21 Sacrifice-shadow Destruction. The optimal rotation was to maintain Corruption while summoning Infernal and spamming Shadow Bolt" (LastyK). After CC2 the sacrifice "is essentially 3% without a demon + 6% from Sacrificing a Succubus = 9%. This makes Sacrifice Destruction not an excellent choice ... because you can invest more talent points in the Affliction tree to gain a 10% bonus to shadow damage, along with ... Nightfall and dual curses" (LastyK). After CC3 the Succubus sacrifice gives −10% threat instead of Shadow damage; the Imp gives +4% spell damage; with Soul Entrapment 6% that is the "10% shadow damage as SM/Ruin lock do" a player computes for Fire/Destro [Tsuisama (player), 2025-07-29](https://forum.turtlecraft.gg/viewtopic.php?p=142124#p142124). The wiki lists DS/Ruin as "nerfed on TurtleWoW" (`...?points=FoAQYAS-CrAAAB-FQFABoCAAI`). A player defends DS as "only 11pts needed" [Eversongwoods (player), 2025-01-12](https://forum.turtlecraft.gg/viewtopic.php?p=116363#p116363); another computes it as only "3%-5% dps increase unless demon dies to raid mechanics" over keeping the Imp (Sharmaine, above). **Contested**; bots may run either.

### Patch validity

- The 2022 "dual-spec sacrifice exploit" (sacrifice Succubus, then respec) no longer works: "activating/changing specs on the Goblin Brainwashing Device clears the 30m buff" [Sophos (player), 2024-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=91578#p91578).
- Any pre-Dec-2024 statement about ISB proc rates is obsolete; from 2024-12-20 the debuff is crit-driven again.
- 1.18.1 changed nothing structural for SM/Ruin.

## Stat priority

- **Hit**: Shadow Bolt has no talent hit. Two views: (a) "Warlock playing under hit cap is not an issue. Don't make too many tradeoffs for hit. LilKaren just posted the best naxx parse of the last three seasons with 9% hit in spider wing and only 7% hit throughout the the rest of naxx" [Delalama (player), 2023-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=81817#p81817); (b) "hit cap" is the one thing to bring to a first raid [Bigsmerf (player), 2025-07-26](https://forum.turtlecraft.gg/viewtopic.php?p=141507#p141507) and the ZG enchant/Kris of Unspoken Names debates show Warlocks "struggle with that specifically" [Frankthepen (player), 2023-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=73265#p73265) (quoted in the itemization thread). Staff removed the 1% hit from the Warlock Kris to keep parity with the mage blade [Dragunovi (staff), 2023-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=72600#p72600). Contested; bots aim for hit but do not sacrifice large SP for the last points.
- **Crit**: wanted — Ruin and the crit-driven Shadow Vulnerability ("If you spec into ruin then you want crit" — Eversongwoods); Xudo's counter-suggestion to swap crit for raw SP after CC2 ([Xudo (player), 2024-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=107785#p107785)) was made before the 2024-12-20 revert to crit-based procs.
- **Spell power**: Flask of Supreme Power adds "around 128 points" to an average Shadow Bolt (LastyK) — Shadow Bolt scales far better than Fire's fillers.
- **Stamina**: T3 Plagueheart Raiment "has ~73 additional stamina" over the Affliction Attire and 7% crit + 1% hit — the Raiment is the SM/Ruin set [Justgreens123 (player), 2025-10-21](https://forum.turtlecraft.gg/viewtopic.php?p=156392#p156392).
- Wiki: "Stat Priority: Crit and Hit" (community wiki Warlock page).

## Single-target rotation (raid boss)

Sources: wiki ("Curse, Corruption, Shadow Bolt. Refresh as needed"), [Volkyte (player), 2023-12-15](https://forum.turtlecraft.gg/viewtopic.php?p=81271#p81271) ("sm ruin just spam shadowbolts"), [Akos1896 (player), 2024-05-10](https://forum.turtlecraft.gg/viewtopic.php?p=94521#p94521) ("SM/Ruin and DS/Ruin ... spam shadowbolts, put up curses and finish with shadowburn"), LastyK (Corruption/Curse of Agony as movement fillers).

**Opener**: 1) assigned raid curse (Curse of Shadow / Elements / Recklessness — 1-s GCD since 1.18.1; Malediction adds Curse of Agony if talented); 2) Corruption; 3) Shadow Bolt.

**Priority**:
1. Nightfall proc up → Shadow Bolt immediately (instant, cannot miss).
2. Support curse missing → recast.
3. Corruption missing → Corruption (instant with 5/5 Improved Corruption). Siphon Life is **not** used: "Siphon life is not used in max dps rota. Mainly because both damage and healing cause threat" [Atreidon (player), 2023-12-15](https://forum.turtlecraft.gg/viewtopic.php?p=81272#p81272) (pre-CC2, but no later source contradicts it for this build).
4. Target below Shadowburn range and the fight is ending, or you are moving → Shadowburn (costs a shard).
5. Otherwise → Shadow Bolt. The one-button macro that picks Shadowburn by target health and Shadow Bolt rank by mana is in [Ulukay (player), 2024-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=106704#p106704).
6. Life Tap between bolts when mana < one Shadow Bolt; use Imp Blood Pact (party stamina) and keep it alive with Take Position.

**Moving**: Corruption and Curse of Agony fillers ("In mobile battles (such as Grobbulus), you can cast Corruption and Curse of Agony as fillers" — LastyK).

## Multi-target / AoE rotation

- **2–3 targets**: Corruption (and Curse of Agony if Malediction) on each, then Shadow Bolt the kill target; "Shadow Bolt is still in the air when the target dies" is a known loss on trash (LastyK).
- **4+ targets**: Rain of Fire (1-s ticks since CC3) or Hellfire (see the Affliction and Fire playbooks for the Hellfire caveats). Fire is resisted in Molten Core / Blackwing Lair ("MC and BWL are unplayable for fire specs" [Kord2998 (player), 2025-07-28](https://forum.turtlecraft.gg/viewtopic.php?p=141827#p141827) (itemization thread)).

## Cooldowns and resources

- **Life Tap**: the mana engine; Improved Life Tap and Shadow Mastery both scale it.
- **Shards**: Shadowburn and Soul Fire each cost a shard; stack to 3; Drain Soul refills on trash.
- **Soul Fire**: 30 s cooldown; not part of the SM/Ruin rotation in any source (Campy's "Soulfire at half health" is his own hybrid).
- **Nightfall**: track with an addon (TNE_Nightfall — [Monteo (player), 2023-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=44670#p44670); Necrosis — [Sinrek (player), 2022-09-26](https://forum.turtlecraft.gg/viewtopic.php?p=26201#p26201)).
- **Demon**: Imp (Blood Pact, Phase Shift out of combat) or Demonic Sacrifice; Take Position to park it.
- **Death Coil / Shadow Ward / Healthstone** as defensives; Healthstone shares the tea cooldown.

## Role strategy

- Curse assignment is the raid role; Banish on demons/elementals; "join MC as curse/banish bot get fed free lock loot" [Mustachiocat (player), 2023-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=45182#p45182). Curse of Recklessness's 1-s GCD exists "for the fear-juggling technique" (Jamey 2026-01-23).
- Threat: Spellstone's threat reduction was replaced in CC3 by the on-use magic-absorb Spellstone and a new **Voidstone** (−10% spell threat) [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159); Succubus sacrifice −10%; Paladin Salvation.
- Positioning: max range, behind the boss for the Imp; Grim/Destructive Reach are taken for range.

## Gear, enchants and consumables

- Plagueheart Raiment (T3 SM/Ruin set: 7% crit + 1% hit, more stamina — Justgreens123); the T3 2-set "Shadow Bolt now has a chance to heal you for 270 to 331" was extended to Searing Pain at half the chance [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105324#p105324); T1 8-set also reduces Fire spell mana; ZG 3-set "Corruption now deals an amount of damage equal to 1.5 sec. of Corruption upon application", 5-set reduces Soul Fire cooldown [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276).
- Pre-raid and BiS pointers as in `affliction-ranged-dps.md` (Grubi450 2023, Mustachiocat 2023, 5mman 2026); Bloodvine nerfed 2023.
- Enchants: wiki list (Shadow Power gloves etc.). Consumables: Flask of Supreme Power; resist potions per raid; Healthstone.

## Common mistakes

- Stacking crit gear and then gearing for the old ISB — the Dec-2024 revert means crit matters again, but "Maybe you should just change your gear from crit ... to raw spell damage" was Xudo's advice for only six weeks of CC2 (obsolete).
- Skipping Malediction when you also carry a raid curse (Xudo).
- Summoning Infernal without Demonology: "summoning Infernal quickly gets out of control and serves no purpose other than causing chaos in the team" (LastyK).
- Casting Siphon Life for "free" damage in a threat-limited raid (Atreidon).
- Letting the Imp die to AoE and losing Blood Pact — park it with Take Position; if the fight has unavoidable pet damage (Four Horsemen marks, Thaddius, Sapphiron) sacrifice it instead [Erhog (player), 2025-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=126753#p126753).
- Bragging about parses in a raid full of warriors — Warlock is under-represented and the class forum is defensive about meters (Delalama vs Grizb37 thread).

## Sources

| Recommendation | Sources | Agreement | 1.18.1 note |
|---|---|---|---|
| 30/0/21 allocation | LastyK 2024-11-13, wiki, Xudo 2024-11-13 (Malediction) | consensus on core, gap on last points | unchanged |
| DS/Ruin still viable | Eversongwoods 2025-01-12, Sharmaine 2026-01-30 vs LastyK 2024-11-13, wiki "nerfed" | contested | Soul Entrapment hotfix 2026-03-31 |
| Rotation | wiki, Volkyte 2023-12-15, Akos1896 2024-05-10, Atreidon 2023-12-15, LastyK | consensus | Curse GCD 1 s |
| Hit not mandatory | Delalama 2023-12-20 vs Bigsmerf 2025-07-26 | contested | — |
| Spec standing | Delalama 2024-11-11, Xudo 2024-11-13, Spritzbube 2026-02-22, Guiltyhaomarush 2026-02-14 | contested over time; 2026 posts agree it trails Affliction | — |
