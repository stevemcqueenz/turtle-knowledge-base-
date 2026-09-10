---
title: "Zorlen"
url: "https://turtle-wow.fandom.com/wiki/Zorlen"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:30:26Z"
fetched: "2026-09-10T07:40:03Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Zorlen

Zorlen is a comprehensive library of functions that automate and simplify many gameplay actions, from targeting enemies to casting spells and managing inventory.

## Installation
  -GitAddonsManager**

The easiest way to keep **Zorlen** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/Xian55/Zorlen.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

  -Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code> and rename the folder to <code>Zorlen</code>, removing the <code>-main</code> suffix.
# Move the folder into your <code>Interface/AddOns</code> directory and restart the game.

## Git Links
- [**(Xian55)**](https://github.com/Xian55/Zorlen) 

## Key Bindings
You can bind the following actions in-game for quick access:
{| class="fandom-table"
!Action
!Function
!Description
|-
|Assist
|<code>Zorlen_assist()</code>
|Assist your current target or a specified player
|-
|Change Assist
|<code>Zorlen_changeAssist()</code>
|Set a new assist target by name
|-
|Clear Assist
|<code>Zorlen_clearAssist()</code>
|Clear saved assist target
|-
|Target By Name
|<code>Zorlen_TargetByName()</code>
|Target a specific player or NPC by name
|-
|Change Target By Name
|<code>Zorlen_changeTargetByName()</code>
|Set a target name for future targeting
|-
|Clear Target By Name
|<code>Zorlen_clearTargetByName()</code>
|Clear saved target name
|-
|Target Enemy
|<code>Zorlen_TargetEnemy()</code>
|Target the nearest enemy
|-
|Target Nearest Enemy
|<code>Zorlen_TargetNearestEnemy()</code>
|Target closest enemy
|-
|Target Active Enemy Only
|<code>Zorlen_TargetActiveEnemyOnly()</code>
|Target enemy actively attacking
|-
|Back Off
|<code>backOff()</code>
|Move away from current position
|-
|Back Off Target
|<code>backOffTarget()</code>
|Move away from current target
|-
|Auto Pet Attack
|<code>Zorlen_AutoPetAttack()</code>
|Automate pet attack
|}

## Commands
You can use slash commands in chat to perform various actions:
{| class="fandom-table"
!Command
!Description
!Note
|-
|<code>/zorlen</code>
|Opens the GUI options window for Zorlen
|Also available as <code>/zf</code> (if configured)
|-
|<code>/z</code>
|Used in scripts for Zorlen functions
|Not a direct command, but a namespace prefix
|-
|<code>/zorlen log</code>
|Logs localization or debug info
|For localization debugging
|-
|<code>/zorlen debug</code>
|Toggles debug logging on or off
|Debugging detailed info
|-
|<code>/zorlen debug on</code>
|Turns debug logging on
|Enable detailed logs
|-
|<code>/zorlen debug off</code>
|Turns debug logging off
|Disable detailed logs
|-
|<code>/zorlen debug mode</code>
|Toggles verbose debug mode
|More detailed output
|-
|<code>/zorlen debug temp</code>
|Shows temporary debug info (may toggle temporary debug state)
|Usage with <code>/on</code> or <code>/off</code>
|-
|<code>/zorlen debug temp on</code>
|Enables temporary debug info
|For quick, temporary debugging
|-
|<code>/zorlen debug temp off</code>
|Disables temporary debug info
|Stops temporary debug info
|-
|<code>/zorlen debug options</code>
|Lists all debug options available
|For configuration and info
|-
|<code>/zorlen buffs</code>
|Shows buff textures
|To view active buffs
|-
|<code>/zorlen debuffs</code>
|Shows debuff textures
|To view active debuffs
|-
|<code>/zorlen eat</code>
|Uses food (if enabled)
|For consuming food in game
|-
|<code>/zorlen drink</code>
|Uses water/drink (if enabled)
|For consuming water
|-
|<code>/zorlen eat macro</code>
|Creates or manages macro for eating
|Macro related
|-
|<code>/zorlen drink macro</code>
|Creates or manages macro for drinking
|Macro related
|-
|<code>/zorlen macro</code>
|General macro command
|For macro creation or management
|-
|<code>/zorlen buffs</code> 
|Show buff textures
|-
|<code>/zorlen debuffs</code> 
|Show debuff textures
|-
|<code>/ztarget</code>
|Target nearest active enemy by name
|For targeting specific enemies
|-
|<code>/zchangetarget</code>
|Save target name for future targeting
|Used with <code>/ztarget</code> to target saved name
|-
|<code>/zsettarget</code>
|Set a target name (save target)
|For quick retargeting
|-
|<code>/zcleartarget</code>
|Clear saved target
|To reset saved target
|-
|<code>/zassist</code>
|Assist a saved target (assist macro)
|To help group members target enemies
|-
|<code>/za</code> (shortcut)
|Shortcut for <code>/zassist</code>
|Quick assist command
|-
|<code>/zca</code> (set assist)
|Save assist target name
|To quickly set assist target
|-
|<code>/zsetassist</code>
|Save assist target name (alternative)
|Same as <code>/zca</code>
|-
|<code>/zsa</code> (assist shortcut)
|Shortcut for <code>/zsetassist</code>
|Quick save assist command
|-
|<code>/zclearassist</code>
|Clear saved assist target
|To reset assist settings
|}

## Preview
## General Functions
These functions are useful for all classes in a variety of situations.

  -Items**
{| class="fandom-table"
!Function
!Description
|-
|Zorlen_useTrinketByName(trinketName)
|Use a trinket with the given name.
|-
|Zorlen_useItemByName(itemName)
|Use an item with the given name.
|-
|isEatingActive()
|Returns true if you are eating.
|-
|isDrinkingActive()
|Returns true if you are drinking.
|-
|isSelfPoisoned()
|Returns true if you are poisoned.
|-
|isSelfDiseased()
|Returns true if you are diseased.
|}

  -Combat**
{| class="fandom-table"
!Function
!Description
|-
|Zorlen_inCombat()
|Returns true if you are in combat. This is more reliable than checking the Player frame.
|-
|Zorlen_notInCombat()
|Returns true if you are not in combat.
|-
|Zorlen_inMeleeCombat()
|Returns true if you are in Melee combat.
|-
|Zorlen_canAttack()
|Returns true if your target can be attacked.
|-
|isAttackActive()
|Returns true if Attack is active.
|-
|castAttack()
|Casts Attack without canceling if already active.
|-
|stopAttack()
|Cancels Attack.
|-
|isShootActive()
|Returns true if Shoot is active.
|-
|castShoot()
|Casts Shoot without canceling if already active.
|-
|stopShoot()
|Cancels Shoot.
|-
|SpellStopCasting()
|Cancels any spell casting.
|-
|backOff()
|Cancels all attacks and spells, sets Pet to passive and to follow.
|-
|backOffTarget()
|Cancels all attacks and spells. If your Pet has the same target, sets Pet to passive and to follow.
|-
|isBeast()
|Returns true if your target is of type Beast.
|-
|isHumanoid()
|Returns true if your target is of type Humanoid.
|-
|isUndead()
|Returns true if your target is of type Undead.
|-
|isElemental()
|Returns true if your target is of type Elemental.
|-
|isDemon()
|Returns true if your target is of type Demon.
|-
|isGiant()
|Returns true if your target is of type Giant.
|-
|isDragonkin()
|Returns true if your target is of type Dragonkin.
|}

  -Racial Abilities**
{| class="fandom-table"
!Function
!Description
|-
|isMeld()
|Returns true if Shadowmeld is active.
|-
|castShadowmeld()
|Casts Shadowmeld. If you are a Hunter, casts Feign Death to take you out of combat first.
|-
|castStoneform()
|Casts Stoneform.
|-
|castBerserking()
|Casts Berserking.
|-
|castWillOfTheForsaken()
|Casts Will of the Forsaken.
|}

  -Targeting**
{| class="fandom-table"
!Function
!Description
|-
|zTargetNearestEnemy()
|Clears your target and finds the best enemy to target.
|-
|zTargetNearestActiveEnemyWithHighestHealth()
|Targets the nearest enemy with the highest health.
|-
|zTargetMarkedEnemyOnly()
|Targets an enemy that has Hunter's Mark.
|-
|zTargetEnemyRaidTargetOnly()
|Targets an enemy with a raid target.
|-
|zTargetEnemyMobOnly()
|Targets an enemy mob.
|-
|zTargetActiveEnemyOnly()
|Targets an active enemy player or mob.
|-
|zTargetActiveEnemyMobOnly()
|Targets an active enemy mob.
|-
|zTargetEnemyPlayerOnly()
|Targets an enemy player.
|-
|zTargetEnemyPlayerFirst()
|Targets an enemy player first, otherwise a mob.
|-
|zTargetEnemyPlayerFirstOrActiveEnemyOnly()
|Targets a player or active enemy.
|-
|zTargetActiveEnemyThatGivesXPOnly()
|Clears your target and tries to find an active enemy that gives XP.
|-
|zTargetTotem()
|Targets the closest totem.
|}

  -Class Identification**

The default unit is "target".
{| class="fandom-table"
!Function
!Description
|-
|isDruid(unit)
|Returns true if the unit is a Druid.
|-
|isHunter(unit)
|Returns true if the unit is a Hunter.
|-
|isMage(unit)
|Returns true if the unit is a Mage.
|-
|isPaladin(unit)
|Returns true if the unit is a Paladin.
|-
|isPriest(unit)
|Returns true if the unit is a Priest.
|-
|isRogue(unit)
|Returns true if the unit is a Rogue.
|-
|isShaman(unit)
|Returns true if the unit is a Shaman.
|-
|isWarlock(unit)
|Returns true if the unit is a Warlock.
|-
|isWarrior(unit)
|Returns true if the unit is a Warrior.
|}

  -Tracking**
{| class="fandom-table"
!Function
!Description
|-
|isTrackingActive()
|Returns true if any tracking is active.
|-
|isTrackHumanoidsActive()
|Returns true if tracking Humanoids.
|-
|isTrackBeastsActive()
|Returns true if tracking Beasts.
|-
|isTrackDemonsActive()
|Returns true if tracking Demons.
|-
|isTrackDragonsActive()
|Returns true if tracking Dragonkin.
|-
|isTrackElementalsActive()
|Returns true if tracking Elementals.
|-
|isTrackGiantsActive()
|Returns true if tracking Giants.
|-
|isTrackHiddenActive()
|Returns true if tracking Hidden.
|-
|isTrackUndeadActive()
|Returns true if tracking Undead.
|-
|isTrackMineralsActive()
|Returns true if tracking Minerals.
|-
|isTrackHerbsActive()
|Returns true if tracking Herbs.
|-
|castTrackBeasts()
|Casts Track Beasts.
|-
|castTrackHumanoids()
|Casts Track Humanoids.
|-
|castTrackUndead()
|Casts Track Undead.
|-
|castTrackElementals()
|Casts Track Elementals.
|-
|castTrackGiants()
|Casts Track Giants.
|-
|castTrackDragonkin()
|Casts Track Dragonkin.
|}

## Druid Functions
Check out my Druid Macros page to see many examples of these functions in action.

  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isCasterForm()
|Returns true if you are in Caster form.
|-
|isFeralForm()
|Returns true if you are in any shapeshifted form.
|-
|isCatForm()
|Returns true if you are in Cat form.
|-
|isBearForm()
|Returns true if you are in Bear form.
|-
|isDireBearForm()
|Returns true if you are in Dire Bear form.
|-
|isMoonkinForm()
|Returns true if you are in Moonkin form.
|-
|isTravelForm()
|Returns true if you are in Travel form.
|-
|isAquaticForm()
|Returns true if you are in Aquatic form.
|-
|isMarkOfTheWild()
|Returns true if Mark of the Wild is active on your target.
|-
|isThorns()
|Returns true if Thorns is active on your target.
|-
|isRejuvenation()
|Returns true if Rejuvenation is active on your target.
|-
|isRegrowth()
|Returns true if Regrowth is active on your target.
|-
|isRooted()
|Returns true if Entangling Roots is active on your target.
|-
|isInsectSwarm()
|Returns true if Insect Swarm is active on your target.
|-
|isFaerieFire()
|Returns true if Faerie Fire is active on your target.
|-
|isMoonfire()
|Returns true if Moonfire is active on your target.
|-
|isOmenOfClarityActive()
|Returns true if Omen of Clarity is active on yourself.
|-
|isMarkOfTheWildActive()
|Returns true if Mark of the Wild is active on yourself.
|-
|isThornsActive()
|Returns true if Thorns is active on yourself.
|-
|isRejuvenationActive()
|Returns true if Rejuvenation is active on yourself.
|-
|isRegrowthActive()
|Returns true if Regrowth is active on yourself.
|-
|isBarkskinActive()
|Returns true if Barkskin is active on yourself.
|-
|isNaturesGraspActive()
|Returns true if Nature's Grasp is active on yourself.
|-
|isProwlActive()
|Returns true if you are prowling.
|-
|isNaturesSwiftnessActive()
|Returns true if Nature's Swiftness is active on yourself.
|}

  -Shapeshifting**

