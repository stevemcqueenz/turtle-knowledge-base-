---
title: "API EnumerateFrames"
url: "https://turtle-wow.fandom.com/wiki/API_EnumerateFrames"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T12:21:49Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API EnumerateFrames

Returns frame which follows current frame, or first frame if argument is nil.
<syntaxhighlight lang="lua">
 nextFrame = EnumerateFrames({currentFrame})
</syntaxhighlight>
## Parameters
### Arguments
   ({currentFrame})

  ; currentFrame
   Table - current frame or nil to get first frame

### Returns
   nextFrame

  ; nextFrame
   Table - the frame following currentFrame or nil if no more frames

## Example
<syntaxhighlight lang="lua">
 local frame = EnumerateFrames()
 while frame do
     if frame:IsVisible() and MouseIsOver(frame) then
         DEFAULT_CHAT_FRAME:AddMessage(frame:GetName())
     end
     frame = EnumerateFrames(frame)
 end
</syntaxhighlight>
#### Result
Prints the names of all visible frames under the mouse cursor to the default chat frame.

## Addon
Example from addon named DevTools<syntaxhighlight lang="lua">
local function UpdateFrameStack(visFrame, x, y)
   if (not (x and y)) then
      x,y = GetCursorPosition();
   end
   local nf = EnumerateFrames();
   local f;
   table.setn(frameStackList, 0);
   for k in frameStackLevels do
      frameStackLevels[k] = nil;
      frameStackStrata[k] = nil;
   end
   while (nf) do
      f,nf = nf,EnumerateFrames(nf);
      local es = f:GetEffectiveScale() or 1;
      if ((x >= (f:GetLeft() or -1)*es) and (x <= (f:GetRight() or -2)*es) and
	  (y >= (f:GetBottom() or -1)*es) and (y <= (f:GetTop() or -2)*es))
      then
	 if (f:IsVisible()) then
	    local n = f:GetName();
	    if (n and (getglobal(n) == f)) then
	       -- Name is ok
	    elseif (n) then
	       n =  tostring(f) .. "(" .. n .. ")";
	    else
	       n =  tostring(f);
	    end
</syntaxhighlight>
