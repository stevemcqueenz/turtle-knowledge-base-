---
title: "[MAC] Perhaps time to update the install guide"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15556"
topic_id: 15556
forum_id: 3
forum: "Help & Support"
author: "hervherve"
author_authority: "player"
posted: "2024-11-04T10:01:00Z"
last_post: "2025-04-16T12:23:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:45:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [MAC] Perhaps time to update the install guide

## Post 106290 by hervherve — 2024-11-04T10:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106290#p106290 | page 1 | era: pre-1.18.1 -->

Hi, I feel like the wiki has to be updated. Indeed, when first read it I installed it through Parallels for my M1.
Running it inside VMware Fusion instead (which is free btw as opposed to Parallels) works wayyy better, so kinda misleading..

Here, we are talking about 2x to 4x performance improvement.

Now Windows 11 can even be installed automatically when first running VMware.
The dmg client is kinda tricky to download if you don’t know where to find it but here are always up to date URLs:
 - [https://softwareupdate.vmware.com/cds/v ... op/fusion/](https://softwareupdate.vmware.com/cds/vmw-desktop/fusion/)  (no registration required)
 - <https://formulae.brew.sh/cask/vmware-fusion>

I can do a guide if people are interested but long story short, you need to:
 - Inside VMware, set number of CPU cores to 4 and 8GB of RAM (you can probably do with 5GB)
 - Don't forget to activate "Hardware 3D Graphics"
 - Set General Settings to Gaming: “Always Optimise Mouse" and for the Display: "Stretch in the screen"
 - Install vmware's Drivers/Tool
 - Install vcredist visual C++ 2010 x86
 - Use vanilla-tweaks/superwow/vanillafixes and nampower

Also, you may need to cap your FPS as the laptop will get quite toasty at 100+FPS (WoW built-in Vsync will add a bunch of stutters, so you'll need something like Rivaturner RTSS/DxWnd)

I optimized the hell out of Windows 11 (I like to use Titus winutil), my vm total size is 23GB (that’s WoW included with a bunch of mods), game auto-launches within 15 seconds. I’m pretty happy with all this!

*Last edited by hervherve on Sat Nov 09, 2024 8:05 am, edited 3 times in total.*

## Post 106311 by Jx (Barrens Chat Casualty) — 2024-11-04T12:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106311#p106311 | page 1 | era: pre-1.18.1 -->

The wiki is run by the community, so feel free to update it!

## Post 106487 by mokv — 2024-11-05T08:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106487#p106487 | page 1 | era: pre-1.18.1 -->

Yes, please. You are an MVP for posting this right now. I was just about to give Turtle WoW another go.

## Post 107200 by hervherve — 2024-11-09T08:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107200#p107200 | page 1 | era: pre-1.18.1 -->

Did you get it working yet?

## Post 116704 by Engue — 2025-01-14T13:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116704#p116704 | page 1 | era: pre-1.18.1 -->

Hi !

I am new to Turtle WoW and I am trying to make it work on my M1 Macbook.

I followed the detailed instruction on the wiki and managed to install VMWare Fusion and make the Turtle WoW client work.

However when I try to install Vanilla fixes, the dxvk version throw two errors on launch :
Code: Select all

```
The exception unknown software exception (0x40000015) occurred in the application at location 0x0000000072155B18.

Click on OK to terminate the program
```

and
Code: Select all

```
DXVK self-test failed (Exception caught). The game will now crash.

This is likely caused by missing Vulkan 1.3 support. The DXVK log file
"VanillaFixes_d3d9.log" may have more information.

If you have an older GPU (R9 200/300, GTX 700), remove "d3d9.dlI" to use VanillaFixes without DXVK. Otherwise, try updating your drivers to the latest version.
```

Here is the log file content: Code: Select all

```
info:  Game: VanillaFixes.exe
info:  DXVK: v2.5.1
info:  Build: x86 gcc 13.1.0
info:  Found config file: dxvk.conf
info:  Effective configuration:
info:    d3d9.dpiAware = False
info:    dxvk.numCompilerThreads = 4
info:    dxvk.trackPipelineLifetime = True
info:    dxvk.enableGraphicsPipelineLibrary = Auto
info:  Vulkan: Found vkGetInstanceProcAddr in vulkan-1.dll @ 0x705c1840
info:  Built-in extension providers:
info:    Platform WSI
info:    OpenVR
info:    OpenXR
info:  OpenVR: could not open registry key, status 2
info:  OpenVR: Failed to locate module
info:  Required Vulkan extension VK_KHR_surface not supported
```

However, using the version without DXVK seem to work as the client is launching.

I managed then to install Nampower and SuperWoW with the right windows C++ distribuable installation.

Everything seems to work now but I am experiencing some sluttering and I am wondering if not using DXVK could be the reason for that.

Any idea on why the DXVK version of Vanilla fixes does not work and how to fix it? :)

Thanks a lot in advance,

Engue

## Post 118256 by zhyj900519 — 2025-01-29T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118256#p118256 | page 1 | era: pre-1.18.1 -->

> **Engue wrote: Tue Jan 14, 2025 1:33 pm**
> Hi !
>
>  I am new to Turtle WoW and I am trying to make it work on my M1 Macbook.
>
>  I followed the detailed instruction on the wiki and managed to install VMWare Fusion and make the Turtle WoW client work.
>
>  However when I try to install Vanilla fixes, the dxvk version throw two errors on launch :
>  Code: Select all
>
> ```
> The exception unknown software exception (0x40000015) occurred in the application at location 0x0000000072155B18.
>
> Click on OK to terminate the program
> ```
>
>   and
>  Code: Select all
>
> ```
> DXVK self-test failed (Exception caught). The game will now crash.
>
> This is likely caused by missing Vulkan 1.3 support. The DXVK log file
> "VanillaFixes_d3d9.log" may have more information.
>
> If you have an older GPU (R9 200/300, GTX 700), remove "d3d9.dlI" to use VanillaFixes without DXVK. Otherwise, try updating your drivers to the latest version.
> ```
>
>   Here is the log file content: Code: Select all
>
> ```
> info:  Game: VanillaFixes.exe
> info:  DXVK: v2.5.1
> info:  Build: x86 gcc 13.1.0
> info:  Found config file: dxvk.conf
> info:  Effective configuration:
> info:    d3d9.dpiAware = False
> info:    dxvk.numCompilerThreads = 4
> info:    dxvk.trackPipelineLifetime = True
> info:    dxvk.enableGraphicsPipelineLibrary = Auto
> info:  Vulkan: Found vkGetInstanceProcAddr in vulkan-1.dll @ 0x705c1840
> info:  Built-in extension providers:
> info:    Platform WSI
> info:    OpenVR
> info:    OpenXR
> info:  OpenVR: could not open registry key, status 2
> info:  OpenVR: Failed to locate module
> info:  Required Vulkan extension VK_KHR_surface not supported
> ```
>
>   However, using the version without DXVK seem to work as the client is launching.
>
>  I managed then to install Nampower and SuperWoW with the right windows C++ distribuable installation.
>
>  Everything seems to work now but I am experiencing some sluttering and I am wondering if not using DXVK could be the reason for that.
>
>  Any idea on why the DXVK version of Vanilla fixes does not work and how to fix it? :)
>
>  Thanks a lot in advance,
>
>  Engue

Hi Engue, hope you have it all figured out. If not, delete the game folder, do not download or use the launcher, just download the full client and click wow.exe eveytime you enter. You might need the addon like vallinafix as well. Good luck.

## Post 127022 by paweuek — 2025-04-16T12:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=127022#p127022 | page 1 | era: pre-1.18.1 -->

@hervherve

Could you tell me how many FPS do you have in Stormwind?

