---
title: "Shootyepgp"
url: "https://turtle-wow.fandom.com/wiki/Shootyepgp"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-03-16T13:36:00Z"
fetched: "2026-09-10T07:39:37Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# Shootyepgp

Guild Helper add-on for Effort Points/Gear Points Loot System used on TWoW.

## Git Links
[**(wierdthing)**](https://github.com/wierdthing/shootyepgp-ret) - maintained by Wierdthing for the Tel'Abim guild Ret.

## How to Install
- Go to <nowiki>https://github.com/wierdthing/shootyepgp-ret</nowiki>
- Click Code -> Download Zip
- Extract the ZIP file
- Place the folder into your Addons folder
- Rename the folder from "shootyepgp-ret-master" to "shootyepgp"
- To confirm it works, login and do /ret roll, you should see your character call the roll with the EP you have.

  -If it doesn't work**

- Exit the game
- Delete you WDB folder
- Go into wow\WTF\Account\ACCOUNTNAME\SavedVariables
- find and delete shootyepgp.lua and shootyepgp.lua.bak

I think those are not necessary but might be.

- Go into wow\WTF\Account\ACCOUNTNAME\SERVER\CHARACTERNAME\SavedVariables
- find and delete shootyepgp.lua and shootyepgp.lua.bak

## Commands
{| class="fandom-table"
!Function
!Description
|-
|/ret roll 
|Mainspec roll
|-
|/ret sr 
|Soft-reserve roll
|-
|/ret dsr 
|Double soft-reserve roll
|-
|/retcsr 
|Cumulative soft-reserve roll)
|-
|/ret ep 
|Check your EP if you are a PUG
|-
|/shooty offspec
|Print Offspec Price.
|-
|/shooty progress
|Print Progress Multiplier
|-
|/shooty restart
|Restart shootyepgp if having startup problems
|-
|/shooty show
|Show Standings Table.
|-
|/shooty profile
|[Default] Set profile for this addon
|-
|/shooty standby
|[Active] Suspend/resume this addon
|-
|/shooty debug
|[Off] Enable/disable debugging 
|-
|/shooty about
|Print out addon info
|}

Right-click on mini-map or FuBar shootyepgp icon will show all available settings. Left-click shows the standings window with everyone's EP, GP and PR values. The standings window can also be toggled with **/shooty show** chat command.

## Setup
Shootyepgp requires some modifications to guild permissions for officer notes by the guild leader.

