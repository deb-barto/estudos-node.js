const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database.js')
//view engine
app.set('view engine','ejs');

//static 
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//database

connection
    .authenticate()
    .then(()=>{
        console.log('conexão feita com sucesso')
    }).catch((error) =>{
        console.log(error);
    });

app.get("/",(req, res) => {
    res.render("index")
})

app.listen(8080, ()=>{
    console.log("Servidor está vivo!")
})