These all behave the same way. If you are already in the form you are trying to shapeshift into, nothing happens. If you are in a feral form, the first invocation will shift to Caster form.
{| class="fandom-table"
!Function
!Description
|-
|castCasterForm()
|Shifts to Caster form.
|-
|castCatForm()
|Shifts to Cat form.
|-
|castBearForm()
|Shifts to Bear form (or Dire Bear form).
|-
|castDireBearForm()
|Identical to castBearForm().
|-
|castMoonkinForm()
|Shifts to Moonkin form.
|-
|castTravelForm()
|Shifts to Travel form.
|-
|castAquaticForm()
|Shifts to Aquatic form.
|}

  -Casting Spells**

All functions will generally cast the highest rank of the spell available at the time of casting.

If you have to be in a certain form to cast the spell, each invocation will shift you to that form before casting the spell. For instance, if you are in Bear form and invoke castProwl(), the chain of events will be Bear Form -> Caster Form -> Cat Form -> Prowl, with each successive invocation.

Many spells will include a group and self variant. The group version will automatically cast on your party members without removing your current target. The self version will only cast on yourself, no matter what your target is.

  -Buffs**

The group variant for buffs is a great convenience. You can just repeatedly use castGroupMarkOfTheWild() to buff your whole party, without having to manually target each of them.
{| class="fandom-table"
!Function
!Description
|-
|castMarkOfTheWild()
|Casts Mark of the Wild on your target if possible, otherwise on yourself.
|-
|castGroupMarkOfTheWild()
|
|-
|castSelfMarkOfTheWild()
|
|-
|castThorns()
|Casts Thorns on your target if possible, otherwise on yourself.
|-
|castGroupThorns()
|
|-
|castSelfThorns()
|
|-
|castInnervate()
|Casts Innervate on your target if possible, otherwise on yourself.
|-
|castSelfInnervate()
|
|-
|castOmenOfClarity()
|Casts Omen of Clarity if not already active.
|-
|castBarkskin()
|Casts Barkskin if not already active.
|-
|castNaturesGrasp()
|Casts Nature's Grasp if not already active.
|-
|castNaturesSwiftness()
|Casts Nature's Swiftness if not already active.
|-
|castProwl()
|Casts Prowl if not already active, shifting to Cat form if necessary.
|}

  -Attacks / Debuffs**

