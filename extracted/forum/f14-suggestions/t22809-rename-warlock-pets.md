---
title: "Rename Warlock Pets"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22809"
topic_id: 22809
forum_id: 14
forum: "Suggestions"
author: "Coenred"
author_authority: "player"
posted: "2025-11-10T18:11:00Z"
last_post: "2026-03-05T18:50:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T11:02:04Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rename Warlock Pets

## Post 159096 by Coenred — 2025-11-10T18:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159096#p159096 | page 1 | era: 1.18.1-announced-pre-release -->

A simple request to have an NPC or some other feature, maybe a purchased item, that lets Warlocks re-randomize their pet names. It might even get more expensive the more times you do it like talent changes, I don't care, it would just be a Godsend to not have to re-cycle Warlocks constantly in the hopes of getting good names for my pets...

## Post 159369 by Coenred — 2025-11-12T15:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159369#p159369 | page 1 | era: 1.18.1-announced-pre-release -->

Returning this post to the top of the page

## Post 159585 by Wez0 (Patch Note Conspiracy Theorist) — 2025-11-14T12:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159585#p159585 | page 1 | era: 1.18.1-announced-pre-release -->

custom name tbh

## Post 159588 by Atreidon (Grandmaster of Forum PvP) — 2025-11-14T13:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159588#p159588 | page 1 | era: 1.18.1-announced-pre-release -->

Custom naming, but you can only pick from the nametable of felguards in tbc!

## Post 159698 by Akarui (Patch Note Conspiracy Theorist) — 2025-11-15T18:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159698#p159698 | page 1 | era: 1.18.1-announced-pre-release -->

or at least reset this name for another random. My demons sounds rude on my language. imp`s name - is a rude name for gay, void - sounds like greedy as sht.

## Post 159875 by Guthrhin — 2025-11-17T06:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=159875#p159875 | page 1 | era: 1.18.1-announced-pre-release -->

Demon trainers should have the option. This has been requested many times! I'd like to see extra dialogue and require the player to break the contract with its demon before gaining another. No custom names, each demon type has a set of prefixes and suffixes that they roll.

## Post 169073 by Caredup — 2026-02-20T22:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169073#p169073 | page 1 | era: 1.18.1-announced-pre-release -->

Bumping this. This shouldn't be a big deal but it's such a small change that'd make a huge QoL improvements to people with some range of OCD with weird names like "Charthang" while some other voidwalkers are out there named stuff like "Grimgrave". It drives me irrationally mad. Get us some 'abandon demon', 'dismiss contract' or something to justify it lorewise if that is the one thing stopping this change from happening.

## Post 169093 by Sleeplust (Patch Note Conspiracy Theorist) — 2026-02-21T07:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169093#p169093 | page 1 | era: 1.18.1-announced-pre-release -->

This would not influence balance. If hunters can name their pets, warlock, as the enslaver of demons, should have this right. People do care about pets' names. Similar gaming inclination should be understood and legitimised by community and mechanism.

Additionally, if renaming the demon or having a pact with a new one, replacing the old one, is allowed, should demon leveling as hunter's pet does be considered reasonable in lore?

*Last edited by Sleeplust on Sun Feb 22, 2026 7:06 am, edited 2 times in total.*

## Post 169101 by Sinrek (Grandmaster of Forum PvP) — 2026-02-21T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169101#p169101 | page 1 | era: 1.18.1-announced-pre-release -->

Yes. Randomised names are sometimes just absolute wack and there should be an option to reset it. I'd even agree on some tedious quest for that.

*Last edited by Sinrek on Sun Mar 01, 2026 11:36 am, edited 1 time in total.*

## Post 169127 by Caredup — 2026-02-21T15:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169127#p169127 | page 1 | era: 1.18.1-announced-pre-release -->

Bumping this with some quick amateur coding details I could gather... If turtle's core is MaNGOS-based, the restriction is just one if-check in HandlePetRename. Hunters can rename because their pets are PetType == HUNTER_PET.

______________________________

void WorldSession::HandlePetRename(WorldPacket &recv_data)
{
// ... parse petguid, name

Pet *pet = ObjectAccessor::GetPet(petguid);
if (!pet || !pet->isPet() || pet->getPetType() != HUNTER_PET ||  // <-- Blocks Warlocks here
pet->GetByteValue(UNIT_FIELD_BYTES_2, 2) != UNIT_RENAME_ALLOWED ||
pet->GetOwnerGUID() != _player->GetGUID() || !pet->GetCharmInfo())
return;  // Silent fail

// Validates name, updates DB (character_pet.name), broadcasts
}

______________________________

enum PetType
{
MINI_PET        = 0,
HUNTER_PET      = 1,  // Only these pass
MAX_PET_TYPE    = 2
};
______________________________

Warlocks demions create MINI_PET type, failing the check because there is no client UI for Warlocks. A simple fix could be:

Full Rename: Change check to pet->getPetType() == HUNTER_PET || _player->getClass() == CLASS_WARLOCK.
or
Re-roll demon name sufixes and prefixes: At trainer, add option: "Break Contract/Sacrifice Demon/Abandon Pet/etc" generate new random name and update DB like retail has it.

Pwetty pwease devs   sad_turtle_head

## Post 169180 by berdal (Barrens Chat Casualty) — 2026-02-22T09:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169180#p169180 | page 1 | era: 1.18.1-announced-pre-release -->

> **Coenred wrote: Mon Nov 10, 2025 6:11 pm**
> A simple request to have an NPC or some other feature, maybe a purchased item, that lets Warlocks re-randomize their pet names. It might even get more expensive the more times you do it like talent changes, I don't care, it would just be a Godsend to not have to re-cycle Warlocks constantly in the hopes of getting good names for my pets...

Hi, Jackcrack

## Post 169579 by Caredup — 2026-02-28T08:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169579#p169579 | page 1 | era: 1.18.1-announced-pre-release -->

hmm..

## Post 169662 by Sinrek (Grandmaster of Forum PvP) — 2026-03-01T11:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=169662#p169662 | page 1 | era: 1.18.1-announced-pre-release -->

Come on, this is a no brain improvement with almost no downside.

## Post 170160 by Sinrek (Grandmaster of Forum PvP) — 2026-03-05T18:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=170160#p170160 | page 1 | era: 1.18.1-announced-pre-release -->

I think a vendor with either gold and soulstones or soulstones and some quest item you could only gain from draining mobs along with the soul drain spell might have been a good decision.

