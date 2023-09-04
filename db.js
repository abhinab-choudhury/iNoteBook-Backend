const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017"

const connectToMongoDB = () => {
    
    if(mongoose.connect(mongoURI)) {
        console.log("Connection Successfull")
    } else {
        console.log("Connection Failed")
        return
    }

}

module.exports = connectToMongoDB

