const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema; 

//User schema

const UserSchema = new Schema({
    name : String, 
    email : {type : String, index : {unique : true , dropDups : true}},  
    password : String, 
    playlists : [Schema.Types.ObjectId], //array of album ids
    songs_uploaded : [Schema.Types.ObjectId] // array of song ids 
}); 


module.exports = mongoose.model("User" , UserSchema); 