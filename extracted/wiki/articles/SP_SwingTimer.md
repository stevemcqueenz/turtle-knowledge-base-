---
title: "SP SwingTimer"
url: "https://turtle-wow.fandom.com/wiki/SP_SwingTimer"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-12T08:23:31Z"
fetched: "2026-09-10T07:39:32Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# SP SwingTimer

SP SwingTimer enhances the melee combat experience by providing detailed swing timers and customizable features, perfect for players looking to improve their performance in combat.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the SP_SwingTimer-master folder to SP_SwingTimer 
# Restart the game

## Git links
- [**(balakethelock)**](https://github.com/balakethelock/SP_SwingTimer) - normal version
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/SP_SwingTimer) - this version is for SuperWoW users only

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/st or /swingtimer
|Opens the main command interface.
|-
|/st reset
|Resets all settings to defaults.
|-
|/st move on
|Toggles on the ability to move the swing timer bars.
|-
|/st move off
|Toggles off the ability to move the swing timer bars.
|-
|/st a 1 
|Alpha between 0 and 1
|-
|/st timers 1 
|Show weapon timers (1 = show, 0 = hide) 
|-
|/st s 1 
|Bar scale
|-
|/st b 2 
|Border height
|-
|/st w 200 
|Bar width 
|-
|/st y -150 
|Bar Y position 
|-
|/st x 0 
|Bar X position
|-
|/st style 0 
|Choose 1, 2, 3, 4, 5 or 6 
|-
|/st icons 1 
|Show weapon icons (1 = show, 0 = hide) 
|-
|/st h 10 
|Bar height
|}

Slam Macro:<syntaxhighlight lang="lua">
/run if false then CastSpellByName"Slam()" end
/run if not _a then for i=1,72 do if IsAttackAction(i) then _a=i end end end if not IsCurrentAction(_a)then UseAction(_a)end if st_timer>UnitAttackSpeed"player"*0.9 then CastSpellByName"Slam()" end
</syntaxhighlight>

## Preview
## Features
- **Swing Timers:** Displays cooldown timers for both main hand and offhand swings.
- **Dual Wield Support:** Automatically detects and adjusts timers for dual-wielding characters.
- **Customizable Appearance:** Users can customize the position, size, and alpha transparency of the swing timer bars and choose to display weapon icons and timers.
- **Language Support:** The addon supports multiple languages, adjusting combat messages based on the player's locale.

## **Functions and Logic**
The addon utilizes several core functions to maintain swing timers, track combat events, and update the display appropriately:

- **<code>UpdateSettings</code>**: Initializes settings based on stored values or defaults.
- **<code>UpdateWeapon</code>**: Refreshes weapon information and checks for dual-wielding status.
- **<code>ResetTimer</code>**: Resets the swing timer for the specified weapon (main/offhand).
- **<code>UpdateDisplay</code>**: Updates the visual representation of the swing timer based on current game state and settings.
- **<code>CheckDamageSource</code>**: Analyzes the source of damage done to determine which timer to reset.

  -Combat Handling**

The addon listens for various combat-related events:

- **HITS & MISSES**: Adjusts timers based on whether the player successfully hits or misses their target.
- **CRITICAL HITS**: Recognizes critical hits and updates timers accordingly.
- **PLAYER COMBAT STATUS**: Monitors the player's entry and exit from combat to adjust display settings.

  -Localization**

Currently supports English and French locales. When a specific translation isn't available, it falls back to English.
