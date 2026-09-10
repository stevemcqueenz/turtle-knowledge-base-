---
title: "ProcWatch"
url: "https://turtle-wow.fandom.com/wiki/ProcWatch"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-12T15:13:03Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ProcWatch

ProcWatch is designed to determine proc rates of weapon procs and monitor specific combat events. It helps players track how often certain procs occur during fights, providing valuable stats for optimizing gear and understanding proc mechanics.

## Installation
  -GitAddonsManager**

The easiest way to keep **ProcWatch** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/diaFRAGma/ProcWatch.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a .zip.
# Unpack the .zip and rename the folder to ProcWatch, removing the -master suffix.
# Move the folder into your Interface/AddOns directory and restart the game.

  -Note**: check every box in the Combat Log for Spell Messages

## Git Links
- [**(diaFRAGma)**](https://github.com/diaFRAGma/ProcWatch)

## Basic Workflow
# Use <code>/procwatch (event text)</code> or click on the "Event" text in the UI to define what combat spam to monitor.
# Hit a mob or enter combat; ProcWatch will start tracking hits and procs.
# When combat ends, it totals the data and updates the display.
# You can reset last fight or total stats via the interface.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/procwatch</code>
|Show the ProcWatch window.
|-
|<code>/procwatch hide</code>
|Hide the window but keep monitoring.
|-
|<code>/procwatch show</code>
|Show the window.
|-
|<code>/procwatch exit</code>
|Stop monitoring and shut down.
|-
|<code>/procwatch (text)</code>
|Set a new event pattern for monitoring.
|}

## Preview
## Features
- Tracks hits, procs, and fight duration.
- Records total stats across multiple fights.
- Supports wildcards in event text for flexible pattern matching.
- Notifies on procs if enabled.
- Customizable options for ignoring single-hit fights, tooltips, and combat mode.

## Options
- **Pause and Resume Monitoring:** Use the pause button or command.
- **Sticky Mode:** Pin or unpin the window with the sticky button.
- **Reset Stats:** Reset last fight or total stats with dedicated buttons.
- **Toggle Options:** Show/hide options panel for settings like ignoring one-hit fights, notifications, tooltips, and combat mode.

## UI Elements
- **Main Window:** Displays current event, hits, procs, and stats.
- **Buttons:** Minimize, Close, Sticky, Reset, Options, Exit, Pause.
- **Tooltips:** Hover over UI elements for descriptions.

## Usage Tips
- Wildcards like <code>(.+)</code>, <code>(%d+)</code>, and <code>(%w+)</code> can be used in event text for pattern matching.
- For group procs, enable "Watch All Combat" to monitor procs from group members.
- Be specific with your event text to avoid false positives.
- Use notify-on-proc to see immediate alerts for procs.
- Remember that some effects (like Icy Chill) are anonymous and cannot be tracked to a specific source.

## **Notes**
- The addon is designed to be lightweight and minimally impact gameplay.
- It remembers its last state and resumes monitoring on reload unless explicitly stopped.
- You can run <code>ProcWatch_Startup("event")</code> via scripts for macro automation.

## Developer Notes
- The code hooks into <code>ChatFrame_OnEvent</code> to monitor combat spam.
- Provides a set of UI functions for minimizing, maximizing, and configuring the window.
- Supports dynamic pattern matching and flexible configuration.

## Credits
- **Author:** Gello, Hyjal (as of 3/21/2005)
