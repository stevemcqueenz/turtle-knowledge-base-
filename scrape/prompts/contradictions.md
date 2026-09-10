You are writing **synthesis/contradictions.md** for a Turtle WoW knowledge base: where sources disagree, list both sides with dates and sources, and where possible say which side later evidence supports. Repo root: /home/user/turtle-knowledge-base-.

Sources: the "contested", "unclear", "gaps" and "contradictions" sections of every existing synthesis document (`synthesis/1.18.1-master-changelog.md`, `synthesis/turtle-vs-vanilla-timeline.md`, `synthesis/classes/*/README.md` and playbooks, `synthesis/content/*.md`, `synthesis/staff-statements.md` and `synthesis/issues-summary.md` if present), the YAML/JSONL under `structured/` (entries with status unclear/contested), plus your own search of the forum corpus for disputes: staff statement vs player observation (e.g. "working as intended" vs bug reports), wiki vs forum (e.g. patch attribution, level ranges, boss mechanics), guide vs guide (rotations, stat priorities, spec viability), and patch notes vs hotfix reversals.

Deliverable: `synthesis/contradictions.md`: grouped by system; each entry: topic, side A (claim, author, authority, date, url), side B (same), what would settle it (e.g. a DBC/database field to check on the local server), current best assessment (or "unresolved"). Also `structured/contradictions.yaml` with the same entries. Finish with a list of the contradictions most worth checking against the local 1.18.1 game data.

Report back with counts per system and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
