require('dotenv').config(); 

const express = require("express"); 
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

app.listen(3000 , () =>{
    console.log("Server listening on 3000")
}); 
