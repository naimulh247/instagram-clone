const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.send("Router works")
})

router.post('/signup', (req, res)=>{
    const {name, email, password} = req.body
    if(!email || !password || !name){
        res.json({er})
    }
})


module.exports = router