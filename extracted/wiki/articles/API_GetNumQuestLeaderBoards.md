---
title: "API GetNumQuestLeaderBoards"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumQuestLeaderBoards"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:18:26Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumQuestLeaderBoards

This function returns up to 3 values:
 local numQuestLogLeaderBoards = GetNumQuestLogLeaderBoards([questID])
----

  - *Arguments***

  ; questID
   Identifier of the quest. If not provided, default to the currently selected Quest, via [SelectQuestLogEntry()](API SelectQuestLogEntry).

----

  - *Return values***

  ; numQuestLogLeaderBoards
   Integer - The number of objectives this quest possesses.  (Can be 0.)

----
