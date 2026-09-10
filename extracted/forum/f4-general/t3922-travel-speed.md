---
title: "Travel Speed"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3922"
topic_id: 3922
forum_id: 4
forum: "General"
author: "Maduin"
author_authority: "player"
posted: "2022-08-27T17:04:00Z"
last_post: "2022-11-12T00:28:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:09:59Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Travel Speed

## Post 23723 by Maduin — 2022-08-27T17:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23723#p23723 | page 1 | era: pre-1.18.1 -->

Is there a macro or script that will tell you your travel speed in TWoW?  Or perhaps a chart that tells you your speed while riding *without* riding training?  I keep hearing conflicting things about mount speed before training.

## Post 23976 by Lyssebabz1 — 2022-08-30T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23976#p23976 | page 1 | era: pre-1.18.1 -->

Hi! There are 2 macros for this. /script ChatFrame1:AddMessage(string.format("Player speed: %d%%", (GetUnitSpeed("Player") / 7) * 100))

/script x=GetUnitSpeed("player") DEFAULT_CHAT_FRAME:AddMessage(format("Speed: %d yds/sec, %.1f kph, %.1f mph, %d%% normal run speed",x,x*3600/1093.6133,x*45/22,x/7*100))

The movement speed is 100+60% = 160% on a 60% movement speed mount.

## Post 24363 by Flameroller — 2022-09-04T14:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24363#p24363 | page 1 | era: pre-1.18.1 -->

I was under the impression that without training, using the turtle mount, or a mount from the shop, you should be at 0.5% per level, so at 37 you'd have 18.5% mount speed.

## Post 28897 by Gunnie — 2022-11-10T13:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28897#p28897 | page 1 | era: pre-1.18.1 -->

> **Lyssebabz1 wrote: Tue Aug 30, 2022 7:39 am**
> Hi! There are 2 macros for this. /script ChatFrame1:AddMessage(string.format("Player speed: %d%%", (GetUnitSpeed("Player") / 7) * 100))
>
>
>  /script x=GetUnitSpeed("player") DEFAULT_CHAT_FRAME:AddMessage(format("Speed: %d yds/sec, %.1f kph, %.1f mph, %d%% normal run speed",x,x*3600/1093.6133,x*45/22,x/7*100))
>
>
>  The movement speed is 100+60% = 160% on a 60% movement speed mount.

I tried these but they gave an error in Improved Error Frame. Before this I had tried with the MonkeySpeed 3.6.0 addon but it didn't work either.

## Post 28918 by Shamma (Bug Report Enthusiast) — 2022-11-10T20:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28918#p28918 | page 1 | era: pre-1.18.1 -->

> **Gunnie wrote: Thu Nov 10, 2022 1:58 pm**
> > **Lyssebabz1 wrote: Tue Aug 30, 2022 7:39 am**
> > Hi! There are 2 macros for this. /script ChatFrame1:AddMessage(string.format("Player speed: %d%%", (GetUnitSpeed("Player") / 7) * 100))
> >
> >
> >  /script x=GetUnitSpeed("player") DEFAULT_CHAT_FRAME:AddMessage(format("Speed: %d yds/sec, %.1f kph, %.1f mph, %d%% normal run speed",x,x*3600/1093.6133,x*45/22,x/7*100))
> >
> >
> >  The movement speed is 100+60% = 160% on a 60% movement speed mount.
>
>   I tried these but they gave an error in Improved Error Frame. Before this I had tried with the MonkeySpeed 3.6.0 addon but it didn't work either.

Just use print. E.g.:

/run print(GetUnitSpeed("player"))

And let me introduce you to:
[https://vanilla-wow-archive.fandom.com/ ... rcraft_API](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API)

## Post 29013 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2022-11-11T23:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29013#p29013 | page 1 | era: pre-1.18.1 -->

> **Shamma wrote: Thu Nov 10, 2022 8:05 pm**
> > **Gunnie wrote: Thu Nov 10, 2022 1:58 pm**
> > > **Lyssebabz1 wrote: Tue Aug 30, 2022 7:39 am**
> > > Hi! There are 2 macros for this. /script ChatFrame1:AddMessage(string.format("Player speed: %d%%", (GetUnitSpeed("Player") / 7) * 100))
> > >
> > >
> > >  /script x=GetUnitSpeed("player") DEFAULT_CHAT_FRAME:AddMessage(format("Speed: %d yds/sec, %.1f kph, %.1f mph, %d%% normal run speed",x,x*3600/1093.6133,x*45/22,x/7*100))
> > >
> > >
> > >  The movement speed is 100+60% = 160% on a 60% movement speed mount.
> >
> >   I tried these but they gave an error in Improved Error Frame. Before this I had tried with the MonkeySpeed 3.6.0 addon but it didn't work either.
>
>   Just use print. E.g.:
>
>  /run print(GetUnitSpeed("player"))
>
>  And let me introduce you to:
>  [https://vanilla-wow-archive.fandom.com/ ... rcraft_API](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API)

GetUnitSpeed API was added in WotLK.

## Post 29014 by Shamma (Bug Report Enthusiast) — 2022-11-12T00:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29014#p29014 | page 1 | era: pre-1.18.1 -->

Ingameacc12345 absolutely correct. My bad. I just took the macro that Lyssebabz1 wrote and simplified it. Never actually tested it.

