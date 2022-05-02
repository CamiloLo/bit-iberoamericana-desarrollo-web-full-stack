const express = require('express');
const router = express.Router();
const todoSchema = require('../models/todos')

router.post('/todos', (request, response) => {
    response.send('Crear Tarea');
    console.log('request:', request.body)
    //const newTodo = 
  });

  router.get('/todos', (request, response) => {
    response.send('Leer todas las tareas');
  });
  
  router.get('/todos/:id', (request, response) => {
    response.send('Leer una tarea especifica');
  });

  router.put('/todos/:id', (request, response) => {
    response.send('Actualizar una tarea');
  });

  router.delete('/todos/:id', (request, response) => {
    response.send('Elimina una tarea');
  });

  module.exports = router;