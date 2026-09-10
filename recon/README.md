# Phase 0 recon: turtlecraft.gg (fetched 2026-09-10)

Checkpoint report before the full crawl. Nothing beyond ~30 probe requests was fetched.

## Headline facts

- **Turtle WoW has shut down.** The Announcements thread "A Journey's End" (Torta, Turtle WoW Team, posted 2026-04-18) says the game servers went offline on 2026-05-15 and that **the website, forums and social media will be closed on 2026-10-16**. Until then all realm timelines were moved to the final progression patch. Source: https://forum.turtlecraft.gg/viewtopic.php?t=24891
- That gives a hard archival deadline of roughly five weeks from today.
- Forum posts stop at 2026-05-14 (last post in the Atom feed). Nothing new is being written; the crawl is a one-time archive.

## Site map

### Main site (turtlecraft.gg)
Laravel-style static marketing/feature pages, server-rendered HTML (20-50 KB of text each). No sitemap.xml (404). No news/blog section on the main site; news and patch notes live on the forum.

Pages found in navigation (English): achievement-titles, additional-transport-routes, artworks, bug-tracker, challenges, character-customizations, class-race-combinations, classic-dungeons-update, client-interface-improvements, community-artworks, dynamic-mount-speed, goblins, guild-banks, guild-quarters, hardcore, high-elves, jewelcrafting, logos, new-factions-and-quests, new-locations-and-maps, new-races, pets-and-mounts, player-versus-player-content, radio, raids-and-dungeons, remastered, roleplay, rules, seasonal-events, sound-design, survival-and-gardening, terms-of-service, transmogrification, tshirt-designs, watch. About 35 pages.

Language variants exist (/de, /es, /pt, /ru, /zh_cn and /language/xx). Plan: skip them, they duplicate the English content.

Status of probes: most pages 200. `/bug-tracker` returns HTTP 500 (three tries). `/hardcore` times out after 60 s (three tries). Both are worth retrying later during the crawl.

Patch-note posts embed images from `https://turtlecraft.gg/images/patch_1181/...` (55 images on page 1 of the 1.18.1 thread). Optional to fetch; they are not HTML.

### Forum (forum.turtlecraft.gg)
phpBB 3.x with the PBWoW 3.2.1 style. Guest access to all listed forums. Standard phpBB URLs:

- forum listing: `viewforum.php?f=<id>&start=<n>`, 35 topics per page
- topic: `viewtopic.php?t=<id>&start=<n>`, 35 posts per page, post anchors `#p<id>`
- print view: `viewtopic.php?t=<id>&view=print&start=<n>`, ~20-30 KB instead of ~180-240 KB, but it drops the author rank/group information needed for authority tagging, so the full view is the primary source
- Atom feeds: `app.php/feed`, `app.php/feed/forum/<id>`, `app.php/feed/topic/<id>` (recent entries only, with ISO-8601 UTC timestamps)
- phpBB appends `sid=<hex>` to links for cookie-less clients; the crawler must strip it when normalizing URLs
- displayed post times are UTC for guests (verified against the Atom feed timestamp of post 176402)
- author authority signals per post: `<dd class="profile-rank">Turtle WoW Team</dd>` and username colour `#8dc63f`; regular users carry post-count ranks such as "Barrens Chat Casualty"; per-user profile pages (`memberlist.php?mode=viewprofile&u=<id>`) are reachable but not needed
- post content is in `<div class="content">`, dates in `<p class="author">... &raquo; Fri Oct 03, 2025 10:13 am`

Forum tree with sizes (from the index page, 2026-09-10):

