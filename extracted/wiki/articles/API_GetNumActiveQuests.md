---
title: "API GetNumActiveQuests"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumActiveQuests"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:10:34Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumActiveQuests

Gets the number of currently active quests from this NPC (only available after QUEST_GREETING event).

## Addon
Example from addon named QuestHaste<syntaxhighlight lang="lua">
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
</syntaxhighlight>Example from addon named LazyPig<syntaxhighlight lang="lua">
	elseif event == "QUEST_GREETING" then
		ActiveQuest = twipe(ActiveQuest)
		AvailableQuest = twipe(AvailableQuest)
		for i=1, GetNumActiveQuests() do
			table.insert(ActiveQuest, i, GetActiveTitle(i).." "..GetActiveLevel(i))
		end
		for i=1, GetNumAvailableQuests() do
			table.insert(AvailableQuest, i, GetAvailableTitle(i).." "..GetAvailableLevel(i))
		end

		LazyPig_ReplyQuest(event);

		--DEFAULT_CHAT_FRAME:AddMessage("active_: "..table.getn(ActiveQuest))
		--DEFAULT_CHAT_FRAME:AddMessage("available_: "..table.getn(AvailableQuest))
</syntaxhighlight>
