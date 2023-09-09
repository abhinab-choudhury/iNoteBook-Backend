
[<img style="margin:10px;" width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" >](https://nodejs.org/en/docs)
[<img style="margin:10px;" width="100" height="100" src="https://img.icons8.com/nolan/100/express-js.png" alt="express-js"/>](https://expressjs.com/en/starter/installing.html)
[<img style="margin:10px;" width="100" height="100" src="https://img.icons8.com/color/100/mongodb.png" alt="mongodb"/>](https://www.mongodb.com/docs/)
[<img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/100/external-nodemon-process-will-automatically-restart-when-your-code-changes-logo-green-tal-revivo.png" alt="external-nodemon-process-will-automatically-restart-when-your-code-changes-logo-green-tal-revivo"/>](https://nodemon.io/)
[<img style="margin:10px;" width="100" height="100" src="https://img.icons8.com/clouds/100/spiral-bound-booklet.png" >](https://github.com/abhinab-choudhury/iNoteBook)



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
4. start the mongdb server
   > **_NOTE:_** If you areusing Linux
   > Install [mongDB, MongoDB Shell](https://www.mongodb.com/) and
   > then run
   > ```
   >    sudo systemctl status mongod
   > ```
   > to stop, run
   > ```
   >    sudo systemctl stop mongod
   > ```
   > to check weather it is running or not, run
   > ```
   >    sudo systemctl status mongod
   > ```
   >
   > Now you can start the server and start using mongoDB Shell
   > to tun MongoDB Shell in CLI, run
   > ```
   >     mongosh
   > ```
   
5. start the server 
``` bash
   nodemon index.js
```

# Endpoints

- ```/signup : Endpoint for user registration.```
- ```/signin : Endpoint for user sign-in.```
- ```/signin : Endpoint for user sign-in.```
- ```/signout : Endpoint to log users out and invalidate their session.```
- ```/userInfo : Endpoint to get information about the signed-in user.```
- ```/add_note: Endpoint to add data into database.```
- ```/get_all_notes : Endpoint to get notes from signed-in user.``` 
- ```/update_note : Endpoint to update data into database.```
- ```/delete_note : Endpoint to delet notes for the signed-in user in database.```


source:
<a  href="https://icons8.com"></a> icon by <a href="https://icons8.com">Icons8</a> and some other sources  in internet
