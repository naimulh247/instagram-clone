const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (res, req)=>{
    req.body.name
})


module.exports = router