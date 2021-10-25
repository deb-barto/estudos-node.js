const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numeros){
    if(num === 2 || num ===5){
        console.log("numeros excluidos")
        continue;  /// continue pula os numeros
    }
    console.log(num)
    if (num ===7){
        console.log("sete encontrado, estou saindo!")
        break;  /// sai do laço
    }
}



