---
title: "API CameraOrSelectOrMoveStop"
url: "https://turtle-wow.fandom.com/wiki/API_CameraOrSelectOrMoveStop"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T12:20:47Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CameraOrSelectOrMoveStop

End "Left click" in the 3D game world.
 CameraOrSelectOrMoveStop([stickyFlag])

## Parameters
### Arguments
   ([stickyFlag])

  ; stickyFlag
   Flag *(optional)* - If present and set then any camera offset is 'sticky' and remains until explicitly cancelled.

### Returns
   *nil*

## Details
   This function is called when left clicking in the 3-D world.

   When used alone, can cancel a "mouselook" started by a call to [CameraOrSelectOrMoveStart](API CameraOrSelectOrMoveStart).

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
