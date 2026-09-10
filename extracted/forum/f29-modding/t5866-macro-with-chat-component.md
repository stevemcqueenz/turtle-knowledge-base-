---
title: "Macro with chat component"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5866"
topic_id: 5866
forum_id: 29
forum: "Modding"
author: "Flamingkey"
author_authority: "player"
posted: "2023-03-06T10:33:00Z"
last_post: "2023-03-06T12:43:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:43:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro with chat component

## Post 36953 by Flamingkey — 2023-03-06T10:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36953#p36953 | page 1 | era: pre-1.18.1 -->

Hi everyone,

I hope you can help me. :)

I'm re-using an old macro I wrote for when I still played WoW Classic and it generates error messages when I try to use it here on turtle.

The original macro was
> #showtooltip
>  /cast Counterspell
>  /script SendChatMessage("Less talking, more dyeing!", "SAY", 33)

If everything works, the macro should have my character cast Counterspell on the target and threaten it in Gutterspeak (that's the "33").

I have several macros that have the same structure, but none of them work in TurtleWoW. The error I get references "SendChatMessage", which makes me think I have to change that line of the macro. But I honestly have no idea how. I can do only very basic macros.

Does anyone know where I went wrong and can help?

Thanks in advance!

## Post 36963 by Flamingkey — 2023-03-06T12:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=36963#p36963 | page 1 | era: pre-1.18.1 -->

A quick update on this: after searching and some experimenting, it turns out I require the addon "CleverMacro" for this to work. If you are looking for it, you can find it in the list here: [viewtopic.php?t=874](https://forum.turtlecraft.gg/viewtopic.php?t=874)

However, I still can't send chats in Gutterspeak. I'll do some more experimenting on this but if anyone has an idea, I'd be grateful for some help.

The error-message is "...erface\AddOns\LFT\ChatThrottleLib\ChatThrottleLib.lua:238: Unknown language"

Removing LFT has not removed the error because it is apparently integrated in other addons like TurtleRP.

