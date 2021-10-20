const data1 = new Date(2019,3, 1, 40,30, 2); //A/M/D/H/min/s/ms
const data2 = new Date('2020-04-20 20:20:59'); //A/M/D/H/min/s/ms


console.log('Dia', data2.getDate());
console.log('Mes', data2.getMonth()+1); /// mes começa do zero
console.log('Ano', data2.getFullYear());
console.log('Hora', data2.getHours());
console.log('Min', data2.getMinutes());
console.log('segs', data2.getSeconds());
console.log('ms', data2.getMilliseconds());
console.log('dia da semana', data2.getDay());// 0 é domingo e 6 sabado

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

/// pegando data atual


function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${sec}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);


