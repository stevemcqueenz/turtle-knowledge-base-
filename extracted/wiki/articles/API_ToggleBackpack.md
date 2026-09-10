---
title: "API ToggleBackpack"
url: "https://turtle-wow.fandom.com/wiki/API_ToggleBackpack"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:19:18Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ToggleBackpack

ToggleBackpack();
Toggles your backpage open/closed.

## Parameters
### Arguments
   *none*

### Returns
  ; nil

## Example
 ToggleBackpack();

## Addon
Example from addon named MyBags<syntaxhighlight lang="lua">
function MyBankClass:OpenAllBags(forceopen)
	self:debug("OpenAllBagsHook")
	if forceopen then OpenBackpack() else ToggleBackpack() end
	local action
	if (IsBagOpen(0) or MyInventory.frame:IsVisible()) then 
		action = "OpenBag" 
	else 
		action = "CloseBag" 
	end
	for i=1, 4, 1 do
		if not (MyInventory.GetOpt("Replace") and MyInventory:IncludeBag(i)) then
			self.Hooks[action].orig(i)
		end
	end
	for i=5, 10, 1 do
		if not MyBank.GetOpt("Replace") or not MyBank:IncludeBag(i) then
			self.Hooks[action].orig(i)
		end
	end
end
</syntaxhighlight>