| f | Category | Forum | Topics | Posts | Listing pages | Topic pages (est.) |
|---|---|---|---|---|---|---|
| 2 | Official Information & Development | Announcements | 102 | 7320 | 3 | 309 |
| 75 | Official Information & Development | Remastered Client: Unreal Engine 5 | 8 | 687 | 1 | 28 |
| 63 | Official Information & Development | Patch Notes & Changelog | 234 | 9200 | 7 | 491 |
| 70 | Official Information & Development | Itemization | 18 | 1188 | 1 | 52 |
| 3 | Official Information & Development | Help & Support | 4624 | 16648 | 133 | 4968 |
| 74 | Official Information & Development | Everlook Broadcasting Co. | 40 | 478 | 2 | 53 |
| 4 | Community | General | 3106 | 25500 | 89 | 3746 |
| 14 | Community | Suggestions | 8395 | 61142 | 240 | 9903 |
| 22 | Community | Streams & Videos | 141 | 435 | 5 | 150 |
| 23 | Community | Guild Recruitment | 316 | 1164 | 10 | 341 |
| 50 | Community | Roleplay Guild Recruitment | 73 | 384 | 3 | 82 |
| 28 | Community | Raids | 102 | 786 | 3 | 122 |
| 33 | Community | Professions | 133 | 645 | 4 | 148 |
| 29 | Community | Modding | 312 | 6378 | 9 | 486 |
| 18 | Community | AddOns | 782 | 4302 | 23 | 883 |
| 19 | Community | Lore | 126 | 1116 | 4 | 155 |
| 73 | Community | Player vs Player | 245 | 3406 | 7 | 336 |
| 37 | Community | Hardcore Lounge | 233 | 2217 | 7 | 290 |
| 17 | Community | The Storyteller’s Corner | 155 | 823 | 5 | 175 |
| 72 | Community | Level One Lunatics | 27 | 261 | 1 | 34 |
| 32 | Community | Creative Corner | 142 | 1117 | 5 | 170 |
| 40 | Classes | Warrior | 191 | 1464 | 6 | 228 |
| 41 | Classes | Paladin | 309 | 3094 | 9 | 389 |
| 42 | Classes | Druid | 225 | 2060 | 7 | 278 |
| 43 | Classes | Mage | 101 | 683 | 3 | 118 |
| 44 | Classes | Priest | 178 | 1135 | 6 | 206 |
| 45 | Classes | Hunter | 337 | 2940 | 10 | 412 |
| 46 | Classes | Warlock | 155 | 1083 | 5 | 182 |
| 47 | Classes | Rogue | 149 | 995 | 5 | 174 |
| 48 | Classes | Shaman | 289 | 3001 | 9 | 367 |
| 68 | Non-English Forums | Chinese | 417 | 1578 | 12 | 451 |
| 55 | Non-English Forums | Russian | 324 | 1286 | 10 | 352 |
| 56 | Non-English Forums | German | 60 | 231 | 2 | 65 |
| 66 | Non-English Forums | Spanish | 97 | 288 | 3 | 103 |
| 57 | Non-English Forums | Ukrainian | 15 | 86 | 1 | 18 |

Totals: 35 forums, 22,161 topics, 165,121 posts. Estimated fetches: ~650 listing pages plus ~26,000 topic pages (upper bound; real count is lower since most topics fit on one page). Non-English forums are 913 topics / 3,469 posts of that.

Key threads spotted in Patch Notes & Changelog (f=63):

| Topic | Title | Posted | Replies |
|---|---|---|---|
| t=22214 | Patch 1.18.1 — Nightmares of Ursol | 2025-10-03 | 498 (15 pages) |
| t=15157 | Patch 1.17.2 & Beyond — Class & Gameplay Changes | 2024-10-12 | 1944 |
| t=17688 | Patch 1.18.0 — Scars of the Past | 2025-02-22 | 114 |
| t=12462 | Patch 1.17.2 — Tower of Karazhan | 2023-12-28 | 275 |
| t=10910 | Patch 1.17.1 — Labor and Legacy | 2023-10-15 | 134 |
| t=5391 | Patch 1.17.0 — Beyond the Greymane Wall | 2023-01-21 | 514 |
| t=4442 | Patch 1.16.4 — Anchor's Fall | 2022-09-30 | 59 |
| t=3334 | Patch 1.16.1 — Hateforge Quarry | 2022-07-24 | 62 |
| t=2253 | Patch 1.16.0 — Mysteries of Azeroth | 2021-11-22 | 45 |
| t=13030 | Development Roadmap | 2024-02-08 | 224 |
| t=24891 | A Journey's End (shutdown announcement) | 2026-04-18 | 349 |

### Other official subdomains

| Host | Status | Note |
|---|---|---|
| database.turtlecraft.gg | **dead**: no DNS record | the item/spell/quest database is gone; not crawlable |
| talents.turtlecraft.gg | **down**: Cloudflare 525 (origin TLS failure) | talent calculator; will retry during the crawl |
| sa.turtlecraft.gg | redirects to a Discord invite | nothing to crawl |
| launcher.turtlecraft.gg | launcher binary download | skip |
| eudl.turtlecraft.gg/twmoa_1180.zip | client download | skip (binary, you already have the client) |

