---
title: "QuestHaste"
url: "https://turtle-wow.fandom.com/wiki/QuestHaste"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-18T17:56:13Z"
fetched: "2026-09-10T07:39:26Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# QuestHaste

QuestHaste is a lightweight addon that streamlines quest turn-ins and acceptance. It is especially useful for repeatable quests, enabling faster gameplay by automating common quest interactions.

## Installation
  -GitAddonsManager**

The easiest way to keep **QuestHaste** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/McPewPew/QuestHaste.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>QuestHaste</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(McPewPew)**](https://github.com/McPewPew/QuestHaste)

## Commands
Quest (Quest Log & NPC Dialog) Modifiers

Use these modifiers during quest interactions:
{| class="fandom-table"
!Modifier
!Action
|-
|**Control**
|Auto-complete/accept quests and save them
|-
|**Alt**
|Forget (remove) the quest from saved list
|-
|**Shift**
|If quest is not saved, accept/complete; hold to force save
|-
|**None**
|Accept/Complete if the quest is already saved
|}

Gossip (NPC Dialogue) Modifiers

During gossip windows:
{| class="fandom-table"
!Modifier
!Action
|-
|**Shift**
|Auto-complete/accept quests in gossip (priority order: completed, available saved, active saved, available, active)
|}

Slash Commands (/qhaste, /questhaste)
{| class="fandom-table"
!Command
!Action
|-
|**/qhaste usage**
|Displays usage instructions
|-
|**/qhaste add**
|Save the current quest for auto-accept/complete
|-
|**/qhaste list**
|List all saved quests
|-
|**/qhaste pause**
|Disable QuestHaste (pause automation)
|-
|**/qhaste resume**
|Enable QuestHaste (resume automation)
|-
|**/qhaste complete**
|Complete or accept the current quest
|-
|**/qhaste reset**
|Clear all saved quests
|}

## Preview
Saved Quest

## Features
- Automates quest acceptance and completion based on modifiers
- Saves favorite quests for quick turn-in
- Handles gossip dialogues efficiently
- Supports pausing/resuming automation
- Easy to manage via chat commands
