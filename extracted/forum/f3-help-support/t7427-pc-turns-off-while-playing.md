---
title: "PC turns off while playing"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7427"
topic_id: 7427
forum_id: 3
forum: "Help & Support"
author: "Noobita"
author_authority: "player"
posted: "2023-05-24T15:03:00Z"
last_post: "2023-05-25T14:05:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T09:13:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PC turns off while playing

## Post 47269 by Noobita — 2023-05-24T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47269#p47269 | page 1 | era: pre-1.18.1 -->

Rig:
RX 6900 XT
i7 12700KF
 32GB DDR4 3600mhz
PSU 750w

My PC turns off (loses power) only when playing turtle wow for a while, and I have to turn it back on manually.
I can run very demanding games without this issue.
I monitor temperatuers of both CPU and GPU and they are fine, always between 50c-65c
I tried with win10 and win11, I disabled windows defender and all the security and protection settings there.
I checked my drives with programs, no errors.
Latest GPU drivers and BIOS.
Ran DISM and sfc scannow from cmd.
I tried the 4gb patch for the game that I found here.
Running the game at 4k 144fps cap.

Please help me figure out this issue :(

## Post 47282 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-24T16:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47282#p47282 | page 1 | era: pre-1.18.1 -->

Have you tried turning your computer off and then on again?  (:

In all seriousness, my first guesses would have been bad RAM or an overworked power supply unit.
My second guess is that *World of Warcraft* 1.12.1 is just a fickle pickle.

If you downloaded the client from the website or *MediaFire*, you could try downloading the client via *BitTorrent*.  I've always had good luck with the torrented client.
Alternately, you could try installing *World of Wacraft* v1.x, change the "realmlist" to *logon.turtlecraft.gg*, and manually patch it that way.  That seems to get good results, too.

 ***More Info:** [Turtle WoW Forums - Client Download](https://forum.turtlecraft.gg/viewtopic.php?t=5143)*

## Post 47284 by Noobita — 2023-05-24T16:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47284#p47284 | page 1 | era: pre-1.18.1 -->

It's definitely not a PSU issue since I can run much more demanding games than turtle wow which make my hardware draw even more power and at higher temps as well.
My RAM is brand new (I just upgraded) so I doubt this is the issue as well.
Also I checked extensively and 750w should be more than enough for my rig.
I will try the torrent or a clean installation of WoW and will see how it goes.

Thanks for the help :)

## Post 47290 by Noobita — 2023-05-24T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47290#p47290 | page 1 | era: pre-1.18.1 -->

The only thing that seems to have solved this issue was turning on "disable fullscreen optimizations" and setting compatibiliy mode to windows 8 on the wow.exe
It might have been either one of them or both.
This is probably a bug with this old client and with radeon cards.

## Post 47291 by Xerilin (Bug Report Enthusiast) — 2023-05-24T17:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47291#p47291 | page 1 | era: pre-1.18.1 -->

I know somebody having similar issues with p server vanilla clients, including turtle. Their pc freezes completely, desktop turns black and the computer has to be manually turned off and then restarted. It happened years ago on other p servers and happens again now, but never with other games. I don't know a fix, but I've heard of such problems. Problem is worst with tents and/or a lot of people, apparently.

## Post 47302 by Noobita — 2023-05-24T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47302#p47302 | page 1 | era: pre-1.18.1 -->

Well it happened again even after trying everything above :(

## Post 47370 by Allwynd01 (Bug Report Enthusiast) — 2023-05-25T10:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47370#p47370 | page 1 | era: pre-1.18.1 -->

If you RAM is new it can be faulty. If you have other, old RAM lying around, remove the new one, install the old one and try to play for a day like this and see if there is difference.

> **Xerilin wrote: Wed May 24, 2023 5:28 pm**
> I know somebody having similar issues with p server vanilla clients, including turtle. Their pc freezes completely, desktop turns black and the computer has to be manually turned off and then restarted. It happened years ago on other p servers and happens again now, but never with other games. I don't know a fix, but I've heard of such problems. Problem is worst with tents and/or a lot of people, apparently.

I have never experienced such a thing on a private server and I've been playing private servers since 2006 and on many different computers. Even on Linux the game runs fine when I tried.

## Post 47383 by Noobita — 2023-05-25T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47383#p47383 | page 1 | era: pre-1.18.1 -->

> **Allwynd01 wrote: Thu May 25, 2023 10:26 am**
> If you RAM is new it can be faulty. If you have other, old RAM lying around, remove the new one, install the old one and try to play for a day like this and see if there is difference.
>
> > **Xerilin wrote: Wed May 24, 2023 5:28 pm**
> > I know somebody having similar issues with p server vanilla clients, including turtle. Their pc freezes completely, desktop turns black and the computer has to be manually turned off and then restarted. It happened years ago on other p servers and happens again now, but never with other games. I don't know a fix, but I've heard of such problems. Problem is worst with tents and/or a lot of people, apparently.
>
>   I have never experienced such a thing on a private server and I've been playing private servers since 2006 and on many different computers. Even on Linux the game runs fine when I tried.

Ran memtest84 full tests on both sticks, no errors...

## Post 47385 by Reptilewow (Barrens Chat Casualty) — 2023-05-25T14:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47385#p47385 | page 1 | era: pre-1.18.1 -->

If your RAM sticks are ≥8gb try running the game with only 1 stick inserted at a time and see if the PC shuts down with each of them. It's tedious, I know.

