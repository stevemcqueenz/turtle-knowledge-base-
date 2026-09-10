---
title: "Launcher Error: Failed to reach update server"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20185"
topic_id: 20185
forum_id: 3
forum: "Help & Support"
author: "Eightysixed"
author_authority: "player"
posted: "2025-07-06T14:59:00Z"
last_post: "2025-07-31T01:40:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:42:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher Error: Failed to reach update server

## Post 138250 by Eightysixed (Barrens Chat Casualty) — 2025-07-06T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138250#p138250 | page 1 | era: pre-1.18.1 -->

Unable to login on the launcher.

I can login on the website, forums and launching WoW.exe but not the launcher. Any ideas?

This is a fresh new PC I downloaded the game on, I downloaded the who game ZIP.

## Post 138253 by Eightysixed (Barrens Chat Casualty) — 2025-07-06T15:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138253#p138253 | page 1 | era: pre-1.18.1 -->

Launcher Log

> [2025-07-05 23:18:28.543] [info]  Launcher v1.3.1 starting in "C:\Games\TurtleWoW"...
>  [2025-07-05 23:18:29.962] [info]  Reading client version...
>  [2025-07-05 23:18:29.968] [info]  Client version is: 1.17.2 (7207)
>  [2025-07-05 23:18:29.971] [info]  [Fetch] Cache miss for "/api/versions"
>  [2025-07-05 23:18:31.056] [info]  Local version "1.17.2 (7207)" is missing, setting based on server "undefined"
>  [2025-07-05 23:18:31.467] [info]  [Fetch] Cache miss for "/api/mirrors"
>  [2025-07-05 23:19:01.741] [info]  [Fetch] Cache miss for "/api/servers"
>  [2025-07-05 23:19:28.970] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"The password is incorrect."}
>  [2025-07-05 23:19:28.976] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:19:54.267] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"The password is incorrect."}
>  [2025-07-05 23:19:54.271] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:21:00.502] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"The password is incorrect."}
>  [2025-07-05 23:21:00.507] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:21:13.451] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:21:13.456] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:35:25.117] [info]  Launcher v1.3.1 starting in "C:\Games\TurtleWoW"...
>  [2025-07-05 23:35:26.536] [info]  Local version "1.17.2 (7207)" is missing, setting based on server "undefined"
>  [2025-07-05 23:35:47.089] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"The password is incorrect."}
>  [2025-07-05 23:35:47.094] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:35:56.107] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:35:56.112] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:38:13.908] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:38:13.913] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:40:31.718] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:40:31.723] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:40:32.878] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:40:32.883] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:41:39.147] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:41:39.152] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-05 23:43:13.471] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-05 23:43:13.476] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 00:11:15.662] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 00:11:15.667] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 00:14:25.551] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 00:14:25.556] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 00:14:26.632] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 00:14:26.637] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 00:16:02.814] [error] Renderer process crashed { reason: 'killed', exitCode: 1073807364 }
>  [2025-07-06 10:46:54.064] [info]  Launcher v1.3.1 starting in "C:\Games\TurtleWoW"...
>  [2025-07-06 10:46:54.257] [info]  Local version "1.17.2 (7207)" is missing, setting based on server "undefined"
>  [2025-07-06 10:46:54.628] [info]  [Fetch] Cache miss for "/api/mirrors"
>  [2025-07-06 10:47:15.508] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 10:47:15.513] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 10:47:16.843] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 10:47:16.848] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 10:57:34.231] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 10:57:34.236] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }
>  [2025-07-06 11:18:35.212] [error] Failed to fetch "/login": 400 Bad Request {"status":"error","message":"{\"oneTimeCode\":[\"The one time code field is required.\"]}"}
>  [2025-07-06 11:18:35.217] [error] Failed to sign in { ok: false, message: { id: 'general.server_unreachable' } }

## Post 142282 by michaelarrington — 2025-07-31T01:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142282#p142282 | page 1 | era: pre-1.18.1 -->

Since you can launch WoW.exe directly, the game files seem fine, so the issue is likely isolated to the launcher’s authentication process. If none of these work, I’d recommend submitting a ticket to Blizzard Support with details about the launcher error (if any) and mentioning it’s a fresh install. [Golf Hit](https://golfhitgame.org)

