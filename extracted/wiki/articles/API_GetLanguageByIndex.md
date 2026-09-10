---
title: "API GetLanguageByIndex"
url: "https://turtle-wow.fandom.com/wiki/API_GetLanguageByIndex"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:16:02Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetLanguageByIndex

Returns the language specified by the index that your character can speak.
 Language = GetLanguageByIndex(index)

## Parameters
### Arguments
   index

  ; index
   Numeric - The index starting at 1.

### Returns
   Language

  ; Language
   String - Returns the language specified by the index that your character can speak.

### Example
 for x=1, GetNumLaguages() do
   DEFAULT_CHAT_FRAME:AddMessage(GetLanguageByIndex(x))
 end

## Info
  -for .. do**

   Look for the 'for .. do' block at the [Reference Manual](http://www.lua.org/manual/5.0/).

  -GetNumLaguages()**

   [GetNumLaguages()](API GetNumLaguages) - Returns the number of languages your character can speak (I guess Blizzard's programmers mistyped that function name).

  -DEFAULT_CHAT_FRAME:AddMessage("text",r,g,b)**

  ; [ScrollingMessageFrame:AddMessage("text",r,g,b,id)](API ScrollingMessageFrame AddMessage)
   Valid Frame names: DEFAULT_CHAT_FRAME ChatFrame1 - ChatFrame7

----
