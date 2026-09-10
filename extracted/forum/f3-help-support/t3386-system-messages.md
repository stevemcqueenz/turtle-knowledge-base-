---
title: "System messages"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3386"
topic_id: 3386
forum_id: 3
forum: "Help & Support"
author: "Lev"
author_authority: "player"
posted: "2022-07-28T16:33:00Z"
last_post: "2025-08-06T10:55:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:42:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# System messages

## Post 20603 by Lev — 2022-07-28T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20603#p20603 | page 1 | era: pre-1.18.1 -->

Tell me how to remove the system messages of the hardcore mode. I don't care who died of what or who reached hardcore. These messages are cluttering up the chat

## Post 48310 by Jamesredatkins — 2023-05-31T20:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48310#p48310 | page 1 | era: pre-1.18.1 -->

type this into chat to minimize the massegas on lvl 60 hc player only

.hcmessages 60

## Post 48364 by Evjak — 2023-06-01T09:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48364#p48364 | page 1 | era: pre-1.18.1 -->

> **Jamesredatkins wrote: Wed May 31, 2023 8:21 pm**
> type this into chat to minimize the massegas on lvl 60 hc player only
>
>  .hcmessages 60

That is very helpful. Is there a way how to tune also other system messages? Like reports about battlegrounds?

## Post 48409 by Scriptix — 2023-06-01T17:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48409#p48409 | page 1 | era: pre-1.18.1 -->

I don't think there is a command for that, at least I haven't found one.

But you can filter any message with an addon, I use ShaguChat.
 1. Download and place it in the addons folder
 2. Open the LUA file, near the top you see: if (event == "CHAT_MSG_CHANNEL" or ...
 3. Make sure to add (or just replace one of the channels with) the following: event == "CHAT_MSG_SYSTEM"
[Mine looks like this](https://i.imgur.com/J3uGpe4.png) so the filters don't affect normal conversations, but allow  blocking Trade channel spam as well
 4. In game type: /sc bl started!

This blocks all system messages that contain "started!' which is battleground announcements for all levels.

## Post 48532 by Evjak — 2023-06-02T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48532#p48532 | page 1 | era: pre-1.18.1 -->

Thanks. I am using ShaguChat as well. So this is awesome help!

## Post 143362 by Rindexxx (Barrens Chat Casualty) — 2025-08-06T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143362#p143362 | page 1 | era: pre-1.18.1 -->

can you block everyting involving guilds as well as hc

