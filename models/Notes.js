const mongoose = require("mongoose")

const noteScheme = new Scheme({
    title:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    }
})

module.exports = mongoose.model("notes",noteScheme)