function addContacto(contactoElementos) {
    contactoElementos.innerHTML = `
    <h2 class="contacto__title">Escribime</h2>
    <form class="contacto__form" id="contacto-formulario">
        <div class="contenedor__nombre_mail">
      <label>
            <h3 class="contacto__label" id="nombre">Nombre</h3>
            <input class="contacto__input" type="text" placeholder="Tu nombre">
        </label>

        <label>
            <h3 class="contacto__label" id="email">Email</h3>
            <input class="contacto__input" type="text"  placeholder="Tu@mail.com">
        </label>
          </div>

        <label>
            <h3 class="contacto__m" id="mensaje">Mensaje</h3>
            <textarea class="contacto__mensaje"></textarea>
        </label>
        <div class="contacto__submit-cont">
            <button class="contacto__submit-button">Enviar &#x2708;
            </button>
        </div>
    </form>
   `
   enviarForm();
 }
 
 function enviarForm() {
  const formEl = document.getElementById("contacto-formulario");
  formEl.addEventListener("submit", async (f) => {
    f.preventDefault();

    let nombre = f.target.querySelector("#nombre").value;
    let email = f.target.querySelector("#email").value;
    let message = f.target.querySelector("#mensaje").value;

    const datos = {
      to: "cristianminni@gmail.com",
      message: `Nombre: ${nombre}, <br> Email: ${email}, <br> Mensaje: ${message}`,
    };
    await fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(datos),
    });
    formEl.reset();
  });
}