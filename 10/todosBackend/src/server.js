const express = require('express')
const cors= require('cors')
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const todosRouter = require('./routes/todos')

const server =  express()
const port = 4100

server.use(cors())
server.use(express.json())
server.use('/api/v1', todosRouter)

dotenv.config();


mongoose
.connect('mongodb://localhost/bitTodos')
.then(()=> console.log('Todos database connected') )
.catch(()=> console.log('ERROR AL CONECTAR A LA BASE DE DATOS'))



  server.get('/', (request, response) => {
    response.send('Hola desde la raíz');
  });

  server.listen(port, () => {
    console.log(`Todos server running on port ${port}`);
  });