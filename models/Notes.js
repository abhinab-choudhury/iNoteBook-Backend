const mongoose = require("mongoose")
const { Schema } = mongoose

const NoteScheme = new Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        require: true
    },
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
    date:{
        type:Date,
        default: Date.now,
        require:true
    }
})

const note = mongoose.model("notes",NoteScheme)
note.createIndexes()
module.exports = note