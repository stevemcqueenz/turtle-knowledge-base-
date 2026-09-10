---
title: "API GetQuestMoneyToGet"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestMoneyToGet"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:03:59Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestMoneyToGet

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetQuestMoneyToGet                                                    --]( GetQuestMoneyToGet                                                    --)
--[   Returns the remaining amount of Copper required to complete the     --](   Returns the remaining amount of Copper required to complete the     --)
--[     quest.                                                            --](     quest.                                                            --)
MQOverride_GetQuestMoneyToGet = GetQuestMoneyToGet;
function GetQuestMoneyToGet()
  local totalMoney = 0;
  
  if (MQBypass_Quest) then
    --for i=1, table.getn(MQBypass_Quest.objectives), 1 do
    --  if (MQBypass_Quest.objectives[i].type == "Money") then
    --    totalMoney = totalMoney + MQBypass_Quest.objectives[i].copper;
    --  end
    --end
    --return totalMoney;
    return MQBypass_Quest.objectiveMoney;
  end
  
  return MQOverride_GetQuestMoneyToGet();
end
</syntaxhighlight>Example from addon named QuestHistory<syntaxhighlight lang="lua">
				-- Record required money if doing so
				if ( QuestHistoryFlags["logRequiredMoney"].status ) then
					local reqMoney = GetQuestMoneyToGet();
					if ( reqMoney and ( reqMoney > 0 ) ) then
						QuestHistory_List[RealmName][PlayerCharacterName][recentlyCompletedQuestID].rm = reqMoney;
					end
				end
</syntaxhighlight>Example from addon named ElvUI<syntaxhighlight lang="lua">
		if GetQuestMoneyToGet() > 0 then
			if GetQuestMoneyToGet() > GetMoney() then
				QuestProgressRequiredMoneyText:SetTextColor(0.6, 0.6, 0.6)
			else
				QuestProgressRequiredMoneyText:SetTextColor(1, 0.80, 0.10)
			end
		end
</syntaxhighlight>
