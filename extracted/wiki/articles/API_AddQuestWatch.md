---
title: "API AddQuestWatch"
url: "https://turtle-wow.fandom.com/wiki/API_AddQuestWatch"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T11:04:24Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API AddQuestWatch

Add a quest to the watch list.

## Addon
Example from addon named pfQuest<syntaxhighlight lang="lua">
-- Set certain events on quest unwatch
local pfHookAddQuestWatch = AddQuestWatch
AddQuestWatch = function(questIndex)
  local ret = pfHookAddQuestWatch(questIndex)
  pfQuest.updateQuestLog = true
  pfQuest.updateQuestGivers = true
  return ret
end
</syntaxhighlight>
