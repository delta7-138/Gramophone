const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema; 

//User schema

const UserSchema = new Schema({
    name : String, 
    email : mongoose.SchemaTypes.email, 
    password : String 
}); 


module.exports = mongoose.model("User" , UserSchema); 