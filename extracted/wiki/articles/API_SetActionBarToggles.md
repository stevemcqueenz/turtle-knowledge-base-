---
title: "API SetActionBarToggles"
url: "https://turtle-wow.fandom.com/wiki/API_SetActionBarToggles"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T11:00:53Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetActionBarToggles

Set the desired state of the extra action bars.
 SetActionBarToggles(bottomLeftState, bottomRightState, sideRightState, sideRight2State)

## Parameters
### Arguments
   (bottomLeftState, bottomRightState, sideRightState, sideRight2State)

  ; bottomLeftState
   Flag - 1 if the left-hand bottom action bar is to be shown, 0 or nil otherwise.
  ; bottomRightState
   Flag - 1 if the right-hand bottom action bar is to be shown, 0 or nil otherwise.
  ; sideRightState
   Flag - 1 if the first (outer) right side action bar is to be shown, 0 or nil otherwise.
  ; sideRight2State
   Flag - 1 if the second (inner) right side action bar is to be shown, 0 or nil otherwise.

### Returns
   *nil*

## Details
   Note that this doesn't actually change the action bar states directly, it simply registers the desired states for the next time the game is loaded. The states during play are in the variables SHOW_MULTI_ACTIONBAR_1, SHOW_MULTI_ACTIONBAR_2, SHOW_MULTI_ACTIONBAR_3, SHOW_MULTI_ACTIONBAR_4, and reflected by calling MultiActionBar_Update().

## Addon
Example from addon named Bartender2<syntaxhighlight lang="lua">
function Bartender:EnableAllBars()
	SHOW_MULTI_ACTIONBAR_1 = 1
	SHOW_MULTI_ACTIONBAR_2 = 1
	SHOW_MULTI_ACTIONBAR_3 = 1
	SHOW_MULTI_ACTIONBAR_4 = 1
	MultiActionBar_Update()
	SetActionBarToggles(1,1,1,1)
end
</syntaxhighlight>
