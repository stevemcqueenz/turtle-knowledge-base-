---
title: "Template:Navbox/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Navbox/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-29T17:44:40Z"
fetched: "2026-09-10T07:40:25Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Navbox/doc

This template allows a  to be set up relatively quickly by supplying it with one or more lists of links.  It comes equipped with default styles that should work for most navigational templates. Changing the default styles is possible, but not recommended.  Using this template, or one of its "Navbox suite" sister templates, is highly recommended for standardization of navigational templates, and for ease of use.

## Usage
Please remove the parameters that are left blank.

<pre style="overflow: auto;">{{Navbox
| name       = 
| listclass  = hlist
| state      = {}

| title      =
| above      =
| image      =

| group1     =
| list1      =

| group2     =
| list2      =
 ...
| group20    =
| list20     =

| below      =
}}
</pre>

## Parameter list
{{Navbox
| name   = Navbox/doc
| state  = uncollapsed
| title  = {}
| above  = {}
| image  = {}
| group1 = {}
| list1  = {}
| group2 = {}
| list2  = {}
| list3  = {} *without {}*
| group4 = {}
| list4  = {}
| below  = {} 
 See alternate navbox formats under: [*Layout of table*](#Layout of table)
}}

The navbox uses lowercase parameter names, as shown in the box (*at right*). The mandatory *name* and *title* will create a one-line box if other parameters are omitted.

Notice "group1" (etc.) is optional, as are sections named "above/below".

The basic and most common parameters are as follows (see [below](#Parameter descriptions) for the full list):

   <code>name – </code>the name of the template.
   <code>title – </code>text in the title bar, such as: <nowiki>[Widget stuff](Widget stuff)</nowiki>.
   <code>listclass – </code>a CSS class for the list cells, usually <code>hlist</code> for horizontal lists. Alternatively, use bodyclass for the whole box.
   <code>state – </code>controls when a navbox is expanded or collapsed.
   <code>titlestyle – </code>a CSS style for the title-bar, such as: <code>background: gray;</code>
   <code>groupstyle – </code>a CSS style for the group-cells, such as: <code>background: #eee;</code>
   <code>above – </code>text to appear above the group/list section (could be a list of overall wikilinks).
   <code>image – </code>an optional right-side image, coded as the whole image. Typically it is purely decorative, so it should be coded as <code><nowiki></nowiki></code>.
   <code>imageleft – </code>an optional left-side image (code the same as the "image" parameter).
   <code>group<sub>n</sub> – </code>the left-side text before list-n (if group-n omitted, list-n starts at left of box).
   <code>list<sub>n</sub> – </code>text listing wikilinks using a wikilist format.
   <code>below – </code>optional text to appear below the group/list section.

## Parameter descriptions
The following is a complete list of parameters for using .  In most cases, the only required parameters are <code>name</code>, <code>title</code>, and <code>list1</code>, though [child navboxes](Template:Navbox/doc#Child navboxes) do not even require those to be set.

 shares numerous common parameter names with its sister templates,  and , for consistency and ease of use.  Parameters marked with an asterisk (*) are common to all three master templates.

### Setup parameters
  ; *name**
   The name of the template, which is needed for the "V&nbsp;• T&nbsp;• E" ("View&nbsp;• Talk&nbsp;• Edit") links to work properly on all pages where the template is used. You can enter <code><nowiki></nowiki></code> for this value as a shortcut.  The name parameter is only mandatory if a <code>title</code> is specified, and the <code>border</code> parameter is not set.
  ; *state** [<code>autocollapse, uncollapsed, collapsed, plain, off</code>]
  * Defaults to <code>autocollapse</code>. A navbox with <code>autocollapse</code> will start out collapsed if there are two or more tables on the same page that use other collapsible tables. Otherwise, the navbox will be expanded. For the technically minded, see [MediaWiki:Common.js](MediaWiki:Common.js).
  * If set to <code>collapsed</code>, the navbox will always start out in a collapsed state.
  * If set to <code>plain</code>, the navbox will always be expanded with no [hide] link on the right, and the title will remain centered (by using padding to offset the V&nbsp;• T&nbsp;• E links).
  * If set to <code>off</code>, the navbox will always be expanded with no [hide] link on the right, but no padding will be used to keep the title centered.  This is for advanced use only; the "plain" option should suffice for most applications where the [show]/[hide] button needs to be hidden.
  * If set to anything other than <code>autocollapse</code>, <code>collapsed</code>, <code>plain</code>, or <code>off</code> (such as "uncollapsed"), the navbox will always start out in an expanded state, but have the "hide" button.
   To show the box when standalone (non-included) but then auto-hide contents when in an article, put "uncollapsed" inside <code><nowiki><noinclude></nowiki></code> tags:
  * <code><nowiki>| state =&nbsp;</nowiki></code><code><nowiki><noinclude>uncollapsed</noinclude></nowiki></code>
  * That setting will force the box visible when standalone (even when followed by other boxes), displaying "[hide]" but then auto-collapse the box when stacked inside an article.
   Often times, editors will want a default initial state for a navbox, which may be overridden in an article. Here is the trick to do this:
  * In your intermediate template, create a parameter also named "state" as a pass-through like this:
  * <code><nowiki>| state = {}</nowiki></code>
  * The <code><nowiki><includeonly>|</nowiki></code> will make the template expanded when viewing the template page by itself.
  * Example:  with autocollapse as the default initial state. [Catalan peseta](Catalan peseta) transcludes it and has only one navbox. So the peso navbox shows. [Chilean peso](Chilean peso) has two navboxes. So the peso navbox collapses.
  * Example:  with <code><nowiki>| state = {}</nowiki></code> as the default initial state. All transcluding articles show the content by default, unless there is a hypothetical article that specifies <code><nowiki></nowiki></code> when transcluding.
  * The template  can be added to a <code><nowiki><noinclude></nowiki></code> section after the template definition to explain how to use the <code>state</code> parameter.
  ; *navbar**
   If set to <code>plain</code>, the V&nbsp;• T&nbsp;• E links on the left side of the titlebar will not be displayed, and padding will be automatically used to keep the title centered.  Use <code>off</code> to remove the V&nbsp;• T&nbsp;• E links, but not apply padding (this is for advanced use only; the "plain" option should suffice for most applications where a navbar is not desired). It is highly recommended that one not hide the navbar, in order to make it easier for users to edit the template, and to keep a standard style across pages.
  ; *border**
   *See section hereafter on using navboxes within one another for examples and a more complete description.* If set to <code>child</code> or <code>subgroup</code>, then the navbox can be used as a borderless child that fits snugly in another navbox.  The border is hidden and there is no padding on the sides of the table, so it fits into the *list* area of its parent navbox. If set to <code>none</code>, then the border is hidden and padding is removed, and the navbox may be used as a child of another container (do not use the <code>none</code> option inside of another navbox; similarly, only use the <code>child</code>/<code>subgroup</code> option inside of another navbox). If set to anything else (default), then a regular navbox is displayed with a 1px border. An alternate way to specify the border to be a subgroup style is like this (i.e. use the first unnamed parameter instead of the named *border* parameter):
   <code><nowiki></nowiki></code>

### Cells
  ; *title**
   Text that appears centered in the top row of the table. It is usually the template's topic, i.e. a succinct description of the body contents. This should be a single line, but if a second line is needed, use <code><nowiki></nowiki></code> to ensure proper centering.  This parameter is technically not mandatory, but using  is rather pointless without a title.
  ; *above**
   A full-width cell displayed between the titlebar and first group/list, i.e. *above* the template's body (groups, lists and image). In a template without an image, *above* behaves in the same way as the *list1* parameter without the *group1* parameter.
  ; *group<sub>n</sub>**
   (i.e. *group1*, *group2*, etc.) If specified, text appears in a header cell displayed to the left of *list<sub>n</sub>*. If omitted, *list<sub>n</sub>* uses the full width of the table.
  ; *list<sub>n</sub>**
    (i.e. *list1*, *list2*, etc.) The body of the template, usually a list of links. Format is inline, although the text can be entered on separate lines if the entire list is enclosed within <code><nowiki> </nowiki></code>.  At least one *list* parameter is required; each additional *list* is displayed in a separate row of the table.  Each *list<sub>n</sub>* may be preceded by a corresponding *group<sub>n</sub>* parameter, if provided (see below).
  ; *image**
   An image to be displayed in a cell below the title and to the right of the body (the groups/lists). For the image to display properly, the *list1* parameter must be specified. The *image* parameter accepts standard wikicode for displaying an image, *e.g.*:
   <code><nowiki></nowiki></code>
   nb: including "|right" will produced the usual left margin to provide separation from the list items and [zebra striping](zebra striping).
  ; *imageleft**
   An image to be displayed in a cell below the title and to the left of the body (lists). For the image to display properly, the *list1* parameter must be specified and no groups can be specified. It accepts the same sort of parameter that *image* accepts.
  ; *below**
   A full-width cell displayed *below* the template's body (groups, lists and image). In a template without an image, *below* behaves in the same way as the template's final *list<sub>n</sub>* parameter without a *group<sub>n</sub>* parameter.

### Style parameters
Styles are generally advised against, to maintain consistency among templates and pages in Wikipedia; but the option to modify styles is given.

  ; *style**
   Specifies [CSS](Cascading Style Sheets) styles to apply to the template body. The parameter *bodystyle* also does the exact same thing and can be used in place of this *style* parameter.  This option should be used sparingly as it can lead to visual inconsistencies. Examples:
   <code>style = background: #*nnnnnn*;</code>
   <code>style = width: *N*&nbsp;[em/%/px or width: auto];</code>
   <code>style = float: [*left/right/none*];</code>
   <code>style = clear: [*right/left/both/none*];</code>
  ; *basestyle**
   CSS styles to apply to the *title*, *above*, *below*, and *group* cells all at once.  The styles are not applied to *list* cells.  This is convenient for easily changing the basic color of the navbox without having to repeat the style specifications for the different parts of the navbox.  Examples:
   <code>basestyle = background: lightskyblue;</code>
  ; *titlestyle**
   [CSS](Cascading Style Sheets) styles to apply to *title*, most often the titlebar's background color:
   <code>titlestyle = background: *#nnnnnn*;</code>
   <code>titlestyle = background: *name*;</code>
  ; *groupstyle**
   CSS styles to apply to the *groupN* cells. This option overrides any styles that are applied to the entire table. Examples:
   <code>groupstyle = background: #*nnnnnn*;</code>
   <code>groupstyle = text-align: [*left/center/right*];</code>
   <code>groupstyle = vertical-align: [*top/middle/bottom*];</code>
  ; *group<sub>n</sub>style**
   CSS styles to apply to a specific group, in addition to any styles specified by the *groupstyle* parameter.  This parameter should only be used when absolutely necessary in order to maintain standardization and simplicity.  Examples:
   <code>group3style = background: red; color: white;</code>
  ; *groupwidth*
   A number and unit specifying a uniform width for the group cells, in cases where little content in the list cells may cause group cells to be too wide. No default. However, may be overridden by the *group(n)style* parameter. Examples:
   <code>groupwidth = 9em</code>
  ; *liststyle**
   CSS styles to apply to all lists. Overruled by the *oddstyle* and *evenstyle* parameters (if specified) hereafter. When using backgound colors in the navbox, see the [note hereafter](#Intricacies).
  ; *list<sub>n</sub>style**
   CSS styles to apply to a specific list, in addition to any styles specified by the *liststyle* parameter. This parameter should only be used when absolutely necessary in order to maintain standardization and simplicity. Examples:
   <code>list5style = background: #ddddff;</code>
  ; *listpadding**
   A number and unit specifying the padding in each *list* cell. The *list* cells come equipped with a default padding of 0.25em on the left and right, and 0 on the top and bottom. Due to complex technical reasons, simply setting "liststyle = padding: 0.5em;" (or any other padding setting) will not work. Examples:
   <code>listpadding = 0.5em 0;</code> (sets 0.5em padding for the left/right, and 0 padding for the top/bottom.)
   <code>listpadding = 0;</code> (removes all list padding.)
  ; *oddstyle*
  ; *evenstyle*
   Applies to odd/even list numbers. Overrules styles defined by *liststyle*. The default behavior is to add striped colors (white and gray) to odd/even rows, respectively, in order to improve readability. These should not be changed except in extraordinary circumstances.
  ; *evenodd* <code>[swap, even, odd, off]</code>
   If set to <code>swap</code>, then the automatic striping of even and odd rows is reversed.  Normally, even rows get a light gray background for striping; when this parameter is used, the odd rows receive the gray striping instead of the even rows. Setting to <code>even</code> or <code>odd</code> sets all rows to have that striping color. Setting to <code>off</code> disables automatic row striping. This advanced parameter should only be used to fix problems when the navbox is being used as a child of another navbox and the stripes do not match up.  Examples and a further description can be found in the section on child navboxes below.
  ; *abovestyle**
  ; *belowstyle**
   CSS styles to apply to the top cell (specified via the *above* parameter) and bottom cell (specified via the *below* parameter). Typically used to set background color or text alignment:
   <code>abovestyle = background: #*nnnnnn*;</code>
   <code>abovestyle = text-align: [*left/center/right*];</code>
   <code>belowstyle = background: #*nnnnnn*;</code>
   <code>belowstyle = text-align: [*left/center/right*];</code>
  ; *imagestyle**
  ; *imageleftstyle**
   CSS styles to apply to the cells where the image/imageleft sits. These styles should only be used in exceptional circumstances, usually to fix width problems if the width of groups is set and the width of the image cell grows too large. Examples:
   <code>imagestyle = width:5em;</code>

##### Default styles
The style settings listed here are those that editors using the navbox change most often. The other more complex style settings were left out of this list to keep it simple. Most styles are set in [MediaWiki:Common.css](MediaWiki:Common.css).

   <code>bodystyle  = background: #fdfdfd; width: 100%; vertical-align: middle;</code>
   <code>titlestyle = background: #ccccff; padding-left: 1em; padding-right: 1em; text-align: center;</code>
   <code>abovestyle = background: #ddddff; padding-left: 1em; padding-right: 1em; text-align: center;</code>
   <code>belowstyle = background: #ddddff; padding-left: 1em; padding-right: 1em; text-align: center;</code>
   <code>groupstyle = background: #ddddff; padding-left: 1em; padding-right: 1em; text-align: right;</code>
   <code>liststyle  = background: transparent; text-align: left/center;</code>
   <code>oddstyle   = background: transparent;</code>
   <code>evenstyle  = background: #f7f7f7;</code>

Since *liststyle* and *oddstyle* are transparent, odd lists have the color of the *bodystyle*, which defaults to #fdfdfd (white with a hint of gray). A list defaults to <code>text-align: left;</code> if it has a group, if not it defaults to <code>text-align: center;</code>. Since only *bodystyle* has a vertical-align all the others inherit its <code>vertical-align: middle;</code>.

### Advanced parameters
  ; *bodyclass*
  ; *aboveclass*
  ; *groupclass*
  ; *listclass*
  ; *belowclass*
   This enables attaching a CSS class to group or list cells. The most common use for *listclass* is to give it the <code>hlist</code> class that will cause lists to render horizontally. All these parameters accept the <code>hlist</code> class, but if more than one parameter is used for <code>hlist</code>, use <code>|bodyclass=hlist</code> instead.
  ; *titlegroup*
   This puts a group in the title area, with the same default styles as *group<sub>n</sub>*. It should be used only in exceptional circumstances (usually advanced meta-templates) and its use requires some knowledge of the internal code of ; you should be ready to manually set up CSS styles to get everything to work properly if you wish to use it. If you think you have an application for this parameter, it might be best to change your mind, or consult the talk page first.
  ; *titlegroupstyle*
   The styles for the titlegroup cell.
  ; *innerstyle*
   A very advanced parameter to be used *only* for advanced meta-templates employing the navbox. Internally, the navbox uses an outer table to draw the border, and then an inner table for everything else (title/above/groups/lists/below/images, etc.). The *style*/*bodystyle* parameter sets the style for the outer table, which the inner  table inherits, but in advanced cases (meta-templates) it may be necessary to directly set the style for the inner table. This parameter provides access to that inner table so styles can be applied. Use at your own risk.

#### Microformats
  ; *bodyclass*
   This parameter is inserted into the "class" attribute for the navbox as a whole.
  ; *titleclass*
   This parameter is inserted into the "class" attribute for the navbox's title caption.

This template supports the addition of microformat information. This is done by adding "class" attributes to various data cells, indicating what kind of information is contained within. To flag a navbox as containing [hCard](hCard) information about a person, for example, add the following parameter:

<pre>
| bodyclass = vcard
</pre>

-and*

<pre>
| titleclass = fn
</pre>

-or* (for example):

<pre><nowiki>
| title = The books of [Iain Banks](Iain Banks)
</nowiki></pre>

...and so forth.

See [Wikipedia:WikiProject Microformats](Wikipedia:WikiProject Microformats) for more information on adding microformat information to Wikipedia, and [microformat](microformat) for more information on microformats in general.

## Layout of table
### Without image, above and below
Table generated by  **without** *image*, *above* and *below* parameters (gray list background color added for illustration only):

{{Navbox
| name = Navbox/doc
| state = uncollapsed
| liststyle = background: silver;
| title  = {}
| group1 = {}
| list1  = {}
| group2 = {}
| list2  = {}
| list3  = {} *without {}*
| group4 = {}
| list4  = {}
}}

### With image, above and below
Table generated by  **with** *image*, *above* and *below* parameters (gray list background color added for illustration only):

{{Navbox
| name = Navbox/doc
| state = uncollapsed
| liststyle = background: silver;
| image  = {}
| title  = {}
| above  = {}
| group1 = {}
| list1  = {}
| group2 = {}
| list2  = {}
| list3  = {} *without {}*
| group4 = {}
| list4  = {}
| below  = {}
}}

### With image and without groups
Table generated by  **with** *image*, *imageleft*, *lists*, and **without** *groups*, *above*, *below* (gray list background color added for illustration only):

{{Navbox
| name = Navbox/doc
| state = uncollapsed
| liststyle = background: silver;
| image = {}
| imageleft = {}
| title = {}
| list1 = {}
| list2 = {}
| list3 = {}
| list4 = {}
}}

## Examples
### No image
<pre style="overflow: auto;">

</pre>

### With image, without groups
<pre style="overflow: auto;">

</pre>

### With two images, without groups, multiple lists
<pre style="overflow: auto;">

</pre>

### With image, groups, above, below
<pre style="overflow: auto;">

</pre>

## Child navboxes
It is possible to place multiple navboxes within a single border with the use of the *border* parameter, or by specifying the first parameter to be "child". The basic code for doing this is as follows (which adds a subgroup for the first group/list area):

<pre style="overflow: auto;">

</pre>

### Subgroups example
This example shows how subgroups can be used. It is recommended that one use , but the same result can be reached by using  with <code>border = child</code> or the first unnamed parameter set to <code>child</code>. The *evenodd* parameter is used to reverse striping in some of the subgroups in order to get all of the stripes to line up properly. To remove the striping altogether, you can set <code>liststyle = background:transparent;</code> in each of the navboxes.

### Multiple show/hides in a single container
The example below is generated using a regular navbox for the main container, then its list1, list2, and list3 parameters each contain another navbox, with <code>1 = child</code> set. The view (v), discuss (d), edit (e) navbar links are hidden using <code>navbar = plain</code> for each of them, or could be suppresed by just leaving out the *name* parameter (child navboxes do not require the name parameter to be set, unlike regular navboxes).

## Relationship with other Navbox templates
This navbox template is specifically designed to work in conjunction with two other sister templates:  and . All three of these templates share common parameters for consistency and ease of use (such parameters are marked with an asterisk (*) in the [parameter descriptions](#Parameter descriptions) list hereinbefore). Most importantly, each template can be used as a child of one another (by using the <code>|border=child</code> parameter, or by specifying the first unnamed parameter to be <code>child</code>. For example: <code><nowiki></nowiki></code>, <code><nowiki></nowiki></code> or <code><nowiki></nowiki></code>.

## Technical details
- This template uses CSS classes for most of its looks, thus it is fully skinnable.
- Internally this meta template uses HTML markup instead of wiki markup for the table code. That is the usual way we make meta templates since wiki markup has several drawbacks. For instance it makes it harder to use [parser functions](m:Help:ParserFunctions) and special characters in parameters.
- For more technical details see the [|talk page](|talk page), the CSS classes in [MediaWiki:Common.css](MediaWiki:Common.css) and the collapsible table used to hide the box in [MediaWiki:Common.js](MediaWiki:Common.js).

### Intricacies
- The 2px wide border between groups and lists is drawn using the border-left property of the list cell. Thus, if you wish to change the background color of the template (for example <code>bodystyle = background:purple;</code>), then you'll need to make the border-left-color match the background color (i.e. <code>liststyle = border-left-color: purple;</code>). If you wish to have a border around each list cell, then the 2px border between the list cells and group cells will disappear; you'll have to come up with your own solution.
- The list cell width is initially set to 100%. Thus, if you wish to manually set the width of group cells, you'll need to also specify the liststyle to have width: auto. If you wish to set the group width and use images, it's up to you to figure out the CSS in the groupstyle, liststyle, imagestyle, and imageleftstyle parameters to get everything to work correctly. Example of setting group width:
   <code>groupstyle = width: 10em;</code>
   <code>liststyle = width: auto;</code>
- Adjacent navboxes have only a 1 pixel border between them (except in IE 6, which doesn't support the necessary CSS). If you set the top or bottom margin of <code>style/bodystyle</code>, then this will not work.
- The default margin-left and margin-right of the outer navbox table are set to "auto;". If you wish to use navbox as a float, you need to manually set the margin-left and margin-right values, because the auto margins interfere with the float option. For example, add the following code to use the navbox as a float:
  <code>style = width: 22em; float: right; margin-left: 1em; margin-right: 0;</code>

### Copying to other projects or wikis?
Using this template on other wikis requires [HTML Tidy](HTML Tidy) to be turned on. A version that does not require Tidy can be found at [Wikipedia:WikiProject Transwiki/Template:Navbox](Wikipedia:WikiProject Transwiki/Template:Navbox). (That version generally shouldn't be used here on the English Wikipedia.) More detailed information on copying  to other wikis can be found on the [talk page](Template talk:Navbox).

### Known issues
# If the heading of the navbox spans more than one line, the second line will be displayed to the right of center. This can be avoided by hard-coding linebreaks with <code><nowiki><br clear="all" /></nowiki></code>.
# In Internet Explorer 8 and 9, there is a bug when using <code>hlist</code>; navbox will fail to wrap the list to the next line if the list items start with an image, causing navbox to extend its width outside the screen. This can be fixed by adding <code>&amp;nbsp;</code> in front of the images.
# Excessive use of the **unsubstituted**  template as a delimiter, can in extreme cases cause the wiki page rendering to fail&nbsp;— there is a limit to the number of templates that can be used on a page (example [Ketamine](Ketamine) where the inclusion of eleven Navboxes with hundreds of bullets caused the page load not to complete, only the substitution of the bullets in those navboxes cured the problem). Use of the <code>hlist</code> class avoids the delimiter transclusion issue altogether, as the delimiters are rendered via CSS.

## See also
-  – Used for the navigation links in navbox.
-  – To display text at normal font-weight within a context where the default font-weight is bold, e.g. header cells in tables.
-  – Vertically-aligned navigation (navbox) templates.
- [Template:Navbox/testcases](Template:Navbox/testcases) – For additional examples of template code.
-  – The how-to guide about how to handle word wraps (line breaks) on Wikipedia, such as the wrapping of the link lists used in navboxes.
- ,  and  are **deprecated** in favor of the <code>hlist</code> class for formatting lists. See [Flatlist](Template:Flatlist#Technical details) for a technical explanation of how <code>hlist</code> works.

<includeonly>

</includeonly>
<noinclude></noinclude>
