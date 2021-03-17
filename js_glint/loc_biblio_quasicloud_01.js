/* ==========================================================================
   Naam: loc_biblio_quasicloud_01.js
   Functies die altijd nodig zijn
   ========================================================================== */
/* ========================================================================== */
function loc_block_lavinia_footer_11G_openings_get(vakantie_tijd) {
  var terug_tekst = "";

  if (vakantie_tijd == "true") {
    terug_tekst = loc_json_footer_lavinia_11_openings_02;
  } else {
    terug_tekst = loc_json_footer_lavinia_11_openings_01;
  }

  return terug_tekst;
}
/* ========================================================================== */
function generate_cloud(json_configuratie) {
  let tpl_gen_cloud = `
  backend:
  name: git-gateway
  branch: master 

  publish_mode: editorial_workflow

  media_folder: "assets/images/uploads" 

collections:
  - name: "blocken_01"
    label: "Blocken 01"
    folder: "_posts/blocken_01" 
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" 
    fields: 
      ${cloud_block_01_tag("block_01")}
      ${cloud_block_01_kop()}
      ${cloud_block_01_foto_bestand_md()}    
      ${cloud_carousel_01_foto_alt()}     
      ${cloud_block_01_tekst()}      
    - name: "carousels_01" 
    label: "Carousels 01"
    folder: "_posts/carousels_01" 
    create: true 
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" 
    fields: 
      ${cloud_block_01_tag("carousel_01")}    
      ${cloud_carousel_01_foto_bestand_xl()}
      ${cloud_carousel_01_foto_alt()} 
      ${cloud_carousel_01_foto_tekst()}   
    - name: "openingstijd" 
    label: "Openingstijd"
    folder: "_posts/openingstijd" 
    create: false
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" 
    fields: 
      ${cloud_block_01_tag("openingstijd")}    
      ${cloud_open_01_vakantie_tijd()}    
  `;

  return tpl_gen_cloud;
}  
/* ========================================================================== */
/* Oude pose */
function generate_cloud_XX(json_configuratie) {

  /* Haal laatste char eraf, maak van bijv. "images/" : "images" */
  let short_path_klant_media = delete_last_char(json_configuratie.glint_path_bedrijf_media);

  let tpl_gen_cloud = `
    cloud:
      rooturl: '_posts'
      siteurl: '${json_configuratie.glint_github_url_abs}'
      media: '${short_path_klant_media}'
      metadata:
        _posts/carousels_01:
          ${cloud_add_tag_01("carousel_01")}
          ${cloud_published_01()}
          ${cloud_carousel_athena_51_foto_bestand()}
          ${cloud_carousel_athena_51_foto_alt()}
          ${cloud_carousel_athena_51_foto_tekst()}
        _posts/blocken_01:
          ${cloud_add_tag_01("block_01")}
          ${cloud_published_01()}
          ${cloud_block_athena_01_kop()}
          ${cloud_block_athena_01_foto_bestand()}
          ${cloud_block_athena_01_foto_alt()}
        _posts/openingstijd:
          ${cloud_add_tag_01("openingstijd")}
          ${cloud_block_lavinia_openingstijd_01()}          
  `;

  return tpl_gen_cloud;
}
/* ========================================================================== */
/* ========================================================================== */
