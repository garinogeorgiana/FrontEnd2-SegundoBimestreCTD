let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let mail = document.querySelector('#mail')
let password1 = document.querySelector('#password1')
let password2 = document.querySelector('#password2')
let form = document.querySelector('form')

let errors = []

form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    cleanErrors()

    if (!isValidName(firstName.value)) {
        errors.push("El Nombre ingresado no es valido.")
    }
    if (!isValidName(lastName.value)) {
        errors.push("El Apellido ingresado no es valido.")
    }
    if (!isValidMail()) {
        errors.push("El mail es invalido")
    }

    if (!isValidPass()) {
        errors.push("La contraseña solo acepta numeros y letras, debe contener al menos 8 caracteres con al menos una letra mayuscula, una minuscula y un numero.")
    }
    if (!samePassword()) {
        errors.push("Las contraseñas no son iguales.")
    }

    if (errors.length < 1) {
        alert("Registro Exitoso")
        location.href = "index.html"
    }else{
        showError()
    }
    

});

function isValidName(textToValid){
    /* between 2 and 30 characters, only space between words, only accept alphabet */
    let regex = new RegExp(/^[a-zA-Z ]{2,30}$/);
    return regex.test(textToValid);   
}

function isValidMail() {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regex.test(mail.value);
}


function isValidPass() {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    let validPass1 = regex.test(password1.value)
    let validPass2 = regex.test(password2.value)
    console.log(validPass1)
    console.log(validPass2)
    return (validPass1 && validPass2)
}

function samePassword(){
    return password1.value === password2.value
}


let ulErrors = document.createElement("ul")
form.appendChild(ulErrors)

function showError(){
    
    errors.forEach(element => {
        let li = document.createElement("li")
        let textLi = document.createTextNode(element)
        li.appendChild(textLi)
        li.style.paddingTop = "10px"
        li.style.color = "red"
        ulErrors.appendChild(li)
    })

}

function cleanErrors(){
    ulErrors.innerHTML = ""
    errors = []
}
