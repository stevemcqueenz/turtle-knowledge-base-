---
title: "Tank Buddy - need help wit LUA"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13692"
topic_id: 13692
forum_id: 18
forum: "AddOns"
author: "Zaggy2"
author_authority: "player"
posted: "2024-04-19T14:41:00Z"
last_post: "2024-04-28T23:02:00Z"
post_count: 27
pages: 1
fetched: "2026-09-10T10:29:05Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Tank Buddy - need help wit LUA

## Post 93110 by Zaggy2 — 2024-04-19T14:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93110#p93110 | page 1 | era: pre-1.18.1 -->

Hello there,

i am using the TankBuddy addon for announcements of resited taunts, using last stand etc.
<https://github.com/Gamemechanicwow/Tankbuddy>

In 2019 ive played the Classic WoW very shortly for several reasons ofc but there was an awesome addon called TankWarnings.
[https://www.curseforge.com/wow/addons/t ... ngsclassic](https://www.curseforge.com/wow/addons/tankwarningsclassic)

This Addon did nearly the same as tankbuddy do but i doenst work here because of different game/client version ofc.

I am happy with Tankbuddy but missing one feature of Tankwarnings very badly and its the following line:

"f:TWC_SendChatMessage(string.format(TankWarningsClassicSV.messages["%s will expire in 3 seconds!"], spellName))"

This also will send a chat message just 3 Secs before Last Stand or Shieldwall will expiere, which can be very useful in my opinion. Sadly i dont know LUA that much so maybe anybody here can help me how to add such a feature to tankbuddy addon too?

Greetings Zaggy

## Post 93116 by Xudo (Grandmaster of Forum PvP) — 2024-04-19T17:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93116#p93116 | page 1 | era: pre-1.18.1 -->

I found this addon in list of addons on turtle wiki <https://turtle-wow.fandom.com/wiki/Addons>
here is it <https://github.com/srazdokunebil/TankBuddy>
You can try this one before diving deep into lua.

## Post 93146 by Zaggy2 — 2024-04-20T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93146#p93146 | page 1 | era: pre-1.18.1 -->

Thank you Xudo, but i am already using this Version you have linked here. Sorry i have put the wrong Addon Link in the top.

This Addon works great as i said, but well, i am still missing this awesome feature.

## Post 93156 by Xudo (Grandmaster of Forum PvP) — 2024-04-20T17:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93156#p93156 | page 1 | era: pre-1.18.1 -->

I read code more carefully.
Looks like you need to port whole addon to turtle version of lua and WoW API to get it working.
What about <https://github.com/0ldi/Timers> addon?
I tested on low level warrior, so my only timer was bloodrage. I configured it to shout 7 seconds after using this spell.
How to do it:
Open Timers menu with "/ati show"
Switch to tab "trigger"
Scroll to Warrior row, press "+". You will see list of skills there.
Scroll to BLOODRAGE row and in column "Time" write "00:00:07".

Bloodrage duration is 10 seconds. After 7 seconds character will yell to chat "Bloodrage". It is 3 seconds before its expiry.

To add custom trigger, open tab "trigger".
Press "!" in top right corner
Scroll to bottom of the list. You will see New Trigger there. Those steps are optional.
Press on "!" in row of New Trigger, then "move to group", then "warrior"
Scroll up to group Warrior

replace text "New Trigger" with your text. I wrote "RETALIATION" without quotes
Press on "!" in row of RETALIATION, then "show advanced config".
in field "Text" write "Spel/Skill:Retaliation" without quotes
Then in panel "Warning" you can choose channel to warn. For example "Raid".
In text field "Message" you can write whatever you want to say. For example "Retaliation ends".
In field Warning->Time write "00:00:12"
In field Expiring->Time write "00:00:12"
It will yell immediately when you use retaliation and 3 seconds before its end (its duration 15 seconds for me).

If you want to yell, then choose "Channel"="Script". and in field "Message" write SendChatMessage("your message","YELL").

I spent some time to figure out what are those two timers. First is "Warning", second is "Expiring".
If you sed warning timer to 00:00:01 and expiring to 00:00:10
If you use spell in 22:56:54, then in 22:57:03 you will see Warning message, in 22:57:04 you will see "Expiring" message.
Looks like "Expiring" is counting from moment you used spell. And "Warning" is amount of time before "Expiring" happens. If you write something like warning time 00:00:20 and expiring time 00:00:10 (warning greater than expiring), then warning will happen immediately when you use spell and expiring in defined time(10 secs)

## Post 93192 by Konakamasaru — 2024-04-21T04:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93192#p93192 | page 1 | era: pre-1.18.1 -->

My addon has such announcement for Challenging shout: <https://github.com/allfoxwy/Threat>

I would consider adding Last Stand and Shield Wall later.

The reason I didn't add them is that I feel "other people" in raid not really care about Last Stand and Shield Wall.

## Post 93207 by Zaggy2 — 2024-04-21T10:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93207#p93207 | page 1 | era: pre-1.18.1 -->

Omg, thank you so much Xudo. That really sounds like something i am looking for. Ill try this as fast as possible when i am back home today.

## Post 93212 by Konakamasaru — 2024-04-21T13:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93212#p93212 | page 1 | era: pre-1.18.1 -->

k, I did some upgrade on my addon so it would announce Shield Wall and Last Stand either. Only at beginning of the effect, not at the last 3 sec ending.

The reason for no ending announcement is because I think tank might need do Challenging Shout and Shield Wall at the same time. While Challenging Shout has a countdown, if another number from Shield Wall shows up, would confuse people.

## Post 93239 by Zaggy2 — 2024-04-22T00:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93239#p93239 | page 1 | era: pre-1.18.1 -->

Well i tryed this now and sadly i have to say this doenst work properly together with the Tank-Buddy Addon xD
Thank you so much Xudo for all your work and the time you spend in this.

Also i have to say i tryed LUA now for a while and had to figure out there is no delay or sleep function in LUA we obviously need for Vanilla WoW. Maybe thats the Reason why there is no Addon like this.

Well Konaka i am palying Tank for several Years now and i just could remember maybe 1 or 2 Situation i have used these two Spells together. Normally i never use shiledwall+ challenging shout together.

Ill try to figue out now if i can bring any LUA-Versions to work together with this Tank-Buddy Addon Code. I knew there are a few Options for LUA which include a sleep function. This maybe is the key to make it work because it adds some kind of delay for an announcement.

## Post 93250 by Konakamasaru — 2024-04-22T05:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93250#p93250 | page 1 | era: pre-1.18.1 -->

> Also i have to say i tryed LUA now for a while and had to figure out there is no delay or sleep function in LUA we obviously need for Vanilla WoW. Maybe thats the Reason why there is no Addon like this.

That's not true. My addon has countdown like 5,4,3,2,1 per second. We don't need sleep nor delay to implement this. You might checkout my code to see how that works. It's open source.

## Post 93253 by Konakamasaru — 2024-04-22T05:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93253#p93253 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Fri Apr 19, 2024 2:41 pm**
> "%s will expire in 3 seconds!"

I would try adding this ending announcement for Shield Wall and Last Stand into my addon later. Guess it's only a single ending message not a countdown, would be fine  satisfied_turtle_head

## Post 93271 by Zaggy2 — 2024-04-22T14:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93271#p93271 | page 1 | era: pre-1.18.1 -->

You seem to have a lot more knowledge of LUA than I do.
Well, I've been sitting for 2 hours editing this line to reflect how you used it in your addon for the Mass-Taunt, but I can't get it to work. In your code it looks much simpler than in the original code from the Tank-Buddy addon. I'm talking about these lines from the Tank Buddy addon:

elseif (TBAbility == TB_GUI_SW) then
TBText = string.gsub(TBSettings[TBSettingsCharRealm].Announcements[TBAbility]["Text"], "$sec", TB_GetSWDuration());

elseif (TBAbility == TB_GUI_LS) then
TBText = string.gsub(TBSettings[TBSettingsCharRealm].Announcements[TBAbility]["Text"], "$sec", "20");
TBText = string.gsub(TBText, "$hp", math.floor((UnitHealthMax("player")/130)*30));

Trying to add some Simple Math like "Duration-3" Sec for example doenst work. Also adding a line like in your Addon ChallengingLastBroadcastTime = GetTime();
ChallengingShoutCountdown = ChallengingShoutCountdown - 1;
doenst seem to work or i am just to stupid to make it work.

Thank you very much for trying to add this to your Addon. I got some problems with your addon, and hopefully you dont get me wrong for saying this, because it seems also a very good work of you, i dont like the "auto" spells i can see in the code, like autocast revenge, or heroic strike. I would like to do these by myself for example.

If you get this to work maybe i can just delete those "features" and hope the addon still works only for those announcements xD

## Post 93274 by Konakamasaru — 2024-04-22T15:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93274#p93274 | page 1 | era: pre-1.18.1 -->

I tried modify TankBuddy in the past, but gave up because it has about 1000 lines code  (XML + LUA) to read. I end up making my own addon.

Well, maybe you could modify mine addon deleting things you don't need, it's smaller and I might provide some help.

I already added the last 3 sec announcement to Last Stand and Shield Wall. You could only use that feature and ignore the threat generating part.

Threat generating needs a manual call /warrthreat to function. So you could just ignore this slash command. Announcements still would work.

## Post 93277 by Zaggy2 — 2024-04-22T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93277#p93277 | page 1 | era: pre-1.18.1 -->

That sound like great news tbh. I'll check it out immediately when i am back home ofc. Thank you very much so far

## Post 93285 by Zaggy2 — 2024-04-22T18:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93285#p93285 | page 1 | era: pre-1.18.1 -->

You are AWESOME Konakamasaru. This is exactly what i was looking for. Soooooo nice.
Thank you so much.

I use this together with the original Tank-Buddy Addon now. First the TankBuddy Addon announce like "ill lose XY HP in 20 sec" and after that right in time so 3 Sec before it will expire your addon also announce that. Pretty awesome.

Just in case and to be sure ofc if i dont aktivate the macro it doenst work right? so in my test i could use all my spells by myself, even while tanking and i would love to keep it this way.

## Post 93309 by Konakamasaru — 2024-04-23T02:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93309#p93309 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Mon Apr 22, 2024 6:12 pm**
> Just in case and to be sure ofc if i dont aktivate the macro it doenst work right? so in my test i could use all my spells by myself, even while tanking and i would love to keep it this way.

The function Threat() is triggered by slash command (macro), while announcements are triggered by events. So they work side by side. Threat() logic won't trigger if you don't call the slash command.

Happy Gaming   satisfied_turtle_head

## Post 93364 by Zaggy2 — 2024-04-23T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93364#p93364 | page 1 | era: pre-1.18.1 -->

Thank you for the information and big thanks again for your work.

Same to you of course :)

