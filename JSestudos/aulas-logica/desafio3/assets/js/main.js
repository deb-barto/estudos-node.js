const paragrafos = document.querySelector('.paragrafos')// seleciona a class
const ps = paragrafos.querySelectorAll('p') // aqui seleciona todos os p dentre da div que tem o paragrafo como classe

const estilos = getComputedStyle(document.body) /// aqui eu estou pegando estilos do body
const backgroundColor = estilos.backgroundColor;// pegar a cor de fundo do body
console.log(backgroundColor);

for (let p of ps){
    p.style.backgroundColor = backgroundColor; //add a tag style
    p.style.color = "#fff"; 
}
