---
title: "Prat"
url: "https://turtle-wow.fandom.com/wiki/Prat"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-03-26T12:33:58Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Prat

A framework for chat frame modules.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip .
# Move the "Prat" folder into your TWow/Interface/AddOns.
# Restart the game.

## Git Links
[**(Qxcl)**](https://github.com/Qxcl/Prat-turtle)

## Commands
- **/prat** - show GUI options
- **/pratcl** - use console commands

## Preview
Option:

Chat:

## Modules
- **Buttons** - toggle the chat menu and chat window buttons on and off (default=off).
- **ChannelColorMemory** - channel coloring by channel name instead of number (default=on).
- **ChannelNames** - shorten channel names in the chatframe.
- **ChannelSeparator** - separate various channel options in the Blizzard UI (default=on).
- **ChatTabs** - additional chat window tab options.
- **Editbox** - change edit-box position, width, and backdrop alpha (default=attachedTop,widthChatFrame1,visibleBackdrop).
- **Fading** - toggle the fading in chat windows on and off (default=off).
- **FontSize** - adjust the font size for chat windows (default=12).
- **Highlight* - options for highlighting text in chat windows.
- **History** - expanded chat history options.
- **Justify** - set the justification for chat windows (default=Left).
- **Keybindings** - keybindings for different chat channels.
- **Notification** - options for chat channel notification.
- **PlayerNames** - color player names by class, set brackets around player names (default=angledBrackets).
- **PopupMessage** - display chat with your name in a large popup frame. (default=off)
- **Scroll** - enable mouse-wheel scrolling for chat windows (default=on).
- **StickyChannels** - toggle stickiness of different chat channel types on and off (default=on).
- **TellTarget** - adds a slash command (/tt) to send a message to your target (default=on).
- **Timestamps** - adds timestamps to chat windows (default=on).
- **UrlCopy** - makes URL copying easy (default=on).
- **Who** - additional channel actions.

## Changes
  -v1.0.8**

- Removed the Chat Link feature. This feature is not necessary on Turtle WoW, so it did nothing but break item links for people who do not have Prat.

  -v1.0.7**

- Added UNICODE font support (Chinese font) - Need reload UI after change font 

  -v1.0.5**

- Added setting for default ChatTab at logon or reload

  -v1.0.3**

- try to fix performance issue at PlayerNames module

  -v1.0.2**

- added self nickname highlighting in chat (PopupMessage can be disabled)
- some fixes

  -v1.0.1**

- added ruRU Locale by RuWOW Team
- added support for Census+ database (color nicks in chat)
- added Gui options (LibWaterfall) or u can use Niagara
- updated Libs
- some fixes