## Post 93433 by Zaggy2 — 2024-04-24T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93433#p93433 | page 1 | era: pre-1.18.1 -->

Well just in case you get bored someday i just found some kind of an error.

Wehn i activate "retaliation", the 30min. cd in combat stance the addon also announce in say chat "shieldwall is active!" or something like that, same for Recklessness ofc.

I have sadly no idea why these two spells trigger this announcement because i cant find any of these in the code xD

## Post 93499 by Konakamasaru — 2024-04-25T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93499#p93499 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Wed Apr 24, 2024 7:09 pm**
> Wehn i activate "retaliation", the 30min. cd in combat stance the addon also announce in say chat "shieldwall is active!" or something like that, same for Recklessness ofc.

Ah, I think that's because Retaliation, Recklessness and Shield Wall share the same 30min cooldown. Sure it's a bug. I would try fix that later, not yet have a solution.

## Post 93504 by Konakamasaru — 2024-04-25T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93504#p93504 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Wed Apr 24, 2024 7:09 pm**
> Wehn i activate "retaliation", the 30min. cd in combat stance the addon also announce in say chat "shieldwall is active!" or something like that, same for Recklessness ofc.

A possible fix has been push to Git. Thanks for finding this issue!

While current code should work, it behave on buff icon, so if there is a player buff using the same icon as Shield Wall, the announcement would be triggered wrongly again. I think such situation is possible as Turtle is a private server adding custom contents.

