---
title: "LazyScript"
url: "https://turtle-wow.fandom.com/wiki/LazyScript"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-05-08T11:47:42Z"
fetched: "2026-09-10T07:39:07Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# LazyScript

LazyScript is an in-game attack scripting language. It is aimed at users who would like to write more complex in-game macros, but who do not want to have to deal with the full blown API or do not want to have to write a separate add-on for every macro over 250 characters.

## Installation
  -GitAddonsManager (Recommended)**

The easiest way to keep LazyScript up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Gaverto/LazyScript-for-Turtle-WoW.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and move these folders into your <code>Interface/AddOns</code> directory and restart the game:

- LazyDruid 
- LazyHunter
- LazyMage
- LazyPaladin
- LazyPriest
- LazyRogue
- LazyScript
- LazyShaman
- LazyWarlock
- LazyWarrior

## Git Links
- [**(Gaverto)**](https://github.com/Gaverto/LazyScript-for-Turtle-WoW)
- [**(laytya)**](https://github.com/laytya/LazyScript)

## Basic Usage
LazyScript works by defining "forms" which are lists of actions the addon will try to perform based on certain conditions. You can then activate these forms using a slash command or a keybinding.

The most common way to use LazyScript is to set a "default form" that the addon will automatically try to execute when you press the LazyScript keybinding (by default, this is likely unbound, you'll need to set it in the Key Bindings menu).

## Slash Commands
You interact with LazyScript using slash commands, primarily <code>/lazyscript</code> or the shorter alias <code>/ls</code>.

Here are the main slash commands:

- <code>/lazyscript</code> or <code>/ls</code>: Executes your currently set default form.
- <code>/lazyscript help</code>: Displays a list of available slash commands and their descriptions.
- <code>/lazyscript about</code>: Opens the in-game about frame for LazyScript, showing credits and basic information.
- <code>/lazyscript debug</code>: Toggles debug mode on or off. Debug messages provide more detailed information about what the addon is doing, which can be helpful for troubleshooting.
- <code>/lazyscript list</code>: Lists all the forms you have currently defined. The default form will be marked with an asterisk (<code>*</code>).
- <code>/lazyscript edit <formName></code>: Opens an in-game editor for the specified form. This is the primary way to create and modify your forms.
- <code>/lazyscript set <formName> <action1> -<condition1> <action2> -<condition2> ...</code>: Creates or updates a form with the given name and defines its actions and conditions. This is a more advanced way to define forms directly via the chat.

  -Example**: <code>/ls set myform attack -ifTargetExists -ifTargetInCombat autoAttack</code>

- <code>/lazyscript copy <formName1> <formName2></code>: Copies the definition of <code>formName1</code> to <code>formName2</code>.
- <code>/lazyscript clear <formName></code>: Deletes the specified form.
- <code>/lazyscript do <action1> -<condition1> <action2> -<condition2> ...</code>: Executes a single line of actions and conditions immediately without saving it as a form.
- <code>/lazyscript autoTarget</code>: Toggles automatic targeting of the nearest enemy when you activate LazyScript and have no target.
- <code>/lazyscript initiateAutoAttack</code>: Toggles whether LazyScript should automatically start auto-attack or auto-shot/wand when it can't execute any other action and you have a target.
- <code>/lazyscript useImmunitiesList</code>: Toggles whether LazyScript checks for target immunities based on the internal list or detected immunities.
- <code>/lazyscript clearImmunitiesList</code>: Clears the list of detected immunities.
- <code>/lazyscript summon</code>: Shows the LazyScript minion frame (a small frame that shows the action being attempted).
- <code>/lazyscript dismiss</code>: Hides the LazyScript minion frame.
- <code>/lazyscript hideMinionOutOfCombat</code>: Toggles whether the minion frame should be hidden when you are out of combat.
- <code>/lazyscript summonDeath</code>: Shows the Deathstimator frame (a small frame that attempts to estimate target health).
- <code>/lazyscript dismissDeath</code>: Hides the Deathstimator frame.
- <code>/lazyscript hideDeathMinionOutOfCombat</code>: Toggles whether the Deathstimator frame should be hidden when you are out of combat.
- <code>/lazyscript showReasonForTargetCCd</code>: Toggles displaying the reason why the target is considered crowd-controlled (CCd).
- <code>/lazyscript showGankMessage</code>: Toggles displaying a message when you are attacked by hostile players.
- <code>/lazyscript clearHistoryAfterCombat</code>: Toggles clearing the action history after leaving combat.
- <code>/lazyscript mmshow</code>: Shows the minimap button for LazyScript.
- <code>/lazyscript mmhide</code>: Hides the minimap button for LazyScript.
- <code>/lazyscript immunityExceptionCriteria</code>: Opens an editor for defining exceptions to immunity checks.
- <code>/lazyscript interruptExceptionCriteria</code>: Opens an editor for defining exceptions to interrupt criteria.
- <code>/lazyscript noLongerInterruptLastInterrupted</code>: Adds the last spell you successfully interrupted to the interrupt exception criteria.
- <code>/lazyscript showTargetCasts</code>: Toggles displaying messages in chat when your target starts casting a spell.
- <code>/lazyscript assist <playerName></code>: Sets the specified player as your assist target. If no name is given and you have a friendly target, it sets your assist to that target.
- <code>/lazyscript default <formName></code>: Sets the specified form as your default form, which will be executed when you use the main LazyScript keybinding. If no form name is given, it tells you your current default form.
- <code>/lazyscript resetDefaultForms</code>: Resets your forms to the default forms provided by LazyScript and any installed class-specific LazyScript addons.
- <code>/lazyscript resetAllForms</code>: Clears all your custom forms and resets to the default forms.

## Key Bindings
LazyScript provides several key binding options:

- **LAZYSCRIPT: Execute**: This is the main keybinding. When pressed, it attempts to execute your currently set default form. You **must** bind this key in the WoW Key Bindings menu.
- **LAZYSCRIPT: Keybind 1** through **LAZYSCRIPT: Keybind 10**: These keybindings allow you to bind specific forms to a key. You can set which form is bound to each key using the <code>/lazyscript bind <keybindNumber> <formName></code> command (this command was not in the provided code but is a common feature in such addons).

To set up key bindings:

# Open the Game Menu (Escape).
# Go to "Key Bindings".
# Scroll down to the "LazyScript" section.
# Click on the action you want to bind (e.g., "Execute").
# Press the desired key combination.
# Click "Okay".

## Forms
Forms are the core of LazyScript. They consist of a sequence of "lines". Each line contains one or more "actions" and zero or more "conditions" (also called "masks").

When LazyScript attempts to execute a form, it goes through each line in order. For a line to be executed, **ALL** the conditions on that line must be true. If a line's conditions are met, LazyScript attempts to execute the actions on that line from left to right. Once a line is successfully executed (meaning at least one action on that line was used), LazyScript stops processing the form for that execution cycle.

If no lines in the form have their conditions met, LazyScript will not execute any actions from that form.

## Actions
Actions are the spells, abilities, items, or special functions that LazyScript can perform. Actions are typically listed at the beginning of a line, separated by spaces.

You can also specify the rank of a spell or a target for a spell using the syntax: action[(rankXX)][@<UnitId>]

The <code><UnitId></code> can be any valid UnitId sequence as described in http://www.wowwiki.com/UnitId. For example, <code>@player</code>, <code>@pet</code>, <code>@target</code>, <code>@targettarget</code>. Note that the rank of the spell must always appear before the '@' symbol.

  -Example:**

mindFlay(rank4)@target

Actions listed in **green** in the in-game help do not trigger the global cooldown. LazyScript is able to perform multiple of these actions together in one line along with at most one action that triggers the global cooldown.

  -Here's a list of known actions:**

  - **Full Name = Short Name****

- Aggressive = <code>petAggressive</code>
- Battle Shout = <code>battleShout</code>
- Berserker Rage = <code>berserkerRage</code>
- Berserking = <code>berserking</code>
- Blood Fury = <code>bloodFury</code>
- Bloodrage = <code>bloodrage</code>
- Bloodthirst = <code>bloodthirst</code>
- Cannibalize = <code>cannibalize</code>
- Challenging Shout = <code>challengingShout</code>
- Charge = <code>charge</code>
- Cleave = <code>cleave</code>
- Concussion Blow = <code>concussionBlow</code>
- Death Wish = <code>deathWish</code>
- Defensive = <code>petDefensive</code>
- Demoralizing Shout = <code>demoShout</code>
- Disarm = <code>disarm</code>
- Escape Artist = <code>escapeArtist</code>
- Execute = <code>execute</code>
- Find Herbs = <code>findHerbs</code>
- Find Minerals = <code>findMinerals</code>
- Find Treasure = <code>findTreasure</code>
- Follow = <code>petFollow</code>
- Hamstring = <code>hamstring</code>
- Heroic Strike = <code>heroicStrike</code>
- Intercept = <code>intercept</code>
- Intimidating Shout = <code>intimidatingShout</code>
- Last Stand = <code>lastStand</code>
- Mocking Blow = <code>mockingBlow</code>
- Mortal Strike = <code>mortalStrike</code>
- Overpower = <code>overpower</code>
- Passive = <code>petPassive</code>
- Perception = <code>perception</code>
- Piercing Howl = <code>piercingHowl</code>
- Pummel = <code>pummel</code>
- Recklessness = <code>recklessness</code>
- Rend = <code>rend</code>
- Retaliation = <code>retaliation</code>
- Revenge = <code>revenge</code>
- Shadowmeld = <code>shadowmeld</code>
- Shield Bash = <code>shieldBash</code>
- Shield Block = <code>shieldBlock</code>
- Shield Slam = <code>shieldSlam</code>
- Shield Wall = <code>shieldWall</code>
- Shoot Bow = <code>bow</code>
- Shoot Crossbow = <code>crossbow</code>
- Shoot Gun = <code>gun</code>
- Slam = <code>slam</code>
- Stay = <code>petStay</code>
- Stoneform = <code>stoneForm</code>
- Sunder Armor = <code>sunder</code>
- Sweeping Strikes = <code>sweepingStrikes</code>
- Taunt = <code>taunt</code>
- Throw = <code>throw</code>
- Thunder Clap = <code>thunderClap</code>
- War Stomp = <code>warStomp</code>
- Whirlwind = <code>whirlwind</code>
- Will of the Forsaken = <code>forsaken</code>

;
;
  - **Other Actions****

- Battle Stance = <code>battle</code>
- Berserker Stance = <code>berserk</code>
- Defensive Stance = <code>defensive</code>

;
;
  - **Special Actions****

- Assist Pet = <code>assistPet</code>
- Assist = <code>assist</code>
- Auto Shot = <code>autoShot</code>
- Auto Target/Attack = <code>autoAttack</code>
- Clear History = <code>clearHistory</code>
- Clear Target = <code>clearTarget</code>
- Dismount = <code>dismount</code>
- Pet Attack = <code>petAttack</code>
- Pet Stop = <code>petStop</code>
- Ping = <code>ping</code>
- Stop All = <code>stopAll</code>
- Stop Auto Shot = <code>stopShot</code>
- Stop Auto-Attack = <code>stopAttack</code>
- Stop Casting = <code>stopCasting</code>
- Stop Wand = <code>stopWand</code>
- Stop = <code>stop</code>
- Target Last = <code>targetLast</code>
- Target Nearest Friend = <code>targetNearestFriend</code>
- Target Nearest = <code>targetNearest</code>
- Wand = <code>wand</code>

;
;
  - **Actions that take parameters****

- Use an action: <code>action=<action/macro name></code>
- Use an action that does not trigger the global cooldown: <code>freeAction=<action/macro name></code>
- Use a pet action: <code>petAction=<action></code>
- Use an item in your equipment or inventory: <code>use=<itemid/item name></code>
- Use an item only if it is equipped: <code>useEquipped=<itemid/item name></code>
- Use an item in your equipment or inventory that does not trigger the global cooldown: <code>useFreeItem=<itemid/item name></code>
- Use an item that does not trigger the global cooldown only if it is equipped: <code>useFreeEquippedItem=<itemid/item name></code>
- Apply an item weapon buff: <code>apply{MainHand,OffHand}Buff=<itemid/item name></code>
- Equip a weapon in your main hand: <code>equipMainHand=<itemid/item name></code>
- Equip a weapon in your off hand: <code>equipOffHand=<itemid/item name></code>
- Echo the message to your chat: <code>echo=<message></code>
- Say the message in the specified channel: <code>sayIn{Emote, Guild, Minion, Party, Raid, RAID_WARNING, Say, Yell} =<message></code>
- Whisper the message to the specified player or unitId: <code>whisperTo{playerName, <UnitId>} =<message></code>
- Cancel the specified buff: <code>cancelBuff=<buff></code>
- Cancel the specified buff by title: <code>cancelBuffTitle=<buffTitle></code>
- Set the specified form as the default: <code>setForm=<form name></code>
- Target a specific unit: <code>targetUnit=<UnitId></code>
- Cast a spell on a specific unit: <code>spellTargetUnit=<UnitId></code>
- Target a player/creature by their exact name: <code>targetByName=<exact name></code>
- Perform emote (See [WoWWiki: API_TYPE_Emotes_Token](w:c:wowwiki:API_TYPE_Emotes_Token)): <code>doEmote=<emoteToken></code>
- Play sound (See [WoWWiki: API_PlaySound](w:c:wowwiki:API_PlaySound)): <code>playSound=<soundName></code>

;
;
  - **Meta-Actions****

- Include the contents of the specified form: <code>includeForm=<form name></code>
  - Note: This does not accept criteria. It must appear on a line by itself. You cannot include a form in itself, nor should you include a form which includes another form which includes the first (e.g. form A includes form B includes A == BAD).
- Call the specified form: <code>callForm=<form name></code>
  - This will try to find a usable action in the specified form, if the criteria on the <code>callForm</code> action are satisfied.

## Conditions (Masks)
Conditions are used to determine when a specific line in a form should be executed. Conditions are preceded by a hyphen (<code>-</code>). You can stack multiple conditions on a single line, and they must all be true for the line to execute.

Conditions can be negated by adding a hyphen before the condition name (e.g., <code>-!ifTargetExists</code>).

Multiple values within curly braces (<code>{}</code>) means choose one or more. If more than one is chosen, separate them with commas (e.g. <code>-ifRace=Human,Gnome</code>) and the criteria will match if any of the choices match. If a multiple-choice criteria is negated with a "Not" (e.g. <code>-ifNotRace=Human,Gnome</code>) then the criteria will match only if none of the choices match. Square brackets (<code>[]</code>) mean the value is optional. Do NOT leave the curly braces or square brackets in your form.

  -Here's a list of recognised criteria:**

;
;
  - **Warrior Criteria:****

- <code>-if[Fury]BloodthirstKillShot[XX%hp]</code>
- <code>-if[Not]Stance={battle,berserk,defensive}</code>

;
;
  - **Action Criteria:****

- <code>-everyXXs</code>
- <code>-if[Not]{Ctrl,Alt,Shift}Down</code>
- <code>-if[Not]Cooldown{<,>}XXs={action1,action2,...}</code>
- <code>-if[Not]CurrentAction[=action1,action2,...]</code>
- <code>-if[Not]GlobalCooldown</code> 
- <code>-if[Not]History{<,=,>}XX=action</code>
- <code>-if[Not]HistoryCount{<,=,>}XX=action</code>
- <code>-if[Not]LastAction=action</code>
- <code>-if[Not]LastUsed>XXs=action</code> 
- <code>-if[Not]InCooldown={action1,action2,...}</code>
- <code>-if[Not]InRange={action1,action2,...}</code> 
- <code>-if[Not]Timer>XXs=action</code> 
- <code>-if[Not]Usable={action1,action2,...}</code> 

;
;
  - **Attack Criteria:****

- <code>-if[Not]BehindAttackJustFailed[X[.Y]s]</code> 
- <code>-if[Not]InFrontAttackJustFailed[X[.Y]s]</code> 
- <code>-if[Not]OutdoorsAttackJustFailed[X[.Y]s]</code> 
- <code>-if[Not]Casting</code>
- <code>-if[Not]Channelling</code>
- <code>-if[Not]Shooting</code>
- <code>-if[Not]Wanding</code>

;
;
  - **Buff/Debuff Criteria:****

- <code>-if[Not]{Buff,Debuff}Duration{<,>}XXs={buff1,buff2,...}</code> (player only)
- <code>-if[Not]{Buff,Debuff}TitleDuration{<,>}XXs={buffTitle1,buffTitle2,...}</code> 
- <code>-if[Not][<UnitId>]Has{Buff,Debuff}[{<,=,>}XX]={buff1,buff2,...}</code> 
- <code>-if[Not][<UnitId>]Has{Buff,Debuff}Title[{<,=,>}XX]={buffTitle1,buffTitle2,...}</code> 
- <code>-if[Not][<UnitId>]Is={Asleep, Bleeding, CCd, Charmed, Cursed, Diseased, Disoriented, Dotted, Drinking, Eating, Feared, Immobile, Incapacitated, Magicked, Poisoned, Polymorphed, Slowed, Stunned, Stung}</code> 
- <code>-if[Not]{MainHand, OffHand}Buffed</code>

;
;
  - **Item Criteria:****

- <code>-if[Not]ItemCooldown{<,>}XXs={item1,item2,...}</code>
- <code>-if[Not]ItemInCooldown={item1,item2,...}</code>

;
;
  - **Player Criteria:****

- <code>-if[Not]Dueling</code>
- <code>-if[Not]Equipped=item</code>
- <code>-if[Not]Ganked</code>
- <code>-if[Not]InGroup</code> (party or raid)
- <code>-if[Not]InInstance</code>
- <code>-if[Not]InBattleground</code>
- <code>-if[Not]InRaid</code>
- <code>-if[Not]Mounted</code>
- <code>-if[Not]Shadowmelded</code>
- <code>-if[Not]Tracking={Herbs, Minerals, Treasure}</code>
- <code>-if[{<,=,>}]XAttackers</code> (PvP only)
- <code>-if[Not]Zone=zonename</code>

;
;
  - **Pet:****

- <code>-if[Not]HasPet</code>
- <code>-if[Not]PetAlive</code>
- <code>-if[Not]Pet{Attacking, Following, Staying, Aggressive, Defensive, Passive}</code>
- <code>-if[Not]PetFamily={Bat, Bear, Boar, Carrion Bird, Cat, Crab, Crocolisk, Doomguard, Felhunter, Gorilla, Hyena, Imp, Infernal, Owl, Raptor, Scorpid, Spider, Succubus, Tallstrider, Turtle, Voidwalker, Windserpent, Wolf}</code>
- <code>-if[Not]PetName=name</code>

;
;
  - **Player, Pet or Target Criteria:****

- <code>-if[Not]{[Player],Target}{Blocked, Dodged, Parried, Resisted}[{<,>}XX.XXs]</code> (defaults to <5s)
- <code>-if[Not]{[Player],Target}FlaggedPVP</code>
- <code>-if[Not]{[Player],Target}FlagRunner</code>
- <code>-if[Not]{[Player],Pet,Target}InCombat</code>
- <code>-if[<UnitId>]{<,=,>}XX[%]{hp,mana/energy/rage/focus}[Deficit]</code>
- <code>-if[Not]{[Player],Target}Race={Human, Night Elf, Gnome, Dwarf, Orc, Scourge/Undead, Tauren, Troll}</code>

;
;
  - **Target Criteria:****

- <code>-if[Not]CanDebuff</code>
- <code>-if[Not]HaveTarget</code>
- <code>-if[Not]TargetAlive</code>
- <code>-if[Not]TargetAttackable</code>
- <code>-if[Not]TargetBoss</code>
- <code>-if[Not]TargetClass={Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior}</code>
- <code>-if[Not]TargetElite</code>
- <code>-if[Not]TargetEnemy</code>
- <code>-if[Not]TargetFleeing</code> (NPC only)
- <code>-if[Not]TargetFriend</code>
- <code>-if[Not]TargetHasTarget</code>
- <code>-if[Not]TargetHostile</code>
- <code>-if[Not]TargetIsCasting[={name regex,FIRE,FROST,NATURE,SHADOW,ARCANE,HOLY}]</code>
- <code>-if[Not]TargetImmune[=action]</code>
- <code>-if[Not]TargetInBlindRange</code> (Within 10 yards)
- <code>-if[Not]TargetInLongRange</code> (Within 28 yards)
- <code>-if[Not]TargetInMediumRange</code> (Within 10 yards)
- <code>-if[Not]TargetInMeleeRange</code> 
- <code>-if[Not]TargetLevel{<,=,>}XX</code> (Does not work for bosses)
- <code>-if[Not]TargetMyLevel{<,=,>}{plus,minus}XX</code> (Does not work for bosses)
- <code>-if[Not]TargetNamed={regex1,regex2,...}</code>
- <code>-if[Not]TargetNPC</code>
- <code>-if[Not]TargetOfTarget</code>
- <code>-if[Not]TargetOfTargetClass={Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior}</code>
- <code>-if[Not]TargetTrivial</code>
- <code>-if[Not]TargetType={Beast, Critter, Demon, Dragonkin, Elemental, Humanoid, Undead}</code>
- <code>-ifTimeToDeath{<,=,>}XXs</code>
- <code>-if[Not]UnitExists=[<UnitId>]</code>

  -Criteria Notes**

Here are some important notes regarding specific criteria:

# To use <code>-if{Ctrl,Alt,Shift}Down</code>, you MUST remove any existing Ctrl/Alt/Shift key bindings from the Main Menu, Key Bindings. Otherwise the game will intercept the key and LazyScript will not see it.
# Always use with <code>-if[Not]TargetFriend</code> since it will return true if the target is not a valid target for the spell.
# Within X.Y sec, defaults to 0.1.
# The buff/debuff name must be the full name (including capitalization and spaces) of the buff/debuff title as it appears in the tooltip.
# XX refers to the number of buff/debuff applications. e.g. <code>-ifTargetHasDebuff<5=sunder</code>
# As of patch 1.12 this only works on unfriendly targets for Rogue (Sinister Strike), Druid (Growl), Hunter (Wing Clip) and Warrior (Rend).
# The <code>ifUsable</code> criteria checks if the action is valid for use at present as per the Blizzard API call <code>IsUsableAction</code>. This does not include cooldown or range checking.
# The <code>ifGlobalCooldown</code> criteria requires a specific action to be placed on your action bar so that it may be checked for the global cooldown. It does not have to be on a visible action bar. For each class, the actions are as follows:
1.: Rogue: Sinister Strike
1.: Druid: Mark of the Wild
1.: Hunter: Track Beasts
1.: Priest: Power Word: Fortitude
1.: Warrior: Battle Shout
1.: Mage: Frost Armor
1.: Warlock: Demon Skin
1.: Shaman: Rockbiter Weapon
1.: Paladin: Seal of Righteousness

# The <code><UnitId></code> can be any valid UnitId sequence as described in the WoW API documentation. For example, <code>player</code>, <code>pet</code>, <code>target</code>, <code>targettarget</code>. Capitalization is not important.
# The <code>ifLastUsed</code> timer will perform the action immediately at the start of combat or if you changed targets if the action is available. The <code>ifTimer</code> criteria will first countdown XX seconds after initiating combat or changing targets before performing the action for the first time.
# This criteria only detects full blocks and resists. A partial block or resist ("Joe hits you for 10 damage (5 blocked).") either on the player or the target will NOT be detected by this criteria.

  -Including Other Forms**

You can include the lines from another form into your current form using the <code>includeForm=</code> action. This allows you to create modular forms and reuse common sequences.

- <code>includeForm=<formName></code>: Includes all the lines from the specified form at this point in the current form.

  -Comments**

You can add comments to your forms to explain your logic. Lines starting with <code>#</code>, <code>//</code>, or <code>--</code> will be ignored by LazyScript.

  -Example Form**<syntaxhighlight lang="lua">
# This is a simple example form for a Rogue
Sinister Strike -ifTargetExists -ifTargetInMeleeRange -ifTargetHostile
Eviscerate -ifTargetExists -ifTargetInMeleeRange -ifTargetHostile -ifPlayerComboPoints>=5
Slice and Dice -ifTargetExists -ifTargetInMeleeRange -ifTargetHostile -ifPlayerComboPoints>=1 -ifPlayerHasBuff=!Slice and Dice
attack -ifTargetExists -ifTargetInMeleeRange -ifTargetHostile
</syntaxhighlight>This form would:

# Try to use Sinister Strike if you have a hostile target in melee range.
# If Sinister Strike can't be used, try to use Eviscerate if you have a hostile target in melee range and 5 or more combo points.
# If Eviscerate can't be used, try to use Slice and Dice if you have a hostile target in melee range, at least 1 combo point, and you don't currently have the Slice and Dice buff.
# If none of the above can be used, start auto-attacking if you have a hostile target in melee range.

  -Buff/Debuff Checks**
- **<code>ifHasBuffOrDebuff</code>:** This is a core command that allows you to check for specific buffs or debuffs by their internal <code>code</code>. You can specify the unit to check (e.g., <code>player</code>, <code>target</code>), whether to look for a <code>Buff</code> or <code>Debuff</code>, and even check the number of <code>applications</code> using comparison operators (<code>></code>, <code><</code>, <code>=</code>).
  - **Syntax:** <code>if[Not][Unit]Has[Buff|Debuff][<=>][Number]=[Buff1,Buff2,...]</code>
  - **Examples:** <code>ifHasBuff=wellFed</code>, <code>ifTargetHasDebuff>2=Corruption</code>, <code>ifNotPlayerHasBuff=Stealth</code>
- **<code>ifHasBuffTitle</code>:** This command allows you to check for buffs or debuffs by their tooltip title. This is useful for buffs not in the <code>buffTable</code> or when you want to be more generic.
  - **Syntax:** <code>if[Not][Unit]Has[Buff|Debuff]Title[<=>][Number]=[Title1,Title2,...]</code>
  - **Examples:** <code>ifHasBuffTitle=Arcane Intellect</code>, <code>ifTargetHasDebuffTitle>1=Curse of Weakness</code>
- **<code>ifBuffDuration</code>:** This command checks the remaining duration of a buff or debuff on the *player* by its internal <code>code</code>.
  - **Syntax:** <code>if[Not][Buff|Debuff]Duration[<>][Number]s=[Buff1,Buff2,...]</code>
  - **Examples:** <code>ifBuffDuration<5s=SliceDice</code>, <code>ifDebuffDuration>10s=Corruption</code>
- **<code>ifBuffDurationByTitle</code>:** Similar to <code>ifBuffDuration</code>, but checks the duration of a buff or debuff on the *player* by its tooltip title.
  - **Syntax:** <code>if[Not][Buff|Debuff]TitleDuration[<>][Number]s=[Title1,Title2,...]</code>
  - **Examples:** <code>ifBuffTitleDuration<3s=Power Word: Shield</code>
- **<code>ifShadowmelded</code>:** A specific, simplified check for the "Shadowmeld" buff on the player.
  - **Syntax:** <code>if[Not]Shadowmelded</code>
- **<code>ifIsBuffed</code>:** This is a powerful command that checks if a unit has *any* buff/debuff belonging to a specific *category*. The recognized categories are implemented as separate functions (see below).
  - **Syntax:** <code>if[Not][Unit]Is=[Category1,Category2,...]</code>
  - **Examples:** <code>ifTargetIs=CC</code>d, <code>ifPlayerIs=Eating,Drinking</code>

  -Buff/Debuff Categories and Their Checks** 

- **Predefined Categories:** The code defines functions to check for buffs/debuffs based on their categories:
  - <code>IsStung</code> (checks for "sting" category)
  - <code>IsCCd</code> (checks for "cc" category)
  - <code>IsPolymorphed</code> (checks for "polymorph" category)
  - <code>IsBleeding</code> (checks for "bleed" category)
  - <code>IsCharmed</code> (checks for "charm" category)
  - <code>IsEating</code> (checks for "food" category)
  - <code>IsDrinking</code> (checks for "drink" category)
  - <code>IsDotted</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>DOT_TTS</code> locale string).
  - <code>IsSlowed</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>SLOWED_TTS</code> locale string).
  - <code>IsStunned</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>STUNNED_TTS</code> locale string).
  - <code>IsFeared</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>FEAR_TTS</code> locale string).
  - <code>IsImmobile</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>IMMOBILE_TTS</code> locale string).
  - <code>IsAsleep</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>ASLEEP_TTS</code> locale string).
  - <code>IsDisoriented</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>DISORIENTED_TTS</code> locale string).
  - <code>IsIncapacitated</code> (checks for buffs/debuffs whose tooltip body contains strings defined in <code>INCAPACITATED_TTS</code> locale string).
  - <code>IsMagicked</code> (checks for "Magic" debuff type).
  - <code>IsCursed</code> (checks for "Curse" debuff type).
  - <code>IsPoisoned</code> (checks for "Poison" debuff type).
  - <code>IsDiseased</code> (checks for "Disease" debuff type).

