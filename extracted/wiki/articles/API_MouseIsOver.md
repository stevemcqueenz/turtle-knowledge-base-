---
title: "API MouseIsOver"
url: "https://turtle-wow.fandom.com/wiki/API_MouseIsOver"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T12:53:55Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["FrameXML functions"]
---
# API MouseIsOver

Determines whether or not the mouse is over the specified frame.
<syntaxhighlight lang="lua">
 isOver = MouseIsOver(frame, topOffset, bottomOffset, leftOffset, rightOffset);
</syntaxhighlight>
## Parameters
### Arguments
   (frame, [topOffset, bottomOffset, leftOffset, rightOffset])

  ; frame
   Frame - The frame (or frame-derived object such as Buttons, etc) to test with
  ; topOffset
   (optional) Number - distance from the top to include in calculations
  ; bottomOffset
   (optional) Number - distance from the bottom to include in calculations
  ; leftOffset
   (optional) Number - distance from the left to include in calculations
  ; rightOffset
   (optional) Number - distance from the right to include in calculations

### Returns
  ; isOver
   [Boolean](API Type Boolean) - A <code>true</code> value if the mouse is over the frame, <code>false</code> otherwise.

## Example
You can determine whether or not the mouse is over the minimap using the below.
<syntaxhighlight lang="lua">
 if (MouseIsOver(MinimapCluster)) then
    -- do something
 end
</syntaxhighlight>
## Details
   It doesn't matter if the frame is hidden or not, if the mouse would be over it when you :Show() it then this function does return true.

## Addon
Example from addon named ItemRack<syntaxhighlight lang="lua">
-- formerly ItemRack_MenuFrame_OnUpdate
function Rack.MenuFrame()

	local over,frame
	
	for i=1,table.getn(Rack.MenuFrameSources) do
		frame = getglobal(Rack.MenuFrameSources[i])
		over = over or (frame and MouseIsOver(frame))
	end

	if MouseIsOver(ItemRack_SetsFrame) and
	  (string.sub(GetMouseFocus():GetName() or "",1,17)=="ItemRack_Sets_Inv") and
	  GetMouseFocus():GetAlpha()>.5 then
		over = 1
	end

	if not over then
		ItemRack_MenuFrame:Hide()
	end
end
</syntaxhighlight>
