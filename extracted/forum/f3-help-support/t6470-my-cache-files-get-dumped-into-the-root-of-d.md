---
title: "My cache files get dumped into the root of D:/"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6470"
topic_id: 6470
forum_id: 3
forum: "Help & Support"
author: "Imonobor"
author_authority: "player"
posted: "2023-04-08T09:19:00Z"
last_post: "2023-04-22T09:30:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:14:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# My cache files get dumped into the root of D:/

## Post 40756 by Imonobor (Bug Report Enthusiast) — 2023-04-08T09:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40756#p40756 | page 1 | era: pre-1.18.1 -->

I have no idea why, but my Turtle WoW client puts the cache files (creaturecache.wdb and the like) in the root of my D:/ drive.
The install path for my client is D:\Games\World of Warcraft - Turtle\
Is there any way, through registry edits perhaps, to change its default directory, because it's bothering me?
Any help is appreciated!   satisfied_turtle

## Post 42550 by Imonobor (Bug Report Enthusiast) — 2023-04-22T09:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42550#p42550 | page 1 | era: pre-1.18.1 -->

Figured it out. I had a Patcher.exe that had an option "disable cache generation" that prevented the game exe from writing cache files inside its own folder, so instead it decided to use the root drive directory. Guess this option doesn't really work as intended, lol. Disabling it in the patcher fixed it.

