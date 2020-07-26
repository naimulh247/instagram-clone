const express = require('express')
const router = express.Router()
const mongoose 


router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (req, res)=>{
    const {name, email, password} = req.body
    if(!email || !password || !name){
       return res.status(422).json({error:"Please add all fields"})
    }
    res.json({message:"Successfully posted"})
})


module.exports = router