---
title: "--<{Useful Vanilla Macros}>--"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=863"
topic_id: 863
forum_id: 18
forum: "AddOns"
author: "Naito"
author_authority: "player"
posted: "2019-12-12T00:24:00Z"
last_post: "2026-02-23T04:18:00Z"
post_count: 33
pages: 1
fetched: "2026-09-10T10:21:51Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# --<{Useful Vanilla Macros}>--

## Post 4611 by Naito — 2019-12-12T00:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4611#p4611 | page 1 | era: pre-1.18.1 -->

Given the amount of searching that I had to do in order to recreate the very useful macros that made life so much easier during BC and beyond for Vanilla and the existent but super spread out resources for it on the web; I've decided to create a thread consolidating the way to make the kind of macros that everyone might want. If you have a useful macro, that has been tested and works fine in Turtle Wow with only the SuperMacro addon thrown in, post it below and I'll include it for people to reference in this post.

Also, this post assumes you have supermacro installed and working correctly. You can download supermacro from <https://github.com/isitLoVe/SuperMacro> Click clone or download and then click download as zip. It will download as zip "SuperMacro-master.zip" unzip this and you get the SuperMacro-master folder. Inside this folder is the Supermacro folder this is what you want to put in the addons directory, not the SuperMacro-master folder. Do that and when you launch the game you should have a supermacro button on the right side of your escape menu. This far more often than the macro section will be where you do macro work, simply because the benefits are great. Much bigger input area, ability to do extended functions, and the ability to make the macro display proper tooltips since the #showtooltip isn't a thing in vanilla. More importantly though, supermacro adds important action commands that were otherwise completely missing from macros in Vanilla.

 **Easy weapon swap macro.**
> Here is one I've heard of all the time. A weapon switching macro. Simply type the command where you want in the macro and shift click the item it will put the name in for you.
>
>  /equipoff Stinging Viper
>  /equip Leaden Mace of Power
>  /unequip Daryl's Hunting Rifle
>
>  The first equips the item to the offhand. The second equips the item to an appropriate slot. The third removes the item you are wearing and puts it in your inventory. Simple easy. Have fun.

 **Attack if not attacking target when spamming spam skill.**
> Next you know how annoying it is when you are out of energy or rage and are wanting to attack the target but want to do it faster than using your mouse to right click it but don't want to dedicate a spam button space to your attack skill? This will do it. First in interface options make sure the 4 extra action bars are on, then put your attack skill in the slot on the right most slot on the bar just above your experience bar.
>
>  /run if not IsCurrentAction(60) then UseAction(60) end;
>  /run CastSpellByName("Sinister Strike")
>
>  Replace Sinister Strike with whatever spam skill you want and when you spam it it will always check to see that the skill in that slot is active, and if not activate it before going on to using the skill. This is huge as a tank as we tab target a lot and this makes it so much easier to attack what you want that way without relying on the mouse for speed.

 **Auto-Self-Cast replacement for skills.**
> Next, you know how if you use healbot or another addon that casts things on others not targeted, you generally have to turn off auto-self cast in interface options right? But it makes healing yourself more time consuming, or casting abilities on yourself also more time consuming. No more, replace them on your bar with macros of these so you don't have to keep turning it off and on again depending on group status yet still have both the healbot / pallypower benefit and the ability to use skills on yourself without targeting yourself or losing your current target.
>
>  /script if UnitIsFriend("player", "target") then CastSpellByName("Lesser Heal"); else CastSpellByName("Lesser Heal", 1); end
>
>  Simply replace lesser heal with the spell you need. Remember if you don't include a rank it will always default to the highest rank, so no more having to swap out spells as you level unless you are downranking.

 **Druid Ravage when prowling shred otherwise.**
> You a druid who wants to not have to have different buttons for shred and ravage since you use the same action bar when stealthed unlike a rogue? Look no further. This macro will ravage if you are stealthed and shred if not. No extra buttons.
>
>  In the normal macro part in supermacro put:
>
>  /run if ({GetSpellCooldown(GetSpellID("Prowl"),"spell")})[3]~=0 then CastSpellByName("Shred") else CastSpellByName("Ravage") end
>
>  In the Enter Extended Lua section of supermacro put:
>
>  function GetSpellID(sn)
>  local i,a
>  i=0
>  while a~=sn do
>  i=i+1
>  a=GetSpellName(i,"spell")
>  end
>  return i
>  end
>
>  function IsActive(sn)
>  return ({GetSpellCooldown(GetSpellID(sn),"spell")})[3]==0
>  end
>
>  Remember to save extend in addition to the save macro.

 **Reset Instances.**
