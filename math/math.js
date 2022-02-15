// ---------- MATH ----------
// document.write outputs data to the browser
document.write("20 + 4 = ", 20 + 4, "<br/>");
 
// Using + instead of , will treat everything as a string unless you use ()
document.write("20 + 4 = " + (20 + 4) + "<br/>");
 
document.write("1 - 4 = ", 1 - 4, "<br/>");
document.write("78 * 48 = ", 78 * 48, "<br/>");
document.write("5 / 4 = ", 5 / 4, "<br/>");
document.write("40 % 4 = ", 40 % 4, "<br/>");
document.write("5 ** 4 = ", 5 ** 4, "<br/>");

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

var maxNum = Number.MAX_VALUE;
 
document.write("Max Num = ", maxNum, "<br/>"); //maximum number that we can hold
document.write("Min Num = ", Number.MIN_VALUE, "<br/>"); //minimum number that we can hold

// Round number to 2 decimal places
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />"); //first divided balance by 12 after that rounded it
// to 2 decimal places 
 
var randNum = 5;
 
// Shortcut for adding 1
document.write("randNum++ = ", randNum++, "<br/>"); //After assigning the value to the variable, the value is incremented that's why
// output is 5
document.write("++randNum = ", ++randNum, "<br/>"); //Before assigning the value to the variable, the value is incremented by one.
//that's why output is 7 because first value 5+1 = 6 run then 6 + 1 = 7
 
// The same exists for -
document.write("randNum-- = ", randNum--, "<br/>");
document.write("--randNum = ", --randNum, "<br/>");

// Perform a calculation on a value and assign the result
document.write("randNum += 5 = ", randNum += 5, "<br/>"); // shortcut of randNum = randNum + 5
// similarly for others
document.write("randNum -= 5 = ", randNum -= 5, "<br/>"); 
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");
 
// Math properties and methods
document.write("Math.E = ", Math.E, "<br/>"); // returns Euler's number
document.write("Math.PI = ", Math.PI, "<br/>"); // returns PI
document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>"); //Math.abs(x) returns the absolute (positive) value of a number
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>"); //	Returns the cubic root of a number
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>"); // returns the value of x rounded up to its nearest integer
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>"); //returns the value of x rounded down to its nearest integer
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>"); //returns the nearest integer
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>"); //returns maximum of 2 numbers
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>"); //returns minimum of 2 numbers
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>"); //returns power of 4 to 2
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>"); //returns square root of a number
 
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>"); // to print random number from 1 to 10
// if you change 10 to 100 then it will print random number from 1 to 100 got my point
 
// Convert strings to numbers
document.write("Converted String : ", Number("3.14"), "<br />");
 
document.write("Converted Int : ", parseInt("5"), "<br />"); //The parseInt() function parses a string argument 
//and returns an integer of the specified radix (the base in mathematical numeral systems).

document.write("Converted Float : ", parseFloat("5.555"), "<br />"); //The parseFloat() function parses an argument 
//(converting it to a string first if needed) and returns a floating point number.