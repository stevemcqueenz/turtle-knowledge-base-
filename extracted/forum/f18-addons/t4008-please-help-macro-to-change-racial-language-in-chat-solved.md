---
title: "Please help - Macro to change racial language in chat! (solved)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4008"
topic_id: 4008
forum_id: 18
forum: "AddOns"
author: "Friendz001"
author_authority: "player"
posted: "2022-09-02T05:45:00Z"
last_post: "2022-09-02T05:45:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:33:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Please help - Macro to change racial language in chat! (solved)

## Post 24205 by Friendz001 (Barrens Chat Casualty) — 2022-09-02T05:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24205#p24205 | page 1 | era: pre-1.18.1 -->

Ish-ne-alo por-ah.   satisfied_turtle_head

Im trying to find a macro/script function that allows me to automatically swap to my racial language, in my case,
Taur-ahe (tauren language).

Via google, I have only found this and it doesn't work:
Code: Select all

```
/run local C,B,e,l,N,I=X,Y,DEFAULT_CHAT_FRAME.editBox,"languageID"e[l]=e[l]==C and B or C for i=1,GetNumLanguages()do N,I=GetLanguageByIndex(i)if I==e[l]then print(N)break end end
```

Source: [https://www.reddit.com/r/wow/comments/7 ... gle_macro/](https://www.reddit.com/r/wow/comments/7w4pzy/change_languages_with_this_toggle_macro/)

Can somebody please tell me how I can get it to work.

Thank you, Gigantis.

EDIT: Found one that works on this server:
Code: Select all

```
/run ChatFrameEditBox.language = (ChatFrameEditBox.language == GetLanguageByIndex(1) and GetLanguageByIndex(2) or GetLanguageByIndex(1)) ChatFrame1:AddMessage(" "..ChatFrameEditBox.language)
```

