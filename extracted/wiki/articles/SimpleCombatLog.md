---
title: "SimpleCombatLog"
url: "https://turtle-wow.fandom.com/wiki/SimpleCombatLog"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-03-25T12:53:13Z"
fetched: "2026-09-10T07:39:38Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# SimpleCombatLog

SimpleCombatLog is a mod that replaces the standard combat logs with shorter, colored ones. The reformatted message removes all unnecessary words so it's faster to read what information you want quickly when the combat log is scrolling very quickly, in addition it colors names differently when the name is you, raid, party, pet or whatever, colors spell damage by element type, etc. While it's meant to be simple, the message replacements are complete, meaning that whatever you might read on that combat log chat thread, SimpleCombatLog should be able to capture it and display a shorter one.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the SimpleCombatLog-master folder to SimpleCombatLog
# Restart the game

## Git Links
[**(Road-block)**](https://github.com/Road-block/SimpleCombatLog)

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/scl
|Show a list of slash commands
|-
|/scl help
|Show help message
|-
|/scl reset
|Reset all saved variables and load default theme for ChatFrame2
|-
|/scl show
|Show drop down menu of a chat frame
|-
|/scl debug
|Enable/disable debugging
|-
|/scl about
|Print out addon info
|}

**Alt-Right-click** a chat frame tab to display the configuration menu for that chat frame. The settings in SimpleCombatLog are stored per character, per chat frame.

If you customized a chat frame the way you want and you want to import those settings to another character, in this case you can use the theme features in SimpleCombatLog.

## Preview
**Customization**

Despite the name, SimpleCombatLog is very customizable. SimpleCombatLog currently supports the following customization's:

- Filters: filter by **event**, **message type** and **unitid**.
- Colors: set the colors for each **spell element**, **unitid**, etc.
- Format: all the displayed combat logs can be customized.
- Watch list: watch for specific name / skill in the combat logs, which has higher priority than Filters.

**Filter**

There are 3 kinds of filter : **event** (Blizzard event),**type** (message category) and **name** (unitid).

# First the events decide what messages will be received. If you disable an event, SimpleCombatLog won't receive messages belong to that event at all, which will improve performance. However, I suggest you do not touch these unless you're very sure what messages are fired from each event.
# Second, when SimpleCombatLog receives a combat message, SimpleCombatLog checks what kinds of message it is, and checks the TYPE filter, if that type filter is not turned on, the message will be filtered. For example, turning off <code>**heal**</code> filter will filter out all heals and HoTs. <code>**Gain**</code> is something like "*You gain 50 mana from Blessing of Wisdom*" and "*Your pet gains 50 happiness from Feed Pet effect*". <code>**Drain**</code> is "*Someone's Viper Sting drains 50 mana from you.*" and "*Your Mana Tap drains 50 mana from your pet, you gain 50 mana.*" Hit, Heal, Miss, Cast should be obvious.
# Finally, if the message have name(s), SimpleCombatLog tries to find out it's **unitid**, and only when the **unitid** match any of the NAME filter it'll be displayed. For example, to receive messages related to you and your pet, only turn on <code>you</code> and <code>pet</code> name filter, which in fact means the **unitid** <code>player</code> and <code>pet</code>.

**Themes**

A theme is the combination of all the settings for a ChatFrame. By default SimpleCombatLog loads the <code>**default**</code> theme for <code>**ChatFrame2**</code>. You can set a ChatFrame to load another theme by the configuration menu.

If you did any modifications to the settings of a ChatFrame, you'll see the <code>**save theme**</code> option in the configuration menu, which will save the current settings as a theme. Themes are global to all characters, so if you have a combatlog customization which wants to be used among multiple characters, you can save it as a theme, and have the characters to load that theme.

You may overwrite or delete predefined themes. But in the case of deleting a predefined theme, it'll be loaded back on the next time you log in your character. So if you have modified the predefined themes and want to have them change back to the default values, simply delete the theme and relog <code>**/reloadui**</code>.
