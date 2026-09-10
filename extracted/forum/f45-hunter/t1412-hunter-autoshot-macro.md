---
title: "[HUNTER] Autoshot Macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1412"
topic_id: 1412
forum_id: 45
forum: "Hunter"
author: "Starflowers"
author_authority: "player"
posted: "2020-11-30T19:09:00Z"
last_post: "2023-04-24T02:29:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:14:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [HUNTER] Autoshot Macro?

## Post 8592 by Starflowers — 2020-11-30T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8592#p8592 | page 1 | era: pre-1.18.1 -->

I'm looking for a basic Auto Shot macro. To be more specific, I seek to understand how to write a macro script that does the following 4 things:

 1 Use an ability like Arcane Shot, Multishot or Aimed Shot
 2 Is Auto Shot active?
 3 Yes: Keep using it
 4 No: Activate it

I knew how to do this in TBC and WOTLK macro language, but am struggling to get it to work in 1.12. The problem is that, when spammed, my macro keeps turning Auto Shot on and off (rather than only turning it on).

Any help from a more experienced vanilla hunter using macro's is deeply appreciated.   turtle_in_love_head

## Post 8594 by Tortuga (Barrens Chat Casualty) — 2020-12-01T08:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8594#p8594 | page 1 | era: pre-1.18.1 -->

Maybe try to modify standard attack macro to make it using Auto Shot without turning it off:
Code: Select all

```
/script if not IsCurrentAction(24) then UseAction(24) end; CastSpellByName("Rend")
```

 24 here is the number of the button that has Attack on it, try to change it to your Auto Shot button number; "Rend" should be replaced to, say, "Arcane Shot" or whatever.

Also, the "Engage" macro from this topic [viewtopic.php?f=26&t=1285](https://forum.turtlecraft.gg/viewtopic.php?f=26&t=1285) might give some inpiration:
Code: Select all

```
/run local t='target'if UnitExists(t) and UnitCanAttack('player',t) then PetAttack(t)if CheckInteractDistance('target',3) then CastSpellByName('Attack') else CastSpellByName('Auto Shot') end else TargetNearestEnemy() end
```

## Post 32705 by Cokeaim — 2023-01-18T09:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32705#p32705 | page 1 | era: pre-1.18.1 -->

Not sure if someone has solved this on another post, but I have just started levelling a hunter on this server and needed an autoshot macro or I just wasn't going to be able to play the game (yes the re-released "no changes" classic version was my first time playing vanilla   dead_turtle_head )

The code to make auto shot spamable and not a toggle in this version of WoW is as follows:
Code: Select all

```
#showtooltip auto shot
/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(1) then CastSpellByName("Auto Shot") end
```

This will allow you to spam the button and it won't toggle off auto shot, it will also then switch to melee attack when the target is within melee range.

Just ensure you change the number in the part below: Code: Select all

```
IsAutoRepeatAction(1)
```

To be the corresponding action number on your bar, I have mine as 1 as that is the first button on my action bar.

## Post 32706 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-18T10:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32706#p32706 | page 1 | era: pre-1.18.1 -->

There's a better way to do this if you pick up Zorlen and SuperMacro.
Code: Select all

```
/script PetAttack(target)
/script zDash()
/run if CheckInteractDistance("target",3) then castAttack() else castAutoShot() end
/run if (not isMarked(target)) then CastSpellByName("Hunter's Mark") end
/script CastPetAction(9)
```

[Zorlen Reference Guide](https://www.briankoponen.com/zorlen-addon-vanilla-world-warcraft/)

## Post 32872 by Fairtale — 2023-01-21T23:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32872#p32872 | page 1 | era: pre-1.18.1 -->

Ok so, let me explain my approach:

- I dont want my pet to auto attack, since very often I want my pet to attack OTHER targets than I am attacking.
- I dont want to auto cast hunter's marc on an auto-attack, since that wastes too much mana.
- I want to switch between aspect of the hawk/monkey automatically depending on if I am attacking melee or ranged.
- And I want to automatically switch between range/melee depending on distance.
To achieve this, I use the following macros:

Default attack macro **named "atk" (this is important)**. This will automatically swtich between meelee or ranged attack depending on the distance to the enemy. If you have no target, it will auto-target the nearest enemy (quite useful).

Macro: "atk" Code: Select all

```
/script if GetUnitName("target")==nil then TargetNearestEnemy() end
/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() elseif not IsAutoRepeatAction(25) then CastSpellByName("Auto Shot") end
```

And for the pet, I use this macro which will attack the target my mouse is hovering. If no target is hovered, it will attack my current target. This allows me to give orders to my pet without breaking target (and dps) with my current target:

Macro: "pet" Code: Select all

```
/script if UnitCanAttack("player","mouseover") then TargetUnit("mouseover");PetAttack();TargetUnit("playertarget"); else PetAttack(); end
```

Now I prepare a melee buff macro and a range buff macro, which I can "call" on every other melee or range attack. So:

Range buff macro **called "range"**. To be added to all range attacks.

Macro: "range"
(the blog blocked this macro for some false-positive on security reasons, link to macro: <https://fairtale.shrib.com/?v=co#Hunter%20Macros>)

Now I can create an Arcane shot macro which calls both the "atk" macro and the "range" macro.
Macro for ranged attacks (replace arcane shot with all other attacks you like): Code: Select all

```
/script RunMacro("atk")
/cast Arcane Shot
/script RunMacro("range")
```

The same for melee attacks:
Melee buffs macro, **named "melee"**, macro to be added to all melee attacks.

Macro: "melee"
(the blog blocked this macro for some false-positive on security reasons, link to macro: <https://fairtale.shrib.com/?v=co#Hunter%20Macros>)

Then my melee attack will "call" the "melee" macro (to respect the character limit).
For example, Raptor Strike Macro:
(the blog blocked this macro for some false-positive on security reasons, link to macro: <https://fairtale.shrib.com/?v=co#Hunter%20Macros>)

PS: all of these need the addon supermacro, obviously.

## Post 42804 by Ballargos — 2023-04-24T02:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42804#p42804 | page 1 | era: pre-1.18.1 -->

Hello ! Thanks for the macro !

For me, the link arn't working anymore, could you post it again ? Thanks

