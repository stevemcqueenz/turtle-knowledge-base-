---
title: "Macro Pick Pocket"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6291"
topic_id: 6291
forum_id: 47
forum: "Rogue"
author: "Lagavulin"
author_authority: "player"
posted: "2023-03-30T10:54:00Z"
last_post: "2024-05-15T15:26:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T08:19:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro Pick Pocket

## Post 39638 by Lagavulin — 2023-03-30T10:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39638#p39638 | page 1 | era: pre-1.18.1 -->

Hi, i'm sorry to open a new topic for something to easy to answer but i didn't find an answer elsewhere...

I'm an addict of macro pick pocket and when i try to make this macro :

/cast Pick Pocket
/cast Garrote (or something else)

it doesn't work. Exactly, it cast only Pick Pocket and not Garrote. I presice that I download the patch with autoloot and it work correctly.
(of course i didn't write "(or something else)" on macro it's just an exemple with "garrote" that can be "ambush" or anything else)

Do you have an idea ? I check a lot of time if i miss orthographing or if i put a "space" in a sentence but i didn't.

Thanks a lot for your answers.

## Post 39642 by Werefox (Patch Note Conspiracy Theorist) — 2023-03-30T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39642#p39642 | page 1 | era: pre-1.18.1 -->

Macros only allow one /cast per button press. So when you tap the button once it pickpockets. On your second tap pickpocket fails (target already pickpocketed) and it proceeds to attack. But this setup is buggy as hell. Maybe try /castsequence instead.

## Post 39723 by Lagavulin — 2023-03-30T21:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39723#p39723 | page 1 | era: pre-1.18.1 -->

Thank you for your answer.

After some reaserch, I try different things :

/cast Pick Pocket
/cast Garrote

——
/castsequence Pickpocket, Garrote
——
/cast [@mouseover] Pick Pocket
/cast [@mouseover] Garrote
——
/cast Pick Pocket
/stopcasting
/cast Garrote
——

And nothing work.. that sad cause it’s very usefull for pexing and up lockpicking competence…
I find the last one in a old forum which date from Vanilla so I was very optimist with it but nope..

If someone have an other idea i take it, and if not, i give up..

## Post 39725 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-30T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39725#p39725 | page 1 | era: pre-1.18.1 -->

Try: Code: Select all

```
/run if n~= 1 then CastSpellByName("Pickpocket") n=1 else CastSpellByName("Garrote") n=0 end
```

It won't be robust if it does work.

Or this one might be a little better, as it adds a check to see if you are within range before doing the rest of the code: Code: Select all

```
/run while CheckInteractDistance("target", 3) do if n~= 1 then CastSpellByName("Pickpocket") n=1 else CastSpellByName("Garrote") n=0 end
```

## Post 41246 by Lssdfsf — 2023-04-12T10:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41246#p41246 | page 1 | era: pre-1.18.1 -->

> **Lagavulin wrote: Thu Mar 30, 2023 10:54 am**
> Hi, i'm sorry to open a new topic for something to easy to answer but i didn't find an answer elsewhere...
>
>  I'm an addict of macro pick pocket and when i try to make this macro :
>
>  /cast Pick Pocket
>  /cast Garrote (or something else)
>
>  it doesn't work. Exactly, it cast only Pick Pocket and not Garrote. I presice that I download the patch with autoloot and it work correctly.
>  (of course i didn't write "(or something else)" on macro it's just an exemple with "garrote" that can be "ambush" or anything else)
>
>  Do you have an idea ? I check a lot of time if i miss orthographing or if i put a "space" in a sentence but i didn't.
>
>  Thanks a lot for your answers.

nothing works for macros or addons on this server
as is does with classic wow or other popular private servers.

## Post 41265 by Werefox (Patch Note Conspiracy Theorist) — 2023-04-12T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41265#p41265 | page 1 | era: pre-1.18.1 -->

You need roid-macros addon for @mouseover to work.

## Post 45181 by Mustachiocat — 2023-05-09T18:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45181#p45181 | page 1 | era: pre-1.18.1 -->

Is there a macro to pick pocket and auto loot at the same time?

## Post 75954 by Lyssta — 2023-11-05T04:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75954#p75954 | page 1 | era: pre-1.18.1 -->

> **Mustachiocat wrote: Tue May 09, 2023 6:21 pm**
> Is there a macro to pick pocket and auto loot at the same time?

I am wanting to know the same!

## Post 94802 by Hoo — 2024-05-13T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94802#p94802 | page 1 | era: pre-1.18.1 -->

> **Mustachiocat wrote: Tue May 09, 2023 6:21 pm**
> Is there a macro to pick pocket and auto loot at the same time?

You will need to install Vanilla Tweaks for autoloot on vanilla client that turtle wow uses <https://github.com/brndd/vanilla-tweaks#usage>

## Post 94920 by Tobius — 2024-05-15T15:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94920#p94920 | page 1 | era: pre-1.18.1 -->

It is 100% possible. You need auto loot, you can either patch it or get an addon and I believe Ravenstone has the correct sequence to make it work.

