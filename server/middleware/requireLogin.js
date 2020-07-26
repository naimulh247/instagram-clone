const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')

module.exports=(req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer", "")
    jwt.verify(token,JWT_SECRET,(err, payload)=>{
        
    } )
}