All attack and debuffs won't cast if the target is immune.
{| class="fandom-table"
!Function
!Description
|-
|castEntanglingRoots()
|Casts Entangling Roots on your target.
|-
|castInsectSwarm()
|Casts Insect Swarm on your target.
|-
|castFaerieFire()
|Casts Faerie Fire or Feral Faerie Fire depending on your form.
|-
|castMoonfire()
|Casts Moonfire if not already on your target.
|-
|castStarfire()
|Casts Starfire on your target.
|-
|castWrath()
|Casts Wrath on your target.
|}

  -Healing**

All the healing spells come in the same set of varieties. One to cast the best rank for the amount of damage taken, one to over-rank and under-rank, and one to cast the max rank all the time.

The group variant will cast on your target if possible, otherwise it will choose a member of your group that needs healing and cast on them. This gives you a manual override by simply targeting the person you want to heal, otherwise you can let it decide while you focus on keeping enemy targets.
{| class="fandom-table"
!Function
!Description
|-
|castHealingTouch()
|Casts the best rank of Healing Touch on yourself based on your damage. If you have a friendly target, casts the max rank on them.
|-
|castUnderHealingTouch()
|
|-
|castOverHealingTouch()
|
|-
|castMaxHealingTouch()
|
|-
|castGroupHealingTouch()
|Group variant of Healing Touch.
|-
|castUnderGroupHealingTouch()
|
|-
|castOverGroupHealingTouch()
|
|-
|castMaxGroupHealingTouch()
|
|-
|castRegrowth()
|Casts the best rank Regrowth on yourself based on your damage. If you have a friendly target, casts the max rank on them.
|-
|castUnderRegrowth()
|
|-
|castOverRegrowth()
|
|-
|castMaxRegrowth()
|
|-
|castGroupRegrowth()
|Group variant of Regrowth.
|-
|castUnderGroupRegrowth()
|
|-
|castOverGroupRegrowth()
|
|-
|castMaxGroupRegrowth()
|
|-
|castRejuvenation()
|Casts the best rank Rejuvenation on yourself based on your damage. If you have a friendly target, casts the max rank on them.
|-
|castUnderRejuvenation()
|
|-
|castOverRejuvenation()
|
|-
|castMaxRejuvenation()
|
|-
|castGroupRejuvenation()
|Group variant of Rejuvenation.
|-
|castUnderGroupRejuvenation()
|
|-
|castOverGroupRejuvenation()
|
|-
|castMaxGroupRejuvenation()
|
|-
|castSwiftmend()
|Casts Swiftmend if possible.
|-
|castGroupSwiftmend()
|
|-
|castSelfSwiftmend()
|
|-
|forceSwiftmend()
|Force Swiftmend by first casting Rejuvenation if necessary.
|-
|forceSelfSwiftmend()
|
|}

## Hunter Functions
Check out my Hunter Macros page to see many examples of these functions in action.

  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isClipped()
|Returns true if Wing Clip is active on your target.
|-
|isConned()
|Returns true Concussive Shot is active on your target.
|-
|isMarked()
|Returns true if Hunter's Mark is active on your target.
|-
|isScatter()
|Returns true if Scatter Shot is active on your target.
|-
|isSerpent()
|Returns true is Serpent Sting is active on your target.
|-
|isScorpid()
|Returns true if Scorpid Sting is active on your target.
|-
|isViper()
|Returns true if Viper Sting is active on your target.
|-
|isWyvern()
|Returns true if Wyvern Sting is active on your target.
|-
|isStung()
|Returns true if any Sting is active on your target.
|-
|isAutoShotActive()
|Returns true if Auto Shot is active on yourself.
|-
|isHawkActive()
|Returns true if Aspect of the Hawk is active on yourself.
|-
|isMonkActive()
|Returns true if Aspect of the Monkey is active on yourself.
|-
|isCheetahActive()
|Returns true if Aspect of the Cheetah is active on yourself.
|-
|isBeastActive()
|Returns true if Aspect of the Beast is active on yourself.
|-
|isWildActive()
|Returns true if Aspect of the Wild is active on yourself.
|-
|isPackActive()
|Returns true if Aspect of the Pack is active on yourself.
|-
|isAspectActive()
|Returns true if any Aspect is active on yourself.
|-
|isTrueshotActive()
|Returns true if Trueshot Aura is active on yourself.
|-
|isFeign()
|Returns true if Feign Death is active on yourself.
|-
|isQuickshotsActive()
|Returns true if Quickshots is active on yourself.
|-
|isRapidActive()
|Returns true if Rapid Fire is active on yourself.
|}

  -Tracking / Buffs**
{| class="fandom-table"
!Function
!Description
|-
|castMark()
|Casts Hunter's Mark if not already on target.
|-
|castTrueshot()
|Casts Trueshot Aura if not already active.
|-
|castRapid()
|Casts Rapid Fire.
|-
|castHunterTracking()
|Casts the type of tracking that matches your target.
|}

  -Aspects**
{| class="fandom-table"
!Function
!Description
|-
|castHawk()
|Casts Aspect of the Hawk is not already active.
|-
|castMonkey()
|Casts Aspect of the Monkey is not already active.
|-
|castWild()
|Casts Aspect of the Wild if not already active.
|-
|castBeast()
|Casts Aspect of the Beast if not already active.
|-
|castCheetah()
|Casts Aspect of the Cheetah is not already active.
|-
|castPack()
|Casts Aspect of the Pack if not already active.
|}

  -Traps**

The trap functions will cast Feign Death on the first invocation if you are currently in combat. You can spam these while in combat to lay a trap.
{| class="fandom-table"
!Function
!Description
|-
|canTrap()
|Returns true if you are not in combat and can place a trap.
|-
|castFreezingTrap()
|Casts Freezing Trap, casting Feign Death first if necessary.
|-
|castFreezingTrapWithPetPassive()
|Same, but also puts your pet into passive mode.
|-
|castImmolationTrap()
|Casts Immolation Trap, casting Feign Death first if necessary.
|-
|castFrostTrap()
|Casts Frost Trap, casting Feign Death first if necessary.
|-
|castExplosiveTrap()
|Casts Explosive Trap, casting Feign Death first if necessary.
|}

  -Melee Attacks**

Many of the melee attacks will save enough mana for you to cast Feign Death, since you are typically only using them when things have gone wrong.
{| class="fandom-table"
!Function
!Description
|-
|castScareBeast()
|Casts Scare Beast if allowed on the target.
|-
|castDisengage()
|Casts Disengage if the target is an enemy mob.
|-
|castCounter()
|Casts Counter Attack.
|-
|castMong()
|Casts Mongoose Bite, saving enough mana to cast Feign Death.
|-
|castRaptor()
|Casts Raptor Strike, saving enough mana to cast Feign Death.
|-
|castClip()
|Casts Wing Clip if target is not immune, saving enough mana to cast Feign Death.
|}

  -Ranged Attacks**

