---
title: "whats wrong and why no information"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18641"
topic_id: 18641
forum_id: 3
forum: "Help & Support"
author: "moloki"
author_authority: "player"
posted: "2025-04-15T19:28:00Z"
last_post: "2025-04-15T21:13:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:45:02Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# whats wrong and why no information

## Post 126922 by moloki — 2025-04-15T19:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126922#p126922 | page 1 | era: pre-1.18.1 -->

After the horrible DDOS last night and the constand wow.exe crashes today, I desided to just delete it all and download it from the official launcher.
I get top about 90% but it gets stuck to this message.
"Hash mismatch for "/Data/texture.MPQ" after download: expected 78AE55D609FEA3AC07EB1CE45024542C295032C37164234F820762D4DFA44128, got 131373BB89AD25125B66CD870141EFEB16212443049600D3F6882CC9546A4375"

Tested retry obviously but ity doesnt help. restart of windows, computer power off/on, new drivers etc. nothing helps..

Tried to join your discord but the verification SMS never arrives.

## Post 126923 by Amyloriley — 2025-04-15T19:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126923#p126923 | page 1 | era: pre-1.18.1 -->

Hash mismatches will never be resolved by restarts or driver updates.
Assume you take a file, and you look at its binary 0s and 1s of the file itself. Then you put some kind of mathy calculation on it. Your result will be a certain number, and no matter how much you recalculate, you'll always get the same number. But change a few 0s and 1s in that file, recalculate, and your answer will be different.

The calculations are done in a way that's easy to do one way, but nearly impossible to reverse.

> **A given restaurant menu**
>
>  - Spaghetti 11.95
>  - Macaroni 10.85
>  - Spirelli 10.55
>  - Rice noodles 4.50
>  - Egg noodles 4.80
>
>  The total of the order is 32.25. Can you work out which menu items were taken to reach this total?
>  > Answer: 2x Macaroni + 1x Spirelli. It's easy to add these numbers together, but very hard to work it out backwards from the total itself.

Code: Select all

```
A simple hash function, by Matt Parker.
1. Take a number, say 42, and put it in your calculator.
2. Press the square root button five times.
3. Your calculator will say something like 1.123897073...
4. Ignore the digit before the decimal point, and then reorder the first six digits after the decimal point from small to large.
5. The answer will be in this case 123789.
6. Now, the challenge is, which number results in the answer 234477?
```

When TurtleWoW checks the hash of a file, the result of the calculation must be correct. Otherwise, someone has tampered with the 0s and 1s in a file. People can do this to cheat, such as removing the wall textures in a PvP arena so you can see who of your enemies are hiding behind a wall.

I'm not going to assume you were cheating, just giving out why people do this and why a hash needs to be checked to keep the game fair.

The answer to your problem is: you need to replace your texture.mpq file with one that matches the hash.

## Post 126929 by moloki — 2025-04-15T21:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=126929#p126929 | page 1 | era: pre-1.18.1 -->

eh. so I am manipulating the Twow server that hosts the files? you make no sense boy. I reinstalled twow and it kept getting this error on the mpq file after hash check.
But after a few retries that was probably fixed by twow.
but now i get the orignal problem which was the reason I reinstalled wow to begin with. it crashes right away Code: Select all

```
Faulting application name: WoW.exe, version: 1.12.1.5875, time stamp: 0x4510b6db
Faulting module name: ucrtbase.dll, version: 10.0.22621.608, time stamp: 0xbbf7fb0e
Exception code: 0xc0000409
Fault offset: 0x0009e34b
Faulting process id: 0x0x35D8
Faulting application start time: 0x0x1DBAE4A76B8A98A
Faulting application path: C:\wow\WoW.exe
Faulting module path: C:\Windows\System32\ucrtbase.dll
```

