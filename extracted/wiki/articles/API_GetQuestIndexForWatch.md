---
title: "API GetQuestIndexForWatch"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestIndexForWatch"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:40:47Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestIndexForWatch

Return the quest index for the specified watch

## Addon
Example from addon named FastQuest<syntaxhighlight lang="lua">
		elseif( cmd == "clear" ) then
			qOut(info.."All quest tracker quests have been removed ");
			for i = GetNumQuestWatches(), 1 , -1 do
				local qID = GetQuestIndexForWatch(i)
				FQD[player].tQuests[i] = " ";
				RemoveQuestWatch(qID);
			end
			FQD[player].nQuests = 0;
			QuestWatch_Update();
			return;
		end
</syntaxhighlight>Example from addon named MyQuests<syntaxhighlight lang="lua">
function QuestWatch_Update()
  --mq.IO.print("GetNumQuestWatches(): " .. GetNumQuestWatches());
  
  local offset = mq.QuestLogIndexOffset();
  
  for i=1, GetNumQuestWatches() do
    mq.IO.dprint("GetQuestIndexForWatch(" .. i .. ") " .. GetQuestIndexForWatch(i));
    mq.IO.dprint("GetNumQuestLeaderBoards(" .. GetQuestIndexForWatch(i) .. ") " .. GetNumQuestLeaderBoards(GetQuestIndexForWatch(i)));

    local title, level, tag, isHeader, isCollapsed, isComplete = GetQuestLogTitle(GetQuestIndexForWatch(i));
    mq.IO.dprint("GetQuestLogTitle(i) " .. title .. " - " .. level .. " - " .. NoNil(tag) .. " - " .. NoNil(isHeader) .. " - " .. NoNil(isCollapsed) .. " - " .. NoNil(isComplete));
  end
  
  
  return MQOverride_QuestWatch_Update();
end

</syntaxhighlight>
