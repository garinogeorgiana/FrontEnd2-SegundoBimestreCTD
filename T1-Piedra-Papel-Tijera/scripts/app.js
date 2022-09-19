quiereJugar(confirm("Quiere jugar Piedra, Papel o Tijeras?"))

function quiereJugar(quiere) {
    if (quiere) {
        jugar()
    } else {
        console.log("Gracias por visitarnos")
        alert("Gracias por visitarnos")
    }
}

function jugar() {
    let eleccionUsuario = prompt("Escriba 1 para seleccionar Piedra \nEscriba 2 para seleccionar papel \nEscriba 3 para seleccionar Tijera")
    let eleccionComputadora = Math.floor(Math.random() * 3) + 1

    if (eleccionCorrecta(eleccionUsuario)) {
        informarEleccion(eleccionUsuario, eleccionComputadora)
        informarResultado(eleccionUsuario, eleccionComputadora)
    } else {
        console.log("Su eleccion fue " + eleccionUsuario + ". Recuerde que solo acepta valores 1, 2 y 3")
        alert(("Su eleccion fue " + eleccionUsuario + ". Recuerde que solo acepta valores 1, 2 y 3"))
    }

    quiereJugar(confirm("¿Queres volver a intentarlo?"))
}

function informarResultado(eleccionPersona, eleccionPc) {

    switch (eleccionPersona) {
        case eleccionPc:
            console.log("Es un empate.")
            console.log("---------------------------------------");
            alert("Es un empate")
            break;
        case 1:
            if (eleccionPc == 2) {
                console.log("Perdiste.")
                console.log("---------------------------------------");
                alert("Perdiste")
            } else {
                console.log("Ganaste.")
                console.log("---------------------------------------");
                alert("Ganaste")
            }
            break;
        case 2:
            if (eleccionPc == 1) {
                console.log("Ganaste.")
                console.log("---------------------------------------");
                alert("Ganaste")
            } else {
                console.log("Perdiste.")
                console.log("---------------------------------------");
                alert("Perdiste")
            }
            break;
        default:
            if (eleccionPc == 1) {
                console.log("Perdiste.")
                console.log("---------------------------------------");
                alert("Perdiste")
            } else {
                console.log("Ganaste.")
                console.log("---------------------------------------");
                alert("Ganaste")
            }
            break;

    }

    /* if (eleccionPersona == eleccionPc) {
        console.log("Empate")
    } else if (eleccionPersona == 1 && eleccionPc == 2 || eleccionPersona == 2 && eleccionPc == 3 || eleccionPersona == 3 && eleccionPc == 1) {
        console.log("Perdiste")
    } else console.log("Ganaste") */
}

function informarEleccion(usuario, pc) {
    console.log((usuario == 1) ? "Seleccionaste Piedra" : (usuario == 2) ? "Seleccionaste Papel" : "Seleccionaste Tijera")
    console.log((pc == 1) ? "La computadora selecciono Piedra" : (pc == 2) ? "La computadora selecciono Papel" : "La computadora selecciono Tijera")
    
}


function eleccionCorrecta(eleccion) {
    let resultado = (eleccion == 1 || eleccion == 2 || eleccion == 3)
    return resultado
}