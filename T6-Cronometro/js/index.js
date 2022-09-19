let contSec;
let contMin;
let sec = 0;
let min = 0;
var cronometroSec = document.getElementById("sec");
var cronometroMin = document.getElementById("min");

let iniciar = document.querySelector('.iniciar');
iniciar.addEventListener("click", function () {
    clearInterval(contSec)
    /* clearInterval(contMin) */


    contSec = setInterval(function () {
        cronometroSec.innerHTML = sec;
        sec++;
        if (cronometroSec.innerHTML == 59) {
            setTimeout(sumarMinuto, 999)

            function sumarMinuto() {
                sec = 0;
                cronometroMin.innerHTML++;
            }
        }

    }, 1000);
    /* contMin = setInterval(function() {
        cronometroMin.innerHTML = min;
        min++;
    }, 3000); */
})


function pararContador() {
    clearInterval(contSec);
    /* clearInterval(contMin); */
    console.log("Se paró el cronómetro.");
}
let detener = document.querySelector('.detener');
detener.onclick = pararContador;


function reiniciarContador() {
    sec = 0;
    cronometroSec.innerHTML = sec;
    min = 0;
    cronometroMin.innerHTML = min;
}
let reiniciar = document.querySelector('.reiniciar');
reiniciar.onclick = reiniciarContador;