const express = require('express');
const app = express (); 
const Sequelize = require('sequelize')

    //Conexão com banco de dados 
    const sequelize = new Sequelize('fcamara','root','12345', {
    host: "localhost",
    dialect: 'mysql'
    })
    //Rotas 
    app.get('/', function(req, res){
        res.sendFile(__dirname +"/index.html")
    })
    app.get('/cadastroaluno', function(req, res){
        res.sendFile(__dirname +"/cadastroaluno.html")
    })
    app.get('/cadastrodoador', function(req, res){
        res.sendFile(__dirname +"/cadastrodoador.html")
    })
    app.listen(8081, function(){
    console.log("Está rodando em http://localhost:8081");});
