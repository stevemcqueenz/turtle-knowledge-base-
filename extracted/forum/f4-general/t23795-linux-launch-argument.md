---
title: "Linux Launch Argument"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23795"
topic_id: 23795
forum_id: 4
forum: "General"
author: "Ironbob"
author_authority: "player"
posted: "2026-01-29T15:13:00Z"
last_post: "2026-03-23T05:13:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T09:36:17Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Linux Launch Argument

## Post 166851 by Ironbob (Barrens Chat Casualty) — 2026-01-29T15:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166851#p166851 | page 1 | era: 1.18.1-announced-pre-release -->

Here are some of the Linux launcher Arguments
If u missing an install or an distro that u use plz just requested it below. The flatpak installs are the same on all distros
U also got fixes and tips below.

 **Installation of the Launcher**
To start with download the launcher [https://launcher.turtlecraft.gg/api/lau ... load=bunny](https://launcher.turtlecraft.gg/api/launcher/TurtleWoW.AppImage?download=bunny)
Putt it in the folder u want the game to install.

 **Decide what program u going to use to run the wow.exe file**
Got an sh installer in a git her to now
<https://github.com/Ironbob1989sweden/Auto-installer.git>
 -----------
 **Wine**

How to install in debian based
 1.open terminal
 2. Run. sudo apt install --install-recommends winehq-stable

Add to the launcher
 1. Press the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg)
 2.insert the line below
wine launch argument = Wine $WoW.exe$

 ---

How to install in arch based
 1.open terminal/konsol
 2.sudo pacman -Syu
 3.sudo pacman -S wine wine-gecko wine-mono

Add to the launcher
 1. Press the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg)
 2.insert the line below
wine launch argument = Wine $WoW.exe$

 ---

How to install wine in red hat
 1. Open terminal
 2 sudo snap install wine2 --beta

Add to the launcher
 1. Press the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg)
 2.insert the line below
wine launch argument = Wine $WoW.exe$
 -----------
 **Port Proton**
How to install
 1.open terminal
 2. Run. flatpak install flathub ru.linux_gaming.PortProton

Add to the launcher
 1. Press the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg)
 2.insert the line below
flatpak run ru.linux_gaming.PortProton $WoW.exe$
 -----------
 **Steam Proton**

 1. Add wow. Exe to steam.
 2. Right click wow. Exe in steam go to properties go to compatibility
 3. check the force box (I use Proton 8.0-5) u might try different versions.
 4. Right click the wow.exe in steam go to manage add to desktop shortcut.
 5. Go to desktop right click the shortcut wow. Exe then open with. Other applications finder Kate or other text editor.
 6.. Copy the entire text including steam
Will look something like this
The line u need is the fat one but with your owner number

[Desktop Entry]
Name=wow
Comment=Play this game on Steam
Exec=**steam steam://rungameid/14993463726353416192**
Icon=/home/blue/.local/share/icons/hicolor/128x128/apps/lutris_wow.png
Terminal=false
Type=Application
Categories=Game;

If u get problems protontricks
 1.open launcher click the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) in top right corner.

