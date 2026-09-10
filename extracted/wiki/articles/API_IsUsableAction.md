---
title: "API IsUsableAction"
url: "https://turtle-wow.fandom.com/wiki/API_IsUsableAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-24T11:03:27Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsUsableAction

**IsUsableAction**Determine if an action can be used.
<syntaxhighlight lang="lua">
 isUsable, notEnoughMana = IsUsableAction(slot)
</syntaxhighlight>
## Parameters
### Arguments
   (slot)

  ; slot
   Integer - The action slot to retrieve data for.

For a warrior, the action slot numbering is
<syntaxhighlight lang="lua">
  25-36  bar on right-side of screen, far right    (top to bottom)
  37-48  bar on right-side of screen, in one column    (top to bottom)
  49-60  lower right bar    (left to right)
  61-72  lower left  bar    (left to right)
  73-84  battle stance bar    (left to right)
  85-96  defensive stance bar    (left to right)
  97-108 berserker stance bar    (left to right)
</syntaxhighlight>
For a rogue, the default Blizzard UI action slot numbering is
<syntaxhighlight lang="lua">
  1-12   main bar
  13-24  Exist in Action bar two... Hit the little yellow arrow to find it.
  25-36  far right (on the right) (added through Interface Options)    (top to bottom)
  37-48  far right (on the left) (added through Interface Options)    (top to bottom)
  49-60  bottom right (added through Interface Options)    (left to right)
  61-72  bottom left (added through Interface Options)    (left to right)
  73-84  stealth bar    (left to right)
</syntaxhighlight>
not sure for other classes, but it is probably different.

### Returns
   isUsable, notEnoughMana

  ; isUsable
   Flag - Returns 1 if the action is valid for use at present (Does NOT include cooldown or range tests), nil otherwise.
  ; notEnoughMana
   Flag - Returns 1 if the reason for the action not being usable is because there is not enough mana/rage/energy, nil otherwise.

## Example
<syntaxhighlight lang="lua">
 local isUsable, notEnoughMana = IsUsableAction(1);
</syntaxhighlight>

## Macro
Scans your action bars for Riposte by texture name and uses it if possible. else uses Sinister Strike.<syntaxhighlight lang="lua">
/run for i=1,120 do local t=GetActionTexture(i) if t and string.find(t,"Challange") and IsUsableAction(i) and (UnitMana("Player")>=10) then UseAction(i) end if (UnitMana("Player")>=40) then CastSpellByName("Sinister Strike") end end
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
