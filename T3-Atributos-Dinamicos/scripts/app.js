
let tarjeta = document.querySelector("#tarjeta")
tarjeta.setAttribute("class","card")


let img = document.querySelector("#logo")
img.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png")


let titulo = document.querySelector("h1")
titulo.removeAttribute("class")



let linkYoutube = document.querySelector("#link_youtube")
let tieneHref = linkYoutube.hasAttribute("href")
console.log("¿El link a Youtube tiene el atributo Href?")
console.log(tieneHref)


let linkWiki = document.querySelector("#link_wikipedia")
let hrefWiki = linkWiki.getAttribute("href")
console.log(`El href del link a wikipedia tiene como valor: ${hrefWiki}`)
