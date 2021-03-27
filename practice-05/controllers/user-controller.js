const userRepository = require('../repo/user-repository');
const { Readable } = require("stream")


function getUsers(req, res){
    setImmediate(getUserHelper, req, res);
}

function getUserHelper(request, response){
    setHeader(response);

    userRepository.getUsers(5000, (data) => {
        let json = JSON.stringify(data);
        Readable.from(json).pipe(response);
    });
}

function setHeader(response){
    response.links({
        a: 'https://randomuser.me/api/?page=3&results=10&seed=abc',
        b: 'https://randomuser.me/api/?inc=gender,name,nat',
        c: 'https://randomuser.me/api/?exc=login'
    });
    response.writeHead(200, {"Content-Type": "application/json"});
}


module.exports = {getUsers};