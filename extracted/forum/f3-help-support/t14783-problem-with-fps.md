---
title: "Problem with FPS"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14783"
topic_id: 14783
forum_id: 3
forum: "Help & Support"
author: "Cogblock"
author_authority: "player"
posted: "2024-09-04T23:40:00Z"
last_post: "2024-09-05T15:52:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:51:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Problem with FPS

## Post 100674 by Cogblock — 2024-09-04T23:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100674#p100674 | page 1 | era: pre-1.18.1 -->

Hello,

I have a problem with FPS and lags/stutter. I spent hours looking through forums and trying different things but it keeps behaving wierd.
 **I will mention in advance that:**
 - I use laptop (Intel i9-10980HK, GeForce RTX 3080, 32GB RAM) with external monitor (LG 27gl850)
 - I have only dedicated graphic card (no need to turn off integrated one)
 - I have my game on C:/Games
 - I have disabled game bar
 - I set High performance in Graphics
 - I installed DirectX9
 - I tried changing API to "opengl" but it just makes it worse.
 - I did everything mentioned here by Torta and others: [viewtopic.php?t=5329](https://forum.turtlecraft.gg/viewtopic.php?t=5329)
 - I tried disabling all addons

 **On top of that i of course installed VanillaFixes.**
I tried using VanillaFixes with dxvk, without it and installing manually (plus uncommented borderless support in dxvk.conf i also played with FPS CAP). After that my FPS went up from ~60 FPS to 144 FPS and game started running smoothly. BUT here comes the wierd part - after some time running around and killing mobs my FPS drops to ~40-60 and it becomes laggy and uplayable. I don't know why it is good for around 5-10 minutes and then it breaks.

 **After that i installed VanillaTweaks.**
When i simply tweak WoW.exe with all default settings it completly breaks the game, ~30FPS, lags, stutter etc. When i played with the settings and turned off frilldistance, farclip, fov, nameplatedistance it seems to be ok. I reach 144FPS but again after 5-10 minutes running around and killing mobs it breaks again and goes down to ~40-60FPS and becomes laggy etc. Below is my vanilla-tweaks command.
[![Image](https://i.postimg.cc/BvcMv929/vanilla-tweaks.png)](https://postimages.org/)

Another wierd thing is that sometimes when i run TWoW i start "broken" with ~40-60FPS and laggy. I need to close it and re run (cometimes couple of times) so i start with stable 144FPS but as i mentioned before it breaks again after some time.

 **Tried with clean client**
I tried downloading clean client since i was doing alot of changes. On clean client my FPS jump from 60 to 100 with minor random lags and stutters (i suppouse it's normal for everyone). However the wierd things that games starts "broken" with low fps and stays there remains even on clean client. I sometimes have to rerun the game to have it fixed.

Any suggestions what i can do more?
Thanks for help in advance!

## Post 100706 by Cogblock — 2024-09-05T11:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100706#p100706 | page 1 | era: pre-1.18.1 -->

Ok after more tests it turns out that when i unplug external monitor and run game on laptop only then my FPS goes up.
 **With VanillaFixes and dxvk installed manually**
Jumping alot between 160-320FPS, mostly staying around 240.

 **With VanillaFixes and dxvk installed manually and VanillaTweaks**
Still jumping but now around 160-220FPS. Mostly staying around 190 and dropping in while fighting. Seems more "stable" but with less max FPS.

Game runs smoothly. "broken" start still happens. However it seems it doesn't break after some time.
Seems to be the problem with external monitor. Maybe someone has some advice on that? I assume that this jumping FPS is how it should be?

Thanks

*Last edited by Cogblock on Thu Sep 05, 2024 11:39 am, edited 1 time in total.*

## Post 100707 by Boogs — 2024-09-05T11:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100707#p100707 | page 1 | era: pre-1.18.1 -->

some laptops run all external monitors through the integrated CPU graphics, and the GPU is used exclusively for the laptop screen

## Post 100709 by Cogblock — 2024-09-05T11:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100709#p100709 | page 1 | era: pre-1.18.1 -->

> **Cogblock wrote: Wed Sep 04, 2024 11:40 pm**
> Hello,
>
>  I have a problem with FPS and lags/stutter. I spent hours looking through forums and trying different things but it keeps behaving wierd.
>  **I will mention in advance that:**
>  - I use laptop (Intel i9-10980HK, GeForce RTX 3080, 32GB RAM) with external monitor (LG 27gl850)
>  - I have only dedicated graphic card (no need to turn off integrated one)

I don't have integrated graphic card and i checked that my GPU is used while running the game

## Post 100717 by Kwall — 2024-09-05T13:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100717#p100717 | page 1 | era: pre-1.18.1 -->

Have you turned off v-sync?

## Post 100722 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-09-05T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100722#p100722 | page 1 | era: pre-1.18.1 -->

i9-10980hk does have integrated graphics so good chance its running off of that. You can't have that cpu and not have the integrated graphics.

## Post 100732 by Cogblock — 2024-09-05T15:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100732#p100732 | page 1 | era: pre-1.18.1 -->

Well maybe i used wrong words here. I have Alienware m15 R4 and it has it's dedicated GPU hardwired so it's not capable of using integrated GPU. Still i might be mistacken. I'm not the best with hardware. [https://www.dell.com/community/en/conve ... a8de627b1e](https://www.dell.com/community/en/conversations/alienware/m15-r4-how-to-set-the-igpu-as-default/647fa0fef4ccf8a8de627b1e)

## Post 100733 by Sauceman89 — 2024-09-05T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100733#p100733 | page 1 | era: pre-1.18.1 -->

Give this a try:
Go into Nvidia Control Panel -- Managed 3D Settings and make sure that you have High-performance Nvidia processor selected. This will tell the Nvidia GPU to override the Integrated Graphics from your Intel chip.

![Image](https://i.imgur.com/CPXviL5.png)

## Post 100734 by Cogblock — 2024-09-05T15:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100734#p100734 | page 1 | era: pre-1.18.1 -->

I don't have such option :(
[![Image](https://i.postimg.cc/RZ2jQ1DC/nvidia.png)](https://postimages.org/)

