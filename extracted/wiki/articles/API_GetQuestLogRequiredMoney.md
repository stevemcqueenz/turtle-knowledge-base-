---
title: "API GetQuestLogRequiredMoney"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogRequiredMoney"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:52:18Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogRequiredMoney

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetQuestLogRequiredMoney                                              --]( GetQuestLogRequiredMoney                                              --)
--[   ??                                                                  --](   ??                                                                  --)
MQOverride_GetQuestLogRequiredMoney = GetQuestLogRequiredMoney;
function GetQuestLogRequiredMoney()
  local totalMoney = 0;

  if (myquests.IsEnabled and table.getn(myquests.QuestLog) > 0) then
    if(MQBypass_LogSelection > 0) then
      --for i=1, table.getn(myquests.QuestLog[MQBypass_LogSelection].objectives), 1 do
      --  if (myquests.QuestLog[MQBypass_LogSelection].objectives[i].type == "Money") then
      --    totalMoney = totalMoney + myquests.QuestLog[MQBypass_LogSelection].objectives[i].copper;
      --  end
      --end
      --return totalMoney;
      return myquests.QuestLog[MQBypass_LogSelection].objectiveMoney;
    end
  end
  
  return MQOverride_GetQuestLogRequiredMoney();
end
</syntaxhighlight>Example from addon named UberQuest<syntaxhighlight lang="lua">
	-- If there's money required then anchor and display it
	if ( GetQuestLogRequiredMoney() > 0 ) then
		if ( numObjectives > 0 ) then
			UberQuest_Details_ScrollChild_RequiredMoneyText:SetPoint("TOPLEFT", "UberQuest_Details_ScrollChild_Objective"..numObjectives, "BOTTOMLEFT", 0, -4)
		else
			UberQuest_Details_ScrollChild_RequiredMoneyText:SetPoint("TOPLEFT", "UberQuest_Details_ScrollChild_ObjectivesText", "BOTTOMLEFT", 0, -10)
		end
		
		MoneyFrame_Update("UberQuest_Details_ScrollChild_RequiredMoneyFrame", GetQuestLogRequiredMoney())
		
		if ( GetQuestLogRequiredMoney() > GetMoney() ) then
			-- Not enough money
			UberQuest_Details_ScrollChild_RequiredMoneyText:SetTextColor(0, 0, 0)
			SetMoneyFrameColor("UberQuest_Details_ScrollChild_RequiredMoneyFrame", 1.0, 0.1, 0.1)
		else
			UberQuest_Details_ScrollChild_RequiredMoneyText:SetTextColor(0.2, 0.2, 0.2)
			SetMoneyFrameColor("UberQuest_Details_ScrollChild_RequiredMoneyFrame", 1.0, 1.0, 1.0)
		end
		UberQuest_Details_ScrollChild_RequiredMoneyText:Show()
		UberQuest_Details_ScrollChild_RequiredMoneyFrame:Show()
	else
		UberQuest_Details_ScrollChild_RequiredMoneyText:Hide()
		UberQuest_Details_ScrollChild_RequiredMoneyFrame:Hide()
	end
</syntaxhighlight>
