---
title: "API GetBlockChance"
url: "https://turtle-wow.fandom.com/wiki/API_GetBlockChance"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-10T11:34:15Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetBlockChance

## Returns
   Player's block chance in percentage (all numeral).

## See also
[GetParryChance](API GetParryChance), [GetDodgeChance](API GetDodgeChance) and [GetCritChance](API GetCritChance).
----

## Macro
Current avoidance<syntaxhighlight lang="lua">
/script DEFAULT_CHAT_FRAME:AddMessage("Need 102.4 combined avoidance. Currently at:"..GetDodgeChance() + GetBlockChance() + GetParryChance() + (GetParryChance() - 7));
</syntaxhighlight>
