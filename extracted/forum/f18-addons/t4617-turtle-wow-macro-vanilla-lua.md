---
title: "Turtle Wow Macro (Vanilla Lua)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4617"
topic_id: 4617
forum_id: 18
forum: "AddOns"
author: "Taerra"
author_authority: "player"
posted: "2022-10-20T17:56:00Z"
last_post: "2025-02-18T13:14:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T10:26:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle Wow Macro (Vanilla Lua)

## Post 27618 by Taerra — 2022-10-20T17:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=27618#p27618 | page 1 | era: pre-1.18.1 -->

equip
> /run for i=0,4 do for j=1,GetContainerNumSlots(i) do if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Dagger") then PickupContainerItem(i,j) AutoEquipCursorItem() break end end end end

> Automatic equipment, case sensitive exact or partial item names

equipslot (offhand)
> /run for i=0,4 do for j=1,GetContainerNumSlots(i) do if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Dagger") then PickupContainerItem(i,j) EquipCursorItem(17) break end end end end

> Equip slots ![Image](https://zam.zamimg.com/images/d/e/de32d291d756738a5a891790943d8800.png)
>  Ammo	AMMOSLOT  	0 	INVSLOT_AMMO
>  HEADSLOT 	Head 	1 	INVSLOT_HEAD
>  NECKSLOT 	Neck 	2 	INVSLOT_NECK
>  SHOULDERSLOT 	Shoulders 	3 	INVSLOT_SHOULDER
>  SHIRTSLOT 	Shirt 	4 	INVSLOT_BODY
>  CHESTSLOT 	Chest 	5 	INVSLOT_CHEST
>  WAISTSLOT 	Waist 	6 	INVSLOT_WAIST
>  LEGSSLOT 	Legs 	7 	INVSLOT_LEGS
>  FEETSLOT 	Feet 	8 	INVSLOT_FEET
>  WRISTSLOT 	Wrist 	9 	INVSLOT_WRIST
>  HANDSSLOT 	Hands 	10 	INVSLOT_HAND
>  FINGER0SLOT 	Finger 	11 	INVSLOT_FINGER1
>  FINGER1SLOT 	Finger 	12 	INVSLOT_FINGER2
>  TRINKET0SLOT 	Trinket 	13 	INVSLOT_TRINKET1
>  TRINKET1SLOT 	Trinket 	14 	INVSLOT_TRINKET2
>  BACKSLOT 	Back 	15 	INVSLOT_BACK
>  MAINHANDSLOT 	Main Hand 	16 	INVSLOT_MAINHAND
>  SECONDARYHANDSLOT 	Off Hand 	17 	INVSLOT_OFFHAND
>  RANGEDSLOT Ranged 	18 	INVSLOT_RANGED
>  TABARDSLOT 	Tabard 	19 	INVSLOT_TABARD

spammable auto attack
> /run if not IsCurrentAction(60) then UseAction(60) end if UnitHealth("target")==0 then ClearTarget() end

> 60 is Attack spell placed in Action Bar Slot 60 (at the end of Buttom Right Action Bar)

> Action bar slots![Image](https://xpoff.com/attachments/advanced-macro-guide-png.12965/)ActionBar page 1: slots 1 to 12 -- Note exceptions below for other classes
>  ActionBar page 2: slots 13 to 24
>
>  ActionBar page 3 (Right ActionBar): slots 25 to 36
>  ActionBar page 4 (Right ActionBar 2): slots 37 to 48
>
>  ActionBar page 5 (Bottom Right ActionBar): slots 49 to 60
>  ActionBar page 6 (Bottom Left ActionBar): slots 61 to 72
>
>
>  Warrior Bonus Action Bars
>
>  ActionBar page 1 Battle Stance: slots 73 to 84
>  ActionBar page 1 Defensive Stance: slots 85 to 96
>  ActionBar page 1 Berserker Stance: slots 97 to 108
>
>
>  Druid Bonus Action Bars
>
>  ActionBar page 1 Cat Form: slots 73 to 84
>  ActionBar page 1 Prowl: slots 85 to 96
>  ActionBar page 1 Bear Form: slots 97 to 108
>  ActionBar page 1 Moonkin Form: slots 109 to 120
>
>
>  Rogue Bonus Action Bars
>
>  ActionBar page 1 Stealth: slots 73 to 84
>  ActionBar page 1 Shadow Dance: slots 85 to 96
>
>
>  Priest Bonus Action Bars
>
>  ActionBar page 1 Shadowform: slots 73 to 84
>
>
>  Target Possessed Action Bar
>
>  ActionBar page 1 Possess: slots 121-132

spammable Hunter Auto Shot/auto attack
> /run if not IsAutoRepeatAction(3) then if not IsCurrentAction(1) then AttackTarget() end UseAction(3) end

> 1 is Attack spell placed in Action Bar Slot 1
>  3 is for Auto Shot spell being placed in Action Bar Slot 3

shift out of any Druid form
> /run for i=1, GetNumShapeshiftForms() do if ({GetShapeshiftFormInfo(i)})[3] then CastShapeshiftForm(i) end end

spammable Druid forms
> /run for i=1,5 do if not ({GetShapeshiftFormInfo(2)})[3] then if ({GetShapeshiftFormInfo(i)})[3] then CastShapeshiftForm(i) end CastShapeshiftForm(2) end end

> Shapeshift Forms go from left to right: 1 is Bear, 2 is Cat, etc

mass delete item
> /run for i=0,4 do for j=1,GetContainerNumSlots(i) do if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Torch") then PickupContainerItem(i,j) DeleteCursorItem() end end end end

## Post 28140 by Tatersalad — 2022-10-30T14:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28140#p28140 | page 1 | era: pre-1.18.1 -->

Thanks for that hunter attack macro, not used to this macro system yet. :)
/run if not IsAutoRepeatAction(3) then if not IsCurrentAction(1) then AttackTarget() end UseAction(3) end

## Post 29397 by Ibux (Patch Note Conspiracy Theorist) — 2022-11-17T16:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29397#p29397 | page 1 | era: pre-1.18.1 -->

this github has a huge number of useful macros that have served me well.
<https://github.com/Meridaw/Vanilla-Macros>

## Post 29965 by Overberk — 2022-11-28T18:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29965#p29965 | page 1 | era: pre-1.18.1 -->

Hello turtles   smiling_turtle

Is it possible via Macro check existing spell in the spellbook and according to that to cast coresponding spell?
For example if I as a mage with frost spec have Ice Barrier in spell book, I will cast Frostbolt, otherwise cast Scroch.

## Post 29973 by Geojak (Grandmaster of Forum PvP) — 2022-11-28T19:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29973#p29973 | page 1 | era: pre-1.18.1 -->

I would imagine it's possible, since theorycraft or extended character stats addons use info of what talents are active.

But I woild know how, best to dig the code of these addons and see

## Post 29984 by Shamma (Bug Report Enthusiast) — 2022-11-29T03:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29984#p29984 | page 1 | era: pre-1.18.1 -->

> **Overberk wrote: Mon Nov 28, 2022 6:18 pm**
> Hello turtles   smiling_turtle
>
>  Is it possible via Macro check existing spell in the spellbook and according to that to cast coresponding spell?
>  For example if I as a mage with frost spec have Ice Barrier in spell book, I will cast Frostbolt, otherwise cast Scroch.

You are doing it wrong. Use addons such as SimpleActionSets or ActionBarProfiles for what you want to achieve.

## Post 30004 by Ibux (Patch Note Conspiracy Theorist) — 2022-11-29T19:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30004#p30004 | page 1 | era: pre-1.18.1 -->

this macro delete dim torches from the survival training   satisfied_turtle  Code: Select all

```
/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Torch")then PickupContainerItem(b,s)DeleteCursorItem();end end end end
```

this macro makes the survival tents Code: Select all

```
/run CastSpellByName("Survival") for r=1,GetNumTradeSkills() do if GetTradeSkillInfo(r) == "Traveler's Tent" then DoTradeSkill(r,1) break end end CloseTradeSkill()
```

this macro shows current avoidance Code: Select all

```
/script DEFAULT_CHAT_FRAME:AddMessage("Need 102.4 combined avoidance. Currently at:"..GetDodgeChance() + GetBlockChance() + GetParryChance() + (GetParryChance() - 7));
```

this macro starts Mouse look Code: Select all

```
/run MouselookStart()
```

this macro stops mouse look Code: Select all

```
/run MouselookStop()
```

this macro shows the rested xp % Code: Select all

```
/script DEFAULT_CHAT_FRAME:AddMessage(format("%d%% rested", 100 * GetXPExhaustion() / UnitXPMax("player")))
```

this one is for buying green firework. was useful during the winter even. Code: Select all

```
/run local function buy (n,q) for i=1,100 do if n==GetMerchantItemInfo(i) then BuyMerchantItem(i,q) end end end buy ("Green Firework",15);
```

*Last edited by Ibux on Sun Feb 05, 2023 1:12 pm, edited 5 times in total.*

## Post 31065 by Philipred — 2022-12-19T18:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31065#p31065 | page 1 | era: pre-1.18.1 -->

Hello,
I didnt find any macro post to ask for this, sorry if i offtopic a bit.
I need a macro to cast a buff on my toon UNLESS i already have that buff.
E.g. I press the macro for battle shout, it will cast it unless i already have it on me
Thanks

PS: I use SuperMacro addon, I hope it helps

## Post 31067 by Ibux (Patch Note Conspiracy Theorist) — 2022-12-19T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31067#p31067 | page 1 | era: pre-1.18.1 -->

this one should work Code: Select all

```
/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Warrior_BattleShout" then x=1 end i=i+1 end if x==0 then CastSpellByName("Battle Shout")end
```

## Post 31092 by Philipred — 2022-12-19T22:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31092#p31092 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Mon Dec 19, 2022 7:04 pm**
> this one should work Code: Select all
>
> ```
> /run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Warrior_BattleShout" then x=1 end i=i+1 end if x==0 then CastSpellByName("Battle Shout")end
> ```

Thanks a lot!

## Post 38812 by Joytothehorde — 2023-03-24T08:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38812#p38812 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Thu Nov 17, 2022 4:24 pm**
> this github has a huge number of useful macros that have served me well.
>  <https://github.com/Meridaw/Vanilla-Macros>

Thank you for sharing.

## Post 111302 by Yasmir — 2024-12-04T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111302#p111302 | page 1 | era: pre-1.18.1 -->

hello sorry to ask 2 years late but I found

/run for i=0,4 do for j=1,GetContainerNumSlots(i) do if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Soul Shard") then PickupContainerItem(i,j) DeleteCursorItem() end end end end

to be the only macro that works for deleting soul shard but how can I set a number like I need 10 soul shards only??

## Post 111718 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2024-12-07T21:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111718#p111718 | page 1 | era: pre-1.18.1 -->

> **Yasmir wrote: Wed Dec 04, 2024 11:31 am**
> hello sorry to ask 2 years late but I found
>
>  /run for i=0,4 do for j=1,GetContainerNumSlots(i) do if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Soul Shard") then PickupContainerItem(i,j) DeleteCursorItem() end end end end
>
>  to be the only macro that works for deleting soul shard but how can I set a number like I need 10 soul shards only??

This will delete 10 shards, havent tested it but should work.

/run local count=0; for i=0,4 do for j=1,GetContainerNumSlots(i) do if count>=10 then return end; if GetContainerItemLink(i,j) then if string.find(GetContainerItemLink(i,j),"Soul Shard") then PickupContainerItem(i,j) DeleteCursorItem() count=count+1 end end end end

Change "count>=10" to whatever you want.

## Post 120308 by captskid — 2025-02-18T13:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=120308#p120308 | page 1 | era: pre-1.18.1 -->

any macros for wand?

