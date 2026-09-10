---
title: "API IsCurrentAction"
url: "https://turtle-wow.fandom.com/wiki/API_IsCurrentAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-24T04:28:04Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsCurrentAction

Determine whether an action is currently executing.
 isCurrent = IsCurrentAction(actionSlot)

## Parameters
### Arguments
   (actionSlot)

  ; actionSlot
   Numeric - The action slot to test.

### Returns
   isCurrent

  ; isCurrent
   Flag - 1 if the action in the slot is currently executing, nil otherwise.

## Macro
Loop to check if attack is set to auto-repeat.<syntaxhighlight lang="lua">
/run for i=1,120 do if IsCurrentAction(i) then return end end CastSpellByName("Attack")
</syntaxhighlight>this one is more reliable. but it requires auto attack to be found on the action bar.<syntaxhighlight lang="lua">
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z);end;end;end;
</syntaxhighlight>

## Addon
Example from addon named AutoAttack<syntaxhighlight lang="lua">
-- Perform an action if its valid.
local function action(name,self)
    local slot = Slot[name]
    if not slot then return end
	if Slot.Shoot and IsAutoRepeatAction(Slot.Shoot) then
				UseAction(Slot.Shoot) return end -- stop wand action
    if IsUsableAction(slot)==1 and GetActionCooldown(slot)==0 -- not in cooldown
            and (self or IsActionInRange(slot)~=0) then
      if IsCurrentAction(slot) then debug('Wait on '..name) return end
      local target = UnitName('target')
      if Immune[target] and Immune[target][name] then return end
      UseAction(slot,0,self)
      debug('Used '..name)
      return 1
    end
end
</syntaxhighlight>
