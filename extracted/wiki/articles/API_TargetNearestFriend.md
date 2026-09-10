---
title: "API TargetNearestFriend"
url: "https://turtle-wow.fandom.com/wiki/API_TargetNearestFriend"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T07:03:51Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetNearestFriend

This function will select the nearest unit friendly towards you (i.e. is green if you would target it). It has nothing to do with whether you have added the unit to your friends list or not.

## Parameters
### Function
  ; TargetNearestFriend()
   Selects the nearest friendly unit as the current target.

### Returns
<code>nil</code>.

## Macros
Healing Touch on friends in range (Set to react on < 90%)<syntaxhighlight lang="lua">
/script for i=1,40 do TargetNearestFriend(); if UnitHealth("target")/UnitHealthMax("target") < 0.9 then if UnitIsPlayer("target") then CastSpellByName("Healing Touch(Rank 3)"); end end end; TargetLastEnemy();
</syntaxhighlight>Flash of Light on nearest player<syntaxhighlight lang="lua">
/run for i=1,40 do TargetNearestFriend() if UnitHealth("target")/UnitHealthMax("target") < 0.9 then if UnitIsPlayer("target") then CastSpellByName("Flash of Light") end end end
</syntaxhighlight>

## Addon
Example from addon named CastOptions<syntaxhighlight lang="lua">
		--A list of targets that we have checked, if we end up checking the same target twice,
		--then we abort our search to avoid needless loops
		local targetList = {};
		--First search for friendly units, then hostile units
		for curType = 1, 2 do
			--Switch targets till we find out unit, if we check more than 100 units, then give up
			for curTry = 1, 100 do
				--Do the appropriate targeting type
				if (curType == 1) then
					TargetNearestFriend();
				else
					TargetNearestEnemy();
				end
				--If we failed to target anything then quit looking
				if ( UnitExists("target") and UnitName("target") ) then
					--If the unit we targeted is the one we wanted, then return true
					if (UnitName("target") == name) then
						return true;
					else
						--We didn't find the desired unit
						if (targetList[UnitName("target")]) then
							--If we've targeted this unit before, then stop looking
							break;
						else
							--Add this target to the list of checked targets
							targetList[UnitName("target")] = true;
						end
					end
				else
					break;
				end
			end
		end
</syntaxhighlight>
