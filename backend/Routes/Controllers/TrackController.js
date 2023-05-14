const Track = require("../../Schemas/Track.js");
const User = require("../../Schemas/User.js");
const {verifyToken} = require("./Validate")
const mongoose = require("mongoose")
const mongodb = require('mongodb');
const database_uri = process.env.CONNECTION_URI; 


const getTracksForUser = ((req , res) => {
    verifyToken(req.body.accessToken)
    .then(token => {
        User.findById(token.id)
        .then(user => {
            Track.find({artist_id : user.id})
            .then(tracks => {
                res.status(200).json(tracks)
            })
            .catch(err => {
                res.status(500).json({
                    message : "Cannot find any tracks", 
                    error : err
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                message : "Cannot find a user refresh the token", 
                error : err
            })
        })
    })
    .catch(err => {
        res.status(500).json({
            message : "Invalid token", 
            error : err
        })
    })
})

const getTracks = ((_ , res) => {
    Track.find({})
    .then(result => res.status(200).json({
        name : result.name, 
        album_name : result.album_name, 
        artist_name : result.artist_name
    }))
    .catch(err => res.status(500).json({err}))
}); 

const getTracksByName = ((req , res) => {
    Track.find({name : req.params.name})
    .then(result => res.status(200).json({
        name : result.name, 
        album_name : result.album_name, 
        artist_name : result.artist_name
    }))
    .catch(err => res.status(500).json({err}))
}); 

const getTracksByArtistName = ((req , res) => {
    Track.find({artist_name : req.params.artist_name})
    .then(result => res.status(200).json({
        name : result.name, 
        album_name : result.album_name, 
        artist_name : result.artist_name
    }))
    .catch(err => res.status(500).json({err}))
}); 

const getTracksByAlbumName = ((req , res) => {
    Track.find({album_name : req.params.album_name})
    .then(result => res.status(200).json({
        name : result.name, 
        album_name : result.album_name, 
        artist_name : result.artist_name
    }))
    .catch(err => res.status(500).json({err}))
}); 

const createTrack = ((req , res) => {
    verifyToken(req.body.accessToken)
    .then(token_id => {
        User.findById(token_id.id)
        .then(user => {
            res.set({
                "Content-Disposition" : req.files.track[0].filename
            })
            console.log(user)
            // console.log(req.files.track[0])
            // console.log(req.files.cover[0])
            Track.create({
                name : req.body.name, 
                UPC : "", 
                album_id : null,
                album_name : req.body.name,  
                artist_id : user._id, 
                artist_name : user.name, 
                filename : req.files.track[0].filename, 
                mimeType : req.files.track[0].mimetype, 
                trackcover_type : req.files.cover[0].mimetype, 
                trackcover : req.files.cover[0].filename
            })
            .then(track => {
                
                res.status(200).json(track)
            })
            .catch(err => {
                res.status(500).json({
                    message : "Could not create track", 
                    error : err
                })
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message : "user does not exist or token expired", 
                error : err
            })
        })
    })
    .catch(err => {
        res.status(500).json({
            message : "Token verification failed", 
            error : err
        })
    })
    
})

const downloadTrack = ((req , res) => {
    verifyToken(req.body.accessToken)
    .then(tok => {
        console.log(tok.id)
        User.findOne({id : tok.id})
        .then(_ => {
            Track.findById({name : req.body.id})
            .then(track => {
                mongoose.connect(database_uri)
                let bucket = new mongodb.GridFSBucket(mongoose.connection , {
                    bucketName : 'fs'
                }) 
                console.log(track.mimeType)
                res.status(200)
                res.set({
                    "Content-Type" : track.mimeType, 
                    "Transfer-Encoding" : "chunked"
                })
                console.log(track)
                console.log(track.filename)
                console.log(bucket)
                bucket.openDownloadStreamByName(track.filename).
                    pipe(res).
                    on('error', function(error) {
                        console.log(error)
                        res.status(500).json(error)
                    }).
                    on('end', function() {
                        console.log('done!');
                    });
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    message : "Error in downloading song", 
                    error : err
                })
            })
        })
        .catch(err => {
            res.status(500).send({
                message : "please login again", 
                error : err
            })
        })
    })
    .catch(err => {
        console.log(req.body.accessToken)
        res.status(500).send({
            message : "user does not exist or token expired please login", 
            error : err
        })
    })
})


module.exports = {
    getTracksForUser, 
    getTracks, 
    getTracksByName, 
    getTracksByArtistName, 
    getTracksByAlbumName, 
    createTrack, 
    downloadTrack
}; 