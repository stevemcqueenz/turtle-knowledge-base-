---
title: "API IsAddOnLoaded"
url: "https://turtle-wow.fandom.com/wiki/API_IsAddOnLoaded"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:27:36Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsAddOnLoaded

Determine if an AddOn has been loaded.
<syntaxhighlight lang="lua">
 loaded = IsAddOnLoaded(index or "name")
</syntaxhighlight>
## Parameters
### Arguments
   (index or "name")

  ; index
   Integer - The index of the AddOn in the user's AddOn list. You cannot access Blizzard-provided AddOns through this mechanism.
  ; name
   String - The name of the AddOn to be queried. You can access Blizzard-provided AddOns through this mechanism.

### Returns
   loaded

  ; loaded
   Flag - Indicates if the AddOn has been loaded, 1 if it has been, nil if it has not.

## Example
<syntaxhighlight lang="lua">
 if (IsAddOnLoaded("AddonName")) then
   do stuff
 end
</syntaxhighlight>

## Addon
Example from addon named Bagshui<syntaxhighlight lang="lua">
	-- Other addons.
	-- Intensive check for pfUI to ensure it's the real thing and not an addon that
	-- provides pfUI API compatibility. (And false is used since nil will just
	-- end up with an empty table entry and it will metatable its way up into _G).
	pfUI = (
		_G.IsAddOnLoaded("pfUI")
		and _G.pfUI and _G.pfUI.uf 
		and _G.pfUI.env and _G.pfUI.env.C
	) and _G.pfUI or false,

	-- Contain the _ dummy variable within the Bagshui environment.
	_ = 0,
}
</syntaxhighlight>
