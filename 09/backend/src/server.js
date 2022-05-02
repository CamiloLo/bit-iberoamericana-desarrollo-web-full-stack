const express = require('express')
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const todosRouter = require('./routes/todos')

const server =  express()
const port = 4000


server.use('/api/v1', todosRouter)
server.use(express.json())
dotenv.config();


mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('conectado a la Base de datos') )
  .catch(()=> console.log('ERROR AL CONECTAR A LA BASE DE DATOS'))



  server.get('/', (request, response) => {
    response.send('Hola desde la raíz');
  });

server.listen(port, ()=>{(console.log(`Servidor corriendo en localhost, en el puerto ${port}`)
)} )
2