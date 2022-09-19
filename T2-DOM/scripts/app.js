let temaOscuro = confirm("¿Quisiera usar el modo oscuro?");

temaOscuro ? modoOscuro() : alert("Si cambia de opinion, por favor vuelva a cagar la pagina.");


function modoOscuro() {
    let body = document.querySelector(".dark")
    body.style.backgroundColor = "rgb(39, 39, 39)"

    let h1 = document.querySelector("h1")
    h1.style.backgroundColor = "rgb(19, 19, 19)"
    h1.style.color = "rgb(170, 170, 170)"
    h1.style.borderColor = "black"

    let itemsGatos = document.querySelectorAll(".item")
    itemsGatos.forEach(elemento => {
        elemento.style.backgroundColor = "rgb(19, 19, 19)"
        elemento.style.borderColor = "black"
        elemento.style.color = "rgb(230, 230, 230)"
        console.log(elemento)
    })

}