## Preview
Form Editor:

Help:

## Minimap Menu
The LazyScript minimap button provides quick access to key features:

- **Left-click:** Opens a menu to select your default form.
- **Right-click and drag:** Moves the minimap button.

Menu options:

- <code>(none)</code>: No default form selected.
- Your forms list: Select a form to set it as default.
- <code>&#x3C; Create new form &#x3E;</code>: Opens the form editor to create a new form.
- <code>&#x3C; Options &#x3E;</code>: Opens a sub-menu for general options.
- <code>&#x3C; Immunity Options &#x3E;</code>: Opens a sub-menu for immunity tracking options.
- <code>&#x3C; Cast Interrupt Options &#x3E;</code>: Opens a sub-menu for interrupt options.
- <code>&#x3C; Debugging &#x3E;</code>: Opens a sub-menu for debugging options.
- <code>&#x3C; Help &#x3E;</code>: Opens the in-game help window.
- <code>&#x3C; About &#x3E;</code>: Opens the about window.

  -Options Sub-menu**

- <code>Auto-Target</code>: Toggle auto-targeting.
- <code>... and initiate Auto-Attack</code>: Toggle initiating auto-attack when auto-targeting is enabled.
- <code>Show Minion</code>: Toggle visibility of the LazyScript Minion window.
- <code>... Only in combat</code>: Toggle hiding the Minion when out of combat.
- <code>... Always show action</code>: Toggle the Minion displaying the attempted action even if it wasn't used.
- <code>Show Deathstimator Minion</code>: Toggle visibility of the Deathstimator Minion window.
- <code>Deathstimator sample window:</code>: Shows a sample Deathstimator window.

  -Immunity Options Sub-menu**

