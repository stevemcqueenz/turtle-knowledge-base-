You are building the **bug and issue list** for a Turtle WoW 1.18.1 knowledge base; it will become a test checklist for a local server emulator (tortoise-wow core). Repo root: /home/user/turtle-knowledge-base-.

Sources: Help & Support forum (`extracted/forum/f3-help-support/`, 4,600+ topics, posts in `structured/forum/posts/f3*.jsonl`), the "Player reports" notes and hotfix entries in `synthesis/1.18.1-master-changelog.md` and `structured/patches/1.18.1-changes.yaml`, bug reports inside class forums (`extracted/forum/f40-*` .. `f48-*`), raids (f28), professions (f33), pvp (f73), hardcore (f37), general (f4), suggestions (f14, only threads that are actually bug reports), addons (f18, client/UI bugs), and staff replies confirming or denying bugs (`"authority": "staff"` in the posts JSONL; also `synthesis/staff-statements.md` if it exists). Use grep for "bug", "broken", "not working", "doesn't work", "exploit", "fixed", "hotfix", "as intended", "working as intended", "wai". Skip account/login/donation/ban-appeal threads (not game bugs) but count them in a note.

Deliverables:
1. `structured/issues.yaml`: a list of entries `{id (ISS-0001...), title, symptom, reproduction (steps if reported, else null), system, subsystem, entities: [names], entity_ids: [ints if given], patch_reported, patch_fixed (or null), era, status (open|confirmed|fixed|intended|unclear), status_source (url of the staff post that sets the status, or null), severity (crash|exploit|blocker|major|minor|cosmetic), affects (leveling|dungeon|raid|pvp|hardcore|economy|client|ui|quest|profession|class:<name>), reports: [{url, author, authority, date}], notes}`. One entry per distinct issue; merge duplicates and list all reports.
2. `synthesis/issues-summary.md`: readable summary grouped by system with counts; a **prioritized test list** for the local server (top 50, ordered by: staff-confirmed + affects core gameplay first, then widely reported, then single reports), each with the checklist step to verify; a section on issues staff marked "intended" (so the emulator should reproduce them); and a gaps section.

Report back with entry counts by status and system, the top 15 tests, and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
