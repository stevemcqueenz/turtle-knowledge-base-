---
title: "additional Client fixes - Byte Patcher"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2331"
topic_id: 2331
forum_id: 29
forum: "Modding"
author: "Subannix"
author_authority: "player"
posted: "2021-12-18T15:10:00Z"
last_post: "2024-09-16T07:58:00Z"
post_count: 49
pages: 2
fetched: "2026-09-10T10:42:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# additional Client fixes - Byte Patcher

## Post 14632 by Subannix — 2021-12-18T15:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14632#p14632 | page 1 | era: pre-1.18.1 -->

Edit:15.07.2022 - Sourcecode:
[embed: //pastebin.com/embed_iframe.php?i=su1FEtqm]

Not sure if this is the right place, but anyways...

I made this simple Byte Patcher in Visual Basic with some old but commonly known fixes for the 1.12 Client.
Also included "AutoLoot" which doesn't seem to be against ToS this way and also my own "fix" disabling the WDB/Cache generation.

It saves and loads your selected fixes upon the next time you open the Patcher.
 **You can basically apply or undo the fixes on demand/to your liking.**

![Image](https://cdn.discordapp.com/attachments/786215305290317867/921745600138084362/Desktop_Screenshot_2021.12.18_-_13.41.36.02.png)

 **apply 4GB Patch**
Makes the game use up to 4GB of virtual memory instead of the designated 2GB.
(same functionality as the 4GB Patch from [NTCore](https://ntcore.com/?page_id=371))

 **disable Cache generation**
Basically hinders the game from creating a WDB folder and it's cache files within.
(simply changes the foldername to an "blank" name, and since windows can't create such folders the folder and the files within don't get generated at all)

 **increased Sound Channels**
Raises the limit of the maximum useable Sound Channels from 12 to 256.
(ever wondered why some sound effects won't play when you're for e.g. in an crowded area, because all useable sound channels are occupied at that moment.)

 **improved Field of View**
Increases the FoV value from the original ~1.57 to ~1.925 which is used in WotLK.
(same value as in the improved-fov.exe from [Torta's Github](https://github.com/slowtorta/turtlewow-improved-fov))

 **AutoLoot w/o shift**
It basically revereses the functionality of it, so you loot automatically without holding [shift] (or your designated key) and loot normally while holding it.

 11 Bytes in total get changed with this Patcher.

DL Link: [https://www.dropbox.com/s/hibffw7xx7n4d ... r.exe?dl=0](https://www.dropbox.com/s/hibffw7xx7n4dlc/Patcher.exe?dl=0)

Make sure the Patcher is in your WoW folder. (like the picture above)
Make sure the game isn't running while using the Patcher. (the Patcher will throw an error and it won't work)
Make sure your WoW application is called WoW.exe.

Would be cool to see such additions in an custom Launcher for Turtle WoW.   satisfied_turtle

*Last edited by Subannix on Fri Jul 15, 2022 7:53 pm, edited 9 times in total.*

## Post 14634 by Stubbies — 2021-12-18T20:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14634#p14634 | page 1 | era: pre-1.18.1 -->

This sounds great thanks, hoping others will check it out. I'll wait till then, just incase :p.

## Post 14635 by Subannix — 2021-12-18T21:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14635#p14635 | page 1 | era: pre-1.18.1 -->

> **Stubbies wrote: Sat Dec 18, 2021 8:26 pm**
> This sounds great thanks, hoping others will check it out. I'll wait till then, just incase :p.

I mean it could look sketchy since it's my first post on the forum, but it isn't harmful in anyway and you don't even need to give it admin privileges to run it.

I was using this for my own at first, but I figured I might share it so people don't need more than one .exe or backups for example when you're using the [improved-fov exe](https://github.com/slowtorta/turtlewow-improved-fov) from Torta and want to revert back later on.
Just with a click of a button you can do now so, without the need of extra backup files and no need to fiddle around wit Hex Editors if you wanna undo stuff when you didn't made an backup.

 **But since it's modifying another application, it could potentionally get flagged from your Anti Virus as malicious.**
scared_turtle

Edit: If there's questions or someone wants to see the source code itself, you can ping me on the turtle wow discord server.

## Post 14636 by Torta (Turtle WoW Team) [STAFF] — 2021-12-18T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14636#p14636 | page 1 | era: pre-1.18.1 -->

Hey, looks great. Memory and sound modifications might come handy, will have to test them :) Thank you!

## Post 14640 by Atharyx — 2021-12-19T13:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14640#p14640 | page 1 | era: pre-1.18.1 -->

Just tested it and it seems to be working great. No problems at all on my side :)

## Post 14876 by Subannix — 2021-12-28T00:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14876#p14876 | page 1 | era: pre-1.18.1 -->

Just checked the Binary of the 1.16 Patch there seems none of these changes made, readded the Download Link to the tool if anyone want's to use it :)

If anyone want's to do it them self via hex-editing:
Code: Select all

```
Large Address Aware Flag aka 4GB Patch: 0x126; 0F > 2F
Disable Cache: 0x455B38; 57, 44, 42 > 0, 0, 0
Improved FoV: 0x4089B4; DB, F, C9 > 66, 66, F6
Sound Channel limit: 0x435D38; 31, 32, 0 > 32, 35, 36
AutoLoot: 0xC1ECF; 74 > 75
```

If you wanna do it through Cheat Engine you need to add the base address wich is "0x40000" to the offset or simply put "wow.exe" infront of it, for example for improved FoV it's either 8089B4 or wow.exe+4089B4 but it isn't persistent and editing the binary itself makes the changes permanent.
 ***Also no external Tools for hex-editing required,  <https://hexed.it/> works just fine***.

*Last edited by Subannix on Tue Dec 28, 2021 3:12 am, edited 2 times in total.*

## Post 14890 by Doctorbeefy — 2021-12-28T02:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14890#p14890 | page 1 | era: pre-1.18.1 -->

Just a heads up it looks like this can cause issues with the updater not being able to update the client.

## Post 14920 by Admiralawesome — 2021-12-28T14:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14920#p14920 | page 1 | era: pre-1.18.1 -->

Thank you.

## Post 15785 by Ooramexoo — 2022-01-14T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15785#p15785 | page 1 | era: pre-1.18.1 -->

Is this still working? I tried to run the patcher but got an access denied message?

## Post 15798 by Mrkrissatan (Patch Note Conspiracy Theorist) — 2022-01-14T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15798#p15798 | page 1 | era: pre-1.18.1 -->

works great for me

## Post 16333 by Rejuve (Barrens Chat Casualty) — 2022-01-25T23:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16333#p16333 | page 1 | era: pre-1.18.1 -->

Can someone pls pm me on discord RejuveNorway, or ingame Rejuve ? I dont have something called wow.exe

## Post 17037 by Chouette — 2022-02-14T23:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17037#p17037 | page 1 | era: pre-1.18.1 -->

Got it recommended to me by 'Zaas' in the Turtle Discord #Addons.
Works like a charm, also recommended it to a friend, so cheers and bump for great threat.   satisfied_turtle_head

## Post 17039 by Geojak (Grandmaster of Forum PvP) — 2022-02-15T07:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17039#p17039 | page 1 | era: pre-1.18.1 -->

Field of view patch doesn't seem to work

## Post 17785 by Nhezkho — 2022-03-28T17:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17785#p17785 | page 1 | era: pre-1.18.1 -->

Thank you, really appreciate this!

## Post 18124 by Faustorgo (Barrens Chat Casualty) — 2022-04-14T22:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18124#p18124 | page 1 | era: pre-1.18.1 -->

Can someone please, fix the Field of view (FOW), s not working, im a tryng to get a working Patcher for the FOW but without look, also i really dont know how to build me one, thanks.

*Last edited by Faustorgo on Tue Jun 21, 2022 11:46 pm, edited 1 time in total.*

## Post 19239 by Albusturt — 2022-06-19T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19239#p19239 | page 1 | era: pre-1.18.1 -->

How do you use this patcher? You open it and select the tweaks and then what? There is no "OK" or "Apply" button on it.

Edit: It works just by selecting the tweak and exiting. Edit 2: You have to relaunch this patcher after the selection.

I can confirm autoloot works. Appreciated.

*Last edited by Albusturt on Sun Jun 19, 2022 4:12 pm, edited 1 time in total.*

## Post 19243 by Casavir — 2022-06-19T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19243#p19243 | page 1 | era: pre-1.18.1 -->

Is it possible to change grass draw distance in wow.exe?

## Post 19292 by Faustorgo (Barrens Chat Casualty) — 2022-06-21T23:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19292#p19292 | page 1 | era: pre-1.18.1 -->

i do not know, but you can always use this Addon: VanillaGraphicBoost for better grass visual and overall improves, ofc you need a decent cpu for it to work.

## Post 19382 by Casavir — 2022-06-25T12:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19382#p19382 | page 1 | era: pre-1.18.1 -->

> **Faustorgo wrote: Tue Jun 21, 2022 11:46 pm**
> i do not know, but you can always use this Addon: VanillaGraphicBoost for better grass visual and overall improves, ofc you need a decent cpu for it to work.

No it is not what i mean.

## Post 19419 by Faustorgo (Barrens Chat Casualty) — 2022-06-28T04:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19419#p19419 | page 1 | era: pre-1.18.1 -->

okidoki

## Post 19514 by Albusturt — 2022-07-01T13:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19514#p19514 | page 1 | era: pre-1.18.1 -->

Can someone add an option to increase the range of nameplates?

## Post 19606 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-02T17:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19606#p19606 | page 1 | era: pre-1.18.1 -->

I like how *Microsoft Defender SmartScan* prevents this from being run under Windows 10.  That's *totally* not sketchy at all.  (:

What bytes are being modified and what are their to-and-from values?  All someone needs to do is compare a modified EXE with a stock one to find out.  I'm extremely paranoid about this sort of thing and would prefer to know what it's doing rather than blindly use it and have something insanely bad happen.  Thank you.

## Post 19736 by Albusturt — 2022-07-06T14:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19736#p19736 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Sat Jul 02, 2022 5:58 pm**
> I like how *Microsoft Defender SmartScan* prevents this from being run under Windows 10.  That's *totally* not sketchy at all.  (:
>
>  What bytes are being modified and what are their to-and-from values?  All someone needs to do is compare a modified EXE with a stock one to find out.  I'm extremely paranoid about this sort of thing and would prefer to know what it's doing rather than blindly use it and have something insanely bad happen.  Thank you.

Defender gives you a warning because this executable changes the binary code of another executable. This is of course not a normal behaviour, but it's not malicious. I am able to observe the connections WoW.exe is making and I can say this is safe to use. If you learn how to use a good firewall and check active connections you can be rest assured.

## Post 19756 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-06T23:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19756#p19756 | page 1 | era: pre-1.18.1 -->

While that addresses my first concern, it doesn't really answer the follow-up question.  (:

I just want to know what bytes are modified and I'm too much of a sissy-coward to experiment with an unsigned executable, myself.

## Post 20017 by Subannix — 2022-07-15T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20017#p20017 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Wed Jul 06, 2022 11:18 pm**
> While that addresses my first concern, it doesn't really answer the follow-up question.  (:
>
>  I just want to know what bytes are modified and I'm too much of a sissy-coward to experiment with an unsigned executable, myself.

Check my comment on the first page I made a few days later.  smiling_turtle_head

> **Subannix wrote: Tue Dec 28, 2021 12:03 am**
> Just checked the Binary of the 1.16 Patch there seems none of these changes made, readded the Download Link to the tool if anyone want's to use it :)
>
>  If anyone want's to do it them self via hex-editing:
>  Code: Select all
>
> ```
> Large Address Aware Flag aka 4GB Patch: 0x126; 0F > 2F
> Disable Cache: 0x455B38; 57, 44, 42 > 0, 0, 0
> Improved FoV: 0x4089B4; DB, F, C9 > 66, 66, F6
> Sound Channel limit: 0x435D38; 31, 32, 0 > 32, 35, 36
> AutoLoot: 0xC1ECF; 74 > 75
> ```
>
>  If you wanna do it through Cheat Engine you need to add the base address wich is "0x40000" to the offset or simply put "wow.exe" infront of it, for example for improved FoV it's either 8089B4 or wow.exe+4089B4 but it isn't persistent and editing the binary itself makes the changes permanent.
>  ***Also no external Tools for hex-editing required,  <https://hexed.it/> works just fine***.

## Post 21672 by Hoboknife — 2022-08-09T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21672#p21672 | page 1 | era: pre-1.18.1 -->

I just wanted to say thanks, this thing is awesome for sneaking and pickpocketing quickly!

I don't suppose it would be possible to have sound while wow runs in the background included?

## Post 21692 by Atello — 2022-08-09T22:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21692#p21692 | page 1 | era: pre-1.18.1 -->

The changes don't get applied for me. Specifically the autoloot portion does not seem to work.

## Post 22343 by Blvckshvde — 2022-08-14T18:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22343#p22343 | page 1 | era: pre-1.18.1 -->

dropbox link not working for me

## Post 28946 by Remorsx (Barrens Chat Casualty) — 2022-11-11T01:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28946#p28946 | page 1 | era: pre-1.18.1 -->

Any way to reduce sound channels to 64?

## Post 31142 by Ashstache (Barrens Chat Casualty) — 2022-12-20T07:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31142#p31142 | page 1 | era: pre-1.18.1 -->

Can this be used for the new exe, the Tel'Abim patch?

## Post 31260 by Pequisto — 2022-12-21T01:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31260#p31260 | page 1 | era: pre-1.18.1 -->

Would like to know this as well.  :)

## Post 35248 by Imhitchens — 2023-02-19T19:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35248#p35248 | page 1 | era: pre-1.18.1 -->

Edit: Damnit. Posted this in the wrong thread. Sorry

## Post 38235 by Dhrazar (Barrens Chat Casualty) — 2023-03-19T16:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38235#p38235 | page 1 | era: pre-1.18.1 -->

Okay, aren't the increased sound channels, improved Field of View and the 4GB patch already included in the latest game version exe?

## Post 38485 by Fosoyo — 2023-03-21T16:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38485#p38485 | page 1 | era: pre-1.18.1 -->

Can anyone explain the purpose of disabling the cache?
Thanks

## Post 38487 by Fosoyo — 2023-03-21T17:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38487#p38487 | page 1 | era: pre-1.18.1 -->

> **Subannix wrote: Sat Dec 18, 2021 9:48 pm**
> > **Stubbies wrote: Sat Dec 18, 2021 8:26 pm**
> > This sounds great thanks, hoping others will check it out. I'll wait till then, just incase :p.
>
>  I mean it could look sketchy since it's my first post on the forum, but it isn't harmful in anyway and you don't even need to give it admin privileges to run it.
>
>  I was using this for my own at first, but I figured I might share it so people don't need more than one .exe or backups for example when you're using the [improved-fov exe](https://github.com/slowtorta/turtlewow-improved-fov) from Torta and want to revert back later on.
>  Just with a click of a button you can do now so, without the need of extra backup files and no need to fiddle around wit Hex Editors if you wanna undo stuff when you didn't made an backup.
>
>  **But since it's modifying another application, it could potentionally get flagged from your Anti Virus as malicious.**
>   scared_turtle
>
>  Edit: If there's questions or someone wants to see the source code itself, you can ping me on the turtle wow discord server.

Can you explain how to download this and use this? I added the FOV mod but it removed all of the advanced Resolutions

## Post 39358 by Lemonlime — 2023-03-28T03:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39358#p39358 | page 2 | era: pre-1.18.1 -->

This still working?

## Post 39429 by Huma — 2023-03-28T13:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39429#p39429 | page 2 | era: pre-1.18.1 -->

default wow.exe from turtle already have fov, sound channels and 4gb, the autoloot is failing half of the time and for some strange reason i feels worse performance with this patch

## Post 43604 by Dhrazar (Barrens Chat Casualty) — 2023-04-28T13:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43604#p43604 | page 2 | era: pre-1.18.1 -->

This patch is  outdated and  it  gives  you a ton of  crashes!

## Post 43609 by Jx (Barrens Chat Casualty) — 2023-04-28T13:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43609#p43609 | page 2 | era: pre-1.18.1 -->

Use [vanilla-tweaks](https://github.com/brndd/vanilla-tweaks) instead.

## Post 44988 by Dhrazar (Barrens Chat Casualty) — 2023-05-08T20:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44988#p44988 | page 2 | era: pre-1.18.1 -->

> **Jx wrote: Fri Apr 28, 2023 1:36 pm**
> Use [vanilla-tweaks](https://github.com/brndd/vanilla-tweaks) instead.

Why should I use those tweaks? As said above, these changes are already included in the twow.exe or did I miss something?

## Post 45013 by Jx (Barrens Chat Casualty) — 2023-05-09T02:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45013#p45013 | page 2 | era: pre-1.18.1 -->

The main reason to use vanilla-tweaks is for auto-loot. The byte patcher in this thread attempts to enable auto-loot, but doesn't do a good job of it.

Regarding the other patches (large address/4gb, sound channels, and FOV), [yes](https://forum.turtlecraft.gg/viewtopic.php?t=3334), the TW EXEs come with those baked in.

## Post 47051 by Dhrazar (Barrens Chat Casualty) — 2023-05-22T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47051#p47051 | page 2 | era: pre-1.18.1 -->

I've installed VanillaFixes and vanilla-tweaks, the result is incredible. FPS got nearly doubled, I can even run weather effects option on max, because it's crippled my performance before.
Auto loot is working now flawless. Also to mention I have both HD-Patches running.
Thank you Jx for the explanation before! :-)

## Post 47313 by Risenzealot0 — 2023-05-24T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47313#p47313 | page 2 | era: pre-1.18.1 -->

> **Dhrazar wrote: Mon May 22, 2023 7:14 pm**
> I've installed VanillaFixes and vanilla-tweaks, the result is incredible. FPS got nearly doubled, I can even run weather effects option on max, because it's crippled my performance before.
>  Auto loot is working now flawless. Also to mention I have both HD-Patches running.
>  Thank you Jx for the explanation before! :-)

Can you point me to the HD patches please?

## Post 47359 by Dhrazar (Barrens Chat Casualty) — 2023-05-25T08:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47359#p47359 | page 2 | era: pre-1.18.1 -->

> **Risenzealot0 wrote: Wed May 24, 2023 8:10 pm**
> Can you point me to the HD patches please?

[viewtopic.php?t=2827&sid=c1d1764453bf33 ... fbadda355f](https://forum.turtlecraft.gg/viewtopic.php?t=2827)

I've installed just A and B, C is in my opinon weird, when the auto-attack sound, "feels" like all other sounds.
Also to mention, weapon sheath will no longer work with these, but I'm okay with that for now.
And delete your WDB folder if you install one of them.

## Post 47431 by Risenzealot0 — 2023-05-25T23:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47431#p47431 | page 2 | era: pre-1.18.1 -->

> **Dhrazar wrote: Thu May 25, 2023 8:37 am**
> > **Risenzealot0 wrote: Wed May 24, 2023 8:10 pm**
> > Can you point me to the HD patches please?
>
>  [viewtopic.php?t=2827&sid=c1d1764453bf33 ... fbadda355f](https://forum.turtlecraft.gg/viewtopic.php?t=2827)
>
>  I've installed just A and B, C is in my opinon weird, when the auto-attack sound, "feels" like all other sounds.
>  Also to mention, weapon sheath will no longer work with these, but I'm okay with that for now.
>  And delete your WDB folder if you install one of them.

Thank you!

## Post 49310 by Ksedri — 2023-06-08T13:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49310#p49310 | page 2 | era: pre-1.18.1 -->

I've placed it in my WoW Turtle folder, and checked options like auto loot and nothing happened after PC restart...

## Post 69166 by Amnesia — 2023-10-06T12:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69166#p69166 | page 2 | era: pre-1.18.1 -->

Hi,

Looks like this doesnt work any more with the new 1.17.0 patch

Any idea on how to make it work again ?

That's a fantastic quality of life improvement ;)

Thx !

## Post 69180 by Jx (Barrens Chat Casualty) — 2023-10-06T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69180#p69180 | page 2 | era: pre-1.18.1 -->

> **Amnesia wrote: Fri Oct 06, 2023 12:21 pm**
> Any idea on how to make it work again ?

From just upthread ![😉](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f609.svg):

> **Jx wrote: Fri Apr 28, 2023 1:36 pm**
> Use [vanilla-tweaks](https://github.com/brndd/vanilla-tweaks) instead.

See also [Client Fixes and Tweaks](https://turtle-wow.fandom.com/wiki/Client_Fixes_and_Tweaks) on the Turtle Wiki.

## Post 101330 by Moemika1 — 2024-09-16T07:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=101330#p101330 | page 2 | era: pre-1.18.1 -->

Please could you reupload this? This was the only auto loot mod that would work on my Mac M1 (running windows arm). I don't have this program anymore and the link is broken :(

