---
title: "Texture patch that makes some plants more visible in heavy-foliage environments (description inside)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4109"
topic_id: 4109
forum_id: 29
forum: "Modding"
author: "Chnams"
author_authority: "player"
posted: "2022-09-09T19:34:00Z"
last_post: "2022-09-22T14:50:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:43:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Texture patch that makes some plants more visible in heavy-foliage environments (description inside)

## Post 24740 by Chnams (Barrens Chat Casualty) — 2022-09-09T19:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=24740#p24740 | page 1 | era: pre-1.18.1 -->

Hi, I've been levelling Herbalist lately, and I've come to realize that some plants are really insanely difficult to spot among the environmental foliage. For example, look at this
[embed: https://s9e.github.io/iframe/2/imgur.min.html#a/Jw9lMuW]

and tell me if you can see the Liferoot. It's in front of me and a bit to the left. Took me a solid minute swishing my cursor everywhere until I found the exact spot it was on. Hell, I've picked it while I was writing this post and now I can't spot it on the screenshot anymore. This is a common issue with some plants like Liferoot, Fadeleaf, and I'm sure many others (these are just the two main ones I'm encountering at my level that cause me issues, things like Purple Lotus and Khadgar's Whisker are a lot better already).

So here's my question as the title says. Does anyone know of a mod that makes these plants stand out a bit more from the environment? If so, would that mod be allowed by Turtle WoW's rules? I've read that in the old Vanilla days there existed a mod that replaced the mining and herb nodes with crates for better visibility. Obviously, this is very cheaty and that's not what I want (and it used dll injections so basically cheating), but it shows that the concept is at least feasible.

Does anyone know if it's possible and doable on turtle WoW? I would love to not have to strain my eyes scanning green on top of green for the damn plants. Yes, I could also lower foliage density, but I would prefer not to, as the environment becomes quite ugly with minimal foliage.

 **EDIT:** I have created a patch for this issue: <https://www20.zippyshare.com/v/GUsKuVDc/file.html>
See my other comment for a description on what changed.

*Last edited by Chnams on Thu Sep 22, 2022 2:52 pm, edited 1 time in total.*

## Post 25102 by Kaspah420 — 2022-09-15T13:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25102#p25102 | page 1 | era: pre-1.18.1 -->

I agree, they are incredibly hard to spot sometimes, I've been wondering if there was a mod for it too

## Post 25683 by Chnams (Barrens Chat Casualty) — 2022-09-21T17:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25683#p25683 | page 1 | era: pre-1.18.1 -->

Alright, so I've tinkered around a bit with the game files and I found a way to make herbs high-contrast by turning their textures either blue or hot pink/red (adjustments will have to be made later). The result is quite good in my opinion, see screenshot in spoiler: ![Image](https://cdn.discordapp.com/attachments/988866055222984744/1022091217066012752/unknown.png)

but now I have to know if the Turtle devs are okay with such game modifications, as it *could* be considered cheaty. I personally don't think it gives any advantage whatsoever to have high-contrast plants (it could also help out colorblind people too), but maybe someone else has another opinion on that.

If I do get the devs' approval, I will finish working on all the plants that I feel deserve the high-contrast treatment and share the game patch :)

## Post 25751 by Chnams (Barrens Chat Casualty) — 2022-09-22T14:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25751#p25751 | page 1 | era: pre-1.18.1 -->

So, I have asked turtle devs and it *seems* to be okay, as I don't believe it gives any in-game advantage over other players to use such a mod. After all, you still need the proper Herbalism level to pick the plants, it doesn't really let you see them from further away either (since you have plants tracking for that anyway), it just helps distinguish them from the foliage instead of having to swing your cursor around until the cogwheel appears.

So I will share the patch I'm using: <https://www20.zippyshare.com/v/GUsKuVDc/file.html>

The herbs that I have modified to be more visible are:

 - Blindweed
 - Golden Sansam
 - Khadgar's Whisker
 - Steelbloom
 - Goldthorn
 - Sungrass

I would've liked to modify Fadeleaf as well but I can't seem to find its texture in the game files. If someone can find them, do tell so I can modify the patch. Any other herbs that aren't edited, it's either because I believe that they are already easy to see (briarthorn, mageroyal, kingsblood, ghost mushroom, etc), they already contrast a lot compared to the environment that they are found on (stranglekelp/firebloom on sand, wintersbite/dreamfoil/silversage on snow, etc), or I just haven't found the file to modify it (fadeleaf + possibly some others).

Keep in mind that this patch will probably affect your immersion a bit considering it gives the mentioned herbs a bright blue/red color in order for them to wildly contrast with their environment. I can try to make it less vile to the eye while still making them more visible, but frankly, I'm no artist and I wouldn't really know where to begin with that. I can, however, try making a colorblind-friendly version of this mod as currently the offending plants are either blue/pink or red which might not suit colorblind people? Honestly I don't know much about colorblindness, but if this is an issue for you, feel free to reach out to me!

