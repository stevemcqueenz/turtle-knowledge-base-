---
title: "API LoadAddOn"
url: "https://turtle-wow.fandom.com/wiki/API_LoadAddOn"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:40:38Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API LoadAddOn

Request the loading of an On-Demand AddOn.
<syntaxhighlight lang="lua">
 loaded, reason = LoadAddOn(index or "name")
</syntaxhighlight>
## Parameters
### Arguments
   (index or "name")

  ; index
   Integer - The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
  ; name
   String - The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism.

### Returns
   loaded, reason

  ; loaded
   Flag - Indicates if the AddOn was loaded, 1 if it is, nil if it is not.
  ; reason
   String - The reason why the AddOn cannot be loaded. This is nil if the addon was loaded, otherwise it contains a code indicating the reason. (Observed reason codes: "DISABLED", "NOT_DEMAND_LOADED", "MISSING", "CORRUPT", "INTERFACE_VERSION", "DEP_MISSING", "DEP_INTERFACE_VERSION" and I asume other DEP_ reasons)

### Usage
<syntaxhighlight lang="lua">
 local loaded,reason = LoadAddOn("MyOtherAddOn")
  if (not loaded) then
   if (reason == "DISABLED") then
    do stuff
   elseif (reason == "MISSING") then
    do other stuff
   elseif (reason == "CORRUPT") then
    do something else
   elseif (reason == "INTERFACE_VERSION") then
    do something different
   end
  else
   do something special
  end
</syntaxhighlight>
## Details
   Prior to the 1.8 patch, this could be used to load addons which were not on-demand if they were disabled at start up and then enabled during the play session. The 1.8 patch restricted this to ONLY addons which are truly marked on demand in their .toc files (## LoadOnDemand: 1).

## Addon
Example from addon named oRA2<syntaxhighlight lang="lua">
function oRALoD:oRA_CoreEnabled()

	local loaded = false
	for k,v in pairs( withcore ) do
		if not IsAddOnLoaded( v ) then
			loaded = true
			LoadAddOn( v )
		end
	end	

	withcore = {}

	-- Fire an event to have the target monitor check it's stuff
	if loaded then
		self:TriggerEvent("oRA_ModulePackLoaded")
	end
end
</syntaxhighlight>
