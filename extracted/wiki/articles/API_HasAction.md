---
title: "API HasAction"
url: "https://turtle-wow.fandom.com/wiki/API_HasAction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T19:06:19Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API HasAction

Tests if an action slot is occupied.  <syntaxhighlight lang="lua">
hasAction = HasAction(actionSlot)
</syntaxhighlight>

## Parameters
-Arguments*

  ; actionSlot - [ActionSlot](Action slot)
   The tested action slot.

-Returns*

  ; hasAction - Flag
  * 1, if the slot contains an action
  * nil, if the slot is empty

## Addon
Example from addon named AsmoMOD<syntaxhighlight lang="lua">
		-- Find Overpower ID
		if (spellName == "Overpower") then
			texture = GetSpellTexture(a, BOOKTYPE_SPELL)
			opID = a
			-- Find Action Bar Number for Overpower
			local j;
			for j=1,108, 1 do
				if ( HasAction(j) ) then
					local actiontexture = GetActionTexture(j);
					if ( actiontexture == texture ) then
						opAction = j
						do break end
					end	
				end
			end
		end	
</syntaxhighlight>