Well, we fix that when we meet it in future, as check against buff icon is easier to implement.

## Post 93516 by Zaggy2 — 2024-04-25T21:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93516#p93516 | page 1 | era: pre-1.18.1 -->

Thank you again. I have tested it and it seems to work. No announcements when activate Recklessness or Retaliation. Great Work again.

I still got some struggles with this TankBuddy-Adddon Code.... it seems i got nearly 0 Knowlege in LUA...

This Guy added a function like this "My Taunt has been resisted by $tn" , which names the exact target of the missed taunt. Pretty useful in some cases.

I cant find this in the LUA Code Line or any defintion of it. If i try to add this " $tn" to your Code i got mass errors xD

Also a very nice feature i wanted to add is this for last stand: "$hp", math.floor((UnitHealthMax("player")/130)*30)),

This shows in the first announcement the HP-Gain and ofc the expected losing in 20 sec.

It seems pretty simple but i really dont know how to make it work with your Code. Maybe you used a different LUA Version? I also get only mass errors again xD

Tryed to add it like he did in TankBuddy Addon just simply ,math.floor XY; but error over errors... xD

I know it doenst really matter but just in my personal opinion i think is also very helpful to the healers. Same for the Taunt target.

## Post 93606 by Konakamasaru — 2024-04-27T06:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93606#p93606 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Thu Apr 25, 2024 9:34 pm**
> function like this "My Taunt has been resisted by $tn" , which names the exact target of the missed taunt.
>
>  This shows in the first announcement the HP-Gain and ofc the expected losing in 20 sec.

