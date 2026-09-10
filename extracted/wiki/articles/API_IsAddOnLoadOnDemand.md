---
title: "API IsAddOnLoadOnDemand"
url: "https://turtle-wow.fandom.com/wiki/API_IsAddOnLoadOnDemand"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:49:14Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsAddOnLoadOnDemand

Determine if an AddOn is loaded on demand (via [.toc file](TOC format) dependencies or [LoadAddOn](API LoadAddOn)) rather than at startup
<syntaxhighlight lang="lua">
 loadDemand = IsAddOnLoadOnDemand(index or "name")
</syntaxhighlight>
## Parameters
### Arguments
  (index or "name")

  ;index : Integer - The index of the AddOn in the user's AddOn list. You cannot access Blizzard-provided AddOns through this mechanism.
  ;name : String - The name of the AddOn to be queried. You can access Blizzard-provided AddOns through this mechanism.
### Returns
  loadDemand

  ;loadDemand : Flag - Indicates if the AddOn is loaded on demand, 1 if it is, nil if it is loaded on startup

## Example
  This asks whether the addon, "AddonName" is Load on Demand, then changes the variable "addonLoadOnDemand" to correspond the answer.
<syntaxhighlight lang="lua">
 if (IsAddOnLoadOnDemand("AddonName")) then
   addonLoadOnDemand = true;
 else
   addonLoadOnDemand = false;
 end
</syntaxhighlight>

## Addon
Example from addon named MyAddOns<syntaxhighlight lang="lua">
		-- Check if the addon is load on demand
		if (IsAddOnLoadOnDemand(name)) then
			if (not addon.loadOptions) then
				addon.loadOptions = {};
				addon.loadOptions.loadMethod = 1;
				addon.loadOptions.classes = {};
				addon.loadOptions.realms = {};
			end
		else
			myAddOnsAddOns[name].loadOptions = nil;
		end
</syntaxhighlight>
