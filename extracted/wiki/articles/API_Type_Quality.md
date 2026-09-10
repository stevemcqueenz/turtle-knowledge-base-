---
title: "API Type Quality"
url: "https://turtle-wow.fandom.com/wiki/API_Type_Quality"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:56:40Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type Quality

### Description
The quality of an item is represented in API code as a non-negative integer.

Known values:

- 0 = Poor
- 1 = Common
- 2 = Uncommon
- 3 = Rare
- 4 = Epic
- 5 = Legendary
- 6 = Artifact

### API Usage
Quality is the third value returned by GetItemInfo().

Given a quality value, the color used to represent it may be found using GetItemQualityColor().