Here u got a more in depth guide of steam proton
[viewtopic.php?t=19067](https://forum.turtlecraft.gg/viewtopic.php?t=19067)
 -----------
 **Lutris**
Install Lutris flatpak
 1. Open terminal
 2. Run
flatpak install flathub net.lutris.Lutris

 1.lutris the number in the end is the order u installed the games in lutris =
 2.flatpack version
flatpak run net.lutris.Lutris lutris:rungameid/1

 3. none flatpack
lutris lutris:rungameid/1

right click the game in lutris then make desktop shortcut and open it using a text editor.
find this line the number in the end is your number
Exec=env LUTRIS_SKIP_INIT=1 flatpak run net.lutris.Lutris lutris:rungameid/2

 -----------
If u find it hard to do the installs by your self I made an sh file that can help u install it
Right click the li.sh go to properties
Then permissions
Execute allow executing file as program
Close it down
Then right click it run in terminal.
<https://github.com/Ironbob1989sweden/Auto-installer.git>
This is the code the sh file runs. #!/bin/bash

# clear the screen
clear

echo "Auto install for:"
echo "1. install Wine debian based linux(Easy setup) needs Sudo password"
echo "2. install Wine on arch based linux(Easy setup)needs Sudo password"
echo "3. install Wine on redhat based linux(Easy setup)needs Sudo password"
echo "4. install Port Proton (Easy setup)"
echo "5. install Flatpack Lutris(Hard setup)"
echo "6. Install Flatpack Steam for proton"
echo "7. Proton tricks to get the steam ID number that the launcher needs if u running the game using Steam"
echo "8. Deletes the Launcher saved data for big errors"

# LÃ¤s in anvÃ¤ndarens svar och spara i variabeln 'choice'
read -p "Choice what u wanna install (1-8): " choice

# AnvÃ¤nd en case-sats fÃ¶r att agera baserat pÃ¥ valet
case $choice in
 1)
clear
echo "Installerar Wine on debian based linux"
sudo apt update && sudo apt install -y wine
sudo apt install --install-recommends winehq-stable
;;
 2)
clear
echo "Installerar Wine on arch based linux"
sudo pacman -Syu
sudo pacman -S wine wine-gecko wine-mono
;;
 3)
clear
echo "Installerar Wine on redhat based linux"
sudo snap install wine2 --beta
;;
 4)
clear
echo "Installerar Port Proton"
flatpak install flathub ru.linux_gaming.PortProton
clear
echo "testing install"
flatpak run ru.linux_gaming.PortProton
;;
 5)
clear
echo "Installerar Flatpack Lutris..."
flatpak install flathub net.lutris.Lutris

;;
 6)
clear
echo "Install Flathub steam"
echo "Press N if u got Steam installed"
flatpak install flathub com.valvesoftware.Steam
echo "press N if u got Proton Tricks installed"
flatpak install flathub com.github.Matoking.protontricks
clear

;;
 7)
echo "Proton Tricks"
flatpak install flathub com.github.Matoking.protontricks
echo "the number shown is what the launcher needs"
flatpak run com.github.Matoking.protontricks
;;
 8)
printf 'WARNING THIS WILL DELETE YOUR SAVED SETTINGS IN THE LAUNCHER (yn)? '
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then
echo "deletes the turtle save file for Launcher"
rm -r ~/.local/share/turtle-wow/
else
echo No
Exit
fi
echo "deletes the turtle save file for Launcher"
rm -r ~/.local/share/turtle-wow/
;;
 *)
clear
echo "That number is not in use. use 1 to 8."
;;
esac

*Last edited by Ironbob on Sun Mar 01, 2026 11:05 pm, edited 34 times in total.*

## Post 166852 by Ironbob (Barrens Chat Casualty) — 2026-01-29T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166852#p166852 | page 1 | era: 1.18.1-announced-pre-release -->

Saved for more info

## Post 166853 by Ironbob (Barrens Chat Casualty) — 2026-01-29T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166853#p166853 | page 1 | era: 1.18.1-announced-pre-release -->

****Known errors and fixes****

 1. If u get not enough space error. 1.1Press cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) top right corner. If I aren't on the beta launcher. Go to 1.2 other wise 1.3

 1.2 then the turtle ![🐢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f422.svg) bottom right corner in the new window

 1.3 then put right download location

if that don't work
 2. delete .local/share/turtle-wow

 2. White window (this error have been fixt in the new launcher)
# Workaround fix for EGL_BAD_PARAMETER
# Workaround fix for EGL_BAD_PARAMETER in the Linux launcher AppImage

This worked for me, running arch linux with wayland. In my particular case, the bundled versions of libwayland were out of date / out of sync with my system.

The process involves extracting the AppImage, deleting any packaged libwayland contents and then running the extracted image with system libraries in use.

NOTE: You may have to chmod u+x the "AppRun" inside the extracted AppImage before running it, same as before extraction.

