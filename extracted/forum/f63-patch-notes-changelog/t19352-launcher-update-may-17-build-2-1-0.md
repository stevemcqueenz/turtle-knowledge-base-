---
title: "Launcher Update — May 17 [Build 2.1.0]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19352"
topic_id: 19352
forum_id: 63
forum: "Patch Notes & Changelog"
author: "Torta"
author_authority: "staff"
posted: "2025-05-16T22:15:00Z"
last_post: "2025-08-25T10:12:00Z"
post_count: 31
pages: 1
fetched: "2026-09-10T07:35:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher Update — May 17 [Build 2.1.0]

## Post 131492 by Torta (Turtle WoW Team) [STAFF] — 2025-05-16T22:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131492#p131492 | page 1 | era: pre-1.18.1 -->

Launcher version 2.1.0 will be pushed live shortly!

Changes include the following:

- Fixed an issue where incorrectly named addons could lead to data loss.

- The launcher will no longer automatically fix incorrect addon names. Instead, it will show a warning with the option to fix them manually.

- Added support for changing branches for Git addons.

- Improved offline mode to allow more functionality when the server is under maintenance.

- Added an option to ignore updates for Git addons.

- Updated the mod section to better support the updating of provided mods.

- Added a configuration dialog for the multiMonitorFix mod.

- Improved client verification on launch to better ensure all settings are correctly applied.

- Prevented changes to tweaks and mods while WoW is running in the background to avoid failed changes.

- Saved accounts will no longer be removed after failed login attempts — only when manually logging out.

- Lowered the minimum value for max camera distance to 10.

- Improved detection of a running WoW.exe to reduce false positives.

- Better handling of multiple parallel addon downloads.

- Restricted allowed install directories to prevent use of any /Users subdirectory, avoiding permission issues.

- UI now distinguishes between moving files from/to cache and downloading.

- Unsaved changes in the Tweaks and Mods tabs are now highlighted with an indicator.

- Changed English language flag to the UK flag.

- All links now properly open in the default browser.

- Cleanup improvements after failed addon installations.

- Git addon errors are now handled more gracefully without deleting incompatible Git configs.

- Various localization improvements.

## Post 131494 by MadafakinRio — 2025-05-16T22:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131494#p131494 | page 1 | era: pre-1.18.1 -->

Would it be possible to have an option to NOT automatically apply vanilla tweaks? Whenever I open the launcher it will override and overwrite my old fixes and I think also some Config.wtf values. I really like all the other stuff and I want to use the launcher. Although the main issue for me was the insane camera max distance which you couldn't lower, so maybe that's fixed now.

## Post 131516 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-16T23:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131516#p131516 | page 1 | era: pre-1.18.1 -->

Weird bug after the update.

<https://imgur.com/a/sh9f60I>

## Post 131519 by Dhunterr — 2025-05-17T00:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131519#p131519 | page 1 | era: pre-1.18.1 -->

Was having problems with multiMonitorFix v0.2 and dxvk v2.6.1, constant crash on launch so i turned it off.
And the game works again ...

## Post 131523 by Mundane (Barrens Chat Casualty) — 2025-05-17T00:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131523#p131523 | page 1 | era: pre-1.18.1 -->

> **Laysson wrote: Fri May 16, 2025 11:57 pm**
> Weird bug after the update.
>
>  <https://imgur.com/a/sh9f60I>

I wonder what it could be...? Maybe that new element with a toggle lower right part of launcher?!

## Post 131524 by MadafakinRio — 2025-05-17T00:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131524#p131524 | page 1 | era: pre-1.18.1 -->

> **Laysson wrote: Fri May 16, 2025 11:57 pm**
> Weird bug after the update.
>
>  <https://imgur.com/a/sh9f60I>

Seems like someone accidentally shipped the debug build..

Also if anything leads to the collapse of civilization it will be web apps.

## Post 131540 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-17T03:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131540#p131540 | page 1 | era: pre-1.18.1 -->

