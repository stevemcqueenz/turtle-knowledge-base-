# Mage playbooks — index

Written 2026-09-10 from the Mage forum (f43, 101 threads / 683 posts, all by players — **no staff post exists in the Mage forum**; no post carries a "thanked by" entry, so no forum author qualifies as a guide writer by thanks), the staff class-change thread t15157 (Dragunovi 2024-10-12, Jamey/Torta updates through the 1.18.1 preliminary changelog p166071 with revisions 2026-01-26 and 2026-03-19), the 1.18.1 patch notes and weekly changelogs, the itemization changelogs (f70), the community wiki Mage FAQ pages, and cross-forum mentions. Conventions: `synthesis/CONVENTIONS.md`.

## Files

| File | Spec × role | Source quality | Notes |
|---|---|---|---|
| `arcane-ranged-dps.md` | Arcane — ranged DPS (raid/dungeon) | **strong** | Staff numbers for every talent; wiki rotation + sims + trinket/stat weights; consensus on standing. Full 50-point allocation from the wiki (single source). |
| `fire-ranged-dps.md` | Fire — ranged DPS | **medium** | Staff numbers; wiki rotation, stat sim, 46-point path; standing contested; raid build image not extractable; T3.5 bonus bug status unknown. |
| `frost-ranged-dps.md` | Frost — ranged DPS | **medium** | Staff numbers; wiki raid rotation (freeze-immune only), AoE thresholds, Winter's Chill sim; standing contested (majority: weakest raid spec); no complete raid build in text. |
| `frost-pvp.md` | Frost — PvP | **weak–medium** | Opinion threads, race thread, macros, staff PvP-relevant changes; no talent allocation. |
| `arcane-pvp.md` | Arcane — PvP | **weak** | Burst pattern (PoM → Rupture → Missiles) described consistently by attackers and victims; no build, no stats. |
| `leveling.md` | all specs, 1–60 | **medium** | Four wiki level-by-level tables (single source), forum consensus on Frost-first and Int > Stam, contested AoE viability, HC notes. |
| `../../structured/classes/mage/*.yaml` | machine-readable versions of the five spec×role playbooks | as above | spell IDs filled from `structured/talents/builds-mage.yaml`; each file carries a `discord` block (cited, era/agreement-tagged). |

