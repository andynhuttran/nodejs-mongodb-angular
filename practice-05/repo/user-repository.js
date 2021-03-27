const superagent = require('superagent');
const { from } = require('rxjs');
const { map } = require('rxjs/operators');

async function getUsers(num = 10, callback) {
    let endPoint = `https://randomuser.me/api/?results=${num}`;

    let response = await superagent.get(endPoint);    

    var arr = [];
    from(response.body.results)
        .pipe(
            map((person) => {
                return  { 
                        firstname: person.name.first,
                        lastname: person.name.last
                    };
            })
        )
        .subscribe(
            (obj) => {
                arr.push(obj);                
            }
        );
    callback(arr);
}

module.exports = {getUsers};