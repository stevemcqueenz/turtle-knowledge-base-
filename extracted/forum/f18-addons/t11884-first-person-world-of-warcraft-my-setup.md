---
title: "First Person World of Warcraft (My Setup)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11884"
topic_id: 11884
forum_id: 18
forum: "AddOns"
author: "Rfelleto"
author_authority: "player"
posted: "2023-11-24T19:09:00Z"
last_post: "2026-03-23T23:54:00Z"
post_count: 23
pages: 1
fetched: "2026-09-10T10:21:28Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# First Person World of Warcraft (My Setup)

## Post 78618 by Rfelleto (Barrens Chat Casualty) — 2023-11-24T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78618#p78618 | page 1 | era: pre-1.18.1 -->

Hi all,

I have decided to post my first person view addon setup to encourage other people to try playing this way or to get some suggestions to improve my world of warcraft / skyrim experience.

The current two improvements I would like to make would be:
 - Cross hair - I can use a power aura to make a cross hair in the middle of the screen, but to make it so I can interact and target monster with it seems to be a much bigger endeavor. I would welcome any ideas.

 - Make mobs healthbars more visible when they are clumped near you. This seems to be hard as well since all nameplates are located above the enemies heads. That diablo addon that retail has with the stylized enemy health bars would be AMAZING for first person view but alas there doesn't seem to be a 1.12 counterpart.

The addons I used for my setup were:
 - Shagu (UI and plates)
 - Extraresourcebars
 - Macro for mouselook

Let me know your thoughts!

