const express = require('express')
const Notes = require("../../models/Notes")
const User = require('../../models/User')
const { body, validationResult } = require('express-validator')
const routes = express.Router()

routes.get('/',[
    body('title').exists(),
    body('note').exists(),
    body('user_email').isEmail()
], async(req,res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) {
        return res.status(400).json({"error":"Invalid Input"})
    }

    try {
        let user = await User.findOne({email:req.body.user_email}) // Gets the user via enter email Address in User Collection
        console.log(user)
        if(!user) {
            return res.status(400).json({"error" : "user not Found"})
        }
        const note = await Notes.create({
            title: req.body.title,
            note:req.body.note,
            user_email:req.body.user_email,
            tag:req.body.tag
        })

        return res.json(note)
    } catch (error) {
        res.status(500).json({ "erroe": "Internal Server Erroe"})
    }
} )

module.exports = routes