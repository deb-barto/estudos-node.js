/**FALSY
//false >  falso literal
0
'' "" ``
null
undefined
NaN
*/

console.log('luiz' && null && 'Maria')  // retorna sempre o primeiro falsy, ou o ultimo verdadeiro.



/// operadores ternarios
// ? :

const pontuacaoUsuario = 999;

/*if (pontuacaoUsuario >=1000){
    console.log('usuario vip')
}else{
    console.log("usuario normal")
}
*/

/// podemos encurtar a função acima 
// (condição) ? 'valor para verdadeiro' : 'valor para falso 


const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario Vip' : 'Usuario normal';
console.log(nivelUsuario)