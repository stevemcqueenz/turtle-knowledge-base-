---
title: "API GetActiveLevel"
url: "https://turtle-wow.fandom.com/wiki/API_GetActiveLevel"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T11:16:25Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActiveLevel

Gets the level of an active quest (only available after QUEST_GREETING event).

## Addon
Example from addon named LazyPig<syntaxhighlight lang="lua">
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

</syntaxhighlight>Example from addon named Levelator<syntaxhighlight lang="lua">
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
