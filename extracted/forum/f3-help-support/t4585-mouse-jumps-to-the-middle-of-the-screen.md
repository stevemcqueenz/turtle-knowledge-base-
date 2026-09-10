---
title: "Mouse jumps to the middle of the screen"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4585"
topic_id: 4585
forum_id: 3
forum: "Help & Support"
author: "Eaxtens"
author_authority: "player"
posted: "2022-10-17T09:43:00Z"
last_post: "2023-07-02T20:15:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:11:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Mouse jumps to the middle of the screen

## Post 27401 by Eaxtens — 2022-10-17T09:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27401#p27401 | page 1 | era: pre-1.18.1 -->

Hello,

has someone a fix for this mouse bug? I tried all of them i found but none of them helped, its really annoying.

Problem:
After some clicks (left or right) my mouse jumps in the middle of the screen so i make some 360 turns while moving.
Happens in between 1-10 clicks every time.

## Post 27416 by Redmagejoe (Grandmaster of Forum PvP) — 2022-10-17T13:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27416#p27416 | page 1 | era: pre-1.18.1 -->

Turn off Hardware Cursor in your Video Options. That's the primary reason I've seen for people having this problem.

## Post 51584 by Canseco — 2023-06-28T05:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51584#p51584 | page 1 | era: pre-1.18.1 -->

Hello Turtles, this is my first post in this forum.

This problem has been plaguing WoW since Warcraft 3 (yes, really). It's an old bug with the input code and none of the solution proposals that you can find around the internet will completely fix the issue, you can alleviate it, make it happen less frequently, but the root of the cause is a race problem caused by the input code Blizzard has been using for over 2 decades, this issue still happens in retail to this day.

I'm at this point in time trying to figure out how to hack in a solution, by either overriding the input system or modifying the binary itself, if someone is also looking into this I might need some help, It's been ages since I touched IDA and I'm rusty overall.

## Post 51589 by Canseco — 2023-06-28T06:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51589#p51589 | page 1 | era: pre-1.18.1 -->

I'm full with happiness, someone already fixed this issue. Take a look at this:

[viewtopic.php?t=3268](https://forum.turtlecraft.gg/viewtopic.php?t=3268)

> Camera skip glitch fix
>
>  Fixes the glitch where the camera sometimes skips to face a random direction when rotated.

This also fixes the mouse centering itself randomly (OP bug) while panning the camera.

## Post 52131 by Particle — 2023-07-02T20:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52131#p52131 | page 1 | era: pre-1.18.1 -->

> **Canseco wrote: Wed Jun 28, 2023 6:02 am**
> I'm full with happiness, someone already fixed this issue. Take a look at this:
>
>  [viewtopic.php?t=3268](https://forum.turtlecraft.gg/viewtopic.php?t=3268)
>
> > Camera skip glitch fix
> >
> >  Fixes the glitch where the camera sometimes skips to face a random direction when rotated.
>
>   This also fixes the mouse centering itself randomly (OP bug) while panning the camera.

Thank you for finding and linking this!   turtle_in_love_head   My camera was jumping around almost nonstop and this seems to have fixed it.   satisfied_turtle_head

