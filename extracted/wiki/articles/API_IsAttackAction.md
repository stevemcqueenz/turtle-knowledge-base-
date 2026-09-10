---
title: "API IsAttackAction"
url: "https://turtle-wow.fandom.com/wiki/API_IsAttackAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T11:37:03Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsAttackAction

Determine whether action slot is an attack action.
 isAttack = IsAttackAction(actionSlot)

## Parameters
### Arguments
   (actionSlot)

  ; actionSlot
   Numeric - The action slot to test.

### Returns
   isAttack

  ; isAttack
   Flag - nil if the specified slot is not an attack action, or is empty. 1 if the slot is an attack action and should flash red during combat.

## Macro
Loop to check if attack is set to auto-repeat. Requires auto attack to be found on the action bar.<syntaxhighlight lang="lua">
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end
</syntaxhighlight>

## Addon
From addon FeralSkills<syntaxhighlight lang="lua">
function FeralSkills_EnableAutoAttack()
	local k=1;
	while k<121 do
		if IsAttackAction(k) then
			if not IsCurrentAction(k) then
				AttackTarget();
			end
			k=121;
		end
		k=k+1
	end
end
</syntaxhighlight>
