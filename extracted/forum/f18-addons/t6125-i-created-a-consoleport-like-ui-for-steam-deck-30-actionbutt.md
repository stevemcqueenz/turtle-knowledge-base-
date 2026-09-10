---
title: "I created a 'Consoleport like' UI for Steam Deck (30+ actionbuttons)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=6125"
topic_id: 6125
forum_id: 18
forum: "AddOns"
author: "Anubys"
author_authority: "player"
posted: "2023-03-21T13:40:00Z"
last_post: "2025-11-02T23:01:00Z"
post_count: 38
pages: 2
fetched: "2026-09-10T10:23:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I created a 'Consoleport like' UI for Steam Deck (30+ actionbuttons)

## Post 38460 by Anubys — 2023-03-21T13:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38460#p38460 | page 1 | era: pre-1.18.1 -->

Hey all  smiling_turtle  ,

I have been playing Turtle Wow for some time now on my Steam Deck and have been tinkering with it trying to make a good working UI and think i managed to do it. It has 30+ actionbuttons and 2 pages that can be switched using L2/R2.

For now because i have not a lot of time i made a quick guide for it, i plan to make a more expansive guide here on how to do the whole proces. including a basic setup guide. So for now it assumes you know how to install and add Turtle wow to steam.

The steps below will explain the proces to get the same UI+controls, the file holds the addons used + config files (addon/WTF folder)

You can see it working here:

