---
title: "Get UnitName Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10003"
topic_id: 10003
forum_id: 18
forum: "AddOns"
author: "Valentiner"
author_authority: "player"
posted: "2023-09-18T15:22:00Z"
last_post: "2023-09-18T15:22:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:30:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Get UnitName Macro

## Post 65409 by Valentiner — 2023-09-18T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=65409#p65409 | page 1 | era: pre-1.18.1 -->

When I want to report a player who violates the rules, I hope that I can get the player's name through a macro and display it in the chat input box, so that I can copy it directly.

I checked the API documentation and only found the macro to display the player's name in the chat interface, which cannot be copied directly. Code: Select all

```
/script local targetName = UnitName(target");
ChatFrame1:AddMessage('Target name is: ' .. targetName);
```

Can someone tell me how to achieve this?  satisfied_turtle

