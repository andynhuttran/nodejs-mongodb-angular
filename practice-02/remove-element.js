//1. Explain why do we want sometimes to use setImmediate 
//instead of using setTimeout?
    //setImmediate will always be executed before any timers 
    //if scheduled within an I/O cycle, 
    //independently of how many timers are present.

//2. Explain the difference between process.nextTick and setImmediate?
    // process.nextTick put a task to next Tick queue
    // setImmediate put a task to check queue
    // "next Tick queue" is higher priority than "check queue"

//3. Name 10 core modules that Node provides by default.
    //assert, buffer, child_process, dns, 
    //domain, events, http, https
    //net, os, stream


Array.prototype.pluck = function(n){
    let promise = new Promise((resolve) => {
        let arr = this;
        resolve(arr);
    });

    promise.then((arr) => {   
        removeArray(arr, n-1); 
        console.log(arr);      
    });
}

function removeArray(arr, idx){
    arr.splice(idx, 1);    
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');