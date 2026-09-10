---
title: "FUll Screen - cursor"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16159"
topic_id: 16159
forum_id: 3
forum: "Help & Support"
author: "battlew2"
author_authority: "player"
posted: "2024-11-27T02:30:00Z"
last_post: "2024-11-29T21:11:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:49:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# FUll Screen - cursor

## Post 110091 by battlew2 — 2024-11-27T02:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110091#p110091 | page 1 | era: pre-1.18.1 -->

HI i have just installed the game.

I'm trying to go Full-screen mode but the monitor become black. I have already googled but found no solution.
The issue playing windowed full screen is that i have two monitors. When i move my cursor out of the area of the first monitor, it goes to the second monitor ( which is desktop with icons  .

How to fix this ?
thanks

## Post 110343 by Vanth (Turtle WoW Team) [STAFF] — 2024-11-28T11:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110343#p110343 | page 1 | era: pre-1.18.1 -->

Please find the config located in your game folder: WoW/WTF/Config.wtf
Open it and add the following lines:
SET gxWindow "1"
SET gxMaximize "1"

Save it and close it.

## Post 110379 by battlew2 — 2024-11-28T15:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110379#p110379 | page 1 | era: pre-1.18.1 -->

i think you didnt get what i mean. I can play windowed mode, but i want to play full screen because the cursors go beyond the border of main monitor, it goes to the second monitor.

the "solution" you have posted before i have already found in other website, those two lines (windowed mode) are already inside my config. But i wanna go to Full screen mode :)

i hope i'm being clear

*Last edited by battlew2 on Thu Nov 28, 2024 3:45 pm, edited 1 time in total.*

## Post 110443 by Jan125 (Barrens Chat Casualty) — 2024-11-29T04:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110443#p110443 | page 1 | era: pre-1.18.1 -->

As DirectX 9 becomes ever older, driver support for it becomes ever worse.
I think Fullscreen Mode may be one of these features that have been broken unintentionally.

If you haven't already, try installing DXVK to your WoW directory.

If that didn't help, try DgVoodoo, but be aware that this affects performance much more negatively, and requires more user setup.

Amd lastly, if all else fails, there are the Wine replacement .dlls, but they usually impact performance AND stability negatively, except for 2D games.

These tools are not guarantees that it may work again, but it's worth giving it a shot.

## Post 110591 by battlew2 — 2024-11-29T21:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110591#p110591 | page 1 | era: pre-1.18.1 -->

thank you sir for your explanation.
i didnt try any of what you suggested, but i definitely will do so.

