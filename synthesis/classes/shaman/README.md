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

## Gaps (not covered by any source — do not guess)

1. **Post-1.18.1 re-evaluation of any spec** beyond scattered forum complaints: no guide author re-tested and republished a build, rotation, or stat priority after 2026-03-20 for any of the five playbooks. Treat every rotation/stat section as pre-1.18.1 unless a flagged delta says otherwise.
2. **Full point-by-point 60 talent builds for Elemental and Enhancement DPS**: every "endgame" build is a `talents.turtlecraft.gg` calculator link or a named-core list; only the tank and leveling paths have an explicit level-by-level order.
3. **Earthquake's true post-1.18.1 behavior**: player reports (only 2 hits, missing Elemental Fury bonus on the second hit, "highly underperform" even with Totem of Distant Tremors) were never confirmed or denied by staff beyond the original "fixed multiple issues" note and an unrelated 04-01 Aftershock hotfix.
4. **Restoration PvP**: only one contested claim (deep-Resto Chain Heal support viable "at least in AV") exists; no build, rotation, or standing discussion — not written up as its own file.
5. **Elemental PvP after 2026-03-20**: no source describes actual play once per-class PvP dampening, resilience-bearing PvP sets, Call of Earth and the reworked Earthquake all landed together.
6. **Pre-raid BiS lists on current itemization** for Enhancement DPS and Elemental (Elemental has a maintained spreadsheet from one author; Enhancement does not) and any Resto BiS-by-phase list (asked in 2024-12, never answered).
7. **PvP resilience values and set bonuses for Shaman** in the 1.18.1 PvP gear (mentioned as existing, no numbers given).
8. **Zone-by-zone leveling route**: only the dungeon-per-bracket path and gear-upgrade waypoints are covered; no quest-by-quest questing route exists in the sources.
9. **Hardcore-specific Shaman play**: only two fragments (a pre-CC2 hardcore Elemental impression, and a tank guide's general "avoid red dungeons" rule) — no hardcore-specific Shaman thread was found in the extracted forums.
10. **Totem of Distant Tremors and other 1.18.1 relics**: named once by a player as underperforming with Earthquake, never otherwise described.
11. **Exact Resto T3.5 (Stormhowl) full set text**: only the 1.18.1 T1-8-set delta and general standing quotes exist for Restoration tier; Elemental's T3.5 5-set text is captured in detail (Atreidon), Restoration's and Enhancement's are not.
12. **Spell/talent/item IDs**: no source in this crawl gives numeric spell IDs for Shaman abilities; every `spell_id` field in the structured YAML is `null`.

## Top open questions for the orchestrator

- Decode the `talents.turtlecraft.gg` calculator links (`points=` query strings) referenced throughout, especially for the Enhancement DPS and Elemental raid builds, which exist only as links.
- Any post-1.18.1 raid logs, Discord class-channel archives, or a maintained Turtle-specific database for exact Earthen Bulwark/Flurry/Earthquake numbers — the forum shows these as open bug reports with no resolution before the 2026-05-15 server shutdown.
- A Turtle item/spell database dump to fill in `spell_id: null` fields and to build a real pre-raid/BiS list for Enhancement DPS.
