class Plant {
    private _age: number = 0;

    get age(){
        return this._age;
    }

    set age(value: number){
        this._age = (value > 0)?value: 0;
    }
}

let plant = new Plant();
plant.age = 10;
console.log(plant.age);

/////////////////
//function type//
/////////////////
let sumTwo : (a: number, b: number) => number;

sumTwo = function(a, b) {
    return a+b;
};

console.log(typeof sumTwo);

let result = sumTwo(1, 2);
console.log("result: " + result);
