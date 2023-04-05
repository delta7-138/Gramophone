const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const TrackSchema = new Schema({
    name : String, 
    UPC : String, 
    album_id : Schema.Types.ObjectId, 
}); 

module.exports = mongoose.model("Track" , TrackSchema); 


