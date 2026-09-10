---
title: "Warrior Macros"
url: "https://turtle-wow.fandom.com/wiki/Warrior_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-27T02:58:51Z"
fetched: "2026-09-10T07:39:58Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Warrior Macros

## Auto attack
Uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

This one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

This one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;</code>

## Battle Shout
Battle Shout, else Heroic Strike
 <code>/run local z=0 for i=1,27 do t=UnitBuff("player",i) if (t and string.find(t,"BattleShout")) then z=1 break end end if z==1 then CastSpellByName("Heroic Strike") else CastSpellByName("Battle Shout") end</code>

## Berserker Rage
What this macro does, is that it change your current stance to Berserker Stance regardless of which stance you are and it will cast Berserker Rage. (Note: You have to press it twice)
 <code>/run texture,name,isActive,isCastable = GetShapeshiftFormInfo(3); if isActive then CastSpellByName("Berserker Rage"); else CastSpellByName("Berserker Stance"); end</code>

## Bloodrage
Bloodrage + cancel buff
 <code>/run local i=0 g=GetPlayerBuff while not (g(i) == -1) do if(strfind(GetPlayerBuffTexture(g(i)),"Ability_Racial_BloodRage"))then CancelPlayerBuff(g(i)) end i=i+1 end CastSpellByName("Bloodrage")</code>

Bloodrage -> Battle Stance -> Sweeping Strikes
 /cast Bloodrage
 /run texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Sweeping Strikes"); else CastSpellByName("Battle Stance"); end

