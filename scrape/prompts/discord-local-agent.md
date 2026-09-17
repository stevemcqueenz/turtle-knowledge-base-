# Task: extend the Turtle WoW knowledge base with the Discord server backup

Paste this whole file as the instruction for a Claude Code agent that runs on the machine
with the NAS mounted. It has everything the agent needs: where the data is, what the repo
already contains, the exact conventions, the tooling that is already written, the phases,
which subagents to spawn (model and effort), and what "done" means.

## 0. Context and goal

Repository: `turtle-knowledge-base` (branch `main`). It archives everything the Turtle WoW
website, forums and community wiki said before the 2026-05-15 shutdown (161,896 forum
posts, 21 staff accounts, all patch threads, 5,276 wiki pages) and distils it into cited
synthesis documents, machine-readable YAML/JSONL for bots and a class-guide site. Read
`AGENTS.md` first (layout, every schema, joins, fast paths), then `synthesis/FINAL-REPORT.md`
(what exists and what is missing) and `synthesis/CONVENTIONS.md` (citation and style rules).
Never load `structured/forum/posts/*.jsonl` or `extracted/` wholesale into context; grep or
stream them.

New source: the full Turtle WoW Discord server backup at
`/Volumes/home/Drive/Downloads/Turtle Discord Backup` (one `.zip` per channel, named after
the channel; each zip holds JSON message dumps plus the downloaded attachments: screenshots,
images, files). Discord was where most day-to-day class, dungeon, raid, profession, PvP and
staff communication happened, so it fills the gaps the forum left.

Goal: a complete, player-backed, cited knowledge base for Turtle WoW 1.18.1 (the last patch)
covering how to play every class and spec (best talent trees, rotations, leveling specs and
routes, tanking, healing), dungeon and raid strategy per boss and per instance, group and
raid roster setups, enchants, consumables, items, professions per class, PvP, addons and
etiquette, plus staff statements and rules. Its consumers are (a) new and returning players
reading the site and (b) the `turtlebots` project, whose bots must behave like real server
members: quest, level, team up, run dungeons with or without humans, tank and lead, mark,
pull, CC, DPS and heal with the right tactics. Everything must therefore end up in the
existing machine-readable files with citations, not only in prose.

Hard rules (unchanged from the forum work):
- Never invent. Every claim carries the source message link. Where the sources are silent,
  write "not found in sources" and list it under gaps.
- Authority tiers: **staff** (Discord roles that mark the Turtle WoW Team; the ingester
  tags them) > **player** > **wiki**. Say which one every sentence rests on where it
  matters. Staff intent statements outrank player claims.
- Eras: `pre-1.18.1` (< 2025-10-03), `1.18.1-announced-pre-release` (2025-10-03 .. 2026-03-19),
  `post-1.18.1` (>= 2026-03-20). Tag every recommendation; prefer the newest evidence and say
  when older advice was superseded.
- Agreement: `consensus`, `single`, `contested` (list both sides with dates and links).
- Real usernames stay in `synthesis/` and `structured/` (as for the forum); `behavior/` is
  pseudonymized with `scrape/pseudonymize.py` (aliases in the git-ignored
  `behavior/_aliases.json`; extend the `Aliaser` to also consult
  `structured/discord/authors.json` so Discord staff get `Staff-NN` aliases).
- Do not run anything that needs the network except the two public endpoints named in §5
  (the tortoise DB viewer and its API). No Discord CDN fetches; attachments come from the
  backup only.
- Commit in small labeled steps on `main` (or a branch you merge), push after each phase,
  and never rewrite history.

## 1. Tooling already in the repo (use it, extend it, do not reinvent it)

