---
title: "Rogue Macros"
url: "https://turtle-wow.fandom.com/wiki/Rogue_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:25:05Z"
fetched: "2026-09-10T07:39:31Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Rogue Macros

## Ambush
If stealth-ed use Ambush, else use Backstab
 <code>/run if (string.find(GetShapeshiftFormInfo(1), "Invis" )) then CastSpellByName("Ambush") else CastSpellByName("Backstab"); end</code>

Ambush if stealth-ed / Eviscerate if 3 combo's / Backstab
 <code>/run if GetBonusBarOffset() == 1 then CastSpellByName("Ambush") elseif GetComboPoints()>=3 then CastSpellByName("Eviscerate") else CastSpellByName("Backstab")end</code>

## Auto attack
This uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

This one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

This one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end</code>

## Blade Flurry
Cancel Blade Flurry
 <code>/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Ability_Warrior_PunishingBlow"))then CancelPlayerBuff(g(i))end i=i+1 end</code>

## Cheap Shot
Spam stealth, cheap shot
 /run local _, _, active = GetShapeshiftFormInfo(1) if not active then CastShapeshiftForm(1)end
 /run CastSpellByName("Cheap Shot")

Dismount, Stealth, Cheap shot
 /run a,b,c=GetShapeshiftFormInfo(1);if (c) then CastSpellByName("Cheap Shot")else CastSpellByName("Stealth")end
 /run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Mount"))then CancelPlayerBuff(g(i))end i=i+1 end

## Cold Blood
Cold Blood/Eviscerate
 <code>/run CastSpellByName("Cold Blood"); SpellStopCasting(); if (GetComboPoints()>= 3) then CastSpellByName("Eviscerate");end</code>

## Leave Stealth
 <code>/run if GetBonusBarOffset() == 1 then CastSpellByName("Stealth") end</code>

## Expose Armor
Expose Armor if +1 combo else Gouge
 /run if GetComboPoints()>=1 then CastSpellByName("Expose Armor") else CastSpellByName("Gouge") end UIErrorsFrame:Hide()
 /run ClearTarget() TargetLastTarget()

## Garrote
Stealth, Garrote
 /run local _, _, active = GetShapeshiftFormInfo(1) if not active then CastShapeshiftForm(1)end
 /run CastSpellByName("Garrote")

Garrote if stealth-ed / Rupture if 3 combo's / Backstab
 <code>/run if GetBonusBarOffset() == 1 then CastSpellByName("Garrote") elseif GetComboPoints()>=3 then CastSpellByName("Rupture") else CastSpellByName("Backstab")end</code>

## Gouge
Gouge, Bandage oneself
 <code>/run CastSpellByName("Gouge")for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Bandage"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end</code>

If target is Gouged use Backstab, else cast Gouge
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Ability_Gouge" then x=1 end i=i+1 end if x==0 then CastSpellByName("Gouge") else CastSpellByName("Backstab")end</code>

## Kick
kicks target and announce your interrupt
 /cast Kick
 /run if not TeM then TeM = GetTime() + 10 end if GetTime() > TeM then SendChatMessage("%t Kicked","SAY") TeM = nil end

## Kidney Shot
Stealth + Kidney/Cheap Shot
 /script if UnitAffectingCombat("player")then CastSpellByName("Kidney Shot")else local _, _, active = GetShapeshiftFormInfo(1) if not active then CastShapeshiftForm(1)end end
 /cast Cheap Shot

## Pick Pocket
Pick Pocket / Ambush
 <code>/run if n~= 1 then CastSpellByName("Pick Pocket") n=1 else CastSpellByName("Ambush") n=0 end;</code>

Pick Pocket while Shift is being hold down, else Ambush.
 <code>/run if (IsShiftKeyDown())then CastSpellByName("Pick Pocket") else CastSpellByName("Ambush") end</code>

## Pick Lock
Pick lock Junkbox
 <code>/run for b = 0,4 do for s=1,GetContainerNumSlots(b) do l=GetContainerItemLink(b,s) if l~=nil then if string.find(l,"Junkbox") then CastSpellByName("Pick Lock") PickupContainerItem(b,s) ClearCursor() end end end end</code>

Pick lock Lockbox
 <code>/run for b = 0,4 do for s=1,GetContainerNumSlots(b,s) do l=GetContainerItemLink(b,s) if l~=nil then if (strfind(l,"Lockbox")) then CastSpellByName("Pick Lock") PickupContainerItem(b,s) ClearCursor() end end end en﻿﻿d</code>

## Preparation
Preparation / Vanish / Sprint
 /run CastSpellByName("Preparation")
 /run if GetBonusBarOffset() == 0 then CastSpellByName("Vanish") end
 /run CastSpellByName("Sprint")

## Ranged
Shoot Bow/Gun/Crossbow
 <code>/run local _,_,i=strfind(GetInventoryItemLink("player",18),"\124Hitem:(%d+)")local _,_,_,_,_,p=GetItemInfo(i)local t={}t.Bows="Bow"t.Guns="Gun"t.Crossbows="Crossbow"t.Thrown="Throw"CastSpellByName((string.gsub(t[p],"^([^T])","Shoot %1")))</code>

Spammable Auto Attack Macro w/ Melee and Throw swapping
 <code>/run if CheckInteractDistance("target", 3) and (not PlayerFrame.inCombat) then AttackTarget() else CastSpellByName("Throw") end</code>

## Riposte
Scans your action bars for Riposte by texture name and uses it if possible. else uses Sinister Strike.
 <code>/run for i=1,120 do local t=GetActionTexture(i) if t and string.find(t,"Challange") and IsUsableAction(i) and (UnitMana("Player")>=10) then UseAction(i) end if (UnitMana("Player")>=40) then CastSpellByName("Sinister Strike") end end</code>

## Sinister strike
Start attack, Sinister strike until 5 combo points then use Eviscerate
 <code>/run for z=1,172 do if IsAttackAction(z) then if not IsCurrentAction(z) then UseAction(z) elseif GetComboPoints()>=5 then CastSpellByName("Eviscerate") else CastSpellByName("Sinister Strike") end end end UIErrorsFrame:Hide()</code>

## Slice and Dice
Slice and Dice / Sinister Strike
 <code>/run local z=0 for i=1,27 do t=UnitBuff("player",i) if (t and strfind(t,"SliceDice")) then z=1 break end end if z==0 and (GetComboPoints()>=1) then CastSpellByName("Slice and Dice") else CastSpellByName("Sinister Strike")end</code>

## Stealth
Spammable Stealth
 <code>/run if GetBonusBarOffset() == 0 then CastSpellByName("Stealth") end</code>

## Vanish
Vanish / Stealth
 <code>/run if UnitAffectingCombat("player") then CastSpellByName("Vanish") else CastSpellByName("Stealth") end</code>

Vanish, then Sap
 /cast Vanish
 /run ClearTarget()
 /console targetNearestDistance 10
 /run TargetNearestEnemy();if UnitIsEnemy("player","target") and not UnitIsDead("target") then CastSpellByName("Sap") end
 /console targetNearestDistance 41

## Switch weapons
Switch weapons between main-hand and off-hand
 <code>/run PickupInventoryItem(17); PickupInventoryItem(16);</code>
both weapons should be one-handed (one-handed weapon marked with "main-hand" label won't be placed in off-hand slot)

The same function but more safe method
 <code>/run local a,b=CursorHasItem,PickupInventoryItem;if(not a())then CloseMerchant();b(17);if(a())then b(16);end end</code>
