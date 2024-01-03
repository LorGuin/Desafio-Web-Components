function addFooter(footerElementos) {
    footerElementos.innerHTML = `
    <div class="contenedor__logo">
      <img src="./logos/logo.png" alt="" class="contenedor__logo-img">
      </div>
      <div class="contenedor__logo-home">
        <p><img src="./logos/home.png" alt="" class="logo_all"> Home</p>
        <p><img src="./logos/user.png" alt="" class="logo_all"> Servicios</p>
        <p><img src="./logos/phone-call.png" alt="" class="logo_all"> Contacto</p>
      </div>
      <div class="contenedor__logo-redes">
        <img src="./logos/github.png" alt="" class="logo_todos">
        <img src="./logos/discord.png" alt="" class="logo_todos">
        <img src="./logos/typescript.png" alt="" class="logo_todos">
      </div>
    
        <p class="contenedor__http">©2023 - https://apx.school</p>
   `
 }