---
title: "Detecting Hardcore Mode for Addon Development"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22578"
topic_id: 22578
forum_id: 18
forum: "AddOns"
author: "Nso"
author_authority: "player"
posted: "2025-10-25T23:29:00Z"
last_post: "2025-10-26T02:35:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:23:17Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Detecting Hardcore Mode for Addon Development

## Post 157081 by Nso — 2025-10-25T23:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157081#p157081 | page 1 | era: 1.18.1-announced-pre-release -->

Hi everyone,

I'm currently developing an addon for Turtle WoW (1.12.1) and I need to detect whether a player is in Hardcore mode.

Current method:
I'm using the CHAT_MSG_HARDCORE event to detect HC mode: Code: Select all

```
local hcFrame = CreateFrame("Frame")
hcFrame:RegisterEvent("CHAT_MSG_HARDCORE")
hcFrame:SetScript("OnEvent", function()
if event == "CHAT_MSG_HARDCORE" then
 -- Player is in HC mode
end
end)
```

The issue:
This method only triggers when a HC-related message appears in chat. I'd like to detect HC mode immediately on login, without waiting for a chat event.

My questions:
- Is there an API function to check if a player is in Hardcore mode directly? (something like IsHardcorePlayer() or similar)
- Are there any other events I could use?
- Is there a buff/debuff or a specific flag I could check?
- Any other reliable methods you've used in your addons?
Any help would be greatly appreciated!
Thanks in advance!

## Post 157088 by Edwanji (Barrens Chat Casualty) — 2025-10-26T00:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157088#p157088 | page 1 | era: 1.18.1-announced-pre-release -->

I don't have a hardcore character to check, but I know that other challenge modes show up as a spell in the spellbook.  You could probably loop through the spellbook looking for hardcore.

## Post 157098 by Nso — 2025-10-26T02:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157098#p157098 | page 1 | era: 1.18.1-announced-pre-release -->

Waouh. Nice catch!
Thank you very much for your quick and working answer.
Code: Select all

```
local function IsHardcoreCharacter()
for tab = 1, GetNumSpellTabs() do
local _, _, offset, numSpells = GetSpellTabInfo(tab)
for i = 1, numSpells do
local spellName = GetSpellName(offset + i, "spell")
if spellName and string.find(string.lower(spellName), "hardcore") then
return true
end
end
end
return false
end
```

## Post 157099 by Grizb37 (Grandmaster of Forum PvP) — 2025-10-26T02:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157099#p157099 | page 1 | era: 1.18.1-announced-pre-release -->

Just enable show player challenges in the config

## Post 157100 by Nso — 2025-10-26T02:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157100#p157100 | page 1 | era: 1.18.1-announced-pre-release -->

> **Grizb37 wrote: Sun Oct 26, 2025 2:30 am**
> Just enable show player challenges in the config

More info to use it with lua code, please?

NVM, spell "hardcore" detection working, basic, simple, great.

