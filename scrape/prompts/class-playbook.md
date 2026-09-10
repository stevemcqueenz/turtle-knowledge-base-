# Prompt template: class playbooks (one agent per class)

You are writing the **{CLASS} playbooks** for a Turtle WoW knowledge base that will drive human-like bots. Repo root: /home/user/turtle-knowledge-base-. Read `synthesis/CONVENTIONS.md` first and follow it exactly. Do NOT fetch anything from the network and do NOT run git. Work only from files in the repo.

## Sources
- Class forum, fully extracted: `extracted/forum/{FORUM_SLUG}/*.md` (one file per thread; each post has a URL, author, rank, [STAFF] tag, date and era). Index: `structured/forum/topics.jsonl` (filter forum_id == {FORUM_ID}); per-post data: `structured/forum/posts/f{FORUM_ID}.jsonl` (fields: post_id, url, author, authority, date, era, content_md, topic_title, thanked_by).
- Official class changes: `synthesis/1.18.1-master-changelog.md` (Classes section), `synthesis/turtle-vs-vanilla-timeline.md` (Classes section), `structured/patches/*.yaml`, and the staff posts in `extracted/forum/f63-patch-notes-changelog/t15157-*.md` ("Patch 1.17.2 & Beyond — Class & Gameplay Changes") and `t22214-*.md` (1.18.1). Search these for "{CLASS}" and its spec/talent names.
- Cross-forum mentions: grep `extracted/forum/` for "{CLASS}" in General, Raids, Hardcore, PvP, Help & Support threads (whatever is extracted at the time); use them for role viability, reputation and common complaints.
- Wiki (community, not official): `extracted/wiki/articles/` pages about the class, its talents and Turtle-specific spells (grep for the class name), and `structured/wiki/pages.jsonl` (is_turtle_content, patch).

## Deliverables
1. `synthesis/classes/{class}/README.md`: a short index of what was written and the source-quality of each file.
2. One playbook per viable spec × role at `synthesis/classes/{class}/<spec>-<role>.md` (roles: tank, healer, melee-dps, ranged-dps, pvp where the sources treat it as distinct; leveling goes in the leveling guide). Discover viable roles from the sources; Turtle made non-vanilla roles viable (for example Enhancement Shaman tank). Use this template every time:
   - **Overview**: role, strengths and weaknesses, content it excels at (leveling, dungeons, raids, PvP, hardcore), community standing (favored / alternative / niche, with reasoning quoted from sources).
   - **Talent build**: full point allocation for the endgame build using Turtle talent names; include any build links/exports the sources give (talents.turtlecraft.gg links etc.). Variants (raid, dungeon, PvP) where they differ. Say which patch the build is from and whether 1.18.1 changed anything in it.
   - **Stat priority**: stat weights and caps (hit, crit, defense, spell penetration...) at 60, and how it differs while leveling.
   - **Single-target rotation**: opener, then an ordered priority list with explicit conditions ("cast X if debuff Y has < 3 s left; otherwise Z").
   - **Multi-target / AoE rotation**: 2-3 targets vs 4+.
   - **Cooldowns and resources**: when to use cooldowns; mana/rage/energy management; when to drink or rest.
   - **Role strategy**: threat for tanks, triage and spell ranks for healers, positioning, interrupts, kiting, PvP tactics if relevant.
   - **Gear, enchants and consumables**: best-in-slot ideas, pre-raid BiS, must-have consumables, with sources.
   - **Common mistakes**: what players criticize others for. Bots must avoid these.
   - **Sources**: the threads used, with author authority and dates; mark each recommendation consensus / single source / contested; flag advice that predates 1.18.1 changes that affect it.
3. `synthesis/classes/{class}/leveling.md`: best leveling build(s) with talent point order by level 10 to 60; respec points and why; skill training priority (which abilities/ranks to train at each level and which ranks players skip); leveling playstyle (pulling, mobs at once, kill rotation, downtime); stat priority while leveling and key gear upgrades; route (zones/dungeons per level bracket, profession pairings); hardcore-mode differences.
4. Machine-readable versions at `structured/classes/{class}/<spec>-<role>.yaml` with: `class, spec, role, sources: [{url, author, authority, date}], agreement: consensus|single|contested, patch_validity: {written_for, valid_for_1181: true|false|unknown, notes}, talents: {build_name, points: [{tree, talent, rank, spell_id: null|int}], leveling_order: [{level, tree, talent}]}, stat_weights: {stat: weight|priority}, caps: {}, rotation_single: [{priority, action, condition}], rotation_aoe: [{targets_min, priority, action, condition}], aoe_threshold: int, cooldowns: [{name, use_when}], resource_rules: [..], consumables: [..], mistakes_to_avoid: [..]`. Use spell/talent IDs only if a source gives them; otherwise null.
5. A **gaps** section in README.md listing specs/roles/questions the sources do not cover. Never guess; list the gap.

Be exhaustive and concrete; quote the sources' own conditions and numbers. Report back with the files written, the spec × role coverage table with source quality (strong / medium / weak / none), and the top open questions.
