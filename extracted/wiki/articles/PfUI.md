---
title: "PfUI"
url: "https://turtle-wow.fandom.com/wiki/PfUI"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-11T08:10:32Z"
fetched: "2026-09-10T07:39:24Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# PfUI

**pfUI** is a comprehensive user interface replacement. Inspired by modern UI designs, pfUI offers a minimalistic and easy-to-use interface, built from scratch without relying on third-party libraries.

## Installation
**GitAddonsManager**

The easiest way to keep **pfUI** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/shagu/pfUI.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a .zip.
# Unpack the .zip and rename the folder to pfUI, removing the -master suffix.
# Move the folder into your Interface/AddOns directory and restart the game.

**Recommended Addons:**

- **[pfQuest](pfQuest):** Quest helper & database
- **[WIM](WIM):** Whisper IM system

**Plugins:**

- **[pfUI-eliteoverlay](https://shagu.org/pfUI-eliteoverlay/):** Adds elite dragon icons to unitframes
- **[pfUI-fonts](https://shagu.org/pfUI-fonts/):** Additional fonts
- **[pfUI-CustomMedia](https://github.com/mrrosh/pfUI-CustomMedia):** Custom textures
- **[pfUI-Gryphons](https://github.com/mrrosh/pfUI-Gryphons):** Adds back gryphons on actionbars

## Git Links
- [**(shagu)**](https://github.com/shagu/pfUI)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|/pfui
|Opens or toggles the pfUI configuration GUI
|-
|/share
|Opens the import/export dialog for settings
|-
|/gm
|Opens the GM ticket dialog
|-
|/rl
|Reloads the user interface
|-
|/farm
|Toggles Farm Mode (hidden or minimal UI for farming)
|-
|/pfcast SPELLNAME
|Casts a spell on a mouseover target
|-
|/focus
|Sets the current target as focus
|-
|/castfocus SPELLNAME
|Casts a spell on the focus target
|-
|/clearfocus
|Clears the focus target
|-
|/swapfocus
|Toggles between focus and target frames
|-
|/pftest
|Activates or deactivates unitframe test mode
|-
|/abp
|Opens the Addon Button Panel
|}

## Preview
Options:

User Interface:

## Modules & Skins
pfUI supports modular components and custom skins:

**Register modules/skins:**<syntaxhighlight lang="lua">
pfUI:RegisterModule("moduleName", "version", function() ... end)
pfUI:RegisterSkin("skinName", "version", function() ... end)
</syntaxhighlight>

**Load modules/skins:**<syntaxhighlight lang="lua">
pfUI:LoadModule("moduleName")
pfUI:LoadSkin("skinName")
</syntaxhighlight>

## Performance Tips
- Disable Frame Shadows (Settings > Appearance)
- Minimize active external addons
- Troubleshoot performance issues by disabling addons incrementally

## FAQs
**What does "pfUI" stand for?**
- "pfui!" is German slang meaning "pooh!" — reflecting the developer's humorous attitude toward creating configuration UIs.

**How to donate?**
- Support via GitHub or Ko-fi.

**How to report bugs?**
- Use the bug tracker, providing detailed info, error messages, steps to reproduce, and addon conflict info.

**Performance issues?**
- Known issue: Frame Shadows. Disable them in settings.
- For other issues, disable all addons except pfUI, then re-enable one-by-one.

**Pet Happiness Indicator?**
- Shown by the pet's frame color:
  - Green = Happy
  - Yellow = Content
  - Red = Unhappy
- Since v4.0.7, an additional icon can be enabled.

**Can I use Clique?**
- pfUI supports clickcasting natively. For Vanilla WoW, a compatible version of Clique is available here. Apply the patch if needed.

**Where is the Experience Bar?**
- Appears on mouseover next to the left chatframe or can be set to always visible via settings.

**How to show Damage & Threat meters?**
- Enable "dock" feature for third-party meters like DPSMate or KTM.
- Toggle meters via the ">" symbol on the bottom-right panel.

**Why is chat limited to 3 lines?**
- "Simple Chat" option in Blizzard settings restricts chat lines.
- Disable it with:
<syntaxhighlight lang="lua">
/run SIMPLE_CHAT="0"; pfUI.chat.SetupPositions(); ReloadUI()
</syntaxhighlight>

**Mouseover Cast?**

- Vanilla: Create macro /pfcast SPELLNAME. For cooldown display, add:
<syntaxhighlight lang="lua">
/run if nil then CastSpellByName("SPELLNAME") end
</syntaxhighlight>

## Premade Layouts
Join the [/r/pfUI](https://www.reddit.com/r/pfUI/) community on Reddit to explore, share, and try out pre-made layouts and configurations.

## Languages
pfUI supports and contains language specific code for the following gameclients.

- English (enUS)
- Korean (koKR)
- French (frFR)
- German (deDE)
- Chinese (zhCN)
- Spanish (esES)
- Russian (ruRU)
