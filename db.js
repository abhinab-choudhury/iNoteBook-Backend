const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/iNoteBook"

const connectToMongoDB = () => {
    // if(mongoose.connect(mongoURI)) {
    //     console.log("🎉🎉 Connection Successfull !! 🎉🎉")
    // }
    mongoose.connect(mongoURI, () => {
        console.log("🎉🎉 Connection Successfull !! 🎉🎉")
    })
}

module.exports = connectToMongoDB

