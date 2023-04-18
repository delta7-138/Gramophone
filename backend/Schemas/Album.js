const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

//array of track ids
const AlbumSchema = new Schema({
    name : String, 
    UPC : String, 
    tracks : [Schema.Types.ObjectId], 
    num_tracks : Number, 
    album_type : String, 
    artist_name : String, 
    artist_id : Schema.Types.ObjectId
}); 

module.exports = mongoose.model("Album" , AlbumSchema); 


