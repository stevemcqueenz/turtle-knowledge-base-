---
title: "FD and pet. Annoing bug or turtle feature?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4894"
topic_id: 4894
forum_id: 45
forum: "Hunter"
author: "Akarui"
author_authority: "player"
posted: "2022-11-19T14:19:00Z"
last_post: "2022-11-21T23:39:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:15:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# FD and pet. Annoing bug or turtle feature?

## Post 29501 by Akarui (Patch Note Conspiracy Theorist) — 2022-11-19T14:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29501#p29501 | page 1 | era: pre-1.18.1 -->

It was hard to remember and find a video what i saw 12 years ago. <https://www.youtube.com/watch?v=O7bHOv9UCo0&t=174s>

This is first video and example what i seen  how to solo hunter pve. Kiting is everything  satisfied_turtle_head  . But at now i cant to reproduce that. Is it bug or recently update feature?
When i use FD and mob still wants to attack my pet (which standing around the corner) i still in combat and no way to use trap. 2 weeks ago all be fine but not now.

Dear hunters. what do u think about that? PVE solo rip?

## Post 29503 by Snigery (Barrens Chat Casualty) — 2022-11-19T14:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29503#p29503 | page 1 | era: pre-1.18.1 -->

I have no problem using FD & Trap & pet. I wrote a macro that will cast FD and have my pet follow me as passive. This gives me the couple miliseconds to cast my trap and re-attack target with pet. The problem is this, if your pet has not attacked the target during fight, it's not engaged in combat, and so if you FD, target will return to spawn patrol. If your pet has attacked target and is in combat and you FD, target will attack your pet. The problem with FD is this then, if your pet attacks the target while you are in FD, you will be placed back in combat. You are still in FD state, but cannot use your traps.

So this is where the macro is handy. I have had like over 95% success with this macro. The only problem is when my timing is just unfortunate, and my pet is already attacking within a couple miliseconds of my triggering FD where pet attacks at the same time, putting me in combat. But nearly all the time it works, unless FD/trap is resisted.

## Post 29504 by Snigery (Barrens Chat Casualty) — 2022-11-19T15:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29504#p29504 | page 1 | era: pre-1.18.1 -->

Actually, here is the macro. I had a previous one that was more complicated, but this works better.
Code: Select all

```
/run CastPetAction(2) CastPetAction(6) fActionPrepare(98)
```

Code: Select all

```
fActionPrepare
```

is a custom LUA function that the SuperMacro addon allows you to use. It uses a spell in an action bar slot and checks if that action is useable (ie not on CD, in range, etc) and not already active. This avoids error messages popping up.
Code: Select all

```
function fActionPrepare( vActionSlotId )
if fIsActionUseable( vActionSlotId ) and not fIsActionActive( vActionSlotId ) then
UseAction( vActionSlotId )
end
end
```

You could just use Code: Select all

```
CastSpellByName("Feign Death")
```

instead if you rather.

## Post 29581 by Akarui (Patch Note Conspiracy Theorist) — 2022-11-21T00:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29581#p29581 | page 1 | era: pre-1.18.1 -->

> **Snigery wrote: Sat Nov 19, 2022 3:02 pm**
> Actually, here is the macro. I had a previous one that was more complicated, but this works better.
>  Code: Select all
>
> ```
> /run CastPetAction(2) CastPetAction(6) fActionPrepare(98)
> ```
>
>  Code: Select all
>
> ```
> fActionPrepare
> ```
>
>  is a custom LUA function that the SuperMacro addon allows you to use. It uses a spell in an action bar slot and checks if that action is useable (ie not on CD, in range, etc) and not already active. This avoids error messages popping up.
>  Code: Select all
>
> ```
> function fActionPrepare( vActionSlotId )
>   if fIsActionUseable( vActionSlotId ) and not fIsActionActive( vActionSlotId ) then
>     UseAction( vActionSlotId )
>   end
> end
> ```
>
>   You could just use Code: Select all
>
> ```
> CastSpellByName("Feign Death")
> ```
>
>  instead if you rather.

thx.  cast pet action 2 then instantly 3 and all fine for my case

## Post 29609 by Sasser — 2022-11-21T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29609#p29609 | page 1 | era: pre-1.18.1 -->

it is still buggy..it works only with macro. Befor the patch comes out 1-2 weeks ago it works without macro. Feign death > and it was allowed to set traps. Now you do feign death and the buttons are grey and you are still in fight.

## Post 29624 by Snigery (Barrens Chat Casualty) — 2022-11-21T23:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29624#p29624 | page 1 | era: pre-1.18.1 -->

> **Sasser wrote: Mon Nov 21, 2022 3:35 pm**
> it is still buggy..it works only with macro. Befor the patch comes out 1-2 weeks ago it works without macro. Feign death > and it was allowed to set traps. Now you do feign death and the buttons are grey and you are still in fight.

Your FD is probably being resisted, which might show up in the combat log. Other conditions put you back into combat also, like if your pet attacks the target while your are in FD state, you will still be lying down undetected, but unable to use your traps from FD state.

