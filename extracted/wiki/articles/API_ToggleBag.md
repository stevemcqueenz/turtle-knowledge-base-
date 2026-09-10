---
title: "API ToggleBag"
url: "https://turtle-wow.fandom.com/wiki/API_ToggleBag"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:24:25Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ToggleBag

ToggleBag(bagNum);
Opens or closes the specified bag.

## Parameters
### Arguments
  ; bagNum
   Number - the [bagId](API Type BagId) you want to toggle open or close

### Returns
  ; nil

## Example
 ToggleBag(2);

## Details
   If toggling the backpack with the keyboard, this function is called when opening but NOT when closing. Closing appears to be done by ToggleBackpack(). However, if the mouse is used to close the Backpack then this function does respond.

## Addon
Example from GarbageFu plugin for Fubar<syntaxhighlight lang="lua">
function GarbageFu:OnDoubleClick(button)
	if not self.vars.initialized then return end
	if not ContainerFrame1:IsShown() then
		ToggleBackpack()
		for i = 1, 4 do
			if not self.vars.bags[i].ignore and self.vars.bags[i].numSlots > 0 then
				if not getglobal("ContainerFrame" .. (i + 1)):IsShown() then
					ToggleBag(i)
				end
			end
		end
	else
		for i = 0, 4 do
			if getglobal("ContainerFrame" .. (i + 1)):IsShown() then
				getglobal("ContainerFrame" .. (i + 1)):Hide()
			end
		end
	end
end
</syntaxhighlight>
