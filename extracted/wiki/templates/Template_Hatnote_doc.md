---
title: "Template:Hatnote/doc"
url: "https://turtle-wow.fandom.com/wiki/Template:Hatnote/doc"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:24Z"
is_turtle_content: false
patch: null
categories: ["Template documentation"]
---
# Template:Hatnote/doc

The hatnotes used for adding links between articles where more context is important.
Broadly speaking, a hatnote should answer a readers' question: Am I on the right page?

## Usage
  - Basic usage:**
 &#123;{hatnote|*text*}}

  - All parameters:**
 &#123;{hatnote|*text*|extraclasses=*extra classes*|selfref=*yes*|category=*no*}}

## Parameters
This template accepts the following parameters:
- <code>1</code> - the hatnote text (required)
- <code>extraclasses</code> - any extra CSS classes to be added.
- <code>selfref</code> - If set to "yes", "y", "true" or "1", adds the CSS class "selfref". This is used to denote self-references.
- <code>category</code> - If set to "no", "n", "false", or "0", suppresses the error tracking category ([:Category:Hatnote templates with errors](:Category:Hatnote templates with errors)). This has an effect only if the leftmost parameter (the hatnote text) is omitted.

## Example
- <code><nowiki></nowiki></code> → 

## Typical types
,  are very similar, but indicate either the primary page for a topic or more detailed related topic. They have a nearly identical set of parameters.

  -: When an article is large, it often has a summary and a link to a main article. This template is used after the heading of the summary, to indicate a link to the subtopic article that has been summarized.**
  -: Used to link to articles containing further information on this topic.**
  -: Used to link to additional articles on related topics.**

  ;  →:
  ;  →:

  *<code>1</code>, <code>2</code>, <code>3</code>, ... – the pages to link to. If no page names are specified, the current page name is used instead (without the namespace prefix). Categories and files are automatically escaped with the [colon trick](w:Help:Colon trick), and links to sections are automatically formatted as *page § section*, rather than the MediaWiki default of *page#section*.
  *<code>l1</code>, <code>l2</code>, <code>l3</code>, ... *or*<code>label 1</code>, <code>label 2</code>, <code>label 3</code>, ... – optional labels for each of the pages to link to (this is for articles where a piped link would be used). Note that the extra parameters use a lower case 'L', for example, <code>l1</code>, <u>not</u> <code>L1</code>.
  *<code>selfref</code> – if set to "yes", "y", "true" or "1", adds the CSS class "selfref". This is used to denote self-references.

## Disambiguation
Templates such as  and  are to be used in cases where a disambiguation is not needed. In general, disambiguation pages should only be used for 4 or more titles that are mostly or entirely identical, except for a qualifier.
  -: Links the reader to other articles with similar titles or concepts that they may have been seeking instead. The template has several formats, including:**
  ; →:
  ; →:
  ; →:
  ; →:
  ; →:
  ; →:

Alternately, a <code>section=yes</code> parameter can be added to the  template for use at the top of a section. When using this parameter, the wording in the template changes to specify that it is being used in a section:
  ; →:
  ; →:
  ; →:
  ; →:
  ; →:

A <var>text</var> option adds text to the end; note that this should be only used when truly necessary, and the other hatnote templates listed below don't suffice. This template also supports <var>selfref</var>.

  -: Provides links to up to four articles or disambiguation pages. It accepts zero to five parameters. **

  ;If used without parameters on a page named *Foo*, the result is
  
  ;The first parameter changes the hatnote itself and should be plain text, e.g.  yields
  
  ;The second parameter is used to change the resultant link, e.g.  yields
  
  ;The third, fourth and fifth parameters are used to give one, two, or three supplementary links:
  *
  *
  *
  the last being produced by e.g. .

## Errors
If no hatnote text is supplied, the template will output the following message:
- 

If you see this error message, it is for one of four reasons:
# No parameters were specified (the template code was <code><nowiki></nowiki></code>). Please use <code><nowiki></nowiki></code> instead.
# Some parameters were specified, but the hatnote text wasn't included. For example, the template text <code><nowiki></nowiki></code> will produce this error. Please use (for example) <code><nowiki></nowiki></code> instead.
# The hatnote text was specified, but that text contains an equals sign ("="). The equals sign has a special meaning in template code, and because of this it cannot be used in template parameters that do not specify a parameter name. For example, the template code <code><nowiki></nowiki></code> will produce this error. To work around this, you can specify the parameter name explicitly by using <code>1=</code> before the hatnote text, like this: <code><nowiki></nowiki></code>.
# You tried to access [Module:Hatnote](Module:Hatnote) directly by using <code><nowiki></nowiki></code>. Use of #invoke in this way has been disabled for performance reasons. Please use <code><nowiki></nowiki></code> instead.

Pages that contain this error message are tracked in [:Category:Hatnote templates with errors](:Category:Hatnote templates with errors).

## Technical details
This template uses the [Lua templating language](w:Help:Lua), and more information can be found [on the Global Lua Module page](w:c:dev:Global_Lua_Modules/Hatnote). **For a traditional wikitext version of this template, see [Hatnote on Templates Wiki](w:c:templates:Template:Hatnote)**.

The HTML code produced by this template looks like this:

- <code><nowiki></nowiki>*hatnote text*<nowiki></nowiki></code>

<includeonly></includeonly><noinclude></noinclude>
