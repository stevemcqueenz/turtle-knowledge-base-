---
title: "[Tutorial] How to run Turtle WoW on ChromeOS"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3125"
topic_id: 3125
forum_id: 3
forum: "Help & Support"
author: "Kyzen"
author_authority: "player"
posted: "2022-06-11T10:41:00Z"
last_post: "2024-12-20T02:32:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:48:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Tutorial] How to run Turtle WoW on ChromeOS

## Post 19117 by Kyzen (Barrens Chat Casualty) — 2022-06-11T10:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19117#p19117 | page 1 | era: pre-1.18.1 -->

Hi everyone  smiling_turtle  , in this tutorial/guide I'll show you how I get Turtle WoW up in running on ChromeOS.

For this guide, you'll need an x86 machine (Intel or AMD). I'm curious if there is a way to run it on ARM processors, but I can't test it.

First step, you need to enable "Linux development environment" on the advanced setting of chromeOS.

![Image](https://imgur.com/hxZkR00.png)

Allocate enough storage, I would say at least 20gb to be comfortable.

Then you need to open your Chrome browser and go to chrome://flags. Search for "GPU Support" and enable it.

![Image](https://imgur.com/mxEIEht.png)

When it's done, you'll need to install wine this is the program that will let you run Windows program under Linux.
 **Do not install it from Google repository. (if you do so, you'll have no sound).**

Open the Linux terminal, make sure everything is updated :
Code: Select all

```
sudo apt update
sudo apt upgrade
```

go on : <https://wiki.winehq.org/Debian>
and follow the step :
Code: Select all

```
sudo dpkg --add-architecture i386

wget -nc https://dl.winehq.org/wine-builds/winehq.key
sudo mv winehq.key /usr/share/keyrings/winehq-archive.key

wget -nc https://dl.winehq.org/wine-builds/debian/dists/buster/winehq-buster.sources
sudo mv winehq-buster.sources /etc/apt/sources.list.d/

sudo apt update

sudo apt install --install-recommends winehq-stable
```

Your Linux environment should be good to go.

The next step is to download Turtle WoW and put it inside the section called "Linux Files" in the file explorer.
Assuming the folder name is "TurtleWow" go inside the directory from the terminal.
Code: Select all

```
cd TurtleWoW
```

and launch the game :
Code: Select all

```
wine wow.exe
```

It should run fine. Most likely the cursor in blinking or almost invisible, do not panic, just go inside wow setting and disable hardware cursor.

You should be fine :p

[embed: https://www.youtube.com/embed/UswgllB-PDw]

Next step will be to make a cool shortcut for a better user experience, I'll try to update this guide   happy_turtle_head

## Post 19298 by Faustorgo (Barrens Chat Casualty) — 2022-06-22T00:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19298#p19298 | page 1 | era: pre-1.18.1 -->

Thanks bro, your a good soul :D

## Post 20081 by Kyzen (Barrens Chat Casualty) — 2022-07-17T15:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20081#p20081 | page 1 | era: pre-1.18.1 -->

Update : Just tested with Wine-staging + changed sources.list for the unstable one. And It greatly improved my in game performance.

Still didn't manage to launch the game with DXVK though. It works (even fix the hardware cursor bug) but doesn't use the GPU yet, so I had like 2fps rendering with a Ryzen 7.

But It should be fixed in a future update. For people with Chromebook compatible with Borealis It should work though.

## Post 42047 by Gadom92 — 2023-04-18T16:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42047#p42047 | page 1 | era: pre-1.18.1 -->

i got error on my ChromeOS v112 Code: Select all

```
wine WoW.exe
0080:fixme:hid:handle_IRP_MN_QUERY_ID Unhandled type 00000005
0080:fixme:hid:handle_IRP_MN_QUERY_ID Unhandled type 00000005
0080:fixme:hid:handle_IRP_MN_QUERY_ID Unhandled type 00000005
0080:fixme:hid:handle_IRP_MN_QUERY_ID Unhandled type 00000005
0024:err:module:LdrInitializeThunk "fmod.dll" failed to initialize, aborting
0024:err:module:LdrInitializeThunk Initializing dlls for L"Z:\\mnt\\chromeos\\removable\\SD Card\\WoW\\WoW.exe" failed, status c0000005
```

there is no chrome flag crostini gpu. Do you know how can I manage this error?

## Post 42718 by Xlaggy2022 — 2023-04-23T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42718#p42718 | page 1 | era: pre-1.18.1 -->

sudo apt-get install --install-recommends wine

instead of wine-stable

## Post 43820 by Ravencrowx — 2023-04-29T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43820#p43820 | page 1 | era: pre-1.18.1 -->

Does this still work? I followed this guide and I get a memory read error from turtle wow. This is a new Chromebook.

## Post 113457 by Rekarn — 2024-12-20T02:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113457#p113457 | page 1 | era: pre-1.18.1 -->

Has this changed at all with the launcher? Anyone have any updates on being able to play in a Chromebook?

