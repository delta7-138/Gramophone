<<<<<<< HEAD
require('dotenv').config(); 

const express = require("express"); 
=======
/**
 * TODO : 
 * 
 * EPOCH ONE 
 * 1. Setup routing
 * 2. Setup unit testing using mocha
 * 3. Setup Github CI
 * 4. JWT authentication, user registering and login (USER CREATION)
 * 
 * EPOCH TWO    
 * 1. Adding Uploading and Streaming capabilities (TRACK CREATION)
 * 2. Playlist/Album creation (ALBUM CREATION)
 * 3. Adding Searching capabilities
 * 
 * EPOCH THREE
 * Deployment 
 */


require('dotenv').config(); 

const express = require("express"); 
const bodyParser = require('body-parser')
>>>>>>> 72541625aa79d4e6069f471486a3a8fae69e4cd4
const mongoose = require("mongoose"); 
const database_uri = process.env.CONNECTION_URI; 

const app = express(); 
mongoose.connect(database_uri); 
const database = mongoose.connection; 

<<<<<<< HEAD
=======


>>>>>>> 72541625aa79d4e6069f471486a3a8fae69e4cd4
//connect database 
database.on('error' , (error) => {
    console.log(error)
}); 

database.once('connected' , (connected) => {
    console.log('Database connected')
}); 

//setup express middleware 
app.use(express.json()); 
<<<<<<< HEAD
=======
app.use(bodyParser.urlencoded({
    extended: true
  }));


const {UserRouter} = require("./Routes/UserRoute"); 
app.use('/api/users/' , UserRouter); 
>>>>>>> 72541625aa79d4e6069f471486a3a8fae69e4cd4

app.listen(3000 , () =>{
    console.log("Server listening on 3000")
}); 
<<<<<<< HEAD
=======


>>>>>>> 72541625aa79d4e6069f471486a3a8fae69e4cd4
