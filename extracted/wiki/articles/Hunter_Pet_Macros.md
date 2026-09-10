---
title: "Hunter Pet Macros"
url: "https://turtle-wow.fandom.com/wiki/Hunter_Pet_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:26:13Z"
fetched: "2026-09-10T07:39:00Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Hunter Pet Macros

## All-in-one
Call Pet, Revive Pet or Mend Pet
 <code>/run if not UnitExists("pet") then CastSpellByName("Call Pet") else if UnitIsDead("pet") then CastSpellByName("Revive Pet") else CastSpellByName("Mend Pet") end end</code>

## Auto-targeting
Finds a target and attacks the target if it is not neutral
 <code>/run for i=1,4 do TargetNearestEnemy(); if UnitIsEnemy("player", "target") then CastPetAction(1); return end end</code>

## Call Pet
Call / Dismiss Pet
 <code>/run if not HasPetUI() then CastSpellByName('Call Pet') else CastSpellByName('Dismiss Pet') end</code>

## Feed Pet
<code>Feed Pet Longjaw Mud Snapper</code>
 <code>/run for b=0,4 do for s=1,GetContainerNumSlots(b) do local o=GetContainerItemLink(b,s);if o and string.find(o,"Longjaw Mud Snapper") then CastSpellByName("Feed Pet"); PickupContainerItem(b,s);b=4;break;end;end;end</code>

## Growl
Turn Autogrowl on
 <code>/ru﻿n local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if not y then ToggleSpellAutocast(g,"pet") end</code>

Turn Autogrowl off
 <code>/run local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if y then ToggleSpellAutocast(g,"pet") end</code>

Disables growl whenever you tell your pet to attack a player in PvP
 <code>/script local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if (y and UnitFactionGroup("target")) then ToggleSpellAutocast(g,"pet") end
 /script PetAttack();</code>

## Hunter`s Mark
Hunter`s Mark and Pet Attack
 <code>/run c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("SniperShot")then c("Hunter's Mark")PetAttack() end</code>

Target nearest enemy, Hunter`s Mark and Pet Attack
 <code>/run for i=1,4 do TargetNearestEnemy() c=CastSpellByName function b(k)for i=1,16 do if strfind(tostring(UnitDebuff("target",i)),k)then return 1 end end end if not b("SniperShot")then c("Hunter's Mark")PetAttack() end end</code>

## Pet Attack
Pet attack if not set to passive or currently attacking
 <code>/run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end</code>

## Uber Pet Attack
This sends your pet to assist on friendly target. Attack on hostile target. Or else set the pet to follow. This works regardless of your pet’s mode (Aggressive/Defensive/Passive).
 <code>/run if UnitExists("target") then if UnitIsFriend("player","target") then AssistUnit("target");PetAttack();else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow();else PetAttack();end;end;else PetFollow();end</code>

## Pet Follow
One button pet follow/stay
 <code>/run local _,_,_,_,x = GetPetActionInfo(2); if x then PetWait() else PetFollow() end</code>

## Prowl
Spammable Prowl
 <code>/run local i,x=1,0 while UnitBuff("pet",i) do if string.find(UnitBuff("pet",i),"Prowl") then x=1 end i=i+1 end if x==0 then CastSpellByName("Prowl");end</code>
