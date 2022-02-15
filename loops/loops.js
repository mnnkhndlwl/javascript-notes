// ---------- LOOPING ----------
 //Loops can execute a block of code a number of times.

// while loop executes the code inside it as long as condition is true
var i = 1;
while (i <= 10){ //checking condition it will first check condition after that it will execute code inside it
  document.write(i, ", ");
  i++;
}
document.write("<br />");
 
// do while is used when you must go through the loop at least once
do{
  var guess = prompt("Guess a number between 1 and 20");
}while(guess != 15) //checking condition after executing code inside it atleast one time
 
alert("You guessed it! 15 was the number");

// <-----------------------FOR LOOP ------------------------------------------------------>
 
// for is a self contained looping structure
//The for loop has the following syntax:
//for (statement 1; statement 2; statement 3) {
    // code block to be executed
// }
// Statement 1 is executed (one time) before the execution of the code block.
//Statement 2 defines the condition for executing the code block.
//Statement 3 is executed (every time) after the code block has been executed.

for(j = 0; j <= 20; j++){
  // If j is divisible by 2 then skip back to the top of the loop
  if((j % 2) == 0){
    continue;
  }
  // If j is equal to 15 break completely out of the loop
  if(j == 15){
    break;  // break stops for loop and controls gets out of the loop
  }
  document.write(j, ", ");
}

document.write("<br />");
 
var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50}; // key-value pair
 
// for in cycles through an enumerable properties of an object
for(k in customer){
  document.write(customer[k], "<br />");
}
 