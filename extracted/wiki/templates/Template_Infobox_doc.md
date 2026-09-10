---
title: "Template:Infobox/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Infobox/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-20T02:13:32Z"
fetched: "2026-09-10T07:40:24Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Infobox/doc

This template is intended as a meta-template, that is, a template that's used when constructing other templates. It's not meant for use directly in an article. See [Help:Infobox](wikipedia:Help:Infobox) for information on how to craft infoboxes in general.

### Usage
Usage is similar to , but with an additional distinction. Each row on the table can either be a "header", or it can have a label/data pair, or it can just be a data cell. These are mutually exclusive states so if you define a row to be both a header and a label/data pair, the label/data pair is overridden.

Note that if you want to insert an image elsewhere other than the top of the infobox, or insert other "freeform" data, using a row with just a "data" field allows for that sort of thing.

### Parameters
#### View/discuss/edit links
  -name : The template page name that the "view/discuss/edit" links should point to. You can use <nowiki></nowiki>. If this parameter is omitted the view/discuss/edit links will not be displayed.**

#### Title
There are two different ways to put a title on an infobox. One contains the title inside the infobox's border, the other puts it on top as a caption. You can use both of them together if you like, or just one or the other, or even neither (though this is not recommended).
  -title : Text to put in the caption over top of the table.**
  -above : Text to put within the uppermost cell of the table.**

#### Optional content
  - image : An image to display at the top of the template. Use full image syntax, for example <nowiki></nowiki>. Image is centered by default.**
  -caption : Text to put underneath the image.**
  -header(n) : Text to use as a header in row n.**
  -label(n): Text to use as a label in row n.**
  -data(n): Text to display as data in row n.**
  -below: Text to put in the bottom cell. The bottom cell is intended for footnotes, see-also, and other such information.**

#### Optional CSS styling
  -bodystyle : Applies to the infobox table as a whole**
  -titlestyle : Applies only to the title caption. Adding a background color is usually inadvisable since the text is rendered "outside" the infobox.**
  -abovestyle : Applies only to the "above" cell at the top. The default style has font-size:large; since this cell is usually used for a title, if you want to use the above cell for regular-sized text include "font-size:medium;" in the abovestyle.**
  -imagestyle : Applies to the cell the image is in. This includes the text of the image caption, but you should set text properties with captionstyle instead of imagestyle in case the caption is moved out of this cell in the future.**
  -captionstyle : Applies to the text of the image caption.**
  -headerstyle : Applies to all header cells**
  -labelstyle : Applies to all label cells**
  -datastyle : Applies to all data cells**
  -belowstyle : Applies only to the below cell**

#### Microformats
  -bodyclass: This parameter is inserted into the "class" attribute for the infobox as a whole**
  -imageclass: This parameter is inserted into the "class" attribute for the image**
  -class(n): This parameter is inserted into the "class" attribute for the data cell of the specified row. If there's no data cell it has no effect. **
  -titleclass: This parameter is inserted into the "class" attribute for the infobox's title caption.**
  -aboveclass: This parameter is inserted into the "class" attribute for the infobox's above cell.**

This template supports the addition of microformat information. This is done by adding "class" attributes to various data cells, indicating what kind of information is contained within. To flag an infobox as containing hCard information, for example, add the following parameter:

<pre>
|bodyclass = vcard
</pre>

And for each row containing a data cell that's part of the vcard, add a corresponding class parameter:

<pre>
|class1 = fn
|class2 = org
|class3 = tel
</pre>

...and so forth. "above" and "title" can also be given classes, since these are usually used to display the name of the subject of the infobox.

See [Wikipedia:WikiProject Microformats](Wikipedia:WikiProject Microformats) for more information on adding microformat information to Wikipedia, and [microformats.org](http://microformats.org/wiki/Main_Page) for more information on microformats in general.

### Making fields optional
A row with a label but no data is not displayed. This allows for the easy creation of optional infobox content rows. To make a row optional use a parameter that defaults to an empty string, like so:

<pre>
|label5 = Population
|data5  = {}
</pre>

This way if an article doesn't define the population parameter in its infobox the row won't be displayed.

For more complex fields with pre-formated contents that would still be present even if the parameter wasn't set, you can wrap it all in an "#if" statement to make the whole thing vanish when the parameter is not used. For instance, the "#if" statement in the following example reads "#if:the parameter *mass* has been supplied |then display it, followed by 'kg'":

<pre>
|label6 = Mass
|data6  = {{#if:{} |{} kg}}
</pre>

For more on #if, see [here](wikipedia:meta:ParserFunctions##if:).

You can also make headers optional in a similar way. If you want a header to appear only if one or more of the data fields that fall under it are filled, one could use the following pattern as an example of how to do it:

<pre style="overflow:auto;">
{{Infobox
|name    = 
|title   = Example of an optional header
|header1 = {{#if:{}{}{} |Optional header}}
|label2  = Item one
|data2   = {}
|label3  = Item two
|data3   = {}
|label4  = Item three
|data4   = {}
}}
</pre>

header1 will be shown if any of item_one, item_two, or item_three is defined. If none of the three parameters are defined the header won't be shown.

The trick to this is that the "if" returns false only if there is nothing whatsoever in the conditional section, so only if all three of item_one, item_two and item_three are undefined will the if statement fail.

### Examples
<pre style="overflow:auto;">

</pre>

Notice how when a label is defined without an accompanying data cell the row doesn't appear in the displayed infobox, and when a header is defined on the same row as a data cell the header takes precedence.

For this example, <nowiki>bodystyle &#0061; width:20em;</nowiki> and <nowiki>labelstyle &#0061; width:33%;</nowiki>

### Full blank syntax
Note: The template currently handles up to 30 rows; only 15 are included here since infoboxes larger than that will be relatively rare. Just extend the numbering as needed. The microformat "class" parameters are also omitted as they are not commonly used.

<pre style="overflow:auto;">

</pre>

<includeonly>

</includeonly><noinclude></noinclude>
