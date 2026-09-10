---
title: "Launcher not installing the game correctly (solved)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22155"
topic_id: 22155
forum_id: 3
forum: "Help & Support"
author: "Xilc"
author_authority: "player"
posted: "2025-09-29T11:13:00Z"
last_post: "2025-09-29T11:19:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:39:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher not installing the game correctly (solved)

## Post 153657 by Xilc — 2025-09-29T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153657#p153657 | page 1 | era: pre-1.18.1 -->

Hi - I just installed a fresh copy of the game today using the client. It will not install the game properly, which I don't understand   scared_turtle   Here's the error code:

> failed to read directory at path: with error: The system cannot find the path specified. (os error 3)

I verified game files or clicked retry, neither are working at all. My game is in this path: C:\Games\TurtleWoW. Nothing here should cause an error, I verified on Steam installing another game here works perfectly fine so the directory isn't locked

*Last edited by Xilc on Mon Sep 29, 2025 11:20 am, edited 2 times in total.*

## Post 153659 by Xilc — 2025-09-29T11:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153659#p153659 | page 1 | era: pre-1.18.1 -->

FIXED. This appears to be caused by some sort of null value in the 'install' process on Windows. It has you pick an install location and automatically picks a 'TurtleWoW' folder that will be made. But the launcher then doesn't use that folder, and "cannot find the path". I opened the folder path picker, and chose the turtlewow folder it created on its own, which fixed it.

