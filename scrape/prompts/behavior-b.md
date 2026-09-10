You are building part B of the **player-behavior corpus** for human-like Turtle WoW bots. Repo root: /home/user/turtle-knowledge-base-. Sources: the whole forum archive, `structured/forum/posts/*.jsonl` (fields: content_md, author, authority, date, era, forum_id, topic_title, url) and `extracted/forum/<forum>/*.md`; forum ids: 4 General, 3 Help & Support, 14 Suggestions, 23/50 guild recruitment, 37 Hardcore, 73 PvP, 28 Raids, 40-48 classes, 33 Professions, 70 Itemization, 18 AddOns, 56 German.

Deliverables:
1. `behavior/economy.md` (+ .jsonl): price mentions for items, materials, consumables, crafted gear, boosts and services (with dates and era so prices can be trended), how players talk about buying, selling and haggling (WTS/WTB phrasing, "pst offer", "c.o.d.", auction house etiquette, undercutting, price checks), gold-making methods and their reported rates, gold sinks (mounts, respec, guild bank, transmog, Gaston), attitudes to gold buying/selling; include a table of the most-mentioned items with price ranges by year.
2. `behavior/leveling-and-progression.md` (+ .jsonl): routes and pacing (zones/dungeons per level bracket, time to 60 reported), gearing paths at 60 (pre-raid BiS talk, dungeon sets, PvP gear), profession choices per class, how players describe their sessions and milestones, and Turtle-specific leveling features (Slow & Steady, tents/taverns, rested XP, LFT tool, dungeon finder etiquette, cross-faction grouping).
3. `behavior/popular-addons.md` (+ .jsonl): which addons players use (counts of mentions), what for (quest helpers, threat meters, raid frames, auction tools, DPS meters, UI packs, Turtle-specific addons and the built-in client features), how they shape play and chat (e.g. "install X" advice, threat-meter etiquette), and the addon-related conflicts/complaints.

Report back with example counts per file and category, the top 30 addons by mentions, and the validator's final line.

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
