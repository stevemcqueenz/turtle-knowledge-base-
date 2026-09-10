---
title: "New Player Getting ERROR 132 Fatal Exception"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17182"
topic_id: 17182
forum_id: 3
forum: "Help & Support"
author: "froyo"
author_authority: "player"
posted: "2025-01-19T07:45:00Z"
last_post: "2025-09-14T06:11:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T08:40:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# New Player Getting ERROR 132 Fatal Exception

## Post 117227 by froyo — 2025-01-19T07:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117227#p117227 | page 1 | era: pre-1.18.1 -->

Hey, I'm a new player hoping to hop into Turtle for the first time! After character creation and a few seconds in the world, I'm immediately met with:
 ------------------------------------------------------------------------------

This application has encountered a critical error:

ERROR #132 (0x85100084) Fatal Exception
Program:	D:\WoW Servers\Turtle WoW\twmoa_1172\WoW.exe
Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:004118A3

The instruction at "0x004118A3" referenced memory at "0xE86AD7C1".
The memory could not be "written".

WoWBuild: 5875
 ------------------------------------------------------------------------------
This is followed by the game fully crashing.

I've been trying to find solutions on the forum and so far haven't found anything that's worked. I've tried reinstalling the game both through the Launcher and Full Client options, I've tried changing SET gxWindow and gxMaximize to 0, clearing WDB WTF and Errors folders, creating different characters, running the game in compatibility mode, and messed a bit with unplugging my dual-monitor setup and running it from just 1 monitor.

I'm not sure if I'm on the right track? I'm not an especially techy person, but should be able to at least try more things if someone is able to give me some more ideas.

Thanks!

## Post 117262 by froyo — 2025-01-19T16:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117262#p117262 | page 1 | era: pre-1.18.1 -->

No idea what changed, but logged in today and haven't had issues for the last couple hours!

## Post 117324 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-01-20T07:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=117324#p117324 | page 1 | era: pre-1.18.1 -->

> **froyo wrote: Sun Jan 19, 2025 7:45 am**
> Hey, I'm a new player hoping to hop into Turtle for the first time! After character creation and a few seconds in the world, I'm immediately met with:
>  ------------------------------------------------------------------------------
>
>  This application has encountered a critical error:
>
>  ERROR #132 (0x85100084) Fatal Exception
>  Program:	D:\WoW Servers\Turtle WoW\twmoa_1172\WoW.exe
>  Exception:	0xC0000005 (ACCESS_VIOLATION) at 0023:004118A3
>
>  The instruction at "0x004118A3" referenced memory at "0xE86AD7C1".
>  The memory could not be "written".
>
>
>  WoWBuild: 5875
>  ------------------------------------------------------------------------------
>  This is followed by the game fully crashing.
>
>  I've been trying to find solutions on the forum and so far haven't found anything that's worked. I've tried reinstalling the game both through the Launcher and Full Client options, I've tried changing SET gxWindow and gxMaximize to 0, clearing WDB WTF and Errors folders, creating different characters, running the game in compatibility mode, and messed a bit with unplugging my dual-monitor setup and running it from just 1 monitor.
>
>  I'm not sure if I'm on the right track? I'm not an especially techy person, but should be able to at least try more things if someone is able to give me some more ideas.
>
>  Thanks!

Hello!

If your game is crashing, go through the following steps

∙ Remove all AddOns and first verify that crashes did not stop.
∙ Enable Vertext Animation Shaders in WoW Video settings.
∙ Remove all non-supported custom patches like Darker Nights or HD Models. We're not recommending the use of any unsupported additional modifications, they might interfere with your gameplay and cripple your client. If you want HD Patch compatible with Turtle WoW, type .hd and I'll recommend you one!
∙ Do not install any unverified binary modifications, such as sound channel count edit, some of them may cause the client to crash.
∙ Whitelist the game in your Antivirus or Windows Defender: [https://jackboxgames.happyfox.com/kb/ar ... -firewalls](https://jackboxgames.happyfox.com/kb/article/28-how-to-whitelist-and-resolve-issues-in-antivirus-software-and-firewalls)
∙ If nothing helps, download a fresh client from our website: [viewtopic.php?t=7709](https://forum.turtlecraft.gg/viewtopic.php?t=7709)

## Post 128186 by Curaj — 2025-04-23T18:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128186#p128186 | page 1 | era: pre-1.18.1 -->

Hi I have the same issue, therefore happy to get a hd patch suggestion from you

.hd

## Post 139099 by Senfmanager — 2025-07-14T16:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139099#p139099 | page 1 | era: pre-1.18.1 -->

how would we go to video settings if the game crashes? nothing of your suggestions there works. please look into it.

## Post 140066 by Hyundef (Turtle WoW Team) [STAFF] — 2025-07-17T11:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140066#p140066 | page 1 | era: pre-1.18.1 -->

> **Senfmanager wrote: Mon Jul 14, 2025 4:42 pm**
> how would we go to video settings if the game crashes? nothing of your suggestions there works. please look into it.

 1)  I would heavily suggest moving your game folder directly onto your C drive.  Windows doesn't like .dll files being injected from other drives/in protected folders.

 2)  If you could, disable all your gameplay-enhancing mods via the launcher, in the "mods" tab.  If you get a successful launch, please re-enable the mods 1 by 1 until you figure out which mod is causing the issue.

## Post 144572 by Mashpot — 2025-08-11T16:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144572#p144572 | page 1 | era: pre-1.18.1 -->

I also use Vanilla Fixes and get this error.

When this error happens, it means the VMMFix_preferred_monitor.txt has changed and is referencing the wrong number. For example, my main monitor is 1 but that file references 2. Running the Vanilla Fixes .exe and updating the text file tends to work for me.

## Post 151656 by Kerenis (Patch Note Conspiracy Theorist) — 2025-09-14T06:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151656#p151656 | page 1 | era: pre-1.18.1 -->

Removing all the game mods fixed it for me

