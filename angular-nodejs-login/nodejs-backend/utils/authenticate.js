const jwt = require('./jwt');
const express = require('express');

const router = express.Router();

router.get('/protected', (req, res, next) => {

});

function authen(req, res, next){
    const [type, token] =  req.headers.authorization.split(' ');

    if (type !== 'Bearer'){
        invalid(res);
    }
    else {
        jwt.verify(token, (err, decoded) => {
            if (err) {
                res.status(401).json({msg: "invalid token"});
                return next(false);
            }
            else {
                next();
            }
        });
    }
}


module.exports = {router}