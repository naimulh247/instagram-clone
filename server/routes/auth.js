const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (req, res)=>{
    const {name, email, password} = req.body
    if(!email || )
})


module.exports = router