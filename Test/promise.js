//promise is syn, except resolve, reject

// console.log("Start");
// let result = new Promise((resolve, reject) => {
//     console.log("Start promise");
//     resolve("Call resolve");
//     console.log("End promise");
// });

// result.then(console.log);
// console.log("End");

//Start
//Start promise
//End promise
//End
//Call resolve
//////////////////////////
console.log("---------------");

const promise = new Promise((resolve, reject) => {
    console.log("In promise 1");
    // setTimeout(
    //     () => resolve("Promise result"),
    //     100
    // );
    resolve("Promise result");
    console.log("In promise 2");
});

console.log("Code start");

promise.then((result) => {
    console.log(result);
});

console.log("I love JS");

/**
 * ---------
 * Code start
 * promise 1
 * promise 2
 * I love JS
 * Promise result
 */
