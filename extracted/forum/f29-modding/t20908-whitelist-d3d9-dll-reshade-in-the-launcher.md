---
title: "Whitelist d3d9.dll(reshade) in the launcher?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20908"
topic_id: 20908
forum_id: 29
forum: "Modding"
author: "Gothdir"
author_authority: "player"
posted: "2025-08-14T08:07:00Z"
last_post: "2025-08-30T13:58:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:39:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Whitelist d3d9.dll(reshade) in the launcher?

## Post 145332 by Gothdir — 2025-08-14T08:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145332#p145332 | page 1 | era: pre-1.18.1 -->

Hey!
the launcher keeps asking me to delete it. You can work around this if you need to update by deleting it, update and copy it it into the folder but it is a bit annoying. Is  there any way to avoid this?

## Post 145561 by Sushileaf — 2025-08-15T07:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145561#p145561 | page 1 | era: pre-1.18.1 -->

+1 from me.

They should modify the launcher to add a whitelist button in the verification window.

Like, show me the file it wants to delete since it detected a rogue file... and add an 'allow' button or something.

Just wanna run reshade without having to adjust a file every single time I relog! We can add all these other custom addons AND mods... cmon.  angry_turtle_hea

## Post 145563 by Gothdir — 2025-08-15T07:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145563#p145563 | page 1 | era: pre-1.18.1 -->

If you just want to relog you can go into the installation folder of the game and start the wow.exe directly without the launcher that way you dont have to fiddle around with the file every single time. But if you want to update the game, the addon or change anything with the launcher there seems no way around.

## Post 145876 by Sushileaf — 2025-08-15T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145876#p145876 | page 1 | era: pre-1.18.1 -->

> **Gothdir wrote: Fri Aug 15, 2025 7:09 am**
> If you just want to relog you can go into the installation folder of the game and start the wow.exe directly without the launcher that way you dont have to fiddle around with the file every single time. But if you want to update the game, the addon or change anything with the launcher there seems no way around.

This sounds like a good enough workaround for now, and then just juggle the files on patch days. Cheers!   satisfied_turtle_head

## Post 146240 by Alexgreat — 2025-08-16T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146240#p146240 | page 1 | era: pre-1.18.1 -->

If I use d3d9.dll from launcher, cursor is too small. With the fix of the thread [viewtopic.php?t=12997](https://forum.turtlecraft.gg/viewtopic.php?t=12997)  runs perfect before, but when I changed my GPU that fix made my cursor so huge. I delete the d3d9.dll and runs at perfect size for me, but launcher asks for the update, so... wow.exe, but I need open launcher for other actualizations sometimes.

## Post 149359 by Dongmencia — 2025-08-30T13:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149359#p149359 | page 1 | era: pre-1.18.1 -->

I just wanted to throw this out there in case anyone is not aware.  This is how I've played for a while, even before dxvk was added to the launcher, without any issues.

 1. Enable dxvk (Mods tab in launcher)
 2. Launch reshade installer, choose WoW.exe, but install with Vulkan instead of directx9

Now when you launch, granted dxvk is loading properly, reshade should be working.  This way, you don't have any extra dlls that the launcher doesn't want there and it seems to play nicer.  smiling_turtle

