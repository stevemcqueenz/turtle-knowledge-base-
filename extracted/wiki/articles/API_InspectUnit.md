---
title: "API InspectUnit"
url: "https://turtle-wow.fandom.com/wiki/API_InspectUnit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T15:28:04Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["FrameXML functions"]
---
# API InspectUnit

Inspects the specified / selected "unit".
<syntaxhighlight lang="lua">
 InspectUnit("unit")
</syntaxhighlight>
## Parameters
### Arguments
   ("unit")

  ; unit
   String - The [UnitId](API Type UnitId) to select as a target.

### Returns
   nil

### Example
<syntaxhighlight lang="lua">
 if (UnitPlayerControlled("target") and CheckInteractDistance("target", 1) and not

 UnitIsUnit("player", "target")) then
   InspectUnit("target")
 end
</syntaxhighlight>
## Info
**UnitPlayerControlled("unit")**
   [UnitPlayerControlled("unit")](API UnitPlayerControlled) - Returns true if the specified unit is controlled by a player, false otherwise.
**UnitIsUnit("unit", "otherunit")**
   [UnitIsUnit("unit", "otherUnit")](API UnitIsUnit) - Returns true if the two specified units refer to the same unit (e.g., "player" and "target" can refer to the same unit), false otherwise.
**CheckInteractDistance("unit", distIndex)**
   [CheckInteractDistance](API CheckInteractDistance)("[unit](API Type UnitId)",distIndex) - Returns true if you are in range of the specified unit to perform the action specified by distIndex. Otherwise, returns false.

## Macro
Quick inspect player<syntaxhighlight lang="lua">
/run if (UnitPlayerControlled("target") and CheckInteractDistance("target", 1) and not UnitIsUnit("player", "target")) then InspectUnit("target")end
</syntaxhighlight>

## Addon
Example from addon named WIM<syntaxhighlight lang="lua">
function WIM_ShorcutButton_Clicked()
	local cmd = this.cmd;
	local theUser = this:GetParent():GetParent().theUser;
	if(cmd == "target") then
		TargetByName(theUser, true)
	elseif(cmd == "invite") then
		InviteByName(theUser)
	elseif(cmd == "trade") then
		TargetByName(theUser, true)
		InitiateTrade("target")
	elseif(cmd == "inspect") then
		TargetByName(theUser, true)
		InspectUnit("target")
	elseif(cmd == "ignore") then
		getglobal(this:GetParent():GetParent():GetName().."IgnoreConfirm"):Show();
	end
end
</syntaxhighlight>
