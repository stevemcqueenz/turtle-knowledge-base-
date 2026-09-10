---
title: "API GetSpellName"
url: "https://turtle-wow.fandom.com/wiki/API_GetSpellName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T12:36:18Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSpellName

Retrieves the spell name and spell rank for a spell in the player's spellbook. If you're trying to read the spell book at login, register for the [PLAYER_LOGIN](Events P (Party, Petition, Pet, PlayerBank, Player)#PLAYER LOGIN) event.
 *spellName*, *spellRank* = GetSpellName( *spellId*, *bookType* );
----

** *Arguments***

  ; spellId
   Integer - Spell ID. Valid values are 1 through total number of spells in the spellbook on all pages and all tabs, ignoring empty slots.

  ; bookType
   String - Either **BOOKTYPE_SPELL** ("spell") or **BOOKTYPE_PET** ("pet").

----

** *Returns***

  ; spellName
   String - Name of the spell as it appears in the spellbook, eg. *"Lesser Heal"*

  ; spellRank
   String - The spell rank or type, eg. *"Rank 3"*, *"Racial Passive"*. This can be an empty string. **Note:** for the *Enchanting* trade skill at rank *Apprentice*, the returned string contains a trailing space, ie. *"Apprentice "*. This might be the case for other trade skills and ranks also.

----

** *Example***
<syntaxhighlight lang="lua">
 local i = 1
 while true do
    local spellName, spellRank = GetSpellName(i, BOOKTYPE_SPELL)
    if not spellName then
       do break end
    end
    
    -- use spellName and spellRank here
    DEFAULT_CHAT_FRAME:AddMessage( spellName .. '(' .. spellRank .. ')' )
    
    i = i + 1
 end
</syntaxhighlight>
** *Result***
   Displays every spell in the player's spellbook, on all pages and all tabs, in the format required by [CastSpellByName](API CastSpellByName).

## Macros
Print the name and id of all the skills in your spellbook<syntaxhighlight lang="lua">
/run local i=1;while true do local spellName,spellRank=GetSpellName(i,BOOKTYPE_SPELL);if not spellName then break;end;DEFAULT_CHAT_FRAME:AddMessage(i..": "..spellName..'('..spellRank..')');i=i+1;end
</syntaxhighlight>Turn Autogrowl on<syntaxhighlight lang="lua">
/ru﻿n local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if not y then ToggleSpellAutocast(g,"pet") end
</syntaxhighlight>

## Addon
Example from addon named GFW FeedOMatic<syntaxhighlight lang="lua">
-- The icon for the cooking spell is unique and the same in all languages; use that to determine the localized name.
function FOM_CookingSpellName()
	FOM_COOKING_ICON = "Interface\\Icons\\INV_Misc_Food_15"; 
	if (FOM_COOKING_NAME == nil) then
		local spellName;
		local i = 0;
		repeat
			i = i + 1;
			spellName = GetSpellName(i, BOOKTYPE_SPELL);
			if (spellName ~= nil and GetSpellTexture(i, BOOKTYPE_SPELL) == FOM_COOKING_ICON) then
				FOM_COOKING_NAME = spellName;
				return FOM_COOKING_NAME;
			end
		until (spellName == nil);
	end
	return FOM_COOKING_NAME;	
end
</syntaxhighlight>
