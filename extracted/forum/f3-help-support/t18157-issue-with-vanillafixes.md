---
title: "Issue with Vanillafixes"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18157"
topic_id: 18157
forum_id: 3
forum: "Help & Support"
author: "Terexin"
author_authority: "player"
posted: "2025-03-24T16:25:00Z"
last_post: "2025-04-01T14:22:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:46:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Issue with Vanillafixes

## Post 123615 by Terexin (Barrens Chat Casualty) — 2025-03-24T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123615#p123615 | page 1 | era: pre-1.18.1 -->

Hi everyone. So, long story short, I hard copied the whole game from my computer to my laptop and another computer, including addons, dlls and such. Laptop instantly worked, other computer presented an error. Game worked by itself through launcher and exe, but only when I wasn't running Vanillafixes and with the file d3d9.dll removed from the folder. I tried troubleshooting (even with the official superwow/vanillafixes common error steps), still can't figure out why this is happening. Is it missing drivers, bad Hz, bad card, processor, I don't know.

First picture is opening regular wow with the d3d9.dll present, the other when dll present or not present and attempting to start with vanillafixes. C++ redistributable is installed, directX, net framework, everything i could think of. I mean, I could play without vanillafixes but the far worse performance and lack of nampower just kills it. Any ideas?

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/guZnKJR]

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/SyPeGfw]

P. S. The img /img option on forum sucks.   crying_turtle

## Post 123690 by Vanth (Turtle WoW Team) [STAFF] — 2025-03-25T08:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123690#p123690 | page 1 | era: pre-1.18.1 -->

Hello there.
You can ask on our Discord in the mod support channel for assistance with these issues.

## Post 124472 by Alekto — 2025-03-30T15:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124472#p124472 | page 1 | era: pre-1.18.1 -->

> **Terexin wrote: Mon Mar 24, 2025 4:25 pm**
> Hi everyone. So, long story short, I hard copied the whole game from my computer to my laptop and another computer, including addons, dlls and such. Laptop instantly worked, other computer presented an error. Game worked by itself through launcher and exe, but only when I wasn't running Vanillafixes and with the file d3d9.dll removed from the folder. I tried troubleshooting (even with the official superwow/vanillafixes common error steps), still can't figure out why this is happening. Is it missing drivers, bad Hz, bad card, processor, I don't know.
>
>  First picture is opening regular wow with the d3d9.dll present, the other when dll present or not present and attempting to start with vanillafixes. C++ redistributable is installed, directX, net framework, everything i could think of. I mean, I could play without vanillafixes but the far worse performance and lack of nampower just kills it. Any ideas?
>
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#a/guZnKJR]
>
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#a/SyPeGfw]
>
>
>  P. S. The img /img option on forum sucks.   crying_turtle

I'm running into the same issue. Did you solve it yet?

I posted mine and I believe by now that the problem stems from lutris trying to load WoW with directx 12 (as I ran into the same issue with the battle.net launcher, which was revolvable by forcing the launcher to use dx11).
Also the same happens when I launch WoW.exe via lutris instead of launcher (turtle and vanillafixes likewise).

## Post 124513 by Terexin (Barrens Chat Casualty) — 2025-03-30T23:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124513#p124513 | page 1 | era: pre-1.18.1 -->

I did. I had to install both redistributable C++

As in, x64 and x86 which was missing. Maybe that's the issue for you too?

## Post 124886 by Mozphetreal — 2025-04-01T11:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124886#p124886 | page 1 | era: pre-1.18.1 -->

> **Terexin wrote: Sun Mar 30, 2025 11:04 pm**
> I did. I had to install both redistributable C++
>
>  As in, x64 and x86 which was missing. Maybe that's the issue for you too?

For anyone struggling to get VanillaFixes to work, this is it.

Install C++ x64 & x86 versions from Microsoft.

## Post 124913 by Alekto — 2025-04-01T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124913#p124913 | page 1 | era: pre-1.18.1 -->

Thank you for coming back to this thread, Terexin, and thank you for helping out, Mozphetreal.

Unfortunately, it is not getting the job done. I am therefore unable to play Turtle WoW (well except with like 1 frame per second) and therefore calling it a day.

