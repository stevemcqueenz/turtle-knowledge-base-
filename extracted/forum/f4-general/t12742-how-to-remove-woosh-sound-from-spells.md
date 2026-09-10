---
title: "How to remove \"woosh\" sound from spells?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12742"
topic_id: 12742
forum_id: 4
forum: "General"
author: "Frantsel"
author_authority: "player"
posted: "2024-01-16T13:28:00Z"
last_post: "2024-01-16T15:14:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:55:27Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How to remove "woosh" sound from spells?

## Post 84891 by Frantsel (Patch Note Conspiracy Theorist) — 2024-01-16T13:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84891#p84891 | page 1 | era: pre-1.18.1 -->

Anyone knows how to remove that woosh sound from all spells?
I mean that sound that occurs when you are out of range or have no target and you press that spell.

## Post 84905 by Jan125 (Barrens Chat Casualty) — 2024-01-16T14:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84905#p84905 | page 1 | era: pre-1.18.1 -->

Make sure the following folder structure exists:
WoWFolder\Data\Sound\Spells\Fizzle\

Add empty but valid .wav files (Not empty files!!!! The header needs to be there or WoW will crash.) under the following names:
Code: Select all

```
WoWFolder\Data\Sound\Spells\Fizzle\
FizzleFireA.wav
FizzleFrostA.wav
FizzleHolyA.wav
FizzleNatureA.wav
FizzleShadowA.wav
```

Next time, ask your question in the Modding subforum, or in the #modding channel of the discord.

## Post 84912 by Frantsel (Patch Note Conspiracy Theorist) — 2024-01-16T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84912#p84912 | page 1 | era: pre-1.18.1 -->

> **Jan125 wrote: Tue Jan 16, 2024 2:47 pm**
> Make sure the following folder structure exists:
>  WoWFolder\Data\Sound\Spells\Fizzle\
>
>  Add empty but valid .wav files (Not empty files!!!! The header needs to be there or WoW will crash.) under the following names:
>  Code: Select all
>
> ```
> WoWFolder\Data\Sound\Spells\Fizzle\
>     FizzleFireA.wav
>     FizzleFrostA.wav
>     FizzleHolyA.wav
>     FizzleNatureA.wav
>     FizzleShadowA.wav
> ```
>
>   Next time, ask your question in the Modding subforum, or in the #modding channel of the discord.

Sorry my bad for picking the wrong subforum!

Thanks for the reply!

Somehow I cant find that folder. Let me show you what I see if you try to find it..

![Image](https://i.ibb.co/Bjg3mZr/Screenshot-2024-01-16-160342.jpg)

## Post 84913 by Majestik51 (Patch Note Conspiracy Theorist) — 2024-01-16T15:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84913#p84913 | page 1 | era: pre-1.18.1 -->

u can check here, i think u find ur answer.
<https://turtle-wow.fandom.com/wiki/Turtle_WoW_Wiki>

## Post 84914 by Ibux (Patch Note Conspiracy Theorist) — 2024-01-16T15:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84914#p84914 | page 1 | era: pre-1.18.1 -->

<https://github.com/mrrosh/NoErrorSounds>

## Post 84916 by Jan125 (Barrens Chat Casualty) — 2024-01-16T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84916#p84916 | page 1 | era: pre-1.18.1 -->

> **Frantsel wrote: Tue Jan 16, 2024 3:06 pm**
> Somehow I cant find that folder. Let me show you what I see if you try to find it..

"Make sure the folder structure exists" = "Create that folder structure if it doesn't exist".

See the post above this, from Ibux, for a ready-made solution.

