---
title: "MacOS Parallels download error - Apple Silicon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16894"
topic_id: 16894
forum_id: 3
forum: "Help & Support"
author: "Sichieri"
author_authority: "player"
posted: "2025-01-04T16:12:00Z"
last_post: "2025-01-04T16:12:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:48:18Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# MacOS Parallels download error - Apple Silicon

## Post 115413 by Sichieri — 2025-01-04T16:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115413#p115413 | page 1 | era: pre-1.18.1 -->

Hello guys.

I have some trouble when I try to download the game in Parallales Desktop for Mac.

I'm using the version 20.1.1 from 2024 and when the "patch-3.mpq" download finish I got the message:

"Error: Unexpected error occured
Verigy your game data by clicking Retry"

It happened several times.

Does anyone know what to do?

PS: My Mac is an Apple Silicon Mac.

Thx

 ---------------------

After a few hours of attempts I found out that the problem was the installation folder.

Do not use a Mac shared folder, like the standard Download folder on macOS to set as the main TurtleWow folder. I don't know why, but the download was never completed.

I changed the installation folder to C: in the virtual machine hard drive and it worked well.

I'm playing 60 fps + with no problem.

Thx

