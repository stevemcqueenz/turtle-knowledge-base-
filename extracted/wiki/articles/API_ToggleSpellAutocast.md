---
title: "API ToggleSpellAutocast"
url: "https://turtle-wow.fandom.com/wiki/API_ToggleSpellAutocast"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T13:11:19Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ToggleSpellAutocast

Toggles whether the specified pet ability should autocast or not. (in the spellbook)

## Macros
Turn Autogrowl on<syntaxhighlight lang="lua">
/ru﻿n local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if not y then ToggleSpellAutocast(g,"pet") end
</syntaxhighlight>Turn Autogrowl off<syntaxhighlight lang="lua">
/run local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if y then ToggleSpellAutocast(g,"pet") end
</syntaxhighlight>Disables growl whenever you tell your pet to attack a player in PvP<syntaxhighlight lang="lua">
/script local i,g=1,0 while GetSpellName(i,"pet") do if GetSpellName(i,"pet")=="Growl" then g=i end i=i+1 end local _,y = GetSpellAutocast(g,"pet") if (y and UnitFactionGroup("target")) then ToggleSpellAutocast(g,"pet") end
/script PetAttack();
</syntaxhighlight>

## Addon
Example from addon MegaMacro<syntaxhighlight lang="lua">
	elseif ( arg1 ~= "LeftButton" and SpellBookFrame.bookType == BOOKTYPE_PET ) then
		ToggleSpellAutocast(id, SpellBookFrame.bookType);
	else
		CastSpell(id, SpellBookFrame.bookType);
		SpellButton_UpdateSelection();
	end
end
</syntaxhighlight>
