function addPresetation(presentacionElementos) {
    presentacionElementos.innerHTML = `
    <div class="contenedor_titulo">
            <h2 class="section_titulo"></h2>
            <p class="section_texto"></p>
        </div>
        <img class="section_img" src="" alt="">
   `
 }


function addPresentacion({title,image,texto}){
    const h2 = document.querySelector(".section_titulo");
    h2.textContent = title
    const img = document.querySelector(".section_img");
    img.src = image;

    const lorem = document.querySelector(".section_texto");
    lorem.textContent = texto
}

function getWorks(){
    return fetch("https://cdn.contentful.com/spaces/9k8cz30gubh7/environments/master/entries?access_token=tiSW1e9klKUwiz-uG-HQ-QTJ4kU1tvVqQliCJEH_tJM"
    ).then(res => {
        return res.json()
    }).then((data) => {
        return {
            title: data.items[4].fields.titleh2,
            image: data.includes.Asset[1].fields.file.url,
            texto: data.items[4].fields.lorempresentacion,
        }
    });
 }


          
function main(){
    getWorks().then((e) =>{
        addPresentacion(e);
    });

 

}
main();