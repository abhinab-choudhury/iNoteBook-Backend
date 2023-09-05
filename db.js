const mongoose = require("mongoose")
const mongoURI = "mongodb://127.0.0.1:27017/iNoteBook"

const connectToMongoDB = async() => {
    
    if(await mongoose.connect(mongoURI)) {
        console.log("Connection Successfull")
    } 

}

module.exports = connectToMongoDB

