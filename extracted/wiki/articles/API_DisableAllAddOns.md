---
title: "API DisableAllAddOns"
url: "https://turtle-wow.fandom.com/wiki/API_DisableAllAddOns"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:03:01Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API DisableAllAddOns

Disable all AddOns for subsequent sessions.
 DisableAllAddOns()

## Parameters
### Arguments
   ()

### Returns
   *nil*

## Addon
Example from addon named ElvUI<syntaxhighlight lang="lua">
function E:LuaError(msg)
	msg = lower(msg)
	if msg == "on" then
		DisableAllAddOns()
		EnableAddOn("!Compatibility")
		EnableAddOn("!DebugTools")
		EnableAddOn("ElvUI")
		EnableAddOn("ElvUI_Config")
		SetCVar("ShowErrors", 1)
		ReloadUI()
	elseif msg == "off" then
		SetCVar("ShowErrors", 0)
		E:Print("Lua errors off.")
	else
		E:Print("/luaerror on - /luaerror off")
	end
end
</syntaxhighlight>
