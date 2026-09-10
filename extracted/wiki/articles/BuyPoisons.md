---
title: "BuyPoisons"
url: "https://turtle-wow.fandom.com/wiki/BuyPoisons"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-12-15T13:05:29Z"
fetched: "2026-09-10T07:38:28Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# BuyPoisons

**BuyPoisons** simplifies the process of buying poison components and restocking Flash Powder, saving rogues time and effort.

## How to Install
**GitAddonsManager**

The easiest way to keep **BuyPoisons** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: https://github.com/sica42/TWBuyPoisons.git
# **Select the Branch:** Ensure that the master branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your <code>TWow/Interface/AddOns</code>
# Rename the TWBuyPoisons-master folder to TWBuyPoisons

## Git Links
- [**(sica42)**](https://github.com/sica42/TWBuyPoisons)
- [**(TheNuclei)**](https://github.com/TheNuclei/TWBuyPoisonsJin)
- [(**wierdthing)**](https://github.com/wierdthing/TWBuyPoisons)

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/bp wpX Y</code>
|Buy Wound Poison components level X, quantity Y
|-
|<code>/bp cpX Y</code>
|Buy Crippling Poison components level X, quantity Y
|-
|<code>/bp dpX Y</code>
|Buy Deadly Poison components level X, quantity Y
|-
|<code>/bp mpX Y</code>
|Buy Mind-numbing Poison components level X, quantity Y
|-
|<code>/bp ipX Y</code>
|Buy Instant Poison components level X, quantity Y
|-
|<code>/bp ap1 Y</code>
|Buy Agitating Poison, quantity Y
|-
|<code>/bp fp Y</code>
|Buy Flash Powder, quantity Y
|-
|<code>/bp rfp Y</code>
|Enable auto restock of Flash Powder (Y = amount)
|-
|<code>/bp rfp 0</code>
|Disable auto restock of Flash Powder
|-
|<code>/bp ui</code>
|Show the Poison Purchase UI
|}

## Preview
## Important Info
- **Stacking:** Purchase in stacks of 5 where applicable. Non-multiple of 5 may not work correctly with vial handling.
- **Multiple Rogues:** The addon supports multiple rogue profiles; no need to specify rogue names manually.
- **Vendor Compatibility:** Works with poison vendors and vendors selling Flash Powder.
- **Supported** **Languages**: English, French, and German.

## Version
Version History Highlights

- **4.4:** Fixed issues with Crippling Poison 2, added <code>/bp force</code> to force UI opening, improved non-English support.
- **4.3:** Fixed loading bugs, completed German localization.
- **4.2:** Updated slash commands, increased purchase stacks to 20, made poison window movable.
- **4.1:** Removed broken config window.
- **4.0:** Added multiple rogue support, updated for patch 1.10, included Deadly Poison V.
- **3.10:** UI toggle with <code>/bp ui</code>, auto restock Flash Powder.
- **3.05b:** UI improvements, only shows for rogues, stacks of 5 for Flash Powder.
- **3.03b:** Fixed stack size issues, relaxed vial conservation.
- **3.00b:** Introduced UI for buying poisons from vendors.