These functions all cast the different shots. Shot rotation uses an internal timer to calculate the best shot to use for a standard rotation of AutoShot, Aimed Shot, Multi Shot and Feign Death to lose aggro. The variants let you choose whether or not to cast Multi Shot or Feign Death.
{| class="fandom-table"
!Function
!Description
|-
|castShotRotation()
|The standard shot rotation of AutoShot, Aimed Shot and Multi Shot.
|-
|castShotRotationWithoutMulti()
|
|-
|castShotRotationWithoutFeign()
|
|-
|castShotRotationWithoutMultiOrFeign()
|
|-
|castAutoShot()
|Casts AutoShot. Repeated uses will not cancel AutoShot.
|-
|stopAutoShot()
|Cancels AutoShot.
|-
|castSerpent()
|Casts Serpent Sting if target isn't immune.
|-
|castViper()
|Casts Viper Sting if target uses mana.
|-
|castScorpid()
|Casts Scorpid Sting if target isn't immune.
|-
|castSting()
|Casts Serpent, Viper or Scorpid Sting depending on the target. If the target is a boss, it will cast Viper Sting if they use mana, otherwise Serpent Sting. If the target is a player, it will cast Viper Sting if they use mana, otherwise Scorpid Sting. For normal mobs it always casts Serpent Sting, unless the mob is immune. Against players and normal mobs, it won't cast a sting if they are below 20% health to conserve mana.
|-
|castCon()
|Casts Concussive Shot if target is not already Wing Clipped and not immune.
|-
|castDistract()
|Casts Distracting Shot.
|-
|castArcane()
|Casts Arcane Shot.
|-
|castScatter()
|Casts Scatter Shot if the target isn't crowd controlled.
|-
|castMulti()
|Casts Multi Shot.
|-
|castAimed()
|Casts Aimed Shot.
|-
|castFeign()
|Casts Feign Death if not already active.
|-
|castWyvernSting()
|Casts Wyvern Sting, casting Feign Death first if necessary.
|-
|castWyvernStingWithPetPassive()
|Same, but also puts your pet into passive mode.
|}

  -Hunter Pet Functions**
{| class="fandom-table"
!Function
!Description
|-
|petInCombat()
|Returns true if your pet is in combat.
|-
|isPet()
|Returns true if your target is a pet.
|-
|isPetDead()
|Returns true if your pet is dead.
|-
|castMend()
|Casts Mend Pet, picking the closest rank to the damage of the pet to prevent over healing.
|-
|castUnderMend()
|Under-ranks Mend Pet.
|-
|castOverMend()
|Over-ranks Mend Pet.
|-
|castMaxMend()
|Casts the maximum rank of Mend Pet.
|-
|castCallAndDismissPet()
|If Pet is out, casts Dismiss Pet. If Pet is dead, casts Revive Pet. If Pet isn't out, casts Call Pet.
|-
|needPet()
|If Pet is dead, casts Revive Pet. If Pet is not out, casts Call Pet.
|-
|castBestialWrath()
|Casts Bestial Wrath.
|-
|castIntimidation()
|Casts Intimidation.
|-
|zAutoPetAttack()
|If your pet doesn't have a target, it will attack your target.
|-
|zPetAttack()
|Pet will attack your target if target is not in a break-on-damage crowd control.
|}

  -Pet Skills**

All pet skills include functions to turn autocasting on and off. This is identical to using the Pet Bar, but can be done from a macro.
{| class="fandom-table"
!Function
!Description
|-
|zDash()
|Pet casts Dash.
|-
|zDashAutocastOn()
|
|-
|zDashAutocastOff()
|
|-
|zDive()
|Pet casts Dive.
|-
|zDiveAutocastOn()
|
|-
|zDiveAutocastOff()
|
|-
|zCharge()
|Pet casts Charge.
|-
|zChargeAutocastOn()
|
|-
|zChargeAutocastOff()
|
|-
|zBite()
|Pet casts Bite.
|-
|zBiteAutocastOn()
|
|-
|zBiteAutocastOff()
|
|-
|zClaw()
|Pet casts Claw.
|-
|zClawAutocastOn()
|
|-
|zClawAutocastOff()
|
|-
|zCower()
|Pets casts Cower.
|-
|zAutoCower()
|Turns Cower autocast on or off depending on the health of the pet.
|-
|zCowerAutocastOn()
|
|-
|zCowerAutocastOff()
|
|-
|zGrowl()
|Pet casts Growl.
|-
|zAutoGrowl()
|Turns Growl autocast on or off depending on the health of the pet.
|-
|zGrowlAutocastOn()
|
|-
|zGrowlAutocastOff()
|
|-
|zProwl()
|Pet casts Prowl.
|-
|zProwlAutocastOn()
|
|-
|zProwlAutocastOff()
|
|-
|zScreech()
|Pet casts Screech.
|-
|zScreechAutocastOn()
|
|-
|zScreechAutocastOff()
|
|-
|zThunderstomp()
|Pet casts Thunderstomp.
|-
|zThunderstompAutocastOn()
|
|-
|zThunderstompAutocastOff()
|
|-
|zFuriousHowl()
|Pet casts Furious Howl.
|-
|zFuriousHowlAutocastOn()
|
|-
|zFuriousHowlAutocastOff()
|
|-
|zShellShield()
|Pet casts Shell Shield.
|-
|zShellShieldAutocastOn()
|
|-
|zShellShieldAutocastOff()
|
|-
|zLightningBreath()
|Pet casts Lightning Breath.
|-
|zLightningBreathAutocastOn()
|
|-
|zLightningBreathAutocastOff()
|
|-
|zScorpidPoison()
|Pet casts Scorpid Poison.
|-
|zScorpidPoisonAutocastOn()
|
|-
|zScorpidPoisonAutocastOff()
|
|}

## Mage Functions
Check out my Mage Macros page to see many examples of these functions in action.

  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isArcaneIntellect()
|Returns true if target has Arcane Intellect active.
|-
|isArcaneIntellectActive()
|Returns true if Arcane Intellect is active on yourself.
|-
|isFrostArmorActive()
|Returns true if Frost Armor is active on yourself.
|-
|isMageArmorActive()
|Returns true if Mage Armor is active on yourself.
|-
|isArmorActive()
|Returns true if Frost Armor or Mage Armor is active on yourself.
|-
|isIceArmorActive()
|Returns true if Ice Armor is active on yourself.
|}

  -Buffs**
{| class="fandom-table"
!Function
!Description
|-
|castArcaneIntellect()
|Casts Arcane Intellect if not already on your target. Casts on yourself if there is no target or it can't be cast on the target.
|-
|castSelfArcaneIntellect()
|Casts Arcane Intellect only on yourself if not already active.
|-
|castIceArmor()
|Casts Frost/Ice Armor if not already active.
|-
|castMageArmor()
|Casts Mage Armor if not already active.
|}

  -Attack Spells**
{| class="fandom-table"
!Function
!Description
|-
|castArcaneExplosion()
|Casts Arcane Explosion.
|-
|castArcaneMissiles()
|Casts Arcane Missiles.
|-
|castBlastWave()
|Casts Blast Wave.
|-
|castBlizzard()
|Casts Blizzard.
|-
|castFireBlast()
|Casts Fire Blast.
|-
|castFireball()
|Casts Fireball.
|-
|castFlamestrike()
|Casts Flamestrike.
|-
|castFrostbolt()
|Casts Frostbolt.
|-
|castPyroblast()
|Casts Pyroblast.
|-
|castScorch()
|Casts Scorch.
|}

  -Mana Efficient Variants**

The next set of functions require that the Addon MobHealth2 be installed. If it is, they will cast a rank of the spell that most appropriate for the damage remaining on the target.
{| class="fandom-table"
!Function
!Description
|-
|cast_ManaEfficient_ArcaneExplosion()
|Casts Arcane Explosion based on target health for mana efficiency.
|-
|cast_ManaEfficient_ArcaneMissiles()
|Casts Arcane Missiles based on target health for mana efficiency.
|-
|cast_ManaEfficient_BlastWave()
|Casts Blast Wave based on target health for mana efficiency.
|-
|cast_ManaEfficient_Blizzard()
|Casts Blizzard based on target health for mana efficiency.
|-
|cast_ManaEfficient_FireBlast()
|Casts Fire Blast based on target health for mana efficiency.
|-
|cast_ManaEfficient_Fireball()
|Casts Fireball based on target health for mana efficiency.
|-
|cast_ManaEfficient_Flamestrike()
|Casts Flamestrike based on target health for mana efficiency.
|-
|cast_ManaEfficient_Frostbolt()
|Casts Frostbolt based on target health for mana efficiency.
|-
|cast_ManaEfficient_Pyroblast()
|Casts Pyroblast based on target health for mana efficiency.
|-
|cast_ManaEfficient_Scorch()
|Casts Scorch based on target health for mana efficiency.
|}

