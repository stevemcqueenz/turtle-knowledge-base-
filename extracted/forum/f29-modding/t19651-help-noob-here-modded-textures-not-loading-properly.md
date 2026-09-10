---
title: "[HELP] Noob Here, Modded Textures not Loading Properly"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19651"
topic_id: 19651
forum_id: 29
forum: "Modding"
author: "LateNightWizard"
author_authority: "player"
posted: "2025-05-31T00:47:00Z"
last_post: "2025-05-31T13:51:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:40:11Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [HELP] Noob Here, Modded Textures not Loading Properly

## Post 133717 by LateNightWizard — 2025-05-31T00:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133717#p133717 | page 1 | era: pre-1.18.1 -->

Sorry if this isn't the right place to ask but i'm currently having trouble on making a custom texture to load in the game, i'm very new at modding here so if i'm missing something please let me know.

What I'm trying to do, is edit the GoblinFemaleSkin00_102 file by simply removing the bra and filling empty spaces to make it work better with Bikini mod since the goblin female always keeps her bra on, but i cannot get the edited file to load after trying for a couple of hours, i use MPQEditor to browse/import and export the files and tried using both BLPlab 0.5.0 and BLPG Converter, in the converted PNG edition i leave Alpha channel enabled, RGB and transparency and keep the original resolution from the file (256x256) but after following all the steps i always get this glitchy texture
![Image](https://i.imgur.com/QKxQZ1T.png)

I'll also share my .blp file just to see if anyone can point me of what I'm doing wrong, like i said before, i'm just starting WoW modding so the issue could be laughable at but i tried my best heh, and if this is not the right place for this type of posts i'll just move it right away.
[https://drive.google.com/file/d/1Xjm0Qz ... fueXT/view](https://drive.google.com/file/d/1Xjm0QzBLGPsX1HUeurLNzrZcFuJfueXT/view)

## Post 133745 by Mac (Bug Report Enthusiast) — 2025-05-31T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133745#p133745 | page 1 | era: pre-1.18.1 -->

Try indexing the colors (256).

## Post 133776 by LateNightWizard — 2025-05-31T13:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133776#p133776 | page 1 | era: pre-1.18.1 -->

> **Mac wrote: Sat May 31, 2025 10:55 am**
> Try indexing the colors (256).

Thanks man, that did the trick and i also had to set alpha depth to none and now it's fully working. :D

