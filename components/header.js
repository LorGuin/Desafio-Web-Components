function addHeader(el) {
    el.innerHTML = `
    <nav>
        <div class="desktop__menu"> 
            <div class="desktop__img">
                <img class="logo" src="./logos/logo.png" alt="">
            </div>
            <div class="desktop__varios">
            <a href="./portfolio.html">Portfolio</a>
            <a href="./servicios.html">Servicios</a>
            <a href="./contacto.html">Contacto</a>
            </div>
        </div>
 
        <div class="desktop__mobile">
            <div class="mobile">
                <div class="header">
                <img class="logo" src="./logos/logo.png" alt="">
                <div class="secondary mini">
                <iconify-icon class="more" icon="flat-color-icons:database"></iconify-icon>
                <div class="submenu">
                   <a href="#">Portfolio</a>
                   <a href="#">Servicios</a>
                   <a href="#">Contacto</a>
                </div>
            </div>
         </div>   
        </div>
    </div>
 </div>
    </nav>
 </header>`;
 }