> **MadafakinRio wrote: Sat May 17, 2025 12:48 am**
> > **Laysson wrote: Fri May 16, 2025 11:57 pm**
> > Weird bug after the update.
> >
> >  <https://imgur.com/a/sh9f60I>
>
>   Seems like someone accidentally shipped the debug build..
>
>  Also if anything leads to the collapse of civilization it will be web apps.

Yeah, looks like.

## Post 131557 by stinkyfoxy — 2025-05-17T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131557#p131557 | page 1 | era: pre-1.18.1 -->

How do I update WoW without deleting my custom files?
![Image](https://i.postimg.cc/q7GZRw3B/image.png)

## Post 131559 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-17T08:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131559#p131559 | page 1 | era: pre-1.18.1 -->

> **stinkyfoxy wrote: Sat May 17, 2025 8:31 am**
> How do I update WoW without deleting my custom files?
>  ![Image](https://i.postimg.cc/q7GZRw3B/image.png)

Move them out, then move them back after update.

## Post 131560 by stinkyfoxy — 2025-05-17T09:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131560#p131560 | page 1 | era: pre-1.18.1 -->

> **Laysson wrote: Sat May 17, 2025 8:41 am**
> Move them out, then move them back after update.

Honestly this is a poor launcher update, it worked just fine with a previous version. Why add this extra friction to SuperWoW users?

## Post 131561 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-17T09:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131561#p131561 | page 1 | era: pre-1.18.1 -->

> **stinkyfoxy wrote: Sat May 17, 2025 9:08 am**
> > **Laysson wrote: Sat May 17, 2025 8:41 am**
> > Move them out, then move them back after update.
>
>   Honestly this is a poor launcher update, it worked just fine with a previous version. Why add this extra friction to SuperWoW users?

Shit happens, but we have to deal it

## Post 131564 by N8owl — 2025-05-17T09:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131564#p131564 | page 1 | era: pre-1.18.1 -->

This Launcher update reminded me to automate my Turtle Wow backup. ^^

First the launcher suggested to delete patch-z and then failed because he could not find it.
After the launcher did some mpq download shenanigans that took a long time because of a poor internet connection i finally am now as i was a day before ... all that for a Launcher update. XD

This launcher had one job to do.

## Post 131569 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-17T10:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131569#p131569 | page 1 | era: pre-1.18.1 -->

> **N8owl wrote: Sat May 17, 2025 9:31 am**
> This Launcher update reminded me to automate my Turtle Wow backup. ^^
>
>  First the launcher suggested to delete patch-z and then failed because he could not find it.
>  After the launcher did some mpq download shenanigans that took a long time because of a poor internet connection i finally am now as i was a day before ... all that for a Launcher update. XD
>
>  This launcher had one job to do.

This update fucked up a lot of things, from the buggy launcher to the addons ingame.

## Post 131574 by JOCE — 2025-05-17T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131574#p131574 | page 1 | era: pre-1.18.1 -->

<https://imgur.com/t1bRHay>
Bug una vez instalado pide carpeta anterior donde estuvo instalado el juego, las versiones anteriores recordaban esto, pues yo no además no sé dónde está el juego o si se trata de un problema real, nose no soy programador

*Last edited by JOCE on Sat May 17, 2025 11:03 am, edited 1 time in total.*

## Post 131578 by Kriegsfisch — 2025-05-17T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131578#p131578 | page 1 | era: pre-1.18.1 -->

meh not nice the new launcher

*Last edited by Kriegsfisch on Sat May 17, 2025 11:30 am, edited 1 time in total.*

## Post 131590 by JOCE — 2025-05-17T11:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131590#p131590 | page 1 | era: pre-1.18.1 -->

<https://imgur.com/28WpRrm>
instalando todo nuevamente, salió este error, recuerdo que cuando actualice salió exactamente el mismo error

## Post 131598 by moguman — 2025-05-17T11:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131598#p131598 | page 1 | era: pre-1.18.1 -->

the launcher keeps showing updates for addons when there are really none

<https://imgur.com/a/4AEXqZD>

## Post 131657 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-17T18:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131657#p131657 | page 1 | era: pre-1.18.1 -->

You can't be serious guys, not a single word on the issues ?

## Post 131672 by MossMeester — 2025-05-17T20:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131672#p131672 | page 1 | era: pre-1.18.1 -->

> **Laysson wrote: Sat May 17, 2025 6:31 pm**
> You can't be serious guys, not a single word on the issues ?

Are you also having the problem with: Installing into system directory like Program Files, Downloads or Desktop is not supported?

## Post 131681 by Torta (Turtle WoW Team) [STAFF] — 2025-05-17T23:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131681#p131681 | page 1 | era: pre-1.18.1 -->

A follow-up update has been released to address the reported issues.

- Skipped install directory selection for new installations.

- Removed rules preventing installation into user folders.

- Do not extract nested addons if the current folder already contains a .toc file.

- Fixed non-git addons appearing as out of date.

- Fixed non-sequential monitor indexes.

- Properly hid profiling tools.

- Prevented launcher from getting stuck during verification in rare cases.

## Post 131696 by Anwarel — 2025-05-18T03:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131696#p131696 | page 1 | era: pre-1.18.1 -->

I see others have had similar problems like me with the new updated launcher

now it won't do anything on clicking the "continue" on the "first time set up" page.. and I haven't found a workaround like with the previous one

Edit: also made a post here: [viewtopic.php?t=19373](https://forum.turtlecraft.gg/viewtopic.php?t=19373)

*Last edited by Anwarel on Sun May 18, 2025 4:34 am, edited 1 time in total.*

## Post 131699 by Karupa — 2025-05-18T04:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131699#p131699 | page 1 | era: pre-1.18.1 -->

Just made an account to say that I, too, am having the same issue as Anwarel in the post above me.

## Post 131738 by mcarsh — 2025-05-18T09:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131738#p131738 | page 1 | era: pre-1.18.1 -->

At first the launcher was working and I started to update, but at the start of the installation where it prompted me to either uninstall old files or keep them, I selected to uninstall and got an error popup saying "Unable to uninstall". So I closed that, and now when I open the launcher, both the progress bar and button at the bottom just flashes repeatedly between update and install.

## Post 145724 by Deeno (Barrens Chat Casualty) — 2025-08-15T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145724#p145724 | page 1 | era: pre-1.18.1 -->

where can i see the other patch notes for the launcher? when first opening it, its deisplayed but theere is no way to see it again

## Post 146707 by Deeno (Barrens Chat Casualty) — 2025-08-18T09:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146707#p146707 | page 1 | era: pre-1.18.1 -->

where can i see the other patch notes for the launcher? when first opening it, its deisplayed but theere is no way to see it again

## Post 147061 by Deeno (Barrens Chat Casualty) — 2025-08-19T18:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147061#p147061 | page 1 | era: pre-1.18.1 -->

where can i see the other patch notes for the launcher? when first opening it, its deisplayed but theere is no way to see it again

## Post 147473 by Deeno (Barrens Chat Casualty) — 2025-08-21T11:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147473#p147473 | page 1 | era: pre-1.18.1 -->

where can i see the other patch notes for the launcher? when first opening it, its deisplayed but theere is no way to see it again

## Post 147708 by Deeno (Barrens Chat Casualty) — 2025-08-22T15:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147708#p147708 | page 1 | era: pre-1.18.1 -->

where can i see the other patch notes for the launcher? when first opening it, its deisplayed but theere is no way to see it again

## Post 147947 by Deeno (Barrens Chat Casualty) — 2025-08-24T05:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147947#p147947 | page 1 | era: pre-1.18.1 -->

where can i see the other patch notes for the launcher? when first opening it, it's displayed, but there is no way to see it again

## Post 147976 by Ludovico — 2025-08-24T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147976#p147976 | page 1 | era: pre-1.18.1 -->

settings > launcher changelog

## Post 148144 by Deeno (Barrens Chat Casualty) — 2025-08-25T10:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148144#p148144 | page 1 | era: pre-1.18.1 -->

> **Ludovico wrote: Sun Aug 24, 2025 9:09 am**
> settings > launcher changelog

thanks

