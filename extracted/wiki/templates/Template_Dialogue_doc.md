---
title: "Template:Dialogue/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Dialogue/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:23Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Dialogue/doc

facilitates the writing of dialogue in a standard format.  The template can handle most standard formats of writing dialogue, and can be indented, bulleted or numbered. **This template *cannot* be <code>subst:</code>'d**.

This template uses the [Lua templating language](w:Help:Lua), and more information can be found [on the Global Lua Module page](w:c:dev:Global_Lua_Modules/Dialogue). **For a traditional wikitext version of this template, see [Dialogue on Templates Wiki](w:c:templates:Template:Dialogue/wikitext)**.

## Syntax
This is how to write the template in [wikitext](w:Help:wikitext) onto your article:

<pre></pre>

These parameters are explained more fully below.

## Parameters
**Named parameters specify name shortcuts. They are all optional.** They are placed at the top of the template call, like this:

<pre>{{dialogue
|short=full
|short=full
|short=full
...</pre>

Name shortcuts apply to your main dialogue text. If you use a shortcut specified here for a character name, then the full name will be replaced for it.

Named parameters of the form "<code>mood1</code>", "<code>mood2</code>", "<code>mood3</code>", etc., up to "<code>mood10</code>", specify moods for the corresponding line number (e.g. "<code>mood1</code>" specifies line 1). They are placed in a line like this:

<pre>...
|Character|Speech|mood1=angry
|Character|Speech|mood2=quiet
|Character|Speech|mood3=ecstatic
...</pre>

Positional parameters form the text of the dialogue (i.e. any line not containing an "<code>=</code>" will be construed as part of the dialogue.

  ;<code>Parameter 1</code> *(required)* : Character name speaking
  ;<code>Parameter 2</code> *(optional)* : Line to speak
  ;<code>Parameter 3</code> *(optional)* : Next character
  ;<code>Parameter 4</code> *(optional)* : Next line
  ;<code>Parameter 5</code> *(optional)* : Next character
  ;<code>Parameter 6</code> *(optional)* : Next line
  ;<code>Parameter 7</code> *(optional)* : so on...

Note: if any character is called "<code>action</code>" then that line will be construed as an action line. It still counts as a *line* nonetheless.

To write a dialogue description/source, use <code>cite =</code>

## Examples
Here is an example of a full template usage:

<pre></pre>

The above would generate:

The below code demonstrates examples of extended use:

<pre></pre>

The above would generate:

### Notes
You can number, bullet or indent your dialogue:

<pre>:</pre>

  

<pre>#
1. </pre>

1. 1. <pre>*
- </pre>

- - You will get the odd spacing error (e.g. "Speech<code><nowiki><space></nowiki></code>") if you lay out your dialogue on multiple lines.

<includeonly></includeonly><noinclude></noinclude>
