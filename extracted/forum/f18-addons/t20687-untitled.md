---
title: "............"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20687"
topic_id: 20687
forum_id: 18
forum: "AddOns"
author: "Foreverdelta33"
author_authority: "player"
posted: "2025-08-05T12:14:00Z"
last_post: "2025-10-11T15:42:00Z"
post_count: 19
pages: 1
fetched: "2026-09-10T10:23:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# ............

## Post 143237 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-05T12:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143237#p143237 | page 1 | era: pre-1.18.1 -->

............

*Last edited by Foreverdelta33 on Sun Aug 31, 2025 12:31 pm, edited 10 times in total.*

## Post 143250 by Reddguard — 2025-08-05T12:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143250#p143250 | page 1 | era: pre-1.18.1 -->

is it possible to add a space after tabbing? Else I always have to press space after tabbing.

And remove the space when I type in a dot, comma, semicolon or other special signs (!,?)

Also what about upper and lower case? Is it possible that an upper case is used when the last sign which is not space is a dot or the start of the message?

e.g. I want to type
"Hello! Today I eat bananas."
I press "h", and "hello" gets suggested. After tabbing in the message box I have
"Hello "
instead of
"hello"
Then I press "!" and the message is
"Hello!"
(instead of "Hello !")

## Post 143251 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-05T12:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143251#p143251 | page 1 | era: pre-1.18.1 -->

> **Reddguard wrote: Tue Aug 05, 2025 12:51 pm**
> is it possible to add a space after tabbing? Else I always have to press space after tabbing.
>
>  And remove the space when I type in a dot, comma, semicolon or other special signs (!,?)
>
>  e.g. I want to type
>  "Hello! Today I eat bananas."
>  I press "h", and "hello" gets suggested. After tabbing in the message box I have
>  "Hello "

Your right, the space is missing, I will add that right now.

And the auto-case-correction needs a bit of planning.

Currently you can do "He..." and then press tab, and he will write "Hello", so he does respect
your cases, but he does not have auto-case correction yet.
I would need to think of how to implement that, hm..    crying_turtle

## Post 143262 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-05T15:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143262#p143262 | page 1 | era: pre-1.18.1 -->

Ok guys,

few changes:

 - Added auto-space after tab
 - Added optional "auto-capitalization" for known/learned words and after punctuation.
 - Removed the useless backup system that made it all more complicated, now its 1 folder
 - Improved lookup performance (from array to letter-indexed hash table, 15-25x faster lookup)

Please delete the IntelliSenseBackup folder!

Because of this, your DB will be wiped, new data format (alpha phase remember please!).

