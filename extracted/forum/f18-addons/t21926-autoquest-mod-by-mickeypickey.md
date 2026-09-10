---
title: "AutoQuest [mod by MickeyPickey]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21926"
topic_id: 21926
forum_id: 18
forum: "AddOns"
author: "Mickeypickeyz"
author_authority: "player"
posted: "2025-09-16T06:43:00Z"
last_post: "2025-10-20T18:10:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:23:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# AutoQuest [mod by MickeyPickey]

## Post 151898 by Mickeypickeyz — 2025-09-16T06:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151898#p151898 | page 1 | era: pre-1.18.1 -->

Hey everyone!

AutoQuest  smiling_turtle
A lightweight addon for Vanilla WoW  that automates questing: accepts quests, turns them in, and picks the best reward — all hands-free.

Features: • Auto-Accept & Auto-Turn In • Smart Reward Selection (fallback to vendor value) • TourGuide Compatibility • Manual Override (Shift to pause) • Slash Commands • SavedVariables support • Vanilla-compatible & performance-friendly •

Slash Commands: /aq, /autoquest

Credits:
 - Thanks Intet161 for early contributions and inspiration.
 - ShaguTweaks by Shagu for static Vendor price tables.

Download:
You can "Add new addon" using your GitAddonsManager or   smiling_turtle  launcher: Code: Select all

```
https://github.com/MickeyPickey/AutoQuest.git
```

Or do it manually using direct links:
![👉](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f449.svg) [Download Latest Release](https://github.com/MickeyPickey/AutoQuest/releases/latest)
![💻](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4bb.svg) [GitHub Repository](https://github.com/MickeyPickey/AutoQuest)

## Post 152269 by Bestig — 2025-09-18T13:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152269#p152269 | page 1 | era: pre-1.18.1 -->

It's not working at all, with or without SuperWow
![Image](https://imgur.com/a/UQApF09)

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/UQApF09]

## Post 152386 by Mickeypickeyz — 2025-09-19T13:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152386#p152386 | page 1 | era: pre-1.18.1 -->

hey! thanks for the feedback, it was working fine on my side when i tested :|
Might be related to addon SavedVariables loading time (being loaded after the addon initialization)
Ill check it out and give an update later

## Post 156102 by Nycta — 2025-10-18T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156102#p156102 | page 1 | era: 1.18.1-announced-pre-release -->

In the settings.lua file the InitSettings() function change

AutoQuest.Settings = AutoQuestCharDB

to

AutoQuest.Settings = AutoQuestCharDB or {}

or it will just be nil and setmetatable will always fail

## Post 156331 by Mickeypickeyz — 2025-10-20T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156331#p156331 | page 1 | era: 1.18.1-announced-pre-release -->

> **Nycta wrote: Sat Oct 18, 2025 6:33 pm**
> In the settings.lua file the InitSettings() function change
>
>  AutoQuest.Settings = AutoQuestCharDB
>
>  to
>
>  AutoQuest.Settings = AutoQuestCharDB or {}
>
>  or it will just be nil and setmetatable will always fail

Hey! Thanks for the report, there was an issue with saved var's initialization. Fixed that!

