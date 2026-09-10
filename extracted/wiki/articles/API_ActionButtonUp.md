---
title: "API ActionButtonUp"
url: "https://turtle-wow.fandom.com/wiki/API_ActionButtonUp"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T19:16:14Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ActionButtonUp

ActionButtonUp(buttonID [, onSelf]);
Releases the specified action button.

## Parameters
### Arguments
   (Number buttonID [,onSelf])

  ; buttonID
   The button ID of the button to release (Integers from 1 to 12)
  ; onSelf
   if evaluates to true, casts on yourself no matter the target (See [API CastSpellByName](API CastSpellByName))

### Returns
  ; nil

## Example
 ActionButtonUp(1);

### Result
  # Checks if BonusActionBarFrame is Visible.
  # On True -
  ## Checks if BonusActionButton1 is in state PUSHED.
  ## On True -
  ### Changes BonusActionButton1 to state NORMAL.
  ### If currently editing/writing macro saves the action.
  ### Uses the action associated with the BonusActionButton1
  ### Checks if it's the current action.
  ### If True -
  #### Changes Button 1's SetChecked value to 1.
  ### Else -
  #### Changes Button 1's SetChecked value to 0.
  # Returns - Ending Function call.
  # Checks if ActionButton1 is in state PUSHED.
  # On True -
  ## Changes ActionButton1 to state NORMAL.
  ## If currently editing/writing macro saves the action.
  ## Uses the action associated with the ActionButton1.
  ## Checks if it's the current action.
  ## If True -
  ### Changes Button 1's SetChecked value to 1.
  ## Else -
  ### Changes Button 1's SetChecked value to 1.

## Description
   Changes buttonID's state to NORMAL.
   *NOTE:* Works with ActionBarFrame & BonusActionBarFrame.

## Addon
From addon named BibMod<syntaxhighlight lang="lua">
--Overriding ActionButtonDown() and ActionButtonUp() too, but may change this later
function ActionButtonDown(id)
	PressBibActionButton(id);
end

function ActionButtonUp(id, onSelf)
	ReleaseBibActionButton(id, onSelf);
end
</syntaxhighlight>
