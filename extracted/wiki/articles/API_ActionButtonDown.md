---
title: "API ActionButtonDown"
url: "https://turtle-wow.fandom.com/wiki/API_ActionButtonDown"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T08:34:06Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ActionButtonDown

## UI ActionButtonDown(id)
 ActionButtonDown(buttonID);
Presses the specified action button.

## Parameters
**Arguments**

   (Number buttonID)
  ; buttonID
   The button ID of the button to push

**Returns**

  ; nil

## Example
 ActionButtonDown(1);
**Result**

  # Checks if BonusActionBarFrame is visible.
  # If true -
  ## Checks if BonusActionButton1 is in state NORMAL.
  ## If true -
  ### Changes BonusActionButton1's state to PUSHED.
  ## Returns.
  # Checks if ActionButton1 is in state NORMAL.
  # If true -
  ## Changes ActionButton1's state to PUSHED.

## Description
   Changes buttonID's state to PUSHED.
   NOTE: Works with ActionBarFrame & BonusActionBarFrame.

## Example
<syntaxhighlight lang="lua">
		if ( keystate == "down" ) then
			ActionButtonDown(13);
		else
			ActionButtonUp(13);
		end
</syntaxhighlight>
