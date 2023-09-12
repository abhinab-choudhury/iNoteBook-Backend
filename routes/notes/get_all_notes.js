const express = require('express')
const router = express.Router()
const Notes = require('../../models/Notes')
const fetchuser = require('../../middlewares/fetchuser')

router.get('/', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        return res.json(notes)    
    } catch (error) {
        return res.status(500).json({"error":"Internal Server Error."})
    }

})

module.exports = router
