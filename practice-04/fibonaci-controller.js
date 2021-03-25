const utils = require('./lib/utils');

function calculateFibo(n){
    let first = 1;
    let second = 1;
    if (n == 1 || n == 2) return second;

    let res = 0;
    for (let i = 3; i <= n; ++i){
        res = first + second;
        first = second;
        second = res;
    }
    return res;
}

//listen event from parent
process.on('message', (n) => {

    let error = null;
    let obj = {};
    obj.status_code = 200;
    if (n < 0 || isNaN(n)){
        obj.error = `n = ${n} is not accepted`;
        obj.detail = `Should be a positive number`;
        obj.status_code = 400; //bad request
    }
    else {
        obj.fib = calculateFibo(n);         
    }
    obj.time_stamp = utils.getCurrentTime();

    process.send(obj); //send back to parent
    process.exit(1);
});

