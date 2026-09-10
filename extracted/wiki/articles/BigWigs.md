---
title: "BigWigs"
url: "https://turtle-wow.fandom.com/wiki/BigWigs"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-10T17:51:43Z"
fetched: "2026-09-10T07:38:24Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# BigWigs

BigWigs is a boss encounter addon that provides timers, alerts, and other helpful features for raid bosses.

## Installation
  -GitAddonsManager**

The easiest way to keep **BigWigs** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/pepopo978/BigWigs.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>BigWigs</code>, removing the <code>-master</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.
  -Optional**: [FuBar](FuBar)

## Git links
- [**(pepopo978)**](https://github.com/pepopo978/BigWigs)
- [**(ElesionWoW)**](https://github.com/ElesionWoW/BigWigs)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/bw or /BigWigs</code>
|Prints Bigwigs commands in the chat window
|-
|<code>/bw reset</code>
|Resets all active boss modules
|-
|<code>/bw reboot [module]</code>
|Reboots a specific boss module (raid leader/assistant only)
|-
|<code>/bw plugin minimap</code>
|Toggles the minimap button
|-
|<code>/bw debug</code>
|Enables/disables debug messages
|-
|<code>/bw editlayout</code>
|Opens the frame layout and alert size editor
|-
|<code>/bw boss</code>
|Options for boss modules
|-
|<code>/bw extra</code>
|Options for extras
|-
|<code>/bw plugin</code>
|Options for plugins
|-
|<code>/bw detach</code>
|Detach the tooltip from the panel
|-
|<code>/bw lock</code>
|Lock the tooltip position
|-
|<code>/bw hide</code>
|Hide plugin from panel or minimap, but keep addon running
|-
|<code>/bw profile</code>
|Set profile for this addon
|-
|<code>/bw standby</code>
|Suspend or resume the addon
|-
|<code>/bw about</code>
|Print addon info and version
|}

  -Configuring BigWigs & Plugins**

You can customize BigWigs settings through multiple methods:

- **Command Line**:  Use <code>/bw</code> to access the command list and configure options.
- **Minimap Icon**:  Right-click the minimap icon (or FuBar icon) for quick access to settings.
- **Force Reboot for All Raid Members (requires assistant/raid leader):**  Ctrl + Click the module icon or type: <code>/bw reboot</code>
- **Disable Modules (Alt + Click):**  Alt + Click the module icon to disable individual modules.
- **Disable All Modules (Ctrl + Alt + Click):**  Ctrl + Alt + Click to disable BigWigs completely.

## Preview
Minimap Menu:

Test bar:

Battleground Timers:

## Language support
Currently, only english clients are supported. In general, the Addon can work with other languages, but this support is only provided on a best-effort basis. It is much effort to support those languages. Feel free to contribute if you would like to have support for other languages.

## Contributors
If you would like to contribute, just open a pull request.
- The adjustments were originally made by **[LYQ](https://github.com/MOUZU/BigWigs)** and **[Dorann](https://github.com/xorann/BigWigs)**
- Adjustments for Elysium made by **[Hosq](https://github.com/Hosq/BigWigs)**.
- Adjustments for Turtle-WoW made by **[CosminPOP](https://github.com/CosminPOP/BigWigs)**.
- Modifications for Turtle-WoW made by **[Relar](https://github.com/madScripting)/[Balake](https://github.com/balakethelock)/[Pepopo](https://github.com/pepopo978)**.

## Raid Adjustments
If you want to browse through all the changes and their status regarding each encounter in the Raid specific README files. On there you can also see whether changes are untested, working perfectly or working as good as they can be.

- [**(MC)** Molten Core](https://github.com/pepopo978/BigWigs/tree/master/Raids/MC)
- [**(ONY)** Onyxia](https://github.com/pepopo978/BigWigs/tree/master/Raids/Onyxia)
- [**(BWL)** Blackwing Lair](https://github.com/pepopo978/BigWigs/tree/master/Raids/BWL)
- [**(ES)** Emerald Sanctum](https://github.com/pepopo978/BigWigs/tree/master/Raids/EmeraldSanctum)
- [**(K10)** Karazhan](https://github.com/pepopo978/BigWigs/tree/master/Raids/Karazhan)
- [**(ZG)** Zul'Gurub](https://github.com/pepopo978/BigWigs/tree/master/Raids/ZG)
- [**(AQ20)** Ruins of Ahn'Qiraj](https://github.com/pepopo978/BigWigs/tree/master/Raids/AQ20)
- [**(AQ40)** Temple of Ahn'Qiraj](https://github.com/pepopo978/BigWigs/tree/master/Raids/AQ40)
- [**(NAXX)** Naxxramas](https://github.com/pepopo978/BigWigs/tree/master/Raids/Naxxramas)

## Plugins
The following plugins enhance boss encounter alerts, timers, and raid management. If you already have any of these addons installed separately, consider disabling or removing them to avoid conflicts.

- **Bars**   Displays timers for important boss events. Includes emphasized bars for short or critical timers (≤15s or ≤10s remaining), which can be separated and enlarged for visibility.
- **BossBlock**  Blocks boss mod messages from raid chat and raid warnings to reduce clutter.
- **FRBuffMacro** Checks for the "[Resist Fire](https://database.turtle-wow.org/?spell=15123)" buff on raid members and their pets, and automatically cast Resist Fire as Mind-controller (<code>/frbuff).</code>
- **FrostBlast** Tracking and display of players targeted by the "[Frost Blast](https://database.turtle-wow.org/?spell=27808)" ability.
- **MageTools** Help mages track their fire vulnerability and ignite debuffs.
- **Messages**  Shows alerts for key boss mechanics and events.
- **Proximity**   Backport of the proximity plugin. Displays nearby raid members (use with caution, as range checks are approximate).
- **RaidIcon**  Places raid icons (default: Skull) over selected raid members for easier identification.
- **Range**  Sets the combat log range for more precise event detection, defaulting to maximum.
- **Sound**   Plays alert sounds on important events.
- **Test**  Facilitates testing of BigWigs modules and allows repositioning of bars and messages.
- **Tranq**  Tracks Hunter Tranquilizing Shots used during encounters.
- **WarningSign**  Displays critical spell icons in the center of your screen (e.g., standing in Rain of Fire or Frenzied bosses).
- **Version Check**  Warns if a newer version of BigWigs is available.
- **CommonAuras**  Tracks common buffs and cooldowns (e.g., Shield Wall, Challenging Shout).
- **ZombieFood**   Announce when players are dazed.
- **RespawnTimers**  Tracks respawn timers for trash mobs.
- **BossRecords**  Records boss fight durations and compares to personal bests.
- **RaidOfficer**  Allows raid assistants to drag players between groups.
- **DousedRunes**  Tracks doused runes in Molten Core, indicating which are still active (used to summon Majordomo).
- **AFKick**  Requests automatic logout of raid members; escalates to client shutdown if unresponsive.
- **AutoReply**  Sends automatic replies to whispers during encounters, informing others you're busy.
- **Farclip**  Adjusts farclip distance in Naxxramas to prevent screen freezes, restoring previous settings afterward.

## Provided API
This is a (incomplete) documentation of the BigWigs API. This is only important for developers. Also refer to the [modulePrototype](https://github.com/pepopo978/BigWigs/blob/master/documentation/modulePrototype%20overview.txt) overview and the [bossTemplate](https://github.com/pepopo978/BigWigs/blob/master/documentation/bossTemplate.lua) for an example implementation.

  -Overview**<syntaxhighlight lang="lua">
  Sync(sync)
  DelayedSync(delay, sync)
  CancelDelayedSync(sync)
  ThrottleSync(throttle, sync)

  Message(text[, priority[, noRaidSay[, sound[, broadcastOnly]]]])
table :DelayedMessage(delay, text[, priority[, noRaidSay[, sound[, broadcastOnly]]]])
  CancelDelayedMessage(text)
  Whisper(text, name)

  Bar(text, time, icon[, otherColor, c1[, c2[, c3[, c4[, c5[, c6[, c7[, c8[, c9[, c10]]]]]]]]]])
  RemoveBar(text)
  IrregularBar(text, minTime, maxTime, icon[, otherColor, c1[, c2[, c3[, c4[, c5[, c6[, c7[, c8[, c9[, c10]]]]]]]]]])
table :DelayedBar(delay, text, time, icon[, otherColor, c1[, c2[, c3[, c4[, c5[, c6[, c7[, c8[, c9[, c10]]]]]]]]]])
  CancelDelayedBar(text)
  BarStatus(text)
  BarId(text)

  Sound(sound)
table :DelayedSound(delay, sound[, id])
  CancelDelayedSound(sound[, id])

  Icon(name[, iconnumber])
  RemoveIcon()
  DelayedRemoveIcon(delay)

  WarningSign(texturePath, duration[, force])
  RemoveWarningSign(texturePath[, forceHide])
  DelayedWarningSign(delay, icon, duration[, id])
  CancelDelayedWarningSign(icon[, id])
  WarningSignOnClick(func)
  Say(msg)

  Proximity()
  RemoveProximity()
-- KLHThreatMeter
  KTM_Reset()
  KTM_ClearTarget([forceReset])
  KTM_SetTarget(targetName[, forceReset]) 
</syntaxhighlight>

  -:Bar(text, length, icon, otherColor, ...)**

Starts a timer bar that counts down for the specified length of time. If the length argument is table with the keys "min" and "max" a irregular bar will be created.

  -Arguments**

- **text** string The text to show on the bar.
- **length** number/table The length of the bar in seconds or a table with the keys min and max (will create a irregular bar)
- **icon** string What icon to show on the bar.
- **otherColor** boolean Optional, if not specified, the configured colors will be used. If specified, you must provide 1 to 10 colors to use as arguments after otherColor.
- **...** color Optional, if otherColor is specified, you must provide 1 to 10 colors.
  -Returns** Nothing.

  -Remarks**

"Interface\\Icons\\" is automatically pre-pended to the icon path. If you have to show a bar with an icon that is not part of the default icons provided by WoW, this is still possible using the self:TriggerEvent("BigWigs_StartBar", ...) syntax.

  -Example**<syntaxhighlight lang="lua">
self:Bar("Adds incoming!", 30, "Spell_Nature_Web")
self:Bar("Testing Colors!", 60, "Spell_Nature_Web", true, "red", "yellow", "green")
self:Bar("More adds incoming!", { min: 20, max: 25 }, "Spell_Nature_Web")
</syntaxhighlight>**:Icon(name, iconnumber)**

Puts the specified raid icon on the specified player, only works if you are promoted in the raid or the raid leader.

  -Arguments**

- **name** string The name of the player you want to put an icon on.
- **iconnumber** number Optional, if not specified, the configured default raid icon will be used. If specified, this raid icon will be used. 1: Yellow Star, 2: Orange Circle, 3: Purple Diamond, 4: Green Triangle, 5: White Moon, 6: Blue Square, 7: Red Cross, 8: Skull

  -Returns** Nothing.

  -Remarks**

If you use CheckForBossDeath or CheckForWipe (used by default) the icon is removed automatically. If not, you should clear it yourself.

  -Example**<syntaxhighlight lang="lua">
self:Icon("Dorann") -- puts a skull on Dorann
self:Icon("Dorann", 2) -- puts an orange circle on Dorann
</syntaxhighlight>

  -:Message(text, priority, noRaidSay, sound, broadcastOnly)**

Displays a message in the configured message frame (defaults to BigWigs' own message frame) with the color configured for the given priority.

  -Arguments**

- **text** string The message to show.
- **priority** string Optional, one of "Important" (red), "Personal" (red), "Urgent" (orange), "Attention" (yellow), "Positive" (green), "Bosskill" (green) or "Core" (cyan).
- **noRaidSay** boolean Optional, if this is non-nil, the message will not be relayed to raid warning channel, even if that option is enabled.
- **sound** string or boolean Optional, if this is a string, it must be a valid sound name (see :Sound). If 'true' is passed, the default "RaidWarning" sound provided by WoW will be played.
- **broadcastOnly** boolean Optional, if this is provided, the message will only be broadcasted to the raid warning channel (if that option is enabled), and not shown locally.
  -Returns** Nothing**.**

  -Remarks**

You should almost always provide a priority - if not, the message will be white. Remember that you should NOT surround the text with "***". 

Also note that priority can be a RGB tuple, like {r=1.0,g=0,b=0}, and also just a color name ("Red", "Purple", "Orange", "Yellow", "Green", "Cyan").

  -Example**<syntaxhighlight lang="lua">
self:Message("Fear in 2sec!", "Important")
self:Message("You have the plague", "Personal", true, "Info")
</syntaxhighlight>

  -:DelayedMessage(delay, ...)**

This will schedule a delayed message to be printed after delay seconds.

  -Arguments**

- **delay** number The number of seconds to wait before printing the message.
- **...** The rest of the arguments are exactly like the ones for :Message.

  -Returns**

The scheduled event ID, which is useful if you may want to cancel the scheduled message later.

  -Example**<syntaxhighlight lang="lua">
self:DelayedMessage(55, "Something happens in 5sec!", "Important")

local x = self:DelayedMessage(55, "Something happens in 5sec!", "Important") -- Then, a bit later, the boss enters phase 2, and you no langer want this message to display
self:CancelScheduledEvent(x)
-- or better 
</syntaxhighlight>

  -:Sync(sync)**

Sends a communication sync to the other BigWigs users in the group.

  -Arguments**

- **sync** string The synchronization token to send to the other people in your group. Note that these tokens are recieved by all the BigWigs modules, so you should make sure you pick something unique.

  -Returns** Nothing.

  -Remarks**

The tokens we use are typically prefixed by some portion of the boss name, like "HyakissWeb". When sending a sync, if you want to send more data (this will be provided by the second argument to :BigWigs_RecvSync, detailed later), you have to use string concatenation; "HyakissWeb" .. playerName (which would bekome "HyakissWeb MyToon"). Note that synchronization throttling is done only on the first part, not the additional information you include in the sync. Of course, sync messages are sent using SendAddonMessage, and as such there are some restrictions inherited. Take a look at Wowpedia for more information.

  -Example**<syntaxhighlight lang="lua">
self:Sync("BossAbility") self:Sync("BossTargettedAbility " .. player)
</syntaxhighlight>

## Module Prototype
The following functions and variables are available on each boss module. Also refer to the [modulePrototype](https://github.com/pepopo978/BigWigs/blob/master/documentation/modulePrototype%20overview.txt) overview and the [bossTemplate](https://github.com/pepopo978/BigWigs/blob/master/documentation/bossTemplate.lua) for an example implementation. 

  -Functions and Variables**<syntaxhighlight lang="lua">
-- do not override
BigWigs.modulePrototype.core = BigWigs
BigWigs.modulePrototype.debugFrame = ChatFrame1
BigWigs.modulePrototype.engaged = false
BigWigs.modulePrototype.bossSync = nil -- untranslated string
BigWigs.modulePrototype.zonename = nil -- AceLibrary("Babble-Zone-2.2")["Ahn'Qiraj"]

-- override
BigWigs.modulePrototype.revision = 1 -- To be overridden by the module!
BigWigs.modulePrototype.started = false -- not used anymore
BigWigs.modulePrototype.enabletrigger = nil -- boss
BigWigs.modulePrototype.wipemobs = nil -- adds that will be considered in CheckForEngage
BigWigs.modulePrototype.toggleoptions = nil -- {"sweep", "sandblast", "scarab", -1, "emerge", "submerge", -1, "berserk", "bosskill"}
BigWigs.modulePrototype.timers = {} -- table for all timers
BigWigs.modulePrototype.icons = {} -- table for all icons
BigWigs.modulePrototype.proximityCheck = nil -- function(unit) return CheckInteractDistance(unit, 2) end
BigWigs.modulePrototype.proximitySilent = nil -- false

-- do not override
boolean BigWigs.modulePrototype:IsBossModule()
void BigWigs.modulePrototype:DebugMessage(msg)
void BigWigs.modulePrototype:OnInitialize()

-- override (if necessary)
void BigWigs.modulePrototype.OnEnable()
void BigWigs.modulePrototype:OnEngage()
void BigWigs.modulePrototype:OnSetup()
void BigWigs.modulePrototype:OnDisengage()

-- do not override
void BigWigs.modulePrototype:Engage()
void BigWigs.modulePrototype:Disengage()
void BigWigs.modulePrototype:Victory()
void BigWigs.modulePrototype:Disable()

-- synchronize functions, do not override
string BigWigs.modulePrototype:GetEngageSync()
void BigWigs.modulePrototype:SendEngageSync()

string BigWigs.modulePrototype:GetWipeSync()
void BigWigs.modulePrototype:SendWipeSync()

string BigWigs.modulePrototype:GetBossDeathSync()
void BigWigs.modulePrototype:SendBossDeathSync()

-- event handler, override only if necessary (e.g. c'thun phase transition requires overriding CheckForWipe())
void BigWigs.modulePrototype:RegisterYellEngage(yell)

void BigWigs.modulePrototype:CheckForEngage() -- registers the PLAYER_REGEN_DISABLED event. If you have to use this event, register it in the OnSetup function 
-- and call the BigWigs:CheckForEngage(self) function within your event handler.
void BigWigs.modulePrototype:CheckForWipe() --registers the PLAYER_REGEN_ENABLED and CHAT_MSG_COMBAT_FRIENDLY_DEATH events. If you have to use either of these events, 
-- register it in the OnSetup function and call the BigWigs:CheckForWipe(self) function within your event handler.
void BigWigs.modulePrototype:CheckForBossDeath(msg) -- registers the CHAT_MSG_COMBAT_HOSTILE_DEATH event. If you have to use this event, register it in the OnSetup function 
-- and call the BigWigs:CheckForBossDeath(self) function within your event handler.

-- override
void BigWigs.modulePrototype:BigWigs_RecvSync(sync, rest, nick)

-- test function
void BigWigs.modulePrototype:Test()
</syntaxhighlight>

  -Provided API**<syntaxhighlight lang="lua">
void BigWigs.modulePrototype:Sync(sync)
void BigWigs.modulePrototype:DelayedSync(delay, sync)
void BigWigs.modulePrototype:CancelDelayedSync(sync)
void BigWigs.modulePrototype:ThrottleSync(throttle, sync)

void BigWigs.modulePrototype:Message(text[, priority[, noRaidSay[, sound[, broadcastOnly]]]])
table BigWigs.modulePrototype:DelayedMessage(delay, text[, priority[, noRaidSay[, sound[, broadcastOnly]]]])
void BigWigs.modulePrototype:CancelDelayedMessage(text)

void BigWigs.modulePrototype:Bar(text, time, icon[, otherColor, c1[, c2[, c3[, c4[, c5[, c6[, c7[, c8[, c9[, c10]]]]]]]]]])
void BigWigs.modulePrototype:RemoveBar(text)
table BigWigs.modulePrototype:DelayedBar(delay, text, time, icon[, otherColor, c1[, c2[, c3[, c4[, c5[, c6[, c7[, c8[, c9[, c10]]]]]]]]]])
void BigWigs.modulePrototype:CancelDelayedBar(text)

void BigWigs.modulePrototype:Sound(sound)
table BigWigs.modulePrototype:DelayedSound(delay, sound[, id])
void BigWigs.modulePrototype:CancelDelayedSound(sound[, id])

void BigWigs.modulePrototype:Icon(name[, iconnumber])
void BigWigs.modulePrototype:RemoveIcon()

void BigWigs.modulePrototype:WarningSign(texturePath, duration[, force[, text]])
void BigWigs.modulePrototype:RemoveWarningSign(texturePath[, forceHide])
void BigWigs.modulePrototype:DelayedWarningSign(delay, icon, duration[, id])
void BigWigs.modulePrototype:CancelDelayedWarningSign(icon[, id])

void BigWigs.modulePrototype:Say(msg)

-- KLHThreatMeter
void BigWigs.modulePrototype:KTM_Reset()
void BigWigs.modulePrototype:KTM_ClearTarget([forceReset])
void BigWigs.modulePrototype:KTM_SetTarget(targetName[, forceReset])
</syntaxhighlight>

  -Core: Module Handling**<syntaxhighlight lang="lua">
void BigWigs:ModuleDeclaration(bossName, zoneName)
void BigWigs:RegisterModule(name, module)
void BigWigs:EnableModule(moduleName, nosync)
void BigWigs:SetupModule(moduleName)
void BigWigs:DisableModule(moduleName)

-- event handler
void BigWigs:BigWigs_RebootModule(moduleName)
</syntaxhighlight>

  -Call Hierarchy**<syntaxhighlight lang="lua">
BigWigs.modulePrototype:OnInitialize() -- do not override, entry point
	BigWigs:RegisterModule(name, module)
		BigWigs.modulePrototype:OnRegister() -- only used for plugins (and kel'thuzad)
		
(BigWigs:BigWigs_TargetSeen(mobname, unit), BigWigs:CHAT_MSG_MONSTER_YELL(msg), BigWigs:BigWigs_RebootModule(module), BigWigs:BigWigs_RecvSync(sync, module, nick), BigWigs.modulePrototype:Engage())
	BigWigs:EnableModule(moduleName, nosync) -- synchronize, enable message
		BigWigs.modulePrototype:OnEnable()
		BigWigs:SetupModule(moduleName) -- register generic events
			BigWigs.modulePrototype:OnSetup() -- register specific events and set variables			
			
			BigWigs.modulePrototype:CheckForEngage() -- PLAYER_REGEN_DISABLED event handler, registered by BigWigs:EnableModule(moduleName, nosync)
				boolean BigWigs.modulePrototype:Scan() -- do not override - boss/adds in combat?
				BigWigs.modulePrototype:SendEngageSync() -- do not override, synchronize
					string BigWigs.modulePrototype:GetEngageSync() -- do not override
					BigWigs.modulePrototype:Engage() -- engage message, call to plugins
						BigWigs:EnableModule(self:ToString())
							... details see above
						BigWigs.modulePrototype:OnEngage()
			BigWigs.modulePrototype:CheckForWipe() -- PLAYER_REGEN_ENABLED and CHAT_MSG_COMBAT_FRIENDLY_DEATH event handler, registered by BigWigs:EnableModule(module, nosync)
				BigWigs:SendWipeSync() -- synchronize
					BigWigs:BigWigs_RebootModule(moduleName)
						BigWigs.modulePrototype:Disengage() -- reset plugins
							BigWigs.modulePrototype:OnDisengage()
						BigWigs:SetupModule(moduleName)
							... details see above
			BigWigs.modulePrototype:CheckForBossDeath(msg) -- CHAT_MSG_COMBAT_HOSTILE_DEATH event handler, registered by BigWigs:EnableModule(module, nosync)
				BigWigs.modulePrototype:SendBossDeathSync() -- do not override, synchronize
					BigWigs.modulePrototype:Victory() -- do not override, called by sync
						BigWigs:DisableModule(module)
							BigWigs.modulePrototype:Disengage() -- do not override - reset plugins
								BigWigs.modulePrototype:OnDisengage()
			
BigWigs:BigWigs_RebootModule(module)
	BigWigs.modulePrototype:Disengage() -- do not override - reset plugins
		BigWigs.modulePrototype:OnDisengage()
	BigWigs:SetupModule(module)
		... details see above
		
BigWigs.modulePrototype:RegisterYellEngage(yell) -- do not override
BigWigs:CHAT_MSG_MONSTER_YELL(msg)
	BigWigs:EnableModule(mod:ToString())
		... details see above
    BigWigs.modulePrototype:SendEngageSync()
		string BigWigs.modulePrototype:GetEngageSync() -- do not override
		BigWigs.modulePrototype:Engage() -- engage message, call to plugins
			BigWigs:EnableModule(self:ToString())
				... details see above
			BigWigs.modulePrototype:OnEngage()
</syntaxhighlight>
