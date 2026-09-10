---
title: "API GetZoneText"
url: "https://turtle-wow.fandom.com/wiki/API_GetZoneText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-28T15:15:09Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetZoneText

Returns the zone text.
<syntaxhighlight lang="lua">
 GetZoneText();
</syntaxhighlight>
----
  -*Arguments***

  *none*

----
  -*Returns***

  
  ;zonetext : String - zone name (localized).

----
  -*Example***
<syntaxhighlight lang="lua">
 local zonetext = GetZoneText();
 message(zonetext);
</syntaxhighlight>
  -*Result***
   Message box appears displaying your current zone.

----
  -*Description***

   Returns the zone text, in which the player currently is. The event **ZONE_CHANGED_NEW_AREA** is triggered when the text changes. See also the related functions [GetSubZoneText](API_GetSubZoneText) and [GetMinimapZoneText](API_GetMinimapZoneText).
   Additional note: Blizzard also registers the event **ZONE_CHANGED_INDOORS**. If you know what this event is used for, please edit this page.

   This is just a guess, but I imagine it dismounts you for one.  -- lCine7ic

## Macro
Tells you your current coordinates<syntaxhighlight lang="lua">
/script SetMapToCurrentZone() local x,y=GetPlayerMapPosition("player") DEFAULT_CHAT_FRAME:AddMessage(format("%s, %s: %.1f, %.1f",GetZoneText(),GetSubZoneText(),x*100,y*100))
</syntaxhighlight>AQ40 Mount combined with regular mount<syntaxhighlight lang="lua">
/run if GetZoneText()=="Ahn'Qiraj"then CastSpellByName("Summon Green Qiraji Battle Tank")else CastSpellByName("Riding Turtle")end
</syntaxhighlight>Send your current location into PARTY chat<syntaxhighlight lang="lua">
/run local x,y=GetPlayerMapPosition("player") SendChatMessage("I'm at "..GetZoneText().." - "..GetMinimapZoneText().." - "..math.floor((x*100)+0,5).." "..math.floor((y*100)+0,5),"PARTY")
</syntaxhighlight>

## Addon
Example from addon named Lockport<syntaxhighlight lang="lua">
				if not playercombat and not targetcombat then
					count = count-1
					base_message 			= "Summoning " .. name .. ""
					base_whisper_message    = "Summoning you"
					zone_message            = " to " .. GetZoneText()
					subzone_message         = " - " .. GetSubZoneText()
					shards_message          = " [" .. count .. " shards left]"
					message                 = base_message
					whisper_message         = base_whisper_message

					TargetUnit(UnitID)
</syntaxhighlight>
