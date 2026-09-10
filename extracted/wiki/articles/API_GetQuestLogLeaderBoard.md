---
title: "API GetQuestLogLeaderBoard"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogLeaderBoard"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:47:21Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogLeaderBoard

This function returns up to 3 values:
 local desc, type, done = GetQuestLogLeaderBoard(i, [questID])
----

** *Arguments***

  ; i
   Index of the quests objectives (see [GetNumQuestLeaderBoards()](API GetNumQuestLeaderBoards) ).

  ; questID
   Identifier of the quest. If not provided, default to the currently selected Quest, via [SelectQuestLogEntry()](API SelectQuestLogEntry).

----

** *Return values***

  ; desc
   String - The text description of the objective, like: "Kill foo: 0/3"

  ; type
   String - could be the following things: "item", "object", "monster", "reputation", or "event".

  ; done
   Boolean - *nil* if this sub objective is not completed yet, else 1

----
