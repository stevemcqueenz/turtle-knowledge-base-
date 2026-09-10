---
title: "Interface / Saved Variables"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3259"
topic_id: 3259
forum_id: 3
forum: "Help & Support"
author: "Dannic"
author_authority: "player"
posted: "2022-07-12T03:04:00Z"
last_post: "2025-03-29T16:53:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T08:46:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Interface / Saved Variables

## Post 19910 by Dannic — 2022-07-12T03:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19910#p19910 | page 1 | era: pre-1.18.1 -->

Hello everyone,

I have this problem everytime i come back in the game i have to disable vanilla damage in Interface Options / Advanced Options / Show Target Damage / Show Periodic Damage ( i use msbt addon ).
Everytime i disable this come back on the next launch.

The SavedVariables.lua files in my turtle folder was never modified ( the main one as the account one )

I notify it's impossible to change a file directly in my turtle wow folders, always have to make a copy outside, make change then copy past for replace the old one.

Also vanilla xp gains is impossible to disable, include in game.

If anyone have ideas and can help i will be appreciate   smiling_turtle_head

## Post 19911 by Gurky (Barrens Chat Casualty) — 2022-07-12T03:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19911#p19911 | page 1 | era: pre-1.18.1 -->

Did you make sure you exited the game in the correct (for addons) manner?

Log out wait for the timer and then quit game?

If so the addon might not be writing the saved variables correctly. Do you have a link to the addon?

## Post 19916 by Dannic — 2022-07-12T05:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19916#p19916 | page 1 | era: pre-1.18.1 -->

I quit the game correctly and i have an msbt find in this forum for be compatible with turtle wow, anyway the probleme it's to can't save the  advanced options interface change when i log out / on

## Post 19917 by Dannic — 2022-07-12T05:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19917#p19917 | page 1 | era: pre-1.18.1 -->

I don't find any line in the SavedVariables.lua for change advanced options interface :  Show Target Damage / Show Periodic Damage also

## Post 19919 by Gurky (Barrens Chat Casualty) — 2022-07-12T06:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19919#p19919 | page 1 | era: pre-1.18.1 -->

It sound like the addon might not have flags to save those settings. I am not sure on that thought without looking at the code.

## Post 19920 by Geojak (Grandmaster of Forum PvP) — 2022-07-12T06:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19920#p19920 | page 1 | era: pre-1.18.1 -->

Check msbt settings carefully , I think there is something that auto turns then on/off.

I had the same issue for a while and was also wondering

## Post 19926 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-12T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19926#p19926 | page 1 | era: pre-1.18.1 -->

I have a really dumb question, but please, humor me.

You don't happen to have some of your settings files in **read-only mode**, do you?  Personally, I always keep my "chat-cache.txt" file locked so that way certain AddOns can't muddle up my channel and chat interface settings, as they're prone to do.

## Post 124353 by Cataphract — 2025-03-29T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124353#p124353 | page 1 | era: pre-1.18.1 -->

so i was facing the same issue and tried all the solutions mentioned in this thread by other people and i mean ALL OF THEM and nothing worked and the floating battle damage texts were still there. some people might have already found a work around but just in case you are experiencing the same problem and don't know what to do; i made a hot fix to the " MikScrollingBattleText.lua " file that fixed the issue and so the damn floating damage texts (both instant casts and periodic) are gone now so do it at your own risk because you might screw up msbt (but you can just delete it and put an untouched version back in its place) .
i added these lines of code before all the other lines in the .lua file i mentioned: Code: Select all

```
local f = CreateFrame("Frame")
f:RegisterEvent("PLAYER_ENTERING_WORLD")
f:SetScript("OnEvent", function(self, event, ...)
SetCVar("CombatDamage", 0)
SetCVar("CombatLogPeriodicSpells", 1)
end)
```

just bear in mind that i didn't disable the xp floating text and disabled msbt's instead for xp

in case you don't want to touxh msbt .lua files, you can make a tiny addon that does the same thing but its standalone; here are the steps :
 1- make a folder inside the addon folder beside your other addons and call it whatever you want, lets say "DFBT" for example
 2- inside this folder make a .toc file with the exact name as your folder(in this case DFBT.toc) and inside the .toc file put the following line of code: Code: Select all

```
DFBT.lua
```

(again DFBT.lua because the folder name was DFBT)
 3- in the same folder make a .lua file with the same name as your folder (so DFBT.lua in this case) and inside it put the following line of code which is the exact code you put at the beginning of the msbt's .lua file if you were going toi just change that instead of making a new addon Code: Select all

```
local f = CreateFrame("Frame")
f:RegisterEvent("PLAYER_ENTERING_WORLD")
f:SetScript("OnEvent", function(self, event, ...)
SetCVar("CombatDamage", 0)
SetCVar("CombatLogPeriodicSpells", 1)
end)
```

 4- don't forget to save the .toc and .lua file after the said modifications
 5- reload the game and make sure the addon appears in your addon list inside the client and it is enabled and once you are inside the world, it will automatically load up and without the need to do anything, the annoying floating battle damage texts are gone.

goodluck turtles!
satisfied_turtle_head

