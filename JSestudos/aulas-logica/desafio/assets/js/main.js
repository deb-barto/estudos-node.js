const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){

    e.preventDefault(); // evita de enviar

    const  inputPeso = e.target.querySelector('#peso')    //vai receber o elemento que ta recebendo o evento
    const  inputAltura = e.target.querySelector('#altura') 

    const  peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if ( !peso){
        setResultado("peso invalido", false)
        return;
    }

    if ( !altura){
        setResultado("altura invalida", false)
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
 
    const msg = ` Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true)

});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1', 'Obesidade 2', 'Obesidade 3'];
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1]
    if(imc <18.5) return nivel[0]
}

function getImc(peso, altura){
    const imc = peso/ altura**2 ;
    return imc.toFixed(2)
}

function criaP(){  // essa sera uma função que cria paragrafos

    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){ // essa é a função que imprime o paragrafo

    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ' '; // zeramos o html 

    const p = criaP()

    if(isValid){
        p.classList.add('paragrafo-resultado') //estamos criando uma classe agora para acrescentar
    }else{
        p.classList.add('bad')
    }


    p.innerHTML=msg;
    resultado.appendChild(p);  // insere elemento novo
}