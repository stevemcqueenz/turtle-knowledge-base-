---
title: "\"Failed to reach update server\" issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16174"
topic_id: 16174
forum_id: 3
forum: "Help & Support"
author: "Ulfjaeger"
author_authority: "player"
posted: "2024-11-27T23:24:00Z"
last_post: "2024-11-28T11:51:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:49:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# "Failed to reach update server" issue

## Post 110262 by Ulfjaeger — 2024-11-27T23:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110262#p110262 | page 1 | era: pre-1.18.1 -->

hello, i'm having an issue where the launcher won't locate the update server.

in the settings menu  it says

"Select Download Region"

'world'   or 'china' : world is selected

:Select Client Version:  No options available.

 ---------log file----------------------------

[2024-11-26 07:13:42.033] [info]  Launcher v1.2.2 starting...
[2024-11-26 07:13:48.270] [info]  Download region changed: "undefined" -> "en"
[2024-11-26 07:13:58.307] [warn]  Failed to fetch "[https://launcher.turtlecraft.gg/api/ser ... 2634028271](https://launcher.turtlecraft.gg/api/servers?cacheBust=1732634028271)" TypeError: fetch failed
at Object.fetch (node:internal/deps/undici/undici![:11576:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/11576.svg)11)
at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
at async fetchWithMirrors (evalmachine.<anonymous>:1:21935)
at async fetchWithMirrorsAndAuth (evalmachine.<anonymous>:1:22484)
at async fetchServers (evalmachine.<anonymous>:1:25297)
at async evalmachine.<anonymous>:1:81432
at async resolveMiddleware (C:\Users\JStac\AppData\Local\Temp\2p5g2vO5mZmmOtrz1ugHVsSHiuZ\resources\app.asar\node_modules\@trpc\server\dist\index.js:422:30)
at async callRecursive (C:\Users\JStac\AppData\Local\Temp\2p5g2vO5mZmmOtrz1ugHVsSHiuZ\resources\app.asar\node_modules\@trpc\server\dist\index.js:458:32)
at async callRecursive (C:\Users\JStac\AppData\Local\Temp\2p5g2vO5mZmmOtrz1ugHVsSHiuZ\resources\app.asar\node_modules\@trpc\server\dist\index.js:458:32)
at async evalmachine.<anonymous>:1:27370

## Post 110341 by Vanth (Turtle WoW Team) [STAFF] — 2024-11-28T11:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110341#p110341 | page 1 | era: pre-1.18.1 -->

Please visit our Discord server and ask for assistance in the Launcher-support channel.

Here support will assist you with any issues related to the launcher.

