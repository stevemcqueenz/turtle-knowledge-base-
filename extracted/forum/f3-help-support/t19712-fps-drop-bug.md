---
title: "FPS drop bug"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19712"
topic_id: 19712
forum_id: 3
forum: "Help & Support"
author: "Archyy"
author_authority: "player"
posted: "2025-06-03T20:29:00Z"
last_post: "2025-06-05T06:57:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T08:43:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# FPS drop bug

## Post 134141 by Archyy — 2025-06-03T20:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134141#p134141 | page 1 | era: pre-1.18.1 -->

If you try to alt+tab to another window during the load screen after you clicked "enter world" you will get a huge fps drop inside the client. If however you do not alt+tab or minimize the client during that load screen the client will run at max fps your system can run it at.

As a example for me:

 1. If i do not alt+tab/minimize it with vsync client will run at 147,8 FPS
 2. If i do alt+tab during that load screen the client will run at 60 to 80 FPS and it cannot stabilize.

It is not a rare bug or glitch and i can replicate it every time i alt+tab during that screen making me belive that minimizing it during that load screen triggers some horrible memory leak.

## Post 134143 by Wsta (Bug Report Enthusiast) — 2025-06-03T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134143#p134143 | page 1 | era: pre-1.18.1 -->

Don't alt tab
Solved

## Post 134144 by Archyy — 2025-06-03T21:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134144#p134144 | page 1 | era: pre-1.18.1 -->

> **Wsta wrote: Tue Jun 03, 2025 8:58 pm**
> Don't alt tab
>  Solved

good point, why didnt i think of it? i am glad you took your time to give such valuable info.

## Post 134146 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-06-03T21:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134146#p134146 | page 1 | era: pre-1.18.1 -->

Put it in the bug tracker.  They don't handle bugs on the forums.
<https://turtlecraft.gg/index.php/bug-tracker>

Also kinda agree with Wsta.  It's like 15s load time.  But hey, to each their own.  Hope you can get it solved. <3

## Post 134209 by Archyy — 2025-06-04T04:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134209#p134209 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Tue Jun 03, 2025 9:13 pm**
> Put it in the bug tracker.  They don't handle bugs on the forums.
>  <https://turtlecraft.gg/index.php/bug-tracker>
>
>  Also kinda agree with Wsta.  It's like 15s load time.  But hey, to each their own.  Hope you can get it solved. <3

The fact that you can avoid it does not mean is not there and it triggering a horrible memory leak is not ok.

Also ty for pointing me in the right direction.

## Post 134223 by Thricew (Barrens Chat Casualty) — 2025-06-04T07:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134223#p134223 | page 1 | era: pre-1.18.1 -->

I think you're playing with SuperWoW/Tweaks/Fixes and open ur game not with wow.exe, but with WowTweaked.exe (Or whatever it's called).

I think this things (SuperWoW/Tweaks/Fixes) make some injections in the client thats why FPS drops during the loading?

## Post 134271 by Archyy — 2025-06-04T14:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134271#p134271 | page 1 | era: pre-1.18.1 -->

> **Thricew wrote: Wed Jun 04, 2025 7:54 am**
> I think you're playing with SuperWoW/Tweaks/Fixes and open ur game not with wow.exe, but with WowTweaked.exe (Or whatever it's called).
>
>  I think this things (SuperWoW/Tweaks/Fixes) make some injections in the client thats why FPS drops during the loading?

I have no tweaks/mods installed and i open my game with turtle wow launcher.

And as a test and also to address your concern i started the game from WoW.exe not a turtle launcher, nothing else and i managed to recreate the bug.

## Post 134360 by Thricew (Barrens Chat Casualty) — 2025-06-05T06:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134360#p134360 | page 1 | era: pre-1.18.1 -->

> **Archyy wrote: Wed Jun 04, 2025 2:37 pm**
> I have no tweaks/mods installed and i open my game with turtle wow launcher.

:\

