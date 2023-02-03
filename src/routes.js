const express = require('express');
const usuarioController = require('./Controller/usuarioController');

const routes = express.Router();

routes.get('/', function(req,res){
res.json({message: " bem vindo ao Back End  MongoDB"})
})
routes.get('/usuario', usuarioController.index)
routes.post('/usuario', usuarioController.store)

module.exports = routes;