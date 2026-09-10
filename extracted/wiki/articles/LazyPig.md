---
title: "LazyPig"
url: "https://turtle-wow.fandom.com/wiki/LazyPig"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-15T07:26:21Z"
fetched: "2026-09-10T07:39:07Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# LazyPig

An add-on for lazy people. This add-on manages many simple tasks such as auto dismount auto accept or auto roll and is also able to filter the chat from common spam or completely shut off channels while in a zone type so it is advised to configure it to your own liking when logging in.

## How to install
Either clone the repository to your WoW/Interface/Add-ons folder, or download manually via GitHub (click on Clone or Download -> Download ZIP. Do not forget to rename the directory to "_LazyPig" afterwards.

## Git links
- [**(Otari98)**](https://github.com/Otari98/_LazyPig)
- [**(jrc13245)**](https://github.com/jrc13245/_LazyPig)

## Commands
Type /lp first time in order to setup the add-on so it suit's you,

## Preview
## Enhancements
### Passive enhancements
- Auto dismount when casting spell or interacting with flight master(aq40 mounts included).
- Auto zg roll on bijou, coins(available 4 modes: off, pass, greed, need).
- Loot window auto position under the cursor when looting.
- Gossip auto processing when talking to npc(taxi, battle master, innkeeper, vendors).
- World chat mute mute /world channel in raid/dungeon/bg zone also filter repeated messages(30s default ban time).
- Improved right click if trade/auction/mail window is active, right click on container item will drag and drop it into trade/auction create/send mail window

### Active enhancements
These require shift modifier key press:

- Shift split/merge Shift + right will split stacked items
- Auto grey sell/repair if shift is pressed when merchant frame is open
- Autocomplete repeatable quests. token quests like: ad(scourge stones,insignias), zg(coins), bg(marks), thorium shells.

### Minor enhancements
- Group auto accept 3 modes (guild mates, guild mates>friends, everyone)
- Summon auto accept accept 2 seconds before confirm time expire
- Instance resurrection instant accept out of combat
- Extended camera distance increase max camera distance up to 50 yards

### Special key combinations
- Alt+ctrl+shift logout
- Ctrl+Shift follow
- Alt+Shift inspect, click button: bid auction
- Alt+Ctrl initiate/accept trade with other player, 

- Confirm popups: group invite/bg entry/release spirit/recover corpse/summon.
- Click button: send mail/create auction/buyout auction/accept quest.
- Roll: on green items other colors are ignored, 3 modes (need,green,pass).

## Contributors
- Ogrisch (author)
- mrmr (new gui)
- [Lexie](https://github.com/Lexiebean) (fixes and changes)
- [CosminPOP](https://github.com/CosminPOP) (fixes)
- [melbaa](https://github.com/melbaa) (fix)
- [Jce1231](https://github.com/Jce1231) (add function)
- [Gensoo](https://github.com/Gensoo) (bug fixes)

## Changes
  -New in v1.7**
- Added new feature record/replay for repeatable quests that allows you to complete them extremely fast.
- To record just hold down the Shift key and complete the repeatable quest, after that talk to the NPC again and all
- the previous actions will be auto replayed, remember not to release the Shift key.
  -New in v1.8**
- Added split feature (shift + right click will split stack)
  -New in v1.9**
- Added auto roll option for zg rep items: bijous, coins 
  -New in 2.3**
- Added easy to use grey sell feature, just press shift key when merchant frame is open
- Thorium shells exchange quest now can be automated(v1.7 change-log)
- Added auto queue bg feature
  -New in 2.5**
- Resolved problem with dismounting when more than 16 buffs is active(tool-tip instead of texture scanning)
- Fixed all issues with the auto completing of repeatable quests (bg marks)
- Fixed bg auto leave feature (did not trigger sometimes)
  -New in 2.7**
- Added new key combinations
- Improved right click on container items
- Added auto repair function(performed when merchant frame is visible and Shift key pressed)
- Improved quest/gossip auto processing
  -New in 2.8**
- Improved Shift Split(see v1.8 change-log)
  -New in 2.83**
- Removed /lps command replaced by easy to use intuitive split mechanism(to enable split feature you need to type /lp 6 - if disabled)
  -New in 2.88**
- Added Alt+Ctrl green roll key combinations
  -New in 3.0**
- Added "Mute World" chat functionality, available 3 modes (RAID>DUNGEON>BG, RAID>DUNGEON, RAID) after leaving specified zone /world chat will be unmuted, function disabled as default type /lp for details
  -New in 3.50**
- Greatly improved split mechanism, check video
  -New in 4.00**
- Added GUI to access type /lp
  -New in 4.40**
- Added keybindings
- Added spam filter
- Added salvation remover for tanks
- Fixed many small bugs
  -New in 4.50**
- Couple fixes
- Added drop WSG Flag binding
  -New in 4.52**
- Added find wsg efc binding
- Improved repeatable quests autocomplete for wsg and arathi(if you're lvl 60 you will always complete lvl 60 version no matter which one you choose)
- Some of the add-ons functions may not work if you're using not en/us localized client also bongos and oskin may cause some small issues. 
  -New in 4.56**
- Some minor fixes
- Resurrection auto accept now available only in instances
  -New in 5.00**
- Block Battleground Quest Share feature(no more Empty Stables)
- Brand New GUI made by mrmr
  -New in 5.01**
- Added auto mana buff remover (Intellect, Spirit, Wisdom).