> Want to reset instances but are totally confused by the fact that there is no right click portrait option in vanilla to do so? I mean you could leave group, or you could use this easy macro.
>
>  /script ResetInstances()

 **Check Rested Experience.**
> This one was created by an awesome Enhance Shammy by the name of Xok. You know how tents give you rested beyond your exp bar right? So you can never know when you are full without addons? Just slip this macro into your macro section and when clicked it will display your current rested experience amount. Click again and it will display the new total, when it stops going up then your rested is full.
>
>  /script DEFAULT_CHAT_FRAME:AddMessage("Rested:".. GetXPExhaustion());

That is all for now. If you have any you would like to share that work fine on this server with nothing more than supermacro addon installed please post them below and I will include them. If you have requests, mention them and I will see if I can find it for inclusion.

 -Knight Soryen

## Post 4612 by Sinrek (Grandmaster of Forum PvP) — 2019-12-12T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4612#p4612 | page 1 | era: pre-1.18.1 -->

Nice post. I hope to see more additions for other classes.

## Post 4613 by Xerron (Barrens Chat Casualty) — 2019-12-12T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4613#p4613 | page 1 | era: pre-1.18.1 -->

I posted some in the priest section but here are my hunter ones

Hawk/Monkey based on target distance Code: Select all

```
/run if CheckInteractDistance("target", 3) then CastSpellByName("Aspect of the Monkey") else CastSpellByName("Aspect of the Hawk") end
```

Wingclip / Concussive based on distance Code: Select all

```
/run if CheckInteractDistance("target", 3) then CastSpellByName("Wing Clip") else CastSpellByName("Concussive Shot") end
```

Trap / Feign, you have to spam it Code: Select all

```
/cast Freezing Trap
/script PetFollow("---ADD YOUR NAME HERE---");
/script if UnitAffectingCombat("player") then CastSpellByName("Feign Death") end
```

Safe scatter shot Code: Select all

```
/script if GetUnitName("target")==nil then TargetNearestEnemy() end
/script if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetPassiveMode() CastPetAction(2); else end
/cast Scatter Shot
```

Safe shadowmeld Code: Select all

```
/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Ambush" then x=1 end i=i+1 end if x==0 then CastSpellByName("Shadowmeld") else end
```

## Post 4800 by Naito — 2020-01-05T13:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=4800#p4800 | page 1 | era: pre-1.18.1 -->

Will be posting more shortly. Thanks for the ones you contributed Xer it is quite helpful.

## Post 5184 by Snigery (Barrens Chat Casualty) — 2020-03-03T04:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=5184#p5184 | page 1 | era: pre-1.18.1 -->

Here are some of my own hunter macros I just wrote up. I was going for a scenario/personality based macros rather than action-specific macros. One example is the Pet Assist macro with the idea of the pet being called to assist the hunter. My Engage macro was greatly helped by Xerron, knowing that the CheckInteractDistance() will work on npcs.

I thought it would not work as you cannot duel/trade enemy mobs, and I had trouble learning how to get other functions to work. I instead tried to hack my way to make a macro that would allow me to toggle state to swap between melee and ranged attack. My first solution was to query the who list with my name. If one result was present (it should be) then use Attack A and query who for my name + my name again. If no results (there should not be) then use Attack B. However, this spammed my chat with the who results. I also tried using my player currency as a means ot tracking state (ie even/odds) but I did not want to lose money when fighting. My final solution I found RegisterCVar(), which lets you store data in your console. This was quite amazing, but it required that you register the variable you want first when you log-in, and you still had to spam it to swap between melee and ranged. Thank you Xerron!

