---
title: "API GetMacroInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetMacroInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-16T11:06:12Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: []
---
# API GetMacroInfo

Return information for a macro.
 Returns "name", iconTextureID, "body", local = GetMacroInfo(MacroID)

## Arguments
   (MacroID)

  ; MacroID
   Numeric - The ID number of the action to query.

## Returns
  ; name, iconTextureID, body, local

** *name***
   The name of the macro

** *iconTextureID***
   The texture of the macro

** *body***
   The contents of the macro

** *local***
   unknown; apears to be the numeric value 1.

## Example
 local name, texture, macrobody, localVar = GetMacroInfo(1)

Call a macro or use chat commands in Lua.
 local function ExecuteMacro(macro)
    local _, _, body = GetMacroInfo(macro)
    local commands = strsplit(body, '\n')
    for i = 1, sizeof(commands) do
       ChatFrameEditBox:SetText(commands[i])
       ChatEdit_SendText(ChatFrameEditBox)
    end
 end
