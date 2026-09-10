---
title: "API GetPlayerBuffTexture"
url: "https://turtle-wow.fandom.com/wiki/API_GetPlayerBuffTexture"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T14:27:39Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetPlayerBuffTexture

Retrieve info about a certain player buff of a certain type.
 buffTexture = GetPlayerBuffTexture(buffIndex)
----

** ***Arguments*****

   (Number buffIndex)

  ; buffIndex
   The index of the buff to retrieve. Can be obtained with GetPlayerBuff

----

** ***Returns*****

   (String buffTexture)

  ; buffTexture
   The identifier of (path and filename of) the texture of the buff, or nil if no such buff exist.

----

** ***Example*****

 icon:SetTexture(GetPlayerBuffTexture(buffIndex))

** ***Result*****

Retrieves buff texture and sets the icons texture to that.
----

** ***Description*****

   Retrieves the texture name of a certain buff.

## Macro
Seal of Wisdom that cannot be reapplied while buff is up<syntaxhighlight lang="lua">
/run i=0;s=0;while(1) do b=GetPlayerBuff(i,"HELPFUL") if b==-1 then break;end t=GetPlayerBuffTexture(b); if string.find(t,"RighteousnessAura") then s=1;end i=i+1;end if s==0 or IsControlKeyDown() then CastSpellByName("Seal of Wisdom"); end
</syntaxhighlight>Cancel Ghost Wolf<syntaxhighlight lang="lua">
/run local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "SpiritWolf"))then CancelPlayerBuff(g(i))end i=i+1 end
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
