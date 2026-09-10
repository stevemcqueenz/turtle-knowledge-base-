---
title: "I just made a new addon with grind spots"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19022"
topic_id: 19022
forum_id: 18
forum: "AddOns"
author: "Onna"
author_authority: "player"
posted: "2025-05-02T06:33:00Z"
last_post: "2025-05-02T17:19:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:25:57Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I just made a new addon with grind spots

## Post 129343 by Onna — 2025-05-02T06:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129343#p129343 | page 1 | era: pre-1.18.1 -->

<https://github.com/onnateldome/GrindSpots>

what it does is it created a frame at the top center of your screen and depending on your level it suggests spots for you to grind.

its my first ever addon so it will not be the most aesthetically pleasing you have seen.
any suggestions are welcome ! (and needed)

## Post 129345 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-05-02T07:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129345#p129345 | page 1 | era: pre-1.18.1 -->

> **Onna wrote: Fri May 02, 2025 6:33 am**
> <https://github.com/onnateldome/GrindSpots>

Nice first addon.
Since youre asking for suggestions;

Im getting a LUA error on first load: <https://ibb.co/rGk0CJ0Q>
It disappears after reloading.

The reason for this is your initial call (Line 129: CreateTabs()).
Another problem you have is your event handler in line 122.

In Vanilla WoW the frame:SetScript call itself only takes two arguments,
the script handler name (e.g. "OnUpdate") and a function value (or nil to clear it). Code: Select all

```
frame:SetScript("OnUpdate", handlerFunc)
```

"handlerFunc" is just a Lua function object. You do not (and cannot) “pass” extra values into SetScript itself
like you did (or better, ChatGPT) -> GrindSpotsFrame:SetScript("OnEvent", function(self, event)

The "self" and the "event" are not allowed in vanilla.

If you remove both the initial call (Line 129) and you remove both arguments you tried to pass (self, event),
then your addon works. Code: Select all

```
-- Event handling
GrindSpotsFrame:RegisterEvent("PLAYER_LOGIN")
GrindSpotsFrame:RegisterEvent("PLAYER_XP_UPDATE")
GrindSpotsFrame:SetScript("OnEvent", function() -- REMOVED "SELF" AND "EVENT"
if event == "PLAYER_LOGIN" or event == "PLAYER_XP_UPDATE" then
CreateTabs()
end
end)

-- REMOVED INITIAL CALL
```

Be carefull with ChatGPT in Vanilla, it does alot of mistakes and will cause alot of headache
for you if you dont know it any better.

ChatGPT can make your very frustrated in WoW vanilla coding.

## Post 129406 by Onna — 2025-05-02T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129406#p129406 | page 1 | era: pre-1.18.1 -->

Thanks for the fix! I applied it !

