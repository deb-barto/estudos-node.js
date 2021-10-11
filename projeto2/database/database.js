const Sequelize = require ("sequelize");

const connection = new Sequelize('blogNode','root','',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;