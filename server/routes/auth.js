const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')


router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (req, res)=>{
    console.log(req.body)  
})


module.exports = router