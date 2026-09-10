---
title: "Can't get better than 1600x1200"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18887"
topic_id: 18887
forum_id: 3
forum: "Help & Support"
author: "31venture"
author_authority: "player"
posted: "2025-04-26T04:33:00Z"
last_post: "2025-05-17T12:33:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T08:44:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can't get better than 1600x1200

## Post 128544 by 31venture — 2025-04-26T04:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128544#p128544 | page 1 | era: pre-1.18.1 -->

I did all the things and graphics still 'small' on a 2560x1440.

Win 11, NVidia -> Enable resolutions not exposed by display (checked)

Config.wtf -> won't keep the changes I make. Keeps reverting to the initial unmodified
Resolution fix in config.wtf -> won't stay set, keeps reverting to initial unmodified

Dedicated GPU -> TurtleWoW isn't in the list of apps under display. un/installed several times, did a registry clean

Windowed -> always set in the game

VMMfix -> set to '"1" on default, changed to "2"

VanillaFixes(1.5.2) -> doesn't fix it

Not using any patches or custom models

game folder whitelisted in Windows Defender

second monitor unplugged before game load, and displays duplicated -> no change

## Post 128634 by 31venture — 2025-04-26T20:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128634#p128634 | page 1 | era: pre-1.18.1 -->

UPDATE: This seems to be a combined Lenovo / NVidia / Win11 issue.

My Win10 -INTEL graphics- Lenovo running just fine.

## Post 128683 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-04-27T10:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128683#p128683 | page 1 | era: pre-1.18.1 -->

> **31venture wrote: Sat Apr 26, 2025 4:33 am**
> I did all the things and graphics still 'small' on a 2560x1440.
>
>  Win 11, NVidia -> Enable resolutions not exposed by display (checked)
>
>  Config.wtf -> won't keep the changes I make. Keeps reverting to the initial unmodified
>  Resolution fix in config.wtf -> won't stay set, keeps reverting to initial unmodified
>
>  Dedicated GPU -> TurtleWoW isn't in the list of apps under display. un/installed several times, did a registry clean
>
>  Windowed -> always set in the game
>
>  VMMfix -> set to '"1" on default, changed to "2"
>
>  VanillaFixes(1.5.2) -> doesn't fix it
>
>  Not using any patches or custom models
>
>  game folder whitelisted in Windows Defender
>
>  second monitor unplugged before game load, and displays duplicated -> no change

Hello. In the NVIDIA Control Panel, set the resolution and refresh rate specifically for the WoW.exe program, and the issue will be resolved.

## Post 128959 by MikeyMike — 2025-04-29T09:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128959#p128959 | page 1 | era: pre-1.18.1 -->

Thanks, but I don't think there's any such option in Nvidia Control Panel? (not the OP but I have the exact same issue)

## Post 128985 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-04-29T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128985#p128985 | page 1 | era: pre-1.18.1 -->

> **MikeyMike wrote: Tue Apr 29, 2025 9:14 am**
> Thanks, but I don't think there's any such option in Nvidia Control Panel? (not the OP but I have the exact same issue)

Hello!

This is old guide but nothing really changes [https://www.nvidia.com/en-us/drivers/cu ... solutions/](https://www.nvidia.com/en-us/drivers/custom-resolutions/)
Please give it a try before drawing conclusions

## Post 128987 by MikeyMike — 2025-04-29T14:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128987#p128987 | page 1 | era: pre-1.18.1 -->

Thanks again Pepesmite, I still can't find any option of forcing a resolution for a given executable (WoW.exe), and whatever I do to config.wtf gets overridden by the wow client: if it can't find the resolution, it resets it to 800x600.
It's not a big deal though, I've set it to 1280x1024, which just about fits on a 1920x1080 screen (with black bars on the side).

## Post 129037 by Mezand — 2025-04-29T23:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129037#p129037 | page 1 | era: pre-1.18.1 -->

I'm having the same problem. Since the last patch, the resolution is broken and the game is unplayable. I've tried everything you have listed pepe and it does not work. Also NVIDIA does not allow you to set custom resolutions for games anymore, that guide is out of date and no longer valid at all.

Everytime I try to set config to 3440x1440, it automatically resets to 800x600. It did not do that before the most recent patch.

## Post 130347 by Mashpot — 2025-05-09T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130347#p130347 | page 1 | era: pre-1.18.1 -->

Hello - @Pepesmite is there any update on this? It's something I am also experiencing.
At one point it just fixed itself and displayed the full resolution list but now its reverted back to limiting me to the same as OP

AMD GPU

## Post 130353 by Bowser (Turtle WoW Team) [STAFF] — 2025-05-09T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130353#p130353 | page 1 | era: pre-1.18.1 -->

The new launcher supports tweaks and settings without requiring technical expertise.
 **Enable DXVK in the launcher and see if that resolves your resolution issue.** If not, try enabling MultiMonitorFix as well. Even 4K at 240 Hz (3840×2160) should cause no issues at all if you enable DXVK.

Links for manual installation (without the launcher):

[https://turtle-wow.fandom.com/wiki/Clie ... and_Tweaks](https://turtle-wow.fandom.com/wiki/Client_Fixes_and_Tweaks) (VanillaFixes with DXVK)

<https://github.com/Mates1500/VanillaMultiMonitorFix>

## Post 130444 by Mashpot — 2025-05-10T13:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130444#p130444 | page 1 | era: pre-1.18.1 -->

Hi Bowser,

Sadly, neither of these fixed this issue for me.

I did, however, play around with my Adrenaline software and add both the wow.exe and vanillafixes.exe to the game library. From there, I enabled Radeon Super Resolution for both, launched both, and both had the full resolution list.

I imagine this is probably coincidental, but I thought it was worth noting.

I've now turned them both off, and the resolution list is still full.

This certainly doesn't appear to be a fix and no doubt will reset once I close down my PC.

## Post 131121 by MikeyMike — 2025-05-14T20:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131121#p131121 | page 1 | era: pre-1.18.1 -->

It works if I unplug all monitors and use the built-in laptop display: Glorious 2560x1600 rez. But as soon as I plug a monitor back in, whether before, after or with the game still running, it's back to the old 4:3 resolutions only (800x600) - even if I set it to something else, including the native resolution of the monitor in question, before plugging the monitor.

And yes, tried every single one of the things listed, dxvk installed etc. The "multimonitor fix" results in a critical error/fatal exception on launch, so can't try that one.

## Post 131604 by Mashpot — 2025-05-17T12:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131604#p131604 | page 1 | era: pre-1.18.1 -->

Reporting back that for the last week, it appeared to be fixed since my previous post. Now that the update has come out (whatever that means, backend), it has reset the resolution. Again, possibly a coincidence?

