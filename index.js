const connectToMongoDB = require("./db")
const express = require("express")

connectToMongoDB()
const app = express()
app.use(express.json()) // middleware


app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes',require('./routes/notes.js'))

const port = 5000
app.listen(port,() => {
  console.log("Successfully Connected to port " +  port)
})