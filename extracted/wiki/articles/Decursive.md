---
title: "Decursive"
url: "https://turtle-wow.fandom.com/wiki/Decursive"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-06-01T08:46:06Z"
fetched: "2026-09-10T07:38:38Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Decursive

Decursive is a lightweight addon designed to help players efficiently remove debuffs (poisons, diseases, curses, magic effects) from themselves and allies. It automates the cleansing process, making it faster and more reliable during raids, parties, or solo play.

## Installation
**GitAddonsManager**

The easiest way to keep **Decursive** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/MarcelineVQ/Decursive.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>Decursive</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git links
- [**(Lexiebean)**](https://github.com/Lexiebean/Decursive) - normal version
- [**(MarcelineVQ)**](https://github.com/MarcelineVQ/Decursive) - enhanced for superwow users

## Commands
Commands you can use
{| class="fandom-table"
|<code>/dcrshow</code>
|Show the main Decursive window (live list).
|-
|<code>/dcrhide</code>
|Hide the main window, leave the live list visible.
|-
|<code>/dcroption</code>
|Toggle the options/configuration window.
|-
|<code>/decursive</code>
|Run a cleanse on your current target (macro recommended).
|-
|<code>/dcrreset</code>
|Reset Decursive window positions to default placement.
|-
|<code>/dcrpradd</code>
|Add your current target to the Priority List.
|-
|<code>/dcrprclear</code>
|Clear the Priority List.
|-
|<code>/dcrprshow</code>
|Show the Priority List UI.
|-
|<code>/dcrskadd</code>
|Add your current target to the Skip List.
|-
|<code>/dcrskclear</code>
|Clear the Skip List.
|-
|<code>/dcrskshow</code>
|Show the Skip List UI.
|-
|<code>/dcrdebug</code>
|Toggle debug output for troubleshooting.
|}

## Preview
Options: 

Decursive:

## Actions
Actions you can take

**In the live list**
- Left-Clicking on a name will cure that name without changing your target.
- Right-Clicking on a name will target that name and cure the target.
**In main DCR bar**
- Right-Clicking on the label "Decursive" will hide the buttons and lock the frame and the live-list.
**In WOW key binding interface**
- You can bind a lot of things to keys under "Decursive" section.

## Options
Options you can set

- On Decursive UI click on 'O' to display the option panel.
- "Print messages in default chat" (defaults to off) Will display messages in your default chat window (can spam a lot)
- "Print messages in the window" (defaults to on) Will print messages in the main game window, messages stay for 2 seconds on the screen and fade out. You can choose where those messages are displayed by moving the "Anchor". To display and move the anchor, push the button 'A' in the top right corner of the option window. Note that the messages start to be displayed far under the Anchor.
- "Print error messages" (defaults to on) Error messages (out of range, out of mana etc...) will be displayed in red.
- "The amount of afflicted to show" (slider, defaults to 5 maximum is 15) This set the numbers of afflicted persons shown in Decursive live list.
- "Seconds on the blacklist" (slider, defaults to 5 seconds) When someone is blacklisted, he will stay in the blacklist for this amount of time.
- "Seconds between live scans" (slider, defaults to 0.2) Decursive needs to scan each member of your raid/party, this option sets how often. Note that the higher the value is the longer Decursive will take time to detect afflicted people. If you have a slow frame rate you can try higher values.
- "Check for Abolish before curing" (defaults to on) Before curing poison or diseases, Decursive will check if there is not an "Abolish" type spell on the unit to cure.
- "Always use the highest spell rank." (defaults to on) Decursive will always use your higher spell to de-curse. If set to off, Decursive will use your lower spell unless several de-buffs are found.
- "Cure in a random order" (defaults to off) (not recommended) This options will cure in a random order instead of the intelligent one. Note that I do not recommend this option at all, it's not optimized.
- "Scan and cure pets" (defaults to on) Decursive will scan and cure pets of your raid/party.
- "Ignore Stealth-ed Units" (defaults to off) Decursive will not cure stealth-ed units. May slow down decurse and impact performances if turned on.
- "Play a sound when there is someone to cure"  (defaults to on) Decursive will make a sound if there is someone to cure.
- "Don't blacklist priority list names"  (defaults to off) If checked, Decursive will NEVER add players in your priority list to the blacklist. NOTE that if one of them is out of line sight, Decursive will get stuck on him.
- "Reverse live-list display" (defaults to off) Reverse the display order of the live-list, from top-to-bottom to bottom-to-top.
- "Show Tool-tips in afflicted list" (defaults to on) Shows tool-tips when you mouse-over a unit in the live-list with detailed info about the de-buff
- "Hide the live-list" (defaults to off) Note that for Decursive to work at its full potential, this option should be left unchecked. Hide the live-list, you won't see anymore nor here anything when someone is de-buffed.
- "Tie live-list visibility to DCR window" (defaults to off) If the main DCR window is closed then the live-list is hidden.
- "Cure:" (defaults to all on) There you can choose what type of de-buff to cure (according to your abilities). Simply check what you want.

## Logic
When you do a cleanse, the following logic is run

- Check target for curable effect, cure if found
- Check priority list (in order) for curable effect, cure if found
- Check self for curable effect, cure if found
- Check party members for curable effect, cure if found
- Check raid members for curable effect, cure if found
- Check pet for curable effect, cure if found
- Check party and then raid pets for curable effect, cure if found
- If you are not in a party, or not in a raid, it will skip the party and raid sections)
- If after all of this, if nothing is found it will say 'Nothing cleaned' in the system window. 
- If it is unable to target someone it will say so in the system window. 
- When it tries to clean an ailment, it will say so in the system window. 
- If the user is under the effect of an Abolish Poison/Disease it will not further cast remove poison or disease, it will instead skip them and keep searching.

## Skip list
Decursive also have a skip list, people in this list will be ignored.

- If the mod tries to cast a curable effect on a party member, but it fails (not in line of sight, etc), it will then put that unit on a blacklist for five seconds. 
- Being on the blacklist means you get cured last. This is to keep Decursive from getting 'stuck' on a player who is out of range/behind a wall, etc. 
- Decursive will never put the current player to the blacklist.
- If the mod comes across an ailment that can be ignored, it prints what it is and who it is on, but then moves on. 
- As I get more ailments that can be ignored I will add them to the internal arrays.
- This is not a client/server setup. Only the curing classes need to have this mod, nothing is required for a recipient.

## Contributors
- Quu (originally coded)
- Archarodim
- [Lexie](https://github.com/Lexiebean) (fixes)
- [Zerf](https://github.com/Zerf) (modified)
