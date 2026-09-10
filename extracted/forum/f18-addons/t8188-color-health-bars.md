---
title: "Color Health Bars"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8188"
topic_id: 8188
forum_id: 18
forum: "AddOns"
author: "Munchlax"
author_authority: "player"
posted: "2023-07-08T13:00:00Z"
last_post: "2023-09-15T02:51:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:30:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Color Health Bars

## Post 52617 by Munchlax — 2023-07-08T13:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52617#p52617 | page 1 | era: pre-1.18.1 -->

Hello Everyone,

I was wondering if there was an Addon that changed the health bar color based on percentage. Like green being 100% and red being 0%.

Thanks for anyone's help!

Munchlax

## Post 52711 by Ibux (Patch Note Conspiracy Theorist) — 2023-07-09T16:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52711#p52711 | page 1 | era: pre-1.18.1 -->

if there isn't any addon like this. then i think you can add something like this into one. although i'm not 100% sure how well this will work. someone better at making addons might make it work.

Player frame: Code: Select all

```
local frame = CreateFrame("Frame")
frame:RegisterEvent("UNIT_HEALTH")
frame:SetScript("OnEvent", function(self, event, unit)
if unit == "player" then
local HC = {[20]={0.4,0,0},[40]={0.6,0,0},[80]={0.8,0,0},[100]={1,0,0}}
local PH = UnitHealth("player")*100/UnitHealthMax("player")
for k,v in pairs(HC) do
if PH < k then
PlayerFrame.healthbar:SetStatusBarColor(unpack(v))
break
end
end
end
end)
```

Target frame: Code: Select all

```
local frame = CreateFrame("Frame")
frame:RegisterEvent("UNIT_HEALTH")
frame:SetScript("OnEvent", function(self, event, unit)
if unit == "target" then
local HC = {[20]={0.4,0,0},[40]={0.6,0,0},[80]={0.8,0,0},[100]={1,0,0}}
local PH = UnitHealth("player")*100/UnitHealthMax("target")
for k,v in pairs(HC) do
if PH < k then
TargetFrame.healthbar:SetStatusBarColor(unpack(v))
break
end
end
end
end)
```

## Post 52734 by Baess — 2023-07-09T20:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52734#p52734 | page 1 | era: pre-1.18.1 -->

Yes its simply called healthFade

## Post 53922 by Munchlax — 2023-07-18T13:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53922#p53922 | page 1 | era: pre-1.18.1 -->

Hello everyone,

Sorry i forgot i posted about this but i will look for healthFade on the turtlewow addons!

Thank you so much!!

Your very boy, Munchlax

## Post 60581 by Yokami — 2023-09-02T19:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60581#p60581 | page 1 | era: pre-1.18.1 -->

> **Munchlax wrote: Tue Jul 18, 2023 1:07 pm**
> Sorry i forgot i posted about this but i will look for healthFade on the turtlewow addons!

So ...... where's it????   scared_turtle

## Post 60590 by Baess — 2023-09-03T00:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60590#p60590 | page 1 | era: pre-1.18.1 -->

<https://legacy-wow.com/vanilla-addons/healthfade/>

## Post 64179 by Munchlax — 2023-09-15T02:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64179#p64179 | page 1 | era: pre-1.18.1 -->

Hello,

Does healthfade work on turtlewow?

Thanks for the help!

Munchlax

