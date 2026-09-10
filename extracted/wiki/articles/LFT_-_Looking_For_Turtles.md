---
title: "LFT - Looking For Turtles"
url: "https://turtle-wow.fandom.com/wiki/LFT_-_Looking_For_Turtles"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-05-21T15:32:12Z"
fetched: "2026-09-10T07:39:07Z"
is_turtle_content: false
patch: null
categories: []
---
# LFT - Looking For Turtles

Looking For Turtles (LFT) is a custom "Looking for Group (LFG)" or "Dungeon Finder" alternative, made for Turtle-Wow.

## What it does
# Scans for, and helps find more players to do dungeons with;
# Automatically tries to form a group out of found players when conditions are met (1 Tank, 1 Healer and 3 Damage Dealers found);
# Helps already established group to fill-up missing roles, both before and mid-dungeon (in case someone left for example);
# Provides a List of all Dungeons available to the player at their current level, with their expected difficulty (represented by colors);
# Provides "Dungeon Progress Window" upon making the group. This window tracks all bosses players need to beat in order to finish the dungeon.

## What it does NOT do
# It **does not** automatically teleport players in to the dungeon. Players are required to find an entrance to the dungeon themselves;
# It **does not** allow to filter out fresh/in-progress groups. Player will see all groups with available slots.

## The UI.
The UI is brought up by clicking an Eye button which is situated around player's minimap. The button is moveable.

### Main window of the LFT consists of:
# Role selector. Player is required to choose a role before registering themselves in the system. All roles that player's current class can not perform will be blacked-out. In order to chose a role player has to tick the Box near the icon that represents desired role. The roles are - Tank (shield), Healer (cross) and Damage Dealer (sword);
# Type (drop-down menu) - allows player to switch between the list of ALL available dungeons and only the recommended ones. Recommended list will consist of more relevant dungeons for player's current level.
# List of all available dungeons that player can run. It consists of dungeon's name, tick box to the left of it and level requirements to the right. More dungeons will be added to the list as player gains levels. All entries are color coded, color defines its relative difficulty to the player. Green (low difficulty) means that the player either out-leveled the dungeon or is close to it. Orange (medium difficulty) means that the player has just met the requirements for the dungeon and going for it could be challenging.
# Find Group button. Allows player to register for selected dungeons;
# Dungeon/Browser tabs at the bottom. Allows player to switch between the Dungeon List and Group Browser.

### Group Browser tab
Browser tab allows player to browse groups that are currently in the process of forming. This tab will only show Dungeons player is eligible for.

Browser's UI consist of:

# List of all groups that are currently being formed. Each entry has a Name, that indicates which dungeon it represents and the group-forming progress, represented by three class icons and numbers of players registered as that role for that specific dungeon;
# "Join as X" button, which will allow player to instantly join the queue as X role for that specific dudgeon, but only if player's class can perform that role and there is a need for it. As an example (picture) - The Deadmines has "Join as Damage" button on because that group only has one person registered as Damage Dealer, while other two currently available groups have an overabundance of players of that role.
# Contextual menu, which is brought up by hovering cursor over the Role Icon. It shows the name of that role (in color) and all players (their nicknames) who are currently trying to find a group for that specific dungeon.

## How to use
In order to register themselves for the dungeon players have to:

# pick a Role before registering;
# choose dungeons they want to go to via ticking the corresponding boxes left of the their names(at the Dungeon List tab). Multiple dungeons could be chosen at the same time;
# press the "Find Group" button to finalize their choice.

Alternatively, players could, after choosing their role, go to the Group Browser and check it for available groups. If there are available slots, player can use "Join as X" button to join that specific dungeon search as a X Role. 

After registering, player can monitor progress by either using the menu or by hovering over an Eye button. While hovering over an Eye button the short summary of system's group forming process will be shown (example >).

After enough players will register for the chosen dungeon player will be greeted by "Ready Check" confirmation Window, which requires them to confirm their readiness. Group will be automatically formed after all players confirm that they are ready . 

## Additional Notes
- The list updates automatically every couple of seconds, it could take time for the system to realize that enough players had registered - be patient.
- If for some reason there is enough players but the group is not formed - wait some more. If waiting is not something you want to do then feel free to use the browser and hover over Role Icons to see names of all registered players. Use that list to manually invite people in and form the group yourself.
- Med-High level Warlocks are the only means to summon people in to the dungeon.
- This addon has its dedicated github page - https://github.com/BobSemple/LFT & https://github.com/doorknob6/pfUI-turtle/. Check it for updates or for reporting errors/Issues.
