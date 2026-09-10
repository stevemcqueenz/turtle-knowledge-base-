---
title: "[Fix] [Linux] WoW.exe ran out of memory error"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3299"
topic_id: 3299
forum_id: 3
forum: "Help & Support"
author: "Hubertus"
author_authority: "player"
posted: "2022-07-19T15:33:00Z"
last_post: "2022-07-19T15:33:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:24:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Fix] [Linux] WoW.exe ran out of memory error

## Post 20116 by Hubertus — 2022-07-19T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20116#p20116 | page 1 | era: pre-1.18.1 -->

I switched over from Windows as my main OS a few months ago and never attempted to run the client by TurtleWoW with wine / Crossover before. The game runs great in general, but seemed to crash at random moments because it was running out of memory.
My foolish old self even tried installing the HD mod from this forum, which caused the game to instantly crash or after only few minutes of gameplay with the same out of memory error.

The reason for it was, that the client tried to allocate more than 4GB of RAM but wasn't able to which caused the crash.

Other 4GB unlock patches that I tried applied did nothing, but using the one by NTcore did the job.

 4GB Patch download: <https://ntcore.com/?page_id=371>

Make sure to run the patch from inside the correct wine bottle and give it the WoW.exe as argument instead of relying on the UI (which never appeared for me).

Maybe this will save somebody else a few days of research.

