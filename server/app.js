const express = require('express')
const app  = express()
const port = 5000

const customMiddleware = ()=>{
    console.log("middleware executed!")
}




app.get('/', (req, res)=>{
    res.send("hello WOrld")
})

app.listen(port, ()=>{
    console.log("Server is running on, http://localhost:",port)
})