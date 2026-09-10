---
title: "API GetSpellAutocast"
url: "https://turtle-wow.fandom.com/wiki/API_GetSpellAutocast"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T12:36:08Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSpellAutocast

Check wether the specified pet ability autocasts or not

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
Example from addon library named Sea<syntaxhighlight lang="lua">
		-- Pet spells AutoCast status
		if bookType == BOOKTYPE_PET then
			local autoCast, _ = GetSpellAutocast( index, BOOKTYPE_PET )
			if autoCast then
				spells[spellName].autoCast = true
			end
		end
</syntaxhighlight>
