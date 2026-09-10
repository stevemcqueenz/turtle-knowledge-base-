---
title: "API GetMouseFocus"
url: "https://turtle-wow.fandom.com/wiki/API_GetMouseFocus"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-28T18:45:52Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetMouseFocus

Returns the frame that is currently receiving mouse events.  The frame must have enableMouse="true"
<syntaxhighlight lang="lua">
 frameID = GetMouseFocus();
</syntaxhighlight>
## Parameters
### Arguments
   none

### Results
  ; frameID
   Table - The frame that currently has the mouse focus.

## Example
You can get the name of the mouse-enabled frame beneath the pointer with this:
<syntaxhighlight lang="lua">
 message( "The mouse is over " .. GetMouseFocus():GetName() );
</syntaxhighlight>
### Result
<syntaxhighlight lang="lua">
 The mouse is over WorldFrame
</syntaxhighlight>

## Macros
Print the ID of the bag slot that is mouse focused<syntaxhighlight lang="lua">
/run DEFAULT_CHAT_FRAME:AddMessage(GetMouseFocus():GetParent():GetID()..", "..GetMouseFocus():GetID())
</syntaxhighlight>Discover the names of mouse focused UI element<syntaxhighlight lang="lua">
/script DEFAULT_CHAT_FRAME:AddMessage( GetMouseFocus():GetName() );
</syntaxhighlight>Mouseover a action bar button and use this macro to get the ID<syntaxhighlight lang="lua">
/run local a=GetMouseFocus()message(ActionButton_GetPagedID(a))
</syntaxhighlight>

## Addon
Example from addon named DiscordArt<syntaxhighlight lang="lua">
function DART_Update_FrameFinder()
	local obj = GetMouseFocus();
	local text = DART_TEXT.FrameFinder;
	if (obj and obj ~= WorldFrame and obj:GetName()) then
		text = text..obj:GetName();
		if (obj:GetParent()  and obj:GetParent() ~= WorldFrame and obj:GetParent():GetName() ) then
			text = text..DART_TEXT.Parent..obj:GetParent():GetName();
			if (obj:GetParent():GetParent() and obj:GetParent():GetParent() ~= WorldFrame and obj:GetParent():GetParent():GetName()) then
				text = text..DART_TEXT.ParentsParent..obj:GetParent():GetParent():GetName();
			end
		end
	end
</syntaxhighlight>
