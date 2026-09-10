---
title: "API GetActionBarToggles"
url: "https://turtle-wow.fandom.com/wiki/API_GetActionBarToggles"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T12:05:11Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActionBarToggles

Gets the toggle states of the extra action bars.
 bottomLeftState, bottomRightState, sideRightState, sideRight2State = GetActionBarToggles()

## Parameters
**Arguments**

   None

**Returns**

   bottomLeftState, bottomRightState, sideRightState, sideRight2State

  ; bottomLeftState
   Flag - 1 if the left-hand bottom action bar is shown, nil otherwise.
  ; bottomRightState
   Flag - 1 if the right-hand bottom action bar is shown, nil otherwise.
  ; sideRightState
   Flag - 1 if the first (outer) right side action bar is shown, nil otherwise.
  ; sideRight2State
   Flag - 1 if the second (inner) right side action bar is shown, nil otherwise.

## Addon
From addon named RaidSummon<syntaxhighlight lang="lua">
-- return button-name(s) associated with action "id"
local function GetActionBlinkTargets(id)
  local barName= nil;
  local multiName= nil;
  local buttonID= 0;

  bottomLeftState, bottomRightState, sideRightState, sideRight2State = GetActionBarToggles();
</syntaxhighlight>
