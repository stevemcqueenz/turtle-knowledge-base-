---
title: "Borderless Window does not work"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18471"
topic_id: 18471
forum_id: 3
forum: "Help & Support"
author: "Ballabulk"
author_authority: "player"
posted: "2025-04-08T19:06:00Z"
last_post: "2025-04-11T09:48:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:45:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Borderless Window does not work

## Post 126039 by Ballabulk — 2025-04-08T19:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126039#p126039 | page 1 | era: pre-1.18.1 -->

Sure this Topic was discussed a 100 times. But i cant get Borderless Window to work. It is ticked ingame, but not written in the Config. I use the Launcher as well as Vanillafixes etc etc...

If i use

SET gxWindow "1"
SET gxMaximize "1"

it does not work. Everytime the config gets overwritten, i think because im starting the game trough the Turtle-launcher.

 *update - im also using reshade, if this makes any difference

## Post 126042 by Azcron (Patch Note Conspiracy Theorist) — 2025-04-08T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126042#p126042 | page 1 | era: pre-1.18.1 -->

Works fine for me and I use the launcher. I do not use reshade however.

## Post 126046 by Ballabulk — 2025-04-08T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126046#p126046 | page 1 | era: pre-1.18.1 -->

I startet with a fresh install. As soon as i install vanillafixes it wont start in borderless anymore, very weird

## Post 126049 by Ballabulk — 2025-04-08T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126049#p126049 | page 1 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/TMjxAU1.png)

i found it. you have to uncommend force borderless fullscreen in the dxvk.conf

jesus...

## Post 126430 by Vanth (Turtle WoW Team) [STAFF] — 2025-04-11T09:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126430#p126430 | page 1 | era: pre-1.18.1 -->

Thank you for the feedback.
Closing topic

