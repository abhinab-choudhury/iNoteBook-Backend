const connectToMongoDB = require("./db")
const express = require("express")

connectToMongoDB()
const app = express()

app.get('/',(req,res) => {
    res.send('iNoteBook Backend: Hello World !!!! 🔥🎉')
})

const port = 5173
app.listen(port,() => {
    console.log(`Connected to http://localhost:${port}`)
})

