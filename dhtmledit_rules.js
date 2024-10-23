/**
 * 
 * This file specifies content rules that are used to populate the DHTML editor's Styles drop-down
 * list. These rules are also used by the external clean-up module that is called by the editor and
 * the API to ensure that content is cleaned up properly.
 *
 * This file should contain a JSON array of zero or more content rules, each of which should be in the 
 * following format:
 * 
 *         {
 *          "name" : "Name displayed in the Styles drop-down list",
 *          "element" : "HTML element name",
 *          "attributes" : { 
 *              "class" : "Name of style definition present within the associated editor CSS file" 
 *          }
 *         }
 * 
 * The name and element values are required, while the class attribute is optional. The name must
 * be unique across all rules.
 *
 * NOTES
 *
 * This sample file includes rules suitable for the boiler-plate Borchester site plus additional
 * rules to demonstrate how to setup table auto format styles.
 *
 * The provision of this rules file is optional. When not present, the defaults specified via the 
 * 'stylesSet' setting within the icm/custom/dhtmledit_config.js configuration file will be used.
 * 
 * Paragraph Formats (Heading 1, Heading 2, etc) and Table Auto Format styles should be included 
 * in this file as content rules.
 *
 * The $name comment blocks previously used within the editor CSS to indicate the styles to be made 
 * available within the drop-down have now been superseded by these content rules, which apply
 * globally, across all subsites.
 * 
 * Example:
 * [
 *        { "name" : "Normal", "element" : "p" },
 *         { "name" : "Heading 1", "element" : "h1" },
 *         { "name" : "Heading 2", "element" : "h2", "attributes" : { "class" : "subheading" } },
 *         { "name" : "Serif", "element" : "p", "attributes" : { "class" : "serif" } },
 *         { "name" : "Red Text", "element" : "span", "attributes" : { "class" : "redtext" } },
 *         { "name" : "Unordered List", "element" : "ul", "attributes" : { "class" : "unorderedlist" } }
 * ]
 * 
 * Example table auto format style rules:
 * [
 *      { "name" : "Table Style One", "element" : "table", "attributes" : { "class" : "ts1general" } },
 *      { "name" : "Table Style One - Top Left (TH)", "element" : "th", "attributes" : { "class" : "ts1topleft" } },
 *      { "name" : "Table Style One - Top Left", "element" : "td", "attributes" : { "class" : "ts1topleft" } },
 *      { "name" : "Table Style One - Top Centre (TH)", "element" : "th", "attributes" : { "class" : "ts1topcenter" } },
 *      { "name" : "Table Style One - Top Centre", "element" : "td", "attributes" : { "class" : "ts1topcenter" } },
 *      { "name" : "Table Style One - Top Right (TH)", "element" : "th", "attributes" : { "class" : "ts1topright" } },
 *      { "name" : "Table Style One - Top Right", "element" : "td", "attributes" : { "class" : "ts1topright" } },
 *      { "name" : "Table Style One - Middle Left (TH)", "element" : "th", "attributes" : { "class" : "ts1middleleft" } },
 *      { "name" : "Table Style One - Middle Left", "element" : "td", "attributes" : { "class" : "ts1middleleft" } },
 *      { "name" : "Table Style One - Middle Centre (TH)", "element" : "th", "attributes" : { "class" : "ts1middlecenter" } },
 *      { "name" : "Table Style One - Middle Centre", "element" : "td", "attributes" : { "class" : "ts1middlecenter" } },
 *      { "name" : "Table Style One - Middle Right (TH)", "element" : "th", "attributes" : { "class" : "ts1middleright" } },
 *      { "name" : "Table Style One - Middle Right", "element" : "td", "attributes" : { "class" : "ts1middleright" } },
 *      { "name" : "Table Style One - Bottom Left (TH)", "element" : "th", "attributes" : { "class" : "ts1bottomleft" } },
 *      { "name" : "Table Style One - Bottom Left", "element" : "td", "attributes" : { "class" : "ts1bottomleft" } },
 *      { "name" : "Table Style One - Bottom Centre (TH)", "element" : "th", "attributes" : { "class" : "ts1bottomcenter" } },
 *      { "name" : "Table Style One - Bottom Centre", "element" : "td", "attributes" : { "class" : "ts1bottomcenter" } },
 *      { "name" : "Table Style One - Bottom Right (TH)", "element" : "th", "attributes" : { "class" : "ts1bottomright" } },
 *      { "name" : "Table Style One - Bottom Right", "element" : "td", "attributes" : { "class" : "ts1bottomright" } },
 *      { "name" : "Table Style One - Odd (TR)", "element" : "tr", "attributes" : { "class" : "ts1odd" } },
 *      { "name" : "Table Style One - Even (TR)", "element" : "tr", "attributes" : { "class" : "ts1even" } }
 * ]
 *
 */
