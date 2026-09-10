---
title: "Druid macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3382"
topic_id: 3382
forum_id: 42
forum: "Druid"
author: "Templar44"
author_authority: "player"
posted: "2022-07-28T09:01:00Z"
last_post: "2026-03-28T22:20:00Z"
post_count: 33
pages: 1
fetched: "2026-09-10T08:00:44Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Druid macro

## Post 20590 by Templar44 — 2022-07-28T09:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20590#p20590 | page 1 | era: pre-1.18.1 -->

Hi everyone.

Can anyone share their macro for druid, that actually work? All of the macro I found in the internet don't work on Turtle.
The most needed are the macro for shapeshifting with one button (for example, to go from bear into cat by just pressing the cat form button, not pressing the bear form button to go out of it and then pressing the cat form button: the same is for every other form) and the macro for heal/buff over mouse.
Thanks everyone in advance.

## Post 22133 by Drubarrymooer (Grandmaster of Forum PvP) — 2022-08-12T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22133#p22133 | page 1 | era: pre-1.18.1 -->

I second this.  500+ views and no one has any macros?  I'll do my best to make some later tonight or tomorrow.  Every druid should have working powershift macros and a ravage/shred macro.

## Post 22209 by Damian1988 (Barrens Chat Casualty) — 2022-08-13T15:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22209#p22209 | page 1 | era: pre-1.18.1 -->

Ok then, i can show you a bit :)

script if (not PlayerFrame.inCombat) then AttackTarget() end
/cast Maul

Cast spell + autoattack, (eaven if you dont cast, it will autoattac) veru usefull.

/run if n~= 1 then CastSpellByName("Thorns") n=1 else CastSpellByName("Mark of the Wild") n=0 end

Castsequence - First click cast Thorns, secend click cast Mark of The wild. (good for buffs etc)

/run for i = 1, GetNumShapeshiftForms() do local _, _, active = GetShapeshiftFormInfo(i) if active then CastShapeshiftForm(i) return end end
/cast Rejuvenation

If you are in any form, it will out of form, and cast spel (need 2x click)

/run if GetUnitName("target")==nil then TargetNearestEnemy() end
/script if (not PlayerFrame.inCombat) then AttackTarget() end
/cast Moonfire

It will target the closet target autoattack it and cast spell :) mine favorite (need 2x click)

How dou you think about it:)

