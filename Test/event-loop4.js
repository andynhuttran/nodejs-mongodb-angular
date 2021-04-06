
console.log("Start");

queueMicrotask(() => console.log('microtask 1'));
queueMicrotask(() => console.log('microtask 2'));

setTimeout(() => console.log('timeout 1'), 0);
setTimeout(() => console.log('timeout 2'), 0);

setImmediate(() => console.log('immediate 1'));
setImmediate(() => console.log('immediate 2'));

process.nextTick(() => console.log('nexttick 1'));
process.nextTick(() => console.log('nexttick 2'));

(() => new Promise((resolve) => resolve('promise 1')))()
			.then((p) => console.log(p));

(() => new Promise((resolve) => resolve('promise 2')))()
			.then((p) => console.log(p));

console.log("End");


/*
nexttick
promise
microtask
immediate
timeout
*/