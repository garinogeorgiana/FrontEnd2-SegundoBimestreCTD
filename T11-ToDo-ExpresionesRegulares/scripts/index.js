let mail = document.querySelector('#inputEmail');
let pass = document.querySelector('#inputPassword');
let form = document.querySelector('form')


form.addEventListener('submit', function(event) {
    event.preventDefault();

    cleanErrors()

    if (isValidMail() && isValidPass()) {
        location.href = "mis-tareas.html";
    } else {
        showError();
        registerLoginAttempt(mail.value, pass.value);
    }
});

function isValidMail() {
    let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    return regex.test(mail.value);
}

function isValidPass() {
    return pass.value.length >= 8 && pass.value.length <= 20
}

let button = document.querySelector('button');

mail.addEventListener('keyup', function() {
    enableButton();
});

pass.addEventListener('keyup', function() {
    enableButton();
});

function enableButton() {
    if (mail.value.length >= 6 && pass.value.length >= 6) {
        button.disabled = false;
        // button.removeAttribute('disabled');  
    }
}

let loginAttempts = [];

function registerLoginAttempt(user, pass) {
    let attempt = {
        userLogin: user,
        password: pass
    };

    loginAttempts.push(attempt);
}

function showLoginAttempts() {
    console.log(loginAttempts);
}

function showLoginAttemptsInJson() {
    console.log(JSON.stringify(loginAttempts));
}

let divErrors = document.createElement("div")
form.appendChild(divErrors)

function showError(){
    
    let p = document.createElement("p")
    let textP = document.createTextNode("Ingreso Invalido")
    p.appendChild(textP)
    p.style.paddingTop = "10px"
    p.style.color = "red"
    divErrors.appendChild(p)
}


function cleanErrors(){
    divErrors.innerHTML = ""
}