const express = require('express'); 

const UserRouter = express.Router(); 

const {
    getUsers, 
    getUserByEmail, 
    getUsersByName, 
    createUser, 
    loginUser
} = require('./Controllers/UserController.js'); 


UserRouter.get('/all' , getUsers); 
UserRouter.get('/email' , getUserByEmail); 
UserRouter.get('/name' , getUsersByName); 
UserRouter.post('/signUp' , createUser); 
UserRouter.post('/login' , loginUser); 


module.exports = {UserRouter}; 