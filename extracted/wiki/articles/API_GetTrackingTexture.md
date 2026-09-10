---
title: "API GetTrackingTexture"
url: "https://turtle-wow.fandom.com/wiki/API_GetTrackingTexture"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T14:35:34Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetTrackingTexture

Return the texture of the active tracking buff if one is active.
 "icon" = GetTrackingTexture ()
----

  - *Arguments***

None
----

  - *Returns***

  -: icon : The texture of the active tracking buff, or *nil* is no tracking buff is active**

----

  - *Example*<syntaxhighlight lang="lua">**
local icon = GetTrackingTexture ()
if icon then
  myTexture:SetTexture (icon)
end
</syntaxhighlight>

## Macro
Find Minerals, else Herbs<syntaxhighlight lang="lua">
/run local g,h=GetTrackingTexture(),"INV_Misc_Flower_02";if strfind(g,h)then CastSpellByName("Find Minerals")else CastSpellByName("Find Herbs")end
</syntaxhighlight>Find Treasure/Minerals<syntaxhighlight lang="lua">
/run local s,t,c={'Find Treasure','Find Minerals'},{'Racial_Dwarf_FindTreasure','Spell_Nature_Earthquake'},GetTrackingTexture()foreach(t,function(k,v)if not c or strfind(c,v) then CastSpellByName(k<getn(t)and s[k+1]or s[1]) end end)
</syntaxhighlight>

## Addon
From addon named bc_TrackingMenu<syntaxhighlight lang="lua">
function bcTM_OnEvent()
	if (event == "PLAYER_AURAS_CHANGED") then
		-- When the user changes their active tracking ability, do the following.
		
		-- Hide the default tracking icon.
		if (MiniMapTrackingFrame) then
			MiniMapTrackingFrame:Hide();
		end
		
		-- Get the icon for the currently active tracking ability.
		local icon = GetTrackingTexture();
		if ( icon ) then
			-- Set our icon to match the active ability.
			bcTM_IconTexture:SetTexture(icon);
		else
			-- No ability active... Set our icon to something else.
			bcTM_IconTexture:SetTexture("Interface\\Icons\\INV_Misc_Map_01");
		end
		
		return;
	end
	
	if (event == "VARIABLES_LOADED") then
		bcTM_InitializeOptions();
		bcTM_InitializeMenu();
		return;
	end
	
	if (event == "SPELLS_CHANGED" or event == "LEARNED_SPELL_IN_TAB") then
		-- When the player learns a new spell, re-initialize the menu's contents.
		bcTM_InitializeMenu();
		return;
	end
end
</syntaxhighlight>
