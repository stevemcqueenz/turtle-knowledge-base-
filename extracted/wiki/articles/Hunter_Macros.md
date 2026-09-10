---
title: "Hunter Macros"
url: "https://turtle-wow.fandom.com/wiki/Hunter_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:26:22Z"
fetched: "2026-09-10T07:39:00Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Hunter Macros

## Arcane Shot
Arcane Shot and pet attack. If not set to passive or currently attacking.
 /run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end
 /cast Arcane Shot

## Aspect
Aspect of the Cheetah if solo, Pack if party
 <code>/run if GetNumPartyMembers()==0 or GetNumRaidMembers()==0 then CastSpellByName("Aspect of the Cheetah") else CastSpellByName("Aspect of the Pack") end</code>

Aspect of the Hawk if missing then cast Aimed Shot
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Nature_RavenForm" then x=1 end i=i+1 end if x==0 then CastSpellByName("Aspect of the Hawk") else CastSpellByName("Aimed Shot")end</code>

Aspect of the Hawk / Monkey
 <code>/run s={"Aspect of the Hawk","Aspect of the Monkey"} if q==nil then q=0 end q=q+1 if q>getn(s)then q=1 end CastSpellByName(s[q])</code>

Aspect of the Monkey/Raptor Strike
 <code>/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Hunter_AspectOfTheMonkey" then x=1 end i=i+1 end if x==0 then CastSpellByName("Aspect of the Monkey") else CastSpellByName("Raptor Strike")end</code>

## Auto Shot
uses a loop to check if auto shot is set to auto-repeat
 <code>/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Auto Shot")</code>

Checks for auto shot texture on your action bar and activates it if it is not activated
 <code>/run for i=1,120 do local t=GetActionTexture(i) if t and string.find(t,"Weapon") then if not IsAutoRepeatAction(i) then UseAction(i) end end end</code>

## Auto attack
uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

This one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

This one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end</code>

## Castsequence
Cycle Hunter's Mark, Serpent Sting, and Concussive Shot
 <code>/run s={"Hunter's Mark","Serpent Sting","Concussive Shot"} if q==nil then q=0 end q=q+1 if q>getn(s) then q=1 end CastSpellByName(s[q])</code>

## Deterrence
Deterrence / Monkey
 /cast Deterrence
 /run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_Hunter_AspectOfTheMonkey" then x=1 end i=i+1 end if x==0 then CastSpellByName("Aspect of the Monkey") else end

## Flare
Track Hidden, else spammable Flare
 <code>/run local g,h=GetTrackingTexture(),"Ability_Stealth";if not strfind(g,h) then CastSpellByName("Track Hidden")else if not SpellIsTargeting() then CastSpellByName("Flare")end end</code>

Hunter's Mark if target can be attacked, else Flare
 <code>/run if UnitCanAttack("player","target") then CastSpellByName("Hunter's Mark") else CastSpellByName("Flare") end</code>

## Freezing Trap
Trap/Feign Death
 /run if UnitAffectingCombat("player") then CastSpellByName("Feign Death") end
 /cast Freezing Trap

## Shadowmeld
 <code>/run PetFollow() PetPassiveMode() ClearTarget() if UnitAffectingCombat("player") then CastSpellByName("Feign Death") else CastSpellByName("Shadowmeld") CastSpellByName("Prowl")end</code>

## Hunter's Mark
Uses the hunter's mark on the target if it is not active
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Ability_Hunter_SniperShot" then x=1 end i=i+1 end if x==0 then CastSpellByName("Hunter's Mark")end</code>
Uses the hunter's mark and aimed shot on the target
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Ability_Hunter_SniperShot" then x=1 end i=i+1 end if x==0 then CastSpellByName("Hunter's Mark") else CastSpellByName("Aimed Shot")end</code>

## Immolation Trap
 /script if UnitAffectingCombat("player") then CastSpellByName("Feign Death") end
 /cast Immolation Trap

## Raptor Strike
Raptor Strike/Mongoose Bite
 /run if (not PlayerFrame.inCombat) then AttackTarget() end
 /cast Raptor Strike
 /cast Mongoose Bite

## Scare Beast
Scare Beast if combat, else Beast Lore
 <code>/run if UnitAffectingCombat("player") then CastSpellByName("Scare Beast") else CastSpellByName("Beast Lore") end</code>

## Scatter Shot
Targets the nearest enemy in 15 yards range and fires a scatter shot
 /console targetNearestDistance 15
 /run TargetNearestEnemy() CastSpellByName("Scatter Shot")
 /console targetNearestDistance 41

## Serpent Sting
This does Serpent sting and pet attack. It doesn't do pet attack if pet is set to passive or is currently attacking.
 /run local _,_,_,_,isActive=GetPetActionInfo(10) if not isActive and not GetUnitName("pettarget") then PetAttack() end
 /cast Serpent Sting

## Tracking
Humanoids/Hidden/Undead/Giants
 <code>/run c=CastSpellByName t=GetTrackingTexture() if t and strfind(t,"Prayer") then c("Track Hidden") elseif t and strfind(t,"Stealth") then c("Track Undead") elseif t and strfind(t,"Dark") then c("Track Giants") else c("Track Humanoids") end</code>

Beasts/Dragonkin/Demons/Elementals
 <code>/run c=CastSpellByName t=GetTrackingTexture() if t and strfind(t,"_Tracking") then c("Track Dragonkin") elseif t and strfind(t,"Dragon") then c("Track Demons") elseif t and strfind(t,"Fel") then c("Track Elementals") else c("Track Beasts") end</code>

## Viper sting
If target has mana cast Viper Sting, else cast Scorpid Sting
 <code>/run if (UnitPowerType('target')==0) then CastSpellByName("Viper Sting")else CastSpellByName("Scorpid Sting")end</code>

## Scorpid sting
Scorpid sting on Rogues and warriors Viper Sting on all others
 <code>/run class=UnitClass("target"); if ((class=="Rogue") or (class=="Warrior")) then CastSpellByName("Scorpid Sting"); else CastSpellByName("Viper Sting")end</code>

## Volley
Spammable Volley
 <code>/run if not SpellIsTargeting() and not CastingBarFrame.channeling then CastSpellByName("Volley")end</code>

## Wing Clip
Wing Clip if melee range, else Concussive Shot
 <code>/run if CheckInteractDistance("target",3) then CastSpellByName("Wing Clip") else CastSpellByName("Concussive Shot"); end</code>

Wing Clip if missing on target
 <code>/run local i,x=1,0 while UnitDebuff("target",i) do if UnitDebuff("target",i)=="Interface\\Icons\\Ability_Rogue_Trip" then x=1 break end i=i+1 end if x==0 then CastSpellByName("Wing Clip") CastSpellByName("Wing Clip(Rank 1)") end</code>

## Wyvern Sting
Pet passive, Feign Death if combat, else Wyvern Sting
 /run PetPassiveMode() if UnitAffectingCombat("player") then CastSpellByName("Feign Death")end
 /cast Wyvern Sting
