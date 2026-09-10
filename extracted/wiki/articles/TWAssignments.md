---
title: "TWAssignments"
url: "https://turtle-wow.fandom.com/wiki/TWAssignments"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-28T03:32:56Z"
fetched: "2026-09-10T07:39:45Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# TWAssignments

TWAssignments allows you to assign players to specific targets or tasks during raid encounters, enhancing coordination and communication within your team.

## Installation
  -GitAddonsManager (Recommended)**

The easiest way to keep TWAssignments up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: <code><nowiki>https://github.com/arvidinge/TWAssignments.git</nowiki></code>
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.
  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>TWAssignments</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
[**(arvidinge)**](https://github.com/arvidinge/TWAssignments)

## Basic Usage
# Open the main window by clicking the relevant button.

# To add an assignment row, click the <code>+</code> button in the top-left corner:

# In the first column, select the target. In columns 2-4, assign tanks, and in columns 5-7, assign healers.

- **Targets:** Choose from raid markers (skull, cross, square, etc.), bosses, adds, or based on fight mechanics.
- **Tanks:** Assign any class as a tank.
- **Healers:** Assign players who play as druids, paladins, priests, and shamans.

# To select a player, click the cell and choose from the dropdown menu.

  -Example Assignment:**

Let’s say you want to set up a fight with a boss and some adds. You would arrange your assignments accordingly:

# To announce your assignments in raid chat, simply click the <code>Announce</code> button in the top left corner:

  -Note:** These assignments cannot be saved and loaded again without using the templates feature.

  -Templates**

Templates allow for preset assignments tailored for specific raid encounters (e.g., Molten Core, Blackwing Lair, Ahn'Qiraj, Naxxramas).

  -How to Use Templates**
# Click the <code>Templates</code> button in the top right of the frame to access the dropdown.
# Select the desired template, for example, the Gaar template for Molten Core:

# Assign players to the template as needed:

# To save your current assignments to the template, click the <code>Save</code> button next to the template dropdown.

  -Note:** Only player names are saved. Changes to row counts or target column values will not persist after a relog or UI reload.

  -Roster Management**

Your roster is a list of players you frequently play with, enabling quick assignments without needing everyone to be in the raid at the same time.

  -Managing Your Roster**
# Click the <code>Roster</code> button to open the roster window:

# To add a player, click <code>Add Player(s)</code> in the respective class section. Enter their name(s) in the pop-up and click <code>Done</code>. You can list multiple names, one per line.
# The player will now appear in the roster and can be assigned accordingly.

  -Automatic Synchronization**

TWAssignments synchronizes assignment tables, selected templates, and rosters among all members with the addon installed. The raid leader acts as the master node for synchronization. When players join, they request a full sync from the leader.

  -Important Notes:**
- Duplicate names are removed within each class but allowed across different classes.
- The synchronization algorithm ensures fresh roster updates are communicated efficiently between players.

## Preview
## Features
TWAssignments primarily allows you to assign players to specific targets during a raid and announce these assignments in the raid chat. Here are some key points to remember:

- **Raid Group Requirement:** Changes can only be made while in a raid group, and only leaders or assistants can modify assignments.
- **Leader Requirement:** The raid leader must have TWAssignments installed to facilitate automatic synchronization between members.
- **Version Compatibility:** All assistants and leaders should use the same version of TWAssignments to ensure consistent behavior and communication.

For more details, refer to the section on Automatic Synchronization.
