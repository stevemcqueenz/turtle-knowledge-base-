---
title: "Necrosis"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6132"
topic_id: 6132
forum_id: 18
forum: "AddOns"
author: "Grauhase"
author_authority: "player"
posted: "2023-03-21T23:07:00Z"
last_post: "2026-02-21T19:22:00Z"
post_count: 36
pages: 2
fetched: "2026-09-10T10:21:54Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Necrosis

## Post 38509 by Grauhase — 2023-03-21T23:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38509#p38509 | page 1 | era: pre-1.18.1 -->

Hi guys...

Long time ago, I used to play my warlock back in vanilla and TBC using an amazing addon called NECROSIS.
I've tried all the versions in this page but none seems to be working.
Does anyone have a working version or know how to fix the lua error?

Thanks in advance.

[https://www.curseforge.com/wow/addons/n ... filelength](https://www.curseforge.com/wow/addons/necrosis-ld-c/files?sort=filelength)

## Post 38546 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-03-22T08:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38546#p38546 | page 1 | era: pre-1.18.1 -->

<https://legacy-wow.com/classic-addons/necrosis/>

here u are!    smiling_turtle_head

## Post 38590 by Grauhase — 2023-03-22T12:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38590#p38590 | page 1 | era: pre-1.18.1 -->

> **Majestik51 wrote: Wed Mar 22, 2023 8:16 am**
> <https://legacy-wow.com/classic-addons/necrosis/>
>
>  here u are!    smiling_turtle_head

Hi there!

Thanks for trying to help...but...unfortunately it isnt working :/

## Post 38592 by Mcnair (Barrens Chat Casualty) — 2023-03-22T12:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38592#p38592 | page 1 | era: pre-1.18.1 -->

It seems the linked addon is not vanilla, but for Classic. Are you sure it was a vanilla addon you used and not classic? I couldn't find one named as such from vanilla times, but you could try with 'Necronomicon' from 2006, <https://legacy-wow.com/vanilla-addons/necronomicon/>
I have not used this before, but a quick look at the lua suggests similar functions.

## Post 38594 by Elisleris (Bug Report Enthusiast) — 2023-03-22T12:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38594#p38594 | page 1 | era: pre-1.18.1 -->

Try to check this version [https://www.curseforge.com/wow/addons/n ... iles/68428](https://www.curseforge.com/wow/addons/necrosis-ld-c/files/68428)

## Post 38599 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-03-22T13:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38599#p38599 | page 1 | era: pre-1.18.1 -->

its a vanilla addon 100%, i used it in a previous 1.12 client.
Cant find it right now... Sorry

## Post 38608 by Timonius — 2023-03-22T14:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38608#p38608 | page 1 | era: pre-1.18.1 -->

I think I've found something!

<https://www.dkpminus.com/wow/addons/necrosis-ldc/>

There is a 1.12.1 version

## Post 38704 by Grauhase — 2023-03-23T11:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38704#p38704 | page 1 | era: pre-1.18.1 -->

Hi guys,

Firts of all.... I didnt expect to see so many ppl trying to help... thanks a lot!

Well... tried both links (Timonius and Elisleris)... but .. it didnt work!
Even tried with all my addons disabled but Necrosis and still... it didnt work!

This is the error message I usually got with every single version I try:

Interface\AddOns\Necrsos\NecrosisInitialize.lua:24: attempt to index global
NecrosisConfig ( a nil value)

## Post 38707 by Majestik51 (Patch Note Conspiracy Theorist) — 2023-03-23T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38707#p38707 | page 1 | era: pre-1.18.1 -->

> **Grauhase wrote: Thu Mar 23, 2023 11:35 am**
> Hi guys,
>
>  Firts of all.... I didnt expect to see so many ppl trying to help... thanks a lot!
>
>  Well... tried both links (Timonius and Elisleris)... but .. it didnt work!
>  Even tried with all my addons disabled but Necrosis and still... it didnt work!
>
>  This is the error message I usually got with every single version I try:
>
>  Interface\AddOns\Necrsos\NecrosisInitialize.lua:24: attempt to index global
>  NecrosisConfig ( a nil value)

I sent u pm  maintenance_turtle

## Post 38933 by Mustachiocat — 2023-03-24T19:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38933#p38933 | page 1 | era: pre-1.18.1 -->

Was there a solution for this? I'm interested in the addon

## Post 39076 by Grauhase — 2023-03-26T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39076#p39076 | page 1 | era: pre-1.18.1 -->

> **Mustachiocat wrote: Fri Mar 24, 2023 7:12 pm**
> Was there a solution for this? I'm interested in the addon

No yet :/

## Post 40799 by Kkoma — 2023-04-08T16:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40799#p40799 | page 1 | era: pre-1.18.1 -->

I edited the Necrosis.lua in /WTF/Account/YOURACCOUNTNAME/Turtle WoW/YOURCHARACTERNAME/SavedVariables/Necrosis.lua

I replaced the line where it says NecrosisConfig = nil with NecrosisConfig.NecrosisLanguage == "enUS"

Got an errormessage when starting the game but then it all seems to have fixed itself. Now it works fine.

## Post 40801 by Kkoma — 2023-04-08T16:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40801#p40801 | page 1 | era: pre-1.18.1 -->

> **Grauhase wrote: Sun Mar 26, 2023 12:54 am**
> > **Mustachiocat wrote: Fri Mar 24, 2023 7:12 pm**
> > Was there a solution for this? I'm interested in the addon
>
>   No yet :/

Check out post above.

## Post 41018 by Grauhase — 2023-04-10T13:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41018#p41018 | page 1 | era: pre-1.18.1 -->

> **Kkoma wrote: Sat Apr 08, 2023 4:29 pm**
> I edited the Necrosis.lua in /WTF/Account/YOURACCOUNTNAME/Turtle WoW/YOURCHARACTERNAME/SavedVariables/Necrosis.lua
>
>  I replaced the line where it says NecrosisConfig = nil with NecrosisConfig.NecrosisLanguage == "enUS"
>
>  Got an errormessage when starting the game but then it all seems to have fixed itself. Now it works fine.

Hi kkoma!

Thanks for your help!

Where did u get the Necrosis version u are using?

I tried with the one I have here got the error message at the start as well but the Necrosis interface are not showing up after that...

## Post 41055 by Eajhtiuaikq — 2023-04-10T21:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41055#p41055 | page 1 | era: pre-1.18.1 -->

found this version
[https://www.warcrafttavern.com/wow-clas ... s-classic/](https://www.warcrafttavern.com/wow-classic/addons/necrosis-classic/)

not tested

## Post 41145 by Grauhase — 2023-04-11T12:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41145#p41145 | page 1 | era: pre-1.18.1 -->

> **Eajhtiuaikq wrote: Mon Apr 10, 2023 9:49 pm**
> found this version
>  [https://www.warcrafttavern.com/wow-clas ... s-classic/](https://www.warcrafttavern.com/wow-classic/addons/necrosis-classic/)
>
>  not tested

Didnt work :/

## Post 41274 by Bellaeddie — 2023-04-12T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41274#p41274 | page 1 | era: pre-1.18.1 -->

I downloaded the classic version here:
<https://www.dkpminus.com/wow/addons/necrosis-ldc/>

Afterwards I did the edit:
I replaced the line where it says NecrosisConfig = nil with NecrosisConfig.NecrosisLanguage == "enUS"

Started client, got 1 error but it works fine.

## Post 41295 by Grauhase — 2023-04-12T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41295#p41295 | page 1 | era: pre-1.18.1 -->

> **Bellaeddie wrote: Wed Apr 12, 2023 3:17 pm**
> I downloaded the classic version here:
>  <https://www.dkpminus.com/wow/addons/necrosis-ldc/>
>
>  Afterwards I did the edit:
>  I replaced the line where it says NecrosisConfig = nil with NecrosisConfig.NecrosisLanguage == "enUS"
>
>  Started client, got 1 error but it works fine.

OMG! IT WORKED! \o/

Thanks so much!

## Post 41610 by Kkoma — 2023-04-15T05:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41610#p41610 | page 1 | era: pre-1.18.1 -->

> **Grauhase wrote: Wed Apr 12, 2023 5:21 pm**
> > **Bellaeddie wrote: Wed Apr 12, 2023 3:17 pm**
> > I downloaded the classic version here:
> >  <https://www.dkpminus.com/wow/addons/necrosis-ldc/>
> >
> >  Afterwards I did the edit:
> >  I replaced the line where it says NecrosisConfig = nil with NecrosisConfig.NecrosisLanguage == "enUS"
> >
> >  Started client, got 1 error but it works fine.
>
>
>  OMG! IT WORKED! \o/
>
>
>  Thanks so much!

No problem. Good luck out there!

## Post 43655 by Grauhase — 2023-04-28T17:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43655#p43655 | page 1 | era: pre-1.18.1 -->

Guys...
I have a problem with this addon.
At first glance everything seems to be ok...
Everytime I log in, when i try to use the demon menu it works fine for the first time. But then, after  that everytime I need to summon a different or even the samen demon the demon menu works like LIFE TAP spell...
So I did multiple tests... if I log out and log in again... first summon ok, after that, sumon button works as life tap. Its weird i know...
Does anyone have an idea how to fix it?

## Post 43933 by Rsatkey — 2023-04-30T19:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43933#p43933 | page 1 | era: pre-1.18.1 -->

> **Grauhase wrote: Fri Apr 28, 2023 5:15 pm**
> Guys...
>  I have a problem with this addon.
>  At first glance everything seems to be ok...
>  Everytime I log in, when i try to use the demon menu it works fine for the first time. But then, after  that everytime I need to summon a different or even the samen demon the demon menu works like LIFE TAP spell...
>  So I did multiple tests... if I log out and log in again... first summon ok, after that, sumon button works as life tap. Its weird i know...
>  Does anyone have an idea how to fix it?

please try this <https://wowskill.ru/necrosis/necrosis-en-1-12-1/>

## Post 44196 by Grauhase — 2023-05-03T06:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44196#p44196 | page 1 | era: pre-1.18.1 -->

> **Rsatkey wrote: Sun Apr 30, 2023 7:26 pm**
> > **Grauhase wrote: Fri Apr 28, 2023 5:15 pm**
> > Guys...
> >  I have a problem with this addon.
> >  At first glance everything seems to be ok...
> >  Everytime I log in, when i try to use the demon menu it works fine for the first time. But then, after  that everytime I need to summon a different or even the samen demon the demon menu works like LIFE TAP spell...
> >  So I did multiple tests... if I log out and log in again... first summon ok, after that, sumon button works as life tap. Its weird i know...
> >  Does anyone have an idea how to fix it?
>
>  please try this <https://wowskill.ru/necrosis/necrosis-en-1-12-1/>

Hi! Thanks for your suggestion!
Im gonna try this right now and come back later with a feedback!

## Post 44822 by Rsatkey — 2023-05-07T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44822#p44822 | page 1 | era: pre-1.18.1 -->

> **Grauhase wrote: Wed May 03, 2023 6:39 am**
> > **Rsatkey wrote: Sun Apr 30, 2023 7:26 pm**
> > > **Grauhase wrote: Fri Apr 28, 2023 5:15 pm**
> > > Guys...
> > >  I have a problem with this addon.
> > >  At first glance everything seems to be ok...
> > >  Everytime I log in, when i try to use the demon menu it works fine for the first time. But then, after  that everytime I need to summon a different or even the samen demon the demon menu works like LIFE TAP spell...
> > >  So I did multiple tests... if I log out and log in again... first summon ok, after that, sumon button works as life tap. Its weird i know...
> > >  Does anyone have an idea how to fix it?
> >
> >  please try this <https://wowskill.ru/necrosis/necrosis-en-1-12-1/>
>
>   Hi! Thanks for your suggestion!
>  Im gonna try this right now and come back later with a feedback!

Did you succeed? Works?  smiling_turtle_head

## Post 44878 by Grauhase — 2023-05-08T05:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44878#p44878 | page 1 | era: pre-1.18.1 -->

Hi, Rsatkey!

Nah... still having the same issue... it seems to be random after you log in and cast a few summonings...
First ones work ok but then all the demons buttons start to work as different spells.

## Post 52490 by Krokzogg — 2023-07-06T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52490#p52490 | page 1 | era: pre-1.18.1 -->

I did another edit in the Necrosis.lua in /WTF/Account/YOURACCOUNTNAME/Turtle WoW/YOURCHARACTERNAME/SavedVariables/Necrosis.lua

I replaced the line "NecrosisConfig = nil" with "NecrosisConfig = Default_NecrosisConfig"

And all works.

## Post 63391 by Sofire — 2023-09-13T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=63391#p63391 | page 1 | era: pre-1.18.1 -->

Is there a function it provide which auto cast Life Tap if there is not enough mana to cast spell?
just an idea..

## Post 88343 by Donjn — 2024-02-21T17:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88343#p88343 | page 1 | era: pre-1.18.1 -->

If anyone got this working can you send me the correct addon you used for Turtle WoW with the edits you made? I sent some PMs too.

Thanks!

## Post 88355 by Tanasa — 2024-02-21T23:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88355#p88355 | page 1 | era: pre-1.18.1 -->

I recommend downloading this <https://github.com/ericraio/vanilla-wow-addons>

Then use the included Necronomicon fork as well as the Ace and TimeX dependencies which are in the same download.  I've had zero problems.

## Post 91335 by Looran — 2024-03-25T12:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=91335#p91335 | page 1 | era: pre-1.18.1 -->

Hi, I´ll share my solution here too.

Downloaded this one as recommended above.
[https://wowskill.ru/wp-content/uploads/ ... 1.12.1.zip](https://wowskill.ru/wp-content/uploads/2017/11/Necrosis-EN-1.12.1.zip)

Got an error and had a look into the file NecrosisInitialize.lua
Seemed to be an issue with getting the variables for the decision which localization should be taken.

So I just fixed it by outcommenting everything and setting it directly to Necrosis_Localization_Dialog_En();
Line 20-38 in file \TurtleWowFolder\Interface\AddOns\Necrosis\NecrosisInitialize.lua looks like this:
Code: Select all

```
function Necrosis_Initialize()

	-- Initilialisation des Textes (VO / VF / VA)
	-- if NecrosisConfig ~= {} then
	-- if (NecrosisConfig.NecrosisLanguage == "enUS") or (NecrosisConfig.NecrosisLanguage == "enGB") then
 -- Necrosis_Localization_Dialog_En();
	-- elseif (NecrosisConfig.NecrosisLanguage == "deDE") then
	-- Necrosis_Localization_Dialog_De();
	-- else
	-- Necrosis_Localization_Dialog_Fr();
	-- end
	-- elseif GetLocale() == "enUS" or GetLocale() == "enGB" then
 -- Necrosis_Localization_Dialog_En();
	-- elseif GetLocale() == "deDE" then
	-- Necrosis_Localization_Dialog_De();
	-- else
	-- Necrosis_Localization_Dialog_Fr();
	-- end
Necrosis_Localization_Dialog_En();
```

Works fine for me. Hopefully this helps.

## Post 96186 by Burgerboynz — 2024-06-02T10:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96186#p96186 | page 1 | era: pre-1.18.1 -->

> **Krokzogg wrote: Thu Jul 06, 2023 3:56 pm**
> I did another edit in the Necrosis.lua in /WTF/Account/YOURACCOUNTNAME/Turtle WoW/YOURCHARACTERNAME/SavedVariables/Necrosis.lua
>
>  I replaced the line "NecrosisConfig = nil" with "NecrosisConfig = Default_NecrosisConfig"
>
>  And all works.

For anyone looking at this in 2024 onwards, the important bit is what Krokzogg said,

Locate where you extracted your Turtle WOW folder:
 */Your Trutle WOW Folder/WTF/Account/YOURACCOUNTNAME/Turtle WoW/YOURCHARACTERNAME/SavedVariables/*

Then you will find:
 *Necrosis.lua*

 **Open it with Notepad** or your chosen editor of choice

It will only have a single line, delete and replace with the below
 *NecrosisConfig = Default_NecrosisConfig*

Restart WoW, check in *character selection* to confirm the **Addon is enabled** and that should be all working.

I had been messing around trying to get this to work till an ran across this suggestion and it's working like new :-)

Cheers Krokzogg

## Post 115690 by Ashwhole (Barrens Chat Casualty) — 2025-01-07T04:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=115690#p115690 | page 1 | era: pre-1.18.1 -->

Hello! To any1 here in 2025, the addon from

<https://github.com/BlackHobbiT/necrosis-twow>

this addon version seem to be working fine! In installed it through GIT Addons Manager!   turtle_in_love_head

## Post 126025 by Tobibi53 — 2025-04-08T17:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126025#p126025 | page 1 | era: pre-1.18.1 -->

> **Ashwhole wrote: Tue Jan 07, 2025 4:29 am**
> Hello! To any1 here in 2025, the addon from
>
>  <https://github.com/BlackHobbiT/necrosis-twow>
>
>  this addon version seem to be working fine! In installed it through GIT Addons Manager!   turtle_in_love_head

Since KARA 40 patch, the addon from github is not working anymore. Anyone got a solution for this?

it spams this error:
Necrosis: Configuration loaded.
Necrosis: /necro to show the setting menu !
Interface\AddOns\necrosis\Necrosis.lua![:1597:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1597.svg) attempt to compare number with nil

## Post 130263 by Zaliti — 2025-05-08T23:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130263#p130263 | page 1 | era: pre-1.18.1 -->

> **Tobibi53 wrote: Tue Apr 08, 2025 5:38 pm**
> > **Ashwhole wrote: Tue Jan 07, 2025 4:29 am**
> > Hello! To any1 here in 2025, the addon from
> >
> >  <https://github.com/BlackHobbiT/necrosis-twow>
> >
> >  this addon version seem to be working fine! In installed it through GIT Addons Manager!   turtle_in_love_head
>
>   Since KARA 40 patch, the addon from github is not working anymore. Anyone got a solution for this?
>
>  it spams this error:
>  Necrosis: Configuration loaded.
>  Necrosis: /necro to show the setting menu !
>  Interface\AddOns\necrosis\Necrosis.lua![:1597:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1597.svg) attempt to compare number with nil

i found this link that looks the exact same when installed but it's working for me so far :)

<https://github.com/T321us/necrosis-twow>

## Post 131660 by T321 — 2025-05-17T19:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131660#p131660 | page 1 | era: pre-1.18.1 -->

> **Zaliti wrote: Thu May 08, 2025 11:38 pm**
> i found this link that looks the exact same when installed but it's working for me so far :)
>
>  <https://github.com/T321us/necrosis-twow>

Just a heads up. This one is not exactly like the original. I have started to add and change some items to better incorporate some TWoW changes and to the way I prefer.

## Post 169137 by Ravenofseven72 (Barrens Chat Casualty) — 2026-02-21T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169137#p169137 | page 1 | era: 1.18.1-announced-pre-release -->

Newest Version

<https://github.com/pylebecq/necrosis-twow.git>

or on the launcher under

necrosis-twow

![Image](https://static.wikia.nocookie.net/turtle-wow/images/f/f8/Necrosis1.png/revision/latest?cb=20250427084905)

![Image](https://static.wikia.nocookie.net/turtle-wow/images/4/4d/Necrosis.png/revision/latest?cb=20250427084957)

## Post 169142 by basednoob (Patch Note Conspiracy Theorist) — 2026-02-21T19:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169142#p169142 | page 2 | era: 1.18.1-announced-pre-release -->

> **Ravenofseven72 wrote: Sat Feb 21, 2026 5:22 pm**
> Newest Version
>
>  <https://github.com/pylebecq/necrosis-twow.git>
>
>
>  or on the launcher under
>
>  necrosis-twow
>
>  ![Image](https://static.wikia.nocookie.net/turtle-wow/images/f/f8/Necrosis1.png/revision/latest?cb=20250427084905)
>
>  ![Image](https://static.wikia.nocookie.net/turtle-wow/images/4/4d/Necrosis.png/revision/latest?cb=20250427084957)

you can also find all addons on the addon wiki

