---
title: "API Type ItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_Type_ItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:55:45Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type ItemLink

## ItemLink API Type (String)
ItemLinks are returned by several functions, e.g. GetAuctionItemLink(), GetContainerItemLink(), GetInventoryItemLink(), etc.

In essence, they are itemStrings with additional formatting to make in-game text controls display them as clickable hyperlinks.
 |cff9d9d9d|Hitem:7073:0:0:0:0:0:0:0|h[Broken Fang]|h|r
Broken up in its components:

- <code>"**|cff9d9d9d**"</code> – Colorizes the link with a medium grey color (Broken Fang is vendortrash)
  - The first two characters after pipe-c may be the alpha level, where <code>ff</code> is fully opaque.
  - The next three sets of two characters represent the red, green, and blue levels, just like HTML.
- <code>"**|H**"</code> – "Hyperlink link data starts here"
- <code>"**item:7073:0:0:0:0:0:0:0**"</code> – Read more at itemString.
- <code>"**|h**"</code> – "End of link, text follows"
- <code>"**[Broken Fang]**"</code> – The actual text displayed
- <code>"**|h**"</code> – "End of hyperlink"
- <code>"**|r**"</code> – Restores color to normal

You can extract the itemString from a given itemLink with the following LUA-code:
 local found, _, itemString = string.find(itemLink, "^|%x+|H(.+)|h%[.+%]")

## Printing links for debug
Printing out the contents of an item link is perhaps not so obvious; displaying it anywhere in-game will just show you a clickable link. Reformat it slightly to ruin the escape sequences and you'll see what it really looks like:
 link = GetContainerItemLink(0, 1);
 printable = gsub(link, "\124", "\124\124");
 ChatFrame1:AddMessage("Here's what it really looks like: \"" .. printable .. "\"");
"124" is the ascii value of the "|" character. If you are writing this in a regular .lua file, feel free to go ahead and just use "|" and "||". However, if you're typing it in an in-game editor, it's better to use the ascii code escape to avoid problems.
