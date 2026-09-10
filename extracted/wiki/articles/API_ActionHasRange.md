---
title: "API ActionHasRange"
url: "https://turtle-wow.fandom.com/wiki/API_ActionHasRange"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T12:37:30Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: []
---
# API ActionHasRange

Returns true is the action has a numeric range requirement.
 isTrue = ActionHasRange(slotID)

## Parameters
-Arguments*

  ; slotID
   Number - The [slot ID](Action slot) to test.

-Returns*

   Boolean - True if the specified action has a numeric range requirement.

## Example
 /script if (ActionHasRange(1)) then if (IsActionInRange(1)) 
  then ChatFrame1:AddMessage("Action 1 is in range!");end;end;

  -Result**
 "Action 1 is in range!"

   The above message will be printed if the action in slot 1 has a numeric range requirement and you are within range of the target (or if there is no target; see [IsActionInRange](API IsActionInRange)).

## Details
   This function returns true if the action in the specified slot ID has a numeric range requirement as shown in the action's tooltip, e.g. [Fire Blast](Fire Blast) has a numeric range of 20 yards.  For actions like [Attack](Attack) which have no numeric range requirement in their tooltip (even though they only work within a certain range), this function will return false.

## Addon
From addon Zorlen<syntaxhighlight lang="lua">
									if SpellButtonArray[j] then
										if UnitIsUnit(SpellTarget, "target") then
											local inRange = IsActionInRange(SpellButtonArray[j])
											local hasRange = ActionHasRange(SpellButtonArray[j])
											if hasRange then
												if inRange ~= 1 then
													return false
												end
											end
										end
</syntaxhighlight>
