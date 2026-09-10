---
title: "SuperWoW with CleveRoid installation issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18293"
topic_id: 18293
forum_id: 18
forum: "AddOns"
author: "wowthatsjie"
author_authority: "player"
posted: "2025-04-01T11:48:00Z"
last_post: "2025-07-31T17:28:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T10:24:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# SuperWoW with CleveRoid installation issue

## Post 124893 by wowthatsjie — 2025-04-01T11:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124893#p124893 | page 1 | era: pre-1.18.1 -->

Hi everyone,  smiling_turtle_head

I'm trying to get SuperWoW.dll injected into my Turtle WoW client and could use some help. I’ve followed the installation guide here:

![👉](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f449.svg) <https://github.com/pepopo978/SuperwowInstallation>

But when I launch the game, it still says “SuperWoW not detected.”

The main reason I want to get this working is for the macro enhancements, especially to use it with Cleveroid. I'm really looking forward to using the advanced macro conditions like [inrange], [type], and castsequences with logic.

Has anyone successfully set this up with Turtle WoW?
Would appreciate if you could share how you got it working — launcher setup, file names, any tricks, etc.

Thanks

## Post 125000 by foolishminer — 2025-04-01T22:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125000#p125000 | page 1 | era: pre-1.18.1 -->

I think its just with the new patch. Mine has been working fine up until today, same message.

## Post 125068 by wowthatsjie — 2025-04-02T11:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125068#p125068 | page 1 | era: pre-1.18.1 -->

case solved, pm me if anyone need help with this topic.

## Post 125089 by boogely — 2025-04-02T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125089#p125089 | page 1 | era: pre-1.18.1 -->

> **wowthatsjie wrote: Wed Apr 02, 2025 11:34 am**
> case solved, pm me if anyone need help with this topic.

Hey can you share your fix? I still can't manage to get it working. I've added SuperWoWHook.dll to the dlls list but Vanillafixes refuses to launch with it loaded.

*Last edited by boogely on Wed Apr 02, 2025 2:09 pm, edited 1 time in total.*

## Post 125103 by Mayson (Patch Note Conspiracy Theorist) — 2025-04-02T15:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125103#p125103 | page 1 | era: pre-1.18.1 -->

> **wowthatsjie wrote: Wed Apr 02, 2025 11:34 am**
> case solved, pm me if anyone need help with this topic.

Why not type it out for everyone to read...?

## Post 125118 by Membrane (Barrens Chat Casualty) — 2025-04-02T17:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125118#p125118 | page 1 | era: pre-1.18.1 -->

The common issue is that after the update, the text file dlls.txt in your TWoW directory is overwritten as WoW now has native DLL sideloading built in.

You need to open your dlls.txt file in Notepad and add back the names of any DLL based mods that you currently have downloaded.
SuperWoWHook.dll
UnitXP_SP3.dll
Interact.dll

You can also add vfpatcher.dll if you want to load the game using WoW.exe and not VanillaFixes.exe

You should also leave the twdiscord.dll entry in the file.

## Post 125129 by Elisleris (Bug Report Enthusiast) — 2025-04-02T19:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125129#p125129 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Wed Apr 02, 2025 5:59 pm**
> You should also leave the twdiscord.dll entry in the file.

How my discord account can be associated with my game account if they have different emails and user names?

## Post 125847 by wowthatsjie — 2025-04-07T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=125847#p125847 | page 1 | era: pre-1.18.1 -->

Hi guys sorry just reply back to post, just like Membrane mention in the post, I didn't put any of the dll files inthe text.dll for it to launch, after that the game launch with all the dlls that I need for it.

## Post 128248 by zFrostie — 2025-04-24T03:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128248#p128248 | page 1 | era: pre-1.18.1 -->

This guy made a video about installing it that helped me out.
[embed: https://www.youtube.com/embed/_vCyP2o6oNw]

## Post 128533 by AntriX1337 — 2025-04-26T02:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128533#p128533 | page 1 | era: pre-1.18.1 -->

SuperWoW is riddled with viruses. Windows Defender doesn't even let you download it (Chrome blocks it immediately). Here is a result from VirusTotal:
![Image](https://i.imgur.com/hhoKhhS.png)

## Post 128595 by Membrane (Barrens Chat Casualty) — 2025-04-26T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128595#p128595 | page 1 | era: pre-1.18.1 -->

It's not, they're all false positives however you need to make your own mind up about that.

The reason it's flagged is becuase it's a DLL file used for injecting into running executables (specifically the wow.exe) which is a common way for viruses to hijack existing programmes and executre arbituary and often harmful code.

Of course, Superwow is closed source, so if you would feel more comfortable not using it, then you can.

## Post 129041 by AntriX1337 — 2025-04-30T01:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129041#p129041 | page 1 | era: pre-1.18.1 -->

> **Membrane wrote: Sat Apr 26, 2025 2:22 pm**
> It's not, they're all false positives however you need to make your own mind up about that.
>
>  The reason it's flagged is becuase it's a DLL file used for injecting into running executables (specifically the wow.exe) which is a common way for viruses to hijack existing programmes and executre arbituary and often harmful code.
>
>  Of course, Superwow is closed source, so if you would feel more comfortable not using it, then you can.

I'm sorry but more than one AV showing the exact same virus name is not a false positive.

## Post 129058 by Jan125 (Barrens Chat Casualty) — 2025-04-30T03:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129058#p129058 | page 1 | era: pre-1.18.1 -->

> **AntriX1337 wrote: Wed Apr 30, 2025 1:08 am**
> > **Membrane wrote: Sat Apr 26, 2025 2:22 pm**
> > It's not, they're all false positives however you need to make your own mind up about that.
> >
> >  The reason it's flagged is becuase it's a DLL file used for injecting into running executables (specifically the wow.exe) which is a common way for viruses to hijack existing programmes and executre arbituary and often harmful code.
> >
> >  Of course, Superwow is closed source, so if you would feel more comfortable not using it, then you can.
>
>   I'm sorry but more than one AV showing the exact same virus name is not a false positive.

I hate to be hostile, but you make me angry.

SuperWoW gets loaded, then modifies allocated memory of the program it is running in to enable its various functions, same as all the other .dll mods.
This is how a classical trojan works as well. (Remember old window queue function, add own window queue function, intercept #WM_KEYDOWN messages, then pass everything else to the old remembered function.)
This is needed for its functionality to actually work.

A lot of addon functionality also depends on this behaviour, which is why you, if you look at the .lua script for any macro extenders, you will see a lot of *_old variables around.

If you are still worried, then follow Membrane's advice.

## Post 138709 by galapagos (Barrens Chat Casualty) — 2025-07-11T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138709#p138709 | page 1 | era: pre-1.18.1 -->

i am getting 132 error with superwow installed. anyone got a fix?

## Post 142377 by Dangard — 2025-07-31T17:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=142377#p142377 | page 1 | era: pre-1.18.1 -->

> **galapagos wrote: Fri Jul 11, 2025 8:45 am**
> i am getting 132 error with superwow installed. anyone got a fix?

put the folder with the addons away completely, launch it, then come out and return it
It helps a lot.

