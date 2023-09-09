const connectToMongoDB = require("./db")
const express = require("express")

connectToMongoDB()
const app = express()
const port = 5000

app.use(express.json()) // middleware --parses incoming requests with JSON payloads


app.use('/', require('./routes/index.js'))
app.use('/api/v1/signup', require('./routes/authentication/signup')) // Endpoint for user registration.
app.use('/api/v1/signin', require('./routes/authentication/signin')) // Endpoint for user sign-in.
app.use('/api/v1/userInfo', require('./routes/authentication/user_Info')) // Endpoint for getting info for loged-in user.
// app.use('/api/v1/signout', require('./routes/logout')) // Endpoint to log users out and invalidate their session.
// app.use('/api/v1/forgot-password', require('./routes/forget_password')) // Endpoint to initiate the password recovery process.
// app.use('/api/v1/reset-password', require('./routes/reset_password')) Endpoint to reset the user's password after successful recovery.
app.use('/api/v1/addnote', require('./routes/notes/add_note')) // Endpoint to add data into database 
// app.use('/api/v1/getallnotes', require('./routes/getallnotes')) // Endpoint to get notes from signed-in user
// app.use('/api/v1/update', require('./routes/update')) // Endpoint to update data into database
// app.use('/api/v1/delete', require('./routes/delete')) // Endpoint to delete data into database




app.listen(port,() => {
  console.log("Successfully Connected to port " +  port)
})