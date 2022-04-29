const express = require('express')

const server =  express()
const port = 4000

server.get('/', (request, response) => {
    response.send('Hola desde la raíz');
  });

server.listen(port, ()=>{(console.log(`Servidor corriendo en localhost, en el puerto ${port}`)
)} )
