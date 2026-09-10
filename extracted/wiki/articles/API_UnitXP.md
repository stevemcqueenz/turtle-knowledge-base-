---
title: "API UnitXP"
url: "https://turtle-wow.fandom.com/wiki/API_UnitXP"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T12:06:28Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitXP

Return the current XP of a "unit" - only seems to work with "player".
 XP = UnitXP("unit")

## Parameters
### Arguments
   ("unit")

  ; unit
   String - The [UnitId](API Type UnitId) to select as a target.

### Returns
   XP

  ; XP
   Numeric - Returns the current XP points of the "unit".

### Example
<syntaxhighlight lang="lua">
 XP = UnitXP("player")
 XPMax = UnitXPMax("player")
 DEFAULT_CHAT_FRAME:AddMessage("Your XP is currently at "..floor( (XP / XPMax)*100 ).."%."),1,0,0)
</syntaxhighlight>

## Info
  -DEFAULT_CHAT_FRAME:AddMessage("text",r,g,b)**
  ; [ScrollingMessageFrame:AddMessage("text",r,g,b,id)](API ScrollingMessageFrame AddMessage)
   Valid Frame names: DEFAULT_CHAT_FRAME ChatFrame1 - ChatFrame7
  -UnitXPMax("unit")**
   [UnitXPMax("unit")](API UnitXPMax) - Returns the number of experience points the specified unit needs to reach their next level.
  -floor(value)**
   [floor(value)](API floor) - Returns the floor of value.

## Macros
Show current % rested experience<syntaxhighlight lang="lua">
/run DEFAULT_CHAT_FRAME:AddMessage(format("%d%% rested", 100 * GetXPExhaustion() / UnitXPMax("player")))
</syntaxhighlight>Show current rested experience as bubbles<syntaxhighlight lang="lua">
/run p="player";x=UnitXP(p);m=UnitXPMax(p);r=GetXPExhaustion();if -1==(r or -1)then t="No rest."else t="Rest: "..(math.floor(20*r/m+0.5)).."bubbles ("if r+x<m then t=t..r else t=t.."level +"..(r+x-m)end t=t.."XP)"end;DEFAULT_CHAT_FRAME:AddMessage(t)
</syntaxhighlight>

## Addon
Example from addon named Bongos<syntaxhighlight lang="lua">
local function OnXPEvent()
	if restBar:IsShown() then
		if GetWatchedFactionInfo() then
			WatchRep()
		else
			local value = UnitXP("player")
			local max = UnitXPMax("player")

			xpBar:SetMinMaxValues(0, max)
			xpBar:SetValue(value)

			restBar:SetMinMaxValues(0, max)
			if GetXPExhaustion() then
				restBar:SetValue(value + GetXPExhaustion())
			else
				restBar:SetValue(0)
			end
			text:SetText(max - value .. " tnl")
		end
	end
end
</syntaxhighlight>
