---
title: "API TurnOrActionStop"
url: "https://turtle-wow.fandom.com/wiki/API_TurnOrActionStop"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T11:12:10Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TurnOrActionStop

End "Right click" in the 3D game world.
 TurnOrActionStop()

## Parameters
### Arguments
   ()

### Returns
   *nil*

## Details
   This function is called when right clicking in the 3D world. Most usefull it can initiate attack on the selected unit if no move occurs.

   When used alone, can cancel a "mouseturn" started by a call to [TurnOrActionStart](API TurnOrActionStart).

   IMPORTANT: The normal restrictions regarding hardware event initiations still apply to anything this function might do.

## Addon
Example from addon LookLock<syntaxhighlight lang="lua">
LookLock.WorldFrameOnMouseUp = function()
	if ( arg1 == "RightButton" ) then
		LookLock.TurnOrActionStop();
	elseif ( arg1 == "LeftButton" ) then
		LookLock.CameraOrSelectOrMoveStop();
	end
end
</syntaxhighlight>
