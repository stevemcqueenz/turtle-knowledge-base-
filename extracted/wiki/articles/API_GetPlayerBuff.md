---
title: "API GetPlayerBuff"
url: "https://turtle-wow.fandom.com/wiki/API_GetPlayerBuff"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T14:15:14Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetPlayerBuff

Retrieve info about a certain player buff of a certain type.
 buffIndex, untilCancelled = GetPlayerBuff(buffId, buffFilter);
----

** ***Arguments*****

   (Number buffId)

  ; buffId
   The id of the buff to retrieve. Starts at 0 and goes up to 15 (may get higher).
   **Burning Crusade** : Starts at 1 and goes up to 16.

   (String buffFilter)

  ; buffFilter
   The "filter" to use when selecting buffs. Will affect what types of buffs are retrieved.

   Verified buffFilters:
  ; "HELPFUL|HARMFUL|PASSIVE"
  ; "HELPFUL"
  ; "HARMFUL"

   Theoretically, buffFilters can be any combination of HELPFUL, HARMFUL, PASSIVE, CANCELABLE, NOT_CANCELABLE according to comments in the source code.

----

** ***Returns*****

   (Number buffIndex)

  ; buffIndex
   The index of the buff. Mainly to use for other GetPlayerBuffXYZ functions. If below zero, indicates there is no such buff.
   **Burning Crusade** : If zero, indicates there is no such buff.

   (Number untilCancelled)

  ; untilCancelled
   If 1, this buff will last until it is cancelled (Aura, Aspect, Stealth).

----

** ***Example*****

 local buffIndex, untilCancelled = GetPlayerBuff(0, "HELPFUL|HARMFUL|PASSIVE");

** ***Result*****

Retrieves buff info about the first buff you have.
----

** ***Description*****

   Retrieves info and identifier about a certain effect on the player.

## Macros
Arcane Power spammable<syntaxhighlight lang="lua">
/run local i=0 c=0 for i=1,40 do if strfind(tostring(GetPlayerBuffTexture(GetPlayerBuff(i))),"Spell_Nature_Lightning") then c=1 end end if c==0 then CastSpellByName("Arcane Power") end
</syntaxhighlight>unbuff  Divine Protection<syntaxhighlight lang="lua">
/script local i=0 g=GetPlayerBuff while not (g(i) == -1) do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Holy_Restoration"))then CancelPlayerBuff(g(i))end i = i + 1; end
</syntaxhighlight>

## Addon
Example from addon named Zorlen<syntaxhighlight lang="lua">
--Loops through all self buffs looking for a match and returns the index number
function Zorlen_GiveSelfBuffIndex(buff, SpellName, buffFilter, DispelType, HasDuration)
	local counter = 0
	while GetPlayerBuff(counter) >= 0 do
		if not buffFilter or GetPlayerBuff(counter, buffFilter) >= 0 then
			local index, untilCancelled = GetPlayerBuff(counter)
			if not HasDuration or untilCancelled ~= 1 then
				if not DispelType or DispelType == GetPlayerBuffDispelType(index) then
					if SpellName then
						ZORLEN_Buff_Tooltip:SetPlayerBuff(index)
						local buffname = ZORLEN_Buff_TooltipTextLeft1:GetText()
						if buffname then
							if string.find(buffname, SpellName) then
								return index
							end
						end
					elseif buff then
						if string.find(GetPlayerBuffTexture(index), buff) then
							return index
						end
					else
						return index
					end
				end
			end
		end
		counter = counter + 1
	end
	return nil
end
</syntaxhighlight>
