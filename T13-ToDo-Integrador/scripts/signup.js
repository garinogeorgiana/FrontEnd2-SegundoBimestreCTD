window.onload = function () {

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const mail = document.querySelector('#mail')
    const password1 = document.querySelector('#password1')
    const password2 = document.querySelector('#password2')
    const form = document.querySelector('form')

    let errors = []
    

    form.addEventListener('submit', function (event) {
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
            register()

        } else {
            showError()
        }


    });

    function isValidName(textToValid) {
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
        return (validPass1 && validPass2)
    }

    function samePassword() {
        return password1.value === password2.value
    }


    let ulErrors = document.createElement("ul")
    form.appendChild(ulErrors)

    function showError() {

        errors.forEach(element => {
            let li = document.createElement("li")
            let textLi = document.createTextNode(element)
            li.appendChild(textLi)
            li.style.paddingTop = "10px"
            li.style.color = "red"
            ulErrors.appendChild(li)
        })

    }

    function cleanErrors() {
        ulErrors.innerHTML = ""
        errors = []
    }


    function register() {

        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: mail.value,
            password: password1.value
        }

        let urlRegister = "https://ctd-todo-api.herokuapp.com/v1/users"
        fetch(urlRegister, {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json; chartset=UTF-8"
                }
            })
            .then(response => {
                if (response.status == 400) {
                    alert("El usuario ya se encuentra registrado o alguno de los datos requeridos esta incompleto")
                } else if (response.status == 500) {
                    alert("Error del servidor, vuelva a intentarlo, si el error persiste intente mas tarde.")
                } else {
                    return response.json()
                }

            })
            .then(data => {
                if (data.jwt) {
                    sessionStorage.setItem("jwt", data.jwt)
                    console.log("localStorage", data.jwt)
                    console.log("saber si es true o false o que", sessionStorage.getItem("jwt"))
                    location.href = "mis-tareas.html"
                } else {
                    alert("No se pudo generar un nuevo usuario")
                }


            })
            .catch(error => {
                console.log("Ocurrio un error al llamar a la API", error)
            })
    }
}