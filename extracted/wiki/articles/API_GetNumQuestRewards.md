---
title: "API GetNumQuestRewards"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumQuestRewards"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:25:08Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumQuestRewards

## Addon
Example from addon named ElvUI<syntaxhighlight lang="lua">
		local numQuestRewards, numQuestChoices
		if questState == "QuestLog" then
			numQuestRewards, numQuestChoices = GetNumQuestLogRewards(), GetNumQuestLogChoices()
		else
			numQuestRewards, numQuestChoices = GetNumQuestRewards(), GetNumQuestChoices()
		end

		local rewardsCount = numQuestChoices + numQuestRewards
		if rewardsCount > 0 then
			local questItem, itemName, link
			local questItemName = questState.."Item"

			for i = 1, rewardsCount do
				questItem = _G[questItemName..i]
				itemName = _G[questItemName..i.."Name"]
				link = questItem.type and (questState == "QuestLog" and GetQuestLogItemLink or GetQuestItemLink)(questItem.type, questItem:GetID())

				QuestQualityColors(questItem, itemName, nil, link)
			end
		end
	end)
</syntaxhighlight>Example from addon named JudgeHype<syntaxhighlight lang="lua">
function JHC_GetQRewards()
	local qtrewards = "";
	for i=1, GetNumQuestRewards(), 1 do
		local name,_,numItems,_,_ = GetQuestItemInfo("reward", i);
		local link = GetQuestItemLink("reward", i);
		if (link) then
			Report = JHC_ProcessItem(link);
			if (qtrewards == "") then
				qtrewards = numItems.."_"..Report;
			else
				qtrewards = qtrewards.."||"..numItems.."_"..Report;
			end
		end
	end
	return qtrewards;
end
</syntaxhighlight>Example from addon named UberQuest<syntaxhighlight lang="lua">
local function UberQuest_Items_Update(questState)
	local isQuestLog = 0
	if (questState == "UberQuest_Details_ScrollChild_") then -- that's one change
		isQuestLog = 1
	end
	local numQuestRewards
	local numQuestChoices
	local numQuestSpellRewards = 0
	local money
	local spacerFrame
	if (isQuestLog == 1) then
		numQuestRewards = GetNumQuestLogRewards()
		numQuestChoices = GetNumQuestLogChoices()
		if ( GetQuestLogRewardSpell() ) then
			numQuestSpellRewards = 1
		end
		money = GetQuestLogRewardMoney()
		spacerFrame = UberQuest_Details_ScrollChild_SpacerFrame -- that's two!
		-- All this crap copied for TWO changes.
	else
		numQuestRewards = GetNumQuestRewards()
		numQuestChoices = GetNumQuestChoices()
		if ( GetRewardSpell() ) then
			numQuestSpellRewards = 1
		end
		money = GetRewardMoney()
		spacerFrame = QuestSpacerFrame
	end
</syntaxhighlight>