Thanks for advice. I added these two just now.

If peeps don't like these info, they could easily delete them from Localization.lua as they are variables.

The Mocking Blow announcement need more test. In Vanilla its combat log use different words:
- Your Mocking Blow is parried

- Your Mocking Blow was dodged

- Your Mocking Blow Missed
I've never seen "blocked" yet. Not sure if blocked one has a different line. If you witness a message "Mocking Blow MISSED" with no mob name, that would be something I missed interpret.

Feel free to tell me more issue and advice. Thanks.  satisfied_turtle

## Post 93657 by Zaggy2 — 2024-04-28T00:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93657#p93657 | page 1 | era: pre-1.18.1 -->

You are awesome and for sure a master with LUA. Thank you very much again.

Taunt works perfect now, i am talking about the missed Taunts ofc. Also Mocking Blow. Well ill try my best to figure out what happens if there is a block to this but i think it will take some time. I cant remember any blocked Mocking Blows so far.

I changed all the Mocking Blow fails at my local PC to simply mocking blow was resisted by XY to made it more simple, but also thank you at this point work all your work.

I spend hours for trying now the last stand thing. i bet the original Tank-Buddy Addon formula for this is also wrong tbh. still laughing a bit because i used this addon for years now and didnt even noticed the formula has to be wrong because i also checked, without any addons ofc, the real hp gain while using last stand. its sadly not simply *30 because that show to much hp gain. for example: i have tested it with many many different max HP now, just hit lvl 60 yesterday here so not that much gear, but it was always wrong like my warr with 4566 HP and with last stand 6003 HP.. addon showed 1800HP as gained HP, for real it was only 1437HP. Tankbuddy also showed it wrong, checked this ofc too. it showed 1409 HP gain xD

now i added this at my local addon here and it nearly hit the right HP gain now but its, if you wanna be 100% right, not the real HP but we talk about missing below 10 hp or gained ofc. no idea about this math... it looks strange and with calculation now i have to say i have no clue about the real formula.

GainHP = math.floor((UnitHealthMax("player")/130) * 31);

if you use this with simple math you wont get the result as it works in the addon obviously xD but nvm it works now so thanks you again :D

## Post 93670 by Konakamasaru — 2024-04-28T09:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93670#p93670 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Sun Apr 28, 2024 12:54 am**
> I spend hours for trying now the last stand thing. i bet the original Tank-Buddy Addon formula for this is also wrong tbh. still laughing a bit because i used this addon for years now and didnt even noticed the formula has to be wrong because i also checked, without any addons ofc, the real hp gain while using last stand. its sadly not simply *30 because that show to much hp gain. for example: i have tested it with many many different max HP now, just hit lvl 60 yesterday here so not that much gear, but it was always wrong like my warr with 4566 HP and with last stand 6003 HP.. addon showed 1800HP as gained HP, for real it was only 1437HP. Tankbuddy also showed it wrong, checked this ofc too. it showed 1409 HP gain xD
>
>  now i added this at my local addon here and it nearly hit the right HP gain now but its, if you wanna be 100% right, not the real HP but we talk about missing below 10 hp or gained ofc. no idea about this math... it looks strange and with calculation now i have to say i have no clue about the real formula.

You are right, I tested again, currently the gained HP in Threat is wrong. I would fix it shortly.

The original Tank-Buddy formula, I read it before but I didn't get its idea. It in fact is calculating against the HP after Last Stand is engaged, the 130% HP. I didn't notice this difference, my formula is wrong. I think Tank-Buddy formula should be the solution.

