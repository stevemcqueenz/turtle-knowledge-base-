---
title: "API floor"
url: "https://turtle-wow.fandom.com/wiki/API_floor"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T11:59:05Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["Lua functions"]
---
# API floor

# floor
## Usage
val = floor(value);

## Description
floor(value) returns the floor of the value (essentially it returns the whole part of the value) i.e. rounds value *down*

## Example
 > local x = floor(10.9);
 > = x
 10

 -- Rounding using floor()
 > local x = floor(value + .5)
