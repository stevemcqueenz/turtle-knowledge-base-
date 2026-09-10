---
title: "TWThreat"
url: "https://turtle-wow.fandom.com/wiki/TWThreat"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-04T07:28:38Z"
fetched: "2026-09-10T07:39:45Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# TWThreat

Threat meter for Turtle WoW. Requires you to be in a party or raid, attacking elite creatures or bosses.

## Installation
  -GitAddonsManager (Recommended)**

The easiest way to keep TWThreat up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/MarcelineVQ/TWThreat.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to TWThreat, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(balakethelock)**](https://github.com/balakethelock/TWThreat)
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/TWThreat)

## commands
- <code>**/twt show**</code>: Shows the main TWThreat window.
- <code>**/twtshow**</code>: Also shows the main TWThreat window (an alias for <code>/twt show</code>).
- <code>**/twt tankmode**</code>: Enables Tank Mode.
- <code>**/twt skeram**</code>: Toggles the Skeram module (likely a specific feature related to the boss The Prophet Skeram).
- <code>**/twt debug**</code>: Toggles debugging mode. When enabled, it shows a "pps" frame with traffic and update information.
- **<code>/twt who</code>:** Sends a query to see which raid/party members are also running the TWThreat addon and displays their version information.

## Preview
  -Settings**:

  -Tank-mode:**

## Features
- **Threat Display:** The core functionality of the addon is to display threat levels of raid or party members on a target.
- **Tank Mode:** A specific mode designed for tanks, potentially showing threat on multiple targets or highlighting targets based on threat.
- **Skeram Module:** A feature specifically for the boss The Prophet Skeram, likely providing unique threat insights for that encounter.
- **Debugging Mode:** Provides information about addon traffic and updates, useful for troubleshooting.
- **Addon Status (Who Query):** Allows users to see who else in their group is running the addon and their version. This is helpful for ensuring everyone has the latest version or identifying compatibility issues.
- **Target Frame Indicators:** Can display threat information directly on the default or pfUI target frames (percentage and potentially a glow effect).
- **Full Screen Glow:** An optional visual alert for high threat (specifically for non-tanks when they are close to pulling aggro).
- **Aggro Sound:** An optional audio alert for high threat.
- **Configurable UI:** Users can customize the visibility of columns (TPS, Threat, Percentage), bar height, number of visible bars, font, window scale, and opacity.
- **Healer Master Target (HMT):** Allows a healer to set a specific tank as their "Master Target," likely influencing how threat information is displayed for them.
- **Relaying Threat Data:** The addon appears to have functionality to relay threat data to other users.
- **Spec Detection:** The addon attempts to detect the player's specialization based on talent points and send this information to other addon users.

## Contributors
- [Henry](https://armory.turtle-wow.org/#!/character/Henry)
- [Laughadin](https://armory.turtle-wow.org/#!/character/Laughadin)
- [Faralynn](https://armory.turtle-wow.org/#!/character/Faralynn)
- [Draxer](https://armory.turtle-wow.org/#!/character/Draxer)

## Changes
  -1.3.0**

- Resistant to losing threat display if an addon is interfering with your targeting.
- Click to select TankMode targets directly (no need for target of target) if you have SuperWoW.
- Visaully smoother threat bar updates.

  -1.2.3 unofficial balake version**

- Queries threat when the target is in combat even if player is not in combat or did not do any threat on the target yet.
- Standardized update speed across specs.
- TANK MODE IS UNTESTED. If you like using that please volunteer to tell me if it's bug-free or not.

  -v1.2.3**

- Fixes for TW patch 16.0

  -v1.2.2**

- Bar animation fixes.
- Tank-name bug fix.
- Configurable aggro warning threshold.

  -v1.2.1**

- Scale Tank-mode window with main window.

  -v1.2.0**

- Threat API v4, older versions don't work anymore.
- pfUI integration for target frame glow and threat percentage.
- tank-mode is back !
- New threat warning sound.
- New icons for settings/lock/close buttons.

  -v1.1.0**

- Threat API v3, older versions don't work anymore.
- Summoned creatures show the right threat values.
- Settings for in and out of combat frame opacity.

  -v1.0.2**

- Revamped settings window with tabs.
- New setting: frame scale.
- Enabled bar animation.
- Disabled Tank-mode (still buggy).

  -v1.0.1**

- Faster way to get guid
- Tank-mode window is now movable and stick-able to top/bottom/left/right of main window.
- Tank-mode window has test data in config mode.
- Better colors for Tank-mode targets and current target is highlighted.
- Window title is more stable for healers.
- Removed bar animation (maybe only temporary).
- Clear bars if creature dies, for healers.
- Fix potential bug where Pull Aggro At bar was not shown.
- Fix tank-threat bug when tank is not top in threat list.
