const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const TrackSchema = new Schema({
    name : String, 
    UPC : String, 
    album_id : Schema.Types.ObjectId,
    album_name : String,  
    artist_id : Schema.Types.ObjectId, 
    artist_name : String, 
    mimeType : String, 
    filename : String, 
    trackcover_type : String, //trackcover mimeType
    trackcover : String //filename to track image
}); 

module.exports = mongoose.model("Track" , TrackSchema); 


