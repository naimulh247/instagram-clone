const express = require('express')
const app  = express()
const port = 5000
const mongooes = require('mongoose')
const {MONGOURL} 


mongooes.connect




app.listen(port, ()=>{
    console.log("Server is running on, http://localhost:"+port)
})