- <code>Stop Immunity Tracking</code>: Disable tracking new immunities.
- <code>Track New Immunities</code>: Enable tracking new immunities.
- <code>Edit Immunity Exception Criteria</code>: Opens the Immunity Exception Criteria editor.

  -Cast Interrupt Options Sub-menu**

- <code>Edit Interrupt Exception Criteria</code>: Opens the Interrupt Exception Criteria editor.
- <code>Last interrupted: &#x3C;spell name&#x3E;</code>: Shows the last spell you interrupted.
- <code>... Don't interrupt it again</code>: Adds the last interrupted spell to the exception list.

  -Debugging Options Sub-menu**

- <code>Log when target casts</code>: Toggle logging when your target starts casting.
- <code>Show why when -ifTargetCCd is true</code>: Toggle showing chat messages explaining why a target is considered crowd-controlled.
- <code>Display "Ganked" info</code>: Toggle displaying "Ganked" information after combat.
- <code>&#x3C; Action History &#x3E;</code>: Opens the Action History window.
- <code>... Clear History after combat</code>: Toggle clearing the action history after combat.
- <code>Internal debugging (noisy)</code>: Toggle verbose debugging output.

  -Form Options (when hovering over a form name in the minimap menu)**

- <code>Edit</code>: Opens the form editor for this form.
- <code>Copy</code>: Copies this form.
- <code>Delete</code>: Deletes this form.
- <code>&#x3C; Set Keybinding &#x3E;</code>: Opens a sub-menu to bind a key to this form.

  -Set Keybinding Sub-menu**

- <code>Keybinding &#x3C;#&#x3E;</code> : Lists the current keybinding for this slot.
- <code>Set keybinding &#x3C;#&#x3E; to form: &#x3C;form name&#x3E;</code>: Binds the selected keybinding slot to this form.

## Minion Window
The LazyScript Minion is a small movable window that can display information about the addon's activity.

- Displays the name of the form being executed or the action being attempted.
- By default, the Minion is only visible when you are in combat. You can change this in the Minimap Menu under <code>&#x3C; Options &#x3E;</code> > <code>Show Minion</code> > <code>... Only in combat</code>.
- You can also choose to always show the attempted action, even if it wasn't successfully used, via the Minimap Menu under <code>&#x3C; Options &#x3E;</code> > <code>Show Minion</code> > <code>... Always show action</code>.
- Shift + Left Click to move it.
- The code indicates it updates approximately every 0.1 seconds.

## Deathstimator Window
The Deathstimator Minion is a small movable window that attempts to estimate the time until your target dies based on recent damage.

- Displays the estimated time to death.
- By default, the Deathstimator is only visible when you are in combat. You can change this in the Minimap Menu under <code>&#x3C; Options &#x3E;</code> > <code>Show Deathstimator Minion</code> > <code>... Only in combat</code>.
- It calculates the estimated time to death by tracking your target's health over time and computing a slope (health change per second) using a method similar to the method of least squares.
- It requires at least two data points to make an estimate.
- If your target is gaining health, it will display "RECALIBRATING".
- It updates approximately every 0.25 seconds.
- Shift + Left Click to move it.
- Requires [MobInfo2](MobInfo2) (or an equivalent addon) to function.

  -Commands:**

- <code>/ls summonDeath</code>: Shows the Deathstimator frame.
- <code>/ls dismissDeath</code>: Hides the Deathstimator frame.
- <code>/ls hideDeathMinionOutOfCombat</code>: Toggles whether the Deathstimator frame should be hidden when you are out of combat.

  -Deathstimator-Specific Mask:**
- **<code>ifTimeToDeath([<=>])(%d+)s</code>**: This is the key mask in this file related to the Deathstimator. It allows users to create conditions based on the estimated time until the target's death.
  - **Syntax:** <code>ifTimeToDeath[operator][value]s</code>
  - **Operator:** Can be <code><</code>, <code>></code>, or <code>=</code>.
  - **Value:** A number representing seconds.

  -Example Usage:**

- <code>ifTimeToDeath<10s</code>: Checks if the estimated time to death is less than 10 seconds.
- <code>ifTimeToDeath>30s</code>: Checks if the estimated time to death is greater than 30 seconds.
- <code>ifTimeToDeath=5s</code>: Checks if the estimated time to death is exactly 5 seconds. (Less practical due to the dynamic nature of estimates).

## **Immunity Tracking**
LazyScript can attempt to track when a target becomes immune to certain spells based on combat log messages. This information can be used in your forms with the <code>-ifTargetImmune</code> criteria.

  -Commands:**

