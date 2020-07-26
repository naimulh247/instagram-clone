const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (res, req)=>{
    console.log(req.body.name)  
})


module.exports = router