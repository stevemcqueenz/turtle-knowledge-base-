---
title: "API GetLocale"
url: "https://turtle-wow.fandom.com/wiki/API_GetLocale"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T04:18:37Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetLocale

locale = GetLocale();

## Description
The locale is what makes it possible to know what language the interface is using and thus determine which specific code is going to be executed in a localized addon.

Typically, this is used in a GetLocale block:

## Example
<syntaxhighlight lang="lua">
if (GetLocale() == "frFR") then
    -- things for the french client
else
    -- for the rest, usually english since it's the default language
end
</syntaxhighlight>

## Known results
"frFR": French

"deDE": German

"enUS": American english

"enGB": British english

"koKR": Korean

"zhCN": Chinese (simplified)

"zhTW": Chinese (traditional)

"ruRU": Russian (UI AddOn)

"esES": Spanish