## robots.txt and politeness

Both turtlecraft.gg and forum.turtlecraft.gg serve the Cloudflare-managed robots.txt: `User-agent: *` → `Allow: /`, no Crawl-delay, with explicit `Disallow: /` for named AI crawlers (ClaudeBot, GPTBot, CCBot, Bytespider, Amazonbot, Applebot-Extended, Google-Extended, meta-externalagent) and the Cloudflare content signal `search=yes, ai-train=no, use=reference`. Our descriptive user agent (`TurtleKB-recon/0.1 (+knowledge base research; contact: <email>)`) falls under `*` and is allowed. The content signal forbids AI training use; this project is a reference knowledge base, which is the permitted "reference" use. Worth being aware of.

Observed response times 0.7-4.5 s per page. Cloudflare sits in front; no challenge page was served to curl.

## Gated or blocked

- `memberlist.php?mode=team` (staff list) requires login. Not fetched. Staff will be identified from the per-post "Turtle WoW Team" rank instead.
- Search (`search.php`) and user profile listing likely guest-restricted or expensive; not needed.
- `/bug-tracker` (HTTP 500) and `/hardcore` (timeout) on the main site.
- database and talents subdomains as above.

## External resources found (not crawled; need your go-ahead)

- Turtle WoW fandom wiki: https://turtle-wow.fandom.com/wiki/Turtle_WoW_Wiki (linked from the main site footer; likely the best remaining structured source for items/NPCs/quests now that database.turtlecraft.gg is dead)
- Discord: https://discord.gg/dENFjzczez and https://discord.com/invite/2vpBT4Ns5h
- YouTube channel https://www.youtube.com/@TurtleWoWTeam, plus embedded YouTube videos and Twitch links inside patch threads
- Bluesky, TikTok, Spotify, SoundCloud, Apple Music (soundtrack)
- Homepage links to a few unrelated news pages (FiveM, Project 1999, Homecoming) used in an editorial about Blizzard; ignore
- i.postimg.cc image hosting in posts

## Proposed crawl plan (Phase 1)

1. **One rate-limited fetcher process, not many parallel fetchers.** A single crawler daemon reads `scrape/manifest.jsonl`, fetches with a token bucket at 1.0 req/s (burst 2), exponential backoff on 429/5xx/timeouts, and a global pause if the error rate over the last 50 requests exceeds 20%. Subagents work in parallel on **parsing and synthesis** of already-fetched sections (no network), which keeps the combined request rate at one process's rate by construction.
2. **Priority order** in the queue: Patch Notes & Changelog (f=63) → Announcements (f=2) → Itemization (f=70) → nine class forums → Raids, Professions, PvP, Hardcore Lounge, Help & Support → General, Guild Recruitment, AddOns, Lore, Suggestions (largest, 8.4k topics, lowest value per page) → remaining community forums → main-site pages → non-English forums last (or skipped, your call).
3. **Discovery**: crawl every listing page of a forum first (650 pages total), extract topic IDs, titles, authors, reply counts and last-post dates, and enqueue `ceil((replies+1)/35)` pages per topic. Reply counts make the total known up front.
4. **Storage**: full-view HTML, gzipped, under `raw/forum/f<id>/t<id>-p<n>.html.gz` and `raw/site/<slug>.html.gz`. Estimated ~5 GB uncompressed, ~500 MB gzipped. Git commits per section.
5. **Timing**: ~27,000 requests at 1 req/s is about 7.5 hours; at 1.5 req/s about 5 hours. Suggested: 1 req/s for the first hour to confirm the server copes, then 1.5 req/s if error rate stays near zero.
6. **Not fetched** unless you say so: images/attachments, language variants of the main site, user profiles, the client and launcher binaries, anything gated.

## Decisions I need from you

1. Go/no-go for the crawl at ~1-1.5 req/s with the priority order above.
2. Non-English forums (913 topics): crawl or skip?
3. Suggestions forum (8,395 topics, 61k posts, ~10k pages, ~40% of the whole crawl): crawl fully, only the first page of each topic, or defer to the end?
4. Raw HTML in git: gzipped full HTML (~500 MB) is the default. Say if you would rather keep raw out of git.
5. The fandom wiki as a second pass to replace the dead database subdomain: yes/no (separate crawl, separate go-ahead).
6. Patch-note images from turtlecraft.gg/images: fetch (a few hundred files) or skip.
