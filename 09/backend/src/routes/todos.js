const { json } = require('express');
const express = require('express');
const router = express.Router();
const todoSchema = require('../models/todos')

router.post('/todos', (request, response) => {
    console.log('request:', request.body)
    //response.send('Crear Tarea');
    const newTodo = todoSchema(request.body)
    newTodo.save()
    .then((data)=>response.json({success: data})).catch((err)=>response.json(error))
  });


  router.get('/todos', (request, response) => {
    //response.send('Leer todas las tareas');
    todoSchema
    .find()
    .then((data)=>response.json({success: data})).catch((err)=>response.json(error))
  });
  
  router.get('/todos/:id', (request, response) => {
    //response.send('Leer una tarea especifica');
    const{ id } = request.params;
    todoSchema
    .findById(id)
    .then((data)=>response.json({success: data})).catch((err)=>response.json(error))
  });

  router.put('/todos/:id', (request, response) => {
    //response.send('Actualizar una tarea');
    const{ id } = request.params;
    const todo = request.body
    todoSchema
    .updateOne({_id: id}, {$set: todo})
    .then((data)=>response.json({success: data})).catch((err)=>response.json(error))

  });

  router.delete('/todos/:id', (request, response) => {
    //response.send('Elimina una tarea');
    const{id} = request.params;
    todoSchema
    .deleteOne({_id: id})
    .then((data)=>response.json({success: data})).catch((err)=>response.json(error))
  });

  module.exports = router;