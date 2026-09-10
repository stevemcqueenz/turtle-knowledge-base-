---
title: "API GetRealZoneText"
url: "https://turtle-wow.fandom.com/wiki/API_GetRealZoneText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-28T14:56:42Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetRealZoneText

<syntaxhighlight lang="lua">
 ZoneName = GetRealZoneText();
</syntaxhighlight>
When in an instance, returns the real name of the instance, not the name in the Minimap. (e.g. returns "The Stockade" whereas GetZoneText() returns "Stormwind Stockade"). Otherwise is identical to [GetZoneText](API_GetZoneText)

## Parameters
### Arguments
  none

### Returns
  ;ZoneName : String - The real name of an instance or the zone name

## Example
<syntaxhighlight lang="lua">
  ZoneName = GetRealZoneText();
  message("Zone:"..ZoneName);
</syntaxhighlight>
  An error popup appears that could show the following text: "Zone: The Stockade"

## Macros
Alliance in the zone<syntaxhighlight lang="lua">
/run R,Z=" r-human r-dwarf r-gnome r-elf",GetRealZoneText() O=Z .. R; SendWho(O);
</syntaxhighlight>Horde in the zone<syntaxhighlight lang="lua">
/run R,Z=" r-orc r-troll r-tauren r-undead",GetRealZoneText() O=Z .. R; SendWho(O);
</syntaxhighlight>

## Addon
Example from addon named MetaHunt<syntaxhighlight lang="lua">
function MTH_BOOK_GetCurrentZoneId()
	local zoneName = nil
	if type(GetRealZoneText) == "function" then
		zoneName = GetRealZoneText()
	end
	if (not zoneName or zoneName == "") and type(GetZoneText) == "function" then
		zoneName = GetZoneText()
	end
	if not zoneName or zoneName == "" then
		return nil
	end
</syntaxhighlight>
