---
title: "MikScrollingBattleText"
url: "https://turtle-wow.fandom.com/wiki/MikScrollingBattleText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-15T05:45:21Z"
fetched: "2026-09-10T07:39:15Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# MikScrollingBattleText

This mod makes it easier to see combat information by scrolling it on the screen in 3 configurable scrolling areas. There is a scroll area for incoming heals/damage, one for outgoing heals/damage, and a third for notifications. Each scroll area is completely customizable.

## How to install
Unzip and copy paste these folders into the AddOns directory of your WoW game directory:

- MikScrolling BattleText
- MikScrolling BattleTextOptions

If your are upgrading the mod from a previous version, make sure to delete the old version prior to installing the new version.

## Git links
- [**(AtheneGenesis)**](https://github.com/AtheneGenesis/Vanilla_MikScrollingBattleText)
- [**(jrc13245)**](https://github.com/jrc13245/Vanilla_MikScrollingBattleText)
- [**(pepopo978)**](https://github.com/pepopo978/Vanilla_MikScrollingBattleText)

## Commands
- /msbt Shows the options interface.
- /msbt reset Resets the current profile to the default settings.
- /msbt disable Disables the mod.
- /msbt enable Enables the mod.
- /msbt version Shows the current version.
- /msbt stats Reports stats about table recycling.
- /msbt search pattern Sets a pattern for searching event types.
- /msbt debug Toggles debug mode.
- /msbt help Shows the command usage.

## Features
- Scroll incoming damage/heals, outgoing damage/heals, and notifications in separate configurable scroll areas on the playing field.
- Customize the position, animation style, show state, font style, font size, and font outline for each of the scroll areas.
- Customize each individual event's color, font style, font size, font outline, output message, and show state.
- Set "Master Font" settings that will be inherited by all of the scroll areas and the events in them unless they are overriden at the scroll area or event level.
- Merge AoE data into one event with cumulative damage/healing done with number of normal and crits specified.
- Show over-healing amounts against yourself or party/raid members.
- Add triggers that will allow you to show notifications based on various health and mana thresholds, or custom search patterns.  Triggers are also set to only fire for specific classes.
- Suppress particular messages you do not want to see such as mana gains from Blessing/Judgement of Wisdom.
- Load on demand options.

## Preview
## Supported Events
**Incoming:**

- Melee Damage
- Melee Misses, Dodges, Parries, Blocks, Absorbs, and Immunes
- Ability/Spell Damage
- Ability/Spell Damage Over Time (DoTs)
- Ability/Spell Misses, Dodges, Parries, Blocks, Absorbs, Immunes, and Reflects
- Spell Resists
- Heals
- Heals Over Time (HoTs)
- Environmental Damage    

**Outgoing:**

- Melee Damage
- Melee Misses, Dodges, Parries, Blocks, Absorbs, and Evades
- Ability/Spell Damage
- Ability/Spell Damage Over Time (DoTs)
- Ability/Spell Misses, Dodges, Parries, Blocks, Absorbs, Immunes, Reflects, and Evades
- Spell Resists
- Heals
- Heals Over Time (HoTs)
- Pet Melee Damage
- Pet Melee Misses, Dodges, Parries, Blocks, Absorbs, Immunes, and Evades
- Pet Ability/Spell Damage
- Pet Ability/Spell Misses, Dodges, Parries, and Blocks, Absorbs, Immunes, Reflects, and Evades
- Pet Spell Resists 

**Notification**:

- De-buffs
- Buffs
- Item Buffs
- Buff Fades
- Enter/Leave Combat
- Power Gains and Losses
- Combo Point Gains
- Combo Points Full
- Honor Gains
- Reputation Gains and Losses
- Skill Gains
- Experience Gains
- Killing Blows (Player and NPC)

**Default Triggers:**

- Low Health
- Low Mana
- Low Pet Health
- Execute
- Counter Attack
- Mongoose Bite
- Clearcast
- Riposte
- Windfury
- Nightfall
- Overpower

**Default Suppression's:**

- Blessing/Judgement of Wisdom (+30 Mana, +33 Mana, +59 Mana)

**Trigger System Documentation**

- The trigger system allows you to specify notifications based on events that are not already covered by
- MSBT's native events.The trigger system has been optimized so that having extra triggers which are
- not enabled or which do not apply to the class you are currently playing add no overhead.
- Due to this optimization, a lot of triggers that people will want (Windfury, Nightfall, Mongoose Bite, etc)
- are probably already there by default, and will not waste resources for those which don't apply to your
- class or are not enabled.
- The following is a description of the fields unique to the Trigger Settings interface (see the FAQ3 section for a tutorial on how to create a new trigger):
- Output Message
- This is the message that will be displayed when the trigger fires.If you are using a Search Pattern
- with captures you can enter %1 through %9 to use the data that was captured.Also, for trigger types
- with thresholds, the amount of health or mana will be in %1.

**Applicable Trigger Classes:**

- These are the classes that you want the trigger to apply to.NOTE: THIS IS YOUR CLASS NOT THE TARGET CLASS.
- You may look at the Execute trigger for an example.Since Warrior and Paladin are selected, the trigger
- will only apply when you are playing on a warrior or paladin.

**Trigger Type:**

- This is the type of trigger.
- Self Health - This will trigger when your health falls below the selected threshold.
- Self Mana - This will trigger when your mana falls below the selected threshold.
- Pet Health - This will trigger when your pet's health falls below the selected threshold.
- Enemy Target Health - This will trigger when your target is an enemy and their health falls below the selected threshold.
- Friendly Target Health - This will trigger when your target is friendly and their health falls below the selected threshold.
- Search Pattern - This will trigger when the search pattern you enter is found.

**Threshold:**

- This slider will only be present if the selected trigger type is one of the types that support it.
- It specifies the threshold percentage that must be crossed for the trigger to fire.

**Trigger Event Types:**

- This list will only be present if the selected trigger type is Search Pattern.
- This exists solely for optimization and is probably the most difficult field to enter.While not having this
- field would make the trigger system easier to use, it would also make it extremely inefficient since searching
- through an array of triggers which don't apply every time ANY event happens wastes precious resources.In order
- to find the appropriate event types to use, type /msbt search pattern, where the word pattern is a lua search string.
- Only combat messages that match the search string will display their associated event type.Once you are done you
- can type /msbt search to toggle event searching mode back off.

**Search Pattern 1 & 2:**

- These fields will only be present if the selected trigger type is Search Pattern.
- These fields can either contain a global string from globalstrings.lua (if you happen to know which one you want) or a
- lua formatted search string.The mod also supports data captured from the pattern.The output message specified for
- the trigger can use the captured data by putting %1 - %9 where the number is the position of the captured data.

**Suppression System Documentation**

- The suppression system allows you to suppress specific text that MSBT is displaying to the screen via lua search patterns.
- The text next to enable checkbox is the search pattern that will be checked for matches against the output text.If a match is made,
- the output text will be suppressed. 

See the FAQ4 section for a tutorial on how to create a new suppression.

**Here is the official lua reference for patterns:**

**Character Class:**

A character class is used to represent a set of characters. 

**The following combinations are allowed in describing a character class:**
- x: (where x is not one of the magic characters ^$()%.[]*+-?) represents the character x itself.
- .: (a dot) represents all characters.
- %a: represents all letters.
- %c: represents all control characters.
- %d: represents all digits.
- %l: represents all lowercase letters.
- %p: represents all punctuation characters.
- %s: represents all space characters.
- %u: represents all uppercase letters.
- %w: represents all alphanumeric characters.
- %x: represents all hexadecimal digits.
- %z: represents the character with representation 0.
- %x: (where x is any non-alphanumeric character) represents the character x. This is the standard way to escape the magic characters. Any punctuation character (even the non magic)
- can be preceded by a '%' when used to represent itself in a pattern.
- [set]: represents the class which is the union of all characters in set. A range of characters may be specified by separating the end characters of the range with a '-'. All classes
- %x described above may also be used as components in set. All other characters in set represent themselves. For example, [%w_] (or [_%w]) represents all alphanumeric characters plus
- the underscore, [0-7] represents the octal digits, and [0-7%l%-] represents the octal digits plus the lowercase letters plus the '-' character.
- The interaction between ranges and classes is not defined. Therefore, patterns like [%a-z] or [a-%%] have no meaning.
- [^set]: represents the complement of set, where set is interpreted as above.
- For all classes represented by single letters (%a, %c, etc.), the corresponding uppercase letter represents the complement of the class. For instance, %S represents all non-space characters.
- The definitions of letter, space, and other character groups depend on the current locale. In particular, the class [a-z] may not be equivalent to %l.

**Pattern Item:**

A pattern item may be:

- a single character class, which matches any single character in the class;
- a single character class followed by '*', which matches 0 or more repetitions of characters in the class. These repetition items will always match the longest possible sequence;
- a single character class followed by '+', which matches 1 or more repetitions of characters in the class. These repetition items will always match the longest possible sequence;
- a single character class followed by '-', which also matches 0 or more repetitions of characters in the class. Unlike '*', these repetition items will always match the shortest possible sequence;
- a single character class followed by '?', which matches 0 or 1 occurrence of a character in the class;
- %n, for n between 1 and 9; such item matches a substring equal to the n-th captured string (see below);
- %bxy, where x and y are two distinct characters; such item matches strings that start with x, end with y, and where the x and y are balanced. This means that, if one reads the string from left to right,
- counting +1 for an x and -1 for a y, the ending y is the first y where the count reaches 0. For instance, the item %b() matches expressions with balanced parentheses.

**Pattern:**

A pattern is a sequence of pattern items. 
- A '^' at the beginning of a pattern anchors the match at the beginning of the subject string. A '$' at the end of a pattern anchors the match at the end of the subject string.
- At other positions, '^' and '$' have no special meaning and represent themselves.

**Captures**:

- A pattern may contain sub-patterns enclosed in parentheses; they describe captures. When a match succeeds, the substrings of the subject string that match captures are stored (captured) for future use. Captures are numbered
- according to their left parentheses. For instance, in the pattern "(a*(.)%w(%s*))", the part of the string matching "a*(.)%w(%s*)" is stored as the first capture (and therefore has number 1); the character matching "." is
- captured with number 2, and the part matching "%s*" has number 3.
- As a special case, the empty capture () captures the current string position (a number). For instance, if we apply the pattern "()aa()" on the string "flaaap", there will be two captures: 3 and 5.
- A pattern cannot contain embedded zeros. Use %z instead.

**MikSBT.DisplayMessage Function Documentation**

**Syntax**

- MikSBT.DisplayMessage(message [, displayType, isSticky, colorR, colorG, colorB, fontSize, fontIndex, outlineIndex])

**Parameters**

- message (Required) The string to display.
- displayType (Optional) Specifies the scroll area to display the message in. 

**Possible values:**

- MikSBT.DISPLAYTYPE_INCOMING
- MikSBT.DISPLAYTYPE_OUTGOING
- MikSBT.DISPLAYTYPE_NOTIFICATION
- Default: MikSBT.DISPLAYTYPE_NOTIFICATION

- isSticky (Optional) Specifies if the message should be displayed in a sticky style (true or false). Default: false
- colorR (Optional) Red component of the message color (0-255). Default: 255
- colorG (Optional) Green component of the message color (0-255). Default: 255
- colorB (Optional) Blue component of the message color (0-255). Default: 255
- fontSize (Optional) Font size to use (12-32). If omitted, the scroll area settings will apply.
- fontIndex (Optional) Index of the font to use. Valid indices can be found in MikSBT.AVAILABLE_FONTS in localization.lua. If omitted, the font index for the scroll area will be used.
- outlineIndex (Optional) Index of the outline to use. Valid indices are listed in MikSBT.AVAILABLE_OUTLINES in localization.lua. If omitted, the outline index for the scroll area will be used.

**Examples**

- Displays "Test Message" in the notification scroll area in white. MikSBT.DisplayMessage("Test Message");
- Displays "Another Message" in the incoming scroll area in white as a sticky. MikSBT.DisplayMessage("Another Message", MikSBT.DISPLAYTYPE_INCOMING, true);
- Displays "Uber Damage!" in the outgoing scroll area in blue. MikSBT.DisplayMessage("Uber Damage!", MikSBT.DISPLAYTYPE_OUTGOING, false, 0, 0, 255);
- Displays "Enemy begins to flee in fear" in green with font index 2 and outline index 1. MikSBT.DisplayMessage("Enemy begins to flee in fear", nil, false, 0, 255, 0, nil, 2, 1);

This retains only the information relevant to the DisplayMessage function in the vanilla_mikscrollingbattletext add-on.

## FAQ
**FAQ1** 

Don't like any of the fonts supplied with MSBT.How do I use my own fonts?

**WARNING**: all font modification will require that you completely quit the game and restart it. reloading the console alone will not work.

**NOTE**: Keep in mind that if you use your own font files that you need to make sure the font supports the characters that will be displayed.For example the typical way to display buff gains is [BuffName].If the font you use does not have a character glyph for the [ or ] characters you will likely see a big ugly block instead of the intended characters.This is especially important with non-English clients since a lot of characters aren't supported by English fonts.

**There are two ways to use custom fonts:**

- The first, and easiest, method is to simply replace one of the font files in the MikScrollingBattleText\Fonts directory with the truetype font (.ttf) that you want.The drawback to this approach is that the mod's option screen will still reference the font with the old font's name.
- For example, if you had a truetype font file "MyUberFont.ttf" you wanted to use.Rename MyUberFont.ttf to Adventure.ttf and replace the Adventure.ttf font file in the MikScrollingBattleText\Fonts directory.In the MSBT options interface it would still be called "Adventure," but it would actually be using the new font.
- The second method is to open the file localization.lua in the MikScrollingBattleText directory and find the MikSBT.AVAILABLE_FONTS entry.You can add your font with the appropriate name and path. If you don't know anything about programming, I wouldn't suggest trying this method.Another thing to keep in mind with this approach is that due to the way WoW loads its data, I would suggest you put in new fonts you want to add in the same place as the current fonts for the mod (MikScrollingBattleText\Fonts) to avoid problems with loading.

**FAQ2** 

**How do I create a new trigger?**

- Let's go through creating a trigger for a warrior's overpower ability which already exists, but will be used for illustrative purposes. A warrior's overpower ability becomes available once the enemy they are fighting dodges.So, the first that needs to be done is to ascertain the appropriate event types. Since we want the trigger to fire when the enemy dodges we need to take a look at what the combat log says when an enemy dodges. The combat-log message says "You attack. Mob dodges."To find out what event type this is you can type /msbt search dodge. What this will do is make it so that every time an entry is added to the combat log with the word dodge in it, you will get a message with the event type in your normal chat frame.

**In this case you would probably see something like:**

- MSBT: CHAT_MSG_COMBAT_CREATURE_VS_SELF_MISSES - Mob attacks. You dodge. 
- MSBT: CHAT_MSG_COMBAT_HOSTILEPLAYER_MISSES - Player attacks. You dodge. 
- MSBT: CHAT_MSG_COMBAT_SELF_MISSES - You attack. Mob dodges. Aha, there is one. 
- MSBT: CHAT_MSG_SPELL_SELF_DAMAGE - Your hamstring is dodged by Mob. There is another one. 

So the correct event types to choose are CHAT_MSG_COMBAT_SELF_MISSES and CHAT_MSG_SPELL_SELF_DAMAGE. Type /msbt search to turn the event searching mode back off. Now that we know the correct event types we can create the trigger.

**Here are the steps to do so:**

- Since a new trigger is being created, click the Add Trigger button.A new trigger will appear in the list of triggers.
- Click the output message for the new trigger and enter Overpower!.
- Click the Trigger Settings button.
- Uncheck "All" classes, and check Warrior for the class the trigger will apply to.It is better to select the
- specific classes the trigger applies to instead of selecting all classes since by specifying classes, the mod
- can completely ignore the trigger and save resources for the classes to which it does not apply.
- Select Search Pattern for the Trigger Type.
- Choose the correct event types we ascertained above.CHAT_MSG_COMBAT_SELF_MISSES and CHAT_MSG_SPELL_SELF_DAMAGE.
- Last, since there are two different combat log messages, you'll need to enter two different search patterns.In the
- search pattern 1 field, enter "You attack. .+ dodges" to cover the first message and in the search pattern 2 field,
- enter "Your .+ is dodged by .+".Both of those are entered without the quotes.There are other variations of the
- search patterns that could be used, but these would work fine.

NOTE: The trigger that is already setup uses the global strings VSDODGESELFOTHER and SPELLDODGEDSELFOTHER. Messages that go to the combat log have an associated global string that is defined in globalstrings.lua by blizzard and can be used. Global strings are really only useful in this sense if you are looking for a general event like dodges, parries, misses, etc.Looking specifically for something like a buff name, for example, wouldn't have an available global string and you'd need to enter a lua search pattern as demonstrated.

- Click the Save Trigger button.
- The trigger is now set to fire any time a mob or player dodges one of your attacks (only if you are a warrior).
- The color, font settings, and sticky state for the trigger can be set like any other event.

**FAQ3** 

Some of the default triggers are not working for me while others are. What's up with that? Most likely, you are using a non-English client.Some of the search patterns for the triggers use Blizzard's global strings which are translated by Blizzard and hence will work on your client by default. Some other triggers have an English search pattern for when to fire the trigger. Simply edit the trigger settings for the trigger that is not working and change the search pattern to an appropriate one for your language.

**FAQ4**

**How do I create a new suppression?**

As an example, let's create a suppression for warrior stance switching.

Unless you have changed the output message format for buff gains and fades, the warrior stance switch

**messages should be:**

- [Battle Stance] 
- [Battle Stance] 
- [Defensive Stance] 
- [Defensive Stance] 
- [Bersker Stance] 
- [Bersker Stance] 

What we want to do is create a search pattern that will match those output messages.

**Here is a search pattern that will match all of them:**

- %[.+ Stance%]
- Now that we have a search pattern that will match all of the stance switching messages, we can
- do the following to add the suppression:
- Go to the Suppression's tab.
- Click the Add New Suppression button.
- Click the label where it says "New Suppression: Click here to edit."
- Enter the search pattern from above.
- All of the warrior stance switch messages should now be suppressed.

## Credits
- Thanks to grayhoof, the author of Scrolling Combat Text, for the original mod which inspired this mod.
- Thanks to kergoth and Wobin for their suggestions on optimizations via reduced GC churn and namespacing tips.
- Thanks to tekkub for compostLib which I borrowed some of the table recycling code from 

## Version History
- Fixed the bug where you could only add one suppression and adding a new one was overwriting it.
- Implemented a low overhead trigger system. See documentation above.
- Implemented a suppression system that allows you to suppress particular messages you don't want to see.
- Made significant changes to the scroll area settings interface.The new interface shows all three
- scroll areas at the same time.Each scroll area is now titled with its coordinates and there are
- edit-boxes to enter specific coordinates in addition to being able to drag the scroll areas around.
- Changed the core animation routines to use function pointers in order to eliminate the need for a
- ton of conditional testing.Previously, every time the animation routine was called (typically
- 60-70 times per second for every scrolling item), the animation style and scroll direction were
- checked to calculate how to move the text.Now those items are only checked during the initial
- animation object setup phase.This should help performance on slower PCs.
- Added the command "/msbt search pattern" to enable an event searching mode which helps identify event types used in the trigger system.
- Moved the Low Health, Low Mana, and Execute events into the trigger system.Due to this change
- the Low Mana and Execute triggers will no longer waste resources checking on classes that don't
- use mana or have an execute ability.Also moving them into the trigger system made the thresholds
- at which to show the Low Health, and Low Mana warnings select-able.
- Made a few minor code performance tweaks to the animation setup "pipeline."
- Added Killing Blow notification events for both players and NPCs.
- Added crushing and glancing hit partial effects.
- The font settings frame can now be moved.
- Fixed a bug where messages added via the MikSBT.DisplayMessage function were being shown even if the scroll area was set to not show messages.
- Disabled Blizzard's new floating text in Patch 1.12 when MSBT is enabled.

**Updated for Patch 1.12.**

- Reduced memory usage a little by removing the underlying tables used to store crit information for events that can never be crits. (Down to around 477KB)
- To go along with the above change, the font settings interface for events was reworked so that you can no longer set crit information for events that don't support them.
- Added a title at the top of the font settings frame to help distinguish what is being modified.
- Added an Experience Gains notification event.
- Added the capability for notifications to be displayed "sticky" style.
- Fixed the bug induced by patch 1.11 where reputation gains and losses weren't being displayed. 

**MAJOR optimization code rewrite:**

- Made options load on demand to significantly reduce memory usage and start up time.
- Implemented a table recycling system to reuse tables created during combat instead
- of creating new ones and allowing them to be garbage collected.The net effect is that a
- ton of garbage collection churn has been eliminated.Thanks go to kergoth and Wobin for
- tips on how to achieve this.
- The combat event parser has been changed to reuse one single table for storing the results of the parsed data.
- Streamlined the combat event to screen animation "pipeline."
- Name-spaced all code to reduce global namespace pollution.
- Load up KB Usage in v1.03 was approximately 1050 KB.This has been reduced to around
- 488 KB. In addition, due to the table recycling system, memory usage during operation is
- much more consistent instead of continuously increasing until the next garbage collection cycle.
- Added a function to allow messages to be easily displayed through MSBT from external sources. 
- Added the command "/msbt stats" to report statistics about the table recycling system.
- Changed the functionality of AoE merges so that the name reported is "Multiple" instead of the last affected unit.
- Added the option to disable "game damage" instead of just always doing it.
- Added the option to disable "sticky crits."
- Added Execute/Hammer of Wrath notification event.
- Separated Heals over time (HoTs) and Damage over time (DoTs) into their own events.
- Added the option to display over-healing.
- Fixed a bug where crits were not being recognized in non-English clients.
- Fixed a bug where options set with a checkbox were not being properly saved on logout.
- Fixed a bug where the global string parser wasn't appropriately accounting for the argument order of non-English clients.

**Updated for Patch 1.11.** 

- Initial version.
