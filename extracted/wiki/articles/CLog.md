---
title: "CLog"
url: "https://turtle-wow.fandom.com/wiki/CLog"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-17T22:08:22Z"
fetched: "2026-09-10T07:38:28Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# CLog

CLog records combat and chat events into a log file. It helps players analyze combat interactions, chat occurrences, and other in-game events.

## Installation
**GitAddonsManager**

The easiest way to keep **CLog** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Cabro/CLog.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>CLog</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(Cabro)**](https://github.com/Cabro/CLog)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/clog</code>
|Toggle combat logging on or off. Starts or stops recording.
|-
|<code>/clog clear</code>
|Clears the current combat log entries.
|}

**Notes:**

- When recording is active, events such as combat, NPC speech, emotes, and other chat messages are logged with timestamps.
- Log files are saved in your SavedVariables folder (<code>WTF\Account\ACCOUNTNAME\SavedVariables\CLog.lua</code>).

**Registering Events:**<syntaxhighlight lang="lua">
function CLog_Register()
  -- Register all desired events for logging
  -- (see your existing CLog_Register function for full list)
end
</syntaxhighlight>**Unregistering Events:** <syntaxhighlight lang="lua">
function CLog_Unregister()
  -- Unregister all events
  -- (see your existing CLog_Unregister function)
end
</syntaxhighlight>

## Preview
Log file:

## **Optimization**
**Event Registration Optimization**

Instead of calling <code>RegisterEvent</code> for each event separately, define all event strings in a table and register/unregister them in a loop. This reduces code duplication and improves maintainability.

**Example:**<syntaxhighlight lang="lua">
local CLogEventsList = {
  "PLAYER_REGEN_ENABLED",
  "PLAYER_REGEN_DISABLED",
  "CHAT_MSG_MONSTER_SAY",
  "CHAT_MSG_MONSTER_YELL",
  -- add all other event strings here
}
</syntaxhighlight>

**Registering:**<syntaxhighlight lang="lua">
local function CLog_Register()
  for _, event in ipairs(CLogEventsList) do
    CLogFrame:RegisterEvent(event)
  end
end

local function CLog_Unregister()
  for _, event in ipairs(CLogEventsList) do
    CLogFrame:UnregisterEvent(event)
  end
end
</syntaxhighlight>