- <code>/ls useImmunitiesList</code>: Toggles whether LazyScript checks for target immunities based on the internally tracked list or detected immunities.
- <code>/ls clearImmunitiesList</code>: Clears the list of detected immunities.
- <code>/ls immunityExceptionCriteria</code>: Opens an editor where you can manually define exceptions to immunity checks. The format for this editor is <code>SpellName#ImmuneOn#CreatureName</code> per line. For example: <code>Cheap Shot#ImmuneOn#Example Creature</code>.

  -Immunity Tracking Related Masks:**
- **<code>ifTargetImmune=?(.*)$</code>**: This mask checks if the current target is immune to a specific action or any action if no action is specified.
  - **Syntax:** <code>ifTargetImmune</code> or <code>ifTargetImmune=[Action]</code>
  - **Action:** The short name of a LazyScript action (e.g., <code>gouge</code>, <code>polymorph</code>). Multiple actions can be separated by commas.
  -Example Usage:**
- <code>ifTargetImmune</code>: Checks if the target is immune to the action immediately preceding this mask in the script line.
- <code>ifTargetImmune=gouge</code>: Checks if the target is immune to the "gouge" action.
- <code>ifTargetImmune=polymorph,fear</code>: Checks if the target is immune to either "polymorph" or "fear".

## Advanced Topics
- **Localization:** LazyScript uses localized spell and item names where possible. If you use a name that isn't recognized in your game client's language, it might not work. Using item IDs can be more reliable.
- **Performance:** While generally efficient, complex forms with many conditions or included forms might have a slight performance impact. Keep your forms concise and focused.
- **Troubleshooting:** If a form isn't working as expected, try enabling debug mode (<code>/ls debug</code>) to see why certain lines or actions are failing. The in-game form editor can also highlight syntax errors.
- **Class Addons:** LazyScript has companion addons for specific classes (e.g., LazyRogue, LazyHunter). These addons provide default forms and class-specific actions and conditions. Ensure you have the correct class addon installed for your character.

## LazyDruid
LazyDruid is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Druid players. 

  -Note:** LazyDruid requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyDruid adds the following functionalities for Druids:

- **Ferocious Bite Tracking:** Analyzes your Ferocious Bite damage to provide insights into its effectiveness based on combo points.
- **Druid-Specific Actions and Forms:** Provides a comprehensive list of Druid abilities and shapeshift forms that can be used within LazyScript profiles.
- **Druid-Specific Conditions (Masks):** Introduces conditions that are relevant to Druid gameplay, such as checking for Prowl, tracking humanoids, and predicting kill shots with Ferocious Bite.

  -Ferocious Bite Tracking**

LazyDruid can track the actual damage dealt by your Ferocious Bite ability at different combo point levels. This information is compared to the theoretical optimal damage to give you an idea of your performance.

  -How it Works:**

- When you use Ferocious Bite, LazyDruid records the number of combo points you had.
- When the damage from Ferocious Bite appears in your combat log, LazyDruid attempts to match it to the recorded usage based on the combo points.
- It then calculates the average damage observed for each combo point level and compares it to the expected damage based on the spell's tooltip and your character's stats.

  -Commands:**

You can control the Ferocious Bite tracking feature using the following slash commands with LazyScript (assuming your LazyScript command is <code>/lazy</code>):

- <code>/lazy resetBiteStats</code>: Resets all recorded Ferocious Bite damage statistics.
- <code>/lazy useBiteTracking</code>: Toggles whether Ferocious Bite tracking is active.
- <code>/lazy trackBiteCrits</code>: Toggles whether critical strikes from Ferocious Bite are included in the tracking data (including crits can skew the average damage).

  -Minimap Menu Options:**

LazyDruid adds a specific menu to the LazyScript minimap icon for Ferocious Bite options:

- **Ferocious Bite Options:** Access this submenu to configure Ferocious Bite tracking.
  - **Use Ferocious Bite Tracking:** Toggle tracking on or off (same as <code>/lazy useBiteTracking</code>).
  - **Include Crits (may skew kill shots):** Toggle tracking of critical hits (same as <code>/lazy trackBiteCrits</code>).
  - **Ferocious Bite sample window:** Choose how many recent bites are used to calculate the average damage for each combo point level (options: Last 10, 25, 50, 100 Bites).
  - **Ferocious Bite Stats:** Displays your observed Ferocious Bite damage compared to the optimal damage for each combo point level, along with the number of bites seen for each level.
  - **Reset:** Resets the Ferocious Bite statistics (same as <code>/lazy resetBiteStats</code>).
  -Druid Actions and Forms**

LazyDruid defines a comprehensive list of Druid abilities and shapeshift forms that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

  -Cat Form Abilities:**

