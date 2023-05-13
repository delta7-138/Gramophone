const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

//array of track ids
const AlbumSchema = new Schema({
    name : String, 
    UPC : String, 
    tracks : [Schema.Types.ObjectId], 
    num_tracks : Number, 
    album_type : String, //playlist only for now otherwise album
    user_name : String, 
    user_id : Schema.Types.ObjectId, 
    albumcover : String, 
    albumcover_type : String, 
    private_flag : Boolean
}); 

module.exports = mongoose.model("Album" , AlbumSchema); 


