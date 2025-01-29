//6e496b0c0a1d24da18427ab07fb3e8bd


//Mostrar a temperatura, será alerado futuramente isso é apenas o teste
var temperatura = document.getElementById('temperatura').innerHTML;
var show_temperatura = document.getElementById('show_temperatura');

if(temperatura>15){
    let temperatura_alta = `<div class="calor">☼ ${temperatura}</div>`;
    show_temperatura.innerHTML += temperatura_alta;
} 
else {
    let temperatura_baixa = `<div class="frio">❆ ${temperatura}</div>`;
    show_temperatura.innerHTML += temperatura_baixa;
}
