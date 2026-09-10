---
title: "API GetMinimapZoneText"
url: "https://turtle-wow.fandom.com/wiki/API_GetMinimapZoneText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-28T14:51:13Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetMinimapZoneText

Returns the zone text, that is displayed over the minimap

 GetMinimapZoneText();

----
***Arguments***

  *none*

----
***Returns***

  String minimapzonetext
  ;minimapzonetext : string, that ist currently shown over the minimap

----
***Example***
 local minimapzonetext = GetMinimapZoneText();
 

***Result***
 "Trade District"

----
***Description***

   Returns the zone text, that is displayed over the minimap. The event <tt>"MINIMAP_ZONE_CHANGED"</tt> is triggered, when the text changes. It equals [GetSubZoneText](API_GetSubZoneText) if the player is in a subzone and [GetZoneText](API_GetZoneText) if the player is not in a subzone.

## Macros
Attack notification<syntaxhighlight lang="lua">
/run z="target" x,y=GetPlayerMapPosition("player");SendChatMessage(string.format("%s found at %s! Name:%s Level: %s Type:%s (%d, %d)",UnitClassification(z),GetMinimapZoneText(),UnitName(z),UnitLevel(z),UnitClass(z),1+x*100,1+y*100),"CHANNEL",nil,3); 
</syntaxhighlight>Send your current location into PARTY chat:<syntaxhighlight lang="lua">
/run local x,y=GetPlayerMapPosition("player") SendChatMessage("I'm at "..GetZoneText().." - "..GetMinimapZoneText().." - "..math.floor((x*100)+0,5).." "..math.floor((y*100)+0,5),"PARTY")
</syntaxhighlight>Send your current location into BATTLEGROUND chat:<syntaxhighlight lang="lua">
/run local x,y=GetPlayerMapPosition("player") SendChatMessage("I'm at "..GetZoneText().." - "..GetMinimapZoneText().." - "..math.floor((x*100)+0,5).." "..math.floor((y*100)+0,5),"BATTLEGROUND")
</syntaxhighlight>

## Addon
Example from addon named Soundtrack<syntaxhighlight lang="lua">
function SoundtrackFrameAddZoneButton_OnClick()
	Soundtrack.Events.Add("Zone", GetSubZoneText());
	Soundtrack.Events.Add("Zone", GetRealZoneText());
	Soundtrack.Events.Add("Zone", GetMinimapZoneText());
	
	-- Select the newly added area.
	if (GetSubZoneText() ~= nil) then
		SoundtrackFrame_SelectedEvent = GetSubZoneText();
	else
		SoundtrackFrame_SelectedEvent = GetRealZoneText();
	end
	
	SoundtrackFrame_RefreshEvents();
end
</syntaxhighlight>
