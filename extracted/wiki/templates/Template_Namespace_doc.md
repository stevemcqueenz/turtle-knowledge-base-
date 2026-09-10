---
title: "Template:Namespace/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Namespace/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:25Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Namespace/doc

This is the  meta-template.  It helps other templates detect what type of page they are on.

It detects and groups all the different [namespaces](Wikipedia:Namespace#Enumeration) used on Fandom into several types:

  - main : Main (i.e. article) space, where normal articles are kept.**
  - talk : Any talk space, including page names that start with "Talk:", "User talk:", "File talk:", etc.**
  -user**
  -file**
  -mediawiki**
  -template**
  -help**
  -category**
   The remaining namespaces.
  - other : Any namespaces that were not specified as a parameter to the template (see explanation below).**

For backwards compatibility, this template handles **image** as if **file**. **image** (<nowiki></nowiki>) is now deprecated.

  -Note:** For most cases it may be better to use the simpler namespace detection templates (see the [see also](#See also) section below). This template is more prone to human errors such as misspelling parameter names.

This template uses the [Lua templating language](w:Help:Lua), and more information can be found [on the Global Lua Module page](w:c:dev:Global_Lua_Modules/Namespace_detect). **For a traditional wikitext version of this template, see [Namespace_detect on Templates Wiki](w:c:templates:Template:Namespace_detect)**.

## Usage
This template takes one or more parameters named after the different page types as listed above. Like this:
<pre>

</pre>

If the template is on a main (article) page, it will return this:
   

If the template is on any other page than an article or a talk page, it will return this:
   

The example above made the template return something for all page types. But if we don't use the **other** parameter or leave it empty, it will not return anything for the other page types. Like this:
<pre>

</pre>

On any pages other than file and category pages the code above will render nothing.

   

By using an empty parameter, you can make it so the template doesn't render anything for some specific page type. Like this:
<pre>

</pre>

The code above will render nothing when on mainspace (article) pages, but will return this when on other pages:
   

## Demospace and page
For testing and demonstration purposes, this template can take two parameters named **demospace** and **page**.

  -demospace** understands any of the page type names used by this template, including the **other** type. It tells the template to behave like it is on some specific type of page. Like this:
<pre>

</pre>

No matter on what kind of page the code above is used, it will return this:
   

The **page** parameter instead takes a normal pagename, making this template behave exactly as if on that page. The pagename doesn't have to be an existing page. Like this:
<pre>

</pre>

No matter on what kind of page the code above is used, it will return this:
   

It can be convenient to let your template understand the **demospace** and/or **page** parameter and send it on to the  template. Like this:
<pre>
{{Namespace
 | main  = Article text
 | other = Other pages text
 | demospace = {}
 | page  = {}
}}
</pre>

If both the **demospace** and **page** parameters are empty or undefined, the template will detect page types as usual.

## Parameters
List of all parameters:
<pre>
{{Namespace
| main  = 
...
| other =
| demospace = {} / main / talk / user /
              file / mediawiki / template /
              help / category / other
| page  = {} / User:Example
}}
</pre>

## Technical details
If you intend to feed tables as content to the numbered parameters of this template, you need to know this:

[Templates](w:Help:Template) have a problem handling parameter data that contains pipes "<code>|</code>" unless the pipe is inside another template <code><nowiki></nowiki></code> or inside a piped link <code><nowiki>[help](w:Help:Template)</nowiki></code>. Thus templates can not handle [wikitables](w:Help:Table) as input unless you escape them by using the <code><nowiki></nowiki></code> [magic word](w:Help:Magic words). This makes it hard to use wikitables as parameters to templates. Instead, the usual solution is to use HTML wikimarkup for the table code, which is more robust.

<includeonly></includeonly><noinclude></noinclude>
