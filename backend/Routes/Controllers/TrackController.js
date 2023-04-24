const Track = require("../../Schemas/Track.js")

const getTracks = ((req , res) => {
    Track.find({})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getTracksByName = ((req , res) => {
    Track.find({name : req.params.name})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getTracksByArtistName = ((req , res) => {
    Track.find({artist_name : req.params.artist_name})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getTracksByAlbumName = ((req , res) => {
    Track.find({album_name : req.params.album_name})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 


module.exports = {
    getTracks, 
    getTracksByName, 
    getTracksByArtistName, 
    getTracksByAlbumName
}; 