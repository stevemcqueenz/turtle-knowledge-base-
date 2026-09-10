You are writing **synthesis/glossary.md** for a Turtle WoW knowledge base: Turtle-specific terms, abbreviations, nicknames for zones, bosses, items and systems, plus general vanilla WoW slang as actually used on these forums, each with its meaning. Repo root: /home/user/turtle-knowledge-base-.

Method: build the term list from the corpus itself, not from memory. Use Python over `structured/forum/posts/*.jsonl` (field content_md) to find (a) frequent all-caps or CamelCase tokens and 2-6 letter abbreviations (LKH, ES, ToK, KZ, BRM, HC, S&S, LFT, LFM, WTS, WTB, BiS, CC, wpvp, pst, etc.), (b) tokens that co-occur with "aka", "a.k.a", "called", "known as", "short for", (c) proper names from `structured/wiki/pages.jsonl` titles that appear in posts with a variant spelling/nickname. For each candidate, find 1-2 posts that make the meaning clear and cite them. Include Turtle systems (Slow & Steady, War Mode, Vagrant, Lunatic, Inferno, Boaring, Exhaustion, Chronoboon, Gaston, Guild Quarters, LFT tool, Brainwashing Device, Survival, Gardening, Mirage Raceway, Bounty Boards, Everlook Broadcasting, etc.), custom zones/instances and their nicknames, custom items/sets, staff names and roles, realm names, common leveling/raid/PvP slang, economy slang, and emotes/greetings.

Deliverable: `synthesis/glossary.md`: alphabetical table (term | meaning | category: system/zone/instance/boss/item/class/pvp/economy/social/staff/realm/general-vanilla | first seen (date) | example citation), then a short section "Terms whose meaning is unclear or contested" with both readings. Aim for several hundred entries; mark Turtle-specific vs general vanilla. Also write `structured/glossary.jsonl` with the same rows.

Report back with entry counts by category and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