![Image](https://i.ibb.co/xtKdS1qt/4.gif)

## Post 143285 by Zulnam (Bug Report Enthusiast) — 2025-08-05T18:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143285#p143285 | page 1 | era: pre-1.18.1 -->

very impressive.

curious without a completion popup how this behaves with nearly identical cases.

lets say we have: hello, help and hell.

## Post 143292 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-05T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143292#p143292 | page 1 | era: pre-1.18.1 -->

> **Zulnam wrote: Tue Aug 05, 2025 6:38 pm**
> very impressive.
>
>  curious without a completion popup how this behaves with nearly identical cases.
>
>  lets say we have: hello, help and hell.

Yea thats the thing, for "help" and "hell" it wont be a big help because the last letter will depend on your patterns.
If you use "hell" more often, it will show you "hell" as suggestion. Right now it just looks up how many
times you use a word, and if it fits the string. Not more.

The problem is, that in Vanilla, the events are very limited, and creating this popup in a good way isnt possible.

My solution is to learn how advanced pattern matching works and so IntelliSense would actually understand
context. So depending on your context, it will show you different words, but therefore, IntelliSense must
understand "meaning" and "intent". And that is very challenging, but im working on it.

But then the addon can predict what you will say next most likely.

## Post 143309 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-06T01:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143309#p143309 | page 1 | era: pre-1.18.1 -->

Ok so I added the next layer of logic.

 - IntelliSense can now predict:

![Image](https://i.ibb.co/99ts8MMN/ezgif-844102936866f2.gif)

Its of course not as good as your smartphone, but the issue with "help" vs "hello" vs "hell" should be solved.

How does it work:

So IntelliSense now uses 3 data sources -> The static vocabulary, your learned words, and
up to 1000 context words who's relation to other words it remembers (groups).

Now, Im not a scientist, and I have no idea what the outcome will be.
Performance-wise it should be fine even with 1000 words, if so, we crank it up to 5000 or 10000.

We will see, if you notice any performance issues, tune down the "Context Limit: Slider"
in your GUI. I didnt notice any problems with 1000 words.

The more you type, the better the context suggestions will be.^

## Post 143394 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-06T15:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143394#p143394 | page 1 | era: pre-1.18.1 -->

v 1.0.3:

Ok so this is getting really interessting.

I fixed a critical bug where ur predictions would get removed as soon as u typed the first letter of it.
Now you can type "du.." for "dude" if its in your context, and it will stay, and not be overriden by lower level logic.

Also added trigram (N-gram) prediction logic on top of the other layers.

You will notice that the predictions get really good really fast.

![Image](https://i.ibb.co/CKq3bQG4/1.gif)

## Post 144911 by Tha0dan — 2025-08-12T19:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144911#p144911 | page 1 | era: pre-1.18.1 -->

How does this for other languages then e.g. suggesting du to dude when writing German doesn't work, du means you.

## Post 144912 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-12T19:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144912#p144912 | page 1 | era: pre-1.18.1 -->

> **Tha0dan wrote: Tue Aug 12, 2025 7:08 pm**
> How does this for other languages then e.g. suggesting du to dude when writing German doesn't work, du means you.

Its only for english at the moment, but I can try to make it work for other languages,
but I would need some help with that.

## Post 144922 by Reddguard — 2025-08-12T20:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144922#p144922 | page 1 | era: pre-1.18.1 -->

The chat message ‘IntelliSense: IntelliSense loaded - V: 1.0.3 - open via \int” is shown in chat after evey loading screen, e.g. getting to the other continent by boat. Other addons have a message like this only once, when you start the game and load your character.
Is it possible to show this message only once and not after every loading screen?

## Post 144925 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-12T21:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=144925#p144925 | page 1 | era: pre-1.18.1 -->

> **Reddguard wrote: Tue Aug 12, 2025 8:58 pm**
> The chat message ‘IntelliSense: IntelliSense loaded - V: 1.0.3 - open via \int” is shown in chat after evey loading screen, e.g. getting to the other continent by boat. Other addons have a message like this only once, when you start the game and load your character.
>  Is it possible to show this message only once and not after every loading screen?

The welcome msg? That little print when u load in?

## Post 145059 by Reddguard — 2025-08-13T11:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145059#p145059 | page 1 | era: pre-1.18.1 -->

Yes. E.g. your groupmanager has also a welcome msg:
"GroupManager: Distance Display: Loaded and initialized."
But that only comes once and not after ingame loading screens. But the welcome message from IntelliSense comes after every loading screen.

## Post 145086 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-13T13:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145086#p145086 | page 1 | era: pre-1.18.1 -->

> **Reddguard wrote: Wed Aug 13, 2025 11:40 am**
> But that only comes once and not after ingame loading screens. But the welcome message from IntelliSense comes after every loading screen.

OH, thats terrible. I keep forgetting this.

I fixed it, can you download the current version, it should be gone.
The message should only come once when you log in, and not more.

<https://github.com/MtxGrower33/IntelliSense>

## Post 146422 by basednoob (Patch Note Conspiracy Theorist) — 2025-08-17T10:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146422#p146422 | page 1 | era: pre-1.18.1 -->

came across this addon which has a similar function to your addon but for item links. thought it might interest you.

[Linkerator info page](https://web.archive.org/web/20061109085201/http://www.fizzwidget.com/linkerator/)

![Image](https://web.archive.org/web/20060622092759im_/http://www.fizzwidget.com/images/linkerator.gif)

[Addons Collection Git](https://github.com/crazypoultry/Wow1.12.1_Addons_Collection/tree/master/GFW_Linkerator_v11200-1)

## Post 146423 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-08-17T10:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146423#p146423 | page 1 | era: pre-1.18.1 -->

Looks interesting, might incorporate such a function. Thanks for the info.

## Post 146434 by basednoob (Patch Note Conspiracy Theorist) — 2025-08-17T10:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146434#p146434 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Sun Aug 17, 2025 10:06 am**
> Looks interesting, might incorporate such a function. Thanks for the info.

no problem. I'm wondering what addon the murloc in the gif is from if anyone knows   turtle_in_love_head

## Post 146550 by basednoob (Patch Note Conspiracy Theorist) — 2025-08-17T17:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146550#p146550 | page 1 | era: pre-1.18.1 -->

I found the addon. Squidmod. Found a working version for it   turtle_in_love_head
[SquidMod webpage](https://web.archive.org/web/20060411161713/http://www.asymmetric-art.com/SquidMod/)
![Image](https://web.archive.org/web/20060411161713im_/http://hem.bredband.net/b138126/img/03.jpg)
[SquidMod_2.0.zip](https://web.archive.org/web/20081204073211if_/http://fs.wowinterface.com:80/download.php?id=8659)

Squidmod got several different styles of bar art. more on the webpage link.
![Image](https://web.archive.org/web/20060411161713im_/http://hem.bredband.net/b138126/img/05.jpg)

Type /squid for a list of commands.

## Post 155166 by Tha0dan — 2025-10-11T15:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155166#p155166 | page 1 | era: 1.18.1-announced-pre-release -->

Anyone got a backup of the addon?

