let errors = []
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let form = document.querySelector("form")
let ul = document.querySelector("ul")
let inputs = document.querySelectorAll(".info-login")
let terms = document.querySelector("#terms")

document.querySelector("form").addEventListener("submit", function (event) {

    clearErrors()
    validName()
    validEmail()
    validPassword()
    termsAgree()
    if (!noErrors()) {
        event.preventDefault()
        showErrors()
    }

    event.preventDefault()
})


function validName() {

    let notValid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let valid = true
    let index = 0

    while (valid && index < notValid.length) {
        if (name.value.includes(notValid[index])) {
            valid = false
        }
        index++
    }

    if (name.value.length <= 0) {
        errors.push("No ha ingresado un Nombre")
    } else if (!valid) {
        errors.push("El campo Name solo puede contener letras")
    }

}


function clearErrors() {
    errors = []
    ul.innerHTML = ""
}


function noErrors() {
    return (errors.length < 0) ? true : false;
}


function showErrors() {
    errors.forEach((error) => {

        let li = document.createElement("li")
        let liText = document.createTextNode(error)
        li.appendChild(liText)
        li.style.color = "red"
        ul.appendChild(li)

    })

}


function validEmail() {
    let valid = [".com", ".net", ".org", "biz", "info", ".tv", ".cc"]
    let isValid = false
    let index = 0

    while (!isValid && index < valid.length) {
        if (email.value.includes(valid[index])) {
            isValid = true
        }
        index++
    }

    if (email.value.length <= 0) {
        errors.push("No ha ingresado un Email")
    } else if (!isValid) {
        errors.push("El email no es valido.")
    }

}


function validPassword() {
    let validNumers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let validChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"]
    let indexNumbers = 0
    let indexChars = 0
    let numberIsValid = false
    let charIsValid = false
    let passMinus = pass.value.toLowerCase()

    while (!numberIsValid && indexNumbers < validNumers.length) {
        if (passMinus.includes(validNumers[indexNumbers])) {
            numberIsValid = true
        }
        indexNumbers++
    }

    while (!charIsValid && indexChars < validChars.length) {
        if (passMinus.includes(validChars[indexChars])) {
            charIsValid = true
        }
        indexChars++
    }



    if (passMinus.length <= 0) {
        errors.push("No ha ingresado una Password")
    } else {
        if (!numberIsValid || !charIsValid) {
            errors.push("El password debe contener al menos una letra y al menos un numero")
        }

        if (passMinus.length > 20 || passMinus.length < 5) {
            errors.push("El password debe tener una longitud de entre 5 y 20 caracteres")
        }
    }

}

function termsAgree(){
    if (!terms.checked) {
        errors.push("No ha aceptado los terminos y condiciones.")
    }
}