---
title: "API UnitMana"
url: "https://turtle-wow.fandom.com/wiki/API_UnitMana"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-24T12:34:42Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitMana

Returns the mana points of the specified unit.
----

** *Usage***

 local mana = UnitMana("unit");
----

** *Arguments***

  ; unit
   String - The [UnitId](API Type UnitId) of the unit whose MP should be returned

----

** *Returns***

  ; mana
   Number - the unit's current mana point's

----

** *Details***

   There's nothing special about this really. There is, however, one interesting anomally: While [UnitHealth](API UnitHealth) will return percentage values for "target" and "mouseover", this one seems to return the actual mana points for all possible targets.

   This is also the mechanism for getting a unit's rage or energy, since there are no corresponding UnitEnergy or UnitRage functions.  You can use [UnitPowerType](API UnitPowerType) to figure out whether what you're getting is Rage, Energy, or actual Mana.

## Macros
Drain Soul rank based on target health and player mana<syntaxhighlight lang="lua">
/run if (UnitHealth("target") < 20 || UnitMana("player")) < 1000 then CastSpellByName("Drain Soul(Rank 1)") else CastSpellByName("Drain Soul")end
</syntaxhighlight>Life tap when low on mana, else Shadowbolt<syntaxhighlight lang="lua">
/run if UnitMana("Player") < 500 then CastSpellByName("Life Tap")end
/cast Shadow Bolt
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
