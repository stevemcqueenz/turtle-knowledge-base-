---
title: "API TargetNearestPartyMember"
url: "https://turtle-wow.fandom.com/wiki/API_TargetNearestPartyMember"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T07:08:17Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API TargetNearestPartyMember

Selects the nearest party member as the current target.

## Macro
Sacrifice on nearest party member <syntaxhighlight lang="lua">
/run if UnitIsPlayer("target") and not UnitIsUnit("player", "target") then CastSpellByName("Blessing of Sacrifice(Rank 1)") else TargetNearestPartyMember() end
</syntaxhighlight>
