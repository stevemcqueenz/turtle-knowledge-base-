---
title: "HCDeaths"
url: "https://turtle-wow.fandom.com/wiki/HCDeaths"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:49:06Z"
fetched: "2026-09-10T07:38:56Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# HCDeaths

HCDeaths displays and logs hardcore character deaths. It provides visual notifications (toasts), logs death details.

## Installation
**GitAddonsManager**

The easiest way to keep **HCDeaths** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/neimad-mp/HCDeaths.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>HCDeaths</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- **[(neimad)](https://github.com/neimad-mp/HCDeaths)**

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/hcd message</code>
|Toggle system death messages
|-
|<code>/hcd move</code>
|Enable moving toast window
|-
|<code>/hcd log</code>
|Toggle death log window
|-
|<code>/hcd log scale [num]</code>
|Set death log scale
|-
|<code>/hcd toast</code>
|Toggle toast notifications
|-
|<code>/hcd toast scale [num]</code>
|Set toast popup size
|-
|<code>/hcd toast time [sec]</code>
|Set toast display duration
|-
|<code>/hcd progress</code>
|Toggle level progress toasts
|-
|<code>/hcd color</code>
|Toggle ring colors for toast
|-
|<code>/hcd deathsound</code>
|Toggle death sound on toast
|-
|<code>/hcd levelsound</code>
|Toggle level-up sound on toast
|-
|<code>/hcd reset</code>
|Reset all settings to defaults
|}

## Usage
- **Moving Toast & Log Windows:**  Hold Ctrl + Shift and drag to reposition.  Hold Ctrl + Shift and right-click to reset position.
- **Death Notifications (Toasts):**  Popups display death info with character class, level, zone, and killer details.  Toasts can be scaled and timed via commands.
- **Death Logging:**  Records are stored automatically; viewable in the log window or in the saved variables file.
- **Customization:**  Toggle features such as colors, sounds, and toast progress notifications to suit your preferences.

## Preview
Death List:

## Death Logs
Death records are saved in:

- <code>\WTF\Account\YOUR_ACCOUNT\SavedVariables\HCDeaths.lua</code>

Example entry:<syntaxhighlight lang="lua">
[1] = {
  ["zone"] = "Elwynn Forest",
  ["stime"] = "01:41:46",
  ["killerName"] = "Natural Causes",
  ["killerClass"] = "ENV",
  ["killerLevel"] = "nil",
  ["lastWords"] = "nil",
  ["playerClass"] = "Rogue",
  ["playerLevel"] = 10,
  ["sdate"] = "2023/11/06",
  ["hcType"] = "HC",
  ["playerName"] = "Tents",
  ["deathType"] = "PVE",
}
</syntaxhighlight>
