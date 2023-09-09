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
        require:true,
        require:true
    },
    email: {
        type:String,
        unique:true,
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
const User = mongoose.model('user',UserSchema)
User.createIndexes()
module.exports = User
