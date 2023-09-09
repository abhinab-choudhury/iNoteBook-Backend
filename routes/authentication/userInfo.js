const express = require('express')
const User = require('../../models/User')
const router = express.Router();
const fetchuser = require('../../middlewares/fetchuser')


router.post('/', fetchuser, async(req,res) => {
    try {
        const userID = req.user.id
        const user = await User.findById(userID).select("-password")
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json("Internal Server Error")
    }    
})

module.exports = router