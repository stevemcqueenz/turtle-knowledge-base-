---
title: "Resolution occasionally resets to 800x600"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4468"
topic_id: 4468
forum_id: 3
forum: "Help & Support"
author: "Zaphot"
author_authority: "player"
posted: "2022-10-04T13:06:00Z"
last_post: "2022-10-07T19:39:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:20:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution occasionally resets to 800x600

## Post 26705 by Zaphot — 2022-10-04T13:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26705#p26705 | page 1 | era: pre-1.18.1 -->

Hi,

Every now and then I have the problem that the resolution is reset to 800x600. When that happens I can only select a few resolutions (800x600, 1024x768, 1280x1024, 1600x1200) but not my native resolutions (3840x2160) anymore. This leads every time to the fact that also the arrangement of my interface is lost. This happens in about one out of five restarts.

I can solve the problem with a reboot. This is my hardware
ryzen r9 3950x
gigabyte aorus master X570
nvida 2060 super
Windows 11

I have completely reinstalled my system and again have this issue.

I have tested this when it occurs with a normal 1.12.1 client and there I have the same issue.

Do you have any tips? Thanks a lot already!

## Post 26710 by Geojak (Grandmaster of Forum PvP) — 2022-10-04T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26710#p26710 | page 1 | era: pre-1.18.1 -->

Are you using alt f4 regulaey to close the game? If yes, stop it

## Post 26734 by Zaphot — 2022-10-04T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26734#p26734 | page 1 | era: pre-1.18.1 -->

Hi, no I am always using the normal logout. It seems like the client is just not able to get the resolutions of my monitor in some cases and then switches to the default resolutions.

## Post 26967 by Zaphot — 2022-10-07T19:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26967#p26967 | page 1 | era: pre-1.18.1 -->

Ok, I found the cause. It is related to the pinned comment in the support discord channel:
> The issue seems to be related to having multiple displays of different resolutions, and when you start your PC, windows will choose one of your displays to be the "first" display in it's list of displays. This "first" display is not related to "make this my main display" in windows and will not change after windows has started, even if turned off. When WoW launches, it checks the available resolutions for the "first" display slot and for some reason, somehow incorrectly cross references them with your actual main display leading to a strange list of very old very small resolutions for me at least.

In my case it occurs when I start my pc without turning-on my monitor. So in the future, I have to make sure to turn on my monitor before starting my pc.

