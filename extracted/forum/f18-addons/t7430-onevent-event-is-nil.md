---
title: "OnEvent event is nil"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7430"
topic_id: 7430
forum_id: 18
forum: "AddOns"
author: "Kex0"
author_authority: "player"
posted: "2023-05-24T17:57:00Z"
last_post: "2023-08-17T14:10:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:31:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# OnEvent event is nil

## Post 47296 by Kex0 — 2023-05-24T17:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47296#p47296 | page 1 | era: pre-1.18.1 -->

Here's code example: Code: Select all

```
local f = CreateFrame('Frame')
f:RegisterEvent('CHAT_MSG_TEXT_EMOTE')
f:SetScript('OnEvent', function(self, event, msg, player)
print(event)
if event == "CHAT_MSG_TEXT_EMOTE" then
if msg:find('cry') then
print("crying "..player)
end
end
end)
```

I'm trying to make a simple addon and I want to use events. The problem is that
`event` within `f:SetScript('OnEvent', function(self, event, msg, player)` is always `nil`. As a matter of fact all arguments are always `nil`. The only way I can get past `if event == "CHAT_MSG_TEXT_EMOTE" then` is with this code: Code: Select all

```
local f = CreateFrame('Frame')
f:RegisterEvent('CHAT_MSG_TEXT_EMOTE')
f:SetScript('OnEvent', function()
print(event)
if event == "CHAT_MSG_TEXT_EMOTE" then
if msg:find('cry') then
print("crying "..player)
end
end
end)
```

but then I have no other arguments like `msg` or `player` from `CHAT_MSG_TEXT_EMOTE`

What am I doing wrong?  This happens with every event.

## Post 47398 by Fdx — 2023-05-25T15:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47398#p47398 | page 1 | era: pre-1.18.1 -->

You almost got it. Event arguments are supplied as the variables **arg1**, **arg2** etc. See the documentation here: [https://wowwiki-archive.fandom.com/wiki ... TEXT_EMOTE](https://wowwiki-archive.fandom.com/wiki/Events/C#CHAT_MSG_TEXT_EMOTE)

Try the following code instead:
Code: Select all

```
local f = CreateFrame('Frame')
f:RegisterEvent('CHAT_MSG_TEXT_EMOTE')
f:SetScript('OnEvent', function()
print(event)
if event == "CHAT_MSG_TEXT_EMOTE" then
if string.find(arg1,'cry') then
print("crying "..arg2)
end
end
end)
```

## Post 47483 by Kex0 — 2023-05-26T12:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47483#p47483 | page 1 | era: pre-1.18.1 -->

Thank you very much!
I was reading just this <https://wowpedia.fandom.com/wiki/CHAT_MSG_TEXT_EMOTE>
and it has no mention of arg1, arg2, ...

## Post 57757 by Samsonslice — 2023-08-17T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57757#p57757 | page 1 | era: pre-1.18.1 -->

thank you very much for posting this about the arg1 arg2 variable names and pointing to the fandom.com wiki pages for reference. I couldn't get this figured out for hours

