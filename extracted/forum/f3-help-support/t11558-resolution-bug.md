---
title: "Resolution Bug"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11558"
topic_id: 11558
forum_id: 3
forum: "Help & Support"
author: "Dedsec94"
author_authority: "player"
posted: "2023-11-08T11:44:00Z"
last_post: "2023-11-18T19:08:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:58:26Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution Bug

## Post 76464 by Dedsec94 — 2023-11-08T11:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76464#p76464 | page 1 | era: pre-1.18.1 -->

I can't make WoW to use the proper resolution for wide screen display. Instead, it is 4:3 stretched to cover the 16:9. I'm using the maximized windowed mode.
I think I have tried every approach I can find with Google. So I'm out of options.
The only thing that works is to disable the gpu display adapter in device manager and re-enable it, after that my dispaly resolution it shown in the game but i must do it everytime i restart the pc so is very frustating.

Just in case, i got only a monitor of 2560x1440 144HZ , the maximum resolution i can set ingame is 1600x1200.

## Post 76465 by Torta (Turtle WoW Team) [STAFF] — 2023-11-08T11:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76465#p76465 | page 1 | era: pre-1.18.1 -->

In your Display Settings, set you refresh rate to 60Hz instead of 75Hz, then the game will allow you to pick your native resolution.

## Post 76485 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-11-08T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76485#p76485 | page 1 | era: pre-1.18.1 -->

> **Dedsec94 wrote: Wed Nov 08, 2023 11:44 am**
> I can't make WoW to use the proper resolution for wide screen display. Instead, it is 4:3 stretched to cover the 16:9. I'm using the maximized windowed mode.
>  I think I have tried every approach I can find with Google. So I'm out of options.
>  The only thing that works is to disable the gpu display adapter in device manager and re-enable it, after that my dispaly resolution it shown in the game but i must do it everytime i restart the pc so is very frustating.
>
>  Just in case, i got only a monitor of 2560x1440 144HZ , the maximum resolution i can set ingame is 1600x1200.

If you don't see the right resolution in your video settings:

∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... Utility-CR](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CR)

## Post 76491 by Dedsec94 — 2023-11-08T15:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76491#p76491 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Wed Nov 08, 2023 2:44 pm**
> > **Dedsec94 wrote: Wed Nov 08, 2023 11:44 am**
> > I can't make WoW to use the proper resolution for wide screen display. Instead, it is 4:3 stretched to cover the 16:9. I'm using the maximized windowed mode.
> >  I think I have tried every approach I can find with Google. So I'm out of options.
> >  The only thing that works is to disable the gpu display adapter in device manager and re-enable it, after that my dispaly resolution it shown in the game but i must do it everytime i restart the pc so is very frustating.
> >
> >  Just in case, i got only a monitor of 2560x1440 144HZ , the maximum resolution i can set ingame is 1600x1200.
>
>
>  If you don't see the right resolution in your video settings:
>
>  ∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
>  ∙ Switch to the Windowed Mode in your video settings.
>  ∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
>  ∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
>  ∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
>  ∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
>  ∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... Utility-CR](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CR)

I already tried your suggestions and like i said i don`t have multiple monitors.

## Post 77892 by Maniacal1 — 2023-11-17T22:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77892#p77892 | page 1 | era: pre-1.18.1 -->

I've been having this exact same issue.  I only use 1 monitor, my PC is custom so I don't have an onboard GPU, and editing the config.wtf file does nothing but force me into an 800 x 600 resolution.

In-game I can't change the resolution, it doesn't do anything just reloads right back to the 4:3.  I also can't select ANY refresh rate, there is no drop-down, it's default in the config to 60.

The weirdest thing...I had been playing for 2-3 weeks just fine when this suddenly happened out of nowhere, and now I can't fix it.  Nothing changed on my PC, I didn't install any new addons, it just....happened.

## Post 77954 by Zifzeilforum — 2023-11-18T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77954#p77954 | page 1 | era: pre-1.18.1 -->

> **Maniacal1 wrote: Fri Nov 17, 2023 10:48 pm**
> I've been having this exact same issue.  I only use 1 monitor, my PC is custom so I don't have an onboard GPU, and editing the config.wtf file does nothing but force me into an 800 x 600 resolution.
>
>  In-game I can't change the resolution, it doesn't do anything just reloads right back to the 4:3.  I also can't select ANY refresh rate, there is no drop-down, it's default in the config to 60.
>
>  The weirdest thing...I had been playing for 2-3 weeks just fine when this suddenly happened out of nowhere, and now I can't fix it.  Nothing changed on my PC, I didn't install any new addons, it just....happened.

I was going through this same problem, what it ended up being for me is that I have a Desktop computer and a Laptop, both connected to a Dell Docking Station with a USB switch. The display adapter was coming up as USB device, instead I connected an HDMI cable directly from my computer to my monitor and now when I log in I see all available resolutions.

Try different connection of HDMI and not a Display Adapter cable.

