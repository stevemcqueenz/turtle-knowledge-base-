---
title: "BugSack"
url: "https://turtle-wow.fandom.com/wiki/BugSack"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-24T18:29:01Z"
fetched: "2026-09-10T07:38:28Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# BugSack

-BugSack** is a bug tracking addon that captures and displays error messages, allowing players and developers to review and report bugs efficiently. It integrates with BugGrabber for error collection and provides commands and UI options to manage error logs.

## Installation
  -GitAddonsManager**

The easiest way to keep **BugSack** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/refaim/BugSack.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move these folder into your <code>Interface/AddOns</code> directory and restart the game.

- !BugGrabber
- BugSack

  -Optional**: 

- [FuBar](FuBar) 

## Git Links
- [**(refaim)**](https://github.com/refaim/BugSack)

## **Usage**
- Errors are captured automatically when they occur.
- Use the error viewer to review, copy, or report bugs.
- Clear the error log periodically to keep it manageable.
- Errors are saved in your <code>BugSackDB</code> saved variables file.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/bugsack show current</code>
|Show the latest (current) error in a window
|-
|<code>/bugsack show session</code>
|Show errors from the current session
|-
|<code>/bugsack show previous</code>
|Show errors from the previous session
|-
|<code>/bugsack show #</code>
|Show errors from specific session number
|-
|<code>/bugsack show all</code>
|Show all recorded errors
|-
|<code>/bugsack list current</code>
|List the current error in chat
|-
|<code>/bugsack list session</code>
|List errors from current session
|-
|<code>/bugsack list previous</code>
|List previous session errors
|-
|<code>/bugsack list #</code>
|List errors from specific session number
|-
|<code>/bugsack list all</code>
|List all errors in chat
|-
|<code>/bugsack reset</code>
|Clear all saved errors
|-
|<code>/bugsack script</code>
|Generate a fake script bug for testing
|-
|<code>/bugsack addon</code>
|Generate a fake addon bug for testing
|-
|<code>/bugsack auto</code>
|Toggle auto popup of error window
|-
|<code>/bugsack chat</code>
|Toggle chatframe output
|-
|<code>/bugsack msg</code>
|Toggle full error message in chat
|-
|<code>/bugsack mute</code>
|Toggle audible warning sounds
|-
|<code>/bugsack save</code>
|Toggle saving errors to file
|-
|<code>/bugsack limit #</code>
|Set maximum number of errors to save
|}

## Keybindings
You can bind these commands to keys in the games key bindings menu:

- **Show current error** (<code>/bugsack show current)</code>
- **Show session errors** (<code>/bugsack show session)</code>

## Preview
Option:

BugSack:
