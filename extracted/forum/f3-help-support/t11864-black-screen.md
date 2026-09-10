---
title: "black screen"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11864"
topic_id: 11864
forum_id: 3
forum: "Help & Support"
author: "Keeperomg"
author_authority: "player"
posted: "2023-11-23T22:14:00Z"
last_post: "2023-11-24T22:49:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:58:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# black screen

## Post 78490 by Keeperomg — 2023-11-23T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78490#p78490 | page 1 | era: pre-1.18.1 -->

I changed the display mode from windowed to fullscreen. since I have a 3440*1440 monitor. I haven't played for a long time. I was hoping that you added such a resolution for the game. I changed it to see if it will be added to the settings options.
but now I just get a black screen. there is sound. I hear the sound of buttons being pressed on the start screen if I blindly hit them with the cursor. alt+enter does not return the game to the window. and now I don't know what to do

## Post 78491 by Torta (Turtle WoW Team) [STAFF] — 2023-11-23T22:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78491#p78491 | page 1 | era: pre-1.18.1 -->

Please find the config located in your game folder: WoW/WTF/Config.wtf

Open it and add the following lines:
Code: Select all

```
SET gxWindow "1"
SET gxMaximize "1"
```

Save and close the file.

## Post 78493 by Keeperomg — 2023-11-23T22:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78493#p78493 | page 1 | era: pre-1.18.1 -->

> **Torta wrote: Thu Nov 23, 2023 10:22 pm**
> Please find the config located in your game folder: WoW/WTF/Config.wtf
>
>  Open it and add the following lines:
>  Code: Select all
>
> ```
> SET gxWindow "1"
> SET gxMaximize "1"
> ```
>
>   Save and close the file.

thanks, it helped.
please tell me if you will add extra wide resolution for the game 3440*1440 and others?

## Post 78494 by Torta (Turtle WoW Team) [STAFF] — 2023-11-23T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78494#p78494 | page 1 | era: pre-1.18.1 -->

Try setting your desktop refresh rate to 60 instead of 70, this should allow the game to recognize your native screen resolution as one of the available options.

## Post 78628 by Keeperomg — 2023-11-24T22:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78628#p78628 | page 1 | era: pre-1.18.1 -->

did not work
the picture in 1080 resolution is simply stretched, and I'm playing "wide Phil"))

