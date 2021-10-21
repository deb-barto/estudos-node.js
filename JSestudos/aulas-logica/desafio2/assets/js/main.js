const elementos = [
    {tag : 'p', texto:'Criando um p'},
    {tag : 'div', texto:'criando uma div'},
    {tag : 'footer', texto:'criando um footer'},
    {tag : 'section', texto:'criando um section'}
];

const container = document.querySelector('.container');
const div = document.createElement('div'); //cria elemento no fim

for (let i = 0 ; i < elementos.length ; i++){
    let { tag, texto} = elementos[i];
    let elemento = document.createElement(tag);
    elemento.innerHTML = texto;
    div.appendChild(elemento)
}

container.appendChild(div)
 

