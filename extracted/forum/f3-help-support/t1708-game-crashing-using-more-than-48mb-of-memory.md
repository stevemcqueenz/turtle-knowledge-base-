---
title: "Game crashing \"using more than 48MB of memory\""
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1708"
topic_id: 1708
forum_id: 3
forum: "Help & Support"
author: "Jagedtiger"
author_authority: "player"
posted: "2021-04-13T16:55:00Z"
last_post: "2021-04-20T21:10:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:27:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Game crashing "using more than 48MB of memory"

## Post 10103 by Jagedtiger — 2021-04-13T16:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10103#p10103 | page 1 | era: pre-1.18.1 -->

I have all the addons installed in and running from the Turtle WoW links, when I try to play I get "using more than 48MB of memory" and then the game CTD's. I run Classic with way more a addons than this, what do I need to do to fix it so I can use them and play?

## Post 10104 by Goodwater — 2021-04-13T18:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10104#p10104 | page 1 | era: pre-1.18.1 -->

I had this same problem. All you have to do, is go into the addon menu in the character selection screen and change the memory usage amount in the top right-hand corner to 0. This will make it so that you have no more memory limit and will stop the crashes.

## Post 10106 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-04-13T22:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10106#p10106 | page 1 | era: pre-1.18.1 -->

zero... it will use all that it needs, which will not be too much.

## Post 10107 by Jagedtiger — 2021-04-13T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10107#p10107 | page 1 | era: pre-1.18.1 -->

That is fixed and thank you for the help. The issue I have now is that I get micro stutters, which I don't know if its graphics loading (popping).  I can literally log into my retail and classic account and run everything at absolute max with no issues. But I get weird micro stuttering very often while playing here. Any ideas what the cause might be? Or if anyone else has ran into something like this?

## Post 10108 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-04-14T00:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10108#p10108 | page 1 | era: pre-1.18.1 -->

Not here, but on other servers, including Blizz. Never did figure it out.

## Post 10191 by Zerofighter19 — 2021-04-20T21:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10191#p10191 | page 1 | era: pre-1.18.1 -->

> **Jagedtiger wrote: Tue Apr 13, 2021 10:54 pm**
> That is fixed and thank you for the help. The issue I have now is that I get micro stutters, which I don't know if its graphics loading (popping).  I can literally log into my retail and classic account and run everything at absolute max with no issues. But I get weird micro stuttering very often while playing here. Any ideas what the cause might be? Or if anyone else has ran into something like this?

If you´re using a Nvidia Graficscard you´ve to disable the Hardware Cursor . It maybe will fix the Micro Stuttering or FPS Drops . Just go to your WOW Folder /WTF/ Config.WTF Open that with Microsoft Editor or Notepad . And Paste in this to disable Hardware Cursor:    SET gxCursor "0"
And i would deactivate Vsync to for more FPS paste this in:      SET gxVSync "0"

Hope i could Help you

