//   1  Function Declaration (Normal Function)

function greet() {
  console.log("Hello World");
}

greet();

//   2  Function with Parameters & Arguments

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);

//  3 Function Expression

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5));

//  4 Arrow Function (ES6)

const subtract = (a, b) => {
  return a - b;
};

//  7 Default Parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("Udesh");

