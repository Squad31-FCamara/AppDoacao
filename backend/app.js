const express = require('express');
const app = express (); 
const Sequelize = require('sequelize')

    //ConexÃ£o com banco de dados 
    const sequelize = new Sequelize('fcamara','root','12345', {
    host: "localhost",
    dialect: 'mysql'
    })
    //Rotas 
    app.get('/', function(req, res){
        res.sendFile(__dirname +"/index.html")
    })
    app.get('/cadastroaluno', function(req, res){
        res.sendFile(__dirname +"/cadastro-aluno.html")
    })
    app.get('/cadastrodoador', function(req, res){
        res.sendFile(__dirname +"/cadastro-doador.html")
    })
    app.listen(8081, function(){
    console.log("EstÃ¡ rodando em http://localhost:8081");});
