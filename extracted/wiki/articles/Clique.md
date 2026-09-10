---
title: "Clique"
url: "https://turtle-wow.fandom.com/wiki/Clique"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T17:05:01Z"
fetched: "2026-09-10T07:38:32Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Clique

A powerful click-casting interface that allows you to assign spells, macros, or Lua scripts to mouse buttons and modifiers for quick and easy casting during gameplay.

## Installation
**GitAddonsManager**

The easiest way to keep **Clique** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/MarcelineVQ/Clique.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>Clique</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/Clique) - SuperWoW support to avoid target switches, Luna support.
- [**(shagu)**](https://github.com/shagu/Clique) - normal version

## Instructions
**Opening the Clique Interface**
- **Toggle the Clique window:** Click the small pullout tab near your spellbook
**Adding a Spell or Script**
# **Open Clique window** by clicking the pullout tab.
# **Click on a spell** in your spellbook to add it to your list. (click it with the modifiers you want to use)
# **Configure modifiers and buttons:**
1. * Use Alt, Control, Shift keys along with mouse buttons (Left, Right, Middle, Button4, Button5).
# **Save your binding:**
1. * The spell or script will now trigger when you click the bound button with modifiers during gameplay.
**Editing Bindings**
- Select an entry in the list to edit (double click on it).
- Click **Edit** to modify the spell, script, or binding.
- Use the **Max Rank** button to always cast the highest rank of a spell.
**Deleting Bindings**
- Select an entry and click **Delete** to remove it from your list.
**Creating Custom Scripts**
- Use the **New** button to add a custom Lua script.
- Right-click in the script editor for a list of helper functions.
- Save your script to bind it to a click.
**Spell Binding & Rank Handling**
- Bind spells directly from your spellbook.
- Clique automatically selects the highest rank appropriate for the target based on your spellbook.
- You can override this with the **Max Rank** button for specific bindings.

## Custom Lua Scripts
- Write Lua code to perform complex actions.
- Scripts can refer to <code>Clique.unit</code> (the current target or unit you clicked).

**Example**:<syntaxhighlight lang="lua">
if Clique:IsBuffActive("Power Word: Shield") then
    -- do something
else
    Clique:CastSpell("Power Word: Shield")
end
</syntaxhighlight>

**Custom Script functions**
{| class="fandom-table"
!Function Name
!Description
!Notes
|-
|<code>Clique:CastSpell("spell")</code>
|Casts a specified spell on <code>Clique.unit</code> without changing targets
|Use spell name or spell ID
|-
|<code>Clique:IsBuffActive("buff")</code>
|Checks if a buff or debuff is active on <code>Clique.unit</code>
|Pass spell name, icon path, or pattern
|-
|<code>Clique:UnitMenu()</code>
|Opens the unit interaction menu for <code>Clique.unit</code>
|Right-click menu options
|-
|<code>Clique:CureAny()</code>
|Attempts to dispel or cure any ailments on <code>Clique.unit</code>
|Checks for cure/debuffs and dispels if possible
|-
|<code>Clique:NewSpell("spell", "buff")</code>
|Casts a spell if a specified buff is NOT active on target
|Useful for buffing only when not present
|-
|<code>Clique:TargetUnit()</code>
|Targets <code>Clique.unit</code>
|Equivalent to <code>/target</code> command
|-
|<code>Clique:AssistUnit()</code>
|Assists <code>Clique.unit</code>
|Equivalent to <code>/assist</code> command
|}

## Preview
Set Window:

Edit Screen:

## Key Features
- **Click Binding System:** Assign spells, macros, or Lua scripts to mouse buttons with modifiers.
- **Automatic Rank Selection:** Casts the highest available rank of a spell based on the target’s level.
- **Custom Lua Scripts:** Create personalized actions for complex or unique needs.
- **Plugin Support:** Extend functionality with community plugins for unit frames, raid frames, and more.
- **Integration with Spellbook:** Easily add spells directly from your spellbook.
- **Unit Targeting & Assistance:** Right-click menu for unit interactions (target, assist, menu).

## Localization
- The addon supports multiple languages, with translations for English (enUS), French, German, Chinese, Korean, etc.
- The key strings like spell names, buff/debuff names, and patterns are customizable via localization files.
- If users encounter issues with spell names or patterns, they can modify localization files to better match their client language or specific game version.
