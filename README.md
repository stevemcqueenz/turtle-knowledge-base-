# Turtle WoW knowledge base

An archive and analysis of turtlecraft.gg (official website), forum.turtlecraft.gg (phpBB forums, English and German) and the community wiki turtle-wow.fandom.com, captured on 2026-09-10, five weeks before the announced closure of the website and forums on 2026-10-16. Turtle WoW's game servers went offline on 2026-05-15; the final content patch was 1.18.1 "Nightmares of Ursol" (released 2026-03-20).

Purpose: (1) a reference for a local Turtle WoW 1.18.1 server (tortoise-wow core) to find and fix discrepancies; (2) source material for human-like bots that play and talk like real Turtle WoW players.

## Layout

| directory | content |
|---|---|
| `recon/` | Phase 0 site map, forum index with sizes, robots findings |
| `scrape/` | crawler (`crawl.py`), extractors (`extract.py`, `extract_site.py`, `extract_wiki.py`), entity index builder, validator, coverage report, agent prompts, and the crawl manifest `manifest.jsonl` (every URL with status, agent and timestamp) |
| `raw/` | original HTML as fetched, gzipped: `raw/forum/f<forum>/t<topic>-p<page>.html.gz`, `raw/forum/f<forum>/list-<start>.html.gz`, `raw/site/<slug>.html.gz`; `raw/wiki/pages/<pageid>.json` (wikitext via the MediaWiki API) |
| `extracted/` | clean Markdown: one file per forum topic (all pages merged, per-post metadata, `[STAFF]` tags, era markers), one per site page, one per wiki page |
| `structured/` | machine-readable data: `forum/posts/*.jsonl` (one record per post), `forum/topics.jsonl`, `forum/authors.json` (authority levels), `forum/timeline.json`, `external-links.jsonl`, `talent-links.jsonl`, `patches/` (1.18.1 changes, Turtle-vs-vanilla, timeline), `classes/<class>/*.yaml` (bot playbooks), `content/` (zones, quests, factions, vendors, drop rates, recipes, instances), `wiki/` (NPC/quest/zone/faction records), `entity-index/`, `issues.yaml`, `staff-statements.jsonl`, `glossary.jsonl`, `contradictions.yaml` |
| `synthesis/` | analysis documents with a source link for every claim: `1.18.1-master-changelog.md`, `turtle-vs-vanilla-timeline.md`, `classes/` (spec-role matrix, per spec-role playbooks, leveling guides), `content/` (zones, questlines, factions, NPCs/vendors, drop rates, professions, dungeons and raids with per-instance files), `staff-statements.md`, `issues-summary.md`, `glossary.md`, `contradictions.md`, `coverage-report.md`, `CONVENTIONS.md` |
| `behavior/` | player-behavior corpus for the bot project, usernames pseudonymized |

## Conventions

- Every claim in `synthesis/`, `structured/` and `behavior/` cites a post URL (`viewtopic.php?p=<id>#p<id>`), a site page or a wiki page. `python3 scrape/validate.py` checks that every cited post exists in the archive and that all data files parse.
- Authority: **staff** = rank "Turtle WoW Team" (21 accounts; green username), otherwise **player**; guide writers are called out where relevant. Staff statements about intended behavior outrank player claims.
- Time: all dates UTC. Eras: pre-1.18.1 (before 2025-10-03), 1.18.1-announced-pre-release (2025-10-03 to 2026-03-19), post-1.18.1 (from 2026-03-20). See `structured/forum/timeline.json`.
- Agreement: consensus / single source / contested, marked per recommendation.
- Nothing is invented: gaps are listed as gaps. In-game IDs appear only where a source states them (the wiki gives quest IDs for 182 quests; the forum almost never gives IDs; the item/spell database subdomain was already offline).

## Provenance and limits

- Crawl: one fetcher at about one request per second, descriptive user agent, robots.txt honored, no login, nothing gated fetched. 22,449 topic pages, 624 listing pages, 34 site pages; 21,301 of 21,308 English+German topics (4 deleted topics returned 404). Russian, Chinese, Spanish and Ukrainian forums were not crawled by decision.
- Not available: `database.turtlecraft.gg` (DNS gone), `talents.turtlecraft.gg` (origin down; build links are cataloged undecoded in `structured/talent-links.jsonl`), the images under `turtlecraft.gg/images/` (all 404), the site pages `/hardcore` and `/bug-tracker` (server errors), the forum staff list (login-gated).
- Wiki pages were fetched through the public MediaWiki API because the HTML front is behind a Cloudflare challenge; the wiki is a community source and is marked as such everywhere it is used.

## Regenerating

```
python3 scrape/extract.py --rebuild      # forum topics -> extracted/ and structured/forum
python3 scrape/extract_site.py           # site pages
python3 scrape/extract_wiki.py           # wiki
python3 scrape/build_entity_index.py     # entity index
python3 scrape/coverage.py               # coverage report + spot-check
python3 scrape/validate.py               # citations and data files
```
