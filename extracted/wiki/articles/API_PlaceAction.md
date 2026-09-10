---
title: "API PlaceAction"
url: "https://turtle-wow.fandom.com/wiki/API_PlaceAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:57:38Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PlaceAction

Place the drag-and-drop item as an action.
 PlaceAction(actionSlot)

## Parameters
### Arguments
   (actionSlot)

  ; actionSlot
   Integer - The action slot to place the action into.

### Returns
   *nil*

## Details
   If the cursor is empty, nothing happens, otherwise the action from the cursor is placed in the slot. If the slot was empty then the cursor becomes empty, otherwise the action from the slot is picked up and placed onto the cursor.

   If an action is placed on the cursor use [API_PutItemInBackpack](API_PutItemInBackpack) to remove the action from the cursor without placing it in an action slot

   IMPORTANT: You can crash your client if you send an invalid slot number.

## Addon
Example from addon Lern2Spell<syntaxhighlight lang="lua">
function Lern2Spell:SPECIAL_LEARNED_SPELL(spell, rank)
	for btn=1,120 do
		local n, r = self:ActionIsSpell(btn)
		if n and n == spell and ((r or "") ~= rank) then
			local i = self:GetSpellIndex(spell, rank)
			if not i then return end

			local n, r = GetSpellName(i,BOOKTYPE_SPELL)
			self.cmd:msg("Upgrading button #%s - %s ~ %s", btn, n, r or "??")
			PickupSpell(i, BOOKTYPE_SPELL)
			PlaceAction(btn)

			repeat
				if CursorHasItem() or CursorHasSpell() then PickupSpell(1, BOOKTYPE_SPELL) end
			until not CursorHasItem() and not CursorHasSpell()
		end
	end
end
</syntaxhighlight>
