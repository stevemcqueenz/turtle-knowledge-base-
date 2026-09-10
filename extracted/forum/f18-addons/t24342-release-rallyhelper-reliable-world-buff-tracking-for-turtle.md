---
title: "[Release] RallyHelper – Reliable World Buff Tracking for Turtle WoW (Ony/Nef/ZG/DMF)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24342"
topic_id: 24342
forum_id: 18
forum: "AddOns"
author: "Pearcen32"
author_authority: "player"
posted: "2026-03-18T20:28:00Z"
last_post: "2026-03-31T18:22:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T10:21:07Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] RallyHelper – Reliable World Buff Tracking for Turtle WoW (Ony/Nef/ZG/DMF)

## Post 171244 by Pearcen32 — 2026-03-18T20:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171244#p171244 | page 1 | era: 1.18.1-announced-pre-release -->

**![🐢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f422.svg) **RallyHelper – Lightweight World Buff Tracker for Turtle WoW****

RallyHelper is a **minimalistic, safe, and community‑friendly** world buff tracker designed specifically for **Turtle WoW**.
It focuses on **accuracy, transparency, and zero spam**, without unnecessary features or heavy UI frameworks.

 **![⭐](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2b50.svg) **What RallyHelper Does****

 - Tracks **Onyxia**, **Nefarian**, **ZG Heart**, **DMF**, and **Warchief’s Blessing**
 - Detects NPC yells reliably in Stormwind and Orgrimmar
 - Confirms events only when **multiple players** agree
 - Displays a clean, compact UI with cooldowns and last‑seen timers
 - Shares timers safely through a dedicated sync channel
 - Fully compatible with **pfUI** and **SuperWoW**
 - Survives broken Lua environments (LazyPig, old buff addons, etc.)
 - Stays lightweight — no warnings, no map markers, no noise

 **![🖱️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f5b1.svg) **Controls & Commands****

 ****Core Commands****

/rally
/rally status
/rally share
/rally request

 ****UI & Settings****

/rally lock
/rally reset
/rally debug

 ****Developer / Testing****

/rally users

 ***Minimap Button****
 - **Left‑click** → toggle UI
 - **Right‑click** → print status
 - **Shift + Left‑click** → share timers
 - **Alt + Click** → resize UI
 - **Alt + Drag** → move minimap button
 - **Middle‑click** → open Unconfirmed Events window

 **## ![📷](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4f7.svg) Screenshot**
