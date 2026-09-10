---
title: "DiscordOverlay.dll"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1526"
topic_id: 1526
forum_id: 2
forum: "Announcements"
author: "Torta"
author_authority: "staff"
posted: "2021-01-14T12:10:00Z"
last_post: "2023-07-31T05:48:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T07:42:44Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# DiscordOverlay.dll

## Post 9110 by Torta (Turtle WoW Team) [STAFF] — 2021-01-14T12:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9110#p9110 | page 1 | era: pre-1.18.1 -->

Greetings! Windows Defender has been falsely blocking our DiscordOverlay.dll. We decided to go open source to prove that there is no harmful content inside the library in question. The file which we distribute with our patcher is identical: it contains actual information about the Turtle WoW game client required by the Discord application.

For all future releases starting with 1.15.1 we are going to publish source code and include PDB files: <https://github.com/slowtorta/turtlewow-discord-overlay> (this revision will be part of 1.15.1 client update)

You have to unflag it manually with the following steps if the file is currently quarantined on your PC:

- Open Window Security in your right bottom taskbar.

- Go to Virus & Scan protection.

- Open allowed threats.

- Remove our library from the list.
On the next launch of the game, your discord status Playing Turtle WoW will appear again. ![:green_heart:](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f49a.svg)
Thank you, we apologize for this inconvenience.

## Post 9117 by Vaacct — 2021-01-14T17:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9117#p9117 | page 1 | era: pre-1.18.1 -->

Hi.

THANK YOU Torta for this quick reply.

In Windows 10 x64 Version 2009 (build 19042.685), I did the following, and got the same result.  I did not see the list or library you refer to.

 1.  Open Windows Security via icon in right bottom of taskbar.
 2.  On the resulting menu, click "Virus & threat protection".
 3.  On the resulting menu, click "Allowed threats" under the first section "Current threats".
 4.  Since Defender has quarantined the file, this menu will display "No threats".  So I clicked "Protection history" just under that "No threats".
 5. A list of quarantined threats displayed I clicked the threat.  A popup box appears, asking "Do you want to allow this app to make changes to your device?"  I clicked "Yes".
 6.  That puts you back at the Protection history menu, and an explanation of the threat will now show.  Click the "Actions" button at the bottom of that explanation.  Then click "Restore" in the resulting dropdown list.
 7.  The "Do you want to allow this app to make changes to your device?" popup box appears again.  Click "Yes".  There's no apparent change on the Protection history menu; I closed it.
 8.  Run "Wow.exe".  I did so as Administrator.
 9.  Sign in with your User Name and Password.  The update downloads again.  At the end, it displays the "Restart" button.  Click that.
 10.  Turtle-Wow restarts.  And says the update/patch failed.  In other words, no change.

Thanks in advance for any additional help you can provide.  BTW, I am doing this on a computer other than my main.  I use that as a "test bed" and have Network discovery and print & file sharing turned off.

## Post 19354 by Speedz1337 (Patch Note Conspiracy Theorist) — 2022-06-24T01:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=19354#p19354 | page 1 | era: pre-1.18.1 -->

Where do u unzip this at?

## Post 41004 by Sambonz — 2023-04-10T10:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41004#p41004 | page 1 | era: pre-1.18.1 -->

Sorry to nexro an old thread - is there a working version of this in the current (April 2023) client?
I can see the DLL files are in the installed directory, but Discord presence doesn't work for me (it doesn't show me as playing Turtle WoW).

Cheers.

## Post 55297 by Cyone — 2023-07-31T05:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55297#p55297 | page 1 | era: pre-1.18.1 -->

Another necro,
Discord doesn't see me playing TWoW. I have no threats in my Virus & Scan Protection.

Cheers, cy

