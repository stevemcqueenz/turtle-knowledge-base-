---
title: "Stuck in a New Launcher Install loop"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20988"
topic_id: 20988
forum_id: 3
forum: "Help & Support"
author: "Agorilla"
author_authority: "player"
posted: "2025-08-15T23:01:00Z"
last_post: "2025-10-10T22:15:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T08:39:15Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Stuck in a New Launcher Install loop

## Post 145964 by Agorilla — 2025-08-15T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145964#p145964 | page 1 | era: pre-1.18.1 -->

I got past the "Verify your game data by clicking retry" issue only to get stuck in a New Launcher Install loop. I tried the following:

Attempt 1:
Click Install > TurtleWoW Setup 'Next' > *Add/Reinstall components* > Destination Folder: C:\Games\TurtleWoW 'Next' > Setup Complete > Run TurtleWoW > "New Launcher version is available!"
// Only 'Cache' (empty) and 'WTF' (config.wtf) folders exist in Destination Folder.

Attempt 2:
Click Install > TurtleWoW Setup 'Next' > U*ninstall TurtleWoW* > Uninstalling from:  C:\Games\TurtleWoW > Install Destination Folder: C:\Games\TurtleWoW > Setup Complete > Run TurtleWoW > "New Launcher version is available!"
// Only 'Cache' (empty) and 'WTF' (config.wtf) folders exist in Destination Folder.

Either way it's back to square one. Data folder is never created.

## Post 145972 by Bheilman — 2025-08-15T23:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145972#p145972 | page 1 | era: pre-1.18.1 -->

I am stuck in the same loop.

## Post 145983 by Xirisxotol — 2025-08-15T23:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145983#p145983 | page 1 | era: pre-1.18.1 -->

samesies

## Post 145986 by Diogonesenuts4 — 2025-08-15T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145986#p145986 | page 1 | era: pre-1.18.1 -->

