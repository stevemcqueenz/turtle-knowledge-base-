---
title: "Increase size of quest log"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5318"
topic_id: 5318
forum_id: 14
forum: "Suggestions"
author: "Xudo"
author_authority: "player"
posted: "2023-01-09T09:39:00Z"
last_post: "2023-01-10T14:45:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T12:24:28Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Increase size of quest log

## Post 32317 by Xudo (Grandmaster of Forum PvP) — 2023-01-09T09:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32317#p32317 | page 1 | era: pre-1.18.1 -->

Currently, max amount of active quests is limited to 20.
Turtle has introduced a lot of additional quests, so it is often not enough.
I propose to increase limit to 25.

## Post 32321 by Zinity — 2023-01-09T10:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32321#p32321 | page 1 | era: pre-1.18.1 -->

+1

## Post 32325 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-01-09T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32325#p32325 | page 1 | era: pre-1.18.1 -->

No. Changing quest log size would have many repercussions.

## Post 32327 by Gantulga (Grandmaster of Forum PvP) — 2023-01-09T12:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32327#p32327 | page 1 | era: pre-1.18.1 -->

As far as I know it's a clientside limitation with no viable solution available.

## Post 32330 by Torta (Turtle WoW Team) [STAFF] — 2023-01-09T13:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32330#p32330 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Mon Jan 09, 2023 12:13 pm**
> As far as I know it's a clientside limitation with no viable solution available.

Sadly, it's true. It's possible to enable it server-side only but it won't show additional quests in the client log.

## Post 32333 by Gantulga (Grandmaster of Forum PvP) — 2023-01-09T13:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32333#p32333 | page 1 | era: pre-1.18.1 -->

> **Torta wrote: Mon Jan 09, 2023 1:04 pm**
> > **Gantulga wrote: Mon Jan 09, 2023 12:13 pm**
> > As far as I know it's a clientside limitation with no viable solution available.
>
>   Sadly, it's true. It's possible to enable it server-side only but it won't show additional quests in the client log.

I assume simply hex editing the client to increase that number isn't possible? Assuming the correct field has been pinpointed at all.

## Post 32341 by Shamma (Bug Report Enthusiast) — 2023-01-09T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32341#p32341 | page 1 | era: pre-1.18.1 -->

> **Torta wrote: Mon Jan 09, 2023 1:04 pm**
> Sadly, it's true. It's possible to enable it server-side only but it won't show additional quests in the client log.

That works! As long as the game thinks we are on the quest and drops the quest items and registers the kills, it is fine. Pls allow!

## Post 32346 by Xudo (Grandmaster of Forum PvP) — 2023-01-09T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32346#p32346 | page 1 | era: pre-1.18.1 -->

There are different types of client-side limitations.
One is in standard add-on frame. Other is in game itself.
May be it will be possible to see all available quests with non-standard quest-related addon?

## Post 32365 by Torta (Turtle WoW Team) [STAFF] — 2023-01-10T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32365#p32365 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Mon Jan 09, 2023 1:50 pm**
> > **Torta wrote: Mon Jan 09, 2023 1:04 pm**
> > > **Gantulga wrote: Mon Jan 09, 2023 12:13 pm**
> > > As far as I know it's a clientside limitation with no viable solution available.
> >
> >   Sadly, it's true. It's possible to enable it server-side only but it won't show additional quests in the client log.
>
>   I assume simply hex editing the client to increase that number isn't possible? Assuming the correct field has been pinpointed at all.

It's not possible, it's in the fixed array of unit fields. Can't go beyond it.

## Post 32366 by Torta (Turtle WoW Team) [STAFF] — 2023-01-10T01:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32366#p32366 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Mon Jan 09, 2023 4:05 pm**
> There are different types of client-side limitations.
>  One is in standard add-on frame. Other is in game itself.
>  May be it will be possible to see all available quests with non-standard quest-related addon?

Yes, there could be a replacement UI for quests: but it might cause a lot of complications if we change the way the server communicates with the client about quest stuff. Basically, it's just months of work for very little gain and with 99% probability of really bad bugs.

## Post 32371 by Xudo (Grandmaster of Forum PvP) — 2023-01-10T06:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32371#p32371 | page 1 | era: pre-1.18.1 -->

> **Torta wrote: Tue Jan 10, 2023 1:16 am**
> > **Xudo wrote: Mon Jan 09, 2023 4:05 pm**
> > There are different types of client-side limitations.
> >  One is in standard add-on frame. Other is in game itself.
> >  May be it will be possible to see all available quests with non-standard quest-related addon?
>
>   Yes, there could be a replacement UI for quests: but it might cause a lot of complications if we change the way the server communicates with the client about quest stuff. Basically, it's just months of work for very little gain and with 99% probability of really bad bugs.

Thank you for explanation.

## Post 32390 by Shamma (Bug Report Enthusiast) — 2023-01-10T14:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32390#p32390 | page 1 | era: pre-1.18.1 -->

> **Torta wrote: Tue Jan 10, 2023 1:16 am**
> Yes, there could be a replacement UI for quests: but it might cause a lot of complications if we change the way the server communicates with the client about quest stuff. Basically, it's just months of work for very little gain and with 99% probability of really bad bugs.

LITTLE GAIN?! Torta!!!!

[embed: https://www.youtube.com/embed/YdH4e4K5XcE]

