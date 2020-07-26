const express = require('express')
const app  = express()
const port = 5000

const customMiddleware = (req, res, next)=>{
    console.log("middleware executed!")
    next()
}


app.use(customMiddleware)

app.get('/', (req, res)=>{
    res.send("hello WOrld")
})

app.listen(port, ()=>{
    console.log("Server is running on, http://localhost:")
})