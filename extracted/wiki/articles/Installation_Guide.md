---
title: "Installation Guide"
url: "https://turtle-wow.fandom.com/wiki/Installation_Guide"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T17:35:15Z"
fetched: "2026-09-10T07:39:02Z"
is_turtle_content: false
patch: null
categories: ["Guides"]
---
# Installation Guide

Here's a compilation of instructions to install the Game manually onto their operating system.
## Account and Client
# Load up the computer you wish to play on
# Visit https://turtlecraft.gg
# Click the Download button
# Use the Direct Download link to start downloading the game, about 8GB . You can try the other downloads like Google Drive, Mediafire. It doesn't matter which one you choose, they are the same download, but one of the options might let you download faster. If you know what you are doing with Torrenting, try the torrent option and load it with a torrent client like [Deluge](https://dev.deluge-torrent.org/wiki/Download).
# While the download is in progress, head back to https://turtlecraft.gg and click on the green Sign Up button. 
- Remember your account name and password, as you will use them to log into the game. Keep these secret, and please we suggest that you do not reuse a password you have used elsewhere!
- Your email can be used for password resets and important communication from the staff.
- The forum username will be publicly displayed if you decide to log in and post with this account on the Turtle WoW forums at https://forum.turtlecraft.gg/

Once you have the .zip downloaded and your account ready, setting your game up will differ a bit depending on your operating system:

## Windows
# Open the turtle wow .zip file with your file explorer
# Extract the .zip. This can be wherever you want it to be placed, and we recommend it be somewhere in your user folder, but just make sure that you do NOT place turtle wow's folder into your system's C:\Program Files folder.
# Go inside the folder, right click the WoW.exe, and create a shortcut onto your desktop. You should make a shortcut to WoWFoV.exe instead, if you use a widescreen 16:9 monitor.
# Go to your desktop, and launch the game with the shortcut you made. Log in and enjoy.
## macOS (Silicon, M Series)
<nowiki>**</nowiki> Options are Parallels and VMware Fusion Pro. Parallels is paid software and VMware Fusion Pro is free. 

- ----

### Intel Macs
Some Intel Mac users have reported success with Crossover/Wineskin, so if you're a little more technical, feel free to give that a try. For Intel Macs running Catalina and newer, Porting Kit has successfully run Turtle WoW. After installing Porting Kit, use the following steps:

# Go to "Add Application"
# Select the Turtle WoW executable
# At the "Advanced Settings" screen, set the Engine Version to WS11WineCX64Bit19.0.2
# Proceed with the installation, default settings for everything else are fine
# Run Turtle WoW through Porting Kit

## Steam Deck
If you installed Windows onto your steam deck, just follow [#Windows](#Windows). These instructions are for people who are using the Steam Deck's default setup, where we will use Steam's UI to manage this game.

# We assume you already have used the Deskop Mode of your steam deck to complete the [#Account and Client](#Account and Client) steps, and that you now have your account ready and the .zip downloaded
# In desktop mode, extract the .zip to a folder of your choice. 
# Copy down the full path to your WoW.exe
# Pull up Steam's Desktop mode
# Go to Library -> on the bottom left Add A Game -> Add a new non-steam game. 
# Hit browse, and locate the WoW.exe. You can also select WoWFoV.exe instead, if you use a widescreen 16:9 monitor.
# Select this new game entry that has been created -> click the Gear icon -> select Properties -> Compatibility -> and check the option "Force the use of a specific Steam Play compatibility tool" option
# On the dropdown, choose Proton Experimental.
# Close the settings, and launch Turtle WoW and enjoy.

Optionally, you can download nice [Turtle WoW banners from the Steam Grid DB](https://www.steamgriddb.com/search/grids?term=turtle+wow), and add these on the Steam entry by Right clicking the entry -> Manage -> Set Custom Artwork, and on the game's page by Right clicking the top -> Set Custom Background

If you want to play Turtle WoW in the Steam Deck's handheld mode, we suggest using the [ShaguController](https://shagu.org/ShaguController/) addon or [Ryac's Steam Deck UI](https://github.com/Ryac1/Ryac_TW_SteamDeck_UI) to tweak the UI to be better suited for this, and it will set default keybindings that line up better with Steam's default controller layout. See [#Addons](#Addons) for further instructions on how to install Addons.

If in the future, you ever would like to move the location of your game, move the folder in your Desktop Mode, and be sure to update this Steam game entry with the new location.

## Linux+Lutris
The [#Steam Deck](#Steam Deck) instructions will work for Linux users that manage all their games through Steam. However, for general Linux users, we have [Lutris](https://lutris.net/) as a better alternative for managing all kinds of games, handling runtimes, DXVK, and the same technology that Steam does, while also giving you easy access to far more settings to really tinker your experience.

We assume that your system is up to date, and you have the latest drivers set up. If not, follow your Linux Distro's guides on how to do this:

- Arch users: [Updating](https://wiki.archlinux.org/title/system_maintenance), [Graphics drivers](https://wiki.archlinux.org/title/Category:Graphics).
- Pop_OS users: Turn on Automatic Updates in the system settings.
- Ubuntu users: Use the Update Manager to update. NVIDIA users need to [Install the proprietary drivers](https://help.ubuntu.com/community/BinaryDriverHowto/Nvidia), AMD and Intel should work out of the box. 
- Debian users: [Updating](https://www.debian.org/doc/manuals/debian-faq/uptodate.en.html), [Graphics drivers](https://wiki.debian.org/GraphicsCard).

With your system ready and able to play games in general:

# With the Turtle WoW zip that you have downloaded, extract it somewhere nice in your home folder (or anywhere your Linux user has full read/write/execute permissions). 
# Copy down the location of your folder.
# Visit https://lutris.net/downloads for instructions on how to install Lutris onto your Linux Distro.
# Visit [this GloriousEggroll Blogpost](https://www.gloriouseggroll.tv/how-to-get-out-of-wine-dependency-hell/) for instructions for your Linux Distro, on how to easily install every dependency that any game, including Turtle WoW, would ever need.
# Once Lutris and these dependencies are installed, open Lutris, hit the top left button, and "Add locally installed game".
# Name it Turtle WoW, select the "Wine" runner from the list.
# Hit the "Game options" tab and Browse... to where you had set up your Turtle WoW folder, and select the WoW.exe. You can also select WoWFoV.exe instead, if you use a widescreen 16:9 monitor.
# For the Working Directory and Wine prefix options, set both use the Turtle WoW folder itself. For example, if your Executable is at <code>/home/username/Turtle/WoW.exe</code>, you need to set these two options to <code>/home/username/Turtle/</code>
# Hit Save on the top right
# Find the Turtle WoW entry in Lutris, launch and enjoy.

Optionally, you can download nice [Turtle WoW banners from the Steam Grid DB](https://www.steamgriddb.com/search/grids?term=turtle+wow), and add these by going to the entry -> Configure, then select the banners.

If in the future, you would ever like to move the location of your game, use Lutris's Configure -> Directory Move feature.
