---
title: "API EnableAllAddOns"
url: "https://turtle-wow.fandom.com/wiki/API_EnableAllAddOns"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:09:52Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API EnableAllAddOns

Enable all AddOns for subsequent sessions.
 EnableAllAddOns()

## Parameters
### Arguments
   ()

### Returns
   *nil*

## Addon
Example from addon library named Ace<syntaxhighlight lang="lua">
function AceCommands:EnableAddon(addon)
	if( strlower(addon) == ACE_TEXT_ALL ) then
		EnableAllAddOns()
		self:msg(ACE_CMD_ADDON_ENABLED_ALL)
	elseif( ace.addons.list[strlower(addon)] ) then
		EnableAddOn(addon)
		self:msg(ACE_CMD_ADDON_ENABLED, addon)
	else
		self:msg(ACE_CMD_ADDON_NOTFOUND, addon)
	end
end
</syntaxhighlight>
