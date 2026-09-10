---
title: "Playing Turtle-Wow on Linux"
url: "https://turtle-wow.fandom.com/wiki/Playing_Turtle-Wow_on_Linux"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-03T10:13:18Z"
fetched: "2026-09-10T07:39:25Z"
is_turtle_content: false
patch: null
categories: ["Pages with syntax highlighting errors"]
---
# Playing Turtle-Wow on Linux

# Playing Turtle Wow on Linux
It is very easy to play Turtle Wow on Linux, 

### **Setup**
You can install the Wine with the following commands for your Distro or open up your graphical package manager and install it. 

#### **Ubuntu/Debian**
<syntaxhighlight lang="bbcode">
sudo apt install wine
</syntaxhighlight>

#### **Arch/Manjaro/EndeavourOS**
<syntaxhighlight lang="bbcode">
sudo pacman -S wine
</syntaxhighlight>

Then inside the Turtle_Wow folder run this command to play the game<syntaxhighlight lang="bbcode">
wine WoW.exe
</syntaxhighlight>

## Lutris
Lutris have a much better working installer to setup Turtle then out of the box wine and windows. Working very smooth on Linux Mint with higher fps and no stuttering.

### Setup
Install Lutris, open Lutris, click the ➕ in the top left corner, then click 🔍 and search for [wrath of the lich king](https://lutris.net/games/world-of-warcraft-wrath-of-the-lich-king/) and install this installer. Download and extract the client from the turtle website and install it with the Wrath installer. To get the add-ons to work you need to move all the add-on files from the turtle client to the address below. This is also where you install your addons now.<syntaxhighlight>
world-of-warcraft-wrath-of-the-lich-king/drive_c/world_of_warcraft_wrath_of_the_lich_king/Interface
</syntaxhighlight>

### Git Addons Manager
you can install and use Woblight's Git Addon Manager to install and update any addons you use quick and easy. [Download for Linux (flatpak)](https://gitlab.com/woblight/flatpak-repo/-/raw/master/GitAddonsManager.flatpakref?ref_type=heads&inline=false) 

## Steam Deck
Playing on the Steam Deck is equally as easy and you can add the game your Steam Library as a non Steam game with the following instructions

# Exit back to desktop mode
# Open Steam
# Click add Game
# Look for WoW.exe in the Turtle_Wow folder,
# Click add selected program
# Right click wow.exe and to the properties,  Compatibility and force the use of a specific Steam Play Compatibility Tool and set it to use Proton Experimental
# While you are in the Properties of Wow.exe go back to Shortcut and rename Wow.exe to Wow Turtle  

You are ready to play! you can rename the game and add custom assets like a icon, banner, to the Turtle Wow Steam page make the game look nicer!

- Published by Corey Bruce

## TWOW-Setup
This script makes it easy to install tDF, pfQuest, pfQuest-turtle, SuperAPI, and SuperWoW on Linux.

### Installation
# Install twow from Lutris
# Download this script: https://github.com/TheLinuxITGuy/TWOW-Setup
# From a Terminal:
## <code>chmod u+x TWOW-Setup.sh</code>
## Type: <code>./TWOW-Setup.sh</code>
## Point Lutris to <code>SuperWoWlauncher.exe</code>
## Start Turtle WoW and enjoy