![Image](https://ibb.co/8MKsdqs)

## Post 78764 by Rfelleto (Barrens Chat Casualty) — 2023-11-26T06:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78764#p78764 | page 1 | era: pre-1.18.1 -->

I managed to use power auras to add a crosshairs icon to the middle of the screen. It is not interactable though. If anyone with experience with lua code could help me develop an addon that makes the cursor static in the middle of the screen and still able to look around that would be heaven on earth.

![Image](https://ibb.co/2Ktpsj3)

## Post 78779 by Wilczan (Barrens Chat Casualty) — 2023-11-26T12:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=78779#p78779 | page 1 | era: pre-1.18.1 -->

Sorry but your images does not show up.

## Post 79094 by Rfelleto (Barrens Chat Casualty) — 2023-11-28T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79094#p79094 | page 1 | era: pre-1.18.1 -->

> **Wilczan wrote: Sun Nov 26, 2023 12:00 pm**
> Sorry but your images does not show up.

Thank you for letting me know!

I will provide a direct link maybe it will show up now.
<https://imgbb.com/2Ktpsj3>

Update: I was able to find a Mlooklock addon that works that it's just amazing for what I'm trying to accomplish. However, I'm very new to the whole addon coding with lua stuff. What I want to do is to show the crosshair while the player has mouselooking activated and make it dissapear when the mouselook is disabled. I copied this from another addon with a similar functionality but I can't get it to work. Does anyone have any advice? Any help would be greatly appreciated:

[https://media.discordapp.net/attachment ... height=364](https://media.discordapp.net/attachments/532703621385814026/1178918134955134987/image.png?ex=6577e412&is=65656f12&hm=3f29072fafab9d9cf31003335257f1fe4460aab23eb34cac0fe0b5044a1938dd&=&format=webp&quality=lossless&width=1400&height=364)

[https://media.discordapp.net/attachment ... height=323](https://media.discordapp.net/attachments/532703621385814026/1178918135483609098/image.png?ex=6577e412&is=65656f12&hm=5bdfd4ac0eab2d60b1deb0242729f793cddef13647c7f09a80f715ca0f1997c4&=&format=webp&quality=lossless&width=1400&height=323)

## Post 79330 by Rfelleto (Barrens Chat Casualty) — 2023-11-30T00:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79330#p79330 | page 1 | era: pre-1.18.1 -->

Here is the addon for mouselook with a crosshair added when mouselooking. I can't make the crosshair interact with the game (maybe a good lua coder can help) so far. I have tried a lot of commands to no avail. Sorry T-T

<https://github.com/rfelleto/Mlooklock>

## Post 79337 by Amani — 2023-11-30T01:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79337#p79337 | page 1 | era: pre-1.18.1 -->

interesting，like the way goblins see this world xD

## Post 79344 by Rfelleto (Barrens Chat Casualty) — 2023-11-30T03:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79344#p79344 | page 1 | era: pre-1.18.1 -->

It's an interesting way to play for sure. Reminds me of old school EQ

I have got to be honest, I'm playing a druid and when I shapeshift is kind of difficult. Maybe I can try messing around with camera controls a bit, but I think that 11200 environment is very limiting with the camera. Hence, why we don't have a dynamic cam addon.

## Post 79458 by Rfelleto (Barrens Chat Casualty) — 2023-12-01T00:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79458#p79458 | page 1 | era: pre-1.18.1 -->

Okay so I sort of made possible it possible for the "crosshair" to target the nearest enemy when you left click. It was only possible with autohotkey. I posted the file in the discord addon section. So the correct setup would be:

 1. Download Mlooklock (with crosshair) at <https://github.com/rfelleto/Mlooklock>
 - version with no crosshair here: [https://www.wowinterface.com/downloads/ ... kLock.html](https://www.wowinterface.com/downloads/info9628-MLookLockMairelonsLookLock.html)

 2. Download Autohotkeys here: <https://www.autohotkey.com>

 3. Download the Autohotkey script at <https://github.com/rfelleto/Firstperson---Attack>

 4. Run the script by double clicking.

 5. Enter Wow

 6. Go to the Keybindings section to set a keybind for Mlooklock momentary Mouselook.

 7. Press the keybind you selected and you should be in permanent mouselook unless you right click or hold the keybind you selected. With the autohotkey script running you should target enemies you left click.

Plans: Make a target nearest friendly target on click.

## Post 79680 by Nullnvoid — 2023-12-03T00:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=79680#p79680 | page 1 | era: pre-1.18.1 -->

Make a target nearest friendly target on click.

I do not think thats possible in the version of the client turtlewow uses.

## Post 91873 by Rfelleto (Barrens Chat Casualty) — 2024-04-01T16:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91873#p91873 | page 1 | era: pre-1.18.1 -->

After a long hiatus.

It is true I cannot bind that function to left-click in turtle wow.

Only way to do it is through autohot key set to make left click emulate the tab key. That's the best I managed to do.

## Post 91875 by Ibux (Patch Note Conspiracy Theorist) — 2024-04-01T18:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91875#p91875 | page 1 | era: pre-1.18.1 -->

> **Rfelleto wrote: Mon Apr 01, 2024 4:52 pm**
> After a long hiatus.
>
>  It is true I cannot bind that function to left-click in turtle wow.
>
>  Only way to do it is through autohot key set to make left click emulate the tab key. That's the best I managed to do.

maybe you can use something like clique?
<https://github.com/Lexiebean/Clique>

## Post 92887 by Juansaba — 2024-04-16T23:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=92887#p92887 | page 1 | era: pre-1.18.1 -->

Hi everyone! I would love to play in FP but i love to see my character animations, is there any addon for that? I know im asking a lot heh.

xoxo

## Post 94470 by Rfelleto (Barrens Chat Casualty) — 2024-05-10T00:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94470#p94470 | page 1 | era: pre-1.18.1 -->

> **Juansaba wrote: Tue Apr 16, 2024 11:58 pm**
> Hi everyone! I would love to play in FP but i love to see my character animations, is there any addon for that? I know im asking a lot heh.
>
>  xoxo

Hey I'm no programmer just a guy with a dream xD

I do like seeing my character sometimes so I recommend using some quest text addon when talking with NPCs

I use that one that shows your character like "speaking" to the NPC and that usually scratches my itch to see my character. But since wow was never "intended" to be player first person I don't think there is any way to show character animations. Sorry :(

## Post 94471 by Rfelleto (Barrens Chat Casualty) — 2024-05-10T00:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94471#p94471 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Mon Apr 01, 2024 6:48 pm**
> > **Rfelleto wrote: Mon Apr 01, 2024 4:52 pm**
> > After a long hiatus.
> >
> >  It is true I cannot bind that function to left-click in turtle wow.
> >
> >  Only way to do it is through autohot key set to make left click emulate the tab key. That's the best I managed to do.
>
>   maybe you can use something like clique?
>  <https://github.com/Lexiebean/Clique>

I never used it. I will give it a shot. Sorry back to wow after a long hiatus and I will pick up the project again. I suck at this sorry.

## Post 94472 by Rfelleto (Barrens Chat Casualty) — 2024-05-10T00:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94472#p94472 | page 1 | era: pre-1.18.1 -->

I honestly wish I could push the camera up with some addon in classic. I agree that the perspective can be too close to the ground at time.

## Post 94476 by Ibux (Patch Note Conspiracy Theorist) — 2024-05-10T03:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94476#p94476 | page 1 | era: pre-1.18.1 -->

this VR mod would be a cool mod for first person.

[embed: https://www.youtube.com/embed/6emiGy2vWV4]

sadly it only works on 3.3.5a private servers: <https://github.com/ProjectMimer/WoVR>

## Post 94502 by Rfelleto (Barrens Chat Casualty) — 2024-05-10T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94502#p94502 | page 1 | era: pre-1.18.1 -->

I saw this yesterday!

Really hope this gets some traction and someone more capable than I starts working on an addon.

Let me tell you 3.3.5a is miles easier than making addons to 1.12. I have to scour the internet looking for guides because the code that work today just doesn't work in 1.12 environment.

## Post 95089 by Rfelleto (Barrens Chat Casualty) — 2024-05-17T23:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95089#p95089 | page 1 | era: pre-1.18.1 -->

Updated: Fixed the nasty errors with the addon. Shouldn't be any lua errors popping up

I reccommend using the first person addon with the warcraft III UI. Looks beautiful and immersive.

Next: Try to make the crosshair dissapear when I left click and disable Mouselook.

![Image](https://i.ibb.co/cFnd9y2/Wo-WScrn-Shot-051724-183926.png)

## Post 150657 by Futury2000 — 2025-09-07T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150657#p150657 | page 1 | era: pre-1.18.1 -->

I went ahead and set this up, maybe it will help someone.
Here’s an AutoHotkey script for WoW:

Press Alt to toggle the mode on/off.

When enabled: the right mouse button stays held down (so the camera always rotates), and left click sends Tab instead.

Press Alt again to disable the mode — everything goes back to default behavior.
Hope this helps!
Code: Select all

```
#NoEnv
#SingleInstance Force
#InstallKeybdHook
#InstallMouseHook
SendMode Input
SetBatchLines, -1
SetMouseDelay, -1

mode := false

; ===== ФУНКЦИИ ЖЁСТКОГО НАЖАТИЯ ПКМ =====
RDown(){
; MOUSEEVENTF_RIGHTDOWN = 0x0008
DllCall("mouse_event", "UInt", 0x0008, "Int", 0, "Int", 0, "UInt", 0, "UPtr", 0)
}
RUp(){
; MOUSEEVENTF_RIGHTUP = 0x0010
DllCall("mouse_event", "UInt", 0x0010, "Int", 0, "Int", 0, "UInt", 0, "UPtr", 0)
}

; ===== ТАЙМЕР: ПОДДЕРЖКА ЗАЖАТИЯ ПКМ =====
KeepRMB(){
global mode
if (!mode)
return
; периодически обновляем правый даун, чтобы игра «не отпускала»
RDown()
}

; ===== ТОГГЛ ПО ALT (по отпусканию, игнор комбо Alt+Tab/Alt+F4 и пр.) =====
~*LAlt up::
~*RAlt up::
if ( GetKeyState("Tab","P")
|| GetKeyState("F4","P")
|| GetKeyState("Esc","P")
|| GetKeyState("LWin","P") || GetKeyState("RWin","P")
|| GetKeyState("Ctrl","P") || GetKeyState("Shift","P") )
return

mode := !mode
if (mode){
RDown()
SetTimer, KeepRMB, 60   ; каждые ~60мс обновляем нажатие
ToolTip, Камера: ВКЛ
} else {
SetTimer, KeepRMB, Off
RUp()
ToolTip, Камера: ВЫКЛ
}
SetTimer, __HideTip, -700
return

__HideTip:
ToolTip
return

; ===== В РЕЖИМЕ ON: ЛКМ -> Tab (клик не проходит в игру) =====
#If (mode)
*LButton::
SendInput, {Tab}
return
#If

; ===== ЧИСТЫЙ ВЫХОД =====
OnExit, __Cleanup
return

__Cleanup:
if (mode){
SetTimer, KeepRMB, Off
RUp()
}
ExitApp
```

## Post 170718 by Rfelleto (Barrens Chat Casualty) — 2026-03-13T03:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170718#p170718 | page 1 | era: 1.18.1-announced-pre-release -->

Holy shit - I will try to incorporate this into the addon later. Thanks a bunch!

## Post 170726 by Reploidrocsa (Bug Report Enthusiast) — 2026-03-13T07:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170726#p170726 | page 1 | era: 1.18.1-announced-pre-release -->

Nice!
Next step is turning it into doom like this

[embed: https://www.youtube.com/embed/6JtrxLne_3I]

## Post 170747 by Rfelleto (Barrens Chat Casualty) — 2026-03-13T12:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170747#p170747 | page 1 | era: 1.18.1-announced-pre-release -->

Lol thats the plan. Actually I was thinking more Skyrim like.

In any case this seems to be more modern wow and the API is more powerful. Don't know how much of this we can achieve with 1.12 API tho

## Post 172039 by Tomogwarrior — 2026-03-23T23:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172039#p172039 | page 1 | era: post-1.18.1 -->

> **Reploidrocsa wrote: Fri Mar 13, 2026 7:45 am**
> Nice!
>  Next step is turning it into doom like this
>
>
> [embed: https://www.youtube.com/embed/6JtrxLne_3I]

wow that is amazing

