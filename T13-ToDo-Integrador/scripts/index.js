window.onload = function () {
    const mail = document.querySelector('#inputEmail');
    const pass = document.querySelector('#inputPassword');
    const form = document.querySelector('form')


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        cleanErrors()

        if (isValidMail() && isValidPass()) {
            login()
        } else {
            showError("Ingreso Invalido");
            registerLoginAttempt(mail.value, pass.value);
        }

    });

    function isValidMail() {
        let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        return regex.test(mail.value);
    }

    function isValidPass() {
        let isValid = false
        if (pass.value.length >= 8 && pass.value.length <= 20 && pass.value.trim().length > 0) {
            isValid = true
        }
        return isValid
    }

    const button = document.querySelector('button');

    mail.addEventListener('keyup', function () {
        enableButton();
    });

    pass.addEventListener('keyup', function () {
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

    function showError(info) {

        let p = document.createElement("p")
        let textP = document.createTextNode(info)
        p.appendChild(textP)
        p.style.paddingTop = "10px"
        p.style.color = "red"
        divErrors.appendChild(p)
    }


    function cleanErrors() {
        divErrors.innerHTML = ""
    }


    function login() {
        let urlLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login"
        let loginData = {
            email: mail.value,
            password: pass.value
        }
        fetch(urlLogin, {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    "Content-Type": "application/json; chartset=UTF-8"
                }
            })
            .then(response => {
                if (response.status == 400 || response.status == 404) {
                    showError("El usuario no existe o la contraseña no coincide.")
                } else if (response.status == 500) {
                    showError("Se produjo un error, si el error persiste intente mas tarde.")
                } else {
                    return response.json()
                }

            })
            .then(data => {
                if (data.jwt) {
                    sessionStorage.setItem("jwt", data.jwt)
                    console.log("localStorage", data.jwt)
                    location.href = "mis-tareas.html"
                }
            })
            .catch(error => {
                console.log("Ocurrio un error al llamar a la API", error)
            })
    }


}