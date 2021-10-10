const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Pergunta = require ("./database/Pergunta.js")
const Resposta = require ("./database/Resposta.js")
// conectando com database
const connection = require("./database/database.js");

// database
connection
    .authenticate()
    .then(() => {
        console.log("conexão feita com o banco de dados")
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    });

// infomando o express usar o ejs como view engine
app.set('view engine','ejs');

// informando pasta de estaticos
app.use(express.static('public'));

// linkar o body parser com o express
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json());


// rotas 

app.get("/",(req, res) => {
    Pergunta.findAll({ raw:true, order:[
        ['id','DESC']
    ] }).then(perguntas =>{
        res.render('index',{
            perguntas : perguntas
        });
    });
   
});

app.get("/quest",(req, res) => {
    res.render('quest');
});

app.post("/takequest",(req, res) => {
    var title = req.body.title;
    var description = req.body.description;

    // inserir dados na tabela
    Pergunta.create({
        titulo: title,
        descricao:description
    }).then(()=>{
        res.redirect('/');
    });
});

app.get("/question/:id",(req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where:{id : id}
    }).then(pergunta =>{
        if(pergunta != undefined){ //pergunta foi achada

            Resposta.findAll({
                where: { respostasId : pergunta.id}
            }).then(respostas =>{

            res.render("pergunta",{
                pergunta : pergunta,
                respostas: respostas
                });
            });
        }else{ //não encontrada
            res.redirect("/")
        }
    });
});

app.post("/responder",(req, res) => {
    var corpo = req.body.corpo;
    var respostasId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        respostasId: respostasId

    }).then(()=>{
        res.redirect("/question/"+respostasId)
    })
})


app.listen(8080,()=>{
    console.log("app rodando")
})