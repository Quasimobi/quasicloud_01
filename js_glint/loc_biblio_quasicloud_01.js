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
  branch: master   # Branch to update (optional; defaults to master)

# adds an interface for drafting, reviewing, and approving posts.
publish_mode: editorial_workflow

# Media files will be stored in the repo under images/uploads
media_folder: "assets/images/uploads" 

collections:
  - name: "blocken_01"   # Used in routes, e.g., /admin/collections/blog
    label: "Blocken 01"  # Used in the UI
    folder: "_posts/blocken_01"   # The path to the folder where the documents are stored
    create: true   # Allow users to create new documents in this collection 
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"   # Filename template, e.g., YYYY-MM-DD-title.md 
    fields:   # The fields for each document, usually in front matter 
      ${cloud_block_01_tag("block_01")}
      ${cloud_block_01_kop()}
      ${cloud_block_01_foto_bestand_md()}    
      ${cloud_carousel_01_foto_alt(false)}     
      ${cloud_block_02_body()}      
  - name: "carousels_01" 
    label: "Carousels 01"
    folder: "_posts/carousels_01" 
    create: true 
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" 
    fields: 
      ${cloud_block_01_tag("carousel_01")}    
      ${cloud_carousel_01_foto_bestand_xl()}
      ${cloud_carousel_01_foto_alt(false)} 
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
/* ========================================================================== */