## Paladin Functions
Many Paladin functions have a shorthand version because the names are so long. Unfortunately, there is not a lot of interesting functions available, so I wrote several new functions on my Paladin Macros page that bring it more in line with the other classes.

  -Auras**
{| class="fandom-table"
!Function
!Description
|-
|isFireResistanceAuraActive()
|Returns true if Fire Resistance Aura is active. 
Shorthand: isFiRAA()
|-
|isFrostResistanceAuraActive()
|Returns true if Frost Resistance Aura is active. 
Shorthand: isFrRAA()
|-
|isShadowResistanceAuraActive()
|Returns true if Shadow Resistance Aura is active. 
Shorthand: isSRAA()
|-
|isPaladinResistanceAuraActive()
|Returns true if Fire, Frost or Shadow Resistance Aura is active.
|-
|isDevotionAuraActive()
|Returns true if Devotion Aura is active. 
Shorthand: isDAA()
|-
|isConcentrationAuraActive()
|Returns true if Concentration Aura is active. 
Shorthand: isCAA()
|-
|isRetributionAuraActive()
|Returns true if Retribution Aura is active. 
Shorthand: isRAA()
|-
|isSanctityAuraActive()
|Returns true if Sanctity Aura is active.
|-
|isPaladinAuraActive()
|Returns true if any Aura is active.
|}

  -Blessings**
{| class="fandom-table"
!Function
!Description
|-
|isBlessingOfFreedomActive()
|Returns true if Blessing of Freedom is active on yourself. 
Shorthand: isBoFA()
|-
|isBlessingOfKingsActive()
|Returns true if Blessing of Kings is active on yourself.
|-
|isBlessingOfLightActive()
|Returns true if Blessing of Light is active on yourself. 
Shorthand: isBoLA()
|-
|isBlessingOfMightActive()
|Returns true if Blessing of Might is active on yourself. 
Shorthand: isBoMA()
|-
|isBlessingOfProtectionActive()
|Returns true if Blessing of Protection is active on yourself. 
Shorthand: isBoPA()
|-
|isBlessingOfSacrificeActive()
|Returns true if Blessing of Sacrifice is active on yourself. 
Shorthand: isBoSacA()
|-
|isBlessingOfSalvationActive()
|Returns true if Blessing of Salvation is active on yourself. 
Shorthand: isBoSalA()
|-
|isBlessingOfSanctuaryActive()
|Returns true if Blessing of Sanctuary is active on yourself. 
Shorthand: isBoSanA()
|-
|isBlessingOfWisdomActive()
|Returns true if Blessing of Wisdom is active on yourself. 
Shorthand: isBoWA()
|-
|isRegularBlessingActive()
|Returns true if Blessing of Freedom, Kings, Light, Might, Protection, Sacrifice, Salvation, Sanctuary or Wisdom is active on yourself.
|-
|isGreaterBlessingOfKingsActive()
|Returns true if Greater Blessing of Kings is active on yourself. 
Shorthand: isGBoKA()
|-
|isGreaterBlessingOfLightActive()
|Returns true if Greater Blessing of Light is active on yourself. 
Shorthand: isGBoLA()
|-
|isGreaterBlessingOfMightActive()
|Returns true if Greater Blessing of Might is active on yourself. 
Shorthand: isGBoMA()
|-
|isGreaterBlessingOfSalvationActive()
|Returns true if Greater Blessing of Salvation is active on yourself. 
Shorthand: isGBoSalA()
|-
|isGreaterBlessingOfSanctuaryActive()
|Returns true if Greater Blessing of Sanctuary is active on yourself. 
Shorthand: isGBoSanA()
|-
|isGreaterBlessingOfWisdomActive()
|Returns true if Greater Blessing of Wisdom is active on yourself. 
Shorthand: isGBoWA()
|-
|isGreaterBlessingActive()
|Returns true if Greater Blessing of Kings, Light, Might, Salvation, Sanctuary or Wisdom is active.
|-
|isBlessingActive()
|Returns true if any Blessing or Greater Blessing is active on yourself.
|}

  -Seals**
{| class="fandom-table"
!Function
!Description
|-
|isSealOfCommandActive()
|Returns true if Seal of Command is active.
|-
|isSealOfJusticeActive()
|Returns true if Seal of Justice is active. 
Shorthand: isSoJA()
|-
|isSealOfLightActive()
|Returns true if Seal of Light is active. 
Shorthand: isSoLA()
|-
|isSealOfRighteousnessActive()
|Returns true if Seal of Righteousness is active. 
Shorthand: isSoRA()
|-
|isSealOfWisdomActive()
|Returns true if Seal of Wisdom is active. 
Shorthand: isSoWA()
|-
|isSealOfTheCrusaderActive()
|Returns true if Seal of The Crusader is active. 
Shorthand: isSotCA()
|-
|isSealActive()
|Returns true if Seal of Command, Justice, Light, Righteousness, Wisdom or Crusader is active.
|}

  -Buffs**
{| class="fandom-table"
!Function
!Description
|-
|isHolyShieldActive()
|Returns true if Holy Shield is active.
|-
|isDivineProtectionActive()
|Returns true if Divine Protection is active.
|-
|isSenseUndeadActive()
|Returns true if Sense Undead is active.
|-
|isRighteousFuryActive()
|Returns true if Righteous Fury is active.
|}

  -Casting**
{| class="fandom-table"
!Function
!Description
|-
|castDivineProtection()
|Casts Divine Protection.
|-
|castDevotionAura()
|Casts Devotion Aura. 
Shorthand: castDA()
|-
|castRetributionAura()
|Casts Retribution Aura. 
Shorthand: castRA()
|-
|castFireResistanceAura()
|Casts Fire Resistance Aura. 
Shorthand: castFiRA()
|-
|castFrostResistanceAura()
|Casts Frost Resistance Aura. 
Shorthand: castFrRA()
|-
|castShadowResistanceAura()
|Casts Shadow Resistance Aura. 
Shorthand: castSRA()
|-
|castSealOfTheCrusader()
|Casts Seal of The Crusader. 
Shorthand: castSotC()
|-
|castSealOfRighteousness()
|Casts Seal of Righteousness. 
Shorthand: castSoR()
|-
|castSealOfJustice()
|Casts Seal of Justice. 
Shorthand: castSoJ()
|-
|castSealOfLight()
|Casts Seal of Light. 
Shorthand: castSoL()
|-
|castSealOfWisdom()
|Casts Seal of Wisdom. 
Shorthand: castSoW()
|-
|castJudgement()
|Casts Judgement if a seal is active.
|}

## Priest Functions
Many spells will include a group and self variant. The group version will automatically cast on your party members without removing your current target. The self version will only cast on yourself, no matter what your target is.

The group variant will cast on your target if possible, otherwise it will choose a member of your group that needs healing and cast on them. This gives you a manual override by simply targeting the person you want to heal, otherwise you can let it decide while you focus on keeping enemy targets.

  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isRenew()
