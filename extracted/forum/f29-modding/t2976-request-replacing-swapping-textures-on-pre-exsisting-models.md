---
title: "[Request] Replacing/swapping textures on pre-exsisting models."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2976"
topic_id: 2976
forum_id: 29
forum: "Modding"
author: "Silcrow"
author_authority: "player"
posted: "2022-05-03T00:46:00Z"
last_post: "2022-05-24T06:05:00Z"
post_count: 19
pages: 1
fetched: "2026-09-10T10:43:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Request] Replacing/swapping textures on pre-exsisting models.

## Post 18486 by Silcrow — 2022-05-03T00:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18486#p18486 | page 1 | era: pre-1.18.1 -->

So I've made a few edits to some textures from the game. But I cannot find a way to implement these modified textures. Every tutorial I can find is either about model editing or scripting. Neither of which I bet applies to a texture swap.

Is there a site I should check out for this topic? Or is there someone on here that can give me a decent tutorial or a simple guide on how to do this?

## Post 18488 by Allwynd01 (Bug Report Enthusiast) — 2022-05-03T09:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18488#p18488 | page 1 | era: pre-1.18.1 -->

Did you extract .MPQ files when you modified textures? You have to extract .MPQ files and then repackage them again. But it's a stupid endeavor and not worth the effort or time. I've done it and will never waste my time again.

## Post 18494 by Silcrow — 2022-05-04T05:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18494#p18494 | page 1 | era: pre-1.18.1 -->

> Did you extract .MPQ files when you modified textures? You have to extract .MPQ files and then repackage them again.

I extracted the .BLP's and converted them to .PNG. Don't know about repackaging .MPQ's.

## Post 18499 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-04T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18499#p18499 | page 1 | era: pre-1.18.1 -->

I can help with the repackaging process. We may be able to help each other out, depending on your know-how with BLPs.

Once you've converted a BLP into a PNG for editing, you need to convert it back into a BLP. The new BLP MUST have the same Signature, Compression (usually uncompressed), Format, Alpha channel, Header size, and mipmap count, AS WELL as having the same offeset and size in the mipmap table listed below it (assuming you're using BLP Lab).

It's the main reason I haven't been able to get new assets into the Turtle HD mod, is finicky BLP information. Once you've done all of that, you want to make a new MPQ (don't manipulate base MPQs, as that's just bad practice and makes version control harder) with the exact same directory structure where your new BLPs will go. Name the new MPQ something alphabetically after the latest base patches. Turtle uses patch-T, patch-U, and patch-V, so for my Turtle HD patches, I use patch-W, patch-X, and patch-Y.

## Post 18577 by Silcrow — 2022-05-11T02:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18577#p18577 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed May 04, 2022 5:22 pm**
> I can help with the repackaging process. We may be able to help each other out, depending on your know-how with BLPs.