## Post 22526 by Eielysele — 2022-08-16T09:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22526#p22526 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/script u=UnitMana('Player'); c=CastSpellByName; f=UnitPowerType("Player"); if (u<=30) and (f==3) then c"Cat Form"; elseif (f==0) then c"Cat Form"; end;
```

If energy is under or equals 30 and cat form active, leave cat form. -> else: do nothing
if no form is active, enter cat form.

## Post 32412 by Condabas — 2023-01-10T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32412#p32412 | page 1 | era: pre-1.18.1 -->

So I have spent some time getting my Macros working correctly.

 **Travel form:** This macro will cancel your current form then cast Aquatic Form in Water, Travel form while in combat, Plainsrunning out of combat, and mount you in AV (since Plainrunning is disabled). "UseAction(114)" is the button I have my Turtle Mount set to. (I use Bongos so knowing the button number is easy). I play Horde side so the Plainsrunning part will not work for Alliance
Code: Select all

```
/cancelform
/run if GetZoneText()=="Alterac Valley" then UseAction(114) endd
/use [swimming]Aquatic Form; [nocombat]Plainsrunning; [] Travel Form
```

 **Return to Caster Form:** This Macro will return you to caster form and also dismount you if you are mounted. I found the name for the speedy mount buff from here: [https://wowpedia.fandom.com/wiki/Identi ... g_textures](https://wowpedia.fandom.com/wiki/Identifying_buffs_using_textures)
Code: Select all

```
/cancelform
/run i=0 m=0 while not (GetPlayerBuff(i)==-1) do if (strfind(GetPlayerBuffTexture(GetPlayerBuff(i)),"inv_pet_speedy")) then m=1 end i=i+1 end if m==1 then UseAction(114) end
```

 **Powershift (spammable):** This will shift you into cat form from caster. It will keep you in Cat form as long as you have 30 power or more. If you don't, it will drop you back to caster form.
Code: Select all

```
/script u=UnitMana('Player'); c=CastSpellByName; f=UnitPowerType("Player"); if (u<=30) and (f==3) then c"Cat Form"; elseif (f==0) then c"Cat Form"; end;
```

Maul/Autoattack (spammable): This will try to cast Maul if you have the rage, if not, it will just autoattack the target.
Code: Select all

```
/script if not IsCurrentAction(5)  then UseAction(5) end;
/cast Maul
/script if GetUnitName("target")==nil then AttackTarget() end
```

## Post 33338 by Ibux (Patch Note Conspiracy Theorist) — 2023-01-28T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33338#p33338 | page 1 | era: pre-1.18.1 -->

some useful macros i use for my feral druid.

this one use tiger's fury if the haste buff isn't up. else it uses claw. and removes melee spam. it's useful since the haste buff is shorter then tiger's fury. Code: Select all

```
/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_GhoulFrenzy" then x=1 end i=i+1 end if x==0 then CastSpellByName("Tiger's Fury") else CastSpellByName("Claw") end UIErrorsFrame:Clear()
```

this one makes sure auto attack is toggled on. it also uses ferocious bite if you got 4 combos. else it uses claw. and removes melee spam. make sure you got the auto attack skill some place on the bars for auto attack macro's to work. Code: Select all

```
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z) elseif GetComboPoints()>=4 then CastSpellByName("Ferocious Bite") else CastSpellByName("Claw") end;end;end UIErrorsFrame:Clear()
```

this one uses ravage if you are out of combat. ferocious bite if 4 combos. else it uses shred. and removes melee spam. Code: Select all

```
/run C=CastSpellByName if not UnitAffectingCombat("player")then C("Ravage") elseif GetComboPoints()>=3 then C("Ferocious Bite") else C("Shred") end UIErrorsFrame:Clear()
```

this one uses pounce out of combat. rip if you got 3 combos. else it uses rake and removes melee spam. Code: Select all

```
/run C=CastSpellByName if not UnitAffectingCombat("player")then C("Pounce") elseif GetComboPoints()>=3 then C("Rip") else C("Rake") end UIErrorsFrame:Clear()
```

this one activate cat form if you are in caster form by checking the power type. else it uses prowl. Code: Select all

```
/run if (UnitPowerType('Player')==0) then CastSpellByName("Cat Form") else CastSpellByName("Prowl")end
```

this one buffs target with gift of the wild if gift of the wild is missing, then thorns if thorns is missing, else rejuvenation. Code: Select all

```
/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitBuff("target",i)),k)then return 1 end end end if not b("Nature_Regeneration")then c("Gift of the Wild")elseif not b("Nature_Thorns")then c("Thorns")else c("Rejuvenation")end
```

this on buffs my self with mark of the wild if mark of the wild is missing, then thorns if thorns is missing. else oman of clarity. Code: Select all

```
/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b("Nature_Regeneration")then c("Mark of the Wild",1)elseif not b("Nature_Thorns")then c("Thorns",1)else c("Omen of Clarity")end
```

this one changes to cat form if you are in caster form. uses claw in cat form. and changes to caster form if low energy. it also makes sure auto attack is toggled on. useful in combination with wolfshead helm and furor. Code: Select all

```
/run u=UnitMana('Player'); c=CastSpellByName; f=UnitPowerType("Player"); if (u<=19) and (f==3) then c"Cat Form"; elseif (f==0) then c"Cat Form"; end; for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;c"Claw"
```

this one i use to change to caster form and cast rejuvenation on my self. useful for quick heal. or if i just need to leave form. Code: Select all

```
/run for i = 1, GetNumShapeshiftForms() do local _, _, active = GetShapeshiftFormInfo(i) if active then CastShapeshiftForm(i) return else CastSpellByName("Rejuvenation",1) end end
```

this one uses travel form on land and aquatic form in water. Code: Select all

```
/run UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE" for i = 2, GetNumShapeshiftForms(), 2 do local _, _, active = GetShapeshiftFormInfo(i) if not active then CastShapeshiftForm(i) end if i == 2 then UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE" end end
```

this one remove curse from my target if target is a player. else it remove curse from me. Code: Select all

```
/run if UnitIsPlayer("target") then CastSpellByName("Remove Curse") else CastSpellByName("Remove Curse",1)  end; TargetLastEnemy();
```

this one cure poison from my target if target is a player. else it cure poison from me. Code: Select all

```
/run if UnitIsPlayer("target") then CastSpellByName("Cure Poison") else CastSpellByName("Cure Poison",1)  end; TargetLastEnemy();
```

## Post 38074 by Boyte97 — 2023-03-17T12:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38074#p38074 | page 1 | era: pre-1.18.1 -->

Thanks everyone i found your macros very useful. I wanted to make a few different macros myself by changing the macros i found but some of them i couldnt pull off. For example this i wanted to change Insect Swarm macro with Entangling Roots Code: Select all

```
/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Nature_InsectSwarm" then x=1 end i=i+1 end if x==0 then CastSpellByName("Insect Swarm") else CastSpellByName("Moonfire")end
```

but i couldnt find what to replace Spell_Nature_InsectSwarm part to make it check for Entangling Roots and there is this one Code: Select all

```
/run for i = 1, GetNumShapeshiftForms() do local _, _, active = GetShapeshiftFormInfo(i) if active then CastShapeshiftForm(i) return else CastSpellByName("Rejuvenation",1) end end
```

turning back to caster form and casting quick hot can i add nature's grasp spell to this code similar to mark of the wild and thorns buff check ?
Lastly do you have any other bear form macros ?

## Post 38076 by Mcnair (Barrens Chat Casualty) — 2023-03-17T12:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38076#p38076 | page 1 | era: pre-1.18.1 -->

Good day.
I can not answer all your questions, but here some pointers:
In vanilla buff/debuff checks work based only on the icon used by these spells. You can look up the icons of the spells in the turtle database, by searching for the spell and then double clicking on the icon. In the case of Entangling Roots, you'll get 'Spell_Nature_StrangleVines'.
Using this information with the macros you already have you can build your different buff/debuff checks.

## Post 38082 by Boyte97 — 2023-03-17T13:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38082#p38082 | page 1 | era: pre-1.18.1 -->

oh thank you very much this is just what i needed   turtle_in_love_head

## Post 38718 by Beast412 — 2023-03-23T15:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38718#p38718 | page 1 | era: pre-1.18.1 -->

Quite a bit of useful macros in here, Thank you!
Not too many for bear/cat interactions
I am looking for a macro where I can use Growl for and and Stealth for cat on the same button. Any help would be greatly appreciated!

## Post 38765 by Scharz — 2023-03-23T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38765#p38765 | page 1 | era: pre-1.18.1 -->

I'm using this addon for macro:

[Roid-Macros](https://github.com/DennisWG/Roid-Macros)

And then macro could be like this: Code: Select all

```
/cast [stance:1] Growl; [stance:2] Prowl
```

## Post 39018 by Beast412 — 2023-03-25T13:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39018#p39018 | page 1 | era: pre-1.18.1 -->

> **Scharz wrote: Thu Mar 23, 2023 10:33 pm**
> I'm using this addon for macro:
>
>  [Roid-Macros](https://github.com/DennisWG/Roid-Macros)
>
>  And then macro could be like this: Code: Select all
>
> ```
> /cast [stance:1] Growl; [stance:2] Prowl
> ```

I tried your macro with that addon and it still didn't work :(

## Post 39021 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-25T13:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39021#p39021 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/run if (UnitPowerType('Player')==1) then CastSpellByName("Growl") elseif  (UnitPowerType('Player')==2) then CastSpellByName("Prowl")end
```

