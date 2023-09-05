const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchema = new Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    username: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date: {
        type:Date,
        default: Date.now,
        require:true
    }
})

module.exports = mongoose.model('user',UserSchema)
