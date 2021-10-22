// for in  com array

const frutas = [ "Pera", "Uva", "Maça", "Abcaxi"];

for ( let i in frutas){
    console.log(frutas[i])
}  
// varre todo o array, uma forma de far o laço for mais minimalista

// for in com objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Bart',
    idade: '24'
}
for (let i in pessoa ){
    console.log(i);
}
/// varre as chaves

// -> podemos o imprimir o nome de uma pessoas usando
console.log(pessoa['nome'])


// sabendo disso podemos imprimir os valores de cada chave
for ( let index in pessoa){
    console.log(pessoa[index])
}



// For OF - USADOS EM ARRAY // não funciona com objetos

const nomes = ['Deb', 'Adrian', 'Sani', 'Beto'];
    
for ( let i of nomes){
    console.log(i)
}



//For Each - Usados em ARRAY

nomes.forEach(function(elemento){
    console.log(elemento)
})
//                        valor   index   array
nomes.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array)
})

