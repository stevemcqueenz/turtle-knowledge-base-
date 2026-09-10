---
title: "API TargetUnit"
url: "https://turtle-wow.fandom.com/wiki/API_TargetUnit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T09:21:21Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetUnit

Selects the specified id as the current target. 
<syntaxhighlight lang="lua">
 TargetUnit("unit");
</syntaxhighlight>
## Parameters
### Arguments
  ("unit")

  ;unit: String - The [unitId](API Type UnitId) to select as a target.

### Returns
  ;nil

## Example
  When the player changes his target there is a small delay before the global variable 'playertarget' is updated. This can be exploited and used for restoring your old target.
<syntaxhighlight lang="lua">
 TargetUnit("unit")
 CastSpell()
 TargetUnit("playertarget") 
</syntaxhighlight>
### Result
   This will restore your old target because of the delay. It will not clear your target if you didnt have one.

## Details
   Selects the specified id as the current target. One can use any of the defined [unitId](API Type UnitId) values.

## Macros
Faerie Fire on targettarget if friendly target, else Faerie Fire<syntaxhighlight lang="lua">
/run if UnitCanAttack("player","target") == 1 then CastSpellByName("Faerie Fire")else TargetUnit("targettarget") CastSpellByName("Faerie Fire") TargetLastTarget() end
</syntaxhighlight>Use any Juju on yourself, or friendly target<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Juju"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end
</syntaxhighlight>Use any bandage without losing target<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Bandage"))then UseContainerItem(b,s)SpellTargetUnit("player")end end end
</syntaxhighlight>

## Addon
Example from addon named BGAssist<syntaxhighlight lang="lua">
function BGAssist_Target_OnClick()
	local unit = this:GetParent().unit;
	local name = this:GetParent().name;
	if (unit and name and UnitName(unit) == name) then
		if (SpellIsTargeting()) then
			SpellTargetUnit(unit);
		else
			TargetUnit(unit);
		end
	elseif (name) then
		TargetByName(name); 
	end
end
</syntaxhighlight>
