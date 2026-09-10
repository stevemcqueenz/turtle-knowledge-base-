---
title: "API SelectAvailableQuest"
url: "https://turtle-wow.fandom.com/wiki/API_SelectAvailableQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:43:51Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SelectAvailableQuest

Selects an available quest from the NPC (only available after QUEST_GREETING event).

## Macro
Complete/Accept quests. Not 100% effective if there are more than 1 quest reward.<syntaxhighlight lang="lua">
/run AcceptQuest()
/run CompleteQuest()
/run i=GetNumQuestChoices() if i<2 then GetQuestReward(1) end
/run SelectAvailableQuest(1)
/run SelectGossipAvailableQuest(1)
/run SelectActiveQuest(1)
/run SelectGossipActiveQuest(1)
</syntaxhighlight>

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ SelectAvailableQuest                                                  --]( SelectAvailableQuest                                                  --)
--[   Called when the user clicks on a listing for an available quest.    --](   Called when the user clicks on a listing for an available quest.    --)
MQOverride_SelectAvailableQuest = SelectAvailableQuest;
function SelectAvailableQuest(id)
  if(mq.QuestCache) then
    MQBypass_Quest = mq.QuestCache.quests[MQBypass_GetAvailableID(id)];

    -- show the window...
    HideUIPanel(QuestFrameGreetingPanel);
    ShowUIPanel(QuestFrameDetailPanel);
    return;
  end;
  
  return MQOverride_SelectAvailableQuest(id);
end
</syntaxhighlight>Example from addon named QuestHaste<syntaxhighlight lang="lua">
function QuestHaste_EventHandler.QUEST_GREETING()
    local available = {}
    local active = {}
    for k = 1, GetNumAvailableQuests() do
        table.insert(available, GetAvailableTitle(k))
    end
    for k = 1, GetNumActiveQuests() do
        table.insert(active, GetActiveTitle(k))
    end
    local name = "QuestTitleButton"
    menuHandler(available, active, name, SelectAvailableQuest, SelectActiveQuest)
end
</syntaxhighlight>
