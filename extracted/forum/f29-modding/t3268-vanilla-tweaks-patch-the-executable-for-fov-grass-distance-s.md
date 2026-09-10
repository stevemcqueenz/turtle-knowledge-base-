---
title: "vanilla-tweaks — patch the executable for FoV, grass distance, sound in background & more"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3268"
topic_id: 3268
forum_id: 29
forum: "Modding"
author: "Brndd"
author_authority: "player"
posted: "2022-07-12T22:32:00Z"
last_post: "2024-04-29T03:02:00Z"
post_count: 95
pages: 3
fetched: "2026-09-10T10:42:18Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# vanilla-tweaks — patch the executable for FoV, grass distance, sound in background & more

## Post 19950 by Brndd — 2022-07-12T22:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19950#p19950 | page 1 | era: pre-1.18.1 -->

<https://github.com/brndd/vanilla-tweaks/releases>

The 1.12.1 client is missing many small QoL features that more modern clients have. I found this annoying, so I created a simple patcher that modifies the executable and adds some minor tweaks. The patcher is open source and very simple. You can see all the offsets it patches [in the source code](https://github.com/brndd/vanilla-tweaks/blob/master/src/main.rs).

These tweaks include (at the time of writing; see the Github repo for an up-to-date list):

- Widescreen FoV
- Sound in background
- Increased sound channel count (technically you can change this with a command; this patcher changes the default so you don't have to)
- Increased farclip max value
- Increased grass draw distance
- Quickloot by default (hold shift for manual loot)
- Nameplate range increase (increased to 41 yards by default, matching the max range in the Classic and TBC Classic clients)
- Large Address Aware patch (lets the game use up to 4GB RAM. May help with stability if you use graphical enhancements)
Let me know if you have ideas for other tweaks. The kind of things that are possible to do with this method are things like changing hardcoded values (e.g. FoV and grass render distance) and very simple changes to the game logic. My intention is to only add QoL tweaks, so I will not add anything that gives players an unfair advantage.

To use the patcher, drag WoW.exe on top of it and it'll create a WoW_patched.exe next to it. Run WoW_patched.exe instead of WoW.exe to start the game, or alternatively rename your original executable and replace it with the patched one. For advanced options, such as changing the values of some of the tweaks or disabling some patches, run the patcher from a command line and pass the --help parameter to see a list of command line parameters.

Note that since this modifies the game client it may run afoul of Warden, the client-side anticheat used on some private servers. I have played with it on Turtle WoW for a while and have had no issues, plus [the other client patcher](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331) seems to be kosher on Turtle too.

## Post 19956 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-13T08:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19956#p19956 | page 1 | era: pre-1.18.1 -->

See, this is exactly what I wanted from the other topic.  **Full disclosure**.  You not only offer up these enhancements to the base client, but you actually make a point of letting people see the source code *and* listing exactly what sets of memory addresses get modified, where, and how.  Major kudos, friend!  There's just two glaring flaws.

It doesn't have a user interface.
It makes the EXE file insecure.

For most people, it's definitely going to be a case of "drag the EXE onto the patcher".  Those are the instructions given in the Readme file and that will apply all the patches.  However, for someone like me – someone who doesn't *want* "quickloot" enabled at all times – it becomes necessary to either run the patcher in a Command Prompt or make a Batch file to do what I want.

I also notice that the patched EXE file becomes modified in way that causes the file to **need administrative privileges** to run.  Why?  What, exactly, is it doing or changing, at that point?  What did the patcher *do* to the EXE file to make it less "secure"?  This doesn't set well with me.

I'm not trying to bring you down.  You clearly know what you're doing and have put a lot of work into this.  I'm just extremely careful about what I run on my machine and, unfortunately, no amount of "just ignore the warnings" or "it's perfectly safe to run" is going to change my mind about this one.

 **Edit:**
I compared the differences between the modified and unmodified EXE files and jotted down all the modified values, then manually modified my own unmodified EXE file to match.  I really am *baffled* as to why this patcher makes the EXE file insecure.  The only thing it seems to do is modify 13 bytes across 8 address values and nothing more, exactly as promised.  Yet, my *manually-modified* file doesn't require administrative privileges to run.

Any theories?  Or better still, any *explanations*?

## Post 19972 by Brndd — 2022-07-13T16:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19972#p19972 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Wed Jul 13, 2022 8:36 am**
> It doesn't have a user interface.
>  It makes the EXE file insecure.
>
>  For most people, it's definitely going to be a case of "drag the EXE onto the patcher".  Those are the instructions given in the Readme file and that will apply all the patches.  However, for someone like me – someone who doesn't *want* "quickloot" enabled at all times – it becomes necessary to either run the patcher in a Command Prompt or make a Batch file to do what I want.

It is kind of annoying to create user interfaces, especially cross-platform ones, so that's why there's no UI and probably never will be. However, running the patcher from the command line isn't difficult at all. Here's a quick guide for it on Windows 10, which may be useful for other command line tools you may have to run in the future too:

1. Put the patcher (vanilla-tweaks.exe) in the same folder as your WoW.exe.
2. From the top left, click File -> Open Windows PowerShell
3. In the command prompt that appears, type "van" and press tabulator; it'll autocomplete to say ".\vanilla-tweaks.exe"
4. Type a space, then "--help" and hit enter. You'll get a list of parameters that the program takes.
5. Run the program again, this time with "WoW.exe" as the first parameter and followed by any other parameters you want to set, separated by spaces.
Also, I'm not sure what you mean by insecure. Unless it's the next part.

> **Jolikmc wrote: Wed Jul 13, 2022 8:36 am**
> I also notice that the patched EXE file becomes modified in way that causes the file to **need administrative privileges** to run.  Why?  What, exactly, is it doing or changing, at that point?  What did the patcher *do* to the EXE file to make it less "secure"?  This doesn't set well with me.

That's interesting. I don't actually run Windows on my machine so I never encountered this issue.

It took a little digging, but this appears to be some kind of an insane Windows security feature where any program with the word "patch" in its name has to run as administrator. You can verify this by renaming your original WoW.exe to WoW_patched.exe and observing that it now requires admin privileges to run (and then no longer requires them after you change the name back).

I've created a new release that changes the default name of the created executable to WoW_tweaked.exe. If you don't want to bother updating, you can achieve the same result by just renaming the WoW_patched.exe you already have to something else.

## Post 19973 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-13T17:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19973#p19973 | page 1 | era: pre-1.18.1 -->

> **Brndd wrote: Wed Jul 13, 2022 4:17 pm**
> It took a little digging, but this appears to be some kind of an insane Windows security feature where any program with the word "patch" in its name has to run as administrator. You can verify this by renaming your original WoW.exe to WoW_patched.exe and observing that it now requires admin privileges to run (and then no longer requires them after you change the name back).

That's… that's stupid.  That's stupid, and I hate it.  It reminds me of how on Windows XP, you couldn't run anything with the word "armageddon" in the title because of a same-named virus.  Needless to say, I had a heck of a time trying to play *Worms Armageddon* on my old desktop…

Anyway, thank you for the instructions on how to customize the tweaker.  I'm sure that will be really helpful to anyone looking to do that exact thing.  And thank you for making this open source, too.  For paranoid people like me, it's reassuring.

## Post 19974 by Brndd — 2022-07-13T17:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19974#p19974 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Wed Jul 13, 2022 5:02 pm**
> That's… that's stupid.  That's stupid, and I hate it.  It reminds me of how on Windows XP, you couldn't run anything with the word "armageddon" in the title because of a same-named virus.  Needless to say, I had a heck of a time trying to play *Worms Armageddon* on my old desktop…

I read about it a little more after making my last post, and it's not technically a *security* feature as much as it's an attempt at legacy support. The vanilla client is so old that it predates User Account Control (i.e. the administrator privilege prompt), so it doesn't contain metadata for whether it actually has to run as administrator or not. If an executable doesn't have this metadata in it, Windows tries to guess if it has to run as administrator by looking if the filename contains the words "setup", "patch" or "update".

## Post 19975 by Voku — 2022-07-13T18:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19975#p19975 | page 1 | era: pre-1.18.1 -->

Thanks for the patch! Works great for me!
Since you asked for other ideas a feature I would like to see in this client is 144hz refreshrate. I can only choose between 60 and 75hz

## Post 19977 by Brndd — 2022-07-13T18:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19977#p19977 | page 1 | era: pre-1.18.1 -->

> **Voku wrote: Wed Jul 13, 2022 6:21 pm**
> Since you asked for other ideas a feature I would like to see in this client is 144hz refreshrate. I can only choose between 60 and 75hz

Does borderless windowed mode not work for this? That's what I use, but I play using Wine so some things are different for me (for example, hardware cursor doesn't cause performance issues on Wine).

## Post 19992 by Piccadilly — 2022-07-14T07:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19992#p19992 | page 1 | era: pre-1.18.1 -->

How about including the disabling of WBD Cache folder generation? Would be awesome, since the server routinley requires deletion of that folder due to minor fixes and not generating it saves a lot of repetitve deletion work :)

