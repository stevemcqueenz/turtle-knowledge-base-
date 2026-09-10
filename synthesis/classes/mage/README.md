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
| `../../structured/classes/mage/*.yaml` | machine-readable versions of the five spec×role playbooks | as above | spell IDs are null throughout (no source gives them). |

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
- Nothing in the Arcane tree changed; the last Arcane changes were 1.18.0 (Rupture missile bonus 25% → 20%, Arcane Focus ↔ Magic Absorption swap).

## Gaps (not covered by any source — do not guess)

1. **Complete 51-point raid builds for Fire and Frost** — the wiki's "Pepo raid" / "Pepo frost" builds are images; forum build links are opaque `talents.turtlecraft.gg` exports.
2. **PvP talent allocations** for any spec on the 1.17.2+ tree; PvP stat priority; the 1.18.1 per-class PvP dampening numbers for Mage.
3. **2–3 target vs 4+ target thresholds** for Arcane and Fire (only Frost has "up to 5 / more than 5").
4. **Frost's "mana issues as of April 7th [2025]"** (wiki) — cause and status after 1.18.1 unknown.
5. **Fire T3.5 5-set bonus bug** (bug-report id 18568) — whether 1.18.1 fixed it.
6. **Leveling zone route by level bracket** and a leveling BiS list; which spell ranks to skip buying (only rank-1 keepers are documented).
7. **Spell/talent IDs** — none given by sources.
8. **Enchants** beyond the shoulder choice (2 haste vs "Saph"); consumable lists beyond mana tea/potions/Greater Fire Protection Potion; no Elixir of Arcane Power exists.
9. **Accelerated Arcana**: tooltip 6% (staff) vs measured 5% cast-time reduction (wiki) — unresolved.
10. **Arcane Missiles haste cap** value (wiki mentions a cap for stacked haste effects, no number).
11. **Whether Icicles should be cast without a Flash Freeze proc** (Crake yes; wiki sim and a raider no).
12. **Fire vs Frost in Molten Core** post-1.18.1 (Eluaria's claim challenged, no logs).
13. Staff rationale for the Improved Blizzard nerf (only inferable from the Icicles PvP comment).
14. Community wiki pages are marked `is_turtle_content: false` and are anonymous; treat their sims as single-source.

## Top open questions for the orchestrator

- Can the `talents.turtlecraft.gg?points=` export format be decoded offline? If so, ~10 posted builds (Kibuum, Xudo, Redmagejoe, Forumdweller, Atolius) become usable point lists.
- Is there a Discord/other source for "Pepo" builds and the Frost freeze-immune spreadsheet (both referenced by the wiki, both external)?
- Are raid logs available to settle Arcane vs Fire vs Frost after 1.18.1?
