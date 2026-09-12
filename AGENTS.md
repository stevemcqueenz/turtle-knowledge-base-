# Guide for agents working with this repository

Audience: an agent that has the Turtle WoW 1.18.1 client DBCs and/or a running tortoise-wow server and wants to (a) check the server against what Turtle actually shipped, or (b) build bots. This file tells you where things are, what the schemas are, how to join names to IDs, and what to do first. Human-facing overview: `README.md`; final summary: `synthesis/FINAL-REPORT.md`; citation conventions: `synthesis/CONVENTIONS.md`.

## 0. Ground rules for reading this repo

- Nothing here is invented. Every fact in `synthesis/`, `structured/` and `behavior/` carries a source URL; `python3 scrape/validate.py` proves each forum citation resolves to an archived post. When a document says "not found in sources", it means the whole 161,896-post corpus was searched.
- Source tiers, always labeled: **staff** (Turtle WoW Team, 21 accounts, the authority on intent), **player**, **wiki** (community fandom wiki, least reliable). Prefer staff over player over wiki; `synthesis/contradictions.md` lists where they disagree.
- Eras: `pre-1.18.1` (< 2025-10-03), `1.18.1-announced-pre-release` (2025-10-03 .. 2026-03-19), `post-1.18.1` (>= 2026-03-20). Post-release evidence is thin (8 weeks before shutdown). Dates are UTC.
- The forum almost never gives numeric IDs. The only IDs in the corpus: 182 wiki quest IDs (`structured/wiki/quests.jsonl` `quest_id`), a few NPC IDs in the Karazhan 10 guide, occasional item IDs in itemization threads. Everything else is by **exact name**. Names highlighted by staff in patch notes are rendered as `**bold**` in `extracted/forum/**` and copied verbatim into `entity` fields, so join on name after normalizing case and curly apostrophes.
- Large files: `structured/forum/posts/*.jsonl` total 349 MB (f14 and f4 are split into `.partN.jsonl`); `extracted/` is 211 MB. Do not load them whole into context. Use `grep -l`, `jq`, or Python streaming; the JSONL is one record per post.

## 1. Fast paths by task

| you want to | open |
|---|---|
| diff the server against 1.18.1 | `structured/patches/1.18.1-changes.yaml` (507 entries; filter `system`, `status`; `before`/`after`/`numbers` give the values to compare) |
| diff the server against everything Turtle changed since vanilla | `structured/patches/turtle-vs-vanilla.yaml` (371 entries, `introduced_in`, `superseded_by`) |
| a test checklist of known bugs | `structured/issues.yaml` (122 entries; `meta.priority_order` and `synthesis/issues-summary.md` tier list) |
| things sources disagree on, with the field that settles each | `structured/contradictions.yaml` (104; 94 have `check_against_local_game_data`) |
| what staff said the intended behavior is | `structured/staff-statements.jsonl` (552 verbatim quotes, `system`, `kind` in policy/reasoning/intent/working-as-intended/bug-confirmed/roadmap) |
| instance layouts, bosses, mechanics, tactics | `structured/content/instances.yaml` (25 instances, 140 bosses) and `synthesis/content/instances/<slug>.md` |
| zones, quests, factions, vendors, drop rates, recipes | `structured/content/*.yaml`, `synthesis/content/*.md` |
| cross-linked entities by name | `structured/entity-index/{quests,npcs,zones,factions,instances,items}.json` |
| bot: pick class/spec/role | `structured/classes/spec-role-matrix.yaml` (`rows`: class, spec, role, standing favored/alternative/niche/not-viable, agreement, source_quality) |
| bot: talents, stats, rotation, AoE thresholds | `structured/classes/<class>/<spec>-<role>.yaml` (47 files; see §3) |
| bot: leveling | `synthesis/classes/<class>/leveling.md` (prose; talent order by level, ranks to skip, route) |
| bot: chat, economy, group play, archetypes, rules, schedules, addons, PvP | `behavior/*.jsonl` (examples with `pattern`, `category`) and the matching `.md` (each ends with "Patterns for bots", "What not to do", "Gaps") |
| vocabulary | `structured/glossary.jsonl` (313 terms, `scope` turtle/vanilla) |
| raw evidence for any claim | follow the `url` (`viewtopic.php?p=<id>#p<id>`); the post record is in `structured/forum/posts/f<forum>*.jsonl` with `post_id`; the thread Markdown is `structured/forum/topics.jsonl` -> `extracted_path` |

## 2. Schemas

