---
title: "Change music on a per-subzone base"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18979"
topic_id: 18979
forum_id: 18
forum: "AddOns"
author: "Amyloriley"
author_authority: "player"
posted: "2025-04-30T13:19:00Z"
last_post: "2025-06-14T19:41:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T10:25:22Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Change music on a per-subzone base

## Post 129153 by Amyloriley — 2025-04-30T13:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=129153#p129153 | page 1 | era: pre-1.18.1 -->

The gameplay of the classic WoW games is the most fun for me. That said, I do love the music from the wider World of Warcraft world. And I wanted to import the music to the classic game. So, I made an addon.

It's my first addon, so it's not really complex. It doesn't even contain a UI. Still, here's the lua code for your own pleasure, from my AmyAlternateMusic.lua file.
Code: Select all

```
local frame = CreateFrame("Frame")
frame:RegisterEvent("ZONE_CHANGED")

local function AlternateMusic()

if GetSubZoneText() == "" then
StopMusic()
end

if GetSubZoneText() == "Stratholme" then
PlayMusic("Interface\\AddOns\\AmyMusic\\stratholme-alley.mp3")
end

if GetSubZoneText() == "The Dark Portal" then
PlayMusic("Interface\\AddOns\\AmyMusic\\outlands-historic-intro.mp3")
end

end

frame:SetScript("OnEvent", AlternateMusic)
```

and here's the AmyAlternateMusic.toc file code, for completeness.
Code: Select all

```
## Interface: 11200
## Title: AmyMusic
## Author: Amy
## Notes: Amy's Music Addon
AmyAlternateMusic.lua
```

