---
title: "API EnableAddOn"
url: "https://turtle-wow.fandom.com/wiki/API_EnableAddOn"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:06:23Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API EnableAddOn

Enable an AddOn for subsequent sessions.
 EnableAddOn(index or "name")

## Parameters
### Arguments
   (index or "name")

  ; index
   Integer - The index of the AddOn to enable in the user's AddOn list.
  ; name
   String - The name of the AddOn to be enabled.

### Returns
   *nil*

## Addon
Example from addon named CS_AddOnOrganizer<syntaxhighlight lang="lua">
function CS_AddOnOrganizer_AcceptButton_OnClick()
	local i;
	local numaddons = GetNumAddOns();
	local IsChanges = 0;
	local SaveIndex = 1;
	for i=1, numaddons, 1 do	
		local name, title, notes, enabled, loadable, reason, security = GetAddOnInfo(i);
		if(CS_AddOnOrganizer_AddOnList[i] ~= enabled) then
			if (CS_AddOnOrganizer_AddOnList[i] == 1) then
				EnableAddOn(i);
			else
				DisableAddOn(i);
			end
			IsChanges = 1;
		end
	end
	CS_AddOnOrganizer_ListShowHide();
	if(IsChanges == 1)then
		ReloadUI();
	end
end
</syntaxhighlight>
