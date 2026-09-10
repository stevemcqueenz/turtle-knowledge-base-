---
title: "API ToggleSheath"
url: "https://turtle-wow.fandom.com/wiki/API_ToggleSheath"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:51:40Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ToggleSheath

Toggles sheathed or unsheathed weapons.
<syntaxhighlight lang="lua">
 ToggleSheath();
</syntaxhighlight>
## Parameters
### Arguments
   none

### Returns
   nil

## Example
   This asks whether the variable msg is equal to true, then toggles sheath.
<syntaxhighlight lang="lua">
 if (msg == true) then
   ToggleSheath();
 end
</syntaxhighlight>

## Macro
This macro will make your character do the drink animation with a little more flavor. The second line toggles weapon sheathing, but this never occurs due to the animation being canceled by the drink command. It is just to add the sound effect of drawing the weapon, as if producing the flask had made a sound. Feel free to change the first line to describe your flask, wine-skin, or the like however you want.<syntaxhighlight lang="lua">
/e produces a battered silver flask.
/run ToggleSheath()
/drink
</syntaxhighlight>
