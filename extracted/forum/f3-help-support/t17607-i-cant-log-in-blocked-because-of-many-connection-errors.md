---
title: "i cant log in \"blocked because of many connection errors\""
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17607"
topic_id: 17607
forum_id: 3
forum: "Help & Support"
author: "Ciroasav17"
author_authority: "player"
posted: "2025-02-17T10:31:00Z"
last_post: "2025-02-17T11:38:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:47:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# i cant log in "blocked because of many connection errors"

## Post 120190 by Ciroasav17 — 2025-02-17T10:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120190#p120190 | page 1 | era: pre-1.18.1 -->

when i try to log in in launcher it says host is blocked because of many connection errors unblock with mariadb-admin flush-hosts?
can someone help?

## Post 120192 by Aswat — 2025-02-17T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120192#p120192 | page 1 | era: pre-1.18.1 -->

exactly the same problem (  unhappy_turtle

## Post 120193 by Guilleelg — 2025-02-17T10:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120193#p120193 | page 1 | era: pre-1.18.1 -->

Me too

## Post 120195 by Delwendur — 2025-02-17T11:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120195#p120195 | page 1 | era: pre-1.18.1 -->

Same here, some logs hopping that'll help :

[2025-02-17 11:41:25.931] [info]  Launcher v1.3.1 starting in "C:\Users\XXXXX\Downloads\twmoa_1172"...
[2025-02-17 11:41:26.185] [info]  [Fetch] Cache miss for "/api/servers"
[2025-02-17 11:41:26.918] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:41:26.955] [info]  [Fetch] Cache miss for "/api/versions"
[2025-02-17 11:41:27.124] [info]  Local version "1.17.2 (7206)" is missing, setting based on server "EU"
[2025-02-17 11:41:27.713] [info]  [Fetch] Cache miss for "/api/mirrors"
[2025-02-17 11:41:37.912] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:41:40.727] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:41:41.829] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:41:42.751] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:41:43.425] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:41:52.453] [warn]  Failed to sign in SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'
[2025-02-17 11:41:52.454] [error] Failed to sign in {
ok: false,
message: "SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'"
}
[2025-02-17 11:42:04.377] [warn]  Failed to sign in SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'
[2025-02-17 11:42:04.377] [error] Failed to sign in {
ok: false,
message: "SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'"
}
[2025-02-17 11:42:21.587] [warn]  Failed to sign in SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'
[2025-02-17 11:42:21.588] [error] Failed to sign in {
ok: false,
message: "SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'"
}
[2025-02-17 11:42:42.644] [info]  Launcher v1.3.1 starting in "C:\Users\xxxxx\Downloads\twmoa_1172"...
[2025-02-17 11:42:42.765] [info]  Local version "1.17.2 (7206)" is missing, setting based on server "EU"
[2025-02-17 11:42:46.342] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}
[2025-02-17 11:43:02.522] [warn]  Failed to sign in SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'
[2025-02-17 11:43:02.523] [error] Failed to sign in {
ok: false,
message: "SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'"
}
[2025-02-17 11:44:19.526] [warn]  Failed to sign in SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'
[2025-02-17 11:44:19.527] [error] Failed to sign in {
ok: false,
message: "SQLSTATE[HY000] [1129] Host '10.10.0.101' is blocked because of many connection errors; unblock with 'mariadb-admin flush-hosts'"
}
[2025-02-17 11:44:30.852] [info]  Verifying client files at C:\Users\xxxxx\Downloads\twmoa_1172...
[2025-02-17 11:44:31.212] [warn]  Cleaning up client's cache...
[2025-02-17 11:44:31.268] [info]  [Fetch] Cache miss for "/api/files/EU"
[2025-02-17 11:44:31.506] [warn]  Failed to fetch "[https://launcher.turtlecraft.gg/api/fil ... 9789071269](https://launcher.turtlecraft.gg/api/files/EU?cacheBust=1739789071269)" {"error":"Unauthorized"}
[2025-02-17 11:44:31.914] [warn]  Failed to fetch "[https://cnlauncher.turtlecraft.gg/api/f ... 9789071269](https://cnlauncher.turtlecraft.gg/api/files/EU?cacheBust=1739789071269)" {"error":"Unauthorized"}
[2025-02-17 11:44:31.915] [warn]  [Fetch] Failed to fetch "/api/files/EU" { ok: false }
[2025-02-17 11:44:31.916] [error] Can't verify, no manifest returned from server
[2025-02-17 11:45:30.604] [info]  Verifying client files at C:\Users\xxxxx\Downloads\twmoa_1172...
[2025-02-17 11:45:30.902] [warn]  Cleaning up client's cache...
[2025-02-17 11:45:30.905] [info]  [Fetch] Cache miss for "/api/files/EU"
[2025-02-17 11:45:31.000] [warn]  Failed to fetch "[https://launcher.turtlecraft.gg/api/fil ... 9789130905](https://launcher.turtlecraft.gg/api/files/EU?cacheBust=1739789130905)" {"error":"Unauthorized"}
[2025-02-17 11:45:31.202] [warn]  Failed to fetch "[https://cnlauncher.turtlecraft.gg/api/f ... 9789130905](https://cnlauncher.turtlecraft.gg/api/files/EU?cacheBust=1739789130905)" {"error":"Unauthorized"}
[2025-02-17 11:45:31.203] [warn]  [Fetch] Failed to fetch "/api/files/EU" { ok: false }
[2025-02-17 11:45:31.203] [error] Can't verify, no manifest returned from server
[2025-02-17 11:45:45.364] [info]  Launcher v1.3.1 starting in "C:\Users\xxxxxx\Downloads\twmoa_1172"...
[2025-02-17 11:45:45.514] [info]  Local version "1.17.2 (7206)" is missing, setting based on server "EU"
[2025-02-17 11:45:50.451] [error] Failed to fetch "/me": 500 Internal Server Error {
"message": "Server Error"
}

## Post 120198 by Pivoo — 2025-02-17T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120198#p120198 | page 1 | era: pre-1.18.1 -->

I was in the game for a while, then lag, I wanted to log in again and the same thing, is anyone working on it? And why did it happen, maybe someone from the management will decide and explain it :-)

*Last edited by Pivoo on Mon Feb 17, 2025 11:21 am, edited 1 time in total.*

## Post 120200 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-02-17T11:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120200#p120200 | page 1 | era: pre-1.18.1 -->

Greetings!

The problem is known and we are working on fixing it

