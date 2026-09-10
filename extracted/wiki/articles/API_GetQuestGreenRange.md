---
title: "API GetQuestGreenRange"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestGreenRange"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:34:39Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestGreenRange

Return for how many levels below you quests and mobs remain "green" (i.e. yield xp)
 range = GetQuestGreenRange()

## Parameters
### Returns
  ; range
   Number - an integer value, currently up to 12 (at level 60)

## Examples
- At level 9, GetQuestGreenRange() returns **5**

- At level 50, GetQuestGreenRange() returns **10**
