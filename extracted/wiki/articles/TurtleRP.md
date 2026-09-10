---
title: "TurtleRP"
url: "https://turtle-wow.fandom.com/wiki/TurtleRP"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-01-01T10:53:44Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# TurtleRP

**TurtleRP** is a roleplay addon. It enhances your roleplay experience by providing profile management, in-game tooltips, directory browsing, map location sharing, and chat commands.

## Installation
**GitAddonsManager**

The easiest way to keep **TurtleRP** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/OldManAlpha/TurtleRP.git
# **Select the Branch:** Ensure that the main branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to TurtleRP, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Note**: If a link is included in the text, and you are using Shagu / PFUI, The text will be formatted incorrectly because Shagu adds a white color after a link.

## Git Links
- **[(OldManAlpha)](https://github.com/OldManAlpha/TurtleRP)** - Optimized version

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/ttrp dir</code> or <code>/ttrp directory</code>
|Opens the directory panel to browse profiles.
|-
|<code>/ttrp</code>
|Opens the admin/profile interface.
|-
|<code>/ttrp tray</code>
|Shows the tray icons
|-
|<code>/ttrp help</code>
|Displays available slash commands
|}

## Preview
Toolbar:

Profile:

## Features
- **Player Icons** - Choose an icon for your character that will show up when players mouse over you.
- **Custom Names** - Create a title, first name, and last name for your character.
- **Enhanced Tooltip** - See class colors, guild affiliation, custom icons, back in character (IC) and out of character (OOC) information all in the tooltip!
- **Stored Data** - Data for all characters is cached and stored for quick access and future character directories.
- **Descriptions** - Provide descriptions in plain text or WoW's allowed basic HTML.
- **At A Glance** - Select icons and snippets to display whenever players target you.

**Profile Management**

- **Open Profile**: Use the admin panel or <code>/ttrp</code> command.
- **Switch Profiles**: Use the dropdown menu in the profile tab.
- **Edit Profile Info**: Fill out character name, race, class, description, notes, and roleplay style.
- **Save Profile**: Changes are saved automatically or via the save buttons.

**Profile Features**

- View detailed character info, including:
  - Full name
  - Race & class with color coding
  - IC/OOC status
  - Pronouns
  - Descriptions and notes
  - RP style and preferences

**Directory & Map Features**

- **Browse Profiles**: Use the directory panel to find other players' profiles.
- **Sort & Filter**: Click column headers to sort by character name or zone. Use the search box to filter results.
- **View Nearby Players**: The addon tracks players' locations and displays them on the map if in the same zone.
- **Delete Profiles**: Profiles with bad characters can be manually removed from the directory.

**Map Location Sharing**

- Players can share their current zone and map coordinates.
- Share location with permission in settings.
- **Show Nearby Players**: Automatically updates map icons for players in the same zone.

**Tooltip & In-Game Display**

- **Hover over players**: Shows detailed profile info in tooltips, including:
  - Name, race, class
  - Guild info
  - IC/OOC status
  - Pronouns
  - Descriptions
  - Profile icons
- **Right-click on target**: Opens the profile window for more details.
- **Mouseover**: Sends a request to fetch and display in-tooltip info about the hovered player.

**Chat & Emote System**

- **Send Long Emotes**: Use <code>/ttrp</code> or chat commands to send long-form emotes split into manageable chunks.
- **Commands**:
  - <code>/ttrp emote <text></code> — Sends a long emote, with quotes verification.
  - Use the chat throttle system to prevent spam.
- **Chat Channel**: Uses a custom channel (<code>TTRP</code>) for communication.
- **Request Data**: Requests profile info from other players using <code>/ttrp request <player></code>.

## Important Notes
- Characters with special characters ("~", "°", "§") in their profiles are blocked from saving.
- Long descriptions and notes are scrollable and can be extended.
- Be cautious with NSFW profiles; toggle visibility in settings.
- Always update the addon to benefit from bug fixes and new features.
