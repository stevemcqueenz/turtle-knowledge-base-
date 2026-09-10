---
title: "API EditMacro"
url: "https://turtle-wow.fandom.com/wiki/API_EditMacro"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T03:10:35Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API EditMacro

Edits an existing macro.
 EditMacro(index, name, iconFileName, body, local, perCharacter)

## Arguments
** *index***
   Number - The index of the macro to be edited.

** *name***
   String - The name of the macro to be displayed in the UI. The current UI imposes a 16-character limit.

** *iconFileName***
   String OR Number - Can be either a texture path or icon ID number.

** *body***
   String - The macro commands to be executed. Has a 255 character limit by default, expanded to 510 in Turtle WoW.

** *local***
   Number - Purpose is unknown, value is always 1.

** *perCharacter***
   nil will create a "General" saved macro, 1 will save it as "Per Character".

## Returns
** *macroId***
   Number - The 1-based index of the edited macro, as displayed in the "Macros" UI. Can differ from the index parameter if the name of the macro has changed, since macros are sorted alphabetically.
