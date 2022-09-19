

let form = document.querySelector("form")
let divComentarios = document.querySelector(".comentarios")

let historial = JSON.parse(localStorage.getItem("commentHistory"))
let commentHistory

if (historial.length < 1){
    commentHistory = []
}else{
    commentHistory = historial
}


form.addEventListener("submit", function(event){

    event.preventDefault()

    let comment = document.querySelector("#comentario").value
    
    /* renderizamos el comentario en el navegador */
    let p = document.createElement("p")
    p.appendChild(document.createTextNode(comment))
    divComentarios.appendChild(p)

    /* guardamos el historial de comentarios en localStorage */
    commentHistory.push(comment)
    localStorage.setItem("commentHistory", JSON.stringify(commentHistory))
    console.log(historial)
    
})


