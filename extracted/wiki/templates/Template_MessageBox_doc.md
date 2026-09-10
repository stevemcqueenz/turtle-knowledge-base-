---
title: "Template:MessageBox/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:MessageBox/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:25Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:MessageBox/doc

is a template for creating message boxes.

It is highly customizable with classes, inline styles, and provided CSS selectors. Optional features such as an image, left border, right-side text (for e.g. shortcuts), and a dismiss function.

It uses the [Lua templating language](w:Help:Lua), and more information can be found [on the Global Lua Module page](w:c:dev:Global_Lua_Modules/Mbox). This version is modified to produce a starter style, based on the [basic style from the module](w:c:dev:mediawiki:Global Lua Modules/Mbox.css). To use the full capabilities of this module and remove the default styling, remove the indicated portions of [Module:Mbox](Module:Mbox). 

**For a traditional wikitext version of this template, see [Ambox on Templates Wiki](w:c:templates:Template:Ambox)**.

## Parameters
For examples of how to use these parameters, see [#Examples](#Examples).
{| class="wikitable" style="width: 100%"
! Parameter name
! Description
! Required?
! Default
|-
| <code>class</code>
| Additional classes to the root <code>.mbox</code> element.
| No
| —
|-
| <code>bordercolor</code>
| The color of the thick left-most border.
| No
| Stylesheet default
|-
| <code>type</code>
| Type of mbox as declared as in CSS with variables. Affects color of the thick left-most border. See [#Using types](#Using types).
| No
| —
|-
| <code>bgcolor</code>
| The color of the mbox's background.
| No
| Stylesheet default
|-
| <code>style</code>
| Additional inline styles to the root <code>.mbox</code> element.
| No
| —
|-
| <code>image</code>
| An image to be added to the left of all text content.
| No
| —
|-
| <code>imagewidth</code>
| The width of the image (height automatically adjusts).
| No
| <code>60px</code>
|-
| <code>imagelink</code>
| The link to which the image points (could link to the relevant maintenance category, per example). If not included, the image will be un-clickable.
| No
| —
|-
| <code>header</code>
| The header (bold text placed at the top). This is typically used to very briefly explain the subject of the mbox itself, as when the mbox is closed, only the header will show.
| No
| —
|-
| <code>text</code>
| Non-bold text placed below the header, typically used to explain the subject of the mbox in further or additional detail. When the mbox is closed, this text will be hidden.
| No
| —
|-
| <code>comment</code>
| Smaller non-bold text placed below the main text, typically used to add additional links or context about the notice. When the mbox is closed, this text will be hidden.
| No
| —
|-
| <code>aside</code>
| Text placed within a small allocation on the right side separated by a light gray border. Most commonly used to show shortcuts to the page in question (such as on policy pages). When the mbox is closed, this text will be hidden.
| No
| —
|-
| <code>id</code>
| By default, one close button will close all mboxes on the page. However, to change this, this parameter may be used, given as the name of the mbox implementation (e.g., "Template:Cleanup" would have <code><nowiki>|id=cleanup</nowiki></code>).
| No
| —
|-
| <code>collapsed</code>
| By default, the mbox will be uncollapsed, and the full contents will be shown. However, to change this, this parameter may be used to set an mbox as collapsed by default (e.g., <code><nowiki>|collapsed=true</nowiki></code> would set the mbox to be collapsed by default).
| No
| —
|}

## Design
Some communities may wish to customize the appearance of the mboxes. The most common styling options are provided illustrated in CSS.

<syntaxhighlight lang="css" class="mw-collapsible mw-collapsed">
.mbox {
    /* the background of the entire box */;
    background-color: ;

    /* the border color of the entire box */
    border-color: ;

    /* the border thickness of the entire box */
    border-width: ;

    /* the default thick left border color; note this can be changed from within the template implementations using the "color" parameter */
    border-left-color: ;

    /* the rounded-ness of the corners */;
    border-radius: ;

    /* the baseline font-size of the mbox */
    font-size: ;
}

.mbox__content {
    /* the padding inside the mbox */
    padding: ;
}

.mbox__content__image {
    /* the minimum width of the mbox's image (if bigger, use the "imagewidth" parameter in the template) */
    width: ;

    /* the spacing to the left of the text (i.e., the right of the image) */
    padding-right: ;
}

.mbox__content__text__comment {
    /* the size of the text in the "comment" parameter */
    font-size: ;
}

.mbox__content__aside {
    /* any particular modifications to the "aside" area can go here */

    /* the maximum width of the aside area */
    width: ;
}

.mbox__close {
    /* the appearance of the close symbol here */
}

.mbox__close:after {
    /* overwrite "content" here if you do not wish for the close symbol to be × */
    content: '';
}

.mw-collapsed + .mbox__close {
   /* modifications to the close symbol when the box is closed */
}

.mw-collapsed + .mbox__close:after {
   /* overwrite "content" here if you do not wish for the close symbol to be + when the box is closed */
   content: '';
}
</syntaxhighlight>

** Technical notes**
- Additional inline styles to the root <code>.mbox</code> element can be achieved via the <code>style</code> parameter in the template.

## Examples
### Basic MessageBox
<pre>
</pre>

Produces:

### Using types
To use types, CSS variables must be added, such as:
<syntaxhighlight lang="css">
  root {
    --type-important: rgba(200, 0, 0, 0.8);
    --type-moderate: rgba(233, 124, 47, 0.8);
    --type-minor: rgba(241, 197, 37, 0.8);
}
</syntaxhighlight>

If added:

<pre>
</pre>

Produces:

Depending on your styling, there may not be a visual difference in the above example.

### With an image
<pre>
</pre>

Produces:

### With an aside
<pre>
</pre>

Produces:

### Standard/default style
<pre>
</pre>

Produces:

<includeonly></includeonly><noinclude></noinclude>
