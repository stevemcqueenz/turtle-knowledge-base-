---
title: "API GetXPExhaustion"
url: "https://turtle-wow.fandom.com/wiki/API_GetXPExhaustion"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T11:41:44Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetXPExhaustion

Returns the number of XP gained from killing mobs until "player" goes from rest state to normal state.
 retVal = GetXPExhaustion()

## Parameters
### Returns
  ; retVal
   Number (if player is "rested")
   nil (if player is "normal")

## Details
   This is the total and not the amount added. For example, if this says 5000 then the next 5000 XP gained from mobs will occur at double rate. The game actually gives double XP for mobs while rested as an add on. An example, a mob worth 98 XP is killed, XP gained is 98 +98 rested XP bonus which reduces your 5000 by 196. If you take 1/2 the number then this is the XP bonus you are eligible for. ie. you will get +2500 rested bonus for earning 2500 XP from mobs for a total XP gain of 5000 during that time. When you hit 0 the bonus is small, for example say you have 20 left and you kill a mob worth 98 then you get 98 +10 rested bonus and go to the 'normal' non rested state. So if you rest in an inn and get this up to 2 then you will recieve +1 bonus XP from your next mob and not double XP from the mob.

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