For reference the byte patcher-post someone once posted here: [byte patcher](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331)

## Post 19996 by Voku — 2022-07-14T10:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19996#p19996 | page 1 | era: pre-1.18.1 -->

> **Brndd wrote: Wed Jul 13, 2022 6:58 pm**
> Does borderless windowed mode not work for this? That's what I use, but I play using Wine so some things are different for me (for example, hardware cursor doesn't cause performance issues on Wine).

It doesn't seems like it works for me. Trying without bordlerless gives me a blackscreen anyways. But when I see that nvidia logo maybe it has problems with amd cards in that regard?
![Image](https://i.imgur.com/i9O6twy.png)

## Post 20010 by Brndd — 2022-07-15T09:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20010#p20010 | page 1 | era: pre-1.18.1 -->

> **Piccadilly wrote: Thu Jul 14, 2022 7:10 am**
> How about including the disabling of WBD Cache folder generation? Would be awesome, since the server routinley requires deletion of that folder due to minor fixes and not generating it saves a lot of repetitve deletion work :)
>
>  For reference the byte patcher-post someone once posted here: [byte patcher](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331)

That seems like a good idea. I'll look into it. A little concerned about side effects, but I suppose it's fine if other people have already done it.

> **Voku wrote: Thu Jul 14, 2022 10:23 am**
> It doesn't seems like it works for me. Trying without bordlerless gives me a blackscreen anyways. But when I see that nvidia logo maybe it has problems with amd cards in that regard?

Are you sure the game isn't already running at a better refresh rate? If it's borderless windowed I think it's going to use your desktop refresh rate regardless of what it says in the menu. Anyway, I think you can also change the gxRefresh setting in Config.wtf (using a text editor) to change your refresh rate to anything you like. I can't verify this though.

## Post 20012 by Jolikmc (Patch Note Conspiracy Theorist) — 2022-07-15T10:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20012#p20012 | page 1 | era: pre-1.18.1 -->

Hey, random thought.  Is there any chance you might be willing to look into **modifying the height of the chasecam**?  I notice that on shorter characters, it pretty much puts them right in the middle of the viewing area, which is less-than-ideal.  I imagine it would be helpful for other characters (and players) if the camera was elevated a little so their character was "closer" to the bottom of the interface.

Cheers!

## Post 20016 by Subannix — 2022-07-15T19:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20016#p20016 | page 1 | era: pre-1.18.1 -->

> **Brndd wrote: Fri Jul 15, 2022 9:24 am**
> > **Piccadilly wrote: Thu Jul 14, 2022 7:10 am**
> > How about including the disabling of WBD Cache folder generation? Would be awesome, since the server routinley requires deletion of that folder due to minor fixes and not generating it saves a lot of repetitve deletion work :)
> >
> >  For reference the byte patcher-post someone once posted here: [byte patcher](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331)
>
>  That seems like a good idea. I'll look into it. A little concerned about side effects, but I suppose it's fine if other people have already done it.

I don't recommend to use that feature on Turtle WoW, as it may or may not cause trouble due to it's custom content.
Back then when Warmode got introduced I was unable to activate it's Glyph. Tried it on different Characters, asked then GM Jecs If he could manually give me the debuff on one of my chars.

Welp, after some fiddling around it found out it was due to this.

My recommendation would be either make the WDB folder read-only or create a batch file to delete its content on startup. del /q WDB *.wdb
start WoW.exe

## Post 20019 by Jubabuba — 2022-07-16T00:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20019#p20019 | page 1 | era: pre-1.18.1 -->

I tried it and my fps dropped from 120 to 60-70 if I use normal client everything is fine.

## Post 20027 by Gurky (Barrens Chat Casualty) — 2022-07-16T01:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20027#p20027 | page 1 | era: pre-1.18.1 -->

> **Jubabuba wrote: Sat Jul 16, 2022 12:51 am**
> I tried it and my fps dropped from 120 to 60-70 if I use normal client everything is fine.

Grass Distance and some other mods included in this might impact fps as you are loading more stuff at once than what you were with the default.

Which mods did you enable?

## Post 20028 by Brndd — 2022-07-16T01:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20028#p20028 | page 1 | era: pre-1.18.1 -->

> **Jubabuba wrote: Sat Jul 16, 2022 12:51 am**
> I tried it and my fps dropped from 120 to 60-70 if I use normal client everything is fine.

This patch increases the grass render distance from 70 to 300, ie. more than quadruples it. If you use a graphic mod that increases grass density beyond its normal limit, such as [VanillaGraphicBoost](https://github.com/mrrosh/VanillaGraphicBoost) you'll want to either decrease that or decrease the grass render distance using the patcher's command line options.

 300 is a rather arbitrarily picked value; I picked one where the grass renders far enough that it's not immediately obvious where it ends, while also making sure that performance doesn't get completely destroyed with the max frilldensity setting that can be selected in video options using the "Environment Detail" slider (or using the **/console frilldensity** command).

However, the performance impact obviously varies from one computer to another. Mine is very powerful, so I still got about 200-300 FPS with the grass distance tweak. On lower-end hardware the value may still be too high even if grass density isn't increased past its limits.

## Post 20030 by Saurug — 2022-07-16T02:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20030#p20030 | page 1 | era: pre-1.18.1 -->

Could you confirm the 41 yards range on nameplates? I'm measuring around 35 which is definitely an improvement, but 41 would be perfect.

## Post 20058 by Brndd — 2022-07-16T20:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20058#p20058 | page 1 | era: pre-1.18.1 -->

> **Saurug wrote: Sat Jul 16, 2022 2:43 am**
> Could you confirm the 41 yards range on nameplates? I'm measuring around 35 which is definitely an improvement, but 41 would be perfect.

I verified it using the .distance command of MaNGOS on a locally hosted server. 35 sounds like your measurement is edge-to-edge rather than point-to-point. Either way, if it feels too short, you can adjust it using command-line parameters.

## Post 20060 by Saurug — 2022-07-16T22:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20060#p20060 | page 1 | era: pre-1.18.1 -->

Thanks!

## Post 20069 by Hubertus — 2022-07-17T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20069#p20069 | page 1 | era: pre-1.18.1 -->

Thank you, especially for the Linux version!

## Post 20314 by Texhnolyze — 2022-07-25T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20314#p20314 | page 1 | era: pre-1.18.1 -->

Can you please update this to the latest Turtle WoW version?

Or ar there other ways to increase FoV and grass distance without this?

Edit: It still works, after all. I only needed to repatch the WoW.exe to the vanilla-tweaks.exe. It's all good now.   satisfied_turtle_head

## Post 20409 by Brndd — 2022-07-26T13:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20409#p20409 | page 1 | era: pre-1.18.1 -->

I pushed a new version that adds the option to patch max camera distance (disabled by default) and reverts the quickloot patch to the old, more reliable method that unfortunately doesn't support pickpocketing. The alternative method which does support pickpocketing (but has a tendency to occasionally not work) can be enabled with the **--alternative-quickloot** parameter.

> **Texhnolyze wrote: Mon Jul 25, 2022 11:02 pm**
> Can you please update this to the latest Turtle WoW version?
>
>  Or ar there other ways to increase FoV and grass distance without this?
>
>  Edit: It still works, after all. I only needed to repatch the WoW.exe to the vanilla-tweaks.exe. It's all good now.   satisfied_turtle_head

Yeah, no updates to the patcher are necessary for the new Turtle WoW version. Just run the patcher again on the WoW.exe from the new update.

## Post 20897 by Tristfrukt — 2022-08-03T10:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=20897#p20897 | page 1 | era: pre-1.18.1 -->

Hey. Great tweak! Really loving it. :)
I cannot get the frilldistance to work. Im using the command /console frilldistance xx to change it but nothing happens. Distance is same no matter what value i put in.

