---
title: "API TogglePVP"
url: "https://turtle-wow.fandom.com/wiki/API_TogglePVP"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:48:24Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TogglePVP

Toggles PvP setting on or off.
<syntaxhighlight lang="lua">
 TogglePVP();
</syntaxhighlight>
## Parameters
### Arguments
   none

### Returns
   nil

## Example
   This asks whether the variable msg is equal to true, then toggles PvP.
<syntaxhighlight lang="lua">
 if (msg == true) then
   TogglePVP();
 end
</syntaxhighlight>

## Addon
Example from addon named Titan<syntaxhighlight lang="lua">
function PvPStatus_SlashHandler(msg)
	if ( not msg or msg == "" ) then
		if ( PVP_STATUS.isPVP == 0 ) then
			PVP_STATUS.isPVP = 1;
			PvPStatusText="Active";
			TogglePVP();
		elseif ( PVP_STATUS.isPVP == 1 ) then
			PVP_STATUS.isPVP = 0;
			PvPStatus_OnPVPUPDATE(arg1, arg2);
			TogglePVP();
		end
	end
end
</syntaxhighlight>
