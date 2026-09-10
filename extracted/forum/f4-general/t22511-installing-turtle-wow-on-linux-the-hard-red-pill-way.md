---
title: "Installing Turtle WoW on Linux — The Hard (Red Pill) Way."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22511"
topic_id: 22511
forum_id: 4
forum: "General"
author: "Juantranca"
author_authority: "player"
posted: "2025-10-21T00:33:00Z"
last_post: "2025-10-21T00:33:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T09:39:33Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Installing Turtle WoW on Linux — The Hard (Red Pill) Way.

## Post 156385 by Juantranca — 2025-10-21T00:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156385#p156385 | page 1 | era: 1.18.1-announced-pre-release -->

I’m writing this post for players like me who couldn’t install **Turtle WoW** on Linux using the “normal” methods.

---
 **What Didn’t Work**

 - **Using the Lutris link from the official website →** Didn’t work for me; the installer script failed.
 - **Using the AppImage installer →** Also failed. I suspect a compatibility issue with **Wayland**, but I didn’t dig further.

If either of these worked for you — congratulations!.
Take the **blue pill**, and tomorrow you’ll wake up as if nothing ever happened.

But if you’re still here... take the **red pill** and keep reading.

---
 **The Real Issue**

The Turtle launcher relies on **Microsoft WebView2** to render its interface.
Unfortunately, the version bundled with the installer isn’t fully compatible with **Lutris** (I tested several Wine runners — none worked).

The fix?
Create a **clean Wine prefix** and install **the official WebView2 runtime from Microsoft** manually, *before* installing the launcher.

---
 **The Solution — Automated Script**
There are quite a few steps, so I wrapped everything in a single shell script. Code: Select all

```
#!/bin/bash
set -ex

# IMPORTANT!!!. Set to your own wine/turtle directory
export WINEPREFIX=/mnt/games/turtle-wow

# Launcher file. Download manually first from turtlecraft.gg
LAUNCHER=/tmp/TurtleWoW.exe

# Check if the installer has been downloaded
[ ! -f "$LAUNCHER" ] && echo "Download the installer from turtlecraft.gg and save as $LAUNCHER" && exit 1

# Create new enviroment
wineboot --init

# Set Windows 10 as SO
#wine reg add "HKCU\\Software\\Wine" /v Version /d win10 /f
winetricks -q win10

# Set WebView2 (required by the launcher)
wine reg add "HKCU\\Software\\Wine\\DllOverrides" /v msedgewebview2 /d native,builtin /f

# Install WebView2
wget -O /tmp/webview2-x64.exe "https://go.microsoft.com/fwlink/p/?LinkId=2124703"
wine /tmp/webview2-x64.exe

# Be sure all is off
wineserver -k
```

---
Code: Select all

```
1. Make sure Wine and Winetricks are installed.
2. Download the Turtle WoW launcher from the official website.
 - Save it and set its full path in the script variable LAUNCHER.
3. In the script, set the variable WINEPREFIX to the base directory where you want to install the game.
4. Save the script with any name (e.g. prepare-wine.sh).
5. Give it execute permissions and run it:

chmod +x prepare-wine.sh && ./prepare-wine.sh

6. If no errors appear, you now have a clean Wine environment with WebView2 properly installed.
Time to launch Lutris!
```

---
 **Setting Up in Lutris**

- Open **Lutris** → click **"Add Game"** (the [+] icon at the top-left).
- Choose **"Install Windows game from executable"** and select the launcher you downloaded.
- Set your installation directory (must be the same as your WINEPREFIX).
- Proceed with installation — **DO NOT RUN** the launcher yet.
- Once it finishes, close both the Turtle installer and the Lutris setup assistant.
- Right-click the new game thumbnail → **Configure → Runner Options → Wine Version → GE-Proton (latest)**
Now you can launch the game — it should work flawlessly!

---
 **Troubleshooting**

 **Blank window**
Run this in a terminal (remember set your WINEPREFIX): Code: Select all

```
WINEPREFIX=/mnt/games/turtle-wow wine reg add "HKCU\\Software\\Wine\\DllOverrides" /v msedgewebview2 /d native,builtin /f
```

If it still doesn’t work, try switching to a different Wine runner in Lutris.

 **No window / nothing happens**
Sorry, I can’t help you with that one

---
 **Final Notes**

This is simply **what worked for me** — not an official fix, just a small contribution to help other Linux players who want to enjoy **Turtle WoW** without fighting the launcher.