Alright, so here are my macros for hunter. (I'm having trouble with SuperMacro, so my macros try to stay within the 255 limit)

 **Engage**

Hunter & Pet attack/enage target together. If Hunter is far away, uses ranged, otherwise melee. Targets nearest enemy if no unit already targeted.
Code: Select all

```
/run local t='target'if UnitExists(t) and UnitCanAttack('player',t) then PetAttack(t)if CheckInteractDistance('target',3) then CastSpellByName('Attack') else CastSpellByName('Auto Shot') end else TargetNearestEnemy() end
```

 **Pamper Pet**

Revive/Heal/Feed pet. The following conditions only trigger if pet is summoned. If the pet is dead, revive pet. If the pet is hurt (less than 75% hp), cast Mend Pet. If pet is alive and healthy, cast Feed Pet on the first item slot in your backpack. I determined 75% was a good indicator of a pet actively engaging in combat as pet regen out-of-combat is quite high, and if you're sending your pet in-and-out of combat, you would not be feeding them which interupts the feeding buff.
Code: Select all

```
/run if HasPetUI() then if UnitIsDead('pet') then CastSpellByName('Revive Pet') elseif (UnitHealth('pet')/UnitHealthMax('pet')*100)<75 then CastSpellByName('Mend Pet') else CastSpellByName('Feed Pet') PickupContainerItem(0,1) end end
```

 **Pet Assist**

Has pet attack Hunter current target and cast 7th action of pet action bar. I have my pet controls and pet states one after another on action bar followed by pet spells. So that is 3 + 3 + 4. The 7th action for me is Growl, useful for having pet come to help me and then draw aggro if I spam the button. This macro is a great low-key replacement for the default pet attack action. Modify to suite your own needs and pet skills. If not target present, has pet follow hunter.
Code: Select all

```
/run local t='target'if UnitExists(t) and UnitCanAttack('player',t) then CastPetAction(7) PetAttack(t) else PetFollow() end
```

 **Pet Dessist**

This macro is mostly working the way I intended. So if you have 2-3 mobs on pet and you are peeling them with ranged, you might want pet to move on to another target while you finish off one with ranged, yknow to build up that aggro without need for taunting. This macro will target that next enemy, have pet attack, and target last target. What this does is it makes the pet not attack your current target, so the pet is effectively un-assisting you. Sometimes it will have the hunter target another target. I think this depends on how you got your first target (ie clicking it) or the distance of enemies in relation to the hunter. If only it worked from pet perspective.
Code: Select all

```
/run TargetNearestEnemy()if UnitExists('target') and UnitCanAttack('player','target') then PetAttack() TargetLastTarget() end
```

 **Pet Switch**

Similar to Pet Dessist, makes pet attack next target, and hunter attack pet previous target. The idea is hunter finishes off target of pet while pet moves on to next target. Use more than once to have pet & hunter swap targets.
Code: Select all

```
/run TargetNearestEnemy()if UnitExists('target') and UnitCanAttack('player','target') then TargetNearestEnemy() PetAttack() TargetNearestEnemy(true) end
```

## Post 9510 by Odissa — 2021-02-23T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9510#p9510 | page 1 | era: pre-1.18.1 -->

For anyone like me, missing mouse over macros for healing here is something that seems to work (Just substitute Arcane Intellect for any spell you want). This will cast the desired spell on your mouseover target without deselecting your current one. If you do not have a mouseover then it will be cast on your target if friendly. If you have a hostile target or no target it will cast it on yourself. (This will not work on ui frames). Code: Select all

```
/script pt='mouseover' t='target' p='player' s='Arcane Intellect' if UnitExists(pt) and UnitIsFriend(p, pt) then TargetUnit(pt) CastSpellByName(s) TargetLastTarget() elseif UnitExists(t) then CastSpellByName(s) else CastSpellByName(s) end
```

The bellow one would work on party frames: Code: Select all

```
/run s='Arcane Intellect' f=GetMouseFocus():GetName() t="party"..string.gsub(f, "PartyMemberFrame", "") if UnitExists(t) then TargetUnit(t) CastSpellByName(s) TargetLastTarget() else CastSpellByName(s) end
```

## Post 9559 by Jimmicz (Barrens Chat Casualty) — 2021-02-25T20:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9559#p9559 | page 1 | era: pre-1.18.1 -->

I find Roids macro better, it brings #showtooltip and translates these /run scripts into something more user friendly.

<https://denniswg.github.io/Roid-Macros/>

## Post 11647 by Mrplanitia — 2021-08-13T14:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11647#p11647 | page 1 | era: pre-1.18.1 -->

> **Odissa wrote: Tue Feb 23, 2021 10:37 pm**
> The bellow one would work on party frames:

Does not work for me. However, the other one for direct mouseover the character does. Is it maybe because of party interface addons? I'm using X-Perl for that, not the Vanilla ones.

## Post 14092 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-11-24T03:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14092#p14092 | page 1 | era: pre-1.18.1 -->

> **Jimmicz wrote: Thu Feb 25, 2021 8:37 pm**
> I find Roids macro better, it brings #showtooltip and translates these /run scripts into something more user friendly.
>
>  <https://denniswg.github.io/Roid-Macros/>

It is useful, but there are but only so many commands that work with Roid Macros. I use it, but find I need to use some 1.0 scripts in addition. Neither gets the job quite done by itself.

## Post 14492 by Chouette — 2021-12-10T14:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14492#p14492 | page 1 | era: pre-1.18.1 -->

Someone recommended MacroTT-V in Guildchat yesterday.

Was wondering if anyone could tell how this macro addon compares to the Roids Macro and SuperMacro addons.

## Post 14494 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-12-10T18:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14494#p14494 | page 1 | era: pre-1.18.1 -->

[https://forum.elysium-project.org/topic ... or-macros/](https://forum.elysium-project.org/topic/42390-addon-macrott-v-create-custom-tooltips-for-macros/)

It seems informational (for the player), not performance-oriented. Still cool, though. Can use in conjunction, I think, with SuperMacro and/or RoidMacros.

## Post 15072 by Kiwijello — 2021-12-31T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15072#p15072 | page 1 | era: pre-1.18.1 -->

Thank you for posting this. I have been working with macro scripts and one thing is driving me mad lol

For this script

/script if UnitIsFriend("player", "target") then CastSpellByName("Lesser Heal"); else CastSpellByName("Lesser Heal", 1); end

When I have NO Target, I want it to cast on myself. Is there something I can add so that it works exactly as above but selfcasts when no target?

Thank you!!!

## Post 15077 by Snigery (Barrens Chat Casualty) — 2021-12-31T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15077#p15077 | page 1 | era: pre-1.18.1 -->

> **Kiwijello wrote: Fri Dec 31, 2021 12:54 pm**
> Thank you for posting this. I have been working with macro scripts and one thing is driving me mad lol
>
>  For this script
>
>  /script if UnitIsFriend("player", "target") then CastSpellByName("Lesser Heal"); else CastSpellByName("Lesser Heal", 1); end
>
>  When I have NO Target, I want it to cast on myself. Is there something I can add so that it works exactly as above but selfcasts when no target?
>
>  Thank you!!!

I think there is a game setting that enables auto self-cast when you do not have a target and are casting some beneficial spell (buff/heals). Nevertheless you could use Code: Select all

```
TargetUnit("player")
```

## Post 15099 by Kiwijello — 2022-01-01T01:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15099#p15099 | page 1 | era: pre-1.18.1 -->

> **Snigery wrote: Fri Dec 31, 2021 5:22 pm**
> > **Kiwijello wrote: Fri Dec 31, 2021 12:54 pm**
> > Thank you for posting this. I have been working with macro scripts and one thing is driving me mad lol
> >
> >  For this script
> >
> >  /script if UnitIsFriend("player", "target") then CastSpellByName("Lesser Heal"); else CastSpellByName("Lesser Heal", 1); end
> >
> >  When I have NO Target, I want it to cast on myself. Is there something I can add so that it works exactly as above but selfcasts when no target?
> >
> >  Thank you!!!
>
>   I think there is a game setting that enables auto self-cast when you do not have a target and are casting some beneficial spell (buff/heals). Nevertheless you could use Code: Select all
>
> ```
> TargetUnit("player")
> ```

Thank you. The self cast option isn't working for some reason. I will see if I can't insert the TargetUnit into the script. This far, that hasn't worked, but I may be screwing the order or syntax. I haven't even looked at script in over a decade :)

## Post 16486 by Layt — 2022-01-30T04:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16486#p16486 | page 1 | era: pre-1.18.1 -->

> **Merikkinon wrote: Fri Dec 10, 2021 6:58 pm**
> [https://forum.elysium-project.org/topic ... or-macros/](https://forum.elysium-project.org/topic/42390-addon-macrott-v-create-custom-tooltips-for-macros/)
>
>  It seems informational (for the player), not performance-oriented. Still cool, though. Can use in conjunction, I think, with SuperMacro and/or RoidMacros.

MTTS not compatible w/ SuperMacros
in SuperMacros use:
Code: Select all

```
/run -- CastSpellByName("Spell Name")
```

or Code: Select all

```
/script -- CastSpellByName("Spell Name")
```

or Code: Select all

```
/script if nil then CastSpellByName("SPELLNAME"); end
```

in 1st line to enable Tooltip

Roid macros have **#showtooltip** command.

## Post 16520 by Geojak (Grandmaster of Forum PvP) — 2022-01-31T08:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16520#p16520 | page 1 | era: pre-1.18.1 -->

You still need the code from your last post in addition to #showtooltip when using roid macros.
Quite annoying as it takes lots of characters

## Post 16522 by Layt — 2022-01-31T08:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16522#p16522 | page 1 | era: pre-1.18.1 -->

yep!
Cause im using Lazyscript - its very space conservative.

Compare

Plane macro: Code: Select all

```
/script -- CastSpellByName("Sinister Strike")
/script if not IsCurrentAction(12) then AttackTarget() end;
/run cast("Riposte")
/cast Sinister Strike
```

Macro using Lazy script: Code: Select all

```
/script -- CastSpellByName("Sinister Strike")
/ls do autoAttack
/ls do riposte
/ls do ss
```

or try to make mashing restaelth macro:
Code: Select all

```
/script --CastSpellByName("Stealth")
/ls do vanish-ifPlayerInCombat
/ls do stealth-ifNotStealthed
/ls do cancelBuff=stealth-ifShiftDown
```

using plain macro /w script.

## Post 20684 by Volkyte (Patch Note Conspiracy Theorist) — 2022-07-30T15:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20684#p20684 | page 1 | era: pre-1.18.1 -->

question: is there a way to implement in super macro the ability to "obscure " the button if I got not enough mana/rage/energy to cast a skill? For example, Sinister strike costs 45 energy, if I got 30 energy the button remain unaltered. is there such function?

## Post 24202 by Snoodydood (Patch Note Conspiracy Theorist) — 2022-09-02T03:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24202#p24202 | page 1 | era: pre-1.18.1 -->

I'm trying to get a specific weapon swap macro to work for a rogue but I can only get it half right with basic commands using supermacro, I'm not used to writing macros so maybe someone else can help.
What I'm trying to do is make a simple combat macro for after using ambush by switching out a dagger for a mainhand sword, and then putting the dagger in my off-hand slot. the macro I made is as follows;
/cast Ambush
/unequip dagger
/equip MH sword
/equipoff weapon (the same dagger in this case)
now the first 2 parts work and it successfully uses ambush then immediately unequips the dagger and equips the 1h sword, but I can't get it to re-equip the dagger in offhand and it just stays in my inventory so i have to re-equip the dagger manually.
I've never experimented with macros before in vanilla so if anyone has a solution or advice who knows much more about writing them than me, i'd really appreciate the help.

## Post 44738 by Nickdamran1 — 2023-05-06T21:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44738#p44738 | page 1 | era: pre-1.18.1 -->

anyone know a macro that turns in repeatable quests for repuation?

## Post 44763 by Ibux (Patch Note Conspiracy Theorist) — 2023-05-07T04:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44763#p44763 | page 1 | era: pre-1.18.1 -->

useful vanilla macros <https://github.com/Meridaw/Vanilla-Macros>

*Last edited by Ibux on Wed Aug 16, 2023 3:36 pm, edited 1 time in total.*

## Post 50388 by Alyria6315 — 2023-06-17T14:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50388#p50388 | page 1 | era: pre-1.18.1 -->

> **Mrplanitia wrote: Fri Aug 13, 2021 2:12 pm**
> > **Odissa wrote: Tue Feb 23, 2021 10:37 pm**
> > The bellow one would work on party frames:
>
>   Does not work for me. However, the other one for direct mouseover the character does. Is it maybe because of party interface addons? I'm using X-Perl for that, not the Vanilla ones.

If anyone is wondering how to make this party frame mouseover macroCode: Select all

```
/run s='Arcane Intellect' f=GetMouseFocus():GetName() t="party"..string.gsub(f, "PartyMemberFrame", "") if UnitExists(t) then TargetUnit(t) CastSpellByName(s) TargetLastTarget() else CastSpellByName(s) end
```

to work when you have some raid frames addon - you just need to replace Code: Select all

```
t="party"..string.gsub(f, "PartyMemberFrame", "")
```

with the correct line fit for your specific raidframe addon. For example, if you use NotGrid  you should use this: Code: Select all

```
t="party"..string.gsub(f, "NotGridContainerparty", "")
```

and if you use X-Perl you should use this: Code: Select all

```
t="party"..string.gsub(string.gsub(f, "XPerl_party", ""), "_CastClickOverlay", "")
```

In general, you can find out the line for your specific addon by following these instructions:
- make a macro with the following code and bind it to a key: Code: Select all

```
/script SendChatMessage(GetMouseFocus():GetName(), "WHISPER", nil, GetUnitName("PLAYER"));
```
- invite one person to your party
- mouse over their raidframe and use the macro via keybind
- now you will get a whisper in the chat that looks:
 1. EITHER somewhat like this Code: Select all

```
xxxxxx1
```

and then your addon-specific line is: Code: Select all

```
t="party"..string.gsub(f, "xxxxxx", "")
```
 2. OR somewhat like this Code: Select all

```
xxxxxx1yyyyyy
```

and then your addon-specific line is: Code: Select all

```
t="party"..string.gsub(string.gsub(f, "xxxxxx", ""), "yyyyyy", "")
```
(obviously, you must replace xxxxxx and yyyyyy in your macro with the actual text from your whisper)

## Post 56524 by Grimseethe — 2023-08-09T13:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56524#p56524 | page 1 | era: pre-1.18.1 -->

Hello im trying to make auto attack macros for my abilities.
I finally got it to work how i want it, but now every time i cast it the messages show "type/help to see a few command"
How do i get it to stop.

## Post 56529 by Ibux (Patch Note Conspiracy Theorist) — 2023-08-09T14:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56529#p56529 | page 1 | era: pre-1.18.1 -->

> **Grimseethe wrote: Wed Aug 09, 2023 1:22 pm**
> Hello im trying to make auto attack macros for my abilities.
>  I finally got it to work how i want it, but now every time i cast it the messages show "type/help to see a few command"
>  How do i get it to stop.

you probably just wrote something wrong in the macro. use the code display </> and link the macro here. then we can help you fix it.

## Post 56580 by Grimseethe — 2023-08-09T19:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56580#p56580 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Wed Aug 09, 2023 2:13 pm**
> > **Grimseethe wrote: Wed Aug 09, 2023 1:22 pm**
> > Hello im trying to make auto attack macros for my abilities.
> >  I finally got it to work how i want it, but now every time i cast it the messages show "type/help to see a few command"
> >  How do i get it to stop.
>
>  you probably just wrote something wrong in the macro. use the code display </> and link the macro here. then we can help you fix it.

I just fixed it, thanks anyway.

## Post 61202 by Safyre — 2023-09-06T21:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61202#p61202 | page 1 | era: pre-1.18.1 -->

Hello
I've spent a few hours trying to get this to work and find similar things online but haven't been able to. I'd love some help with making a couple macros. I found some bits online but can't seem to get some bits to work with other bits. I'll state what I want and see if it's even possible.

I would like a macro that will check my distance to my target and turn on the corresponding Aspect (for hunters) and begin auto attack. I guess three things:
 1. Check distance
 2. Cast aspect appropriate for distance (Hawk or Monkey) Edit: sorry, and not turn off the corresponding aspect if pressed again
 3. Start auto attack (ranged for Hawk or melee for Monkey)

And if possible...
 4. Send pet to attack

I've found a macro that checks distance. I've found macros for auto attacking. I've found macros that switch aspects. My problem is I've tried and tried but can't seem to add them into one macro.

Thanks for any help you can give me!

## Post 73247 by Wargsus — 2023-10-24T02:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73247#p73247 | page 1 | era: pre-1.18.1 -->

> **Grimseethe wrote: Wed Aug 09, 2023 7:18 pm**
> > **Ibux wrote: Wed Aug 09, 2023 2:13 pm**
> > > **Grimseethe wrote: Wed Aug 09, 2023 1:22 pm**
> > > Hello im trying to make auto attack macros for my abilities.
> > >  I finally got it to work how i want it, but now every time i cast it the messages show "type/help to see a few command"
> > >  How do i get it to stop.
> >
> >  you probably just wrote something wrong in the macro. use the code display </> and link the macro here. then we can help you fix it.
>
>   I just fixed it, thanks anyway.

im having same issue. what did you do? can you link the macro?

## Post 75914 by Grimseethe — 2023-11-04T19:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75914#p75914 | page 1 | era: pre-1.18.1 -->

> **Wargsus wrote: Tue Oct 24, 2023 2:39 am**
> > **Grimseethe wrote: Wed Aug 09, 2023 7:18 pm**
> > > **Ibux wrote: Wed Aug 09, 2023 2:13 pm**
> > > you probably just wrote something wrong in the macro. use the code display </> and link the macro here. then we can help you fix it.
> >
> >   I just fixed it, thanks anyway.
>
>   im having same issue. what did you do? can you link the macro?

Cant remember exactly, im sure it was just rhe spacing after the /

## Post 90340 by Naite — 2024-03-16T14:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90340#p90340 | page 1 | era: pre-1.18.1 -->

hey guys , can someone help me with the script please
/script if not UnitIsFriend("player", "target") then UseItemByName("Juju Flurry") end
I want to use [Juju Flurry] on myself, do not change the target. Using default autoself cast option bugs other addons.

## Post 90342 by Zeran (Patch Note Conspiracy Theorist) — 2024-03-16T15:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90342#p90342 | page 1 | era: pre-1.18.1 -->

> **Naite wrote: Sat Mar 16, 2024 2:57 pm**
> hey guys , can someone help me with the script please
>  /script if not UnitIsFriend("player", "target") then UseItemByName("Juju Flurry") end
>  I want to use [Juju Flurry] on myself, do not change the target. Using default autoself cast option bugs other addons.

According to [https://wowwiki-archive.fandom.com/wiki ... ItemByName](https://wowwiki-archive.fandom.com/wiki/API_UseItemByName)

If it is applicable to the 1.12 API, then there's a second argument where you can pass the target.

So you could try Code: Select all

```
UseItemByName("Juju Flurry", "player")
```

## Post 90444 by Naite — 2024-03-17T13:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=90444#p90444 | page 1 | era: pre-1.18.1 -->

> **Zeran wrote: Sat Mar 16, 2024 3:16 pm**
> > **Naite wrote: Sat Mar 16, 2024 2:57 pm**
> > hey guys , can someone help me with the script please
> >  /script if not UnitIsFriend("player", "target") then UseItemByName("Juju Flurry") end
> >  I want to use [Juju Flurry] on myself, do not change the target. Using default autoself cast option bugs other addons.
>
>   According to [https://wowwiki-archive.fandom.com/wiki ... ItemByName](https://wowwiki-archive.fandom.com/wiki/API_UseItemByName)
>
>  If it is applicable to the 1.12 API, then there's a second argument where you can pass the target.
>
>  So you could try Code: Select all
>
> ```
> UseItemByName("Juju Flurry", "player")
> ```

Thank you for your response. I also found another one that works perfectly

 **Use any Juju on yourself, or friendly target (add full name if you want a specific Juju)**
Code: Select all

```
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Juju"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end
```

 **Use any Healthstone/Healing Potion**
Code: Select all

```
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Healthstone") or strfind(n,"Healing Potion"))then UseContainerItem(b,s,1)end end end
```

## Post 120550 by Shaszy — 2025-02-21T01:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120550#p120550 | page 1 | era: pre-1.18.1 -->

Hi guys,

I'm looking for a way to make the following macro for my priest:
(Either mouse over or target, i don't mind, but i prefer mouseover)
If mouseover friendly party frame face, cast flash heal, if targeting an enemy, cast smite.

Can anyone help me?

P.S; i'd like to have the mouseover function priority over Smite. If that is not possible, then a target macro is totally fine.

Thank you in advance!

## Post 169234 by Viiuan — 2026-02-23T04:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169234#p169234 | page 1 | era: 1.18.1-announced-pre-release -->

> **Xerron wrote: Thu Dec 12, 2019 1:09 pm**
> Hawk/Monkey based on target distance Code: Select all
>
> ```
> /run if CheckInteractDistance("target", 3) then CastSpellByName("Aspect of the Monkey") else CastSpellByName("Aspect of the Hawk") end
> ```

I've tried this (as well as finding it on the Nostalrius forum) but it doesn't seem to work for me/only ever casts Monkey. Did it just stop working, can anyone else confirm?
Edit: The exact same macro works just fine when replaced with Attack and Auto Shot. So weird.

Edit 2: Aspects are now stances, so this needs to be formatted more like a Druid or Warrior macro and it will work.

