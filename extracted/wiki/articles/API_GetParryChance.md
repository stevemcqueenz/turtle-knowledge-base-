---
title: "API GetParryChance"
url: "https://turtle-wow.fandom.com/wiki/API_GetParryChance"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-10T11:33:32Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetParryChance

## Returns
   Player's parry chance in percentage (all numeral).

## See also
[GetBlockChance](API GetBlockChance), [GetDodgeChance](API GetDodgeChance) and [GetCritChance](API GetCritChance).
----

## Macro
Current avoidance<syntaxhighlight lang="lua">
/script DEFAULT_CHAT_FRAME:AddMessage("Need 102.4 combined avoidance. Currently at:"..GetDodgeChance() + GetBlockChance() + GetParryChance() + (GetParryChance() - 7));
</syntaxhighlight>
