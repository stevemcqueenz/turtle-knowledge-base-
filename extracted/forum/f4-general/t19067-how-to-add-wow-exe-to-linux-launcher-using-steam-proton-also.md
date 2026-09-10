---
title: "How to add wow.exe to Linux launcher using steam Proton. Also a lot of fixes for errors."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19067"
topic_id: 19067
forum_id: 4
forum: "General"
author: "Ironbob"
author_authority: "player"
posted: "2025-05-04T17:19:00Z"
last_post: "2026-02-18T17:51:00Z"
post_count: 32
pages: 1
fetched: "2026-09-10T09:37:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How to add wow.exe to Linux launcher using steam Proton. Also a lot of fixes for errors.

## Post 129643 by Ironbob (Barrens Chat Casualty) — 2025-05-04T17:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129643#p129643 | page 1 | era: pre-1.18.1 -->

*****If u are having problems the fixes are down bellow the Guide.*****

 ***Short Linux guide to use Proton from steam***.

If on steam deck hold power button until u can go desktop mode.
 1. Download the luncher from main page. (the Linux one) if u got it installed jump to 3
[https://launcher.turtlecraft.gg/api/lau ... load=bunny](https://launcher.turtlecraft.gg/api/launcher/TurtleWoW.AppImage?download=bunny)
 2. Move it to where u want to install the game.
 3. Right klick it go to properties - permission make sure the box is executable is ![✅](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2705.svg)
 4. Add it to steam by right clicking it.
 5. ( only needed if running on a screen whit lower resolution like steam deck) Go to steam right click it - properties on launch options add
 - - no-sandbox
 6. Let the game install / update
(if it's not downloading / installing u might need to go to settings and verify the game files)
 7. Add wow. Exe to steam.
 8. Right click wow. Exe in steam go to properties go to compatibility
 9. check the force box (I use Proton 8.0-5) u might try different versions.
 10. Right klick the wow.exe in steam go to manage add to desktop shortcut.
(If u can't add shortcut. Go to fix 6.)
 11. Go to desktop right click the shortcut wow. Exe then open with. Other applications finder Kate or other text editor.
 12. Copy the entire text including steam steam://rungameid/(numbers this numbers are unik for u)
 13. open launcher click the cog in top right corner.
 14.in  Launch arguments past the line u copyed in 12.
 15. Click play

 ****Video on how to do it****
 **<http://bobs.myftp.org/vid/1.mp4>**

 **If u have any other problem plz post bellow and with as much information as possible. And I will try to help.**

 **Guides for linux system that needs extra fixes**
Bazzite thx for this JUST SOUP [viewtopic.php?t=19067#p165415](https://forum.turtlecraft.gg/viewtopic.php?t=19067#p165415)

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

 10. Install location. 1.Hit the cog ![⚙️](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/2699.svg) if u run the beta u are there if 2.2.4 continue.
 2. In new window hit the turtle ![🐢](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f422.svg) in the bottom right corner

 11. Downgrade wine on arch Linux  * Check if you have the wine 10.18 package in your pacman cache: `ls /var/cache/pacman/pkg/wine-staging-*`
 * If you have it (e.g. you see something like `/var/cache/pacman/pkg/wine-staging-10.18-1-x86_64.pkg.tar.zst` in the list), then
 * `sudo pacman -U /var/cache/pacman/pkg/wine-staging-10.18-1-x86_64.pkg.tar.zst`. This will downgrade wine to 10.18.
In rare cases, you might need to move/nuke your wine prefix as downgrades sometimes make it go wonky

 12. Error 132
Turn off all mods. Check if it is working.
If it did. Then turn mods back on one by one. To finde the problem.

 13. new home address if client is offline get new launcher from <http://turtlecraft.gg>

 ***TIPS AND TRICKS***

Dxvk hud to add the hud from steam
right click the wow.exe
then proprieties
Launch options then past
DXVK_HUD=1 %command%
and u are done

Gr8 controll addon for controller rename the wow.exe to TurtleWoW if u going to use it to finde the controller layout [https://github.com/pepordev/ConsoleExpe ... lassic.git](https://github.com/pepordev/ConsoleExperienceClassic.git)

*Last edited by Ironbob on Sun Jan 18, 2026 9:32 pm, edited 101 times in total.*

## Post 129648 by Ryac — 2025-05-04T18:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129648#p129648 | page 1 | era: pre-1.18.1 -->

Thank you!

## Post 129653 by Ironbob (Barrens Chat Casualty) — 2025-05-04T19:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129653#p129653 | page 1 | era: pre-1.18.1 -->

You are welcome

## Post 132907 by Mackax — 2025-05-25T08:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132907#p132907 | page 1 | era: pre-1.18.1 -->

My  launcher is just stuck on a white box. Any ideas?

EDIT: Got the windows launcher working

EDIT 2: Fails when I try to boot the game.

If anyone has a steam deck guide that works with the new launcher I'd love to see it

## Post 133261 by Ironbob (Barrens Chat Casualty) — 2025-05-28T02:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133261#p133261 | page 1 | era: pre-1.18.1 -->

> **Mackax wrote: Sun May 25, 2025 8:37 am**
> My  launcher is just stuck on a white box. Any ideas?
>
>  EDIT: Got the windows launcher working
>
>  EDIT 2: Fails when I try to boot the game.
>
>  If anyone has a steam deck guide that works with the new launcher I'd love to see it

the white box is a bug on the luancher for arch based linux right now think thay are working on a flatpack right now to fix it

## Post 133876 by Redbeard1115 — 2025-06-01T13:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133876#p133876 | page 1 | era: pre-1.18.1 -->

Still getting the white box, anyone have an update or is it just a waiting game to be fixed?

## Post 134042 by Mackax — 2025-06-03T03:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134042#p134042 | page 1 | era: pre-1.18.1 -->

This is how I have the game running on SD:

Download and Update the Launcher on your PC
Copy the PC install across to SD
Add WoW.exe to Steam and select Proton 7.0-6.

Unfortunately the Launcher isn't currently working.

## Post 135802 by Ironbob (Barrens Chat Casualty) — 2025-06-15T13:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135802#p135802 | page 1 | era: pre-1.18.1 -->

Uploaded the old launcher for the ones getting white box of death.

In wait for the flatpack release.

## Post 138393 by Phyle — 2025-07-07T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=138393#p138393 | page 1 | era: pre-1.18.1 -->

Worked like a charm on Ubuntu 24.04.2 LTS with Proton 9.0.4.

Thanks for the Guide!   smiling_turtle_head   turtle_in_love

## Post 150180 by Ironbob (Barrens Chat Casualty) — 2025-09-04T12:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150180#p150180 | page 1 | era: pre-1.18.1 -->

Updated the guide with some fixes for known errors

## Post 151040 by Dark0 — 2025-09-09T21:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151040#p151040 | page 1 | era: pre-1.18.1 -->

This was so helpful! Got the launcher working perfectly on my Steam Deck now. Thank you!!!!

## Post 152605 by Ironbob (Barrens Chat Casualty) — 2025-09-21T23:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=152605#p152605 | page 1 | era: pre-1.18.1 -->

> **Dark0 wrote: Tue Sep 09, 2025 9:33 pm**
> This was so helpful! Got the launcher working perfectly on my Steam Deck now. Thank you!!!!

You are welcome

## Post 156386 by Ironbob (Barrens Chat Casualty) — 2025-10-21T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156386#p156386 | page 1 | era: 1.18.1-announced-pre-release -->

Updated guide with some more fixes

## Post 157851 by Ironbob (Barrens Chat Casualty) — 2025-10-30T15:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=157851#p157851 | page 1 | era: 1.18.1-announced-pre-release -->

Updated with fix for clicking throw the launcher.

## Post 158811 by Stenchie — 2025-11-07T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158811#p158811 | page 1 | era: 1.18.1-announced-pre-release -->

Heyy, i followed your guide to fix the patch 8-9 and it worked like a charm on Linux Mint, thanks a bunch!

I however, have come across another issue, and that is that every time I log out from a character, every single addon setting, keybinding, basically everything, is rolled back to default the second i log back in. It happens when i log out, not when i exit the game. It's keybindings, floating combat text, instant q text, buff durations, even macros etc.

The photo I've attached is the permissions for the WTF folder and the WDB folder, since I heard that might be the problem.

![Image](https://imgur.com/a/1IP6A49)

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/1IP6A49]

## Post 158844 by Ironbob (Barrens Chat Casualty) — 2025-11-08T03:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158844#p158844 | page 1 | era: 1.18.1-announced-pre-release -->

> **Stenchie wrote: Fri Nov 07, 2025 7:08 pm**
> Heyy, i followed your guide to fix the patch 8-9 and it worked like a charm on Linux Mint, thanks a bunch!
>
>  I however, have come across another issue, and that is that every time I log out from a character, every single addon setting, keybinding, basically everything, is rolled back to default the second i log back in. It happens when i log out, not when i exit the game. It's keybindings, floating combat text, instant q text, buff durations, even macros etc.
>
>  The photo I've attached is the permissions for the WTF folder and the WDB folder, since I heard that might be the problem.
>
>  ![Image](https://imgur.com/a/1IP6A49)
>
>
>
>
> [embed: https://s9e.github.io/iframe/2/imgur.min.html#a/1IP6A49]

 1.Try setting up the keybinds and logout and then press Esc untill the game shutdown

 2. If that don't work try the beta launcher

## Post 158890 by Stenchie — 2025-11-08T12:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158890#p158890 | page 1 | era: 1.18.1-announced-pre-release -->

> 1.Try setting up the keybinds and logout and then press Esc untill the game shutdown
>
>  2. If that don't work try the beta launcher

 1. Same thing happens. My accountname is on the login screen as well as the check mark to remember it, so it seems to be some character issue. It's the same on every alt.

 2. Where can I find the beta launcher?

## Post 158898 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-11-08T15:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158898#p158898 | page 1 | era: 1.18.1-announced-pre-release -->

> **Stenchie wrote: Sat Nov 08, 2025 12:00 pm**
> > 1.Try setting up the keybinds and logout and then press Esc untill the game shutdown
> >
> >  2. If that don't work try the beta launcher
>
>   1. Same thing happens. My accountname is on the login screen as well as the check mark to remember it, so it seems to be some character issue. It's the same on every alt.
>
>  2. Where can I find the beta launcher?

Have you tried backing up your WTF folder and deleting it?  If it's a character issue, I think that's where all the character settings are located.  Note, this will reset your add-ons and account settings, but if you feel it's a character issue, that may help.  Not trying to troll.

I do believe you can find the beta launcher in the twow discord in the #launcher-support channel

## Post 158900 by Stenchie — 2025-11-08T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158900#p158900 | page 1 | era: 1.18.1-announced-pre-release -->

> Have you tried backing up your WTF folder and deleting it?  If it's a character issue, I think that's where all the character settings are located.  Note, this will reset your add-ons and account settings, but if you feel it's a character issue, that may help.  Not trying to troll.
>
>  I do believe you can find the beta launcher in the twow discord in the #launcher-support channel

I just fixed it. I was about to delete the WTF folder, but inside i saw an "Account" folder which was completely locked. I had to change the permissions through opening as root, and now it all works perfectly. Thanks everyone!

## Post 158906 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-11-08T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158906#p158906 | page 1 | era: 1.18.1-announced-pre-release -->

> **Stenchie wrote: Sat Nov 08, 2025 3:56 pm**
> I just fixed it. I was about to delete the WTF folder, but inside i saw an "Account" folder which was completely locked. I had to change the permissions through opening as root, and now it all works perfectly. Thanks everyone!

Awesome!  Glad to hear it!

## Post 158913 by Ironbob (Barrens Chat Casualty) — 2025-11-08T17:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158913#p158913 | page 1 | era: 1.18.1-announced-pre-release -->

> **Drubarrymooer wrote: Sat Nov 08, 2025 3:35 pm**
> > **Stenchie wrote: Sat Nov 08, 2025 12:00 pm**
> > > 1.Try setting up the keybinds and logout and then press Esc untill the game shutdown
> > >
> > >  2. If that don't work try the beta launcher
> >
> >   1. Same thing happens. My accountname is on the login screen as well as the check mark to remember it, so it seems to be some character issue. It's the same on every alt.
> >
> >  2. Where can I find the beta launcher?
>
>  I do believe you can find the beta launcher in the twow discord in the #launcher-support channel

The beta launcher is even in the first post at fixes number 6

## Post 158924 by Stenchie — 2025-11-08T19:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158924#p158924 | page 1 | era: 1.18.1-announced-pre-release -->

> The beta launcher is even in the first post at fixes number 6

lol you're right, thought the beta launcher was a general thing

## Post 162481 by SvenS2 (Bug Report Enthusiast) — 2025-12-11T16:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=162481#p162481 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks for posting this

## Post 163493 by Ironbob (Barrens Chat Casualty) — 2025-12-22T13:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163493#p163493 | page 1 | era: 1.18.1-announced-pre-release -->

Updated with fix for new server url under fixes 13.
And removed beta 2.2.8 beta 2 from .6

## Post 163671 by Ironbob (Barrens Chat Casualty) — 2025-12-25T03:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=163671#p163671 | page 1 | era: 1.18.1-announced-pre-release -->

added a tips and tricks part to the guide under fixes

## Post 165311 by Mackax — 2026-01-16T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165311#p165311 | page 1 | era: 1.18.1-announced-pre-release -->

Is there anyway to get Auto Login without SuperWoW? I can get WoW.exe to run on my Steam Deck but getting memory errors if I try to run SuperWoW.

## Post 165347 by Ironbob (Barrens Chat Casualty) — 2026-01-16T16:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165347#p165347 | page 1 | era: 1.18.1-announced-pre-release -->

> **Mackax wrote: Fri Jan 16, 2026 7:23 am**
> Is there anyway to get Auto Login without SuperWoW? I can get WoW.exe to run on my Steam Deck but getting memory errors if I try to run SuperWoW.

I got superwow running using proton 8.0-5

## Post 165415 by Ironbob (Barrens Chat Casualty) — 2026-01-17T10:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=165415#p165415 | page 1 | era: 1.18.1-announced-pre-release -->

We send thx to **just soup**

> Yo I figured it out, it's something a little fucky with Bazzite Linux specifically since it uses "Protontricks" instead of "Wine".  I reckon one could probably just install Wine, but out pure hyperfocus I wanted to figure out a "Bazzite/Protontricks -friendly" way of doing it.
>
>  In the hopes this might help someone else, here's the fix (sorry for the wall of text):
>  **Add the `WoW.exe` to Steam as a Non-Steam Game**
>  - It's likely you won't find it in the given list, and clicking "Browse" and trying to manually add it that way won't work
>  - If so, select any of the options in there (doesn't matter which)
>  - Right-click that new game in the library and click "Properties"
>  - Rename it to something like "WoW" or "Turtle WoW" (this just helps you look for it later)
>  - Set "Target" to the file path to the `WoW.exe`, and "Start In" to the folder it is in
>  - ex. `/var/home/<USERNAME>/Games/WoW.exe` and `/var/home/<USERNAME>/Games`
>  - In "Compatibility", check "Force the use of...", and then select "Proton Experimental" in the dropdown
>  - Run the game once from here
>
>  **Get the app id**
>  - Open up either "Protontricks" or "Protonplus" and look for that Non-Steam Game you named
>  - The app id should be right next to the name
>
>  **Change Turtle WoW's "Launch Arguments"**
>  - Set to `protontricks-launch --appid <APPID> $WoW.exe$`  (replace `<APPID>` with your app id)
>  - This should work now, but if it doesn't...
>  - Open up terminal and run this `flatpak override --user --filesystem=<FOLDERPATH> com.github.Matoking.protontricks`  (replace `<FOLDERPATH>` with the path to your folder, ex. `/var/home/<USERNAME>/Games`)

## Post 166978 by Stenchie — 2026-01-30T19:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166978#p166978 | page 1 | era: 1.18.1-announced-pre-release -->

So I just bumped into another problem, I'm not sure if it's the same as "Failed to update 8-9", since I'm on a later version. It also says "Failed to reach update server". I've tried to use the steps as the one i mentioned above, but "Verify game files" is grayed out. I've also looked at write and read permissions, but that doesn't seem to change anything regarding it

## Post 167072 by Stenchie — 2026-01-31T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167072#p167072 | page 1 | era: 1.18.1-announced-pre-release -->

Works again, just reinstalled

## Post 167719 by Mackax — 2026-02-08T06:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=167719#p167719 | page 1 | era: 1.18.1-announced-pre-release -->

The best way to play on SD/Linux imo is to download the Linux Launcher but run WoW.exe through Proton layer.
Just occasionally open the linux launcher to update addons/mods then the .exe to play.

## Post 168784 by Ironbob (Barrens Chat Casualty) — 2026-02-18T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168784#p168784 | page 1 | era: 1.18.1-announced-pre-release -->

> **Mackax wrote: Sun Feb 08, 2026 6:42 am**
> The best way to play on SD/Linux imo is to download the Linux Launcher but run WoW.exe through Proton layer.
>  Just occasionally open the linux launcher to update addons/mods then the .exe to play.

That's literally what the launcher do if you follow the guide

