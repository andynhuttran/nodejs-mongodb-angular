let promise = new Promise(resolve => resolve("Promise"));

setTimeout(() => console.log("Set timeout"), 0);

console.log("A");

promise.then(console.log);

console.log("B")