Try these, they're not my edits but they don't look used.
[https://mega.nz/file/kIxlxbbL#Zy7WLOJNT ... msWPmxvt0I](https://mega.nz/file/kIxlxbbL#Zy7WLOJNTF0thItsKYb_KvqHvgdZDptpmmsWPmxvt0I)

## Post 18580 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-11T06:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18580#p18580 | page 1 | era: pre-1.18.1 -->

I would need to know what files you're looking to replace with these, and name them and place them in a directory structure accordingly.

## Post 18621 by Silcrow — 2022-05-14T04:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18621#p18621 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Wed May 11, 2022 6:50 am**
> I would need to know what files you're looking to replace with these, and name them and place them in a directory structure accordingly.

You're looking to replace the following:

item/objectcomponents/head/helm_plate_raidwarrior_b_01.blp
item/objectcomponents/shoulder/shoulder_plate_raidwarrior_b_01.blp
item/texturecomponents/armlowertexture/plate_raidwarrior_b_01_bracer_al_u.blp
item/texturecomponents/armlowertexture/plate_raidwarrior_b_01_glove_al_u.blp
item/texturecomponents/armuppertexture/plate_raidwarrior_b_01_sleeve_au_u.blp
item/texturecomponents/foottexture/plate_raidwarrior_b_01_boot_fo_u.blp
item/texturecomponents/handtexture/plate_raidwarrior_b_01_glove_ha.blp
item/texturecomponents/leglowertexture/plate_raidwarrior_b_01_boot_ll_u.blp
item/texturecomponents/leglowertexture/plate_raidwarrior_b_01_pant_ll_u.blp
item/texturecomponents/leguppertexture/plate_raidwarrior_b_01_belt_lu_u.blp
item/texturecomponents/leguppertexture/plate_raidwarrior_b_01_pant_lu_u.blp
item/texturecomponents/torsolowertexture/plate_raidwarrior_b_01_chest_lu_u.blp
item/texturecomponents/torsouppertexture/plate_raidwarrior_b_01_chest_lu_u.blp

There are extra upper torso's specific to each gender. But the textures to be replaced don't have those specifics. If everything goes right, the tier 2 warrior set Wrath should look different.

## Post 18622 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-14T06:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18622#p18622 | page 1 | era: pre-1.18.1 -->

I will test these when I get a chance and can find a Warrior with Tier 2 I can use as my runway model. Though I am noticing a problem that makes it difficult for me to convert the filenames.

> **Silcrow wrote: Sat May 14, 2022 4:12 am**
> item/texturecomponents/foottexture/plate_raidwarrior_b_01_boot_fo_u.blp
>  item/texturecomponents/leguppertexture/plate_raidwarrior_b_01_belt_lu_u.blp

I do not have files that seem to correlate to these in the package you provided. I moved 11 of the 13 files (which only needed to have "outlandpurple" removed from their filenames) into the respective folders for my test MPQ and discarded the other 2 which were the gender variants. However, I am still missing the two listed above. If you could provide the appropriate textures, then I could begin to test this.

## Post 18642 by Silcrow — 2022-05-16T02:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18642#p18642 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat May 14, 2022 6:21 am**
> > **Silcrow wrote: Sat May 14, 2022 4:12 am**
> > item/texturecomponents/foottexture/plate_raidwarrior_b_01_boot_fo_u.blp
> >  item/texturecomponents/leguppertexture/plate_raidwarrior_b_01_belt_lu_u.blp
>
>   I do not have files that seem to correlate to these in the package you provided. I moved 11 of the 13 files (which only needed to have "outlandpurple" removed from their filenames) into the respective folders for my test MPQ and discarded the other 2 which were the gender variants. However, I am still missing the two listed above. If you could provide the appropriate textures, then I could begin to test this.

This should include them. [https://mega.nz/file/AcYEmZpR#ejf-ydH7U ... LQUsvrkogg](https://mega.nz/file/AcYEmZpR#ejf-ydH7U6AWfKthNyHhZXpjVQp3nXMPtLQUsvrkogg)

## Post 18649 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-16T16:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18649#p18649 | page 1 | era: pre-1.18.1 -->

I've made the patch, and now it's just a matter of finding a T2-geared Warrior to test it out on. It's pretty simple to make this on your own, however. Simply get Ladik's MPQ Editor, open it up, create New MPQ, name it something like patch-Z.MPQ (for testing), and set the size to however many files you want to put in it.

Then just put the directory structure in (in this case Item\ObjectComponents\ and Item\TextureComponents\) with all the files in the proper places, and place the MPQ in your WoW's Data folder.

## Post 18724 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-20T11:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18724#p18724 | page 1 | era: pre-1.18.1 -->

Assuming you've had luck with this and want to try your hand at re-texturing yourself, hit me up.

## Post 18736 by Silcrow — 2022-05-21T01:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18736#p18736 | page 1 | era: pre-1.18.1 -->

Pass me a copy of the finalized patch and I'll check it out.

## Post 18746 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-21T18:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18746#p18746 | page 1 | era: pre-1.18.1 -->

It seems it's not as simple as I first thought, and may involve changing something in a DBC. Confounded that the colors weren't changing, I made a backup of patch.MPQ (official vanilla WoW MPQ), and stripped the files out of it, removed patch-Z.MPQ, and checked that no version of these files existed in any other MPQ. I even cleared cache.

STILL it displayed the Wrath set perfectly in game. So Wrath set may not be using the components we thought, and may be using one of the variants found in patch.MPQ, like _b_01black or the like. Are you certain about the filenames you gave me?

EDIT: Sure enough, that was the issue. Looking at the ItemDisplayInfo.dbc, the Wrath set actually uses _b_01Black for its textures, despite not being black at all. Updating the test patch and testing.

## Post 18747 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-21T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18747#p18747 | page 1 | era: pre-1.18.1 -->

The Helmet and Shoulders (ObjectComponents) work fine and give the deep purple, but the TextureComponents suffer from the same compression issue currently plaguing the black Night Elf hair in my HD patch. The compression attributes aren't the same as what they're replacing, so they won't ever display properly and randomly displays artifacts of different armor components.

Until this is resolved, the patch won't work.

## Post 18751 by Silcrow — 2022-05-21T21:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18751#p18751 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat May 21, 2022 7:07 pm**
> The Helmet and Shoulders (ObjectComponents) work fine and give the deep purple, but the TextureComponents suffer from the same compression issue currently plaguing the black Night Elf hair in my HD patch. The compression attributes aren't the same as what they're replacing, so they won't ever display properly and randomly displays artifacts of different armor components.
>
>  Until this is resolved, the patch won't work.

Try this one: [https://mega.nz/file/NEghXCJT#wCr4vS4fn ... 9MVA1GTGuQ](https://mega.nz/file/NEghXCJT#wCr4vS4fnAKPI7Hx0oYl1UrQCCwxsgVll9MVA1GTGuQ)

## Post 18767 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-22T06:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18767#p18767 | page 1 | era: pre-1.18.1 -->

Very curious. While the alpha channel and mipmaps don't line up perfectly with their counterparts, somehow these latest files work perfectly. If you can decipher the way to make these BLPs behave, perhaps I could enlist your help in getting existing problem BLPs for my HD patch working.

Here's the test patch: [https://www.mediafire.com/file/17w02h7n ... Z.MPQ/file](https://www.mediafire.com/file/17w02h7ncljcgmd/patch-Z.MPQ/file)

## Post 18810 by Silcrow — 2022-05-24T00:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18810#p18810 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sun May 22, 2022 6:24 am**
> Very curious. While the alpha channel and mipmaps don't line up perfectly with their counterparts, somehow these latest files work perfectly. If you can decipher the way to make these BLPs behave, perhaps I could enlist your help in getting existing problem BLPs for my HD patch working.
>
>  Here's the test patch: [https://www.mediafire.com/file/17w02h7n ... Z.MPQ/file](https://www.mediafire.com/file/17w02h7ncljcgmd/patch-Z.MPQ/file)

Tried my hand at black night elf hair. The source they want for any upper facial hair has to be a Palette-like file rather than an image. But it still has to be in blp format. So I got no idea if this will work or not. I have the feeling it won't.
[https://mega.nz/file/4QY1hTaS#u6jybTvRI ... _JWVCk752g](https://mega.nz/file/4QY1hTaS#u6jybTvRIgPTVt48vToC2C23Nq75_qvQv_JWVCk752g)

## Post 18811 by Redmagejoe (Grandmaster of Forum PvP) — 2022-05-24T03:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18811#p18811 | page 1 | era: pre-1.18.1 -->

I didn't try those out, but it looks like the old vanilla assets, which isn't what I need. If you'd like to try your hand at what I need help with currently, I've got an MPQ that contains the PNG versions of Crestian's (my now MIA artist) assets for black Night Elf hair, Frostsabre mount reskin, and blue High Elf eyes in the appropriate directory structure.

In this way, you would need only to try to convert the PNGs to a form of BLP that works (I've already done the BLP conversion but as stated before, they're buggy due to bad format or something) and put them in the same directories within the MPQ they're already in. In short, if you replace the PNGs with BLP versions, and rename this to patch-Z.MPQ, you can plug that into your Data folder and test them yourself to see if they work. This assumes you're using my patch-W.MPQ however; if you're not, just fire the test MPQ back to me and I'll test them on my end.

## Post 18815 by Silcrow — 2022-05-24T06:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=18815#p18815 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Tue May 24, 2022 3:26 am**
> I didn't try those out, but it looks like the old vanilla assets, which isn't what I need. If you'd like to try your hand at what I need help with currently, I've got an MPQ that contains the PNG versions of Crestian's (my now MIA artist) assets for black Night Elf hair, Frostsabre mount reskin, and blue High Elf eyes in the appropriate directory structure.
>
>  In this way, you would need only to try to convert the PNGs to a form of BLP that works (I've already done the BLP conversion but as stated before, they're buggy due to bad format or something) and put them in the same directories within the MPQ they're already in. In short, if you replace the PNGs with BLP versions, and rename this to patch-Z.MPQ, you can plug that into your Data folder and test them yourself to see if they work. This assumes you're using my patch-W.MPQ however; if you're not, just fire the test MPQ back to me and I'll test them on my end.

Yeah, I'll take a stab at these HD textures.

