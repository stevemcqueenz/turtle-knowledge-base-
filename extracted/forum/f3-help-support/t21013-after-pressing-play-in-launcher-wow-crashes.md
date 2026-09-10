---
title: "After pressing play in launcher Wow crashes"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21013"
topic_id: 21013
forum_id: 3
forum: "Help & Support"
author: "Lestash"
author_authority: "player"
posted: "2025-08-16T12:54:00Z"
last_post: "2025-08-16T14:27:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:41:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# After pressing play in launcher Wow crashes

## Post 146142 by Lestash — 2025-08-16T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146142#p146142 | page 1 | era: pre-1.18.1 -->

Hello,
After the latest update i have been unable to play TWow, I start the launcher, log in, update goes with no issues and when i press play the game launches and immidiatly stops i dont even get to see the WoW window. I have Reinstaled the game from scratch several times tried administrator mode, checked the firewall settings, deleted all the games records and reinstalled again and still its not working i can't seem to be able to fix the problem on my end.

I pulled the log file and it states the following:

[2025-08-16 13:10:20.036] [info] [LAUNCHER] Running "C:\Games\TurtleWow\WoW.exe"...
[2025-08-16 13:10:20.037] [info] [LAUNCHER] Custom DLLs: discordOverlay, vanillaFixes, no1600x1200, dxvk
[2025-08-16 13:10:21.592] [info] [twloader] Loaded: twdiscord.dll
[2025-08-16 13:10:21.613] [info] [twloader] Loaded: VfPatcher.dll
[2025-08-16 13:10:21.630] [info] [twloader] Loaded: no1600x1200.dll
[2025-08-16 13:10:22.564] [info] [API] Logging activity "game_launched"
[2025-08-16 13:10:22.670] [info] [PATCHER] WoW stopped with exit code -1073740791
[2025-08-16 13:10:22.774] [info] [UPDATER] Verifying client files at "C:\Games\TurtleWow"...
[2025-08-16 13:10:23.876] [info] [UPDATER] Client is up to date
[2025-08-16 13:10:23.893] [info] [UPDATER] Client version: 1.18.0 (7227)
[2025-08-16 13:10:23.912] [info] [PATCHER] Realm list set to "logon.turtlecraft.gg"
[2025-08-16 13:10:24.260] [info] [PATCHER] Applied tweaks: farClip=777 fieldOfView=110 frillDistance=70 soundInBackground=true alwaysAutoLoot=false nameplateRange=41 cameraDistance=50
[2025-08-16 13:10:24.284] [info] [PATCHER] Config.wtf successfully patched

Hope someone can assist me with this.

 17/08/2025 Edit:
After reinstalling today there seems to be a problem with patch 9.
launcher gives the following message:
Failed to update "patch-9.mpq"
 --------------
"Hash mismatch for \"DBFilesClient/AreaTable.dbc\" after download: expected F293B5D4F65EC20CC75608502F9D6B47EF49DB55FB5ECBE7EE4C5BD0E2DCA8C0, got DC7A7088B408933BC4E8E55E1DA380A575031A879676B7DC55A030FAD70FF7C7"

 18/08/2025 Edit:
Back to the original problem

*Last edited by Lestash on Mon Aug 18, 2025 6:00 pm, edited 2 times in total.*

## Post 146165 by Lark216 — 2025-08-16T14:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146165#p146165 | page 1 | era: pre-1.18.1 -->

I am having the same issue on windows 11 (via VMWare Fusion on my Mac) except I get this which crashes the launcher-

<https://ibb.co/39Tz6cwP>

<https://ibb.co/spRRYxYX>

