const express = require('express'); 

const UserRouter = express.Router(); 

const {
    getUsers, 
    getUserByEmail, 
    getUsersByName, 
    createUser, 
    loginUser, 
    jwtSignIn
} = require('./Controllers/UserController.js'); 


UserRouter.get('/all' , getUsers); 
UserRouter.get('/email' , getUserByEmail); 
UserRouter.get('/name' , getUsersByName); 
UserRouter.post('/signUp' , createUser); 
UserRouter.post('/login' , loginUser); 
UserRouter.post('/jwtSignIn' , jwtSignIn); 

//more routers for accessing dashboard with jwt token
//require jwt token to upload track/playlist/album as well
//difference between album and playlist is you can upload tracks in albums

module.exports = {UserRouter}; 