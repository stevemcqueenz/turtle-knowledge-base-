You are building part C of the **player-behavior corpus** for human-like Turtle WoW bots. Repo root: /home/user/turtle-knowledge-base-. Sources: the whole forum archive, `structured/forum/posts/*.jsonl` (fields: content_md, author, authority, date, era, forum_id, topic_title, url) and `extracted/forum/<forum>/*.md`; forum ids: 4 General, 3 Help & Support, 14 Suggestions, 23 Guild Recruitment, 50 Roleplay Guild Recruitment, 37 Hardcore, 73 PvP, 28 Raids, 40-48 classes, 17 Storyteller's Corner, 72 Level One Lunatics, 32 Creative Corner, 19 Lore.

Deliverables:
1. `behavior/group-play.md` (+ .jsonl): role expectations (tank/healer/DPS duties as players state them), loot etiquette (need/greed, reserves, "MS>OS", soft reserve, ninja accusations), pull and marking conventions, kick/interrupt assignments, pacing ("gogogo" vs careful), leaving/being kicked, common complaints about bad players (these tell bots what NOT to do), and dungeon-finder/LFT etiquette.
2. `behavior/guild-and-raid-culture.md` (+ .jsonl): recruitment posts (structure, tone, requirements, time zones), raid schedules and sign-ups, loot systems (DKP, soft reserve, loot council, GDKP if present), how guild chat and Discord are described, guild drama patterns, guild types (casual, hardcore, RP, PvP, national/language guilds), guild quarters and guild banks usage.
3. `behavior/player-archetypes.md` (+ .jsonl): casuals, hardcore-mode players, raiders, PvPers, roleplayers, gold farmers/bots (as described by others), altoholics, lunatics/level-one players, returning players; how each behaves and talks, with real examples; include a per-archetype "bot persona sheet" (goals, session style, chat style, typical phrases, pet peeves).
4. `behavior/turtle-culture.md` (+ .jsonl): community norms that differ from generic vanilla: hardcore etiquette (death posts, condolences), the "turtle" pace, cross-faction attitudes, roleplay presence, attitudes to custom content and to Blizzard/retail, memes and running jokes, staff-community relationship, the shutdown period (April-May 2026) behavior.

Report back with example counts per file and category and the validator's final line.

## Behavior corpus rules (in addition to the working rules)
- Write to `behavior/` only. **Pseudonymize every username**: use `scrape/pseudonymize.py` (`from pseudonymize import Aliaser; a = Aliaser(); a.alias(name)`; call `a.save()` at the end so aliases stay consistent across agents; the map file behavior/_aliases.json is git-ignored). Never write a real username in behavior/ files, including inside quotes ("X wrote" must become "Player-0042 wrote"); run `a.scrub(text)` over every quote before writing it. Staff aliases are "Staff-NN" so authority stays visible. Post URLs are allowed as citations.
- Keep real examples with context: quote the actual wording (scrubbed), the forum, the date and the era; the bots need patterns, phrasing and tone, not summaries alone. Prefer many short real examples over long commentary.
- Where a pattern is common, give frequency evidence (counts from a Python pass over `structured/forum/posts/*.jsonl`), not adjectives.
- Every file ends with a "Patterns for bots" section: concrete, reusable rules or templates a bot could follow (with placeholders), and a "What not to do" list drawn from complaints.
- Machine-readable twins: for each Markdown file write `behavior/<name>.jsonl` with one example per line: `{example (scrubbed text), pattern, category, context, forum, date, era, url, author_alias, authority}`.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
