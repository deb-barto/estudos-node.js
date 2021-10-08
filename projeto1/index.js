const express = require('express');
const app = express();
// infomando o express usar o ejs como view engine
app.set('view engine','ejs');
app.use(express.static('public'));
app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produto = [
        {nome:" Doritos", preco:3.14},
        {nome:"Coca-Cola", preco:2.50},
        {nome:"Leite",preco:1.45},
        {nome:"banana", preco:5},
    ]

    res.render('index',{
        nome: nome,
        lang: lang,
        empresa : "DEDEBARTO",
        inscritos: 1,
        msg : exibirMsg,
        produtos: produto,
    });
});

app.listen(8080,()=>{
    console.log("app rodando")
})