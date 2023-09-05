const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    obj = {
        header:{
            title:"iNoteBook",
            description:"This API manages login and sigin operation for iNoteBook.",
            version:"1.0.2",
        },
        message:"Hello World From iNoteBook-Backend !!! 🔥🎉"
    }
    console.log(obj)
    res.json(obj)
}) 

module.exports = router