Same. I've got a thread going about it here as well:
[viewtopic.php?t=20985](https://forum.turtlecraft.gg/viewtopic.php?t=20985)

No solutions yet..

## Post 145989 by Supertefi1130 — 2025-08-15T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145989#p145989 | page 1 | era: pre-1.18.1 -->

I had already installed and I was online. Now I try to get back and is asking to update, and Im stuck on this loop.

## Post 145995 by Agorilla — 2025-08-15T23:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145995#p145995 | page 1 | era: pre-1.18.1 -->

Update:

I'm getting the following error now:
Hash mismatch for "TurtleWoW.exe" after download: expected 69D7050755C6394B982B53433DBF3479A3B4379E061282168C7B3625DB1218E7, got 1A12CEC647659AFB71AA75E77B64BAFD7846C50E50930942755AF405CB7FC6C6

I tried the update a few times. Here are the logs:
[2025-08-15 13:44:48.799] [info] [SETUP]
───────────────────
│ Launcher v2.2.1 │
───────────────────
[2025-08-15 13:44:48.854] [info] [STRONGHOLD] Loaded
[2025-08-15 13:44:48.871] [info] [Fetch] Cache miss for "/api/mirrors"
[2025-08-15 13:44:53.667] [info] [UPDATER] Launching client at ""
[2025-08-15 13:44:53.667] [info] [Fetch] Cache miss for "/api/regions"
[2025-08-15 13:44:53.667] [info] [Fetch] Cache miss for "/api/versions"
[2025-08-15 13:44:54.053] [warn] [SETUP] Region "undefined" not found, resetting account
[2025-08-15 13:45:02.786] [info] [AUTH] Logged in as Username@EU
[2025-08-15 13:45:02.793] [info] [UPDATER] Launching client at ""
[2025-08-15 13:45:02.797] [info] [ADDONS] Verifying...
[2025-08-15 13:45:02.804] [info] [Fetch] Cache miss for "/api/news/tweets"
[2025-08-15 13:45:02.804] [info] [Fetch] Cache miss for "/api/news/changelogs"
[2025-08-15 13:45:02.925] [info] [UPDATER] Verifying client files at ""...
[2025-08-15 13:45:02.927] [info] [Fetch] Cache miss for "/api/manifest?build=exe&version=EU&language=en"
[2025-08-15 13:45:04.103] [info] [UPDATER] New version available: 2.2.2
[2025-08-15 13:45:08.603] [info] [Fetch] Cache miss for "/api/launcher/TurtleWoW.exe"
[2025-08-15 13:45:08.701] [info] [UPDATER] Downloading launcher update...
[2025-08-15 13:45:08.970] [warn] [RUST] resumable_fetch [0]: Invalid range 12289120
[2025-08-15 13:45:10.022] [error] [RUST] update_file: Hash mismatch for "TurtleWoW.exe" after download: expected 69D7050755C6394B982B53433DBF3479A3B4379E061282168C7B3625DB1218E7, got 1A12CEC647659AFB71AA75E77B64BAFD7846C50E50930942755AF405CB7FC6C6
[2025-08-15 13:45:10.025] [info] [API] Logging activity "launcher_update_failed" Detail:
"Hash mismatch for \"TurtleWoW.exe\" after download: expected 69D7050755C6394B982B53433DBF3479A3B4379E061282168C7B3625DB1218E7, got 1A12CEC647659AFB71AA75E77B64BAFD7846C50E50930942755AF405CB7FC6C6"
[2025-08-15 13:45:10.025] [error] [UPDATER] Launcher update failed Hash mismatch for "TurtleWoW.exe" after download: expected 69D7050755C6394B982B53433DBF3479A3B4379E061282168C7B3625DB1218E7, got 1A12CEC647659AFB71AA75E77B64BAFD7846C50E50930942755AF405CB7FC6C6
[2025-08-15 13:45:49.408] [info] [UPDATER] Verifying client files at ""...
[2025-08-15 13:45:49.412] [info] [UPDATER] New version available: 2.2.2
[2025-08-15 13:45:50.624] [info] [UPDATER] Downloading launcher update...
[2025-08-15 13:45:50.690] [info] [RUST] resumable_fetch: Already downloaded

 --------------------
Pepesmite's guidelines were followed: [viewtopic.php?p=145920#p145920](https://forum.turtlecraft.gg/viewtopic.php?p=145920#p145920)

## Post 146013 by Sushileaf — 2025-08-16T00:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146013#p146013 | page 1 | era: pre-1.18.1 -->

Yup. Same for me.
Open launcher. New launcher version! Please update!
Click update. Installer opens.
Asks me to uninstall or not uninstall.
Earlier tried not uninstalling (didn't want to brick all my addons and stuff).
But this lead to redownloading the entire client? Annoying.
But here we are again, back fighting this installer boss.
I don't want to redownload the game again. I have bad enough internet.
Something feels off.

## Post 146076 by Mweaver — 2025-08-16T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146076#p146076 | page 1 | era: pre-1.18.1 -->

Pretty much the same. I've uninstalled, add to and update, and just update and no mater what the download always stops. 6 times I've tried! Nothing works.

## Post 146091 by Tophertronic — 2025-08-16T08:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146091#p146091 | page 1 | era: pre-1.18.1 -->

I'm having the same problem and considering how many people are reporting the issue, I'm surprised there hasn't been any official response on this as yet.

I have found that deleting appdata does not make a difference, so don't do that, some people claim it work's but I think that's just coincidence, or they've got a slightly different problem.

I am installing on a new computer, so nothing related to Turtle WOW already exists, and I was getting this loop where the game wouldn't even do the initial download of game files, as is described here.
If that happens, close the launcher, then delete the cache and WTF folders that are in your turtle wow install folder, they're probably the only ones there, and are most likely empty anyway.
Then run the launcher again and verify the game files, and it should at least start downloading.

Chances are you'll still get to patch 8 and it'll fail as it has done for me, but it's a slight improvement.

## Post 146098 by Jumpman1337 — 2025-08-16T08:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146098#p146098 | page 1 | era: pre-1.18.1 -->

My download got stuck at 95% 3 times now. I have been putting off coming to this server and to be up against this issue is really upsetting. I hope this gets fixed before the new servers go live.

## Post 146104 by Mekk (Barrens Chat Casualty) — 2025-08-16T09:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146104#p146104 | page 1 | era: pre-1.18.1 -->

You can manually install the update from here: <https://eudl.turtlecraft.gg/Patch1.18.0.zip>

## Post 146129 by Tyynae1 — 2025-08-16T11:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146129#p146129 | page 1 | era: pre-1.18.1 -->

failed to read directory at path: with error: Системе не удается найти указанный путь. (os error 3)
При установке в дефолтные пути.
полностью со всем говном удалял и лаунчер и клиент.
Скачиваю лаунчер с сайта и устанавливаю всё (обновление клиента через лаунчер).
Нахожусь в системе с правами администратора.
Пошли вторые сутки...

## Post 155055 by classroomrevenue — 2025-10-10T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155055#p155055 | page 1 | era: 1.18.1-announced-pre-release -->

Before the new servers go online, I hope this is resolved.

> **Mekk wrote: Sat Aug 16, 2025 9:18 am**
> You can manually install the update from here: <https://eudl.turtlecraft.gg/Patch1.18.0.zip> [geometry dash](https://geometrydash-2.bitbucket.io/)

## Post 155117 by Zubari — 2025-10-10T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155117#p155117 | page 1 | era: 1.18.1-announced-pre-release -->

My fix was backup all my interface, WTF, data folders. uninstall twow & launcher completely.
fresh install run it once. no mods or addons.
Then after all that put all my backups ect back into their original spots.

