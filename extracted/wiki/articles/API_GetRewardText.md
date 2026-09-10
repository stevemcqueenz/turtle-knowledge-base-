---
title: "API GetRewardText"
url: "https://turtle-wow.fandom.com/wiki/API_GetRewardText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:15:42Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetRewardText

Seems to be not working!

Returns "" or 'nothing' when used with: DEFAULT_CHAT_FRAME:AddMessage( GetRewardText() );

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetRewardText                                                         --]( GetRewardText                                                         --)
--[   ??                                                                  --](   ??                                                                  --)
MQOverride_GetRewardText = GetRewardText;
function GetRewardText()
  if(MQBypass_Quest) then
    return MQBypass_Quest.completeText;
  end;
  
  return MQOverride_GetRewardText();
end;
</syntaxhighlight>Example from addon named QuestHistory<syntaxhighlight lang="lua">
-- Needed to record the player's target, level, location, time and XP when a
-- quest is completed -- also keeps track of the order in which quests are
-- completed
function QuestHistory_QuestRewardCompleteButton_OnClick()
	local rewardTitle = GetTitleText();
	local rewardDescription = GetRewardText();
	local skipQuest;
	if ( QuestHistoryFlags["logPortQuests"] or ( rewardTitle ~= "Port to Auberdine" and rewardTitle ~= "Port to Menethil" ) ) then
		recentlyCompletedQuestID = nil;
		-- Look through the currently logged quests to find the highest value of the completed quests
		local highestCompleted = 0;
    
    -- EMERALD DEBUG
    --DEFAULT_CHAT_FRAME:AddMessage("RealmName = "..RealmName);
    --DEFAULT_CHAT_FRAME:AddMessage("PlayerCharacterName = "..PlayerCharacterName);
    
		for index, value in QuestHistory_List[RealmName][PlayerCharacterName] do
			if ( value.co and highestCompleted < value.co ) then
				-- Store the highest value of the last completed quest
				highestCompleted = value.co;
			end
		end
</syntaxhighlight>
