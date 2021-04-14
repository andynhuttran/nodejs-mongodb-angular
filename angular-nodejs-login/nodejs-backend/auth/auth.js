const express = require('express');
const userService = require('../utils/userRepository');
const jwt = require('../utils/jwt');

const router = express.Router();

router.post("/login", async (req, res) => {

    const [_, base64Credentials] =  req.headers.authorization.split(' ');
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    
    userService.authenticate(username, password, (userNoPwd) => {
        if (!userNoPwd) {
            return res.status(401).json({ message: 'Invalid Authentication Credentials' });
        }
        else {
            jwt.getToken(userNoPwd, (err, token) => {
                if (err) {
                    res.status(500).json(err);
                }
                else {
                    res.json({ token: token});
                }
            });
        }
    });

});

router.post("/logout", (req, res) => {
    res.json({msg: "logout"});
});

router.get("/api/protected", authen, (req, res) => {
    res.json({msg: "You are amazing!!!"});
});


function authen(req, res, next){

    if (!req.headers.authorization){
        res.status(401).json({msg: "invalid token"});
        return next(false);
    }

    const [type, token] =  req.headers.authorization.split(' ');

    if (type !== 'Bearer'){
        invalid(res);
    }
    else {
        jwt.verify(token, (err, decoded) => {
            if (err) {
                res.status(401).json({msg: "invalid token"});                
            }
            else {
                return next();
            }
        });
    }
}

module.exports = {router};