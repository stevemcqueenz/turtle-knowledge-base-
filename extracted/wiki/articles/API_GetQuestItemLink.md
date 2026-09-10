---
title: "API GetQuestItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_GetQuestItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T14:42:44Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetQuestItemLink

Returns link to the quest item.
 itemLink = GetQuestItemLink("type", index);

## Parameters
### Arguments
   (String "type", Integer index)

  ; type
   String - "required", "reward" or "choice"
  ; index
   Integer - Quest reward item index.

### Returns
** *Returns***
   itemLink

  ; itemLink
   String - The link to the quest item specified.

## Example
 local link = GetQuestItemLink("choice", 1);

#### Result
 item:12345:0:0:0
