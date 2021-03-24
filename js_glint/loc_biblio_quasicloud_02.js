/* ==========================================================================
   Naam: loc_biblio_quasicloud_02.js
   Functies die nodig zijn bij deploy, kopie-en van biblio's
   ========================================================================== */
function render_template_01(anker_id, tpl_totaal, sanitize = false) {

  let tpl_klaar = tpl_totaal;

  if (sanitize) {
    tpl_klaar = DOMPurify.sanitize(tpl_totaal);
  }
  document.getElementById(anker_id).innerHTML = tpl_klaar;
}   
/* ======================================================================= */
function get_github_json_01(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', onLoad);
  req.addEventListener('error', onFail);
  req.addEventListener('abort', onFail);

  req.open('GET', url);
  req.send();

  function onLoad(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);
      callback(null, json);
    }
  }

  function onFail(event) {
    callback(new Error('...'));
  }
}
/* ======================================================================= */
function get_github_url_01() {
  if (json_configuratie.glint_github_upload_yes) {
    return full_github_path_abs_json;
  } else {
    return full_path_abs_json;
  }
}
/* ========================================================================== */
function log_error_01(fout, error) {
  let log_fout = fout+"---"+error;
  console.log(log_fout);
}
/* ========================================================================== */
function render_block_lavinia_openings_11G2(loc_data_block, kop = "") {

  let snip_footer_openings = `
    <!-- render_block_lavinia_openings_11G 0.1.0 -->
    <div class="block_lavinia_openings_11G">
      <div class="block-body">
        <% if (kop !== "") { %>
          <div class="block-title">
            <h3><%= kop %></h3>
          </div>
        <% } else { %>
          <div class="block-title">
            <h3>Openingstijden</h3>
          </div>            
        <% } %>
        <div class="block-text">        
          <p>
            <% for(var teller = 0; teller < openings.length; teller++) { %>
              <%= openings[teller].opening_tekst%><br>
            <% } %>
          </p>
        </div>
      </div>
    </div>
    `;

  let renderSnip = template.compile(snip_footer_openings);
  return renderSnip({ loc_data_block, openings: loc_data_block.openings, kop});
}
/* ========================================================================== */
function render_block_lavinia_adres_11G2(loc_data_block, kop = "") {

  let snip_footer_adres = `
    <!-- render_block_lavinia_adres_11G 0.1.0 -->
    <div class="block_lavinia_adres_11G">
      <div class="block-body">
        <% if (kop !== "") { %>
          <div class="block-title">
            <h3><%= kop %></h3>
          </div>
        <% } else { %>
          <div class="block-title">
            <h3>Adres</h3>
          </div>            
        <% } %>
        <div class="block-text">
          <address>
            <%= loc_data_block.straat %>&nbsp;&nbsp;<%= loc_data_block.huisnr %>
            <br>
            <%= loc_data_block.postcode %>&nbsp;&nbsp;<%= loc_data_block.plaats %>
          </address>
        </div>
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_adres);
  return renderSnip({ loc_data_block, kop });
}
/* ========================================================================== */
function render_block_lavinia_contact_11G2(loc_data_block, kop = "") {

  let snip_footer_contact = `
    <!-- render_block_lavinia_contact_11G 0.1.0 -->
    <div class="block_lavinia_contact_11G">
      <div class="block-body">
        <% if (kop !== "") { %>
          <div class="block-title">
            <h3><%= kop %></h3>
          </div>
        <% } else { %>
          <div class="block-title">
            <h3>Contact</h3>
          </div>            
        <% } %>
        <div class="block-text">        
          <address>
            Email: <a href="mailto: <%= loc_data_block.email_link %>" target="_blank"> <%= loc_data_block.email_tekst %></a>
            <br>
            Telefoon: <%= loc_data_block.telefoon %>
          </address>
        </div>          
      </div>
    </div>
  `;

  let renderSnip = template.compile(snip_footer_contact);
  return renderSnip({ loc_data_block, kop });
}
/* ========================================================================== */
function render_footer_lavinia_11G(snip_footer_10, snip_footer_11, snip_footer_12, tpl_config_footer_01 = defa_tpl_config_05, nav_anker = "") {

  let tpl_footer_11 = `
    <!-- render_footer_lavinia_11G 0.1.0 -->
    <footer class="footer_lavinia_11G" <% if (nav_anker != "") { %>id="<%=nav_anker%>"<% } %>>
      <div class="container">
        <div class="row">
          <div class="col-blocks-31">
            `+snip_footer_10+`
          </div>
          <div class="col-blocks-31">
            `+snip_footer_11+`
          </div>
          <div class="col-blocks-31">
            `+snip_footer_12+`
          </div>
        </div>
      </div>
    </footer>
  `;

  let renderTemplate = template.compile(tpl_footer_11);
  let resultRender = renderTemplate({ tpl_config_footer_01, nav_anker });
  return resultRender;
}
/* ========================================================================== */
function render_blocken_athena_02G(data_tpl_blocken, loc_path_bedrijf_media) {

  const data_length = data_tpl_blocken.length;

  let tpl_blocken_02 = `
    <!-- render_blocken_athena_02G 0.1.0 -->
    <% for(var teller = 0; teller < blocken.length; teller++){ %>
      <% if ((teller%3) === 0) { %>
        <div class="row">
      <% } %>
      <div class="col-blocks-31">
        <div class="block_athena_02G">
          <div class="block-body">
            <% if (blocken[teller].foto_bestand != "")  { %>
              <img src="<%= loc_path_bedrijf_media %><%= blocken[teller].foto_bestand%>" alt="<%= blocken[teller].foto_alt%>">
            <% } %>

            <div class="block-title">
              <h3><%= blocken[teller].kop %></h3>
            </div>            

            <div class="block-text">
              <p><%= blocken[teller].tekst %></p>
            </div>

          </div>
        </div>
      </div>
      <% if ((((teller+1)%3) === 0) || ((teller+1) === data_length)){ %>
        </div>
      <% } %>
    <% } %>
  `;

   let renderSnip = template.compile(tpl_blocken_02);
   return renderSnip({ blocken: data_tpl_blocken, loc_path_bedrijf_media, data_length });
}
/* ========================================================================== */
function snip_carousel_athena_51G_items_01(data_tpl_fotos, loc_path_bedrijf_media) {
  let snip_carousel_01 = `
    <!-- snip_carousel_athena_51G_items_01 0.1.0 -->
    <% for(var teller = 0; teller < fotos.length; teller++){ %>
      <% if (teller === 0) { %>
        <div class="carousel-item active">
      <% } else { %>
        <div class="carousel-item">
      <% } %>
        <div class="carousel_athena_51G_item_01">
          <img class="d-block w-100" src="<%= loc_path_bedrijf_media %><%= fotos[teller].foto_bestand%>" alt="<%= fotos[teller].foto_alt%>">
          <div class="carousel-caption carousel_athena_51G_caption">
            <p><%= fotos[teller].foto_tekst %></p>
          </div>
        </div>
      </div>
    <% } %>
  `;

  let renderSnip = template.compile(snip_carousel_01);
  return renderSnip({ loc_path_bedrijf_media, fotos: data_tpl_fotos });
}
/* ========================================================================== */
function snip_carousel_athena_51G_controls(tpl_config) {

  let snip_controls_01 = `
    <!-- snip_carousel_athena_51G_controls 0.1.0 -->
    <a class="carousel-control-prev carousel_athena_51G_controls" href="#<%= tpl_config.carousel_id %>" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next carousel_athena_51G_controls" href="#<%= tpl_config.carousel_id %>" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  `;

  let renderSnip = template.compile(snip_controls_01);
  return renderSnip({ tpl_config });
}
/* ========================================================================== */
function render_carousel_athena_51G(tpl_config, data_tpl_carousel, snip_items, snip_controls = ``, snip_indicators = ``) {

  let tpl_carousel_athena = `
    <!-- render_carousel_athena_51G 0.1.0 -->
    <div id="<%= tpl_config.carousel_id %>" class="carousel slide carousel_athena_51G" data-ride="carousel">
      `+snip_indicators+`
      <div class="carousel-inner carousel_athena_51G_inner">
          `+snip_items+`
        </div>
        `+snip_controls+`
      </div>
  `;

  let renderTemplate = template.compile(tpl_carousel_athena);
  return renderTemplate({ tpl_config, data_tpl_carousel });
}
/* ========================================================================== */
/* ========================================================================== */
