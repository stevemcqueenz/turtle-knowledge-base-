---
title: "Druid Cat Macros"
url: "https://turtle-wow.fandom.com/wiki/Druid_Cat_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:26:51Z"
fetched: "2026-09-10T07:38:40Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Druid Cat Macros

## Auto attack
uses a loop to check if attack is set to auto-repeat.
 <code>/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")</code>

this one is decent enough but it is known to be unreliable if spammed.
 <code>/run if (not PlayerFrame.inCombat) then AttackTarget() end</code>

this one is more reliable. but it requires auto attack to be found on the action bar.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;</code>

## Cat form
Spammable cat form
 <code>/run local _, _, active = GetShapeshiftFormInfo(3) if not active then CastShapeshiftForm(3)end</code>

## Claw
Claw/Ferocious Bite. Change 4 to 5 if you want it to build to 5 combo points before Ferocious Bite
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z) elseif GetComboPoints()>=4 then CastSpellByName("Ferocious Bite") else CastSpellByName("Claw") end;end;end UIErrorsFrame:Clear()</code>

## Dash
Unshifts if not in Cat form, then shifts to Cat form, then uses Dash
 <code>/run local f=0 for i=1,GetNumShapeshiftForms()do if({GetShapeshiftFormInfo(i)})[3]then f=i end end if f ~= 0 and f ~= 3 then CastShapeshiftForm(f) else if f == 3 then CastSpellByName("Dash") else CastShapeshiftForm(3) end end</code>

## Feral Faerie Fire
Feral Faerie Fire when shapeshifted, Faerie Fire if not
 <code>/script i=1;m=0;while(UnitBuff("player",i)~=nil) do if(strfind(UnitBuff("player",i),"Form")~=nil) then m=1; end;i=i+1;end; c=CastSpellByName; if(m==1) then c("Faerie Fire (Feral)()");else c("Faerie Fire");end;</code>

## Pounce
Pounce if out of combat, Rip if 3 combo point, else Rake
 <code>/run C=CastSpellByName if not UnitAffectingCombat("player")then C("Pounce") elseif GetComboPoints()>=3 then C("Rip") else C("Rake") end UIErrorsFrame:Clear()</code>

## Powershift
Powershift Shred. Energy level is set to 30, change to a different number for a different cutoff for when you shift to caster
 <code>/run u=UnitMana('Player'); c=CastSpellByName; f=UnitPowerType("Player"); if (u<=30) and (f==3) then c"Cat Form"; elseif (f==0) then c"Cat Form"; end; for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;c"Shred"</code>

Shred, Ferocious Bite, and Powershifting one button option
 /run if GetComboPoints()>=4 then CastSpellByName("Ferocious Bite") else CastSpellByName("Shred") end
 /script u=UnitMana('Player'); c=CastSpellByName; f=UnitPowerType("Player"); if (u<=30) and (f==3) then c"Cat Form"; elseif (f==0) then c"Cat Form"; end;

## Prowl
Cat Form, else Prowl
 <code>/run local _, _, active = GetShapeshiftFormInfo(3) if not active then CastShapeshiftForm(3) else CastSpellByName("Prowl")end</code>

Unshifts if not in Cat form, then shifts to Cat form, then uses Prowl
 <code>/run local f=0 for i=1,GetNumShapeshiftForms()do if({GetShapeshiftFormInfo(i)})[3]then f=i end end if f ~= 0 and f ~= 3 then CastShapeshiftForm(f) else if f == 3 then CastSpellByName("Prowl") else CastShapeshiftForm(3) end end</code>
## Ravage
Ravage if out of combat, Ferocious Bite if 3 combo point, else Shred
 <code>/run C=CastSpellByName if not UnitAffectingCombat("player")then C("Ravage") elseif GetComboPoints()>=3 then C("Ferocious Bite") else C("Shred") end UIErrorsFrame:Clear()</code>

## Rip
Rip / Claw / Auto attack
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z) elseif GetComboPoints()>=3 then CastSpellByName("Rip") else CastSpellByName("Claw") end;end;end UIErrorsFrame:Clear()</code>

## Shred
Shred/Ferocious Bite. Change 4 to 5 if you want it to build to 5 combo points before Ferocious Bite.
 <code>/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z) elseif GetComboPoints()>=4 then CastSpellByName("Ferocious Bite") else CastSpellByName("Shred") end;end;end UIErrorsFrame:Clear()</code>

## Tiger’s Fury
Uses Tiger’s Fury if the hast buff is missing
 /run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Ability_GhoulFrenzy" then x=1 end i=i+1 end if x==0 then CastSpellByName("Tiger's Fury") else CastSpellByName("Claw") end UIErrorsFrame:Clear()

Spammable Tiger’s Fury
 <code>/run i=0 m=0 c=CastSpellByName while not (GetPlayerBuff(i)==-1) do if (strfind(GetPlayerBuffTexture(GetPlayerBuff(i)),"Ability_Mount_JungleTiger")) then m=1 end i=i+1 end if m==0 then c("Tiger's Fury") end</code>
