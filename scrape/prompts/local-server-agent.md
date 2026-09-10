# Task: use the turtle-knowledge-base repo to verify my local Turtle WoW 1.18.1 server and to feed the bot module

## Context

You have two things I built locally: a running Turtle WoW 1.18.1 server (Penqle/tortoise-wow core) with its database, and the full 1.18.1 client DBC data. Turtle WoW itself shut down on 2026-05-15, so the game and its team can no longer be asked anything.

The repository `turtle-knowledge-base` (branch `main`) is an archive of everything the Turtle WoW website, forums and community wiki said, captured before their closure: 161,896 forum posts, 21 identified staff accounts, the official 1.18.1 patch notes and all earlier patch threads, plus analysis documents. Every claim in it cites a source post, and `python3 scrape/validate.py` proves the citations resolve. Nothing in it is invented; where the sources are silent, the documents say so.

Read `AGENTS.md` at the repo root first. It lists the fast paths by task, the schema of every data file, how to join names to DBC and database rows, and the order in which to work. Then skim `synthesis/FINAL-REPORT.md` and `synthesis/CONVENTIONS.md`. Do not load `structured/forum/posts/*.jsonl` or `extracted/` into context wholesale (they are hundreds of MB); grep or stream them by `post_id` only when you need the raw evidence behind a claim.

## Goal 1: find and fix discrepancies between my server and what Turtle actually shipped in 1.18.1

Work in this order, and keep a running findings file (see "Outputs").

1. `structured/patches/1.18.1-changes.yaml` (507 entries). For every entry with a concrete value in `after` or `numbers` (percentages, durations, ranks, coefficients, costs, item stats), locate the corresponding row in my DBCs or database by exact name (normalize apostrophes, strip `**`), compare, and record `match`, `mismatch` (with both values) or `not-found`. Start with `system: classes` and `system: items`, then `professions`, `pvp`, `systems-ui`, then the content systems. Treat `status: unclear` entries as questions to answer from local data.
2. `structured/patches/turtle-vs-vanilla.yaml` (371 entries): same procedure for everything Turtle changed before 1.18.1, so the baseline is right, not only the last patch. Use `superseded_by` to skip entries a later patch replaced.
3. `structured/contradictions.yaml`: for the 94 entries with `check_against_local_game_data: true`, `what_would_settle_it` names the field or table to look at. Settle each one and record which side the local data supports. CON-0082 (the never-published per-class PvP dampening table) is the single most valuable check; the tier-1 list in `synthesis/contradictions.md` gives the rest.
4. `structured/issues.yaml` (122 entries, priority order in `meta`): turn each into a test on my server. `reproduction` gives steps when a player reported them; `status: intended` means the behavior is deliberate and must be reproduced, not fixed; `status: fixed` entries with `patch_fixed` must be fixed in my build too; open exploits (ISS-0084, 0085, 0088, 0093) must be confirmed absent.
5. `structured/staff-statements.jsonl`: filter `kind` in `working-as-intended`, `bug-confirmed`, `intent`, `policy` for the systems you touch. These are the specification of intended behavior; when my server and a staff statement disagree, the staff statement wins unless local data shows a later change.
6. `structured/content/instances.yaml` and `synthesis/content/instances/*.md`: for each of the 25 instances, confirm boss names, count, order, level range and abilities against `creature_template` and the creature spell lists; the documents list where staff, wiki and the LFT addon disagree, so decide from the local data. Then `structured/content/{quests,factions,vendors,drop-rates,recipes}.yaml` against the quest, reputation, vendor, loot and recipe tables.
7. Use `structured/entity-index/*.json` and `structured/wiki/*.jsonl` to resolve names to related entities (quest giver, zone, loot) when a name alone is ambiguous.

Rules: never "fix" the server toward a player claim when a staff statement or the local DBC contradicts it; record the disagreement instead. Prefer staff over player over wiki. Note the era of every source (`pre-1.18.1`, `1.18.1-announced-pre-release`, `post-1.18.1`); a pre-release note that a hotfix later changed is not the final state, and the hotfix entries in the changelog say what changed.

## Goal 2: make the bots play and talk like real Turtle players

1. Class and spec choice: `structured/classes/spec-role-matrix.yaml` (`rows`: class, spec, role, standing favored/alternative/niche/not-viable, agreement, source_quality). Bots should mostly pick `favored`, sometimes `alternative`, rarely `niche`, never `not-viable`.
2. Builds, stats, rotations: `structured/classes/<class>/<spec>-<role>.yaml`. `spell_id` is null everywhere because no source gives IDs: fill it from `Spell.dbc`/`Talent.dbc` by name and write it back. Decode the 195 build links in `structured/talent-links.jsonl` (three dash-separated tree segments; try the wowhead-style pairwise alphabet against the 1.18.1 talent tree order) and write the decoded point lists into `talents.points`; that converts every playbook from an opaque link into an executable build. Respect `agreement` and `patch_validity.valid_for_1181` as confidence, and re-check any rotation rule against the local spell data (cooldowns, durations, costs).
3. Leveling: `synthesis/classes/<class>/leveling.md` for talent order by level, which ranks to train or skip, pulling style, zones per bracket, hardcore differences.
4. Behavior: `behavior/*.jsonl` are scrubbed real examples with `pattern` and `category` labels; the matching `.md` files end with "Patterns for bots" and "What not to do". Use `rules-and-hard-limits.md` as hard constraints the bots must never cross, `activity-patterns.md` histograms (peak 14-16 UTC, trough 02-05 UTC, Wednesday busiest, EU/NA split) for login schedules, `economy.md` price tables and WTS/WTB templates for trade chat, `player-archetypes.md` persona sheets and `skill-spectrum.md` so bots span new to veteran instead of all playing perfectly, `group-play.md` and `guild-and-raid-culture.md` for etiquette, `popular-addons.md` for what a bot "has installed", `pvp-culture.md` for ganking etiquette and battleground behavior, `new-player-questions.md` for questions bots can ask and answer.
5. Vocabulary: `structured/glossary.jsonl` (313 terms, `scope` turtle or vanilla).
6. Dungeon and raid tactics: `synthesis/content/instances/*.md` per boss; the overview notes which instances have no tactics source at all (all custom 5-mans, Timbermaw Hold), so derive those from the local creature spell data and mark them as derived.

## Outputs I want from you

- `verification/findings.yaml`: one record per checked entry, keyed by the source id exactly as written in the repo file (1.18.1 changes use descriptive slugs such as `zone-moonwhisper-coast`; Turtle-vs-vanilla uses `TVV-nnnn`; contradictions `CON-nnnn`; issues `ISS-nnnn`; instances their `id` slug), with `result` (match | mismatch | not-found | intended | settled-side-a | settled-side-b), `local_value`, `source_value`, `table_or_dbc`, `row_id`, `checked_on`, `action` (none | fix | investigate) and a one-line note. Keep it machine-readable so it can be joined back to the repo files by id.
- `verification/fixes.md`: every change you make to the server database or config, with the finding id, the before and after values, and the source URL from the repo that justifies it.
- Updated playbook YAML with `spell_id`s and decoded talent points, plus `structured/talent-links.decoded.jsonl`.
- A short summary at the end: counts of match/mismatch/not-found per system, the ten most consequential mismatches, what the repo's sources could not settle, and what the bot module still lacks.

Cite the repo file and source URL for every finding. Do not modify the repo's existing synthesis or structured files except to fill null IDs and decoded talents; add new material under `verification/`. Commit in small, labeled steps.
