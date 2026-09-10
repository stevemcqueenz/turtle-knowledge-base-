---
title: "COMBAT_LOG_EVENT_UNFILTERED not available"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13818"
topic_id: 13818
forum_id: 18
forum: "AddOns"
author: "Leohn"
author_authority: "player"
posted: "2024-05-05T12:22:00Z"
last_post: "2024-05-12T12:55:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:29:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# COMBAT_LOG_EVENT_UNFILTERED not available

## Post 94095 by Leohn — 2024-05-05T12:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94095#p94095 | page 1 | era: pre-1.18.1 -->

it seems COMBAT_LOG_EVENT_UNFILTERED is not available in turtle wow
i register this event and nothing could ever trigger while other events like CHAT_MSG_SPELL_SELF_BUFF is function
maybe we have some totally different events? where could i find them?
as long as wowpedia is not so good
tks a lot

## Post 94103 by Balake (Bug Report Enthusiast) — 2024-05-05T14:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94103#p94103 | page 1 | era: pre-1.18.1 -->

<https://turtle-wow.fandom.com/wiki/Addons>
scroll down and you'll find guides

## Post 94113 by Leohn — 2024-05-05T18:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94113#p94113 | page 1 | era: pre-1.18.1 -->

> **Balake wrote: Sun May 05, 2024 2:54 pm**
> <https://turtle-wow.fandom.com/wiki/Addons>
>  scroll down and you'll find guides

i`ve searched the [https://github.com/shagu/wow-vanilla-ap ... /events.md](https://github.com/shagu/wow-vanilla-api/blob/master/events.md)
but still cannot find anything like the Combatlog
say, i wanna get the info of raid member using some potion
what event can i use? thks

## Post 94634 by Ninefive2seven — 2024-05-12T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94634#p94634 | page 1 | era: pre-1.18.1 -->

Maybe you can try this event:"CHAT_MSG_SPELL_FRIENDLYPLAYER_BUFF"
There's no COMBAT_LOG_EVENT_UNFILTERED,we might need to identify the corresponding combat log event and register  it.

