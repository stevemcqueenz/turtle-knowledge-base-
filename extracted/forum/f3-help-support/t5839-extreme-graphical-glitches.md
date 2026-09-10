---
title: "Extreme Graphical Glitches"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5839"
topic_id: 5839
forum_id: 3
forum: "Help & Support"
author: "Andy9804"
author_authority: "player"
posted: "2023-03-04T08:14:00Z"
last_post: "2023-03-04T16:48:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:17:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Extreme Graphical Glitches

## Post 36785 by Andy9804 — 2023-03-04T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36785#p36785 | page 1 | era: pre-1.18.1 -->

Hi,
I bought a brandnew gaming Laptop last week, updates the graphics card, installed Turtle WoW and I now have extreme graphical glitches, which makes the game at times close to unplayable. I noticed it the first time at AQ20 and I can reproduce the error in Ironforge.
In If it looks like the ceiling broke down in rubbles or in AQ there´s all for sudden a wall and I cannot see anything. I would like to post some screenshots, but somehow I´m too stupid to make that happen.

## Post 36804 by Kyzen (Barrens Chat Casualty) — 2023-03-04T16:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36804#p36804 | page 1 | era: pre-1.18.1 -->

Are you using an AMD GPU ? I assume you're on Windows.

You might want to try the DXVK trick.

DXVK is a piece of software that aim to translate directx9 call into vulkan api call, mainly used on Linux, but you can use it on Linux.

Get here and get the latest version (tar.gz) : <https://github.com/doitsujin/dxvk/releases>
Unzip it, using a software like 7zip (I don't remember if Windows support it out of the box)
Go to the x32 folder and copy d3d9.dll and dxgi.dll
Paste it on your turtle wow folder (where wow.exe is located)

Run Turtle WoW and see if It helps. (It might stutter for a few seconds the first time because It's building a cache)

