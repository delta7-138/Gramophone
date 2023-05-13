const User = require("../../Schemas/User.js")
const jwt = require("jsonwebtoken"); 
const {verifyToken} = require("./Validate.js"); 

require('dotenv').config()

const getUsers = ((req , res) => {
    User.find({})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getUserByEmail = ((req , res) => {
    User.findOne({email : req.body.email})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getUsersByName = ((req , res) => {
    User.find({name : req.body.name})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 


const createUser = ((req , res) => {
    User.create({
        name : req.body.name,
        email : req.body.email, 
        password : req.body.password,
    })
    .then(user => {
        var token = jwt.sign({id : user.id} , process.env.jwt_config, {
            expiresIn: 86400,
        }); 

        res.status(200).json({
            id : user._id, 
            username : user.name,
            email : user.email, 
            acessToken : token
        })
    })
    .catch(err => res.status(500).json({err}))
});


const loginUser = ((req , res) => {
    User.findOne({
        email : req.body.email, 
        password : req.body.password
    })
    .then(user => {
        var token = jwt.sign({id : user.id} , process.env.jwt_config, {
            expiresIn: 86400,
        }); 
        

        res.status(200).json({
            id : user._id, 
            username : user.name, 
            email : user.email, 
            accessToken : token
        });     
    })
    .catch(err => res.status(500).json({err}))
}); 

const jwtSignIn = ((req , res) => {
    verifyToken(req.body.accessToken)
    .then(token_id => {
        console.log(token_id.id)
        User.findById(token_id.id)
        .then(user => {
            res.status(200).json({
                id : user._id, 
                username : user.name, 
                email : user.email, 
                accessToken : req.body.accessToken
            })
        })
        .catch(err => {
            res.status(500).json({
                message : "user not found",
                error : err
            })
        })
    })

    .catch(err => {
        res.status(500).json({err})
    })
})

module.exports = {
    getUsers, 
    getUserByEmail, 
    getUsersByName, 
    createUser, 
    loginUser, 
    jwtSignIn
}; 