## Bloodthirst
Prioritize BT  over execute when AP breaks 2k (change if BTDmg to 820 if you don't use imp exe)
 /run local a,b,c=UnitAttackPower("player"); local AP=a+b+c; local BTDmg=AP*0.45; if BTDmg>=900 and UnitMana("player")>=30 then CastSpellByName("Bloodthirst") end
 /cast execute

## Charge
This macro will swap your stance to Battle Stance regardless of which stance you are in and it will cast Charge if the charge ability conditions are met. (Note: You have to press it twice) Also the last line will make you start attacking instantly while you are charging.
 <code>/run texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Charge"); else CastSpellByName("Battle Stance"); end</code>

## Cooldown
Recklessness / Shield Wall / Retaliation
 <code>/run local x=CastSpellByName _,n=GetShapeshiftFormInfo(1)if n=="Battle Stance"then x("Retaliation")elseif n=="Defensive Stance"then x("Shield Wall")else x("Berserker Stance")end _,n=GetShapeshiftFormInfo(3)if n=="Berserker Stance"then x("Recklessness")end</code>

## Demoralizing Shout
Cast Bloodrage if you have less then 10 rage, else demo shout
 <code>/run if UnitMana("Player")>=10 then CastSpellByName("Demoralizing Shout"); else CastSpellByName("Bloodrage"); end</code>

Demoralizing Shout + show target attack power. Shows you target attack power after reduction. change 146 depending on shout rank.
 /cast Demoralizing Shout
 /run a=UnitAttackPower("target") - 146 if a ~= lastAttackPower then DEFAULT_CHAT_FRAME:AddMessage(a) lastAttackPower = a end

## Disarm
This will change your stance to Defensive Stance, regardless of which stance you are in and it will attempt to cast Disarm if the disarm ability conditions are met. (Note: You have to press it twice)
 <code>/run texture,name,isActive,isCastable = GetShapeshiftFormInfo(2); if isActive then CastSpellByName("Disarm"); else CastSpellByName("Defensive Stance"); end;</code>

## Execute
Execute macro
 <code>/run local p=100*UnitHealth("target")/UnitHealthMax("target");if (p>5 or UnitHealth("target")>25000) and UnitMana("player")<26 then CastSpellByName("Berserker Stance"); end; CastSpellByName("Execute")</code>

## Hamstring
Battle Stance, Charg﻿e or Hamstring i﻿f﻿ in melee ra﻿nge of the targe﻿t
 /run texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Charge"); else CastSpellByName("Battle Stance"); end;
 /cast Hamstring

## Heroic Strike
Turns on and off heroic strike.
 <code>/run if n~= 1 then CastSpellByName("Heroic Strike") n=1 else SpellStopCasting() n=0 end;</code>

Turns on and off heroic strike. set to only turn on from 40+ rage.
 <code>/run if n~= 1 and UnitMana("player")>=40 then CastSpellByName("Heroic Strike") n=1 else SpellStopCasting() n=0 end;</code>

Interrupts the expected heroic strike.
 <code>/run SpellStopCasting()</code>

## Intercept
Intercept / Berserker Stance
 <code>/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(3); if isActive then CastSpellByName("Intercept"); else CastSpellByName("Berserker Stance"); end;</code>

use the appropriate ability and change stances depending if you're in or out of combat.
 <code>/run g=GetShapeshiftFormInfo c=CastSpellByName t,n,bas=g(1) t,n,ber=g(3) if UnitAffectingCombat("player") then if ber then c("Intercept")else c("Berserker Stance")end else if bas then c("Charge")else c("Battle Stance")end end</code>

## Mocking blow
Mocking blow/Battle Stance
 <code>/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Mocking Blow"); else CastSpellByName("Battle Stance");end</code>

## Overpower
This will change your stance to Battle Stance regardless of which stance you are in and it will attempt to cast Overpower if the overpower ability conditions are met. (Note: You have to press it twice)
 <code>/run texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Overpower"); else CastSpellByName("Battle Stance"); end</code>

Uses a loop to check your action bars for Overpower and use if it's usable
 /run for i=1,120 do local t=GetActionTexture(i) if t and string.find(t,"Ability_MeleeDamage") and IsUsableAction(i) then UseAction(i) end

## Pummel
This will change your stance to Berserker Stance regardless of which stance you are in and it will attempt to cast Pummel if the pummel ability conditions are met. (Note: You have to press it twice)
 <code>/run texture,name,isActive,isCastable = GetShapeshiftFormInfo(3); if isActive then CastSpellByName("Pummel"); else CastSpellByName("Berserker Stance"); end;</code>

## Ranged
Shoot Gun/Crossbow/Bow
 <code>/run local _,_,i=strfind(GetInventoryItemLink("player",18),"\124Hitem:(%d+)")local _,_,_,_,_,p=GetItemInfo(i)local t={}t.Bows="Bow"t.Guns="Gun"t.Crossbows="Crossbow"t.Thrown="Throw"CastSpellByName((string.gsub(t[p],"^([^T])","Shoot %1")))</code>

Auto Attack Macro w/ Melee Attack and Throw swapping
 <code>/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() else CastSpellByName("Throw") end</code>

## Recklessness
Berserker Stance/Recklessness
 <code>/run texture,name,isActive,isCastable = GetShapeshiftFormInfo(3); if isActive then CastSpellByName("Recklessness"); else CastSpellByName("Berserker Stance"); end</code>

## Rend
Use Rend if Rend is missing from target
 /run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("Ability_Gouge")then c("Rend")end

## Revenge
Use Battle Shout if Battle Shout is missing. else cast Revenge
 <code>/run local z=0 for i=1,27 do t=UnitBuff("player",i) if (t and string.find(t,"BattleShout")) then z=1 break end end if z==1 then CastSpellByName("Revenge") else CastSpellByName("Battle Shout") end UIErrorsFrame:Clear()</code>

## Sharpening Stone
Enchant any sharpening stone to main hand, offhand if shift key-bind
 <code>/run for b=0,4 do for s=1,18 do local i=GetContainerItemLink if not(i(b,s)==nil)then if strfind(i(b,s), "Sharpening Stone")then p=PickupInventoryItem UseContainerItem(b,s)if IsShiftKeyDown()then p(17)else p(16)end ReplaceEnchant()end end end end</code>

## Shield Bash
Pummel and Shieldbash in same button
 <code>/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(3); if isActive then CastSpellByName("Pummel"); else CastSpellByName("Shield Bash"); end;</code>

## Sunder Armor
Shows your target's armor in chat. but only when the target armor changes.
 /cast Sunder Armor
 /run a=UnitResistance("target", 0) if a ~= lastArmor then DEFAULT_CHAT_FRAME:AddMessage(a) lastArmor = a end

Uses Sunder Armor, clears target if target is sheep'ed, shows target's armor. Useful if you wanna Sunder a sheep'ed target
 /cast Sunder Armor
 /run for i=1,16 do if string.find(tostring(UnitDebuff("target",i)),"Polymorph") then ClearTarget() break end end
 /run a=UnitResistance("target",0) if a~=lastArmor then SendChatMessage(a,"SAY") lastArmor=a end

Uses sunder if there's not 5 sunders
 <code>/run local b,c,i; for i = 1, 16 do b = UnitDebuff("target", i); if b and strfind(b, "Ability_Warrior_Sunder") then b, c = UnitDebuff("target", i); break; end; end; if not c or c < 5 then CastSpellByName("Sunder Armor") end</code>

## Taunt
<code>Defensive Stance/Taunt</code>
 <code>/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(2); if isActive then CastSpellByName("Taunt"); else CastSpellByName("Defensive Stance"); end</code>

Taunt Emote
 /cast Taunt
 /run if not TeM then TeM = GetTime() + 10 end
 /run if GetTime() > TeM then DoEmote("taunt") TeM = nil end

Safe taunt, which protects taunt and growl from being overridden if two or more players spam it at the same time.
 <code>/run t=0 for i=1,40 do local d=UnitDebuff("target",i) if d then if string.find(d,"UnyieldingFaith") or string.find(d,"Reincarnation") or string.find(d,"Taunt") then t=1 break end end end if t==0 then CastSpellByName("Taunt") end</code>

## Thunderclap
<code>Battle Stance/Thunder Clap</code>
 <code>/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(1); if isActive then CastSpellByName("Thunder Clap"); else CastSpellByName("Battle Stance"); end</code>

## Whirlwind
<code>Berserker Stance/Whirlwind</code>
 <code>/run local texture,name,isActive,isCastable = GetShapeshiftFormInfo(3); if isActive then CastSpellByName("Whirlwind"); else CastSpellByName("Berserker Stance"); end</code>

Uses Bloodthirst if you have enough rage and its off cd or getting of cd and then switches stance in order to not waste any rage.
 <code>/run local a,h,b,c=CastSpellByName,UnitMana("player"),GetActionCooldown(75); if h<=25 or (b+c-GetTime())>1.5 then a("Berserker Stance"); a("Whirlwind") else a("Bloodthirst") end</code>
