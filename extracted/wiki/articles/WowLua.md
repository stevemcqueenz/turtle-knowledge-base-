---
title: "WowLua"
url: "https://turtle-wow.fandom.com/wiki/WowLua"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-18T10:12:19Z"
fetched: "2026-09-10T07:40:01Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# WowLua

WowLua is an in-game Lua scripting environment. It provides an interactive Lua interpreter, a multi-page script editor, syntax highlighting, and convenient commands for running scripts directly from chat or macros.

## Installation
  -GitAddonsManager**

The easiest way to keep **WowLua** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/laytya/WowLuaVanilla.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>WowLuaVanilla</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(laytya)**](https://github.com/laytya/WowLuaVanilla)

## Commands
{| class="fandom-table"
!Slash Command
!Description
!Usage Example
|-
|<code>/lua</code> or <code>/wowlua</code>
|Opens the WowLua editor, optionally executes a Lua expression if provided
|<code>/lua print(14)</code>
|-
|<code>/luarun</code>
|Runs a specific script page by name or number
|<code>/luarun MyScript</code> or <code>/luarun 1</code>
|-
|<code>/wowluarun</code>
|Alias for <code>/luarun</code>
|<code>/wowluarun MyScript</code> or <code>/wowluarun 1</code>
|}

## Bindings
Bindings (Hotkeys)

- **Toggle WowLua**: <code>TOGGLE_WOWLUA</code> — Show or hide the Lua editor window.
- **Run Page**: <code>RUN_WOWLUA</code> — Execute the current script.
- **Save Page**: <code>SAVE_WOWLUA</code> — Save the current script.
- **Create New Page**: Bind to create a new script page.
- **Navigate Pages**: Bind keys for previous/next page.

## Preview
## Key Features
- **Interactive Lua Interpreter**: Execute Lua code instantly.
- **Multi-Page Script Editor**: Save, rename, delete, and switch between multiple script pages.
- **Syntax Highlighting**: Color-coded code for easier readability.
- **Command Line Execution**: Run scripts via slash commands.
- **Global print()**: Redirects output to the WowLua output window when running code.
- **Bindings**: Hotkeys for toggling, running, saving, and managing scripts.
