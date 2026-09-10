---
title: "How to see target in tooltip with TurtleRP"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21130"
topic_id: 21130
forum_id: 18
forum: "AddOns"
author: "Joytothehorde"
author_authority: "player"
posted: "2025-08-18T20:04:00Z"
last_post: "2025-08-18T20:04:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:24:36Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How to see target in tooltip with TurtleRP

## Post 146836 by Joytothehorde — 2025-08-18T20:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146836#p146836 | page 1 | era: pre-1.18.1 -->

pfUI allows you to see the target of the unit you have your cursor on, and I think that's incredibly helpful

I started using TurtleRP (amazing addon btw) but noticed the 'tooltip target' was no longer there on players...

So I decided to tell chatgpt to write some extra code to give that feature to TurtleRP's tooltip.

Here's the code: Code: Select all

```

local totName = UnitName(targetType.."target")
if totName then
local alreadyShown = false
for i = 1, GameTooltip:NumLines() do
local line = getglobal("GameTooltipTextLeft"..i)
if line and line:GetText() and string.find(line:GetText(), totName) then
alreadyShown = true
break
end
end

if not alreadyShown then
local _, totClass = UnitClass(targetType.."target")
local totReaction = UnitReaction("player", targetType.."target")
if UnitIsPlayer(targetType.."target") and totClass then
local color = RAID_CLASS_COLORS[totClass]
TurtleRP.gameTooltip:AddLine("Target: " .. totName, color.r, color.g, color.b)
elseif totReaction then
local color = UnitReactionColor[totReaction]
if color then
TurtleRP.gameTooltip:AddLine("Target: " .. totName, color.r, color.g, color.b)
else
TurtleRP.gameTooltip:AddLine("Target: " .. totName, .5, .5, .5)
end
end
end
end
```

If you navigate to TurtleWow\Interface\AddOns\TurtleRP\scripts and edit TurtleRPTooltip.lua (you can open it with any text file editor, I recommend Notepad++), you can paste that block of code right near the bottom, just above TurtleRP.gameTooltip:Show()

Here's an image to show what it looks like when inserted: ![Image](https://i.imgur.com/yMxHws9.png)

Once that's done just save the file, /reload in-game or relaunch the game, then go find a player who's targeting something. It will not show a target when somebody is targeting themself, but I think that's useless info anyway.

I've sent a link to this thread to the developer of TurtleRP, just in case they wanted to add this to the addon itself, but if this edit is against their wishes then I will take this thread down upon request.

Happy RPing turtles, seeya around!

 - Joy (Ambershire)