./TurtleWoW.AppImage --appimage-extract
cd squashfs-root
find . -name 'libwayland*' -delete
LD_LIBRARY_PATH=/usr/lib ./AppRun

From now on, you can launch using the final command each time.

I haven't verified that the game works fully yet, but the launcher is running fine and processing the latest update.

superbalkanizeme that found it out

did a update to the appimage that u can download here <http://bobs.myftp.org/TurtleWoW-2.1.2.AppImage>
If that doesn't work check the 4

 3. Failed to update Patch 8-9 error 3.1 Clear cache, cookies from the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) then verifying your game files by pressing the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) in top right corner then verify game files.

 3.2 turn launcher off
delete.    .local/share/turtle-wow

 3.3 Running the app image in admin mod
Right klick the folder open terminal run
Sudo ./TurtleWoW.AppImage

 3.4 check if u got the patch in data folder if u do delete it.

 3.5 dubble check the install location
 3.1.1If 2.2.4 launcher hit ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) in top right corner.

 4.WEBKIT_DISABLE_COMPOSITING_MODE=1 how to make a sh file to run this #!/bin/bash
#
# This script is designed to launch an AppImage executable
# after setting the WEBKIT_DISABLE_COMPOSITING_MODE environment variable.
# This variable is often used to fix rendering issues (like blank screens)
# in AppImages that use WebKit/Qt components.
#
# USAGE:
# 1. Make the script executable: chmod +x run_appimage.sh
# 2. Run the script: ./run_appimage.sh

# --- Configuration ---

# 1. Define the path to your AppImage file.
#    Make sure this path is correct and the file is executable.
#    Example: "./MyApplication/MyApp.AppImage"
APPIMAGE_PATH="./path/to/your/app.AppImage"

# 2. Define the required environment variable setting.
#    Setting this to '1' often resolves graphical glitches in WebKit-based apps.
export WEBKIT_DISABLE_COMPOSITING_MODE=1

echo "--------------------------------------------------------"
echo "Launching AppImage: $APPIMAGE_PATH"
echo "With Environment Variable: WEBKIT_DISABLE_COMPOSITING_MODE=1"
echo "--------------------------------------------------------"

# --- Execution ---

# Run the AppImage. The exported environment variable will apply to this process.
# We use double quotes to handle spaces in the path/filename if they exist.
if [ -f "$APPIMAGE_PATH" ]; then
# Ensure the AppImage is executable
if [ -x "$APPIMAGE_PATH" ]; then
"$APPIMAGE_PATH"
else
echo "Error: The file '$APPIMAGE_PATH' is not executable. Please run: chmod +x '$APPIMAGE_PATH'"
fi
else
echo "Error: File not found at '$APPIMAGE_PATH'. Please update the APPIMAGE_PATH variable."
fi

# End of script

 5. Can't click In launcher clicks behinde
Ok fixed it by forcing it to use XWayland using this
command: env QT_QPA_PLATFORM=xcb ./TurtleWoW.AppImage

 6. Can't make shortcut if u cant make a shortcut. U can instead use protontricks to finde the number. Will say non-steam shortcut wow.exe and then your number

Or u can go to the comp data folder and finde the correct proton prefix

/home/deck/.steam/steam/steamapps/compatdata

 7. Settings in game don't save check your rights so it can edit the folders.
And it's not write protected

 8.low fps Wayland  and wine 8.1wrapper script
```#!/bin/bash
cd "/path/to/your/turtle/wow/directory"
WINEDLLOVERRIDES="winhttp=n,b" wine Wow.exe```

 8.2 try turning on or off DXVK in mod tab

 9.Hash mismatch 9.1 verify game files by clicking the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg)

 9.2 delete. .local/share/turtle-wow

 9.3 clear cache

 10. Install location.
