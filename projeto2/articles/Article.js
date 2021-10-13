const Sequelize = require ("sequelize");
const connection = require ("../database/database.js")
const Category = require ("../categories/category.js")


const Article=  connection.define ('articles',{
    title:{
        type : Sequelize.STRING,
        allowNull : false
    },slug:{
        type : Sequelize.STRING,
        allowNull : false
    },body:{
        type:Sequelize.TEXT,
        allowNull : false
    }
})

// definindo relalcionamentos.
Category.hasMany(Article);
Article.belongsTo(Category);


module.exports = Article