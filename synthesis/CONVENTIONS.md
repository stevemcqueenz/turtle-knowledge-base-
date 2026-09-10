# Conventions for synthesis documents

These rules apply to everything under `synthesis/`, `structured/` and `behavior/`.

## Sources and citations
- Every claim carries a source link. Forum posts: `https://forum.turtlecraft.gg/viewtopic.php?p=<post_id>#p<post_id>` (each post's URL is in the `<!-- url: ... -->` comment under its heading in `extracted/forum/**.md`, and in `url` in `structured/forum/posts/f<forum>.jsonl`). Website pages: the page URL. Wiki: the wiki page URL.
- Cite as `[author (authority), YYYY-MM-DD](url)`; e.g. `[Torta (staff), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168639#p168639)`.
- Authority levels: **staff** (rank "Turtle WoW Team", green username), **guide writer** (a player whose guide thread is widely referenced or has many thanks; say why), **player**. Staff statements about intended behavior outrank player claims.
- Never invent or fill in data. If a source is unclear, incomplete or contradictory, say so and cite it. Do not use outside knowledge of vanilla WoW as if it were a Turtle source; if you use general vanilla knowledge for context, label it `(vanilla baseline, not from turtlecraft.gg)`.
- Capture in-game IDs (spell, item, quest, NPC, zone IDs) and exact names whenever a source gives them.

## Time
- All dates are UTC. Patch 1.18.1 preliminary notes: 2025-10-03. Patch 1.18.1 release: 2026-03-20. Server shutdown: 2026-05-15. See `structured/forum/timeline.json`.
- Mark each recommendation or fact as **pre-1.18.1**, **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19) or **post-1.18.1**, and say whether later sources superseded it.

## Agreement
- Mark each recommendation as **consensus** (multiple independent sources agree), **single source**, or **contested** (sources disagree; list both sides with dates and sources).

## Style
- Markdown, one H1, sections with H2/H3. Tables for structured comparisons. Short paragraphs.
- Do not pseudonymize authors in `synthesis/` and `structured/`. Pseudonymize in `behavior/` only (consistent alias per person; keep a private map in `behavior/_aliases.json`, which is git-ignored).
- Do not commit; the orchestrator commits.
