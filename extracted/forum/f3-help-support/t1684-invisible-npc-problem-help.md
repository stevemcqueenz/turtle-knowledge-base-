---
title: "Invisible Npc problem // HELP!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1684"
topic_id: 1684
forum_id: 3
forum: "Help & Support"
author: "Mzynn"
author_authority: "player"
posted: "2021-04-01T03:51:00Z"
last_post: "2022-11-27T11:50:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T09:19:40Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Invisible Npc problem // HELP!

## Post 9954 by Mzynn — 2021-04-01T03:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9954#p9954 | page 1 | era: pre-1.18.1 -->

Hello friends!
im having alot of problems with npcs being invisible. for example when i go to turn in my quests, 9 times out of 10 i have to relog so that i can see the npc to turn my quest in. I have asked many players on what i can do about this, they have told me to delete wdb folder and make sure on properties it says read only. I have tried this already and it hasnt helped. Anyone have any idea on what i can do to fix?

## Post 10061 by Feyfolken — 2021-04-10T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10061#p10061 | page 1 | era: pre-1.18.1 -->

Hi! I have the same problem.
Especially in interior areas and indeed log out/in solves the problem but if I go to another place and then come back to the place where you noticed invisible npcs they are invisible again.
BUT. They are not really invisible. In some cases if you turn your camera the bugged npcs will turn visible at some angles. And if you target an "invisible" npc with the command /tar of /target you will see the red/green circle at there feet.
This problem has a name: Culling errors.
So the problem comes either from our connection with the server, either from the modified files of the TW client.
I don't think it come from the server or our connection since I have never experienced any lag while playing TW WoW.
Furthermore, I used to play on a French Vanilla pserver, and I never experienced this issue at all, nor on Classic or Retail.
It must be a problem with the client, but since we are not all having this problem, there must me something else to take into account.

I have also tried to delete my wdb folder, but it has no effect.
Tried different graphic settings combinaison: no effect.
Uninstalled/reinstalled the game: no effect.

Nevertheless, I have been able to reproduce the error in another game (TESIII Morrowind).
Basically, if a NiTriShapeData in a meshe has wrong center and radius, your may experience culling errors.

This is a really annoying problem, I even lost a HC character because of this.
But since the majority of TW WoW player don't encounter this issue, I don't think it is going to get fixed, which is very frustrating because TW is such a good game, so much better than Classic!

## Post 10080 by Gheor (Turtle WoW Team) [STAFF] — 2021-04-11T21:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10080#p10080 | page 1 | era: pre-1.18.1 -->

Hello!

I tried to replicate the issue myself and I did find it rather annoying, it happened to me with Tabetha in Dustwallow Marsh, this will be pushed into our Dev Discord and we will look into fixing this as soon as possible if possible at all.
I, myself, can't make any promises but know we will do our best :)

## Post 10161 by Feyfolken — 2021-04-18T20:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10161#p10161 | page 1 | era: pre-1.18.1 -->

Tried more things in the past week to see if the error was coming from me or from TW.
Note that this error did not exit before the 1.5.0 patch.

Here is the complete list of what I tried in a chronological order:
 -delete wdb folder.
 -try different graphic settings (windowed/fullscreen, high/low graphic settings etc...).
 -play with vsync off/on, with and without rtss locked at 30fps.
 -uninstall/reinstall the game completely (tried the "ready to play" 1.15.1 client and standard installation with the Nostalrius client).
 -Install the game on another hardrive and on a ssd.
 -play with my firewall/antivirus turned off.
 -Install the game on my wife's laptop.
 -Install the game on my best friend's computer (not the same internet service provider).

Log out/in solves the problem most of the time but nothing seems to solve it definitly.

Then I have been visiting other 1.12.1 pservers:
NostalGeek, Kronos, RetroWoW and VanillaPlus.
No problem on these.

Afterward I have been doing some more tests to see what triggers this bug.
The distance between my character and the NPCs, and the area where these NPCs are is the trigger.

For instance if I log in in the Thunderbrew distillery in Kharanos, every npc will be there. Now if I get out and go to the Coldridge Pass entrance and then come back to the inn, some npcs will be gone.
Sometime only one npc will be gone, sometime everyone in the main room.
ONLY the npcs that are in interior areas are concerned.

Time spend outdoor does not trigger the bug.
Log in Kharanos inn, went outside of the village and spent half an hour afk. When I came back nobody was gone.

But EVERY time I go too far from an interior area I am 100% sure that I will encounter the bug again.
So far I had this issue in:
 -Kharanos inn, Frostmane troll cave (dun morogh), Razor Hill inn, Orgrimmar inn, bank, shops, Undercity, IronForge, Skull rock cave (durotar) and many other interior places.

