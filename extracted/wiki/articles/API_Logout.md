---
title: "API Logout"
url: "https://turtle-wow.fandom.com/wiki/API_Logout"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:29:46Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API Logout

Logs you out of the game. <syntaxhighlight lang="lua">
Logout()
</syntaxhighlight>

## Parameters
**Arguments**

   ()

**Returns**

   nil

## Details
   In macros you can also use **/Logout**

## Addon
Example from addon named Warmup<syntaxhighlight lang="lua">
function Warmup:OnEvent()
	if self.eventvals then self.eventvals[event] = (self.eventvals[event] or 0) + 1 end

	if (event == "ADDON_LOADED") then self:ADDON_LOADED()
	elseif (event == "VARIABLES_LOADED") then self:VARIABLES_LOADED()
	elseif (event == "PLAYER_LOGIN") then self:PLAYER_LOGIN()
	elseif (event == "PLAYER_ENTERING_WORLD") then self:PLAYER_ENTERING_WORLD()
	elseif (event == "PLAYER_LEAVING_WORLD") then self:PLAYER_LEAVING_WORLD()
	elseif (event == "PLAYER_LOGOUT") then self:PLAYER_LOGOUT() end
end
</syntaxhighlight>