Post record (`structured/forum/posts/f<forum>[.partN].jsonl`): `post_id, url, author, author_id, authority (staff|player), rank, author_color, date (ISO UTC), date_raw, era, page, subject, content_md, content_html, links[{url,text}], images[], edited, thanked_by[], topic_id, topic_title, forum_id`.
Topic record (`structured/forum/topics.jsonl`): `topic_id, forum_id, forum, listed_in_forum, title, url, author, author_id, author_authority, posted, last_post, post_count, pages, pages_fetched, fetched, era, staff_posts, extracted_path`.
Authors (`structured/forum/authors.json`): username -> `{user_id, ranks[], colors[], posts, topics_started, authority, first_seen, last_seen}`.

1.18.1 changes (`structured/patches/1.18.1-changes.yaml`): top-level `patch, name, announced, released, hotfix_maintenances[], status_legend, linked_changelogs, entries[]`; entry `id, system, subsystem, entity, entity_ids[], change, before, after, numbers, source_url, source_author, source_authority, source_date, status (announced|released|hotfixed|reverted|unclear), notes`. Ids are descriptive slugs (e.g. `zone-moonwhisper-coast`, `class-hunter-aspect-of-the-viper`), not numbered; key any findings on the id string as written. Systems: zones, dungeons, raids, quests-factions, classes, items, professions, pvp, race-class, systems-ui, challenges, general.
Turtle vs vanilla (`turtle-vs-vanilla.yaml`, list): `id (TVV-nnnn), system, subsystem, entity, entity_ids, introduced_in, change, before_vanilla, after, superseded_by, source_*, notes`. `timeline.yaml`: one row per patch with `version, name, date, forum_topic_id, url, headline_features`.
Issues (`structured/issues.yaml` -> `entries[]`): `id (ISS-nnnn), title, symptom, reproduction, system, subsystem, entities[], entity_ids[], patch_reported, patch_fixed, era, status (open|confirmed|fixed|intended|unclear), status_source, severity (blocker|crash|exploit|major|minor|cosmetic), affects, reports[{url,author,authority,date,quote}], notes`.
Contradictions (`structured/contradictions.yaml` -> `entries[]`): `id (CON-nnnn), system, topic, side_a/side_b(/side_c) {claim, author, authority, date, url}, what_would_settle_it, assessment, status, check_against_local_game_data (bool)`.
Staff statements (`staff-statements.jsonl`): `post_id, url, author, date, era, forum, topic_title, system, subsystem, kind, summary, quote` (quote is verbatim from the post).
Instances (`structured/content/instances.yaml`, list): `id, name, type (dungeon|raid), size, level_min, level_range, patch_introduced, patches_changed[], zone, entry_requirements, lockout, custom, bosses[{name, npc_id, order, abilities[{name,effect,numbers}], mechanics_summary, tactics_summary, loot[], sources[]}], sources[], notes`.
Content YAMLs: `zones.yaml` (`new_zones[]`, `special_and_instanced_zones[]`), `quests.yaml` (`quests[]`: name, zone_or_category, level, faction, start_npc, end_npc, reputation, experience, rewards, is_turtle_content, source_tier, sources), `factions.yaml` (`factions[]` with `reputation_sources`, `rewards`, `quartermasters`), `vendors.yaml` (`vendors_with_stated_inventory[]`, `vendors_from_wiki_roster[]`), `drop-rates.yaml` (`staff_stated[]`, `player_reported[]`: item, source, rate/claim, date, authority, sample_size, era, status, sources), `recipes.yaml` (`recipes[]`: profession, recipe, item_ids, skill_level, materials, source_or_trainer, sources). Each file has `about`, `record_count`, `caveats` at the top: read them.
Class playbook YAML (`structured/classes/<class>/<spec>-<role>.yaml`): `class, spec, role, sources[{url,author,authority,date}], agreement (consensus|single|contested), patch_validity {written_for, valid_for_1181, notes}, talents {build_name, points[{tree,talent,rank,spell_id}], skip[], leveling_order[{level,tree,talent}], links_opaque[]}, stat_weights{}, caps{}, rotation_single[{priority,action,condition}], rotation_aoe[{targets_min,priority,action,condition}], aoe_threshold, cooldowns[{name,use_when}], resource_rules[], consumables[], mistakes_to_avoid[]`. `spell_id` is null everywhere (no source gives IDs): fill it from Spell.dbc by name.
Wiki records (`structured/wiki/*.jsonl`): `title, url, is_turtle_content, patch, categories[], fields{infobox key -> plain text}, field_links{key -> [linked page titles]}` plus per-type sections (`quests`: objectives/description/progress/completion/rewards, `quest_id`; `npcs`: abilities/loot/quotes/...). `pages.jsonl` indexes all 5,276 pages with `ns`, `infobox`, `patch`.
Entity index (`structured/entity-index/*.json`): keyed by name; `npcs` have `gives_quests`, `ends_quests`, `zones`, `boss_of`, `vendor_inventory`; `quests` have `start_npc`, `end_npc`, `previous`, `next`, `quest_id`; `zones` have `npcs`, `quests`, `instances`; `items` have `drops_from`, `sold_by`, `drop_rates`; `unresolved.json` lists names referenced without a page.
Behavior (`behavior/*.jsonl`): `example (scrubbed quote), pattern, category, context, forum, date, era, url, author_alias (Player-nnnn / Staff-nn), authority`. Real usernames are only in `behavior/_aliases.json`, which is git-ignored and absent from the repo.
Talent links (`structured/talent-links.jsonl`): `url, class, code, post_id, post_url, author, authority, date, era, topic_id, topic_title, context_before`. Code = three dash-separated tree segments; decode against Talent.dbc tree order (alphabet not confirmed; try the wowhead-style pairwise alphabet first).

