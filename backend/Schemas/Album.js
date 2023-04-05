const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

//array of track ids
const AlbumSchema = new Schema({
    name : String, 
    UPC : String, 
    tracks : [mongoose.Types.ObjectId], 
    num_tracks : Number, 
    album_type : String 
}); 

module.exports = mongoose.model("Album" , AlbumSchema); 


