---
title: "Launcher on linux - change game directory"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20335"
topic_id: 20335
forum_id: 4
forum: "General"
author: "Dr Thrax"
author_authority: "player"
posted: "2025-07-16T21:28:00Z"
last_post: "2025-07-17T10:06:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:43:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher on linux - change game directory

## Post 139992 by Dr Thrax — 2025-07-16T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139992#p139992 | page 1 | era: pre-1.18.1 -->

So I got this desktop for free on which I installed linux because of win 10 eol. put a 1050Ti in it and the game runs smooth with all settings maxed out.

problem I have with the launcher.
I am a bit of a linux noob, still have to google everything that neds the command line, so dont Judge me for that.

I furst downloaded the game in its own directory, proton GE and steam and got that to work.

Meanwhile  Idownloaded the linux launcher and ran it by checking a box in its properties, only problem, I ran it in my 'downloads' folder where it also installed the game.

so I deleted the game in my download folder and relocated the launcher to my dedicated game folder, however, it still thinks the game files are in the download folder.

How can I tell the (linux?) launcher where the game files are? settings dont seem to work as im using steam, not wine.

## Post 139993 by Dr Thrax — 2025-07-16T21:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139993#p139993 | page 1 | era: pre-1.18.1 -->

also, downloading the launcher again didn't work

## Post 140015 by Veinar — 2025-07-16T23:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140015#p140015 | page 1 | era: pre-1.18.1 -->

Hello Thrax(I loved C&C Generals ZH too haha),

I am also using Linux(CachyOS Arch btw) I was in the same scenario you are into and I have found a workaround to this:

Basically, once you launch an .appimage, its configuration settings are placed in three separate directories:

> /home/(yourusername)/.cache/
>  /home/(yourusername)/.config/
>  /home/(yourusername)/.local/share/

The turtle wow launcher in particular creates a new folder in each of the above three directories, named "turtle-wow".The launcher is also configured to download and set up its download and game directory in the folder you place it in.

So, to resolve this you will have to do the following:

> 1.Delete the pre-existing "turtle-wow" directories found in the above three paths.
>  2.Create a directory where want the game to be in and/or move the launcher to the directory you wish to have the game in
>  3.Launch the launcher, sign in, let it re-download/validate the files
>  4.Play

Of course, you can afterwards use your own setup with proton-ge with Lutris/Steam, and only use the launcher to update the files from time to time.

Note: you can keep the main folders, such as Data, WTF...etc, there's no need to force the launcher to re-download them, simply move them to the new directory. This will save you time and network use.

## Post 140049 by Dr Thrax — 2025-07-17T10:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140049#p140049 | page 1 | era: pre-1.18.1 -->

Thanks, this did the trick!
Not running the game through the launcher, but at least I can use it to manage my tweaks, addons etc.

Linux (Mint)  has been a steep learning curve, but really worth it to get rid of MS bloat + telemetry

