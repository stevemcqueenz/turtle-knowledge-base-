---
title: "API IsActionInRange"
url: "https://turtle-wow.fandom.com/wiki/API_IsActionInRange"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T11:42:36Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsActionInRange

Test whether an action is in range for use.
 inRange = IsActionInRange(actionSlot);

## Parameters
### Arguments
  ; actionSlot
   Numeric - The action slot to test.

### Returns
  ; inRange
   Flag - nil if the slot has no action or if there is no current target. 0 if the action is out of range, and 1 if the action is in range. Note that it always returns 1 if range does not apply to this action  or if you can't use the spell on the target.

## Note
If you need more performance than target switching and checking with IsActionInRange provides then check out [CheckInteractDistance](API CheckInteractDistance). It has certain limits and will not work for all ranges, but it is several orders of magnitude faster than target switching/scanning.

## Addon
From addon named Swinger<syntaxhighlight lang="lua">
function SwingerUseAction(id, type, self)
	if (UnitExists("target") and IsActionInRange(id) == 1 and IsUsableAction(id) and GetActionCooldown(id) == 0 and UnitClass("player") == "Hunter") then
		if (not SwingerTooltip:IsOwned(WorldFrame)) then
			SwingerTooltip:SetOwner(WorldFrame, "ANCHOR_NONE");
		end
		SwingerTooltip:SetAction(id);
		if (Swinger_ScanTooltip(SwingerTooltip, "Requires Ranged Weapon") and not Swinger_ScanTooltip(SwingerTooltip, "Auto Shot")) then
			skipRangedCheck = GetTime() + UnitRangedDamage("player") + 0.3;
		end
	end
	origUseAction(id, type, self);
end
</syntaxhighlight>
