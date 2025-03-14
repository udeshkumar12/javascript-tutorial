// JavaScript Arithmetic Operators
// Arithmetic operators are used to perform arithmetic operations on the operands. The following operators are known as JavaScript arithmetic operators.

// Operator	Description	Example
// +	Addition	10+20 = 30
// -	Subtraction	20-10 = 10
// *	Multiplication	10*20 = 200
// /	Division	20/10 = 2
// %	Modulus (Remainder)	20%10 = 0
// ++	Increment	var a=10; a++; Now a = 11
// --	Decrement	var a=10; a--; Now a = 9

/*  Addition Arithmetic Operators */
var a = 10;
var b = 10;
var c = a + b;
console.log(c);

/* Subtraction Arithmetic Operators */
var m = 10;
var n = 5;
var o = m - n;
console.log(o);

/* Multiplication Arithmetic Operators */
var p = 10;
var q = 10;
var r = a * b;
console.log(r);

/* Exponentiation Arithmetic Operators */
var d = 10;
var e = 3;
var f = d ** e;
console.log(f);

/* Division Arithmetic Operators */
var s = 14;
var t = 2;
var w = s / t;
console.log(w);

/* Modulus(Remainder) Arithmetic Operators */
var x = 14;
var y = 2;
var z = a % b;
console.log(z);

/* Increment Arithmetic Operators */
var i = 10;
var j = 3;
console.log(i + j);
i++;
console.log(i + j);

/* Decrement Arithmetic Operators */
var g = 10;
var h = 3;
console.log(g + h);
g--;
console.log(g + h);

// JavaScript assignment operator is equal (=) which assigns the value of the right-hand operand to its left-hand operand.
//  That is if a = b assigns the value of b to a.

/*  Equalto Assignment Operators */
var m = 10;
var n = 3;
o = m + n;
console.log(o);

/*  Addition Assignment Operators */
var a = 10;
var b = 3;
a += b;
console.log(a);

/* Subtraction Assignment Operators */
var m = 10;
var n = 3;
m -= n;
console.log(m);

/* Multiplication Assignment Operators */
var p = 10;
var q = 3;
p *= q;
console.log(p);

/* Exponentiation Assignment Operators */
var d = 10;
var e = 3;
d **= e;
console.log(d);

/* Division Assignment Operators */
var s = 10;
var t = 3;
s /= t;
console.log(s);

/* Modulus(Remainder) Assignment Operators */
var x = 10;
var y = 3;
x %= y;
console.log(x);

// JavaScript Comparison Operators list:
//  There are so many comparison operators as shown in
//  the table with the description.

// Equality Operator	a==b	Compares the equality of two operators
// Inequality Operator	a!=b	Compares inequality of two operators
// Strict Equality Operator	a===b	Compares both value and type of the operand
// Strict Inequality Operator	a!==b	Compares inequality with type
// Greater than Operator	a>b	Checks if the left operator is greater than the right operator
// Greater than or equal Operator 	a>=b	Checks if the left operator is greater than or equal to the right operator
// Less than Operator	a<b	Checks if the left operator is smaller than the right operator
// Less than or equal Operator	a<=b	Checks if the left operator is smaller than or equal to the right operator

/* Equal to Comparison Operators */
var a = 10;
var b = 20;
console.log(a == b);

/* Equal value and equal type Comparison Operators */
var c = 10;
var d = "10";
console.log(a === b);

/* Not Equal Comparison Operators */
var e = 2;
var f = 3;
console.log(e != f);

/* Not Equal value or not equal type Comparison Operators */
var g = 2;
var h = "2";
console.log(g !== h);

/* Greater Than Comparison Operators */
var i = 2;
var j = 4;
console.log(i > j);

/* Less Than Comparison Operators */
var m = 10;
var n = 20;
console.log(m > n);

/* Greater Than or Equal To Comparison Operators */
var p = 10;
var q = 20;
console.log(p >= q);

/* Less Than or Equal To Comparison Operators */
var x = 20;
var y = 20;
console.log(x <= y);

// Logical Operators in JavaScript
// The following are the logical operators supported by JavaScript:

// Operator	Name	Example
// &&	Logical And	( a< 5 && b>2)
// ||	Logical Or	(a<5 || b>2)
// !	Not	(a!=5)
/* Logical And Operator */
var age = 18;

if (age >= 18 && age <= 21) {
  console.log("Yes you are eligible.");
}

/* Logical OR Operator */
var a = 10;
var b = 15;
if (a >= 8 || b <= 15) {
  console.log("Yes you are eligible.");
}

/* Logical Not Operator */
var x = 30;

console.log(!x >= 12);


// List of Bitwise Operators with Explanation
// 1. Bitwise AND Operator ( & )

let ab = 5; 
let bc  = 3; 
console.log(ab  & bc );

// 2. Bitwise OR Operator ( | )

let cd= 5; 
let de = 3; 
console.log(cd | de);

// 3. Bitwise XOR Operator ( ^ )
let ef = 5; 
let fg = 3; 
console.log(ef ^ fg);

// 4. Bitwise NOT Operator ( ~ )

console.log(~10); 
console.log(~-10);
