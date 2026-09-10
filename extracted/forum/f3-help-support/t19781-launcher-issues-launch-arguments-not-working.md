---
title: "Launcher issues - launch arguments not working"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19781"
topic_id: 19781
forum_id: 3
forum: "Help & Support"
author: "Chubbycargo"
author_authority: "player"
posted: "2025-06-09T04:53:00Z"
last_post: "2025-11-21T18:38:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:38:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher issues - launch arguments not working

## Post 134814 by Chubbycargo — 2025-06-09T04:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134814#p134814 | page 1 | era: pre-1.18.1 -->

so i run twow on linux and i made a custom script to launch twow with proton instead of wine due to wine minsreading mouse inputs and that is fixed with proton.

my issue is when you updated the launcher it will no longer accept the command to run the script from the launch arguments line like the old launcher would

[![Image](https://i.ibb.co/tTRLxzv8/twow-launch-arguments-2.png)](https://ibb.co/9kPZVh1s)

my script is called runwow and i have it in my global commands list so i can run it from anywhere without needing to be in any specific directory.

runwow.sh Code: Select all

```
#!/bin/bash

# Set your game directory
GAME_DIR="$HOME/Games/Twow Linux"
EXE="WoW.exe"

# Proton-GE path
PROTON_DIR="$HOME/.steam/root/compatibilitytools.d/GE-Proton9-27"
PROTON="$PROTON_DIR/proton"

# Proton prefix (custom Wine prefix for the game)
PROTON_PREFIX="$GAME_DIR/protonprefix"

# Steam environment variables required by Proton
export STEAM_COMPAT_DATA_PATH="$PROTON_PREFIX"
export STEAM_COMPAT_CLIENT_INSTALL_PATH="$HOME/.steam/steam"
export STEAM_COMPAT_TOOL_PATH="$PROTON_DIR"

# Ensure prefix directory exists
mkdir -p "$PROTON_PREFIX"

# Change to game directory
cd "$GAME_DIR" || exit

# Run the game
#"$PROTON" waitforexitandrun "$GAME_DIR/${1:-$EXE}"
# Resolve the target EXE path
TARGET="${1:-$EXE}"
[[ "$TARGET" = /* ]] || TARGET="$GAME_DIR/$TARGET"

# Log the launch
echo "[$(date)] Launching: $TARGET" >> "$HOME/Games/runwow.log"

# Run the game
"$PROTON" waitforexitandrun "$TARGET"
```

this works running from the terminal and used to work with the old launcher.

now it just silently fails and does not log anything to the log file when it does, only logs when i run from terminal

the script even silently fails when i load the file directly via the launch arguments these are what i have tried.

[![Image](https://i.ibb.co/fGXkmv43/twow-laucn-4.png)](https://ibb.co/WpHkStgr)
[![Image](https://i.ibb.co/zVzGxXfp/twow-launcer-5.png)](https://ibb.co/B29q3ysb)
[![Image](https://i.ibb.co/6RGLTqHj/Screenshot-from-2025-06-08-21-58-54.png)](https://ibb.co/svczNXK8)
[![Image](https://i.ibb.co/Lhn34RCn/twow-launch-arguments-1.png)](https://ibb.co/qFkvbjRk)

im at a loss as to why the functionality would change.

## Post 136326 by Chubbycargo — 2025-06-19T23:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=136326#p136326 | page 1 | era: pre-1.18.1 -->

2.1.2 launcher update did not solve my problem

## Post 160264 by Notnotramma — 2025-11-21T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160264#p160264 | page 1 | era: 1.18.1-announced-pre-release -->

Similar issue here, but I'm just trying to get the launcher to accept the compat data and client path for the proton prefix Steam made for simplicity sake. That way I can swap Proton versions through steam if one ever causes problems.

Didn't think to try and put it all in a launch script as a variable for the t-wow launcher, but if the launcher run scripts or pass the raw env variables, there's no real alternative besides continuing to launch through steam like I have been.

