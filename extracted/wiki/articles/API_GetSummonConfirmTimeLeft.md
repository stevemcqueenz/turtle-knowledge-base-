---
title: "API GetSummonConfirmTimeLeft"
url: "https://turtle-wow.fandom.com/wiki/API_GetSummonConfirmTimeLeft"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:24:25Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetSummonConfirmTimeLeft

## Addon
Example from addon named Lazypig<syntaxhighlight lang="lua">
function LazyPig_AutoSummon()
	if LPCONFIG.SUMM then
		local expireTime = GetSummonConfirmTimeLeft()
		expireTime = math.floor(expireTime);
		
		if(not player_summon_message and (expireTime ~= 0)) then
			player_summon_message = true
			player_summon_confirm = true
			DEFAULT_CHAT_FRAME:AddMessage("LazyPig: Auto Summon in "..expireTime.."s");
		elseif((expireTime == 3) or (expireTime == 2)) then
			player_summon_confirm = false
			player_summon_message = false
			ConfirmSummon()
			StaticPopup_Hide("CONFIRM_SUMMON");
			--UIErrorsFrame:AddMessage("Auto Summon")
		end
	end
end
</syntaxhighlight>
