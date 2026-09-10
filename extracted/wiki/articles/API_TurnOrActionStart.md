---
title: "API TurnOrActionStart"
url: "https://turtle-wow.fandom.com/wiki/API_TurnOrActionStart"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T11:08:31Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TurnOrActionStart

Begin "Right click" in the 3D game world.
 TurnOrActionStart()

## Parameters
### Arguments
   ()

### Returns
   *nil*

## Details
   This function is called when right clicking in the 3D world.

   Calling this function clears the "mouseover" unit.

   If you hook this function be sure to grab UnitName("mouseover") or target the "mouseover" unit because once the original function is called, the "mouseover" will not have a value.

   When used alone, puts you into a "mouseturn" mode until [TurnOrActionStop](API TurnOrActionStop) is called.

   IMPORTANT: The normal restrictions regarding hardware event initiations still apply to anything this function might do.

## Addon
Example from addon LookLock<syntaxhighlight lang="lua">
LookLock.WorldFrameOnMouseDown = function ()
	if ( arg1 == "RightButton" ) then
		LookLock.TurnOrActionStart();
	elseif ( arg1 == "LeftButton" ) then
		LookLock.CameraOrSelectOrMoveStart();
	end
end
</syntaxhighlight>
