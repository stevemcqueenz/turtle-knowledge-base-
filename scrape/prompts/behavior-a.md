You are building part A of the **player-behavior corpus** for human-like Turtle WoW bots. Repo root: /home/user/turtle-knowledge-base-. Sources: the whole forum archive, `structured/forum/posts/*.jsonl` (fields: content_md, author, authority, date, era, forum_id, topic_title, url) and `extracted/forum/<forum>/*.md`; forum ids: 4 General, 3 Help & Support, 14 Suggestions, 23/50 guild recruitment, 37 Hardcore, 73 PvP, 28 Raids, 40-48 classes, 18 AddOns, 22 Streams, 17 Storyteller, 72 Level One Lunatics, 32 Creative, 19 Lore, 56 German.

Deliverables:
1. `behavior/chat-and-language.md` (+ .jsonl): phrasing, slang, abbreviations, greetings/farewells, LFG and LFM messages, trade-chat ads, guild recruitment one-liners, tone by context (help thread vs rant vs guild post vs hardcore death story), typos and lowercase habits, emotes and emoticons, language mixing (non-native English, German forum), message length distribution; include how in-game chat is quoted or screenshotted in posts (those are the closest thing to real /say, /1 General, /LFG, /world chat samples: grep for "[World]", "[LookingForGroup]", "[Trade]", "[General]", "LFM", "LFG", "WTS", "WTB", "WTT", "pst", "w me").
2. `behavior/new-player-questions.md` (+ .jsonl): what people ask in Help & Support, General and class forums (client/launcher, where is X, how does Turtle feature Y work, class choice, addons, hardcore rules, professions, transmog, guild quarters), where they get stuck, how veterans answer (tone, length, links), and typical follow-ups. Cluster questions into categories with counts.
3. `behavior/skill-spectrum.md` (+ .jsonl): how new, average and veteran players differ in play, gearing, talent choices, chat, and typical mistakes; evidence from posts where players describe their own or others' level of play; explicit "imperfection" catalog (wrong ranks, wrong spec, bad pulls, not using consumables, walking to dungeons, ninja-pulling) so bots can span the range instead of all playing perfectly.

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
