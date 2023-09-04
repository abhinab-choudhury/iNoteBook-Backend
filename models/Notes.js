const mongoose = require("mongoose")

const NoteScheme = new Scheme({
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

module.exports = mongoose.model("notes",NoteScheme)