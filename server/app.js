const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongooes = require('mongoose')
const {MONGOURL} = require('./keys') 
const port = 5000
require('./models/user')




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

app.use(bodyParser.json())
app.use(require('./routes/auth'))


app.listen(port, ()=>{
    console.log("Server is running on, http://localhost:"+port)
})