- Officer notes must be set to visible by all and editable **only** by the EPGP admins (eg. officer rank+).
- Public notes are not in use by the add-on.
Basics and help wiki: [Link](https://github.com/Road-block/shootyepgp/wiki)

## Preview
  -Standings**

  -Roll Menu**

## Tips
Create a new chat-frame (right-click > create new window on chat tab) and name it <code>debug</code> (capitalization doesn't matter). Most of the information messages will now print on that frame and not clutter your default chat-frame.

## Features
- EPGP standings list (all)
- Simple chatlink click to bid on items (all)
- Item Bids list (admin/ML)
- Item GP prices on item tooltips (all)
- Export standings to csv (all)
- Configurable EPGP Decay (admin)
- Configurable Offspec discount (admin)
- Guild Progression multiplier (admin)
- Reserves - *standby list EP* - with alts support (admin and all)

Addon has been designed so that basic member functionality is usable even without the addon.

- <code>/w <masterlooter name> +</code> (for main spec) or <code>/w <masterlooter name> -</code> (for off spec) after the loot officer links a piece of loot and asks for bids in raid chat.
- Type <code>/x +</code> (where x is the number of the custom channel) or <code>/x +MainName</code> if on an alt to respond to a standby list afk check. Having the addon makes everything more convenient, but is not mandatory.

## FAQ
Q. What is EP?

  -A.** Effort Points (EP) are given for participating in raids. The EP number shows that player's activity. Higher EP = more active player. Seniority - how long a player has been in the EPGP system - also plays a part but is controlled by decay. Total EP can never go negative.

Q. What is GP?

  -A.** Gear Points (GP) are given for receiving loot in raids. The GP number shows the amount of loot that player has received. Higher GP = player has gotten more loot. Total GP can never go below baseGP.

Q. What is PR or EPGP?

  -A.** Priority Rating (PR) is the quotient or ratio found by dividing EP with GP <code>PR = EP/GP</code>. This is the number that defines the player's order in line of receiving loot versus other players. Higher PR wins over lower PR. Effort Points as the divident (numerator) and Gear Points as the divisor (denominator) means: Players that are more active (higher EP) and have gotten less loot (lower GP) have higher priority. BaseGP ensures that the divisor is never 0 and that new members or long inactive members don't get a very high priority upon joining.

Q. What is Decay?

  -A.** Periodically the EPGP admin will apply decay to everyone's EP and GP values, reducing them by a set percentage. Since both values are reduced by the same fraction the PR remains the same but the next EP or GP added will have a larger effect. The reason for decay is so that old activity and gear received are not worth as much as new ones. In other words it promotes attendance but also allows a player that has gotten some high value items to catch up again over time.

Q. What are the effects of a high / low Decay?

  -A.** A low Decay makes it harder for new members joining the team to catch up to veterans.

A high Decay makes past efforts lose their value rapidly, and has the opposite effect: veterans do not have a big advantage to newcomers. The effect of Decay can be mitigated by staying active and is tuned to fit the guild's goal for minimum attendance.

Q. Why is "Uber sword of L33t" so expensive (high GP)? Why is "Meh belt of Holy Resistance" so cheap (low GP)?

  -A.** The relative value of items is derived by several factors.

# Item stat budget (a combination of the item's quality, level and slot)
# Item desirability. How good it is for x or y class and spec. How does it compare to other items in that slot across tiers.
# Item scarcity and source. What's the % drop. Does it drop from a difficult boss or trash?.
# Guild policy. Does the guild want to encourage for example resistance gear acquisition? Lower price on resistance gear.

Generally speaking a high GP value on highly desirable, low dropchance and high value items discourages "casual bidding". Only classes/specs that really need it will bid on it, everyone else will "think twice". A good price-list helps the system work automatically without officers having to step in often to veto bad decisions.

Q. What is Off-spec GP?

  -A.** Items bid on during an off-spec / greed call by the master-looter will cost a percentage of their full price when won.

This can be any fraction or even 0 (free). It depends on how much the guild wants to encourage off-spec gearing.

Q. Is there an EP or GP Cap?

  -A.** The cap in EPGP is not a fixed number but depends on the maximum amount of EP or GP that can be earned in a decay cycle versus the % decay applied at the end of the cycle. For example if there is a weekly decay of 15% in place the new EP and GP value after decay is applied becomes <code>oldEP * 0.85, oldGP * 0.85</code> then if a player can earn a maximum of 700 EP with 100% attendance the EP will cap out at <code>X * 0.15 = 700 => X = 700/0.15 => X = 4667 EP</code>.

At 4667 points any EP earned in the week will be lost to decay at the end of it.

Q. What is tier pricing?(raid tiers, not class sets)

  -A.** Guild can opt to adjust both EP awarded and GP of items in previous raids when progressing into a higher tier. This is to ensure that players are not discouraged from bidding on lower instance items for fear of losing out on higher tier priority and on the flip side that players will not try to "farm EP" in easier lower tier instances to use it for winning gear on harder higher tier instances. It keeps the relative value of efforts and rewards in check.

Q. Are there items out of EPGP?

  -A.** This is a matter of guild policy. Raid craftable materials and patterns, Class Quest Items, or specific guild-wide effort items might be exempt from EPGP and decided by Loot Council or Class Leaders. (eg. drops related to Thunderfury, Sulfuras, Rhok'delar, Benediction, Head, Heart etc).

## Contributors
- Roadblock (Author)
- [wierdthing](https://github.com/wierdthing) (Changes for Ret)
