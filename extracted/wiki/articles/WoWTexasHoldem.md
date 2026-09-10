---
title: "WoWTexasHoldem"
url: "https://turtle-wow.fandom.com/wiki/WoWTexasHoldem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-03T09:16:59Z"
fetched: "2026-09-10T07:40:01Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# WoWTexasHoldem

A fully functional Texas Holdem Poker mod. Play poker with your friends while waiting for spawns, raids, or looking for groups.

## Installation
# Download this zip: [**WoWTexasHoldem.zip**](https://drive.google.com/file/d/1VgjvNZVOUhRnp3bO_6azilrE0DKKK1YC/view)
# Unzip the folder into your <code>Interface\AddOns</code> directory.

## Starting a Game
- **As Dealer:** Type <code>/holdem</code>
- **Join a Game (as Player):** Type <code>/holdem PlayerName</code> (replace <code>PlayerName</code> with the dealer's character name)
**Dealer Controls**
- To start dealing, right-click your player box or type <code>/holdem</code> as dealer.
- To stop dealing, click the "Quit" button or run <code>/holdem</code> again as dealer.
**Joining or Watching a Table**
- Type <code>/holdem PlayerName</code> to join or spectate.

## Playing the Game
- **Deal Cards:** As dealer, click "Play" or run <code>/holdem</code> to deal hole cards.
- **Betting:** Use buttons:
  - **Fold:** Click to fold your hand.
  - **Call:** Match the current highest bet.
  - **Raise:** Increase the bet by the set amount.
  - **All In:** Bet all your chips.
  - **Adjust Raise:** Use "+" or "-" buttons to change raise size.
**Sit Out / Back In**
- Click "Sit Out" to leave the hand temporarily.
- Click "I'm Back" to rejoin.
**Ending a Game**
- As dealer, click "Quit" or type <code>/holdem</code> to stop the game.

## Commands
{| class="fandom-table"
!**Command**
!**Description**
!**Usage**
|-
|<code>/holdem</code>
|Start a game as dealer or join a table
|<code>/holdem</code>
|-
|<code>/holdem PlayerName</code>
|Join or spectate a game hosted by PlayerName
|<code>/holdem PlayerName</code>
|-
|<code>/holdem 'PlayerName'</code>
|Same as above, explicitly specifying PlayerName
|<code>/holdem 'PlayerName'</code>
|-
|(Right-click player box)
|Start dealing / set dealer (via UI)
|Right-click on your player box
|}

{| class="fandom-table"
!**Buttons in the UI**
!**Description**
|-
|**Play**
|Deal hole cards / start the game
|-
|**Quit**
|End the current game
|-
|**Sit Out**
|Leave the hand temporarily
|-
|**I'm Back**
|Rejoin the hand after sitting out
|-
|**Fold**
|Fold your hand during play
|-
|**Call**
|Match the current highest bet
|-
|**Raise**
|Increase the bet by your set amount
|-
|**Raise + / -**
|Adjust the raise amount (via "+" or "-" buttons)
|-
|**All In**
|Bet all your chips
|}

- Minimize support: Click the minimap button to minimize/maximize.
- Dealer can set chips, start dealing, or boot players via right-click menus.
- Show your cards manually with "Show Cards" option during showdown.

## Preview
## Version
Version Updates Summary

**v1.21**
- Minimize support via minimap button
- Flash notification when it's your turn
- Fixed crash bug related to showing cards after losing chips
- Resizable window: 50%, 75%, 100%
**v1.20**
- Blink indicator for waiting players
- Dealer button moves around
- Sit out feature
- 30-second timer for player actions
- Fixed "All In" button display bug
