// escreva uma função que recebe 2 numeros e retorna o maior deles.


const numero1 = Math.floor((Math.random())*10)
const numero2 = Math.floor((Math.random())*10)

function numeroMaior(num1, num2){
    while (num1 === num2){
        num1=Math.floor((Math.random())*10)
    }
    console.log(num1, num2)
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}
const resultado = numeroMaior(numero1, numero2);
console.log(resultado)


/// fazer melhorias na função minha

const numero3 = Math.floor((Math.random())*10)
const numero4 = Math.floor((Math.random())*10)

while (numero3  === numero4){
    numero3=Math.floor((Math.random())*10)
}

console.log(numero3, numero4);

const numeroMaior = (num1, num2) => num1 > num2 ? num1 : num2;  // função foi de 11 linhas para 1

console.log(numeroMaior(numero3, numero4))

// se mete maluco  xD




// ...> solução do professor
function max(x,y){
    if(x>y){
        return x;
    }else{
        return y;
    }
}
console.log(max(10,2))

/// fazer melhorias na função professor

function max2(x,y){
    return x > y? x : y; // reduz toda a função
}
console.log(max2(100,2))


/// fazer melhorias mais melhores na função professor
const max3 = (x,y)=>{x > y? x : y}
console.log(max2(1000,2))