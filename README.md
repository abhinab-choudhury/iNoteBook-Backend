
[<img style="margin:10px;" width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" >](https://nodejs.org/en/docs)
[<img style="margin:10px;" width="100" height="100" src="https://img.icons8.com/nolan/100/express-js.png" alt="express-js"/>](https://expressjs.com/en/starter/installing.html)
[<img style="margin:10px;" width="100" height="100" src="https://img.icons8.com/color/100/mongodb.png" alt="mongodb"/>](https://www.mongodb.com/docs/)
[<img style="margin:10px;" width="100" height="100" src="https://img.icons8.com/clouds/100/spiral-bound-booklet.png" >]()


# iNoteBook-Backend

An API that deals with user sign-in and login is a critical component of iNoteBook, which is a cloud Stogage for Messages and Notes, Which requires user authentication and access control. Here's a description of what such an API might include:

### Libraries used:

- Express.js 
- mongoose
- bcrypt.js
- nodemon


## Local Setup

This project does not use vite or create-react-app is the written in javascript user npm and node.js as runtime.

1. clone the repo by this command.
``` bash
    git clone https://github.com/abhinab-choudhury/iNoteBook-Backend.git 
```
2. Navigate into iNoteBook-Backend
``` bash
    cd iNoteBook-Backend 
```
3. install dependencies
``` bash
    npm install
```

# Endpoints

- ```/signup : Endpoint for user registration.```
- ```/signin : Endpoint for user sign-in.```
- ```/signin : Endpoint for user sign-in.```
- ```/signout : Endpoint to log users out and invalidate their session.```
- ```/userInfo : Endpoint to get information about the signed-in user.```
- ```/addnote: Endpoint to add data into database.```
- ```/getallnotes : Endpoint to get notes from signed-in user.``` 
- ```/update : Endpoint to update data into database.```
- ```/delete : Endpoint to delet notes for the signed-in user in database.```
