const alunos =['Luiz', 'Maria', 'Adrian', 'Willian', 'Roberto']
// arrays são indexados pelo elemento luiz = 0, maria = 1, joão =2 etc.
// para acessar a palavra é igual strint 
console.log(alunos[0]) // retorna luiz

//podemos editar valores

alunos[0] = 'Eduardo'  /// agora o eduardo é Luiz.

// podemos add assim

alunos[2] = 'Luiza' // acrescimo de Luiza

console.log(alunos)

/// para saber a quantidade de elementos

console.log(alunos.length);

//***ATENÇÃO****/ para acrescentar quantidade de alunos de um jeito diferente

alunos [alunos.length] = 'Luana'  // colocou Luana na 4 posição, sendo o quinto elemento
console.log(alunos)
// mas tem uma função que add um elemento automaticamente ao fim
alunos.push('Otavio')
console.log(alunos)

// PARA ADICIONAR NO COMEÇO:
alunos.unshift('Luiz');
console.log(alunos)

// Para remove elemnto do final POP
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// para remover elemento do inicio
const inicioRemov = alunos.shift();
console.log(inicioRemov);
console.log(alunos)

// para remover sem mudar os indices ( vai ficar um elemento vazio)
//delete alunos[1];
//console.log(alunos[1]) // vai retornar um elemento vazio indefinido.

/// Para fatiar a função;

console.log(alunos.slice(0,3)) // vai de eduardo até luiza
console.log(alunos.slice(0,-4)) // vai retornar tamanho do array menos 4

console.log(typeof alunos)// retorna objeto  (??) vai entender
console.log(alunos instanceof Array) // retorna true ou false > se for array true
