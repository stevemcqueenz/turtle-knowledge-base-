---
title: "Sound Mods"
url: "https://turtle-wow.fandom.com/wiki/Sound_Mods"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-08T11:21:28Z"
fetched: "2026-09-10T07:39:40Z"
is_turtle_content: false
patch: null
categories: ["Mods", "Pages with syntax highlighting errors"]
---
# Sound Mods

Modding the Sound files of your game can be done a bit differently than with [Client Mods](Client Mods).

## Available Mods
### NoErrorSounds
When spamming the cast button for spells in the 1.12 client, you will hear interface or "fizzle" sounds repeated again and again and again. If this annoys you, this mod will fix that by removing these sounds when casting, but also remove these sounds in the game's main menu.

Download the mod from https://github.com/Macumbafeh/NoErrorSounds/archive/refs/heads/main.zip (alternative Mirror: https://www.mediafire.com/file/hrwa3r5vp9qlbej/NoErrorSounds.zip/file) and use 7zip to extract the Sound folder inside your Turtle WoW folder, alongside your WoW.exe. If you did this correctly, the mod will work and your folder/file structure will look like:

<syntaxhighlight lang="None">
TurtleWoW
├── Sound
│   ├── interface
│   │   ├── iUiInterfaceButtonA.wav
│   │   ├── uChatScrollButton.wav
│   │   ├── uEscapeScreenClose.wav
│   │   └── uEscapeScreenOpen.wav
│   └── Spells
│       └── Fizzle
│           ├── FizzleFireA.wav
│           ├── FizzleFrostA.wav
│           ├── FizzleHolyA.wav
</syntaxhighlight>

### MechaStrider Muffler
This silences the sound of the Mechanostrider mounts that Gnome players use by default, but it will also effect mechanostrider enemies e.g. the mech enemies in Gnomeregan. 

Download [this file](https://www.mediafire.com/file/w8z42zv34x3p2j2/MechaStrider_Muffler_%2528Fixed%2529.zip), then extract the ZIP and place the Sound folder into your *Turtle WoW* folder.  Once installed, you should have a folder/file structure like this:

<syntaxhighlight lang="None">Turtle WoW
├── Sound
│   └── creature
│       └── MechaStrider
│           └── MechaStriderLoop.wav</syntaxhighlight>To silence sounds emitted when mounted, you need to silence sounds for *GnomeSpiderTank*. Download this [file](https://www.mediafire.com/file/pzaavipck0k81gc/GnomeSpiderTank.zip/file) and ensure that files are placed like this:<syntaxhighlight>Turtle WoW
├── Sound
│   └── creature
│       └── GnomeSpiderTank
│           └── GnomeSpiderTankFootstepA.wav
│           └── GnomeSpiderTankFootstepB.wav
│           └── GnomeSpiderTankFootstepC.wav
│           └── GnomeSpiderTankFootstepD.wav
│           └── GnomeSpiderTankFootstepE.wav
│           └── GnomeSpiderTankFootstepF.wav</syntaxhighlight>

### No Combat Error Voice Lines.
This mod replaces voice lines like "Not enough rage" with empty sound files, but keeps voice lines such as "I am out of range". 

The zip is structured so you can just unzip it into your Turtle WoW folder, and it will be in the right place.

Download here: https://www.nexusmods.com/worldofwarcraft/mods/847

### No error sounds
This mod replaces ALL voice lines like "No energy", "No mana", "'Not enough rage", "Spell is not ready yet" with empty sound files.

The archive needs to be extracted into the main game folder, so the folder structure looks like this:<syntaxhighlight>
Turtle WoW
├── Sound
│   └── Character
│       └──Dwarf
│       └──Gnome
│       └──...
</syntaxhighlight>Download [here](https://www.mediafire.com/file/zjosnlnyj2i4i0d/mute-all-errors.zip/file).

### Gun With Silencer
Gun Silencer mod that replace Blizzard's ear deafening default gun sounds.

https://www.wowinterface.com/downloads/info12060-GunSilencerSuppressor.html

### Make Guns Sound Like Bows
This mod replaces the gun sounds with the bow sounds

https://www.wowinterface.com/downloads/info8148-MakeGunsSoundLikeBows.html

### M1 Gun Sounds
This mod replaces the in-game default gun sounds with firing and reloading sounds from a M1 Garand.

https://www.wowinterface.com/downloads/info18934-M1GunSounds.html

### FishPing
This changes the sound when a fish is on the line to become more noticeable.

https://github.com/notsureawake/FishPing

### Owl Pets
If you want to mute the flaps on your owl pet (also works on other flapping pets like eagles), these are the file locations for them:<syntaxhighlight>
Data\Sound\Creature\DragonWhelp\mDragonWhelpWingFlapA.wav
Data\Sound\Creature\DragonWhelp\mDragonWhelpWingFlapB.wav
Data\Sound\Creature\DragonWhelp\mDragonWhelpWingFlapC.wav
Data\Sound\Creature\DragonWhelp\mDragonWhelpWingFlapD.wav
Data\Sound\Creature\DragonWhelp\mDragonWhelpWingFlapE.wav
</syntaxhighlight>You'll need to create the folders and use muted .wav files for all of them.

### Login Screen Music
<syntaxhighlight>
Data\Sound\Music\GlueScreenMusic\wow_main_theme.wav
</syntaxhighlight>

### Warlock Muted Demons
Muted wav files that the WoW Client will load instead of the real ones. Warlock Demons will stop talking.

https://github.com/spzilyk/Warlock-Muted-Demons

### PlaySoundFile Macros
These script commands is useful to help you find sound file paths:

- [Other Item Sounds](https://wowwiki-archive.fandom.com/wiki/PlaySoundFile_macros_-_other_item_sounds)
- [Other Spells Sounds](https://wowwiki-archive.fandom.com/wiki/PlaySoundFile_macros_-_other_spells_sounds)
- [Other Doodad Sounds](https://wowwiki-archive.fandom.com/wiki/PlaySoundFile_macros_-_other_doodad_sounds)
- [Other Sounds](https://wowwiki-archive.fandom.com/wiki/PlaySoundFile_macros_-_other_sounds)

You can find associated sounds to spells, NPCs, items and other in-game sources by checking [Wowhead](https://www.wowhead.com/classic/database). 

You can also find most sounds here: https://github.com/fondlez/wow-sounds 

## See Also
- [Addons](Addons)
- [Client Fixes and Tweaks](Client Fixes and Tweaks)
- [Client Mods](Client Mods)
- [Making Custom Sounds](https://turtle-wow.fandom.com/wiki/Making_Custom_Sounds)
