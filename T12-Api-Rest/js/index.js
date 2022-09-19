// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
document.querySelector("#random").addEventListener("click", function () {
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            renderizarDatosUsuario(data.results[0])
            console.log(data)

        });
})


function renderizarDatosUsuario(datos) {

    let tarjeta = document.querySelector(".tarjeta")
    tarjeta.style.display = "flex"
    tarjeta.style.flexDirection = "column"
    tarjeta.style.justifyContent = "center"
    tarjeta.style.alignItems = "center"

    tarjeta.innerHTML =
        `<img src="${datos.picture.large}" alt="Foto">
    <p>${datos.name.title+" "+datos.name.first+" "+datos.name.last}</p>
    <p>${datos.email}</p>`

    // Preferi el innerHTML por que de elegir el comentado abajo, tendria que escribir mas codigo para evitar multiple renderizado y se hace mas confuso.
    /* let img = document.createElement("img")
    img.setAttribute("src", datos.picture.large )
    tarjeta.appendChild(img)

    let pNombre = document.createElement("p")
    pNombre.innerHTML = datos.name.title+" "+datos.name.first+" "+datos.name.last
    tarjeta.appendChild(pNombre)

    let pMail = document.createElement("p")
    pMail.innerText = datos.email
    tarjeta.appendChild(pMail) */


}