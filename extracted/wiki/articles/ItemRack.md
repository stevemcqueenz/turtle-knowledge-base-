---
title: "ItemRack"
url: "https://turtle-wow.fandom.com/wiki/ItemRack"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-31T13:48:57Z"
fetched: "2026-09-10T07:39:02Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# ItemRack

This is a mod to make swapping equipment easier.  You add equipment slots to a bar and mouse-over on the bar will create a menu of all items in your bags that can go in that slot. 

## Installation
**GitAddonsManager**

The easiest way to keep **ItemRack** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/McPewPew/ItemRack.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>ItemRack</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

**Optional**: If you want to use ItemRackFu, drag the ItemRackFu folder into the main Addons folder.

## Git links
- [**(Otari98)**](https://github.com/Otari98/ItemRack)
- [**(McPewPew)**](https://github.com/McPewPew/ItemRack)

## Setup
Initially the ItemRack is empty.  You choose which armor slots to add to the bar with Alt+Click:

# Open your character window ('C' is the default key)
# Alt+Click equipment slots to the bar.  For instance: Alt+Click your helm to add the head slot to ItemRack.  Alt+Click it again to remove it.  You can add as many equipment slot as you want.
# That's it really.  Mouse-over that item and if any other item can go in that slot it will display it in a menu.

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/itemrack
|Toggle the bar on/off
|-
|/itemrack reset
|Restore the window placement to a default state
|-
|/itemrack reset events
|Restore the events to their default
|-
|/itemrack reset everything
|Display a popup confirmation to reset sets, events, settings to default
|-
|/itemrack lock or unlock
|Toggles the lock to prevent moving/resizing the bar
|-
|/itemrack scale (number)
|Manually set scale to an exact number (0 to 1)
|-
|/itemrack opt
|Toggle the options window
|-
|/itemrack equip (set name)
|Equips a set
|-
|/itemrack debug
|Display a list of currently registered events
|}

## Preview
Sets menu

 

Item rack 

## Customizing Display
- You move the window by dragging the black border of the bar.
- You resize/scale the window by dragging the "grip" in the lower right corner of the bar.
- You rotate the window by clicking the "rotate" button on the edge of the bar.
- Once you have the bar positioned where you like, you can hit the "lock" button on the edge of the bar.  The buttons on the edge will disappear and the window cannot be moved.  However you can still add/remove items when the bar is locked.
- To unlock the bar, hold Alt while you mouse-over the bar.  The lock and option buttons will return.

## Usage
- Mouse-over an item in the bar and a menu will pop up of all items in your bags that can go in that slot.  Click the item in the menu and it will swap.
- If an equipped item can be used, clicking the item on the bar (or its key binding) will use the item.
- Default behavior is to only show Soul-bound items in the menu.  You can turn this off in options, accessed by a button on the edge of the bar. (Hold Alt down if the bar is locked to get to the options button)
**Sets**

To start making sets, left-click the ItemRack mini-map button:

- Any slots on the rack are automatically marked active and will be highlighted.
- Darkened slots will not save with the set.
- You can toggle whether a slot will be active by clicking the slot.
- You can swap gear to active slots the same as you do from the rack. (mouse-over menu)
- ALT+click works in the set builder same as character panel.
- You can save an unlimited number of sets, but only 30 max will show on the menu.
- Sets will not queue during death or combat (yet)
- Sets are saved per-character

**To equip a set, there are three ways:**

# Add the Set "slot" to the rack by alt+clicking yourself in the character window. (or alt+click the set icon in the set builder).  Now you can swap sets the same as you swap individual items.  Mouse-over the "Set" slot and it will display your saved sets to swap to.
# Bind a key from the set builder.  Up to 10 sets (per character) can be directly bound to a key.  After you've saved a set, click 'Bind Key' and then choose a key to bind to the set.  You do not need to create any macros or action buttons.  Just hit the key to equip that set.
# Make a macro.  In some cases you may want to situationally equip a set.  To do so in a macro, use /script EquipSet("setname").  For instance: /script if UnitClass("target")=="Priest" then EquipSet("1h+shield") end.
**Queued Items**

We can't swap non-weapon items when we're dead or in combat.  If you attempt to swap in either of these conditions, ItemRack will "queue" the items for immediate swap once you leave combat or return to life.

- The queued item will appear as a small inset into the slot it's going to.
- If you want to unqueue an item, re-select it again.
- If you want to queue the item to another slot (ie, ring from one finger to the other), select it for the other slot.
- The 'queue' is only one-item deep.  Meaning, once a queued item is equipped that queue is emptied.
- Selecting a series of items for a slot will only change the queued item.  It won't set up an order to them.
- You can queue as many armor slots as you want.  For instance if a druid is corpse camping you and you're paranoid enough to have a suit of Nature Resist gear in your bags, you can queue up the whole suit and it will swap in on revive.
**Misc**
- You can directly Alt+Click the slot on the ItemRack to remove it.
- You can Alt+Click items or sets on the menu to hide/reveal them. (hold Alt down while you open the menu to see hidden items/sets)
- There are three buttons on the end of the ItemRack.  These are: Rotate, Lock and Options.
- Hold Alt while you move-over a locked bar to get at the lock/options buttons.
- In Options you can toggle things such as numbered cool-downs and whether to display only soul-bound items.
- Key bindings are tied to the armor slot, not its placement on the bar.  For instance if you bind CTRL+H to 'Use Helm Item', CTRL+H will use the helm no matter where it exists on the bar.
- An item doesn't need to be on the bar to use its key binding.
- If the control buttons seem to disappear on you when moving the bar, check the other end of the bar. ItemRack tries at all times to keep everything on the screen, and will rearrange parts of itself to accomplish this.
- In options you can prevent the menu from popping up unless Shift is down.
- If you lose the window or shrink it too much, "/itemrack reset" will restore the bar to default placement/size.
- The settings in the options window are global.  They will affect all characters.  Bar placement/size and contents are per-character.
- 'Notify When Ready' option will only notify for items you use or attempt to use in a session.
- Notifications will not be sent if the bar is off the screen.
- If TrinketMenu Mode is enabled and you have the top trinket and bottom trinket together on the bar, it will add spacers around them as needed.  A more flexible spacing method will be added in the future.
- To add a spacer after an item on the bar, while it's unlocked Alt+right click the item (temporary solution)

## FAQ
- Q: I have problems with the mount event.
- A: If you have a recent Titan Panel installed, it includes a Titan Rider plugin that automatically swaps gear.  It will make a mess if both are running at once.  Disable one or the other.
- Q: How do I move the minimap button?
- A: Drag it like you would an ordinary window.
- Q: Can I use this to swap weapons?
- A: Yes you can do it several ways.  You can manually swap them directly on the bar or you can create a set for each weapon configuration.
- Q: What about just swapping main-hand to right-hand?
- A: For a specific swap like that just use: /script PickupInventoryItem(16) PickupInventoryItem(17), but as an example of using this mod in a macro: Create two sets, one named "Before" and another named "After".  Then create this macro: /script if MainOffSwap then EquipSet("Before") MainOffSwap=false else EquipSet("After") MainOffSwap=true end
- Q: Localization?
- A: This should work on all clients except range and ammo slots need localized.  See the localization.lua for details.
- Q: Can I add my own icon to use for sets?
- A: Sure.  Make a 64x64 32-bit TGA and drop it in your Interface\Icons folder.  The icon will appear in the list of available icons.  For in-game icons, see the end of localization.lua.
- Q: I locked the window but want to unlock it now to move/resize/rotate it.  How do I unlock with the lock button gone?
- A: You can unlock via the lock in the upper right of the options window.  Or hold ALT while you mouseover the bar and the control buttons will return.
- Q: I made a set containing just the carrot.  But my other characters don't see this set.
- A: With rare exceptions (ie, carrot) various characters on an account rarely have the same gear.  So sets are stored separately per-character.
- Q: What is the minimap icon supposed to be?
- A: It's a weapon rack next to a crate. :P  But yeah it's awful and needs a new picture.

## Events
ItemRack introduces event-driven scripts to swap gear.

**Using Events**
- In the options window when you right-click the minimap button are three tabs.  All event setup is done in the Events tab.
- Events are disabled initially.  To begin using events you need to enable it with the "Enable Events" checkbox at the top of the Events tab.  This is the "master switch".  You can set up a key binding to toggle all events on or off as well.
- In that tab you'll see a list of events with a red question mark beside it.  Click the question mark to choose what set to equip for the event.  When you've chosen a set it will be enabled.  You won't be able to enable an event until you've associated a set for it. (even if the event script doesn't rely on a defined script)
- To disable/enable a set with an associated event, uncheck the event.  Alternately, you can click Delete to remove the set association and have it drop down to the bottom of the list.
- Deleting an event not associated with a set will completely remove it if no other characters use that event.
**Editing or Creating Events**

If you hit Edit or New at the bottom of the events tab you'll be brought to the event script editor.  Here you define when the event runs and what it does.  You can copy-paste into/out of these boxes.  The four boxes are:

- Name: This is the name you'll see in the event list, ie Mount, Warrior:Berserker, Swimming, etc.
- Trigger: This is the WoW-generated event you want the event to trigger from. ie PLAYER_AURAS_CHANGED, CHAT_MSG_COMBAT_SELF_HITS, etc
- Delay: This is the time, in seconds, after the last occurance of the Trigger before the script runs.
- Script: This is the actual script that runs.  You can use any lua construct or make it as complicated as you want.  The code is directly run without any parsing.
- Some knowledge of WoW Lua and scripting will help a great deal in editing and creating events.  An excellent resource is the wiki: http://www.wowwiki.com/Interface_Customization
- In the lower left is a Test button.  You can use this to run the script once to make sure there are no syntax or other obvious errors.  But it can't test if the trigger works or anything beyond stuff that would prompt a red error box.
- If at any time you've messed up your default events and want them back: /itemrack reset events.  This will not touch your custom events.  It will just recreate the default events.
**Event Name**
- If you format a name like Class:Event, then you can restrict the list to the class unless "Show All" is checked in the Events tab.  For instance "Mage:Evocation" will make the event only list on mages.
- The class is the localized name of the class.  Other clients will probably want to keep "Show All" checked.
- If you change the name of an existing event and save it, a COPY is made.  This is to make it easy to set up multi-event scripts that can fire on many different triggers. (crits for spells, melee, vs hostile players, creatures, etc)
**Event Trigger**

The list of all usable events are listed here: http://www.wowwiki.com/Events

- You can use ITEMRACK_NOTIFY as a trigger for the mod's notify.  arg1 will be the name of item you received notification for.
- You can use ITEMRACK_ITEMUSED as a trigger for an item being used.  arg1 will be the name of the item and arg2 will be the slot the item was used in.
- Events enabled on a character are registered after the first PLAYER_ENTERING_WORLD when you log in/reload, not including that PLAYER_ENTERING_WORLD.
**Event Delay**
- If the delay is 0, then the script will immediately run on every occurance of the event.
- If the delay is greater than 0, then the script will be run only *once* after the last occurange of the event.
- Many events are fired in game hundreds of times in a flurry. BAG_UPDATE for instance can fire 300 times when you zone.  In those cases, putting a small delay here will ensure your script only runs once instead of 300 times. 0.5 seconds is sufficient in most cases.  For events that are frequent but not spastic (like UNIT_AURA or PLAYER_AURAS_CHANGED), I prefer 1 to defer processing while heavy stuff is going on (combat, loading, etc) but you can usually choose 0.
- You can use the delay to wait before running a script also.  For instance the "Overpower Begin" has a delay of 0 when an opponent dodges melee, and "Overpower End" has a delay of 5 when an opponent dodges melee.  With this pair it can swap in gear at the dodge and swap gear out 5 seconds later.  If the opponent dodges again in that 5 seconds, "Overpower Begin" will immediately run again and the "Overpower End" will wait until 5 seconds after tht second dodge.
- arg1 and arg2 will be saved in delayed events, but arg3+ will not
**Event Script**

You can use the entire Lua environment.  In the default events I make heavy use of globals to carry a state over from one event to the next.  You could check the gear currently equipped to determine its new state instead if you want. Scripts can be up to 4096 characters long. You can add bracketed comments and they will appear in an event's tooltip: --[Add notes anywhere in your script](Add notes anywhere in your script) Scripts are run with RunScript().  

This is not as fast as pre-compiled Lua.  If you have some massive function you want to do many times, it's always better to embed it into an existing .lua that loads with the game. 

**There are some helper functions to help simplify scripts:** 

- EquipSet() : Equips the set associated with the event.
- SaveSet() : Remembers the gear currently in the slots of the associated set.
- LoadSet() : Equips the gear saved with SaveSet() in the slots of associated set. 
- ToggleSet() : Toggles between "SaveSet() EquipSet()" and "LoadSet()". 
- You can pass names of sets in the above functions also: EquipSet("setname") : Equips a set named "setname".
- SaveSet("setname") : Remembers the gear currently in the slots of "setname".
- LoadSet("setname") : Equips the gear saved with SaveSet() in the slots of "setname".
- ToggleSet("setname") : Toggles between "SaveSet("setname") EquipSet("setname")" and "LoadSet("setname")".
- If either EquipSet, SaveSet, LoadSet or ToggleSet is used by another part of the UI, then use ItemRack_EquipSet, ItemRack_SaveSet, ItemRack_LoadSet, ItemRack_ToggleSet instead. 
- Two other helper functions: ItemRack_PlayerMounted() : Returns true if the player is mounted.  This method is made for speed primarily.  If you have problems with this method, I highly recommend the IsMounted mod.  ItemRack will defer to IsMounted to be sure if you're mounted or not. 
- ItemRack_GetForm() : Returns the name of the form you are in.  ie "Battle Stance" "Moonkin Form" etc. 

Finally, remember the script is run without parsing.  You don't need to equip a set in reaction to an event.  You can make an event to watch chat and flash the chat window if someone says your name.  Mostly, remember that ItemRack makes no effort to make sure the script will do what it's supposed to do.

## Contributors
- Gello (author)
- Leelaa and Isakur (German localization) 
- Tinou (French localization)
- Khalil (modified)
- [McPewPew](https://github.com/McPewPew) (support turtle mount)

## Changes
**New in 1.975**
- Fix for drinking event
- Notifications will use default floating combat text if enabled

- 1.974, 8/22/06, toc changed
- 1.973, 8/2/06, bugs fixed: changed evocation to ITEMRACK_BUFFS_CHANGED, changed Spirit Tab Begin arg1 to ItemRack.Buffs
- 1.972, 7/29/06, bug fixes: arg1 preserved through BuffsChanged, GetMouseFocus() could be nil in BAG_UPDATE
- 1.971, 7/28/06, bug fixes: changed BankFrame:IsVisible to a flag when bank open/closed, SPELLS_CHANGED events now PLAYER_AURAS_CHANGED for 1.12
- 1.97, 7/27/06, added: bank support, ITEMRACK_BUFFS_CHANGED
- 1.96, 4/20/06, bug fixed: 4606 error, checked if queue empty, changed: unequip will unequip whole set even if partial unequipped, reset events will nil .old itemid's in sets
- 1.95, 4/6/06, changes: IsSetEquipped "optimizations" removed, temporary events reverted to earlier versions, tooltip fix scaled back to one SetOwner, queuing a worn set clears queue for those slots, added: queued item insets to character sheet
- 1.94, 3/29/06, bug fix: menu not appearing on bar
- 1.93, 3/29/06, bug fixes: nil errors from tooltip changes, added: relic slot support
- 1.92, 3/20/06, bug fixes: attempt to fix arithmetic on string value 4706
- 1.91, 3/19/06, bug fixes: invalid key for 'next', couple nil errors, changed: mount event to old style, added: option ('Show set icon labels') to show/hide set labels, option ('Auto toggle sets') to auto toggle sets, shift on chosing set toggles set
- 1.9, 1/24/06, release of 1.891-1.897
- 1.897 (1.9 beta7) 2/24/06, bug fixed: queue jams (hopefully) gone for good, added: option to show/hide cloak/helm, AQ mount checks, changed: consolidated timers
- 1.896 (1.9 beta6) 2/21/06, bug fixed: new user and post-combat/death error
- 1.895 (1.9 beta5) 2/20/06, bug fixed: hide tradables fixed
- 1.894 (1.9 beta4) 2/19/06, changed: options to scrollable list, form events use IR_FORM global, combat/death queue redone to a single "set" instead of a full queue, alt+click on locked bar won't add/remove slots, one-hand won't show up in offhand for non-DW'ers, items clicked on cooldown won't appear to be used, added: square minimap, large cooldown, reset events
- 1.893 (1.9 beta3) 2/5/06, bug fixed: TrinketMenu Mode menu fixed if only trinkets on bar, added: Large font option for event script, changed: Event scripts overhauled for new EquipSet
- 1.892 (1.9 beta2) 1/29/06, bug fixed: non-standard bags recognized, old freespace code removed, 2h swaps on bar immediate move
- 1.891 (1.9 beta1) 1/28/06, changed: new EquipSet (enchants recognized), ^Requires dropped from "red" check, player-made events won't unregister on zoning, minimap button scaling fixed, /itemrack reset fixed
- 1.84, 1/20/06, bug fixed: menu update only checks MouseIsOver for plugin if it's installed
- 1.83, 1/19/06, added: titan support/docking, bug fixed: scroll wheel on lists, changed: checks for TitanRider enabled, events unregister/register on zoning
- 1.82, 1/16/06, changed: ALT+click/hide behavior made an option for all but sets (default off), bugs fixed: notify with no bar on screen should reliably fire, 2h->1h+offhand swaps will moved orphaned offhand to leftmost bag again
- 1.81, 1/14/06, bug fixed: Mount event
- 1.8, 1/12/06, added: IsSetEquipped(setname) returns true if all slots in a set are currently worn, error message when attempting to equip a set that doesn't exist, TitanPanel_ItemRackUpdate, note that events are suspended when set/event window up, bugs fixed: Disenchants/enchants/etc during gear swaps will abort the swap, Bloodvine will show up in menu on enUS clients, ammo count shows again, changed: initialization done in phases, removed cooldown boundry checks, tooltip scans changed to GetItemInfo, new events: Eating-Drinking, Low Mana, Skinning, Mage:Evocation, Priest:Spirit Tap Begin, Priest:Spirit Tap End
- 1.74, 1/8/06: bugs fixed: bags should work properly on deDE clients, set icon will remember last set when leaving an event, "Mount" event no longer disabled if TitanRider installed
- 1.73, 1/7/06: bugs fixed: Scrollbars enabled properly (the thumb will appear in 1.9.1 patch), Bindings saved using new SaveBindings, Soul Bags treated like quivers, ammo slot name lifted from tooltip for SaveSet, notify will happen if bar is off screen, changed: In TrinketMenu Mode, hold Shift to keep menu open on the bar, if any event uses ITEMRACK_NOTIFY trigger notify is automatically enabled, removed: check for TitanRider
- 1.72, 1/3/06: added: reset button added to options, bugs fixed: items used from action bars noticed by mod, users without SCT won't have notify messages "stick", scaling fixes for 1.9, removed scalebugfix (huzzah!)
- 1.71, 12/21/05: changed: inventory items used elsewhere in the UI reflects in the mod, arg1 and arg2 save on delayed events, added: ITEMRACK_ITEMUSED event (arg1=item name, arg2=item slot), Insignia Ready/Insignia Used events, examples for making scripts that swap on use, bugs fixed: added pink tiger to problem mounts
- 1.7, 12/8/05, added: events (see events manual.txt), sets queue, sets menu on minimap button, 30 second notify, French localization by Tinou, more slash commands (/itemrack help)
- 1.61, 11/02/05, bugs fixed: tooltip back to standard GameTooltip (should fix issues with Tipster, TipBuddy and other tooltip mods), set builder now updates properly when nothing on the bar
- 1.6, 10/31/05, bug fixed: error when items on notify queue are banked, "Container" in DE localized, added: menu pops up on character sheet, audible alert on notify, changed: ItemRack_CurrentSet made global
- 1.5, 10/5/05, bug fixed: pairs of items of same name with one worn swap, "Container" in German, added: Flip bar growth option, alt+click items in menu to hide them, changed: selecting set equips it
- 1.42, 10/2/05, bug fixed: two items of same name will swap in sets, key bindings in normal key binding window force to sets
- 1.41, 9/30/05, bug fixed: nil error on mouseover set icon
- 1.4, 9/30/05, added: sets, minimap button, /itemrack opt, help text, changed: using sharpening stones/poisons/enchants/etc will work on the bar, only wearable items will show in menu, options moved to a tab on sets window, bugs fixed: ghost countdowns for real
- 1.32, 9/18/05, bugs fixed: overhead errors fade normally, tabard on bar with cooldown/notify won't error, switching from 2h to 1h+shield queue works properly, swapping to empty won't attempt to put items in quivers, "ghost" cooldowns no longer show on empty slots, removed check for 1.7 in supposed client bug fix for 1.7 that never happened, changed: queues process as sets in stages
- 1.31, 9/8/05, bug fixed: rotate menu works when bar is horizontal
- 1.3, 9/7/05, added: German translation by Leelaa, Alt+right click an item will add a space after it, changed: right-click will activate an item same as left click, holding Alt while mouseover items will show full tooltip if Tiny Tooltips enabled, option TrinketMenu Clicks renamed TrinketMenu Mode, while TrinketMenu Mode enabled trinkets show as one menu, bugs fixed: overlapping tooltips, queue won't process upon FD, ammo count shows when adding to rack
- 1.21, 9/3/05, added: ammo shows quantity, changed: custom tooltip used instead of standard, bug fixed: thrown weapons recognized, multiple ammo stacks show as one in menu, error clicking empty slot with notify on, weapons will queue while dead
- 1.2, 9/3/05, added: options to hide tooltips or make them smaller, notify when items ready, /itemrack scale as alternative to set scale, changed: spacers to trinkets when TrinketMenu Clicks checked, OnUpdates given ItemRack_InvFrame parent, bugs fixed: mod hides when UI hidden, hunter FD won't block item swaps
- 1.1, 9/2/05, added: option to swap to empty slots, option to reverse menu growth, left/right-click trinkets options added, changed: "Soulbound Only" renamed to "Hide Tradables", some slots ignore soulbound flag now: trinket, ammo, shirt, tabard. quest and conjured items now show with 'Soulbound Only' on. bug fixed: items queued while dead will swap on res before release
- 1.0, 8/31/05, initial release
