---
title: "Color issue with TankPlates and pfUI"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15254"
topic_id: 15254
forum_id: 18
forum: "AddOns"
author: "Cnas"
author_authority: "player"
posted: "2024-10-19T12:32:00Z"
last_post: "2024-10-19T12:32:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:28:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Color issue with TankPlates and pfUI

## Post 103845 by Cnas — 2024-10-19T12:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103845#p103845 | page 1 | era: pre-1.18.1 -->

Hello friends!

I am using TankPlates (and SuperWoW) with pfUI to color the bar differently for when I have aggro, this works great.

However, I want to change the default aggro color from green to pink, like it had it in Classic WoW.

This seems easy enough to change in the TankPlates.lua. I can change the RGBA from green (0, 1, 0, 1) to pink (1, 0, 1, 1) there.
This works with default nameplates, but not  with pfUI nameplates, it will behave strangely.

It does not change the color to pink, it instead changes it to red. I have tried several different RGBA:s and all changes to red except green and yellow.

So, I am wondering if it is possible to change the aggro color to pink somehow with pfUI nameplates?
I suspect that this will require modifying pfUI:s nameplates.lua, but it seems kind of complex.

Is there anyone out there that could help me with this mystery? :)

