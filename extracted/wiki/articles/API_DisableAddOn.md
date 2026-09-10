---
title: "API DisableAddOn"
url: "https://turtle-wow.fandom.com/wiki/API_DisableAddOn"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T02:59:26Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API DisableAddOn

Disable an AddOn for subsequent sessions.
<syntaxhighlight lang="lua">
 DisableAddOn(index or "name")
</syntaxhighlight>
## Parameters
### Arguments
   (index or "name")

  ; index
   Integer - The index of the AddOn to disable in the user's AddOn list.
  ; name
   String - The name of the AddOn to be disabled.

### Returns
   *nil*

## Addon
Example from addon named ElvUI<syntaxhighlight lang="lua">
function E:DisableAddon(addon)
	local _, _, _, _, _, reason, _ = GetAddOnInfo(addon)
	if reason ~= "MISSING" then
		DisableAddOn(addon)
		ReloadUI()
	else
		E:Print(format("Addon '%s' not found.", addon))
	end
end
</syntaxhighlight>
