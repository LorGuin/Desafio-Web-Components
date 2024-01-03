function addServicios(serviciosElementos) {
    serviciosElementos.innerHTML = `
    <h2 class="services__title"></h2>
    <div class="services__container">
      <div class="services__divs">
        <img class="services__logo1" src="" alt="" />
        <h3 class="about-me__h3-1"></h3>
        <p class="about-me__text-1"></p>
      </div>
      <div class="services__divs">
        <img class="services__logo2" src="" alt="" />
        <h3 class="about-me__h3-2"></h3>
        <p class="about-me__text-2"></p>
      </div>
      <div class="services__divs">
        <img class="services__logo3" src="" alt="" />
        <h3 class="about-me__h3-3"></h3>
        <p class="about-me__text-3"></p>
      </div>
    </div>
   `
 }




function addServices({title,image,texto,h3,image2,texto2,h32,image3,texto3,h33}){
    const h2 = document.querySelector(".services__title");
    h2.textContent = title

    const img = document.querySelector(".services__logo1");
    img.src = image;

    const titulo3 = document.querySelector(".about-me__h3-1");
    titulo3.textContent = h3

    const lorem = document.querySelector(".about-me__text-1");
    lorem.textContent = texto

    /* animacion web */

    const img2 = document.querySelector(".services__logo2");
    img2.src = image2;

    const titulo2 = document.querySelector(".about-me__h3-2");
    titulo2.textContent = h32

    const lorem2 = document.querySelector(".about-me__text-2");
    lorem2.textContent = texto2

    /* Desarrollo de Apps*/

    const img3 = document.querySelector(".services__logo3");
    img3.src = image3;

    const title3 = document.querySelector(".about-me__h3-3");
    title3.textContent = h33

    const lorem3 = document.querySelector(".about-me__text-3");
    lorem3.textContent = texto3
}

function getWorks(){
    return fetch("https://cdn.contentful.com/spaces/9k8cz30gubh7/environments/master/entries?access_token=tiSW1e9klKUwiz-uG-HQ-QTJ4kU1tvVqQliCJEH_tJM"
    ).then(res => {
        return res.json()
    }).then((data) => {
        return {
            title: data.items[3].fields.titleservices,
            image: data.includes.Asset[5].fields.file.url,
            texto: data.items[3].fields.loremservices,
            h3: data.items[3].fields.h3services,
            /*Animacion Web */
            image2: data.includes.Asset[3].fields.file.url,
            texto2: data.items[2].fields.loremservices,
            h32: data.items[2].fields.h3services,
            /* desarrollo de apps*/
            image3: data.includes.Asset[4].fields.file.url,
            texto3: data.items[1].fields.loremservices,
            h33: data.items[1].fields.h3services,
        }
    });
 }


          
function main(){
    getWorks().then((e) =>{
        addServices(e);
    });
}
main();