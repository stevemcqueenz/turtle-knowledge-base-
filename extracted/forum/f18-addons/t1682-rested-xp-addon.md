---
title: "Rested XP [ADDON]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1682"
topic_id: 1682
forum_id: 18
forum: "AddOns"
author: "Hazlema"
author_authority: "player"
posted: "2021-03-30T07:15:00Z"
last_post: "2024-12-03T22:43:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T10:27:39Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rested XP [ADDON]

## Post 9939 by Hazlema — 2021-03-30T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9939#p9939 | page 1 | era: pre-1.18.1 -->

Facts about being rested:
- Being Rested boosts XP gains!

- Sitting under a tent for 20 min gets you 20% rested

- Sitting under five tents (aka. Tent Party) for 20 min gets you 100% rested

- You can also get rested sitting in the inn, sitting by a camp fire (But at much slower rates)

- The best addon to track your rested status is Rested XP (see below)
========================================================================================

Rested XP for Turtle Wow

Console Version

To install:
Unzip the file to interface/addons

Usage:
- /rested -- View your rested status

- /rested set smartmode true -- Turn on or off SmartMode

- /rested set autostart true -- Turn on or off RefreshMode automatically when you start

- /rested set refresh 60 -- Change the refresh time (in seconds)

- /rested start -- Start (RefreshMode) your status every nn seconds

- /rested stop -- Stop (RefreshMode) refreshing

- /rested help -- Display the help
Modes:
- SmartMode -- This mode monitors your rested status and alerts you when it changes

- RefreshMode -- This mode updates you every nn seconds
 **SmartMode is on by default and recommended.**

![Image](http://hazlema.us/dist/Rested2.png)

Download Link:
<https://github.com/hazlema/Rested>
or
<http://hazlema.us/dist/Rested.zip>

Fancy Titan Panel Version

To install:
- Unzip the file to interface/addons

- Enable it on titan panel (right click the titan bar) **Information->Turtle: Rested XP**
![Image](http://hazlema.us/dist/TitanRested.png)

Download Link:
<http://hazlema.us/dist/TitanRested.zip>

*Last edited by Hazlema on Mon May 10, 2021 2:05 am, edited 14 times in total.*

## Post 9944 by Bazou — 2021-03-30T12:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9944#p9944 | page 1 | era: pre-1.18.1 -->

Thanks! I love this so much!

## Post 9945 by Hazlema — 2021-03-30T15:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9945#p9945 | page 1 | era: pre-1.18.1 -->

> **Bazou wrote: Tue Mar 30, 2021 12:09 pm**
> Thanks! I love this so much!

I'm glad you like it!

## Post 9946 by Hazlema — 2021-03-30T21:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9946#p9946 | page 1 | era: pre-1.18.1 -->

Updated the console version of the Rested addon, now supports slash commands and displays a loading message that reminds you of the slash commands

/rested or /exp will display your rested status

## Post 9950 by Hazlema — 2021-03-31T17:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9950#p9950 | page 1 | era: pre-1.18.1 -->

**Rested XP (Console version), Big Update**
 - Now can automatically refresh your status every xx seconds
 - Saves configuration settings (set it and forget it)
 - Added help system... /rested help
 - Read the README.txt for more info

## Post 9986 by Hazlema — 2021-04-05T19:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9986#p9986 | page 1 | era: pre-1.18.1 -->

Fixed error where sometimes rested would give you a gmatch error.
The changes are live on the site, sorry for the inconvenience

## Post 60870 by Hont — 2023-09-04T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60870#p60870 | page 1 | era: pre-1.18.1 -->

update 2023 ?

## Post 65081 by Jemix — 2023-09-17T18:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65081#p65081 | page 1 | era: pre-1.18.1 -->

Hi, for everyone who may be interested...use this macro to check your rested XP bubbles.

/script p="player";x=UnitXP(p);m=UnitXPMax(p);r=GetXPExhaustion();if -1==(r or -1)then t="No rest."else t="Rest: "..(math.floor(20*r/m+0.5)).." bubbles ("if r+x<m then t=t..r else t=t.."level +"..(r+x-m)end t=t.."XP)"end;DEFAULT_CHAT_FRAME:AddMessage(t)

Tschau Kakao ;)

## Post 110680 by Paraxes — 2024-11-30T14:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110680#p110680 | page 1 | era: pre-1.18.1 -->

Hello,
does someone still have the version for the Titan Panel lying around and could upload it?

Sadly the link above for the titan panel version is dead.

I'd appreciate it very much. Thank you!

*Last edited by Paraxes on Sat Nov 30, 2024 2:34 pm, edited 1 time in total.*

## Post 111187 by vespina — 2024-12-03T22:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111187#p111187 | page 1 | era: pre-1.18.1 -->

The download link is very sketchy. I think it should be removed from the forums.

