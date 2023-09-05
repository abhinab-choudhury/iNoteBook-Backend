const express = require('express')
const User = require('../models/User')
// const { body, validationResult } = require('express-validator')
const router = express.Router();


// Create Endpoint for user registration. at /auth/v1/signin
router.post('/',(req,res) => {
    try {
        const user = User(req.body)
        user.save()
        console.log(req.body)
        res.json(user)

    } catch (error) {
        res.status(500).json({"message":error.message})
    }
    
    
})
module.exports = router