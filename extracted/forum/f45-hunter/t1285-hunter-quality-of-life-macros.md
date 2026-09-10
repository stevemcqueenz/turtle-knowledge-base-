---
title: "[Hunter] Quality of Life Macros"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1285"
topic_id: 1285
forum_id: 45
forum: "Hunter"
author: "Snigery"
author_authority: "player"
posted: "2020-09-18T22:11:00Z"
last_post: "2023-04-03T17:39:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T08:14:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Hunter] Quality of Life Macros

## Post 7660 by Snigery (Barrens Chat Casualty) — 2020-09-18T22:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=7660#p7660 | page 1 | era: pre-1.18.1 -->

I wrote some macros for my hunter when starting on this server last year. I shared them with a few players in-game and have received great responses. I would like to share them with everyone and hope they enjoy the quality of life they provide.

Call/Dismiss Pet
Code: Select all

```
/run if not HasPetUI() then CastSpellByName('Call Pet') else CastSpellByName('Dismiss Pet') end
```

Well...I think I have to start with this macro, which will call or dismiss your pet. It checks whether your pet is summoned with a function that checks if the pet UI panel is available, a fool-proof method to ensure that you are dismissing a real pet. If the pet UI does not exist, pet is summoned. This just might work for warlocks given demons have a UI panel - but for several reasons I can think of, this macro does not suite a warlock quite the same.

Pamper Pet
Code: Select all

```
/run if HasPetUI() then if UnitIsDead('pet') then CastSpellByName('Revive Pet') elseif (UnitHealth('pet')/UnitHealthMax('pet')*100)<75 then CastSpellByName('Mend Pet') else CastSpellByName('Feed Pet') PickupContainerItem(0,1) end end
```

This is one of my favorite macros. Pamper pet will check your pet for several conditions. If your pet is dead, cast Revive Pet. This is the first thing the macro will do we cannot do anything with a dead pet. If your pet is alive but is significantly hurt (if the pet has lees than 75% hp), cast Mend Pet. I determined that 75% of max health is the best indicator of a pet engaged in combat, or leaving combat. Anything less, and your pet is likely on it's way to death and Mend Pet will not prevent that. Any higher, and it is a wasted Mend Pet given pets regenerate so sufficiently. If your pet is alive and healthy then Pamper Pet will cast Feed Pet and automatically grab the first item in your Backpack, so make sure you keep your pets favorite foods there and this macro is super convenient.

Engage
Code: Select all

```
/run local t='target'if UnitExists(t) and UnitCanAttack('player',t) then PetAttack(t)if CheckInteractDistance('target',3) then CastSpellByName('Attack') else CastSpellByName('Auto Shot') end else TargetNearestEnemy() end
```

Engage allows the Hunter and their pet to attack the target together. This macro also checks the target distance and will use auto melee attack or auto shot attack if the target is close or far enough. I believe the function CheckInteractDistance is looking to see whether the target can be inspected, which happens to be melee range.

Assist Pet
Code: Select all

```
/run AssistUnit('pet') if UnitExists('target') then if CheckInteractDistance('target',3) then CastSpellByName('Attack') else CastSpellByName('Auto Shot') end end
```

Assist Pet allows the hunter to target and attack the pets' active target. Most of the code is similar to Engage.

Disengage
Code: Select all

```
/run SpellStopCasting('Auto Shot') SpellStopCasting('Attack') ClearTarget()
```

Disengage will cancel Attack or Auto Shot as well as clearing target. A nice way to forget about the target you were currently engaged with. No need to mash that Esc button, which is really the point of these macros to help your button presses be more intentional.

That is most of what I have to share. My other Hunter macros are a bit more philosophically unique to some things I aim to achieve as a Hunter. I may add them when I have time to explain their use. I hope you enjoy!

## Post 16467 by Wobrbbobr — 2022-01-29T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16467#p16467 | page 1 | era: pre-1.18.1 -->

