require("dotenv").config() // Helps Acccess .env.local file
const express = require('express')
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs') // Generate hash for passoword
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_KEY

// Create Endpoint for user registration. at /auth/v1/signin
router.post('/', [
    // setting up the parameter for username,email,password and ......
    body('email', 'Invalid Email Address').isEmail(),
    body('password', 'Too short to be used as Password').isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req)
    
    if (!error.isEmpty()) {
        return res.status(400).json({ "error": "Enter Valid Signin Details" })
    }

    try {
        let signin_user = await User.findOne({email: req.body.email})
        // check if there exixts a user already with same email adderess....
        if(!signin_user) {
            return res.status(400).json({ "error":"Enter Valid Signin Details" })
        } else {
            const password = req.body.password
            /*
            ..............
            ...............
            ............
            */
        }
        /////////////////////////
        const data = {
            user:{
                id:user.id
            }
        }

        const token = jwt.sign(data, JWT_SECRET);
        res.json({token})
        
    } catch (error) {
        res.status(400).json({ "message": error.message })
    }

})
module.exports = router