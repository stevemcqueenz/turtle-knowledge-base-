You are writing **synthesis/staff-statements.md** for a Turtle WoW knowledge base: what the Turtle WoW team said about intended behavior and the reasoning behind changes, grouped by system. Repo root: /home/user/turtle-knowledge-base-.

Sources: every staff post in the forum archive. Staff posts have `"authority": "staff"` in `structured/forum/posts/*.jsonl` (all forums are extracted: patch notes f63, announcements f2, itemization f70, help & support f3, general f4, suggestions f14, class forums f40-f48, raids f28, professions f33, pvp f73, hardcore f37, addons f18, lore f19, modding f29, guild recruitment f23/f50, others). Staff members seen so far: Torta, Jamey, Dragunovi, Gheor, Hyundef, Lhian, Moriena, Nopheros, Pepesmite, Reynolds, Shadowsong, Akalix (rank "Turtle WoW Team"). Start by counting staff posts per forum and per author with a short Python script, then read them all (they number in the low thousands; the long patch-notes posts are already summarized in `synthesis/1.18.1-master-changelog.md` and `synthesis/turtle-vs-vanilla-timeline.md`, so for those threads focus on replies that explain intent, reasoning, confirmations of bugs, "working as intended", and policy).

Deliverables:
1. `synthesis/staff-statements.md`: grouped by system (Classes and talents, per class; Spells and mechanics; Items and itemization; Quests and zones; Dungeons and raids; Professions; PvP and honor; Hardcore and challenges; Economy, auction house, gold, donations/shop; Rules, moderation, bans, botting/automation, multiboxing; Client, launcher, addons, UI; Server infrastructure, realms, maintenance; Roadmap and project decisions, including the shutdown). Each entry: the statement (short quote), what it clarifies (intended behavior / reasoning / bug status / policy), author, date, era (pre-1.18.1 / announced / post-1.18.1), citation, and "superseded by" where a later staff post changed it. Prefer verbatim short quotes over paraphrase.
2. `structured/staff-statements.jsonl`: one line per statement: `{post_id, url, author, date, era, forum, topic_title, system, subsystem, kind (intent|reasoning|bug-confirmed|working-as-intended|policy|roadmap|other), summary, quote}`.
3. Final sections: "Statements that contradict each other over time" and "Gaps" (systems with no staff statement).

Report back with counts per system and kind, the ten most consequential statements for a server emulator, and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
