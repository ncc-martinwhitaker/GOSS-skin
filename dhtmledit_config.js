/**
 *
 * Settings used to configure the DHTML Editor used for editing articles within iCM.
 *
 * These settings are also used by the external clean-up module that is called by the 
 * editor and the API to ensure that content is cleaned up properly.
 *
 * This file should contain a valid JSON object containing zero or more config settings. 
 * Use http://jsonlint.com/ or similar to verify that the JSON (minus any /* comments) is valid.
 *
 * Use the help and examples at the bottom of this file to guide you on the configuration settings 
 * that are available.
 *
 * IMPORTANT
 *
 * Changing a _show property from true to false will result in the associated HTML attribute/element
 * getting stripped out of an existing article next time that article is modified.
 *
 * Any table auto-format styles used within the editor will need manually checking for the use of
 * the deprecated table border, cellpadding and cellspacing attributes; these will need replacing
 * with suitable CSS.
 * 
 */
{
    /*
        In HTML5, the border attribute is deprecated in favour of the CSS 'border', 'border-color', 
        'border-width' and 'border-style' properties. Just set this "show" config to false to omit
        the border property completely for HTML5 compliance.
    */
    "table_info_txtBorder_show" : false,
    /*
        The "cellpadding" attribute is deprecated in HTML5 in favour of the CSS
        'border-spacing' property on a cell.
    */
    "table_info_txtCellPad_show" : false,
    /*
        The "cellspacing" attribute is deprecated in HTML5 in favour of the CSS
        'padding' property on a cell.
    */
    "table_info_txtCellSpace_show" : false,
    /*
        The "summary" attribute is deprecated in HTML5; simply set this config to
        false to omit it. Use the "caption" attribute instead.
    */
        "table_info_txtSummary_show" : false,
    /*
        The "start" attribute was deprecated in HTML 4.01 but is supported again
        in HTML 5.
    */
    "numberedListStyle_info_start_show" : true,
    /* 
        HTML 4 link types (via the "rel" attribute) are supported by default, so
        we need need to override the default link types with the HTML 5 link types.
    */
    "link_advanced_advRel_regex" : {
        "re": "^(alternate|author|bookmark|external|help|icon|license|next|nofollow|noreferrer|pingback|prefetch|prev|search|stylesheet|tag)?$",
        "msg": "Please specify one of the following relationships (link types): alternate, author, bookmark, external, help, icon, license, next, nofollow, noreferrer, pingback, prefetch, prev, search, stylesheet, tag"
    },
    /* 
        HTML 5 resurrected the "target" attribute on an A (link) tag.
    */
    "link_target_tab_show" : true,
    /*
        The acronym tag is deprecated in HTML 5 in favour of the abbr tag, so omit it from the toolbar.
        Any existing acronym tags will automatically get converted to abbr tag when content is loaded or
        pasted into the editor.    
    */
    "toolbar_Full" : [
        { "name": "document",    "items": [ "Print" ] },
        { "name": "clipboard",    "items": [ "Cut","Copy","Paste","PasteText","-","Undo","Redo" ] },
        { "name": "editing",    "items": [ "Find","Replace","-","SelectAll" ] },
        { "name": "basicstyles","items": [ "Bold","Italic","Subscript","Superscript","-","Citation","Definition" ] },
        { "name": "phrase",        "items": [ "Abbrev","-","Quote","Blockquote" ] },
        { "name": "lists",        "items": [ "NumberedList","BulletedList","-","Outdent","Indent" ] },
        { "name": "links",        "items": [ "Link","Unlink","Anchor" ] },
        { "name": "inlines",    "items": [ "iCMInline" ] },
        { "name": "tables",        "items": [ "Table" ] },
        { "name": "insert",        "items": [ "HorizontalRule","SpecialChar" ] },
        { "name": "styles",        "items": [ "Styles" ] },
        { "name": "tools",        "items": [ "RemoveFormat", "ShowBlocks", "Maximize" ] },
        { "name": "about",      "items": [ "iCMAbout" ] }
    ],

    "versionCheck" : false
}

