---
title: "Resolution problem"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6249"
topic_id: 6249
forum_id: 3
forum: "Help & Support"
author: "Schmegulon"
author_authority: "player"
posted: "2023-03-28T01:05:00Z"
last_post: "2024-01-18T22:54:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T08:55:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Resolution problem

## Post 39352 by Schmegulon — 2023-03-28T01:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39352#p39352 | page 1 | era: pre-1.18.1 -->

I've had this problem in the past when I used dual monitors, but I only use 1 monitor now. The game doesn't realize that it can play at 1920x1080. I've tried EVERYTHING. Every fix that I've seen online. Please help!

picture of video settings:

[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/5x97iLv]

## Post 39365 by Cabadath514 — 2023-03-28T03:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39365#p39365 | page 1 | era: pre-1.18.1 -->

I have this exact same issue! would be nice to know how to fix it

## Post 39366 by Sinrek (Grandmaster of Forum PvP) — 2023-03-28T04:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39366#p39366 | page 1 | era: pre-1.18.1 -->

Do you have a Code: Select all

```
SET gxResolution "1920x1080"
```

line in your **Config.wtf** file?

## Post 39377 by Andre612 — 2023-03-28T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39377#p39377 | page 1 | era: pre-1.18.1 -->

When Im changing my 2nd Screen to Landscape this solves the Problem for me

## Post 40293 by Schmegulon — 2023-04-04T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40293#p40293 | page 1 | era: pre-1.18.1 -->

> **Sinrek wrote: Tue Mar 28, 2023 4:03 am**
> Do you have a Code: Select all
>
> ```
> SET gxResolution "1920x1080"
> ```
>
>  line in your **Config.wtf** file?

when i change it to that, it immediately switches it back to 800x600. i've tried to make it read-only too, but then it basically ignores the file altogether. resolution is 800x600 but the file stays the same. then when i change the file back and try it again, sure enough it changes to 800x600 lol.

## Post 40315 by Sinrek (Grandmaster of Forum PvP) — 2023-04-04T22:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40315#p40315 | page 1 | era: pre-1.18.1 -->

> **Schmegulon wrote: Tue Apr 04, 2023 6:38 pm**
> > **Sinrek wrote: Tue Mar 28, 2023 4:03 am**
> > Do you have a Code: Select all
> >
> > ```
> > SET gxResolution "1920x1080"
> > ```
> >
> >  line in your **Config.wtf** file?
>
>   when i change it to that, it immediately switches it back to 800x600. i've tried to make it read-only too, but then it basically ignores the file altogether. resolution is 800x600 but the file stays the same. then when i change the file back and try it again, sure enough it changes to 800x600 lol.

Perhaps try this troubleshooting guid then?

If your game displays nothing but a black screen:

Please find the config located in your game folder: WoW/WTF/Config.wtf
Open it and add the following lines: SET gxWindow "1" SET gxMaximize "1"
Save it and close it.

If you don't see the right resolution in your video settings:

∙ Make sure that the game is using the proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off the second monitor, launch the game set the settings to windowed/maximized with the desired resolution. Restart your game and then plug in the monitor.
∙ Open your config.wtf and modify resolution directly, for example, SET gxResolution "1920x1080", and save.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

For other issues. Try those methods one by one:

∙ Enable Vertex Animation Shaders in WoW Video settings.
∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"
∙ Try using DXVK to replace the DirectX 9 renderer with Vulkan. This should solve most of the graphical glitches. Download it from here and place the 32-bit.dll files in the game folder: <https://github.com/doitsujin/dxvk/releases/tag/v1.10.3>
∙ Try switching between the graphic API as described here: [https://www.mmo-champion.com/threads/68 ... vs-DirectX](https://www.mmo-champion.com/threads/687894-OpenGL-vs-DirectX)
∙ Try using this third-party modification created to eliminate stutter and animation lag: <https://github.com/hannesmann/vanillafixes>

## Post 40568 by Schmegulon — 2023-04-06T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40568#p40568 | page 1 | era: pre-1.18.1 -->

> **Sinrek wrote: Tue Apr 04, 2023 10:34 pm**
> > **Schmegulon wrote: Tue Apr 04, 2023 6:38 pm**
> > > **Sinrek wrote: Tue Mar 28, 2023 4:03 am**
> > > Do you have a Code: Select all
> > >
> > > ```
> > > SET gxResolution "1920x1080"
> > > ```
> > >
> > >  line in your **Config.wtf** file?
> >
> >   when i change it to that, it immediately switches it back to 800x600. i've tried to make it read-only too, but then it basically ignores the file altogether. resolution is 800x600 but the file stays the same. then when i change the file back and try it again, sure enough it changes to 800x600 lol.
>
>   Perhaps try this troubleshooting guid then?
>
>  If your game displays nothing but a black screen:
>
>  Please find the config located in your game folder: WoW/WTF/Config.wtf
>  Open it and add the following lines: SET gxWindow "1" SET gxMaximize "1"
>  Save it and close it.
>
>  If you don't see the right resolution in your video settings:
>
>  ∙ Make sure that the game is using the proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
>  ∙ Switch to the Windowed Mode in your video settings.
>  ∙ Turn off the second monitor, launch the game set the settings to windowed/maximized with the desired resolution. Restart your game and then plug in the monitor.
>  ∙ Open your config.wtf and modify resolution directly, for example, SET gxResolution "1920x1080", and save.
>  ∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
>  ∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
>  ∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)
>
>  For other issues. Try those methods one by one:
>
>  ∙ Enable Vertex Animation Shaders in WoW Video settings.
>  ∙ If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"
>  ∙ Try using DXVK to replace the DirectX 9 renderer with Vulkan. This should solve most of the graphical glitches. Download it from here and place the 32-bit.dll files in the game folder: <https://github.com/doitsujin/dxvk/releases/tag/v1.10.3>
>  ∙ Try switching between the graphic API as described here: [https://www.mmo-champion.com/threads/68 ... vs-DirectX](https://www.mmo-champion.com/threads/687894-OpenGL-vs-DirectX)
>  ∙ Try using this third-party modification created to eliminate stutter and animation lag: <https://github.com/hannesmann/vanillafixes>

MAN! i gotta say you're a legend. thank you so much, i just had to add the windowed mode setting in the wtf folder and it's working just like new now. thank you so much!

## Post 40629 by Sinrek (Grandmaster of Forum PvP) — 2023-04-07T07:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40629#p40629 | page 1 | era: pre-1.18.1 -->

> **Schmegulon wrote: Thu Apr 06, 2023 6:47 pm**
> MAN! i gotta say you're a legend. thank you so much, i just had to add the windowed mode setting in the wtf folder and it's working just like new now. thank you so much!

Glad it's been resolved that easily. Enjoy your stay.   smiling_turtle

## Post 76723 by Boaz — 2023-11-09T22:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76723#p76723 | page 1 | era: pre-1.18.1 -->

So I narrowed the issue down to my second monitor actually registering as monitor 0 out of 2 (0 is my portrait mode monitor) (1 is my landscape mode main monitor)

I used to use a script to set display to one display then switch back to extend screens after Wow.exe launches, but that started to fail on my new reformatting of my OS.

I think the monitors reconfigured their arrangement. What I now do is a simpler script, it rotates both monitors to landscape, launches WoW.exe and then promptly after rotates that second monitor back to portrait mode.

This works beautifully if you prefer to have a main monitor as landscape, and a secondary monitor as portraid mode and you are experiencing this issue.

Here is the downloadable .ps1 script you have to put in a folder on your OS:
[https://github.com/gmiwoj/Windows-Displ ... ion-Script](https://github.com/gmiwoj/Windows-Display-Orientation-Script)

Then you have to save it to a folder. I used C:\Users\3847\Documents for this example.

Now open up notepad or any text editor of your liking and put in:

powershell.exe -ExecutionPolicy Bypass -File "C:\Users\3847\Documents\windows-display-orientation-script.ps1" 0 0
#powershell -Command "displayswitch.exe /internal"
& "C:\Program Files (x86)\Turtle Wow\twmoa_1165\WoWFoV.exe"   #your path here
Start-Sleep -Seconds 5       # change time depending on how fast your system loads the game.
#powershell -Command "displayswitch.exe /extend"
powershell.exe -ExecutionPolicy Bypass -File "C:\Users\3847\Documents\windows-display-orientation-script.ps1" 0 270

Save the above lines of code to a Whatever.ps1 file in any good folder. I again used C:\Users\3847\Documents for this example.

Then you have to create a new shortcut on your desktop and have it point to the powershell.exe program on your windows machine. Do this by placing the following code in the TARGET: form right under target location: Copy this line and adjust the quoted part of it to the path of your whatever.ps1 script:

C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -File "C:\Users\3847\Documents\Wow.ps1"

Where the quoted item is the path to your new .ps1 file containing the scripts to run. (not the ps1 file from github)

You can also remove the # sign from lines 2 and 5 to have this work for both tricks. Or if you want one or the other.

Hope this helps somebody from restarting WoW.exe or their computer a hundred and a half times to figure this out like I did. Now I can finally play the game lol.  turtle_tongue

## Post 85253 by Schmegulon — 2024-01-18T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85253#p85253 | page 1 | era: pre-1.18.1 -->

i have dire news. it actually DIDNT solve the problem. it started happening again, and nothing's fixing it. no idea why, i've tried everything all over again but nothing is fixing it