## 3. Joining to the DBC / server database

1. Names: normalize `’` to `'`, strip `**`, compare case-insensitively against `Spell.dbc` name, `ItemCache`/`item_template.name`, `creature_template.name`, `AreaTable`, `quest_template.Title`. Names in `entity` fields are exact as staff wrote them; wiki titles may carry disambiguators in parentheses (e.g. `Edwin VanCleef (tactics)`).
2. Start with `1.18.1-changes.yaml` entries whose `numbers`/`after` contain a value (percentages, durations, coefficients, ranks). Each is one assertion about a spell, talent, item or NPC that a DBC or DB row can confirm or refute. Record findings per `id`.
3. Then `contradictions.yaml` where `check_against_local_game_data` is true: `what_would_settle_it` names the field. CON-0082 (per-class PvP dampening table) is the highest value.
4. Then `issues.yaml` in `meta.priority_order`; status `intended` entries describe behavior the emulator should reproduce, not fix.
5. Then `staff-statements.jsonl` with `kind` in (`working-as-intended`, `bug-confirmed`, `intent`) for systems you emulate: these are the spec for intended behavior.
6. For instances, `instances.yaml` bosses with `npc_id` null: look up by name in `creature_template`, then compare `abilities` against the creature's spell list. Note boss counts and level ranges disagree between sources (listed per instance).
7. For talents: decode `talent-links.jsonl` codes and write the decoded point lists back into `structured/classes/<class>/*.yaml` `talents.points` with `spell_id`; that turns every playbook from "opaque link" into an executable build.

## 4. Gaps you can fill with local data

No source gives: spell/talent/item/NPC IDs (except as noted), stat weights for most specs, hit/crit/defense caps under Turtle's changed formulas, the honor-per-kill formula, creature stat curves, threat coefficients, per-class PvP dampening values, instance lockout timers except Lower Karazhan Halls, vendor inventories (the wiki's are placeholders), boss order in most custom instances, and any Onyxia/BWL 1.18.1 mechanic details beyond names. Each class README (`synthesis/classes/<class>/README.md`) and each content document ends with a gaps section; `synthesis/FINAL-REPORT.md` §4 collects them.

## 5. Prompt for a local-server/bot agent

`scrape/prompts/local-server-agent.md` is a ready-to-paste instruction for an agent with DBC and server access; it follows the order in §3 and specifies the `verification/` outputs.

## 6. Regenerating and validating

```
python3 scrape/validate.py            # every citation resolves, every data file parses
python3 scrape/leakcheck.py           # no real usernames in behavior/
python3 scrape/extract.py --rebuild   # rebuild extracted/ + structured/forum from raw/ (about 10 min)
python3 scrape/build_entity_index.py  # rebuild entity index from wiki + content YAMLs
```
CI (`.github/workflows/ci.yml`) is generated by `no-mistakes ci-workflow` from the commands pinned in `.no-mistakes.yaml`; change the commands there and regenerate rather than editing the workflow.

If you add findings, keep the convention: one source URL per claim, tier labeled, and put machine-readable results next to the YAML they verify (for example a `verified_locally: {result, value_in_dbc, checked_on}` block per entry) so the two projects stay joinable.
