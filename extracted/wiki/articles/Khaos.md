---
title: "Khaos"
url: "https://turtle-wow.fandom.com/wiki/Khaos"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-07-01T13:47:38Z"
fetched: "2026-09-10T07:39:04Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Khaos

**Khaos** is a powerful configuration management addon. allowing you to store, modify, and switch between multiple addon configurations easily.

## Installation
**Manual Installation Only**

# Download this zip: **[Cosmos_Release.zip](https://web.archive.org/web/20061215132136/http://d.cosmosui.org/files/distros/Cosmos_Release.zip)**
# Unpack the <code>.zip</code> and move these folders from Interface/AddOns into your <code>Interface/AddOns</code> directory and restart the game.

- Chronos
- Earth
- Khaos
- Sea
- Satellite
- MobileFrames
- EarthFeatureFrame

## Command
Use this command, EarthFeature minimap button, or bind a key to toggle the main Khaos interface.<syntaxhighlight lang="lua">
/run ToggleKhaosFrame();
</syntaxhighlight>

## Configurations
**Enable/Disable Addons**

To enable or disable specific addon configurations, use the options in the Khaos interface or the slash commands provided for each configuration set.

**Switching Configurations**

- Open the Khaos window via the command or bind.
- Select your desired configuration set and press "Apply."
- You can also load a specific configuration directly via script or slash command.

**Managing Configurations**

- **Create new configuration:** Use the menu in the addon GUI.
- **Rename:** Right-click a configuration and choose "Rename."
- **Copy:** Right-click and select "Copy."
- **Delete:** Right-click and choose "Delete."
- **Export:** Export configuration as a string for sharing or backup.
- **Import:** Paste a string to import a configuration.

**Managing Options & Sets**
- **Options** are individual settings within a configuration set.
- **Sets** group options for a particular addon or purpose.
- **Folders** organize sets into categories (e.g., "Chat", "Combat").

**Accessing Settings**
- Use the main interface or right-click configuration sets for options like renaming, copying, or exporting.
- Adjust options via sliders, checkboxes, dropdowns, buttons, and color pickers.

## Preview
## Tips for Users
- Bind toggle commands for quick access.
- Use the export/import feature to backup or share configurations.
- Create folders and sets to organize your preferences.
- Use the "Reset" option to restore defaults.
- Use color pickers for visual customization.
- Use the "Table of Contents" menu for navigating options easily.

**Additional Notes**
- Slash commands and keybindings can be customized via the interface.
- Advanced users can create custom options with scripts and commands.
- Find more documentation on the [Function libraries](https://web.archive.org/web/20061117211144/http://www.wowwiki.com/Category:Function_Libraries) and [Khaos](https://web.archive.org/web/20060820114311/http://www.wowwiki.com/Khaos) Wiki.
- Remember to save your configuration after making changes.

## Khaos API
- registerFolder - Registers a custom folder
- updateFolder - Updates a custom folder
- validateFolder - Validates a custom folder
- unregisterFolder - Unregisters a custom folder
- registerOptionSet - Registers an option set
- updateOptionSet - Updates an option set
- validateOptionSet - Validates an option set prior to registration
- unregisterOptionSet - Unregisters an option set
- registerConfigurationLoadNotice - Register to be notified when the user selects a different configuration
- unregisterConfigurationLoadNotice - Removes the load updater with specified id
- registerGlobal - Registers a global variable to be saved/loaded when the user selects a new configuration
- unregisterGlobal - Removes a global from the configuration update list
- updateGlobal - Updates the global variable stored inside the configuration
- getSetKey - Allows you to directly access a key-value pair inside the configuration
- setSetKey - Allows you to directly modify a key-value pair inside the configuration
- setSetKeyParameter - Allows you to directly set a key-value pair's parameter
- getSetEnabled - Allows you to detect if an option set is on or off
- setSetEnabled - Allows you to turn an option set on or off
- updateSetKeys - Allows you to update groups of set keys and refresh the gui together
- refresh - Force a re-draw of the gui

## Difficulty System
Several people have asked about the difficulty levels. Let's pretend we're creating an AddOn called "Burger Order 1.0".

# *Beginner* - Options for everyone
1. * Example Checkboxes:
1. ** Pickles
1. ** Tomato
1. ** Lettuce
1. ** Cheese
1. * Example Buttons:
1. ** Combo Meal 1
1. ** Kids Meal
1. * Your mom can understand this option
1. * 90% of your users will definately use these options.
# *Intermediate* - Options for tweaking
1. * Example Settings:
1. ** Slider: 1-4 pickles
1. ** Slider: 1-2 slices of tomato
1. ** Colorpicker: color of wrapper
1. * People often adjust these, but around 40-50% use it frequently
1. * Your brother or sister could adjust this, but Mom doesn't care
# *Advanced* - Options most people won't use
1. * Examples:
1. ** British or American Cheese Toggle
1. ** Checkbox: Washed/Unwashed Lettuce
1. ** Slider: Special Sauce Blend
1. ** Checkbox: Martini Shaken, not Stirred
1. * Anything difficult to use should go here.
1. * If its not clear immediately what it does, put it here.
1. * These are hard-to-use or rarely used options.
# *Developer* - Debug options
1. * Examples:
1. ** Checkbox: Enable Debug Output
1. ** Checkbox: Deactivate Oven Fire Alarms
1. ** Slider: Temperature of the Oven
1. ** Editbox: Self-destruct sequence
1. * These are options that you and I would use, but users shouldn't worry about.