## Post 93671 by Konakamasaru — 2024-04-28T09:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93671#p93671 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Sun Apr 28, 2024 12:54 am**
> i bet the original Tank-Buddy Addon formula for this is also wrong tbh.

I m digging on this. I think TankBuddy formula is right, but the TIMING is what I m digging here.

I tried change Threat formula to TankBuddy one. However it still would read a wrong number about gained HP.

I notice that, even Last Stand is in cooldown, the UnitHealthMax() function still return a 100% HP instead of 130% HP.

Threat is sending chat message in a strange state that Last Stand is in cooldown but not yet HP is gained. I m not sure its a network latency or if it's a game design that there is a small latency between Last Stand engaged and in fact HP gain.

I m working on this, trying to get a stable correct number.

## Post 93676 by Konakamasaru — 2024-04-28T11:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93676#p93676 | page 1 | era: pre-1.18.1 -->

> **Zaggy2 wrote: Sun Apr 28, 2024 12:54 am**
> I spend hours for trying now the last stand thing.

Thanks for testing this!

I've just pushed another fix for Last Stand gained HP. In my test it seems working now. However as it might be a network related issue, more test from different endpoint would be great helpful.

If you find another wrong number, guess I would have to delay gained HP calculation and announcement for a short time to accommodate this latency effect. Wish the current solution works   smiling_turtle_head

Thanks for all your effort on this topic. Without you I won't make this far on my addon, I used it for month didn't notice these issue.

## Post 93711 by Zaggy2 — 2024-04-28T22:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93711#p93711 | page 1 | era: pre-1.18.1 -->

I see you have added the Tank-Buddy addon Formula to your Code now, but i have to say after my Tests i have some doubts if this formula is correct as i said in my last post.

I have made 6 Tests, kinda hard with this 10 min. cd tbh xD
For this Test i have used both Addons with different formulas ofc. I have used the original Tank-Buddy Addon with the Code  math.floor((UnitHealthMax("player")/130)*30))

+ your awesome addon with my little changed code like this
math.floor((UnitHealthMax("player")/130) * **31**)

I have watched my real Character HP very closly + The HP both Addons announced:
Test 1:
Start HP: 4954 HP
Last Stand active: 6515 HP
Real mathematical Difference: 1561 HP
TankBuddy showed: 1503 HP
Threat showed: 1553 HP

Test 2:
Start HP: 4797 HP
Last Stand active: 6308 HP
Real mathematical Difference: 1511 HP
TankBuddy showed: 1455 HP
Threat showed: 1504 HP

Test 3:
Start HP: 4566 HP
Last Stand active: 6003 HP
Real mathematical Difference: 1437 HP
TankBuddy showed: 1385 HP
Threat showed: 1431 HP

Test 4:
Start HP: 4104 HP
Last Stand active: 5396 HP
Real mathematical Difference: 1292 HP
TankBuddy showed: 1245 HP
Threat showed: 1286 HP

Test 5:
Start HP: 3369 HP
Last Stand active: 4429 HP
Real mathematical Difference: 1060 HP
TankBuddy showed: 1022 HP
Threat showed: 1056 HP

Test 6:
Start HP: 2760 HP
Last Stand active: 3629 HP
Real mathematical Difference: 869 HP
TankBuddy showed: 837 HP
Threat showed: 865 HP

So after these Tests i have to say i think both formulas are kinda wrong because simply math showed both dont announce the correct hp gain.
Also i have to say i think with higher HP, like above 4k HP, which i hope most tanks got ofc, the formula seems getting more and more wrong. thats why i tryed this with the change from *30 to *31 and as you can see in the results it seems to fit more but its still not the correct result xD

## Post 93712 by Zaggy2 — 2024-04-28T23:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=93712#p93712 | page 1 | era: pre-1.18.1 -->

> **Konakamasaru wrote: Sun Apr 28, 2024 11:26 am**
> > **Zaggy2 wrote: Sun Apr 28, 2024 12:54 am**
> > I spend hours for trying now the last stand thing.
>
>   Thanks for all your effort on this topic. Without you I won't make this far on my addon, I used it for month didn't notice these issue.

Well without you i would be still using the normal TankBuddy Addon and missing the 3 Seconds expire time so all i can say is thank you so much too   happy_turtle_head

