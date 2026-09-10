---
title: "API CameraOrSelectOrMoveStart"
url: "https://turtle-wow.fandom.com/wiki/API_CameraOrSelectOrMoveStart"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T12:27:00Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CameraOrSelectOrMoveStart

Begin "Left click" in the 3D world.
 CameraOrSelectOrMoveStart()

## Parameters
### Arguments
   ()

### Returns
   *nil*

## Details
   This function is called when left-clicking in the 3-D world. It is most useful for selecting a target for a pending spell cast.

   Calling this function clears the "mouseover" unit.

   If you hook this function, be sure to grab <code>UnitName("mouseover")</code> or target the "mouseover" unit because once the original function is called, the "mouseover" will not have a value.

   When used alone, puts you into a "mouselook" mode until [CameraOrSelectOrMoveStop](API CameraOrSelectOrMoveStop) is called.

   IMPORTANT: The normal restrictions regarding hardware event initiations still apply to anything this function might do.

## Addon
From AceHook Library<syntaxhighlight lang="lua">
  Library Definitions
----------------------------------------------------------------------------------]]

local protFuncs = {
	CameraOrSelectOrMoveStart = true, 	CameraOrSelectOrMoveStop = true,
	TurnOrActionStart = true,			TurnOrActionStop = true,
	PitchUpStart = true,				PitchUpStop = true,
	PitchDownStart = true,				PitchDownStop = true,
	MoveBackwardStart = true,			MoveBackwardStop = true,
	MoveForwardStart = true,			MoveForwardStop = true,
	Jump = true,						StrafeLeftStart = true,
	StrafeLeftStop = true,				StrafeRightStart = true,
	StrafeRightStop = true,				ToggleMouseMove = true,
	ToggleRun = true,					TurnLeftStart = true,
	TurnLeftStop = true,				TurnRightStart = true,
	TurnRightStop = true,
}
</syntaxhighlight>
