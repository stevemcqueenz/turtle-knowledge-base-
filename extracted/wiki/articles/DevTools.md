---
title: "DevTools"
url: "https://turtle-wow.fandom.com/wiki/DevTools"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-01-18T17:25:32Z"
fetched: "2026-09-10T07:38:39Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# DevTools

DevTools is a set of debugging, exploration, and diagnostic tools for API development. It provides handy slash commands, frame stack visualization, chat event monitoring, and data inspection features.

## **Installation**
  -Manual Installation Only**
# Download this zip: **[DevTools-1.0pre2-11000.zip](https://web.archive.org/web/20060507052901/http://www.vigilance-committee.org:80/wow/downloads/DevTools-1.0pre2-11000.zip)**
# Unpack the <code>.zip</code> into your <code>Interface/AddOns</code> directory and restart the game.

## Releases
- [**DevTools-1.4-20000.zip**](https://web.archive.org/web/20130906072255if_/http://www.vigilance-committee.org/wow/downloads/DevTools-1.4-20000.zip) 
- [**DevTools-1.1pre1-20000.zip**](https://web.archive.org/web/20130906072627if_/http://www.vigilance-committee.org/wow/downloads/DevTools-1.1pre1-20000.zip) **(Lua 5.1)**
- [**DevTools-1.0pre2-11000.zip**](https://web.archive.org/web/20060507052901/http://www.vigilance-committee.org:80/wow/downloads/DevTools-1.0pre2-11000.zip)  **(Recommended)**
- [**DevTools-1.0pre1-11000.zip**](https://web.archive.org/web/20060507052855if_/http://www.vigilance-committee.org:80/wow/downloads/DevTools-1.0pre1-11000.zip)
- [**DevTools-0.7-11000.zip**](https://web.archive.org/web/20060507052506if_/http://www.vigilance-committee.org:80/wow/downloads/DevTools-0.7-11000.zip)
- [**DevTools-0.6-10900.zip**](https://web.archive.org/web/20060507052459if_/http://www.vigilance-committee.org:80/wow/downloads/DevTools-0.6-10900.zip)

## Commands
{| class="fandom-table"
!Command
!Description
!Usage Example
|-
|<code>/reload</code>
|Reloads the user interface
|<code>/reload</code>
|-
|<code>/dump <expression></code>
|Executes a LUA expression and outputs the result
|<code>/dump GetPlayerMapPosition("player")</code>
|-
|<code>/dtchatevent</code>
|Toggles chat event tracking
|<code>/dtchatevent</code>
|-
|<code>/dtchatevent buffer</code>
|Shows current chat event buffer size
|<code>/dtchatevent buffer</code>
|-
|<code>/dtchatevent buffer <size></code>
|Sets chat event buffer size
|<code>/dtchatevent buffer 2000</code>
|-
|<code>/dtframestack</code>
|Toggles the frame stack visualization
|<code>/dtframestack</code>
|}

## Key Bindings
{| class="fandom-table"
!Action
!Binding Name
!Default Key
|-
|Toggle FrameStack
|"DevTools:FrameStack_Toggle"
|(user assigned)
|-
|Hold for FrameStack
|"DevTools:FrameStack_OnHold"
|(user assigned)
|}

  -Note***:* You can customize key bindings via WoW's key binding interface.

## Preview
  -Frame Stack Visualization**

  -/Dump ChatFrame1**

## Features
  -Frame Stack Display**

- Visualizes visible UI frames under the mouse pointer, helping identify overlapping frames or UI issues.
- Can be toggled on/off with <code>/dtframestack</code> or via assigned key binding.

  -Data Inspection & Debugging**

- Supports viewing complex nested tables with optional name caching for functions, userdata, and tables.
- Provides color-coded, readable output in chat.

  -Reload UI**

- <code>/reload</code>
- Shortcut: <code>/reload</code>
- **Description:** Reloads the user interface.

## Usage
  -Data Dump (<code>/dump</code>)**

  -Purpose:** Execute a LUA expression and output its result.

  -Usage:**

- <code>/dump <expression></code>

  -Example**:

- <code>/dump GetPlayerMapPosition("player")</code>

  -Output:**

- Displays the value or table data of the expression in chat, supporting nested tables and self-references.

  -Chat Event Monitoring (<code>/dtchatevent</code>)**

  -Commands:**

- <code>/dtchatevent</code> — Toggles chat event tracking (enabled/disabled).
- <code>/dtchatevent buffer</code> — Shows current buffer size.
- <code>/dtchatevent buffer <size></code> — Sets buffer size (default: 1000).

  -Functionality:**

- When enabled, all chat messages across chat frames are prefixed with an interactive marker. Clicking on  [#]  opens a tooltip with detailed event info.

  -Usage Tips:**

- Use <code>/dtchatevent</code> to toggle monitoring.
- Use <code>/dtchatevent buffer <size></code> to adjust how many chat events are stored (max size is configurable).

  -Frame Stack Visualization (<code>/dtframestack</code>)**

  -Purpose:**

- Displays the hierarchy of UI frames under your mouse cursor, helpful for UI troubleshooting.

  -Usage:**

- <code>/dtframestack</code> — Toggles the frame stack window on/off.
- Key Binding (if set): *Toggle FrameStack Display*

  -Hold for FrameStack:**

- You can bind the "Hold" command to display the frame stack as long as you hold a key.

## **Configuration**
You can tweak the behavior of <code>/dump</code> using global variables:<syntaxhighlight lang="lua">
DEVTOOLS_MAX_ENTRY_CUTOFF = 30       -- Max table entries displayed  
DEVTOOLS_LONG_STRING_CUTOFF = 200    -- Max string length shown  
DEVTOOLS_DEPTH_CUTOFF = 10           -- Max nested table depth  
DEVTOOLS_USE_TABLE_CACHE = true      -- Cache table names  
DEVTOOLS_USE_FUNCTION_CACHE = true   -- Cache function names  
DEVTOOLS_USE_USERDATA_CACHE = true   -- Cache userdata names  
DEVTOOLS_INDENT='  '                  -- Indentation string for nested data
</syntaxhighlight>

## Color Code
{| class="fandom-table"
!Color Code
!Example Usage
|-
| cff88ff88 
|**Greenish color** — Used for displaying data types and values, especially for opaque types like functions, userdata, and tables. It helps these elements stand out.
|-
| cffffcc00 
|**Yellowish color** — Used for references to table names or references, making them easy to identify.
|-
| cffff0000 
|**Red color** — Indicates skipped or truncated data, such as skipped table entries or overly deep tables. It signals "attention" or "warning."
|-
| cff88cccc 
|**Light Cyan** — Used for frame or UI element labels, such as the frame strata, for clear visual separation.
|-
| cffffff00 
|**Yellow** — Additional color used in the frame stack window to highlight strata levels or other labels.
|}

  -Note:** The <code>|c</code> prefix starts a color code, followed by 8 hex digits: AARRGGBB (Alpha, Red, Green, Blue). DevTools uses these to color parts of its output text, making it easier to parse complex data visually.

## History
  -1.4 - 2006-12-21**

- Fixed /dtevents so it works

  -1.3 - 2006-12-19**

- Re-implemented lots of EventTrace options frame innards
- Added EventTrace key bindings for start/stop/toggle/fill/show
- Some cleanup of EventTrace code

  -1.2 - 2006-12-17**

- Added slash command for event trace frame
- Cleaned up some event trace code in preparation for full functionality
- Updated frame stack to show visually which frames are mouse enabled
- Miscellaneous efficiency improvements

  -1.1pre1 - 2006-10-07**

- First stage integration of event list display and filtering is now complete.
- Significant enhancements for lua 5.1

  -1.0pre2 - 2006-04-09**

- Added /dtchatevent buffer
- Added tooltip error when clicking on out-of-buffer event link
- Added line wrapping for long event arguments and escaping of newlines
- Added easy indication for runs of spaces (and spaces at beginning or end of strings).
- Added /dtframestack (plus key bindings)

  -1.0pre1 - 2006-04-03**

- Added /dtchatevent
- Rearranged code a little

  -0.7 - 2006-03-27**

- Switched from RunScript to loadstring

  -0.6 - 2005-08-30**

- Fixed tableEntriesSkipped issue.

  -0.5 - 2005-07-23**

- Added function cache (gives names of functions if known)
- Added userdata cache (gives names of userdata if known)
- Cleaned up trailing comma formatting so it's more consistent
- Added customizable indentation (DEVTOOLS_INDENT)
- Restructured scanner to be a little more object oriented (for future development)
- Switched many formatting tasks to use string.format
- Handle function/userdata/table table keys better.
- Made DevTools_Dump(value) friendly enough to use from code for debugging.

  -0.4 - 2005-03-20**

- Added cutoff for deep tables
- Added table cache for self-referential tables
- Cleaned up display of name table keys
- Added nicer handling for simple variable dumps
- Added color coding of output

  -0.3 - 2005-02-05**

- Re-worked output method for large objects.
- Removed message on load to reduce spam
- Added limits on max table entries and max string length output

  -0.2 - 2004-12-27**

- Added some documentation

  -0.1**

- Initial version, /dump and /reload