Roles not covered because no source treats them as viable: **tank** ("Mage tanks are a thing, but they are very niche, very hard to play and nearly extinct. They 'tank' by kiting" — [Imonobor, 2023-10-10](https://forum.turtlecraft.gg/viewtopic.php?p=69894#p69894); a joke about Arcane as "some kind of weird alternative tank spec" — Kefke 2023-10-09), **healer** (none), **melee DPS** ("battlemage" wand-weaving experiment, viable only to ~level 30 — summarized in `leveling.md`; the talent proposal thread t19773 is a suggestion, not a build).

## Coverage table

| Spec | Ranged DPS (raid) | PvP | Leveling | Tank | Healer | Melee |
|---|---|---|---|---|---|---|
| Arcane | strong | weak | medium | none | none | none |
| Fire | medium | none (only as "PoM-Pyro"/burst mentions inside the Arcane/Frost PvP files) | medium | none | none | none |
| Frost | medium | weak–medium | medium (best-sourced spec for leveling) | none (kiting "mage tank" anecdote only) | none | weak (battlemage experiment, abandoned at 29–32) |

## What 1.18.1 changed for mages (official)

- Ice Barrier: +5% Frost damage while active (was 15%) and +10% Frost damage for 1 min on cast — [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).
- Improved Fire Blast: GCD reduction 0.3/0.6/1.0 s — Jamey, revision 2026-01-26.
- Mirror Magic (T3.5 3-set) fixed: Flamestrike/Cone of Cold/Frost Nova/Blast Wave/Arcane Explosion initial hits can trigger a rewind (+10% Arcane, +20% Frost/Fire) — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).
- Wands benefit correctly from school-specific damage modifiers — same post.
- Blink usable again in Onyxia's Lair (hotfix 2026-03-21); PvP dampening becomes class/spec-dependent (numbers never published).
- No *documented* Arcane-tree change; the last documented Arcane changes were 1.18.0 (Rupture missile bonus 25% → 20%, Arcane Focus ↔ Magic Absorption swap). Discord patch-day reports of a possible Resonance Cascade 20%→25% change and an Arcane Rupture/Surge damage drop remain unconfirmed [[d:mage#1484585695422058496]], [[d:mage#1484629998882128057]].

## Gaps (not covered by any source — do not guess)

> Since the 2026-05 merge, several of these gaps are **closed or partly closed** by the archived `#mage` Discord; the notes below mark what changed. Discord citations use `[[d:mage#<id>]]` and are tagged with era/agreement.

1. **Complete 51-point raid builds for Fire and Frost** — Fire is closed: a 13/35/3 screenshot (1.18.1-announced-pre-release, 2026-02-02) was transcribed [[d:mage#1467615825954340866]]; Arcane is closed (43/8/0 [[d:mage#1484816855662071930]]); Frost still has no complete build in text. 49 pre-1.18.1 long-form builds were decoded into `structured/talents/builds-mage.yaml`.
2. **PvP talent allocations** for any spec on the 1.17.2+ tree; PvP stat priority; the 1.18.1 per-class PvP dampening numbers for Mage. **PvP stat priority is now documented** (crit > SP > haste + stamina, [[d:mage#1446156953347686441]]); dampening numbers remain unpublished.
3. **2–3 target vs 4+ target thresholds** for Arcane and Fire — still open (Discord gives no clean threshold).
4. **Frost's "mana issues as of April 7th [2025]"** — still open; Discord confirms the symptom but not the cause.
5. **Fire T3.5 5-set bonus bug** (bug-report id 18568) — still open; Discord has no confirmation either way.
6. **Leveling zone route by level bracket** — **closed by Discord** (see `leveling.md` §Discord additions): Dabyrie's Farm 30–39, Tanaris/Dustwallow 40–49, DM East lashers / WPL 50–60. A leveling BiS list is still open.
7. **Spell/talent IDs** — **closed**: filled from the validated `structured/talents/builds-mage.yaml` (spell IDs per talent).
8. **Enchants and consumables** — **largely closed by Discord**: ZG Presence of Sight head, Enchanted Armor Kit feet, gloves 20 arcane/1% haste [[d:mage#1491271778432192535]], [[d:mage#1484609579206836335]]; full endgame consume list [[d:mage#1438508962843463692]].
9. **Accelerated Arcana: tooltip 6% vs measured 5%** — Discord resolves the *mechanism* (cast-time reduction, not haste) but not the exact percentage [[d:mage#1484613633404305640]].
10. **Arcane Missiles haste cap value** — **closed**: 100% = 0.475 s/missile, contested against a 0.470 s measurement [[d:mage#1427636535460888576]], [[d:mage#1435061990551982291]]; channel softcap 2.82/2.35 s [[d:mage#1484613204335264025]].
11. **Whether Icicles should be cast without a Flash Freeze proc** — **resolved in the wiki's favour**: no, never cast it raw [[d:mage#1491959578827559113]].
12. **Fire vs Frost in Molten Core** post-1.18.1 — still contested, no logs.
13. Staff rationale for the Improved Blizzard nerf — still only inferable.
14. Community wiki pages are marked `is_turtle_content: false` and are anonymous; treat their sims as single-source.

## Top open questions for the orchestrator

- Can the current short-form `talents.turtlecraft.gg?points=` export (post-2025-08-28) be decoded? The **old long form is decoded** (49 builds, canonical codec in `staging/talents/talent_codec.py`); the short form still gives 70–77 points against a 51 budget.
- Is there a Discord/other source for "Pepo" builds and the Frost freeze-immune spreadsheet (both referenced by the wiki, both external)?
- Are raid logs available to settle Arcane vs Fire vs Frost after 1.18.1?
- Discord open items: Vaelastrasz Burning Adrenaline rotation [[d:mage#1489847647895556107]]; JC +9 arcane recipe source; Resonance Cascade 20→25% and Rupture/Surge damage drop [[d:mage#1484585695422058496]].