- `scrape/discord/ingest.py` — normalizes the backup into the repository layout. It reads
  zips directly (unpacks once into `--work-dir`), recognizes DiscordChatExporter JSON, raw
  Discord API arrays, data-package style and NDJSON, matches attachments to local files,
  resolves `<@id>` mentions, tags staff by role name, assigns eras, and writes:
  - `structured/discord/messages/<channel-slug>[.partN].jsonl` (one record per message:
    `message_id, url, guild_id, channel_id, channel, channel_slug, category, author, author_id,
    author_nick, author_roles[], authority, date, era, type, content, content_clean, links[],
    attachments[{id, filename, url, local_path, content_type, size, width, height, kind}],
    embeds[], reply_to, reply_to_author, reply_to_excerpt, pinned, edited, reactions[],
    reactions_total, mentions[], thread`),
  - `structured/discord/channels.json`, `structured/discord/authors.json`,
  - `structured/discord/images.jsonl` (every image attachment with its message context),
  - `extracted/discord/<channel-slug>/<YYYY-MM>.md` (readable monthly transcripts; each
    message has a `<!-- url: ... -->` line to copy as the citation).
  Run `survey` first; it prints the detected dump shape per channel, message counts and date
  ranges without writing anything. If a channel's dump shape is not recognized (`unknown`),
  extend `load_json_any`/`normalize` rather than working around it, and add a fixture.
  Pass `--staff-roles` with the exact role names the server used for staff (read them from
  the survey output or the dumps' `author.roles`; the default list is a guess) and
  `--guild-id` if the dumps carry no guild id (needed for canonical `discord.com/channels/...`
  links; otherwise citations fall back to `discord://<channel-slug>/<message-id>`, which
  the validator also accepts).
- `scrape/validate.py` — now resolves Discord citations against
  `structured/discord/messages/*.jsonl`, in both link forms, next to the forum checks. Run it
  on every file you write; the final line must report `unresolved=0 other_failures=0`.
- `scrape/pseudonymize.py` — alias helper for `behavior/`.
- `scrape/talents/build_trees.py` — Turtle 1.18.1 talent trees with spell ids
  (`structured/talents/talent-trees.json`), a link encoder for the working calculator at
  `https://xian55.github.io/tortoise-db-viewer/?talents=<class>&t=<digits>` and a `fill`
  command that writes `spell_id`, `talent_id` and `build_link_tortoise` into every playbook.
  Use `encode_link()` for every build you transcribe from a screenshot or a message.
- `site/scripts/build-data.py` + `npm run check && npm run build && npm run smoke` in `site/`
  regenerate and verify the class-guide site data.

## 2. Phase A — ingest and survey (Sonnet, medium effort, one agent; you can do it yourself)

1. `python3 scrape/discord/ingest.py survey "/Volumes/home/Drive/Downloads/Turtle Discord Backup" --work-dir <fast local disk>`
   Record the channel list, counts, shapes and the attachment totals in
   `scrape/discord/SURVEY.md`. Fix any `unknown` shapes in the ingester first.
2. Decide the staff role list from the dumps (list every distinct role name with counts;
   staff roles are the ones the Turtle WoW Team carried, e.g. "Turtle WoW Team", "Admin",
   "Developer", "Game Master", "Moderator"; write the final list into `SURVEY.md`).
3. `python3 scrape/discord/ingest.py build ... --staff-roles "<list>" --guild-id <id>`.
4. Size policy for git: keep `structured/discord/` and `extracted/discord/` in the repo (they
   are text; split parts are 40 MB each like the forum files). Do not commit the raw zips or
   the unpacked attachments; instead copy only the images that a synthesis document cites
   into `structured/discord/images/<channel-slug>/<message-id>-<filename>` downscaled to at
   most 1200 px on the long edge and about 200 KB (Pillow), and reference that path from the
   document. Add `raw/discord/` and the work dir to `.gitignore`. If the total text exceeds
   ~1 GB, keep `extracted/discord/` out of git and regenerate it from the JSONL instead (say
   so in `SURVEY.md`).
5. Extend `AGENTS.md` §1, §2 and `README.md` with the Discord layout, the record schema,
   the citation form, the staff role list and the size policy. Commit: "discord: ingest".

## 3. Phase B — channel-by-channel survey of knowledge (parallel, Sonnet, medium effort)

Spawn one agent per group of channels (about 8–12 agents; group by category: classes,
dungeons/raids, professions/economy, leveling/new players, PvP, addons/UI, announcements and
staff channels, guild recruitment and LFG, off-topic/language channels). Each writes
`scrape/discord/survey/<group>.md` with, per channel: what it contains, volume by era, share
of staff messages, the knowledge types present (builds, rotations, boss tactics, roster
advice, enchant lists, profession advice, prices, rules, bug confirmations, screenshots of
what), the 20 most-reacted and all pinned messages with links, recurring authors who act as
guide writers, and — crucially — a "what this adds beyond the forum" list, checked against
the existing repo files (grep `synthesis/` and `structured/` before claiming something is
new). Also list image attachments worth a vision pass (talent trees, gear lists, DPS meters,
boss position drawings, maps, macro screenshots) with their `images.jsonl` rows.

Merge the surveys into `scrape/discord/SURVEY.md` with a prioritized extraction plan:
which channels feed which repo files. Commit: "discord: survey".

## 4. Phase C — image pass (parallel, Sonnet with vision, medium effort; Opus for talent trees)

For the images the survey flagged (`structured/discord/images.jsonl` rows), one agent per
domain reads the image files from the work dir with the Read tool and transcribes what is
knowledge:

- Talent tree screenshots → a full points list `[{tree, talent, rank}]`, the class and the
  build purpose from the message context; verify every talent name against
  `structured/talents/talent-trees.json` (exact names, max ranks, rows) and generate the
  working link with `scrape/talents/build_trees.py link` or `encode_link()`. Write them to
  `structured/discord/talent-builds.jsonl`: `{url, channel_slug, author, authority, date,
  era, class, spec_guess, purpose, points[], total_points, tortoise_link, image_path,
  confidence, notes}`. Unreadable or partial screenshots get `confidence: low` and the
  reason; never fill in ranks you cannot see.
- Gear lists, BiS sheets, enchant lists, consumable lists → `structured/discord/image-transcriptions.jsonl`:
  `{url, image_path, kind, class, spec, role, bracket, items[{slot, item, source, enchant}],
  text, confidence}`.
- Boss position drawings, pull maps, raid layouts → the same file with `kind: tactics`, a
  faithful description in words (positions, kill order, marks) and the instance and boss.
- DPS meters, logs → `kind: parse`, the fight, the ranking and numbers as shown.
- Everything else knowledge-bearing (macro screenshots, addon configs, UI) → `kind: other`.

Copy each transcribed image into `structured/discord/images/...` (downscaled, see §2.4).
Commit: "discord: image pass".

## 5. Phase D — extraction and merge by domain (parallel; Opus, high effort for judgement-heavy
## domains; Sonnet, medium for extractive ones)

Each domain agent reads the relevant `extracted/discord/` transcripts and JSONL, the Phase B
survey and the Phase C transcriptions, and merges new knowledge into the EXISTING repo files,
keeping their schemas (see `AGENTS.md` §2). Add, do not replace: when Discord confirms a
forum claim add the Discord citation next to it; when it contradicts, add a
`structured/contradictions.yaml` entry; when it supersedes (later date, staff), say so
inline. Every new statement carries a Discord message link. Existing prompts in
`scrape/prompts/*.md` describe each deliverable's shape; reuse them.

| domain | model / effort | reads | writes |
|---|---|---|---|
| Classes (one agent per class, 9) | Opus, high | class channels, talent builds, image transcriptions, `structured/classes/<class>/*.yaml`, `synthesis/classes/<class>/*.md` | update every playbook (talents.points with ranks and `spell_id`, `build_link_tortoise`, stat_priority/caps, rotations, cooldowns, mistakes, consumables, sources), `leveling.yaml`/`leveling.md`, `gear.yaml`, the class README (1.18.1 section, gaps); add new spec/role rows to `structured/classes/spec-role-matrix.yaml` and `synthesis/classes/spec-role-matrix.md` when Discord shows a standing the forum lacked |
| Dungeons and raids (one agent per 3–4 instances) | Opus, high | raid/dungeon channels, tactics images, `structured/content/instances.yaml`, `synthesis/content/instances/*.md` | per boss: abilities, mechanics, positioning, kill order, marks, CC assignments, role assignments, common wipes, loot; per instance: pull order, skips, roster (tank/healer/DPS counts, class needs), consumables, lockouts; fill the instances that had no tactics (all custom 5-mans, Timbermaw Hold) |
| Rosters, group play, leading (1 agent) | Opus, high | LFG, raid-leading, guild channels | `synthesis/content/group-and-raid-leading.md` + `structured/content/rosters.yaml` (`{instance, size, roles[{role, count, preferred_classes, why}], marks convention, pull rules, loot rules, sources}`) — this is what a bot tank/leader follows |
| Professions and economy (1 agent) | Sonnet, medium | profession, trade, auction channels | `structured/content/recipes.yaml`, `synthesis/content/professions-and-recipes.md`, a new `synthesis/content/professions-per-class.md` (which professions each class/spec takes and why), `behavior/economy.*` price evidence by year |
| Enchants and consumables (1 agent) | Sonnet, medium | class and raid channels, image transcriptions | `structured/classes/<class>/gear.yaml` enchant and consumable blocks per spec and bracket (`{slot, enchant, source, priority, sources}`), `synthesis/classes/<class>/gear.md` |
| Leveling and new players (1 agent) | Sonnet, medium | leveling, new-player, hardcore channels | `structured/classes/<class>/leveling.yaml` (routes, zones per bracket, dungeon order, rested rules), `behavior/leveling-and-progression.*`, `behavior/new-player-questions.*` |
| PvP (1 agent) | Sonnet, medium | PvP, battleground, arena channels | `*-pvp.yaml` playbooks, `synthesis/content/pvp.md` (new), `behavior/pvp-culture.*` |
| Staff statements, rules, patch changes, issues (1 agent) | Opus, high | announcements, patch notes, staff Q&A, bug channels | `structured/staff-statements.jsonl` + `synthesis/staff-statements.md`, `structured/patches/1.18.1-changes.yaml` (new entries or `status` updates with the Discord source), `structured/issues.yaml`, `behavior/rules-and-hard-limits.*`, `structured/contradictions.yaml` |
| Addons, UI, macros (1 agent) | Sonnet, medium | addon/UI channels, macro screenshots | `behavior/popular-addons.*`, new `synthesis/content/addons-and-macros.md` with the macros verbatim |
| Behavior and culture (2 agents) | Sonnet, medium | general, off-topic, guild, language channels | `behavior/*.md` + `.jsonl` (pseudonymized; frequency counts from a Python pass over the Discord JSONL; Discord-specific patterns: LFG phrasing, raid call-outs, emoji use, voice etiquette), `behavior/activity-patterns.*` (hourly/weekday histograms from message timestamps, compared with the forum) |
| Glossary and entity index (1 agent) | Sonnet, medium | everything | `structured/glossary.jsonl` + `synthesis/glossary.md` new terms with `scope`; rerun `scrape/build_entity_index.py` after content YAMLs change |

Every agent: read `scrape/prompts/_handling.md` and the domain prompt in
`scrape/prompts/`; write deliverables incrementally; run
`python3 scrape/validate.py <paths>` and `python3 scrape/leakcheck.py` (for `behavior/`)
before finishing; report the validator's final line verbatim, the files changed, the counts
of new facts by authority tier, and the gaps that remain. Commit per domain.

## 6. Phase E — talent links and spell ids

1. Run `python3 scrape/talents/build_trees.py fill` after the class agents finish, so every
   playbook and every transcribed Discord build has `spell_id`s and a working
   `build_link_tortoise`. Report unmatched talent names and fix the names in the YAML (they
   must match `talent-trees.json`).
2. Replace dead `talents.turtlecraft.gg` links in `synthesis/` with the generated tortoise
   links where the build is now known (keep the dead link in `links_opaque` for provenance).
   The 195 opaque codes in `structured/talent-links.jsonl` can now be decoded against the
   tree order in `talent-trees.json` (try the pairwise-alphabet scheme first; verify a decode
   by checking that no talent exceeds its max rank and row prerequisites hold); write
   decoded results to `structured/talent-links.decoded.jsonl`.
3. `site/`: add the tortoise link button to the spec guide (the site already reads
   `build_link` / `links_opaque`; add `build_link_tortoise`), regenerate data, run the three
   npm commands, commit.

## 7. Phase F — verification and report

- `python3 scrape/validate.py` clean; `python3 scrape/leakcheck.py` clean; `python3 site/scripts/test_data.py`; site checks green.
- Spot-check 40 random new claims against the raw messages (open the JSONL record by
  `message_id`) and record the result in `synthesis/coverage-report.md`.
- Update `synthesis/FINAL-REPORT.md` (new §1 row for Discord: channels, messages, authors,
  staff messages, images transcribed; new findings; what Discord could not settle) and
  `AGENTS.md` (Discord fast paths, `talent-builds.jsonl`, `rosters.yaml`, new synthesis files).
- Final commit and push; then write a short summary: counts by domain, the ten most valuable
  additions for players, the ten most valuable for the bots, and the open gaps.

## 8. Decisions already taken (do not re-ask)

- Discord messages are cited like forum posts; the `url` field is the citation. Message
  links stay valid as identifiers even though the server is gone.
- Usernames: real in `synthesis/`/`structured/`, aliased in `behavior/`, exactly as for the forum.
- Attachments: only cited images enter git, downscaled; everything else stays on the NAS.
- Talent links point at the tortoise-db-viewer calculator; the old calculator is dead.
- Subagents: Opus for judgement-heavy synthesis (classes, instances, rosters, staff/rules),
  Sonnet for extractive and mechanical work; give every agent the exact file list to read
  and write, the schema, the validator command and the report format above.
