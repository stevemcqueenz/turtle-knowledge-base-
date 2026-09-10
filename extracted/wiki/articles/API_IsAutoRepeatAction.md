---
title: "API IsAutoRepeatAction"
url: "https://turtle-wow.fandom.com/wiki/API_IsAutoRepeatAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-24T11:06:21Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsAutoRepeatAction

Determine whether action slot is auto repeating.
 isRepeating = IsAutoRepeatAction(actionSlot)

## Parameters
### Arguments
   (actionSlot)

  ; actionSlot
   Numeric - The action slot to test.

### Returns
   isRepeating

  ; isAutoRepeat
   Flag - 1 if the action in the slot is currently auto-repeating, nil if it is not auto-repeating or the slot is empty.

## **Macros**
Loop to check if auto shot is set to auto-repeat<syntaxhighlight lang="lua">
/run for i=1,120 do if IsAutoRepeatAction(i) then return end end CastSpellByName("Auto Shot")
</syntaxhighlight>Checks for auto shot texture on your action bar and activates it if it is not activated<syntaxhighlight lang="lua">
/run for i=1,120 do local t=GetActionTexture(i) if t and string.find(t,"Weapon") then if not IsAutoRepeatAction(i) then UseAction(i) end end end
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
