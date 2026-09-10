---
title: "White \"square\" on game \"windows\". Help, please!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16420"
topic_id: 16420
forum_id: 4
forum: "General"
author: "trupichusky"
author_authority: "player"
posted: "2024-12-09T18:32:00Z"
last_post: "2025-05-05T19:57:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T09:45:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# White "square" on game "windows". Help, please!

## Post 111934 by trupichusky — 2024-12-09T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111934#p111934 | page 1 | era: pre-1.18.1 -->

Hello! I have a bug with an addon; I attach some screenshots to see if anyone knows what is the reason....

![Image](https://i.ibb.co/ssz1MyK/Captura-de-pantalla-2024-12-09-183528.png)

![Image](https://i.ibb.co/WnJ802v/Captura-de-pantalla-2024-12-09-183539.png)

![Image](https://i.ibb.co/vdtXtSB/Captura-de-pantalla-2024-12-09-183550.png)

The white square of shit I get since I installed the addon “HideErrorFrame”. Does anyone know what it is or how to fix it?

I relog and nothing happens. I delete the WDB folder and nothing happens either. Apparently, there is no way to fix it.

Help please! :)  turtle_in_love_head

## Post 111992 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-12-10T06:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111992#p111992 | page 1 | era: pre-1.18.1 -->

> **trupichusky wrote: Mon Dec 09, 2024 6:32 pm**
> Hello! I have a bug with an addon; I attach some screenshots to see if anyone knows what is the reason....
>
>  ![Image](https://i.ibb.co/ssz1MyK/Captura-de-pantalla-2024-12-09-183528.png)
>
>  ![Image](https://i.ibb.co/WnJ802v/Captura-de-pantalla-2024-12-09-183539.png)
>
>  ![Image](https://i.ibb.co/vdtXtSB/Captura-de-pantalla-2024-12-09-183550.png)
>
>  The white square of shit I get since I installed the addon “HideErrorFrame”. Does anyone know what it is or how to fix it?
>
>  I relog and nothing happens. I delete the WDB folder and nothing happens either. Apparently, there is no way to fix it.
>
>  Help please! :)  turtle_in_love_head

Hi!

This is a UI glitch that is fixed with the command to reload the UI in the game. You don't need to delete anything.
In game chat write /reload

Also try this addon <https://github.com/mitjafelicijan/ReloadUI>

## Post 112010 by trupichusky — 2024-12-10T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112010#p112010 | page 1 | era: pre-1.18.1 -->

Thank you Pepesmite for your response.

Unfortunately, it does not work for me. I tried to /reload without and with the addon you shared and I cannot solve this glitch. :S

## Post 112063 by Donald137777 — 2024-12-10T14:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112063#p112063 | page 1 | era: pre-1.18.1 -->

Might not be a solution at all,but long time ago I changed some things in video settings and this appeared.Maybe try changing video options too,but as I said not sure,and cant exactly remember what setting it was.Hope you solve it!  happy_turtle

## Post 129045 by cryster — 2025-04-30T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129045#p129045 | page 1 | era: pre-1.18.1 -->

Did you find a solution? I have same problem

## Post 129054 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-04-30T02:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129054#p129054 | page 1 | era: pre-1.18.1 -->

> **cryster wrote: Wed Apr 30, 2025 1:35 am**
> Did you find a solution? I have same problem

I've run across this before.... I'm pretty sure it's an add-on problem if I'm remembering correctly.  Unfortunately I don't remember the solution.  You might want to try the #addon-support channel in the twow discord.

## Post 129087 by cryster — 2025-04-30T06:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129087#p129087 | page 1 | era: pre-1.18.1 -->

Ive found out that if I have SuperAPI and Impulsebooster enabled at the same time, then I get square box.
But if I only enable one of the addons, then I get no square box.

## Post 129089 by Jan125 (Barrens Chat Casualty) — 2025-04-30T07:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129089#p129089 | page 1 | era: pre-1.18.1 -->

This happens on a resolution change on some boxes on my Windows PCs.
It seems to be an issue with reloading UI textures, but that is just a guess.

## Post 129097 by Snkx (Patch Note Conspiracy Theorist) — 2025-04-30T07:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129097#p129097 | page 1 | era: pre-1.18.1 -->

Get rid of impulse booster. It's not needed

## Post 129098 by Jan125 (Barrens Chat Casualty) — 2025-04-30T07:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129098#p129098 | page 1 | era: pre-1.18.1 -->

Right, Impulsebooster disables vsync for a bit, that causes the reload.

## Post 129786 by Zmarotrix — 2025-05-05T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129786#p129786 | page 1 | era: pre-1.18.1 -->

This was cause by Impulsebooster for me. I timed load times and found no significant difference between impulse booster enabled and disabled. I just removed the addon.

Notably, I'm running the game on an M.2 and have a fairly beefy computer, so results may vary on a laptop or lower specced rig.

