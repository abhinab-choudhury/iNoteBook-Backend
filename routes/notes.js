const express = require('express')
const Notes = require("../models/Notes.js")
const User = require('../models/User.js')
const { body, validationResult } = require('express-validator')

const routes = express.Router()

routes.get('/',[
    body('title').exists(),
    body('note').exists(),
    body('user_email').isEmail()
], async(req,res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) {
        return res.status(400).json({"error-1":error.message})
    }

    try {
        let user = await User.findOne({email:req.body.user_email}) // Gets the user via enter email Address in User Collection
        console.log(user)
        if(!user) {
            return res.status(400).json({"error-2" : "user not Found"})
        }
        const note = await Notes.create({
            title: req.body.title,
            note:req.body.note,
            user_email:req.body.user_email,
            tag:req.body.tag
        })

        return res.json(note)
    } catch (error) {
        return res.status(400).json({"error-3":error.message})
    }
} )

module.exports = routes