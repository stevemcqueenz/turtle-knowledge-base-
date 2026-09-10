---
title: "How do I multibox on Linux?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24166"
topic_id: 24166
forum_id: 3
forum: "Help & Support"
author: "Imonobor"
author_authority: "player"
posted: "2026-03-04T08:14:00Z"
last_post: "2026-03-20T10:19:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:36:36Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How do I multibox on Linux?

## Post 170034 by Imonobor (Bug Report Enthusiast) — 2026-03-04T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170034#p170034 | page 1 | era: 1.18.1-announced-pre-release -->

Hey I want to launch 2 different windows of TWoW on Linux, so I can enchant my alt's gear.

However, I can't seem to figure it out. I'm using Lutris to launch VanillaFixes.exe with Proton (I had some issues with the official launcher). However, when I try to launch a second window by going "Run EXE inside Wine prefix" and selecting VanillaFixes.exe again, I get error "Failed to write process memory (pDllPath)"

I've also tried using a different Wine Prefix for the second window, it crashes immediately or doesn't start at all:
ERROR #132 (0x85100084) Fatal Exception
Program:	W:\SSD\Games\World of Warcraft - Turtle\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:7BC0BF3D

The instruction at "0x7BC0BF3D" referenced memory at "0x0000002A".
The memory could not be "read".

Does anyone have any ideas?

## Post 170263 by Rotorboat — 2026-03-07T04:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170263#p170263 | page 1 | era: 1.18.1-announced-pre-release -->

im using Nobara 43 and i have no issues running more than 1 window. have you tried updating to use GE-Proton Latest? i launch one window from Lutris and the other directly from the exe which launches using Winetricks and the Wine prefixes.

## Post 171375 by Imonobor (Bug Report Enthusiast) — 2026-03-20T09:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171375#p171375 | page 1 | era: post-1.18.1 -->

> **Rotorboat wrote: Sat Mar 07, 2026 4:44 am**
> im using Nobara 43 and i have no issues running more than 1 window. have you tried updating to use GE-Proton Latest? i launch one window from Lutris and the other directly from the exe which launches using Winetricks and the Wine prefixes.

No, that doesn't seem to work for me. I'm also on Nobara 43. I've tried a multitude of things, including using separate Wine Prefixes (like you), but they still fight for dominance :D
The only thing that worked was copying my entire WoW folder and running it as a separate game. It's really not an ideal solution though.

## Post 171377 by Rotorboat — 2026-03-20T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171377#p171377 | page 1 | era: post-1.18.1 -->

I get the same errors if i try to launch 2 windows of wow from Lutris. Can you launch wow using the exe directly without using Lutris or Herioc?

## Post 171381 by Crake (Patch Note Conspiracy Theorist) — 2026-03-20T10:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171381#p171381 | page 1 | era: post-1.18.1 -->

I launch my instances from steam by adding non-steam games.I need to add it for each times I want to launch the game.

I think i did the same thing in heroic when i used it for a spell, you just need to add the whole game again from scratch as a new game.

