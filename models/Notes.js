const mongoose = require("mongoose")
const { Schema } = mongoose

const NoteScheme = new Schema({
    title:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true
    },
    tag:{
        type:String
    },
    user_email:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default: Date.now,
        require:true
    }
})

const note = mongoose.model("notes",NoteScheme)
note.createIndexes()
module.exports = note