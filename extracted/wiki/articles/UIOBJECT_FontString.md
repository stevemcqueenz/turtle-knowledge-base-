---
title: "UIOBJECT FontString"
url: "https://turtle-wow.fandom.com/wiki/UIOBJECT_FontString"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:42:00Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# UIOBJECT FontString

# FontStrings and anchor points, GetHeight() and SetHeight()

FontString objects behave a little differently where SetHeight(), GetHeight(), SetWidth() and GetWidth() are concerned.

Neither of them necessarily directly work with the area used to paint the fontstring. Rather, they're used to compute what dimensions are needed in one direction, given the size in the other direction.

## Anchoring 1 corner

Let's assume we have a frame that is 100x100, and that we anchor our fontstring to the topleft corner only, and tell it to display a sizeable chunk of text in a 10 point font, that is ~250 pixels long if nonwrapped (i.e. [GetStringWidth()](API FontString GetStringWidth) would return 250).
{| style="background-color: transparent;"
|
- The text runs off as far as it needs to.
- GetWidth() will return 250, the same as GetStringWidth()
- GetHeight() will return 10
|}
Now, if we explicitly SetWidth(100), the following happens:
{| style="background-color: transparent;"
|
- The output is clamped to 100 pixels wide
- GetWidth() will always return return 100 no matter how much text there is
- GetHeight() will return 40 (it needed 4 lines to display the entire text)
|}
And if we add a SetHeight(20), it will do what we expect:
{| style="background-color: transparent;"
|
- The output is clamped to 100 pixels wide and 20 pixels high
- GetWidth() will always return 100 no matter how much text there is
- GetHeight() will always return 20 no matter how much text there is
|}
So far, no real surprises, except for the fact that fontstrings will display without a width and height set, while other objects do not. The fun starts when we anchor more points.

## Anchoring more points

When you control the dimensions by anchoring more than one point, the drawn text will obey your points. But GetWidth() and GetHeight() continue to operate in their own little world.
{| style="background-color: transparent;"
|
- The output gets clamped to 100 pixels wide by the anchor points
- GetWidth() will return 250 (**!**)
- GetHeight() will return 10 (**!**)
|}
Doing SetWidth(100) will result in:

- The output remains clamped to 100 pixels wide **by the anchor points**
- GetWidth() will return 100
- GetHeight() will return 40

Doing SetWidth(50) will result in:

- The output remains clamped to 100 pixels wide **by the anchor points**
- GetWidth() will return 50
- GetHeight() will return 80 (or something)

Adding a SetHeight(20) will result in:

- The output remains clamped to 100 pixels wide **by the anchor points**
- Only the two first lines display (text is truncated)
- GetWidth() will return 50
- GetHeight() will return 20

If we anchor all sides (e.g. add a "BOTTOM" anchor to the previous fontstring, or change the "TOPRIGHT" to a "BOTTOMRIGHT"), SetWidth() and SetHeight() completely cease to have any effect whatsoever on the output. All output will obey the anchoring points.

However, calling SetWidth() with your object's actual width (which you can't get via GetWidth()!), and calling GetHeight() will still tell you how high the object actually needs to be.

Note that you can never completely *un*-set a width or height once set. You can *change* it, but if you want to completely clear it to have WoW start returning computed values for you, you need to create a new fonstring or reload the UI. (At least at the time of this writing, july 2006, version 1.11.2).
