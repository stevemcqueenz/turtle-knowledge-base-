---
title: "DPSMate"
url: "https://turtle-wow.fandom.com/wiki/DPSMate"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-15T05:31:23Z"
fetched: "2026-09-10T07:38:35Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# DPSMate

-DPSMate** is an advanced combat analysis tool designed to provide detailed statistics and visualizations of your encounters.

## **Installation**
  -GitAddonsManager**

The easiest way to keep **DPSMate** up to date is by using [GitAddonsManager](GitAddonsManager).

# Add the Repository: Add the following URL to GitAddonsManager: https://github.com/laytya/DPSMate.git
# Select the Branch: Ensure that the master branch is selected.
# Update: Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Extract the .zip file, move DPSMate and the module folders you want to your <code>Interface/AddOns</code> directory and restart the game.

  -Note**: 

- No one needs all the modules installed. For dps you only need DPSMate itself, and the healer modules for healers. Loading all the modules is excessive.
- If you have issues with DPSMate try to remove DPSMate.lua and DPSMate.lua.bak in WTF/Account/YOUR ACC NAME/Nordanaar/YOUR CHAR NAME/SavedVariables/
- DPSMate relies on combat log data, range limits the information collected. To increase the combat log range (default 40 yards) to 200 yards, run:
<syntaxhighlight lang="lua">
/run for _,n in pairs({"Party", "PartyPet", "FriendlyPlayers", "FriendlyPlayersPets", "HostilePlayers", "HostilePlayersPets", "Creature" }) do SetCVar("CombatLogRange"..n, 200) end
</syntaxhighlight>

## Git links
- [**(laytya)**](https://github.com/laytya/DPSMate)
- [**(jrc13245)**](https://github.com/jrc13245/DPSMate)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/dps lock</code>
|Locks all frames, preventing resizing/movement
|-
|<code>/dps unlock</code>
|Unlocks frames for movement/resizing
|-
|<code>/dps config</code>
|Opens the configuration menu
|-
|<code>/dps showAll</code>
|Shows all data windows
|-
|<code>/dps hideAll</code>
|Hides all data windows
|-
|<code>/dps show <frame></code>
|Shows a specific frame by name
|-
|<code>/dps hide <frame></code>
|Hides a specific frame by name
|}

## Binding Keys
Keybindings menu (Escape > Keybindings).
{| class="fandom-table"
!Action
!Binding Command
!Description
|-
|**Reset DPSMate Data**
|<code>DPSMate_PopUp:Show()</code>
|Opens the popup to reset current data
|-
|**Toggle AddOn Frames**
|<code>DPSMate.Options:ToggleVisibility()</code>
|Shows or hides all data windows
|-
|**Toggle Report Frame**
|<code>if not DPSMate_Report:IsVisible() then DPSMate_Report:Show() else DPSMate_Report:Hide() end</code>
|Show/hide the report window
|}

## Features
  -Multiple & Customizable Frames**

- Show multiple data modes simultaneously.
- Resizable and positionable to fit your interface.
- Fully customizable via the configuration menu.

  -Extensive Data Modes (~40 modes)**

- Effective Healing & Absorbs
- Death Recalls (your or others)
- Dispells (including Hot Dispels like Abolish Poison)
- Interrupts (stuns, silences)
- Auras (Gained, Lost, Uptime)
- Compare Mode
- And many more...

  -Additional Utilities**

- Segment-based stats (Total, Current Fight, Past segments)
- Data synchronization for accuracy
- Report generation for any mode/player
- Group filtering (classes, specific players, group-only)
- Group management commands (lock, unlock, show/hide frames, reset data)

## Preview
Damage Meter:

Analyzing tool:

## Folders
Addon and module folders
{| class="fandom-table"
!Folder Name
!Description
|-
|DPSMate
|The required addon folder
|-
|DPSMate_Absorbs
|Adds the absorption evaluation module.
|-
|DPSMate_AbsorbsTaken
|Adds the absorption taken evaluation module.
|-
|DPSMate_Activity
|Adds the activity module.
|-
|DPSMate_Auras
|Adds the modules for gained auras, lost auras, and aura uptimes.
|-
|DPSMate_Casts
|Adds the casts module.
|-
|DPSMate_CCBreaker
|Adds the CCBreaker (Crowd Control breaking)module.
|-
|DPSMate_CureDisease
|Adds the modules for cure disease evaluation.
|-
|DPSMate_CureDiseaseReceived
|Adds the modules for cure disease received evaluation.
|-
|DPSMate_CurePoison
|Adds the modules for cure poison evaluation.
|-
|DPSMate_CurePoisonReceived
|Adds the modules for cure poison received evaluation.
|-
|DPSMate_DamageTaken
|Adds the modules for damage taken evaluation.
|-
|DPSMate_Deaths
|Adds the modules for death evaluation.
|-
|DPSMate_Debug
|Adds the debug module.
|-
|DPSMate_Decurses
|Adds the modules for decurse evaluation.
|-
|DPSMate_DecursesReceived
|Adds the modules for decurses received evaluation.
|-
|DPSMate_!deDE
|Load this module to support the German client.
|-
|DPSMate_Dispels
|Adds the modules for general dispel evaluation.
|-
|DPSMate_DispelsReceived
|Adds the modules for dispels received evaluation.
|-
|DPSMate_EDD
|Adds the modules for EDD (enemy damage done) evaluation.
|-
|DPSMate_EDT
|Adds the modules for EDT (enemy damage taken) evaluation.
|-
|DPSMate_EHealing
|Adds the modules for effective healing evaluation.
|-
|DPSMate_EHealingTaken
|Adds the modules for effective healing taken evaluation.
|-
|DPSMate_Fails
|Adds the modules for fail evaluation.
|-
|DPSMate_!frFR
|Load this module to support the French client.
|-
|DPSMate_FriendlyFire
|Adds the modules for friendly fire evaluation.
|-
|DPSMate_FriendlyFireTaken
|Adds the modules for friendly fire taken evaluation.
|-
|DPSMate_Healing
|Adds the modules for raw healing evaluation.
|-
|DPSMate_HealingAndAbsorbs
|Adds the modules for healing and absorbs evaluation.
|-
|DPSMate_HealingTaken
|Adds the modules for raw healing taken evaluation.
|-
|DPSMate_Interrupts
|Adds the modules for interrupt evaluation.
|-
|DPSMate_!koKR
|Load this module to support the Korean client.
|-
|DPSMate_LiftMagic
|Adds the modules for lift magic evaluation.
|-
|DPSMate_LiftMagicReceived
|Adds the modules for lift magic received evaluation.
|-
|DPSMate_OHealingTaken
|Adds the modules for overhealing taken evaluation.
|-
|DPSMate_Overhealing
|Adds the modules for overhealing evaluation.
|-
|DPSMate_Procs
|Adds the modules for proc evaluation.
|-
|DPSMate_!ruRU
|Adds support for Russian language.
|-
|DPSMate_Threat
|Adds the modules for threat evaluation.
|-
|DPSMate_!zhCN
|Load this module to support the Mandarin client.
|} 

## Contributors
- [Shino](https://github.com/tdymel) (author)
- [(Fedilious)](https://github.com/Fedilious/DPSMate)
- [laytya](https://github.com/laytya) (many fixes)
- [shikulja](https://github.com/shikulja) (Russian localization)
