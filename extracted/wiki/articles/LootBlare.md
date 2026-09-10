---
title: "LootBlare"
url: "https://turtle-wow.fandom.com/wiki/LootBlare"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-03T10:52:36Z"
fetched: "2026-09-10T07:39:09Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# LootBlare

**LootBlare** displays a clear, sorted list of item rolls in a moveable frame whenever a single uncommon or higher item is linked in Raid Warning. It helps raid leaders and players see roll results at a glance.

## Installation
**GitAddonsManager**

The easiest way to keep **LootBlare** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/MarcelineVQ/LootBlare.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to LootBlare, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(FSuhas)**](https://github.com/FSuhas/LootBlare)
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/LootBlare)

## How to Use
**Starting a Roll**

- To initiate a loot roll, the **Master Looter (ML)** sends a **Raid Warning** with the linked item. This prompts the addon to display the roll frame.
- Only the **ML** can start the roll; other players' rolls are ignored.

**Roll Sorting**

- Rolls are automatically categorized and sorted by type to streamline loot distribution. Only the first roll submitted by each player is considered; subsequent rolls are ignored.

**Moving the Frame**

- The loot frame appears at the center of your screen and can be moved by dragging.

**Easy Roll Buttons**

- The addon provides quick buttons for common roll types:

{| class="fandom-table"
!Button
!Description
!Roll Range
!Tooltip
|-
|**SR**
|Soft Reserve
|1–101
|Rolls for soft reserve items
|-
|**MS**
|Main Spec
|1–100
|Rolls for main spec
|-
|**OS**
|Off Spec
|1–99
|Rolls for off spec
|-
|**TM**
|Transmog
|1–50
|Rolls for transmog
|}

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/lb</code> or <code>/lootblare</code>
|Print the LootBlare commands into chat
|-
|<code>/lb time <seconds></code>
|Set how long the loot frame stays visible
|-
|<code>/lb autoClose on</code>
|Enable auto-close (frame closes after duration)
|-
|<code>/lb autoClose off</code>
|Disable auto-close
|-
|<code>/lb settings</code>
|Show current configuration settings
|}

## Preview
## Contributors
- [Siventt](https://github.com/Siventt/LootBlare)
- [SeguisDumble](https://github.com/SeguisDumble/LootBlare)
- [Weird Vibes](https://github.com/MarcelineVQ/LootBlare)

## Changelog
- **1.2.0**: Clearer visual indication of what rolls are being done. Separate display and loot timers.
- **1.1.11**: Various changes
  - Prevent blare window from closing due to timeout for the Master Looter
  - Track min and max rolls, highlight minimum rolls which aren't 1 and separate them
  - Re-ask for masterloot data more often
  - Use monospaced font for layout consitency
  - Avoid lua local variable closure limit by moving top level varables to tables
- **1.1.9**: Add communication using CHAT_MSG_ADDON events
- **1.1.8**: Remove announce message after each roll. Added time announce message after changing master loot
- **1.1.7**: Added class colors, autoClose option, and config commands. Only show frame if the sender is the ML. Ignore rolls after the time has elapsed. Get FrameShowDuration from the ML.
- **1.1.6**: Simple Buttons and Tooltips.
- **1.1.5**: Added button for SR and roll type order and color.
- **1.1.4**: Added more buttons for OS and Tmog. Now only registers the first roll of each player.
- **1.1.3**: Added MainSpec Button for rolling.
