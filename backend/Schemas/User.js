const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema; 

//User schema

const UserSchema = new Schema({
    name : String, 
    email : {type : String, index : {unique : true , dropDups : true}},  
    password : String 
}); 


module.exports = mongoose.model("User" , UserSchema); 