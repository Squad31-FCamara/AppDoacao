const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.set('view engine', 'ejs');
    app.set('views', './src/views/');


    consign()
        .include('controllers')
        .into(app)

    return app
}