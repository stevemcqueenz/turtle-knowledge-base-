# Druid playbooks — index

Written 2026-09-10 from the Druid forum (f=42, 225 threads / ~2,060 posts, extraction fetched 2026-09-10), the Class Changes 2 staff posts (2024-10-12, in `extracted/forum/f63-patch-notes-changelog/t15157-*.md`), the 1.18.1 class-changes post (p=166071, dated 2026-01-23 with revision blocks 2026-01-26 and 2026-03-19), `synthesis/1.18.1-master-changelog.md`, `synthesis/turtle-vs-vanilla-timeline.md`, `structured/patches/1.18.1-changes.yaml`, and the community wiki (Druid, Druid Bear/Cat/Caster Macros). Conventions: `synthesis/CONVENTIONS.md`.

## Files

| File | Content | Source quality |
|---|---|---|
| `feral-tank.md` / `structured/classes/druid/feral-tank.yaml` | Bear/Dire Bear tank for dungeons and raids | **strong** on stat priority/mechanics (many detailed threads across 2023-2026), **medium** on the current (post-1.18.1) talent build (link-only, no decoded point list), **weak-medium, single-detailed-source** on post-1.18.1 standing |
| `feral-melee-dps.md` / `feral-melee-dps.yaml` | Cat DPS: powershift build vs. bleed/claw build, and how/when to switch | **strong** on rotation mechanics and the powershift-vs-bleed evolution (extensively argued, dozens of posts across 8+ threads spanning Oct 2024–Jun 2025), **medium** on gear/consumables, **weak, single-source** on exact post-1.18.1 item-dev complaints |
| `feral-pvp.md` / `feral-pvp.yaml` | Cat/Bear PvP toolkit | **weak**: the only full build link is pre-Class-Changes-2 and superseded; standing is argued from two contested single-author threads three years apart |
| `balance-ranged-dps.md` / `balance-ranged-dps.yaml` | Moonkin caster DPS, Eclipse mechanics, raid utility | **strong**: two long, detailed single-author write-ups (Tarsis pre-1.18.1, Scattyau pre-1.18.1-announced) each corroborated by dozens of shorter replies; **medium** on the exact post-1.18.1 numeric outcome (contested, not log-verified) |
| `balance-pvp.md` / `balance-pvp.yaml` | Moonkin dot-kite PvP build | **medium**: one dedicated build/tactics thread plus standing complaints scattered across the general threads; no post-1.18.1 PvP-specific re-test found |
| `restoration-healer.md` / `restoration-healer.yaml` | Tree of Life/HoT build vs. Moonglow/Healing Touch build | **medium**: two build philosophies each documented by a handful of threads with build links but no full decoded point list, downranking rule of thumb is well-sourced |
| `restoration-pvp.md` / `restoration-pvp.yaml` | Battleground/arena survival, especially vs. Rogues | **strong** on the central Rogue-survival topic (one 31-post thread, extensively discussed and internally consistent), **weak** on anything beyond that matchup |
| `leveling.md` | Build order, race choice, skill training, playstyle, stats/gear, hardcore differences | **medium**: strong consensus on the Feral-favored / Balance-viable / hybrid-tank-for-HC framing and on-level talent-order anchors; **weak-to-no source** on a zone-by-zone route or a full skill-rank-skip table (gap, matching the paladin playbook's finding) |

## Spec × role coverage

| Spec | Tank | Healer | Melee DPS | Ranged DPS | PvP | Leveling |
|---|---|---|---|---|---|---|
| Feral | **strong** (playbook) | weak (hybrid tank/heal builds mentioned only in passing, no dedicated healer playbook — Feral is not a healing spec) | **strong** (playbook) | — | weak (playbook, contested/superseded build) | strong (dominant leveling recommendation) |
| Balance | none | weak (Balance-as-dungeon-healer mentioned only as a flex option, not a dedicated build) | — | **strong** (playbook) | medium (playbook) | medium (viable alternative, well-documented playstyle) |
| Restoration | — | **medium** (playbook) | — | — | strong on one matchup, weak elsewhere (playbook) | weak (HC-only steer toward tanking instead; Resto leveling not separately documented) |

Note: unlike the paladin's three specs mapping cleanly to tank/healer/DPS, Druid's four specs (Balance/Feral/Restoration, with Feral covering both tank and melee-DPS roles) is the class's defining hybrid structure — see the "hybrid identity" debate documented in `feral-melee-dps.md` and `feral-tank.md`.

## Official 1.18.1 Druid changes used (Jamey p166071, 2026-01-23; revisions 2026-01-26 and 2026-03-19; hotfixes Torta p171608/p172139/p173490)

**General**: Maul threat modifier −15%, Savage Bite threat modifier −12% ("Feral Bears have been overly prominent in their threat output, leaving little room for other tanks to shine" — dev comment).

**Balance**: Balance of All Things reduced from 5 to 3 points and reworked (Wrath vs. Insect-Swarm'd target refunds 10/20/30% mana; Starfire vs. Moonfire'd target gains +2/4/6% crit chance, revised 2026-01-26 to +3/6/9%); Moonfury increased to 4/8/12% (2026-01-26 revision); Eclipse proc mechanism changed (2026-03-19 revision): "Damage from Wrath now has a 40% chance and Damage from Starfire now has a 60% chance to proc their beneficial effects" (superseding the 1.18.0-era 30%/50% chance mechanism documented in `synthesis/turtle-vs-vanilla-timeline.md`).

**Hotfixes (post-release, dated 2026-03-21 through 03-31)**: Pollen Burst healing scales with 25% pet AP (class attribution unclear — may be a Hunter-pet ability, not confirmed Druid); Fang of Alichos usable in shapeshift forms; Yoxtez gained +224 Feral Attack Power; Elune Infusion trigger bug fixed; Glyph of the Moon visual corrected (was causing Night Elf Balance druids in Moonkin Form to render as "a tiny cow" per player report).

**No changes shipped in 1.18.1 to**: Feral Combat talents/abilities directly (Cat or Bear, beyond the Maul/Savage Bite threat-modifier nerf above), Restoration talents/abilities, or the Druid talent trees' overall shape.

## Gaps (not covered by any source — do not guess)

1. **Full point-by-point 60 builds for every spec/role**: every build cited is a talents.turtlecraft.gg calculator link that cannot be decoded from text, matching the same limitation found in the paladin playbook. Only leveling-order anchors and named "mandatory" talents are enumerated.
2. **Pre-raid BiS lists** for all four specs/roles on current itemization — no source gives one; players are repeatedly pointed to the Discord druid channel or community Google Sheets/gear-planner links (linked from the wiki, unverified against staff data).
3. **A full skill-training-rank-skip table** and **a zone-by-zone leveling route with dungeon-per-bracket list** — not found anywhere in the sources read.
4. **Post-1.18.1 quantitative re-verification**: almost every post-1.18.1 claim about spec standing (Bear tanking, Cat/Moonkin DPS rankings, Resto healing) comes from one or two detailed players (chiefly Noephix) with agreeing short replies, not independently repeated log analysis. Treat all "post-1.18.1 X is now worst/best" claims in these playbooks as **single-source, directionally likely but numerically unverified**.
5. **Exact post-1.18.1 Eclipse damage-bonus formula**: the proc-*chance* change (40%/60%) is official and quoted verbatim; whether the *bonus magnitude* (the 1.18.0-era "10% + 60% of spell crit" formula) also changed in 1.18.1 is not stated in the sources read.
6. **Crit-immunity/crush-cap Defense values for Bear tanks** on Turtle — no source gives a druid-specific number (the paladin playbook's 440/420 figure is explicitly a vanilla-baseline number for a shield tank and does not transfer).
7. **A named list of the current pre-raid-BiS or T3.5-tier armor-ignoring trinket** referenced as nerfed for Feral in 1.18.1 — players discuss its nerf without naming the item.
8. **Restoration-specific consumables and a numeric Healing Power/Intellect stat weight** — inferred from the shared caster consumable list (see `balance-ranged-dps.md`) but not independently confirmed for Restoration.
9. **Arena-specific PvP guidance** for Balance and Feral (only Restoration's arena difficulty is documented in any depth, via the Rogue-survival thread).
10. **A conclusive verdict on the "third, deep-Resto-without-Tree-or-Moonglow" build** floated in `restoration-healer.md` — flagged as promising by one poster with no follow-up confirmation found.
11. **Twink/leveling-specific gear lists** (e.g. the "49 Balance Druid" twink thread, t16360) exist but were not read in depth for these playbooks.
12. **Whether the "Devs hate Druids" community sentiment reflects actual relative underperformance or a vocal-minority perception** — sources are heavily weighted toward complaint threads by a small recurring set of authors (Noephix, Fugus, Tarsis, Grizb37, Wosator); no independent parse/log-aggregation source was found to cross-check their DPS/HPS claims against.

## Top open questions for the orchestrator

- Fetch/decode the `talents.turtlecraft.gg` calculator links (the `?points=` query string) to turn every linked build in these playbooks into actual point lists — this is the single highest-value follow-up, affecting all seven spec/role files.
- Any post-1.18.1 raid logs, turtlogs.com rankings snapshots, or Discord class-channel guides for Druid (the forum repeatedly defers to Discord and to `turtlogs.com`, e.g. `https://www.turtlogs.com/pve/ranking`, for numbers that aren't reproduced in the forum text).
- A Turtle database dump (`database.turtlecraft.gg`) for exact Feral/Balance/Restoration spell values, idol/trinket effects, and tier-set bonuses at current itemization — every `spell_id` field in the structured YAML is null because no forum source gives one.
- Confirmation of which class "Pollen Burst" and "Elune Infusion" (both listed under Druid in the 1.18.1 hotfix notes with class attribution described as unclear in the master changelog) actually belong to — Druid pet-adjacent or Hunter pet.
