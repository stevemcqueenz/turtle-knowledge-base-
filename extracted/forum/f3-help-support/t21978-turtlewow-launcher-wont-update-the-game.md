---
title: "TurtleWoW Launcher wont update the game."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21978"
topic_id: 21978
forum_id: 3
forum: "Help & Support"
author: "Jessy_Berbers"
author_authority: "player"
posted: "2025-09-18T20:44:00Z"
last_post: "2025-11-12T14:48:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:38:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# TurtleWoW Launcher wont update the game.

## Post 152315 by Jessy_Berbers — 2025-09-18T20:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152315#p152315 | page 1 | era: pre-1.18.1 -->

Greetings Dear TurtleWoW developers or whoever can help with this issue.
When i try to update the client through the Launcher, on Linux (Nobara)
I get this Hash mismatch error.

Hash mismatch for "WoW.exe" after download: expected 5E7D0B62B48BB505C74FA1D28F3C173DEA8545929FFF772B2E346E7E6803F898, got 9BE1F0486A1C67E13A34B9680AE9A8F33A3FC4D376D61D64CD26CBAFCBFF381D

Dont know how to fix this plus Patch-9 wont download either with the same or similar error.

Some additional information from runing the launcher in the Console.
Code: Select all

```
Starting Tauri application...
Entering setup_app
App data path: "/home/jessyb/.local/share/turtle-wow"
Stronghold plugin initialized
Log plugin initialized
[2025-09-18 22:46:26.897] [info] [STRONGHOLD] Loaded
[2025-09-18 22:46:26.904] [info] [SETUP]
───────────────────
│ Launcher v2.1.2 │
───────────────────
[2025-09-18 22:46:26.904] [info] [UPDATER] Launching client at "/home/jessyb/Games/TurtleWoW"
[2025-09-18 22:46:27.191] [info] [AUTH] Authenticated as Jessy_Berbers@EU
[2025-09-18 22:46:27.194] [info] [ADDONS] Verifying...

** (WebKitWebProcess:20928): WARNING **: 22:46:27.226: The GStreamer FDK AAC plugin is missing, AAC playback is unlikely to work.
[2025-09-18 22:46:27.298] [error] Unknown BCCode tag "hotfix"
[2025-09-18 22:46:27.370] [info] [UPDATER] Verifying client files at "/home/jessyb/Games/TurtleWoW"...
[2025-09-18 22:46:27.414] [info] [Fetch] Cache miss for "/api/launcher/TurtleWoW.AppImage"
[2025-09-18 22:46:27.558] [info] [Fetch] Cache miss for "/api/manifest?version=EU&language=en"
[2025-09-18 22:46:28.522] [info] [UPDATER] Detected changes:
++ WoW.exe,
 ** Data/patch-9.mpq (Creature/DeathKnightWC2/DeathKnightWC2Mount.m2, Creature/Ragnaros/Ragnaros.m2, Creature/Stag/StagMount.m2, DBFilesClient/AreaPOI.dbc, DBFilesClient/AreaTable.dbc, DBFilesClient/AreaTrigger.dbc, DBFile)
[2025-09-18 22:46:28.551] [info] [UPDATER] Client version: 1.18.0 (7228)
[2025-09-18 22:46:28.552] [info] [PATCHER] Realm list set to "logon.turtlecraft.gg"
[2025-09-18 22:46:28.580] [info] [PATCHER] Applied tweaks: farClip=1500 fieldOfView=110 frillDistance=300 soundInBackground=true alwaysAutoLoot=false nameplateRange=41 cameraDistance=50
[2025-09-18 22:46:28.582] [info] [PATCHER] Config.wtf successfully patched

** (turtle-wow:20873): WARNING **: 22:46:51.219: atk-bridge: get_device_events_reply: unknown signature
[2025-09-18 22:47:02.155] [info] [UPDATER] Updating client files at "/home/jessyb/Games/TurtleWoW"...
[2025-09-18 22:47:02.223] [info] [RUST] resumable_fetch [retry 0]: https://turtle-eu.b-cdn.net/client/5E7D0B62B48BB505C74FA1D28F3C173DEA8545929FFF772B2E346E7E6803F898/WoW.exe
[2025-09-18 22:47:02.357] [info] [RUST] resumable_fetch: Already downloaded
[2025-09-18 22:47:02.363] [error] [RUST] update_file: Hash mismatch for "WoW.exe" after download: expected 5E7D0B62B48BB505C74FA1D28F3C173DEA8545929FFF772B2E346E7E6803F898, got 9BE1F0486A1C67E13A34B9680AE9A8F33A3FC4D376D61D64CD26CBAFCBFF381D
[2025-09-18 22:47:02.365] [error] [UPDATER] Download failed: Hash mismatch for "WoW.exe" after download: expected 5E7D0B62B48BB505C74FA1D28F3C173DEA8545929FFF772B2E346E7E6803F898, got 9BE1F0486A1C67E13A34B9680AE9A8F33A3FC4D376D61D64CD26CBAFCBFF381D
[2025-09-18 22:47:02.414] [info] [UPDATER] Client version: 1.18.0 (7228)
[2025-09-18 22:47:02.415] [info] [PATCHER] Realm list set to "logon.turtlecraft.gg"
[2025-09-18 22:47:02.453] [info] [PATCHER] Applied tweaks: farClip=1500 fieldOfView=110 frillDistance=300 soundInBackground=true alwaysAutoLoot=false nameplateRange=41 cameraDistance=50
[2025-09-18 22:47:02.454] [info] [PATCHER] Config.wtf successfully patched
```

## Post 159222 by Serve1337 — 2025-11-11T20:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159222#p159222 | page 1 | era: 1.18.1-announced-pre-release -->

Hi Jessy,
i encountered the same issue today, for me i just needed to use "Verify game files" function at the settings page. After i was able to download and install the game without any issue.

Best

## Post 159365 by Ironbob (Barrens Chat Casualty) — 2025-11-12T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159365#p159365 | page 1 | era: 1.18.1-announced-pre-release -->

U got some fixes in my post for linux including the new beta launcher.

[viewtopic.php?t=19067](https://forum.turtlecraft.gg/viewtopic.php?t=19067)

