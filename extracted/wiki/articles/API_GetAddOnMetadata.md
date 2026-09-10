---
title: "API GetAddOnMetadata"
url: "https://turtle-wow.fandom.com/wiki/API_GetAddOnMetadata"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:18:41Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAddOnMetadata

Returns addon metadata.
  value = GetAddOnMetadata("addon", "field") 

## Parameters
### Arguments
   ("addon", "field")

  ; addon
   String - Addon name to look up metadata for
  ; field
   String - Field name. May be Title, Notes, Author, Version, or anything starting with X-

### Returns
  ; value
   String - The value of the field, nil if not defined.

## Addon
Example from addon named FuBar<syntaxhighlight lang="lua">
function FuBar_ModMenuTuFu:OnInitialize()
	local authors, categories, tags = compost:Acquire(), compost:Acquire(), compost:Acquire()

	for i=1,GetNumAddOns() do
		local name, title, notes, enabled, loadable, reason, security = GetAddOnInfo(i)
		local isondemand = IsAddOnLoadOnDemand(i)
		local author = GetAddOnMetadata(i, "Author")
		local category = GetAddOnMetadata(i, "X-Category")
		local addname = self:GetOnDemandText(i)

		if author then authors[author] = true end
		if category then categories[category] = true end

		for dep in pairs(tagstrings) do if ValidateDependant(i, dep) then tags[dep] = true end end
		for _,dep in pairs(deps) do if ValidateDependant(i, dep) then tags[dep] = true end end
	end

	for i in pairs(authors) do table.insert(sortauthors, i) end
	for i in pairs(categories) do table.insert(sortcategories, i) end
	for i in pairs(tags) do table.insert(sorttags, i) end
	table.sort(sortauthors)
	table.sort(sortcategories)
	table.sort(sorttags)

	compost:ReclaimMulti(authors, categories, tags)
end
</syntaxhighlight>
