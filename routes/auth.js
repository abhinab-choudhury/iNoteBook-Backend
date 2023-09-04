const express = require('express')
const routes = express.Router()

// Create a 
routes.get('/',(req, res) => {
    console.log(req.body)
    res.send("Hello From auth.js")
})
module.exports = routes