What am i doing wrong? :)
Thanks

## Post 21693 by Brndd — 2022-08-09T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21693#p21693 | page 1 | era: pre-1.18.1 -->

> **Tristfrukt wrote: Wed Aug 03, 2022 10:44 am**
> Hey. Great tweak! Really loving it. :)
>  I cannot get the frilldistance to work. Im using the command /console frilldistance xx to change it but nothing happens. Distance is same no matter what value i put in.
>
>  What am i doing wrong? :)
>  Thanks

Frilldistance is sadly hardcoded in vanilla. You'll have to change it using the patcher's command line parameter with e.g. **--frilldistance 200**. By default it's set to 300.

edit: I should also say, in v1.5.0 I changed quickloot again, so the above message about the alternate quickloot option is no longer relevant. Quickloot should now work reliably for all types of looting, but let me know if you find situations where it doesn't.

## Post 22207 by Ssddx — 2022-08-13T15:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22207#p22207 | page 1 | era: pre-1.18.1 -->

@Brndd
Hello!!!
There is one more serious limitation of this 1.12.1 client
If you limit your WoW.exe with 60fps its works fines
but if you remove fps limit CTM (Click To Move) feature stop working

## Post 22551 by Shadowdna — 2022-08-16T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22551#p22551 | page 1 | era: pre-1.18.1 -->

I cannot figure out for the life of me how to install. I downloaded the zip but I do not see the patcher file. I have the main file Vanilla-Tweaks-Master.zip then I open it to the main folder then again then I see .github, src and some other ones, but no patcher file. Am I missing something?

## Post 22565 by Thol (Barrens Chat Casualty) — 2022-08-16T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22565#p22565 | page 1 | era: pre-1.18.1 -->

