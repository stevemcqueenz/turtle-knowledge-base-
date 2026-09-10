---
title: "Intel and Nvidia graphics.... two displays"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23163"
topic_id: 23163
forum_id: 3
forum: "Help & Support"
author: "Animebox2014"
author_authority: "player"
posted: "2025-12-06T18:28:00Z"
last_post: "2025-12-06T20:10:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:37:59Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Intel and Nvidia graphics.... two displays

## Post 161824 by Animebox2014 — 2025-12-06T18:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161824#p161824 | page 1 | era: 1.18.1-announced-pre-release -->

I've read through the entire turtle-wow forum, tried various solutions, but haven't found a solution. How do I run the client at 2560x1080 on a computer with two graphics cards? My RTX5080 renders wow.exe, but I can't set it to 2560x1080.
PS: Disabling Intel graphics in the BIOS works, but that doesn't work for me.
![Image](https://i.imgur.com/Zh0iuMl.jpeg)
![Image](https://i.imgur.com/28HqSIt.jpeg)
![Image](https://i.imgur.com/eJjFwVS.jpeg)
![Image](https://i.imgur.com/GZMP7B6.jpeg)
The WOTLK client allows you to set 2560x1080, but Classic does not allow this   wary_turtle_head

## Post 161825 by Animebox2014 — 2025-12-06T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161825#p161825 | page 1 | era: 1.18.1-announced-pre-release -->

![Image](https://i.imgur.com/1uCD2Mq.png)
Custom mods from the launcher don't help

## Post 161826 by Animebox2014 — 2025-12-06T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161826#p161826 | page 1 | era: 1.18.1-announced-pre-release -->

The problem is 100% with the game client. I need to somehow explain to it that I need a resolution of 2560x1080. The 2004 year client doesn't understand how to interact with two video cards

## Post 161827 by Ironbob (Barrens Chat Casualty) — 2025-12-06T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161827#p161827 | page 1 | era: 1.18.1-announced-pre-release -->

Q1 ue5 client comes out. So soon u can do it.

## Post 161828 by Animebox2014 — 2025-12-06T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161828#p161828 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ironbob wrote: Sat Dec 06, 2025 6:47 pm**
> Q1 ue5 client comes out. So soon u can do it.

I need a solution here and now)

## Post 161830 by Ironbob (Barrens Chat Casualty) — 2025-12-06T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161830#p161830 | page 1 | era: 1.18.1-announced-pre-release -->

There is a mod called no 1600x something in launcher that might help if setup correctly

## Post 161831 by Animebox2014 — 2025-12-06T18:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161831#p161831 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ironbob wrote: Sat Dec 06, 2025 6:50 pm**
> There is a mod called no 1600x something in launcher that might help if setup correctly

Does this mod have settings? I thought you could only turn it on or off

## Post 161838 by Animebox2014 — 2025-12-06T19:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161838#p161838 | page 1 | era: 1.18.1-announced-pre-release -->

Was it really that hard to add a 2560x1080 resolution to "no1600x1200v6"?
((
I tried adding it to dxvk.com
# Override PCI vendor and device IDs reported to the application. Can
# cause the app to adjust behavior depending on the selected values.
#
# Supported values: Any four-digit hex number.

d3d9.customDeviceId = 10DE
d3d9.customVendorId = 2C59
I took the ID from GPU Z, but it didn't work.

## Post 161841 by Animebox2014 — 2025-12-06T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161841#p161841 | page 1 | era: 1.18.1-announced-pre-release -->

I found a solution) [https://github.com/Mates1500/VanillaMul ... me-ov-file](https://github.com/Mates1500/VanillaMultiMonitorFix?tab=readme-ov-file)
![Image](https://i.imgur.com/QWnEYDw.jpeg)

