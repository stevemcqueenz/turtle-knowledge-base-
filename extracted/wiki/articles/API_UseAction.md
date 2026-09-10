---
title: "API UseAction"
url: "https://turtle-wow.fandom.com/wiki/API_UseAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T12:20:28Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UseAction

Perform the specified action.
 UseAction(slot[, checkCursor[, onSelf]])

## Parameters
### Arguments
   (slot[, checkCursor[, onSelf]])

  ; slot
   Numeric - The action [slot](Action slot) to use.
  ; checkCursor
   Flag *(optional)* - Can be 0, 1, or nil. Appears to indicate whether the action button was clicked (1) or used via hotkey (0); probably involved in placing skills/items in the action bar after they've been picked up.  I can confirm this.  If you pass 0 for checkCursor, it will use the action regardless of whether another item/skill is on the cursor.  If you pass 1 for checkCursor, it will replace the spell/action on the slot with the new one.
  ; onSelf
   Flag *(optional)* - Can be 0, 1, or nil. If present and 1, then the action is performed on the player, not the target.  If "true" is passed instead of 1, Blizzard produces a Lua error.

### Returns
   *none*

## Example
<syntaxhighlight lang="lua">
 action = 18 -- Change this to the slot number you want to activate
 UseAction(action, 0, 1)

</syntaxhighlight>

### Result
<syntaxhighlight lang="lua">
 -- Causes action bar slot #18 to be cast on the player, regardless
 -- of whether the cursor is currently "holding" an item or ability.

</syntaxhighlight>

## Details
See the [actionSlot](Action slot) API Type for more information on slot numbers and example code for listing available slots.

## Macros
Auto attack loop<syntaxhighlight lang="lua">
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
</syntaxhighlight>

## Addon
Example from addon named DruidBar<syntaxhighlight lang="lua">
--Hooks into the original UseAction. Passes ChangeForm to shift out of caster.
function DruidBar_UseAction(id, ex, theSelf)
	local texture = GetActionTexture(id);
	local a, b, c, d;
	a = "Interface\\Icons\\Ability_Druid_AquaticForm";
	b = "Interface\\Icons\\Ability_Racial_BearForm";
	c = "Interface\\Icons\\Ability_Druid_CatForm";
	d = "Interface\\Icons\\Ability_Druid_TravelForm";
	e = ".blp";
	if (texture == a or texture == b or texture == c or texture == d or texture == a..e or texture == b..e or texture == c..e or texture == d..e) then
		local fix = DruidBar_ChangeForm(nil);
		if (GetActionText(id) or fix) then
			pre_UseAction(id, ex, theSelf);
		end
	else
		pre_UseAction(id, ex, theSelf);
	end
end
</syntaxhighlight>