The code above, when you enter the Stratholme subzone of the Eastern Plaguelands (not the instance itself), the [Stratholme Alley](https://www.youtube.com/watch?v=OO6WuMBd2_Q) theme starts playing.

Similarly, when you enter The Dark Portal of the Blasted Lands subzone (the zone with the black crater in front of the portal), you hear [some Outlands music](https://www.youtube.com/watch?v=Wid_BX20bJM) seeping through.

The mp3 files are all in my addon folder in the same folder as the .lua file and the .toc file. If you want to customize the addon, bring your own music to your addon folder.

Future personal changes:

• Theramore Isle music, [a bigger nudge to its leader on top of the tower](https://www.youtube.com/watch?v=7S-5jpyKw5Y).
• The Stockpile music, [that is, the cave in northern Stranglethorn Vale next to Kurzen's Compound](https://www.youtube.com/watch?v=1F_15TIlu8I), with all those elites and stealthed human enemies.
• Valor's Rest music, [when you enter Silithus on foot](https://www.youtube.com/watch?v=S1Y9eZIuDhY). It has to be said, this Portal-esque music fits Silithus very well imo.
• The Sepulcher music, [undead music from Warcraft 3](https://www.youtube.com/watch?v=9tb2lPxvvKU). For me, the tracks of that game seem to fit the outposts in WoW the most. Undead = the Silverpine Forest encampment.
• Forest Song, [here the night elf music fits most imo](https://www.youtube.com/watch?v=vt8lEmNRUcM).
• Gadgetzan, [probably a hot take for this hot desert city](https://www.youtube.com/watch?v=Plu3Mplgtos).

In the end it's all about personal association. So here a discussion question: which music do you think fits which subzone well in Vanilla WoW? Above are my takes, but yours can be different of course!

## Post 131303 by Ramatyul — 2025-05-16T03:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131303#p131303 | page 1 | era: pre-1.18.1 -->

Hi, I can't find the addon to download it.

## Post 132062 by mojer — 2025-05-20T08:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132062#p132062 | page 1 | era: pre-1.18.1 -->

> **Amyloriley wrote: Wed Apr 30, 2025 1:19 pm**
> The gameplay of the classic WoW games is the most fun for me. That said, I do love the music from the wider World of Warcraft world. And I wanted to import the music to the classic game. So, I made an addon.
>
>  It's my first addon, so it's not really complex. It doesn't even contain a UI. Still, here's the lua code for your own pleasure, from my AmyAlternateMusic.lua file.
>  [wordle unlimited](https://wordleunlimited.io) Code: Select all
>
> ```
> local frame = CreateFrame("Frame")
> frame:RegisterEvent("ZONE_CHANGED")
>
> local function AlternateMusic()
>
> 	if GetSubZoneText() == "" then
> 		StopMusic()
> 	end
>
> 	if GetSubZoneText() == "Stratholme" then
> 		PlayMusic("Interface\\AddOns\\AmyMusic\\stratholme-alley.mp3")
> 	end
>
> 	if GetSubZoneText() == "The Dark Portal" then
> 		PlayMusic("Interface\\AddOns\\AmyMusic\\outlands-historic-intro.mp3")
> 	end
>
> end
>
> frame:SetScript("OnEvent", AlternateMusic)
> ```
>
>
>  In the end it's all about personal association. So here a discussion question: which music do you think fits which subzone well in Vanilla WoW? Above are my takes, but yours can be different of course!

Thanks for your idea!

## Post 132504 by Amyloriley — 2025-05-22T08:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132504#p132504 | page 1 | era: pre-1.18.1 -->

> **Ramatyul wrote: Fri May 16, 2025 3:42 am**
> Hi, I can't find the addon to download it.

There is no download button. I'm not a professional addon developer, there are lots of things I don't know yet to make it releaseable.

For instance, you might expect a user interface. A window with buttons, in WoW, to go through the settings. I know I would. But I have no idea on how to create a user interface as such.

Then there is the music having copyright problem. I can add my own music from my own computer to the addon folder and make it work, but you'll have to supply your own music. It cannot work out of the box legally. Though perhaps you can argue with a grey argument on using music from the TurtleWoW game files.

Lastly, there is the personal problem. I might attach the Hellfire Peninsula music to the Dark Portal subzone, but you might have other ideas. Perhaps, since the Hellfire Peninsula tracks are almost all Matt Uelmen's tracks, you might associate them more with areas with lots of enemies like in the Diablo games. It's hard to add a "default" that works for everyone.

The addon code is provided above.

If you create your own addon, that is,

 1. Go to your TurtleWoW directory
 2. Go to \Interface\Addons
 3. Create a new folder in it with a name you like
 4. In that new folder, add a blank text document with a name of your folder, and replace the .txt extension with .toc
 5. In that new folder, also add a blank text document with the name of your folder, and replace the .txt extension with .lua
 6. In that new folder, also put your personal .mp3's that you want to show up in your game in certain subzones
 7. Copy-paste the above text from the .toc quote to your own .toc file using Notepad. The quote with the double # hashtags. Be sure to name the {name}.lua line the same as your .lua file. Save the file.
 8. Copy-paste the above text from the .lua quote to your own .lua file using Notepad. Save the file.
 9. I think the text should be human-readable with some imagination. The lines with the subzones in double quotes refer to the WoW subzones. The lines with the mp3 in double quotes refer to the location of the mp3's. Alter them as you see fit. Of course,\\ AmyMusic\\ should be the name you gave your own addon.
 10. Start up WoW and go to the subzones to test them out.

Tip: your addon might start up as inactive. Be sure to click the AddOns button in WoW's character selection screen and make sure your addon is currently active.

Tip: lua is case-sensitive. stratholme-alley.mp3 is different from Stratholme-Alley.mp3, and both are different from strathome-alley.MP3, even if Windows Explorer thinks they're all the same file. If you made a typo, or messed up your capital letters, it might not work.

Tip: instead of going to a far-away subzone, test your mp3's at closer subzones to your current character. If you're currently in Durotar, test if your custom Everlook track in Razor Hill or Skull Rock, for instance. You can always change it later once you're sure it works.

Tip: my addon code triggers when your character enters a subzone, not when you log in into one. So stand close to the border of a subzone for testing tracks. I'm sure that's doable, I just haven't figured out how myself.

Tip: don't forget, the subzones and mp3 locations are all within double quotes. If you accidentally deleted one, nothing might work anymore. Put the double quote back.

Tip: make small changes and test them out. Don't type lots of code at once. If you mess up anywhere, you're less likely to find your bug in a large code change.

Tip: take everything in moderation, even World of Warcraft!

## Post 135345 by Armorialfrost — 2025-06-11T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135345#p135345 | page 1 | era: pre-1.18.1 -->

> **Amyloriley wrote: Thu May 22, 2025 8:52 am**
> > **Ramatyul wrote: Fri May 16, 2025 3:42 am**
> > Hi, I can't find the addon to download it.
>
>   There is no download button. I'm not a professional addon developer, there are lots of things I don't know yet to make it releaseable.
>
>  For instance, you might expect a user interface. A window with buttons, in WoW, to go through the settings. I know I would. But I have no idea on how to create a user interface as such.
>
>  Then there is the music having copyright problem. I can add my own music from my own computer to the addon folder and make it work, but you'll have to supply your own music. It cannot work out of the box legally. Though perhaps you can argue with a grey argument on using music from the TurtleWoW game files.
>
>  Lastly, there is the personal problem. I might attach the Hellfire Peninsula music to the Dark Portal subzone, but you might have other ideas. Perhaps, since the Hellfire Peninsula tracks are almost all Matt Uelmen's tracks, you might associate them more with areas with lots of enemies like in the Diablo games. It's hard to add a "default" that works for everyone.
>
>  The addon code is provided above.
>
>  If you create your own addon, that is,
>
>  1. Go to your TurtleWoW directory
>  2. Go to \Interface\Addons
>  3. Create a new folder in it with a name you like
>  4. In that new folder, add a blank text document with a name of your folder, and replace the .txt extension with .toc
>  5. In that new folder, also add a blank text document with the name of your folder, and replace the .txt extension with .lua
>  6. In that new folder, also put your personal .mp3's that you want to show up in your game in certain subzones
>  7. Copy-paste the above text from the .toc quote to your own .toc file using Notepad. The quote with the double # hashtags. Be sure to name the {name}.lua line the same as your .lua file. Save the file.
>  8. Copy-paste the above text from the .lua quote to your own .lua file using Notepad. Save the file.
>  9. I think the text should be human-readable with some imagination. The lines with the subzones in double quotes refer to the WoW subzones. The lines with the mp3 in double quotes refer to the location of the mp3's. Alter them as you see fit. Of course,\\ AmyMusic\\ should be the name you gave your own addon.
>  10. Start up WoW and go to the subzones to test them out.
>
>  Tip: your addon might start up as inactive. Be sure to click the AddOns button in WoW's character selection screen and make sure your addon is currently active.
>
>  Tip: lua is case-sensitive. stratholme-alley.mp3 is different from Stratholme-Alley.mp3, and both are different from strathome-alley.MP3, even if Windows Explorer thinks they're all the same file. If you made a typo, or messed up your capital letters, it might not work.
>
>  Tip: instead of going to a far-away subzone, test your mp3's at closer subzones to your current character. If you're currently in Durotar, test if your custom Everlook track in Razor Hill or Skull Rock, for instance. You can always change it later once you're sure it works.
>
>  Tip: my addon code triggers when your character enters a subzone, not when you log in into one. So stand close to the border of a subzone for testing tracks. I'm sure that's doable, I just haven't figured out how myself.
>
>  Tip: don't forget, the subzones and mp3 locations are all within double quotes. If you accidentally deleted one, nothing might work anymore. Put the double quote back.
>
>  Tip: make small changes and test them out. Don't type lots of code at once. If you mess up anywhere, you're less likely to find your bug in a large code change.
>
>  Tip: take everything in moderation, even World of Warcraft!

Hi! I am using your code to create a full fledged music overhaul. It's going alright so far, but I have some questions. When entering a new subzone (e.g. Going from Northshire Valley into Northshire Abbey) the music I added for Northshire Valley doesn't quit playing and the music for Northshire Abbey doesn't start playing.

Is there a way to fix this?

## Post 135349 by Armorialfrost — 2025-06-11T15:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135349#p135349 | page 1 | era: pre-1.18.1 -->

Also is there a way to change the login screen music with this code? And what about the cinematic music when making a new character?

## Post 135587 by Amyloriley — 2025-06-13T12:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135587#p135587 | page 1 | era: pre-1.18.1 -->

> **Armorialfrost wrote: Wed Jun 11, 2025 3:31 pm**
> Also is there a way to change the login screen music with this code? And what about the cinematic music when making a new character?

No, not that I know of. This code only works for outdoors subzones, and not even at in-city subzones ("Trade District").

## Post 135588 by Amyloriley — 2025-06-13T12:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135588#p135588 | page 1 | era: pre-1.18.1 -->

> **Armorialfrost wrote: Wed Jun 11, 2025 3:22 pm**
> Hi! I am using your code to create a full fledged music overhaul. It's going alright so far, but I have some questions. When entering a new subzone (e.g. Going from Northshire Valley into Northshire Abbey) the music I added for Northshire Valley doesn't quit playing and the music for Northshire Abbey doesn't start playing.
>
>  Is there a way to fix this?

That seems like the only thing it should do, doesn't work. Can you paste your code? It might be just a minor bug for all we both know.

## Post 135724 by MadafakinRio — 2025-06-14T19:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=135724#p135724 | page 1 | era: pre-1.18.1 -->

OP, may I suggest using some AI to help you with stuff you don't know. It's actually surprisingly good at WoW addons, I've tried something myself.

