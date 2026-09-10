---
title: "FlightMap"
url: "https://turtle-wow.fandom.com/wiki/FlightMap"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-01-18T10:46:40Z"
fetched: "2026-09-10T07:38:48Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# FlightMap

FlightMap enhances the in-game experience by providing detailed flight path visualization, including flight lines, flight master locations, durations, costs, and route management. It allows players to see all available flight paths on both continent and zone maps, and provides quick access to flight information.

## Installation
**GitAddonsManager**

The easiest way to keep **FlightMap** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/TrangOul/FlightMap.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to FlightMap, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Optional**:  [LevelRange-Turtle](LevelRange).

## Git Links
- **[(TrangOul)](https://github.com/TrangOul/FlightMap)**
- [**(Tolle44)**](https://github.com/Tolle44/FlightMap)

## Usage
**Accessing FlightMap**

- Use <code>/fmap</code> or <code>/flightmap</code> for options.
- Bind a key to open the flight selection window.
- Hover over zones or flight masters for detailed info.
- Click on destinations to take flights via the route system.

**During Flight**

- A progress bar indicates your flight time.
- Optionally, the timer can be locked or moved.
- Flight times are inferred and can be corrected based on actual experience.

**Options:**

- Enable/Disable flight lines on maps.
- Show/hide flight master icons.
- Show/hide flight timers during flight.
- Show/hide costs and times in tooltips.
- Show all flight masters (discovered or not).
- Enable route and POI display.

## Preview
Options:

Timer:

## How It Works
- **Automatic Data Updates:** Updates flight info when talking to flight masters or opening the taxi map.
- **Self-Updating Times:** Adjusts flight durations based on actual travel times experienced.
- **Route Planning:** Shows shortest or known routes between flight masters.
- **Self-Discovery:** Learns about flight paths as you explore and fly, storing data per character.
- **Self-Repair & Patches:** Removes outdated or incorrect data with built-in functions.

## Key Features
- **Flight Lines on World Map:** Draws lines between flight masters on continent maps.
- **Zone Flight Info Panel:** Shows available flight destinations, costs, and durations.
- **Flight Master Icons:** Displays locations of flight masters as icons on maps.
- **Flight Duration Meter:** Shows a progress bar during flights, indicating remaining travel time.
- **Automatic Route Calculation:** Shows shortest or known routes to destinations, including multi-hop paths.
- **Open Flight Selection Anywhere:** Quick key binding to access flight routes at any time.
- **Customizable Options:** Toggle map lines, POIs, flight timers, and display preferences.

## Developer Notes
- Custom utility functions handle data parsing, node creation, and UI drawing.
- Data structures store flight nodes, costs, times, and routes.
- The addon hooks Blizzard's taxi functions to monitor flights.
- Supports multiple languages with translation support.
- Includes code for map drawing, POI placement, and tooltip enhancements.
