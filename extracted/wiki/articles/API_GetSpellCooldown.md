---
title: "API GetSpellCooldown"
url: "https://turtle-wow.fandom.com/wiki/API_GetSpellCooldown"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T18:20:51Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSpellCooldown

Retrieves the cooldown data of the spell specified.
<syntaxhighlight lang="lua">
 local start, duration = GetSpellCooldown(spellID, "bookType");
</syntaxhighlight>
----

  - *Arguments***

   (Number spellID)

  ; spellID
   The ID of the spell to retrieve cooldown data for

   (string bookType)

  ; bookType
   BOOKTYPE_SPELL or BOOKTYPE_PET depending on whether you wish to query the player or pet spellbook.

----

  - *Returns***

   (Number startTime, Number duration, Number enable)

  ; startTime
   The time when the cooldown started (as returned by [GetTime()](API GetTime)) or zero if no cooldown
  ; duration
   The number of seconds the cooldown will last, or zero if no cooldown

  ; enable
   Appears to return 1 no matter what.

----

;

## *Example*
<syntaxhighlight lang="lua">
local start, duration = GetSpellCooldown(spellID, BOOKTYPE_SPELL);
if ( start > 0 and duration > 0) then
	Print('Please wait ' .. duration - ( GetTime() - start) .. ' seconds before using this spell.');
else
	Print('Spell is ready.');
end
</syntaxhighlight>

  - *Result***

   Retrieves data. Does not (to my knowledge) actually change anything.

   "For the Nature's Swiftness spell and posibly other spells that don't start their cooldown timer before they are used up the values retrieved by GetSpellCooldown change over time. The startTime returned is the current time (that this function was called), not the time the spell was cast. The duration is 0.001 not the spell's normal cooldown.

   In this way we can use GetSpellCooldown to see if this type of spell is active on the player without having to look at buffs and debuffs." --Brahgulshin 19:39, 13 March 2006 (EST)

----

  - *Description***

   Retrieves data on the cooldown of a specific spell within your spellbook.

----

## Macros
Uses getspellcooldown to track if SPELL ONE is ready. When the spell is ready it is used, if it is not ready then SPELL TWO is used
<syntaxhighlight lang="lua">
 /run local c,s=CastSpellByName,"SPELL ONE";local i=nil;for j=1,180 do local n=GetSpellName(j,BOOKTYPE_SPELL);if n and strfind(n,s) then i=j;break;end end if i then if GetSpellCooldown(i,BOOKTYPE_SPELL)<1 then c(s)else c("SPELL TWO")end end
</syntaxhighlight>

Cast-sequence buffing<syntaxhighlight lang="lua">
/run local _gspells = { "Ice Armor", "Dampen Magic", "Arcane Intellect"} if GetSpellCooldown(4,"BOOKTYPE_SPELL")==0 then _gi=_gi and _gi > 0 and _gi or 1 CastSpellByName(_gspells[_gi]) _gi = math.mod(1+_gi, 1+table.getn(_gspells))end
</syntaxhighlight>

## Addon
Example from addon named CallOfElements<syntaxhighlight lang="lua">
					-- first check if the totem is already usable
					-- -------------------------------------------
					local start, duration = GetSpellCooldown( totemData.Ranks[totemData.MaxRank].SpellID, BOOKTYPE_SPELL );
					
					if( start == 0 and duration == 0 ) then
						CastSpellByName( COE.TotemSets[activeset][element].SpellName );
						if not QueueSpellByName then -- if not peponam can't cast more
							return
						end
					end
				end
			end
		end
	end
end
</syntaxhighlight>
