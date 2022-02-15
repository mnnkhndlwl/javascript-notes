//Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

//There are multiple different types of conditionals in JavaScript including:

//“If” statements: where if a condition is true it is used to specify execution for a block of code.
//“Else” statements: where if the same condition is false it specifies the execution for a block of code.
//“Else if” statements: this specifies a new test if the first condition is false.

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// &&	logical and  and needs both consitions to be true
// ||	logical or   or needs only one condition to be true
// !	logical not

var age = 8;
 
if ((age >= 5) && (age <= 6)){  
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}
 
document.write("true || false = ", true || false, "<br />");
 
document.write("!true = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />"); //checks for only value
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />"); //checks for both value and type
 
// Switch is used to match a limited number of options
switch(age) {
  case 5 :
  case 6 :
    document.write("Go to Kindergarten<br />");
    break;
 
  case 7 :
    document.write("Go to 1st Grade<br />");
    break;
 
  default :
    document.write("Subtract 5 from your age<br />");
}
 
// Ternary Operator assigns a value based on a condition
// (condition) ? if true : if False
var canIVote = (age >= 18) ? true : false;
 
document.write("Can I Vote : ", canIVote, "<br />");