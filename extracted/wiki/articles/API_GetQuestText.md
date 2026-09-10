---
title: "API GetQuestText"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:08:20Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestText

Gets the description of the current quest.

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetQuestText                                                          --]( GetQuestText                                                          --)
--[   Returns the quest's description text.                               --](   Returns the quest's description text.                               --)
MQOverride_GetQuestText = GetQuestText;
function GetQuestText()
  if(MQBypass_Quest) then
    return mq.TranslateCarriageReturn(MQBypass_Quest.descText, true);
  end;
  
  return MQOverride_GetQuestText();
end;
</syntaxhighlight>Example from  plugin for Titan Panel named TitanQuests<syntaxhighlight lang="lua">
--
-- utility function to get the string tag for a watched quest
--

function TitanPanelQuests_GetQuestText(questID)
	local Title, Level, Tag, isHeader, isCollapsed, isComplete = GetQuestLogTitle(questID);
	local questTag;
	local locationTag = TitanPanelQuests_GetQuestLocationText(questID);

	questTag = TitanUtils_GetColoredText("["..Level..TitanPanelQuests_GetQuestTagText(questID).."]  ",GetDifficultyColor(Level))..Title..TitanUtils_GetRedText(TitanPanelQuests_GetQuestCompleteText(questID))..locationTag..TitanPanelQuests_GetQuestWatchText(questID);

	return questTag;
end
</syntaxhighlight>
