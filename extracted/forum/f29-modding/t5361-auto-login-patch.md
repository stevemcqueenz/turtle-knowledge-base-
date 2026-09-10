---
title: "Auto-login patch"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5361"
topic_id: 5361
forum_id: 29
forum: "Modding"
author: "Haaxor"
author_authority: "staff"
posted: "2023-01-17T19:14:00Z"
last_post: "2026-04-14T18:50:00Z"
post_count: 32
pages: 1
fetched: "2026-09-10T10:37:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Auto-login patch

## Post 32679 by Haaxor (Turtle WoW Team) [STAFF] — 2023-01-17T19:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32679#p32679 | page 1 | era: pre-1.18.1 -->

I've made a custom patch that adds auto login and account info saving features.

- Adds an Accounts select panel to the login screen

- Automatically adds accounts with saved login info to the list

- Select accounts to log in (double-click to login directly)

- Check "Auto-login this character" in character select screen to always automatically load into game with this character selected in future logins

- Remove saved character and accounts with controls at the bottom
[GitHub page](https://github.com/Haaxor1689/turtle-autologin)

[Direct download](https://github.com/Haaxor1689/turtle-autologin/releases/download/release/Patch-Y.mpq)

![Image](https://imgur.com/wP1ImEf.png)

![Image](https://imgur.com/wfOlM65.png)

*Last edited by Haaxor on Sat Feb 04, 2023 10:02 pm, edited 1 time in total.*

## Post 32687 by Geojak (Grandmaster of Forum PvP) — 2023-01-17T22:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32687#p32687 | page 1 | era: pre-1.18.1 -->

Wow interesting that you can do this with just a patch file. I will try it out

## Post 37440 by Raubkopierer — 2023-03-12T02:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37440#p37440 | page 1 | era: pre-1.18.1 -->

This is exaclty what I was looking for, thank you so much!

## Post 37766 by Froll — 2023-03-14T20:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=37766#p37766 | page 1 | era: pre-1.18.1 -->

Hello, is there a setting for automatic login to the account and to the character at once? Thank you!

## Post 39927 by Nokidding — 2023-04-02T07:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=39927#p39927 | page 1 | era: pre-1.18.1 -->

Amazing stuff, this makes playing my chars on several accounts so much more convenient, thank you!!

## Post 40340 by Thewowtraveller — 2023-04-05T03:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40340#p40340 | page 1 | era: pre-1.18.1 -->

How do you develop/debug a patch such as this Haxxor? Can you forward me to any guides/information to get started?

## Post 40423 by Imonobor (Bug Report Enthusiast) — 2023-04-05T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40423#p40423 | page 1 | era: pre-1.18.1 -->

This is amazing! Great work!
I sure hope this won't get me banned lol xD

## Post 43987 by Reploidrocsa (Bug Report Enthusiast) — 2023-05-01T10:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43987#p43987 | page 1 | era: pre-1.18.1 -->

for some reason it won't store more than 5 account informations, is this normal?

## Post 44569 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-05T12:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=44569#p44569 | page 1 | era: pre-1.18.1 -->

I poked around the source code for this and didn't see any particularly suspicious code… but I'm not exactly knowledgeable about LUA code.  The way it stores passwords **unencrypted** in the *config.wtf* file probably isn't safe, but it's not like this patch has any direct interaction with any external servers.  *Riiiiight*~?

Teasing aside, I'm willing to take my chances with it.  This is very handy!  (:

## Post 51586 by Canseco — 2023-06-28T05:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51586#p51586 | page 1 | era: pre-1.18.1 -->

Does it have password encryption like [wowreeb](https://github.com/namreeb/wowreeb) has?

## Post 51614 by Geojak (Grandmaster of Forum PvP) — 2023-06-28T09:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51614#p51614 | page 1 | era: pre-1.18.1 -->

read the comment directly above yours.

## Post 51669 by Jaguare19 — 2023-06-28T14:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51669#p51669 | page 1 | era: pre-1.18.1 -->

> **Canseco wrote: Wed Jun 28, 2023 5:46 am**
> Does it have password encryption like [wowreeb](https://github.com/namreeb/wowreeb) has?

No, it is not encrypted

## Post 52493 by Alexsage — 2023-07-06T17:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52493#p52493 | page 1 | era: pre-1.18.1 -->

Just wanted to say thanks this something I've been missing.

## Post 52518 by Samsara (Barrens Chat Casualty) — 2023-07-07T08:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52518#p52518 | page 1 | era: pre-1.18.1 -->

Sounds like a program that would steal your credentials or facilitate their acquisition by a third party hacker. The reason default client doesn't save password is because it would make it easy to discover for malicious actors. Hell your account name on the screenshot is Haaxor

## Post 52668 by Alexsage — 2023-07-09T01:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52668#p52668 | page 1 | era: pre-1.18.1 -->

If someone has access to your computer or your computer is compromised they're going to get your login and password anyway.  There is a reason just about every offical game and app now logins you automatically.

## Post 52683 by Samsara (Barrens Chat Casualty) — 2023-07-09T06:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52683#p52683 | page 1 | era: pre-1.18.1 -->

> **Alexsage wrote: Sun Jul 09, 2023 1:54 am**
> If someone has access to your computer or your computer is compromised they're going to get your login and password anyway.  There is a reason just about every offical game and app now logins you automatically.

Games nowdays log you in because they have a launcher with encryption. You don't just improvise auto password systems. And specific software make it easier for botnets to mass hack accounts. If you're infected, that doesn't mean some fatass haxxor is paying attention to you specifically and looking through your cam while manually watching what you type on your keyboard when (even a keylogger needs to be parsed). But if it's saved, there is a file that saves it, and that file becomes an easy target to automate collecting it from thousands of computers. And when that patch is unofficial, you are playing with fire.

*Last edited by Samsara on Sun Jul 09, 2023 6:08 pm, edited 1 time in total.*

## Post 52704 by Alexsage — 2023-07-09T15:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52704#p52704 | page 1 | era: pre-1.18.1 -->

Which doesn't matter when they have a keylogger...

## Post 52726 by Ulukay (Patch Note Conspiracy Theorist) — 2023-07-09T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52726#p52726 | page 1 | era: pre-1.18.1 -->

I agree with Samsara, this is a game of trust. Then, do not be surprised and do not write to support if your accounts are no longer available.

## Post 54292 by Hhplayer — 2023-07-22T10:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54292#p54292 | page 1 | era: pre-1.18.1 -->

![Image](https://t3.picb.cc/2023/07/22/Ix83QG.jpeg)

This warning appears when logging in every time.
the function is normal.

## Post 98876 by Sylveria (Grandmaster of Forum PvP) — 2024-07-08T10:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=98876#p98876 | page 1 | era: pre-1.18.1 -->

Push.

Hoping this one will be updated for TWoW 2.0 :)

## Post 99253 by Dreggar — 2024-07-12T10:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99253#p99253 | page 1 | era: pre-1.18.1 -->

Hi Haxxor, thank you for this patch. It is very useful for me. Have a nice day.   smiling_turtle_head

## Post 99254 by Zeran (Patch Note Conspiracy Theorist) — 2024-07-12T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99254#p99254 | page 1 | era: pre-1.18.1 -->

> **Sylveria wrote: Mon Jul 08, 2024 10:57 am**
> Push.
>
>  Hoping this one will be updated for TWoW 2.0 :)

If we are talking about the UE5 client, they should be able to add this as a baked-in native functionality within the client itself.

Same for other QOL features like re-ordering the character list, etc.

## Post 99305 by Sylveria (Grandmaster of Forum PvP) — 2024-07-12T18:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=99305#p99305 | page 1 | era: pre-1.18.1 -->

> **Zeran wrote: Fri Jul 12, 2024 10:34 am**
> > **Sylveria wrote: Mon Jul 08, 2024 10:57 am**
> > Push.
> >
> >  Hoping this one will be updated for TWoW 2.0 :)
>
>   If we are talking about the UE5 client, they should be able to add this as a baked-in native functionality within the client itself.
>
>  Same for other QOL features like re-ordering the character list, etc.

That would really be great. When having multiple Accounts and switching between them quickly, it's quite useful to Not Type the Password everytime.

## Post 109347 by Imonobor (Bug Report Enthusiast) — 2024-11-22T11:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109347#p109347 | page 1 | era: pre-1.18.1 -->

Hey, I've recently created my 5th alt, and when adding a 5th account, it goes to the second page.
However, when closing and relaunching the game, the second page gets deleted and I have to re-add my account every time. Does anyone else have this problem and do you know how to fix it?

## Post 109350 by Sylveria (Grandmaster of Forum PvP) — 2024-11-22T11:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109350#p109350 | page 1 | era: pre-1.18.1 -->

> **Imonobor wrote: Fri Nov 22, 2024 11:06 am**
> Hey, I've recently created my 5th alt, and when adding a 5th account, it goes to the second page.
>  However, when closing and relaunching the game, the second page gets deleted and I have to re-add my account every time. Does anyone else have this problem and do you know how to fix it?

I too, have that Problem.

## Post 110751 by Imonobor (Bug Report Enthusiast) — 2024-12-01T08:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=110751#p110751 | page 1 | era: pre-1.18.1 -->

I figured the problem out. The maximum line size inside WTF\Config.wtf file is 128 characters, if it gets exceeded, the game just trims it on launch. So I guess the ghetto solution is to use shorter usernames and passwords in order to fit more of them inside the 128 character limit?
Manually editing the file and setting it to read-only doesn't help either, it seems the game can only read the first 128 characters of each line.

Is there a way to bypass the 128 character limit?

## Post 121763 by Jirihan — 2025-03-05T13:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121763#p121763 | page 1 | era: pre-1.18.1 -->

Heyj I have a weird problem with this Addon.
The new Turtle Wow launcher seems to rename Patches when I close the game.
So the Autologin works, an once I close the game it automatically renames the patch file to _patch-Y.mpq and the next time the addon doesn't start. What the heck?!

## Post 123497 by Ironbob (Barrens Chat Casualty) — 2025-03-24T03:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123497#p123497 | page 1 | era: pre-1.18.1 -->

> **Jirihan wrote: Wed Mar 05, 2025 1:55 pm**
> Heyj I have a weird problem with this Addon.
>  The new Turtle Wow launcher seems to rename Patches when I close the game.
>  So the Autologin works, an once I close the game it automatically renames the patch file to _patch-Y.mpq and the next time the addon doesn't start. What the heck?!

Works just fine for me. After loading it in the launcher.

## Post 123498 by Snkx (Patch Note Conspiracy Theorist) — 2025-03-24T03:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123498#p123498 | page 1 | era: pre-1.18.1 -->

Don't use the launcher

## Post 126984 by Wez0 (Patch Note Conspiracy Theorist) — 2025-04-16T08:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126984#p126984 | page 1 | era: pre-1.18.1 -->

very nice, even the function on the character

## Post 174860 by Roterrabe — 2026-04-11T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174860#p174860 | page 1 | era: post-1.18.1 -->

i couldnt find the new forks mentioned in github? where to find a new version

## Post 175222 by Ravenofseven72 (Barrens Chat Casualty) — 2026-04-14T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175222#p175222 | page 1 | era: post-1.18.1 -->

> **Roterrabe wrote: Sat Apr 11, 2026 9:30 pm**
> i couldnt find the new forks mentioned in github? where to find a new version

<https://github.com/paokkerkir/turtle-autologin.git>

