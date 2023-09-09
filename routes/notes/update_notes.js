const express = require('express')
const router = express.Router()
const Notes = require('../../models/Notes')
const fetchuser  = require('../../middlewares/fetchuser')

router.put('/:id',fetchuser, async(req, res) => {

    try {

        const {title, note, tag} = req.body
    
        const newNote = {}
        if(title){newNote.title = title}
        if(note){newNote.note = note}
        if(tag){newNote.tag = tag}
    
    
        // params stant for parameters as we are pass id in PUT request '/:id' 
        // this id can be accessed by params this is some-what similar to 
        // page number in New API which was a parameter via this i an alse
        // provide the funcationality of page number in my API
    
        const user_note = await Notes.findById(req.params.id); // Note written by the user who is currently logged-in 
        if(!user_note) {
            return res.status(404).json({"error":"Page Not Found"})
        }
        if(user_note.user.toString() != req.user.id) {
            return res.status(401).send("Unauthorised Acces: Changes Denied")
        }
    
        // new parameter will add a new filed is avilable in PUT request.
        const created_note = await Notes.findByIdAndUpdate(id=req.params.id,{$set: newNote}, {new:true})
        res.status(200).json(created_note)
    } catch (error) {
        res.status(500).json({ "erroe": error.message})
    }
})

module.exports = router