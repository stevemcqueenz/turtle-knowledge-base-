---
title: "C++ Runtime Error every day"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22187"
topic_id: 22187
forum_id: 3
forum: "Help & Support"
author: "31venture"
author_authority: "player"
posted: "2025-10-01T16:42:00Z"
last_post: "2025-10-10T20:57:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:39:16Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# C++ Runtime Error every day

## Post 153936 by 31venture — 2025-10-01T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153936#p153936 | page 1 | era: pre-1.18.1 -->

I'm getting the C++ Runtime Error every single day. I used to only have it happen when I hadn't played in a few days, but now it's every time. I've deleted my WDb folder and re-installed Visual C redistributable runtime package all in one multiple times.

[Spongebob announcer voice: TWO MINUTES LATER]

Of course it's working now. I'm having to wait 2(?) minutes every time after deleting the WDB folder. 'Just do that first'. Ok. But every single day and wait 2 minutes? There's gotta be a solution other than this.

Thanks ahead of time.

## Post 153949 by Allwynd01 (Bug Report Enthusiast) — 2025-10-01T18:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=153949#p153949 | page 1 | era: pre-1.18.1 -->

It happens to me on Linux Mint 22.2. I thought this was a Linux thing only, but apparently not, after several tries and different launch options for Wine and PortProton, I am able to launch the game, but this was never an issue a few months ago. I remember it started no more than 2-3 months back. I don't know the reason behind it. I tried installing every Visual C++ Redistributable from 2005 until 2022 or whatever the latest is, both x86 and x64 and it doesn't change anything. This has to be a Turtle WoW-specific problem with some recent changes or updates.

I tried deleting WDB or reinstalling the game, but that doesn't work, sometimes rebooting Linux helps, but I assume the OP is using Windows, so it's not an OS-related issue.

## Post 154656 by 31venture — 2025-10-07T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154656#p154656 | page 1 | era: 1.18.1-announced-pre-release -->

Yes, on Win 10. I would love to run this on my Win 11 machine, but there's some wonky issue with the Lenovo Nvidia graphics drivers. Different bag of worms.

It was fine most of last week, but now it's back after the restart on Sunday.

I appreciate the response. Good to know I'm, not alone in the mix. Hope you get yours sorted.

## Post 154845 by Allwynd01 (Bug Report Enthusiast) — 2025-10-08T11:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154845#p154845 | page 1 | era: 1.18.1-announced-pre-release -->

> **31venture wrote: Tue Oct 07, 2025 12:21 am**
> Yes, on Win 10. I would love to run this on my Win 11 machine, but there's some wonky issue with the Lenovo Nvidia graphics drivers. Different bag of worms.
>
>  It was fine most of last week, but now it's back after the restart on Sunday.
>
>  I appreciate the response. Good to know I'm, not alone in the mix. Hope you get yours sorted.

I can get it to work most of the time. I use PortProton and it looks like this:

<https://i.ibb.co/R4pHJqRv/image.png>

(The icon where it should be the WoW.exe icon is not correct, for some reason it picks up other icons of different .exe files and runs with them for a while at a random)

And I have 3 options:

 - DXVK, VKD3D (Newest) (Vulkan v1.3+)
 - DXVK, VKD3D (Stable) (Vulkan v1.3+)
 - DXVK, VKD3D (Sarek) (Vulkan v1.1+)

And I alternate trying to launch it between one of those three options while simultaneously deleting the WDB folder and it works.

But I think the problem is inherently on Turtle WoW's side. If you install all the VC++ Redistributable, DirectX9 Runtime, .NET Framework and everything else  that comes in mind and it still doesn't work, then the problem is 100% not on  your end.

There are some AIO packs that install all those one after another, both x86 and x64 versions of all years, it's a quick way to make sure you have everything you need, they are also needed under Linux to run Windows games so it's cool to have.

## Post 155109 by 31venture — 2025-10-10T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155109#p155109 | page 1 | era: 1.18.1-announced-pre-release -->

I'll look into that, thank you.

Yesterday, Windows suggested (in the past? I never looked at it) running the program with compatibility. I can't just hit 'PLAY' from the launcher anymore b/c of permissions (Windows never gave me a PERMISSIONS box, nor did the compatibility mention it). Executing the game as Admin works like a charm.

Seems that Windows thinks TWoW is a virus.

