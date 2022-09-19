window.onload = function () {
    const urlTask = "https://ctd-todo-api.herokuapp.com/v1/tasks"
    let token

    if (sessionStorage.getItem("jwt") === null) {
        location.href = "index.html"
    } else {
        token = sessionStorage.getItem("jwt")

    }
    getTasks()

    /* ********************************************** Cerra sesion ********************************************** */
    const closeBtn = document.querySelector("#closeApp")
    closeBtn.addEventListener("click", function () {
        sessionStorage.removeItem("jwt")
        location.href = "index.html"
    })

    /* ********************************************** Consultar tareas ********************************************** */

    function getTasks() {
        fetch(urlTask, {
                method: "GET",
                headers: {
                    authorization: token,
                    "Content-Type": "application/json; chartset=UTF-8"
                }
            })
            .then(response => {

                return response.json()
            })
            .then(data => {

                let sort = data.sort((elementA, elementB) => {
                    if (elementA.id < elementB.id) {
                        return 1
                    }
                    if (elementA.id > elementB.id) {
                        return -1
                    } else {
                        return 0
                    }
                })

                renderTasks(sort)

            })
            .catch(error => {
                console.log("Ocurrio un error al llamar a la API", error)
            })

    }

    /* ********************************************** Agregar nueva tarea ********************************************** */
    document.querySelector(".nueva-tarea").addEventListener("submit", function (event) {
        event.preventDefault()

        let newTaskText = document.querySelector("#nuevaTarea").value
        createNewTask(newTaskText.trim())

    })


    function createNewTask(newTaskText) {

        /* let responseStatus */

        let data = {
            description: newTaskText,
            completed: false
        }

        fetch(urlTask, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    authorization: token,
                    "Content-Type": "application/json; chartset=UTF-8"
                }
            })
            .then(response => {
                console.log("respuesta api createNewTask:", response.status)
                /* responseStatus = response.status */
                return response.json()
            })
            .then(data => {
                console.log(data)
                getTasks()
            })
            .catch(error => {
                console.log("Ocurrio un error al llamar a la API", error)
            })
    }

    /* ********************************************** Renderizar Tareas ********************************************** */

    function renderTasks(object) {
        let tareasPendientes = document.querySelector(".tareas-pendientes")

        tareasPendientes.innerHTML = ""

        if (object.length < 1) {
            tareasPendientes.innerHTML =
                `<li class="tarea">
                    <div class="not-done"></i></div>
                    <div class="descripcion">
                        <p class="nombre">Nueva tarea</p>
                        <p class="timestamp">Creada: 15/07/21</p>
                    </div>
                </li>
            `
        } else {
            object.forEach(element => {
                tareasPendientes.innerHTML +=
                    `<li class="tarea">
                        <div class="not-done" id="${element.id}"></div>
                        <div class="descripcion">
                            <p class="nombre">${element.description}</p>
                            <p class="timestamp">${element.createdAt.slice(0,10)}</p>
                    </div>
                    </li>`
            });
        }

        taskStatus()


    }

    /* ********************************************** Eliminar Tareas ********************************************** */

    //agrego evento que llama a la funcion para remover el task de la api cuando se clickea sobre el boton rojo y renderizarla en tareas terminadas.
    function taskStatus() {
        console.log(document.querySelectorAll(".not-done"))
        document.querySelectorAll(".not-done").forEach(element => {
            element.addEventListener("click", function () {
                removeTask(element.id)
                finishTask(element.description)
            })
        })
    }

    //remuevo la task de la api
    function removeTask(id) {

        fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: token,
                    "Content-Type": "application/json; chartset=UTF-8"
                }
            })
            .then(response => {
                console.log("respuesta api createNewTask:", response.status)
                return response.json()
            })
            .then(data => {
                console.log(data)
                getTasks()
            })
            .catch(error => {
                console.log("Ocurrio un error al llamar a la API", error)
            })
    }

  
}