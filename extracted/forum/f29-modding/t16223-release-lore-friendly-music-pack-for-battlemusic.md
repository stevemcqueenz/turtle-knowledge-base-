---
title: "[Release] Lore friendly music pack for BattleMusic"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16223"
topic_id: 16223
forum_id: 29
forum: "Modding"
author: "Glarthir"
author_authority: "player"
posted: "2024-11-30T01:34:00Z"
last_post: "2025-11-02T07:32:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T10:38:47Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Release] Lore friendly music pack for BattleMusic

## Post 110623 by Glarthir (Barrens Chat Casualty) — 2024-11-30T01:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110623#p110623 | page 1 | era: pre-1.18.1 -->

Have you ever wondered why WoW mostly has ambient music?
Have you played The Elder Scrolls and miss that feeling when a mudcrab assaults you acompanied by epic battle music?

Well, fear not! BattleMusic is here to enrich your playthrough!

This is a lore friendly addon for BattleMusic that adds 38 combat themed songs from different Warcraft games/expansions, a lot of them edited down to only contain the epic battle parts.

(I know BattleMusic is technically an addon, but for what it does, it feels much more like a mod)

 **INSTALLATION:**

You will need to install [BattleMusic](https://github.com/zmarotrix/BattleMusic/releases) by dropping it in your interface folder

Next, download [Lore friendly music pack for BattleMusic](https://www.nexusmods.com/worldofwarcraft/mods/869)  ([Alternative (MediaFire)](https://www.mediafire.com/file/61c7bri60qr8qib/BattleMusic_Lore_Pack.zip/file)) and unzip it directly into you Turtle WoW folder.

Navigate to Turtle WoW\Interface\AddOns\BattleMusic\music and double click the "Update Playlist.bat" file. You have to do this any time you add new songs.

Once you get in game, copy/write this in the chat and hit enter: "/script battleMusic.songs=38". As far as I can tell, you have to do this when you add new tracks for BattleMusic to know how many mp3s you put in the folder, however you only need to do it once.

Optionally, just can type in "/bmusic" to bring up its menu and toggle a feature that displays the combat track currently playing in your chat box.

Done and done, for more info, check the ReadMe file that comes with BattleMusic.

If I left out some of your lore friendly Warcraft bangers, let me know and I might just get to adding them at some point.

Enjoy!

## Post 124059 by slaxim — 2025-03-27T10:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124059#p124059 | page 1 | era: pre-1.18.1 -->

For those using linux, and unable to get the .bat to update, I used python to update the BattleMusic.lua.

 **How to use it:**
- Go to your Interface/AddOns/BattleMusic/music folder
open up a terminal in this folder
download python3 (ubuntu: sudo apt install python3
type nano UpdatePlaylist.py
paste the script below
run the script: python3 UpdatePlaylist.py
UpdatePlaylist.py Code: Select all

```
import os
import re

# Clear the existing playlist.txt
with open('playlist.txt', 'w') as f:
pass  # Create or clear the file

# Loop through all MP3 files in the current directory
mp3_files = [f for f in os.listdir('.') if f.endswith('.mp3')]
with open('playlist.txt', 'a') as f:
for i, mp3_file in enumerate(mp3_files):
# Append the filename enclosed in quotes to playlist.txt
f.write(f'"{mp3_file}"')

# Check if this is not the last file in the loop
if i < len(mp3_files) - 1:
f.write(',\n')
else:
f.write('\n')

# Generate Lua code to populate the 'playlist' array
with open('../BattleMusic.lua.tmp', 'w') as f:
f.write('local playlist = {\n')
with open('playlist.txt', 'r') as playlist_file:
f.write(playlist_file.read())
f.write('}\n')

# Read the existing BattleMusic.lua file
with open('../BattleMusic.lua', 'r', encoding='utf-8') as f:
content = f.read()

# Replace the existing 'playlist' array definition
new_content = re.sub(r'local playlist\s*=\s*{[^}]*}', open('../BattleMusic.lua.tmp').read(), content)

# Write the updated content back to BattleMusic.lua
with open('../BattleMusic.lua', 'w', encoding='utf-8') as f:
f.write(new_content)

# Clean up the temporary file
os.remove('../BattleMusic.lua.tmp')
os.remove('playlist.txt')

print("Playlist updated in BattleMusic.lua!")
```

*Last edited by slaxim on Thu Mar 27, 2025 10:19 am, edited 1 time in total.*

## Post 124066 by Reploidrocsa (Bug Report Enthusiast) — 2025-03-27T12:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124066#p124066 | page 1 | era: pre-1.18.1 -->

Nice.

One question, battle music can be setup to play speficic tracks on specific enemies (aka, specific track for specific boss)

## Post 129197 by Zmarotrix — 2025-04-30T22:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129197#p129197 | page 1 | era: pre-1.18.1 -->

> **slaxim wrote: Thu Mar 27, 2025 10:16 am**
> For those using linux, and unable to get the .bat to update, I used python to update the BattleMusic.lua.
>
>  **How to use it:**
> - Go to your Interface/AddOns/BattleMusic/music folder
>    open up a terminal in this folder
>    download python3 (ubuntu: sudo apt install python3
>    type nano UpdatePlaylist.py
>    paste the script below
>    run the script: python3 UpdatePlaylist.py
>  UpdatePlaylist.py Code: Select all
>
> ```
> import os
> import re
>
> # Clear the existing playlist.txt
> with open('playlist.txt', 'w') as f:
>     pass  # Create or clear the file
>
> # Loop through all MP3 files in the current directory
> mp3_files = [f for f in os.listdir('.') if f.endswith('.mp3')]
> with open('playlist.txt', 'a') as f:
>     for i, mp3_file in enumerate(mp3_files):
>         # Append the filename enclosed in quotes to playlist.txt
>         f.write(f'"{mp3_file}"')
>
>         # Check if this is not the last file in the loop
>         if i < len(mp3_files) - 1:
>             f.write(',\n')
>         else:
>             f.write('\n')
>
> # Generate Lua code to populate the 'playlist' array
> with open('../BattleMusic.lua.tmp', 'w') as f:
>     f.write('local playlist = {\n')
>     with open('playlist.txt', 'r') as playlist_file:
>         f.write(playlist_file.read())
>     f.write('}\n')
>
> # Read the existing BattleMusic.lua file
> with open('../BattleMusic.lua', 'r', encoding='utf-8') as f:
>     content = f.read()
>
> # Replace the existing 'playlist' array definition
> new_content = re.sub(r'local playlist\s*=\s*{[^}]*}', open('../BattleMusic.lua.tmp').read(), content)
>
> # Write the updated content back to BattleMusic.lua
> with open('../BattleMusic.lua', 'w', encoding='utf-8') as f:
>     f.write(new_content)
>
> # Clean up the temporary file
> os.remove('../BattleMusic.lua.tmp')
> os.remove('playlist.txt')
>
> print("Playlist updated in BattleMusic.lua!")
> ```

Yeah, I forgot Turtle supported Linux. I don't think bat files are typically considered good form, but I wanted to make the experience as user friendly as possible. Thank you for this.

## Post 147979 by basednoob (Patch Note Conspiracy Theorist) — 2025-08-24T09:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147979#p147979 | page 1 | era: pre-1.18.1 -->

found this other addon [Soundtrack](https://web.archive.org/web/20060509035757if_/http://downloadmod.worldofwar.net:80/upload/ui/1141514717Soundtrack%20v0.23.zip) which allows you to swap music and sounds based on events. see the Readme.pdf inside for more details.
![Image](https://web.archive.org/web/20060227005153if_/http://ui.worldofwar.net:80/images/ui/1139770512BattleEvents.jpg)
![Image](https://web.archive.org/web/20060227005117if_/http://ui.worldofwar.net:80/images/ui/1139770513ZoneEvents.jpg)

## Post 149432 by Dragenfell — 2025-08-30T19:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149432#p149432 | page 1 | era: pre-1.18.1 -->

Your mod works just great, I couldn't even imagine how I played without it before))
I remember a similar addon for 3.3.5, only there the music started specifically during PVP, and you could also change and add tracks.

## Post 158106 by Zmarotrix — 2025-11-02T07:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158106#p158106 | page 1 | era: 1.18.1-announced-pre-release -->

Just so anyone who finds this knows, the original addon developer has updated his version to be far more robust than mine. I don't plan to go back to working on this so you should check his out.

<https://github.com/Fiurs-Hearth/BattleMusic>

