---
title: "Malaware found?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22541"
topic_id: 22541
forum_id: 3
forum: "Help & Support"
author: "Baubau1980"
author_authority: "player"
posted: "2025-10-23T16:31:00Z"
last_post: "2025-11-28T22:04:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:38:08Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Malaware found?

## Post 156742 by Baubau1980 — 2025-10-23T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156742#p156742 | page 1 | era: 1.18.1-announced-pre-release -->

So, my launcher is trying to update game files and I get several warnings from my Avast antivirus that some malaware is found in the nampower.dll file. And the launcher itself gives this message:

[RUST] resumable_fetch [final] "[https://turtle-eu.b-cdn.net/client/3689 ... mpower.dll](https://turtle-eu.b-cdn.net/client/368985C6F62CEB2311B913565F7E8B461BCCAA0D30424FC76D6E736B1214AAF4/nampower.dll)": Operation did not complete successfully because the file contains a virus or potentially unwanted software. (os error 225)

Antivirus is putting those file in quarantine, so I can't play right now.

What am I supposed to do?

## Post 156744 by Catyngla (Barrens Chat Casualty) — 2025-10-23T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156744#p156744 | page 1 | era: 1.18.1-announced-pre-release -->

Reinstall Twow and put the file/folder to the exception list.

These alerts are for potentially unwanted programs/software, which is a feature from antivirus, scanning programs behaviour and using algorithm to detected not yet known viruses/malwares/etc. These DLLs are doing a lot hacking to get the vanilla client wow.exe with more options, working on higher resolution, etc. which can be viewed as malwares by antiviruses.

Specifically for nampower.dll, it helps with latency (<https://github.com/namreeb/nampower>)

## Post 156816 by Baubau1980 — 2025-10-24T06:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156816#p156816 | page 1 | era: 1.18.1-announced-pre-release -->

I appreciate your response, but you did not read what I wrote.

It's the launcher itself that says there's a virus.

## Post 156818 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-10-24T06:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156818#p156818 | page 1 | era: 1.18.1-announced-pre-release -->

> **Baubau1980 wrote: Thu Oct 23, 2025 4:31 pm**
> So, my launcher is trying to update game files and I get several warnings from my Avast antivirus that some malaware is found in the nampower.dll file. And the launcher itself gives this message:
>
>  [RUST] resumable_fetch [final] "[https://turtle-eu.b-cdn.net/client/3689 ... mpower.dll](https://turtle-eu.b-cdn.net/client/368985C6F62CEB2311B913565F7E8B461BCCAA0D30424FC76D6E736B1214AAF4/nampower.dll)": Operation did not complete successfully because the file contains a virus or potentially unwanted software. (os error 225)
>
>  Antivirus is putting those file in quarantine, so I can't play right now.
>
>  What am I supposed to do?

Hi. Judging by the data you have provided your antivirus is reacting to nampower.dll which is a .dll injector that allows you to improve the process of spell casting in the 1.12 client
It is neither a virus nor a trojan. Any .dll injector can be falsely detected as a virus.
I advise you to update your antivirus databases.

## Post 156820 by Baubau1980 — 2025-10-24T07:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156820#p156820 | page 1 | era: 1.18.1-announced-pre-release -->

Thanks, I'll do

## Post 161029 by Korythael — 2025-11-28T22:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=161029#p161029 | page 1 | era: 1.18.1-announced-pre-release -->

> **Pepesmite wrote: Fri Oct 24, 2025 6:54 am**
> > **Baubau1980 wrote: Thu Oct 23, 2025 4:31 pm**
> > So, my launcher is trying to update game files and I get several warnings from my Avast antivirus that some malaware is found in the nampower.dll file. And the launcher itself gives this message:
> >
> >  [RUST] resumable_fetch [final] "[https://turtle-eu.b-cdn.net/client/3689 ... mpower.dll](https://turtle-eu.b-cdn.net/client/368985C6F62CEB2311B913565F7E8B461BCCAA0D30424FC76D6E736B1214AAF4/nampower.dll)": Operation did not complete successfully because the file contains a virus or potentially unwanted software. (os error 225)
> >
> >  Antivirus is putting those file in quarantine, so I can't play right now.
> >
> >  What am I supposed to do?
>
>  Hi. Judging by the data you have provided your antivirus is reacting to nampower.dll which is a .dll injector that allows you to improve the process of spell casting in the 1.12 client
>  It is neither a virus nor a trojan. Any .dll injector can be falsely detected as a virus.
>  I advise you to update your antivirus databases.

I updated Nampower and UnitXP3 today from the launcher. Now, besides downloading the DLLs, the launcher also downloads some addons, and MS Defender flags Nampower as a dangerous trojan. Before this update it didn’t flag anything. Is it still safe to use Nampower?

