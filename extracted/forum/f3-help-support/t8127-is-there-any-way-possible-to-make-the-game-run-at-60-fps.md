---
title: "Is there any way possible to make the game run at 60 FPS?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8127"
topic_id: 8127
forum_id: 3
forum: "Help & Support"
author: "Jackbiers123"
author_authority: "player"
posted: "2023-07-04T03:45:00Z"
last_post: "2023-07-04T16:00:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:11:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Is there any way possible to make the game run at 60 FPS?

## Post 52263 by Jackbiers123 — 2023-07-04T03:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52263#p52263 | page 1 | era: pre-1.18.1 -->

Hello Turtles! I have been playing for about 7 months so far in Turtle and i have tried to get used to the graphic performance issues but the framerate drops and unstability is just something that takes you out of the game most of the time and makes trying to perform skilled gameplay harder. I can have stable 60 fps at a flight path from eastern plaguelands post a.m for example but it is getting in raids (specially supression rooms)/cities/zones with other players (AV usually under 30 FPS) and the FPS rates starts to go up and down without explanation.

Here is some example pics with the game framerate below.
More stable when getting into the canals.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#lPcGiEU]

Framerate drops to under 20 fps when other players around in central market.

[embed: https://s9e.github.io/iframe/2/imgur.min.html#UQy0rfH]

My CPU is an intel 2 Q6600 (2007) with a 950 GTX and 8 GB Ram, with Windows 10, which should run the game with no problems because the game was originally 2004.

i have tried (maybe in a wrong way) some of the popular fixes offered in this and other media.

 - I reinstalled full clients with addons from scratch (i know now that pFquest screws up fps, but deleting it doesn´t fix more than some stutters).

 - Deleted WDB folder.

 - Tried to install direct X-9 and run it, tried other APIs from Torta.

 - Tried some fixes from some nostalrius forum page above this performace issues.

 - Tried Hanessman Vanillafixes, but i am not able to run it because it says only works and is compatible on "modern hardware" (i have the feeling that this could work if operative, what makes me   scared_turtle_head  ).

 - Changing graphic settings. I tried lowest graphics because i do not care about quality, just want stable 60 fps if possible to give my best.

But i just can't make it work. i am in that hard state of graphics getting into my nerves so much that i find it difficult to inmerse myself in the game. I just pray for some magic sollution that may be offered to me at this stage of things. Thank you for everyone that may have got until the end of this post. And sorry if it was hard to read all the pixel frustration. Hope that we can get into something (maybe is that i just suck at informatics).

## Post 52264 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-07-04T04:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52264#p52264 | page 1 | era: pre-1.18.1 -->

Vanilla *World of Warcraft* dropping frames in populated areas, or areas with an inordinate amount of detail (looking at you, Sparkwater Port), is unsurprising.  What *is* surprising is when big, empty areas like Stranglethorn Value start stuttering.  Games which were built around specific renderers like DirectX 9 or OpenGL, they can be tricky to optimize on modern hardware.  Sometimes, even when an area is empty, it can be funky.

Addressing specifically "VanillaFixes" not working on "modern hardware"…  The reason for that is because one of the render settings it uses is [Vulkan](https://en.wikipedia.org/wiki/Vulkan).  While Vulkan is basically the "next version" of OpenGL, which promises high performance with low overhead compared to DirectX, it seems to require some particular hardware to use.  Not necessarily "powerful" hardware.  Just hardware with particular functions which may or may not be on certain GPUs.

I, myself, have a budget laptop, but I can allegedly run Vulkan 1.0.  I just haven't tried, yet.  According to the [nVidia website on Vulkan](https://developer.nvidia.com/vulkan-driver), though… your GTX 950 should actually run the latest version, Vulkan 1.3, just fine!  (:

Worst case scenario, you get an error of some kind and have to uninstall Vulkan or *WoW*, again.  Give it a try!

## Post 52297 by Samsara (Barrens Chat Casualty) — 2023-07-04T16:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52297#p52297 | page 1 | era: pre-1.18.1 -->

Are you on laptop with integrated GPU? If so you need to add the executable file in your Nvidia Control Panel and set it to always use GPU instead of CPU graphics, it does not do it by default, at least on my laptop.

![Image](https://i.imgur.com/qwVWU2R.jpeg)

