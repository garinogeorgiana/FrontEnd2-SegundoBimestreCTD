const usuario = {
    name: "",
    password: "",
    tel: "",
    hobbies: [],
    country: "",
};

let submit = document.querySelector('form');
let checkbox = document.getElementsByName('hobbies')


submit.addEventListener('submit', function (event) {

    let name = document.getElementById('nombre').value;
    let password = document.getElementById('pass').value;
    let tel = document.getElementById('tel').value;

    usuario.name = name;
    usuario.password = password;
    usuario.tel = tel;

    checkbox.forEach((item) => {

        if (item.checked) {
            usuario.hobbies.push(item.value);
        };
    });

    document.querySelectorAll('input[type="radio"]').forEach(item => {
        if (item.checked) {
            usuario.country = item.value;
        }
    });

    console.log(usuario);
    event.preventDefault();
});



let errores = [];
let contador = 0
checkbox.forEach(elemento => {
    
    
    elemento.addEventListener("click", function (event) {
        if (!elemento.checked) {
            contador--
        } else if (contador >= 4) {
            limpiarListaErrores()
            event.preventDefault()
            console.log("No puede tildar mas de 4")
            errores.push("No se puede seleccionar mas de 4 hobbies.")
            mostrarErrores()
        } else {
            contador++
        }
        console.log(contador)

    })
})

let listaErrores = document.createElement("ul")
submit.appendChild(listaErrores)
listaErrores.classList.add("listaErrores")

function mostrarErrores() {
    
    errores.forEach((error) => {

        let itemLista = document.createElement("li")
        let textoError = document.createTextNode(error)
        itemLista.style.color = "red"
        itemLista.style.marginTop = "10px"
        itemLista.appendChild(textoError)
        listaErrores.appendChild(itemLista)
    })
}

function limpiarListaErrores(){
    listaErrores.innerHTML = ""
    errores = []
}