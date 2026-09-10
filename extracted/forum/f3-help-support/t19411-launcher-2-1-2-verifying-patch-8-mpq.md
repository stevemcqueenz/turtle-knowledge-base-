---
title: "[Launcher 2.1.2] Verifying patch-8.mpq..."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19411"
topic_id: 19411
forum_id: 3
forum: "Help & Support"
author: "Doroh"
author_authority: "player"
posted: "2025-05-19T14:44:00Z"
last_post: "2025-05-19T14:44:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T08:44:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Launcher 2.1.2] Verifying patch-8.mpq...

## Post 131961 by Doroh — 2025-05-19T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131961#p131961 | page 1 | era: pre-1.18.1 -->

I'm having trouble every time I start the launcher in linux. It seems to work much better than before but there's a new problem, it takes too much time *verifying patch-8.mpq* to set the current status of the client. So i cannot click PLAY until it finishes it. It takes around 2 minutes every launch.

The client is in a SSD, so the disk speed should not be a problem. Another thing that happens while verifying is that I cannot open the file explorer.
Code: Select all

```
[dorox@asus ~/Games/turtlewow/drive_c/Program Files (x86)]$ time ./TurtleWoW.AppImage
Starting Tauri application...
Gtk-Message: 10:30:54.160: Failed to load module "xapp-gtk3-module"
/usr/lib/x86_64-linux-gnu/gvfs/libgvfscommon.so: undefined symbol: g_task_set_static_name
Failed to load module: /usr/lib/x86_64-linux-gnu/gio/modules/libgvfsdbus.so
Gtk-Message: 10:30:54.593: Failed to load module "xapp-gtk3-module"
/usr/lib/x86_64-linux-gnu/gvfs/libgvfscommon.so: undefined symbol: g_task_set_static_name
Failed to load module: /usr/lib/x86_64-linux-gnu/gio/modules/libgvfsdbus.so
Entering setup_app
App data path: "/home/dorox/.local/share/turtle-wow"
Stronghold plugin initialized
Log plugin initialized
/usr/lib/x86_64-linux-gnu/gvfs/libgvfscommon.so: undefined symbol: g_task_set_static_name
Failed to load module: /usr/lib/x86_64-linux-gnu/gio/modules/libgvfsdbus.so
[2025-05-19 10:30:56.836] [info] [STRONGHOLD] Loaded
[2025-05-19 10:30:56.887] [info] [SETUP]
───────────────────
│ Launcher v2.1.2 │
───────────────────
[2025-05-19 10:30:56.903] [info] [UPDATER] Launching client at "/home/dorox/Games/turtlewow/drive_c/Program Files (x86)"
[2025-05-19 10:30:57.359] [info] [AUTH] Authenticated as au6usto@SA
[2025-05-19 10:30:57.408] [info] [ADDONS] Verifying...

** (WebKitWebProcess:612169): WARNING **: 10:30:57.501: The GStreamer FDK AAC plugin is missing, AAC playback is unlikely to work.
[2025-05-19 10:30:57.634] [info] [UPDATER] Verifying client files at "/home/dorox/Games/turtlewow/drive_c/Program Files (x86)"...
[2025-05-19 10:30:58.425] [error] [ADDONS] Failed to search for addons in "/home/dorox/Games/turtlewow/drive_c/Program Files (x86)/Interface/AddOns/Classic-Snowfall/.git" forbidden path: /home/dorox/Games/turtlewow/drive_c/Program Files (x86)/Interface/AddOns/Classic-Snowfall/.git

** (turtle-wow:612119): WARNING **: 10:31:19.891: atk-bridge: get_device_events_reply: unknown signature
[2025-05-19 10:32:29.547] [info] [UPDATER] Client is up to date
[2025-05-19 10:32:29.605] [info] [UPDATER] Client version: 1.17.2 (7207)
[2025-05-19 10:32:29.607] [info] [PATCHER] Realm list set to "salogon.turtlecraft.gg"
[2025-05-19 10:32:29.684] [info] [PATCHER] Applied tweaks: farClip=777 fieldOfView=110 frillDistance=70 soundInBackground=true alwaysAutoLoot=true nameplateRange=41 cameraDistance=100
[2025-05-19 10:32:29.689] [info] [PATCHER] Config.wtf successfully patched
./TurtleWoW.AppImage  2,06s user 1,36s system 1% cpu 3:27,54 total
```

As you see there's 2 minutes approximately between these two log lines: Code: Select all

```
[2025-05-19 10:30:58.425] [error] [ADDONS] Failed to search for addons in "/home/dorox/Games/turtlewow/drive_c/Program Files (x86)/Interface/AddOns/Classic-Snowfall/.git" forbidden path: /home/dorox/Games/turtlewow/drive_c/Program Files (x86)/Interface/AddOns/Classic-Snowfall/.git

** (turtle-wow:612119): WARNING **: 10:31:19.891: atk-bridge: get_device_events_reply: unknown
```

Code: Select all

```
[2025-05-19 10:32:29.547] [info] [UPDATER] Client is up to date
```

