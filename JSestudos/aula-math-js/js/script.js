let numero = Number(prompt("digite um numero:"))

const numeroTitulo = document.getElementById("numero");
numeroTitulo.innerHTML= numero

const texto = document.getElementById("texto");
texto.innerHTML=`
<div>   <p> sua raiz quadrada é: ${ (numero ** (0.5)) } </p>
        <p>${numero} é inteiro:${Number.isInteger(numero)}</p>
        <p>É NaN:${Number.isNaN(numero)}</p>
        <p>Arredondado para baixo:${Math.floor(numero)}</p>
        <p>Arredondado para cima:${Math.ceil(numero)}</p>
        <p>Com duas casas decimais:${numero.toFixed(2)}</p>
</div>`;

