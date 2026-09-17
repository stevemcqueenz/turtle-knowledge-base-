# Discord backup — survey (Phase A)

Source: `/Volumes/home/Drive/Downloads/Turtle Discord Backup`, 15 `.zip` files, 105 GB.
Surveyed 2026-09-17 by reading each archive's JSON member directly (no full unpack — see
§4). Export tool: **DiscordChatExporter** JSON (`{guild, channel, dateRange, exportedAt,
messages, messageCount}`), one archive per channel, attachments under `<channel>/_assets/`.

Guild: **Turtle WoW Europe**, id `466622455805378571`. Every archive carries the guild and
channel ids, so citations are canonical `https://discord.com/channels/466622455805378571/<channel>/<message>`
links; the `discord://` fallback is not needed anywhere.

All 14 readable channels sit in the category **"Achived Soon"** (the server's own spelling) —
the export was taken as the server wound down.

## 1. What the backup actually contains

**It is not the full Discord server.** It is the nine class channels plus five others:

| channel | id | messages | authors | attachments | images | pinned | first | last |
|---|---|---:|---:|---:|---:|---:|---|---|
| paladin | 810850211571171328 | 739,134 | 7,717 | 16,444 | 16,308 | 12 | 2021-02-15 | 2026-04-21 |
| warrior | 810850799823355915 | 414,148 | 7,111 | 10,886 | 10,604 | 10 | 2021-02-15 | 2026-05-26 |
| shaman | 810850759658831903 | 327,989 | 5,986 | 6,935 | 6,837 | 10 | 2021-02-15 | 2026-05-29 |
| rogue | 810850711318822923 | 280,937 | 5,704 | 7,673 | 7,553 | 8 | 2021-02-15 | 2026-05-29 |
| pvp-general | 846263484794667029 | 266,785 | 3,723 | 6,838 | 6,590 | 13 | 2021-05-24 | 2025-11-01 |
| druid | 810850778838990859 | 262,173 | 6,245 | 6,242 | 6,107 | 12 | 2021-02-15 | 2026-05-30 |
| hunter | 810850845717037086 | 235,257 | 7,375 | 6,011 | 5,873 | 14 | 2021-02-15 | 2026-05-30 |
| warlock | 810850818537685013 | 210,931 | 4,975 | 5,292 | 5,200 | 9 | 2021-02-15 | 2026-05-29 |
| priest | 810850727215104050 | 114,763 | 4,613 | 2,650 | 2,610 | 10 | 2021-02-15 | 2026-05-30 |
| mage | 810850742495477770 | 101,438 | 4,124 | 2,540 | 2,482 | 4 | 2021-02-15 | 2026-05-23 |
| code-corner | 988866055222984744 | 29,909 | 1,920 | 2,375 | 2,121 | 6 | 2022-06-21 | 2026-05-30 |
| turtle-wiki | 976193120809123881 | 10,293 | 1,778 | 496 | 491 | 2 | 2022-05-17 | 2026-05-22 |
| level-one-lunatic | 1340061684433420298 | 5,605 | 446 | 500 | 490 | 2 | 2025-02-15 | 2026-05-30 |
| twinking | 1340062102609592320 | 5,026 | 475 | 194 | 180 | 0 | 2025-02-15 | 2026-05-03 |
| **theorycrafting** | — | **unreadable — see §2** | | | | | | |

**Totals (14 readable channels): 3,004,388 messages, 75,076 attachments, 73,446 images.**
That is 18.6× the forum corpus (161,896 posts). Attachment *files* on disk number 201,430
across the archives; the surplus over 75,076 is avatars, guild icons, custom emoji and
sticker art that DiscordChatExporter downloads alongside the messages.

`pvp-general` stops at **2025-11-01**, five and a half months before the rest — its export
was taken earlier. Post-1.18.1 PvP evidence therefore has to come from the class channels.

### Channels that are NOT in the backup

There are no announcements, patch-notes, staff-Q&A, bug-report, dungeon, raid, guild-recruitment,
LFG, profession, trade/auction, addon/UI, general or off-topic channels. The consequences for
the extraction plan are in §6.

## 2. `theorycrafting.zip` is truncated — the messages are lost

25,909,788,672 bytes, valid `PK\x03\x04` local-file header, **no end-of-central-directory
record**: the copy stopped mid-transfer. A byte scan of all 25.9 GB for local-file headers
naming a `.json` member found exactly one hit — `theorycrafting/_assets/823974429834477578-622968e4277ac87a.json`,
a Lottie sticker animation. The channel's message export is not in the surviving bytes; in
every other archive the message JSON is written **after** `_assets/`, so it sat in the lost tail.

The 25.9 GB of recoverable images carry no message context, author, date or link, so they
cannot be cited and are unusable under this repository's rules.

**Action required: re-copy `theorycrafting.zip` from the NAS source.** On the evidence of the
other channels this is likely the single most valuable channel for talent builds, rotations
and stat priorities, so it is worth re-copying before Phase D runs.

## 3. Staff roles: the export carries community roles, not the Turtle WoW Team

Every distinct role name across all 3.0 M messages, with the number of messages whose author
carried it:

| role | messages | staff? |
|---|---:|---|
| Streamer | 52,711 | no |
| Local Legend | 31,360 | no |
| Content Creator | 19,281 | no |
| Community Helper | 11,804 | no |
| Nitro Booster | 9,952 | no |
| Redditor | 7,671 | no |
| Community Pillar | 1,928 | no |
| Amigo | 680 | no |
| MWG Team | 680 | no (a community group, not Turtle WoW) |
| carl-bot | 470 | bot |
| **Moderator** | **469** | **yes — the only staff role present** |
| Out of Bounds Radio Team | 61 | no (community radio) |
| Dyno | 4 | bot |

There is **no "Turtle WoW Team", "Admin", "Developer" or "Game Master" role anywhere in the
backup**. The ingester's default `--staff-roles` guess would have tagged nothing useful and
would have mis-tagged nothing either; the correct list for this backup is:

```
--staff-roles "Moderator"
```

That yields roughly **469 staff-tier messages out of 3,004,388 — about 0.016 %**. Practical
consequence: **Discord evidence is almost entirely player-tier.** Where a Discord claim and a
forum staff statement disagree, the forum staff statement wins; Discord cannot supply the
staff-intent tier the forum does. Say so in every document that leans on Discord.

Bots detected and tagged `authority: bot` (excluded from player evidence): Carl-bot (470),
Wordle (5), Dyno (4), WoWAuctions (3), Viggle, John-Bot, Lofi, esmBot (1 each).

The community roles are still useful as a **guide-writer signal** rather than an authority
tier: "Community Helper", "Community Pillar" and "Local Legend" mark players the server
recognised. `synthesis/CONVENTIONS.md` already has a **guide writer** level for exactly this —
use it, and say which role earned it.

## 4. Size policy and how the backup is read

105 GB of archives against 44 GB of free local disk, and the JSON is only **2,246 MB** of it.
`scrape/discord/ingest.py` therefore no longer unpacks whole archives (commit "discord:
ingest"):

- `channel_folders()` extracts **only** the JSON message dumps into `--work-dir`, and writes a
  `.assets.tsv` manifest of the attachment members left inside the zip.
- `AttachmentIndex` reads that manifest, so an attachment resolves to
  `local_path: "zip:<archive>!<member>"` instead of an unpacked file.
- `python3 scrape/discord/ingest.py extract-image <backup> --ref "zip:warrior.zip!warrior/_assets/x.png" --dest out.png`
  pulls a single image out on demand — which is all Phase C and the §2.4 "only cited images
  enter git" rule need.
- `--extract-assets` restores the old full unpack for anyone who has 105 GB spare.

Measured on the three small channels (20,924 messages): 998 bytes per message in
`structured/discord/messages/`, 273 bytes per message in `extracted/discord/`. Projected for
all 3,004,388 messages:

| output | working tree | git-packed (zlib-6 measured) |
|---|---:|---:|
| `structured/discord/messages/` | 3.00 GB | ~0.30 GB |
| `extracted/discord/` | 0.82 GB | ~0.21 GB |

JSONL of this shape compresses about 10×, so **both directories stay in git** (~0.5 GB packed
on top of the existing repo) — the §2.4 escape hatch of dropping `extracted/discord/` is not
needed. Working-tree cost is 3.8 GB; plan for it before cloning.

Not in git: the archives, the unpacked JSON work dir (`**/_unzipped/` and `raw/discord/` are
already in `.gitignore`), and every attachment except the ones a synthesis document cites,
which are copied into `structured/discord/images/<channel-slug>/<message-id>-<filename>`
downscaled to ≤1200 px / ~200 KB.

## 5. Validator

`scrape/validate.py` treats evidence corpora as citation *targets*, never citation *sources* —
`structured/forum/posts/` was already skipped, and `structured/discord/messages/` and
`extracted/discord/` now are too. Without that, every Discord link a player pasted into a
message (usually pointing at one of the channels this backup does not contain) is read as an
unresolvable citation; it produced 45 false failures on the three small channels alone and 72
on the repository at large.

`structured/discord/images.jsonl` and `structured/external-links.jsonl` are curated artifacts
that happen to quote raw message text, so only the **Discord link patterns** are suppressed for
those two; their forum citations stay checked.

Baseline after the change, with `pyyaml` installed (`.venv/`): `files=311 citations=55698
unresolved=0 other_failures=0`.

## 6. Extraction plan — which channels feed which repo files

Phase B–D as written in `scrape/prompts/discord-local-agent.md` assumes the whole server. With
14 class/PvP channels, the plan splits three ways.

### Fully supported

| domain | channels | writes |
|---|---|---|
| Classes (9 agents, one per class) | `druid` `hunter` `mage` `paladin` `priest` `rogue` `shaman` `warlock` `warrior` | `structured/classes/<class>/*.yaml`, `synthesis/classes/<class>/*.md`, `spec-role-matrix.*` |
| PvP | `pvp-general` (to 2025-11), class channels for post-1.18.1 | `*-pvp.yaml`, `synthesis/content/pvp.md` |
| Enchants and consumables | class channels | `structured/classes/<class>/gear.yaml`, `synthesis/classes/<class>/gear.md` |
| Talent builds (image pass) | class channels — 66,000+ images | `structured/discord/talent-builds.jsonl` |

### Partly supported — take what the class channels happen to carry, and say so

| domain | what is available |
|---|---|
| Dungeons and raids | only what players discuss inside class channels (role-specific boss advice, "how do I tank X"). No dedicated instance channels: per-boss tactics, pull orders and skips stay a gap. |
| Rosters, group play, leading | same — class-side fragments only. `structured/content/rosters.yaml` cannot be built from this backup. |
| Leveling | class channels carry leveling specs and routes; `level-one-lunatic` and `twinking` cover level-1 and bracket twinking, not the 1–60 route. |
| Addons, UI, macros | `code-corner` (29,909 messages) is the closest thing — confirm in Phase B whether it is client-side addon/macro work before assigning an agent. |
| Behaviour and culture | class-channel and `pvp-general` conversation only; no general/off-topic channel, so the culture sample is skewed toward class talk. |
| Glossary | supported, drawn from whatever the 14 channels use. |

### Not supported by this backup — record as gaps, do not attempt

- **Staff statements, rules, patch changes, bug confirmations.** No announcements, patch-notes,
  staff-Q&A or bug channel, and only 469 Moderator-tier messages server-wide. `structured/staff-statements.jsonl`,
  `structured/patches/1.18.1-changes.yaml` and `structured/issues.yaml` gain nothing from Discord.
- **Professions and economy.** No profession, trade or auction channel. `structured/content/recipes.yaml`
  and `behavior/economy.*` gain nothing.
- **Guild recruitment and LFG phrasing.** No such channel.

Each of these must be written into the relevant document's gaps section as "not found in
sources — the Discord backup covers only the 14 channels listed in
`scrape/discord/SURVEY.md` §1", not as an absence of evidence in the Discord server.

## 7. Open items before Phase B

1. Re-copy `theorycrafting.zip` (§2).
2. Run the full ingest (`--staff-roles "Moderator"`, guild id is in the dumps).
3. Cross-check `structured/discord/authors.json` against the forum's 21 staff accounts in
   `structured/forum/authors.json`: a Discord author whose name matches a known staff account
   is worth flagging, but a name match alone is **not** proof of identity and must not silently
   upgrade an author's authority tier. Record matches here, decide per account.
