const User = require("../../Schemas/User.js")

const getUsers = ((req , res) => {
    User.find({})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getUserByEmail = ((req , res) => {
    User.findOne({email : req.params.email})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

const getUsersByName = ((req , res) => {
    User.find({name : req.params.name})
    .then(result => res.status(200).json({result}))
    .catch(err => res.status(500).json({err}))
}); 

module.exports = {
    getUsers, 
    getUserByEmail, 
    getUsersByName, 
}; 




