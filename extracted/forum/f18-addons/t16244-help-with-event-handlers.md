---
title: "Help with event handlers"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16244"
topic_id: 16244
forum_id: 18
forum: "AddOns"
author: "Gunjak"
author_authority: "player"
posted: "2024-12-01T00:54:00Z"
last_post: "2024-12-01T12:23:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:27:40Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Help with event handlers

## Post 110728 by Gunjak — 2024-12-01T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110728#p110728 | page 1 | era: pre-1.18.1 -->

Can someone please help me understand eventhandlers in twow? All of the args seem to be null in the handlers:
Code: Select all

```
-- This frame will be used to register the event
local frame = CreateFrame("Frame")
frame:RegisterEvent("CHAT_MSG_WHISPER")  -- Registering for whisper events

-- This function will handle the whisper event
frame:SetScript("OnEvent", function(event, arg1, arg2, arg3)
if event == nil then
Log("event is nil")
end
if arg1 == nil then
Log("arg1 is nil")
end
end)
```

## Post 110748 by Oldmana (Barrens Chat Casualty) — 2024-12-01T07:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110748#p110748 | page 1 | era: pre-1.18.1 -->

In this version of WoW, the "event" and "arg1", "arg2", etc variables are globals and not passed as arguments in the event function. So remove the arguments in the function and it'll work.

## Post 110779 by Gunjak — 2024-12-01T12:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110779#p110779 | page 1 | era: pre-1.18.1 -->

Thanks, it works!

