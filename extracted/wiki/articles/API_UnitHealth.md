---
title: "API UnitHealth"
url: "https://turtle-wow.fandom.com/wiki/API_UnitHealth"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-24T12:52:53Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitHealth

Returns the current health of the specified unit, in percentage, for:

- target
- mouseover
- pet if pet is charmed/enslaved

Otherwise in points.
 local health = UnitHealth(unit);
----

** *Arguments***

   (String unit)

  ; arg1
   the unit's health to query

----

** *Returns***

   health
  ; health
   the current health of the specified unit

----

** *Example***
<syntaxhighlight lang="lua">
 local health = UnitHealth("player");
 local health2 = UnitHealth("target");
 ChatFrame1:AddMessage('player health: ' .. health);
 ChatFrame1:AddMessage('target health: ' .. health2 .. "%");
</syntaxhighlight>

** *Result***
<syntaxhighlight lang="lua">
 Prints the player's and target's health to the chat frame as
 
 'player health: 900' and 'target health: 80%'.
</syntaxhighlight>

----

** *Description***

   Returns the current health of the specified unit. The health is returned in real points only if the unit is in the player's group (party or raid). Otherwise, a percentage is returned (0-100). (Note, that the player, the player's pet, and any group member pets are considered to be in the group.)

## Macros
Heal anyone in range who is low on hp<syntaxhighlight lang="lua">
/run for i=1,40 do TargetNearestFriend(); if UnitHealth("target")/UnitHealthMax("target") < 0.9 then if UnitIsPlayer("target") then CastSpellByName("Heal"); end end end
</syntaxhighlight>Drain Soul rank based on target health and player mana<syntaxhighlight lang="lua">
/run if (UnitHealth("target") < 20 || UnitMana("player")) < 1000 then CastSpellByName("Drain Soul(Rank 1)") else CastSpellByName("Drain Soul")end
</syntaxhighlight>

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
	-- Auto-Execute
	if((AsmoMOD_Save.executeenabled) and (UnitClass("player") == "Warrior")) then
		--Check to see if the target is at 20% or less
		local tpercent;
		tpercent = (UnitHealth("target") / UnitHealthMax("target")) * 100;
		if(tpercent <= 20) then
			if(UnitMana("player") >= 15) then 
				CastSpellByName("Execute(Rank 5)");
			end
		end
	end
</syntaxhighlight>
