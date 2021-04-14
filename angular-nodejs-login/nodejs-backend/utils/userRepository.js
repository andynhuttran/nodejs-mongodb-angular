const bcrypt = require('bcrypt');
const e = require('express');

const saltRounds = 10;
const users = [];


function generateUsers(){    

    for (let c = 0; c < 3; ++c){
        let uid = String.fromCharCode(c + 97);

        let displayName = "Mr. " + uid;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(uid, salt);            
        let pwd = hash;
        user = {uid, pwd, displayName};
        users.push(user);
    }
        
}

function authenticate(uid, plainTextPwd, callback){         
    setImmediate(() => {
        for (let user of users){
            if (user.uid === uid && bcrypt.compareSync(plainTextPwd, user.pwd)){
                let {pwd, ...userNoPwd} = user;
                console.log(userNoPwd);
                callback(userNoPwd);
                return;
            }
        }
        callback(null);
    });


}

function displayUser(){
    users.forEach(user => {
        console.log(`${user.uid} - ${user.pwd} - ${user.displayName}`);
    });
}


generateUsers();

module.exports = {authenticate, displayUser};
