---
title: "Black screen"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1092"
topic_id: 1092
forum_id: 3
forum: "Help & Support"
author: "Xenophilos"
author_authority: "player"
posted: "2020-06-10T16:49:00Z"
last_post: "2022-09-12T10:51:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:21:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Black screen

## Post 6298 by Xenophilos — 2020-06-10T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6298#p6298 | page 1 | era: pre-1.18.1 -->

So, new today.
Download and extract: check.
Replace .wtf file: check.
Log into server, make 1st new character: check.
In Bloodhoof village, fine, but I wanted to go into Windowed Mode so I can move the display to my larger, second screen.  As soon as I tell it to go Windowed, the game goes to black screen.

Next time I try to load, I also get a Windows message that says it has put it into "compatibility mode".

Still shows a black screen whenever I launch, now.

Any help is much appreciated.

## Post 6299 by Xenophilos — 2020-06-10T16:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6299#p6299 | page 1 | era: pre-1.18.1 -->

Reading down; there may be a fix in other threads.

## Post 6300 by Xenophilos — 2020-06-10T17:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6300#p6300 | page 1 | era: pre-1.18.1 -->

Solved using Optics' suggestion.  I edited my config.

## Post 6323 by Yutilk (Barrens Chat Casualty) — 2020-06-11T11:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6323#p6323 | page 1 | era: pre-1.18.1 -->

I had the same problem a while back. Glad you got it fixed.

## Post 23945 by Hybrid — 2022-08-29T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23945#p23945 | page 1 | era: pre-1.18.1 -->

Got black screen after i changed to Fullscreen mode. Dont know how to fix it

EDIT:

Found the fix

SET gxWindow "1"
SET gxMaximize "1"

in config.wtf

## Post 24922 by Compuaide — 2022-09-12T10:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24922#p24922 | page 1 | era: pre-1.18.1 -->

Bingo!

SET gxWindow "1"
SET gxMaximize "1"

Thanks Hybrid

