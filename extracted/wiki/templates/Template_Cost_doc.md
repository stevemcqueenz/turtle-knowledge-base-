---
title: "Template:Cost/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Cost/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-21T03:55:13Z"
fetched: "2026-09-10T07:40:23Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Cost/doc

**Description**
  This template is designed to represent the *most common* forms of [currency](currency): the set of gold, silver, and copper.

  **All other items that are used as currency, tokens, and quest objectives should use  instead of this template.**

<ul class="side-by-side">
<li>
Base currency
- Copper () - *c*
- Silver () - *s*
- Gold () - *g*
</li></ul>

**Syntax**
  
**Example**
  <nowiki>1  30 (g/s/c)</nowiki>
  <nowiki>2 3 (g/s/c)</nowiki>
  <nowiki> 4 5 (g/s/c)</nowiki>
  <nowiki>  6 (g/s/c)</nowiki>
  <nowiki>eob=2 (g/s/c)</nowiki>
  <nowiki>it=5 (g/s/c)</nowiki>
**Result**
  1  30 (g/s/c)
  2 3 (g/s/c)
   4 5 (g/s/c)
    6 (g/s/c)
  eob=2 (g/s/c)
  it=5 (g/s/c)

## Table usage
For tables that have a column filled with money, the gold, silver, and copper can be manually aligned by using the letter "x". Each "x" is replaced with a space that has the same width as a single digit, acting as a mini indent.

If a coin type is filled entirely with x's, that type's icon will additionally be made invisible.

**Example**
<pre>{| class="darktable zebra"
! Cost
|-
| 123 45 67 (g/s/c)
|-
| xx1 x2 x3 (g/s/c)
|-
| xxx 12 (g/s/c)
|-
| xxx xx 12 (g/s/c)
|}</pre>

{| class="darktable zebra"
! Cost
|-
| 123 45 67 (g/s/c)
|-
| xx1 x2 x3 (g/s/c)
|-
| xxx 12 (g/s/c)
|-
| xxx xx 12 (g/s/c)
|}

## See also
- &mdash; show an amount of money given as a number copper coins.
- &mdash; -like syntax to display the copper value of the currency

<includeonly> </includeonly>
<noinclude></noinclude>
