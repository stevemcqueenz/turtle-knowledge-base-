---
title: "API IsQuestWatched"
url: "https://turtle-wow.fandom.com/wiki/API_IsQuestWatched"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:25:33Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsQuestWatched

Determine if the specified quest is watched.

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ IsQuestWatched                                                        --]( IsQuestWatched                                                        --)
--[   ??                                                                  --](   ??                                                                  --)
MQOverride_IsQuestWatched = IsQuestWatched;
function IsQuestWatched(questIndex)
  if (myquests.IsEnabled and table.getn(myquests.QuestLog) > 0) then
    if(questIndex < 1 + table.getn(myquests.QuestLog)) then
      if(myquests.QuestLog[questIndex-1]) then
        return myquests.QuestLog[questIndex-1].isTracked;
      else
        return nil;
      end
    end
  end
  
  return MQOverride_IsQuestWatched(questIndex);
end
</syntaxhighlight>Example from addon named TurtleGuide<syntaxhighlight lang="lua">
	-- Only auto-track for COMPLETE actions (quest objectives)
	if action == "COMPLETE" then
		local questLogIndex = self:GetQuestLogIndexByName(quest)
		if questLogIndex and questLogIndex > 0 then
			if not IsQuestWatched(questLogIndex) then
				AddQuestWatch(questLogIndex)
				self:Debug("Tracking quest: " .. quest .. " (index " .. questLogIndex .. ")")
			end
			self.trackedQuestName = quest
		end
	end
end
</syntaxhighlight>
