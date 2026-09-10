---
title: "API UnitIsDeadOrGhost"
url: "https://turtle-wow.fandom.com/wiki/API_UnitIsDeadOrGhost"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T11:20:13Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: []
---
# API UnitIsDeadOrGhost

Very useful to determine if a mod should be doing something if your ("unit" => "player") dead or a ghost.

Returns 1 if "unit" is dead or a ghost, nil otherwise.

Does not work for ("pet") unless the pet bar is still active.  Not sure why the petbar stays active when the pet dies -- it used to gray out, now it will disappear after some time or some event happens, but not immediately when the pet dies. -- 5/29/2006

## Macros
Check if a unit is dead or ghost. Returns nil if alive and 1 if dead<syntaxhighlight lang="lua">
/run DEFAULT_CHAT_FRAME:AddMessage(tostring(UnitIsDeadOrGhost("target")))
</syntaxhighlight>Says who you  resurrect<syntaxhighlight lang="lua">
/run if UnitIsDeadOrGhost("target") then CastSpellByName("Resurrection"); SendChatMessage("Return to us, %t.","SAY"); end
</syntaxhighlight>
