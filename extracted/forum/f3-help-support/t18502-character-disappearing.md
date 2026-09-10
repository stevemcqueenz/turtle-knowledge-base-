---
title: "Character disappearing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18502"
topic_id: 18502
forum_id: 3
forum: "Help & Support"
author: "Tatuzka"
author_authority: "player"
posted: "2025-04-09T21:49:00Z"
last_post: "2025-04-11T09:36:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:45:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Character disappearing

## Post 126219 by Tatuzka — 2025-04-09T21:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126219#p126219 | page 1 | era: pre-1.18.1 -->

Hey, i noticed that in some houses/areas/caves your character disappears and some mobs too sometimes, making them impossible to loot. Like for example its REALLY bad in the Kobold mine in the Human starting area.

Any idea when the fix for this is incoming, since it really kills the mood to play when it happens so often in some places.

Love Turtle WoW otherwise so far!

~Cheers!

## Post 126222 by Tatuzka — 2025-04-09T22:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126222#p126222 | page 1 | era: pre-1.18.1 -->

I found a solution that seems to have helped and fixed this issue! Answer below:

"Sorry to necro bumping just want to say this helped, if anyone is experiencing this issue, here is what I did:

It seems to only happen if using VanillaFixes, you need to edit the dxvk.conf file.

In the file you will see d3d9.maxFrameRate remove the # to uncomment it and set to 120.
Code: Select all

d3d9.maxFrameRate = 120
Before my fps was 400+ and causing my character to disappear underground, tunnels, Ironforge etc, adding this dps cap solved the issue and tbh 120 is still just as smooth."

The config file is in your downloaded turtle wow file.

Credit to Wollow for finding this fix btw!

## Post 126425 by Vanth (Turtle WoW Team) [STAFF] — 2025-04-11T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126425#p126425 | page 1 | era: pre-1.18.1 -->

Hello, you need to set the render value to 777 in the launcher, or if you don't have the launcher it is config.wtf in the WTF folder. Set farclip to 777. This should fix the issue, have a great day.

