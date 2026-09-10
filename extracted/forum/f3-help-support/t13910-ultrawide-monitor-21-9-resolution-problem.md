---
title: "Ultrawide Monitor 21:9 Resolution problem"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13910"
topic_id: 13910
forum_id: 3
forum: "Help & Support"
author: "Tehk"
author_authority: "player"
posted: "2024-05-15T03:18:00Z"
last_post: "2025-04-23T02:42:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:44:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Ultrawide Monitor 21:9 Resolution problem

## Post 94882 by Tehk — 2024-05-15T03:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94882#p94882 | page 1 | era: pre-1.18.1 -->

I used to be able to play at 3440x1440 resolution(years ago) and just hopped back in. I'm not able to choose 3440x1440 as an option. It defaults to my Laptops monitor which is 2560x1440 or 1600x1200 when I mess with windowed mode. I've read through a lot of the forum posts here about setting it manually in the WTF config, set to windowed, checked and unchecked Maximized and a bunch of other attempts.

Is there something I might be overlooking?

Things I've already tried:
My Ultrawide is set as the "Main Display"
NVidia Control Panel set to 3440x1440 @ 144hz and also tried 60hz
Tried using the HDMI port(Native onboard graphics driver) instead of Type C to Displayport(Nvidia GPU)
Deleted config.wtf
...Rebooted

## Post 94884 by Bowser (Turtle WoW Team) [STAFF] — 2024-05-15T05:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94884#p94884 | page 1 | era: pre-1.18.1 -->

Use [https://turtle-wow.fandom.com/wiki/Clie ... and_Tweaks](https://turtle-wow.fandom.com/wiki/Client_Fixes_and_Tweaks) to patch your binary file, the DXVK version might fix your resolution problem.

## Post 94892 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-05-15T07:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94892#p94892 | page 1 | era: pre-1.18.1 -->

> **Tehk wrote: Wed May 15, 2024 3:18 am**
> I used to be able to play at 3440x1440 resolution(years ago) and just hopped back in. I'm not able to choose 3440x1440 as an option. It defaults to my Laptops monitor which is 2560x1440 or 1600x1200 when I mess with windowed mode. I've read through a lot of the forum posts here about setting it manually in the WTF config, set to windowed, checked and unchecked Maximized and a bunch of other attempts.
>
>  Is there something I might be overlooking?
>
>  Things I've already tried:
>  My Ultrawide is set as the "Main Display"
>  NVidia Control Panel set to 3440x1440 @ 144hz and also tried 60hz
>  Tried using the HDMI port(Native onboard graphics driver) instead of Type C to Displayport(Nvidia GPU)
>  Deleted config.wtf
>  ...Rebooted

Hi!

Ultra wide monitors are a constant problem in the 1.12 client. As Bowser suggested above, tweaks for the game client can help you.

You can also manually change the resolution and framerate:

Open your config.wtf and modify resolution directly, for example: SET gxResolution “1920x1080”, save.

∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.

∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.

∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh “240”

And one more option for resolution problems : [Link](https://discord.com/channels/466622455805378571/691438750185553950/1085596420708507740)

## Post 128071 by danielmarangoni — 2025-04-23T02:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128071#p128071 | page 1 | era: pre-1.18.1 -->

Hi,

Were you able to solve this issue? I'm exactly in the same situation and nothing has worked for me.

