const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const myEnv = dotenv.config()

dotenvExpand.expand(myEnv)

const express = require('express')
const User = require('../../models/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const bcrypt = require('bcryptjs') // Generate hash for passoword
const jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.VITE_REACT_APP_JWT_KEY

// Create Endpoint for user registration. at /auth/v1/signin
router.post('/', [
    // setting up the parameter for username,email,password and ......
    body('email_username', 'Invalid email/username').notEmpty(),
    body('password', 'Too short to be used as Password').isLength({ min: 5 })
], async (req, res) => {
    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({ "error": "Enter Valid Signin Details" })
    }

    const { email_username, password } = req.body
    try {
        // check for valid Email id 
        let isValidEmail = () => {
            for (let i = 0; i < email_username.length; i++) {
                if (email_username[i] == '@') {
                    return true
                }
            }
            return false
        }
    
        let user;
        if (isValidEmail) {
            user = await User.findOne({ email: email_username })
            if (!user) {
                user = await User.findOne({ username: email_username })
            }
        } else {
            user = await User.findOne({ username: email_username })
        }

        // check if there exixts a user already with same email adderess....
        if (!user) {
            return res.status(400).json({ "error": "Enter Valid Signin Details" })
        }
        const password_compair = await bcrypt.compare(password, user.password)
        if (!password_compair) {
            return res.status(400).json({ "error": "Enter Valid Signin Details" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const token = jwt.sign(data, JWT_SECRET);
        res.json({ token })

    } catch (error) {
        res.status(500).json({ "message": error.message })
    }

})
module.exports = router
