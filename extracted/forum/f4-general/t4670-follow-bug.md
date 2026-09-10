---
title: "Follow bug"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4670"
topic_id: 4670
forum_id: 4
forum: "General"
author: "Velmerk"
author_authority: "player"
posted: "2022-10-26T08:57:00Z"
last_post: "2024-01-03T04:01:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T09:55:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Follow bug

## Post 27954 by Velmerk — 2022-10-26T08:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27954#p27954 | page 1 | era: pre-1.18.1 -->

Seems to be an issue with follow. The character following turns and continues running.

## Post 27988 by Shamma (Bug Report Enthusiast) — 2022-10-26T14:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27988#p27988 | page 1 | era: pre-1.18.1 -->

I do not understand what you mean here.

IMO the main bug with following is that you cannot trade with the person you are following during running.

## Post 30769 by Drapes — 2022-12-15T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30769#p30769 | page 1 | era: pre-1.18.1 -->

I'm experiencing this issue too. Here's a video:
[embed: https://www.youtube.com/embed/Pwnl4Y2ryAE]

When the following character is not immediately behind their leader, they continue running the follow algorithm:
 1. run forward
 2. turn towards the leader
 3. goto 1

behavior 2 should take over behavior 1, but it does not
easy fix for that is to swap the priority of the behaviors to
 1. turn towards the leader
 2. run forward
 3. goto 1

This may appear to be a straight line, but upon further testing, I can see that the following character makes some slight turns.

It seems like there is a small delay before the following character changes their heading. There should not be a delay, the character's heading direction should change immediately upon executing /follow. The following character needs to
change their heading direction immediately and more frequently. And when the following character does change their heading direction, it should point directly to the leading character's position, but as shown in the video, the heading direction only ever makes slight adjustments toward the leader's position (they hard coded it instead of referencing the leader's coordinates).

I just started 3 days ago, and I'm multi boxing to make the game more fun and add a new challenge. The people in my guild just called me cringe ofc and offered no help.

What are multiboxers doing to circumvent this issue? It is very inconvenient. I am being very careful not too turn too sharply, always initiating the follow with a straight line, and closely watching both monitors. I like the challenge, it is fun when it works, but this is clearly not working as intended.

*Last edited by Drapes on Thu Dec 15, 2022 10:14 pm, edited 2 times in total.*

## Post 30771 by Drapes — 2022-12-15T22:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30771#p30771 | page 1 | era: pre-1.18.1 -->

I see that, much respect.
I've played this game a lot already, just trying to make it more fun.

## Post 30773 by Fin (Patch Note Conspiracy Theorist) — 2022-12-15T22:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30773#p30773 | page 1 | era: pre-1.18.1 -->

Hello.

This is a client side issue caused by a monitor that runs at more then 60hz.

## Post 38259 by Ocorisco — 2023-03-19T21:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38259#p38259 | page 1 | era: pre-1.18.1 -->

> **Fin wrote: Thu Dec 15, 2022 10:27 pm**
> Hello.
>
>  This is a client side issue caused by a monitor that runs at more then 60hz.

Is there any fix for this issue?

## Post 83502 by Cwbou812 — 2024-01-03T04:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83502#p83502 | page 1 | era: pre-1.18.1 -->

Go into your video options from desktop, then global settings. Add the turtle WoW exe, then for that game set the FPS to 60. I did this and now the /follow command works, as others mentioned it was because my game was running at too high of a FPS.

