/* 
Creamos el atributo src con el valor que nos da el usuario para generar la imagen.
Creamos seteamos el href de los <a> con el mismo valor ingresado por el usuario.
Creamos el atributo target con el valor _blank para que abra una nueva pestaña al usar el link */

const anchors = document.querySelectorAll(".rutas-img")
const imagenes = document.querySelectorAll('img');
imagenes.forEach((item, index) => {
    let url = prompt(`Ingresá la URL de la imagen ${index +1} para poder visualizarla en pantalla.`);
    item.setAttribute('src', url);
    anchors[index].setAttribute("href", url)
    anchors[index].setAttribute("target", "_blank")

});



// Creamos un título de manera dinámica
const contenedor = document.querySelector('.pie');
const texto = document.createTextNode("Este es un texto creado dinamicamente con JS.");
const titulo = document.createElement("h1");
titulo.appendChild(texto);
contenedor.appendChild(titulo);