|Returns true if Renew is active on your target.
|-
|isShadowWordPain()
|Returns true if Shadow Word Pain is active on your target.
|-
|isHolyFire()
|Returns true if Holy Fire is active on your target.
|-
|isMindControl()
|Returns true if Mind Control is active on your target.
|-
|isMindFlay()
|Returns true if Mind Flay is active on your target.
|-
|isShackle()
|Returns true if Shackle Undead is active on your target.
|-
|isTouchOfWeakness()
|Returns true if Touch of Weakness is active on your target.
|-
|isHexOfWeakness()
|Returns true if Hex of Weakness is active on your target.
|-
|isPowerWordFortitude()
|Returns true if Power Word: Fortitude is active on your target.
|-
|isPowerWordShield()
|Returns true if Power Word: Shield is active on your target.
|-
|isDevouringPlague()
|Returns true if Devouring Plague is active on your target.
|-
|isVampiricEmbrace()
|Returns true if Vampiric Embrace is active on your target.
|-
|isWeakenedSoul()
|Returns true if Weakened Soul is active on your target.
|-
|isInnerFireActive()
|Returns true if Inner Fire is active on yourself.
|-
|isPowerWordFortitudeActive()
|Returns true if Power Word: Fortitude is active on yourself.
|-
|isPowerWordShieldActive()
|Returns true if Power Word: Shield is active on yourself.
|}

  -Attack Spells**
{| class="fandom-table"
!Function
!Description
|-
|castPsychicScream()
|Casts Psychic Scream.
|-
|castShackle()
|Casts Shackle Undead on target if not already crowd controlled.
|-
|castMindControl()
|Casts Mind Control on target if not already active.
|-
|castShadowWordPain()
|Casts Shadow Word Pain on target if not already active.
|-
|castHolyFire()
|Casts Holy Fire on target if not already active.
|-
|castMindFlay()
|Casts Mind Flay on target if not already active.
|-
|castMindBlast()
|Casts Mind Blast.
|-
|castSmite()
|Casts Smite.
|-
|castDevouringPlague()
|Casts Devouring Plague.
|-
|castTouchOfWeakness()
|Casts Touch of Weakness on target if not already active.
|-
|castHexOfWeakness()
|Casts Hex of Weakness on target if not already active.
|-
|castVampiricEmbrace()
|Casts Vampiric Embrace on target if not already active.
|}

  -Utility**
{| class="fandom-table"
!Function
!Description
|-
|castInnerFire()
|Casts Inner Fire if not already active.
|-
|castShadowguard()
|Casts Shadowguard on target if not already active.
|-
|castPowerWordFortitude()
|Casts Power Word: Fortitude on your target if not already active. Casts on yourself if it can't be cast on your target.
|-
|castGroupPowerWordFortitude()
|
|-
|castSelfPowerWordFortitude()
|
|-
|castPowerWordShield()
|Casts Power Word: Shield on target if not already active. Casts on yourself if it can't be cast on your target.
|-
|castSelfPowerWordShield()
|
|-
|castDispelMagic()
|Casts Dispel Magic on target. If target is friendly, casts if they have a dispel-able debuff. If no target, casts on yourself.
|-
|castFriendlyDispelMagic()
|Casts Dispel Magic if there is a dispel-able debuff on yourself if an enemy is targeted, or a friend if they are targeted.
|-
|castGroupDispelMagic()
|
|-
|castSelfDispelMagic()
|
|}

  -Healing**

All the healing spells come in the same set of varieties. One to cast the best rank for the amount of damage taken, one to over-rank and under-rank, and one to cast the max rank all the time. They all will cast on yourself if it can't be cast on your target.
{| class="fandom-table"
!Function
!Description
|-
|castLesserHeal()
|Casts Lesser Heal, using the matching rank to the damage of the target.
|-
|castUnderLesserHeal()
|
|-
|castOverLesserHeal()
|
|-
|castMaxLesserHeal()
|
|-
|castHeal()
|Casts Heal, using the matching rank to the damage of the target.
|-
|castUnderHeal()
|
|-
|castOverHeal()
|
|-
|castMaxHeal()
|
|-
|castGreaterHeal()
|Casts Greater Heal, using the matching rank to the damage of the target.
|-
|castUnderGreaterHeal()
|
|-
|castOverGreaterHeal()
|
|-
|castMaxGreaterHeal()
|
|-
|castPriestHeal()
|Casts either Lesser Heal, Heal or Greater Heal depending on damage of target.
|-
|castUnderPriestHeal()
|
|-
|castOverPriestHeal()
|
|-
|castMaxPriestHeal()
|
|-
|castGroupPriestHeal()
|Group variant of castPriestHeal().
|-
|castUnderGroupPriestHeal()
|
|-
|castOverGroupPriestHeal()
|
|-
|castMaxGroupPriestHeal()
|
|-
|castFlashHeal()
|Casts Flash Heal.
|-
|castUnderFlashHeal()
|
|-
|castOverFlashHeal()
|
|-
|castMaxFlashHeal()
|
|-
|castRenew()
|Casts Renew if not on your target.
|-
|castSelfRenew()
|
|}

## Rogue Functions
  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isComboPointsFull()
|Returns true if you have 5 combo points.
|-
|isComboPoints(number)
|Returns true if you have the given number of combo points or greater.
|-
|isHemorrhage()
|Returns true if the target has Hemorrhage active.
|-
|isStealthActive()
|Returns true if you are in stealth.
|-
|isSliceActive()
|Returns true if Slice and Dice is active.
|-
|isAdrenalineRushActive()
|Returns true if Adrenaline Rush is active.
|-
|isBladeFlurryActive()
|Returns true if Blade Flurry is active.
|-
|isEvasionActive()
|Returns true if Evasion is active.
|-
|isSprintActive()
|Returns true if you are sprinting.
|}

  -Poisons**

Valid options for the hand variable are "main" or "off". If you pass nothing to the function, it returns true if the poison is active on either hand.
{| class="fandom-table"
!Function
!Description
|-
|isCripplingPoisonActive(hand)
|Returns true if Crippling Poison is active on the given hand.
|-
|isDeadlyPoisonActive(hand)
|Returns true if Deadly Poison is active on the given hand.
|-
|isInstantPoisonActive(hand)
|Returns true if Instant Poison is active on the given hand.
|-
|isMindnumbingPoisonActive(hand)
|Returns true if Mindnumbing Poison is active on the given hand.
|-
|isWoundPoisonActive(hand)
|Returns true if Wound Poison is active on the given hand.
|-
|isPoisonActive(hand)
|Returns true if Crippling, Deadly, Instant, Mindnumbing or Wound Poison is active on the given hand.
|}

  -Attacks**
{| class="fandom-table"
!Function
!Description
|-
|castSinisterStrike()
|Casts Sinister Strike.
|-
|castCheapShot()
|Casts Cheap Shot.
|-
|castGarrote()
|Casts Garrote.
|-
|castBackstab()
|Casts Backstab.
|-
|castKick()
|Casts Kick.
|-
|castColdBlood()
|Casts Cold Blood.
|-
|castEviscerate()
|Casts Eviscerate.
|-
|castRiposte()
|Casts Riposte.
|-
|castSliceAndDice()
|Casts Slice and Dice.
|-
|castHemorrhage()
|Casts Hemorrhage.
|-
|castGhostlyStrike()
|Casts Ghostly Strike.
|-
|castVanish()
|Casts Vanish.
|-
|castAmbush()
|Casts Ambush.
|-
|castKidneyShot()
|Casts Kidney Shot.
|-
|castBladeFlurry()
|Casts Blade Flurry.
|-
|castGouge()
|Casts Gouge.
|-
|castStealth()
|Enters Stealth, but will not exit stealth.
|-
|unStealth()
|Exits Stealth.
|-
|castFeint()
|Casts Feint. castFeint(1) will only cast Feint if you are in a party.
|-
|castBlind()
|Casts Blind. castBlind(number) will only cast Blind if you have more than number of required powders in your inventory.
|}

