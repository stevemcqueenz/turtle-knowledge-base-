---
title: "Donation Button Missing from minimap"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7288"
topic_id: 7288
forum_id: 3
forum: "Help & Support"
author: "Foobs"
author_authority: "player"
posted: "2023-05-17T04:02:00Z"
last_post: "2024-11-24T10:09:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:49:37Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Donation Button Missing from minimap

## Post 46170 by Foobs (Barrens Chat Casualty) — 2023-05-17T04:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46170#p46170 | page 1 | era: pre-1.18.1 -->

The minimap button showing donation rewards is missing from my UI.

No it is not underneath any UI.

I have turned off all add-ons. Except for the one that comes with Turtle wow client.

I removed the client and installed fresh. The mini button is still missing.

I do not have WDB file to destroy or trash.

I have separate accounts that are not missing the donation button.  SO I assume its something on the server side that is causing this and thus I could use help from someone on the admin side.

If there is a command to show or hide the button please reply so I can try it.

If there is another way to get help or a response from admin please reply so I can pursue that avenue.

I would greatly appreciate any help or at least a response. This could only benefit Turtlewow as I could spend donation points if I can get this matter fixed.

This is my SECOND attempt at finding help on this forum.

## Post 46176 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-05-17T04:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46176#p46176 | page 1 | era: pre-1.18.1 -->

The Original (Stupid) Post Try this.
—

Resetting the Shop Frame
- **Log out of your affected character**.
(Closing the game is also fine.)
- Navigate to your *Turtle WoW* directory.
- Go to the WTF sub-directory of the affected character.
(Example: *"Turtle WoW\WTF\Account\[youraccount]\Turtle WoW\Joeschmoe"*
- Open the file: **layout-cache.txt** in a text editor.
- Find the line starting with "Frame: ShopFrame" and Either:
 - Erase the "Frame: ShopFrame" line *and* the "FrameLevel", "X", and "Y" lines immediately after it.
 **Or…**
 - Adjust the "X" and "Y" lines to your coordinate of choice.
(Default coordinates should be "X: 333, Y: -154".)
- Save the file, log back into your affected character.

—

If this doesn't help, you can also try just plain **deleting** your "layout-cache.txt" file.  Doing this will reset **a majority** of your window frames and mini-map button locations, however.

 **Edit:**
I think I just gave the directions to a load of bullocks.  I think this actually resets the **shop frame, itself**, not the button.  I'm sorry.  However, I might have found the actual problem.  And so, let's try this…
—

Re-Enabling the Turtle WoW Store Button (the dumb way)
- **Log out of your affected character**.
(Closing the game is also fine.)
- Navigate to your *Turtle WoW* directory.
- Go to the WTF sub-directory of the affected character's account.
(Example: *"Turtle WoW\WTF\Account\[youraccount]"*
- Open the file: **SavedVariables.lua** in a text editor.
- Find the line starting with "TWS_HIDE_MINIMAP_BUTTON".
(It should be the very last entry.)
- If it's set to "= 1", then set it to "= 0".
- Save the file (**as a .lua file**), log back into your affected character.

—

 **Edit:**
Okay, I unknowingly overcomplicated this.  Check this out:

Re-Enabling the Turtle WoW Store Button (the easy way)
- Log into any character.  Type "**/twshop showbutton**".  Hit Enter.  Done.
I honestly had no idea it *could* even be hidden.  Very interesting!

## Post 46179 by Foobs (Barrens Chat Casualty) — 2023-05-17T05:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46179#p46179 | page 1 | era: pre-1.18.1 -->

DUUUUUDE!!!!!

Thank you very much!!

It worked. TYTYTYTYTYTY!!

## Post 69288 by Gravedigger — 2023-10-07T05:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=69288#p69288 | page 1 | era: pre-1.18.1 -->

Does not work for me :(

## Post 106254 by venous — 2024-11-04T02:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=106254#p106254 | page 1 | era: pre-1.18.1 -->

Thank you so much!

## Post 109384 by Reyneese — 2024-11-22T14:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109384#p109384 | page 1 | era: pre-1.18.1 -->

thank you so much for this one!.
I have to check the text file, SavedVariable.lua. using any text editor works, having to turn the Hide value from 1 to 0.   unhappy_turtle   satisfied_turtle_head

glad to have read this post!

## Post 109635 by Vanth (Turtle WoW Team) [STAFF] — 2024-11-24T10:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=109635#p109635 | page 1 | era: pre-1.18.1 -->

You can also try /shop showbutton or just use /shop in a macro to open the shop window

