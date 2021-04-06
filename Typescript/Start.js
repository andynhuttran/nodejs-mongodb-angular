console.log("Hello world - Typescript");
//function
function greet(person, date) {
    console.log(`Hello: ${person} at ${date.toDateString()}`);
}
greet("Andy", new Date());
//function with object
function funcObject(pt) {
    console.log(`X: ${pt.x}, Y: ${pt.y}`);
}
funcObject({ x: 1, y: 5 });
//function with optional
function funcOptional(name) {
    console.log(`Firstname: ${name.first}`);
    console.log(`Lastname: ${name.last}`);
}
funcOptional({ first: "Andy" });
funcOptional({ first: "Andy", last: "Cole" });
