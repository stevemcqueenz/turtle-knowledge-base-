---
title: "API GetQuestLogRewardInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogRewardInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:53:14Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogRewardInfo

Returns a pile of reward item info.
 GetQuestLogRewardInfo(itemNum);
----

** *Arguments***

   (Number itemNum)

  ; itemNum
   The item number to get info on

----

** *Returns***

   String name, String texture, Number numItems, Number quality, Boolean isUsable

  ; name
   The name of the quest item
  ; texture
   The texture of the quest item
  ; numItems
   How many of the quest item
  ; quality
   Quality of the quest item
  ; isUsable
   If the quest item is usable by the current player

----

** *Example***

 local name, texture, numItems, quality, isUsable = GetQuestLogRewardInfo(requiredItem.type, i);

** *Result***

 "Silver Belt", ..., 1, 100, false
----

** *Description***

   Returns a pile of reward item info.
