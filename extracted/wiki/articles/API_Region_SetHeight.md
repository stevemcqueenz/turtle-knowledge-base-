---
title: "API Region SetHeight"
url: "https://turtle-wow.fandom.com/wiki/API_Region_SetHeight"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:34:18Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# API Region SetHeight

Sets the desired height of a frame-based object.

 obj:SetHeight(*height*);

----
  -*Arguments***

  - height : The desired height to set the frame-based object to (use 0 to clear the desired height). Note that a frame whose height is determined based on its anchors will not use this height.**

----
  -*Returns***

  ;nil

----
  -*Example***
 myAddonOptionsParent = myAddonOptions:GetParent();
 *myAddonOptions:SetHeight(*myAddonOptionsParent:GetHeight() / 2*)*;

  -*Result***
   The frame named 'myAddonOptions' would be set to half the height of its parent frame.

----
  -*Description***

   Sets the height of a frame-based object.
