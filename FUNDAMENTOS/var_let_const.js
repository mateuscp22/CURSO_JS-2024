var a = 3;
let b = 4;
const c = 5; // const is used to declare constants. A constant variable cannot be reassigned.
// let and const are local scope, whereas var is function scoped.

var a = 30;
b = 40;

console.group(a, b);

a = 300;
b = 400;

console.log(a, b);
console.log(c);

console.log(0.1 + 0.7)