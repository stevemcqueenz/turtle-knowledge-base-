---
title: "Stutter and refresh rate problem"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2336"
topic_id: 2336
forum_id: 4
forum: "General"
author: "Prethorian"
author_authority: "player"
posted: "2021-12-20T12:27:00Z"
last_post: "2022-03-21T16:25:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T10:11:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Stutter and refresh rate problem

## Post 14662 by Prethorian — 2021-12-20T12:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14662#p14662 | page 1 | era: pre-1.18.1 -->

Hello guys   smiling_turtle_head

So I started playing recently and I noticed some problems with running the game smoothly.
Issues: Game feels stuttery and laggy. Cannot put my refresh rate ingame to 144hz, it only allows me to 75hz max. Fullscreen mode seems kinda blurry and foggy.
What I tried: Tried to set my refresh rate from nvidia cpanel but doesn't seem to work aswell, tried to play on windowed fullscreen - also no change.
 *My specs: i9 9900k / RTX 3070 / 16Gb RAM  (Also I am using G-Sync technology, if that make difference)

I am playing other classic wow clients too and retail but never had such problem.. :( really want to play this server but the stuttering is unbearable. If someone have any solutions please help   sad_turtle_head

## Post 14679 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-12-21T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14679#p14679 | page 1 | era: pre-1.18.1 -->

I have been there before (but not with TWoW). I would suggest a complete reinstall, cleaning out every little bit of the game you can.

## Post 14696 by Prethorian — 2021-12-21T23:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14696#p14696 | page 1 | era: pre-1.18.1 -->

Okay so I think I figure it out but one problem still remains :D

So what I did was to change the following setting value in the Config.wtf file
> SET gxRefresh "60"

to
> SET gxRefresh "144"

Also it only runs smooth on windowed fullscreen, but one thing still remain an open issue and that is the fps limit.
When I use vertical sync usually games set their fps limit at the current refresh rate, so that means 144 max fps. But the problem is that I am running at 147 somehow.. and I see screen tearing now.
What I tried:  Setting the maxFPS value in the Config.wtf file to 144 but that doesn't help..
Any ideas guys ? Thanks   satisfied_turtle_head

## Post 14702 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-12-22T03:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14702#p14702 | page 1 | era: pre-1.18.1 -->

Definitely go onto Discord for it if  you've gotten this far.

## Post 14855 by Wow4ever — 2021-12-27T06:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14855#p14855 | page 1 | era: pre-1.18.1 -->

I went into my NVIDIA settings and forced framerates to be higher than 60.  I think its working.  Try it.

## Post 14858 by Bainville — 2021-12-27T09:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14858#p14858 | page 1 | era: pre-1.18.1 -->

Hello,

I had the same problems when i started playing on Turtle WoW. What i did to fix the problem is, weirdly enough, to disable "Hardware Cursor" in the "Video options" pannel.

I hope it will work for you !

## Post 17055 by Beamanbr9 — 2022-02-16T06:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17055#p17055 | page 1 | era: pre-1.18.1 -->

> **Bainville wrote: Mon Dec 27, 2021 9:51 am**
> Hello,
>
>  I had the same problems when i started playing on Turtle WoW. What i did to fix the problem is, weirdly enough, to disable "Hardware Cursor" in the "Video options" pannel.
>
>  I hope it will work for you !

This was it for me, thanks!

## Post 17628 by Turtlemagma — 2022-03-21T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17628#p17628 | page 1 | era: pre-1.18.1 -->

> **Beamanbr9 wrote: Wed Feb 16, 2022 6:30 am**
> > **Bainville wrote: Mon Dec 27, 2021 9:51 am**
> > Hello,
> >
> >  I had the same problems when i started playing on Turtle WoW. What i did to fix the problem is, weirdly enough, to disable "Hardware Cursor" in the "Video options" pannel.
> >
> >  I hope it will work for you !
>
>   This was it for me, thanks!

This worked for me as well! Thanks

