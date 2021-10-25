function soma (x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw ('x e y precisam ser numeros')
    }
    return x+y
}
try{
    console.log(soma(1,2))
    console.log(soma('a',2))
}catch(error){
    console.log(error)
}


function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new Error ('esperando instancia de date');
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br',{

    })

}

    try{
        const data = new Date ( '01-01-1970 13:00:00')
        const hora = retornaHora();
        console.log(hora);
    } catch(error){
        console.log(error)
        // tratar o erro
    }finally{
        console.log("tenha um bom dia")
    }




    /// setIntervel e SetTimeout

    function mostraHora(){
        let data = new Date();
        return data.toLocaleTimeString('pt-br')
    }
    const timer = setInterval( function() {console.log(mostraHora())} , 1000 ); // executa a função de cima de 1 em 1 segundo
    setTimeout ( function () {clearInterval(timer)}, 5000);  // executa a função em um tempo especifico



