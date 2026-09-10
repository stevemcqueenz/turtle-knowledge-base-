---
title: "API Type BuffId"
url: "https://turtle-wow.fandom.com/wiki/API_Type_BuffId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:54:07Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type BuffId

Handling player buffs and debuffs are a tad different than unit buffs/debuffs.  GetPlayerBuff(buffId, buffFilter) will return a value for buffIndex, which is used for all the player buff functions and GameTooltip:SetPlayerBuff(buffIndex).  It is easy to get the two values confused because often they are the same.

buffId directly correlates to the buff frames in the top right area of the screen.  When a buff wears off all buffs to the right of it are shifted over, both buffId and buffIndex can change at this time!  Here are the ID's and filters for each frame as seen by the user (TempEnchant frames aren't shown as they don't have ID's)
{| class="fandom-table"
|HELPFUL
|7
|6
|5
|4
|3
|2
|1
|0
|-
|HELPFUL
|15
|14
|13
|12
|11
|10
|9
|8
|-
|HARMFUL
|7
|6
|5
|4
|3
|2
|1
|0
|}
buffIndex works in a similar way, but there is no distinction between buffs and debuffs, they're all indexed together.  This is the whole reason GetPlayerBuff(buffId, buffFilter) is provided.

Remember that both buffId and buffIndex can change when auras change.  Both values are indexed sequentially starting at 0 at all times, you won't encounter a "gap" if a buff has worn off in the middle of the list.
