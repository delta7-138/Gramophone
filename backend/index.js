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
const mongoose = require("mongoose"); 
const database_uri = process.env.CONNECTION_URI; 

const app = express(); 
mongoose.connect(database_uri); 
const database = mongoose.connection; 



//connect database 
database.on('error' , (error) => {
    console.log(error)
}); 

database.once('connected' , (connected) => {
    console.log('Database connected')
}); 

//setup express middleware 
app.use(express.json()); 
app.use(bodyParser.urlencoded({
    extended: true
  }));


const {UserRouter} = require("./Routes/UserRoute"); 
app.use('/api/users/' , UserRouter); 

app.listen(3000 , () =>{
    console.log("Server listening on 3000")
}); 


