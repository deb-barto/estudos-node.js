/*
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemana(diaSemana){

    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;   
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto; 
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;   
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 0:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;                      
        }
}

function getNomeMes(numeroMes){

    let mes;

    switch(numeroMes){
        case 0:
            mes = 'Janeiro';
            return mes;
        case 1:
            mes = 'Fevereiro';
            return mes;   
        case 2:
            mes= 'Março';
            return mes;
        case 3:
            mes= 'Abril';
            return mes; 
        case 4:
            mes = 'Maio';
            return mes;   
        case 5:    
            mes = 'Junho';
            return mes;
        case 6:
            mes = 'Julho';
            return mes;
        case 7:
            mes = 'Agosto';
            return  mes;
        case 8:
            mes = 'Setembro';
            return mes;   
        case 9:
            mes = 'Outubro';
            return mes;
        case 10:
            mes = 'Novembro';
            return mes; 
        case 11:
            mes = 'Dezembro';
            return mes;
        }
}

function criaDate(date){
    const diaSemana = data.getDay();
    const nomeMes = data.getMonth();

    const nomeDiaSemana = getDiaSemana(diaSemana)
    const nomeDoMes = getNomeMes(nomeMes)

    return `${nomeDiaSemana}, ${date.getDate()} de ${nomeDoMes} de ${date.getFullYear()}
     - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

h1.innerHTML = criaDate(data);
*/

const h1 = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
    dateStyle : 'full',
    timeStyle : 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes)