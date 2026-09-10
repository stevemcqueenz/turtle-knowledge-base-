You are writing the **dungeons and raids content docs** for a Turtle WoW knowledge base (custom instances plus Turtle's changes to vanilla instances), with encounter mechanics and the tactics players describe. Repo root: /home/user/turtle-knowledge-base-.

Sources:
- Official: `synthesis/1.18.1-master-changelog.md` (Dungeons, Raids sections), `synthesis/turtle-vs-vanilla-timeline.md` (B4 Dungeons & raids), `structured/patches/*.yaml`, the staff patch threads in `extracted/forum/f63-patch-notes-changelog/` (grep instance names), official site pages `extracted/site/raids-and-dungeons.md` and `extracted/site/classic-dungeons-update.md`.
- Raids forum, fully extracted: `extracted/forum/f28-raids/*.md` (142 topics; index `structured/forum/topics.jsonl` forum_id 28; posts `structured/forum/posts/f28.jsonl`). Also grep all of `extracted/forum/` for instance/boss names (tactics, loot, difficulty complaints), especially class forums and `f70-itemization`.
- Wiki (community): `structured/wiki/zones.jsonl` (instances have infobox type/instance fields), `structured/wiki/npcs.jsonl` (bosses have `abilities`, `loot`, `quotes`; category "Bosses"; `is_turtle_content`, `patch`), `structured/entity-index/zones.json` and `npcs.json`, Markdown pages in `extracted/wiki/articles/` (boss pages often end in "(tactics)").

Deliverables:
1. `synthesis/content/dungeons-and-raids.md`: overview table of every instance on Turtle as of 1.18.1 (name, type, size, level range/required level, patch introduced or changed, zone/location, attunement or entry requirements, lockout, custom vs vanilla-modified), grouped: custom dungeons, custom raids, vanilla dungeons with Turtle changes (wings/extensions, level changes), vanilla raids with Turtle changes (Onyxia/BWL extensions, Molten Core extension, raid scaling), and "instances players say are undertuned/overtuned/buggy" with citations. End with a gaps/unclear section.
2. One file per custom instance and per significantly modified vanilla instance at `synthesis/content/instances/<slug>.md`: layout and bosses in order; per boss: abilities (name, effect, numbers if given), phases, mechanics, tactics/positioning/role assignments as players describe, loot highlights, staff statements about intended difficulty or fixes, known bugs (with citation), which patch changed what. Mark each claim's source type (official / player / wiki). Note contested claims.
3. `structured/content/instances.yaml`: list of instances `{id (slug), name, type (dungeon|raid), size, level_min, level_range, patch_introduced, patches_changed: [], zone, entry_requirements, lockout, custom: bool, bosses: [{name, npc_id: null|int, order, abilities: [{name, effect, numbers}], mechanics_summary, tactics_summary, loot: [names], sources: [urls]}], sources: [urls], notes}`. IDs only when a source gives them.

Report back with: file list, instance count by category, the instances with the richest tactics sources, the main gaps, and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
