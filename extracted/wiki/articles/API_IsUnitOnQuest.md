---
title: "API IsUnitOnQuest"
url: "https://turtle-wow.fandom.com/wiki/API_IsUnitOnQuest"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T15:26:47Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API IsUnitOnQuest

Returns whether the passed unit is on the passed quest.

IsUnitOnQuest(questIndex, "unit")
----

  - *Arguments***

   (questIndex, "unit")
  ; questIndex
   Integer - The index of the quest to check for
  ; unit
   String - The [UnitId](API Type UnitId) to select as a target.

----

  - *Returns***

  ; bool

----

  - *Example***

    if IsUnitOnQuest(0, "player")  then
        SendChatMessage("i am on my quest", "SAY", "Common", "General")
    end

  - *Result***

    <1. General>Player: "i am on my quest";
----

  - *Description***

- Returns whether the specified unit is on the specified quest. One can use any of the defined [UnitId](API Type UnitId) values so long as it refers to a unit in the party or raid.

----
