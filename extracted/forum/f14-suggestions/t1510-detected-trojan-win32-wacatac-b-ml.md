---
title: "Detected: Trojan:Win32/Wacatac.B!ml"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1510"
topic_id: 1510
forum_id: 14
forum: "Suggestions"
author: "Superius"
author_authority: "player"
posted: "2021-01-09T17:05:00Z"
last_post: "2022-02-19T15:17:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T12:35:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Detected: Trojan:Win32/Wacatac.B!ml

## Post 9011 by Superius — 2021-01-09T17:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9011#p9011 | page 1 | era: pre-1.18.1 -->

Detected: Trojan:Win32/Wacatac.B!ml
Details: This program is dangerous and executes commands from an attacker.
File: TWPatcher.exe

WTF is this?

## Post 9012 by Lexi (Barrens Chat Casualty) — 2021-01-09T17:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9012#p9012 | page 1 | era: pre-1.18.1 -->

It is more than likely a false positive. Any unofficial file that makes changes to your computer that it didn't create itself can look extremely suspicious to anti-virus. In order to play all the new content that was added turtle wow had to change some of your vanilla wow's files and have the ability to update similar files in the future. There was also an announcement that warned antivirus's may have a false positive.

Edit: Here is the announcement I was talking about. [viewtopic.php?f=2&t=1491](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=1491)

## Post 9014 by Unangwata (Patch Note Conspiracy Theorist) — 2021-01-09T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9014#p9014 | page 1 | era: pre-1.18.1 -->

Viruses in 2021 are myth. Didn't personally know any virus case for years. It's time of spyware. Antivirus software exist more for placebo effect and slow down your computer. Besides all websites have their own antivirus software and it's unlikely for you to download anything infected.

## Post 9021 by Torta (Turtle WoW Team) [STAFF] — 2021-01-09T17:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9021#p9021 | page 1 | era: pre-1.18.1 -->

False, you're safe :) I've addressed possible AC red flags in this thread: [viewtopic.php?f=2&t=1491](https://forum.turtlecraft.gg/viewtopic.php?f=2&t=1491)

Sadly we couldn't sign our patcher binary yet, but planning to do it in the future.

## Post 9023 by Steyr — 2021-01-09T17:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9023#p9023 | page 1 | era: pre-1.18.1 -->

> **Unangwata wrote: Sat Jan 09, 2021 5:24 pm**
> Viruses in 2021 are myth. Didn't personally know any virus case for years. It's time of spyware. Antivirus software exist more for placebo effect and slow down your computer. Besides all websites have their own antivirus software and it's unlikely for you to download anything infected.

I disagree. The only reason there haven't been any major software virus waves is that antivirus software is somewhat superior these days. There are large companies working in cybersecurity and antivirus fields with hundreds of employees, so some lone hacker doesn't have much of a chance of stepping up to them.
That doesn't mean you can't get your PC infected, especially if you tend to run all sorts of non-official / modified software on your machine.

That said, many antiviruses do tend to find false positives every now and then. Some antiviruses will even alert you about cracked / modified software, even if it doesn't contain a virus code.
To be less suspicious, you could try checking the file in question with other antivirus brands, or use online check, like Virustotal.com

I also remember, that Torta mentioned that some antiviruses might see the updater as a threat:

> Do not be afraid of it even if some antiviruses might warn you about it. This file simply has yet no publisher info, that’s why it may trigger a red flag. Its purpose is to place the MPQ file into your Data folder and to patch your binary with the following changes:

At the same time, you can jsut download an already-patched client from one of the mirrors, provided in the first post of this thread and not use TWPatcher.exe at all.

EDIT: Ah, just a couple seconds late with my wall of text :]

## Post 9043 by Daddym0e — 2021-01-10T02:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=9043#p9043 | page 1 | era: pre-1.18.1 -->

I encountered this same issue with this last update. I use Bit-Defender. I had to not only EXCLUDE this file from Bit-Defender as a threat, but also go into the properties of the file and tell it to 'trust' it because it was labelled as "from another computer and may not be safe". I also set it to 'Admin' rights and the patch program worked as intended after that.

## Post 17097 by Superius — 2022-02-18T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17097#p17097 | page 1 | era: pre-1.18.1 -->

Wacatac (also known as Trojan:Win32/Wacatac) is a trojan-type infection that stealthily infiltrates computers and performs a number of malicious actions. Cyber criminals typically proliferate this malware using spam email campaigns and fake software 'cracks'.

Is Trojan:Win32 Wacatac B ML a false positive?
Even if you suspect that you antivirus shows trojan:win32/wacatac. b! ml false positive, it typically means that the suspected software shares code similarities with the infamous virus.

So without reviewing the full source code it's hard to tell what's going on behind the scenes. Just because someone tells you that it's a false positive without any information to validate that statement means nothing really.

Quite frankly, you're buying a dead parrot.

## Post 17098 by Jamey (Turtle WoW Team) [STAFF] — 2022-02-18T17:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17098#p17098 | page 1 | era: pre-1.18.1 -->

> **Superius wrote: Fri Feb 18, 2022 3:36 pm**
> Wacatac (also known as Trojan:Win32/Wacatac) is a trojan-type infection that stealthily infiltrates computers and performs a number of malicious actions. Cyber criminals typically proliferate this malware using spam email campaigns and fake software 'cracks'.
>
>  Is Trojan:Win32 Wacatac B ML a false positive?
>  Even if you suspect that you antivirus shows trojan:win32/wacatac. b! ml false positive, it typically means that the suspected software shares code similarities with the infamous virus.
>
>  So without reviewing the full source code it's hard to tell what's going on behind the scenes. Just because someone tells you that it's a false positive without any information to validate that statement means nothing really.
>
>  Quite frankly, you're buying a dead parrot.

