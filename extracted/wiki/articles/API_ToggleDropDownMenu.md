---
title: "API ToggleDropDownMenu"
url: "https://turtle-wow.fandom.com/wiki/API_ToggleDropDownMenu"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T12:53:34Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["FrameXML functions"]
---
# API ToggleDropDownMenu

<syntaxhighlight lang="lua">
 ToggleDropDownMenu(level, value, dropDownFrame, anchorName, xOffset, yOffset)
</syntaxhighlight>
Toggles a dropdown menu.

## Parameters
### Arguments
  ; level
   Number - Nesting level of this dropdown.
  ; value
   Object - Value of the dropdown item (if <code>level</code> > 1).
  ; dropDownFrame
   Object - The frame to toggle (not its name!).  This object should be derived from <code>UIDropDownMenuTemplate</code>.
  ; anchorName
   String - Sets the <code>relativeTo</code> member of this frame.
  ; xOffset
   Number - Sets the x offset.
  ; yOffset
   Number - Sets the y offset.

### Returns
  ; nil

## Example
<syntaxhighlight lang="lua">
 ToggleDropDownMenu(1, nil, PlayerFrameDropDown, "PlayerFrame", 106, 27)
</syntaxhighlight>

## Addon
Example from addon named Rinse<syntaxhighlight lang="lua">
function RinseSkipListAddGroup_OnClick()
	UIDropDownMenu_Initialize(RinseGroupsDropDown, GroupMenu, "MENU")
	ToggleDropDownMenu(1, "Rinse_SkipList", RinseGroupsDropDown, this, 0, 0)
end

function RinseSkipListAddClass_OnClick()
	UIDropDownMenu_Initialize(RinseClassesDropDown, ClassMenu, "MENU")
	ToggleDropDownMenu(1, "Rinse_SkipList", RinseClassesDropDown, this, 0, 0)
end

function RinsePrioListAddGroup_OnClick()
	UIDropDownMenu_Initialize(RinseGroupsDropDown, GroupMenu, "MENU")
	ToggleDropDownMenu(1, "Rinse_PrioList", RinseGroupsDropDown, this, 0, 0)
end

function RinsePrioListAddClass_OnClick()
	UIDropDownMenu_Initialize(RinseClassesDropDown, ClassMenu, "MENU")
	ToggleDropDownMenu(1, "Rinse_PrioList", RinseClassesDropDown, this, 0, 0)
end
</syntaxhighlight>