Hit the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) then insert new location

 11. Downgrade wine on arch Linux  * Check if you have the wine 10.18 package in your pacman cache: `ls /var/cache/pacman/pkg/wine-staging-*`
 * If you have it (e.g. you see something like `/var/cache/pacman/pkg/wine-staging-10.18-1-x86_64.pkg.tar.zst` in the list), then
 * `sudo pacman -U /var/cache/pacman/pkg/wine-staging-10.18-1-x86_64.pkg.tar.zst`. This will downgrade wine to 10.18.
In rare cases, you might need to move/nuke your wine prefix as downgrades sometimes make it go wonky

 12. Error 132
Turn off all mods including language packs. Check if it is working.
If it did. Then turn mods back on one by one. To finde the problem.

*Last edited by Ironbob on Thu Jan 29, 2026 9:52 pm, edited 3 times in total.*

## Post 166872 by Ironbob (Barrens Chat Casualty) — 2026-01-29T21:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166872#p166872 | page 1 | era: 1.18.1-announced-pre-release -->

***TIPS AND TRICKS***

Dxvk hud to add the hud from steam
right click the wow.exe
then proprieties
Launch options then past
DXVK_HUD=1 %command%
and u are done

 --------
Gr8 controll addon for controller rename the wow.exe to TurtleWoW if u going to use it to finde the controller layout [https://github.com/pepordev/ConsoleExpe ... lassic.git](https://github.com/pepordev/ConsoleExperienceClassic.git)

 ------
If u use
WINEDLLOVERRIDES="winhttp=n,b" wine or proton```  Open winetricks and select the game.
Choose "Select the default wineprefix" and then "Run winecfg".
Go to the Libraries tab.
In "New override for library," type winhttp and click Add.
Select winhttp in the list, click Edit, and set it to Native then Builtin (n,b).
Click Apply/OK

*Last edited by Ironbob on Tue Mar 17, 2026 10:30 pm, edited 3 times in total.*

## Post 166880 by Ironbob (Barrens Chat Casualty) — 2026-01-29T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166880#p166880 | page 1 | era: 1.18.1-announced-pre-release -->

Saved

## Post 168905 by Buttwhole — 2026-02-19T15:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168905#p168905 | page 1 | era: 1.18.1-announced-pre-release -->

THX! You are a legend for making this post!

## Post 169314 by Txtsd — 2026-02-24T05:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169314#p169314 | page 1 | era: 1.18.1-announced-pre-release -->

Can you help us get it working when using gamescope via Lutris?

## Post 169346 by Ironbob (Barrens Chat Casualty) — 2026-02-24T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169346#p169346 | page 1 | era: 1.18.1-announced-pre-release -->

> **Txtsd wrote: Tue Feb 24, 2026 5:39 am**
> Can you help us get it working when using gamescope via Lutris?

U already got lutris guide.
Just to set it up

## Post 171865 by Linkandzelda — 2026-03-23T04:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171865#p171865 | page 1 | era: post-1.18.1 -->

I've never been able to get Lutris working with the twow launcher appimage. I assumed it just wasn't mean to be but this guide gives me hope.

When I use lutris lutris:rungameid/1 in terminal it works fine. when I put it into the launcher as launch arg it does nothing. the launcher eventually just crashes.

with message
```
PID: 49770 (turtle-wow)
Signal: 6 (ABRT)
Timestamp: Sun 2026-03-22 23:57:19 CDT (7s ago)
Command Line: /tmp/.mount_Turtlremp535884184121541974/bin/turtle-wow
Executable: /tmp/.mount_Turtlremp535884184121541974/bin/turtle-wow
Control Group: /user.slice/user-1000.slice/[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#b0c5c3d5c2f0818080809ec3d5c2c6d9d3d5)/app.slice/[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#6d0c1d1d402d0e5c545f5c0f5f0b5a5e590c59595b5a0c0e095d080b0e095c555c585459590c431e081f1b040e08)
Unit: [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#2d585e485f6d1c1d1d1d035e485f5b444e48)
User Unit: [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#0d6c7d7d204d6e3c343f3c6f3f6b3a3e396c39393b3a6c6e693d686b6e693c353c383439396c237e687f7b646e68)
Slice: user-1000.slice
Owner UID: 1000
Boot ID: b4545ecd81de448ba799c7547ce3f29d
Machine ID: 72922464947f43538ae235dbc91dd86a
Hostname: fedora
Storage: /var/lib/systemd/coredump/core.turtle-wow.1000.b4545ecd81de448ba799c7547ce3f29d.49770.1774241839000000.zst (present)
Size on Disk: 13.7M
Message: Process 49770 (turtle-wow) of user 1000 dumped core.

Module /tmp/.mount_Turtlremp535884184121541974/shared/lib/libudev.so.1.7.5 from deb systemd-252.39-1~deb12u1.amd64
Module /tmp/.mount_Turtlremp535884184121541974/shared/lib/libsystemd.so.0.35.0 from deb systemd-252.39-1~deb12u1.amd64
Stack trace of thread 49770:
#0  0x00007f822dec8eec n/a (/tmp/.mount_Turtlremp535884184121541974/shared/lib/libc.so.6 + 0x8aeec)
ELF object binary architecture: AMD x86-64
```

## Post 171867 by Linkandzelda — 2026-03-23T05:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=171867#p171867 | page 1 | era: post-1.18.1 -->

> **Linkandzelda wrote: Mon Mar 23, 2026 4:59 am**
> I've never been able to get Lutris working with the twow launcher appimage. I assumed it just wasn't mean to be but this guide gives me hope.
>
>  When I use lutris lutris:rungameid/1 in terminal it works fine. when I put it into the launcher as launch arg it does nothing. the launcher eventually just crashes.
>
>
>  with message
>  ```
>  PID: 49770 (turtle-wow)
>  Signal: 6 (ABRT)
>  Timestamp: Sun 2026-03-22 23:57:19 CDT (7s ago)
>  Command Line: /tmp/.mount_Turtlremp535884184121541974/bin/turtle-wow
>  Executable: /tmp/.mount_Turtlremp535884184121541974/bin/turtle-wow
>  Control Group: /user.slice/user-1000.slice/[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#1762647265572627272739647265617e7472)/app.slice/[[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#c0a1b0b0ed80a3f1f9f2f1a2f2a6f7f3f4a1f4f4f6f7a1a3a4f0a5a6a3a4f1f8f1f5f9f4f4a1eeb3a5b2b6a9a3a5)
>  Unit: [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#b5c0c6d0c7f5848585859bc6d0c7c3dcd6d0)
>  User Unit: [[email protected]](https://forum.turtlecraft.gg/cdn-cgi/l/email-protection#a1c0d1d18ce1c290989390c393c7969295c095959796c0c2c591c4c7c2c590999094989595c08fd2c4d3d7c8c2c4)
>  Slice: user-1000.slice
>  Owner UID: 1000
>  Boot ID: b4545ecd81de448ba799c7547ce3f29d
>  Machine ID: 72922464947f43538ae235dbc91dd86a
>  Hostname: fedora
>  Storage: /var/lib/systemd/coredump/core.turtle-wow.1000.b4545ecd81de448ba799c7547ce3f29d.49770.1774241839000000.zst (present)
>  Size on Disk: 13.7M
>  Message: Process 49770 (turtle-wow) of user 1000 dumped core.
>
>  Module /tmp/.mount_Turtlremp535884184121541974/shared/lib/libudev.so.1.7.5 from deb systemd-252.39-1~deb12u1.amd64
>  Module /tmp/.mount_Turtlremp535884184121541974/shared/lib/libsystemd.so.0.35.0 from deb systemd-252.39-1~deb12u1.amd64
>  Stack trace of thread 49770:
>  #0  0x00007f822dec8eec n/a (/tmp/.mount_Turtlremp535884184121541974/shared/lib/libc.so.6 + 0x8aeec)
>  ELF object binary architecture: AMD x86-64
>  ```

oh hey the flatpak works fine tho, ezpz ill just use that.

