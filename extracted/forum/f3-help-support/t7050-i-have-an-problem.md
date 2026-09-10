---
title: "I have an problem :("
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7050"
topic_id: 7050
forum_id: 3
forum: "Help & Support"
author: "Y4lt"
author_authority: "player"
posted: "2023-05-06T19:31:00Z"
last_post: "2023-05-31T10:26:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T09:12:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I have an problem :(

## Post 44731 by Y4lt — 2023-05-06T19:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44731#p44731 | page 1 | era: pre-1.18.1 -->

I have a problem, when I enter the game after moving a bit I get an error
In Spanish: "La instruccion en 0x00000000071AACE hace referencia a la memoria en 0x00000001E23F10. La memoria no se pudo read."
In English: "The instruction at 0x00000000071AACE referenced the memory at 0x00000001E23F10. The memory could not be read"
I don't know what it is, but I already investigated and tried to solve it but nothing seems to do it. Now I'm reinstalling the client again to see if it fixes it.
Im from Argentina, my laptop have 4gb de ram with an intel celeron n3350. The game at 60fps but that error appears, it is the only problem I have.

## Post 44769 by Guilliman — 2023-05-07T06:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44769#p44769 | page 1 | era: pre-1.18.1 -->

Hi there,

If you can read this article and follow instructions:

[https://www.makeuseof.com/fix-memory-ca ... indows-10/](https://www.makeuseof.com/fix-memory-cannot-be-read-error-windows-10/)

Read the article carefully so you can understand what it tries to explain. Since some of the suggestions are a bit advanced, I would say that you run suggestions 1, 3 and 5 from that article and see if you get it solved after that.

If you have windows 8 or 10. Click on start and enter im search: windows memory diagnostic, then click restart now. After that the laptop should restart and enter a diagnostic mode where it will auto check for bad memory spots on your computer. After it finishes it will restart into windows and show you the result, usually as a small popup in the right corner of your screen tellimg you if errors were found or not. If errors were found, you should buy a new memory module and install it in your laptop. If that is your case then buying an 8 GB stick module will be better for your computer and get it installed buy a technician if you can so its properly fits inside the laptop. Otherwise if the popup says there are no errors, then you are good, go to next step.

After that I would suggest checking the health of your system drive. If your laptop has a hard drive and not an ssd flash drive, then download this utillity here: [https://m.majorgeeks.com/files/details/ ... nitor.html](https://m.majorgeeks.com/files/details/acronis_drive_monitor.html)

After you install that, run it and then right click its little icon in the taskbar right corner and click on start/open app then it will show you a screen where you click on "disk" icon. It will visually show you the health of your disk drive. If its anything below 100% , you should save your important data on an usb drive and buy a new disk, preferably to have it installed by someone who knows how to handle that and reinstall windows after that. If on the other hand it says 100% health then your disk is good.

Also there are software issues aswell. You should open start on windows, enter into search the word "run" and press enter. A small window shouls open with an address bar that you can enter a command. Enter :  devmgmt.msc

After that press enter and a small window should open. Here is a list of your drivers on your laptop. If any of the little icons looks like a small computer case with an yellow exclamation mark near it, that means you have missing drivers on your system that could be the reason asweel why you experience your memory problems. The simple method would be for you to right click the missing driver icon with yellow exclamation mark and then click on update driver and then option update hrough windows update automatocally. It should search the internet and apply the driver you need and install it. Otherwise it will say that it couldnt find any better driver. If that is the case then write me back, I will give you some more instructions.

The last advanced thing I would suggest is to check your windows integrity on your pc. You can check that by typing cmd into search and then right click on that program -> open as administrator. A little black window opens now where you have to type: sfc /scannow
(Between sfc and / is a space mark.) And then press enter. The system will check windows for corrupt files and attempt to fix them automatically. At the end of the very long scan that can take from an hour to whole day depending on your system, you should get a result saying that no errors were found, or that errors were found and they were fixed, or that errors were foind but couldnt get fixed. Usually after the last message it will give you a link with a log file where it will store more info on why the errors could not be fixed.

These are some of early checks that you can do by yourself. Check them out and see if you get better results and your errors fixed. Write me back with any findings you got.

Sincerely,
Just another turtle in a pond   smiling_turtle

## Post 48016 by Pr4ke — 2023-05-29T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48016#p48016 | page 1 | era: pre-1.18.1 -->

I faced exactly the same problem, bro :(
I don't know how to fix this either...
I noticed a pattern with crooked textures in the game. For example, when creating a character, a goblin woman looks like this
[embed: //drive.google.com/file/d/1ER6unF8s8yfHYeRoY97lMlDgv6Ex0Wwl/preview]
(screen 1)
And when I try to switch to a male goblin, this error occurs
[embed: //drive.google.com/file/d/1PVx6dhYM9Yoaiv9gbT1qGt3kHj_WrIXM/preview]
 2)

## Post 48057 by Illyria (Barrens Chat Casualty) — 2023-05-30T10:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48057#p48057 | page 1 | era: pre-1.18.1 -->

I had such a problem. I downloaded the client from another link and everything worked out

## Post 48058 by Chartreus — 2023-05-30T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48058#p48058 | page 1 | era: pre-1.18.1 -->

Update your GPU drivers, they are probably ancient and don't play right with Vulkan.

If that does not help then rename the d3d9.dll file to something else, but that may affect the performance of the game.

## Post 48218 by Pr4ke — 2023-05-31T09:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48218#p48218 | page 1 | era: pre-1.18.1 -->

> **Illyria wrote: Tue May 30, 2023 10:25 am**
> I had such a problem. I downloaded the client from another link and everything worked out

What link did you download the working client from? I downloaded via torrent and dirrect download on this page [viewtopic.php?f=2&t=5143](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=5143)
The result is the same :(

## Post 48223 by Allwynd01 (Bug Report Enthusiast) — 2023-05-31T10:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48223#p48223 | page 1 | era: pre-1.18.1 -->

I also second updating GPU (and all other drivers too). Use a tool like IObit Driver Updater - it's free an detects all your drivers and automatically installs the newest versions.

If the problem persists after that, redownload Turtle WoW client from a different mirror as suggested and if that doesn't work, it's a Windows issue.

Install all of the:

 - .NET Frameworks - 1, 2, 3, 4, 5
 - VC++ Redistributales - from 2005 all the way up to 2023 or whatever the latest is, both x86 and x64 versions, there are some AIO installers that install all of them automatically so you don't have to download and run every single one by yourself
 - DirectX 9.0c Runtime

## Post 48225 by Illyria (Barrens Chat Casualty) — 2023-05-31T10:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48225#p48225 | page 1 | era: pre-1.18.1 -->

> **Pr4ke wrote: Wed May 31, 2023 9:57 am**
> > **Illyria wrote: Tue May 30, 2023 10:25 am**
> > I had such a problem. I downloaded the client from another link and everything worked out
>
>   What link did you download the working client from? I downloaded via torrent and dirrect download on this page [viewtopic.php?f=2&t=5143](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=5143)
>  The result is the same :(

I am at work now. I'll check at home.

