---
title: "LunaUnitFrames"
url: "https://turtle-wow.fandom.com/wiki/LunaUnitFrames"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-04-06T08:59:06Z"
fetched: "2026-09-10T07:39:11Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# LunaUnitFrames

LunaUnitFrames is a lightweight unit frames add-on made with a modern look.

## How to install
# Visit the GitHub link you find, then click the green **<> Code** button, and select Download ZIP.
# Use [7zip](https://www.7-zip.org/) to extract the zip into your TWow/Interface/AddOns
# Rename the LunaUnitFrames-master folder to LunaUnitFrames
# Restart the game

## Git links
- [**(marcelinevq)**](https://github.com/MarcelineVQ/LunaUnitFrames) - superwow enhanced version
- [**(gnwl)**](https://github.com/gnwl/LunaUnitFrames/tree/TurtleWoW) - normal version

## Preview
Player & Target:

Raid Frames:

## Highlights:
- An amazing tag system lets you completely customize the text being displayed.
- A huge selection of bar textures and fonts to choose from.
- Buff timers. (for your own).
- Totem timers.
- Shows your mana while in cat / bear form.
- XP and Reputation Bar.
- You can reset instances via the right click menu.
- All bars are position-able in a custom order. You can make the portrait into a bar too or disable it.
- Enemy cast-bar.
- Predicts incoming heals on you, your target, party and raid (also shows other people if they have this add-on).
- Shows incoming resurrections from cast start till the accept window expires.
- Range checker for the party and raid.
- Energy ticker.
- The fastest health-bars of all the raid-frames out there.
- Raid-frames show units with aggro by an indicator.
- Click casting interface (no 3rd party add-on required).
- Mouseover casting system: Use **/lunamo** or **/lunamouseover** followed by your spell of choice to make the macro behave like a normal spell button on your bar but when you are over a frame it casts on that target.
  -Example:**<syntaxhighlight lang="lua">
/script if nil then CastSpellByName("Greater Heal(Rank 1)") end
/lunamo Greater Heal(Rank 1)
</syntaxhighlight>The first line in this macro is equal to a '#show' you might know from live WoW. With this, bar addons that color your bar depending on if you have the mana for the spell will pick it up even though its a macro. Its optional.

## FAQ
  -Q:** After downloading your add-on doesn't show up in the game.

  -A:** Please remove the "-master" from the folder name.

  -Q:** How do i open the configuration?

  -A:** Try **/luf** **/luna** or **/lunaunitframes**

  -Q:** How do i move stuff?

  -A:** There is an unlock button in the configuration. Raid-frames are moved by dragging their text (GRP1 etc).

  -Q:** Can i have spinning timers on anything other than player?

  -A:** No, not possible with the vanilla client. There could be unreliable timers but I'm not gonna do that.

  -Q:** Why can't i see health values for enemy's?

  -A:** As stated above you have to install [**MobHealth3**](https://github.com/Paparogue/MobHealth3-Kronos3-Edition). If you have installed it correctly you should see HP numbers after the mob lost 10% health. By default MobHealth3 doesn't save its data between sessions so you would have to wait those 10% again after re-logging / reloading UI.

  -Q:** How do i turn off portraits?

  -A:** Turn portrait to bar -> Choose portrait from the second drop-down -> move the slider below that drop-down all the way to the left.

  -Q:** I am getting tons of LUA errors!

  -A:** If you get LUA errors please post something like a report from **[ImprovedErrorFrame](https://legacy-wow.com/vanilla-addons/improved-error-frame/)** and what you were doing at the time. Or anything else that might help to describe the issue.
