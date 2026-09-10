---
title: "Windowed Mode"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12048"
topic_id: 12048
forum_id: 3
forum: "Help & Support"
author: "Wher0"
author_authority: "player"
posted: "2023-12-04T18:10:00Z"
last_post: "2024-02-01T21:22:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T08:55:21Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Windowed Mode

## Post 79822 by Wher0 (Barrens Chat Casualty) — 2023-12-04T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79822#p79822 | page 1 | era: pre-1.18.1 -->

I tried running Turtle WoW . exe in windowed mode.  I added to the shortcut under target "-w" but it keeps going full screen.  Any help?  maintenance_turtle   maintenance_turtle

## Post 79876 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-12-05T09:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79876#p79876 | page 1 | era: pre-1.18.1 -->

> **Wher0 wrote: Mon Dec 04, 2023 6:10 pm**
> I tried running Turtle WoW . exe in windowed mode.  I added to the shortcut under target "-w" but it keeps going full screen.  Any help?  maintenance_turtle   maintenance_turtle

Hello!
Please find the config located in your game folder: WoW/WTF/Config.wtf
Open it and add the following lines: SET gxWindow "1" SET gxMaximize "1"
Save it and close it.

## Post 80305 by Wher0 (Barrens Chat Casualty) — 2023-12-08T18:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80305#p80305 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Tue Dec 05, 2023 9:29 am**
> > **Wher0 wrote: Mon Dec 04, 2023 6:10 pm**
> > I tried running Turtle WoW . exe in windowed mode.  I added to the shortcut under target "-w" but it keeps going full screen.  Any help?  maintenance_turtle   maintenance_turtle
>
>   Hello!
>  Please find the config located in your game folder: WoW/WTF/Config.wtf
>  Open it and add the following lines: SET gxWindow "1" SET gxMaximize "1"
>  Save it and close it.

Still won't work.  Every time I open WoW it changes the WTF config.wtf file back to what it was.

## Post 80421 by Wher0 (Barrens Chat Casualty) — 2023-12-09T17:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=80421#p80421 | page 1 | era: pre-1.18.1 -->

Could someone create a new Turtle WoW package that is default3d on windowed mode?  Maybe this could be an option in the download section?

## Post 83036 by Wher0 (Barrens Chat Casualty) — 2023-12-28T22:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83036#p83036 | page 1 | era: pre-1.18.1 -->

Still trying to do this?  Any suggestions?  I tried moving twow to games folder on PC.  I tried chaging the file type of WTF in the options.  Can't do it.

## Post 83057 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-12-29T06:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83057#p83057 | page 1 | era: pre-1.18.1 -->

Greetings!
Make sure the game folder is not write-protected.

Disable Read-Only Mode in Folder Properties
Right-click on the folder you want to change file attributes for and select Properties. In the Properties window, open the General tab. In the Attributes section, uncheck the Read-only option.

## Post 83117 by Wher0 (Barrens Chat Casualty) — 2023-12-29T19:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83117#p83117 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Fri Dec 29, 2023 6:59 am**
> Greetings!
>  Make sure the game folder is not write-protected.
>
>  Disable Read-Only Mode in Folder Properties
>  Right-click on the folder you want to change file attributes for and select Properties. In the Properties window, open the General tab. In the Attributes section, uncheck the Read-only option.

It won't stick.     scared_turtle_head  Every time  I change it the computer puts it back to Read-Only.

## Post 84847 by Wher0 (Barrens Chat Casualty) — 2024-01-15T23:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84847#p84847 | page 1 | era: pre-1.18.1 -->

I'm pretty sure it has something todo with the computer settings that I can't change.  I can't reformat and I can't edit internal settings.  Maybe someone could make a package download from a computer that it works on, and install the settings pre-disposed?  I mean I've tried everything besides breaking the monitor.

## Post 84851 by Drubarrymooer (Grandmaster of Forum PvP) — 2024-01-16T00:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84851#p84851 | page 1 | era: pre-1.18.1 -->

Are you trying to edit it while WoW is open?  If it's closed and the edit isn't sticking, double check the process is 100% shut down. Ctrl+shift+esc should bring up the task manager.

Once you're 100% sure the process isn't running in the background or otherwise, right click the file and make sure it's not read only.  If it changes back after saving and exiting, it sounds like either an admin permission problem.  If you're the only user on the computer, it may not be an admin permission problem.  I've noticed Windows defender will sometimes allow white listed programs but there's an open to not allow it to make system changes.  That may be what is causing it to stay read only as well.

You can also try baking it up and deleting the config file while WoW is closed.  It should auto populate the next time you start wow.exe or wowfov.exe

## Post 84856 by Xanwow — 2024-01-16T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84856#p84856 | page 1 | era: pre-1.18.1 -->

I had a similar issue a while back with a write protected file.
Try copying the file to your dekstop, edit that, then save.
Once you have confirmed the change saved, copy back the file back to the location overwriting it.

## Post 84940 by Wher0 (Barrens Chat Casualty) — 2024-01-16T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84940#p84940 | page 1 | era: pre-1.18.1 -->

I'm using a shared computer.  That must be the only reason that boggles my mind.

## Post 84941 by Foobs (Barrens Chat Casualty) — 2024-01-16T21:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84941#p84941 | page 1 | era: pre-1.18.1 -->

Once you have completed the proper configuration as instructed by the admin. Go into your video setting and click on windowed mode. Aside from that maybe you need to update your drivers.

## Post 86710 by Wher0 (Barrens Chat Casualty) — 2024-02-01T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=86710#p86710 | page 1 | era: pre-1.18.1 -->

Got it.  The option is ingame.

