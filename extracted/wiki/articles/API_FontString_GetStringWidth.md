---
title: "API FontString GetStringWidth"
url: "https://turtle-wow.fandom.com/wiki/API_FontString_GetStringWidth"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:43:48Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# API FontString GetStringWidth

Returns how wide the string would be, in pixels, without wrapping:
 width = MyFontString:GetStringWidth();

## Note
Get/SetWidth() and Get/SetHeight() operate very differently on FontString objects than they do in other objects.

Among other things, if no width is explicitly set, GetWidth() will return the exact same result as GetStringWidth().

See the [FontString object information](UIOBJECT FontString) for details.
