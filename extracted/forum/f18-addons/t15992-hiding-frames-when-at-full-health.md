---
title: "Hiding frames when at full health"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15992"
topic_id: 15992
forum_id: 18
forum: "AddOns"
author: "Etel"
author_authority: "player"
posted: "2024-11-20T15:03:00Z"
last_post: "2024-12-11T02:25:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:27:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Hiding frames when at full health

## Post 108971 by Etel — 2024-11-20T15:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108971#p108971 | page 1 | era: pre-1.18.1 -->

Hi,

I am looking for an addon which displays Player Health, but hides the frame when Health is at 100%. Or a frame which hides when both health and rage/mana/energy is. Anyone know of something like that? :)

I know LunaUnitFrames can set the transparency to 0 when OutOfCombat, so I am looking for something similar, but for max health.

Tried to make one myself but could not figure the events etc.

## Post 111838 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2024-12-09T01:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111838#p111838 | page 1 | era: pre-1.18.1 -->

Uhm, if you only want to hide the PlayerFrame (TargetFrame needs a bit different code)
then this should work:

 1) Make a folder called "HideFrames" in your Interface\\AddOns
 2) Make a file called "HideFrames.toc" inside the "HideFrames" folder
 3) Open the "HideFrames.toc" with a Texteditor
 4) Write "main.lua" inside the "HideFrames.toc" and save and close it
 5) Create a "main.lua" file inside your "HideFrames" folder

 6) Write this code into your "main.lua" file, save and close it:
Code: Select all

```
-- mainframe
local f = CreateFrame("Frame")

-- our function to hide the frames
local function UpdatePlayerFrameVisibility()
if UnitHealth("player") == UnitHealthMax("player") then
PlayerFrame:Hide()
else
PlayerFrame:Show()
end
end

-- init check when starting the game
UpdatePlayerFrameVisibility()

-- event handler for our HP
f:RegisterEvent("UNIT_HEALTH")
f:SetScript("OnEvent", function()
UpdatePlayerFrameVisibility()
end)
```

*Last edited by Foreverdelta33 on Mon Dec 09, 2024 1:53 am, edited 1 time in total.*

## Post 111839 by Akos1896 (Grandmaster of Forum PvP) — 2024-12-09T01:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111839#p111839 | page 1 | era: pre-1.18.1 -->

I have no idea what this is but I can professionally confirm that the above text is not Ancient Mesopotamian.

## Post 112130 by Glarthir (Barrens Chat Casualty) — 2024-12-10T22:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112130#p112130 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Mon Dec 09, 2024 1:20 am**
> Uhm, if you only want to hide the PlayerFrame (TargetFrame needs a bit different code)
>  then this should work:
>
>  1) Make a folder called "HideFrames" in your Interface\\AddOns
>  2) Make a file called "HideFrames.toc" inside the "HideFrames" folder
>  3) Open the "HideFrames.toc" with a Texteditor
>  4) Write "main.lua" inside the "HideFrames.toc" and save and close it
>  5) Create a "main.lua" file inside your "HideFrames" folder
>
>  6) Write this code into your "main.lua" file, save and close it:
>  Code: Select all
>
> ```
> -- mainframe
> local f = CreateFrame("Frame")
>
> -- our function to hide the frames
> local function UpdatePlayerFrameVisibility()
>     if UnitHealth("player") == UnitHealthMax("player") then
>         PlayerFrame:Hide()
>     else
>         PlayerFrame:Show()
>     end
> end
>
> -- init check when starting the game
> UpdatePlayerFrameVisibility()
>
> -- event handler for our HP
> f:RegisterEvent("UNIT_HEALTH")
> f:SetScript("OnEvent", function()
>     UpdatePlayerFrameVisibility()
> end)
> ```

This is pretty cool! You should make a full addon that can dynamically show/hide everything !

## Post 112147 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2024-12-11T01:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112147#p112147 | page 1 | era: pre-1.18.1 -->

> **Glarthir wrote: Tue Dec 10, 2024 10:52 pm**
> This is pretty cool! You should make a full addon that can dynamically show/hide everything !

Well, sure, but aren't there addons for Vanilla that can already do that? I'm not a big addon user so
I dont know, but I would be suprised if there isn't some sort of a "universal frame hider".

What about MoveAnything, can this not do it? Pfui has autohide for its bars (Actionbars, Microbar etc.) but
I dont know if it has that for Map/Frames etc.

## Post 112149 by Turbosaxophonic (Patch Note Conspiracy Theorist) — 2024-12-11T02:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112149#p112149 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Wed Dec 11, 2024 1:05 am**
> > **Glarthir wrote: Tue Dec 10, 2024 10:52 pm**
> > This is pretty cool! You should make a full addon that can dynamically show/hide everything !
>
>   Well, sure, but aren't there addons for Vanilla that can already do that? I'm not a big addon user so
>  I dont know, but I would be suprised if there isn't some sort of a "universal frame hider".
>
>  What about MoveAnything, can this not do it? Pfui has autohide for its bars (Actionbars, Microbar etc.) but
>  I dont know if it has that for Map/Frames etc.

I'm genuinely amazed you're modifying files yourself but are not a big addon user

