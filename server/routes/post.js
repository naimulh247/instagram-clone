const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")


router.post('/createpost',requireLogin, (req, res)=>{
    const {title, body, pic} = req.body
    console.log(title,body,pic)
    if(!title || !body || !pic){
        return res.status(422).json({error:"please add all fields"})
    }
    
    const post = new Post({
        title,
        body,
        pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',requireLogin, (req, res)=>{
    Post.find({postedBy:req.user._id})
        .populate("", "_id name")
        .then(mypost=>{
            res.json({mypost})
        })
        .catch(err=>{
            console.log(err)
        }) 
})

 

module.exports = router