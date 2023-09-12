var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()

dotenvExpand.expand(myEnv)

const express = require('express')
const User = require('../../models/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs') // Generate hash for passoword
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.VITE_JWT_KEY

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
    
    // validated the data entered
    if (!error.isEmpty()) {
        return res.status(400).json({ "error": error})
    }
    else if(req.body.password !== req.body.confirmPassword) {
        // check if the password and Confirm Password are same or not 
        // if different returns a "password mismatch" error.
        return res.status(400).json({ "error": "password mismatch" })
    }

    try {
        let check_user_email = await User.findOne({email: req.body.email})
        // check if there exists a user already with same email adderess....

        let check_user_username = await User.findOne({username: req.body.username})
        // check if there exists a user already with same username....

        if(check_user_email){
            return res.status(400).json({error:"email already in user"})
            // now if the user with the email already exists then we can redirect
            // him to `/login` or `/changePassword`
        }
        else if(check_user_username) {
            return res.status(400).json({error:"username not avilable"})
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
        res.status(500).json({ "message": error.message})
    }

})
module.exports = router
