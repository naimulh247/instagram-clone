const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User") 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")







module.exports = router