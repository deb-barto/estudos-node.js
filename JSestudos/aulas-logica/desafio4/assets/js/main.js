

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


function criaHoraSec(segundos){
    const data = new Date (segundos * 1000); // para passar para segundos os ms
    return data.toLocaleTimeString('pt-BR',{
        hour12: false ,
        timeZone : 'UTC'
    })
}

function iniciaRelogio(){
    timer = setInterval( function(){
        segundos ++;
        relogio.innerHTML = criaHoraSec(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){
  relogio.classList.remove('pausa')
  clearInterval(timer);
  iniciaRelogio();
})
pausar.addEventListener('click', function(event){
   relogio.classList.add('pausa')
   clearInterval(timer);
})
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})
