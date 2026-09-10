---
title: "Twt threatmeter broken since the patch"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16873"
topic_id: 16873
forum_id: 3
forum: "Help & Support"
author: "Frantsel"
author_authority: "player"
posted: "2025-01-03T13:37:00Z"
last_post: "2025-04-08T09:16:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T08:45:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Twt threatmeter broken since the patch

## Post 115314 by Frantsel (Patch Note Conspiracy Theorist) — 2025-01-03T13:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115314#p115314 | page 1 | era: pre-1.18.1 -->

Heyhey!!

Since the classchange update my twt threatmeter is broken but only on one account. It works on the other.

I tried to reinstall twt. Didnt work. I deleted wdb folder.

I tried to change the launchers login to the new account. Didnt work. I tried to copy some files of the one acc to the other (twt files). Didnt work.

If i type "/twt" it shows some inforemation in the chat. But if I type /twt show, it doesnt show the threatmeter.

Any ideas?

Or any ideas for other good threatmeter?

## Post 115315 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-01-03T14:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115315#p115315 | page 1 | era: pre-1.18.1 -->

I want to say it's /twtshow with no space

## Post 115316 by Frantsel (Patch Note Conspiracy Theorist) — 2025-01-03T14:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115316#p115316 | page 1 | era: pre-1.18.1 -->

Its not. /twtshow works too. But if you type /twt to see all commands. It says: /twt show.

## Post 115320 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-01-03T14:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115320#p115320 | page 1 | era: pre-1.18.1 -->

If the threat meter just isn't working, I'm as lost as you. If it's just not showing up maybe there's a reset command to reset its position.  I have had it bug out and go off screen before.  Unfortunately idr how I fixed it.

## Post 115323 by Frantsel (Patch Note Conspiracy Theorist) — 2025-01-03T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115323#p115323 | page 1 | era: pre-1.18.1 -->

There is no reset command. I tried now to delete various files to reset it. Didnt work.

I had to delete my wow folder and do everything again.

Just took me 2 hours of my life.

Thanks turtle wow.

Its not the first time. Wont be the last.

Welcome to trash wow.

## Post 115835 by hane0 — 2025-01-08T06:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115835#p115835 | page 1 | era: pre-1.18.1 -->

I had a similar issue recently! It turned out to be a conflict with another addon I had installed. Have you tried disabling other addons to see if that helps?

## Post 125958 by Andreaa23 — 2025-04-08T07:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125958#p125958 | page 1 | era: pre-1.18.1 -->

TWThreat Meter is a custom threat-tracking addon designed for Turtle WoW, a private World of Warcraft server that expands on the Vanilla (1.12) experience [slither io](https://slithergame.io)

*Last edited by Andreaa23 on Sat Apr 12, 2025 7:24 am, edited 1 time in total.*

## Post 125966 by Mosttrustworthy — 2025-04-08T09:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125966#p125966 | page 1 | era: pre-1.18.1 -->

In the directory "Where-ever-TurtleWoW-is-installed/WTF/Account/[AccountName]/[RealmName]/[CharacterName]" there's a file called layout-cache.txt which stores the position of all your various UI windows.
If a window should be appearing, but you can't see it, try changing the broken window's X and Y values to the those of an already-functioning window.

