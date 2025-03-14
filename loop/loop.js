// loop in JS
// while loop
// do loop
// for loop
// for each loop  using for  Array
// for in loop using for object 


// 1. JavaScript while Loop
// while (condition) {
//     // Code to execute
// }

let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}

// 2. JavaScript do-while Loop
// do {
//     // Code to execute
// } while (condition);

let m = 0;
do {
    console.log("Iteration:", m);
    i++;
} while (i < 3);

// 3 JavaScript for Loop
// for (initialization; condition; increment/decrement) {
//     // Code to execute
// }

for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

// 4. JavaScript for-in Loop
// for (let key in object) {
//     // Code to execute
// }

const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}


// 5. JavaScript for-of Loop
// for (let value of iterable) {
//     // Code to execute
// }



let a = [1, 2, 3, 4, 5];
for (let val of a) {
    console.log(val);
}

// Basic iteration to print array elements on console.
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});

// For Loop within Another For Loop
// for (let i = 0; i < outerLimit; i++) {
//     for (let j = 0; j < innerLimit; j++) {
//         // Code to execute
//     }
// }

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
};