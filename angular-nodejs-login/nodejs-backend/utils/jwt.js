const jwt = require('jsonwebtoken')

var privateKey = 'mwa-202104';

function getToken(data, callback){
    setImmediate(() => {
        jwt.sign(data, privateKey, callback);
    });
}

function verify(token, callback){
    setImmediate(() => {
        jwt.verify(token, privateKey, callback);
    });
}

module.exports = {getToken, verify};