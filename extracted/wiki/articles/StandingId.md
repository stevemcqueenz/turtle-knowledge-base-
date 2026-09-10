---
title: "StandingId"
url: "https://turtle-wow.fandom.com/wiki/StandingId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T07:50:24Z"
fetched: "2026-09-10T07:39:41Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# StandingId

These numeric values are used to indicate how a player is perceived by a specific faction.

## Values
** <code>0</code> - Unknown**

** <code>1</code> - Hated**

** <code>2</code> - Hostile**

** <code>3</code> - Unfriendly**

** <code>4</code> - Neutral**

** <code>5</code> - Friendly**

** <code>6</code> - Honored**

** <code>7</code> - Revered**

** <code>8</code> - Exalted**

These values are defined globaly by the FACTION_STANDING_LABEL(x) variables. Probably locale specific.

It's better to use them instead of relying on the hardcoded values above.

## Example
 /script x=4; temp=getglobal("FACTION_STANDING_LABEL".x); message(temp);
Gives the message "Neutral".

## Notes
The API page from which this was moved credits Saien with providing the first documentation on these numbers.
