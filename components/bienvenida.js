function addBienvenida(bienvenidaElemento) {
    bienvenidaElemento.innerHTML = `
    <h1 class="title__h1"></h1>
    <img class="title__img" src="">`
 }



function addWelcome({title,image}){
    const h2 = document.querySelector(".title__h1");
    h2.textContent = title

    const img = document.querySelector(".title__img");
    img.src = image;

}

function getWorks(){
    return fetch("https://cdn.contentful.com/spaces/9k8cz30gubh7/environments/master/entries?access_token=tiSW1e9klKUwiz-uG-HQ-QTJ4kU1tvVqQliCJEH_tJM"
    ).then(res => {
        return res.json()
    }).then((data) => {
        console.log(data);
        return {
            title: data.items[5].fields.titulodelah1,
            image: data.includes.Asset[2].fields.file.url,
        }
    });
 }


          
function main(){
    getWorks().then((e) =>{
     addWelcome(e);
    });

 

}
main();