I have never put so much effort to solve a video game glitch but finally I gave up. I haven't been that much frustrated by a game in years so I uninstalled the game :'(

I hope that these informations could help to solve this issue and I apologize for my english, I am French, we are known to be bad in languages and I am no exception^^

## Post 10183 by Feyfolken — 2021-04-20T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10183#p10183 | page 1 | era: pre-1.18.1 -->

To anyone having the same issue, i.e. invisible npcs in interior areas when you play at minimum view distance.
Increase your view distance, just one clic to the right in the view distance bar (in the graphic settings menu) should fix the problem.
It is not instant though, which is why I did not found it out before. After having increased your view distance by one clic you must either log out/in, or walk away from where you are further than your current view distance. When you come back to the location where you saw the issue, the npc(s) should be visible again.
It is not clear now if the issue is caused by the custom view distance introduced in the 1.15.0 patch, by the player machine, the client or everything at the same time.
Big thanks to Whittington and Kernis the Turtle on Discord who tried their best to solve the problem :)

## Post 10189 by Merikkinon (Patch Note Conspiracy Theorist) — 2021-04-20T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10189#p10189 | page 1 | era: pre-1.18.1 -->

I wonder about that custom view distance thing. I have been having issues since the patch myself. I thought it was Reshade, then the settings, then my connection. It was none of that. Also, the load-up time now when entering world is quite long (before my char, other chars and interactive items are visible). Brand new gaming system, so suspect it is not my system's capacity.

## Post 10194 by Feyfolken — 2021-04-20T21:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=10194#p10194 | page 1 | era: pre-1.18.1 -->

Well, it would not be a surprise that the increased view distance affects the performances on some systems.
Since the wow engine does frustrum culling.
Basically everything in your character FOV is calculated by your CPU and then rendered by your GPU.
But, on the contrary to another game like TES III morrowind which relies more on the CPU and was very badly optimized, WoW Vanilla was designed to work more with GPUs.
So naturally, longer view distance, more things to calculate and render; less performance; longer loading screens (especially on low end machines).

## Post 21517 by Shaggybro — 2022-08-08T19:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=21517#p21517 | page 1 | era: pre-1.18.1 -->

Didnt want to revive old threads but I'm having this problem aswell and this was the only place I found that someone was also having it...
Tried with no addons and clear WDB and still happens so I am kinda dumbed on how to fix it, only happens on TurtleWoW.
Places that I found it happen everytime is the Razon Hill Inn and Orc starting zone with the NPC's deep inside the cave.

Did anyone ever found a fix?

EDIT:
Found a very similiar issue searching for "invisible" in the github bug tracked [https://github.com/slowtorta/turtlewow- ... issues/470](https://github.com/slowtorta/turtlewow-bug-tracker/issues/470)

## Post 29904 by Dwarfsalad — 2022-11-27T11:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29904#p29904 | page 1 | era: pre-1.18.1 -->

![Image](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d099d316-98cf-4095-a2f9-32cca4219baa/dam61qa-88e5c4b6-a792-48df-b99f-e7e85087630b.png/v1/fill/w_973,h_822,q_75,strp/_wow__troll__render__by_popokupingupop90-dam61qa.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kMDk5ZDMxNi05OGNmLTQwOTUtYTJmOS0zMmNjYTQyMTliYWEvZGFtNjFxYS04OGU1YzRiNi1hNzkyLTQ4ZGYtYjk5Zi1lN2U4NTA4NzYzMGIucG5nIiwid2lkdGgiOiI8PTk3MyIsImhlaWdodCI6Ijw9ODIyIn1dXX0.UowizsWnRPfTOrW8rSgnWLsuLrwFGKpJ4f47R5db2tg)
Try Dis Mon...

Create a Shortcut to WoW.exe but put -console on the end of the target like this

![Image](https://i1099.photobucket.com/albums/g388/brandon028521/step3_zps0ca6b296.jpg)

Log back into the game and press Tilde ~    The Console should open.

In the console type DistCull 250  (Default is 500) Press Enter
Then Type gxrestart - This should restart your graphics.
Then Restart your game.

Also try some others if that doesn't work. (Remember to type gxrestart afterwards.)

farClip 777 (default 500)

nearClip 0.33 (Default 0.1)

SmallCull 0.01 (Default 0.04)

lodDist 250 (Default 100)

occlusion 0 (Default 1)

This seems to work for my wife on her laptop so far - It's only been 3 days - so far we think it has fixed the problem.

Note: Many players have suggested that increasing their view distance worked for them. - But it didn't work for us.