## Shaman Functions
Unfortunately, there are only a few functions for the Shaman class.
{| class="fandom-table"
!Function
!Description
|-
|isRockbiterWeaponActive()
|Returns true if Rockbiter Weapon is active on yourself.
|-
|isFlametongueWeaponActive()
|Returns true if Flametongue Weapon is active on yourself.
|-
|isFrostbrandWeaponActive()
|Returns true if Frostbrand Weapon is active on yourself.
|-
|isWindfuryWeaponActive()
|Returns true if Windfury Weapon is active on yourself.
|-
|isShamanWeaponBuffActive()
|Returns true if Rockbiter, Flametongue, Frostbrand or Windfury Weapon are active on yourself.
|-
|isFarsightActive()
|Returns true if Far Sight is active on yourself.
|-
|isWaterBreathingActive()
|Returns true if Water Breathing is active on yourself.
|-
|isWaterWalkingActive()
|Returns true if Water Walking is active on yourself.
|-
|isLightningShieldActive()
|Returns true if Lightning Shield is active on yourself.
|}

## Warlock Functions
  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isCurseOfAgony()
|Returns true if Curse of Agony is active on target. 
Shorthand: isCoA()
|-
|isCurseOfDoom()
|Returns true if Curse of Doom is active on target. 
Shorthand: isCoD()
|-
|isCurseOfShadow()
|Returns true if Curse of Shadow is active on target. 
Shorthand: isCoS()
|-
|isCurseOfTheElements()
|Returns true if Curse of The Elements is active on target. 
Shorthand: isCotE()
|-
|isCurseOfWeakness()
|Returns true if Curse of Weakness is active on target. 
Shorthand: isCoW()
|-
|isCurseOfRecklessness()
|Returns true if Curse of Recklessness is active on target. 
Shorthand: isCoR()
|-
|isCurseOfTongues()
|Returns true if Curse of Tongues is active on target. 
Shorthand: isCoT()
|-
|isCurseOfExhaustion()
|Returns true if Curse of Exhaustion is active on target. 
Shorthand: isCoE()
|-
|isSiphonLife()
|Returns true if Siphon Life is active on target.
|-
|isShadowburn()
|Returns true if Shadowburn is active on target.
|-
|isFeared()
|Returns true if Fear, Fear: Howl of Terror, Fear: Psychic Scream or Fear: Scare Beast are active on the target.
|-
|isCursed()
|Returns true if Curse of Agony, Tongues, Shadow, Elements, Exhaustion, Weakness, Doom or Recklessness is active on the target.
|-
|isCorruption()
|Returns true if Corruption is active on target.
|-
|isImmolate()
|Returns true if Immolate is active on target.
|-
|isAmplifyCurseActive()
|Returns true if Amplify Curse is active on yourself.
|-
|isDemonArmorActive()
|Returns true if Demon Armor is active on yourself.
|-
|isNightfallActive()
|Returns true if Nightfall is active on yourself.
|}

  -Curses**
{| class="fandom-table"
!Function
!Description
|-
|castCurseOfAgony()
|Casts Curse of Agony on your target. 
Shorthand: castCoA()
|-
|castCurseOfDoom()
|Casts Curse of Doom on your target. 
Shorthand: castCoD()
|-
|castCurseOfShadow()
|Casts Curse of Shadow on your target. 
Shorthand: castCoS()
|-
|castCurseOfTheElements()
|Casts Curse of The Elements on your target. 
Shorthand: castCotE()
|-
|castCurseOfWeakness()
|Casts Curse of Weakness on your target. 
Shorthand: castCoW()
|-
|castCurseOfExhaustion()
|Casts Curse of Exhaustion on your target. 
Shorthand: castCoE()
|-
|castCurseOfRecklessness()
|Casts Curse of recklessness on your target. 
Shorthand: castCoR()
|-
|castCurseOfTongues()
|Casts Curse of Tongues on your target. 
Shorthand: castCoT()
|}

  -Crowd Control**
{| class="fandom-table"
!Function
!Description
|-
|castFear()
|Casts Psychic Scream if a Priest, Scare Beast if a Hunter and Fear if a Warlock.
|-
|castHowlOfTerror()
|Casts Howl of Terror.
|-
|castBanish()
|Casts Banish.
|-
|castDoomBanish()
|Casts Curse of Doom, then casts a rank of Banish that has a duration less than the duration left on the Curse of Doom.
|}

  -Buffs**
{| class="fandom-table"
!Function
!Description
|-
|castDemonArmor()
|Casts Demon Armor.
|-
|castAmplifyCurse()
|Casts Amplify Curse.
|-
|castFelDomination()
|Casts Fel Domination.
|-
|castCorruption()
|Casts Corruption on your target.
|-
|castShadowWard()
|Casts Shadow Ward.
|}

  -Utility**
{| class="fandom-table"
!Function
!Description
|-
|Zorlen_DrainSoulNow()
|Returns true if it is a good time to drain your target's soul.
|-
|castDrainSoul()
|Targets an enemy that will give XP and interrupts any current casting. If you have over 55% mana, it will cast Drain Soul. If you have less than 55% mana and your pet has 95% mana, it casts Dark Pact. Otherwise, it casts Life Tap.
|-
|castMaxDrainSoul()
|Same, but will only cast the max rank of Drain Soul.
|-
|castLowestDrainSoul()
|Same, but will only cast the lowest rank of Drain Soul.
|-
|castDarkPact()
|Casts Dark Pact.
|-
|castLifeTap()
|Casts Life Tap.
|-
|castAutoTap()
|Casts Dark Pact or Life Tap when they are most appropriate.
|-
|castDarkPactAndLifeTap()
|Casts Dark Pact or Life Tap when they are most appropriate.
|-
|castSelfSacrifice()
|Allows a quick suicide. Other functions that use Life Tap will stop if your mana is full. The ability for a warlock to be able to kill himself can be helpful to escape the 10% durability hit when killed in PvE by a mob, or to get to a hard to reach location by killing your warlock within corpse resurrecting distance to the desired location.
|-
|castNightfall()
|If Nightfall is active, casts Shadow Bolt. If you don't have Shadow Bolt and the enemy is near death or Corrupted, casts Drain Life, otherwise casts Corruption.
|}

  -Attacks**
{| class="fandom-table"
!Function
!Description
|-
|castImmolate()
|Casts Immolate on your target.
|-
|castConflagrate()
|Casts Conflagrate if the target has Immolate active on it.
|-
|castShadowBolt()
|Casts Shadow Bolt on your target if not immune.
|-
|castShadowburn()
|Casts Shadow Burn on your target if not immune.
|-
|castSearingPain()
|Casts Searing Pain on your target if not immune.
|-
|castDeathCoil()
|Casts Death Coil on your target.
|-
|castSiphonLife()
|Casts Siphon Life on your target.
|-
|castDrainLife()
|Casts Drain Life on your target if not immune.
|-
|castDrainMana()
|Casts Drain Mana on your target if it uses mana.
|-
|castHellfire()
|Casts Hellfire.
|-
|castRainOfFire()
|Casts Rain of Fire.
|-
|castSoulFire()
|Casts Soul Fire on your target if not immune.
|}

  -DOT Spam**

These functions will intelligently apply every Damage over Time you have to a particular target. All the alternates let you pick any set of spells to cast.
{| class="fandom-table"
!Function
!Description
|-
|Zorlen_WarlockDotSpam()
|Apply every DOT to a target on repeated invocation.
|-
|Zorlen_WarlockDotSpamWithoutFire()
|
|-
|Zorlen_WarlockDotSpamWithoutDrain()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrain()
|
|-
|Zorlen_WarlockDotSpamWithoutSiphon()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrSiphon()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrSiphon()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrSiphon()
|
|-
|Zorlen_WarlockDotSpamWithoutSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutSiphonOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrSiphonOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrSiphonOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrSiphonOrSoul()
|
|-
|Zorlen_WarlockDotSpamWithoutBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutSiphonOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrSiphonOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrSiphonOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrSiphonOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutSiphonOrSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrSiphonOrSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutDrainOrSiphonOrSoulOrBurn()
|
|-
|Zorlen_WarlockDotSpamWithoutFireOrDrainOrSiphonOrSoulOrBurn()
|
|}

  -Warlock Pet Spells**