![Image](https://github.com/user-attachments/assets/ea17a747-a63b-44df-b019-3360719dfa4a)

![Image](https://github.com/user-attachments/assets/b092ca3e-c64e-4c23-b5dd-428e304e5181)

 **![📥](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e5.svg) **Download****
<https://github.com/Weirdpuppy94/RallyHelper>

 **![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg) **Thank You****
Thanks to everyone who reported issues and helped test the fixes.

*Last edited by Pearcen32 on Tue Mar 31, 2026 6:59 pm, edited 7 times in total.*

## Post 171259 by Ravenofseven72 (Barrens Chat Casualty) — 2026-03-18T23:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171259#p171259 | page 1 | era: 1.18.1-announced-pre-release -->

correct link <https://github.com/Weirdpuppy94/RallyHelper>

do you can rerrange the folders, cant get the git link not correct to work.

Looks great, thnx.

[![Image](https://i.ibb.co/nXMb8NS/Screenshot-2026-03-19-010745.png)](https://ibb.co/CjKzs3F)

## Post 171288 by Pearcen32 — 2026-03-19T08:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171288#p171288 | page 1 | era: 1.18.1-announced-pre-release -->

Thank you very much for the feedback!

The link in the topic has been fixed.

I also added a proper ZIP release.
This version contains the correct folder structure, so the Turtle Launcher should now install it without creating an extra parent folder and without triggering any .toc warnings.

## Post 171306 by Pearcen32 — 2026-03-19T12:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171306#p171306 | page 1 | era: 1.18.1-announced-pre-release -->

**RallyHelper 1.2.0 – Changelog**

 **![🚀](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f680.svg) New Features**
• Request‑based timer synchronization (REQ / TIMER_*)
• 5‑player verification for sync events
• Automatic timer request on login
• Safer string handling (local copies of string functions)
• Improved unconfirmed‑event logic

 **![🔧](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f527.svg) Improvements**
• More robust channel parsing
• Better handling of Turtle‑specific NPC yell variations
• Cleaner UI updates after confirmed events
• More resilient against broken Lua environments

 **![🐞](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f41e.svg) Bug Fixes**
• Fixed rare cases where ZG events were not stored
• Fixed UI not updating after confirm events
• Fixed minimap button drag behavior
• Fixed issues caused by addons overwriting global string functions

 **![⚠️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/26a0.svg) Compatibility**
• SuperWoW / SuperWoWAPI: fully compatible
• LazyPig, GetHead, PWB: incompatible

## Post 171760 by Pearcen32 — 2026-03-22T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171760#p171760 | page 1 | era: post-1.18.1 -->

**![🚀](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f680.svg) **RallyHelper v1.3.6 – Yell Fixes, Sync Accuracy & pfUI Stability****

This update improves overall stability and fixes several Turtle‑specific yell issues that could cause incorrect buff detection in Orgrimmar.

All changes in this update were **tested with two independent clients** to ensure correct yell detection, proper event confirmation, and accurate timer behavior.

 **![🔧](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f527.svg) **Fixes & Improvements****

 **![✔️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2714.svg) **Correct Horde Nefarian Detection****
Turtle WoW uses slightly different yell texts than Classic.
A keyword overlap caused Horde Nefarian to be mis‑classified as Onyxia in rare cases.

This is now fully resolved:

 - `"onyxia"` / `"brood mother"` → Onyxia
 - `"nefarian"` / `"blackrock"` → Nefarian

No more false positives.

 **![✔️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2714.svg) **Improved Sync Accuracy****
 - Unconfirmed events now resolve correctly once matching confirmations arrive
 - Incorrectly classified events no longer block confirmation
 - Timers no longer show “X minutes ago” for mis‑detected events
 - Cooldowns always count down correctly for Horde Nefarian

 **![✔️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2714.svg) **pfUI Compatibility****
 - Added a delayed UI restore to prevent pfUI from hiding the main window or minimap button
 - Minimap button strata corrected
 - UI loads reliably on login

 **![✔️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2714.svg) **Debug & Code Cleanup****
 - All debug output is now properly wrapped in `if DB.debug then … end`
 - No more accidental debug spam
 - Safer string handling and internal cleanup

 **![📦](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e6.svg) **Recommended Update****
This update is recommended for all users, especially Horde players.
It ensures correct buff detection, stable sync behavior, and full compatibility with Turtle WoW’s custom yell texts.

 **![📥](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e5.svg) **Download****
<https://github.com/Weirdpuppy94/RallyHelper>

 **![❤️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2764.svg) **Thank You****
Thanks to everyone who reported issues and helped test the fixes.

RallyHelper remains a **lightweight, transparent tracker** — not a worldbuff guide, not a planner, not a warning system.

## Post 172004 by Fireman591 — 2026-03-23T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172004#p172004 | page 1 | era: post-1.18.1 -->

Any chance for a much smaller footprint similar to PWB?

## Post 172200 by Pearcen32 — 2026-03-24T18:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172200#p172200 | page 1 | era: post-1.18.1 -->

**[1.3.7] - 2026-03-24 — Stability & Robustness Release**

Summary
Stability-focused patch that hardens timer sync, prevents outlier timestamps from breaking timers, and makes sound playback and user notifications more robust and configurable.

Fixed
- **Robust timer selection** — `TIMER_*` responses are now chosen by the adjusted timestamp closest to now, preventing single outliers from overwriting correct timers (stops multi‑hour jumps caused by bad client clocks).
- **Timestamp sanity checks** — `AcceptEvent` rejects absurd timestamps (older than 30 days or more than 1 hour in the future).
- **Table / length safety** — replaced fragile `#table` checks with safe `next()` checks to avoid runtime errors on non‑dense tables.
- **Scoping & stability fixes** — cleaned up local/global scoping issues and removed duplicate/conflicting definitions that could cause runtime errors in some environments.
Changed / Improved
- **Hardened sound handling**
 - Prefer `PlaySoundFile` (more reliable on Classic/private builds).
 - Use `PlaySound`/`SOUNDKIT` only when available; all calls wrapped in `pcall`.
 - Added debug output for sound attempts when `DB.debug = true`.
- **Message versioning** — outgoing timer messages include an addon version tag (`vN`); incoming messages parse the version and prefer newer/compatible senders where configured.
- **Ignore list** — new `/rallyignore add|remove|list <name>` to temporarily block noisy or buggy senders.
- **Toast configuration** — new `DB.toastMode` with values `chat`, `ui`, `none`; added `/rallytoast` to switch modes.
- **DB migration** — `EnsureDB()` initializes new keys safely and does not overwrite existing user preferences.
Notes
Recommend all channel users update to **v1.3.7** for best results. If you see unexpected timers, enable debug (`/rally debug`) and report logs with reproduction steps.

Quick commands (reminder)
- **/rallyrequest** — request timers from the channel
- **/rallyignore add <name>** — ignore a noisy sender
- **/rallytoast none|chat|ui** — control confirmation messages
Thanks to everyone who reported issues and helped test. If you find regressions, please open an issue on GitHub and include debug logs (`DB.debug = true`).

## Post 172203 by Pearcen32 — 2026-03-24T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172203#p172203 | page 1 | era: post-1.18.1 -->

> **Fireman591 wrote: Mon Mar 23, 2026 7:09 pm**
> Any chance for a much smaller footprint similar to PWB?

Yes — I'm working on a tiny, minimal RallyHelper build.
Goal: reliable timer sync with a very small footprint and a simple, unobtrusive UI.

- **What it includes** — core sync + DB, basic verification, minimal slash commands (/rally status, /rally request, /rally users), and a tiny timer display with “unconfirmed” markers.
- **What it omits (by default)** — minimap button, sounds, heavy UI, and debug logging. Defaults: sounds off, toasts off, debug off.
- **Why** — for players who just want accurate timers without extra features or resource use (PWB‑style).
Thanks for the interest

## Post 173483 by Pearcen32 — 2026-03-31T18:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173483#p173483 | page 1 | era: post-1.18.1 -->

**RallyHelper 1.4.0 — Changelog (from 1.3.9)**

 **![✨](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2728.svg) New Features**
 **• Completely redesigned main UI**
 - New layout with faction‑colored sections for Onyxia, Nefarian, ZG, DMF, and Warchief’s Blessing
 - Updated icons and improved readability
 - Automatic refresh every 0.4 seconds
 - Dynamic layout that adapts to faction filter and window size

 **• New Settings Window**
 - Faction filter: Horde / Alliance / Both
 - Adjustable UI width, height, and scale
 - Lock/unlock UI position
 - Toggle buff sounds
 - Clean, modern dialog‑style interface

 **• First‑Time Setup Wizard**
 - Guides new users through selecting their faction filter
 - Automatically updates UI layout after selection

 **• New Unconfirmed Events Window**
 - Scrollable list of unconfirmed buff calls
 - Filters for Alliance, Horde, ZG, and Warchief
 - Shows timestamp, zone, and number of sources
 - Helps diagnose incomplete confirmations

 **• Expanded Minimap Button Functionality**
 - Left‑click: toggle main UI
 - Alt‑click: open settings
 - Shift‑click: share timers to chat
 - Middle‑click: open unconfirmed window
 - Right‑click: print status
 - Alt‑drag: reposition minimap button

 ---

 **⚙ Core Improvements**
 **• Temporary change: verification requirement reduced**
 - `RH_VERIFY_REQUIRED` lowered from **2 → 1**
 - This is **temporary** to improve responsiveness during low‑population hours
 - Full multi‑source verification will return in a later version

 **• Improved timer synchronization**
 - New `RH_TimerResponses` system collects TIMER messages for 2 seconds
 - Selects the best timestamp based on clock offset and sender version
 - More accurate and stable timer acceptance

 **• Clock offset correction**
 - Each sender’s clock drift is tracked and compensated
 - Reduces false “unconfirmed” states
 - Improves cross‑realm and cross‑client consistency

 **• DMF detection overhaul**
 - More reliable detection via gossip, merchant, and quest greeting events
 - Zone name sanitized and stored correctly
 - Prevents duplicate triggers within a short window

 **• Channel handling rewritten**
 - More robust parsing of TIMER and REQ messages
 - Version filtering (`MIN_ACCEPTED_VERSION`) ensures compatibility
 - Better error handling and fallback behavior

 **• Sound system improvements**
 - Volume scaling now uses master CVar
 - Restores previous volume after playback
 - Fallback to SOUNDKIT if custom file fails

 **![🐞](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f41e.svg) Bug Fixes**
 - Fixed: UI disappearing when SavedVariables were incomplete
 - Fixed: DMF zone not always saved
 - Fixed: Minimap button drifting after reload
 - Fixed: Unconfirmed list showing incorrect colors
 - Fixed: Timer acceptance ignoring zone when empty
 - Fixed: Clock offset producing negative values
 - Fixed: UI scale not applied on first load
 - Fixed: Chat filter occasionally hiding unrelated messages
 - Fixed: `/rally users` not updating correctly in some cases
 - Fixed: Rare crash when receiving malformed TIMER messages

 **![📦](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e6.svg) Developer Notes**
 - 1‑source verification is **temporary** and will be restored to 2‑source logic once the new confirmation pipeline is finalized.
 - The UI and core are now fully modular: UI code lives in `RallyHelper_UI`, logic in `RallyHelper_Core`.
 - All SavedVariables are now split into account‑wide (`RallyHelperDB`) and character‑specific (`RallyHelperCharDB`).

