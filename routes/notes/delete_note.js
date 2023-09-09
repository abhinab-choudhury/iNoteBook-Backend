const express = require('express')
const router = express.Router()
const Notes = require('../../models/Notes')
const fetchuser = require('../../middlewares/fetchuser')


router.delete('/:id', fetchuser, async (req,res) => {

    try {
        // find the note to be Deleted
        let note = await Notes.findById(req.params.id)

        if(note.user.toString() !== req.user.id) {
            return res.status(401).send("Unauthorised Acces: Changes Denied")
        }
    
        note =  await Notes.findByIdAndDelete(req.params.id)
    
        return  res.status(200).send("Deletion Successful")
    } catch (error) {
        res.status(500).json({ "erroe": error.message})
    }
})

module.exports = router