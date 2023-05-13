require('dotenv').config(); 

const express = require("express"); 
const bodyParser = require('body-parser')
const mongoose = require("mongoose"); 
const cors = require("cors"); 
const database_uri = process.env.CONNECTION_URI; 


const app = express(); 
mongoose.connect(database_uri); 
const database = mongoose.connection; 

//connect database 
database.on('error' , (error) => {
    console.log(error)
}); 


database.once('connected' , (connected) => {
    console.log('Database connected'); 
}); 

//setup express middleware 
app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser.urlencoded({
    extended: true
  }));

const {UserRouter} = require("./Routes/UserRoute"); 
const {TrackRouter} = require("./Routes/TrackRoute"); 
const {AlbumRouter} = require("./Routes/AlbumRoute"); 
const Album = require('./Schemas/Album');

app.use('/api/users/' , UserRouter); 
app.use('/api/tracks/' , TrackRouter);  
app.use('/api/albums/' , AlbumRouter)

app.listen(5000 , () =>{
    console.log("Server listening on 5000")
}); 





app.listen(5000 , () =>{
    console.log("Server listening on 5000")
}); 

