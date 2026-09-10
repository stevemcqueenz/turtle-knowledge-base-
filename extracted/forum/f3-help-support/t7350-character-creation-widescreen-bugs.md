---
title: "Character creation & widescreen bugs"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7350"
topic_id: 7350
forum_id: 3
forum: "Help & Support"
author: "Cerise"
author_authority: "player"
posted: "2023-05-20T01:10:00Z"
last_post: "2023-05-20T01:49:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:13:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Character creation & widescreen bugs

## Post 46684 by Cerise — 2023-05-20T01:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46684#p46684 | page 1 | era: pre-1.18.1 -->

Hello! I created an HC toon, died, deleted it and attempted to remake it using the same name as before. Upon creating the character, it seemed as though it had gone through before I abruptly disconnected.

I then rejoined the game to find the character not on my character list so I tried to remake it, only to be told the name I used was taken. I created another character with an entirely different name. Went through, logged on, but then had to leave the game for a few minutes to take care of something. When logging back in, that character was also gone from my character list.

I deleted the WTF file, which changed my game from being in widescreen into a square. Alt-tabbing to look at another browser makes my screen completely act up, now. Managed to get the game playable again in windowed mode, but I'd really like it back to the original widescreen settings I had, with the ability to alt-tab without my screen going crazy.

## Post 46687 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-20T01:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46687#p46687 | page 1 | era: pre-1.18.1 -->

The "missing character" thing seems to be an [ongoing problem](https://forum.turtlecraft.gg/viewtopic.php?t=7338) for some users – myself included.  We're waiting to hear more about that.

As for the "no widescreen" problem, try this:
- Log into any character.
- Open the Main Menu and go to Video Options.
- Under "Display", check the Resolution options.  If you have a widescreen display, there should be a handful of options which are suffixed with "(Wide)".
- Select one of the "(Wide)" options and click the "Okay" button at the bottom.
Optionally, click the "Windowed Mode" checkbox to make the game run in a window, then click the big square in the upper-right to "Maximize" the window.  This works especially well with a Widescreen resolution and "Use UI Scale" enabled.

If that doesn't work, you can always try editing your *Config.wtf* file manually, but under certain settings (such as dual monitors), the game may reset back to

