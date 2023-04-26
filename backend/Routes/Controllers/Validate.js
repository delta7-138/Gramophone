const jwt = require("jsonwebtoken"); 
const jwt_token = process.env.jwt_config; 

const verifyToken = ((token) => {
    var promise = new Promise((resolve,reject) =>
       jwt.verify(token,jwt_token,(err,decoded) => err ? reject({}) : 
                                                   resolve(decoded))
    );

    return promise; 
}); 

module.exports = {verifyToken}