Download this: <https://github.com/brndd/vanilla-tweaks/releases>
![Image](https://i.imgur.com/gE4068X.png)
Extract it
You'll get a file called vanilla-tweaks.exe
Move it to your Turtle WoW folder
Grab your WoW.exe and drag it on top of vanilla-tweaks.exe
It'll create WoW_tweaked.exe. use this to launch the game
![Image](https://i.imgur.com/sC6qYH0.png)
You'll have to repatch after each update.

## Post 22584 by Shadowdna — 2022-08-16T20:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22584#p22584 | page 1 | era: pre-1.18.1 -->

You are the best, thank you!

## Post 23766 by Ashkir — 2022-08-28T01:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23766#p23766 | page 1 | era: pre-1.18.1 -->

Thank you!

## Post 23773 by Elonamusk — 2022-08-28T04:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23773#p23773 | page 1 | era: pre-1.18.1 -->

I downloaded the linux version on my steam deck, put it in my twow folder and ran it, but nothing seems to have happened. Is that normal?

## Post 23783 by Mrrosh (Barrens Chat Casualty) — 2022-08-28T07:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23783#p23783 | page 1 | era: pre-1.18.1 -->

> **Elonamusk wrote: Sun Aug 28, 2022 4:34 am**
> I downloaded the linux version on my steam deck, put it in my twow folder and ran it, but nothing seems to have happened. Is that normal?

Have you read the instructions? It says to drag and drop your wow.exe over the patcher.

## Post 26277 by Saintys — 2022-09-27T15:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26277#p26277 | page 1 | era: pre-1.18.1 -->

Is there anyway to edit permantently the grass value? Cause I love the distance and the autoloot feature, but it's always needed when I open the .exe again to tweak the environtment value in video settings back to the higher vanilla value due to lag, it's too much grass xD

## Post 26281 by Wh0pp — 2022-09-27T18:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=26281#p26281 | page 1 | era: pre-1.18.1 -->

> **Saintys wrote: Tue Sep 27, 2022 3:24 pm**
> Is there anyway to edit permantently the grass value? Cause I love the distance and the autoloot feature, but it's always needed when I open the .exe again to tweak the environtment value in video settings back to the higher vanilla value due to lag, it's too much grass xD

Check out the ReadMe on the project's GitHub page. Running the tool from the command line with --help will list all available tweaks that can be configured and/or disabled. For grass, the following are available--
> --frilldistance <FRILLDISTANCE>
>  Frilldistance (grass render distance) value. Default game value is 70
>
>  [default: 300]

> --no-frilldistance
>  If set, do not patch frilldistance

Below is an example using --no-frilldistance to disable the grass tweak entirely.
Code: Select all

```
.\vanilla-tweaks.exe --no-frilldistance wow.exe
```

![Image](https://i.imgur.com/kkBjF7G.png)

## Post 28127 by Bubzwarr — 2022-10-30T05:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28127#p28127 | page 1 | era: pre-1.18.1 -->

Hi, is it possible for you to make a version of this tweak program that will fix the FoV for ultrawide resolutions?  My resolution is 3840x1600 and the FoV feels a bit off.

## Post 28129 by Redmagejoe (Grandmaster of Forum PvP) — 2022-10-30T05:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=28129#p28129 | page 1 | era: pre-1.18.1 -->

There's already an official version of this you can find at <https://github.com/slowtorta/turtlewow-improved-fov>

It has the FOV, increased RAM usage cap, and sound playing when in background tweaks applied.

## Post 33188 by Ingameacc12345 (Patch Note Conspiracy Theorist) — 2023-01-26T15:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33188#p33188 | page 1 | era: pre-1.18.1 -->

This is THE best patcher for Turtle WoW executable. Thank you for maintaining it, please keep at it! <3

## Post 33282 by Jammyxx (Patch Note Conspiracy Theorist) — 2023-01-27T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33282#p33282 | page 2 | era: pre-1.18.1 -->

Is there anyway to reduce the fog in the distance so you can see more terrain? Or is this restricted in 1.12?

Thanks

## Post 33316 by Icedtea12 — 2023-01-28T00:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33316#p33316 | page 2 | era: pre-1.18.1 -->

Any chances to get the cataclysm style raid frames that Classic has?

## Post 34501 by Skate — 2023-02-10T17:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34501#p34501 | page 2 | era: pre-1.18.1 -->

Is there a way to make it work together with vanilla fixes?

Kind Regards

## Post 34505 by Shamma (Bug Report Enthusiast) — 2023-02-10T18:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34505#p34505 | page 2 | era: pre-1.18.1 -->

> **Skate wrote: Fri Feb 10, 2023 5:44 pm**
> Is there a way to make it work together with vanilla fixes?
>
>  Kind Regards

It works differently and hence they can work independently together as well.

## Post 34516 by Geojak (Grandmaster of Forum PvP) — 2023-02-10T23:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=34516#p34516 | page 2 | era: pre-1.18.1 -->

Use vanilla tweak to make new wow exe, then launch with vanilla fixes. Works for me

## Post 35753 by Rukopashka — 2023-02-22T23:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35753#p35753 | page 2 | era: pre-1.18.1 -->

> **Brndd wrote: Tue Jul 12, 2022 10:32 pm**
> <https://github.com/brndd/vanilla-tweaks/releases>

Hello there,  I looked at your code and here are some tips to improve it:
- Use Result type:
Instead of returning ExitCode which is just an integer, consider returning a Result type that can indicate success or error with details about the error. For example, you could return a **Result<(), Box<dyn Error>**>.
- Use a logger:
Consider using a logging crate, such as **env_logger** or **log4rs**, to help you debug your application. With logging, you can print out debugging information and helpful messages to the console or a file.
- Use **PathBuf** instead of **OsString**:
The **PathBuf** type is more convenient than **OsString** for working with paths. You can easily append and concatenate paths with **PathBuf**, and it automatically handles the platform-specific path separator.
- Use **Path** instead of **String**:
Instead of using **String** to represent file paths, consider using **Path**. This can help avoid conversion errors and make the code more platform-independent.
- Use **serde** for serialization/deserialization:
Instead of writing custom value parsers for command-line arguments, you can use **serde** to serialize and deserialize Rust data types to and from *JSON*, *YAML*, or other formats. This can make it easier to update the argument format in the future.
- Use **match** instead of **if let**:
In your code, you use **if let** to handle some of the cases where an **Option** is **Some** or **None**. It may be more concise and easier to read if you use **match** instead.
- Use **std::path::Path::exists()**:
Instead of checking if a file exists by opening a file and checking if there is an error, you can use **Path::exists()** to check if a path exists.
- Avoid hard-coding constants:
Instead of hard-coding constants like file names and values, consider using configuration files, environment variables, or command-line arguments to make the code more flexible and easier to change.
- Use **unwrap_or_else()** instead of **unwrap_or()**
In your code, you use **unwrap_or()** to provide a default value for command-line arguments. However, **unwrap_or_else()** may be more efficient, especially if the default value is a complex expression.
I hope these tips help you improve your code!

## Post 35856 by Templar1 — 2023-02-23T20:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35856#p35856 | page 2 | era: pre-1.18.1 -->

Hi! New to Turtle WoW, and I wanted to apply this patch. I followed the directions and have a wow-tweaked.exe but I cannot get the extra options to appear - I have no resolution or FoV options beyond the base client and adding --help property doesn't bring up any information when I start the client. Can anyone assist?

## Post 35861 by Shamma (Bug Report Enthusiast) — 2023-02-23T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35861#p35861 | page 2 | era: pre-1.18.1 -->

> **Templar1 wrote: Thu Feb 23, 2023 8:40 pm**
> Hi! New to Turtle WoW, and I wanted to apply this patch. I followed the directions and have a wow-tweaked.exe but I cannot get the extra options to appear - I have no resolution or FoV options beyond the base client and adding --help property doesn't bring up any information when I start the client. Can anyone assist?

I think u are misunderstanding what vanilla-tweaks does. There are no new options ingame. The options are silently applied in the background when u launch the tweaked.exe

## Post 35868 by Templar1 — 2023-02-23T22:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35868#p35868 | page 2 | era: pre-1.18.1 -->

> **Shamma wrote: Thu Feb 23, 2023 9:27 pm**
> I think u are misunderstanding what vanilla-tweaks does. There are no new options ingame. The options are silently applied in the background when u launch the tweaked.exe

For some reason the game remains unchanged though? Even when I launch the tweaked client I have the same resolution/FOV as the unmodified client. The instructions state using the --help property is supposed to bring up a list of tweaks but this doesn't work.

## Post 36071 by Lescot — 2023-02-25T12:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36071#p36071 | page 2 | era: pre-1.18.1 -->

Hi! The game crashes regularly after changing graphics settings. ![Image](https://i.imgur.com/obphTBI.jpg)

## Post 36293 by Albusturt — 2023-02-27T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36293#p36293 | page 2 | era: pre-1.18.1 -->

Does this change client's version from 1.12.1 to 1.16 so it's only usable for turtlewow?

I'm trying to use it on another vanilla server but I'm getting version mismatch error upon login. It's either because of this tool changing the version or perhaps the other server has an additional protection against tweaking the exe?

## Post 36800 by Nandiebs (Barrens Chat Casualty) — 2023-03-04T14:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36800#p36800 | page 2 | era: pre-1.18.1 -->

how do I run this on Mac OS? dragging the wow.exe on top of the vanillin-tweaks doesn't work
I tried to run "open vanilla-tweaks --args wow.exe" in terminal, but didn't work either

## Post 36828 by Detrol2k — 2023-03-04T21:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36828#p36828 | page 2 | era: pre-1.18.1 -->

Working good so far, the only Issue I have is sometimes the mouse pointer starts to rapidly fade when moving it in certain areas or disappears almost completely, if I do 1-2 alt tabs it gets fixed temporarily.

Anyone faced a similar issue?

## Post 37163 by Mrrabbit — 2023-03-08T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37163#p37163 | page 2 | era: pre-1.18.1 -->

I have the File Vanilla-Tweaks, I drag the wow.exe onto it and nothing happens? I know I am doing something wrong but I am a 486 guy and need some help   scared_turtle_head   thank you

## Post 37211 by Kooldudester — 2023-03-09T04:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37211#p37211 | page 2 | era: pre-1.18.1 -->

Using WoWFoV.exe, is there a simple way to disable the sound while tabbed out?  I like everything else about the modified client except that one aspect.

## Post 37408 by Brndd — 2023-03-11T17:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37408#p37408 | page 2 | era: pre-1.18.1 -->

> **Rukopashka wrote: Wed Feb 22, 2023 11:22 pm**
> > **Brndd wrote: Tue Jul 12, 2022 10:32 pm**
> > <https://github.com/brndd/vanilla-tweaks/releases>
>
>
>  Hello there,  I looked at your code and here are some tips to improve it:
> - [snip]
>  I hope these tips help you improve your code!

Thank you Mr. ChatGPT.

> **Templar1 wrote: Thu Feb 23, 2023 8:40 pm**
> Hi! New to Turtle WoW, and I wanted to apply this patch. I followed the directions and have a wow-tweaked.exe but I cannot get the extra options to appear - I have no resolution or FoV options beyond the base client and adding --help property doesn't bring up any information when I start the client. Can anyone assist?
>  [...]
>  For some reason the game remains unchanged though? Even when I launch the tweaked client I have the same resolution/FOV as the unmodified client. The instructions state using the --help property is supposed to bring up a list of tweaks but this doesn't work.

The command line parameters are for the patcher itself, not for the modified WoW executable. The patcher is basically just an automatic hex editor -- everything it does could also be done by hand using a hex editor. Essentially it just changes some hardcoded values in the client, plus minor logic changes for things like the autoloot reverse patch.

> **Albusturt wrote: Mon Feb 27, 2023 2:29 pm**
> Does this change client's version from 1.12.1 to 1.16 so it's only usable for turtlewow?
>
>  I'm trying to use it on another vanilla server but I'm getting version mismatch error upon login. It's either because of this tool changing the version or perhaps the other server has an additional protection against tweaking the exe?

It does not change the client version, and should be compatible with pretty much every server. I have had reports of issues when users have replaced their original WoW.exe with the modified one, but I have not been able to replicate those -- I think they are probably related to the update download process (which is also used on Turtle). It's safest to keep the patched executable besides the original executable, and then simply start the game from WoW_tweaked.exe.

Make sure that you're using the patcher on the other server's WoW.exe and not on the one from the Turtle WoW client.

> **Nandiebs wrote: Sat Mar 04, 2023 2:46 pm**
> how do I run this on Mac OS? dragging the wow.exe on top of the vanillin-tweaks doesn't work
>  I tried to run "open vanilla-tweaks --args wow.exe" in terminal, but didn't work either

I don't use Mac myself, but I would assume you would run it from the terminal like this: **./vanilla-tweaks WoW.exe**. If you want to use any of the optional parameters, put them between vanilla-tweaks and WoW.exe in the command.

> **Kooldudester wrote: Thu Mar 09, 2023 4:45 am**
> Using WoWFoV.exe, is there a simple way to disable the sound while tabbed out?  I like everything else about the modified client except that one aspect.

If by WoWFoV.exe you mean this patcher, you can do that with the command line parameters. If you're on Windows, the easiest way to do this is to go into your Turtle WoW directory, select File (top left) -> Open Windows PowerShell, and then in the command prompt that appears, type (or copy and paste): **./vanilla-tweaks.exe --no-sound-in-background WoW.exe**. You can then run the game from WoW_tweaked.exe.

> **Mrrabbit wrote: Wed Mar 08, 2023 2:18 pm**
> I have the File Vanilla-Tweaks, I drag the wow.exe onto it and nothing happens? I know I am doing something wrong but I am a 486 guy and need some help   scared_turtle_head   thank you

Dragging WoW.exe on top of it should create a new file called WoW_tweaked.exe. It should look like nothing else happens, or at most a command line window will pop up and then quickly disappear. The patcher is purely a command-line application, so dragging WoW.exe on top of it is essentially just a shortcut for running it from the command line with the file path of WoW.exe as a parameter.

If the drag-and-drop method doesn't work for you, you should try running it from the command line. One reason it could be failing is that you have your game installed in the Program Files directory, and that directory is write protected without administrator privileges. A workaround for this could be to put vanilla-tweaks.exe on your desktop and then drag WoW.exe on top of it there; this way the patched executable will be created on your desktop. You can then move it into the Turtle WoW directory from there.

## Post 37681 by Zuuhl — 2023-03-14T12:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37681#p37681 | page 2 | era: pre-1.18.1 -->

> **Geojak wrote: Fri Feb 10, 2023 11:17 pm**
> Use vanilla tweak to make new wow exe, then launch with vanilla fixes. Works for me

This didn't work properly for me. Here's what I did to use Vanilla Tweaks and Vanilla Fixes together correctly:

 1. Install vanilla-tweaks.exe (as described in this forum).
 2. Delete the original Wow.exe and WowFoV.exe files.
 3. Rename the Wow_tweaked.exe file to Wow.exe.
 4. Install VanillaFixes.exe.
 5. Launch the game with VanillaFixes.exe.

Enjoy the game :)

## Post 37686 by Geojak (Grandmaster of Forum PvP) — 2023-03-14T13:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37686#p37686 | page 2 | era: pre-1.18.1 -->

well i thought stepts 1-5 were clear. my bad

## Post 37752 by Brndd — 2023-03-14T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37752#p37752 | page 2 | era: pre-1.18.1 -->

> **Zuuhl wrote: Tue Mar 14, 2023 12:19 pm**
> This didn't work properly for me. Here's what I did to use Vanilla Tweaks and Vanilla Fixes together correctly:
>
>  1. Install vanilla-tweaks.exe (as described in this forum).
>  2. Delete the original Wow.exe and WowFoV.exe files.
>  3. Rename the Wow_tweaked.exe file to Wow.exe.
>  4. Install VanillaFixes.exe.
>  5. Launch the game with VanillaFixes.exe.
>
>  Enjoy the game :)

The best way to use VanillaFixes with vanilla-tweaks is to launch VanillaFixes with the parameter "WoW_tweaked.exe". The easiest way to do this on Windows is to create a shortcut to VanillaFixes.exe, then right-click the shortcut, choose Properties, and in the "Target" box, after the file path of VanillaFixes, type WoW_tweaked.exe

## Post 37753 by Luclar — 2023-03-14T19:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37753#p37753 | page 2 | era: pre-1.18.1 -->

WOW Thank you! This was the itch I needed scratched for so long! <3

## Post 38036 by Manjus — 2023-03-16T22:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38036#p38036 | page 2 | era: pre-1.18.1 -->

> **Lescot wrote: Sat Feb 25, 2023 12:32 pm**
> Hi! The game crashes regularly after changing graphics settings. ![Image](https://i.imgur.com/obphTBI.jpg)

Anyone got a fix for this issue? I'm now getting this problem and can't launch the client at all. I even tried totally reinstalling a new TWoW folder and it still doesn't work. Non-stop crashing now.

## Post 38089 by Brndd — 2023-03-17T14:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38089#p38089 | page 2 | era: pre-1.18.1 -->

> **Manjus wrote: Thu Mar 16, 2023 10:22 pm**
> > **Lescot wrote: Sat Feb 25, 2023 12:32 pm**
> > Hi! The game crashes regularly after changing graphics settings. ![Image](https://i.imgur.com/obphTBI.jpg)
>
>   Anyone got a fix for this issue? I'm now getting this problem and can't launch the client at all. I even tried totally reinstalling a new TWoW folder and it still doesn't work. Non-stop crashing now.

What graphics settings did you change?

## Post 38090 by Lescot — 2023-03-17T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38090#p38090 | page 2 | era: pre-1.18.1 -->

> **Manjus wrote: Thu Mar 16, 2023 10:22 pm**
> > **Lescot wrote: Sat Feb 25, 2023 12:32 pm**
> > Hi! The game crashes regularly after changing graphics settings. ![Image](https://i.imgur.com/obphTBI.jpg)
>
>   Anyone got a fix for this issue? I'm now getting this problem and can't launch the client at all. I even tried totally reinstalling a new TWoW folder and it still doesn't work. Non-stop crashing now.

I had a slightly different problem – the game launched and crashed after a few seconds. I solved this problem by simply using the modification to the original WoW.exe file again.

## Post 38257 by Manjus — 2023-03-19T21:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38257#p38257 | page 2 | era: pre-1.18.1 -->

> **Brndd wrote: Fri Mar 17, 2023 2:39 pm**
> > **Manjus wrote: Thu Mar 16, 2023 10:22 pm**
> > > **Lescot wrote: Sat Feb 25, 2023 12:32 pm**
> > > Hi! The game crashes regularly after changing graphics settings. ![Image](https://i.imgur.com/obphTBI.jpg)
> >
> >   Anyone got a fix for this issue? I'm now getting this problem and can't launch the client at all. I even tried totally reinstalling a new TWoW folder and it still doesn't work. Non-stop crashing now.
>
>   What graphics settings did you change?

I didn't change anything, literally clicked on the exe and it created a Wow_tweaked. Then I tried to open client and I get this message automatically. I then just tried using a normal client and now I get the crash before the client even opens. I just can't play TWoW at all now pretty annoying...

## Post 38269 by Brndd — 2023-03-19T23:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38269#p38269 | page 2 | era: pre-1.18.1 -->

> **Manjus wrote: Sun Mar 19, 2023 9:06 pm**
> I didn't change anything, literally clicked on the exe and it created a Wow_tweaked. Then I tried to open client and I get this message automatically. I then just tried using a normal client and now I get the crash before the client even opens. I just can't play TWoW at all now pretty annoying...

That doesn't sound like it has anything to do with the patcher. I would suggest trying the usual troubleshooting steps; reset your Config.wtf and make sure your antivirus isn't fucking with you.

## Post 38277 by Xigbclutchix — 2023-03-20T03:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38277#p38277 | page 2 | era: pre-1.18.1 -->

> **Manjus wrote: Sun Mar 19, 2023 9:06 pm**
> I didn't change anything, literally clicked on the exe and it created a Wow_tweaked. Then I tried to open client and I get this message automatically. I then just tried using a normal client and now I get the crash before the client even opens. I just can't play TWoW at all now pretty annoying...

Make sure you have Vertex Animation Shaders enabled in the video options. I was getting crashes constantly when that was disabled and couldn't figure it out for hours.

## Post 38632 by Closer — 2023-03-22T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38632#p38632 | page 2 | era: pre-1.18.1 -->

Why you would disable shift loot with this is beyond me lol. Makes it too annoying to play with. Any way to re-enable shift loot?

## Post 38818 by Brndd — 2023-03-24T09:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38818#p38818 | page 2 | era: pre-1.18.1 -->

> **Closer wrote: Wed Mar 22, 2023 7:07 pm**
> Why you would disable shift loot with this is beyond me lol. Makes it too annoying to play with. Any way to re-enable shift loot?

Shift loot is just loot now, so try not pressing shift while looting. You can change it back the other way around by passing the **--no-quickloot** parameter.

## Post 39647 by Belphegore — 2023-03-30T14:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39647#p39647 | page 2 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun Oct 30, 2022 5:13 am**
> There's already an official version of this you can find at <https://github.com/slowtorta/turtlewow-improved-fov>
>
>  It has the FOV, increased RAM usage cap, and sound playing when in background tweaks applied.

A bit of a Necro, bit since I have the same specific ultra wide resolution: unfortunately no, the FOV increase provided by this fix and the exe that comes with the current turtle client are both for a fixed FOV of 1.925.
This is suitable for wide screen (16:9), but not for ultra or super wide screen (21:9).

In 21:9 the FOV fixed version still looks stretched, and at the same camera distance provides the same 3D view horizontally.

From a UI perspective, which I assume are elements rendered separately from the 3D game world, there still seems to be more 'real estate' but the scale UI function doesn't work anymore.

In short, ultra wide screen in vanilla is an ambitious mixed bag :) I think that only Wotlk and upwards were 21:9 friendly.

## Post 41979 by Draky — 2023-04-18T07:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41979#p41979 | page 2 | era: pre-1.18.1 -->

Hi. Just installed this, works great, but for whatever reason i can't change the resolution back to 1440p. It defaults to 1080p no matter what which is of course not a good thing on a 1440p moni

any tips?

## Post 42179 by Brndd — 2023-04-19T11:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42179#p42179 | page 2 | era: pre-1.18.1 -->

> **Belphegore wrote: Thu Mar 30, 2023 2:36 pm**
> A bit of a Necro, bit since I have the same specific ultra wide resolution: unfortunately no, the FOV increase provided by this fix and the exe that comes with the current turtle client are both for a fixed FOV of 1.925.
>  This is suitable for wide screen (16:9), but not for ultra or super wide screen (21:9).

You can increase the FoV further with the command line parameters. I don't know what a good FoV for 21:9 would be.

> **Draky wrote: Tue Apr 18, 2023 7:29 am**
> Hi. Just installed this, works great, but for whatever reason i can't change the resolution back to 1440p. It defaults to 1080p no matter what which is of course not a good thing on a 1440p moni
>
>  any tips?

At least on my machine the resolution dropdown in the video settings is totally broken because there are too many resolutions for it to display. I suggest changing the resolution in config.wtf directly and then simply not touching the in-game video settings.

## Post 43499 by Mujumbura — 2023-04-27T19:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43499#p43499 | page 2 | era: pre-1.18.1 -->

I am getting disconected after a couple of seconds playing sins I started using this patch   any idea as to why ??

## Post 44935 by Duckwarrior — 2023-05-08T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44935#p44935 | page 2 | era: pre-1.18.1 -->

thanks for u work!
i have a question , after use that tool, it make my game fps drop down to 70~80, and my gpu 3060ti usage rate just 20%, anyone have same question?

## Post 44965 by Duckwarrior — 2023-05-08T18:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44965#p44965 | page 2 | era: pre-1.18.1 -->

i solve problem after search keyword fps
[viewtopic.php?p=34873](https://forum.turtlecraft.gg/viewtopic.php?p=34873)

## Post 45281 by Casavir — 2023-05-10T05:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=45281#p45281 | page 2 | era: pre-1.18.1 -->

Thanks alot! I tried to find grass distance patch since Nost!

But i have another request. Is it possible to fix processaffinitymask in wow.exe? Wow.exe process always use third core of my CPU (i7-2600k). And config.wtf commands doesnt work properly. Can you make for example constant SET processAffinityMask "15" or anything like this?

[https://wowwiki-archive.fandom.com/wiki ... finityMask](https://wowwiki-archive.fandom.com/wiki/CVar_processAffinityMask)

P.S. I know i can set 3 and 4 cores in wow shortcut

## Post 46250 by Lightbringerog — 2023-05-17T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46250#p46250 | page 3 | era: pre-1.18.1 -->

This Tweak has performance issues. I was playing on GTX960 and Ryzen 5 3600
Both 1.14(retail classic)
And Vanilla Fixes with 1.12 hold a stable 60 fps
With Vanilla Tweaks standing in crossraods drops below 60fps, especially when i move around the camera. Sometimes even 40fps
Def not my machine since the first 2 clients run fine and even with unlimited Farclip it should handle it 1080 60fps.
I even did a clean reinstall of Turtle, same thing.
Both dx9 and Vulcan.

## Post 47954 by Brndd — 2023-05-29T14:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=47954#p47954 | page 3 | era: pre-1.18.1 -->

> **Lightbringerog wrote: Wed May 17, 2023 1:44 pm**
> This Tweak has performance issues. I was playing on GTX960 and Ryzen 5 3600
>  Both 1.14(retail classic)
>  And Vanilla Fixes with 1.12 hold a stable 60 fps
>  With Vanilla Tweaks standing in crossraods drops below 60fps, especially when i move around the camera. Sometimes even 40fps
>  Def not my machine since the first 2 clients run fine and even with unlimited Farclip it should handle it 1080 60fps.
>  I even did a clean reinstall of Turtle, same thing.
>  Both dx9 and Vulcan.

This patcher increases the grass draw distance (frilldistance) quite a lot by default. On most modern machines this should be fine with the default grass density (frilldensity) setting, but it can cause performance issues if you have your grass density set very high, especially if it's set beyond the default maximum using **/console frilldensity**.

I would recommend lowering grass density to something around 64. At least personally I find it nicer to have a large grass draw distance with a lower grass density than vice versa. Alternatively, you can change the grass density with the patcher's command line option: **--frilldistance 140** to set it twice as high as the default game's grass density, or **--no-frilldistance** to disable changing it altogether. By default the patcher increases it to 300.

## Post 50094 by Mo — 2023-06-15T07:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50094#p50094 | page 3 | era: pre-1.18.1 -->

I am just here to say that applying all the mods [here](https://turtle-wow.fandom.com/wiki/Client_Fixes_and_Tweaks) fixed the jumpy mouse, the GPU lag and the FPS. My assumption is that the VanillaFixes DXVK version forces the client to run with Vulkan. The only problem I have is that HDR no longer works.

## Post 51587 by Canseco — 2023-06-28T05:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51587#p51587 | page 3 | era: pre-1.18.1 -->

> Camera skip glitch fix
>
>  Fixes the glitch where the camera sometimes skips to face a random direction when rotated.

You are my fucking hero, I'll try this out asap.

## Post 51588 by Canseco — 2023-06-28T05:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51588#p51588 | page 3 | era: pre-1.18.1 -->

It's fixed!! Oh my god the mouse center bug that has been in this game since ever is gone, you are a living god in earth.

## Post 52657 by Lickmajamtart1 — 2023-07-08T23:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52657#p52657 | page 3 | era: pre-1.18.1 -->

> **Brndd wrote: Fri Mar 24, 2023 9:02 am**
> > **Closer wrote: Wed Mar 22, 2023 7:07 pm**
> > Why you would disable shift loot with this is beyond me lol. Makes it too annoying to play with. Any way to re-enable shift loot?
>
>  Shift loot is just loot now, so try not pressing shift while looting. You can change it back the other way around by passing the **--no-quickloot** parameter.

It did not work for me    unhappy_turtle

## Post 54431 by Kelatazartwow — 2023-07-24T08:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54431#p54431 | page 3 | era: pre-1.18.1 -->

> **Brndd wrote: Tue Jul 12, 2022 10:32 pm**
> <https://github.com/brndd/vanilla-tweaks/releases>
>
>  The 1.12.1 client is missing many small QoL features that more modern clients have. I found this annoying, so I created a simple patcher that modifies the executable and adds some minor tweaks. The patcher is open source and very simple. You can see all the offsets it patches [in the source code](https://github.com/brndd/vanilla-tweaks/blob/master/src/main.rs).
>
>  These tweaks include (at the time of writing; see the Github repo for an up-to-date list):
>
> - Widescreen FoV
> - Sound in background
> - Increased sound channel count (technically you can change this with a command; this patcher changes the default so you don't have to)
> - Increased farclip max value
> - Increased grass draw distance
> - Quickloot by default (hold shift for manual loot)
> - Nameplate range increase (increased to 41 yards by default, matching the max range in the Classic and TBC Classic clients)
> - Large Address Aware patch (lets the game use up to 4GB RAM. May help with stability if you use graphical enhancements)
>   Let me know if you have ideas for other tweaks. The kind of things that are possible to do with this method are things like changing hardcoded values (e.g. FoV and grass render distance) and very simple changes to the game logic. My intention is to only add QoL tweaks, so I will not add anything that gives players an unfair advantage.
>
>  To use the patcher, drag WoW.exe on top of it and it'll create a WoW_patched.exe next to it. Run WoW_patched.exe instead of WoW.exe to start the game, or alternatively rename your original executable and replace it with the patched one. For advanced options, such as changing the values of some of the tweaks or disabling some patches, run the patcher from a command line and pass the --help parameter to see a list of command line parameters.
>
>  Note that since this modifies the game client it may run afoul of Warden, the client-side anticheat used on some private servers. I have played with it on Turtle WoW for a while and have had no issues, plus [the other client patcher](https://forum.turtlecraft.gg/viewtopic.php?f=29&t=2331) seems to be kosher on Turtle too.

Hi mate, this might be extremely weird, but while the Ultrawide FoV is 100% fine and it looks great, my UI is extremely stretched. Weirdly enough it foes appear pfUI has this issues fixed I assume with custom textures for the mens and so on. Is there any fix for this?

EDIT : I did some testing, it does appear I was wrong and the game is a bit stretched too. I am going to assume 21:9 is just not possible in this client without some sort of a major tweak.

EDIT 2 : I can confirm 21:9 can be achieved in this client. The issue is when you play from a laptop plugged to external monitor most of the time. You need to disable the integrated video card and then the game will recognize the resolution.

## Post 54763 by Albusturt — 2023-07-26T14:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54763#p54763 | page 3 | era: pre-1.18.1 -->

> **Kelatazartwow wrote: Mon Jul 24, 2023 8:54 am**
> <https://github.com/brndd/vanilla-tweaks/releases>
>
>  EDIT 2 : I can confirm 21:9 can be achieved in this client. The issue is when you play from a laptop plugged to external monitor most of the time. You need to disable the integrated video card and then the game will recognize the resolution.

@Kelatazartwow
I have an ultrawide (aspect ratio 21:9) monitor at resolution 2560x1080. I have used this tool on default settings to set the FoV. I'm afraid it could make it something other than what's good for my aspect ratio(as it has been discussed here, it sets it to 1.925 which is good for 1920x1080 monitors.). What is the right FoV for this aspect ratio so I can try to set it manually?

## Post 54829 by Kelatazartwow — 2023-07-27T05:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54829#p54829 | page 3 | era: pre-1.18.1 -->

> **Albusturt wrote: Wed Jul 26, 2023 2:32 pm**
> > **Kelatazartwow wrote: Mon Jul 24, 2023 8:54 am**
> > <https://github.com/brndd/vanilla-tweaks/releases>
> >
> >  EDIT 2 : I can confirm 21:9 can be achieved in this client. The issue is when you play from a laptop plugged to external monitor most of the time. You need to disable the integrated video card and then the game will recognize the resolution.
>
>   @Kelatazartwow
>  I have an ultrawide (aspect ratio 21:9) monitor at resolution 2560x1080. I have used this tool on default settings to set the FoV. I'm afraid it could make it something other than what's good for my aspect ratio(as it has been discussed here, it sets it to 1.925 which is good for 1920x1080 monitors.). What is the right FoV for this aspect ratio so I can try to set it manually?

First and most importantly is finding out the issue. If you are not seeing 2560x1080 as a resolution in your video settings than the issue is the client is not recognizing the resolution.

As I said above, the issue - in my case - is that I play from a laptop hooked to Ultrawide monitor and my laptop has 2 video cards:

 1- Integrated
 1 - Dedicated

This appears to cause a conflict in the 1.12 client and when a laptop is plugged to an external monitor the game doesn't recognize the resolution. To force the client to recognize the external monitor display resolution, instead of your laptop screen resolution, you need to:

Close the Game down - > Go to Device Manager - > Disable the integrated Video Card - > Run the game again - > In video settings you should now have 2560x1080 resolution.

I've seen some people run scripts to shut down the laptop display and stuff like that, but all my testing and attempts didn't work for me. Could be more than one reason, but I am going to assume that it might have something to do with Razer's custom firmware and drivers as the laptop screen is 165 Hz and kinda insane.

However, knowing that the 1.12 client does indeed supports 21:9 aspect and res like 2560x1080 is a pretty big things as it means it can very likely be debugged and fixed on all machines.

## Post 54837 by Albusturt — 2023-07-27T07:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54837#p54837 | page 3 | era: pre-1.18.1 -->

I meant I just needed the right FoV value for such screens.

## Post 55025 by Albusturt — 2023-07-29T05:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55025#p55025 | page 3 | era: pre-1.18.1 -->

How did anybody get the number 1.925? Please show me on this website so I can calculate a value for my own screen.

I entered 21:9 aspect ratio, 70 cm distance to screen and 75 cm diagonal screen length and the results are nowhere close to 1.925 so WoW must have a different way of calculating it using these.

<https://andyf.me/fovcalc.html>

## Post 55910 by Brndd — 2023-08-05T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55910#p55910 | page 3 | era: pre-1.18.1 -->

> **Albusturt wrote: Sat Jul 29, 2023 5:55 am**
> How did anybody get the number 1.925? Please show me on this website so I can calculate a value for my own screen.
>
>  I entered 21:9 aspect ratio, 70 cm distance to screen and 75 cm diagonal screen length and the results are nowhere close to 1.925 so WoW must have a different way of calculating it using these.
>
>  <https://andyf.me/fovcalc.html>

I have not bothered reversing the algorithm to calculate the FoV, so 1.925 was just discovered through trial and error. Many years ago a friend of mine used Cheat Engine to change the FoV on the fly while running TBC and WotLK side by side standing in the same location until he got it looking identical :-).

## Post 64984 by Athei — 2023-09-17T12:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64984#p64984 | page 3 | era: pre-1.18.1 -->

I checked the source code and it seems that it is replacing fixed positions rather than searching for code places? This requires that the binary is the unmodified blizzard one. But isn't the Turtle WoW binary different from the original one?

## Post 68293 by Casavir — 2023-10-03T07:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68293#p68293 | page 3 | era: pre-1.18.1 -->

1.17.0?

## Post 68296 by Nokidding — 2023-10-03T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68296#p68296 | page 3 | era: pre-1.18.1 -->

Patch for 1.17.0 would be amazing :)

## Post 68301 by Stokes — 2023-10-03T07:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68301#p68301 | page 3 | era: pre-1.18.1 -->

> **Nokidding wrote: Tue Oct 03, 2023 7:33 am**
> Patch for 1.17.0 would be amazing :)

does the old wowtweaks work with the new patch?

## Post 68333 by Billymenager — 2023-10-03T09:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68333#p68333 | page 3 | era: pre-1.18.1 -->

> **Stokes wrote: Tue Oct 03, 2023 7:44 am**
> > **Nokidding wrote: Tue Oct 03, 2023 7:33 am**
> > Patch for 1.17.0 would be amazing :)
>
>   does the old wowtweaks work with the new patch?

Yes, but u must remove old wow-tweaked.exe and execute a new one.

## Post 68363 by Dhrazar (Barrens Chat Casualty) — 2023-10-03T11:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68363#p68363 | page 3 | era: pre-1.18.1 -->

Still works fine. If you don't know how to set up, watch this video ->
[embed: https://www.youtube.com/embed/dPQH78O5x2E]

## Post 73500 by Sharlatan — 2023-10-24T22:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=73500#p73500 | page 3 | era: pre-1.18.1 -->

I set cam distance like 150 but seems its server-side locked to default range.. any tips for this?

## Post 74993 by Kingtos — 2023-10-31T20:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74993#p74993 | page 3 | era: pre-1.18.1 -->

Hi,

I installed vanilla tweaks and noticed the fps dropped from 160 to 50.
I removed the frilldistance, but the FPS is still 50.

I tested this with WoW.exe tweaked and untweaked, and it's not the grass that lowers my FPS, but something else from the tweak

Any idea what could it be?

Thx

## Post 75708 by Inff — 2023-11-03T14:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75708#p75708 | page 3 | era: pre-1.18.1 -->

Regarding ultrawide FoV. As of now we have FoV value patched to 1.925 , wich is fine for 16:9 aspect ratio, but not enought for ultrawide resolutions. Its getting cropped vertically and zoomed in with no additional FoV to compensate.
Can values higher than 1.925 be implemented with additional exe file maybe?

I found here someone already did this for 1.12, tbc and wotlk , but its not working with turtle client.

[https://www.ownedcore.com/forums/world- ... w-exe.html](https://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-emulator-servers/wow-emu-programs/617657-vanilla-1-12-tbc-2-4-3-permanent-fov-fix-patched-wow-exe.html)

## Post 76606 by Inff — 2023-11-09T10:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76606#p76606 | page 3 | era: pre-1.18.1 -->

Found a solution for previous  post. Vanilla-tweaks allows to change FoV value in the settings throught command line. Got my FoV set to 2.2 instead of 1.925

## Post 77910 by Vigor1983 — 2023-11-18T06:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=77910#p77910 | page 3 | era: pre-1.18.1 -->

The drag and drop WoW.exe ontop of vanilla-tweaks.exe to create wow_tweaks doesnt work for me... im so stuck

## Post 85298 by Piguwaile — 2024-01-19T08:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=85298#p85298 | page 3 | era: pre-1.18.1 -->

Hello, I just made a GUI version of a subset of this tool, and it can undo the changes but only for "autoloot", "nameplate distance" and  "fov setting".

Here is the repo  <https://github.com/R32/vanilla-tweaks>

## Post 93715 by Turtlemagma — 2024-04-29T03:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93715#p93715 | page 3 | era: pre-1.18.1 -->

> **Kelatazartwow wrote: Thu Jul 27, 2023 5:36 am**
> > **Albusturt wrote: Wed Jul 26, 2023 2:32 pm**
> > > **Kelatazartwow wrote: Mon Jul 24, 2023 8:54 am**
> > > <https://github.com/brndd/vanilla-tweaks/releases>
> > >
> > >  EDIT 2 : I can confirm 21:9 can be achieved in this client. The issue is when you play from a laptop plugged to external monitor most of the time. You need to disable the integrated video card and then the game will recognize the resolution.
> >
> >   @Kelatazartwow
> >  I have an ultrawide (aspect ratio 21:9) monitor at resolution 2560x1080. I have used this tool on default settings to set the FoV. I'm afraid it could make it something other than what's good for my aspect ratio(as it has been discussed here, it sets it to 1.925 which is good for 1920x1080 monitors.). What is the right FoV for this aspect ratio so I can try to set it manually?
>
>   First and most importantly is finding out the issue. If you are not seeing 2560x1080 as a resolution in your video settings than the issue is the client is not recognizing the resolution.
>
>  As I said above, the issue - in my case - is that I play from a laptop hooked to Ultrawide monitor and my laptop has 2 video cards:
>
>  1- Integrated
>  1 - Dedicated
>
>  This appears to cause a conflict in the 1.12 client and when a laptop is plugged to an external monitor the game doesn't recognize the resolution. To force the client to recognize the external monitor display resolution, instead of your laptop screen resolution, you need to:
>
>  Close the Game down - > Go to Device Manager - > Disable the integrated Video Card - > Run the game again - > In video settings you should now have 2560x1080 resolution.
>
>  I've seen some people run scripts to shut down the laptop display and stuff like that, but all my testing and attempts didn't work for me. Could be more than one reason, but I am going to assume that it might have something to do with Razer's custom firmware and drivers as the laptop screen is 165 Hz and kinda insane.
>
>  However, knowing that the 1.12 client does indeed supports 21:9 aspect and res like 2560x1080 is a pretty big things as it means it can very likely be debugged and fixed on all machines.

ahhhhhhhhh disabling the integrated video card worked!! THANK YOU!!!

I should add, I did this and the resolutions showed, but the resolution didn't render properly after choosing 3840x2160. I had to follow a separate instruction to also uncheck 'Maximized' from the video settings, stretch the window, and re-check 'Maximized'. That fixed the issue for me after trying every other suggestion under the sun.   smiling_turtle

I should add, I have 3 monitors, one is a 4k and two are 1080p's. My client didn't go above 1600x1200 resolution, but the above fix worked.

