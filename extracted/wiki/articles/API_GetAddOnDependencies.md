---
title: "API GetAddOnDependencies"
url: "https://turtle-wow.fandom.com/wiki/API_GetAddOnDependencies"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:12:49Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAddOnDependencies

Get the required dependencies for an AddOn.
<syntaxhighlight lang="lua">
 dep1, dep2, dep3, ... = GetAddOnDependencies(index or "name")
</syntaxhighlight>
## Parameters
### Arguments
   (index or "name")

  ; index
   Integer - The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
  ; name
   String - The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism.

### Returns
   dep1, dep2, dep3, ...

  ; dep1
   String - The name of the first required dependenency (nil if none)
  ; dep2
   String - The name of the second required dependenency (nil if less than 2)
  ; dep3
   String - The name of the third required dependenency (nil if less than 3)

## Addon
Example from addon named Fubar<syntaxhighlight lang="lua">
local function ValidateDependant(i, dep)
	local _, title = GetAddOnInfo(i)
	if tagstrings[dep] and string.find(title, tagstrings[dep]) then return true end

	local d = compost:Acquire(GetAddOnDependencies(i))
	local found
	for _,v in pairs(d) do if v == dep then found = true end end
	compost:Reclaim(d)
	return found
end
</syntaxhighlight>
