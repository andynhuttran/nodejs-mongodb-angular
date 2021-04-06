class Plant {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = (value > 0) ? value : 0;
    }
}
let plant = new Plant();
plant.age = 10;
console.log(plant.age);
/////////////////
//function type//
/////////////////
let sumTwo;
sumTwo = function (a, b) {
    return a + b;
};
console.log(typeof sumTwo);
let result = sumTwo(1, 2);
console.log("result: " + result);
