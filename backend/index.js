require('dotenv').config(); 

// const express = require("express"); 
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
const cors = require("cors")
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
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept"
    // );
    next();
  });

// var corsOptions = {
//     origin: 'https://localhost:5000',
//     optionsSuccessStatus: 200 // For legacy browser support
// }
app.use(cors())
app.use(express.json()); 
app.use(bodyParser.urlencoded({
    extended: true
  }));


const {UserRouter} = require("./Routes/UserRoute"); 
app.use('/api/users/' , UserRouter); 

app.listen(5000 , () =>{
    console.log("Server listening on 5000")
}); 
