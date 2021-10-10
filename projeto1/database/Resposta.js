const Sequelize = require ("sequelize");
const connection = require ("./database.js")

const Resposta = connection.define('respostas',{
    corpo:{
        type:Sequelize.TEXT,
        allowNull: false
    },
    respostasId:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
});
Resposta.sync({force:false})

module.exports = Resposta;
