// JavaScript – Conditional Statements

// 1. Using if Statement
let x = 21;

if (x % 2 === 0) {
    console.log("Even");
}

if (x % 2 !== 0) {
    console.log("Odd");
};

// 2 Using if-else Statement
let age = 25;

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Not an Adult")
};

// 3. else if Statement
const p = 0 ;

if (p > 0) {
    console.log("Positive.");
} else if (x < 0) {
    console.log("Negative.");
} else {
    console.log("Zero.");
};

// 4. Using Switch Statement (JavaScript Switch Case)

const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}

console.log(`Student Branch name is : ${Branch}`);

// 5. Using Ternary Operator ( ?: )
let ages = 21;

const result =
    (ages >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote.";

console.log(result);


// 6. Nested if…else
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
    if (temperature > 30) {
        console.log("It's a hot day!");
    } else if (temperature > 20) {
        console.log("It's a warm day.");
    } else {
        console.log("It's a bit cool today.");
    }
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else {
    console.log("Check the weather forecast!");
};