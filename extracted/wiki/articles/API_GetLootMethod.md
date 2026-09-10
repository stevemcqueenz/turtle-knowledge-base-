---
title: "API GetLootMethod"
url: "https://turtle-wow.fandom.com/wiki/API_GetLootMethod"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T03:10:57Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetLootMethod

Retrieves the Loot Method and (if applicable) Master Looter identity.
 lootmethod, masterlooterPartyID, masterlooterRaidID = GetLootMethod()

## Returns
  - *lootmethod***
   String - one of: 'freeforall', 'roundrobin', 'master', 'group', 'needbeforegreed'.

  - *masterlooterPartyID***
   Number - Returns 0 if player is the mater looter, 1-4 if party member is master looter (corresponding to party1-4) and nil if the master looter isn't in the player's party or master looting is not used.

  - *masterlooterRaidID -* added in patch 1.18.1**
   Returns index of the master looter in the raid (corresponding to a raidX unit), or nil if the player is not in a raid or master looting is not used.
