---
title: "need help with bag addon"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2810"
topic_id: 2810
forum_id: 18
forum: "AddOns"
author: "Kazar"
author_authority: "player"
posted: "2022-03-14T22:56:00Z"
last_post: "2022-03-16T05:06:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:33:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# need help with bag addon

## Post 17537 by Kazar — 2022-03-14T22:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17537#p17537 | page 1 | era: pre-1.18.1 -->

hello yall,
i want to create an addon that automatically opens all bags whenever talking with vendor/opening mail/bank/trading with someone. the problem is i know nothing about creating addons. lol
so i tried to register an event and then whenever the event fires i open all bags. now this looks something like this

this:RegisterEvent("MERCHANT_SHOW")
if event=="MERCHANT_SHOW" then
OpenAllBags()

well :D i started playing world of warcraft about a year ago and i'd appreciate anyones help with this

max

## Post 17548 by Perka123 — 2022-03-16T05:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17548#p17548 | page 1 | era: pre-1.18.1 -->

Onebag merges all your bags into one and also opens it whenever opening a vendor window

