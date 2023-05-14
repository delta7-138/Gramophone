const express = require("express"); 
const {upload} = require("./Controllers/upload")

const TrackRouter = express.Router(); 

const  {
    getTracksForUser, 
    getTracks, 
    getTracksByName, 
    getTracksByArtistName, 
    getTracksByAlbumName, 
    createTrack, 
    downloadTrack
} = require("./Controllers/TrackController.js"); 

TrackRouter.get("/usertracks" , getTracksForUser)
TrackRouter.get("/all/" , getTracks); 
TrackRouter.get("/findByAlbum" , getTracksByAlbumName) //mention album name in the request body
TrackRouter.get("/findByArtist" , getTracksByArtistName) //mention artist name in the request body
TrackRouter.get("/findByName" , getTracksByName) //mention Track name in reqeust body 
TrackRouter.post("/createTrack" , upload.fields([
    {name : 'track' , maxCount : 1}, 
    {name : 'cover' , maxCount : 1}
]) , createTrack)
TrackRouter.post("/downloadTrack" , downloadTrack)


module.exports = {TrackRouter}