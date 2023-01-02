let segundos = 00;
let minutos = 00;
let horas = 00;

function contar(){
    segundos++
    if(segundos == 60){
        minutos++;
        segundos = 0;
        if(minutos == 60){
            horas++;
            minutos = 0;
           
        }
    }
    document.getElementById('cronometro').innerText = horas + ":" + minutos + ":" + segundos;
}

function comecar(){
    contador = setInterval(contar, 1000);
}

function pausar(){
    clearInterval(contador);
}

function zerar(){
    clearInterval(contador);
    segundos = 00;
    minutos = 00;
    horas = 00;
    document.getElementById('cronometro').innerText = "00:00:00";
}