---
title: "API GetSubZoneText"
url: "https://turtle-wow.fandom.com/wiki/API_GetSubZoneText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-28T15:01:54Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSubZoneText

Returns the subzone name.
<syntaxhighlight lang="lua">
 GetSubZoneText();
</syntaxhighlight>
----
***Arguments***

  *none*

----
***Returns***

  String subzone
  ;subzone : string, subzone name or an empty string (if not in a subzone).

----
***Example***
<syntaxhighlight lang="lua">
 local subzone = GetSubZoneText();
 message(subzone);
</syntaxhighlight>
***Result***
<syntaxhighlight lang="lua">
 Message box appears with current subzone text.
</syntaxhighlight>
----
***Description***

   Returns the subzone text, if the player is a subzone. The event '"ZONE_CHANGED"' is triggered when the text changes. See also the related functions [GetMinimapZoneText](API_GetMinimapZoneText) and [GetZoneText](API_GetZoneText).
   Additional note: Blizzard also registers the event **ZONE_CHANGED_INDOORS**. If you know what this event is used for, please edit the page.

## Macro
Tells you your current coordinates<syntaxhighlight lang="lua">
/script SetMapToCurrentZone() local x,y=GetPlayerMapPosition("player") DEFAULT_CHAT_FRAME:AddMessage(format("%s, %s: %.1f, %.1f",GetZoneText(),GetSubZoneText(),x*100,y*100))
</syntaxhighlight>

## Addon
Example from addon named FishingBuddy<syntaxhighlight lang="lua">
-- handle the vagaries of zones and subzones
local function GetZoneInfo()
   local zone = GetRealZoneText();
   local subzone = GetSubZoneText();
   if ( not zone or zone == "" ) then
      zone = FishingBuddy.UNKNOWN;
   end
   if ( not subzone or subzone == "" ) then
      subzone = zone;
   end
   return zone, subzone;
end
</syntaxhighlight>
