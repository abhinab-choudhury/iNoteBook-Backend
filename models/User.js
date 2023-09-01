const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true,
        unique: true
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
    }
})

module.exports = mongoose.model('user',userSchema)