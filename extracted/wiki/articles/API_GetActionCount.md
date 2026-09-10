---
title: "API GetActionCount"
url: "https://turtle-wow.fandom.com/wiki/API_GetActionCount"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T18:26:55Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActionCount

Gets the available count for an action, if applicable. 

text = GetActionCount(actionSlot) 

## Parameters
**Arguments**

  ; actionSlot - [ActionSlot](Action slot)
   The queried action slot.

**Returns**

  ; text - Number
  * The action's count as displayed on the action's icon; e.g. for a potion action, returns the number of potions left.
  * 0, if the action has no count or if the specified action slot is empty

## Addon
From addon library DiscordLib_Conditions<syntaxhighlight lang="lua">
-- Action Item Count
DL_CheckCondition[29] = function(conditions)
	if (IsConsumableAction(conditions.action)) then
		return DL_Compare(GetActionCount(conditions.action), conditions.number, conditions.compare);
	end
end
</syntaxhighlight>

## See Also
- Use [IsConsumableAction(slot)](API IsConsumableAction) to determine whether a returned <code>0</code> means that there are no more charges of the item, or whether it simply doesn't have a count.
