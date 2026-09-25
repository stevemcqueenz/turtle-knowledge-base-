# Shaman playbooks — index

Written 2026-09-10 from the Shaman forum (f=48, 289 threads / 3,001 posts, extraction spans 2019-12-31 .. 2026-04-18), the staff class-change thread (t=15157, "Patch 1.17.2 & Beyond — Class & Gameplay Changes", including Jamey's 1.18.1 class-changes post p=166071 dated 2026-01-23 with revision blocks 2026-01-26 and 2026-03-19, and the hotfix follow-ups by Torta), `synthesis/1.18.1-master-changelog.md` (Classes section), `synthesis/turtle-vs-vanilla-timeline.md` (Classes section), cross-forum threads mentioning Shaman in General/Raids/PvP/Hardcore/Help & Support, and the community wiki (`Shaman guide`). Conventions: `synthesis/CONVENTIONS.md`.

## Files

| File | Content | Source quality |
|---|---|---|
| `enhancement-tank.md` / `structured/classes/shaman/enhancement-tank.yaml` | "warden shaman" — shield + slow one-hander tank, a Turtle-specific role built on CC2's dedicated tank talents (Ancestral Guardian, Spirit Armor, Totemic Alignment, Shield Specialization) and Earthshaker Slam | **strong** on mechanics/threat/rotation (staff patch notes + two detailed guides + a leveling diary), **medium** on stats (Mimiwarmini's numbers are single-source but internally consistent), **weak** on post-1.18.1 tank viability (Earthen Bulwark reported bugged through 2026-04-07, no re-tested guide) |
| `enhancement-melee-dps.md` / `enhancement-melee-dps.yaml` | two-handed Windfury Enhancement DPS for raids/dungeons, with a minority "spellhance" (1H + shield, Frostbrand) variant | **medium**: rotation and imbue interactions are consensus (multiple prolific posters + a player mechanics test), standing is contested (winner vs. bottom-half claims), no full text talent build exists (calculator links only), 1.18.1 rotation impact unconfirmed |
| `elemental-ranged-dps.md` / `elemental-ranged-dps.yaml` | Nature ("lightning") Elemental raid/dungeon caster, with the now-weakened Fire Elemental (Molten Blast) sub-style | **medium–strong**: one prolific near-BiS theorycrafter (Atreidon) supplies deep post-1.18.1 detail, backed by staff mechanics notes and a BiS spreadsheet; Earthquake's post-1.18.1 state is contested/unconfirmed by staff |
| `elemental-pvp.md` / `elemental-pvp.yaml` | the 31/17/0 Elemental/Enhancement "battle caster" hybrid used in battlegrounds | **weak–medium**: one detailed playstyle post (Aluevera, pre-1.18.0) plus many standing arguments; no PvP source describes play after 2026-03-20 |
| `restoration-healer.md` / `restoration-healer.yaml` | Chain-Heal-centric raid AoE healer and tank healer, deep 0/8/43 build | **strong**: wide consensus on standing, healing priority and mechanics from staff notes, a guide writer and two long-running player guides; gear/BiS-by-phase is the weakest part |
| `leveling.md` | spec choice, talent order 10–60 (tank-capable Enhancement default), skill training, playstyle, stats, route, hardcore notes | **medium–strong**: a compiled Discord guide (Skegg) plus a full leveling diary (Akos1896) agree on almost everything; the zone-by-zone questing route and hardcore-specific play are gaps |

## Spec × role coverage

| Spec | Tank | Healer | Melee DPS | Ranged DPS | PvP |
|---|---|---|---|---|---|
| Enhancement | **strong** (playbook; Turtle-specific role) | — (no source treats Enhancement as a healer) | **medium** (playbook) | — | folded into `enhancement-melee-dps.md` Role strategy (weak: burst-then-kited only) |
| Elemental | — (no source; Elemental has no tank talents) | weak (off-heals only, covered inside `elemental-ranged-dps.md` and `restoration-healer.md`) | — | **medium–strong** (playbook) | **weak–medium** (playbook, the hybrid build) |
| Restoration | — | **strong** (playbook) | — | — | weak (one favorable AV "deep Resto Chain Heal" claim, contradicted in the same thread; not written up as its own file) |

## Official 1.18.1 Shaman changes used (Jamey p166071, 2026-01-23, revised 2026-01-26 and 2026-03-19; hotfixes Torta p171608/p172139/p173490)

