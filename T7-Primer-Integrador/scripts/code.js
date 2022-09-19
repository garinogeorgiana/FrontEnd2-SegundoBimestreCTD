let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};


const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

/* capturamos nodos del DOM */
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");

const cambiarTema = document.querySelector('#cambiar-tema');

/* Eventos al clickear los botones */
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

/* Pedimos datos al usuario cuando presiona el boton "completar datos" */
function obtenerDatosDelUsuario() {

  datosPersona.nombre = prompt("Ingresa tu nombre")

  edad = new Date().getFullYear() - prompt("Ingresa el año en que naciste")
  if (edad < new Date().getFullYear()) {
    datosPersona.edad = edad
  }

  datosPersona.ciudad = prompt("Ingresa la ciudad en donde vivis.")

  confirm("Te interesa JavaScript?") ? datosPersona.interesPorJs = "Si" : datosPersona.interesPorJs = "No"

}

/* Renderizamos los datos que pedimos al usuario previamente */
function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  let spanNombre = document.querySelector("#nombre")
  let spanEdad = document.querySelector("#edad")
  let spanCiudad = document.querySelector("#ciudad")
  let spanJavascript = document.querySelector("#javascript")

  spanNombre.innerText = datosPersona.nombre
  spanEdad.innerText = datosPersona.edad
  spanCiudad.innerText = datosPersona.ciudad
  spanJavascript.innerText = datosPersona.interesPorJs

}

/* Renderizar imagenes y remover el evento para que
no se renderize si seguimos presionando el boton */
function recorrerListadoYRenderizarTarjetas() {

  listado.forEach(elemento => {

    let divFila = document.querySelector("#fila")
    divFila.innerHTML +=
      `<div class="caja">
          <img src=${elemento.imgUrl} alt=${elemento.lenguajes}>
          <p class="lenguajes">${elemento.lenguajes}</p>
          <p class="bimestre">${elemento.bimestre}</p>
      </div>`;

  })
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas)

}

/* boton cambiar tema */
function alternarColorTema() {

  const divSitio = document.querySelector("#sitio")
  divSitio.classList.toggle("dark")

}

/* Sobre mi (Apreta la F y visualiza el texto) */
const parrafoOculto = document.querySelector("#sobre-mi")
window.addEventListener("keypress", function (evento) {
  if (evento.key == "f" || evento.key == "F") {
    parrafoOculto.classList.toggle("oculto")
  }
})