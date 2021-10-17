// função com parametro!
function saudacao (nome){
    return (`vamos invadir seu planeta, ${nome}!`)// vai salvar na variavel da função
}
//aqui atribuimos o argumento e chamanos o retorno da função
const variavel = saudacao('Deb')
console.log(variavel)

// função classica! kkkkkkkk
function soma(a,b){
    return a+b;
}
console.log(soma(2,4))



// se eu atribuo um valor no meu parametro mas não defino os valores na hora de chamar a função
// o js define o a e b como valors pre-definidos
function soma2(a = 1, b = 1 ){
    return a+b;
}
console.log(soma2(4))   /// x =4 e o y ele assume o valor pré definido que é y=1
console.log(soma2())  //  x=1 e y=1 logo x+y=2 retorna 2 


/// funções anonimas
const raiz  = function (n){
    return n ** 0.5;
};
console.log(raiz(9))//  retorna 3

/// funções anonimas arrow functions
const raiz2 = n => n ** 0.5; // com ou sem chaves com ou sem paratenses (n) => { n ** 0.5} funciona

console.log(raiz(25))//  retorna 5