---
title: "Unexpected error; Data/patch-9.mpq"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22243"
topic_id: 22243
forum_id: 3
forum: "Help & Support"
author: "Sudsymcgrin"
author_authority: "player"
posted: "2025-10-04T22:25:00Z"
last_post: "2025-10-07T06:42:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:39:22Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Unexpected error; Data/patch-9.mpq

## Post 154367 by Sudsymcgrin — 2025-10-04T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154367#p154367 | page 1 | era: 1.18.1-announced-pre-release -->

Running Linux: OpenMandriva LX 6.0 with KDE Plasma 6.3.4 (desktop)
Computer: AMD Ryzen 9 5900X, 32 GB RAM, AMD Radeon RX 5600 XT graphics card

Downloaded the App Image, logged in, and I cannot update the client because of the following:

Failed to update "patch-9.mpq"
 --------------
"Hash mismatch for \"DBFilesClient/AreaPOI.dbc\" after download: expected 5766431D9D89D7ADFDE3211B3F348318D46A417C75918AECA887B7539485EFC3, got D4E154C3DC477702D5B0B07354D5193CAEFD24834E8A3E7477425E301DB34FE9"

I have another computer, slightly different specs but same OS; and it's been running the client like a champ.

Just looking to see if we can get this fixed!  Thanks!

Let me know if there is an update to the item in question that solves the hash mismatch.

## Post 154572 by Markuth — 2025-10-06T07:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154572#p154572 | page 1 | era: 1.18.1-announced-pre-release -->

Clear Launcher's cache then reverify and update.

You can clear cache manually as well by removing files from this folder:
Linux: ~/.local/share/turtle-wow/file-cache
Windows: wherever launcher installs its files but probably in %APPDATA%

Problem is most likely caused by launcher using the same name in cache for files from 2 different mpq files which causes this error.

## Post 154660 by Sudsymcgrin — 2025-10-07T02:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154660#p154660 | page 1 | era: 1.18.1-announced-pre-release -->

Cleared my cache, deleted everything but the App Image, and "Emptied Trash" on the deleted items folder...

Updating now, fingers crossed!

## Post 154671 by Markuth — 2025-10-07T06:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154671#p154671 | page 1 | era: 1.18.1-announced-pre-release -->

Just don’t remove already downloaded game files. You need them to avoid error to occur again. You only really need to clean cache folder and that’s it.

