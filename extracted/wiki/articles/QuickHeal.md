---
title: "QuickHeal"
url: "https://turtle-wow.fandom.com/wiki/QuickHeal"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-10-02T16:22:19Z"
fetched: "2026-09-10T07:39:26Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# QuickHeal

**QuickHeal** automatically heals party/raid members and yourself when needed, without manual targeting or enemy deselection. Designed for maximum mana efficiency, it downranks spells when appropriate and automatically selects the best healing spell based on the situation.

## Installation
**GitAddonsManager**

The easiest way to keep **QuickHeal** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Bestoriop/QuickHeal.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>QuickHeal</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Mandatory**:

- [HealComm](https://github.com/maztheman/HealComm) is mandatory or QuickHeal won't work.
- [Bonusscanner](https://github.com/GryllsAddons/BonusScanner) makes QuickHeal and HealComm (Luna unit Frames) more accurate by taking gear and +Heal into account.

## Git Links
- [**(Bestoriop)**](https://github.com/Bestoriop/QuickHeal) - Normal version
- [**(jrc13245)**](https://github.com/jrc13245/QuickHeal) - Superwow support
- [**(liiora)**](https://github.com/liiora/QuickHeal) - Nampower integration

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/qh</code>
|Heal your current target
|-
|<code>/qh party</code>
|Heal a party member
|-
|<code>/qh mt</code>
|Heal main tank
|-
|<code>/qh nonmt</code>
|Heal everyone except main tanks
|-
|<code>/qh target</code>
|Heal your current target
|-
|<code>/qh hot</code>
|Apply Hot (Heal over Time) to needy target
|-
|<code>/qh hot fh</code>
|Apply max rank Hot Firehose
|-
|<code>/qh hot max</code>
|Apply max rank Hot
|-
|<code>/qh chainheal</code>
|Perform a Chain Heal
|-
|<code>/qh toggle</code>
|Switch between Normal and High HPS modes
|-
|<code>/qh downrank</code>
|Open slider to limit spell ranks for mana efficiency
|-
|<code>/qh tanklist</code>
|Show/hide main tank list UI
|-
|<code>/qh reset</code>
|Reset settings to default
|-
|<code>/qh help</code>
|Show help info and usage instructions
|-
|<code>/qh cfg</code>
|Open configuration interface
|}

## Keybindings
{| class="fandom-table"
!Action
!Key Binding Name
!Description
|-
|Heal Target
|**QUICKHEAL_HEAL**
|Heal your current target
|-
|Heal Party
|**QUICKHEAL_HEALPARTY**
|Heal a party member
|-
|Heal Main Tank
|**QUICKHEAL_HEALMT**
|Heal the main tank
|-
|Heal Non-Main Tank
|**QUICKHEAL_HEALNONMT**
|Heal everyone except main tanks
|-
|Heal Player
|**QUICKHEAL_HEALSELF**
|Heal yourself
|-
|Heal Target's Target
|**QUICKHEAL_HEALTARGETTARGET**
|Heal your target’s target
|-
|Heal Subgroup
|**QUICKHEAL_HEALSUBGROUP**
|Heal a subgroup
|-
|Heal Party
|**QUICKHEAL_HEALPARTY**
|Heal your party
|-
|Hot (HoT)
|**QUICKHEAL_HOT**
|Apply Hot to needy targets
|-
|Hot Firehose (Naxx Gargs)
|**QUICKHEAL_HOTFH**
|Apply max rank Hot Firehose
|-
|Toggle HPS Mode
|**QUICKHEAL_TOGGLEHPS**
|Switch between Normal and High HPS modes
|-
|Show/Hide Downrank Window
|**QUICKHEAL_SHOWDOWNRANKWINDOW**
|Open or close downrank slider window
|-
|Show/Hide Tank List
|**QUICKHEAL_TANKLIST**
|Show/hide main tank list UI
|}

## Preview
## **Features**
- **Automated healing:** Quickly cast heals on selected targets or groups with simple commands or key binds.
- **Target management:** Easily heal your current target, focus targets, or specific group members.
- **Mana efficiency control:** Use downranking to limit spell ranks, conserving mana.
- **Healing modes:** Switch between Normal HPS (healing throughput) and High HPS modes for more aggressive healing.
- **Tank management:** Toggle and view main tank lists for focused healing.
- **Customization:** Configure various aspects such as healing pools, spell types, and hot applications.
