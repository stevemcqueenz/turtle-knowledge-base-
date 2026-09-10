---
title: "Re-allow 5 scripts banned by Blizzard to prevent botting."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13169"
topic_id: 13169
forum_id: 14
forum: "Suggestions"
author: "Twospooky"
author_authority: "player"
posted: "2024-02-20T10:39:00Z"
last_post: "2024-02-21T15:00:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T11:56:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Re-allow 5 scripts banned by Blizzard to prevent botting.

## Post 88225 by Twospooky — 2024-02-20T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88225#p88225 | page 1 | era: pre-1.18.1 -->

Hello,
This game has script commands for all actions including movement.
In patch 1.10 Blizzard put many scripting functions into a protected status to prevent botting.
The list of protected functions includes: moveforward timers, strafe timers, left click function, right click function, jump, and others.
Good use of macro allowed players to bot the game similar to a runescape auto-clicker except it was in-game and this was stopped by Blizzard putting the macro functions into protected status.

I am working on bluetooth controller support.
Doing pretty much any left/right click action with a controller requires an extra button press to complete the action; the extra button press is to set the camera back onto the mouse.
For example: placing an AOE takes 3 buttons. Spell button, left click button, camera-on-mouse button.
Furthermore, when mapping the controller to the keyboard we need to put the mouse buttons on the controller and the jump keybind too.

The problem scripts on the protected list are the functions for left click, right click, and jump.
Removing the following 5 scripts from protected station will eliminate the need for the extra button.
It will allow controller users to take the left/right mouse/spacebar buttons off the controller map and ONTO the in-game spell bar.
This will allow controller players to map 6 additional spellbar slots with the use of modifiers.(Shift, alt, ctrl.)
It will also allow players to put both mouse buttons on the same controller button with the use of modifiers.

Functions to the re-allowed:
Jump()
CameraOrSelectOrMoveStart()
CameraOrSelectOrMoveStop([stickyFlag])
TurnOrActionStart()
TurnOrActionStop()

Script to use mouse to move camera:(Not protected functions.)
/run if IsMouselooking() then MouselookStop() else MouselookStart() end

Example of macro for left click:(After protection ends.)
/run CameraOrSelectOrMoveStart() then CameraOrSelectOrMoveStop([stickyFlag]) then if IsMouselooking() then MouselookStop() else MouselookStart() end end end

The other functions on the protected list should stay protected.
Jump is able to be done already but it's off the spellbar and it's exceeding comfy to have the spellbars arranged like the controller buttons.
Botters are already sophisticated, they've got around the ban.
I cannot think of a method for exploiting these and would love to hear ideas on how this could be used to grief and cause a dealbreaker.
If you do this I'm going to get the controller going with the new setup and I'll write a guide and share the macros.
Turtle wow will be able to add "Controller support"to it's list of features and IT WILL BE BETTER THAN BLIZZARD CONTROLLER SUPPORT WHICH USES THE EXTRA BUTTON PRESS MUHAHAHA

## Post 88273 by Twospooky — 2024-02-20T23:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88273#p88273 | page 1 | era: pre-1.18.1 -->

PvPer's will be able to doubletap aoe bind for instant mouseover placement on keyboard and mouse.

## Post 88318 by Jan125 (Barrens Chat Casualty) — 2024-02-21T15:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88318#p88318 | page 1 | era: pre-1.18.1 -->

These functions are clientside, removing the protection can be done relatively easily AFAIK.
The problem is, that Warden will detect that something is up with most of these edits.

