---
title: "Warlock Demon Macros"
url: "https://turtle-wow.fandom.com/wiki/Warlock_Demon_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:23:07Z"
fetched: "2026-09-10T07:39:58Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Warlock Demon Macros

## All in One
Fire Shield, or Devour Magic if friendly target, else Sacrifice, Seduce target, or Devour Magic self
 <code>/run if UnitIsFriend("player", "target")then CastSpellByName("Devour Magic")CastSpellByName("Fire Shield")else CastSpellByName("Sacrifice")CastSpellByName("Seduction") CastSpellByName("Devour Magic",1)end</code>

Cast the pet skill that is available on target, if no target pet follows you and casts the pet skill that is available on you
 <code>/run if(UnitExists("target")) then CastSpellByName("Devour Magic")CastSpellByName("Sacrifice")CastSpellByName("Seduction")CastSpellByName("Fire Shield")else PetFollow() CastSpellByName("Devour Magic",1)CastSpellByName("Sacrifice")end</code>

## Auto-targeting
Finds a target and attacks the target if it is not neutral
 <code>/run for i=1,4 do TargetNearestEnemy(); if UnitIsEnemy("player", "target") then CastPetAction(1); return end end</code>

## Fire Shield
Fire Shield on target if friendly, else Fire Shield oneself
 <code>/run if UnitIsFriend ("player", "target") then CastSpellByName("Fire Shield") else CastSpellByName("Fire Shield",1)  end</code>

## Pet Attack
pet attack if not set to passive or currently attacking
 <code>/run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end</code>

## Uber Pet Attack
This sends your pet to assist on friendly target. Attack on hostile target. Or else set the pet to follow. This works regardless of your pet’s mode (Aggressive/Defensive/Passive).
 <code>/run if UnitExists("target") then if UnitIsFriend("player","target") then AssistUnit("target");PetAttack();else if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow();else PetAttack();end;end;else PetFollow();end;</code>

## Pet Stop Attack
Fear + Pet Stop Attack
 <code>/run if UnitExists("target") then CastSpellByName("Fear") end if UnitExists("pettarget") and UnitIsUnit("target", "pettarget") then PetFollow() PetStopAttack() end</code>

## Voidwalker
Summon/Sacrifice Voidwalker
 <code>/cast Fel Domination
 /cast Summon Voidwalker(Summon)
 /cast Sacrifice(Rank 6)</code>