Try this, I'm not sure I got the PowerType numbers right but can check later.

## Post 39024 by Beast412 — 2023-03-25T14:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39024#p39024 | page 1 | era: pre-1.18.1 -->

> **Ravenstone wrote: Sat Mar 25, 2023 1:56 pm**
> Code: Select all
>
> ```
> /run if (UnitPowerType('Player')==1) then CastSpellByName("Growl") elseif  (UnitPowerType('Player')==2) then CastSpellByName("Prowl")end
> ```
>
>  Try this, I'm not sure I got the PowerType numbers right but can check later.

Thank you, the growl works and once I get back to cat I'll double check that one, I died yesterday xD

## Post 39025 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-25T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39025#p39025 | page 1 | era: pre-1.18.1 -->

Awesome, if the growl works, prowl should as well. It could probably be enhanced so that it puts you into cat form and prowls if you aren't in bear form if that is something you'd want.

## Post 39028 by Beast412 — 2023-03-25T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39028#p39028 | page 1 | era: pre-1.18.1 -->

Nah, just wanted the 2 skills to be on the same button, will this layout work for Ravage and Shred on the same button aswell or will that be different?

## Post 39041 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-03-25T18:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39041#p39041 | page 1 | era: pre-1.18.1 -->

No, you'd need something like this: Code: Select all

