---
title: "API IsConsumableAction"
url: "https://turtle-wow.fandom.com/wiki/API_IsConsumableAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T19:01:00Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsConsumableAction

Tests if the action is linked to a consumable item.

<syntaxhighlight lang="lua">
isTrue = IsConsumableAction(slotID)
</syntaxhighlight>

## Parameters
**Arguments**

  ; slotID - [ActionSlot](Action slot)
   The tested action slot.

**Returns**

  ; isTrue - Boolean
  * True if the action in the specified slot is linked to a consumable, e.g. a potion action.  Consumable actions have a small number displayed in the bottom right corner of their action icon.
  * False if the action is not consumable or if the action is empty.

## Addon
Example from addon named Bongos<syntaxhighlight lang="lua">
		--update count
		if IsConsumableAction(pagedID) then
			getglobal(buttonName.."Count"):SetText(GetActionCount(pagedID));
		else
			getglobal(buttonName.."Count"):SetText("");
		end
</syntaxhighlight>
