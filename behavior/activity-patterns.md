# Activity Patterns
Sources: player/staff posts describing play times, population, and seasonal events (General f4, Help & Support f3, Announcements f2, Suggestions f14, Guild Recruitment f23, PvP f73); plus a full Python pass over `structured/forum/posts/*.jsonl` (all 161,896 posts, forums f2–f75, dated 2018-09-05 to 2026-05-14) counting post timestamps by UTC hour and weekday. **Caveat up front:** forum-post timing is a proxy for *when people are awake and online enough to browse the forum*, not a direct measurement of in-game peak concurrency — but it is the only corpus-wide, unbiased time signal available, and it agrees directionally with the player-reported population quotes below.
## Corpus-wide histogram: post times by UTC hour
Computed from every post in `structured/forum/posts/*.jsonl` with a parseable `date` field (161,896 posts total). Hour = UTC hour of the post timestamp.

| UTC hour | posts | share |
|---|---|---|
| 00:00 | 5477 | 3.4% |
| 01:00 | 4440 | 2.7% |
| 02:00 | 4048 | 2.5% |
| 03:00 | 3646 | 2.3% |
| 04:00 | 3484 | 2.2% |
| 05:00 | 4032 | 2.5% |
| 06:00 | 5222 | 3.2% |
| 07:00 | 6394 | 3.9% |
| 08:00 | 6911 | 4.3% |
| 09:00 | 7313 | 4.5% |
| 10:00 | 7315 | 4.5% |
| 11:00 | 7909 | 4.9% |
| 12:00 | 8146 | 5.0% |
| 13:00 | 8784 | 5.4% |
| 14:00 | 9226 | 5.7% |
| 15:00 | 9229 | 5.7% |
| 16:00 | 8900 | 5.5% |
| 17:00 | 8324 | 5.1% |
| 18:00 | 7911 | 4.9% |
| 19:00 | 7799 | 4.8% |
| 20:00 | 7677 | 4.7% |
| 21:00 | 7302 | 4.5% |
| 22:00 | 6569 | 4.1% |
| 23:00 | 5838 | 3.6% |

Posting is lowest 02:00–05:00 UTC (3,484–4,048 posts/hour, ~2.3–2.5% of the corpus each) and peaks 14:00–16:00 UTC (8,900–9,229 posts/hour, ~5.5–5.7% each), i.e. **UTC afternoon into early evening** — the window where EU evening and NA daytime/early-afternoon overlap. The trough is deepest at 04:00 UTC (late night EU, pre-dawn NA).

## Corpus-wide histogram: posts by weekday (UTC)
| Weekday | posts | share |
|---|---|---|
| Monday | 24196 | 14.9% |
| Tuesday | 24326 | 15.0% |
| Wednesday | 26180 | 16.2% |
| Thursday | 23277 | 14.4% |
| Friday | 23200 | 14.3% |
| Saturday | 19846 | 12.3% |
| Sunday | 20871 | 12.9% |

Wednesday is the single busiest posting day (26,180, ~16.2%); Saturday is the quietest (19,846, ~12.3%). Weekday posting (Mon–Fri, 121,179 posts, ~74.9%) noticeably outweighs weekend posting (Sat+Sun, 40,717, ~25.1%) — this is a **forum-browsing** pattern (people post more on workdays, when they are at a desk) and should not be read as "the server is quieter on weekends"; the population/raid-night evidence below points the other way for actual in-game play.

## Histogram by author-location region (where a real-world location is given)
20,245 of 161,896 posts (12.5%) carry a non-empty forum profile "Location" field; most of those are in-universe/joke locations ("Tanaris", "Azeroth", "Musty basement") and were excluded. The remainder were bucketed by keyword match into rough real-world regions — this is a coarse, self-reported signal, not a login-time measurement, and sample sizes vary a lot by region:

| Region | matched posts |
|---|---|
| EU | 5869 |
| NA | 4502 |
| SA | 813 |
| RU/EE | 485 |
| CN/Asia | 475 |
| OCE | 231 |

