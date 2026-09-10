---
title: "LazySpell"
url: "https://turtle-wow.fandom.com/wiki/LazySpell"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-17T16:35:16Z"
fetched: "2026-09-10T07:39:07Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# LazySpell

**LazySpell** is designed to optimize healing by automatically selecting the appropriate spell rank based on the target's health deficit. It supports popular unit frames and addons like Clique, LunaUnitFrames, pfUI, and Classic Mouseover, helping healers deliver efficient, targeted heals while conserving mana and reducing overhealing.

## Installation
**GitAddonsManager**

The easiest way to keep **LazySpell** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/laytya/Lazyspell.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move the _LazySpell folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(laytya)**](https://github.com/laytya/Lazyspell)

## Usage
**Clique**
- Assign spell with rank 1 in Clique.
- Use macro <code>/cmcast SpellName(Rank 1)</code> for mouseover or quick casts.
**LunaUnitFrames**
- Create macro <code>/lunamo SpellName(Rank 1)</code>.
- Bind macro to a button; hover over target frame to heal.
**pfUI**
- Configure clickcast for spells with rank 1.
- LazySpell will adjust spell rank automatically when clicked.
**Classic Mouseover**
- Create macro <code>/cmcast SpellName(Rank 1)</code>.
- Bind to key or mouse button for mouseover healing.

**How LazySpell Works**

LazySpell dynamically determines the appropriate spell rank to use based on:

- The target's current health deficit.
- Your configured maximum spell rank.
- Overheal ratio (to limit overhealing).

## Commands
{| class="fandom-table"
!Command
!Description
|-
|/isspellcl
|Prints available commands and their descriptions.
|-
|/isspellcl maxspellranks 
|Configure maximum spell ranks and overheal coefficient.
|-
|/isspellcl fubar 
|Opens Fubar plugin options.
|-
|/isspellcl profile 
|Set or switch profiles (default profile).
|-
|/isspellcl standby 
|Suspend or resume the addon.
|-
|/isspellcl debug 
|Enable or disable debugging output.
|-
|/isspellcl about 
|Prints addon info and version details.
|}

## Preview
Options:

GUI Option:

## Core Features
- **Automatic Spell Rank Scaling:** Selects the optimal spell rank dynamically based on the target’s health deficit.
- **Addon Compatibility:** Seamlessly integrates with Clique, LunaUF, pfUI, and Classic Mouseover.
- **User Customization:** Configure max spell ranks, overheal ratios, class-specific options, and toggle debugging.
- **HealComm Support:** Enhances communication for incoming heals and resurrects with HealComm library.
- **Easy Access:** Options menu accessible via minimap button and commands.

## Options
Main Options (via minimap menu or <code>/ispellcl</code> commands)
{| class="fandom-table"
!Setting
!Description
|-
|**Max Spell Ranks**
|Set maximum spell ranks for each spell, preventing the addon from selecting higher ranks to save mana.
|-
|**Overheal Ratio**
|Adjusts the percentage of overhealing allowed (default from 0.1 to 2). Values less than 1 reduce overhealing.
|-
|**Class-Specific Settings**
|Configure min/max ranks for spells like Healing Wave, Lesser Healing Wave, Chain Heal (Shaman), Heal, Flash Heal, Greater Heal (Priest), Healing Touch, Regrowth (Druid).
|-
|**Enable Debugging**
|Turn on debug output for troubleshooting.
|}
