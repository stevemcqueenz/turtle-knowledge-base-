# Discord → class playbook pipeline

How `guide/` (the player- and bot-facing class playbooks and dungeon/raid pages) was built from
the archived Turtle WoW Europe Discord. The scripts expect the working layout they were run in
(`/home/agent/work/turtle-discord/{zips,norm,read,notes,topics,kb}`); adjust the `BASE`/`B`
constants to rerun elsewhere. The raw export (`norm/<channel>/messages.jsonl`) and the channel
zips are not in this repository.

## Stages

| stage | tool / brief | output |
|---|---|---|
| 1. chunk | `chunk.py`: every substantive message from 2025-10-03 on (1.18.1 announced + post-release), plus highlights (pinned, reacted, long) from 2024-11-01..2025-10-02 and all-time pinned, as ~480 KB transcripts under `## date` headers | `read/<channel>/{full,hl}-NNN.md` (122 chunks, 10 channels) |
| 2. read | `READER-BRIEF.md` (one Sonnet agent per chunk, reads it end to end, may view build screenshots via `img.sh`) | `research/discord-notes/<channel>/<chunk>.md`: cited notes under fixed headings |
| 3. regroup | `by_topic.sh <channel>` / `gather_section.py` | one file per heading across all chunks (for big classes), and the "Dungeons & raids" sections for the instance writers |
| 4. write | `WRITER-BRIEF.md` (one Opus agent per class; paladin split in two), `INSTANCE-BRIEF.md` (raids, dungeons) | `guide/classes/<class>/*.md`, `guide/instances/*.md`, updated `structured/classes/<class>/*.yaml` |
| 5. QA | `QA-BRIEF.md` with `cite_pairs.py` (claim + full cited message text), `near.py` (neighbouring messages), `show.py` | every Discord citation checked against the claim it supports; wrong IDs re-pointed, unsupported claims reworded or dropped; working calculator links added |
| 6. evidence | `collect_evidence.py guide structured synthesis behavior` (resolves citations against the raw export; it merges into existing files) then `prune_evidence.py` (drops records no published page cites) | `structured/discord/evidence-<channel>.jsonl` |
| 7. integrate | `graft_yaml.py` (writer YAML + GitHub-only `stat_priority` keys), `scrape/talents/build_trees.py fill`, `site/scripts/build-data.py` | site data |

## Checks
- `check_notes.py <files>`: every `[[d:]]` ID exists in the raw export.
- `talent_tool.py build|level|decode <class>`: builds and 10→60 leveling orders validated against
  the 1.18.1 trees (`structured/talents/<class>.yaml`); prints the working calculator URL
  (xian55.github.io/tortoise-db-viewer).
- `scrape/validate.py synthesis structured behavior guide`: every citation resolves, data parses.

## Known limits
- Reader notes (`research/discord-notes/`) are working material: roughly 2-15% of their
  message IDs pointed at a neighbouring message; the QA stage fixed this in `guide/`, not in the
  notes. Verify a note's citation before reusing it.
- Discord has no staff signal; "dev" identities were inferred from content and reception.
- Post-release evidence covers 2026-03-20 .. 2026-05-15 (server shutdown) only.
