---
title: "API GetZonePVPInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetZonePVPInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-28T15:05:39Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetZonePVPInfo

Returns PVP info for the current zone - doesnt seems to work at pve servers
<syntaxhighlight lang="lua">
 GetZonePVPInfo();
</syntaxhighlight>
----
***Arguments***

  *none*

----
***Returns***

  String pvpType, String factionName, Boolean isArena
  ;pvpType : "friendly", if the zone is controlled by the faction the player belongs to
"contested", if the zone is contested
"hostile", if the zone is controlled by the opposing faction
  ;factionName : the faction, that controls the zone, if pypType is "friendly" or "hostile"
  ;isArena : true, if the player is in an arena, false otherwise

----
***Example***
<syntaxhighlight lang="lua">
 local pvpType, factionName, isArena = GetZonePVPInfo();
 
</syntaxhighlight>
***Result***
<syntaxhighlight lang="lua">
 "friendly", "Alliance", false
</syntaxhighlight>
----
***Description***

   Returns PVP info for the current zone.

## Addon
Example from addon named ElvUI<syntaxhighlight lang="lua">
function M:GetLocTextColor()
	local pvpType = GetZonePVPInfo()
	if pvpType == "friendly" then
		return 0.05, 0.85, 0.03
	elseif pvpType == "hostile" then
		return 0.84, 0.03, 0.03
	elseif pvpType == "contested" then
		return 0.9, 0.85, 0.05
	else
		return 0.84, 0.03, 0.03
	end
end
</syntaxhighlight>
