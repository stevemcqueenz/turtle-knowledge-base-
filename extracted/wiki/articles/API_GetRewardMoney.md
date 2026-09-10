---
title: "API GetRewardMoney"
url: "https://turtle-wow.fandom.com/wiki/API_GetRewardMoney"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:11:37Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetRewardMoney

Returns a number representing the amount of copper returned by a particular quest.

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetRewardMoney                                                        --]( GetRewardMoney                                                        --)
--[   ??                                                                  --](   ??                                                                  --)
MQOverride_GetRewardMoney = GetRewardMoney;
function GetRewardMoney()
  local totalMoney = 0;
  
  if (MQBypass_Quest) then
    --for i=1, table.getn(MQBypass_Quest.rewards), 1 do
    --  if (MQBypass_Quest.rewards[i].type == "Money") then
    --    totalMoney = totalMoney + MQBypass_Quest.rewards[i].copper;
    --  end
    --end
    --return totalMoney;
    return MQBypass_Quest.rewardMoney;
  end
  
  return MQOverride_GetRewardMoney();
end
</syntaxhighlight>Example from addon named QuestHistory<syntaxhighlight lang="lua">
				-- Record reward money if doing so
				if ( QuestHistoryFlags["logRewardMoney"].status ) then
					local rewMoney = GetRewardMoney();
					if  ( rewMoney and ( rewMoney > 0 ) ) then
						QuestHistory_List[RealmName][PlayerCharacterName][recentlyCompletedQuestID].m = rewMoney;
					end
				end
</syntaxhighlight>
