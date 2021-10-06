// Esssa é uma aula de parametros opcionais

const express = require("express") //impotando o express
const app = express(); // inicianto o express em uma variavel

app.get("/blog/:artigo?", function(request,response){
 
    var artigo = request.params.artigo
     if(artigo){
        response.send("<h1>esse é o "+ artigo +"</h1>")
     } else{
        response.send("<h1>Oi!</h1>")
     }
}),
// como usar query parametros
//http://localhost:4000/youtube/canal?canal=irra  (exemplo)
app.get("/youtube/canal", function(request,response){
    var canal = request.query["canal"]
    if(canal){
        response.send("<h1> bem vindo ao "+canal+"!</h1>")
    }else{
        response.send("<h1>nenhum canal fornecido</h1>")
    }
}),

app.get("/ola/:nome?/:empresa?", function(request,response){
    // request é dados pelo usuario 
    // response é resposta  !!!!!!!!!! MUITO LEGAL
    var nome = request.params.nome
    var empresa = request.params.empresa
    response.send("<h1>Oi "+ nome +", meu anjo, como ta o trabalho na "+ empresa +"? </h1>")
}),

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu algum erro!")
    }else{
        console.log("servidor iniciado!")
    }
})
