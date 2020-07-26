const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (res, req)=>{
    console.log(req.body)  
})


module.exports = router