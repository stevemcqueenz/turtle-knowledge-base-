---
title: "Phoenix DevPad"
url: "https://turtle-wow.fandom.com/wiki/Phoenix_DevPad"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-12T18:56:22Z"
fetched: "2026-09-10T07:39:24Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Phoenix DevPad

**Phoenix DevPad** is designed to streamline debugging, development, and event handling within WoW. Use the chat commands and UI to craft scripts, hook into events, and view variable data easily.

## **Installation**
**Manual Installation only**

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Extract the .zip file, move the Phoenix folder from inside the Phoenix_v1.11.0.0 folder to your <code>Interface/AddOns</code> directory
# Restart the game.

## Git Links
- [**(crazypoultry)**](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection)

## Usage & Commands
**Main Chat Commands**

Type these commands in chat (e.g., <code>/px</code>) to control Phoenix:
{| class="fandom-table"
!Command
!Description
|-
|<code>/px</code>
|Show help overview
|-
|<code>/px script</code>
|Show help on script commands
|-
|<code>/px dump</code>
|Show dump options help
|-
|<code>/px chat [name]</code>
|Set/show output chat frame
|-
|<code>/px timeout [seconds]</code>
|Set error timeout
|-
|<code>/pxr</code>
|Reload UI
|-
|<code>/pxt</code>
|Toggle DevPad UI
|-
|<code>/pxv</code>
|Toggle event override (ignore event handlers)
|-
|<code>/pxl</code>
|List hooked events
|-
|<code>/pxs scriptName</code>
|Run named script
|-
|<code>/pxc</code>
|Toggle chat error redirection
|-
|<code>/pxe [last]</code>
|Show last errors
|}

**Script Commands (within scripts)**

- <code>pxc("/say Hello")</code> — Run a chat command
- <code>pxs("MyScript")</code> — Run a named script
- <code>pxp("Message: %d", "Combat", value)</code> — Print formatted message
- <code>pxd(expression)</code> — Dump variable content

**Key Bindings (customizable)**

Assign keys for quick access:

- Reload UI (<code>/pxr</code>)
- Toggle DevPad (<code>/pxt</code>)
- Toggle event override (<code>/pxv</code>)
- Toggle chat errors (<code>/pxc</code>)

*(See your addon’s keybinding menu to set these)*

## preview
## Features & Usage Tips
**Managing Scripts**

- **Create a new script:** Click "New Script" in DevPad or type <code>/px script</code>
- **Save a script:** Changes auto-save when focus is lost from the input fields
- **Run a script:** Select it and press "Run Script" or type <code>/pxs scriptName</code>
- **Delete a script:** Select and click "Delete Script"

**Event Hookup**

- To trigger a script on an event (e.g., zone change), name the script after the event (<code>ZONE_CHANGED_NEW_AREA</code>)
- Check the "Event" box while editing the script to hook it
- Use <code>/pxl</code> to list all hooked events
- Toggle event handling on/off with <code>/pxv</code>

**Output & Error Handling**

- Set output chat frame with <code>/px chat [name]</code>. If no name, defaults to "default"
- Toggle script error popup with <code>/pxc</code>. Errors then print in chat
- View last errors with <code>/pxe [number]</code>
- Adjust error timeout with <code>/px timeout [seconds]</code> (default is 1s)

**Dumping Variables**

- Use <code>/pxd expression</code> to dump the content of a variable or table
- For tables, specify <code>/pxd table [id|name]</code> to view nested data
- Limit dump depth, string length, and entry count via <code>/px dump</code> options

## UI Overview
- **Main Window:** shows scripts, allows editing, creating, deleting
- **Script Buttons:** switch between scripts
- **Run/Delete Buttons:** execute or delete selected script
- **Input Fields:**
  - **Name:** script's name
  - **Event:** check to hook to an event
  - **Body:** code snippet content
- **Output Area:** for script errors, debug info, or custom output

*(Access the UI with <code>/pxt</code> or assign a keybinding)*

## Known Issues
- Long script names may not display fully in the name edit box (UI display bug)

## Credits & Inspiration
This addon consolidates ideas from:

- Notepad by Vladimir Vukicevic
- DevTools by Daniel Stephens
- ReactiveMacros by Jooky
- EventCatcher by The Nerd Wonder
- Luapad by Merphle
- ImprovedErrorFrame by Vjeux
