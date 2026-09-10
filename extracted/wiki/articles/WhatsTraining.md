---
title: "WhatsTraining"
url: "https://turtle-wow.fandom.com/wiki/WhatsTraining"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-05-10T13:30:02Z"
fetched: "2026-09-10T07:40:00Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# WhatsTraining

**WhatsTraining** shows you what spells are available for training at your class trainer. It helps you easily see which spells you can learn now, which are coming soon, or which you are missing requirements for.

## Installation
**GitAddonsManager**

The easiest way to keep **WhatsTraining** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/FrancisEgan/WhatsTraining_Turtle.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>WhatsTraining_Turtle</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(FrancisEgan)**](https://github.com/FrancisEgan/WhatsTraining_Turtle)
- **[(Gescht)](https://github.com/Gescht/WhatsTraining_Turtle)**

## Usage
**Accessing the Spells List**

- The addon adds a new tab to the Spellbook interface.
- Click the **"What's Training?"** tab (represented by a question mark icon) to open the spells training window.
- The window displays categorized spells, including:
  - Available now
  - Missing requirements
  - Coming soon
  - Not yet available
  - Known spells
  - Pet abilities

**Interacting with the UI**

- **Scroll** through the list using the scrollbar.
- Hover over each spell to see detailed info (name, ID, school, level required).

## Preview
## Technical Notes
- The addon initializes on entering the world and updates when spells change.
- It filters spells based on your race, level, and learned talents.
- Spells are categorized for easy navigation.
- Supports highlighting and tooltips for better usability.
