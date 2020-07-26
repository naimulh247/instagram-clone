const express = require('express')
const app  = express()
const port = 5000
const mongooes = require('mongoose')
const {MONGOURL} = require('./keys') 
require('./models/us')


mongooes.connect(MONGOURL,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongooes.connection.on('connected', ()=>{
    console.log("connected to mongo")
})
mongooes.connection.on('error', (err)=>{
    console.log("error connecting to mongo", err)
})




app.listen(port, ()=>{
    console.log("Server is running on, http://localhost:"+port)
})