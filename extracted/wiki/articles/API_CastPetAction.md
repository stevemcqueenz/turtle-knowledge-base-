---
title: "API CastPetAction"
url: "https://turtle-wow.fandom.com/wiki/API_CastPetAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T13:04:02Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CastPetAction

Cast the corresponding pet skill.
 CastPetAction(index);
----

** *Arguments***

   (index)
  ; index
   Number - The index of the pet skill for query.

----

** *Returns***

   nil

----

** *Example***

Cast by specified action name
<syntaxhighlight lang="lua">
  for i=1, NUM_PET_ACTION_SLOTS, 1 do
    local name, subtext, texture, isToken, isActive, autoCastAllowed, autoCastEnabled = GetPetActionInfo(i);
    if ( name == "Sacrifice" ) then
      CastPetAction(i);
    end
  end
</syntaxhighlight>
Please notice that this exemple will only works if the sacrifice skill is named "Sacrifice" in the client locale.
----

** *Description***

   Cast the corresponding pet skill. Requires a button press.

## Macros
Finds a target and pet attack the target if it is not neutral<syntaxhighlight lang="lua">
/run for i=1,4 do TargetNearestEnemy(); if UnitIsEnemy("player", "target") then CastPetAction(1); return end end
</syntaxhighlight>Mind Control target, then use attack and spells<syntaxhighlight lang="lua">
/run if not CastingBarFrame.channeling then CastSpellByName("Mind Control");end CastPetAction(1);CastPetAction(2);CastPetAction(3);
</syntaxhighlight>

## Addon
Example from addon named Servitude<syntaxhighlight lang="lua">
function CastPetActionByName (inputname)
--	if IsPlayerMounted() or (not GetPetActionsUsable()) then
--	if (not GetPetActionsUsable()) then
--		return;
--	end	
	if Pet_Action_List[inputname] ~= nil then
		local startTime, duration, enabled = GetPetActionCooldown(Pet_Action_List[inputname]);
		if startTime == 0 and duration == 0 and enabled ~= 0 then			
			CastPetAction(Pet_Action_List[inputname]);
		end			
	else
		local i;
		Pet_Action_List = {};
		for i=1, NUM_PET_ACTION_SLOTS, 1 do
			local name, subtext, texture, isToken, isActive, autoCastAllowed, autoCastEnabled = GetPetActionInfo(i);
			if name ~= nil then
				Pet_Action_List[name] = i;
			end			
			if (name == inputname) then
				local startTime, duration, enabled = GetPetActionCooldown(i);
				if startTime == 0 and duration == 0 and enabled ~= 0 then					
					CastPetAction(i);
				end
			end
		end
	end	
end
</syntaxhighlight>
