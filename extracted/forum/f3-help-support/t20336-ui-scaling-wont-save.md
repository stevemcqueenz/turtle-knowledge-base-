---
title: "UI Scaling wont save."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20336"
topic_id: 20336
forum_id: 3
forum: "Help & Support"
author: "Fluchmeister6"
author_authority: "player"
posted: "2025-07-16T22:12:00Z"
last_post: "2025-07-19T18:56:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:42:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# UI Scaling wont save.

## Post 140003 by Fluchmeister6 — 2025-07-16T22:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140003#p140003 | page 1 | era: pre-1.18.1 -->

Hi everyone, starting today I have a new monitor with a resolution of 2560x1440p – to my surprise, I was able to set it directly in the client. Unfortunately, the UI is huge. I tried to get it pixel-perfect with:
/run SetCVar("UIScale", 0.5333)
and that works, but every time I restart, relog, or reload, the UI resets and becomes huge again. The issue persists regardless of whether I set the config file to read-only or not. The config does contain the entry:
SET uiScale "0.5333"

## Post 140020 by Gearclunk — 2025-07-17T00:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140020#p140020 | page 1 | era: pre-1.18.1 -->

If you can't figure it out, just make a macro with that command and hit that every time you log in.

## Post 140062 by Hyundef (Turtle WoW Team) [STAFF] — 2025-07-17T11:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140062#p140062 | page 1 | era: pre-1.18.1 -->

If you're running PFUI or any UI based addon, there is a scaling option in the addon that over-rides the UI scale in the interface options.  Either disable UI scaling from the addons settings, or configure it in there.

## Post 140521 by Fluchmeister6 — 2025-07-19T18:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=140521#p140521 | page 1 | era: pre-1.18.1 -->

I do not use any UI / Interface-Addons like PFUI. I've made this as a little Addon:
local frame = CreateFrame("Frame")
frame:RegisterEvent("PLAYER_ENTERING_WORLD")

frame:SetScript("OnEvent", function()
SetCVar("useUiScale", 1)
SetCVar("UIScale", 0.5333)
DEFAULT_CHAT_FRAME:AddMessage("|cffffcc00[UIScaleAddon]:|r Set UISCALE 0.5333")
end)

this solves it for me.

