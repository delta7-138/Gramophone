const express = require('express');
const {upload} = require('./Controllers/upload')
const AlbumRouter = express.Router(); 

const {
    createAlbum, 
    getAlbumsForUser
} = require('./Controllers/AlbumController.js'); 


AlbumRouter.get('/useralbums' , getAlbumsForUser)
AlbumRouter.post('/createAlbum' , upload.single('cover') , createAlbum); 

//more routers for accessing dashboard with jwt token
//require jwt token to upload track/playlist/album as well
//difference between album and playlist is you can upload tracks in albums

module.exports = {AlbumRouter}; 