You are quoting from a website that shares very generic information which is unaccurate.

In short, as you also say in your post, it's correct that there are some similarities. The way viruses usually infect other programs is by adding themselves into the programs once they start up. In our case, we do something similar but completely harmless. We add the Discord library to the running game so that users can have the "Playing Turtle Wow" status on Discord.

In reality, a lot of programs and even Discord itself do this to enable certain functionality. These antiviruses however do not trigger on them because they're big companies that have requested explicit whitelist permissions etc. We're not one of these big companies and thus can't enjoy the same exclusivity they have but rest assured all antivirus flags are false positives.

## Post 17099 by Allwynd01 (Bug Report Enthusiast) — 2022-02-18T17:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17099#p17099 | page 1 | era: pre-1.18.1 -->

> **Superius wrote: Fri Feb 18, 2022 3:36 pm**
> Wacatac (also known as Trojan:Win32/Wacatac) is a trojan-type infection that stealthily infiltrates computers and performs a number of malicious actions. Cyber criminals typically proliferate this malware using spam email campaigns and fake software 'cracks'.
>
>  Is Trojan:Win32 Wacatac B ML a false positive?
>  Even if you suspect that you antivirus shows trojan:win32/wacatac. b! ml false positive, it typically means that the suspected software shares code similarities with the infamous virus.
>
>  So without reviewing the full source code it's hard to tell what's going on behind the scenes. Just because someone tells you that it's a false positive without any information to validate that statement means nothing really.
>
>  Quite frankly, you're buying a dead parrot.

You are the first person to report this problem. You aren't saying what antivirus are you using, I've played Turtle WoW while using different antivirus software over time, I've tried BitDefender, Avira, Microsoft Security and Immunet and none of them has reported any of the game files as a virus.

Going back to the fact that you're the first one to report it means that people don't have this problem and it's a false positive. Usually the people who are worried about such things are overly paranoid and take things at face value. If this was indeed a problem, other people would have complained about this, but again - nobody has in years.

## Post 17100 by Allwynd01 (Bug Report Enthusiast) — 2022-02-18T17:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17100#p17100 | page 1 | era: pre-1.18.1 -->

> **Unangwata wrote: Sat Jan 09, 2021 5:24 pm**
> Viruses in 2021 are myth. Didn't personally know any virus case for years. It's time of spyware. Antivirus software exist more for placebo effect and slow down your computer. Besides all websites have their own antivirus software and it's unlikely for you to download anything infected.

That's true. I've probably stopped using antivirus software at around 2010 - 2011 and only started using it again in 2020 up till late 2021 when I decided to stop using them again.

They indeed slow computers down due to constantly scanning everything, especially older PCs with HDDs suffer the most from antivirus software. It's a placebo effect and rarely protects from anything. Unless someone is downloading suspicious things from the internet left and right, it's useless to a cautious and informed person.

## Post 17123 by Superius — 2022-02-19T14:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17123#p17123 | page 1 | era: pre-1.18.1 -->

You're statements are rooted in personal opinions and not facts and I can tell you have no idea what you're taking about.
If you think viruses are a myth I recommend you do some reading on the global malware statistics from a good sources like Cisco for instance. There are millions of known recorded forms of malicious code that are being used on daily basis, between trojans, ransomware, phishing, viruses and various other forms, call it what you want but there are more active threats out there than you could possibly read about in your life time. So you saying that viruses are a myth is pretty much(for lack of a better word) stupid.

You keep diverting from the subject on hand and making biased claims that have nothing to do with what we are talking about.

Why not show the code and explain what exactly in your code is causing this detection? Why not release the source code for your app?

## Post 17125 by Jamey (Turtle WoW Team) [STAFF] — 2022-02-19T15:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17125#p17125 | page 1 | era: pre-1.18.1 -->

> **Superius wrote: Sat Feb 19, 2022 2:47 pm**
> You're statements are rooted in personal opinions and not facts and I can tell you have no idea what you're taking about.
>  If you think viruses are a myth I recommend you do some reading on the global malware statistics from a good sources like Cisco for instance. There are millions of known recorded forms of malicious code that are being used on daily basis, between trojans, ransomware, phishing, viruses and various other forms, call it what you want but there are more active threats out there than you could possibly read about in your life time. So you saying that viruses are a myth is pretty much(for lack of a better word) stupid.
>
>  You keep diverting from the subject on hand and making biased claims that have nothing to do with what we are talking about.
>
>  Why not show the code and explain what exactly in your code is causing this detection? Why not release the source code for your app?

I'm unsure who you're addressing.

Anyway, as Torta already said, the false positive most likely comes from the patcher extracting a new file to the file system, and modifying WoW.exe to load Discords library, as seen here: Code: Select all

```
fseek(hWoW, (long)OFFSET_STR_DISCORD_OVERLAY, SEEK_SET);
fwrite(DiscordOverlayDllStr, sizeof(DiscordOverlayDllStr), 1, hWoW);
```

Because editing a binary file is sometimes suspect for Antiviruses to pick up on.

Anyway, as already said by others, nobody has had issues after allowing the false positives. As soon as we can get our application signed everything will clear up on its own as there's no malicious code.

If you don't trust the team you're entitled to do so, I would wait until our patcher is signed.

