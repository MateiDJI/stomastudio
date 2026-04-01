function renderHeader(){
  const h=document.querySelector("[data-include='header']"); 
  if(!h) return;

  h.innerHTML=`
  <header class="site-header">
    <div class="container">
      <div class="navbar">
        
        <a class="brand" href="index.html">
          <img src="assets/images/dinte.png" class="logo-icon">
          <img src="assets/images/text.png" class="logo-text">
        </a>

        <!-- BUTON ANIMAT -->
        <button class="menu-toggle" id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="navlinks" id="navMenu">
          <a data-nav href="index.html">Acasă</a>
          <a data-nav href="preturi.html">Servicii &amp; Prețuri</a>
          <a data-nav href="despre.html">Despre noi</a>
          <a data-nav href="contact.html">Contact & Programări</a>
        </nav>
<div class="socials">

  <!-- Facebook -->
  <a href="https://www.facebook.com/profile.php?id=61588615437016" target="_blank" aria-label="Facebook">
    <svg viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5V9.5c0-3.5 2-5.5 5-5.5 
      1.4 0 2.8.2 2.8.2v3h-1.6c-1.6 0-2.1 1-2.1 2v2.4H18l-.5 3h-2.8v7A10 10 0 0 0 22 12"/>
    </svg>
  </a>

  <!-- Instagram -->
  <a href="https://www.instagram.com/stomastudio/" target="_blank" aria-label="Instagram">
    <svg viewBox="0 0 24 24">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 
      5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 
      0 1 0-10zm6.5-.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
    </svg>
  </a>

  <!-- TikTok -->
  <a href="https://www.tiktok.com/@stomastudio" target="_blank" aria-label="TikTok">
    <svg viewBox="0 0 24 24">
      <path d="M21 8.5a6.5 6.5 0 0 1-4.2-1.5v6.8a5.8 5.8 0 1 1-5-5.7v2.5a3.3 
      3.3 0 1 0 2.5 3.2V2h2.5a6.5 6.5 0 0 0 4.2 4.2v2.3z"/>
    </svg>
  </a>

</div>

      </div>
    </div>
  </header>`;
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
document.addEventListener("click", function(e){
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  if(!toggle || !menu) return;

  // click pe buton
  if(toggle.contains(e.target)){
    menu.classList.toggle("active");
    toggle.classList.toggle("open");
    return;
  }

  // click în afara meniului
  if(!menu.contains(e.target)){
    menu.classList.remove("active");
    toggle.classList.remove("open");
  }
});
