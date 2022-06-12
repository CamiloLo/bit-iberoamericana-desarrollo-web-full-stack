const express = require('express');
const cors= require('cors')
const mongoose = require ('mongoose')
const usersRouter = require ('./routes')


const server = express();
server.use(cors())
server.use(express.json())
server.use('/api/v1/users', usersRouter)


mongoose
.connect('mongodb://localhost/bitUsers')
.then(()=> console.log('Users database connected'))
.catch((err)=> console.log(`Fail connetion, error : ${err}`))


server.use('/', (req, res) => res.json({ usersRootOnline: true }));










server.listen(4000, () => console.log('Users server running on port 4000'));