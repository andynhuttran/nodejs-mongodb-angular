//import all module
const myModule = require('./my-modules');
//use exported modules
console.log(myModule.x);

myModule.x = {x : 5};
console.log(myModule.x);

//distructor, get hi only from my-modules
const {x, hi:hello} = require('./my-modules');
hello();

console.log(x);
