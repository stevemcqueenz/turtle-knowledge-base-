---
title: "API GetTitleText"
url: "https://turtle-wow.fandom.com/wiki/API_GetTitleText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:18:45Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetTitleText

**: **Description****
** When you select an NPC who offers a quest, you use this function**
** to obtain the quest name even before it is accepted**
**: **Example****
** function MesoonicUI_OnLoad()**
**: this:RegisterEvent("QUEST_DETAIL")**
** end**

** function MesoonicUI_OnEvent()**
**: if (event == "QUEST_DETAIL") then**
**:: MesoonicUI_DisplayQuestName()**
**: end**
** end**
** function MesoonicUI_DisplayQuestName()**
**: DEFAULT_CHAT_FRAME:AddMessage(GetTitleText())**
** end**

## Addon
Example from addon named TurtleGuide<syntaxhighlight lang="lua">
-- Hook GetQuestReward to track quest turnins
local orig = GetQuestReward
GetQuestReward = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20)
	local quest = string.gsub(GetTitleText(), "%[[0-9%+%-]+]%s", "")

	TurtleGuide:Debug("GetQuestReward", quest)
	TurtleGuide:CompleteQuest(quest, true)

	-- Track completed quest for smart skip (by name)
	TurtleGuide.db.char.completedquests[quest] = true

	-- Also track by QID if we can find it in the current guide
	if TurtleGuide.quests and TurtleGuide.actions then
		for i, guideQuest in ipairs(TurtleGuide.quests) do
			local cleanGuideQuest = string.gsub(guideQuest, "@.*@", "")
			cleanGuideQuest = string.gsub(cleanGuideQuest, TurtleGuide.Locale.PART_GSUB, "")
			if cleanGuideQuest == quest and TurtleGuide.actions[i] == "TURNIN" then
				local qid = TurtleGuide:GetObjectiveTag("QID", i)
				if qid then
					TurtleGuide.db.char.completedquestsbyid[tonumber(qid)] = true
					TurtleGuide:Debug("Tracked completed QID: " .. qid)
				end
				break
			end
		end
	end

	return orig(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20)
end
</syntaxhighlight>
