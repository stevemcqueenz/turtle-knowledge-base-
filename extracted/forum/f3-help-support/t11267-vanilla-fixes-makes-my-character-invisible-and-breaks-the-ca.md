---
title: "Vanilla fixes makes my character invisible and breaks the camera"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11267"
topic_id: 11267
forum_id: 3
forum: "Help & Support"
author: "Tazor"
author_authority: "player"
posted: "2023-10-29T06:39:00Z"
last_post: "2025-02-15T13:20:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:47:23Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Vanilla fixes makes my character invisible and breaks the camera

## Post 74592 by Tazor — 2023-10-29T06:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74592#p74592 | page 1 | era: pre-1.18.1 -->

I pinpointed it down from my addons. It is vanilla fixes that causes this problem. It makes my character invisible. It only does this sometimes and only indoors (dungeons included). I installed it as in the instructions on the turtle wow wiki.

And another even bigger problem is the camera. Sometimes it glitches underground making it impossible for me to see anything. Again, happens in dungeons.

Toggling "vertex animation shaders" on or off does not fix the issue. I have also tried running the game with Vulkan by using the Vulkan version of vanilla fixes as I have an AMD GPU. Didn't help.

Is there any way to use vanilla fixes without running into these issues?

## Post 74619 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-10-29T10:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74619#p74619 | page 1 | era: pre-1.18.1 -->

> **Tazor wrote: Sun Oct 29, 2023 6:39 am**
> I pinpointed it down from my addons. It is vanilla fixes that causes this problem. It makes my character invisible. It only does this sometimes and only indoors (dungeons included). I installed it as in the instructions on the turtle wow wiki.
>
>  And another even bigger problem is the camera. Sometimes it glitches underground making it impossible for me to see anything. Again, happens in dungeons.
>
>  Toggling "vertex animation shaders" on or off does not fix the issue. I have also tried running the game with Vulkan by using the Vulkan version of vanilla fixes as I have an AMD GPU. Didn't help.
>
>  Is there any way to use vanilla fixes without running into these issues?

Greetings!
Vfixes and Vtweaks are not modifications that we maintain. Installation of modifications is at your discretion. We recommend them because in most cases they help to increase fps in the game.
If you have problems with Vfixes you can ask the author of the modification in the "problems" section - <https://github.com/hannesmann/vanillafixes/issues>.
You can also ask a question in our discord, section #modding - [https://discord.com/channels/4666224558 ... 5222984744](https://discord.com/channels/466622455805378571/988866055222984744).

## Post 74625 by Tazor — 2023-10-29T10:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74625#p74625 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Sun Oct 29, 2023 10:22 am**
> > **Tazor wrote: Sun Oct 29, 2023 6:39 am**
> > I pinpointed it down from my addons. It is vanilla fixes that causes this problem. It makes my character invisible. It only does this sometimes and only indoors (dungeons included). I installed it as in the instructions on the turtle wow wiki.
> >
> >  And another even bigger problem is the camera. Sometimes it glitches underground making it impossible for me to see anything. Again, happens in dungeons.
> >
> >  Toggling "vertex animation shaders" on or off does not fix the issue. I have also tried running the game with Vulkan by using the Vulkan version of vanilla fixes as I have an AMD GPU. Didn't help.
> >
> >  Is there any way to use vanilla fixes without running into these issues?
>
>   Greetings!
>  Vfixes and Vtweaks are not modifications that we maintain. Installation of modifications is at your discretion. We recommend them because in most cases they help to increase fps in the game.
>  If you have problems with Vfixes you can ask the author of the modification in the "problems" section - <https://github.com/hannesmann/vanillafixes/issues>.
>  You can also ask a question in our discord, section #modding - [https://discord.com/channels/4666224558 ... 5222984744](https://discord.com/channels/466622455805378571/988866055222984744).

Thanks. I like VF because it reduces loading times a lot. Also no stutter when opening the map. I think I will play without it if there is no clear fix for the issues it causes.

## Post 74639 by Jubabuba — 2023-10-29T13:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74639#p74639 | page 1 | era: pre-1.18.1 -->

I solved the issue with limiting my fps to 120 in my graphic settings

## Post 74645 by Tazor — 2023-10-29T14:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74645#p74645 | page 1 | era: pre-1.18.1 -->

> **Jubabuba wrote: Sun Oct 29, 2023 1:21 pm**
> I solved the issue with limiting my fps to 120 in my graphic settings

My FPS was already capped to 60 in game. No cap from the GPU. I seem unable to go above 60 in game. It is locked at 60. Vsync is disabled. I tried choosing both the 60 and 75 hz refresh rate. Didn't make a difference.

## Post 120041 by Wollow — 2025-02-15T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120041#p120041 | page 1 | era: pre-1.18.1 -->

> **Jubabuba wrote: Sun Oct 29, 2023 1:21 pm**
> I solved the issue with limiting my fps to 120 in my graphic settings

Sorry to necro bumping just want to say this helped, if anyone is experiencing this issue, here is what I did:

It seems to only happen if using VanillaFixes, you need to edit the dxvk.conf file.

In the file you will see d3d9.maxFrameRate remove the # to uncomment it and set to 120.
Code: Select all

```
d3d9.maxFrameRate = 120
```

Before my fps was 400+ and causing my character to disappear underground, tunnels, Ironforge etc, adding this dps cap solved the issue and tbh 120 is still just as smooth.

