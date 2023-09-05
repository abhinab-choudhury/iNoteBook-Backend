const express = require('express')
const Notes = require("../models/Notes.js")
const routes = express.Router()

routes.get('/', (req,res) => {
    console.log(req.body)
    const note = Notes.req.body
    note.save()
    res.send(req.body)
} )

module.exports = routes