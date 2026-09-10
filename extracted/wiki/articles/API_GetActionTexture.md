---
title: "API GetActionTexture"
url: "https://turtle-wow.fandom.com/wiki/API_GetActionTexture"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T09:18:21Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActionTexture

Returns the filepath for an action's texture. <syntaxhighlight lang="lua">
texture = GetActionTexture(actionSlot)
</syntaxhighlight>

## Parameters
*Arguments*

  ; actionSlot - ActionSlot
   The queried slot.

*Returns*

  ; texture - String
  * The texture filepath for the action's icon image
  * nil, if the slot is empty

## Macro
Scans your action bars for Riposte by texture name and uses it if possible. else uses Sinister Strike.<syntaxhighlight lang="lua">
/run for i=1,120 do local t=GetActionTexture(i) if t and string.find(t,"Challange") and IsUsableAction(i) and (UnitMana("Player")>=10) then UseAction(i) end if (UnitMana("Player")>=40) then CastSpellByName("Sinister Strike") end end
</syntaxhighlight>This will print all the slot and texture names where abilities are placed<syntaxhighlight lang="lua">
/run for i=1,72 do if GetActionTexture(i) then DEFAULT_CHAT_FRAME:AddMessage("Slot "..i..": "..GetActionTexture(i))end end
</syntaxhighlight>
