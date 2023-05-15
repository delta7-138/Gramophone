const User = require("./../../Schemas/User")
const Album = require("./../../Schemas/Album")
const {verifyToken} = require('./Validate')
const mongoose = require("mongoose")


const createAlbum = ((req , res) => {
    verifyToken(req.body.accessToken)
    .then(token => 
        User.findById(token.id)
        .then(user => {
            console.log(user)

            let trackIDlist = []
            for (var i = 0; i<req.body.tracks.length; i++)
            {
                trackIDlist.push(new mongoose.mongo.ObjectId(req.body.tracks[i]))
            }

            Album.create({
                name : req.body.name, 
                UPC : "", 
                tracks : trackIDlist, 
                num_tracks : trackIDlist.length, 
                user_name : user.name, 
                user_id : user.id,
                albumcover : req.file.filename, 
                albumcover_type : req.file.mimetype, 
                private_flag : false
            })
            .then(album => {
                res.status(200).json(album)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    )
    .catch(err => res.status(500).json({
        message : "Token expired", 
        error : err
    }))
})


const getAlbumsForUser = ((req , res) => {
    verifyToken(req.body.accessToken)
    .then(token => {
        User.findById(token.id)
        .then(user => {
            Album.find({user_id : user.id})
            .then(albums => {
                res.status(200).json(albums)
            })
            .catch(err => {
                res.status(500).json({
                    message : "Cannot find any albums", 
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

module.exports = {createAlbum , getAlbumsForUser}