```
/run if UnitBuff("Player")=="Interface\\Icons\\Ability_Ambush" then CastSpellByName("Ravage") else CastSpellByName("Shred") end
```

## Post 39063 by Beast412 — 2023-03-25T22:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39063#p39063 | page 1 | era: pre-1.18.1 -->

Oh sweet, thank you!

## Post 40064 by Beast412 — 2023-04-03T04:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40064#p40064 | page 1 | era: pre-1.18.1 -->

> **Ravenstone wrote: Sat Mar 25, 2023 2:33 pm**
> Awesome, if the growl works, prowl should as well. It could probably be enhanced so that it puts you into cat form and prowls if you aren't in bear form if that is something you'd want.

So finally unlocked cat and tested out the macro, prowl isn't working for some reason. Not sure what's going on with it.

## Post 40082 by Ravenstone (Patch Note Conspiracy Theorist) — 2023-04-03T08:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40082#p40082 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/run if (UnitPowerType('Player')==1) then CastSpellByName("Growl") elseif (UnitPowerType('Player')!=1) then CastSpellByName("Prowl")end
```

I can have a proper look next time I have time to play, but try the above instead, otherwise theres probably some syntax error I'm missing for the second half of the code.

## Post 40199 by Ohushieyz — 2023-04-03T23:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40199#p40199 | page 1 | era: pre-1.18.1 -->

> **Damian1988 wrote: Sat Aug 13, 2022 3:53 pm**
> Ok then, i can show you a bit :)
>
>  script if (not PlayerFrame.inCombat) then AttackTarget() end
>  /cast Maul

this does not work

## Post 40200 by Beast412 — 2023-04-04T00:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40200#p40200 | page 1 | era: pre-1.18.1 -->

That one didn't work either and I double checked to makes sure I had it learned xD

## Post 40205 by Beast412 — 2023-04-04T00:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40205#p40205 | page 1 | era: pre-1.18.1 -->

> **Ravenstone wrote: Mon Apr 03, 2023 8:18 am**
> Code: Select all
>
> ```
> /run if (UnitPowerType('Player')==1) then CastSpellByName("Growl") elseif (UnitPowerType('Player')!=1) then CastSpellByName("Prowl")end
> ```
>
>  I can have a proper look next time I have time to play, but try the above instead, otherwise theres probably some syntax error I'm missing for the second half of the code.

I got it to work (UnitPowerType('Player')==2) is 3 not 2
Tyvm for the macros

## Post 40851 by Holyhorrorr (Barrens Chat Casualty) — 2023-04-09T03:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40851#p40851 | page 1 | era: pre-1.18.1 -->

Addons Required: Roid Macro

Spamable Shift into cat and prowl + Tracks humanoids (will only shift you into cat + prowl if you are out of combat - else  it does nothing)
Code: Select all

```
#showtooltip Prowl
/unshift [nocombat,stance:1/2/4/5]
/cast [nocombat,stance:0] Cat form
/cast [nostealth,stance:3,nocombat] Prowl
/cast [stealth,stance:3] Track Humanoids
```

Spamable Grenade Macro that cancels the grenade if used/clicked twice:
Code: Select all

```
#showtooltip Iron Grenade
/run SpellStopCasting() for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Grenade"))then UseContainerItem(b,s)end end end
```

Spamable Moonfire macro (Applies Rank 10 - If rank  10 is already on the target it will use Rank 9 until the debuff is gone)
Code: Select all

```
/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Nature_StarFall" then x=1 end i=i+1 end if x==0 then CastSpellByName("Moonfire(Rank 10)") else CastSpellByName("Moonfire(Rank 9)")end
```

Spamable Cat Form (will not shift you out by spamming it):
Code: Select all

```
#showtooltip Cat Form
/unshift [stance:1/2/4/5]
/cast [stance:0] Cat form
```

Spamable Dash + Automatically going into cat form:
Code: Select all

```
#showtooltip Dash
/unshift [stance:1/2/4/5]
/cast [stance:0] Cat form
/cast [stance:3] Dash
```

## Post 78803 by Dudeface — 2023-11-26T17:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78803#p78803 | page 1 | era: pre-1.18.1 -->

Not a single command in this entire thread worked.

Not one.

## Post 78804 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-11-26T17:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78804#p78804 | page 1 | era: pre-1.18.1 -->

> **Dudeface wrote: Sun Nov 26, 2023 5:06 pm**
> Not a single command in this entire thread worked.
>
>  Not one.

Are you looking for a working powershifting macro?  /script u=UnitMana('Player'); c=CastSpellByName; f=UnitPowerType("Player"); if (u<=30) and (f==3) then c"Cat Form"; elseif (f==0) then c"Cat Form"; end;

## Post 107609 by Karfunkel — 2024-11-12T00:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=107609#p107609 | page 1 | era: pre-1.18.1 -->

> **Holyhorrorr wrote: Sun Apr 09, 2023 3:29 am**
> Addons Required: Roid Macro
>
>  Spamable Shift into cat and prowl + Tracks humanoids (will only shift you into cat + prowl if you are out of combat - else  it does nothing)
>  Code: Select all
>
> ```
> #showtooltip Prowl
> /unshift [nocombat,stance:1/2/4/5]
> /cast [nocombat,stance:0] Cat form
> /cast [nostealth,stance:3,nocombat] Prowl
> /cast [stealth,stance:3] Track Humanoids
> ```
>
>   Spamable Grenade Macro that cancels the grenade if used/clicked twice:
>  Code: Select all
>
> ```
> #showtooltip Iron Grenade
> /run SpellStopCasting() for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Grenade"))then UseContainerItem(b,s)end end end
> ```
>
>   Spamable Moonfire macro (Applies Rank 10 - If rank  10 is already on the target it will use Rank 9 until the debuff is gone)
>  Code: Select all
>
> ```
> /run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Spell_Nature_StarFall" then x=1 end i=i+1 end if x==0 then CastSpellByName("Moonfire(Rank 10)") else CastSpellByName("Moonfire(Rank 9)")end
> ```
>
>   Spamable Cat Form (will not shift you out by spamming it):
>  Code: Select all
>
> ```
> #showtooltip Cat Form
> /unshift [stance:1/2/4/5]
> /cast [stance:0] Cat form
> ```
>
>   Spamable Dash + Automatically going into cat form:
>  Code: Select all
>
> ```
> #showtooltip Dash
> /unshift [stance:1/2/4/5]
> /cast [stance:0] Cat form
> /cast [stance:3] Dash
> ```

Man, i have been looking for the spammable catform prowl macro for ever! i was just about to get crazy. thx so much!

## Post 130406 by DRUIDOxd — 2025-05-10T05:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130406#p130406 | page 1 | era: pre-1.18.1 -->

/cancelform
/run if GetZoneText()=="Alterac Valley" then UseAction(114) endd
/use [swimming]Aquatic Form; [nocombat]Plainsrunning; [] Travel Form
/run UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE" for i = 2, GetNumShapeshiftForms(), 2 do local _, _, active = GetShapeshiftFormInfo(i) if not active then CastShapeshiftForm(i) end if i == 2 then UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE" end end

## Post 133694 by 0Trixtor — 2025-05-30T16:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133694#p133694 | page 1 | era: pre-1.18.1 -->

Most of the macros in this thread have the /cancelform macro in them, but that doesn't work in this version of the game. It comes up as an unrecognised command

## Post 145072 by Resident — 2025-08-13T12:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145072#p145072 | page 1 | era: pre-1.18.1 -->

tell me how to write a macro on Rake and then Claw
/castsequence reset=9 Rake, Claw
this macro does not work.

## Post 160347 by Ghrey — 2025-11-22T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160347#p160347 | page 1 | era: 1.18.1-announced-pre-release -->

I found a great travel macro - it casts aquatic if a breath bar is visible, travel if its not visible, and cancels if you're already in either form.

I don't know how people made it fancy like above, but here it is:

/run for i=1,GetNumShapeshiftForms() do _,_,a=GetShapeshiftFormInfo(i) if a then CastShapeshiftForm(i) return end end if MirrorTimer1 and MirrorTimer1:IsVisible() then CastShapeshiftForm(2) else CastShapeshiftForm(4) end

## Post 160381 by basednoob (Patch Note Conspiracy Theorist) — 2025-11-23T09:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160381#p160381 | page 1 | era: 1.18.1-announced-pre-release -->

> **Ghrey wrote: Sat Nov 22, 2025 7:00 pm**
> I found a great travel macro - it casts aquatic if a breath bar is visible, travel if its not visible, and cancels if you're already in either form.
>
>  I don't know how people made it fancy like above, but here it is:
>
>  /run for i=1,GetNumShapeshiftForms() do _,_,a=GetShapeshiftFormInfo(i) if a then CastShapeshiftForm(i) return end end if MirrorTimer1 and MirrorTimer1:IsVisible() then CastShapeshiftForm(2) else CastShapeshiftForm(4) end

you just mark the text and use the code display button </> Code: Select all

```
/run for i=1,GetNumShapeshiftForms() do _,_,a=GetShapeshiftFormInfo(i) if a then CastShapeshiftForm(i) return end end if MirrorTimer1 and MirrorTimer1:IsVisible() then CastShapeshiftForm(2) else CastShapeshiftForm(4) end
```

## Post 172936 by Thaldran — 2026-03-28T22:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172936#p172936 | page 1 | era: post-1.18.1 -->

Added this to the wiki today - Aquatic/Travel Form powershift + removes error spam
But also works on the surface of water, don't need to have breath bar visible
Code: Select all

```
/run UIErrorsFrame:UnregisterEvent("UI_ERROR_MESSAGE");local f;for i=1,GetNumShapeshiftForms()do local n,_,a=GetShapeshiftFormInfo(i);if a then f=i end end;if f then CastShapeshiftForm(f)else for i=1,GetNumShapeshiftForms()do local n=GetShapeshiftFormInfo(i);if strfind(n,"Aquatic")then CastShapeshiftForm(i)end end;for i=1,GetNumShapeshiftForms()do local n=GetShapeshiftFormInfo(i);if strfind(n,"Travel")then CastShapeshiftForm(i)break end end end;UIErrorsFrame:RegisterEvent("UI_ERROR_MESSAGE");
```

