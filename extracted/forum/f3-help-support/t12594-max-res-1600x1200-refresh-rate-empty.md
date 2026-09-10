---
title: "Max res 1600x1200, refresh rate empty"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12594"
topic_id: 12594
forum_id: 3
forum: "Help & Support"
author: "Hehexd"
author_authority: "player"
posted: "2024-01-07T21:59:00Z"
last_post: "2024-12-14T23:48:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:48:50Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Max res 1600x1200, refresh rate empty

## Post 83931 by Hehexd — 2024-01-07T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83931#p83931 | page 1 | era: pre-1.18.1 -->

Tried everything I've seen written as solution that I found here in the forums. One program worked to fix screen resolution (only Windowed tho, game still displayed max 1600x1200), but the image was still stretched.

The refresh rate dropdown is EMPTY. Even the current selected one is blank.

I was able to fix the stretching using the wowfov .exe in one PC, but it does nothing on the other one.

Pls help! ;-;

## Post 83960 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-01-08T07:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83960#p83960 | page 1 | era: pre-1.18.1 -->

> **Hehexd wrote: Sun Jan 07, 2024 9:59 pm**
> Tried everything I've seen written as solution that I found here in the forums. One program worked to fix screen resolution (only Windowed tho, game still displayed max 1600x1200), but the image was still stretched.
>
>  The refresh rate dropdown is EMPTY. Even the current selected one is blank.
>
>  I was able to fix the stretching using the wowfov .exe in one PC, but it does nothing on the other one.
>
>  Pls help! ;-;

Greetings!
Regarding resolution, there are a lot of conventions that can affect the current problem. I'll describe the main ones so you can check it out for yourself.
 1. The client does not support resolutions higher than 1920x1080 - that is, all values above that are set manually and may not work.
Here is an example of how to make manual changes : Open your config.wtf and modify resolution directly, for example: SET gxResolution "1920x1080", save.
 2. The client only supports 60 hertz frame rate. If your monitor is set to a higher value, this may be the cause of the problem. Values above 60 hertz can also be manually set using config, but performance is not guaranteed : If you want to set your framerate higher than 60/75 to 144/240 please edit the game config: WTF > Config.wtf > SET gxRefresh "240"
 3. Some PC configurations with dual monitors may also have problems. Especially if you try to run the client on a monitor other than the primary monitor or if your primary monitor is connected via the display port. Usually the problem is solved by disabling the second monitor before starting the client.
Here are some more options for solving resolution problems :
∙ Make sure that the game is using proper GPU and not the integrated one: [https://www.addictivetips.com/windows-t ... u-windows/](https://www.addictivetips.com/windows-tips/force-app-to-use-dedicated-gpu-windows/)
∙ Switch to the Windowed Mode in your video settings.
∙ Turn off second monitor, launch the game set the settings to windowed/maximized with desired resolution. Restart your game and then plug the monitor.
∙ For Nivida GPU, open your settings: Display > Customize and make sure to check Enable resolutions not exposed by the display.
∙ For Radeon GPU, open your settings, select the smaller monitor and check Virtual Super Resolution.
∙ For multiple monitors you can use CRU: [https://www.monitortests.com/forum/Thre ... tility-CRU](https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU)

[https://discord.com/channels/4666224558 ... 0708507740](https://discord.com/channels/466622455805378571/691438750185553950/1085596420708507740)

## Post 84050 by Hehexd — 2024-01-09T01:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84050#p84050 | page 1 | era: pre-1.18.1 -->

Hello, thanks for the response!

I'll cover your response by topics.

 1. Objectively false. On the PC that is working, the resolution 3440x1440 is set inside the client.
On that same note, on the PC that it does not work, any changes to config.wtf are reverted as soon as I boot the game, no matter the executable ran.
 2. Objectively false. On the PC that is working, the refresh rate 160hz is set inside the client.
On the PC that is not working, the FPS dropdown is empty, suggesting that there's something else wrong than most people, as from all the threads I've read they say it's locked to 60Hz. config.wtf says it is set to 60Hz.
 3. The PC that presents issues has only one monitor, that is of the same model of the PC that is working flawlessly.
Bullet 1. This was checked and is set properly.
Bullet 2. Not applicable.
Bullet 3. I've tried finding this [windows 11], but wasn't able to. The PCs should be equal on that matter, as they were both formatted the same way.
Bullet 4. Not applicable.
Bullet 5. Not applicable.
Bullet 6. Not applicable.

I hope the tech wizards show up! It's sad to see my wife playing in worse quality.

## Post 84060 by Pepesmite (Turtle WoW Team) [STAFF] — 2024-01-09T07:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84060#p84060 | page 1 | era: pre-1.18.1 -->

> **Hehexd wrote: Tue Jan 09, 2024 1:39 am**
> Hello, thanks for the response!
>
>  I'll cover your response by topics.
>
>  1. Objectively false. On the PC that is working, the resolution 3440x1440 is set inside the client.
>  On that same note, on the PC that it does not work, any changes to config.wtf are reverted as soon as I boot the game, no matter the executable ran.
>  2. Objectively false. On the PC that is working, the refresh rate 160hz is set inside the client.
>  On the PC that is not working, the FPS dropdown is empty, suggesting that there's something else wrong than most people, as from all the threads I've read they say it's locked to 60Hz. config.wtf says it is set to 60Hz.
>  3. The PC that presents issues has only one monitor, that is of the same model of the PC that is working flawlessly.
>  Bullet 1. This was checked and is set properly.
>  Bullet 2. Not applicable.
>  Bullet 3. I've tried finding this [windows 11], but wasn't able to. The PCs should be equal on that matter, as they were both formatted the same way.
>  Bullet 4. Not applicable.
>  Bullet 5. Not applicable.
>  Bullet 6. Not applicable.
>
>  I hope the tech wizards show up! It's sad to see my wife playing in worse quality.

Greetings!
Thank you for the feedback. However, everything I have stated is true. All the parameters I have described to you are normal for the client version 1.12.1. The fact that you have one of the configurations working is a great luck. You should realize that the client version 1.12.1 was released in 2004 and may behave differently on different configurations. Especially on modern PCs.

P.s. if at the start of the game all settings are reset, then check whether the folder with the game is not protected from writing and whether it is not located with a read-only mark.
I also suggest you check out our discord. We have a support channel: [https://discord.com/channels/4666224558 ... 0185553950](https://discord.com/channels/466622455805378571/691438750185553950)
Look at post history and also pinned posts. I hope you will overcome this problem! See you in Azeroth!

## Post 84366 by Chimneycap — 2024-01-12T02:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=84366#p84366 | page 1 | era: pre-1.18.1 -->

I also had this problem before, until I found out that my HDMI cable was plugged into my INETL integrated graphics card interface, but my RTX2060TI interface was not connected. I actually plugged it in like this for a year, oh my god

## Post 112746 by Herbalhabitz — 2024-12-14T23:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112746#p112746 | page 1 | era: pre-1.18.1 -->

I just fixed this issue by disabling custom scale in my display settings.

