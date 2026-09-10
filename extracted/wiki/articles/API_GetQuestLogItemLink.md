---
title: "API GetQuestLogItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestLogItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:45:41Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestLogItemLink

The function returns the [itemLink](itemLink) of the selected quest reward for the current active quest.  

[itemLink](itemLink) = GetQuestLogItemLink("type", index) 

## Arguments
  - type**
   String - "required", "reward" or "choice"
  - index**
   Table - Integer - Quest reward item index (starts with 1).

## Returns
  - [itemLink](itemLink)**
   String - The link to the quest item specified
   or nil, if the type and/or index is invalid or there is no active quest at the moment.

## Details
   The active quest is being set when browsing the quest log or using [SetQuestLogItem](SetQuestLogItem). The quest log must not be open for this function to work, but a quest must be active.

   The different types refere to the different item lists, a quest can contain.
   "reward" is the list of items which will be granted upon finishing the quest.
   "choice" is the list of items the player can choose from, once the quest is finished.
   "required" should be the list of items which have to be handed in for the quest to be finished (this has not been verified)
