---
---
/* ==========================================================================
 * Naam: defa_data_bs4.js
   ========================================================================== */
/* ========================================================================== */
/**
 * @name defa_tpl_config_01
 * @description Doorgeven als een lege dummie tpl_config.
 */
const defa_tpl_config_01 = {};
/* ========================================================================== */
/**
 * @name defa_tpl_config_02
 * @description Lege dummie tpl_config voor de button_class.
 */
const defa_tpl_config_02 =  { "button_class": "" };
/* ========================================================================== */
/**
 * @name defa_tpl_config_03
 * @description Lege dummie tpl_config voor de card_class.
 */
const defa_tpl_config_03 =  { "card_class": "" };
/* ========================================================================== */
/**
 * @name defa_tpl_config_04
 * @description Lege dummie tpl_config voor de navbar_class.
 */
const defa_tpl_config_04 =  { "navbar_class": "" };
/* ========================================================================== */
/**
 * @name defa_tpl_config_05
 * @description Lege dummie tpl_config voor de footer_class.
 */
const defa_tpl_config_05 =  { "footer_class": "" };
/* ========================================================================== */
const json_configuratie = {{ site.data.glint.configuratie | jsonify }};
/* ========================================================================== */
const json_bedrijf      = {{ site.data.bedrijf.basis.basis | jsonify }};
/* ========================================================================== */
const json_centobytes   = {{ site.data.glint.centobytes | jsonify }};
/* ========================================================================== */
/**
 * @description Het relatieve path naar de media.
 */
var path_bedrijf_media = json_configuratie.glint_url_rel+json_configuratie.glint_path_bedrijf_media;
/* ========================================================================== */
/**
 * @description Het relatieve path naar de media upload.
 */
var path_bedrijf_media_upload = json_configuratie.glint_url_rel+json_configuratie.glint_path_bedrijf_media_upload;
/* ========================================================================== */
/**
 * @description Het volle relatieve path naar de media.
 * @description full_path_rel_media is vervallen
 */
var full_path_rel_bedrijf_media = json_configuratie.glint_url_rel+json_configuratie.glint_path_bedrijf_media;
var full_path_rel_media = json_configuratie.glint_url_rel+json_configuratie.glint_path_bedrijf_media;
/* ========================================================================== */
/**
 * @description Het volle absolute path naar de media.
 * @description full_path_abs_media is vervallen
 */
var full_path_abs_bedrijf_media = json_configuratie.glint_url_abs+json_configuratie.glint_path_bedrijf_media;
var full_path_abs_media = json_configuratie.glint_url_abs+json_configuratie.glint_path_bedrijf_media;
/* ========================================================================== */
/**
 * @description Het volle relatieve path naar de media, die de klant kan uploaden.
 */
var full_path_rel_bedrijf_media_upload = json_configuratie.glint_url_rel+json_configuratie.glint_path_bedrijf_media_upload;
//* ========================================================================== */
/**
 * @description Het volle relatieve path naar de icons van de webapp.
 */
 var full_path_rel_icons = json_configuratie.glint_url_rel+json_configuratie.glint_path_icons;
 /* ========================================================================== */
/**
 * @description Het volle absolute path naar de icons van de webapp.
 */
 var full_path_abs_icons = json_configuratie.glint_url_abs+json_configuratie.glint_path_icons;
/* ========================================================================== */
/**
 * @description Het volle relatieve path naar de json van de webapp.
 */
var full_path_rel_json = json_configuratie.glint_url_rel+json_configuratie.glint_path_json
/* ========================================================================== */
/**
 * @description Het volle absolute path naar de json van de webapp.
 */
var full_path_abs_json = json_configuratie.glint_url_abs+json_configuratie.glint_path_json
/* ========================================================================== */
/**
 * @description Het volle, absolute, GITHUB, path naar de map waar de json staat.
 * @description Met een streepje op het einde.
 */
var full_github_path_abs_json = json_configuratie.glint_github_url_abs+json_configuratie.glint_path_json
/* ========================================================================== */
/**
 * @description Het volle, absolute, GITHUB, path naar de media.
 */
var full_github_path_abs_media = json_configuratie.glint_github_url_abs+json_configuratie.glint_path_bedrijf_media;
/* ========================================================================== */
/**
 * @description Het volle, absolute, GITHUB, path naar de media, die de klant kan uploaden. 
 */
var full_github_path_abs_media_upload = json_configuratie.glint_github_url_abs+json_configuratie.glint_path_bedrijf_media_upload;
/* ========================================================================== */
/* ========================================================================== */

