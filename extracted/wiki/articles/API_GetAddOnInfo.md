---
title: "API GetAddOnInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetAddOnInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:16:14Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAddOnInfo

Get information about an AddOn.
<syntaxhighlight lang="lua">
 name, title, notes, enabled, loadable, reason, security = GetAddOnInfo(index or "name")
</syntaxhighlight>
## Parameters
### Arguments
   (index or "name")

  ; index
   Integer - The index of the AddOn in the user's AddOn list. Note that you cannot access Blizzard-provided AddOns through this mechanism.
  ; name
   String - The name of the AddOn to be queries. You can access Blizzard-provided AddOns through this mechanism.

### Returns
   name, title, notes, enabled, loadable, reason, security

  ; name
   String - The name of the AddOn.
  ; title
   String - The title of the AddOn from its .toc file (presumably this is the appropriate localized one).
  ; notes
   String - The notes about the AddOn from its .toc file (presumably this is the appropriate localized one).
  ; enabled
   Flag - Indicates if the AddOn is currently enabled, 1 if it is, nil if it is not.
  ; loadable
   Flag - Indicates if the AddOn is eligible to be loaded, 1 if it is, nil if it is not.
  ; reason
   String - The reason why the AddOn cannot be loaded. This is nil if the addon is loadable, otherwise it contains a code indicating the reason. (Observed reason codes: "DISABLED" and "MISSING")
  ; security
   String - Indicates the security status of the AddOn. This is currently "INSECURE" for all user provided addons and "SECURE" for Blizzard_* AddOns.

## Addon
Example from addon named FuBar<syntaxhighlight lang="lua">
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
