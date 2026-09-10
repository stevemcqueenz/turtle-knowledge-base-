---
title: "Bartender2 and the missing Keyring"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1123"
topic_id: 1123
forum_id: 18
forum: "AddOns"
author: "H4pp13"
author_authority: "player"
posted: "2020-06-23T16:04:00Z"
last_post: "2021-05-17T12:31:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:34:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Bartender2 and the missing Keyring

## Post 6537 by H4pp13 — 2020-06-23T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6537#p6537 | page 1 | era: pre-1.18.1 -->

if you use Bartender2 and missing the Keyring-Button, make a macro with the following line:

/script KeyRingButton:Show()

this will temporarely (its gone after relog - hit the macro again to) show the Keyring-Button next to your Bagbar

OR if you want it permanent:
change the line 674 of the "Bartender2.lua" from
 **KeyRingButton:Hide()**
to
 **KeyRingButton:Show()**
and save it.

## Post 8481 by Neverdaunt9 — 2020-11-17T20:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=8481#p8481 | page 1 | era: pre-1.18.1 -->

Where did you find a working version of Bartender?? Ive been looking all over for it!! But cant seem to find any compatible with TWow :C

## Post 10573 by Ravielsk — 2021-05-15T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10573#p10573 | page 1 | era: pre-1.18.1 -->

I know I am late to the party but I downloaded my copy of bartender from here: <https://legacy-wow.com/vanilla-addons/bartender-2/>

It worked fine but since its entirely setup via text command I just switched to bongos.

## Post 10592 by Jimmicz (Barrens Chat Casualty) — 2021-05-17T12:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10592#p10592 | page 1 | era: pre-1.18.1 -->

bartender 2 is very limited and PFUI does a better job when it comes to the additional ability bars

