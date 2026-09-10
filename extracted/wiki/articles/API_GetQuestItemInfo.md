---
title: "API GetQuestItemInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestItemInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:41:45Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestItemInfo

Returns basic information about the quest items.
 GetQuestItemInfo(type, itemNum);
----

  - *Arguments***

   (String type, Number itemNum)

  ; type
   The type of quest item. Can be one of: *"required" "reward" "choice"*
  ; itemNum
   The item number to get info on

----

  - *Returns***

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

  - *Example***

 local name, texture, numItems, quality, isUsable = GetQuestItemInfo(requiredItem.type, i);

  - *Result***

 "Boar Meat", ..., 5, 100, true
----

  - *Description***

   Returns basic information about the quest items. You can query on items required to complete quests or rewards given by quests.
