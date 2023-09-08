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
    body('username', 'username cannot be Empty').isLength({ min: 1 }),
    body('first_name', 'first_name cannot be Empty').isLength({ min: 1 }),
    body('last_name', 'last_name cannot be Empty').isLength({ min: 1 }),
    body('email', 'Invalid Email Address').isEmail(),
    body('password', 'Too short to be used as Password').isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req)
    
    if (!error.isEmpty()) {
        return res.status(400).json({ "error": error })
    }

    try {
        let check_user = await User.findOne({email: req.body.email})
        // check if there exixts a user already with same email adderess....
        if(check_user) {
            return res.status(400).json({error:"User with this Email already exists."})
        }
        
        const SALT = await bcrypt.genSalt(10)
        const SECURED_PASSWORD = await bcrypt.hash(req.body.password, SALT)
        // create user
        const user = await User.create({
            username: req.body.username,
            password: SECURED_PASSWORD,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name
        })
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