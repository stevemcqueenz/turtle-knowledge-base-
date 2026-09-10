---
title: "Can't complete install"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21261"
topic_id: 21261
forum_id: 3
forum: "Help & Support"
author: "Bocephus47"
author_authority: "player"
posted: "2025-08-21T14:15:00Z"
last_post: "2025-08-22T16:45:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:40:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can't complete install

## Post 147504 by Bocephus47 — 2025-08-21T14:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147504#p147504 | page 1 | era: pre-1.18.1 -->

First, I have to tell you that your "new member" system has been incredibly clunky for me. I've heard a lot about how great TurtleWow is and am very interested in trying it, but this process has been more than aggravating. It took me 15 minutes this morning after getting my account information verified and my password reset. I honestly, truly, hopefully, constructively hope that this is not a harbinger of things to come.

Now to my problem. I have been attempting to install Mysteries of Azeroth. I went ahead and had your installer delete my previous game version. Then the installer ran, but did not finish. Instead, I got the following message:
"Unexpected error occurred processing Data/patch-9.mpg" Not particularly informative for your ordinary user. It then tells me to "Verify game data by clicking Retry." Which I did. And did. And did. And did yet again. Nothing worked. The final error message reads "Failed to read directory or path with error: the system cannot find the path specified (os error 3). Now, I don't speak technogeek but this seems to tell me that your installer cannot find my C: drive. I find this rather bizarre, because not only does my C: drive exist, it has sufficient space to take the install.

So, I am at a loss. I hope someone on your end can get this cleared up, because as I said at the top I am interested in playing TurtleWoW, not only because it's something at least a bit different but because I'm pretty much full-up with the full-charge ahead Wokeness of WoW itself. However, my initial encounter with your programming is not particularly encouraging. Please do what you must to make me feel better about all this.

Morgan Spector (bocephus47)

## Post 147522 by Dusk1989 — 2025-08-21T16:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147522#p147522 | page 1 | era: pre-1.18.1 -->

Yeah I had this problem and felt the seem, through some fluke I managed to fix it.

I had mine installed at C:/Games/TurtleWow, I uninstalled the launcher (left "delete app data" unticked) then reinstalled it and it just worked....

## Post 147627 by Khronickhaotic — 2025-08-22T02:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147627#p147627 | page 1 | era: pre-1.18.1 -->

Brother, I literally just had the exact same hair-pulling experience you did. The way I fixed it was by doing the manual way, when you click "download" on the website, it asks you to select mirrors and platform, there is a button for "Full Client Download" at the bottom of overlay, use that with WinRaR, open unzipped folder, run Turtle wow.exe again and do that update stuff, I promise it will work. It worked for me and I am finally able to check out the hype of this server. Lol.

## Post 147654 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-08-22T06:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147654#p147654 | page 1 | era: pre-1.18.1 -->

> **Bocephus47 wrote: Thu Aug 21, 2025 2:15 pm**
> First, I have to tell you that your "new member" system has been incredibly clunky for me. I've heard a lot about how great TurtleWow is and am very interested in trying it, but this process has been more than aggravating. It took me 15 minutes this morning after getting my account information verified and my password reset. I honestly, truly, hopefully, constructively hope that this is not a harbinger of things to come.
>
>  Now to my problem. I have been attempting to install Mysteries of Azeroth. I went ahead and had your installer delete my previous game version. Then the installer ran, but did not finish. Instead, I got the following message:
>  "Unexpected error occurred processing Data/patch-9.mpg" Not particularly informative for your ordinary user. It then tells me to "Verify game data by clicking Retry." Which I did. And did. And did. And did yet again. Nothing worked. The final error message reads "Failed to read directory or path with error: the system cannot find the path specified (os error 3). Now, I don't speak technogeek but this seems to tell me that your installer cannot find my C: drive. I find this rather bizarre, because not only does my C: drive exist, it has sufficient space to take the install.
>
>  So, I am at a loss. I hope someone on your end can get this cleared up, because as I said at the top I am interested in playing TurtleWoW, not only because it's something at least a bit different but because I'm pretty much full-up with the full-charge ahead Wokeness of WoW itself. However, my initial encounter with your programming is not particularly encouraging. Please do what you must to make me feel better about all this.
>
>  Morgan Spector (bocephus47)

Hello!

 **Checklist before asking for support about the launcher**

 **1. Is your launcher the correct version?**
 - The current latest version is 2.2.4. (2.1.2 if you are using linux)
 - If not, download the latest version from:
 - [https://launcher.turtlecraft.gg/api/lau ... load=bunny](https://launcher.turtlecraft.gg/api/launcher/TurtleWoW.exe?download=bunny)
 **2. Does your launcher have the correct install location designated?**
 - Check this by clicking the cogwheel in the upper right corner.
 - The selected folder should contain Wow.exe and the usual WoW files.
 - If the folder only contains:
`TurtleWoW.exe or turtle-wow.exe`
`Cache`
`WTF`
 - Then the launcher encountered a problem. In that case, you should create a new folder and select that as the install location.
 **3. Is the launcher telling you that it is going to delete something?**
 - Let it proceed. It won’t delete anything important.
 **4. Windows Defender / Antivirus is flagging WoW files or mods**
 - This is a false positive.
 - Add the TWoW folder to your antivirus whitelist.
 **5. Clicking play closes launcher, then does nothing for a second and then reopens launcher**
 - DXVK causes this. Disable the mod in the mods tab and it should be fixed
 **6. Launcher doesn't opens anything, just a background process or Launcher just opens a white window**
 - Update your windows.
 **7. If the download is slow. try changing the download mirror at the top right. this might fix it**
 **8. After fixes, try closing and reopening the launcher as administrator**

## Post 147719 by Peaksforum — 2025-08-22T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147719#p147719 | page 1 | era: pre-1.18.1 -->

Hello,

it is enough to run the launcher as administrator.
It seems that with standard permissions the launcher cannot open the installation path.

Good luck and have fun in game boys