[embed: https://www.youtube.com/embed/arlYfjPfAjY]

(edit 10-04) I Created a step by step video to make it easier, sorry about the TTS voice but mine is worse    satisfied_turtle_head  :

[embed: https://www.youtube.com/embed/ZGRHh6pDgPY]

(edit 16-04) Here is Version 2, it has 40+buttons and also the first page changes when you shapeshift/stance change:
[embed: https://www.youtube.com/embed/o0FAUSS4ZJQ]

New: **Download V2.1:**
<https://github.com/Ryac1/Ryac_TW_Steamdeck_UI>

mirror: [https://www.mediafire.com/file/3woglq64 ... 2.rar/file](https://www.mediafire.com/file/3woglq644rovfur/TW2.rar/file)

This holds my interface folder with used addons + WTF folder with config,addons and character files.

 **I recommend watching the video for the steps, this is easier to follow and more up to date.**

- I assume you know how the download Turtle wow and place it in a folder (home for ex.) in desktop mode and then add it to Steam (steam- add non steam game- select turtle wow.exe file and set compatibility to proton 7.06.)

- put the files in the interface/addons folder and in the WTF folder(allow it to overwrite the files).

- in Steam make sure the rename the game name to "World of Warcraft"

- Search for my controller layout and use it, should be called "Ryac's template DAB TW" ( you can only see this if you renamed the game correctly, might take a few minutes)

- go to desktop mode and into your Turtle wow folder.

- In "WTF\Account" you will see 2 folders, your account name(if you logged in once) and XXXXX, remove your account name folder and rename folder XXXXX to your account name (think it needs to be in caps).

- Then you might need to start up once and create a character, remember character name.

- In "WTF\Account\(youraccountname)\Turtle WoW" rename one of the "xxxxx1" folders to your character name.

- Now when you go in game it "Should" look the same and work since you are using my settings and mod list.

- It is possible it does not load settings correctly (bars not correct and keychain artframe in middle of screen), you can type in game: '/dab' then go to 'Misc Options' then under 'load profile' select 'Ryac2'

- When creating a new character you need to rename a xxxxx folder again to the characters name.
 **Tips:**

- Use 'Steam+X' buttons to open keyboard (typing '/ ' will start chat, for instance to turn off instance spam type '/lft spam'' )

- L2 and R2 can be used to switch button pages.

- L1 and R1 are using the middle two buttons

- Bar 1 (with starter spells) will show up on the left side (this was the only way to make it work) so you can drag those spells onto your bars below. Left side bar hotkeys can be pressed with your thumb.

- Check my video and imagine 2 Plusses(corrosponding to d-pad and ABYX buttons) and 2 buttons(L1/R1) in the middle, that is where you can place spells. you can also press the buttons to see which buttons light up. it looks like this: + - - +

- Left trackpad has a menu with some shortcuts, right trackpad is mouse + (left)click

- Left Thumbstick is movement, right stick is camera (touching stick is right click, sometimes it does not respond just retouch it, also mouse cursor will jump back to middle screen when touching, this is done on purpouse to not drag spells off the left bar)

- Select is map and when holding is zoom in

- Start is menu and when holding zoom out

- When you want to add spells the the L2/R2 pages you need to hold down L2 or R2 first and then drag buttons, when you drag the spell first you can't switch pages anymore until you left go of click.

- The top right back button is right click (to interact/loot), the left side backbuttons are bags and character panel, bottom right is jump

- i made a macro for attack nearest enemy and place it on L1 on the action bar, not sure if it will add my macros, otherwise you need to create one

- If you need to use Shift button for anything, you can hold the bag button (back trigger top left), since this has a bind shift+b)

- In a recent Steam Deck update they changed it so you can switch your keyboard to the top of the screen ( so it does not block chat ) you can do this by holding L2 + the bottom right arrow on the keyboard (you can see it switch when you hold R2)
 **Possible Bugs:**

- for warriors and other single spell classes, when buying new ranks (heroic strike for ex.) it will remove the button for bar for some reason, you need to do a reload once to fix it

- Druid/Warior/Rogue bars do not switch to new bars when changing stance/stealth (fixed in Version 2)

- It is possible it does not load settings correctly (bars not correct and keychain artframe in middle of screen), you can type in game: '/dab' then go to 'Misc Options' then under 'load profile' select 'Ryac2'
let me know if it works or have questions.

When i have more time i will make a new video on how to set up a new character the first time without renaming a folder and maybe a whole setup video.

*Last edited by Anubys on Sun Feb 18, 2024 7:01 pm, edited 10 times in total.*

## Post 38461 by Anubys — 2023-03-21T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38461#p38461 | page 1 | era: pre-1.18.1 -->

(reserved for future guides)

## Post 38464 by Geojak (Grandmaster of Forum PvP) — 2023-03-21T14:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38464#p38464 | page 1 | era: pre-1.18.1 -->

Console port allowed us to use npcs interactions with 1 2 3 4 and been chose quest rewards like that. Also allowed hitting space to accept quests, continue quests etc. Can your work do this. I rly miss it

## Post 38483 by Anubys — 2023-03-21T16:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38483#p38483 | page 1 | era: pre-1.18.1 -->

Nothing advanced like that no, but you could add a hold space bar(assign to a button) to interact, same for 1234, for example i added hold start button to zoom in and select to zoom out.

But then again, Steam Deck has the trackpads that make it easy to select and interact

## Post 40328 by Runninggargle — 2023-04-05T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40328#p40328 | page 1 | era: pre-1.18.1 -->

I've been thinking about putting Turtle WoW on my steam deck and this right here is going to finally drive me to do it. Appreciate you taking the time to do this my dude.

## Post 40349 by Demontweak1 — 2023-04-05T05:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40349#p40349 | page 1 | era: pre-1.18.1 -->

my steam deck comes on thursday. this is what ive been hoping to see. im gonna owe you a steam gift card when i get it running

## Post 40372 by Anubys — 2023-04-05T11:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40372#p40372 | page 1 | era: pre-1.18.1 -->

> **Runninggargle wrote: Wed Apr 05, 2023 12:37 am**
> I've been thinking about putting Turtle WoW on my steam deck and this right here is going to finally drive me to do it. Appreciate you taking the time to do this my dude.

No problem, it is really amazing to just chill on my couch and level some characters and do some crafting  smiling_turtle

## Post 40373 by Anubys — 2023-04-05T11:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=40373#p40373 | page 1 | era: pre-1.18.1 -->

> **Demontweak1 wrote: Wed Apr 05, 2023 5:59 am**
> my steam deck comes on thursday. this is what ive been hoping to see. im gonna owe you a steam gift card when i get it running

Haha thank you, just hope you can have the same experience i am having, this is my most played game on Steam Deck by far.

## Post 41505 by Nuggetz — 2023-04-14T11:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41505#p41505 | page 1 | era: pre-1.18.1 -->

Hey! I just used your settings + addons and it works PERFECT! Thanks a million!
Although I have a question, sometimes I alternate playing WoW on Desktop PC and Steam Deck… but when in Desktop Pc I want to obviously play with mouse and keyboard… isnt there any addon to save action bar + spell position in different presets? so I can switch to Steam Deck Mode or PC mode without having to reposition everything every time?

## Post 41655 by Anubys — 2023-04-15T11:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=41655#p41655 | page 1 | era: pre-1.18.1 -->

> **Nuggetz wrote: Fri Apr 14, 2023 11:41 am**
> Hey! I just used your settings + addons and it works PERFECT! Thanks a million!
>  Although I have a question, sometimes I alternate playing WoW on Desktop PC and Steam Deck… but when in Desktop Pc I want to obviously play with mouse and keyboard… isnt there any addon to save action bar + spell position in different presets? so I can switch to Steam Deck Mode or PC mode without having to reposition everything every time?

I had the exact same issue, in this case i installed the game twice on the Steam Deck and renamed one to World of Warcraft TV, you can store my controller layout as local layout/template and then you can use on a game with different name. In my case i wanted to use wireless keyboard/mouse on tv, but can also work with controller ofc  smiling_turtle_head

## Post 42246 by Bokfreshie — 2023-04-19T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42246#p42246 | page 1 | era: pre-1.18.1 -->

I've gotten everything to work accept the right joystick rarely ever actually "clicks" so my charater rarely ever turns around and instead moves the mouse around.  Randomly it will work for maybe a second or two and actually rotate my character and camera, but for the most part it just moves the cursor.

## Post 42309 by Anubys — 2023-04-20T09:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42309#p42309 | page 1 | era: pre-1.18.1 -->

> **Bokfreshie wrote: Wed Apr 19, 2023 7:02 pm**
> I've gotten everything to work accept the right joystick rarely ever actually "clicks" so my charater rarely ever turns around and instead moves the mouse around.  Randomly it will work for maybe a second or two and actually rotate my character and camera, but for the most part it just moves the cursor.

I know what you mean, it could be a malfunction of the Steam Deck it self (touch sensor cable is loose?) you could also try to see if there are options to increase the sensitivity. I also attempted to use the outer ring touch aswell but did not work that great.

But your finger need to rest in the middle of the joystick, if you rest on the rim it will not work, so maybe try to see if you need to adjust the finger placement?

I will think about if there is another solution for this.

Short term solution is to hold L4(right click) or change right stick click tot toggle right click.

## Post 42388 by Gorabash — 2023-04-20T23:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42388#p42388 | page 1 | era: pre-1.18.1 -->

> **Anubys wrote: Sat Apr 15, 2023 11:19 am**
> > **Nuggetz wrote: Fri Apr 14, 2023 11:41 am**
> > Hey! I just used your settings + addons and it works PERFECT! Thanks a million!
> >  Although I have a question, sometimes I alternate playing WoW on Desktop PC and Steam Deck… but when in Desktop Pc I want to obviously play with mouse and keyboard… isnt there any addon to save action bar + spell position in different presets? so I can switch to Steam Deck Mode or PC mode without having to reposition everything every time?
>
>   I had the exact same issue, in this case i installed the game twice on the Steam Deck and renamed one to World of Warcraft TV, you can store my controller layout as local layout/template and then you can use on a game with different name. In my case i wanted to use wireless keyboard/mouse on tv, but can also work with controller ofc  smiling_turtle_head

I don't think that's what they meant.
I have the same "issue" as them, the skills and spells are on different bars on pc (another device) and on steam deck. I dragged some spells to other bars on PC but it also changed on the steam deck because it probably syncs somehow... Do you know a way to keep the bar setup separate?

## Post 42409 by Anubys — 2023-04-21T05:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=42409#p42409 | page 1 | era: pre-1.18.1 -->

> **Gorabash wrote: Thu Apr 20, 2023 11:09 pm**
> > **Anubys wrote: Sat Apr 15, 2023 11:19 am**
> > > **Nuggetz wrote: Fri Apr 14, 2023 11:41 am**
> > > Hey! I just used your settings + addons and it works PERFECT! Thanks a million!
> > >  Although I have a question, sometimes I alternate playing WoW on Desktop PC and Steam Deck… but when in Desktop Pc I want to obviously play with mouse and keyboard… isnt there any addon to save action bar + spell position in different presets? so I can switch to Steam Deck Mode or PC mode without having to reposition everything every time?
> >
> >   I had the exact same issue, in this case i installed the game twice on the Steam Deck and renamed one to World of Warcraft TV, you can store my controller layout as local layout/template and then you can use on a game with different name. In my case i wanted to use wireless keyboard/mouse on tv, but can also work with controller ofc  smiling_turtle_head
>
>   I don't think that's what they meant.
>  I have the same "issue" as them, the skills and spells are on different bars on pc (another device) and on steam deck. I dragged some spells to other bars on PC but it also changed on the steam deck because it probably syncs somehow... Do you know a way to keep the bar setup separate?

I see, i think i played on different characters in my case, but i noticed it also in the past.

Maybe this works?  allows you to save action bar spell settings and load them: <https://github.com/0ldi/SimpleActionSets>

## Post 43414 by Zedris — 2023-04-27T11:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43414#p43414 | page 1 | era: pre-1.18.1 -->

Hey awesome work. I was looking into and it seems shagu from pfui also has one addon that does this do you know what the differences are for yours vs his etc?
Thanks for the hard work

## Post 43419 by Anubys — 2023-04-27T13:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43419#p43419 | page 1 | era: pre-1.18.1 -->

> **Zedris wrote: Thu Apr 27, 2023 11:29 am**
> Hey awesome work. I was looking into and it seems shagu from pfui also has one addon that does this do you know what the differences are for yours vs his etc?
>  Thanks for the hard work

I have tried it before, as far as i know it had only one page, so limited action buttons. And it is based on regular controller layout so can also be used with regular controllers, mine is only for steam deck and has 40+ action buttons

## Post 43687 by Zedris — 2023-04-28T22:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=43687#p43687 | page 1 | era: pre-1.18.1 -->

Oh wow yea big difference then okay thats super cool ill try it tomorrow on my deck thanks for this!

## Post 51553 by Thetruedome — 2023-06-27T22:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51553#p51553 | page 1 | era: pre-1.18.1 -->

Just want to thank you for your great work. Everything worked flawlessly and I'm able to actually play without KB+M on my steam deck !!
Just a heads-up for new people - the link for the second version seems to not be working for me - I cant start the download but rather stuck with the V1 which works nevertheless.

## Post 52016 by Anubys — 2023-07-01T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52016#p52016 | page 1 | era: pre-1.18.1 -->

> **Thetruedome wrote: Tue Jun 27, 2023 10:12 pm**
> Just want to thank you for your great work. Everything worked flawlessly and I'm able to actually play without KB+M on my steam deck !!
>  Just a heads-up for new people - the link for the second version seems to not be working for me - I cant start the download but rather stuck with the V1 which works nevertheless.

Thank you, i will check the links, probably expired somehow. I also uploaded to GitHub so i will add that link.

## Post 52619 by Illumini85 — 2023-07-08T13:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52619#p52619 | page 1 | era: pre-1.18.1 -->

Thank you for your awesome work of putting together these files and tutorials!
This got me back to playing wow after quitting about 10 years ago.

Sorry for the long post that is about to follow, but I stumbled upon this thread and it helped me a lot, so I just wanted to put this information out there if it can help anyone else.

I too like to switch between kb+m on the TV and playing in handheld.
And I was thinking of ways to make this a bit more streamlined and think I found a way!

This next part is not needed for switching between TV and Handheld as I will get into later.
But if you still want 2 installations of Turtle WoW and want to save some disk space, you can actually link files and folders in desktop mode on the Steam Deck.
What I did was create a second folder called "Turtle-WoW-TV" and linked all files and folders from my original Turtle-WoW folders to this new folder, except the "WTF" Folder.
This enables you to run 2 separate configurations, with only 11 Mb extra file space, since the only difference will be the WTF folder.

But I wanted to do it all from one entry in my menu, so I started changing the controls around a bit .
I came up with the folllowing changes which now lets me switch between KB+M and controller on the fly.

 - I added an extra button for Character Menu (C Key) to the Touch menu on the left trackpad, freeing up space on the back buttons.
 - I really like using the back buttons for targetting, so I mapped Previous and Next Target to L4 and R4.
(You also keep the shift functionality on L4 this way, since previous target is Shift+TAB.)
 - I moved Right Mouse Click to L5, that way I can hold it down if I want to enable using the right trackpad for looking instead of the right thumbstick.
 - Changed ingame keybinds for strafing to A and D and updated this in the controller config as well.
 - And finally I basically switched the Dpad and face buttons around, because I am most likely to put my most spammed ability on 1 for KB or A for the controller.
 1 <-> 8
 2 <-> 7
 3 <-> 9
 4 <-> 0

And applied this same layout to the F-Key and Shift-key modified keybinds.
This needs to be changed both in the controller configuration as well as ingame.
So on the bars the layout changes from:
|  | 4 |  |  |  |  |  |  | 0 |  |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  | 3 |  | 5 | 6 |  | 7 |  | 9 |
|  | 2 |  |  |  |  |  |  | 8 |  |

To:
|  | 0 |  |  |  |  |  |  | 4 |  |
|---|---|---|---|---|---|---|---|---|---|
| 8 |  | 9 |  | 5 | 6 |  | 2 |  | 3 |
|  | 7 |  |  |  |  |  |  | 1 |  |

I also changed the output resolution of my TV to 1680*1050 to maintain the 16:10 aspect ratio of the Steam Deck, so the UI in WoW automatically scales correctly when switching between handheld and docked.
And as a final touch renamed the Steam Entry to "Turtle WoW" as there is some awesome community artwork available on SteamGridDB. :)

If wanted I can upload my control scheme, but I haven't done so up till now as I just did some minor tweaks based on OP's heavy lifting.
So thanks again @Anubys!

## Post 54205 by Smocco — 2023-07-21T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54205#p54205 | page 1 | era: pre-1.18.1 -->

Great work on this port! It’s amazing! Having an issue with moving the camera to the left though. It only seems to work sometimes when I move the right joystick and only little bits. Moving the camera right or up I don’t have any issues! Are you able to help?

## Post 54921 by Anubys — 2023-07-28T08:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54921#p54921 | page 1 | era: pre-1.18.1 -->

> **Smocco wrote: Fri Jul 21, 2023 10:45 am**
> Great work on this port! It’s amazing! Having an issue with moving the camera to the left though. It only seems to work sometimes when I move the right joystick and only little bits. Moving the camera right or up I don’t have any issues! Are you able to help?

It is probably an issue with the touch sensor on the right stick. This acts as a hold right click and move camera. So either the sensor is not working correct or you are not touching the middle part? If you touch the rings on the outside of the stick it will not Track it. But i noticed on my 2 steamdecks i have had that there is some difference in tracking, maybe you have one that is a little off?

Try moving the finger off and retouching it again, this usually fixes it.

## Post 60950 by Zacrifice00 — 2023-09-05T06:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=60950#p60950 | page 1 | era: pre-1.18.1 -->

> **Illumini85 wrote: Sat Jul 08, 2023 1:35 pm**
> If wanted I can upload my control scheme, but I haven't done so up till now as I just did some minor tweaks based on OP's heavy lifting.
>  So thanks again @Anubys!

Thanks to everyone involved in this project! @Illumini85 would you mind to upload your settings to Steam, and possibly list your config file on Google Drive or Mediafire or something, pretty please?

## Post 74378 by Entrix — 2023-10-27T17:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74378#p74378 | page 1 | era: pre-1.18.1 -->

> **Anubys wrote: Fri Apr 21, 2023 5:34 am**
> > **Gorabash wrote: Thu Apr 20, 2023 11:09 pm**
> > > **Anubys wrote: Sat Apr 15, 2023 11:19 am**
> > > I had the exact same issue, in this case i installed the game twice on the Steam Deck and renamed one to World of Warcraft TV, you can store my controller layout as local layout/template and then you can use on a game with different name. In my case i wanted to use wireless keyboard/mouse on tv, but can also work with controller ofc  smiling_turtle_head
> >
> >   I don't think that's what they meant.
> >  I have the same "issue" as them, the skills and spells are on different bars on pc (another device) and on steam deck. I dragged some spells to other bars on PC but it also changed on the steam deck because it probably syncs somehow... Do you know a way to keep the bar setup separate?
>
>   I see, i think i played on different characters in my case, but i noticed it also in the past.
>
>  Maybe this works?  allows you to save action bar spell settings and load them: <https://github.com/0ldi/SimpleActionSets>

Just tested this. It works perfectly so far :D ty for the suggestion.

## Post 93774 by Kimaron — 2024-04-30T04:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93774#p93774 | page 1 | era: pre-1.18.1 -->

Hello all, short question as it appears that ryac's layout disappeared from steam community layout 'library'.
Is anybody still using the layout (then it should be saved somewhere) and might be able to re-upload it under a new name?
If you re-share, ryac should be mentioned in the credits though.
Regards!

## Post 95404 by Anubys — 2024-05-22T08:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95404#p95404 | page 1 | era: pre-1.18.1 -->

> **Kimaron wrote: Tue Apr 30, 2024 4:57 am**
> Hello all, short question as it appears that ryac's layout disappeared from steam community layout 'library'.
>  Is anybody still using the layout (then it should be saved somewhere) and might be able to re-upload it under a new name?
>  If you re-share, ryac should be mentioned in the credits though.
>  Regards!

Somehow the layout was not showing, so i just shared it again. This should be a direct link aswell: Steam://controllerconfig/3427365909/3241116233 . I recommend storing it as a local template, so if it gets removed again you will have it and be able to share it

## Post 96279 by Loat — 2024-06-03T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96279#p96279 | page 1 | era: pre-1.18.1 -->

Hey the controller setup isn't on steam still. Can you reshare it or post more detailed screenshot of it please?

## Post 100119 by Druhanov — 2024-07-22T13:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100119#p100119 | page 1 | era: pre-1.18.1 -->

Thank you so much bro! Yesterday i installed everything and had a lot of fun with my rouge :D

## Post 103023 by HerTiSo — 2024-10-13T18:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103023#p103023 | page 1 | era: pre-1.18.1 -->

Man, I wish the setup process were more straightforward and you wouldn't force so many additional add-ons onto people's Steam Deck.

For now, Shagu Controller + M/KB Stock Layout + Lukáš Interact button seems to be the way to go.

## Post 103093 by HerTiSo — 2024-10-15T11:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=103093#p103093 | page 1 | era: pre-1.18.1 -->

Okay, I just noticed you’re randomly distributing outdated add-ons, which ended up causing more problems than anything else for me.

I spoke with Shagu about it, and he’s not too fond of this practice, so I’d recommend removing the third-party add-ons from your package and linking to their respective repositories instead.

## Post 105248 by Ryac — 2024-10-29T17:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105248#p105248 | page 1 | era: pre-1.18.1 -->

> **HerTiSo wrote: Tue Oct 15, 2024 11:32 am**
> ..

Hi, i managed to recover my old account :)

Thank you for the feedback. I only started this because i wanted to find a better way to play on the Steamdeck myself and once it was complete i thought others might like it also. I am nowhere near an actual addon maker or anything so i did not really think about it when i packaged it. I did give credit for any addon i used though.

But i agree it is better to strip it of any actively updated addons and then let people download the latest versions of the addons that are needed for this 'UI' pack.

I will add a new version to the github page and then link to the other github pages for the mods that are still active.

 *edit: I think i also messed up the download through the 'Code >' dropdown from Github, probably also why it was buggy, fixed that also.

## Post 105326 by HerTiSo — 2024-10-30T09:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105326#p105326 | page 1 | era: pre-1.18.1 -->

> **Ryac wrote: Tue Oct 29, 2024 5:18 pm**
> > **HerTiSo wrote: Tue Oct 15, 2024 11:32 am**
> > ..
>
>  ...
>
>  I will add a new version to the github page and then link to the other github pages for the mods that are still active.
>
>  *edit: I think i also messed up the download through the 'Code >' dropdown from Github, probably also why it was buggy, fixed that also.

Amazing, thank you! And don't worry, we all have to start somewhere, and you did great so far with that add-on!

That being said, I was wondering why you opted for Code: Select all

```
/run TargetNearestEnemy()
```

instead of mapping [TAB] to L1. Maybe I'm missing something here, but I was curious, as I'm also actively working on a Steam Deck solution right now.

## Post 105357 by Ryac — 2024-10-30T13:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=105357#p105357 | page 1 | era: pre-1.18.1 -->

> **HerTiSo wrote: Wed Oct 30, 2024 9:30 am**
> > **Ryac wrote: Tue Oct 29, 2024 5:18 pm**
> > > **HerTiSo wrote: Tue Oct 15, 2024 11:32 am**
> > > ..
> >
> >  ...
> >
> >  I will add a new version to the github page and then link to the other github pages for the mods that are still active.
> >
> >  *edit: I think i also messed up the download through the 'Code >' dropdown from Github, probably also why it was buggy, fixed that also.
>
>   Amazing, thank you! And don't worry, we all have to start somewhere, and you did great so far with that add-on!
>
>  That being said, I was wondering why you opted for Code: Select all
>
> ```
> /run TargetNearestEnemy()
> ```
>
>  instead of mapping [TAB] to L1. Maybe I'm missing something here, but I was curious, as I'm also actively working on a Steam Deck solution right now.

Binding TAB to L1 is a possibility yes, but then you would loose 3 extra action buttons, one on the first page and two when you hold down L2 or R2, those action buttons are also activated with L1. You could ofcourse bind a different button to TAB or something like hold down action or double press etc, but for me this works the best and it is similar to how it is in Consoleport

## Post 106237 by Deadmaus10 — 2024-11-03T22:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106237#p106237 | page 1 | era: pre-1.18.1 -->

Hello!

Thanks a lot for this amazing package you just did.

It works pretty well for me, just sometimes moving to the right with the left joystick drops an error that this keybind is for another UI button.

Is that normal or what I did wrong?

Thanks!

## Post 106491 by Ryac — 2024-11-05T09:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106491#p106491 | page 1 | era: pre-1.18.1 -->

> **Deadmaus10 wrote: Sun Nov 03, 2024 10:34 pm**
> Hello!
>
>  Thanks a lot for this amazing package you just did.
>
>  It works pretty well for me, just sometimes moving to the right with the left joystick drops an error that this keybind is for another UI button.
>
>  Is that normal or what I did wrong?
>
>  Thanks!

Hey, Thank you.

I am not sure, first time i see this error.
Left stick should only use WASD so Right movement should be the D button and it should not conflict with anything. Maybe check in your keybinds if anything else is bound to D? or some other addon that is conflicting?

A fresh install would probably fix it, you can just install a new folder and add that to steam, you can leave the old folder intact.

## Post 109166 by Latifundisto — 2024-11-21T09:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109166#p109166 | page 2 | era: pre-1.18.1 -->

> **Ryac wrote: Tue Nov 05, 2024 9:10 am**
> > **Deadmaus10 wrote: Sun Nov 03, 2024 10:34 pm**
> > Hello!
> >
> >  Thanks a lot for this amazing package you just did.
> >
> >  It works pretty well for me, just sometimes moving to the right with the left joystick drops an error that this keybind is for another UI button.
> >
> >  Is that normal or what I did wrong?
> >
> >  Thanks!
>
>   Hey, Thank you.
>
>  I am not sure, first time i see this error.
>  Left stick should only use WASD so Right movement should be the D button and it should not conflict with anything. Maybe check in your keybinds if anything else is bound to D? or some other addon that is conflicting?
>
>  A fresh install would probably fix it, you can just install a new folder and add that to steam, you can leave the old folder intact.

Hello!
I have the same problem on my SteamDeck. I installed your Addon on a fresh client, with Folder replacement, according to the tutorial. The error is in the same place when using "Step right" - D on analogs.

## Post 109925 by Latifundisto — 2024-11-25T23:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109925#p109925 | page 2 | era: pre-1.18.1 -->

Reinstalled everything again, the problem disappeared. Strangely, initially everything was done the same way, apparently some kind of bug. Thanks for the feedback.  smiling_turtle_head

## Post 158158 by Stingray88 — 2025-11-02T23:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=158158#p158158 | page 2 | era: 1.18.1-announced-pre-release -->

Anyone have a backup for Ryac's contoller layout that they could re-upload to Steam again? It seems to have been removed once again.

I tried setting it all up on my own based on the screenshots provided... but unfortunately I can't get the base set of skill buttons working (1-0 number keys). Everything else works, including the R2 / L2 keybinds... just not the base set (meaning NOT holding R2 / L2).

Anyone have ideas on what I'm doing wrong? Or have the controller layout saved that you can share?

