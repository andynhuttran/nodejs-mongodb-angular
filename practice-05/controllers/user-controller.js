const userRepository = require('../repo/user-repository');

function getUsers(req, res){
    setImmediate(getUserHelper, req, res);
}

function getUserHelper(request, response){
    userRepository.getUsers(10, (data) => {        
        let json = JSON.stringify(data);

        response.links({
            a: 'https://randomuser.me/api/?page=3&results=10&seed=abc',
            b: 'https://randomuser.me/api/?inc=gender,name,nat',
            c: 'https://randomuser.me/api/?exc=login'
        });

        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(json);
        response.end();
    });
}


module.exports = {getUsers};