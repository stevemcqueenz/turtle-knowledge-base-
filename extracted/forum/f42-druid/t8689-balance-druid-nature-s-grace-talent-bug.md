---
title: "Balance druid : Nature's Grace talent bug"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8689"
topic_id: 8689
forum_id: 42
forum: "Druid"
author: "Komarac33"
author_authority: "player"
posted: "2023-08-06T05:18:00Z"
last_post: "2023-08-06T20:36:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:03:29Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Balance druid : Nature's Grace talent bug

## Post 55955 by Komarac33 — 2023-08-06T05:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55955#p55955 | page 1 | era: pre-1.18.1 -->

Nature's Grace global cooldown reduction is not working at all! Instant cast spell such as Moonfire or Insect Swarm don't even consume the buff, while wrath consumes and cast time is reduced but when you try to cast it again instantly it says that spell is not ready yet and then you cast 0.5 sec later wich should never be a thing therefore global cooldown reduction part of the spell is not working. Please fix this balance druid is weak as it is, this makes it even less enjoyable.

## Post 55959 by Ibux (Patch Note Conspiracy Theorist) — 2023-08-06T06:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=55959#p55959 | page 1 | era: pre-1.18.1 -->

> **Komarac33 wrote: Sun Aug 06, 2023 5:18 am**
> Nature's Grace global cooldown reduction is not working at all! Instant cast spell such as Moonfire or Insect Swarm don't even consume the buff, while wrath consumes and cast time is reduced but when you try to cast it again instantly it says that spell is not ready yet and then you cast 0.5 sec later wich should never be a thing therefore global cooldown reduction part of the spell is not working. Please fix this balance druid is weak as it is, this makes it even less enjoyable.

you need to post issues in the bug tracker. devs don't read the forums. [https://github.com/slowtorta/turtlewow- ... ker/issues](https://github.com/slowtorta/turtlewow-bug-tracker/issues)

## Post 56034 by Bigsmerf (Grandmaster of Forum PvP) — 2023-08-06T20:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56034#p56034 | page 1 | era: pre-1.18.1 -->

> **Komarac33 wrote: Sun Aug 06, 2023 5:18 am**
> Instant cast spell such as Moonfire or Insect Swarm don't even consume the buff

Isn't that a good thing though? It's supposed to reduce the cast time of a spell, so don't you think spells with no cast time should, you know... Not consume the buff?

## Post 56036 by Elesion (Patch Note Conspiracy Theorist) — 2023-08-06T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=56036#p56036 | page 1 | era: pre-1.18.1 -->

> **Bigsmerf wrote: Sun Aug 06, 2023 8:09 pm**
> > **Komarac33 wrote: Sun Aug 06, 2023 5:18 am**
> > Instant cast spell such as Moonfire or Insect Swarm don't even consume the buff
>
>   Isn't that a good thing though? It's supposed to reduce the cast time of a spell, so don't you think spells with no cast time should, you know... Not consume the buff?

For my part (as a healer) I also kind of like the way it works right now, but Komarac33 is right that it absolutely does not work as advertised. The first time I tried it out I was also baffled by it. I ended up concluding it was broken (and gradually came to appreciate that I could throw out a Reju and still preserve Nature's Grace for a Healing Touch which is a lot more useful).

The talent's description is "All spell criticals grace you with a blessing of nature, reducing the casting time and global cooldown of your next spell by 1 sec." If you read the first post carefully, the complaint is about the "and global cooldown" portion, which simply does not appear to happen in-game. GCD is 1.5s, so the wording makes me expect that with Nature's Grace up I'd be able to throw out an instant and then start the next spell 0.5s later due to reduced GCD. Instead the instant happens normally, the GCD of 1.5s happens normally and when I then start a spell with cast time it gets reduced and consumes the buff.

I'm not really into Balance and in most cases with instant spells it should work out to be the same (whether you spend the 1s waiting on the GCD after the instant and reduce the cast-time of the next spell, or whether you get a reduced GDC after the instant but spend 1s longer on the spell cast). I guess the usecase for the "fixed" version is if your instant is Moonfire and it happens to crit? Then you'd could actually save 2s instead of wasting the buff.
The real problem appears to be Wrath as mentioned in the opening post. Wrath has a cast time of 2s, which gets reduced to 1.5s from talents. So Wrath cast time is the same as GCD. But per Komarac33's complaint Wrath seems to consume Nature's Grace, reduce the cast time and then make you wait on the GCD to finish, which absolutely does seem broken to me.

