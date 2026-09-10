---
title: "API UnitPlayerControlled"
url: "https://turtle-wow.fandom.com/wiki/API_UnitPlayerControlled"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T15:31:33Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitPlayerControlled

Return whether the "unit" is controlled by a player or an NPC.
<syntaxhighlight lang="lua">
 UnitIsPlayerControlled = UnitPlayerControlled("unit")
</syntaxhighlight>
## Parameters
### Arguments
   ("unit")

  ; unit
   String - The [UnitId](API Type UnitId) to select as a target.

### Returns
   UnitIsPlayerControlled

  ; UnitIsPlayerControlled
   Boolean - Returns true if the "unit" is controlled by a player. Returns false if the "unit" is an NPC.

### Example
<syntaxhighlight lang="lua">
 if (UnitPlayerControlled("target")) then
   DEFAULT_CHAT_FRAME:AddMessage("Your selected target is a player.",1,1,0)
 else
   DEFAULT_CHAT_FRAME:AddMessage("Your selected target is an NPC.",1,1,0)
 end
</syntaxhighlight>
## Info
**DEFAULT_CHAT_FRAME:AddMessage("text",r,g,b)**

  ; [ScrollingMessageFrame:AddMessage("text",r,g,b,id)](API ScrollingMessageFrame AddMessage)
   Valid Frame names: DEFAULT_CHAT_FRAME ChatFrame1 - ChatFrame7

----
