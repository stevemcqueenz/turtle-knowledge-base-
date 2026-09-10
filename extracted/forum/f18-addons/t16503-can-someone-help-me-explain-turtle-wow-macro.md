---
title: "Can someone help me explain Turtle Wow Macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16503"
topic_id: 16503
forum_id: 18
forum: "AddOns"
author: "LauraMArechiga"
author_authority: "player"
posted: "2024-12-14T08:32:00Z"
last_post: "2024-12-15T20:56:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T10:27:31Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Can someone help me explain Turtle Wow Macro?

## Post 112664 by LauraMArechiga — 2024-12-14T08:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112664#p112664 | page 1 | era: pre-1.18.1 -->

Can anyone show me how to understand and explain Turtle Wow Macro?

Thanks

## Post 112723 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2024-12-14T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112723#p112723 | page 1 | era: pre-1.18.1 -->

Greetings.

There isnt much to explain, WoW macros use a slightly modified version of LUA 5.0 (Vanilla uses 5.0, TBC uses 5.1 etc.).

Unlike the LUA code in your addons, you have to use /run or /script in order to initiate the code
and run your API calls or whatever.

There are a few rules like the code has to be on one line for each /run or /script command.
So you cant format your code in blocks like you normaly do.

Thats pretty much it.

You look up the WoW Vanilla API ([https://wowpedia.fandom.com/wiki/World_ ... did=293146](https://wowpedia.fandom.com/wiki/World_of_Warcraft_API?oldid=293146)) calls that you want to use, lets say you want to figure out the health of your char,
then you use : "UnitHealth("unit")   - Returns the current health, in points, of the specified unit.".

 **EXAMPLE:**

"Print" doesnt exist in vanilla, so we have to use "Frame:AddMessage()".
So -> DEFAULT_CHAT_FRAME:AddMessage()

In order to use UnitHealth() we pass it to our AddMessage function like this:
/run DEFAULT_CHAT_FRAME:AddMessage(UnitHealth("player"))

Now it will print your characters HP.

You can also use LUA 5.0 functions like "tostring" or "if... else".
You can also declare variables like this: /run x = 1; DEFAULT_CHAT_FRAME:AddMessage(x) -- this will print "1"

## Post 112744 by Istavan — 2024-12-14T23:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112744#p112744 | page 1 | era: pre-1.18.1 -->

Sorry gonna hijack this thread rather than start a fresh one

So for a start attack macro it would be
/Script Attack
/Script Holy Strike

?

## Post 112745 by Geojak (Grandmaster of Forum PvP) — 2024-12-14T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112745#p112745 | page 1 | era: pre-1.18.1 -->

> **Istavan wrote: Sat Dec 14, 2024 11:08 pm**
> Sorry gonna hijack this thread rather than start a fresh one
>
>  So for a start attack macro it would be
>  /Script Attack
>  /Script Holy Strike
>
>  ?

Attack and holy strike are no valid functions

You need
/run CastSpellByName("Holy Strike")

## Post 112761 by Ulukay (Patch Note Conspiracy Theorist) — 2024-12-15T07:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112761#p112761 | page 1 | era: pre-1.18.1 -->

> **Istavan wrote: Sat Dec 14, 2024 11:08 pm**
> /Script Attack
>  /Script Holy Strike

/cast Attack
/cast Holy Strike

## Post 112762 by Ulukay (Patch Note Conspiracy Theorist) — 2024-12-15T07:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112762#p112762 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Sat Dec 14, 2024 7:16 pm**
> "Print" doesnt exist in vanilla, so we have to use "Frame:AddMessage()".
>  So -> DEFAULT_CHAT_FRAME:AddMessage()

/script print("hello world")

/script print( UnitHealth("player") )

## Post 112765 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2024-12-15T08:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112765#p112765 | page 1 | era: pre-1.18.1 -->

> **Ulukay wrote: Sun Dec 15, 2024 7:48 am**
> /script print( UnitHealth("player") )

Again, print does not exist by default in vanilla, you get a nil value if you call it:
![Image](https://i.ibb.co/4ZpC5Hg/err.gif)

If you have print() available, then an AddOn gives it to you (for ex. PFUI adds the "print function).
But print() does not exist in the 1.12.1 API by default as you can see in the API's linked above.

## Post 112805 by Ulukay (Patch Note Conspiracy Theorist) — 2024-12-15T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=112805#p112805 | page 1 | era: pre-1.18.1 -->

> **Foreverdelta33 wrote: Sun Dec 15, 2024 8:11 am**
> If you have print() available, then an AddOn gives it to you (for ex. PFUI adds the "print function).
>  But print() does not exist in the 1.12.1 API by default as you can see in the API's linked above.

That's right, PfUi provides this functionality. I didn't know   satisfied_turtle_head

