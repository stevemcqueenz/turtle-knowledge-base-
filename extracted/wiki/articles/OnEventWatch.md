---
title: "OnEventWatch"
url: "https://turtle-wow.fandom.com/wiki/OnEventWatch"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-09T13:49:43Z"
fetched: "2026-09-10T07:39:21Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# OnEventWatch

-OnEventWatch** tracks the performance of <code>OnEvent</code> handlers, showing how much time they take per frame. It helps identify slow or frequent events, aiding in diagnosing UI and addon performance issues.

## **Installation**
  -Manual Installation Only**

# Download this zip: **[OnEventWatch_1_2.zip](https://web.archive.org/web/20081230205625if_/http://fs.wowinterface.com:80/download.php?id=4840)**
# Unpack the <code>.zip</code> into your <code>Interface/AddOns</code> directory and restart the game.

## Usage
- **To start profiling:**  Type <code>/onevent</code> in the chat window.
- **First run:**  The addon will scan all frames and note those with an <code>OnEvent</code> handler. It then wraps these handlers with timers (<code>debugprofilestart()</code> and <code>debugprofilestop()</code>) to measure execution time.
- **Subsequent runs:**  <code>/onevent</code> toggles the profiling window, which displays:
  - List of frames that received events
  - The specific events triggered
  - Total and average execution times
- **Searching:**  Use the search boxes at the bottom of the profiling window to filter by frame name or event name (partial matches allowed).
- **Minimap Button:**  Acts as a reminder that OnEventWatch is active and allows toggling the profiling window without typing commands.  *To remove the button:* Delete the <code>MyMinimapButton.lua</code> file.
- **Shift+Click on Events:**  When the ChatFrameEditBox is open, shift+clicking an event inserts its stats into the chat box for easy copying or comparison.

## Preview
## Profiling Window
  -Profiling Window Features**

- Displays list of frames with recent <code>OnEvent</code> activity.
- Shows:
  - Frame name
  - Event name
  - Count of occurrences
  - Total time spent
  - Average time per event
- **Search** by frame or event name.
- **Sort** columns by clicking headers.
- **Link**: Shift+Click on an entry to copy details into chat (for comparison).

  -Reset Data**:

- Click **Reset** in the profiling window to clear collected data and reload UI.

  -Stop Watching**:

- Click **Stop** in the profiling window to remove hooks and reload UI.

## Changes
  -New in 1.2**

- Removed redundant 'Refresh' button
- Separated 'Stop' and 'Reset' buttons
- MyMinimapButton change for 1.10.2
- Events shift+clickable to chat (see below)
  -Patch Notes**

- **1.2 (05/04/2006):** Changed 'Refresh' to 'Stop', updated Minimap button, added chat linkability
- **1.1 (04/16/2006):** Removed garbage collection on sorts, added minimap button, continuous list updates
- **1.0 (04/14/2006):** Initial release