/**
 *
 * HELP/EXAMPLES
 * A quick guide to the available settings, including examples.
 *
 *
 *
 * Name: bulletedListStyle_info_type_show
 * Type: Boolean
 * Default: false
 *
 * The Bulleted List Properties dialog omits the Type property, by default. 
 * Set the "show" config to true to include it.
 *
 * The Type property is output as part of the "style" attribute on the "ul" tag e.g. style="list-type-style:circle"
 *
 * Example:
 *
 * "bulletedListStyle_info_type_show" : true
 *
 *
 *
 * Name: cell_info_txtWidth_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Cell Properties dialog, the width is included by default. 
 * Set the "show" config to false to omit it.
 *
 * The width is output as part of the "style" attribute on the "td" or "th" tag e.g. style="width:10%".
 *
 * Example:
 *
 * "cell_info_txtWidth_show" : false
 *
 *
 *
 * Name: cell_info_txtWidth_regex
 * Type: Object
 * Default: { "re": "^(\\d*\\%)?$", "msg": "Please specify a percentage Width e.g. 100%" }
 *
 * On the Table Cell Properties dialog, a percentage width is enforced by default. 
 * Change the "regex" config to support other css units of measurement.
 *
 * The width is output as part of the "style" attribute on the "td" or "th" tag e.g. style="width:10%".
 *
 * Example:
 *
 * "cell_info_txtWidth_regex" : { 
 *     "re": "^(((\\d*(\\.\\d+))|(\\d*))(px|em|ex|in|cm|mm|pt|pc|\\%)?)?$", 
 *     "msg": "Value specified for the 'Width' field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc.)"
 * }
 *
 *
 *
 * Name: cell_info_txtHeight_show
 * Type: Boolean
 * Default: false
 *
 * On the Table Cell Properties dialog, the height is hidden by default. 
 * Set the "show" config to true to include it.
 *
 * The height is output as part of the "style" attribute on the "td" or "th" tag e.g. style="height:10%".
 *
 * Example:
 *
 * "cell_info_txtHeight_show" : true
 *
 *
 *
 * Name: cell_info_txtHeight_regex
 * Type: Object
 * Default: { "re": "^(\\d*\\%)?$", "msg": "Please specify a percentage Height e.g. 100%" }
 *
 * On the Table Cell Properties dialog, percentage height is enforced by default if the height property is enabled. 
 * Change the "regex" config to support other css units of measurement.
 *
 * The height is output as part of the "style" attribute on the "td" or "th" tag e.g. style="height:50px".
 *
 * Example:
 *
 * "cell_info_txtHeight_regex" : {
 *     "re": "^(((\\d*(\\.\\d+))|(\\d*))(px|em|ex|in|cm|mm|pt|pc|\\%)?)?$",
 *     "msg": "Value specified for the 'Height' field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc.)"
 * }
 *
 *
 *
 * Name: cell_info_hAlign_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Cell Properties dialog, the horizontal alignment property is enabled by default. 
 * Set the "show" config to false to omit it. 
 *
 * The horizontal alignment is output as part of the "style" attribute on the "td" or "th" tag e.g. style="text-align:center"
 *
 * Example:
 *
 * "cell_info_hAlign_show" : false
 *
 *
 *
 * Name: cell_info_vAlign_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Cell Properties dialog, the vertical alignment property is enabled by default. 
 * Set the "show" config to false to omit it. 
 *
 * The vertical alignment is output as part of the "style" attribute on the "td" or "th" tag e.g. style="vertical-align:middle"
 *
 * Example:
 *
 * "cell_info_vAlign_show" : false
 *
 *
 *
 * Name: cell_info_wordWrap_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Cell Properties dialog, the word-wrap property is enabled by default. 
 * Set the "show" config to false to omit it. 
 *
 * The word-wrap property is output as part of the "style" attribute on the "td" or "th" tag e.g. style="white-space:nowrap"
 *
 * Example:
 *
 * "cell_info_wordWrap_show" : false
 *
 *
 *
 * Name: coreStyles_bold
 * Type: Object
 * Default: { "element": "strong", overrides : "b" }
 *
 * The style definition to be used to apply the bold style in the text.
 *
 * Example:
 *
 * "coreStyles_bold" : { "element": "span", "attributes": { "class": "Bold" } }
 *
 *
 *
 * Name: coreStyles_italic
 * Type: Object
 * Default: { "element": "em", overrides : "i" }
 *
 * The style definition to be used to apply the italic style in the text.
 *
 * Example:
 *
 * "coreStyles_italic" : { "element": "span", "attributes": { "class": "Italic" } }
 *
 *
 *
 * Name: coreStyles_subscript
 * Type: Object
 * Default: { "element": "sub" }
 *
 * The style definition to be used to apply the subscript style in the text.
 *
 * Example:
 *
 * "coreStyles_subscript" : { "element": "span", "attributes": { "class": "Subscript" }, "overrides" : "sub" }
 *
 *
 *
 * Name: coreStyles_superscript
 * Type: Object
 * Default: { "element": "sup" }
 *
 * The style definition to be used to apply the superscript style in the text.
 *
 * Example:
 *
 * "coreStyles_superscript" : { "element": "span", "attributes": { "class": "Superscript" }, "overrides" : "sup" }
 *
 *
 *
 * Name: coreStyles_citation
 * Type: Object
 * Default: { "element": "cite" }
 *
 * The style definition to be used to apply the citation style in the text.
 *
 * Example:
 *
 * "coreStyles_citation" : { "element": "span", "attributes": { "class": "Citation" } }
 *
 *
 *
 * Name: coreStyles_definition
 * Type: Object
 * Default: { "element": "dfn" }
 *
 * The style definition to be used to apply the definition (defining instance) style in the text.
 *
 * Example:
 *
 * "coreStyles_definition" : { "element": "span", "attributes": { "class": "Definition" } }
 *
 *
 *
 * Name: indentOffset
 * Type: Number
 * Default: 40
 *
 * Size of each indentation step.
 *
 * Example:
 *
 * "indentOffset" : 4
 *
 *
 *
 * Name: indentUnit
 * Type: String
 * Default: "px"
 *
 * Unit for the indentation style.
 *
 * Example:
 *
 * "indentUnit" : "em"
 *
 *
 *
 * Name: indentClasses
 * Type: Array
 * Default: null
 *
 * List of classes to use for indenting the contents. If it's null, no classes will be used
 * and instead the {@link #indentUnit} and {@link #indentOffset} properties will be used to
 * generate a style="margin-left" attribute value. Note: The editor stylesheet will need to
 * include the class definition for any specified classes.
 *
 * Example:
 *
 * "indentClasses" : [ "indent1", "indent2", "indent3" ]
 *
 *
 *
 * Name: link_advanced_advRel_regex
 * Type: Object
 * Default: {
 *     "re": "^(alternate|appendix|bookmark|chapter|contents|copyright|external|glossary|help|index|next|prev|section|start|stylesheet|subsection)?$",
 *     "msg": "Please specify one of the following relationships (link types): alternate, appendix, bookmark, chapter, contents, copyright, external, glossary, help, index, next, prev, section, start, stylesheet, subsection"
 * }
 *
 * On the Link dialog, HTML 4 link types (via the "rel" attribute) are supported by default. 
 * Modify the "regex" config to change the allowed link types.
 *
 * The link type (relationship) is output as a "rel" attribute on the "a" tag.
 *
 * Example:
 *
 * "link_advanced_advRel_regex" : {
 *     "re": "^(alternate|author|bookmark|external|help|icon|license|next|nofollow|noreferrer|pingback|prefetch|prev|search|stylesheet|tag)?$",
 *     "msg": "Please specify one of the following link types: alternate, author, bookmark, external, help, icon, license, next, nofollow, noreferrer, pingback, prefetch, prev, search, stylesheet, tag"
 * }
 *
 *
 *
 * Name: link_target_tab_show
 * Type: Boolean
 * Default: false
 *
 * Example:
 *
 * "link_target_tab_show" : true
 *
 * The Target tab (and hence attribute) is omitted from the Link Properties dialog by default.
 * Set this "show" config to true to include it.
 * 
 * The target attribute was not supported in HTML 4.01 but is supported in HTML 5.
 *
 *
 *
 * Name: numberedListStyle_info_start_show
 * Type: Boolean
 * Default: false
 *
 * The Numbered List Properties dialog omits the Start property, by default.
 * Set the "show" config to true to include it.
 *
 * The Start property is output as the "start" attribute on the "ol" tag.
 * The "start" attribute was deprecated in HTML 4.01 but is supported again in HTML 5.
 *
 * Example:
 *
 * "numberedListStyle_info_start_show" : true
 *
 *
 *
 * Name: numberedListStyle_info_type_show
 * Type: Boolean
 * Default: false
 *
 * The Numbered List Properties dialog omits the Type property, by default. 
 * Set the "show" config to true to include it.
 *
 * The Type property is output as part of the "style" attribute on the "ol" tag e.g. style="list-type-style:lower-roman"
 *
 * Example:
 *
 * "numberedListStyle_info_type_show" : true
 *
 *
 *
 * Name: quote_info_url_required
 * Type: Boolean
 * Default: false
 *
 * On the Quote dialog, the Cite URL is optional by default. 
 * Set the "required" config to true to make it mandatory.
 *
 * The Cite URL is output as a "cite" attribute on the "q" tag.
 *
 * Example:
 *
 * "quote_info_url_required" : true
 *
 *
 *
 * Name: removeIfEmptyTags
 * Type: Array
 * Default: See example
 *
 * Specify which empty elements can safely be cleaned up. An empty element is considered one that
 * has no content, or contains only &nbsp;, white-space, or <br>s. 
 *
 * By default, block elements such as p, h1, etc will not be removed. Add elements to this array 
 * to remove them when empty.
 *
 * Example:
 *
 * "removeIfEmptyTags" : [ "abbr", "acronym", "strong", "cite", "dfn", "em", "q", "span", "sub", "sup" ]
 *
 *
 *
 * Name: removeIfNoAttrTags
 * Type: Array
 * Default: See example
 *
 * Specify which attribute-less elements should be cleaned up.
 *
 * Example:
 *
 * "removeIfNoAttrTags" : [ "a", "img", "span" ]
 *
 *
 *
 * Name: specialChars
 * Type: Array
 * Default: See example
 *
 * The special characters to be included on the Special Character dialog.
 *
 * Example:
 *
 * "specialChars" : [
 *        "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", 
 *        "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", 
 *        "&ordf;", "&laquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", 
 *        "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&raquo;", "&frac14;", 
 *        "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", 
 *        "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", 
 *        "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", 
 *        "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", 
 *        "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", 
 *        "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", 
 *        "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", 
 *        "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", 
 *        "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", 
 *        "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", 
 *        "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"
 * ]
 *
 *
 *
 * Name: stripImages
 * Type: Boolean
 * Default: true
 *
 * The editor will strip out any images (img tag) by default.
 * Set this config to "false" to prevent this.
 * 
 * Example:
 *
 * "stripImages" : false
 *
 *
 *
 * Name: stylesSet
 * Type: Array
 * Default: []
 *
 * The default set of content rules that will be used to populate the 'Styles' drop-down
 * list within the editor. These rules also help determine which HTML elements/attributes will
 * be supported; anything not supported will be filtered out of article content. If an editor 
 * content rules (dhtmledit_rules.js) file can be located witin the iCM custom directory,
 * its rules will be used in preference.
 *
 * Example:
 *
 * "stylesSet" : [
 *         { "name": "Heading 1", "element": "h1" },
 *         { "name": "Heading 2", "element": "h2" },
 *         { "name": "Heading 3", "element": "h3" },
 *         { "name": "Heading 4", "element": "h4" },
 *         { "name": "Heading 5", "element": "h5" },
 *         { "name": "Heading 6", "element": "h6" },
 *        { "name": "Snippet", "element": "p", "attributes": { "class" : "snippet" } }
 * ]
 *
 *
 *
 * Name: table_info_txtBorder_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Properties dialog, the Border property is available by default.
 * Set the "show" config to false to omit it.
 *
 * The Border property is output as the "border" attribute on the "table" tag.
 * 
 * In HTML5, the border attribute is deprecated in favour of the CSS 'border', 
 * 'border-color', 'border-width' and 'border-style' properties.
 *
 *
 *
 * Name: table_info_txtCellPad_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Properties dialog, the Cell Padding property is available by default.
 * Set the "show" config to false to omit it.
 *
 * The Cell Padding property is output as the "cellpadding" attribute on the "table" tag.
 * The "cellpadding" attribute is deprecated in HTML5 in favour of the CSS 'border-spacing' property on a cell.
 *
 * Example:
 *
 * "table_info_txtCellPad_show" : false
 *
 *
 *
 * Name: table_info_txtCellPad_default
 * Type: Number
 * Default: 1
 *
 * On the Table Properties dialog, the Cell Padding property defaults to 1.
 * Set the "default" config if a different default cellpadding is required.
 *
 * The Cell Padding property is output as the "cellpadding" attribute on the "table" tag.
 * The "cellpadding" attribute is deprecated in HTML5 in favour of the CSS 'border-spacing' property on a cell.
 *
 * Example:
 *
 * "table_info_txtCellPad_default" : 0
 *
 * 
 *
 * Name: table_info_txtCellSpace_show
 * Type: Boolean
 * Default: false
 *
 * On the Table Properties dialog, the Cell Spacing property is available by default.
 * Set the "show" config to false to omit it.
 *
 * The Cell Spacing property is output as a "cellspacing" attribute on the "table" tag.
 * The "cellspacing" attribute is deprecated in HTML5 in favour of the CSS 'padding' property on a cell.
 *
 * Example:
 *
 * "table_info_txtCellSpace_show" : false
 *
 *
 *
 * Name: table_info_txtCellSpace_default
 * Type: Number
 * Default: 1
 *
 * On the Table Properties dialog, the Cell Spacing property defaults to 1. 
 * Set the "default" config if a different default cellspacing is required.
 *
 * The Cell Spacing property is output as a "cellspacing" attribute on the "table" tag.
 * The "cellspacing" attribute is deprecated in HTML5 in favour of the CSS 'padding' property on a cell.
 *
 * Example:
 *
 * "table_info_txtCellSpace_default" : 0
 *
 *
 *
 * Name: table_info_txtHeight_show
 * Type: Boolean
 * Default: false
 *
 * On the Table Properties dialog, the height is hidden by default. 
 * Set the "show" config to true to include it.
 *
 * The height property is output as part of the "style" attribute on the "table" tag e.g. style="height:100%".
 *
 * Example:
 *
 * "table_info_txtHeight_show" : true
 *
 *
 *
 * Name: table_info_txtHeight_regex
 * Type: Object
 * Default: { "re": "^(\\d*\\%)?$", "msg": "Please specify a percentage Height e.g. 100%" }
 *
 * On the Table Properties dialog, percentage height is enforced by default when the height property is enabled. 
 * Change the "regex" config to support other css units of measurement.
 *
 * The height property is output as part of the "style" attribute on the "table" tag e.g. style="height:100%".
 *
 * Example:
 *
 * "table_info_txtHeight_regex" : {
 *     "re": "^(((\\d*(\\.\\d+))|(\\d*))(px|em|ex|in|cm|mm|pt|pc|\\%)?)?$",
 *     "msg": "Value specified for the 'Height' field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc.)"
 * }
 *
 *
 *
 * Name: table_info_txtSummary_show
 * Type: Boolean
 * Default: true
 *
 * On the Table Properties dialog, the Summary is available by default. 
 * Set the "show" config to false to omit it.
 *
 * The summary is output as a "summary" attribute on the "table" tag.
 *
 * The "summary" attribute is deprecated in HTML5; simply set this config to false to omit it.
 * Use the "caption" attribute instead.
 *
 * Example:
 *
 * "table_info_txtSummary_show" : false
 *
 *
 *
 * Name: table_info_txtSummary_required
 * Type: Boolean
 * Default: true
 *
 * On the Table Properties dialog, the Summary is mandatory by default because in-editor tables are not 
 * intended to be used for layout. Set the "required" config to false to make it optional.
 *
 * The summary is output as a "summary" attribute on the "table" tag.
 *
 * Example:
 *
 * "table_info_txtSummary_required" : false
 *
 *
 *
 * Name: table_info_txtWidth_regex
 * Type: Object
 * Default: { "re": "^(\\d*\\%)?$", "msg": "Please specify a percentage Width e.g. 100%" }
 *
 * On the Table Properties dialog, a percentage width is enforced (by default) to meet accessibility guidelines. 
 * Change the "regex" config to support other css units of measurement.
 *
 * The width property is output as part of the "style" attribute on the "table" tag e.g. style="width:100%".
 *
 * Example:
 *
 * "table_info_txtWidth_regex" : {
 *     "re": "^(((\\d*(\\.\\d+))|(\\d*))(px|em|ex|in|cm|mm|pt|pc|\\%)?)?$",
 *     "msg": "Value specified for the 'Width' field must be a positive number with or without a valid CSS measurement unit (px, %, in, cm, mm, em, ex, pt, or pc.)"
 * }
 *
 *
 *
 * Name: table_info_txtWidth_default
 * Type: String
 * Default: "100%"
 *
 * On the Table Properties dialog, the width defaults to "100%". 
 * Set the "default" config to change the default value.
 *
 * The width property is output as part of the "style" attribute on the "table" tag e.g. style="width:100%".
 *
 * Example:
 *
 * "table_info_txtWidth_default" : "50%"
 *
 * 
 * Name: table_info_classSelect_default
 * Type: String
 * Default: "" (nothing)
 * 
 * In the Table Properties dialog you can select the class that the table will use
 * Setting this property will set default class to the provided value.
 * The default value is "" (nothing) meaning that no class will be selected by default.
 * 
 * Example:
 * 
 * "table_info_classSelect_default" : "Dark"
 * 
 * NOTE: The value you supply should match a table style specified in the
 * dhtmledit_rules.js file located witin the iCM custom directory.
 *
 * 
 * Name: tabSpaces
 * Type: Number
 * Default: 0
 *
 * Instructs the editor to add a number of spaces (&nbsp;) to the text when
 * hitting the TAB key. If set to zero, the TAB key will be used to move the
 * cursor focus to the next element in the page, out of the editor focus.
 *
 * NOTE: If tabSpaces is set to anything other than zero, context-sensitive
 * use of the TAB key within the editor e.g. for navigating through a table's 
 * cells, will also be lost. 
 *
 * Example:
 *
 * "tabSpaces" : 4
 *
 *
 *
 * Name: toolbar_Full
 * Type: Array
 * Default: See example
 *
 * The editor's toolbar definition.
 * 
 * Use this config to restrict the functionality made available to ALL users 
 * within the editor; if this toolbar definition does not include a particular item, 
 * the associated editing functionality will be disabled. 
 * 
 * For example, remove the 'Table' toolbar item if table support is not required. No 
 * table editing functionality will be provided within the editor and all table elements 
 * (table, th, td, etc) will be removed (cleaned up) from any content.
 *
 * NOTE: Care should be taken to ensure that the "lists", "links", "inlines", "tables" 
 * and "styles" button groups are always named as such; iCM may omit any one of these 
 * complete groups when the editor is created, allowing some editing functionality to be 
 * restricted based on a user's privileges.
 * 
 * Example:
 *
 * "toolbar_Full" : [
 *         { "name": "document",    "items": [ "Print" ] },
 *         { "name": "clipboard",    "items": [ "Cut","Copy","Paste","PasteText","-","Undo","Redo" ] },
 *         { "name": "editing",        "items": [ "Find","Replace","-","SelectAll" ] },
 *         { "name": "basicstyles",    "items": [ "Bold","Italic","Subscript","Superscript","-","Citation","Definition" ] },
 *         { "name": "phrase",        "items": [ "Abbrev","Acronym","-","Quote","Blockquote" ] },
 *         { "name": "lists",        "items": [ "NumberedList","BulletedList","-","Outdent","Indent" ] },
 *         { "name": "links",        "items": [ "Link","Unlink","Anchor" ] },
 *         { "name": "inlines",        "items": [ "iCMInline" ] },
 *         { "name": "tables",        "items": [ "Table" ] },
 *         { "name": "insert",        "items": [ "HorizontalRule","SpecialChar" ] },
 *         { "name": "styles",        "items": [ "Styles" ] },
 *         { "name": "tools",        "items": [ "RemoveFormat", "ShowBlocks", "Maximize" ] },
 *         { "name": "about",       "items": [ "iCMAbout" ] }
 * ]
 *
 */
 