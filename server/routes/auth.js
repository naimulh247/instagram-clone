const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', jsonParser,(res, req)=>{
    console.log(req.body)  
})


module.exports = router