**EU** posting peaks 14:00–16:00 UTC (~300–410/hour) with a long, gentle decline through the evening (still 300+/hour at 22:00 UTC) — consistent with EU-afternoon-through-evening play. **NA** posting has two humps: 13:00–17:00 UTC (NA morning/early afternoon, 228–292/hour) and 00:00–02:00 UTC (US evening prime time, 197–228/hour), with a trough 08:00–11:00 UTC (NA pre-dawn/early morning, 97–124/hour). **CN/Asia** and **OCE** samples are small (475 and 231 posts respectively) and noisier, but CN/Asia shows a late-UTC-night bump (22:00–02:00 UTC ≈ CN daytime, 22–40/hour) and OCE shows its high points at 00:00–03:00 UTC and 22:00–23:00 UTC (both windows correspond to AEST daytime/evening) — treat the OCE numbers as directional only given the sample size. **RU/EE** tracks close to the EU curve, peaking 07:00–19:00 UTC.

## What players and staff say about peak hours
- [Player-0099 (player), 2022-12-29](https://forum.turtlecraft.gg/viewtopic.php?p=31759#p31759): "16:00 Server Time is about when peak hours begin."
- [Player-0224 (player), 2023-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=37282#p37282) (era: pre-1.18.1, before the Ambershire/Tel'Abim realm split): "last nite in prime time was almost 4k players online. They were 2 WSG BG and 1 AB all the time ppl were spamming it."
- [Player-0032 (player), 2021-05-31](https://forum.turtlecraft.gg/viewtopic.php?p=10735#p10735) (**player claim, single source**, small-population era): "Population is around 100-200 in the early hours. And around 250-350 later in the day. We had a population peak of 437 players online! Dependent of EU time zones. The server is located in UK and the server time is GMT+1."
- [Player-0225 (player), 2026-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=170988#p170988): "Decent pop (2k+) during peak hours (EU evenings)... Less activity outside of peak hours (but this makes farming easier...?)"
- [Player-0225 (player), 2026-03-16](https://forum.turtlecraft.gg/viewtopic.php?p=170990#p170990): "During peak hours, there is plenty of (but not excessive) open world PvP contesting for herbs in hotspots like Burning Steppes or Winterspring... I'm NA, so often I play during off-peak hours when EU is sleeping. Then, herbing is usually peaceful (and profitable)."
- [Player-0227 (player), 2025-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=150059#p150059): "I'm a NA player; population during the evening when I play is around 850-925... Contrast that with Ambershire who's hit 11,000+. When I logged in last night during off-times, the server pop was 4900."
- [Player-0227 (player), 2025-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=150083#p150083): "It may not be during peak hours but it feels like it during the off, NA, hours."
- [Player-0228 (player), 2022-11-24](https://forum.turtlecraft.gg/viewtopic.php?p=29801#p29801): "With how open Twow is on its populations, you can also use /who in game at peak hours and figure it out live." (links `turtlecraft.gg/#/population-graph` and `turtle-census.org`)

**Consensus** across these player posts (2021–2026, spanning the single-realm era through the multi-realm Nordanaar/Tel'Abim/Ambershire era): peak hours are driven by **EU evening** (~16:00–22:00 server/UTC-ish, varies by post), matching the corpus-wide UTC histogram's 14:00–16:00 UTC peak; NA prime time (~00:00–02:00 UTC) is a secondary, smaller bump; the deepest lull is UTC early morning (EU night, before NA wakes).

## Server time and timezone confusion (contested/unclear in sources)
- [Player-0126 (player), 2023-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=49196#p49196) — **contested/unresolved in sources**: no staff reply in this thread clarifies the discrepancy; it is left as player confusion. ".server info gives 13:57. My local time is 15:57 (GMT+2) Norway. So the difference is 2 hours. When i ask any guild their raid time they all add +1 to server time not +2. For an example, guild raid time '19:30 PM server time' turned into 20:30 as guild master explained and not 21:30 as i thought."
- [Player-0229 (player), 2025-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=163325#p163325): "Man I've been playing for 20 years and I never knew there were different time zones in the game."
- [Player-0230 (player), 2025-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=163343#p163343): "That's because it's a Turtle WoW thing, not a Blizz thing."

Staff maintenance announcements consistently state times in **GMT+0** (see maintenance table below), and one player thread ([Player-0032 (player), 2021-05-31](https://forum.turtlecraft.gg/viewtopic.php?p=10735#p10735)) describes the server as "located in UK" running GMT+1 — the two are consistent with the UK's seasonal GMT/BST switch (winter = GMT+0, summer = GMT+1/BST), which likely also explains the player's 1-vs-2-hour guild-raid-time discrepancy above, though **no source in this corpus explains the DST mechanism explicitly — this reconciliation is our inference, not a confirmed source claim.**

## Regions and timezones players self-report
- [Player-0231 (player), 2018-09-20](https://forum.turtlecraft.gg/viewtopic.php?p=170#p170): "Just wanted to check in and see if we had much representation from the Oceania region. Would love to find a casual group of people to level with in a friendly guild in this timezone."
- [Player-0232 (player), 2018-09-25](https://forum.turtlecraft.gg/viewtopic.php?p=260#p260): "Hey mate, Kiwi here so will be similar timezone to you (if not the same) - will be keen for some levelling etc etc as well"
- [Player-0233 (player), 2018-10-05](https://forum.turtlecraft.gg/viewtopic.php?p=452#p452): "I live in Thailand so not exactly the same time zone, but always better than EU or NA."
- [Player-0234 (player), 2022-08-07](https://forum.turtlecraft.gg/viewtopic.php?p=21303#p21303): "I would love to build a community for players from the Asia Pacific and Oceanic region to see if we can get some content (both PvE and PvP) going on in our timezone... Looking forward to embracing the latency together."

EU and NA are by far the best-represented regions in both the location-field histogram and general forum chatter; OCE, CN/Asia, RU and SA players are a recurring but consistently minority presence who explicitly organize around off-peak-for-EU/NA windows. Realm associations are only loosely documented in this corpus: Tel'Abim (PvP) is discussed as having both EU-evening and NA-daytime activity (see peak-hours quotes above); no source gives a clean per-realm regional breakdown for Nordanaar or Ambershire. **Not found in sources: an explicit CN-specific realm or regional latency fix** beyond player requests for one (see `activity-patterns.jsonl` category `region`, and compare the raid-lag quotes below).

## Raid nights and session lengths
- [Player-0053 (player), 2023-11-13](https://forum.turtlecraft.gg/viewtopic.php?p=77191#p77191) (**single source**, one guild's schedule, f23 Guild Recruitment): "We raid W/Th/Sat/Sun 18:00 server time with Thursday as our progression raid night, we also run additional weekend raids for 10/20 man instances."
- [Player-0235 (player), 2023-01-06](https://forum.turtlecraft.gg/viewtopic.php?p=32177#p32177): "Can commit to 1-2 raid nights a week."
- [Player-0142 (player), 2024-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=91145#p91145): "One thing I noticed regarding most guilds is a stuffed weekly raid schedule. For gear-optimization it is important but it also leads to players being burnt-out... I've seen top Naxx speedrunner guilds putting MC to their schedule [as well]. Gold farm + legendaries."
- [Player-0236 (player), 2023-08-25](https://forum.turtlecraft.gg/viewtopic.php?p=59004#p59004): quoting another player: "Bumping this because another raid night ruined by lag... 3/4 of our guild is sitting at over 1000ms during our raid times."

**Take-away:** raid nights recur on a fixed weekly schedule per guild (evening, "server time"), commonly 1–4 nights/week depending on progression ambition; Thursday appears as an explicit "progression" night in the one concrete schedule found. Not found in sources: a corpus-wide typical session-length figure — no post gives an average hours-per-session number; the raid-schedule and lag threads imply multi-hour sessions but never state a duration directly.

## Maintenance windows (official, Announcements f2)
| Date | Scope | Time (as announced) | Duration |
|---|---|---|---|
| 2023-05-26 | planned maintenance | May 29, 2023, 09:00 AM GMT | ~3 hours |
| 2023-07-13 | unplanned outage (hosting provider) | until 2023-07-13 01:00 UTC | unspecified, hours |
| 2023-10-02 | patch 1.17.0 release maintenance (EU realm) | 2023-10-02 | 6–10 hours |
| 2025-08-14 | patch-day maintenance, staggered by realm cluster | Aug 15–16, 2025 | ~6 hours each, see below |

- [Staff-09 (staff), 2023-05-26](https://forum.turtlecraft.gg/viewtopic.php?p=47557#p47557): "Coming monday (May 29) there will be a planned maintenance at 09:00 AM GMT. During this time it will not be possible to login or play... This downtime is expected to last no longer than 3 hours."
- [Staff-07 (staff), 2023-07-13](https://forum.turtlecraft.gg/viewtopic.php?p=53221#p53221): "Our hosting provider is experiencing connection outages. If you are playing in Hardcore mode, please log out in a safe spot and refrain from logging back in until further notice."
- [Staff-07 (staff), 2025-08-14](https://forum.turtlecraft.gg/viewtopic.php?p=145407#p145407) (**official, most detailed maintenance example in the corpus**): "This Friday, August 15, the European realms will be down starting at 10 AM, with an expected downtime of about 6 hours. As usual, I want to warn our Hardcore players not to play on patch release day, as the servers are likely to be unstable for up to 24 hours after release. Maintenance schedule for the entire network: Nordanaar, Tel'Abim — Aug 15, 9AM GMT+0 servertime (~6h). South Seas — Aug 16, 1PM GMT+0 servertime (~6h). Karazhan, Blood Ring, Ravenstorm — Aug 16, 7PM GMT+0 servertime (~6h)."

Maintenance windows are announced in advance for planned work, staggered across realm clusters roughly a day apart on major patch days, and staff explicitly and repeatedly warn Hardcore-mode players to avoid playing during the ~24 hours of post-patch instability that typically follows a release. A bot honoring Hardcore-safety norms should treat "day of and day after a major patch" as a low-activity window regardless of the exact posted hours.

## Seasonal and in-game events
- [Staff-07 (staff), 2018-12-18](https://forum.turtlecraft.gg/viewtopic.php?p=1610#p1610): "The Feast of Winter Veil is upon us, and Greatfather Winter is busy spreading holiday cheer in major cities across the land!... Keep Calm & Hug Moonkins."
- [Player-0238 (player), 2025-12-11](https://forum.turtlecraft.gg/viewtopic.php?p=162464#p162464) (still running in the post-1.18.1 era, confirms Winter Veil recurs yearly with a daily-boss mechanic): player collecting drop data from the "Sack of Winter Veil Presents" (reward for killing daily raid boss "Snowball"): Blitzen (pet), Empty Festive Bag, Fashion Coin x10, Greatfather's Winter Ale x5, and more.
- [Staff-07 (staff), 2020-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=4949#p4949) (announced late January, runs 3 weeks — notably earlier than vanilla's usual mid-February window): "Love is in the Air! Show your appreciation to your dearest friends and beloved raid buddies! For the next 3 weeks, Speedy's Shop will provide two non-soulbound gifts..."
- [Player-0239 (player), 2020-02-03](https://forum.turtlecraft.gg/viewtopic.php?p=4999#p4999) (**player suggestion, not confirmed as implemented policy**): "If you guys plan to bring it back from time to time, i'd suggest adding it every Hallow's End."
- [Player-0241 (player), 2026-02-13](https://forum.turtlecraft.gg/viewtopic.php?p=168124#p168124): "These Level One Lunatic Challenge Titles literally require Lunar Festival. Starting on February 16th... The only thing hard about them is it requires logging on during this event."
- [Player-0241 (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168371#p168371): "The Lunar Festival has officially begun. Do not miss out on these titles for an entire year."
- [Player-0242 (player), 2022-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=28706#p28706) (Darkmoon Faire location/timing is apparently not obvious/fixed enough for players to track without asking — **exact recurrence rule not found in sources**): "Hello, anyone know the Darkmoon Faire schedule and location for November?"
- [Player-0243 (player), 2025-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=152669#p152669): "I'am on the third quest, where you need to get Scarlet Schnapps from Cathedral. I got it, went back to Ratchet but the Brewfest is gone."
- [Player-0155 (player), 2024-04-27](https://forum.turtlecraft.gg/viewtopic.php?p=93616#p93616) (recurring minigame rather than a seasonal event; a social/twink hotspot): "They are rare (1.429%) drop from goblin/gnome prize box. You need to win race against some player... Will you get it or not depends on your luck. There are a lot of players there, so you will have some competition."
- [Player-0244 (player), 2022-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=15906#p15906): "Or we could just use the Mirage Raceway as the official tent place... it would put some more life in the racing minigame."

**Turtle-specific custom events** referenced in the corpus beyond the standard Blizzard holiday calendar: "Scourge Invasion" (custom, Hallow's End-adjacent), "Snowball" daily raid boss during Winter Veil, and the Mirage Raceway minigame/social hub. Not found in sources in this pass: Beach event, Darkmoon anniversary-specific programming, or an exact yearly Turtle WoW anniversary-event description (the server's 3rd anniversary is referenced only in passing in the maintenance/announcements search — list as a gap).

## Gaps — not found in sources
- No post gives an explicit average session length in hours. Not found in sources.
- No staff post explains the GMT vs GMT+1 server-time discrepancy players report ([Player-0126 (player), 2023-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=49196#p49196)); our DST explanation above is inference, not sourced.
- No source gives a fixed, published Darkmoon Faire schedule ([Player-0242 (player), 2022-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=28706#p28706)) — players ask for it rather than citing one.
- No source gives an explicit description of a "Beach" event by that name, or a detailed anniversary-event program. Not found in sources.
- No source gives a clean per-realm regional population breakdown (e.g. "Nordanaar is X% EU"). Not found in sources.

## Patterns for bots
1. **Default login window:** bias sessions toward 12:00–20:00 UTC, the corpus-wide peak band (§ histogram), which lines up with EU afternoon/evening — the single best-evidenced peak in this corpus.
2. **Secondary window:** add a smaller NA-prime-time presence around 22:00–02:00 UTC for bots simulating NA players, per the regional histogram and the NA-vs-EU population quotes above.
3. **Weekday bias for forum-adjacent behavior** (guild recruitment posts, forum browsing) should lean Mon–Fri; **in-game raid attendance** should instead spike on the specific weekday nights a bot's simulated guild claims (e.g. "W/Th/Sat/Sun 18:00 server time", §raid nights) — these are different signals, don't conflate them.
4. **Avoid the 02:00–05:00 UTC trough** for anything but a small OCE/CN-flavored character — this is the corpus-wide quietest period.
5. **Go dark around patch-day maintenance.** Treat the day of and ~24 hours after any major patch release as a low/no-activity window, especially for a Hardcore-flavored character — staff explicitly and repeatedly warn real Hardcore players off logging in during this instability window (§maintenance).
6. **Seasonal awareness:** log in more during Winter Veil (Dec), Love is in the Air (late Jan–mid Feb), Lunar Festival (mid-to-late Feb, exact start "Feb 16" seen once), Brewfest (Sept), and treat Darkmoon Faire as a recurring-but-variable-location draw players have to ask about, not a fixed weekly date to hard-code.
7. **Raid-night cadence:** if simulating a raiding character, keep a fixed weekly raid night in guild-server evening hours (18:00 server time seen in the one concrete example) rather than raiding at random times — this matches how real guilds schedule, and 1–4 nights/week is the realistic range from recruitment posts.
8. **Uptime shape:** avoid perfectly flat, always-on presence (see `rules-and-hard-limits.md` §8 on "100+ consecutive hours" as a reported red flag) — real play clusters into sessions with human-length gaps, concentrated around the peak windows above.

## What not to do
- Do not schedule a bot's "prime" activity in the 02:00–05:00 UTC trough unless deliberately simulating a small-population regional niche (OCE/CN) — it reads as anomalous against the corpus-wide pattern.
- Do not keep a character online through an announced maintenance window or immediately during the post-patch instability period — real Hardcore players are explicitly told not to (§maintenance), and doing so anyway is a tell.
- Do not treat weekday-vs-weekend forum-posting volume as a proxy for in-game population — the corpus's own weekday-heavy posting skew is a forum-browsing artifact, not evidence the game itself is quieter on weekends; several peak-hour quotes above describe strong weekend and evening activity.
- Do not assume a single global "server time" reconciles cleanly with every player's local time — even players themselves get this wrong in threads ([Player-0126 (player), 2023-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=49196#p49196)) and disagree on the correct offset; don't hard-code an unsourced conversion rule into bot logic.
