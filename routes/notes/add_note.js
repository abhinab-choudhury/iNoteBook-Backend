const express = require('express')
const Notes = require("../../models/Notes")
const { body, validationResult } = require('express-validator')
const routes = express.Router()
const fetchuser = require('../../middlewares/fetchuser')

routes.post('/',[
    body('title', 'Title must be at-least 2 Characters').isLength({min: 5}),
    body('note', 'Notes must be at-least 10 Characters').isLength({min: 10}),
], fetchuser ,async(req,res) => {

    try {
        const error = validationResult(req)
        if(!error.isEmpty()) {
            return res.status(400).json({errors: error.array()})
        }
        const note = await Notes.create({
            user:req.user.id,
            title: req.body.title,
            note:req.body.note,
            tag:req.body.tag
        })

        return res.json(note)
    } catch (error) {
        res.status(500).json({ "erroe": "Internal Server Error"})
    }
} )

module.exports = routes