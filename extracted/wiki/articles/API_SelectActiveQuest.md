---
title: "API SelectActiveQuest"
url: "https://turtle-wow.fandom.com/wiki/API_SelectActiveQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:44:21Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SelectActiveQuest

Selects an active quest from the NPC (only available after QUEST_GREETING event).

## Macro
Complete/Accept quests. Not 100% effective if there are more than 1 quest reward<syntaxhighlight lang="lua">
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
--[ SelectActiveQuest                                                     --]( SelectActiveQuest                                                     --)
--[   Called when the user clicks on a listing for an active quest.       --](   Called when the user clicks on a listing for an active quest.       --)
MQOverride_SelectActiveQuest = SelectActiveQuest;
function SelectActiveQuest(id)
  if(mq.QuestCache) then
    local count = 0;

    for i=1, table.getn(myquests.QuestLog), 1 do
      if(myquests.QuestLog[i].finishPlayers[1] == mq.QuestCache.sender) then
        count = count + 1;
        
        if (count == id) then
          MQBypass_Quest = myquests.QuestLog[i];
          
          -- show the window...
          HideUIPanel(QuestFrameGreetingPanel);
          if(myquests.QuestLog[i].isComplete) then
            ShowUIPanel(QuestFrameRewardPanel);
          else
            ShowUIPanel(QuestFrameProgressPanel);
          end

          return;
        end
        
        MQBypass_Quest = mq.QuestCache.quests[id];
      end
    end
  end
  
  return MQOverride_SelectActiveQuest(id);
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
