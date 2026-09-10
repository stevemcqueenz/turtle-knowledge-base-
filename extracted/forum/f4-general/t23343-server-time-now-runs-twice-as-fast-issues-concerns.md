---
title: "Server Time Now Runs Twice as Fast – Issues & Concerns"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23343"
topic_id: 23343
forum_id: 4
forum: "General"
author: "Pizzayo"
author_authority: "player"
posted: "2025-12-19T23:46:00Z"
last_post: "2025-12-25T12:42:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:38:04Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Server Time Now Runs Twice as Fast – Issues & Concerns

## Post 163303 by Pizzayo (Barrens Chat Casualty) — 2025-12-19T23:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163303#p163303 | page 1 | era: 1.18.1-announced-pre-release -->

I’m not sure how many people have noticed, but the in-game server time (the one shown in the UI, e.g. via pfUI -- the time reported by .server info is unaffected) is currently acting strange. It’s advancing at twice the speed of real-world time.

On top of that, things are currently even worse: **different players are seeing different server time values**. A staff member confirmed this part is an unintended bug and will be fixed, but there’s no ETA as far as I know.

I submitted [a bug report](https://turtlecraft.gg/bug-report?id=18395) about this on Nov 9. On Dec 17 it was closed, with the explanation that the faster server time was an intentional change to help players in distant time zones who mostly experience night time in-game. I replied with my concerns and asked the team to reconsider and I was told to take this topic to the forums.

So I’m posting here to ask again, respectfully:
 **Could the Turtle team please consider reverting the server time back to normal?**

I (and others I’ve talked to) feel that making server time run twice as fast causes more problems than it solves:

1. Server time becomes mostly meaningless. Scheduling raids or events by server time doesn’t really work anymore, since the same time happens twice per day.
2. Right now, server time isn’t even consistent between players, which makes coordination even harder until the bug is fixed.
3. It breaks addons that rely on GetGameTime(). Speaking as an addon author myself, this change broke existing logic that had worked reliably for a long time. While workarounds are technically possible, expecting every addon to adjust to an intentionally altered server time seems unreasonable.
4. The server has long had different in-game timezones -- Kalimdor and Eastern Kingdoms being offset by 12 hours. This already allowed players to experience both day and night depending on which continent they play on.
Overall, speeding up server time feels like a very disruptive workaround for a relatively minor issue -- one that was largely addressed already through in-game timezones. The current bug with inconsistent server time between players just makes the situation worse.

I’d be interested to hear what others think, and please let me know if I’m missing something.

*Last edited by Pizzayo on Mon Dec 22, 2025 11:33 am, edited 2 times in total.*

## Post 163325 by Beardozer — 2025-12-20T06:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163325#p163325 | page 1 | era: 1.18.1-announced-pre-release -->

Man I've been playing for 20 years and I never knew there were different time zones in the game.

## Post 163343 by Aalena (Barrens Chat Casualty) — 2025-12-20T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163343#p163343 | page 1 | era: 1.18.1-announced-pre-release -->

> **Beardozer wrote: Sat Dec 20, 2025 6:18 am**
> Man I've been playing for 20 years and I never knew there were different time zones in the game.

That's because it's a Turtle WoW thing, not a Blizz thing.

## Post 163713 by Lirithiel — 2025-12-25T12:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163713#p163713 | page 1 | era: 1.18.1-announced-pre-release -->

Even after the December 24 maintenance, which claimed that the server time had been fixed, it's still not working as intended. Even the cycles are out of whack. I am two hours ahead of server time and roughly in-sync with eastern Kingdoms (day -> day) but now (Dec 25 12:40) it's night-time in  Eastern Kingdoms. I know it's messed up because I would normally fish in Feralas at 4-6am ST (6-9pm my time) before the fish changed up. So it should be night-time right now in Kalimdor and day-time in Eastern Kingdoms if memory serves.

