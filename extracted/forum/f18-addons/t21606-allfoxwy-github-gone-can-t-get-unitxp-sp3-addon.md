---
title: "allfoxwy GitHub Gone, Can't Get UnitXP_SP3_Addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21606"
topic_id: 21606
forum_id: 18
forum: "AddOns"
author: "Bigterrick"
author_authority: "player"
posted: "2025-09-01T02:16:00Z"
last_post: "2025-10-07T07:23:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:23:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# allfoxwy GitHub Gone, Can't Get UnitXP_SP3_Addon

## Post 149673 by Bigterrick — 2025-09-01T02:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149673#p149673 | page 1 | era: pre-1.18.1 -->

Hey everyone! New Turtle-r here.  [allfoxwy's GitHub](https://github.com/allfoxwy/) is gone, gives a 404 error, like the entire GitHub for allfoxwy was deleted. Was going through [RetroCro's awesome setup guide](https://github.com/RetroCro/TurtleWoW-Mods?tab=readme-ov-file). When I got to the part to download the UnitXP_SP3_Addon, was unable to do it since the GitHub went *poof*. I was thankfully able to get UnitXP_SP3 from the launcher, but not the addon, which only comes from GitHub, even through the launcher.

Does know an alternate download location for the addon, or possibly what happened?

## Post 149674 by Eroh (Barrens Chat Casualty) — 2025-09-01T02:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149674#p149674 | page 1 | era: pre-1.18.1 -->

<https://github.com/jrc13245/UnitXP_SP3>

## Post 149677 by Bigterrick — 2025-09-01T02:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149677#p149677 | page 1 | era: pre-1.18.1 -->

@Eroh thank you, that did the trick!!

For any newbs overly reliant on the launcher's "+ Add New addon" feature, this GitHub link won't work with it, since it's both the mod AND the addon.
1. Go to releases
2. Download the .zip
3. Pull the UnitXP_SP3_Addon folder out and put it in your TurtleWoW/Interface/Addons folder.
4. Rename the UnitXP_SP3.dll in your TurtleWoW folder to UnitXP_SP3.dll.bak
5. Copy UnitXP_SP3.dll from the zip to your TurtleWoW folder
6. When you open the launcher again, under mods, leave the "unitXP v51" checked, even though we're using a different version of the DLL.  This makes sure UnitXP_SP3.dll is added to the dlls.txt
Edit: Turns out you do still need the DLL, since this is v52, while the launcher has v51, and the addon won't work with the previous version.  Updated the above paragraph.

## Post 150107 by Tha0dan — 2025-09-03T20:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150107#p150107 | page 1 | era: pre-1.18.1 -->

> **Eroh wrote: Mon Sep 01, 2025 2:17 am**
> <https://github.com/jrc13245/UnitXP_SP3>

The version which seems to have all the commits from the longer existing upstream seems to be:
<https://github.com/KinTheInfinite/UnitXP_SP3.git>

## Post 154678 by Aleksxz — 2025-10-07T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154678#p154678 | page 1 | era: 1.18.1-announced-pre-release -->

You can find the original author on this other website, with updated unitXP :
<https://codeberg.org/konaka/UnitXP_SP3/releases>

