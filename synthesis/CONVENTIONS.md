# Conventions for synthesis documents

These rules apply to everything under `synthesis/`, `structured/` and `behavior/`.

## Sources and citations
- Every claim carries a source link. Forum posts: `https://forum.turtlecraft.gg/viewtopic.php?p=<post_id>#p<post_id>` (each post's URL is in the `<!-- url: ... -->` comment under its heading in `extracted/forum/**.md`, and in `url` in `structured/forum/posts/f<forum>.jsonl`). Website pages: the page URL. Wiki: the wiki page URL.
- Cite as `[author (authority), YYYY-MM-DD](url)`; e.g. `[Torta (staff), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168639#p168639)`.
- Authority levels: **staff** (rank "Turtle WoW Team", green username), **guide writer** (a player whose guide thread is widely referenced or has many thanks; say why), **player**. Staff statements about intended behavior outrank player claims.
- Discord messages: `[[d:<channel>#<message_id>]]`, e.g. `[[d:mage#818530154769940561]]`, where `<channel>` is the normalized channel name and `<message_id>` the Discord snowflake. The cited message must exist verbatim in `structured/discord/evidence-<channel>.jsonl` (`id`, `ts`, `author`, `content`); `python3 scrape/validate.py` resolves every `[[d:...]]` against these files, exactly like a forum citation. The collector that rebuilds them, `pipeline/collect_evidence.py`, lives outside this repo.
- Discord authority: the archived Turtle WoW Europe server has **no green-name/staff signal**. Treat posters as **player** unless content and reception establish **guide writer** (repeated well-received answers, pinned posts, or a matching entry in `structured/forum/authors.json`), and say why a poster is ranked. Cite a post as staff/developer only when the identity is established, and say how. Mark single-source claims as such.
- Never invent or fill in data. If a source is unclear, incomplete or contradictory, say so and cite it. Do not use outside knowledge of vanilla WoW as if it were a Turtle source; if you use general vanilla knowledge for context, label it `(vanilla baseline, not from turtlecraft.gg)`.
- Capture in-game IDs (spell, item, quest, NPC, zone IDs) and exact names whenever a source gives them.

## Discord corpus
- The Discord layer comes from the archived **Turtle WoW Europe** server export, 2021-02 to 2026-05: 3,004,388 messages across 14 channels (`#warrior`, `#paladin`, `#hunter`, `#rogue`, `#priest`, `#shaman`, `#mage`, `#warlock`, `#druid`, `#code-corner`, `#pvp-general`, `#turtle-wiki`, `#twinking`, `#level-one-lunatic`). The export's `theorycrafting` channel was deliberately not fetched. (The message count is a provenance claim from the export manifest; the `norm/` export lives outside this repo and is not independently checkable from within it.)
- Message text is quoted verbatim; era is derived from the message timestamp on the same boundaries as below.

## Time
- All dates are UTC. Patch 1.18.1 preliminary notes: 2025-10-03. Patch 1.18.1 release: 2026-03-20. Server shutdown: 2026-05-15. See `structured/forum/timeline.json`.
- Mark each recommendation or fact as **pre-1.18.1**, **1.18.1-announced-pre-release** (2025-10-03 .. 2026-03-19), **post-1.18.1** or **mixed** (the item's Discord citations fall on both sides of an era boundary), and say whether later sources superseded it.

## Agreement
- Mark each recommendation as **consensus** (multiple independent sources agree), **single source**, or **contested** (sources disagree; list both sides with dates and sources).

## YAML schema extensions (Discord enrichment)
- `structured/contradictions.yaml`: an entry may carry a top-level `discord:` block `{note, sources:[{channel, id, era, agreement, cite}]}` for evidence that is genuinely two-sided or Discord-only. `cite` is the `[[d:<channel>#<id>]]` citation, `id` the Discord snowflake, `era` and `agreement` as above. A per-side source is normally `{author, authority, date, url}` and may carry `cite` (plus `era`, `agreement`) instead of `url`. `meta.status_values` is the status legend; it includes **contested** (sources actively disagree) and **resolved** (settled by later evidence).
- `structured/issues.yaml`: `meta.status_values` is the status legend, including **not-root-caused** (the report was explained; not a server bug), **mitigated** (a known workaround or partial fix), and **resolved-later** (not a current bug, kept so the old report is not re-filed). `reports[]` is either the forum shape `{url, author, authority, date}` or the Discord shape `{cite, author, authority, date, era, agreement}` (no `url`; `cite` as above).

## Style
- Markdown, one H1, sections with H2/H3. Tables for structured comparisons. Short paragraphs.
- Do not pseudonymize authors in `synthesis/` and `structured/`. Pseudonymize in `behavior/` only (consistent alias per person; keep a private map in `behavior/_aliases.json`, which is git-ignored).
- Do not commit; the orchestrator commits.
