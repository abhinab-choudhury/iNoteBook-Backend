const express = require('express')
const User = require("../models/User")
const routes = express.Router()

routes.get('/', (req,res) => {
    res.send("Hello From notes.js")
} )

module.exports = routes