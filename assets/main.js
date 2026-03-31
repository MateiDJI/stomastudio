function renderHeader(){
  const h=document.querySelector("[data-include='header']"); if(!h) return;
  h.innerHTML=`
  <header class="site-header"><div class="container">
    <div class="navbar">
      <a class="brand" href="index.html">
  <img src="assets/images/dinte.png" 
       alt="Stoma Studio"
       class="logo-icon">

  <img src="assets/images/text.png"
       alt="Stoma Studio"
       class="logo-text">
      </a>
      <nav class="navlinks">
        <a data-nav href="index.html">Acasă</a>
        <a data-nav href="preturi.html">Servicii &amp; Prețuri</a>
        <a data-nav href="despre.html">Despre noi</a>
        <a data-nav href="contact.html">Contact & Programări</a>
      </nav>
    </div></div></header>`;
}
function renderFooter(){
  const f=document.querySelector("[data-include='footer']"); if(!f) return;
  const y=new Date().getFullYear();
  f.innerHTML=`
  <footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div><strong>Stoma Studio</strong>
        <p class="small">Echipă de medici stomatologi colaboratori. Actul medical se desfășoară în unități medicale autorizate.</p>
      </div>
      <div class="small">
        <a href="preturi.html">Servicii &amp; Prețuri</a><br>
        <a href="despre.html">Despre noi</a><br>
        <a href="contact.html">Contact</a>
      </div>
      <div class="small">
        <div>© ${y} Stoma Studio</div>
      </div>
    </div></div></footer>`;
}
document.addEventListener("DOMContentLoaded",()=>{renderHeader();renderFooter();});
