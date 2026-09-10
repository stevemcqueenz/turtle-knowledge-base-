---
title: "API GetPlayerBuffDispelType"
url: "https://turtle-wow.fandom.com/wiki/API_GetPlayerBuffDispelType"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T14:19:32Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetPlayerBuffDispelType

Get the debuff type for a player debuff ("Magic", "Curse", "Disease", or "Poison")

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
