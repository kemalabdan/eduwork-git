var input = process.argv.slice(2);

let a = parseInt(input[0]);
let b = parseInt(input[1]);

a = a + b;
b = a - b;
a = a - b;

console.log("a = " + a);
console.log("b = " + b);