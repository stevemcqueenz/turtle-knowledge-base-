---
title: "FlightPath"
url: "https://turtle-wow.fandom.com/wiki/FlightPath"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-07T07:16:07Z"
fetched: "2026-09-10T07:38:48Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# FlightPath

FlightPath automatically learns flight paths as you interact with flight masters, including any new paths added in the future. It also provides a list of flight paths, zeppelin routes, and boat connections that you can load manually.

## Installation
  -Manual Installation Only**

# Download this zip: **[master.zip](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/archive/refs/heads/master.zip)**
# Unpack the <code>.zip</code> and copy the FlightPath folder inside the FlightPath_v1.16 folder and paste it into your <code>Interface/AddOns</code> directory 
# Restart the game.

  -Note:**  The predefined plane, boat and zeppelin routes (/fp load) seem to be outdated. Best to let FlightPath learn the routes by using them.

## Learning Flight Paths
- Flight durations are only known after completing a trip.
- FlightPath learns the location of flight masters when you talk to them.
- Costs are updated each time you speak to a flight master, considering faction discounts.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/fp</code>
|Show the query dialog
|-
|<code>/fp enable</code>
|Enable the addon
|-
|<code>/fp disable</code>
|Disable the addon
|-
|<code>/fp showgrey</code>
|Show greyed-out paths
|-
|<code>/fp hidegrey</code>
|Hide greyed-out paths
|-
|<code>/fp showremaining</code>
|Show in-flight time remaining
|-
|<code>/fp hideremaining</code>
|Hide in-flight time remaining
|-
|/fp load [misc,horde,alliance]
|Loading Predefined Routes
|-
|<code>/fp erase</code>
|Clear learned flight paths
|-
|<code>/fp check</code>
|Debug flight master location mismatches
|-
|<code>/fp status</code>
|Show current addon status
|}

## Features
- **Flight Master Map Icons:** Known flight masters appear on your zone maps. Hovering over these icons shows available connections.
- **Flight Arrival Timer:** Shows an on-screen countdown during flights, based on learned trip durations.
- **Hover Info:** Displays estimated flight times in tooltips when talking to flight masters.
- **Command Interface:** Type <code>/fp</code> in chat (bindable to a key) to open a query dialog. Click connections for quick navigation or right-click for zone map details.
- **Preloaded Routes:** Load existing flight, boat, and zeppelin routes with <code>/fp load</code> if you prefer not to learn them manually.

## Preview
Timer:

Tracker:

## Data Files
  -KnownPaths.lua** contains predefined flight, boat, and zeppelin routes.

Use <code>/fp load [name]</code> to import these routes.

Supported load options:

- <code>misc</code> — boats & zeppelins
- <code>horde</code> — Horde flight paths
- <code>alliance</code> — Alliance flight paths

  -Important Notes:**

- The data includes coordinates, costs, durations, and faction info.
- You can add your own routes or update existing ones.

## Troubleshooting & Debugging
- Use <code>/fp check</code> to verify flight master locations.
- Enable debug with <code>/fp debug</code>.
- Check for mismatched flight master names or missing durations.

## Version History
{| class="fandom-table"
!Date
!Rev
!Changes
|-
|9/13/05
|1.14
|Fixed WorldMapButton:OnUpdate error, UI version set for 1.7.
|-
|6/27/05
|1.13
|Updated to WoW UI interface version 1.5. <nowiki>
</nowiki> Fixed potential flight time inaccuracies on slow computers. <nowiki>
</nowiki> Increased width of on-screen destination display to prevent truncation.
|-
|4/18/05
|1.12
|Removed debug statements causing user errors.
|-
|4/18/05
|1.11
|Fixed bug with <code>/fp load</code> command introduced in 1.10.
|-
|4/18/05
|1.10
|Fixed <code>SetMapToCurrentZone</code> issues. <nowiki>
</nowiki> Bound key now toggles dialog correctly. <nowiki>
</nowiki> Alt-Z to hide UI now also hides the in-flight counter. <nowiki>
</nowiki> Improved zone map connection tooltip appearance. <nowiki>
</nowiki> Updated regex to handle foreign characters. <nowiki>
</nowiki> Display version on dialog. <nowiki>
</nowiki> Fixed cross-faction path display on Booty Bay map. <nowiki>
</nowiki> Fixed zone change behavior with open dialog.
|-
|4/14/05
|1.09
|Fixed incompatibility with VisibleFlightMap. <nowiki>
</nowiki> Changed zone map icons to match flight master icons. <nowiki>
</nowiki> Undiscovered locations show as grey on maps. <nowiki>
</nowiki> Scaled down dialog dropdown box.
|-
|4/13/05
|1.08
|Added key binding support via <code>bindings.xml</code>. <nowiki>
</nowiki> Flight master icons no longer show if greyed. <nowiki>
</nowiki> Added flight times and costs in zone map tooltips. <nowiki>
</nowiki> Added <code>/fp hideremaining</code> and <code>/fp showremaining</code>. <nowiki>
</nowiki> Fixed incorrect location storage for flight masters.
|-
|4/12/05
|1.07
|Added on-screen flight time remaining countdown. <nowiki>
</nowiki> Implemented <code>/fp load</code> command for loading route data. <nowiki>
</nowiki> Show flight duration in map tooltip when talking to flight master. <nowiki>
</nowiki> Added confirmation dialog for <code>/fp erase</code>. <nowiki>
</nowiki> Supported MyAddOns. <nowiki>
</nowiki> Flight durations now tracked separately per direction. <nowiki>
</nowiki> Fixed dropdown list limit and obsolete data files.
|-
|4/8/05
|1.06
|Added <code>/fp erase</code>, <code>/fp showgrey</code>, <code>/fp hidegrey</code> commands. <nowiki>
</nowiki> Improved location matching to fix issues with Stormwind, Ironforge, Moonglade.
|-
|4/7/05
|1.05
|Fixed initial string errors on first install.
|-
|4/7/05
|1.04
|Now tracks whether connections are greyed out on a per-character basis. <nowiki>
</nowiki> Escape key closes dialog.
|-
|4/7/05
|1.03
|Greyed out unavailable routes in map tooltips.
|-
|4/7/05
|1.02
|Preloaded flights that can't be taken are now shown in grey. <nowiki>
</nowiki> Existing data must be cleared after updating.
|-
|4/6/05
|1.01
|Fixed dropdown list positioning for large numbers of entries.
|-
|4/6/05
|1.0
|Initial release.
|}
