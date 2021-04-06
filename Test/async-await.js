// async function abc(){
//     let promise = await new Promise(resolve => resolve(true));
//     console.log(promise);
// }

// console.log("Start");
// abc();
// console.log("End");

async function myFunc() {
    const result = await fakePromise();
    console.log('result');
}
myFunc().then(_ => console.log);
console.log('finish');

function fakePromise() {
    console.log('fake');
}