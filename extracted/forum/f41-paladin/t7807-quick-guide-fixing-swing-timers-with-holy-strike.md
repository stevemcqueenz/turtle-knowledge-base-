---
title: "(Quick guide) Fixing swing timers with Holy Strike"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7807"
topic_id: 7807
forum_id: 41
forum: "Paladin"
author: "Getplucked"
author_authority: "player"
posted: "2023-06-14T20:12:00Z"
last_post: "2023-06-14T23:21:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T07:59:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# (Quick guide) Fixing swing timers with Holy Strike

## Post 50050 by Getplucked (Patch Note Conspiracy Theorist) — 2023-06-14T20:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50050#p50050 | page 1 | era: pre-1.18.1 -->

As Paladin players likely know, most swing timer addons are broken with Holy Strike, in that when you use it, the addon does not think you swung your weapon and thus does not show a swing timer.

I found a way to fix this with GryllsSwingTimer, and it looks like similar things might work for other swing timer addons.

What you do is just open the main .lua file (GryllsSwingTimer.lua) and go down to line 214. You should see a function called CombatSpells, listing a few abilities that work on next weapon swing. You just have to add Holy Strike to this list, like this:

![Image](https://i.imgur.com/EJTYJK5.png)

And now the addon will properly show your swing timer when you use Holy Strike.

I'm fairly certain this works with SP_Swingtimer as well. Just haven't been able to test it because that addon is randomly refusing to work/load for me.

## Post 50067 by Ghola (Patch Note Conspiracy Theorist) — 2023-06-14T23:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50067#p50067 | page 1 | era: pre-1.18.1 -->

nice tip, works with zui's swing timer as well

