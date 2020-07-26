const express = require('express')
const app  = express()
const port = 5000
const mongooes = require('mongoose')
const {MONGOURL} = require('./keys') 


mongooes.connect(MONGOURL)
mongooes.connection.on('connected', ()=>{
    console.log("connected to mongo")
})
mongooes.connection.on('error', ()=>{
    console.log("connecting to mongo")
})




app.listen(port, ()=>{
    console.log("Server is running on, http://localhost:"+port)
})