Good afternoon everyone, guys! Since I started using [https://renasorganic.com/products/cbd-1 ... ief-cream/](https://renasorganic.com/products/cbd-1000-mg-pain-relief-cream/) many years ago, I tried to preserve my health. I take a little when my immune system weakens, and if I need energy to get up during the day, for example, to stay up late at work. try it!

## Post 16928 by Katvena — 2022-02-10T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16928#p16928 | page 1 | era: pre-1.18.1 -->

/run local t='target'if UnitExists(t) and UnitCanAttack('player',t) then PetAttack(t)if CheckInteractDistance('target',3) then CastSpellByName('Attack') else CastSpellByName('Auto Shot') end else TargetNearestEnemy() end

How do I make this macro work with a Warlock class. how do i get rid of ('Auto Shot') part of the macro. Is It

/run local t='target'if UnitExists(t) and UnitCanAttack('player',t) then PetAttack(t)if CheckInteractDistance('target',3) then CastSpellByName('Attack') else TargetNearestEnemy() end

## Post 39583 by Beast412 — 2023-03-29T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39583#p39583 | page 1 | era: pre-1.18.1 -->

Anyone have a macro to switch Aspect of the Hawk and Aspect of the Cheetah back n forth on 1 button?

## Post 39585 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-29T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39585#p39585 | page 1 | era: pre-1.18.1 -->

> **Beast412 wrote: Wed Mar 29, 2023 3:47 pm**
> Anyone have a macro to switch Aspect of the Hawk and Aspect of the Cheetah back n forth on 1 button?

Try this: Code: Select all

```
/script if(UnitBuff("player",1)==nil)then CastSpellByName("Aspect of the Hawk")elseif(string.find(UnitBuff("player",1),"Raven"))then CastSpellByName("Aspect of the Cheetah")elseif(UnitBuff("player",1))then CastSpellByName("Aspect of the Hawk");end
```

## Post 39586 by Beast412 — 2023-03-29T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39586#p39586 | page 1 | era: pre-1.18.1 -->

Sweet, ty

## Post 39967 by Nandiebs (Barrens Chat Casualty) — 2023-04-02T11:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39967#p39967 | page 1 | era: pre-1.18.1 -->

> **Beast412 wrote: Wed Mar 29, 2023 3:47 pm**
> Anyone have a macro to switch Aspect of the Hawk and Aspect of the Cheetah back n forth on 1 button?

you think you want this, but you really don't.
there are times when you just resurrected for example, and you don't have any aspect going, but you want cheetah instead of hawk, and if you have both bound to the same button, you will always waste time and mana by casting hawk first and then cheetah, so you end up having cheetah bound to a key anyways

## Post 40063 by Beast412 — 2023-04-03T04:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40063#p40063 | page 1 | era: pre-1.18.1 -->

If I die I'll have to start all over, it has been a beautiful macro for me

## Post 40142 by Sixgun — 2023-04-03T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40142#p40142 | page 1 | era: pre-1.18.1 -->

> **Ravenstone wrote: Wed Mar 29, 2023 4:14 pm**
> > **Beast412 wrote: Wed Mar 29, 2023 3:47 pm**
> > Anyone have a macro to switch Aspect of the Hawk and Aspect of the Cheetah back n forth on 1 button?
>
> Try this: Code: Select all
>
> ```
> /script if(UnitBuff("player",1)==nil)then CastSpellByName("Aspect of the Hawk")elseif(string.find(UnitBuff("player",1),"Raven"))then CastSpellByName("Aspect of the Cheetah")elseif(UnitBuff("player",1))then CastSpellByName("Aspect of the Hawk");end
> ```

Curious as a macro noob, what does this macro do that the macro I "made" to switch back and forth does not?
The one I use-
/Cast Aspect of the Hawk
/Cast Aspect of the Cheetah

Switches back and forth.

## Post 40145 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-03T16:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40145#p40145 | page 1 | era: pre-1.18.1 -->

> **Sixgun wrote: Mon Apr 03, 2023 4:16 pm**
> Curious as a macro noob, what does this macro do that the macro I "made" to switch back and forth does not?
>  The one I use-
>  /Cast Aspect of the Hawk
>  /Cast Aspect of the Cheetah
>
>  Switches back and forth.

The one I provided is more robust and vanilla client friendly. It checks firstly if you have any buff, if you do it checks if you have AotH, and depending on the result buffs you with AotH or AotC.

The one you have I don't think works in vanilla without additional macro addons as basically it should only ever run the first line and then stop, which would just continually buff you with AotH. In classic onwards I believe it works out that there is no point casting the AotH when you already have it and so goes to the next line to cast AotC.

## Post 40165 by Nandiebs (Barrens Chat Casualty) — 2023-04-03T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40165#p40165 | page 1 | era: pre-1.18.1 -->

Another useful macro for turning in those thorium shells a little quicker. you still have to right click the npc though but you can bind this macro to a button and spam it then

/script SelectGossipAvailableQuest(1)
/script CompleteQuest()
/script GetQuestReward()