All pet skills include functions to turn autocasting on and off. This is identical to using the Pet Bar, but can be done from a macro.
{| class="fandom-table"
!Function
!Description
|-
|isFireShield()
|Returns true if Fire Shield is active on the target.
|-
|zFireShield()
|Pet casts Fire Shield.
|-
|zFireShieldAutocastOn()
|
|-
|zFireShieldAutocastOff()
|
|-
|zBloodPact()
|Pet casts Blood Pact.
|-
|zBloodPactAutocastOn()
|
|-
|zBloodPactAutocastOff()
|
|-
|zFirebolt()
|Pet casts Firebolt.
|-
|zFireboltAutocastOn()
|
|-
|zFireboltAutocastOff()
|
|-
|zPhaseShift()
|Pet casts Phase Shift.
|-
|zPhaseShiftAutocastOn()
|
|-
|zPhaseShiftAutocastOff()
|
|-
|zConsumeShadows()
|Pet casts Consume Shadows.
|-
|zAutoConsumeShadows()
|Pet casts Consume Shadows based on their health.
|-
|zSacrifice()
|Pet casts Sacrifice.
|-
|zAutoSacrifice()
|Pet casts Sacrifice based on the health of the pet and player.
|-
|zSuffering()
|Pet casts Suffering.
|-
|zSufferingAutocastOn()
|
|-
|zSufferingAutocastOff()
|
|-
|zTorment()
|Pet casts Torment.
|-
|zTormentAutocastOn()
|
|-
|zTormentAutocastOff()
|
|-
|zDevourMagic()
|Pet casts Devour Magic.
|-
|zDevourMagicAutocastOn()
|
|-
|zDevourMagicAutocastOff()
|
|-
|zParanoia()
|Pet casts Paranoia.
|-
|zParanoiaAutocastOn()
|
|-
|zParanoiaAutocastOff()
|
|-
|zSpellLock()
|Pet casts Spell Lock.
|-
|zSpellLockAutocastOn()
|
|-
|zSpellLockAutocastOff()
|
|-
|zTaintedBlood()
|Pet casts Tainted Blood.
|-
|zTaintedBloodAutocastOn()
|
|-
|zTaintedBloodAutocastOff()
|
|-
|zLashOfPain()
|Pet casts Lash of Pain.
|-
|zLashOfPainAutocastOn()
|
|-
|zLashOfPainAutocastOff()
|
|-
|zSeduction()
|Pet casts Seduction if it won't break crowd control.
|-
|zSeductionAutocastOn()
|
|-
|zSeductionAutocastOff()
|
|-
|zSoothingKiss()
|Pet casts Soothing Kiss.
|-
|zSoothingKissAutocastOn()
|
|-
|zSoothingKissAutocastOff()
|
|-
|zLesserInvisibility()
|Pet casts Lesser Invisibility.
|-
|zLesserInvisibilityAutocastOn()
|
|-
|zLesserInvisibilityAutocastOff()
|
|}

## Warrior Functions
  -Condition States**

This first group of functions check the state of the conditions you can have on yourself or your target.
{| class="fandom-table"
!Function
!Description
|-
|isSunderFull()
|Returns true if Sunder Armor is stacked 5 times on the target.
|-
|isSunder()
|Returns true if Sunder Armor is active on your target.
|-
|isDeepWounds()
|Returns true if Deep Wounds is active on your target.
|-
|isRend()
|Returns true if Rend is active on your target.
|-
|isHamstring()
|Returns true if Hamstring is active on your target.
|-
|isPiercingHowl()
|Returns true if Piercing Howl is active on your target.
|-
|isDemoralized()
|Returns true if Demoralize is active on your target.
|-
|isThunderClap()
|Returns true if Thunder Clap is active on your target.
|-
|isDisarm()
|Returns true if Disarm is active on your target.
|-
|isEnrageActive()
|Returns true if Enrage is active.
|-
|isShieldBlockActive()
|Returns true if Shield Block is active.
|-
|isBattleShoutActive()
|Returns true if Battle Shout is active.
|-
|isBattleStance()
|Returns true if you are in Battle Stance.
|-
|isDefensiveStance()
|Returns true if you are in Defensive Stance.
|-
|isBerserkerStance()
|Returns true if you are in Berserker Stance.
|}

  -Stances**
{| class="fandom-table"
!Function
!Description
|-
|castBattleStance()
|Switches to Battle Stance.
|-
|castDefensiveStance()
|Switches to Defensive Stance.
|-
|castBerserkerStance()
|Switches to Berserker Stance.
|}

  -Debuffs**
{| class="fandom-table"
!Function
!Description
|-
|castSunderArmor()
|Casts Sunder Armor on the target unless it is already maxed out.
|-
|castUnlimitedSunderArmor()
|Casts Sunder Armor on the target even if it is maxed out.
|-
|castDemoralizingShout()
|Casts Demoralizing Shout.
|-
|castPiercingHowl()
|Casts Piercing Howl.
|}

  -Buffs**
{| class="fandom-table"
!Function
!Description
|-
|castBattleShout()
|Casts Battle Shout.
|-
|castSweepingStrikes()
|Casts Sweeping Strikes.
|-
|castDeathWish()
|Casts Death Wish.
|-
|castBloodthirst()
|Casts Bloodthirst.
|-
|castShieldBlock()
|Casts Shield Block.
|-
|castBerserkerRage()
|Casts Berserker Rage.
|-
|castBloodrage()
|Casts Bloodrage if you have over 20% health.
|}

  -Attacks**
{| class="fandom-table"
!Function
!Description
|-
|castMortalStrike()
|Casts Mortal Strike on your target.
|-
|castShieldSlam()
|Casts Shield Slam on your target.
|-
|castConcussionBlow()
|Casts Concussion Blow on your target.
|-
|castCharge()
|Casts Charge on your target.
|-
|castTaunt()
|Casts Taunt if the target is not targeting you.
|-
|castMockingBlow()
|Casts Mocking Blow if the target is not targeting you.
|-
|castIntercept()
|Casts Intercept on your target.
|-
|castOverpower()
|Casts Overpower on your target.
|-
|castRevenge()
|Casts Revenge on your target.
|-
|castCleave()
|Casts Cleave.
|-
|castWhirlwind()
|Casts Whirlwind, but only if a better spell isn't available.
|-
|castRend()
|Casts Rend on your target.
|-
|castDisarm()
|Casts Disarm on your target.
|-
|castHamstring()
|Casts Hamstring on your target.
|-
|castExecute()
|Casts Execute on your target.
|-
|castThunderClap()
|Casts Thunder Clap, but only if a better spell isn't available.
|-
|castShieldBash()
|Casts Shield Bash on your target.
|-
|castPummel()
|Casts Pummel on your target.
|-
|castHeroicStrike()
|Casts Heroic Strike.
|-
|castLastStand()
|Casts Last Stand unless your health is less than 30%.
|-
|castEnrage()
|If not already Enraged and your health is over 20%, tries to induce Enrage by clearing your target and sitting. Use cautiously, as it makes it more likely for you to get critted.
|-
|Zorlen_TargetEnemyThenChargeOrIntercept()
|Targets an enemy and casts Charge or Intercept.
|-
|castChargeAndIntercept()
|Casts Charge or Intercept.
|-
|swapChargeAndIntercept()
|Casts Charge or Intercept and then returns to either Battle or Berserker Stance.
|-
|forceChargeAndIntercept()
|
|-
|castBerserkerRageSwap()
|Casts Berserker Rage and returns to the stance you had been in.
|-
|forceBerserkerRage()
|Will only go to Berserker Stance if Berserker Rage can be cast.
|-
|Zorlen_WarriorAOE()
|Will use all the different Area of Effect spells.
|}
