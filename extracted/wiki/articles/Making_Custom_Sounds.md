---
title: "Making Custom Sounds"
url: "https://turtle-wow.fandom.com/wiki/Making_Custom_Sounds"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T16:15:29Z"
fetched: "2026-09-10T07:39:12Z"
is_turtle_content: false
patch: null
categories: ["Mods"]
---
# Making Custom Sounds

## Making Custom Sounds
Useful if you found different sounds somewhere. Or if you want to adjust the volume etc.

You can share if you made something awesome. You can just upload it in a git on [GitHub](https://github.com/).

### The Right Format
- The sound files must be in the .wav format
- The sound files must be mono. Not stereo.
- The sound files must be in specific sampling rate: 22050 Hz.
- The recording format must be: 32-bit float. ( Not entirely sure about this one, but I'll show you how to do it anyway, export as signed 16 - bit pcm )

Neither the default sounds nor the custom sounds will play if the file is formatted wrong.

### How to check that the sound effect is the right format:
You need to install a program called [Audacity](https://www.audacityteam.org/).

Audacity doesn't work with .mp3 files out of the box (because licensing) so you must install the "LAME encoder plug-in" as well.

Here's how: https://www.wikihow.com/Convert-WAV-Files-Into-MP3-with-Audacity

1) Open the file in Audacity.

2) Look in the box, to the left of the waveform. It displays the format information of the sound effect.

http://imgur.com/CCvAnyQ (This is wrong - See "How to Convert Files")

https://i.imgur.com/O5kOYyE.png (This is right, export as .wav and put in the directory)

### How To Convert Files
Open the sound effect with Audacity.

File > Open... > Navigate to file.

Change from Stereo to Mono

1) Press CTRL + A to select the whole track.

2) Click Track in the top bar/ menu thing.

3) Select Turn into Mono Track. (or whatever it's called - see picture)

http://imgur.com/WYfKUhn

Change Recording Format.

1) Click the downward triangle to the left of the track.

2) go to "Choose recording format"

3) Choose 32-bit float

http://imgur.com/0WT2wm8

Change Sample Rate

1) Press CTRL + A to select the whole track.

2) Press "Track" in the top bar / menu thing.

3) Press "New Sample Rate"

http://imgur.com/NSbnv0S

4) Type 22050 in the box and click ok.

http://imgur.com/NsfOIMo

Export as .wav file

1) File > Export Audio (CTRL + Shift + E)

http://imgur.com/BkViiOD

2) Give a proper name and choose .wav format. (According to step 2 below)

http://imgur.com/6zSZLtM

### 1) Making the Right Folders
#### The folder structure:
** World of Warcraft\Sound\Item\Weapons\Gun**

If you don't have these folders already, make them.

The "Gun" folder is where we're going to put the new sound effects.

(Picture coming... maybe)

### 2) Make Sure the Files Are Named Correctly
You can have up to 3 different "firing" sound effects and 3 different "reload" sound effects at the same time.

Wow is alternating between these three, so it doesn't get too repetitive.

#### You must name them accordingly:
##### Gun Fire Sound Effects:
GunFire01.wav

GunFire02.wav

GunFire03.wav

##### Gun Reload Sound Effects:
GunLoad01.wav

GunLoad02.wav

GunLoad03.wav

The client will use the original sound effect if you don't replace it. For example: If you don't put a sound effect called "GunFire03.wav", the game will use the default "GunFire03.wav".

If you only want two different effects instead of three, you must duplicate one of them and name it either "GunFire01.wav", "GunFire02.wav" or "GunFire03.wav".

Otherwise the client will play the default sounds. However, if that's what you desire you can do that as well.

### How to Change the Volume of Sound Effects
1) Open the sound effect in Audacity.

2) Press CTRL + A (To select the whole track)

3) Click "Effect" in the top menu

4) Click Amplify

5) A pop-up box appears where you can type in db (decibels) - Type in a negative number and click OK. For example -5.

6) Volume is lower. Experiment with different numbers. Yes, you can use CTRL + Z

### How To Reset to Default Sound Effects:
Remove the sound files from the "Gun" folder, that you created, or delete the "Sound" folder that you created.

#### Sound Files that you can download:
##### Gun With Silencer
Gun Silencer mod that replace Blizzard's ear deafening default gun sounds.

https://www.wowinterface.com/downloads/info12060-GunSilencerSuppressor.html

##### Make Guns Sound Like Bows
This mod replaces the gun sounds with the bow sounds

https://www.wowinterface.com/downloads/info8148-MakeGunsSoundLikeBows.html

##### M1 Gun Sounds
This mod replaces the in-game default gun sounds with firing and reloading sounds from a M1 Garand.

https://www.wowinterface.com/downloads/info18934-M1GunSounds.html

##### No Error Sounds
This mod disables the global cooldown and fizzle sound

https://github.com/mrrosh/NoErrorSounds

##### FishPing
This changes the sound when a fish is on the line to become more noticeable.

https://github.com/notsureawake/FishPing
