const express = require('express');
const app = express (); 
const handlebars = require('express-handlebars')

    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    //Conexão com banco de dados 
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('fcamara','root','12345', {
    host: "localhost",
    dialect: 'mysql'
    })

    app.listen(8081, function(){
    console.log("Está rodando em http://localhost:8081");});