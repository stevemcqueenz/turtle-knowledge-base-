---
title: "API GetActiveTitle"
url: "https://turtle-wow.fandom.com/wiki/API_GetActiveTitle"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T11:19:48Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActiveTitle

Gets the title of an active quest (only available after QUEST_GREETING event).

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
</syntaxhighlight>Example from addon named GFW Levelator<syntaxhighlight lang="lua">
function FLV_OnEvent(self, inEvent)
	if (inEvent == nil) then
		-- little hack to allow the same code to work on 1.12 and 2.0
		inEvent = event;
	end
	if (inEvent == "GOSSIP_SHOW") then
		local availibleList = {GetGossipAvailableQuests()};
		for i = 2, table.getn(availibleList), 2 do
			local button = getglobal("GossipTitleButton"..(i/2));
			button:SetText(string.format('[%d] %s', availibleList[i], availibleList[i-1]));
		end
		local activeList = {GetGossipActiveQuests()};
		for i = 2, table.getn(activeList), 2 do
			local buttonNum = (i/2);
			local availableCount = table.getn(availibleList);
			if (availableCount > 0) then
				buttonNum = buttonNum + availableCount / 2 + 1;
			end
			local button = getglobal("GossipTitleButton"..buttonNum);
			button:SetText(string.format('[%d] %s', activeList[i], activeList[i-1]));
		end
	elseif (inEvent == "QUEST_GREETING") then
		for i = 1, GetNumActiveQuests() do
			local level = GetActiveLevel(i);
			local title = GetActiveTitle(i);
			local button = getglobal("QuestTitleButton"..i);
			button:SetText(string.format('[%d] %s', level, title));
		end
		for i = 1, GetNumAvailableQuests() do
			local level = GetAvailableLevel(i);
			local title = GetAvailableTitle(i);
			local button = getglobal("QuestTitleButton"..i + (GetNumActiveQuests() or 0));
			button:SetText(string.format('[%d] %s', level, title));
		end
	end
end
</syntaxhighlight>
