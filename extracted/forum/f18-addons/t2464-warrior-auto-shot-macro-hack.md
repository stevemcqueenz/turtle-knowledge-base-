---
title: "Warrior Auto Shot Macro [Hack]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2464"
topic_id: 2464
forum_id: 18
forum: "AddOns"
author: "Snigery"
author_authority: "player"
posted: "2022-01-05T00:21:00Z"
last_post: "2023-08-29T20:35:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:31:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Warrior Auto Shot Macro [Hack]

## Post 15331 by Snigery (Barrens Chat Casualty) — 2022-01-05T00:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15331#p15331 | page 1 | era: pre-1.18.1 -->

Okay not really a hack, but absolutely impractical. Someone was asking for warriors to have auto-shot, so I thought I would make them a macro instead of requiring devs to make game changes. But it turns out this solution freezes your game client while it runs, so it exits after so long, otherwise you'd have to restart the game. This is my test version which was able to repeat a given chat message every so often, though I didn't see it happen because my game UI was frozen while it ran, haha. If you want to still use this then swap out the SendChatMessage() functions for CastSpellByName( "Shoot" ) or whatever the ability warriors have is. If you want you can role-play the game freezing as the warriors brain shutting down from the stress of now having to master all melee weapons and ranged weapons.

You have to have the SuperMacro addon which will allow you to use the LUA code that makes this work. Here is the LUA code.
Code: Select all

```
local vAASwitch = false;

function auto_attack_hack()
local
time = GetTime()
i = 0;

if vAASwitch then
SendChatMessage( "Halting..." .. i, "say" );
vAASwitch = false;
else
SendChatMessage( "Resuming..." .. i, "say" );
vAASwitch = true;
end

while vAASwitch and i < 100000000 do
if GetTime() - time > 1 then
SendChatMessage( "AAing", "say" )
time = GetTime();

end

i = i + 1;
end

if i > ( 100000000 - 1 ) then
SendChatMessage( "Ending Loop..." .. i, "say" );
end
end
```

And here is the macro.
Code: Select all

```
/script auto_attack_hack()
```

## Post 59812 by Grantgrace — 2023-08-29T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59812#p59812 | page 1 | era: pre-1.18.1 -->

Thanks for sharing this interesting approach, mate! It's cool how you're brainstorming creative solutions like this auto-shot macro for warriors.

## Post 59826 by Mgray — 2023-08-29T20:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=59826#p59826 | page 1 | era: pre-1.18.1 -->

"Gotta admit it's a bit of a wild ride with the game freezing and all – sounds like a quirky adventure!The whole role-playing aspect of a warrior's brain shutting down is a hilarious touch. And hey, thanks for hooking us up with the code. It's always awesome to see gamers come together to tinker with things and share their discoveries.Speaking of games, have you checked out the [mobile games](https://topgamesgeek.com)? There's a whole world out there waiting to be explored. While you're embracing your inner code magician, who knows what hidden gems you might find in the mobile realm?

