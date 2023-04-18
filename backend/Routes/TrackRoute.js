const express = require("express"); 

const TrackRouter = express.Router(); 

const  {
    getTracks, 
    getTracksByName, 
    getTracksByArtistName, 
    getTracksByAlbumName
} = require("./Controllers/TrackController.js"); 

