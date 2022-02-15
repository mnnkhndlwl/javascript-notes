let yourname = prompt("what is your name?");  // You create variables that store values with var
// Prompt opens a popup that requests info

if(yourname != null) // // If performs different actions depending on conditions
{
    document.getElementById("hello").innerHTML="HELLO "+yourname; // Set text in an HTML element with the id hello
    // You concatenate (combine) strings with +
}
else{
    alert("kripya name dale");  //// Alert opens a popup that contains a message
}

// ---------- VARIABLES ----------
//Variables are containers for storing data (storing data values).
// variable names can't start with a number, contain spaces, but can
// contain letters, numbers, underscores or $ (Are case sensitive) for example :- yourAge and yourage both are different
//Always declare JavaScript variables with var,let, or const.
//If you want a general rule: always declare variables with const.
//If you think the value of the variable can change, use let.
//
