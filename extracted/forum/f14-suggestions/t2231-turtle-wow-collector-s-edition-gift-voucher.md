---
title: "Turtle WoW Collector's Edition Gift Voucher"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2231"
topic_id: 2231
forum_id: 14
forum: "Suggestions"
author: "Jcarrill0"
author_authority: "player"
posted: "2021-11-15T16:48:00Z"
last_post: "2021-11-15T17:51:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T12:38:09Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW Collector's Edition Gift Voucher

## Post 13893 by Jcarrill0 (Patch Note Conspiracy Theorist) — 2021-11-15T16:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13893#p13893 | page 1 | era: pre-1.18.1 -->

I was wondering if you would consider recreating this Quest where players start with this "[Gift Voucher](https://database.turtlecraft.gg/?search=Gift+Voucher)" and then can gain a reward to get [Speedy](https://database.turtlecraft.gg/?item=23002) the Turtle & [Swift Riding Turtle](https://database.turtlecraft.gg/?item=23720) Mount.

I know the current System, players already start with Speedy, however I think this would be a nice way to  allows players to gain this as a reward as a way to say Welcome to the Turtle WOW community. This also removes the Previous 3 rewards, and place them in the Turtle Shop. [Diablo Stone](https://database.turtlecraft.gg/?item=13584), [Panda Collar](https://database.turtlecraft.gg/?item=13583) is currently in the Turtle Shop, while [Zergling Leash](https://database.turtlecraft.gg/?item=13582) is not listed.

## Post 13894 by Jcarrill0 (Patch Note Conspiracy Theorist) — 2021-11-15T17:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13894#p13894 | page 1 | era: pre-1.18.1 -->

Sample Quest[-- Welcome!

replace into quest_template (prevquestid, entry, zoneorsort, questlevel, minlevel, questflags, specialflags, title, details, objectives, requestitemstext, offerrewardtext, reqitemid1, reqitemcount1, reqitemid2, reqitemcount2, reqitemid3, reqitemcount3, reqitemid4, reqitemcount4, reqcreatureorgoid1, reqcreatureorgocount1, reqcreatureorgoid2, reqcreatureorgocount2, reqcreatureorgoid3, reqcreatureorgocount3, reqcreatureorgoid4, reqcreatureorgocount4, srcitemid, srcitemcount, reworreqmoney, rewmoneymaxlevel, rewrepfaction1, rewrepvalue1,  rewrepfaction2, rewrepvalue2, rewrepfaction3, rewrepvalue3, rewrepfaction4, rewrepvalue4, rewspell, rewspellcast, completeemote, rewitemid1, rewitemcount1, rewitemid2, rewitemcount2, rewitemid3, rewitemcount3, rewitemid4, rewitemcount4, rewchoiceitemid1, rewchoiceitemcount1, rewchoiceitemid2, rewchoiceitemcount2, rewchoiceitemid3, rewchoiceitemcount3, rewchoiceitemid4, rewchoiceitemcount4, rewchoiceitemid5, rewchoiceitemcount5, rewchoiceitemid6, rewchoiceitemcount6) values ('0', '0', '0', '0', '0', '0', '0', 'Welcome!', 'Welcome to the Turtle WoW!$B
$B
As special thanks for Turtle WoW Community, turn in this gift voucher to Merissa Stilwell in Northshire Valley. You'll then be given a gift: a little companion to join you on your quest for adventure and glory.$B
$B
Thanks again, and enjoy your stay in the Turtle WoW!', 'Greetings! It is a pleasure to meet you!$B
$B
I see you have a special voucher. Give it to me and I will offer you something in exchange.', '', 'You are indeed a special hero, $N. We welcome you to the world of Azeroth, and offer you one of these unique gifts!', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '23002', '1', '23720', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');

replace into creature_questrelation (id, quest) values (0, 0);
replace into creature_involvedrelation (id, quest) values (0, 0);](https://dev.turtlecraft.gg/#!/questcreator/WzAsMCwyLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwiV2VsY29tZSEiLCJXZWxjb21lIHRvIHRoZSBUdXJ0bGUgV29XISRCXG4kQlxuQXMgc3BlY2lhbCB0aGFua3MgZm9yIFR1cnRsZSBXb1cgQ29tbXVuaXR5LCB0dXJuIGluIHRoaXMgZ2lmdCB2b3VjaGVyIHRvIE1lcmlzc2EgU3RpbHdlbGwgaW4gTm9ydGhzaGlyZSBWYWxsZXkuIFlvdSdsbCB0aGVuIGJlIGdpdmVuIGEgZ2lmdDogYSBsaXR0bGUgY29tcGFuaW9uIHRvIGpvaW4geW91IG9uIHlvdXIgcXVlc3QgZm9yIGFkdmVudHVyZSBhbmQgZ2xvcnkuJEJcbiRCXG5UaGFua3MgYWdhaW4sIGFuZCBlbmpveSB5b3VyIHN0YXkgaW4gdGhlIFR1cnRsZSBXb1chIiwiR3JlZXRpbmdzISBJdCBpcyBhIHBsZWFzdXJlIHRvIG1lZXQgeW91ISRCXG4kQlxuSSBzZWUgeW91IGhhdmUgYSBzcGVjaWFsIHZvdWNoZXIuIEdpdmUgaXQgdG8gbWUgYW5kIEkgd2lsbCBvZmZlciB5b3Ugc29tZXRoaW5nIGluIGV4Y2hhbmdlLiIsIllvdSBhcmUgaW5kZWVkIGEgc3BlY2lhbCBoZXJvLCAkTi4gV2Ugd2VsY29tZSB5b3UgdG8gdGhlIHdvcmxkIG9mIEF6ZXJvdGgsIGFuZCBvZmZlciB5b3Ugb25lIG9mIHRoZXNlIHVuaXF1ZSBnaWZ0cyEiLCIiLCIiLCIiLCIiLCIiLCIiLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMjMwMDIsMjM3MjAsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLHsiaWQiOjAsImZpbmlzaGVyX2lkIjowLCJwYXRjaF9taW4iOjEwLCJwYXRjaF9tYXgiOjEwfV0=)

## Post 13897 by Torta (Turtle WoW Team) [STAFF] — 2021-11-15T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=13897#p13897 | page 1 | era: pre-1.18.1 -->

This is a lovely idea, Jcarrill0 :) We will probably do something like this.

