---
title: "API Region SetPoint"
url: "https://turtle-wow.fandom.com/wiki/API_Region_SetPoint"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:32:15Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# API Region SetPoint

Sets the current attachment point of an UI component.  Any of the following formats are valid
 obj:SetPoint(point);
 obj:SetPoint(point, frame);
 obj:SetPoint(point, frame, relativePoint);
 obj:SetPoint(point, x, y);
 obj:SetPoint(point, frame, relativePoint , x, y);

## Parameters
### Arguments
** point**
   The point on your object to use for attaching the obj (see [API Positions](API Positions))  (i.e.  bind the left side of your frame)

  ; frame
   The name of the frame to attach the obj to - an actual frame variable can also be used (can be "UIParent"), or nil to anchor relative to the whole screen.
   Defaults to the parent of *obj* when not specified, or the screen (not UIParent) when obj does not have a parent

  ; relativePoint
   The relative point to attach *obj* to (see [API Positions](API Positions))  (i.e. bind your frame to the left side of the parent)
   Defaults to the value of *point* when not specified.

  ; x
   The X offset (-5 means 5 units left, 5 means 5 units right)
   Defaults to 0 when not specified
   Units are relative to the screen with the frame's effective scale.

  ; y
   The Y offset (-5 means 5 units down, 5 means 5 units up)
   Defaults to 0 when not specified
   Units are relative to the screen with the frame's effective scale.

### Returns
  ; nil

## Examples
The following are all equivalent.
 MainMenuBar:SetPoint("BOTTOMLEFT", "UIParent", "BOTTOMLEFT", 0, 0);
 MainMenuBar:SetPoint("BOTTOMLEFT", UIParent, "BOTTOMLEFT", 0, 0);
 MainMenuBar:SetPoint("BOTTOMLEFT", "UIParent", "BOTTOMLEFT");
 MainMenuBar:SetPoint("BOTTOMLEFT", "UIParent");
The following is equivalent to the above, given that the parent frame of MainMenuBar is UIParent.
 MainMenuBar:SetPoint("BOTTOMLEFT");
 MainMenuBar:SetPoint("BOTTOMLEFT", 0, 0);

## Details
- You will have to do a obj:ClearAllPoints() before using obj:SetPoint(...), if you expect the frame to actually move. -- [Maisha](User:Maisha)

- As of 1.11 or so, there seems to be an [exponential-time increase](API Region SetPoint/Exponential time) if you anchor chains of objects with more than one point.
