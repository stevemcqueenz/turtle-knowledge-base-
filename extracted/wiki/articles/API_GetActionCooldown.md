---
title: "API GetActionCooldown"
url: "https://turtle-wow.fandom.com/wiki/API_GetActionCooldown"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T12:10:51Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActionCooldown

Retrieves the [cooldown](cooldown) data of the action specified.
 start, duration, enable = GetActionCooldown(slot)

## Parameters
**Arguments**

  ; slot
   Integer - The [action slot](ActionSlot) to retrieve data from.

**Returns**

   start, duration, enable

  ; start
   Number - The time at which the current cooldown period began (relative to the result of [GetTime](API GetTime)), or 0 if the cooldown is not active or not applicable.
  ; duration
   Number - The duration of the current cooldown period in seconds, or 0 if the cooldown is not active or not applicable.
  ; enable
   Number - Indicate if cooldown is enabled, is greater than 0 if a cooldown is active, and 0 if a cooldown cannot be active. This lets you know when a shapeshifting form has ended and the actual countdown has started.

## Example
<syntaxhighlight lang="lua">
 local start, duration, enable = GetActionCooldown(slot);
 if ( start == 0 ) then
 	-- do stuff when cooldown is not active
 else
 	-- do stuff when cooldown is under effect
 end
</syntaxhighlight>

## Addon
From addon named FeralSkills<syntaxhighlight lang="lua">
function FeralSkills_IsUseable(name)
	----Check:
	--player has spell
	--enough mana for spell
	--spell is in range
	--spell is cooled down
	--target isn't immune
	local id = FeralSkills_FindActionIdByName(name);
	if (id and IsUsableAction(id) and GetActionCooldown(id) == 0 and
		(IsActionInRange(id) == 1 or name==FeralSkills_Strings.SKILL_ENRAGE or
		(name==FeralSkills_Strings.SKILL_DEMORALIZINGROAR and CheckInteractDistance("target", 2)))
		and (not FeralSkills_Settings.TrackImmunities or
		(not (FeralSkills_Immunities[name] and FeralSkills_Immunities[name][UnitName("target")])
		and not (name==FeralSkills_Strings.SKILL_RAKE and FeralSkills_Immunities[FeralSkills_Strings.SKILL_RIP] and FeralSkills_Immunities[FeralSkills_Strings.SKILL_RIP][UnitName("target")]))) ) then
</syntaxhighlight>
