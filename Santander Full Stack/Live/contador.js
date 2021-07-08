window.addEventListener("load", () => {

//tempo em segundos, que queremos.
let sec = 180;

const countDiv = document.getElementById("timer");

const secpass = () => {

    let min = Math.floor(sec / 60);
    let segundoRestantes = sec % 60;

    if (segundoRestantes < 10) {
        segundoRestantes = "0" + segundoRestantes;
    }

    if (min < 10) {
        min = "0" + min;
    }
    //vai gerar o formato de 02:59
    countDiv.innerHTML = min + ":" + segundoRestantes;

    //condição final
    if (sec > 0) {
        sec = sec - 1;
    } else {
        countDiv.innerHTML = "Acabou!";
    }
};

const countDown = setInterval(() => secpass(), 1000); 

});