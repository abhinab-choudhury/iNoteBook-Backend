const mongoose = require("mongoose")
const mongoURI = "mongodb://0.0.0.0:27017/iNoteBook"

const connectToMongoDB = () => {
    // if(mongoose.connect(mongoURI)) {
    //     console.log("🎉🎉 Connection Successfull !! 🎉🎉")
    // }
    mongoose.connect(mongoURI).then(
        () => {
            console.log("Connection Successfull")
        },
        err => {logError(err)}
    );
}

module.exports = connectToMongoDB

