---
title: "Resolution Problem (again)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13723"
topic_id: 13723
forum_id: 3
forum: "Help & Support"
author: "Schmegulon"
author_authority: "player"
posted: "2024-04-23T06:30:00Z"
last_post: "2024-04-23T06:53:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:53:45Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution Problem (again)

## Post 93311 by Schmegulon — 2024-04-23T06:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93311#p93311 | page 1 | era: pre-1.18.1 -->

Still having this issue. I want to play so bad but it makes it unplayable.

It seems like the resolution and refresh rate lines in the config file are broken or something. every other setting can turn on and off just fine, but those ones specifically will absolutely not budge off of 800x600 60fps.

I have tried making it read-only, making the folder for the client itself not read-only, I have tried editing my nvidia control panel settings, I have disabled my (nonexistent even on device manager) integrated gpu, I have tried using DXVK, I have tried vanillatweaks, I have even tried hot-swapping my monitors and restarting my entire pc between attempts.

Through desperate experimentation I've discovered this:
if the game is set to windowed but NOT maximized, I can adjust the resolution, but only within a 4:3 aspect ratio (800x600 through 1600x900). As soon as maximized is selected, it stretches the screen and reverts back to 800x600.

at this point I would even be okay with playing the game in 4:3 at 1600x900, with black bars on the sides. I just want the game to not be microscopic or stretched. Please help

## Post 93313 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-04-23T06:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93313#p93313 | page 1 | era: pre-1.18.1 -->

Greetings!

Our game client only supports 1920 x 1080 resolution. All other settings you need to make manually in the config, but performance is not guaranteed.

> What do I need to do to make the settings manually?
>  ∙ Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.

Also note that monitors with 2k and 4k resolution are not supported. You need to either reduce the original resolution of your monitor or lower the Hertz of your monitor to 60.

More problems occur when using multiple monitors. Remember that the game can be run only on the main monitor.

Here is another [guide](https://discord.com/channels/466622455805378571/691438750185553950/1085596420708507740) on resolution.

If none of this helps you, then I suggest you go to our discord [support channel](https://discord.com/channels/466622455805378571/691438750185553950.)

While in the channel, press ctrl+f and in the search box type the word "resolution" and you will see all the messages with problems and solutions that other users have left.

