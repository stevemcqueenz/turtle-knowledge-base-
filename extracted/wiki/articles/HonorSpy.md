---
title: "HonorSpy"
url: "https://turtle-wow.fandom.com/wiki/HonorSpy"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T12:16:50Z"
fetched: "2026-09-10T07:38:59Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# HonorSpy

Records PvP standings of all players for turtle wow.

## How to Install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the honorspyturtle-master folder to honorspyturtle
# Restart the game

Purge your data from the mini-map button if you used a different version before.

## Git Links
**[(jrc13245)](https://github.com/jrc13245/HonorSpyTurtle)**

## Preview
## Commands
- <code>/hs show</code> -> show/hide standings table
- <code>/hs search player_name</code> -> report specific player's standing
- <code>/hs standby</code> -> enable/disable addon (in case you disabled it from right-click menu this helps to re-enable it)

## About
HonorSpy does all the magic in background.

# It inspects every player in 'inspect range' which you target or mouseover
# It syncs your db with other party/raid/bg members and your guild-mates on your death
# It can estimate your (or specific player) onward RP, Rank and Progress, taking into account your (player's) standing and pool size.
# It can export your internal DB in CSV format to copy-paste it into Google Spreadsheets for future calculations. Spreadsheet done specially for HonorSpy, it will estimate RP for all players.
# It supports automatic weekly pvp reset. Reset day can be configured.
# You can see how old every player data is in your db by hovering it in table
# Supports sorting by RP and ThisWeekHonor
# Limit number of players shown to reduce lag on table open. Default limit is set to: 750.

Options can be invoked by right clicking on the mini-map icon.

It only stores players with at least 1 honorable kills. Reset day can be configured, default is Wednesday. Reset time is fixed at Midnight UTC.

P.S. Do not be afraid of losing all your data, very likely that another players with HonorSpy will push you their database very soon. The more players use and collects data -> the more up-to-date data you will have. Magic of sync.

## Contributors
- kakysha (Author)
- Mistaboom 
- Moxie 
- syli
