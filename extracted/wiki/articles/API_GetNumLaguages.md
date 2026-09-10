---
title: "API GetNumLaguages"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumLaguages"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:17:44Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumLaguages

Returns the number of languages your character can speak (I guess that Blizzard's programmers mistyped the function name).
 NumLanguages = GetNumLaguages()

## Parameters
### Arguments
   none

### Returns
   NumLanguages

  ; NumLanguages
   Numeric - Returns the number of languages your character can speak.

### Example
 for x=1, GetNumLaguages() do
   DEFAULT_CHAT_FRAME:AddMessage(GetLanguageByIndex(x))
 end

## Info
  -for .. do**

   Look for the 'for .. do' block at the [Reference Manual](http://www.lua.org/manual/5.0/).

  -GetLanguageByIndex(index)**

   [GetLanguageByIndex(index)](API GetLanguageByIndex) - Returns the language specified by the index.

  -DEFAULT_CHAT_FRAME:AddMessage("text",r,g,b)**

  ; [ScrollingMessageFrame:AddMessage("text",r,g,b,id)](API ScrollingMessageFrame AddMessage)
   Valid Frame names: DEFAULT_CHAT_FRAME ChatFrame1 - ChatFrame7

----