[
    /* Basic styles */
    { "name" : "Normal", "element" : "p" },
    { "name" : "Heading 2", "element" : "h2" },
    { "name" : "Heading 3", "element" : "h3" },
    { "name" : "Heading 4", "element" : "h4" },
    { "name" : "Heading 5", "element" : "h5" },
    { "name" : "Heading 6", "element" : "h6" },
    { "name" : "Align Left", "element" : "p", "attributes" : { "class" : "alignleft" } },
    { "name" : "Align Centre", "element" : "p", "attributes" : { "class" : "aligncenter" } },
    { "name" : "Align Right", "element" : "p", "attributes" : { "class" : "alignright" } },
    
    /* Table No Border */
    { "name" : "No Border/Styles", "element" : "table", "attributes" : { "class" : "tablenoborder" } },
   
    /* Table Dark */
    { "name" : "Dark", "element" : "table", "attributes" : { "class" : "tabledark" } },   
       /* Table Light */
    { "name" : "Light", "element" : "table", "attributes" : { "class" : "tablelight" } },   
    /* Table Primary Colour */
    { "name" : "Primary", "element" : "table", "attributes" : { "class" : "tableprimary" } },    
     /* Table secondary Colour */
    { "name" : "Secondary", "element" : "table", "attributes" : { "class" : "tablesecondary" } },


        /* Lookup table heading #113 */
        { "name" : "th-green", "element" : "th", "attributes" : { "class" : "tblrow_green" } },
        { "name" : "th-yellow", "element" : "th", "attributes" : { "class" : "tblrow_yellow" } },
        { "name" : "th-orange", "element" : "th", "attributes" : { "class" : "tblrow_orange" } },
        { "name" : "th-red", "element" : "th", "attributes" : { "class" : "tblrow_red" } },
        { "name" : "th-white", "element" : "th", "attributes" : { "class" : "tblrow_white" } },
        
        /* Lookup table cell #113 */
        { "name" : "td-green", "element" : "td", "attributes" : { "class" : "tblrow_green" } },
        { "name" : "td-yellow", "element" : "td", "attributes" : { "class" : "tblrow_yellow" } },
        { "name" : "td-orange", "element" : "td", "attributes" : { "class" : "tblrow_orange" } },
        { "name" : "td-red", "element" : "td", "attributes" : { "class" : "tblrow_red" } },
        { "name" : "td-white", "element" : "td", "attributes" : { "class" : "tblrow_white" } },  
    
    /*anchor links*/
    { "name" : "CTA", "element" : "a", "attributes" : { "class" : "a-body__link--cta" } },
    { "name" : "btn-primary-std", "element" : "a", "attributes" : { "class" : "a-body__link--btn-primary-std" } },
    { "name" : "btn-primary-lge", "element" : "a", "attributes" : { "class" : "a-body__link--btn-primary-lge" } },
    { "name" : "btn-primary-teal-std", "element" : "a", "attributes" : { "class" : "a-body__link--btn-primary-teal-std" } },
    { "name" : "btn-primary-teal-lge", "element" : "a", "attributes" : { "class" : "a-body__link--btn-primary-teal-lge" } },
    { "name" : "btn-secondary", "element" : "a", "attributes" : { "class" : "a-body__link--btn-secondary" } },
    { "name" : "btn-inverted-secondary", "element" : "a", "attributes" : { "class" : "a-body__link--btn-inverted-secondary" } },

    /* GOSS Demo (these rules require setting a custom editor skin in subsite configuration) */
    { "name" : "A to Z bar", "element" : "ol", "attributes" : { "class" : "gi-atozbar" } },
    
    /* Info block styling */
    { "name" : "Info block", "element" : "p", "attributes" : { "class" : "gi-info" } },
    { "name" : "Alert block", "element" : "p", "attributes" : { "class" : "gi-info gi-info--alert" } },
    { "name" : "Primary block", "element" : "p", "attributes" : { "class" : "gi-info gi-info--primary" } },
    { "name" : "Secondary block", "element" : "p", "attributes" : { "class" : "gi-info gi-info--secondary" } },
    
    /* Body Disclosures */
    { "name" : "Disclosure H2 Start", "element" : "h2", "attributes" : { "class" : "disclosurestart" } },
    { "name" : "Disclosure H3 Start", "element" : "h3", "attributes" : { "class" : "disclosurestart" } },
    { "name" : "Disclosure End", "element" : "p", "attributes" : { "class" : "disclosureend" } },
    { "name" : "Disclosure End List", "element" : "li", "attributes" : { "class" : "disclosureend" } },
 
    /* Numbered steps */
    { "name" : "Step H2 start", "element" : "h2", "attributes" : { "class" : "stepstart" }},
    { "name" : "Step H3 start", "element" : "h3", "attributes" : { "class" : "stepstart" }},
    { "name" : "Step end", "element" : "p", "attributes" : { "class" : "stepend" } },

    /* Blockquote - 2190 */
    { "name" : "Blockquote blue", "element" : "blockquote", "attributes" : { "class" : "blockquote_blue" } },
    { "name" : "Blockquote white", "element" : "blockquote", "attributes" : { "class" : "blockquote_white" } },
    { "name" : "Blockquote theme", "element" : "blockquote", "attributes" : { "class" : "blockquote_theme" } }
]