Convection/Concussion now cover all offensive Fire/Frost/Nature spells including Earthquake and Molten Blast; Earthquake gained a new capstone rework in 1.18.0 (replacing Elemental Mastery) then +15% base damage and CD 20 → 18 s in 1.18.1 (bug reports of it under-hitting/losing the Elemental Fury bonus were still open 2026-04-07); Elemental Weapons reworked all four imbue effects — Windfury: gaining extra attacks now grants +1%/stack attack speed (2/4/6 stacks, 5 s) instead of a next-swing bonus; Flametongue: +10/20/30% Fire totem/spell damage for 5 s *after a melee hit* (was passive) explicitly to keep spell-oriented Enhancement and pure-Fire Elemental in melee range; Rockbiter: the old flat damage-reduction became **Earthen Bulwark**, an absorb shield built from physical damage (tripled while shielded), explicitly to stop non-Enhancement specs using the old passive as a PvP defensive layer — reported not stacking correctly from special attacks (Stormstrike, Lightning Strike) through the 03-25 hotfix and still contested 2026-04-07; Windfury Weapon 20%/0.5-s ICD → 25% per hit; Flurry reworked to trigger off any critical strike (spell or melee) rather than only physical crits, "especially for spell-oriented Enhancement" (hotfixed 03-21/03-25/04-01 for consumption, trigger conditions and Rushing Winds stacking — still reported buggy/overwritten by Elemental Weapons' haste as of 2026-04-07); Lightning Strike's Water Shield ratio changed to 18:1; Lightning Shield mana −25%; Call of Earth added (Earth Shield +1/2 charges, +35/70% pushback avoidance, replenished by offensive Nature spells per the 03-19 revision); relic swapping now costs a GCD; Enh T2.5 5-set reworked to boost Earthen Bulwark (not applied at release, fixed 03-21); Resto T1 8-set replaced with a 25%-chance absorb proc on Healing Wave/Lesser Healing Wave (Resto's only 1.18.1 change); PvP dampening became class/spec-dependent (Shaman's specific values were never published in the sources).

## Discord merge (2026): what changed in this file set

The archived `#shaman` Discord (327,989 messages, 2021-02-15 → server close) was mined by four worker scopes and folded in. Per-file Discord sections were added to every playbook, `spell_id`s were filled from `kb/structured/talents/builds-shaman.yaml`, and a `discord:` block was added to every structured playbook. Era tokens: `pre-1.18.1` (< 2025-10-03), `1.18.1-announced-pre-release`, `post-1.18.1` (≥ 2026-03-20).

Headline additions and corrections:

- **All three Turtle talent-link codecs decode.** 974 distinct `#shaman` links; 458 decode to complete 51-point builds (446 distinct). Canonical codec `staging/talents/talent_codec.py`. Closes the old "calculator links are opaque" gap.
- **Builds now point-by-point**: Restoration **0/8/43** (enumerated, stable 18 months), Elemental **34/3/14** post-1.18.1 and **37/0/14** pre, Enhancement **17/34/0** standard plus the 22/29/15-36/21-30/23-28 spectrum, and a Restoration PvP **13/17/21** where the forum had none.
- **Flametongue Totem SP-scaling bug** (post-1.18.1): the FT *totem* does far more damage than intended — three independent testers, absent from the weekly changelog on 2026-04-15. Party aura only.
- **Earthquake bug** (post-1.18.1): hits twice, Aftershock crits at 1.5× ignoring Elemental Fury, less DPS than a Lightning Bolt → **removed from the single-target rotation**.
- **Decoded level checkpoints** (20 = 0/11/0, 24, 37–38 = 11/17/0, 44 = 11/24/0, 51 = 11/31/0) and the only printed **Elemental leveling order** (sailorVEVO).
- **Mechanics/professions**: Totemic Mastery tooltip bug, Totemic Recall refund bug, Tremor wave positioning, Grounding bug, Searing vs Flametongue Totem crossover (~300-350 SP), Searing threat, Grace of Air alternative, the leveling→endgame profession swap, and the post-1.18.1 Flurry/Earthen Bulwark live-server state.
- **Proposed shared-file edits** live in `staging/_merge/shaman-contradictions.yaml` and `staging/_merge/shaman-issues.yaml` (this worker did not touch the shared files).

## Gaps — status after Discord

1. **Post-1.18.1 re-evaluation**: *partly closed*. Discord has post-1.18.1 builds and a cleaned rotation for Ele/Enh/Resto, but no re-tested stat priorities and no parse table (ISS gap).
2. **Full point-by-point 60 talent builds**: *closed* for Ele and Enh DPS (decoded 34/3/14, 17/34/0 and the spectrum); the tank and leveling paths keep their level-by-level orders.
3. **Earthquake's true post-1.18.1 behavior**: *partly closed*. Discord supplies player-measured detail (2 hits, 1.5× crit, no Elemental Fury, less DPS than LB); no staff confirmation beyond "fixed multiple issues". Still contested as bug-vs-nerf (ISS-0039).
4. **Restoration PvP**: *partly closed*. Discord gives the **13/17/21** shock-support spec (1.18.1) where the forum had none, but no guide, rotation detail or gear.
5. **Elemental PvP after 2026-03-20**: *open*. Only reaction posts plus the tanky-shocker 22/29 and 23/28 shapes; no re-tested build.
6. **Pre-raid BiS lists**: *partly closed*. Community sheets now cited (Dwi/Elemental, Ash all-class, Squid Enh); no Resto BiS-by-phase.
7. **PvP resilience values and set bonuses**: *open* — no numbers published; players only report ~-3%/piece and qualitative effects.
8. **Zone-by-zone leveling route**: *open* (dungeon-per-bracket path only).
9. **Hardcore-specific Shaman play**: *open* — no hardcore-specific shaman thread found in either corpus.
10. **Totem of Distant Tremors and other 1.18.1 relics**: *partly* — Discord confirms it underperformed with Earthquake but gives no other description.
11. **Exact Resto T3.5 (Stormhowl) full set text**: *open* — Elemental's T3.5 5-set is detailed, Restoration's and Enhancement's are not.
12. **Spell/talent/item IDs**: *closed for talents* — every `spell_id` in the structured playbooks and built allocations is now populated from `builds-shaman.yaml` (rank-specific client-derived ids). Ability/item ids outside the talent tree remain open.

## Top open questions for the orchestrator

- Any post-1.18.1 raid logs or a maintained Turtle-specific database for exact Earthen Bulwark/Flurry/Earthquake numbers — the forum and Discord show these as open bug reports with no resolution before the 2026-05-15 server shutdown.
- Published shaman PvP dampening/resilience values and item names for the 1.18.1 PvP sets.
- A hardcore-specific shaman leveling thread and a zone-by-zone route.
- Ability/item (non-talent) spell ids for the playbooks.

