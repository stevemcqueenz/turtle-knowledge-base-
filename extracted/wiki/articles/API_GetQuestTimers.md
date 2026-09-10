---
title: "API GetQuestTimers"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestTimers"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:09:18Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestTimers

Returns all of the quest timers currently in progress.
 GetQuestTimers();

## Parameters
### Arguments
   *none*

### Returns
   Strings questTimers

  ; questTimers
   Values in seconds of all quest timers currently in progress

## Example
 QuestTimerFrame_Update(GetQuestTimers());

 function QuestTimerFrame_Update(...)
  for i=1, arg.n, 1 do
   SecondsToTime(arg[i]);
  end
 end

### Result
 "300", "240", "100"
