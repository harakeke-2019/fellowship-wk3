const express = require('express')
const hbs = require('express-handlebars')
const path =require ('path')
const moonRoutes = require('./routes/moon')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname,'public')))

// Routes

server.use('/', moonRoutes)

module.exports = server