- <code>bite</code> (Ferocious Bite)
- <code>claw</code> (Claw)
- <code>cower</code> (Cower)
- <code>dash</code> (Dash)
- <code>pounce</code> (Pounce)
- <code>prowl</code> (Prowl)
- <code>rake</code> (Rake)
- <code>ravage</code> (Ravage)
- <code>rip</code> (Rip)
- <code>shred</code> (Shred)
- <code>tigersFury</code> (Tiger's Fury)
- <code>trackHumanoids</code> (Track Humanoids)

  -Bear Form Abilities:**

- <code>bash</code> (Bash)
- <code>challenge</code> (Challenging Roar)
- <code>charge</code> (Feral Charge)
- <code>demoralize</code> (Demoralizing Roar)
- <code>enrage</code> (Enrage)
- <code>frenziedRegen</code> (Frenzied Regeneration)
- <code>growl</code> (Growl)
- <code>maul</code> (Maul)
- <code>swipe</code> (Swipe)

  -General Abilities:**

- <code>abolishPoison</code> (Abolish Poison)
- <code>barkskin</code> (Barkskin)
- <code>curePoison</code> (Cure Poison)
- <code>faerieFire</code> (Faerie Fire)
- <code>feralFire</code> (Faerie Fire (Feral))
- <code>gotw</code> (Gift of the Wild)
- <code>grasp</code> (Nature's Grasp)
- <code>healingTouch</code> (Healing Touch)
- <code>hibernate</code> (Hibernate)
- <code>hurricane</code> (Hurricane)
- <code>innervate</code> (Innervate)
- <code>moonfire</code> (Moonfire)
- <code>motw</code> (Mark of the Wild)
- <code>ns</code> (Nature's Swiftness)
- <code>ooc</code> (Omen of Clarity)
- <code>rebirth</code> (Rebirth)
- <code>regrowth</code> (Regrowth)
- <code>rejuv</code> (Rejuvenation)
- <code>removeCurse</code> (Remove Curse)
- <code>roots</code> (Entangling Roots)
- <code>soothe</code> (Soothe Animal)
- <code>starfire</code> (Starfire)
- <code>swarm</code> (Insect Swarm)
- <code>swiftmend</code> (Swiftmend)
- <code>teleMoonglade</code> (Teleport: Moonglade)
- <code>thorns</code> (Thorns)
- <code>tranquility</code> (Tranquility)
- <code>wrath</code> (Wrath)

  -Shapeshift Forms:**

- <code>aquatic</code> (Aquatic Form)
- <code>bear</code> (Bear Form)
- <code>cat</code> (Cat Form)
- <code>moonkin</code> (Moonkin Form)
- <code>travel</code> (Travel Form)
- <code>caster</code> (Caster Form - Pseudo-action to shift out)

  -Druid Conditions (Masks)**

LazyDruid introduces several conditions you can use in your LazyScript profiles to make decisions based on Druid-specific states.

- <code>-if[Not]LastChance[PlusX.Xs]</code>: Checks if the target is likely to die within a certain time frame, considering energy ticks and your current energy. This is particularly useful for determining if you have time for energy regeneration before a target dies, which influences the effectiveness of Ferocious Bite. The default time buffer is 0.25 seconds, but you can specify a different value (e.g., <code>-ifLastChancePlus1.0s</code>). Requires MobInfo-2.
- <code>-if[Not]Prowling</code>: Checks if you are currently in Prowl.
- <code>-ifKillShot[=XX%]</code>: (For <code>bite</code> action only) Checks if a Ferocious Bite with your current combo points is likely to kill the target. You can optionally specify a percentage threshold (e.g., <code>-ifKillShot=20%</code> to bite if the target is below 20% health). This mask uses your observed Ferocious Bite damage if tracking is enabled, otherwise it uses the theoretical optimal damage.
- <code>-if[<=>]Xcp</code>: Checks your current number of combo points.
  - <code>=</code>: Exactly X combo points.
  - <code>></code>: More than X combo points.
  - <code><</code>: Less than X combo points.
  - No operator: Greater than or equal to X combo points.
  - Examples: <code>-if5cp</code>, <code>-if>3cp</code>, <code>-if<=4cp</code>.
- <code>-if[Not]Tracking=Humanoids</code>: Checks if you are currently tracking humanoids.

  -Custom AutoAttack**

LazyDruid modifies the default auto-attack behavior. When you are in Prowl, auto-attack will be automatically stopped to maintain stealth. When you leave Prowl, auto-attack will resume.

  -Default Forms**

LazyDruid provides some example LazyScript profiles tailored for Druids:

- **allPurpose:** A general-purpose profile covering both Cat and Bear form abilities.
- **Tank:** A profile focused on Bear form tanking abilities.
- **MsSmolderweb:** A specific profile for handling the Ms. Smolderweb encounter in Molten Core, utilizing Hibernate.

You can use these as a starting point for creating your own custom profiles.

  -Custom Help Text**

In addition to the standard LazyScript help, LazyDruid adds descriptions for its unique Druid-specific masks:

- <code>-if[Not]Prowling</code>
- <code>-if[Not]Tracking=Humanoids</code>

## LazyHunter
LazyHunter is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Hunter players.

  -Note:** LazyHunter requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyHunter adds the following functionalities for Hunters:

- **Hunter and Pet Actions:** Provides a comprehensive list of Hunter and Pet abilities that can be used within LazyScript profiles.
- **Hunter-Specific Conditions (Masks):** Introduces conditions that are relevant to Hunter gameplay, such as checking pet status and aspects.
- **Custom Auto-Attack Logic:** Modifies the default auto-attack behavior to intelligently switch between auto-shot and melee auto-attack based on range.

  -Hunter and Pet Actions**

LazyHunter defines a comprehensive list of Hunter abilities and their corresponding pet abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

  -Hunter Abilities:**

- <code>aimed</code> (Aimed Shot)
- <code>arcane</code> (Arcane Shot)
- <code>aspectBeast</code> (Aspect of the Beast)
- <code>aspectCheetah</code> (Aspect of the Cheetah)
- <code>aspectHawk</code> (Aspect of the Hawk)
- <code>aspectMonkey</code> (Aspect of the Monkey)
- <code>aspectPack</code> (Aspect of the Pack)
- <code>aspectWild</code> (Aspect of the Wild)
- <code>eotb</code> (Eyes of the Beast)
- <code>beastLore</code> (Beast Lore)
- <code>bestialWrath</code> (Bestial Wrath)
- <code>call</code> (Call Pet)
- <code>concussive</code> (Concussive Shot)
- <code>counter</code> (Counterattack)
- <code>deterrence</code> (Deterrence)
- <code>disengage</code> (Disengage)
- <code>dismiss</code> (Dismiss Pet)
- <code>distract</code> (Distracting Shot)
- <code>eagleEye</code> (Eagle Eye)
- <code>explosiveTrap</code> (Explosive Trap)
- <code>feign</code> (Feign Death)
- <code>flare</code> (Flare)
- <code>freezingTrap</code> (Freezing Trap)
- <code>frostTrap</code> (Frost Trap)
- <code>huntersMark</code> (Hunter's Mark)
- <code>immolationTrap</code> (Immolation Trap)
- <code>intimidate</code> (Intimidation)
- <code>mend</code> (Mend Pet)
- <code>mongoose</code> (Mongoose Bite)
- <code>multi</code> (Multi-Shot)
- <code>raptor</code> (Raptor Strike)
- <code>rapidFire</code> (Rapid Fire)
- <code>revive</code> (Revive Pet)
- <code>scare</code> (Scare Beast)
- <code>scatter</code> (Scatter Shot)
- <code>scorpid</code> (Scorpid Sting)
- <code>serpent</code> (Serpent Sting)
- <code>tame</code> (Tame Beast)
- <code>trackBeasts</code> (Track Beasts)
- <code>trackDemons</code> (Track Demons)
- <code>trackDragonkin</code> (Track Dragonkin)
- <code>trackElementals</code> (Track Elementals)
- <code>trackGiants</code> (Track Giants)
- <code>trackHidden</code> (Track Hidden)
- <code>trackHumanoids</code> (Track Humanoids)
- <code>trackUndead</code> (Track Undead)
- <code>tranquilizing</code> (Tranquilizing Shot)
- <code>trueshot</code> (Trueshot Aura)
- <code>viper</code> (Viper Sting)
- <code>volley</code> (Volley)
- <code>wingClip</code> (Wing Clip)
- <code>wyvern</code> (Wyvern Sting)

  -Pet Abilities:**

- <code>petBite</code> (Bite)
- <code>petBreath</code> (Lightning Breath)
- <code>petCharge</code> (Charge)
- <code>petClaw</code> (Claw)
- <code>petCower</code> (Cower)
- <code>petDash</code> (Dash)
- <code>petDive</code> (Dive)
- <code>petGrowl</code> (Growl)
- <code>petHowl</code> (Furious Howl)
- <code>petPoison</code> (Scorpid Poison)
- <code>petProwl</code> (Prowl)
- <code>petStomp</code> (Thunder Stomp)
- <code>petScreech</code> (Screech)
- <code>petShell</code> (Shell Shield)
- <code>petUnprowl</code> (Stop Prowling)

  -Pseudo-Actions:**

- <code>petDashDive</code>: A convenience action that will attempt to use Pet Dash if available and usable, otherwise attempts to use Pet Dive.

  -Hunter Conditions (Masks)**

LazyHunter introduces several conditions you can use in your LazyScript profiles to make decisions based on Hunter and pet states.

- <code>-if[Not]PetMood={happy,content,unhappy}</code>: Checks the happiness level of your current pet. You can check for a single mood (e.g., <code>-ifPetMood=happy</code>) or multiple moods separated by commas (e.g., <code>-ifPetMood={happy,content}</code>).
- <code>-if[Not]PetProwling</code>: Checks if your pet is currently in Prowl.
- <code>-ifHasPet</code>: Checks if you currently have an active pet.
- <code>-ifTargetHasDebuff=huntersMark</code>: Checks if your current target has Hunter's Mark applied.
- <code>-ifTargetHasDebuff=serpent</code>: Checks if your current target has Serpent Sting applied.
- <code>-ifTargetHasDebuff=scorpid</code>: Checks if your current target has Scorpid Sting applied.
- <code>-ifTargetHasDebuff=viper</code>: Checks if your current target has Viper Sting applied.
- <code>-ifTargetHasDebuff=wyvern</code>: Checks if your current target has Wyvern Sting applied.
- <code>-ifTargetHasDebuff=wingClip</code>: Checks if your current target has Wing Clip applied.
- <code>-ifHasBuff=aspectBeast</code>: Checks if you have Aspect of the Beast active.
- <code>-ifHasBuff=aspectCheetah</code>: Checks if you have Aspect of the Cheetah active.
- <code>-ifHasBuff=aspectHawk</code>: Checks if you have Aspect of the Hawk active.
- <code>-ifHasBuff=aspectMonkey</code>: Checks if you have Aspect of the Monkey active.
- <code>-ifHasBuff=aspectPack</code>: Checks if you have Aspect of the Pack active.
- <code>-ifHasBuff=aspectWild</code>: Checks if you have Aspect of the Wild active.
- <code>-ifTargetIsImmune=scorpid</code>: Checks if the target is immune to Scorpid Sting.
- <code>-ifTargetIsImmune=serpent</code>: Checks if the target is immune to Serpent Sting.
- <code>-ifTargetIsImmune=viper</code>: Checks if the target is immune to Viper Sting.
- <code>-ifTargetIsImmune=wyvern</code>: Checks if the target is immune to Wyvern Sting.

  -Custom Auto-Attack Logic**

LazyHunter provides a more intelligent auto-attack behavior than the default LazyScript. It will automatically switch between using your ranged auto-shot and your melee auto-attack based on your distance to the target.

- When the target is within ranged attack range, it will initiate auto-shot.
- When the target is outside of ranged attack range but still within 30 yards (the Hunter's "dead zone" or melee range), it will initiate melee auto-attack.

  -Default Forms**

LazyHunter provides some example LazyScript profiles tailored for Hunters:

- **allPurpose:** A general-purpose profile covering various Hunter abilities.
- **Melee:** A profile focused on melee combat abilities for Hunters.
- **Range:** A profile focused on ranged combat abilities for Hunters.

You can use these as a starting point for creating your own custom profiles.

  -Custom Help Text**

In addition to the standard LazyScript help, LazyHunter adds descriptions for its unique Hunter-specific masks:

- <code>-if[Not]PetMood={happy,content,unhappy}</code>
- <code>-if[Not]PetProwling</code>

## LazyMage
LazyMage is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Mage players.

  -Note:** LazyMage requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyMage adds the following functionalities for Mages:

- **Mage Actions:** Provides a comprehensive list of Mage abilities that can be used within LazyScript profiles.
- **Mage-Specific Conditions (Masks):** Introduces conditions relevant to Mage gameplay, such as checking for the presence of mana stones in your inventory.

  -Mage Actions**

LazyMage defines a comprehensive list of Mage abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

- <code>amplifyMagic</code> (Amplify Magic)
- <code>arcanePower</code> (Arcane Power)
- <code>arcaneRupture</code> (Arcane Rupture) - *Specific to TWOW*
- <code>arcaneSurge</code> (Arcane Surge) - *Specific to TWOW*
- <code>blastWave</code> (Blast Wave)
- <code>blink</code> (Blink)
- <code>blizzard</code> (Blizzard)
- <code>brilliance</code> (Arcane Brilliance)
- <code>coldSnap</code> (Cold Snap)
- <code>combustion</code> (Combustion)
- <code>coneCold</code> (Cone of Cold)
- <code>conjureAgate</code> (Conjure Mana Agate)
- <code>conjureCitrine</code> (Conjure Mana Citrine)
- <code>conjureFood</code> (Conjure Food)
- <code>conjureJade</code> (Conjure Mana Jade)
- <code>conjureRuby</code> (Conjure Mana Ruby)
- <code>conjureWater</code> (Conjure Water)
- <code>counter</code> (Counterspell)
- <code>dampenMagic</code> (Dampen Magic)
- <code>detectMagic</code> (Detect Magic)
- <code>evocation</code> (Evocation)
- <code>explosion</code> (Arcane Explosion)
- <code>fireball</code> (Fireball)
- <code>fireBlast</code> (Fire Blast)
- <code>fireWard</code> (Fire Ward)
- <code>flamestrike</code> (Flamestrike)
- <code>frostArmor</code> (Frost Armor)
- <code>frostbolt</code> (Frostbolt)
- <code>frostNova</code> (Frost Nova)
- <code>frostWard</code> (Frost Ward)
- <code>iceArmor</code> (Ice Armor)
- <code>iceBarrier</code> (Ice Barrier)
- <code>iceBlock</code> (Ice Block)
- <code>intellect</code> (Arcane Intellect)
- <code>mageArmor</code> (Mage Armor)
- <code>manaShield</code> (Mana Shield)
- <code>missiles</code> (Arcane Missiles)
- <code>pig</code> (Polymorph: Pig)
- <code>pom</code> (Presence of Mind)
- <code>portDarnassus</code> (Portal: Darnassus)
- <code>portIronforge</code> (Portal: Ironforge)
- <code>portOgrimmar</code> (Portal: Ogrimmar)
- <code>portStormwind</code> (Portal: Stormwind)
- <code>portThunderBluff</code> (Portal: Thunder Bluff)
- <code>portUndercity</code> (Portal: Undercity)
- <code>pyroblast</code> (Pyroblast)
- <code>removeCurse</code> (Remove Curse)
- <code>scorch</code> (Scorch)
- <code>sheep</code> (Polymorph)
- <code>slowFall</code> (Slow Fall)
- <code>teleDarnassus</code> (Teleport: Darnassus)
- <code>teleIronforge</code> (Teleport: Ironforge)
- <code>teleOgrimmar</code> (Teleport: Ogrimmar)
- <code>teleStormwind</code> (Teleport: Stormwind)
- <code>teleThunderBluff</code> (Teleport: Thunder Bluff)
- <code>teleUndercity</code> (Teleport: Undercity)
- <code>turtle</code> (Polymorph: Turtle)

  -Mage Conditions (Masks)**

LazyMage introduces several conditions you can use in your LazyScript profiles to make decisions based on Mage-specific states.

- <code>-if[Not]HaveAgate</code>: Checks if you have a Mana Agate in your inventory.
- <code>-if[Not]HaveCitrine</code>: Checks if you have a Mana Citrine in your inventory.
- <code>-if[Not]HaveJade</code>: Checks if you have a Mana Jade in your inventory.
- <code>-if[Not]HaveRuby</code>: Checks if you have a Mana Ruby in your inventory.

These conditions are updated whenever your inventory changes (e.g., when you conjure a new stone or use one).

  -Default Forms**

LazyMage provides some example LazyScript profiles tailored for Mages:

- **frost:** A profile focused on Frost spells.
- **fire:** A profile focused on Fire spells.
- **lowbie:** A basic profile suitable for lower-level Mages.

You can use these as a starting point for creating your own custom profiles.

  -Custom Help Text**

In addition to the standard LazyScript help, LazyMage adds descriptions for its unique Mage-specific masks:

- <code>-if[Not]HaveAgate</code>
- <code>-if[Not]HaveCitrine</code>
- <code>-if[Not]HaveRuby</code>
- <code>-if[Not]HaveJade</code>

## LazyPaladin
LazyPaladin is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Paladin players.

  -Note:** LazyPaladin requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyPaladin adds the following functionalities for Paladins:

- **Paladin Actions:** Provides a comprehensive list of Paladin abilities that can be used within LazyScript profiles, including spells, blessings, seals, and auras.
- **Paladin Aura Forms:** Introduces the concept of "Aura Forms" which can be used in profiles to switch between different Paladin Auras.

  -Paladin Actions**

LazyPaladin defines a comprehensive list of Paladin abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

- <code>blessFree</code> (Blessing of Freedom)
- <code>blessKings</code> (Blessing of Kings)
- <code>blessLight</code> (Blessing of Light)
- <code>blessMight</code> (Blessing of Might)
- <code>blessProt</code> (Blessing of Protection)
- <code>blessSac</code> (Blessing of Sacrifice)
- <code>blessSlv</code> (Blessing of Salvation)
- <code>blessSnct</code> (Blessing of Sanctuary)
- <code>blessWisdom</code> (Blessing of Wisdom)
- <code>cleanse</code> (Cleanse)
- <code>consecrate</code> (Consecration)
- <code>crusaderStrike</code> (Crusader Strike)
- <code>divFavor</code> (Divine Favor)
- <code>divIntr</code> (Divine Intervention)
- <code>divProt</code> (Divine Protection)
- <code>divShield</code> (Divine Shield)
- <code>exorcism</code> (Exorcism)
- <code>flashLight</code> (Flash of Light)
- <code>gBlessKings</code> (Greater Blessing of Kings)
- <code>gBlessLight</code> (Greater Blessing of Light)
- <code>gBlessMight</code> (Greater Blessing of Might)
- <code>gBlessSlv</code> (Greater Blessing of Salvation)
- <code>gBlessSnct</code> (Greater Blessing of Sanctuary)
- <code>gBlessWisdom</code> (Greater Blessing of Wisdom)
- <code>handFreedom</code> (Hand of Freedom)
- <code>handProt</code> (Hand of Protection)
- <code>hmrJustice</code> (Hammer of Justice)
- <code>hmrWrath</code> (Hammer of Wrath)
- <code>holyLight</code> (Holy Light)
- <code>holyShield</code> (Holy Shield)
- <code>holyShock</code> (Holy Shock)
- <code>holyStrike</code> (Holy Strike)
- <code>holyWrath</code> (Holy Wrath)
- <code>judge</code> (Judgement)
- <code>layOnHands</code> (Lay on Hands)
- <code>purify</code> (Purify)
- <code>redemption</code> (Redemption)
- <code>repentance</code> (Repentance)
- <code>rightFury</code> (Righteous Fury)
- <code>sealCommand</code> (Seal of Command)
- <code>sealCrusader</code> (Seal of the Crusader)
- <code>sealJustice</code> (Seal of Justice)
- <code>sealLight</code> (Seal of Light)
- <code>sealRight</code> (Seal of Righteousness)
- <code>sealWisdom</code> (Seal of Wisdom)
- <code>senseUndead</code> (Sense Undead)
- <code>smnCharger</code> (Summon Charger)
- <code>smnWarhorse</code> (Summon Warhorse)
- <code>turnUndead</code> (Turn Undead)

  -Paladin Aura Forms**

LazyPaladin introduces specific "forms" for Paladin Auras. This allows you to include aura switching directly in your LazyScript profiles. Using an aura as a form will attempt to activate that aura.

- <code>concAura</code> (Concentration Aura)
- <code>devAura</code> (Devotion Aura)
- <code>fireAura</code> (Fire Resistance Aura)
- <code>frostAura</code> (Frost Resistance Aura)
- <code>retAura</code> (Retribution Aura)
- <code>sanctAura</code> (Sanctity Aura)
- <code>shadowAura</code> (Shadow Resistance Aura)

You can use these in your profile lines like any other action or form. For example:
 <code>devAura-ifNotHasBuff=devAura</code>
This line would attempt to cast Devotion Aura if you do not currently have the Devotion Aura buff.

  -Paladin Conditions (Masks)**

As of the provided code, LazyPaladin does not introduce any unique conditions (masks) beyond the standard ones provided by LazyScript. The help text explicitly states "Currently None!". However, you can use the standard LazyScript masks in conjunction with Paladin actions and aura forms.

  -Default Forms**

LazyPaladin provides some example LazyScript profiles tailored for Paladins:

- **solo:** A profile designed for solo gameplay, including self-healing and combat abilities.

You can use this as a starting point for creating your own custom profiles.

  -Custom Help Text**

As noted in the code, the custom help text for LazyPaladin currently indicates that there are no Paladin-specific masks to describe.

## LazyPriest
LazyPriest is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Priest players.

  -Note:** LazyPriest requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyPriest adds the following functionalities for Priests:

- **Priest Actions:** Provides a comprehensive list of Priest abilities that can be used within LazyScript profiles, including healing spells, damage spells, buffs, and utility.
- **Shadowform Handling:** Includes a special parser for the <code>shadowform</code> action to automatically check if you are already in Shadowform.

  -Priest Actions**

LazyPriest defines a comprehensive list of Priest abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

- <code>abolishDisease</code> (Abolish Disease)
- <code>cureDisease</code> (Cure Disease)
- <code>desperatePrayer</code> (Desperate Prayer)
- <code>devouringPlague</code> (Devouring Plague)
- <code>dispelMagic</code> (Dispel Magic)
- <code>divineSpirit</code> (Divine Spirit)
- <code>elunesGrace</code> (Elune's Grace)
- <code>fade</code> (Fade)
- <code>fearWard</code> (Fear Ward)
- <code>feedback</code> (Feedback)
- <code>flashHeal</code> (Flash Heal)
- <code>greaterHeal</code> (Greater Heal)
- <code>heal</code> (Heal)
- <code>hexWeakness</code> (Hex of Weakness)
- <code>holyFire</code> (Holy Fire)
- <code>holyNova</code> (Holy Nova)
- <code>innerFire</code> (Inner Fire)
- <code>innerFocus</code> (Inner Focus)
- <code>lesserHeal</code> (Lesser Heal)
- <code>levitate</code> (Levitate)
- <code>lightwell</code> (Lightwell)
- <code>lightwellRenew</code> (Lightwell Renew)
- <code>manaBurn</code> (Mana Burn)
- <code>mindBlast</code> (Mind Blast)
- <code>mindControl</code> (Mind Control)
- <code>mindFlay</code> (Mind Flay)
- <code>mindSoothe</code> (Mind Soothe)
- <code>mindVision</code> (Mind Vision)
- <code>powerInfusion</code> (Power Infusion)
- <code>pwf</code> (Power Word: Fortitude)
- <code>pws</code> (Power Word: Shield)
- <code>prf</code> (Prayer of Fortitude)
- <code>prh</code> (Prayer of Healing)
- <code>prsp</code> (Prayer of Shadow Protection)
- <code>prs</code> (Prayer of Spirit)
- <code>psychicScream</code> (Psychic Scream)
- <code>renew</code> (Renew)
- <code>resurrection</code> (Resurrection)
- <code>shackleUndead</code> (Shackle Undead)
- <code>shadowProtection</code> (Shadow Protection)
- <code>swp</code> (Shadow Word: Pain)
- <code>shadowform</code> (Shadowform)
- <code>shadowguard</code> (Shadowguard)
- <code>silence</code> (Silence)
- <code>smite</code> (Smite)
- <code>starshards</code> (Starshards)
- <code>touchWeakness</code> (Touch of Weakness)
- <code>vampiricEmbrace</code> (Vampiric Embrace)

  -Special Priest Action: Shadowform**

The <code>shadowform</code> action has a special parser that automatically checks if you are already in Shadowform. When you include <code>shadowform</code> in a profile line, LazyPriest will automatically add a condition to only cast it if you are *not* currently in Shadowform.

For example, the profile line:
 <code>shadowform</code>
is internally treated by LazyPriest as something similar to:
 <code>shadowform-ifNotHasBuff=shadowform@player</code>
This makes it easier to include Shadowform activation in your profiles without needing to manually add the check.

  -Priest Conditions (Masks)**

As of the provided code, LazyPriest does not introduce any unique conditions (masks) beyond the standard ones provided by LazyScript. The help text explicitly states "Currently None!". However, you can use the standard LazyScript masks in conjunction with Priest actions.

  -Default Forms**

LazyPriest provides some example LazyScript profiles tailored for Priests:

- **lowbie:** A basic profile suitable for lower-level Priests, including buffs, healing, and combat spells.

You can use this as a starting point for creating your own custom profiles.

  -Custom Help Text**

As noted in the code, the custom help text for LazyPriest currently indicates that there are no Priest-specific masks to describe.

## LazyRogue
LazyRogue is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Rogue players.

  -Note:** LazyRogue requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyRogue adds the following functionalities for Rogues:

- **Rogue Actions:** Provides a comprehensive list of Rogue abilities that can be used within LazyScript profiles, including combat skills, stealth abilities, and utility.
- **Combo Actions:** Allows combining certain abilities (currently Cold Blood and Eviscerate/Ambush) into a single action in your profile.
- **Item Actions:** Supports using specific Rogue-relevant items (currently Thistle Tea) directly in profiles.
- **Eviscerate Tracking:** Implements a system to track the average damage of your Eviscerate based on combo points and compares it to the theoretical optimal damage.
- **Custom Rogue Conditions (Masks):** Introduces several Rogue-specific conditions for use in profiles, such as checking for stealth, combo points, and estimating "kill shot" opportunities.
- **Poison Application:** Provides a method to apply poisons to your weapons directly from your profile.
- **Importing Old Settings:** Includes functionality to import settings and forms from older versions of LazyRogue.

  -Rogue Actions**

LazyRogue defines a comprehensive list of Rogue abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

- <code>adrenaline</code> (Adrenaline Rush)
- <code>ambush</code> (Ambush)
- <code>bladeFlurry</code> (Blade Flurry)
- <code>blind</code> (Blind)
- <code>bs</code> (Backstab)
- <code>cs</code> (Cheap Shot)
- <code>coldBlood</code> (Cold Blood)
- <code>distract</code> (Distract)
- <code>evasion</code> (Evasion)
- <code>evisc</code> (Eviscerate)
- <code>expose</code> (Expose Armor)
- <code>feint</code> (Feint)
- <code>garrote</code> (Garrote)
- <code>ghostly</code> (Ghostly Strike)
- <code>gouge</code> (Gouge)
- <code>hemo</code> (Hemorrhage)
- <code>kick</code> (Kick)
- <code>ks</code> (Kidney Shot)
- <code>pickPocket</code> (Pick Pocket)
- <code>premeditation</code> (Premeditation)
- <code>preparation</code> (Preparation)
- <code>riposte</code> (Riposte)
- <code>rupture</code> (Rupture)
- <code>sap</code> (Sap)
- <code>snd</code> (Slice and Dice)
- <code>sprint</code> (Sprint)
- <code>ss</code> (Sinister Strike)
- <code>stealth</code> (Stealth)
- <code>sa</code> (Surprise Attack)
- <code>vanish</code> (Vanish)

  -Combo Actions**

LazyRogue allows you to combine certain abilities that are often used together into a single "combo action" in your profile.

- <code>cbAmbush</code>: Attempts to use Cold Blood and then Ambush.
- <code>cbEvisc</code>: Attempts to use Cold Blood and then Eviscerate.

You can use these in your profile lines like any other action. For example:
 <code>cbEvisc-5cp-ifCbKillShot</code>
This line would attempt to use Cold Blood and then Eviscerate if you have 5 combo points and the target is estimated to die from the Cold Blood Eviscerate (using the <code>ifCbKillShot</code> mask).

  -Item Actions**

LazyRogue currently supports using Thistle Tea directly from your profile.

- <code>tea</code>: Attempts to use a Thistle Tea.

Example usage in a profile:
 <code>tea-ifPlayer<20energy</code>
This line would attempt to use Thistle Tea if your energy is below 20.

  -Special Rogue Actions and Parsers**

Several Rogue abilities have special handling in LazyRogue profiles:

- **Ambush, Backstab, Feint, Garrote, Gouge, Kick:** These actions have parsers that automatically include a check for the target being alive (<code>ifTargetAlive</code>) or the player being in a group (<code>ifPlayerInGroup</code> for Feint).
- **Stealth:** The <code>stealth</code> action parser automatically includes a condition to only cast it if you are *not* currently stealthed.

  -Eviscerate Tracking**

LazyRogue includes an Eviscerate tracking system. It hooks into your combat log to record the damage dealt by your Eviscerate based on the number of combo points used. This observed damage is then compared to the theoretically optimal damage for that rank of Eviscerate and your talents.

- **Tracking:** The addon automatically tracks Eviscerate usage and damage when enabled.
- **Metrics:** It tracks the average observed damage and the number of times Eviscerate has been observed for each combo point count (1-5).
- **Comparison:** The addon can display the ratio of your observed damage to the optimal damage.
- **Crit Inclusion:** You can choose whether or not to include critical Eviscerate hits in the average damage calculation. Including crits may skew the average, especially for the <code>ifKillShot</code> mask.
- **Sample Window:** You can configure the number of recent Eviscerates to include in the average calculation.

  -Custom Rogue Conditions (Masks)**

LazyRogue introduces several conditions (masks) that are specific to Rogues. These can be used in your LazyScript profile lines to add more complex logic.

- <code>-if[Not]Poisoned={MainHand,OffHand}</code>: Checks if your MainHand or OffHand weapon is currently poisoned. Replace <code>{MainHand,OffHand}</code> with either <code>MainHand</code> or <code>OffHand</code>.
- <code>-if[Not]Stealthed</code>: Checks if you are currently in Stealth.
- <code>-if[{<,=,>}]Xcp</code>: Checks your current combo points. Replace <code>{<,=,>}</code> with <code><</code>, <code>=</code>, or <code>></code> to check if your combo points are less than, equal to, or greater than <code>X</code>, where <code>X</code> is a number (1-5). If no operator is provided, it defaults to <code>>=</code>.

  -Examples**:

- <code>-if5cp</code>: True if you have 5 or more combo points.
- <code>-if=3cp</code>: True if you have exactly 3 combo points.
- <code>-if<2cp</code>: True if you have less than 2 combo points.
- <code>-ifKillShot[=XX%]</code>: **(Only works with <code>evisc</code> or <code>cbEvisc</code>)** Checks if your target is estimated to die from an Eviscerate with your current combo points.
  - <code>ifKillShot</code>: Checks if the target will die from a regular Eviscerate.
  - <code>ifCbKillShot</code>: Checks if the target will die from an Eviscerate used with Cold Blood active.
  - <code>ifKillShot=XX%</code>: Checks if the target's current health is less than or equal to XX% of the estimated Eviscerate damage. Replace <code>XX</code> with a number.
- <code>-if[Not]LastChance[PlusX.Xs]</code>: Checks if you are likely to get at least two energy ticks before your target dies. This uses a death estimation based on recent damage taken by the target.
  - <code>ifLastChance</code>: Uses a default fudge factor of 0.25 seconds.
  - <code>ifLastChancePlusX.Xs</code>: Adds an additional <code>X</code> seconds to the tick timing for the check. Replace <code>X</code> with a number.

  -Applying Poisons**

LazyRogue provides a specific action syntax for applying poisons:

- <code>applyPoison{MainHand,OffHand}=<poison></code>: Attempts to apply the specified <code><poison></code> to your <code>MainHand</code> or <code>OffHand</code> weapon. Replace <code>{MainHand,OffHand}</code> with either <code>MainHand</code> or <code>OffHand</code>, and <code><poison></code> with the exact name of the poison item in your inventory (e.g., <code>applyPoisonMainHand=Instant Poison</code>).

  -Default Forms**

LazyRogue provides several example LazyScript profiles tailored for Rogues:

- **lr:** A simple profile that uses Sinister Strike and Eviscerate.
- **lazy1:** A more advanced solo profile including Cheap Shot, Eviscerate (with Kill Shot), Kidney Shot, and Rupture.
- **lazy2:** A versatile profile for both solo and group play, incorporating utility spells like Vanish, Kick, Gouge, Slice and Dice, and Feint.
- **lazy3:** A profile designed for Subtlety/Hemorrhage builds, focusing on applying Hemorrhage and using Eviscerate and Rupture.

You can use these as starting points for creating your own custom profiles.

  -Custom Command Line Arguments**

LazyRogue adds the following commands to the LazyScript command-line interface (<code>/ls</code> or <code>/lazyscript</code>):

- <code>/ls resetEviscerateStats</code>: Resets the collected Eviscerate damage statistics.
- <code>/ls useEviscerateTracking</code>: Toggles the Eviscerate tracking feature on or off.
- <code>/ls trackEviscCrits</code>: Toggles whether critical Eviscerate hits are included in the average damage calculation.
- <code>/ls importOldForms</code>: Attempts to import forms from older versions of LazyRogue.
- <code>/ls convertOldForm <formName></code>: Attempts to convert a specific form from the older LazyRogue syntax to the current one. Replace <code><formName></code> with the name of the form you want to convert.

  -Custom Minimap Menu Entries**

LazyRogue adds an "Eviscerate Options" submenu to the LazyScript minimap button menu. This menu allows you to:

- Toggle "Use Eviscerate Tracking".
- Toggle "... Include Crits".
- Set the "Eviscerate sample window" (10, 25, 50, or 100 Eviscerates).
- View "Eviscerate Stats" (Observed/Optimal damage ratio and number of Eviscerates seen for each combo point).
- "Reset" the Eviscerate stats.

## LazyShaman
LazyShaman is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Shaman players.

  -Note:** LazyShaman requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyShaman adds the following functionalities for Shamans:

- **Shaman Actions:** Provides a comprehensive list of Shaman abilities that can be used within LazyScript profiles, including elemental spells, healing spells, weapon enhancements, and totems.

  -Shaman Actions**

LazyShaman defines a comprehensive list of Shaman abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

  -Elemental Spells:**

- <code>earthShock</code> (Earth Shock)
- <code>flameShock</code> (Flame Shock)
- <code>frostShock</code> (Frost Shock)
- <code>chainLight</code> (Chain Lightning)
- <code>lightBolt</code> (Lightning Bolt)
- <code>lightShield</code> (Lightning Shield)
- <code>purge</code> (Purge)

  -Healing Spells:**

- <code>chainHeal</code> (Chain Heal)
- <code>heal</code> (Healing Wave)
- <code>lesserHeal</code> (Lesser Healing Wave)
- <code>cureDisease</code> (Cure Disease)
- <code>curePoison</code> (Cure Poison)

  -Weapon Enhancements:**

- <code>rockbiter</code> (Rockbiter Weapon)
- <code>flametongue</code> (Flametongue Weapon)
- <code>frostbrand</code> (Frostbrand Weapon)
- <code>windfury</code> (Windfury Weapon)

  -Utility Spells:**

- <code>elemMastery</code> (Elemental Mastery)
- <code>ghostWolf</code> (Ghost Wolf)
- <code>natureSwift</code> (Nature's Swiftness)
- <code>stormstrike</code> (Stormstrike)

  -Totems:**

- <code>diseaseTotem</code> (Disease Cleansing Totem)
- <code>bindTotem</code> (Earthbind Totem)
- <code>fireNovaTotem</code> (Fire Nova Totem)
- <code>fireResistTotem</code> (Fire Resistance Totem)
- <code>flameTotem</code> (Flametongue Totem)
- <code>frostResistTotem</code> (Frost Resistance Totem)
- <code>graceTotem</code> (Grace of Air Totem)
- <code>groundingTotem</code> (Grounding Totem)
- <code>hsTotem</code> (Healing Stream Totem)
- <code>magmaTotem</code> (Magma Totem)
- <code>msTotem</code> (Mana Spring Totem)
- <code>mtTotem</code> (Mana Tide Totem)
- <code>natureResistTotem</code> (Nature Resistance Totem)
- <code>poisonTotem</code> (Poison Cleansing Totem)
- <code>searingTotem</code> (Searing Totem)
- <code>sentryTotem</code> (Sentry Totem)
- <code>clawTotem</code> (Stoneclaw Totem)
- <code>skinTotem</code> (Stoneskin Totem)
- <code>strengthTotem</code> (Strength of Earth Totem)
- <code>tranquilTotem</code> (Tranquil Air Totem)
- <code>tremorTotem</code> (Tremor Totem)
- <code>wfTotem</code> (Windfury Totem)
- <code>windwallTotem</code> (Windwall Totem)

You can use these action names in your profile lines like any other LazyScript action. For example:
 <code>lightBolt-ifInCombat</code>
This line would attempt to cast Lightning Bolt if you are in combat.

  -Special Shaman Actions and Parsers**

As of the provided code, LazyShaman does not include any special parsers for specific Shaman actions that add implicit conditions (like the Rogue's Stealth parser).

  -Shaman Conditions (Masks)**

As of the provided code, LazyShaman does not introduce any unique conditions (masks) beyond the standard ones provided by LazyScript. The help text explicitly states "Currently None!". However, you can use the standard LazyScript masks in conjunction with Shaman actions.

  -Default Forms**

LazyShaman provides some example LazyScript profiles tailored for Shamans:

- **solo:** A profile designed for solo play, including healing, cleansing, buffs, and combat spells. It incorporates checks for being in or out of combat and target status.
- **lowbie:** A simplified version of the solo profile, suitable for lower-level Shamans, focusing on basic spells and buffs.

You can use these as starting points for creating your own custom profiles.

  -Custom Help Text**

As noted in the code, the custom help text for LazyShaman currently indicates that there are no Shaman-specific actions or masks to describe beyond what's listed.

## LazyWarlock
LazyWarlock is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Warlock players.

  -Note:** LazyWarlock requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyWarlock adds the following functionalities for Warlocks:

- **Warlock Actions:** Provides a comprehensive list of Warlock abilities that can be used within LazyScript profiles, including spells, summoning spells, and stone creation.
- **Pet Actions:** Includes actions for controlling Warlock pets and utilizing their unique abilities.
- **Stone Tracking:** Monitors your inventory for Healthstones, Soulstones, and Firestones.
- **Soul Shard Tracking:** Keeps track of the number of Soul Shards you have in your inventory.
- **Custom Warlock Conditions (Masks):** Introduces several Warlock-specific conditions for use in profiles, such as checking for stones, soul shards, and "kill shot" opportunities with Conflagrate.
- **Banishable/Shardable Target Checks:** Provides conditions to check if your current target is a valid target for Banish or Drain Soul (for Soul Shards).

  -Warlock Actions**

LazyWarlock defines a comprehensive list of Warlock abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

  -Spells:**

- <code>amplifyCurse</code> (Amplify Curse)
- <code>banish</code> (Banish)
- <code>conflagrate</code> (Conflagrate)
- <code>corruption</code> (Corruption)
- <code>curseAgony</code> (Curse of Agony)
- <code>curseDoom</code> (Curse of Doom)
- <code>curseElements</code> (Curse of Elements)
- <code>curseExhaustion</code> (Curse of Exhaustion)
- <code>curseReckless</code> (Curse of Recklessness)
- <code>curseShadow</code> (Curse of Shadow)
- <code>curseTongues</code> (Curse of Tongues)
- <code>curseWeakness</code> (Curse of Weakness)
- <code>darkPact</code> (Dark Pact)
- <code>deathCoil</code> (Death Coil)
- <code>demonArmor</code> (Demon Armor)
- <code>demonicSacrifice</code> (Demonic Sacrifice)
- <code>demonSkin</code> (Demon Skin)
- <code>detectGreaterInvis</code> (Detect Greater Invisibility)
- <code>detectInvis</code> (Detect Invisibility)
- <code>detectLesserInvis</code> (Detect Lesser Invisibility)
- <code>drainLife</code> (Drain Life)
- <code>drainMana</code> (Drain Mana)
- <code>drainSoul</code> (Drain Soul)
- <code>enslave</code> (Enslave Demon)
- <code>fear</code> (Fear)
- <code>felDomination</code> (Fel Domination)
- <code>funnel</code> (Health Funnel)
- <code>hellfire</code> (Hellfire)
- <code>howl</code> (Howl of Terror)
- <code>immolate</code> (Immolate)
- <code>inferno</code> (Inferno)
- <code>lifeTap</code> (Life Tap)
- <code>pain</code> (Searing Pain)
- <code>rainFire</code> (Rain of Fire)
- <code>senseDemons</code> (Sense Demons)
- <code>shadowBolt</code> (Shadow Bolt)
- <code>shadowburn</code> (Shadowburn)
- <code>shadowWard</code> (Shadow Ward)
- <code>siphon</code> (Siphon Life)
- <code>soulFire</code> (Soul Fire)
- <code>soulLink</code> (Soul Link)

  -Summoning Spells:**

- <code>summonDread</code> (Summon Dreadsteed)
- <code>summonFel</code> (Summon Felhunter)
- <code>summonImp</code> (Summon Imp)
- <code>summonSteed</code> (Summon Felsteed)
- <code>summonSuc</code> (Summon Succubus)
- <code>summonVW</code> (Summon Voidwalker)

  -Stone Creation Spells:**

- <code>createFire</code> (Create Firestone)
- <code>createGreaterFire</code> (Create Firestone (Greater))
- <code>createLesserFire</code> (Create Firestone (Lesser))
- <code>createMajorFire</code> (Create Firestone (Major))
- <code>createGreaterHealth</code> (Create Healthstone (Greater))
- <code>createHealth</code> (Create Healthstone)
- <code>createLesserHealth</code> (Create Healthstone (Lesser))
- <code>createMajorHealth</code> (Create Healthstone (Major))
- <code>createMinorHealth</code> (Create Healthstone (Minor))
- <code>createGreaterSoul</code> (Create Soulstone (Greater))
- <code>createLesserSoul</code> (Create Soulstone (Lesser))
- <code>createMajorSoul</code> (Create Soulstone (Major))
- <code>createMinorSoul</code> (Create Soulstone (Minor))
- <code>createSoul</code> (Create Soulstone)
- <code>createGreaterSpell</code> (Create Spellstone (Greater))
- <code>createMajorSpell</code> (Create Spellstone (Major))
- <code>createSpell</code> (Create Spellstone)

You can use these action names in your profile lines like any other LazyScript action. For example:
 <code>shadowBolt-ifInCombat</code>
This line would attempt to cast Shadow Bolt if you are in combat.

  -Pet Actions**

LazyWarlock provides actions for controlling your Warlock pet and using its abilities. These actions automatically include checks to ensure you have a pet, the pet is alive, and the pet is of the correct family for the ability.

  -Imp Actions:**

- <code>bloodPact</code> (Blood Pact)
- <code>firebolt</code> (Firebolt)
- <code>phaseShift</code> (Phase Shift)
- <code>fireShield</code> (Fire Shield)

  -Voidwalker Actions:**

- <code>consumeShadows</code> (Consume Shadows)
- <code>sacrifice</code> (Sacrifice)
- <code>suffering</code> (Suffering)
- <code>torment</code> (Torment)

  -Succubus Actions:**

- <code>seduction</code> (Seduction)
- <code>lesserInvisibility</code> (Lesser Invisibility)
- <code>lashPain</code> (Lash of Pain)
- <code>soothingKiss</code> (Soothing Kiss)

  -Felhunter Actions:**

- <code>taintedBlood</code> (Tainted Blood)
- <code>spellLock</code> (Spell Lock)
- <code>devourMagic</code> (Devour Magic)
- <code>paranoia</code> (Paranoia)

Example usage in a profile:
 <code>firebolt-ifTargetHostile-ifPetAlive</code>
This line would attempt to have your Imp cast Firebolt if you have a living pet, the pet is an Imp, and your target is hostile.

  -Special Warlock Actions and Parsers**

Several Warlock abilities have special handling in LazyWarlock profiles:

- **Immolate:** The <code>immolate</code> parser automatically includes a check to ensure the target does *not* already have the Immolate debuff active.
- **Banish:** The <code>banish</code> parser automatically includes a check to ensure the target is Banishable (Demon or Elemental).
- **Drain Soul:** The <code>drainSoul</code> parser automatically includes a check to ensure the target is "Shardable" (a valid target from which you can obtain a Soul Shard).
- **Enslave Demon:** The <code>enslave</code> parser automatically includes a check to ensure the target is a Demon.
- **Conflagrate:** The <code>conflagrate</code> parser automatically includes a check to ensure the target has the Immolate debuff active.

  -Stone and Soul Shard Tracking**

LazyWarlock automatically tracks whether you have at least one Healthstone, Soulstone, or Firestone in your bags or equipped (for Firestone). It also counts the total number of Soul Shards you have. This information is used by the Warlock-specific masks.

The tracking is updated whenever your bags are updated (<code>BAG_UPDATE</code> event).

  -Custom Warlock Conditions (Masks)**

LazyWarlock introduces several conditions (masks) that are specific to Warlocks. These can be used in your LazyScript profile lines to add more complex logic.

- <code>-if[Not]HaveFirestone</code>: Checks if you have at least one Firestone in your bags or equipped.
- <code>-if[Not]HaveHealthstone</code>: Checks if you have at least one Healthstone in your bags.
- <code>-if[Not]HaveSoulstone</code>: Checks if you have at least one Soulstone in your bags.
- <code>-if[Not]LastConflagrateChance</code>: Checks if your target is estimated to die from a Conflagrate, taking into account your talent points and spell power. It also returns true if the Immolate debuff is about to expire.
- <code>-if[{<,=,>}]XShards</code>: Checks your current number of Soul Shards. Replace <code>{<,=,>}</code> with <code><</code>, <code>=</code>, or <code>></code> to check if your shard count is less than, equal to, or greater than <code>X</code>, where <code>X</code> is a number. If no operator is provided, it defaults to <code>>=</code>.

Examples:

- <code>-if16Shards</code>: True if you have 16 or more Soul Shards.
- <code>-if=5Shards</code>: True if you have exactly 5 Soul Shards.
- <code>-if<3Shards</code>: True if you have less than 3 Soul Shards.
- <code>-if[Not]TargetShardable</code>: Checks if your current target is a valid target from which you can obtain a Soul Shard using Drain Soul. This includes checks for the target being trivial, tapped by you, attackable, and not dead.

  -Default Forms**

LazyWarlock provides some example LazyScript profiles tailored for Warlocks:

- **conflagrate:** A profile focused on using Conflagrate, including checks for Immolate and "Last Conflagrate Chance". It also includes stone creation, pet summoning, and basic combat spells.
- **affliction:** A profile designed for Affliction Warlocks, prioritizing DoTs like Corruption, Curse of Agony, and Siphon Life. It includes logic for Life Tap, Drain Life/Mana, and pet management.
- **demonology:** A profile focused on Demonology Warlocks, incorporating Soul Link, Demonic Sacrifice, and pet abilities. It includes logic for Life Tap, Drain Life/Mana, and pet management.
- **lowbie:** A simplified profile for lower-level Warlocks, covering basic spells like Shadow Bolt, Corruption, Curse of Agony, and Drain Soul, along with stone creation and pet summoning.

You can use these as starting points for creating your own custom profiles.

  -Custom Help Text**

The custom help text for LazyWarlock focuses on the unique Warlock-specific masks available for use in profiles.

## LazyWarrior
LazyWarrior is an extension for the LazyScript addon, specifically designed to provide helpful automation and information for Warrior players.

  -Note:** LazyWarrior requires the LazyScript addon to be installed and enabled.

  -Key Features**

LazyWarrior adds the following functionalities for Warriors:

- **Warrior Actions:** Provides a comprehensive list of Warrior abilities that can be used within LazyScript profiles, including combat abilities, shouts, stances, and cooldowns.
- **Stance Handling:** Provides masks to check your current stance and actions to switch between them.
- **Slam Timing:** Includes a mask to help time your Slam ability effectively.
- **Bloodthirst Kill Shot:** Offers a mask to determine if your Bloodthirst is likely to be a killing blow.
- **Shield Equipped Check:** Provides a mask to check if you have a shield equipped.

  -Warrior Actions**

LazyWarrior defines a comprehensive list of Warrior abilities that can be used in your LazyScript profiles. These are referred to by their short names within the profile syntax.

  -Combat Abilities:**

- <code>bloodrage</code> (Bloodrage)
- <code>charge</code> (Charge)
- <code>cleave</code> (Cleave)
- <code>concussionBlow</code> (Concussion Blow)
- <code>disarm</code> (Disarm)
- <code>execute</code> (Execute)
- <code>hamstring</code> (Hamstring)
- <code>heroicStrike</code> (Heroic Strike)
- <code>intercept</code> (Intercept)
- <code>mockingBlow</code> (Mocking Blow)
- <code>mortalStrike</code> (Mortal Strike)
- <code>overpower</code> (Overpower)
- <code>pummel</code> (Pummel)
- <code>rend</code> (Rend)
- <code>revenge</code> (Revenge)
- <code>shieldBash</code> (Shield Bash)
- <code>shieldBlock</code> (Shield Block)
- <code>shieldSlam</code> (Shield Slam)
- <code>slam</code> (Slam)
- <code>sunder</code> (Sunder Armor)
- <code>sweepingStrikes</code> (Sweeping Strikes)
- <code>thunderClap</code> (Thunder Clap)
- <code>whirlwind</code> (Whirlwind)

  -Shouts:**

- <code>battleShout</code> (Battle Shout)
- <code>challengingShout</code> (Challenging Shout)
- <code>demoShout</code> (Demoralizing Shout)
- <code>intimidatingShout</code> (Intimidating Shout)
- <code>piercingHowl</code> (Piercing Howl)
- <code>taunt</code> (Taunt)

  -Stances:**

- <code>battle</code> (Battle Stance) - Note: This is a shapeshift action.
- <code>defensive</code> (Defensive Stance) - Note: This is a shapeshift action.
- <code>berserk</code> (Berserker Stance) - Note: This is a shapeshift action.

  -Cooldowns:**

- <code>berserkerRage</code> (Berserker Rage)
- <code>deathWish</code> (Death Wish)
- <code>lastStand</code> (Last Stand)
- <code>recklessness</code> (Recklessness)
- <code>retaliation</code> (Retaliation)
- <code>shieldWall</code> (Shield Wall)

You can use these action names in your profile lines like any other LazyScript action. For example:
 <code>heroicStrike-ifInCombat</code>
This line would attempt to use Heroic Strike if you are in combat.

  -Special Warrior Actions and Parsers**

- **Slam:** The <code>slam</code> parser automatically includes the <code>IsSlamTime</code> mask, which helps ensure you use Slam when it's most effective (usually when your weapon swing timer is close to finishing).
- **Stances:** The stance actions (<code>battle</code>, <code>defensive</code>, <code>berserk</code>) are handled as shapeshift forms. Using one of these actions in a profile will attempt to switch to that stance.

  -Custom Warrior Conditions (Masks)**

LazyWarrior introduces several conditions (masks) that are specific to Warriors. These can be used in your LazyScript profile lines to add more complex logic.

<code>-if[Fury]BloodthirstKillShot[XX%hp]</code>: Checks if casting Bloodthirst is likely to reduce the target's health below <code>XX%hp</code>. The <code>Fury</code> prefix is not used in the current implementation but might be intended for future use to consider talents or effects. Replace <code>XX%hp</code> with a percentage value (e.g., <code>20%hp</code>) to check if Bloodthirst will bring the target below that health threshold. This is useful for timing Bloodthirst as a finishing move. If no percentage is specified, it defaults to checking if Bloodthirst will kill the target (bring them below 0% hp).

  -Example**:
 <code>bloodthirst-ifBloodthirstKillShot20%hp</code>
This line would attempt to use Bloodthirst if the target's health is likely to drop below 20% after the Bloodthirst damage.

- <code>-if[Not]Stance={battle,berserk,defensive}</code>: Checks your current stance. Replace <code>{battle,berserk,defensive}</code> with one or more stance names separated by commas (e.g., <code>battle</code>, <code>defensive,berserk</code>).
  - <code>-ifStance=battle</code>: True if you are in Battle Stance.
  - <code>-ifNotStance=defensive</code>: True if you are *not* in Defensive Stance.
  - <code>-ifStance=battle,berserk</code>: True if you are in either Battle Stance or Berserker Stance.

- <code>-if[Not]ShieldEquipped</code>: Checks if you have a shield equipped in your offhand. This is particularly useful for abilities like Shield Bash and Shield Slam.

  -Example**:
 <code>shieldBash-ifShieldEquipped-ifTargetIsCasting</code>
This line would attempt to use Shield Bash if you have a shield equipped and your target is casting a spell.

  -Default Forms**

LazyWarrior provides some example LazyScript profiles tailored for Warriors:

- **tank:** A basic tanking profile that includes abilities like Battle Shout, Demoralizing Shout, Sunder Armor, Heroic Strike, Taunt, and Mocking Blow. It also includes a condition to use Berserker Rage if feared and a health potion if low on health.

You can use this as a starting point for creating your own custom profiles.

  -Custom Help Text**

The custom help text for LazyWarrior focuses on the unique Warrior-specific masks available for use in profiles.

## Contributing
LazyScript is an open-source project. If you'd like to contribute bug fixes, new features, or localization updates, please visit the project's repository.
