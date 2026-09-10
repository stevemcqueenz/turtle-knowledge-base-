---
title: "UIOBJECT SimpleHTML"
url: "https://turtle-wow.fandom.com/wiki/UIOBJECT_SimpleHTML"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:49:26Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# UIOBJECT SimpleHTML

## Supported HTML Mode Markup
If arguments are in square brackets, this means that they are optional.

### Basic elements
- <code>&#x3C;HTML&#x3E;</code>
- <code>&#x3C;BODY&#x3E;</code>

Where the HTML element must be provided and must contain the BODY element.

The BODY element can contain block elements.  Anything not contained within a block element is not displayed.

### Block elements
- <code>&#x3C;H1 [align="left|center|right"]&#x3E;</code>
- <code>&#x3C;H2 [align="left|center|right"]&#x3E;</code>
- <code>&#x3C;H3 [align="left|center|right"]&#x3E;</code>
- <code>&#x3C;P  [align="left|center|right"]&#x3E;</code>

Block elements can contain other block elements, inline elements and plain text.  However other block elements will not be rendered (they will still be checked for valid html).

### Inline elements
- <code>&#x3C;A href="linkId"&#x3E;</code>
- <code>&#x3C;IMG src="imageSource" [width="x" height="y"]/&#x3E;</code>
- <code>&#x3C;BR/&#x3E;</code>

Inline elements can contain other inline elements and plain text.

### Example
 &#x3C;HTML>&#x3C;BODY>
   &#x3C;H1>Foo&#x3C;/H1>
   &#x3C;P>
     Bar&#x3C;BR/>
     with stripes.
   &#x3C;/P>
 &#x3C;/BODY>&#x3C;/HTML>

## Supported Plain Mode Escape Sequences
See [UI Escape Sequences](UI Escape Sequences)

## Also See
- [UI Escape Sequences](UI Escape Sequences)
